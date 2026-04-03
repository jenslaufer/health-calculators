import { describe, it, expect } from 'vitest'

// Pure BAC calculation functions — extracted to be testable (Widmark formula)

function calcAlcoholGrams(volumeMl, alcoholPct) {
  if (!volumeMl || volumeMl <= 0 || !alcoholPct || alcoholPct <= 0) return 0
  return volumeMl * (alcoholPct / 100) * 0.8
}

function calcBac(alcoholGrams, bodyWeightKg, gender) {
  if (!alcoholGrams || alcoholGrams <= 0 || !bodyWeightKg || bodyWeightKg <= 0) return 0
  const r = gender === 'male' ? 0.68 : 0.55
  return alcoholGrams / (bodyWeightKg * r)
}

function calcCurrentBac(rawBac, hoursSinceFirstDrink) {
  if (!rawBac || rawBac <= 0) return 0
  const elimination = 0.15 * hoursSinceFirstDrink
  return Math.max(0, rawBac - elimination)
}

function calcTimeUntilSober(rawBac) {
  if (!rawBac || rawBac <= 0) return 0
  return rawBac / 0.15
}

function getTotalAlcoholGrams(drinks) {
  return drinks.reduce((sum, d) => sum + calcAlcoholGrams(d.volumeMl, d.alcoholPct), 0)
}

describe('Alcohol grams calculation', () => {
  it('500ml beer at 5% → 20g alcohol', () => {
    expect(calcAlcoholGrams(500, 5)).toBeCloseTo(20)
  })

  it('200ml wine at 12% → 19.2g alcohol', () => {
    expect(calcAlcoholGrams(200, 12)).toBeCloseTo(19.2)
  })

  it('40ml spirits at 40% → 12.8g alcohol', () => {
    expect(calcAlcoholGrams(40, 40)).toBeCloseTo(12.8)
  })

  it('returns 0 for zero or negative volume', () => {
    expect(calcAlcoholGrams(0, 5)).toBe(0)
    expect(calcAlcoholGrams(-100, 5)).toBe(0)
  })

  it('returns 0 for zero or negative alcohol %', () => {
    expect(calcAlcoholGrams(500, 0)).toBe(0)
    expect(calcAlcoholGrams(500, -1)).toBe(0)
  })

  it('returns 0 for null inputs', () => {
    expect(calcAlcoholGrams(null, 5)).toBe(0)
    expect(calcAlcoholGrams(500, null)).toBe(0)
  })
})

describe('BAC calculation (Widmark)', () => {
  it('20g alcohol, 80kg male → ~0.37‰', () => {
    const bac = calcBac(20, 80, 'male')
    // 20 / (80 * 0.68) = 0.3676
    expect(bac).toBeCloseTo(0.368, 2)
  })

  it('20g alcohol, 60kg female → ~0.61‰', () => {
    const bac = calcBac(20, 60, 'female')
    // 20 / (60 * 0.55) = 0.6061
    expect(bac).toBeCloseTo(0.606, 2)
  })

  it('40g alcohol, 80kg male → ~0.74‰', () => {
    const bac = calcBac(40, 80, 'male')
    // 40 / (80 * 0.68) = 0.7353
    expect(bac).toBeCloseTo(0.735, 2)
  })

  it('returns 0 for zero alcohol', () => {
    expect(calcBac(0, 80, 'male')).toBe(0)
  })

  it('returns 0 for zero body weight', () => {
    expect(calcBac(20, 0, 'male')).toBe(0)
  })

  it('returns 0 for null inputs', () => {
    expect(calcBac(null, 80, 'male')).toBe(0)
  })
})

describe('Current BAC after elimination', () => {
  it('0.74‰ after 2 hours → 0.44‰', () => {
    const current = calcCurrentBac(0.74, 2)
    // 0.74 - 0.15*2 = 0.44
    expect(current).toBeCloseTo(0.44, 2)
  })

  it('0.37‰ after 3 hours → 0 (fully sober)', () => {
    const current = calcCurrentBac(0.37, 3)
    // 0.37 - 0.45 = -0.08 → clamped to 0
    expect(current).toBe(0)
  })

  it('0.74‰ after 0 hours → 0.74‰', () => {
    expect(calcCurrentBac(0.74, 0)).toBeCloseTo(0.74, 2)
  })

  it('returns 0 for zero BAC', () => {
    expect(calcCurrentBac(0, 2)).toBe(0)
  })
})

describe('Time until sober', () => {
  it('0.75‰ → 5 hours', () => {
    expect(calcTimeUntilSober(0.75)).toBeCloseTo(5, 1)
  })

  it('0.30‰ → 2 hours', () => {
    expect(calcTimeUntilSober(0.30)).toBeCloseTo(2, 1)
  })

  it('1.5‰ → 10 hours', () => {
    expect(calcTimeUntilSober(1.5)).toBeCloseTo(10, 1)
  })

  it('returns 0 for zero BAC', () => {
    expect(calcTimeUntilSober(0)).toBe(0)
  })

  it('returns 0 for null BAC', () => {
    expect(calcTimeUntilSober(null)).toBe(0)
  })
})

describe('Total alcohol from multiple drinks', () => {
  it('2 beers (500ml, 5%) = 40g', () => {
    const drinks = [
      { volumeMl: 500, alcoholPct: 5 },
      { volumeMl: 500, alcoholPct: 5 },
    ]
    expect(getTotalAlcoholGrams(drinks)).toBeCloseTo(40)
  })

  it('1 beer + 1 wine = 39.2g', () => {
    const drinks = [
      { volumeMl: 500, alcoholPct: 5 },   // 20g
      { volumeMl: 200, alcoholPct: 12 },   // 19.2g
    ]
    expect(getTotalAlcoholGrams(drinks)).toBeCloseTo(39.2)
  })

  it('empty list → 0', () => {
    expect(getTotalAlcoholGrams([])).toBe(0)
  })
})
