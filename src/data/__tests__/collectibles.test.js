import { describe, it, expect } from 'vitest'
import { COOKBOOKS, PAINTINGS, WHETBLADES, GESTURES, COLLECTIBLE_REGIONS } from '../collectibles'

describe('Collectibles Data', () => {
  it('cookbooks should have required fields', () => {
    for (const item of COOKBOOKS) {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('dlc')
      expect(typeof item.id).toBe('number')
    }
  })

  it('should have at least 50 cookbooks', () => {
    expect(COOKBOOKS.length).toBeGreaterThan(50)
  })

  it('paintings should have required fields', () => {
    for (const item of PAINTINGS) {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('dlc')
    }
  })

  it('whetblades should have required fields', () => {
    for (const item of WHETBLADES) {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('dlc')
    }
  })

  it('gestures should have required fields', () => {
    for (const item of GESTURES) {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('dlc')
    }
  })

  it('should have no duplicate IDs within each category', () => {
    for (const arr of [COOKBOOKS, PAINTINGS, WHETBLADES, GESTURES]) {
      const ids = arr.map(i => i.id)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it('cookbooks should have type and region fields', () => {
    for (const item of COOKBOOKS) {
      expect(item).toHaveProperty('type')
      expect(item).toHaveProperty('region')
      expect(typeof item.type).toBe('string')
      expect(typeof item.region).toBe('string')
    }
  })

  it('paintings should have region field', () => {
    for (const item of PAINTINGS) {
      expect(item).toHaveProperty('region')
      expect(typeof item.region).toBe('string')
    }
  })

  it('whetblades should have region field', () => {
    for (const item of WHETBLADES) {
      expect(item).toHaveProperty('region')
      expect(typeof item.region).toBe('string')
    }
  })

  it('should have expected number of whetblades', () => {
    expect(WHETBLADES.length).toBe(6)
  })

  it('should have expected number of base game paintings', () => {
    const baseGamePaintings = PAINTINGS.filter(p => !p.dlc)
    expect(baseGamePaintings.length).toBe(7)
  })

  it('should have DLC cookbooks', () => {
    const dlcCookbooks = COOKBOOKS.filter(c => c.dlc)
    expect(dlcCookbooks.length).toBeGreaterThan(20)
  })

  it('should have DLC gestures', () => {
    const dlcGestures = GESTURES.filter(g => g.dlc)
    expect(dlcGestures.length).toBeGreaterThan(0)
  })

  it('should have known cookbooks', () => {
    const nomadic1 = COOKBOOKS.find(c => c.id === 67000)
    expect(nomadic1).toBeDefined()
    expect(nomadic1.name).toContain("Nomadic Warrior's Cookbook [1]")

    const missionary1 = COOKBOOKS.find(c => c.id === 67610)
    expect(missionary1).toBeDefined()
    expect(missionary1.name).toContain("Missionary's Cookbook [1]")
  })

  it('should have known whetblades', () => {
    const whetstoneKnife = WHETBLADES.find(w => w.id === 60130)
    expect(whetstoneKnife).toBeDefined()
    expect(whetstoneKnife.name).toBe('Whetstone Knife')

    const ironWhetblade = WHETBLADES.find(w => w.id === 65610)
    expect(ironWhetblade).toBeDefined()
    expect(ironWhetblade.name).toBe('Iron Whetblade')
  })

  it('should have known gestures', () => {
    const bow = GESTURES.find(g => g.id === 60800)
    expect(bow).toBeDefined()
    expect(bow.name).toBe('Bow')

    const prayer = GESTURES.find(g => g.id === 60841)
    expect(prayer).toBeDefined()
    expect(prayer.name).toBe('Prayer')
  })

  it('should have known paintings', () => {
    const homing = PAINTINGS.find(p => p.id === 8200)
    expect(homing).toBeDefined()
    expect(homing.name).toBe('Homing Instinct')
  })

  it('every collectible region should be in COLLECTIBLE_REGIONS', () => {
    for (const cookbook of COOKBOOKS) {
      expect(COLLECTIBLE_REGIONS).toContain(cookbook.region)
    }
    for (const painting of PAINTINGS) {
      expect(COLLECTIBLE_REGIONS).toContain(painting.region)
    }
    for (const whetblade of WHETBLADES) {
      expect(COLLECTIBLE_REGIONS).toContain(whetblade.region)
    }
  })

  it('should have at least 40 base game gestures', () => {
    const baseGameGestures = GESTURES.filter(g => !g.dlc)
    expect(baseGameGestures.length).toBeGreaterThanOrEqual(40)
  })
})
