import { describe, it, expect } from 'vitest'
import {
  calcAlcoholGrams,
  calcMilkBac,
  calcCurrentMilkBac,
  calcHoursUntilClear,
  getTotalAlcoholGrams,
} from '../utils/breastMilkAlcohol.js'

// Alcohol passes freely into breast milk and parallels the blood alcohol
// concentration (BAC ≈ milk alcohol concentration). Clearance rate is ~0.15‰/h.
// Widmark formula uses r = 0.55 (women), since this calculator targets
// breastfeeding/lactating mothers.

describe('calcAlcoholGrams (breast milk context)', () => {
  it('500ml beer at 5% → 20g alcohol', () => {
    expect(calcAlcoholGrams(500, 5)).toBeCloseTo(20)
  })

  it('150ml wine at 12% → 14.4g alcohol', () => {
    expect(calcAlcoholGrams(150, 12)).toBeCloseTo(14.4)
  })

  it('40ml spirits at 40% → 12.8g alcohol', () => {
    expect(calcAlcoholGrams(40, 40)).toBeCloseTo(12.8)
  })

  it('returns 0 for invalid or zero inputs', () => {
    expect(calcAlcoholGrams(0, 5)).toBe(0)
    expect(calcAlcoholGrams(500, 0)).toBe(0)
    expect(calcAlcoholGrams(null, 5)).toBe(0)
    expect(calcAlcoholGrams(500, null)).toBe(0)
    expect(calcAlcoholGrams(-100, 5)).toBe(0)
  })
})

describe('calcMilkBac (Widmark, r=0.55 for women)', () => {
  it('14g alcohol, 60kg woman → ~0.42‰', () => {
    // 14 / (60 * 0.55) = 0.4242
    expect(calcMilkBac(14, 60)).toBeCloseTo(0.424, 2)
  })

  it('20g alcohol, 70kg woman → ~0.52‰', () => {
    // 20 / (70 * 0.55) = 0.5195
    expect(calcMilkBac(20, 70)).toBeCloseTo(0.52, 2)
  })

  it('12g alcohol, 65kg woman → ~0.34‰', () => {
    // 12 / (65 * 0.55) = 0.3357
    expect(calcMilkBac(12, 65)).toBeCloseTo(0.336, 2)
  })

  it('returns 0 for zero alcohol', () => {
    expect(calcMilkBac(0, 60)).toBe(0)
  })

  it('returns 0 for zero/null weight', () => {
    expect(calcMilkBac(14, 0)).toBe(0)
    expect(calcMilkBac(14, null)).toBe(0)
  })
})

describe('calcCurrentMilkBac (elimination at 0.15‰/h)', () => {
  it('0.42‰ after 1 hour → 0.27‰', () => {
    expect(calcCurrentMilkBac(0.42, 1)).toBeCloseTo(0.27, 2)
  })

  it('0.42‰ after 3 hours → 0 (fully cleared)', () => {
    expect(calcCurrentMilkBac(0.42, 3)).toBe(0)
  })

  it('0.42‰ at 0 hours → 0.42‰', () => {
    expect(calcCurrentMilkBac(0.42, 0)).toBeCloseTo(0.42, 2)
  })

  it('returns 0 for zero raw BAC', () => {
    expect(calcCurrentMilkBac(0, 2)).toBe(0)
  })
})

describe('calcHoursUntilClear', () => {
  it('0.42‰ after 1 hour → ~1.8h remaining', () => {
    // current = 0.27, /0.15 = 1.8
    expect(calcHoursUntilClear(0.42, 1)).toBeCloseTo(1.8, 1)
  })

  it('0.42‰ at 0 hours → ~2.83h to clear', () => {
    // 0.42 / 0.15 = 2.8
    expect(calcHoursUntilClear(0.42, 0)).toBeCloseTo(2.8, 1)
  })

  it('0.42‰ after 10 hours → 0 (already cleared)', () => {
    expect(calcHoursUntilClear(0.42, 10)).toBe(0)
  })

  it('returns 0 for zero raw BAC', () => {
    expect(calcHoursUntilClear(0, 0)).toBe(0)
  })
})

describe('getTotalAlcoholGrams', () => {
  it('1 beer (500ml 5%) = 20g', () => {
    expect(getTotalAlcoholGrams([{ volumeMl: 500, alcoholPct: 5 }])).toBeCloseTo(20)
  })

  it('1 beer + 1 wine = 34.4g', () => {
    const drinks = [
      { volumeMl: 500, alcoholPct: 5 },
      { volumeMl: 150, alcoholPct: 12 },
    ]
    expect(getTotalAlcoholGrams(drinks)).toBeCloseTo(34.4)
  })

  it('empty list → 0', () => {
    expect(getTotalAlcoholGrams([])).toBe(0)
  })

  it('ignores entries with missing data', () => {
    const drinks = [
      { volumeMl: 500, alcoholPct: 5 },
      { volumeMl: null, alcoholPct: 12 },
    ]
    expect(getTotalAlcoholGrams(drinks)).toBeCloseTo(20)
  })
})
