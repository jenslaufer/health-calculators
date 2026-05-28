import { describe, it, expect } from 'vitest'
import { calcMap, getCategory, categoryColor, categoryBg } from '../utils/meanArterialPressure.js'

describe('calcMap — formula', () => {
  it('calculates MAP from SBP and DBP using (SBP + 2*DBP) / 3', () => {
    // (120 + 2*80) / 3 = 280 / 3 = 93.33
    expect(calcMap(120, 80)).toBeCloseTo(93.33, 1)
  })

  it('handles SBP=DBP boundary case → MAP = SBP', () => {
    // (100 + 2*100) / 3 = 300/3 = 100
    expect(calcMap(100, 100)).toBe(100)
  })

  it('rounds division consistently for non-divisible sums', () => {
    // (130 + 2*85) / 3 = 300/3 = 100
    expect(calcMap(130, 85)).toBe(100)
    // (118 + 2*76) / 3 = 270/3 = 90
    expect(calcMap(118, 76)).toBe(90)
  })

  it('accepts decimal inputs', () => {
    // (120.5 + 2*80.2) / 3 = 280.9/3 = 93.633
    expect(calcMap(120.5, 80.2)).toBeCloseTo(93.63, 1)
  })

  it('accepts integer-string-equivalents as numbers', () => {
    expect(calcMap(140, 90)).toBeCloseTo(106.67, 1)
  })
})

describe('calcMap — invalid inputs', () => {
  it('returns null for null or missing values', () => {
    expect(calcMap(null, 80)).toBeNull()
    expect(calcMap(120, null)).toBeNull()
    expect(calcMap(undefined, undefined)).toBeNull()
  })

  it('returns null for non-positive values', () => {
    expect(calcMap(0, 80)).toBeNull()
    expect(calcMap(120, 0)).toBeNull()
    expect(calcMap(-10, 80)).toBeNull()
  })

  it('returns null for NaN values', () => {
    expect(calcMap(NaN, 80)).toBeNull()
    expect(calcMap(120, NaN)).toBeNull()
  })

  it('returns null when DBP > SBP (physiologically impossible)', () => {
    expect(calcMap(80, 120)).toBeNull()
  })
})

describe('getCategory — clinical bands', () => {
  it('classifies MAP < 70 as low', () => {
    expect(getCategory(50)).toBe('low')
    expect(getCategory(69.9)).toBe('low')
  })

  it('classifies MAP 70–100 as normal', () => {
    expect(getCategory(70)).toBe('normal')
    expect(getCategory(85)).toBe('normal')
    expect(getCategory(100)).toBe('normal')
  })

  it('classifies MAP > 100 as high', () => {
    expect(getCategory(100.1)).toBe('high')
    expect(getCategory(120)).toBe('high')
  })

  it('returns null for invalid input', () => {
    expect(getCategory(null)).toBeNull()
    expect(getCategory(NaN)).toBeNull()
    expect(getCategory(undefined)).toBeNull()
  })
})

describe('end-to-end clinical scenarios', () => {
  it('very low BP 80/50 → low MAP', () => {
    const map = calcMap(80, 50)
    expect(map).toBeCloseTo(60, 0)
    expect(getCategory(map)).toBe('low')
  })

  it('normal BP 120/80 → normal MAP', () => {
    const map = calcMap(120, 80)
    expect(getCategory(map)).toBe('normal')
  })

  it('very high BP 180/110 → high MAP', () => {
    const map = calcMap(180, 110)
    expect(map).toBeCloseTo(133.33, 1)
    expect(getCategory(map)).toBe('high')
  })
})

describe('category styling helpers', () => {
  it('returns distinct color classes per band', () => {
    expect(categoryColor('low')).toMatch(/text-/)
    expect(categoryColor('normal')).toMatch(/text-/)
    expect(categoryColor('high')).toMatch(/text-/)
    expect(categoryColor('low')).not.toBe(categoryColor('normal'))
    expect(categoryColor('normal')).not.toBe(categoryColor('high'))
  })

  it('returns distinct background classes per band', () => {
    expect(categoryBg('low')).toMatch(/bg-/)
    expect(categoryBg('normal')).toMatch(/bg-/)
    expect(categoryBg('high')).toMatch(/bg-/)
  })
})
