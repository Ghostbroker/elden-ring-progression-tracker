import { describe, it, expect, beforeAll } from 'vitest'
import { loadBstMap, checkEventFlag, findEventFlagsInSlot } from '../eventFlags'
import { getSlotOffsets } from '../sl2Parser'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const SAVE_PATH = resolve(__dirname, '../../../ER0000.sl2')
const hasSaveFile = existsSync(SAVE_PATH)

describe('Event Flags Reader', () => {
  let bstMap

  beforeAll(() => {
    bstMap = loadBstMap()
  })

  describe('loadBstMap', () => {
    it('should load over 11,000 entries from the BST file', () => {
      expect(bstMap.size).toBeGreaterThan(11000)
    })

    it('should contain entries with numeric keys and values', () => {
      for (const [key, value] of bstMap) {
        expect(typeof key).toBe('number')
        expect(typeof value).toBe('number')
        expect(Number.isNaN(key)).toBe(false)
        expect(Number.isNaN(value)).toBe(false)
        break // Just check first entry
      }
    })

    it('should contain block 76 (grace flags block)', () => {
      expect(bstMap.has(76)).toBe(true)
      expect(typeof bstMap.get(76)).toBe('number')
    })

    it('should contain block 10000 (Stormveil boss flags block)', () => {
      expect(bstMap.has(10000)).toBe(true)
    })
  })

  describe('checkEventFlag', () => {
    it('should return true when the specified bit is set', () => {
      // Create a small test buffer where we manually set a known bit
      // For event_id=76100: block=76, index=100
      //   offsetMul = bstMap.get(76), byteOff = offsetMul * 125
      //   byteIdx = floor(100/8) = 12, bitIdx = 7 - (100 % 8) = 7 - 4 = 3
      //   pos = offsetMul * 125 + 12
      const offsetMul = bstMap.get(76)
      const pos = offsetMul * 125 + 12
      const eventFlags = new Uint8Array(pos + 1)
      eventFlags[pos] = 0x08 // bit 3 set (1 << 3 = 8)

      expect(checkEventFlag(eventFlags, 76100, bstMap)).toBe(true)
    })

    it('should return false when the specified bit is not set', () => {
      const offsetMul = bstMap.get(76)
      const pos = offsetMul * 125 + 12
      const eventFlags = new Uint8Array(pos + 1)
      eventFlags[pos] = 0x00 // no bits set

      expect(checkEventFlag(eventFlags, 76100, bstMap)).toBe(false)
    })

    it('should return undefined for an unknown event flag block', () => {
      const eventFlags = new Uint8Array(100)
      // Use a block number that definitely does not exist
      expect(checkEventFlag(eventFlags, 99999999, bstMap)).toBeUndefined()
    })

    it('should return undefined when position is out of bounds', () => {
      // Create a tiny buffer that cannot hold the flag position
      const eventFlags = new Uint8Array(10)
      expect(checkEventFlag(eventFlags, 76100, bstMap)).toBeUndefined()
    })

    it('should correctly handle MSB-first bit ordering', () => {
      // Test different bit positions within the same byte
      // block=76: offsetMul * 125 is the byte offset for this block
      // index=96: byteIdx = 12, bitIdx = 7 - (96%8) = 7 - 0 = 7 (MSB)
      // index=97: byteIdx = 12, bitIdx = 7 - (97%8) = 7 - 1 = 6
      // index=103: byteIdx = 12, bitIdx = 7 - (103%8) = 7 - 7 = 0 (LSB)
      const offsetMul = bstMap.get(76)
      const basePos = offsetMul * 125 + 12

      const eventFlags = new Uint8Array(basePos + 1)
      eventFlags[basePos] = 0x80 // only bit 7 (MSB) is set

      // event_id 76096: index=96, bitIdx=7 -> should be set
      expect(checkEventFlag(eventFlags, 76096, bstMap)).toBe(true)
      // event_id 76097: index=97, bitIdx=6 -> should NOT be set
      expect(checkEventFlag(eventFlags, 76097, bstMap)).toBe(false)
      // event_id 76103: index=103, bitIdx=0 -> should NOT be set
      expect(checkEventFlag(eventFlags, 76103, bstMap)).toBe(false)
    })
  })

  describe.skipIf(!hasSaveFile)('findEventFlagsInSlot (with real save file)', () => {
    let slotData
    let result

    beforeAll(() => {
      const nodeBuf = readFileSync(SAVE_PATH)
      const buffer = nodeBuf.buffer.slice(
        nodeBuf.byteOffset,
        nodeBuf.byteOffset + nodeBuf.byteLength
      )
      const offsets = getSlotOffsets()
      const slot0 = offsets[0]
      slotData = new Uint8Array(buffer, slot0.data, slot0.size)
      result = findEventFlagsInSlot(slotData, bstMap)
    })

    it('should find a valid event flags offset', () => {
      expect(result).toBeDefined()
      expect(typeof result.offset).toBe('number')
      expect(result.offset).toBeGreaterThan(0)
      expect(result.offset).toBeLessThan(0x280000)
    })

    it('should return event flags of the correct size', () => {
      expect(result.eventFlags).toBeInstanceOf(Uint8Array)
      expect(result.eventFlags.length).toBe(0x1BF99F)
    })

    it('should find the calibrated offset 0x36d15', () => {
      // This offset was determined by exhaustive byte-level scanning
      // with multiple cross-validated calibration flags
      expect(result.offset).toBe(0x36d15)
    })

    it('should detect First Step grace as discovered', () => {
      const flag = checkEventFlag(result.eventFlags, 76100, bstMap)
      expect(flag).toBe(true)
    })

    it('should detect Church of Elleh grace as discovered', () => {
      const flag = checkEventFlag(result.eventFlags, 76101, bstMap)
      expect(flag).toBe(true)
    })

    it('should detect Gatefront grace as discovered', () => {
      const flag = checkEventFlag(result.eventFlags, 76110, bstMap)
      expect(flag).toBe(true)
    })

    it('should detect Margit the Fell Omen as defeated', () => {
      const flag = checkEventFlag(result.eventFlags, 10000850, bstMap)
      expect(flag).toBe(true)
    })

    it('should detect Godrick the Grafted as defeated', () => {
      const flag = checkEventFlag(result.eventFlags, 10000800, bstMap)
      expect(flag).toBe(true)
    })

    it('should detect Radahn Consort of Miquella (DLC final boss) as NOT defeated', () => {
      const flag = checkEventFlag(result.eventFlags, 20010800, bstMap)
      expect(flag).toBe(false)
    })

    it('should detect Messmer the Impaler (DLC) as NOT defeated', () => {
      const flag = checkEventFlag(result.eventFlags, 20000800, bstMap)
      expect(flag).toBe(false)
    })

    it('should have the terminator byte as 0x00 after event flags', () => {
      const terminatorPos = result.offset + 0x1BF99F
      expect(slotData[terminatorPos]).toBe(0x00)
    })
  })
})
