import bstText from '../data/eventflag_bst.txt?raw'

const EVENT_FLAGS_SIZE = 0x1BF99F

/**
 * Parse the BST text file into a Map<number, number> mapping
 * block numbers to offset multipliers.
 *
 * The BST file contains 11,920 lines in CSV format: block_number,offset_multiplier
 * This map is used to look up where a given event flag block's data resides
 * within the event flags byte array.
 */
export function loadBstMap() {
  const map = new Map()
  const lines = bstText.split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const commaIdx = trimmed.indexOf(',')
    if (commaIdx === -1) continue
    const block = parseInt(trimmed.substring(0, commaIdx), 10)
    const offset = parseInt(trimmed.substring(commaIdx + 1), 10)
    if (!Number.isNaN(block) && !Number.isNaN(offset)) {
      map.set(block, offset)
    }
  }
  return map
}

/**
 * Check whether a specific event flag is set in the event flags data.
 *
 * Algorithm:
 *   block = floor(eventId / 1000)
 *   index = eventId - block * 1000
 *   offsetMultiplier = bstMap.get(block)
 *   byteOffset = offsetMultiplier * 125
 *   byteIndex = floor(index / 8)
 *   bitIndex = 7 - (index % 8)     // MSB-first bit ordering
 *   pos = byteOffset + byteIndex
 *   flag = (eventFlags[pos] >> bitIndex) & 1
 *
 * @param {Uint8Array} eventFlags - The extracted event flags byte array (0x1BF99F bytes)
 * @param {number} eventId - The event flag ID to check
 * @param {Map<number, number>} bstMap - The BST mapping from loadBstMap()
 * @returns {boolean|undefined} true if flag is set, false if not set, undefined if block not found
 */
export function checkEventFlag(eventFlags, eventId, bstMap) {
  const block = Math.floor(eventId / 1000)
  const index = eventId - block * 1000
  const offsetMultiplier = bstMap.get(block)
  if (offsetMultiplier === undefined) return undefined

  const byteOffset = offsetMultiplier * 125
  const byteIndex = Math.floor(index / 8)
  const bitIndex = 7 - (index % 8)
  const pos = byteOffset + byteIndex

  if (pos < 0 || pos >= eventFlags.length) return undefined

  return ((eventFlags[pos] >> bitIndex) & 1) === 1
}

/**
 * Parse the Gaitem Map at the start of slot data to determine where it ends.
 * The Gaitem Map is variable-length and its size depends on the save version
 * and the handle values of each entry.
 *
 * @param {Uint8Array} slotData - The raw slot data
 * @returns {number} The byte offset immediately after the Gaitem Map
 */
function parseGaitemMapEnd(slotData) {
  const view = new DataView(slotData.buffer, slotData.byteOffset, slotData.byteLength)
  const version = view.getUint32(0, true)

  // Header: version(4) + map_id(4) + unk0x8(8) + unk0x10(16) = 32 bytes
  const headerSize = 32
  const entryCount = version > 81 ? 0x1400 : 0x13FE

  let offset = headerSize
  for (let i = 0; i < entryCount; i++) {
    if (offset + 4 > slotData.length) break
    const handle = view.getUint32(offset, true)
    const topNibble = handle & 0xF0000000

    if (handle === 0) {
      offset += 8
    } else if (topNibble === 0xC0000000) {
      offset += 8
    } else if (topNibble === 0x80000000) {
      offset += 21
    } else {
      offset += 16
    }
  }

  return offset
}

/**
 * Compute the relative byte position and bit index for a given event flag ID.
 *
 * @param {number} eventId - The event flag ID
 * @param {Map<number, number>} bstMap - The BST mapping
 * @returns {{ relPos: number, bitIndex: number } | null}
 */
function flagPosition(eventId, bstMap) {
  const block = Math.floor(eventId / 1000)
  const index = eventId - block * 1000
  const offsetMultiplier = bstMap.get(block)
  if (offsetMultiplier === undefined) return null
  const byteOffset = offsetMultiplier * 125
  const byteIndex = Math.floor(index / 8)
  const bitIndex = 7 - (index % 8)
  return { relPos: byteOffset + byteIndex, bitIndex }
}

/**
 * Locate the event flags section within a character slot's data by scanning
 * for a base offset where known calibration flags and structural constraints
 * produce a unique match.
 *
 * The event flags section is 0x1BF99F bytes long and is located after several
 * variable-length sections (Gaitem Map, PlayerGameData, inventories, etc.)
 * within the slot data. Because the preceding sections have variable length,
 * we cannot compute the offset directly -- instead we scan for it.
 *
 * Strategy (validated by exhaustive calibration against real save data):
 * 1. Parse the Gaitem Map to determine a minimum base offset.
 * 2. Scan for byte positions where the First Step grace flag bit is set.
 * 3. Filter candidates using structural constraints:
 *    - Base must be after the Gaitem Map
 *    - Terminator byte (0x00) must follow the event flags section
 *    - First 125 bytes must contain at least one non-zero byte (block 0 data)
 *    - The 8 bytes after the terminator must contain non-zero data
 * 4. Score remaining candidates using additional grace flags to break ties.
 *
 * @param {Uint8Array} slotData - The raw slot data (0x280000 bytes from sl2Parser)
 * @param {Map<number, number>} bstMap - The BST mapping from loadBstMap()
 * @returns {{ offset: number, eventFlags: Uint8Array }} The offset and extracted event flags
 * @throws {Error} If no valid offset is found
 */
export function findEventFlagsInSlot(slotData, bstMap) {
  const maxBase = slotData.length - EVENT_FLAGS_SIZE

  // Step 1: Determine minimum base offset by parsing the Gaitem Map
  const gaimapEnd = parseGaitemMapEnd(slotData)

  // Step 2: Find all byte positions where the First Step grace (76100) bit is set
  const primary = flagPosition(76100, bstMap)
  if (!primary) {
    throw new Error('First Step grace (76100) block not found in BST map')
  }

  let candidates = []
  for (let bytePos = primary.relPos; bytePos < slotData.length; bytePos++) {
    if ((slotData[bytePos] >> primary.bitIndex) & 1) {
      const base = bytePos - primary.relPos
      if (base > gaimapEnd && base <= maxBase) {
        candidates.push(base)
      }
    }
  }

  // Step 3a: Terminator byte must be 0x00 right after the event flags section
  candidates = candidates.filter(base => {
    const terminatorPos = base + EVENT_FLAGS_SIZE
    return terminatorPos < slotData.length && slotData[terminatorPos] === 0x00
  })

  // Step 3b: First 125 bytes of event flags must have at least one non-zero byte.
  // These bytes correspond to block 0 (general game state flags) which contains
  // flags that are set very early in the game. A candidate in a zero-padded region
  // of the slot data would fail this check.
  candidates = candidates.filter(base => {
    for (let i = 0; i < 125; i++) {
      if (slotData[base + i] !== 0) return true
    }
    return false
  })

  // Step 3c: The 8 bytes after the terminator must contain non-zero data.
  // After event_flags_terminator, the struct continues with field_area_data
  // and other sections that always contain non-zero values.
  candidates = candidates.filter(base => {
    const postTerm = base + EVENT_FLAGS_SIZE + 1
    for (let i = 0; i < 8; i++) {
      if (postTerm + i < slotData.length && slotData[postTerm + i] !== 0) return true
    }
    return false
  })

  if (candidates.length === 0) {
    throw new Error(
      'Could not find event flags section in slot data. ' +
      'The save file may be from a character that has not yet discovered the First Step grace.'
    )
  }

  if (candidates.length === 1) {
    const offset = candidates[0]
    return {
      offset,
      eventFlags: new Uint8Array(slotData.buffer, slotData.byteOffset + offset, EVENT_FLAGS_SIZE),
    }
  }

  // Step 4: Multiple candidates remain -- score them using additional flags.
  // Use well-known early-game grace flags that most characters would have,
  // plus Church of Elleh (the second grace) which is almost universally discovered.
  const scoringFlags = [
    76101,    // Church of Elleh grace
    76110,    // Gatefront grace
    76111,    // Stormhill Shack grace
    76120,    // Warmaster's Shack grace
    76150,    // Agheel Lake South grace
    76200,    // Seaside Ruins grace
    60100,    // Limgrave map discovery
  ]

  const scored = candidates.map(base => {
    let score = 0
    for (const eventId of scoringFlags) {
      const fp = flagPosition(eventId, bstMap)
      if (!fp) continue
      const pos = base + fp.relPos
      if (pos >= 0 && pos < slotData.length) {
        if ((slotData[pos] >> fp.bitIndex) & 1) score++
      }
    }
    return { base, score }
  })

  scored.sort((a, b) => b.score - a.score)
  const best = scored[0].base

  return {
    offset: best,
    eventFlags: new Uint8Array(slotData.buffer, slotData.byteOffset + best, EVENT_FLAGS_SIZE),
  }
}
