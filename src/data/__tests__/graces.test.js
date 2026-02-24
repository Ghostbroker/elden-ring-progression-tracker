import { describe, it, expect } from 'vitest'
import { GRACES, GRACE_REGIONS } from '../graces'

describe('Grace Data', () => {
  it('should have all required fields', () => {
    for (const grace of GRACES) {
      expect(grace).toHaveProperty('id')
      expect(grace).toHaveProperty('name')
      expect(grace).toHaveProperty('region')
      expect(grace).toHaveProperty('dlc')
      expect(typeof grace.id).toBe('number')
      expect(typeof grace.name).toBe('string')
      expect(typeof grace.dlc).toBe('boolean')
    }
  })

  it('should have at least 200 graces', () => {
    expect(GRACES.length).toBeGreaterThan(200)
  })

  it('should include The First Step', () => {
    // 76100 = Church of Elleh, 76101 = The First Step (verified from SoulSplitter)
    const firstStep = GRACES.find(g => g.id === 76101)
    expect(firstStep).toBeDefined()
    expect(firstStep.name).toBe('The First Step')
  })

  it('should include Church of Elleh', () => {
    const churchOfElleh = GRACES.find(g => g.id === 76100)
    expect(churchOfElleh).toBeDefined()
    expect(churchOfElleh.name).toBe('Church of Elleh')
  })

  it('should have DLC graces', () => {
    const dlcGraces = GRACES.filter(g => g.dlc)
    expect(dlcGraces.length).toBeGreaterThan(20)
  })

  it('should have no duplicate IDs', () => {
    const ids = GRACES.map(g => g.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every grace region should be in GRACE_REGIONS', () => {
    for (const grace of GRACES) {
      expect(GRACE_REGIONS).toContain(grace.region)
    }
  })
})
