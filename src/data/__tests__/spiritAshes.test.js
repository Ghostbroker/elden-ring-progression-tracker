import { describe, it, expect } from 'vitest'
import { SPIRIT_ASHES, SPIRIT_ASH_CATEGORIES } from '../spiritAshes'

describe('Spirit Ashes Data', () => {
  it('should have at least 50 spirit ashes', () => {
    expect(SPIRIT_ASHES.length).toBeGreaterThanOrEqual(50)
  })

  it('should have all unique IDs', () => {
    const ids = SPIRIT_ASHES.map(s => s.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have both DLC and base game spirit ashes', () => {
    const baseCount = SPIRIT_ASHES.filter(s => s.dlc === false).length
    const dlcCount = SPIRIT_ASHES.filter(s => s.dlc === true).length
    expect(baseCount).toBeGreaterThan(40)
    expect(dlcCount).toBeGreaterThan(10)
  })

  it('all entries should have required fields', () => {
    for (const ash of SPIRIT_ASHES) {
      expect(ash).toHaveProperty('id')
      expect(ash).toHaveProperty('name')
      expect(ash).toHaveProperty('category')
      expect(ash).toHaveProperty('dlc')
      expect(typeof ash.id).toBe('number')
      expect(typeof ash.name).toBe('string')
      expect(typeof ash.category).toBe('string')
      expect(typeof ash.dlc).toBe('boolean')
    }
  })

  it('every spirit ash category should be in SPIRIT_ASH_CATEGORIES', () => {
    for (const ash of SPIRIT_ASHES) {
      expect(SPIRIT_ASH_CATEGORIES).toContain(ash.category)
    }
  })

  it('SPIRIT_ASH_CATEGORIES should contain exactly one category', () => {
    expect(SPIRIT_ASH_CATEGORIES).toEqual(['Spirit Ash'])
  })

  it('all spirit ash names should be non-empty strings', () => {
    for (const ash of SPIRIT_ASHES) {
      expect(ash.name.length).toBeGreaterThan(0)
    }
  })

  it('should include key iconic spirit ashes', () => {
    const mimicTear = SPIRIT_ASHES.find(s => s.name === 'Mimic Tear Ashes')
    expect(mimicTear).toBeDefined()
    expect(mimicTear.dlc).toBe(false)

    const blackKnifeTiche = SPIRIT_ASHES.find(s => s.name === 'Black Knife Tiche')
    expect(blackKnifeTiche).toBeDefined()
    expect(blackKnifeTiche.dlc).toBe(false)

    const loneWolf = SPIRIT_ASHES.find(s => s.name === 'Lone Wolf Ashes')
    expect(loneWolf).toBeDefined()
    expect(loneWolf.dlc).toBe(false)

    const lhutel = SPIRIT_ASHES.find(s => s.name === 'Lhutel the Headless')
    expect(lhutel).toBeDefined()
    expect(lhutel.dlc).toBe(false)
  })

  it('should include DLC spirit ashes', () => {
    const florissax = SPIRIT_ASHES.find(s => s.name === 'Ancient Dragon Florissax')
    expect(florissax).toBeDefined()
    expect(florissax.dlc).toBe(true)

    const hilde = SPIRIT_ASHES.find(s => s.name === 'Fire Knight Hilde')
    expect(hilde).toBeDefined()
    expect(hilde.dlc).toBe(true)

    const meera = SPIRIT_ASHES.find(s => s.name === 'Curseblade Meera')
    expect(meera).toBeDefined()
    expect(meera.dlc).toBe(true)
  })

  it('all IDs should be in the goods param range', () => {
    for (const ash of SPIRIT_ASHES) {
      // Base game spirit ashes: 200000–263000
      // DLC spirit ashes: 2200000–2220000
      expect(ash.id).toBeGreaterThanOrEqual(200000)
      expect(ash.id).toBeLessThanOrEqual(2300000)
    }
  })

  it('should have expected total count (64 base + 20 DLC)', () => {
    const baseCount = SPIRIT_ASHES.filter(s => s.dlc === false).length
    const dlcCount = SPIRIT_ASHES.filter(s => s.dlc === true).length
    expect(baseCount).toBe(64)
    expect(dlcCount).toBe(20)
    expect(SPIRIT_ASHES.length).toBe(84)
  })
})
