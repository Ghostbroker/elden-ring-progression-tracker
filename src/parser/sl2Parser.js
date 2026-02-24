const SLOT_DATA_SIZE = 0x280000
const SLOT_STRIDE = 0x280010  // data + 16 byte checksum
const FIRST_SLOT_CHECKSUM = 0x300
const FIRST_SLOT_DATA = 0x310
const USERDATA10_CHECKSUM = 0x19003A0
const USERDATA10_DATA = 0x19003B0
const NUM_SLOTS = 10

export function parseBND4Header(buffer) {
  const view = new DataView(buffer)
  const magic = String.fromCharCode(
    view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3)
  )
  if (magic !== 'BND4') {
    throw new Error('Not a valid BND4 file')
  }
  const entryCount = view.getUint32(0x0C, true)
  return { magic, entryCount }
}

export function getSlotOffsets() {
  const offsets = []
  for (let i = 0; i < NUM_SLOTS; i++) {
    offsets.push({
      checksum: FIRST_SLOT_CHECKSUM + i * SLOT_STRIDE,
      data: FIRST_SLOT_DATA + i * SLOT_STRIDE,
      size: SLOT_DATA_SIZE,
    })
  }
  return offsets
}

export function getProfileSummaryOffset() {
  return USERDATA10_DATA
}
