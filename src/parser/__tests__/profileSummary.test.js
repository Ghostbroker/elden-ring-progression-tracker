import { describe, it, expect, beforeAll } from 'vitest'
import { readProfileSummary } from '../profileSummary'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const SAVE_PATH = resolve(__dirname, '../../../ER0000.sl2')
const hasSaveFile = existsSync(SAVE_PATH)

describe.skipIf(!hasSaveFile)('Profile Summary Reader', () => {
  let buffer

  beforeAll(() => {
    // Node.js Buffer may share a pooled ArrayBuffer with a non-zero byteOffset.
    // Copy into a clean ArrayBuffer so DataView offsets are correct.
    const nodeBuf = readFileSync(SAVE_PATH)
    buffer = nodeBuf.buffer.slice(nodeBuf.byteOffset, nodeBuf.byteOffset + nodeBuf.byteLength)
  })

  it('should read character name from slot 0', () => {
    const profiles = readProfileSummary(buffer)
    expect(profiles[0].active).toBe(true)
    expect(profiles[0].name).toBe('Roran')
  })

  it('should read character level from slot 0', () => {
    const profiles = readProfileSummary(buffer)
    expect(profiles[0].level).toBe(37)
  })

  it('should read seconds played from slot 0', () => {
    const profiles = readProfileSummary(buffer)
    expect(profiles[0].secondsPlayed).toBeGreaterThan(0)
  })

  it('should return 10 profiles', () => {
    const profiles = readProfileSummary(buffer)
    expect(profiles).toHaveLength(10)
  })

  it('should mark inactive slots', () => {
    const profiles = readProfileSummary(buffer)
    // At least some slots should be inactive
    const inactiveSlots = profiles.filter(p => !p.active)
    expect(inactiveSlots.length).toBeGreaterThan(0)
  })

  it('should have empty name and zero stats for inactive slots', () => {
    const profiles = readProfileSummary(buffer)
    const inactive = profiles.find(p => !p.active)
    expect(inactive.name).toBe('')
    expect(inactive.level).toBe(0)
    expect(inactive.secondsPlayed).toBe(0)
  })
})
