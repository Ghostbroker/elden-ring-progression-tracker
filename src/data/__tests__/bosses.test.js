import { describe, it, expect } from 'vitest'
import { BOSSES, BOSS_REGIONS } from '../bosses'

describe('Boss Data', () => {
  it('should have all required fields for each boss', () => {
    for (const boss of BOSSES) {
      expect(boss).toHaveProperty('id')
      expect(boss).toHaveProperty('name')
      expect(boss).toHaveProperty('location')
      expect(boss).toHaveProperty('region')
      expect(boss).toHaveProperty('type')
      expect(boss).toHaveProperty('dlc')
      expect(boss).toHaveProperty('wikiUrl')
      expect(typeof boss.id).toBe('number')
      expect(typeof boss.name).toBe('string')
      expect(typeof boss.dlc).toBe('boolean')
      expect(boss.wikiUrl).toMatch(/^https:\/\/eldenring\.wiki\.fextralife\.com\//)
    }
  })

  it('should have at least 100 bosses total', () => {
    expect(BOSSES.length).toBeGreaterThan(100)
  })

  it('should include key remembrance bosses', () => {
    const godrick = BOSSES.find(b => b.id === 10000800)
    expect(godrick).toBeDefined()
    expect(godrick.name).toBe('Godrick the Grafted')

    const malenia = BOSSES.find(b => b.id === 15000800)
    expect(malenia).toBeDefined()

    const radahn = BOSSES.find(b => b.id === 1252380800)
    expect(radahn).toBeDefined()
  })

  it('should have DLC bosses', () => {
    const dlcBosses = BOSSES.filter(b => b.dlc)
    expect(dlcBosses.length).toBeGreaterThan(20)
  })

  it('should have no duplicate IDs', () => {
    const ids = BOSSES.map(b => b.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every boss region should be in BOSS_REGIONS', () => {
    for (const boss of BOSSES) {
      expect(BOSS_REGIONS).toContain(boss.region)
    }
  })

  it('should have valid boss types', () => {
    const validTypes = ['remembrance', 'great', 'legend', 'boss', 'field', 'dungeon']
    for (const boss of BOSSES) {
      expect(validTypes).toContain(boss.type)
    }
  })

  it('should include key DLC bosses', () => {
    const messmer = BOSSES.find(b => b.id === 21010800)
    expect(messmer).toBeDefined()
    expect(messmer.name).toBe('Messmer the Impaler')

    const radahnConsort = BOSSES.find(b => b.id === 20010800)
    expect(radahnConsort).toBeDefined()
    expect(radahnConsort.name).toBe('Radahn, Consort of Miquella')

    const bayle = BOSSES.find(b => b.id === 2054390800)
    expect(bayle).toBeDefined()
    expect(bayle.name).toBe('Bayle the Dread')
  })

  it('should have Elden Beast as the final boss', () => {
    const eldenBeast = BOSSES.find(b => b.id === 19000800)
    expect(eldenBeast).toBeDefined()
    expect(eldenBeast.name).toBe('Elden Beast')
    expect(eldenBeast.type).toBe('remembrance')
  })
})
