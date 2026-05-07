import { describe, it, expect } from 'vitest'
import {
  calcBmi,
  categorize,
  calcOsteoporosisRisk,
} from '../utils/osteoporosisRisk.js'

// FRAX-inspired osteoporosis 10-year fracture risk model.
// Score sums weighted clinical risk factors:
//   Age:       <50=0, 50–64=1, 65–74=3, 75–84=5, ≥85=7
//   Female:    +1
//   BMI:       <19=2, 19–20=1, ≥20=0
//   Previous fragility fracture: +3
//   Parent hip fracture: +2
//   Current smoking: +1
//   Glucocorticoids ≥3 months: +2
//   Rheumatoid arthritis: +1
//   Secondary osteoporosis: +1
//   Alcohol ≥3 units/day: +2
//   T-score ≤ -2.5: +3, -1 to -2.5: +1
// Categories: 0–3 low, 4–7 moderate, ≥8 high.

describe('calcBmi', () => {
  it('computes BMI from kg and cm', () => {
    expect(calcBmi(60, 170)).toBeCloseTo(20.76, 2)
  })

  it('returns null for invalid input', () => {
    expect(calcBmi(0, 170)).toBeNull()
    expect(calcBmi(60, 0)).toBeNull()
    expect(calcBmi(null, 170)).toBeNull()
  })
})

describe('categorize', () => {
  it('0–3 → low', () => {
    expect(categorize(0)).toBe('low')
    expect(categorize(3)).toBe('low')
  })
  it('4–7 → moderate', () => {
    expect(categorize(4)).toBe('moderate')
    expect(categorize(7)).toBe('moderate')
  })
  it('≥8 → high', () => {
    expect(categorize(8)).toBe('high')
    expect(categorize(15)).toBe('high')
  })
})

describe('calcOsteoporosisRisk', () => {
  it('returns null without sex', () => {
    expect(calcOsteoporosisRisk({ age: 60, sex: null, weightKg: 60, heightCm: 170 })).toBeNull()
  })

  it('returns null without valid age', () => {
    expect(calcOsteoporosisRisk({ age: null, sex: 'female', weightKg: 60, heightCm: 170 })).toBeNull()
  })

  it('healthy 45-year-old man → low (score 0)', () => {
    const r = calcOsteoporosisRisk({
      age: 45, sex: 'male', weightKg: 80, heightCm: 180,
    })
    expect(r.score).toBe(0)
    expect(r.category).toBe('low')
  })

  it('healthy 45-year-old woman → low (score 1: female)', () => {
    const r = calcOsteoporosisRisk({
      age: 45, sex: 'female', weightKg: 65, heightCm: 168,
    })
    expect(r.score).toBe(1)
    expect(r.category).toBe('low')
  })

  it('70-year-old woman, normal BMI, no risk factors → moderate (3+1=4)', () => {
    const r = calcOsteoporosisRisk({
      age: 70, sex: 'female', weightKg: 65, heightCm: 168,
    })
    expect(r.score).toBe(4)
    expect(r.category).toBe('moderate')
  })

  it('80-year-old woman with prior fracture and low BMI → high', () => {
    // age 80 = 5, female = 1, BMI 18.4 (45/156²) = 2, fracture = 3 → 11
    const r = calcOsteoporosisRisk({
      age: 80, sex: 'female', weightKg: 45, heightCm: 156,
      previousFracture: true,
    })
    expect(r.score).toBe(11)
    expect(r.category).toBe('high')
  })

  it('all risk factors stack', () => {
    // age 70 = 3, female = 1, BMI 18.4 = 2, fracture = 3, parent hip = 2,
    // smoking = 1, gluco = 2, RA = 1, sec = 1, alc = 2, T -3.0 = 3 → 21
    const r = calcOsteoporosisRisk({
      age: 70, sex: 'female', weightKg: 45, heightCm: 156,
      previousFracture: true, parentHipFracture: true, smoking: true,
      glucocorticoids: true, rheumatoidArthritis: true, secondaryOsteoporosis: true,
      alcohol3Plus: true, tScore: -3.0,
    })
    expect(r.score).toBe(21)
    expect(r.category).toBe('high')
  })

  it('T-score osteopenia adds 1 point', () => {
    const r = calcOsteoporosisRisk({
      age: 60, sex: 'male', weightKg: 80, heightCm: 180, tScore: -1.5,
    })
    // age 60 = 1, male = 0, BMI 24.7 = 0, T -1.5 = 1 → 2
    expect(r.score).toBe(2)
    expect(r.category).toBe('low')
  })

  it('T-score normal (−0.5) adds 0', () => {
    const r = calcOsteoporosisRisk({
      age: 60, sex: 'male', weightKg: 80, heightCm: 180, tScore: -0.5,
    })
    expect(r.score).toBe(1)
  })

  it('exposes BMI in result', () => {
    const r = calcOsteoporosisRisk({
      age: 60, sex: 'female', weightKg: 60, heightCm: 170,
    })
    expect(r.bmi).toBeCloseTo(20.76, 2)
  })

  it('boundary: 65 → age band 3', () => {
    // age 65 = 3, male = 0, BMI 24.7 = 0 → 3 (still low)
    const r = calcOsteoporosisRisk({ age: 65, sex: 'male', weightKg: 80, heightCm: 180 })
    expect(r.score).toBe(3)
    expect(r.category).toBe('low')
  })

  it('boundary: 50 → age band 1', () => {
    const r = calcOsteoporosisRisk({ age: 50, sex: 'male', weightKg: 80, heightCm: 180 })
    expect(r.score).toBe(1)
  })

  it('BMI <19 contributes 2, BMI 19.5 contributes 1', () => {
    const lean = calcOsteoporosisRisk({ age: 40, sex: 'male', weightKg: 50, heightCm: 175 })
    // BMI 50/1.75² = 16.3 → +2
    expect(lean.score).toBe(2)

    const r = calcOsteoporosisRisk({ age: 40, sex: 'male', weightKg: 60, heightCm: 175 })
    // BMI 60/1.75² = 19.6 → +1
    expect(r.score).toBe(1)
  })
})
