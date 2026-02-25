import { describe, it, expect, beforeAll } from 'vitest'
import { findInventoryInSlot } from '../inventory'
import { getSlotOffsets } from '../sl2Parser'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

const SAVE_PATH = resolve(__dirname, '../../../ER0000.sl2')
const hasSaveFile = existsSync(SAVE_PATH)

// Standard anchor: the "Unarmed" item pattern (8 bytes, pre-DLC)
const STANDARD_ANCHOR = [0xB0, 0xAD, 0x01, 0x00, 0x01, 0xFF, 0xFF, 0xFF]
// DLC-era anchor (5 bytes + 3 zero padding)
const DLC_ANCHOR = [0xB0, 0xAD, 0x01, 0x00, 0x01]

/**
 * Helper: write a uint32 LE into a Uint8Array at a given offset.
 */
function writeUint32LE(data, offset, value) {
  data[offset] = value & 0xFF
  data[offset + 1] = (value >> 8) & 0xFF
  data[offset + 2] = (value >> 16) & 0xFF
  data[offset + 3] = (value >> 24) & 0xFF
}

describe('Inventory Parser', () => {
  describe('unit tests (synthetic data)', () => {
    it('should return an empty Set when no anchor is found', () => {
      const slotData = new Uint8Array(200_000)
      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.size).toBe(0)
    })

    it('should parse item IDs with standard anchor and 8-byte entries', () => {
      const slotData = new Uint8Array(200_000)

      // Place standard anchor at byte 50,000 (within search range 30,000–195,000)
      const anchorOffset = 50_000
      for (let i = 0; i < STANDARD_ANCHOR.length; i++) {
        slotData[anchorOffset + i] = STANDARD_ANCHOR[i]
      }

      // Entries start 8 bytes after anchor start (= right after the 8-byte standard anchor)
      const inventoryStart = anchorOffset + 8
      const knownIds = [1_000_000, 2_000_000, 3_000_000, 10_100_000]
      for (let i = 0; i < knownIds.length; i++) {
        const offset = inventoryStart + i * 8
        writeUint32LE(slotData, offset, knownIds[i])
        writeUint32LE(slotData, offset + 4, 1) // quantity = 1
      }

      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.size).toBe(knownIds.length)
      for (const id of knownIds) {
        expect(result.has(id)).toBe(true)
      }
    })

    it('should parse item IDs with DLC-era anchor (5 bytes + 3 padding)', () => {
      const slotData = new Uint8Array(200_000)

      const anchorOffset = 50_000
      // Write the 5-byte DLC anchor
      for (let i = 0; i < DLC_ANCHOR.length; i++) {
        slotData[anchorOffset + i] = DLC_ANCHOR[i]
      }
      // Bytes 5, 6, 7 are already 0x00 (padding) from Uint8Array init

      // Entries start 8 bytes after anchor start
      const inventoryStart = anchorOffset + 8
      const knownIds = [1_000_000, 4_040_000, 7_000_000]
      for (let i = 0; i < knownIds.length; i++) {
        const offset = inventoryStart + i * 8
        writeUint32LE(slotData, offset, knownIds[i])
        writeUint32LE(slotData, offset + 4, 1)
      }

      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.size).toBe(knownIds.length)
      for (const id of knownIds) {
        expect(result.has(id)).toBe(true)
      }
    })

    it('should skip empty slots (ID = 0)', () => {
      const slotData = new Uint8Array(200_000)

      const anchorOffset = 50_000
      for (let i = 0; i < STANDARD_ANCHOR.length; i++) {
        slotData[anchorOffset + i] = STANDARD_ANCHOR[i]
      }

      const inventoryStart = anchorOffset + 8

      // Entry 0: valid ID
      writeUint32LE(slotData, inventoryStart, 1_000_000)
      writeUint32LE(slotData, inventoryStart + 4, 1)

      // Entry 1: zero (empty slot) — already 0 from Uint8Array initialization

      // Entry 2: valid ID
      writeUint32LE(slotData, inventoryStart + 16, 2_000_000)
      writeUint32LE(slotData, inventoryStart + 20, 1)

      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.has(1_000_000)).toBe(true)
      expect(result.has(2_000_000)).toBe(true)
      expect(result.has(0)).toBe(false)
      expect(result.size).toBe(2)
    })

    it('should strip type prefixes from item IDs', () => {
      const slotData = new Uint8Array(200_000)

      const anchorOffset = 50_000
      for (let i = 0; i < STANDARD_ANCHOR.length; i++) {
        slotData[anchorOffset + i] = STANDARD_ANCHOR[i]
      }

      const inventoryStart = anchorOffset + 8

      // Entry 0: weapon (no prefix) — Dagger = 1,000,000
      writeUint32LE(slotData, inventoryStart, 1_000_000)
      writeUint32LE(slotData, inventoryStart + 4, 1)

      // Entry 1: armor (0x10000000 prefix) — param ID 40000
      writeUint32LE(slotData, inventoryStart + 8, 0x10000000 + 40_000)
      writeUint32LE(slotData, inventoryStart + 12, 1)

      // Entry 2: talisman (0x20000000 prefix) — param ID 1000
      writeUint32LE(slotData, inventoryStart + 16, 0x20000000 + 1_000)
      writeUint32LE(slotData, inventoryStart + 20, 1)

      // Entry 3: goods (0x40000000 prefix) — spirit ash param ID 200000
      writeUint32LE(slotData, inventoryStart + 24, 0x40000000 + 200_000)
      writeUint32LE(slotData, inventoryStart + 28, 1)

      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.size).toBe(4)
      expect(result.has(1_000_000)).toBe(true)   // weapon param ID
      expect(result.has(40_000)).toBe(true)       // armor param ID (prefix stripped)
      expect(result.has(1_000)).toBe(true)         // talisman param ID (prefix stripped)
      expect(result.has(200_000)).toBe(true)       // goods param ID (prefix stripped)
    })

    it('should skip IDs with unrecognized prefixes', () => {
      const slotData = new Uint8Array(200_000)

      const anchorOffset = 50_000
      for (let i = 0; i < STANDARD_ANCHOR.length; i++) {
        slotData[anchorOffset + i] = STANDARD_ANCHOR[i]
      }

      const inventoryStart = anchorOffset + 8

      // Entry 0: valid weapon
      writeUint32LE(slotData, inventoryStart, 1_000_000)
      writeUint32LE(slotData, inventoryStart + 4, 1)

      // Entry 1: unrecognized prefix 0x80000000
      writeUint32LE(slotData, inventoryStart + 8, 0x80000000 + 100)
      writeUint32LE(slotData, inventoryStart + 12, 1)

      const result = findInventoryInSlot(slotData)
      expect(result).toBeInstanceOf(Set)
      expect(result.has(1_000_000)).toBe(true)
      expect(result.size).toBe(1)
    })
  })

  describe.skipIf(!hasSaveFile)('real save file tests (slot 0 — Roran)', () => {
    let slotData
    let inventory

    beforeAll(() => {
      const nodeBuf = readFileSync(SAVE_PATH)
      const buffer = nodeBuf.buffer.slice(
        nodeBuf.byteOffset,
        nodeBuf.byteOffset + nodeBuf.byteLength
      )
      const offsets = getSlotOffsets()
      const slot0 = offsets[0]
      slotData = new Uint8Array(buffer, slot0.data, slot0.size)
      inventory = findInventoryInSlot(slotData)
    })

    it('should return a non-empty Set', () => {
      expect(inventory).toBeInstanceOf(Set)
      expect(inventory.size).toBeGreaterThan(0)
      console.log(`Inventory contains ${inventory.size} unique item IDs`)
    })

    it('should contain IDs in the weapon range (1M–54M)', () => {
      // Roran has completed Stormveil Castle and should have weapons
      let hasWeaponRangeId = false
      for (const id of inventory) {
        if (id >= 1_000_000 && id <= 54_000_000) {
          hasWeaponRangeId = true
          break
        }
      }
      expect(hasWeaponRangeId).toBe(true)
    })

    it('should contain armor-range IDs (protector param IDs < 10M)', () => {
      // Roran should have armor equipped — param IDs are in the low range
      const armorIds = [...inventory].filter(id => id >= 10_000 && id < 1_000_000)
      expect(armorIds.length).toBeGreaterThan(0)
    })

    it('should have a reasonable number of items (10–2048)', () => {
      expect(inventory.size).toBeGreaterThanOrEqual(10)
      expect(inventory.size).toBeLessThanOrEqual(2048)
    })

    it('should log sample IDs for manual verification', () => {
      const sample = [...inventory].slice(0, 20)
      console.log('Sample item IDs from Roran (slot 0):')
      for (const id of sample) {
        console.log(`  ${id} (0x${id.toString(16).toUpperCase()})`)
      }
    })
  })
})
