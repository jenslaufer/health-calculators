import { describe, it, expect } from 'vitest'

// Pure calculation functions — mirroring PregnancyWeightGainCalculator.vue logic

const IOM_GUIDELINES = {
  singleton: {
    underweight: { min: 12.5, max: 18 },
    normal:      { min: 11.5, max: 16 },
    overweight:  { min: 7,    max: 11.5 },
    obese:       { min: 5,    max: 9 },
  },
  twins: {
    underweight: { min: 12.5, max: 18 },
    normal:      { min: 17,   max: 25 },
    overweight:  { min: 14,   max: 23 },
    obese:       { min: 11,   max: 19 },
  },
}

function calcBmi(weightKg, heightCm) {
  return weightKg / Math.pow(heightCm / 100, 2)
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) return 'underweight'
  if (bmi < 25)   return 'normal'
  if (bmi < 30)   return 'overweight'
  return 'obese'
}

function getGainRange(bmiCategory, isTwins) {
  const type = isTwins ? 'twins' : 'singleton'
  return IOM_GUIDELINES[type][bmiCategory]
}

function getGainAtWeek(gainRange, week) {
  const w = Math.min(Math.max(week, 0), 40)
  return {
    min: (gainRange.min / 40) * w,
    max: (gainRange.max / 40) * w,
  }
}

// ---- BMI calculation ----

describe('BMI calculation', () => {
  it('65kg, 170cm → BMI ~22.5', () => {
    expect(calcBmi(65, 170)).toBeCloseTo(22.49, 1)
  })

  it('50kg, 165cm → BMI ~18.4 (underweight boundary)', () => {
    expect(calcBmi(50, 165)).toBeCloseTo(18.37, 1)
  })

  it('90kg, 170cm → BMI ~31.1 (obese)', () => {
    expect(calcBmi(90, 170)).toBeCloseTo(31.14, 1)
  })

  it('75kg, 170cm → BMI ~26.0 (overweight)', () => {
    expect(calcBmi(75, 170)).toBeCloseTo(25.95, 1)
  })
})

// ---- BMI category ----

describe('BMI category classification', () => {
  it('BMI 17.5 → underweight', () => {
    expect(getBmiCategory(17.5)).toBe('underweight')
  })

  it('BMI 18.5 → normal', () => {
    expect(getBmiCategory(18.5)).toBe('normal')
  })

  it('BMI 24.9 → normal', () => {
    expect(getBmiCategory(24.9)).toBe('normal')
  })

  it('BMI 25.0 → overweight', () => {
    expect(getBmiCategory(25.0)).toBe('overweight')
  })

  it('BMI 29.9 → overweight', () => {
    expect(getBmiCategory(29.9)).toBe('overweight')
  })

  it('BMI 30.0 → obese', () => {
    expect(getBmiCategory(30.0)).toBe('obese')
  })

  it('BMI 35.0 → obese', () => {
    expect(getBmiCategory(35.0)).toBe('obese')
  })
})

// ---- Gain range (singleton) ----

describe('IOM 2009 gain range — singleton', () => {
  it('underweight: 12.5–18 kg', () => {
    const range = getGainRange('underweight', false)
    expect(range.min).toBe(12.5)
    expect(range.max).toBe(18)
  })

  it('normal: 11.5–16 kg', () => {
    const range = getGainRange('normal', false)
    expect(range.min).toBe(11.5)
    expect(range.max).toBe(16)
  })

  it('overweight: 7–11.5 kg', () => {
    const range = getGainRange('overweight', false)
    expect(range.min).toBe(7)
    expect(range.max).toBe(11.5)
  })

  it('obese: 5–9 kg', () => {
    const range = getGainRange('obese', false)
    expect(range.min).toBe(5)
    expect(range.max).toBe(9)
  })
})

// ---- Gain range (twins) ----

describe('IOM 2009 gain range — twins', () => {
  it('normal twins: 17–25 kg', () => {
    const range = getGainRange('normal', true)
    expect(range.min).toBe(17)
    expect(range.max).toBe(25)
  })

  it('overweight twins: 14–23 kg', () => {
    const range = getGainRange('overweight', true)
    expect(range.min).toBe(14)
    expect(range.max).toBe(23)
  })

  it('obese twins: 11–19 kg', () => {
    const range = getGainRange('obese', true)
    expect(range.min).toBe(11)
    expect(range.max).toBe(19)
  })

  it('twins range is higher than singleton for normal weight', () => {
    const twin = getGainRange('normal', true)
    const single = getGainRange('normal', false)
    expect(twin.min).toBeGreaterThan(single.min)
    expect(twin.max).toBeGreaterThan(single.max)
  })

  it('twins range is higher than singleton for overweight', () => {
    const twin = getGainRange('overweight', true)
    const single = getGainRange('overweight', false)
    expect(twin.min).toBeGreaterThan(single.min)
    expect(twin.max).toBeGreaterThan(single.max)
  })
})

// ---- Week-by-week interpolation ----

describe('Week-by-week gain interpolation', () => {
  it('week 0 → 0 kg gain', () => {
    const range = getGainRange('normal', false)
    const gain = getGainAtWeek(range, 0)
    expect(gain.min).toBeCloseTo(0, 2)
    expect(gain.max).toBeCloseTo(0, 2)
  })

  it('week 40 → full total gain for normal weight', () => {
    const range = getGainRange('normal', false)
    const gain = getGainAtWeek(range, 40)
    expect(gain.min).toBeCloseTo(11.5, 1)
    expect(gain.max).toBeCloseTo(16, 1)
  })

  it('week 20 → half of total gain (linear interpolation)', () => {
    const range = getGainRange('normal', false)
    const gain = getGainAtWeek(range, 20)
    expect(gain.min).toBeCloseTo(11.5 / 2, 1)
    expect(gain.max).toBeCloseTo(16 / 2, 1)
  })

  it('week 10 → quarter of total gain', () => {
    const range = getGainRange('obese', false)
    const gain = getGainAtWeek(range, 10)
    expect(gain.min).toBeCloseTo(5 / 4, 1)
    expect(gain.max).toBeCloseTo(9 / 4, 1)
  })

  it('week > 40 is capped at 40', () => {
    const range = getGainRange('normal', false)
    const gain40 = getGainAtWeek(range, 40)
    const gain42 = getGainAtWeek(range, 42)
    expect(gain42.min).toBeCloseTo(gain40.min, 2)
    expect(gain42.max).toBeCloseTo(gain40.max, 2)
  })

  it('min is always less than max', () => {
    const categories = ['underweight', 'normal', 'overweight', 'obese']
    for (const cat of categories) {
      const range = getGainRange(cat, false)
      for (const week of [1, 10, 20, 30, 40]) {
        const gain = getGainAtWeek(range, week)
        expect(gain.min).toBeLessThan(gain.max)
      }
    }
  })

  it('week-by-week gain increases monotonically', () => {
    const range = getGainRange('normal', false)
    let prev = getGainAtWeek(range, 0)
    for (let w = 1; w <= 40; w++) {
      const curr = getGainAtWeek(range, w)
      expect(curr.min).toBeGreaterThanOrEqual(prev.min)
      expect(curr.max).toBeGreaterThanOrEqual(prev.max)
      prev = curr
    }
  })
})

// ---- End-to-end scenarios ----

describe('Full calculation scenarios', () => {
  it('normal weight woman, week 20, singleton', () => {
    const bmi = calcBmi(65, 170)
    const cat = getBmiCategory(bmi)
    expect(cat).toBe('normal')
    const range = getGainRange(cat, false)
    const gain = getGainAtWeek(range, 20)
    expect(gain.min).toBeCloseTo(5.75, 1)
    expect(gain.max).toBeCloseTo(8, 1)
  })

  it('overweight woman, week 30, singleton', () => {
    const bmi = calcBmi(78, 170)
    const cat = getBmiCategory(bmi)
    expect(cat).toBe('overweight')
    const range = getGainRange(cat, false)
    const gain = getGainAtWeek(range, 30)
    expect(gain.min).toBeCloseTo(5.25, 1)
    expect(gain.max).toBeCloseTo(8.625, 1)
  })

  it('obese woman, week 36, singleton', () => {
    const bmi = calcBmi(95, 170)
    const cat = getBmiCategory(bmi)
    expect(cat).toBe('obese')
    const range = getGainRange(cat, false)
    expect(range.min).toBe(5)
    expect(range.max).toBe(9)
    const gain = getGainAtWeek(range, 36)
    expect(gain.min).toBeCloseTo(4.5, 1)
    expect(gain.max).toBeCloseTo(8.1, 1)
  })

  it('underweight woman, week 15, singleton', () => {
    const bmi = calcBmi(48, 165)
    const cat = getBmiCategory(bmi)
    expect(cat).toBe('underweight')
    const range = getGainRange(cat, false)
    expect(range.min).toBe(12.5)
    expect(range.max).toBe(18)
    const gain = getGainAtWeek(range, 15)
    expect(gain.min).toBeCloseTo(4.6875, 1)
    expect(gain.max).toBeCloseTo(6.75, 1)
  })

  it('normal weight woman, twins, week 20', () => {
    const bmi = calcBmi(65, 170)
    const cat = getBmiCategory(bmi)
    expect(cat).toBe('normal')
    const range = getGainRange(cat, true)
    expect(range.min).toBe(17)
    expect(range.max).toBe(25)
    const gain = getGainAtWeek(range, 20)
    expect(gain.min).toBeCloseTo(8.5, 1)
    expect(gain.max).toBeCloseTo(12.5, 1)
  })
})
