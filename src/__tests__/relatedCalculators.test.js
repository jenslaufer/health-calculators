import { describe, it, expect } from 'vitest'
import { getRelatedCalculators } from '../discovery.js'

describe('getRelatedCalculators', () => {
  it('returns at most 4 related calculators from same group, excluding self', () => {
    const result = getRelatedCalculators('bmi')
    expect(result.length).toBeGreaterThan(0)
    expect(result.length).toBeLessThanOrEqual(4)
    expect(result.find(m => m.key === 'bmi')).toBeUndefined()
    expect(result.every(m => m.group === 'bodyComposition')).toBe(true)
  })

  it('returns results sorted alphabetically by key', () => {
    const result = getRelatedCalculators('bmi')
    const keys = result.map(m => m.key)
    expect(keys).toEqual([...keys].sort((a, b) => a.localeCompare(b)))
  })

  it('returns empty array for nonexistent key', () => {
    expect(getRelatedCalculators('nonexistent')).toEqual([])
  })

  it('never includes self in results', () => {
    const result = getRelatedCalculators('oneRepMax')
    expect(result.find(m => m.key === 'oneRepMax')).toBeUndefined()
  })
})
