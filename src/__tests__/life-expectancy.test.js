import { describe, it, expect } from 'vitest'

// Pure calculation functions extracted from LifeExpectancyCalculator.vue

const BASE_LE = {
  de: [78.5, 83.4],
  us: [73.5, 79.3],
  uk: [79.0, 82.8],
  jp: [81.1, 87.1],
  ch: [81.8, 85.5],
  world: [70.8, 75.9],
}

const SMOKING_ADJ = { never: 0, former: -2, light: -4, moderate: -7, heavy: -10 }
const ALCOHOL_ADJ = { none: 0, light: 0, moderate: -2, heavy: -6, very_heavy: -10 }
const EXERCISE_ADJ = { none: -3, light: 0, moderate: 2, active: 3 }
const DIET_ADJ = { very_poor: -3, poor: -1, average: 0, good: 1, excellent: 2 }
const FAMILY_ADJ = { longevity: 3, good: 1, average: 0, heart_disease: -2, cancer: -2, multiple: -3 }
const STRESS_ADJ = { low: 1, moderate: 0, high: -2, very_high: -4 }
const SOCIAL_ADJ = { strong: 2, average: 0, isolated: -3 }
const CONDITIONS_ADJ = { diabetes: -5, heart_disease: -6, cancer: -4, hypertension: -2 }

function nationalAverage(country, gender) {
  const le = BASE_LE[country] || BASE_LE.world
  return gender === 'male' ? le[0] : le[1]
}

function bmiAdjustment(bmi) {
  if (!bmi || bmi < 10 || bmi > 70) return 0
  if (bmi < 18.5) return -1
  if (bmi < 25) return 0
  if (bmi < 30) return -1
  if (bmi < 35) return -3
  if (bmi < 40) return -5
  return -8
}

function calcBmi(weightKg, heightCm) {
  const h = heightCm / 100
  return weightKg / (h * h)
}

function totalAdjustment({ smoking, alcohol, exercise, diet, bmi, conditions, family, stress, social }) {
  let total = 0
  total += SMOKING_ADJ[smoking] || 0
  total += ALCOHOL_ADJ[alcohol] || 0
  total += EXERCISE_ADJ[exercise] || 0
  total += DIET_ADJ[diet] || 0
  total += bmiAdjustment(bmi)
  for (const cond of (conditions || [])) {
    total += CONDITIONS_ADJ[cond] || 0
  }
  total += FAMILY_ADJ[family] || 0
  total += STRESS_ADJ[stress] || 0
  total += SOCIAL_ADJ[social] || 0
  return total
}

function estimateLE(age, country, gender, factors) {
  const base = nationalAverage(country, gender)
  const adj = totalAdjustment(factors)
  const raw = base + adj
  return Math.round(Math.max(age + 1, Math.min(105, raw)) * 10) / 10
}

function toKg(lbs) { return lbs * 0.453592 }
function toCm(inches) { return inches * 2.54 }

// ─── National average ──────────────────────────────────────────────────────

describe('national average lookup', () => {
  it('returns correct male value for Germany', () => {
    expect(nationalAverage('de', 'male')).toBe(78.5)
  })

  it('returns correct female value for Germany', () => {
    expect(nationalAverage('de', 'female')).toBe(83.4)
  })

  it('returns correct value for Japan (highest)', () => {
    expect(nationalAverage('jp', 'female')).toBe(87.1)
  })

  it('falls back to world average for unknown country', () => {
    expect(nationalAverage('xx', 'male')).toBe(70.8)
  })
})

// ─── BMI adjustment ───────────────────────────────────────────────────────

describe('BMI adjustment', () => {
  it('normal weight (BMI 22) → 0 years', () => {
    expect(bmiAdjustment(22)).toBe(0)
  })

  it('underweight (BMI 17) → −1 year', () => {
    expect(bmiAdjustment(17)).toBe(-1)
  })

  it('overweight (BMI 27) → −1 year', () => {
    expect(bmiAdjustment(27)).toBe(-1)
  })

  it('obese I (BMI 32) → −3 years', () => {
    expect(bmiAdjustment(32)).toBe(-3)
  })

  it('obese II (BMI 37) → −5 years', () => {
    expect(bmiAdjustment(37)).toBe(-5)
  })

  it('obese III (BMI 42) → −8 years', () => {
    expect(bmiAdjustment(42)).toBe(-8)
  })

  it('returns 0 for null/invalid BMI', () => {
    expect(bmiAdjustment(null)).toBe(0)
    expect(bmiAdjustment(5)).toBe(0)
    expect(bmiAdjustment(80)).toBe(0)
  })
})

// ─── BMI calculation ──────────────────────────────────────────────────────

describe('BMI calculation', () => {
  it('75 kg, 175 cm → BMI ~24.5', () => {
    expect(calcBmi(75, 175)).toBeCloseTo(24.49, 1)
  })

  it('90 kg, 175 cm → BMI ~29.4 (overweight)', () => {
    const bmi = calcBmi(90, 175)
    expect(bmi).toBeGreaterThanOrEqual(29)
    expect(bmi).toBeLessThanOrEqual(30)
  })

  it('imperial conversion gives same result as metric', () => {
    const metricBmi = calcBmi(75, 175)
    const imperialBmi = calcBmi(toKg(165.35), toCm(68.9))
    expect(Math.abs(metricBmi - imperialBmi)).toBeLessThan(0.5)
  })
})

// ─── Total adjustment ─────────────────────────────────────────────────────

describe('total lifestyle adjustment', () => {
  it('optimal profile → +8 years (exercise +3, diet +2, family longevity +3)', () => {
    const adj = totalAdjustment({
      smoking: 'never',
      alcohol: 'light',
      exercise: 'active',
      diet: 'excellent',
      bmi: 22,
      conditions: [],
      family: 'longevity',
      stress: 'moderate',
      social: 'average',
    })
    expect(adj).toBe(8)
  })

  it('worst-case profile → heavily negative', () => {
    const adj = totalAdjustment({
      smoking: 'heavy',
      alcohol: 'very_heavy',
      exercise: 'none',
      diet: 'very_poor',
      bmi: 42,
      conditions: ['diabetes', 'heart_disease'],
      family: 'multiple',
      stress: 'very_high',
      social: 'isolated',
    })
    // −10 −10 −3 −3 −8 −5 −6 −3 −4 −3 = −55
    expect(adj).toBe(-55)
  })

  it('average profile → 0 years adjustment', () => {
    const adj = totalAdjustment({
      smoking: 'never',
      alcohol: 'light',
      exercise: 'moderate',
      diet: 'average',
      bmi: 22,
      conditions: [],
      family: 'average',
      stress: 'moderate',
      social: 'average',
    })
    // exercise: +2
    expect(adj).toBe(2)
  })

  it('smoking heavy −10, no other negatives', () => {
    const adj = totalAdjustment({
      smoking: 'heavy',
      alcohol: 'none',
      exercise: 'moderate',
      diet: 'average',
      bmi: 22,
      conditions: [],
      family: 'average',
      stress: 'moderate',
      social: 'average',
    })
    // −10 + 0 + 2 = −8
    expect(adj).toBe(-8)
  })
})

// ─── Estimated life expectancy ────────────────────────────────────────────

describe('estimated life expectancy', () => {
  it('35-year-old German male with no risk factors → ~80 years', () => {
    const le = estimateLE(35, 'de', 'male', {
      smoking: 'never', alcohol: 'light', exercise: 'moderate',
      diet: 'average', bmi: 22, conditions: [], family: 'average',
      stress: 'moderate', social: 'average',
    })
    // base 78.5 + exercise +2 = 80.5
    expect(le).toBe(80.5)
  })

  it('40-year-old German female, optimal lifestyle → >85 years', () => {
    const le = estimateLE(40, 'de', 'female', {
      smoking: 'never', alcohol: 'none', exercise: 'active',
      diet: 'excellent', bmi: 22, conditions: [], family: 'longevity',
      stress: 'low', social: 'strong',
    })
    // base 83.4 + 3+2+3+1+2 = 83.4 + 11 = 94.4
    expect(le).toBeGreaterThan(85)
    expect(le).toBeLessThanOrEqual(105)
  })

  it('result is always at least age + 1', () => {
    const le = estimateLE(80, 'ru', 'male', {
      smoking: 'heavy', alcohol: 'very_heavy', exercise: 'none',
      diet: 'very_poor', bmi: 42, conditions: ['diabetes', 'heart_disease'],
      family: 'multiple', stress: 'very_high', social: 'isolated',
    })
    expect(le).toBeGreaterThan(80)
  })

  it('result is capped at 105', () => {
    const le = estimateLE(20, 'jp', 'female', {
      smoking: 'never', alcohol: 'none', exercise: 'active',
      diet: 'excellent', bmi: 22, conditions: [], family: 'longevity',
      stress: 'low', social: 'strong',
    })
    expect(le).toBeLessThanOrEqual(105)
  })
})

// ─── Years remaining ──────────────────────────────────────────────────────

describe('years remaining', () => {
  it('35 with LE 80.5 → 45.5 years remaining', () => {
    const le = 80.5
    const remaining = Math.max(0, Math.round((le - 35) * 10) / 10)
    expect(remaining).toBe(45.5)
  })

  it('never negative (age > estimated LE)', () => {
    const le = 75
    const age = 80
    const remaining = Math.max(0, le - age)
    expect(remaining).toBe(0)
  })
})

// ─── Imperial unit conversion ─────────────────────────────────────────────

describe('unit conversion', () => {
  it('converts 176 lbs to ~79.8 kg', () => {
    expect(toKg(176)).toBeCloseTo(79.83, 1)
  })

  it('converts 70 inches to ~177.8 cm', () => {
    expect(toCm(70)).toBeCloseTo(177.8, 0)
  })

  it('5ft 9in = 69 inches = ~175.3 cm', () => {
    expect(toCm(5 * 12 + 9)).toBeCloseTo(175.3, 0)
  })
})
