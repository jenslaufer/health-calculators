import { describe, it, expect } from 'vitest'

// Pure alcohol unit calculation functions — mirrors AlcoholUnitsCalculator.vue

const GRAMS_PER_UK_UNIT = 8
const KCAL_PER_GRAM_ALCOHOL = 7

function calcUnitsPerDrink(volumeMl, abvPct) {
  return (volumeMl * abvPct) / 1000
}

function calcGramsFromUnits(units) {
  return units * GRAMS_PER_UK_UNIT
}

function calcCaloriesFromGrams(grams) {
  return Math.round(grams * KCAL_PER_GRAM_ALCOHOL)
}

function getRiskLevel(units) {
  if (units === 0) return 'none'
  if (units <= 14) return 'low'
  if (units <= 28) return 'increasing'
  if (units <= 50) return 'high'
  return 'very_high'
}

const GUIDELINE_LIMITS = {
  uk_nhs: { male: 14, female: 14 },
  de_dhs: { male: 21, female: 10.5 },
  us_niaaa: { male: 24.5, female: 12.25 },
}

function getGuidelineStatus(totalUnits, guideline, sex) {
  const limit = GUIDELINE_LIMITS[guideline][sex]
  const pct = totalUnits / limit
  return { limit, pct, exceeds: pct > 1 }
}

describe('calcUnitsPerDrink', () => {
  it('500 ml at 5% → 2.5 units (pint of beer)', () => {
    expect(calcUnitsPerDrink(500, 5)).toBeCloseTo(2.5)
  })

  it('175 ml at 12% → 2.1 units (small glass of wine)', () => {
    expect(calcUnitsPerDrink(175, 12)).toBeCloseTo(2.1)
  })

  it('40 ml at 40% → 1.6 units (single spirit)', () => {
    expect(calcUnitsPerDrink(40, 40)).toBeCloseTo(1.6)
  })

  it('200 ml at 15% → 3.0 units (cocktail)', () => {
    expect(calcUnitsPerDrink(200, 15)).toBeCloseTo(3.0)
  })

  it('250 ml at 0% → 0 units (non-alcoholic)', () => {
    expect(calcUnitsPerDrink(250, 0)).toBe(0)
  })

  it('larger volume and higher ABV gives more units', () => {
    const small = calcUnitsPerDrink(100, 5)
    const large = calcUnitsPerDrink(500, 10)
    expect(large).toBeGreaterThan(small)
  })
})

describe('calcGramsFromUnits', () => {
  it('1 unit → 8 g', () => {
    expect(calcGramsFromUnits(1)).toBe(8)
  })

  it('2.5 units → 20 g', () => {
    expect(calcGramsFromUnits(2.5)).toBe(20)
  })

  it('14 units → 112 g (UK NHS weekly limit)', () => {
    expect(calcGramsFromUnits(14)).toBe(112)
  })

  it('0 units → 0 g', () => {
    expect(calcGramsFromUnits(0)).toBe(0)
  })
})

describe('calcCaloriesFromGrams', () => {
  it('8 g (1 unit) → 56 kcal', () => {
    expect(calcCaloriesFromGrams(8)).toBe(56)
  })

  it('80 g → 560 kcal (4 pints of 5% beer)', () => {
    expect(calcCaloriesFromGrams(80)).toBe(560)
  })

  it('0 g → 0 kcal', () => {
    expect(calcCaloriesFromGrams(0)).toBe(0)
  })
})

describe('getRiskLevel', () => {
  it('0 units → none', () => {
    expect(getRiskLevel(0)).toBe('none')
  })

  it('1 unit → low', () => {
    expect(getRiskLevel(1)).toBe('low')
  })

  it('14 units → low (at UK NHS limit)', () => {
    expect(getRiskLevel(14)).toBe('low')
  })

  it('15 units → increasing', () => {
    expect(getRiskLevel(15)).toBe('increasing')
  })

  it('28 units → increasing', () => {
    expect(getRiskLevel(28)).toBe('increasing')
  })

  it('29 units → high', () => {
    expect(getRiskLevel(29)).toBe('high')
  })

  it('50 units → high', () => {
    expect(getRiskLevel(50)).toBe('high')
  })

  it('51 units → very_high', () => {
    expect(getRiskLevel(51)).toBe('very_high')
  })
})

describe('getGuidelineStatus — UK NHS', () => {
  it('14 units for male → within limit (pct = 1)', () => {
    const status = getGuidelineStatus(14, 'uk_nhs', 'male')
    expect(status.exceeds).toBe(false)
    expect(status.pct).toBeCloseTo(1)
  })

  it('15 units for male → exceeds limit', () => {
    const status = getGuidelineStatus(15, 'uk_nhs', 'male')
    expect(status.exceeds).toBe(true)
  })

  it('14 units for female → within limit', () => {
    const status = getGuidelineStatus(14, 'uk_nhs', 'female')
    expect(status.exceeds).toBe(false)
  })

  it('limit is 14 for both sexes', () => {
    expect(GUIDELINE_LIMITS.uk_nhs.male).toBe(14)
    expect(GUIDELINE_LIMITS.uk_nhs.female).toBe(14)
  })
})

describe('getGuidelineStatus — DE DHS', () => {
  it('10.5 units for female → within limit (pct = 1)', () => {
    const status = getGuidelineStatus(10.5, 'de_dhs', 'female')
    expect(status.exceeds).toBe(false)
    expect(status.pct).toBeCloseTo(1)
  })

  it('11 units for female → exceeds DE DHS limit', () => {
    const status = getGuidelineStatus(11, 'de_dhs', 'female')
    expect(status.exceeds).toBe(true)
  })

  it('21 units for male → within limit', () => {
    const status = getGuidelineStatus(21, 'de_dhs', 'male')
    expect(status.exceeds).toBe(false)
  })

  it('male limit is twice the female limit', () => {
    expect(GUIDELINE_LIMITS.de_dhs.male / GUIDELINE_LIMITS.de_dhs.female).toBe(2)
  })
})

describe('getGuidelineStatus — US NIAAA', () => {
  it('12.25 units for female → within limit (pct = 1)', () => {
    const status = getGuidelineStatus(12.25, 'us_niaaa', 'female')
    expect(status.exceeds).toBe(false)
    expect(status.pct).toBeCloseTo(1)
  })

  it('24.5 units for male → within limit', () => {
    const status = getGuidelineStatus(24.5, 'us_niaaa', 'male')
    expect(status.exceeds).toBe(false)
  })

  it('25 units for male → exceeds NIAAA limit', () => {
    const status = getGuidelineStatus(25, 'us_niaaa', 'male')
    expect(status.exceeds).toBe(true)
  })
})

describe('weekly totals', () => {
  it('5 beers (500ml, 5%) → 12.5 units, 100 g, 700 kcal', () => {
    const units = 5 * calcUnitsPerDrink(500, 5)
    const grams = calcGramsFromUnits(units)
    const kcal = calcCaloriesFromGrams(grams)
    expect(units).toBeCloseTo(12.5)
    expect(grams).toBeCloseTo(100)
    expect(kcal).toBe(700)
  })

  it('7 glasses wine (175ml, 12%) → 14.7 units — exceeds UK NHS for women', () => {
    const units = 7 * calcUnitsPerDrink(175, 12)
    expect(units).toBeCloseTo(14.7)
    const status = getGuidelineStatus(units, 'uk_nhs', 'female')
    expect(status.exceeds).toBe(true)
  })

  it('0 drinks of all types → 0 units, risk level none', () => {
    const units = 0
    expect(getRiskLevel(units)).toBe('none')
  })
})
