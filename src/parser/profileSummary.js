// Profile summary reader for USERDATA10
// Reads character names, levels, and play time from the save file's
// profile summary section (the "load game" screen data).

const USERDATA10_DATA_OFFSET = 0x19003B0
const ACTIVE_SLOTS_OFFSET = 0x1954    // offset within USERDATA10 to active flags
const PROFILE_START_OFFSET = 0x195E   // offset within USERDATA10 to first profile entry
const PROFILE_ENTRY_SIZE = 0x24C      // 588 bytes per profile entry
const NAME_MAX_CHARS = 16             // 16 UTF-16LE characters (32 bytes)
const NUM_SLOTS = 10

/**
 * Read the profile summary from an Elden Ring .sl2 file buffer.
 *
 * Returns an array of 10 profile objects, one per save slot:
 *   { active: boolean, name: string, level: number, secondsPlayed: number }
 *
 * @param {ArrayBuffer} buffer - The full .sl2 file contents
 * @returns {Array<{active: boolean, name: string, level: number, secondsPlayed: number}>}
 */
export function readProfileSummary(buffer) {
  const view = new DataView(buffer)
  const profiles = []

  for (let i = 0; i < NUM_SLOTS; i++) {
    // Check if slot is active (1 byte per slot, nonzero = active)
    const activeAddr = USERDATA10_DATA_OFFSET + ACTIVE_SLOTS_OFFSET + i
    const active = view.getUint8(activeAddr) !== 0

    if (!active) {
      profiles.push({ active: false, name: '', level: 0, secondsPlayed: 0 })
      continue
    }

    const profileBase = USERDATA10_DATA_OFFSET + PROFILE_START_OFFSET + i * PROFILE_ENTRY_SIZE

    // Read name: 32 bytes of UTF-16LE (16 chars max), null-terminated
    const nameChars = []
    for (let j = 0; j < NAME_MAX_CHARS; j++) {
      const charCode = view.getUint16(profileBase + j * 2, true)
      if (charCode === 0) break
      nameChars.push(charCode)
    }
    const name = String.fromCharCode(...nameChars)

    // Level is a u32 at offset +0x22 from profile entry start
    const level = view.getUint32(profileBase + 0x22, true)

    // Seconds played is a u32 at offset +0x26 from profile entry start
    const secondsPlayed = view.getUint32(profileBase + 0x26, true)

    profiles.push({ active, name, level, secondsPlayed })
  }

  return profiles
}
