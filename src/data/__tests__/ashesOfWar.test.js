import { describe, it, expect } from 'vitest'
import { ASHES_OF_WAR, ASH_OF_WAR_CATEGORIES } from '../ashesOfWar'

describe('Ashes of War Data', () => {
  it('should have at least 80 ashes of war', () => {
    expect(ASHES_OF_WAR.length).toBeGreaterThanOrEqual(80)
  })

  it('should have all unique IDs', () => {
    const ids = ASHES_OF_WAR.map(a => a.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('all categories should be valid', () => {
    for (const ash of ASHES_OF_WAR) {
      expect(ASH_OF_WAR_CATEGORIES).toContain(ash.category)
    }
  })

  it('should have both DLC and base game ashes', () => {
    const baseCount = ASHES_OF_WAR.filter(a => a.dlc === false).length
    const dlcCount = ASHES_OF_WAR.filter(a => a.dlc === true).length
    expect(baseCount).toBeGreaterThan(50)
    expect(dlcCount).toBeGreaterThan(10)
  })

  it('all entries should have required fields', () => {
    for (const ash of ASHES_OF_WAR) {
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

  it('all names should start with "Ash of War:" prefix', () => {
    for (const ash of ASHES_OF_WAR) {
      expect(ash.name).toMatch(/^Ash of War: /)
    }
  })

  it('all names should be non-empty strings', () => {
    for (const ash of ASHES_OF_WAR) {
      expect(ash.name.length).toBeGreaterThan(0)
    }
  })

  it('should have expected category count', () => {
    expect(ASH_OF_WAR_CATEGORIES.length).toBe(14)
  })

  it('should include key iconic ashes of war', () => {
    const lionsGrasp = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Lion\'s Claw')
    expect(lionsGrasp).toBeDefined()
    expect(lionsGrasp.category).toBe('Heavy')
    expect(lionsGrasp.dlc).toBe(false)

    const bloodhound = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Bloodhound\'s Step')
    expect(bloodhound).toBeDefined()
    expect(bloodhound.category).toBe('Keen')
    expect(bloodhound.dlc).toBe(false)

    const seppuku = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Seppuku')
    expect(seppuku).toBeDefined()
    expect(seppuku.category).toBe('Blood')
    expect(seppuku.dlc).toBe(false)
  })

  it('should include DLC ashes of war', () => {
    const dryleaf = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Dryleaf Whirlwind')
    expect(dryleaf).toBeDefined()
    expect(dryleaf.dlc).toBe(true)

    const savageLion = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Savage Lion\'s Claw')
    expect(savageLion).toBeDefined()
    expect(savageLion.dlc).toBe(true)

    const blinkbolt = ASHES_OF_WAR.find(a => a.name === 'Ash of War: Blinkbolt')
    expect(blinkbolt).toBeDefined()
    expect(blinkbolt.dlc).toBe(true)
  })

  it('should have expected total count of 116 ashes', () => {
    expect(ASHES_OF_WAR.length).toBe(116)
  })

  it('should have 91 base game and 25 DLC ashes', () => {
    const baseCount = ASHES_OF_WAR.filter(a => a.dlc === false).length
    const dlcCount = ASHES_OF_WAR.filter(a => a.dlc === true).length
    expect(baseCount).toBe(91)
    expect(dlcCount).toBe(25)
  })

  it('all IDs should be positive integers', () => {
    for (const ash of ASHES_OF_WAR) {
      expect(ash.id).toBeGreaterThan(0)
      expect(Number.isInteger(ash.id)).toBe(true)
    }
  })
})
