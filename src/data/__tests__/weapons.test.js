import { describe, it, expect } from 'vitest'
import { WEAPONS, WEAPON_CATEGORIES } from '../weapons'

describe('Weapon Data', () => {
  it('should have at least 250 weapons', () => {
    expect(WEAPONS.length).toBeGreaterThanOrEqual(250)
  })

  it('should have all required fields for each weapon', () => {
    for (const weapon of WEAPONS) {
      expect(weapon).toHaveProperty('id')
      expect(weapon).toHaveProperty('name')
      expect(weapon).toHaveProperty('category')
      expect(weapon).toHaveProperty('dlc')
      expect(typeof weapon.id).toBe('number')
      expect(typeof weapon.name).toBe('string')
      expect(typeof weapon.category).toBe('string')
      expect(typeof weapon.dlc).toBe('boolean')
    }
  })

  it('should have all unique IDs', () => {
    const ids = WEAPONS.map(w => w.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every weapon category should be in WEAPON_CATEGORIES', () => {
    for (const weapon of WEAPONS) {
      expect(WEAPON_CATEGORIES).toContain(weapon.category)
    }
  })

  it('should have both DLC and base game weapons', () => {
    const baseCount = WEAPONS.filter(w => w.dlc === false).length
    const dlcCount = WEAPONS.filter(w => w.dlc === true).length
    expect(baseCount).toBeGreaterThan(100)
    expect(dlcCount).toBeGreaterThan(50)
  })

  it('all IDs should be in weapon range (>= 1000000)', () => {
    for (const weapon of WEAPONS) {
      expect(weapon.id).toBeGreaterThanOrEqual(1000000)
    }
  })

  it('should include key iconic weapons', () => {
    const moonveil = WEAPONS.find(w => w.name === 'Moonveil')
    expect(moonveil).toBeDefined()
    expect(moonveil.category).toBe('Katana')
    expect(moonveil.dlc).toBe(false)

    const blasphemous = WEAPONS.find(w => w.name === 'Blasphemous Blade')
    expect(blasphemous).toBeDefined()
    expect(blasphemous.category).toBe('Greatsword')

    const rivers = WEAPONS.find(w => w.name === 'Rivers of Blood')
    expect(rivers).toBeDefined()
    expect(rivers.category).toBe('Katana')
  })

  it('should include DLC-only weapon categories', () => {
    const dlcCategories = [
      'Light Greatsword', 'Great Katana', 'Hand-to-Hand Art',
      'Backhand Blade', 'Perfume Bottle', 'Thrusting Shield',
      'Throwing Blade', 'Beast Claw',
    ]
    for (const cat of dlcCategories) {
      const weapons = WEAPONS.filter(w => w.category === cat)
      expect(weapons.length).toBeGreaterThan(0)
      // All weapons in DLC-only categories should be marked dlc: true
      for (const w of weapons) {
        expect(w.dlc).toBe(true)
      }
    }
  })

  it('should include shields, staves, seals, and bows', () => {
    expect(WEAPONS.filter(w => w.category === 'Small Shield').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Medium Shield').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Greatshield').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Staff').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Sacred Seal').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Bow').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Light Bow').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Greatbow').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Crossbow').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Ballista').length).toBeGreaterThan(0)
    expect(WEAPONS.filter(w => w.category === 'Torch').length).toBeGreaterThan(0)
  })

  it('should include DLC weapons added to existing categories', () => {
    // DLC added weapons to many existing categories
    const milady = WEAPONS.find(w => w.name === 'Milady')
    expect(milady).toBeDefined()
    expect(milady.category).toBe('Light Greatsword')
    expect(milady.dlc).toBe(true)

    const mainGauche = WEAPONS.find(w => w.name === 'Main-gauche')
    expect(mainGauche).toBeDefined()
    expect(mainGauche.category).toBe('Dagger')
    expect(mainGauche.dlc).toBe(true)

    const greatKatana = WEAPONS.find(w => w.name === 'Great Katana')
    expect(greatKatana).toBeDefined()
    expect(greatKatana.category).toBe('Great Katana')
    expect(greatKatana.dlc).toBe(true)
  })

  it('all weapon names should be non-empty strings', () => {
    for (const weapon of WEAPONS) {
      expect(weapon.name.length).toBeGreaterThan(0)
    }
  })

  it('WEAPON_CATEGORIES should have expected number of categories', () => {
    expect(WEAPON_CATEGORIES.length).toBe(42)
  })
})
