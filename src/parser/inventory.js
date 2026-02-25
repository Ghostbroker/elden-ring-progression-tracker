/**
 * Inventory parser for Elden Ring save files.
 *
 * Locates the inventory section within a character slot's binary data
 * by searching for the "Unarmed" anchor pattern, then parses inventory
 * entries to extract a Set of owned item IDs.
 *
 * Binary layout (discovered via real save analysis):
 *   - The "Unarmed" anchor is the byte sequence [B0 AD 01 00 01].
 *   - In pre-DLC saves the anchor may be followed by [FF FF FF] (8-byte standard anchor).
 *   - In DLC-era saves the anchor is followed by [00 00 00] (3-byte padding).
 *   - In both cases, inventory entries begin 8 bytes after the anchor start.
 *   - Each entry is 8 bytes: [item_id uint32 LE] [quantity/flags uint32 LE].
 *   - Empty slots have item_id = 0.
 */

const SEARCH_START = 30_000
const SEARCH_END = 195_000
const MAX_ENTRIES = 2048
const ENTRY_SIZE = 8

// "Unarmed" item anchor — present in every character's inventory.
// Standard anchor (8 bytes) — used first:
const STANDARD_ANCHOR = [0xB0, 0xAD, 0x01, 0x00, 0x01, 0xFF, 0xFF, 0xFF]
// DLC-era anchor (5 bytes) — shorter fallback; the remaining 3 bytes are 0x00 padding:
const DLC_ANCHOR = [0xB0, 0xAD, 0x01, 0x00, 0x01]

/**
 * Search for a byte pattern within a subrange of data.
 *
 * @param {Uint8Array} data
 * @param {number[]} pattern
 * @param {number} start
 * @param {number} end
 * @returns {number} index of the first match, or -1 if not found
 */
function findPattern(data, pattern, start, end) {
  const limit = Math.min(end, data.length) - pattern.length
  outer:
  for (let i = start; i <= limit; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (data[i + j] !== pattern[j]) continue outer
    }
    return i
  }
  return -1
}

/**
 * Read a uint32 little-endian from a Uint8Array at the given offset.
 *
 * @param {Uint8Array} data
 * @param {number} offset
 * @returns {number}
 */
function readUint32LE(data, offset) {
  return (
    data[offset] |
    (data[offset + 1] << 8) |
    (data[offset + 2] << 16) |
    ((data[offset + 3] << 24) >>> 0)  // >>> 0 to keep unsigned
  )
}

// Item type prefixes used in save file inventory entries.
// The save stores: prefix | param_id. We strip the prefix to get the raw param ID.
const TYPE_WEAPON     = 0x00000000
const TYPE_PROTECTOR  = 0x10000000
const TYPE_ACCESSORY  = 0x20000000
const TYPE_GOODS      = 0x40000000
const TYPE_MASK       = 0x0FFFFFFF

const KNOWN_PREFIXES = [TYPE_WEAPON, TYPE_PROTECTOR, TYPE_ACCESSORY, TYPE_GOODS]

/**
 * Strip the item type prefix from a save-file inventory ID.
 * Returns the raw param ID, or -1 if the prefix is unrecognized.
 */
function stripTypePrefix(fullId) {
  const prefix = fullId & ~TYPE_MASK  // top bits
  if (!KNOWN_PREFIXES.includes(prefix)) return -1
  return fullId & TYPE_MASK
}

/**
 * Parse inventory entries starting at a given offset.
 *
 * Each entry is 8 bytes: [item_id uint32 LE] [quantity/flags uint32 LE].
 * Entries with item_id = 0 are empty slots and are skipped.
 * The item_id includes a type prefix (weapon/armor/accessory/goods) which
 * is stripped to return raw param IDs matching our data files.
 * Parsing stops after MAX_ENTRIES or when the data runs out.
 *
 * @param {Uint8Array} slotData
 * @param {number} inventoryStart - byte offset where entries begin
 * @returns {Set<number>} Set of item IDs found (raw param IDs, prefix stripped)
 */
function parseEntries(slotData, inventoryStart) {
  const ids = new Set()

  for (let i = 0; i < MAX_ENTRIES; i++) {
    const offset = inventoryStart + i * ENTRY_SIZE
    if (offset + 4 > slotData.length) break

    const fullId = readUint32LE(slotData, offset)

    // Skip empty slots
    if (fullId === 0) continue

    // Strip the type prefix to get the raw param ID
    const paramId = stripTypePrefix(fullId)
    if (paramId <= 0) continue

    ids.add(paramId)
  }

  return ids
}

/**
 * Parse the inventory section from a character slot's binary data.
 *
 * The inventory is located by searching for the "Unarmed" anchor pattern
 * within bytes 30,000–195,000 of the slot data, then parsing 8-byte
 * entries starting 8 bytes after the anchor.
 *
 * @param {Uint8Array} slotData - Raw slot data (0x280000 bytes)
 * @returns {Set<number>} Set of owned item IDs (param IDs)
 */
export function findInventoryInSlot(slotData) {
  // Step 1: Find the anchor pattern
  let anchorIndex = findPattern(slotData, STANDARD_ANCHOR, SEARCH_START, SEARCH_END)

  if (anchorIndex === -1) {
    // Try DLC-era anchor as fallback
    anchorIndex = findPattern(slotData, DLC_ANCHOR, SEARCH_START, SEARCH_END)
  }

  if (anchorIndex === -1) {
    // No anchor found — return empty set
    return new Set()
  }

  // Step 2: Calculate inventory start.
  // Both anchor variants result in entries starting 8 bytes after the anchor start:
  //   Standard: 8-byte anchor + 0 padding = 8 bytes
  //   DLC-era:  5-byte anchor + 3 padding bytes (00 00 00) = 8 bytes
  const inventoryStart = anchorIndex + 8

  // Step 3: Parse 8-byte entries
  return parseEntries(slotData, inventoryStart)
}
