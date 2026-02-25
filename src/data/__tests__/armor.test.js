import { describe, it, expect } from 'vitest'
import { ARMOR, ARMOR_CATEGORIES } from '../armor'

describe('Armor Data', () => {
  it('should have at least 350 armor pieces', () => {
    expect(ARMOR.length).toBeGreaterThanOrEqual(350)
  })

  it('should have all required fields for each armor piece', () => {
    for (const armor of ARMOR) {
      expect(armor).toHaveProperty('id')
      expect(armor).toHaveProperty('name')
      expect(armor).toHaveProperty('category')
      expect(armor).toHaveProperty('dlc')
      expect(typeof armor.id).toBe('number')
      expect(typeof armor.name).toBe('string')
      expect(typeof armor.category).toBe('string')
      expect(typeof armor.dlc).toBe('boolean')
    }
  })

  it('should have all unique IDs', () => {
    const ids = ARMOR.map(a => a.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every armor category should be in ARMOR_CATEGORIES', () => {
    for (const armor of ARMOR) {
      expect(ARMOR_CATEGORIES).toContain(armor.category)
    }
  })

  it('should have both DLC and base game armor', () => {
    const baseCount = ARMOR.filter(a => a.dlc === false).length
    const dlcCount = ARMOR.filter(a => a.dlc === true).length
    expect(baseCount).toBeGreaterThan(200)
    expect(dlcCount).toBeGreaterThan(50)
  })

  it('should have entries in all 4 categories', () => {
    for (const cat of ARMOR_CATEGORIES) {
      const count = ARMOR.filter(a => a.category === cat).length
      expect(count).toBeGreaterThan(0)
    }
  })

  it('all armor names should be non-empty strings', () => {
    for (const armor of ARMOR) {
      expect(armor.name.length).toBeGreaterThan(0)
    }
  })

  it('ARMOR_CATEGORIES should have exactly 4 categories', () => {
    expect(ARMOR_CATEGORIES).toEqual(['Head', 'Body', 'Arms', 'Legs'])
  })

  it('should include key iconic armor pieces', () => {
    const bullGoatHelm = ARMOR.find(a => a.name === 'Bull-Goat Helm')
    expect(bullGoatHelm).toBeDefined()
    expect(bullGoatHelm.category).toBe('Head')
    expect(bullGoatHelm.dlc).toBe(false)

    const maleniaArmor = ARMOR.find(a => a.name === "Malenia's Armor")
    expect(maleniaArmor).toBeDefined()
    expect(maleniaArmor.category).toBe('Body')
    expect(maleniaArmor.dlc).toBe(false)

    const veteranHelm = ARMOR.find(a => a.name === "Veteran's Helm")
    expect(veteranHelm).toBeDefined()
    expect(veteranHelm.category).toBe('Head')
    expect(veteranHelm.dlc).toBe(false)
  })

  it('should include DLC armor pieces', () => {
    const messmersHelm = ARMOR.find(a => a.name === "Messmer's Helm")
    expect(messmersHelm).toBeDefined()
    expect(messmersHelm.category).toBe('Head')
    expect(messmersHelm.dlc).toBe(true)

    const fireKnightArmor = ARMOR.find(a => a.name === 'Fire Knight Armor')
    expect(fireKnightArmor).toBeDefined()
    expect(fireKnightArmor.category).toBe('Body')
    expect(fireKnightArmor.dlc).toBe(true)

    const rakshasa = ARMOR.find(a => a.name === 'Rakshasa Helm')
    expect(rakshasa).toBeDefined()
    expect(rakshasa.dlc).toBe(true)
  })

  it('should not include any altered armor variants', () => {
    const altered = ARMOR.filter(a => a.name.includes('(Altered)'))
    expect(altered.length).toBe(0)
  })

  it('should not include Deathbed Smalls (unobtainable)', () => {
    const deathbedSmalls = ARMOR.find(a => a.name === 'Deathbed Smalls')
    expect(deathbedSmalls).toBeUndefined()
  })

  it('all IDs should be positive numbers', () => {
    for (const armor of ARMOR) {
      expect(armor.id).toBeGreaterThan(0)
    }
  })

  it('base game armor IDs should be in expected range', () => {
    const baseArmor = ARMOR.filter(a => !a.dlc)
    for (const armor of baseArmor) {
      expect(armor.id).toBeGreaterThanOrEqual(40000)
      expect(armor.id).toBeLessThan(3000000)
    }
  })

  it('DLC armor IDs should be >= 3000000', () => {
    const dlcArmor = ARMOR.filter(a => a.dlc)
    for (const armor of dlcArmor) {
      expect(armor.id).toBeGreaterThanOrEqual(3000000)
    }
  })
})
