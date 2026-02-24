import { describe, it, expect } from 'vitest'
import { parseBND4Header, getSlotOffsets } from '../sl2Parser'

describe('BND4 Header Parser', () => {
  it('should parse magic bytes and entry count from valid header', () => {
    const buffer = new ArrayBuffer(64)
    const view = new DataView(buffer)
    // "BND4" magic
    view.setUint8(0, 0x42); view.setUint8(1, 0x4E)
    view.setUint8(2, 0x44); view.setUint8(3, 0x34)
    // entry count = 12 at offset 0x0C
    view.setUint32(0x0C, 12, true)
    const header = parseBND4Header(buffer)
    expect(header.magic).toBe('BND4')
    expect(header.entryCount).toBe(12)
  })

  it('should reject non-BND4 files', () => {
    const buffer = new ArrayBuffer(64)
    expect(() => parseBND4Header(buffer)).toThrow('Not a valid BND4 file')
  })

  it('should return correct slot offsets', () => {
    const offsets = getSlotOffsets()
    expect(offsets).toHaveLength(10)
    expect(offsets[0].data).toBe(0x310)
    expect(offsets[0].checksum).toBe(0x300)
    expect(offsets[0].size).toBe(0x280000)
    expect(offsets[1].data).toBe(0x280320)
    expect(offsets[1].checksum).toBe(0x280310)
    // Verify stride is consistent
    expect(offsets[1].data - offsets[0].data).toBe(0x280010)
  })
})
