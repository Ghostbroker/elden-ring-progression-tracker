import { describe, it, expect } from 'vitest'
import { MAGIC, MAGIC_CATEGORIES } from '../magic'

describe('Magic Data', () => {
  it('should have at least 140 spells', () => {
    expect(MAGIC.length).toBeGreaterThanOrEqual(140)
  })

  it('should have all required fields for each spell', () => {
    for (const spell of MAGIC) {
      expect(spell).toHaveProperty('id')
      expect(spell).toHaveProperty('name')
      expect(spell).toHaveProperty('category')
      expect(spell).toHaveProperty('dlc')
      expect(typeof spell.id).toBe('number')
      expect(typeof spell.name).toBe('string')
      expect(typeof spell.category).toBe('string')
      expect(typeof spell.dlc).toBe('boolean')
    }
  })

  it('should have all unique IDs', () => {
    const ids = MAGIC.map(s => s.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every spell category should be in MAGIC_CATEGORIES', () => {
    for (const spell of MAGIC) {
      expect(MAGIC_CATEGORIES).toContain(spell.category)
    }
  })

  it('categories should only be Sorcery or Incantation', () => {
    expect(MAGIC_CATEGORIES).toEqual(['Sorcery', 'Incantation'])
  })

  it('should have both sorceries and incantations', () => {
    const sorceryCount = MAGIC.filter(s => s.category === 'Sorcery').length
    const incantationCount = MAGIC.filter(s => s.category === 'Incantation').length
    expect(sorceryCount).toBeGreaterThan(50)
    expect(incantationCount).toBeGreaterThan(50)
  })

  it('should have both DLC and base game spells', () => {
    const baseCount = MAGIC.filter(s => s.dlc === false).length
    const dlcCount = MAGIC.filter(s => s.dlc === true).length
    expect(baseCount).toBeGreaterThan(100)
    expect(dlcCount).toBeGreaterThan(30)
  })

  it('all spell names should be non-empty strings', () => {
    for (const spell of MAGIC) {
      expect(spell.name.length).toBeGreaterThan(0)
    }
  })

  it('should include key iconic sorceries', () => {
    const pebble = MAGIC.find(s => s.name === 'Glintstone Pebble')
    expect(pebble).toBeDefined()
    expect(pebble.category).toBe('Sorcery')
    expect(pebble.dlc).toBe(false)

    const cometAzur = MAGIC.find(s => s.name === 'Comet Azur')
    expect(cometAzur).toBeDefined()
    expect(cometAzur.category).toBe('Sorcery')

    const starsOfRuin = MAGIC.find(s => s.name === 'Stars of Ruin')
    expect(starsOfRuin).toBeDefined()
    expect(starsOfRuin.category).toBe('Sorcery')

    const rockSling = MAGIC.find(s => s.name === 'Rock Sling')
    expect(rockSling).toBeDefined()
    expect(rockSling.category).toBe('Sorcery')
  })

  it('should include key iconic incantations', () => {
    const heal = MAGIC.find(s => s.name === 'Heal')
    expect(heal).toBeDefined()
    expect(heal.category).toBe('Incantation')
    expect(heal.dlc).toBe(false)

    const lightningSpear = MAGIC.find(s => s.name === 'Lightning Spear')
    expect(lightningSpear).toBeDefined()
    expect(lightningSpear.category).toBe('Incantation')

    const blackFlame = MAGIC.find(s => s.name === 'Black Flame')
    expect(blackFlame).toBeDefined()
    expect(blackFlame.category).toBe('Incantation')

    const catchFlame = MAGIC.find(s => s.name === 'Catch Flame')
    expect(catchFlame).toBeDefined()
    expect(catchFlame.category).toBe('Incantation')
  })

  it('should include DLC sorceries', () => {
    const rellana = MAGIC.find(s => s.name === 'Rellana\'s Twin Moons')
    expect(rellana).toBeDefined()
    expect(rellana.category).toBe('Sorcery')
    expect(rellana.dlc).toBe(true)

    const miriam = MAGIC.find(s => s.name === 'Miriam\'s Vanishing')
    expect(miriam).toBeDefined()
    expect(miriam.category).toBe('Sorcery')
    expect(miriam.dlc).toBe(true)
  })

  it('should include DLC incantations', () => {
    const bayle = MAGIC.find(s => s.name === 'Bayle\'s Tyranny')
    expect(bayle).toBeDefined()
    expect(bayle.category).toBe('Incantation')
    expect(bayle.dlc).toBe(true)

    const messmer = MAGIC.find(s => s.name === 'Messmer\'s Orb')
    expect(messmer).toBeDefined()
    expect(messmer.category).toBe('Incantation')
    expect(messmer.dlc).toBe(true)

    const midra = MAGIC.find(s => s.name === 'Midra\'s Flame of Frenzy')
    expect(midra).toBeDefined()
    expect(midra.category).toBe('Incantation')
    expect(midra.dlc).toBe(true)
  })

  it('should correctly classify edge cases', () => {
    // Night Maiden's Mist is a sorcery despite being in incantation param range
    const nightMaiden = MAGIC.find(s => s.name === 'Night Maiden\'s Mist')
    expect(nightMaiden).toBeDefined()
    expect(nightMaiden.category).toBe('Sorcery')

    // Death Lightning is an incantation despite being in sorcery param range
    const deathLightning = MAGIC.find(s => s.name === 'Death Lightning')
    expect(deathLightning).toBeDefined()
    expect(deathLightning.category).toBe('Incantation')
  })

  it('MAGIC_CATEGORIES should have exactly 2 categories', () => {
    expect(MAGIC_CATEGORIES.length).toBe(2)
  })
})
