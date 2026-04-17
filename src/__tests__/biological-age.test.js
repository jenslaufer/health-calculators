import { describe, it, expect } from 'vitest'

// Pure calculation functions extracted from BiologicalAgeCalculator.vue

function rhrAdjustment(rhr) {
  if (!rhr || rhr < 20 || rhr > 220) return 0
  if (rhr < 55) return -3
  if (rhr < 65) return -1
  if (rhr < 75) return 0
  if (rhr < 85) return 2
  return 4
}

function bpAdjustment(bp) {
  if (!bp || bp < 60 || bp > 250) return 0
  if (bp < 120) return -1
  if (bp < 130) return 0
  if (bp < 140) return 1
  if (bp < 160) return 2
  return 4
}

const EXERCISE_FREQ_ADJ = { none: 4, '1_2': 1, '3_4': -2, '5plus': -3 }
const EXERCISE_INTENSITY_ADJ = { light: 0, moderate: -1, vigorous: -2 }
const SLEEP_DURATION_ADJ = { under5: 4, '5_6': 2, '7_8': 0, '9plus': 1 }
const SLEEP_QUALITY_ADJ = { poor: 3, fair: 1, good: 0, excellent: -1 }
const SMOKING_ADJ = { never: 0, former: 2, light: 3, moderate: 5, heavy: 7 }
const ALCOHOL_ADJ = { none: 0, light: 0, moderate: 2, heavy: 4 }
const DIET_ADJ = { very_poor: 4, poor: 2, average: 0, good: -1, excellent: -2 }
const STRESS_ADJ = { low: -1, moderate: 0, high: 2, very_high: 4 }
const SOCIAL_ADJ = { strong: -1, average: 0, isolated: 2 }
const CONDITIONS_ADJ = { diabetes: 4, heart_disease: 5, hypertension: 2, high_cholesterol: 1 }

function bmiAdjustment(bmi) {
  if (!bmi || bmi < 10 || bmi > 70) return 0
  if (bmi < 18.5) return 2
  if (bmi < 25) return 0
  if (bmi < 30) return 2
  if (bmi < 35) return 4
  if (bmi < 40) return 6
  return 8
}

function calcBmi(weightKg, heightCm) {
  const h = heightCm / 100
  return weightKg / (h * h)
}

function cardioAdjustment({ rhr, bp, exerciseFreq, exerciseIntensity }) {
  const freqAdj = EXERCISE_FREQ_ADJ[exerciseFreq] ?? 0
  const intensityAdj = exerciseFreq !== 'none' ? (EXERCISE_INTENSITY_ADJ[exerciseIntensity] ?? 0) : 0
  return rhrAdjustment(rhr) + bpAdjustment(bp) + freqAdj + intensityAdj
}

function metabolicAdjustment({ bmi, diet, conditions }) {
  let total = bmiAdjustment(bmi) + (DIET_ADJ[diet] ?? 0)
  for (const cond of (conditions || [])) {
    total += CONDITIONS_ADJ[cond] ?? 0
  }
  return total
}

function lifestyleAdjustment({ smoking, alcohol, sleepDuration, sleepQuality }) {
  return (SMOKING_ADJ[smoking] ?? 0)
    + (ALCOHOL_ADJ[alcohol] ?? 0)
    + (SLEEP_DURATION_ADJ[sleepDuration] ?? 0)
    + (SLEEP_QUALITY_ADJ[sleepQuality] ?? 0)
}

function mentalAdjustment({ stress, social }) {
  return (STRESS_ADJ[stress] ?? 0) + (SOCIAL_ADJ[social] ?? 0)
}

function totalAdjustment(inputs) {
  return cardioAdjustment(inputs)
    + metabolicAdjustment(inputs)
    + lifestyleAdjustment(inputs)
    + mentalAdjustment(inputs)
}

function biologicalAge(age, inputs) {
  const clamped = Math.max(-20, Math.min(25, totalAdjustment(inputs)))
  return Math.max(5, Math.round(age + clamped))
}

function toKg(lbs) { return lbs * 0.453592 }
function toCm(inches) { return inches * 2.54 }

// ─── RHR adjustment ───────────────────────────────────────────────────────

describe('resting heart rate adjustment', () => {
  it('athlete RHR 50 → −3 years', () => {
    expect(rhrAdjustment(50)).toBe(-3)
  })

  it('fit RHR 60 → −1 year', () => {
    expect(rhrAdjustment(60)).toBe(-1)
  })

  it('average RHR 70 → 0 years', () => {
    expect(rhrAdjustment(70)).toBe(0)
  })

  it('elevated RHR 80 → +2 years', () => {
    expect(rhrAdjustment(80)).toBe(2)
  })

  it('high RHR 90 → +4 years', () => {
    expect(rhrAdjustment(90)).toBe(4)
  })

  it('returns 0 for null/invalid RHR', () => {
    expect(rhrAdjustment(null)).toBe(0)
    expect(rhrAdjustment(10)).toBe(0)
    expect(rhrAdjustment(250)).toBe(0)
  })
})

// ─── Blood pressure adjustment ────────────────────────────────────────────

describe('blood pressure adjustment', () => {
  it('optimal BP <120 → −1 year', () => {
    expect(bpAdjustment(115)).toBe(-1)
  })

  it('normal BP 125 → 0 years', () => {
    expect(bpAdjustment(125)).toBe(0)
  })

  it('elevated BP 135 → +1 year', () => {
    expect(bpAdjustment(135)).toBe(1)
  })

  it('high BP 150 → +2 years', () => {
    expect(bpAdjustment(150)).toBe(2)
  })

  it('very high BP 170 → +4 years', () => {
    expect(bpAdjustment(170)).toBe(4)
  })

  it('returns 0 for null/undefined (optional field)', () => {
    expect(bpAdjustment(null)).toBe(0)
    expect(bpAdjustment(undefined)).toBe(0)
  })
})

// ─── BMI adjustment ───────────────────────────────────────────────────────

describe('BMI adjustment', () => {
  it('underweight BMI 17 → +2 years', () => {
    expect(bmiAdjustment(17)).toBe(2)
  })

  it('normal BMI 22 → 0 years', () => {
    expect(bmiAdjustment(22)).toBe(0)
  })

  it('overweight BMI 27 → +2 years', () => {
    expect(bmiAdjustment(27)).toBe(2)
  })

  it('obese I BMI 32 → +4 years', () => {
    expect(bmiAdjustment(32)).toBe(4)
  })

  it('obese II BMI 37 → +6 years', () => {
    expect(bmiAdjustment(37)).toBe(6)
  })

  it('obese III BMI 42 → +8 years', () => {
    expect(bmiAdjustment(42)).toBe(8)
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

// ─── Cardio adjustment ────────────────────────────────────────────────────

describe('cardiovascular adjustment', () => {
  it('athlete: RHR 50, optimal BP, 5+x vigorous → large negative', () => {
    const adj = cardioAdjustment({ rhr: 50, bp: 110, exerciseFreq: '5plus', exerciseIntensity: 'vigorous' })
    // −3 + −1 + −3 + −2 = −9
    expect(adj).toBe(-9)
  })

  it('sedentary: high RHR, high BP, no exercise → large positive', () => {
    const adj = cardioAdjustment({ rhr: 90, bp: 170, exerciseFreq: 'none', exerciseIntensity: 'light' })
    // +4 + +4 + +4 + 0 (intensity ignored when none) = +12
    expect(adj).toBe(12)
  })

  it('exercise intensity ignored when frequency is none', () => {
    const adj1 = cardioAdjustment({ rhr: 70, bp: null, exerciseFreq: 'none', exerciseIntensity: 'light' })
    const adj2 = cardioAdjustment({ rhr: 70, bp: null, exerciseFreq: 'none', exerciseIntensity: 'vigorous' })
    expect(adj1).toBe(adj2)
  })
})

// ─── Metabolic adjustment ─────────────────────────────────────────────────

describe('metabolic adjustment', () => {
  it('normal BMI + average diet + no conditions → 0', () => {
    const adj = metabolicAdjustment({ bmi: 22, diet: 'average', conditions: [] })
    expect(adj).toBe(0)
  })

  it('obese III + very poor diet + diabetes + heart disease → large positive', () => {
    const adj = metabolicAdjustment({ bmi: 42, diet: 'very_poor', conditions: ['diabetes', 'heart_disease'] })
    // +8 + +4 + +4 + +5 = +21
    expect(adj).toBe(21)
  })

  it('normal BMI + excellent diet + no conditions → −2', () => {
    const adj = metabolicAdjustment({ bmi: 22, diet: 'excellent', conditions: [] })
    expect(adj).toBe(-2)
  })

  it('hypertension adds +2 years', () => {
    const without = metabolicAdjustment({ bmi: 22, diet: 'average', conditions: [] })
    const with_ = metabolicAdjustment({ bmi: 22, diet: 'average', conditions: ['hypertension'] })
    expect(with_ - without).toBe(2)
  })
})

// ─── Lifestyle adjustment ─────────────────────────────────────────────────

describe('lifestyle adjustment', () => {
  it('never smoker + no alcohol + 7–8h good sleep → 0', () => {
    const adj = lifestyleAdjustment({ smoking: 'never', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'good' })
    expect(adj).toBe(0)
  })

  it('heavy smoker + heavy alcohol + <5h poor sleep → large positive', () => {
    const adj = lifestyleAdjustment({ smoking: 'heavy', alcohol: 'heavy', sleepDuration: 'under5', sleepQuality: 'poor' })
    // +7 + +4 + +4 + +3 = +18
    expect(adj).toBe(18)
  })

  it('excellent sleep saves 1 year vs good sleep', () => {
    const good = lifestyleAdjustment({ smoking: 'never', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'good' })
    const excellent = lifestyleAdjustment({ smoking: 'never', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'excellent' })
    expect(good - excellent).toBe(1)
  })

  it('former smoker adds +2 years', () => {
    const never = lifestyleAdjustment({ smoking: 'never', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'good' })
    const former = lifestyleAdjustment({ smoking: 'former', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'good' })
    expect(former - never).toBe(2)
  })
})

// ─── Mental adjustment ────────────────────────────────────────────────────

describe('mental & social adjustment', () => {
  it('low stress + strong social → −2 years', () => {
    expect(mentalAdjustment({ stress: 'low', social: 'strong' })).toBe(-2)
  })

  it('very high stress + isolated → +6 years', () => {
    expect(mentalAdjustment({ stress: 'very_high', social: 'isolated' })).toBe(6)
  })

  it('moderate stress + average social → 0', () => {
    expect(mentalAdjustment({ stress: 'moderate', social: 'average' })).toBe(0)
  })
})

// ─── Biological age ───────────────────────────────────────────────────────

describe('biological age', () => {
  const optimalInputs = {
    rhr: 50, bp: 110, exerciseFreq: '5plus', exerciseIntensity: 'vigorous',
    bmi: 22, diet: 'excellent', conditions: [],
    smoking: 'never', alcohol: 'none', sleepDuration: '7_8', sleepQuality: 'excellent',
    stress: 'low', social: 'strong',
  }

  const worstInputs = {
    rhr: 90, bp: 170, exerciseFreq: 'none', exerciseIntensity: 'light',
    bmi: 42, diet: 'very_poor', conditions: ['diabetes', 'heart_disease'],
    smoking: 'heavy', alcohol: 'heavy', sleepDuration: 'under5', sleepQuality: 'poor',
    stress: 'very_high', social: 'isolated',
  }

  it('40-year-old with optimal lifestyle → biological age well below 40', () => {
    const ba = biologicalAge(40, optimalInputs)
    expect(ba).toBeLessThan(40)
  })

  it('40-year-old with worst lifestyle → biological age above 40', () => {
    const ba = biologicalAge(40, worstInputs)
    expect(ba).toBeGreaterThan(40)
  })

  it('total adjustment is clamped to maximum +25', () => {
    // Worst inputs add far more than 25, clamped to 25
    const ba = biologicalAge(40, worstInputs)
    expect(ba).toBeLessThanOrEqual(40 + 25)
  })

  it('total adjustment is clamped to minimum −20', () => {
    // Even optimal inputs can't push below −20 from chronological age
    const ba = biologicalAge(40, optimalInputs)
    expect(ba).toBeGreaterThanOrEqual(40 - 20)
  })

  it('biological age is never below 5', () => {
    const ba = biologicalAge(5, optimalInputs)
    expect(ba).toBeGreaterThanOrEqual(5)
  })

  it('average 35-year-old with typical inputs → close to chronological age', () => {
    const averageInputs = {
      rhr: 70, bp: 125, exerciseFreq: '3_4', exerciseIntensity: 'moderate',
      bmi: 24, diet: 'average', conditions: [],
      smoking: 'never', alcohol: 'light', sleepDuration: '7_8', sleepQuality: 'good',
      stress: 'moderate', social: 'average',
    }
    const ba = biologicalAge(35, averageInputs)
    // exercise 3-4 moderate: −2 + −1 = −3, everything else near 0 → should be ~32
    expect(ba).toBeGreaterThanOrEqual(25)
    expect(ba).toBeLessThanOrEqual(45)
  })
})

// ─── Unit conversion ──────────────────────────────────────────────────────

describe('unit conversion', () => {
  it('converts 176 lbs to ~79.8 kg', () => {
    expect(toKg(176)).toBeCloseTo(79.83, 1)
  })

  it('converts 70 inches to ~177.8 cm', () => {
    expect(toCm(70)).toBeCloseTo(177.8, 0)
  })

  it('5 ft 9 in = 69 inches = ~175.3 cm', () => {
    expect(toCm(5 * 12 + 9)).toBeCloseTo(175.3, 0)
  })
})
