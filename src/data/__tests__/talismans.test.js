import { describe, it, expect } from 'vitest'
import { TALISMANS, TALISMAN_CATEGORIES } from '../talismans'

describe('Talisman Data', () => {
  it('should have at least 100 talismans', () => {
    expect(TALISMANS.length).toBeGreaterThanOrEqual(100)
  })

  it('should have all required fields for each talisman', () => {
    for (const talisman of TALISMANS) {
      expect(talisman).toHaveProperty('id')
      expect(talisman).toHaveProperty('name')
      expect(talisman).toHaveProperty('category')
      expect(talisman).toHaveProperty('dlc')
      expect(typeof talisman.id).toBe('number')
      expect(typeof talisman.name).toBe('string')
      expect(typeof talisman.category).toBe('string')
      expect(typeof talisman.dlc).toBe('boolean')
    }
  })

  it('should have all unique IDs', () => {
    const ids = TALISMANS.map(t => t.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every talisman category should be in TALISMAN_CATEGORIES', () => {
    for (const talisman of TALISMANS) {
      expect(TALISMAN_CATEGORIES).toContain(talisman.category)
    }
  })

  it('should have both DLC and base game talismans', () => {
    const baseCount = TALISMANS.filter(t => t.dlc === false).length
    const dlcCount = TALISMANS.filter(t => t.dlc === true).length
    expect(baseCount).toBeGreaterThan(80)
    expect(dlcCount).toBeGreaterThan(30)
  })

  it('all IDs should be in accessory range (1000–9999)', () => {
    for (const talisman of TALISMANS) {
      expect(talisman.id).toBeGreaterThanOrEqual(1000)
      expect(talisman.id).toBeLessThanOrEqual(9999)
    }
  })

  it('should include key iconic talismans', () => {
    const erdtree = TALISMANS.find(t => t.name === "Erdtree's Favor")
    expect(erdtree).toBeDefined()
    expect(erdtree.dlc).toBe(false)

    const soreseal = TALISMANS.find(t => t.name === "Radagon's Soreseal")
    expect(soreseal).toBeDefined()
    expect(soreseal.category).toBe('Attribute')

    const alexander = TALISMANS.find(t => t.name === 'Shard of Alexander')
    expect(alexander).toBeDefined()
    expect(alexander.dlc).toBe(false)

    const goldScarab = TALISMANS.find(t => t.name === 'Gold Scarab')
    expect(goldScarab).toBeDefined()
    expect(goldScarab.category).toBe('Rune')
  })

  it('should include DLC talismans', () => {
    const crimson3 = TALISMANS.find(t => t.name === 'Crimson Amber Medallion +3')
    expect(crimson3).toBeDefined()
    expect(crimson3.dlc).toBe(true)
    expect(crimson3.category).toBe('HP')

    const verdigris = TALISMANS.find(t => t.name === 'Verdigris Discus')
    expect(verdigris).toBeDefined()
    expect(verdigris.dlc).toBe(true)

    const twoHeaded = TALISMANS.find(t => t.name === 'Two-Headed Turtle Talisman')
    expect(twoHeaded).toBeDefined()
    expect(twoHeaded.dlc).toBe(true)
    expect(twoHeaded.category).toBe('Stamina')
  })

  it('should include +1/+2/+3 variants as separate entries', () => {
    const crimsonVariants = TALISMANS.filter(t => t.name.startsWith('Crimson Amber Medallion'))
    expect(crimsonVariants.length).toBeGreaterThanOrEqual(4) // base, +1, +2, +3

    const dragoncrest = TALISMANS.filter(t => t.name.startsWith('Dragoncrest Shield Talisman'))
    expect(dragoncrest.length).toBeGreaterThanOrEqual(3) // base, +1, +2
  })

  it('all talisman names should be non-empty strings', () => {
    for (const talisman of TALISMANS) {
      expect(talisman.name.length).toBeGreaterThan(0)
    }
  })

  it('TALISMAN_CATEGORIES should have expected number of categories', () => {
    expect(TALISMAN_CATEGORIES.length).toBe(12)
  })

  it('every category should have at least one talisman', () => {
    for (const cat of TALISMAN_CATEGORIES) {
      const talismans = TALISMANS.filter(t => t.category === cat)
      expect(talismans.length).toBeGreaterThan(0)
    }
  })

  it('base game IDs should match known EquipParamAccessory row IDs', () => {
    // Verify a handful of base-game IDs against the vawser Icon List data
    const known = {
      1000: 'Crimson Amber Medallion',
      1010: 'Cerulean Amber Medallion',
      1040: "Erdtree's Favor",
      1051: "Radagon's Soreseal",
      2000: 'Magic Scorpion Charm',
      3000: 'Graven-School Talisman',
      4000: 'Dragoncrest Shield Talisman',
      5020: 'Blessed Dew Talisman',
      6020: 'Carian Filigreed Crest',
      6110: "Ancestral Spirit's Horn",
    }
    for (const [id, name] of Object.entries(known)) {
      const talisman = TALISMANS.find(t => t.id === Number(id))
      expect(talisman).toBeDefined()
      expect(talisman.name).toBe(name)
    }
  })
})
