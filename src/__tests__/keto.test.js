import { describe, it, expect } from 'vitest'

// Pure keto macro calculation functions — extracted to be testable

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extreme: 1.9,
}

function calcBmr(gender, weightKg, heightCm, age) {
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161
}

function calcTdee(bmr, activity) {
  return bmr * (activityFactors[activity] || 1.55)
}

function calcTargetCalories(tdee, goal) {
  const modifiers = { lose: 0.8, maintain: 1.0, muscle: 1.1 }
  return Math.round(tdee * (modifiers[goal] || 1.0))
}

function calcLeanBodyMass(weightKg, bodyFatPct) {
  if (bodyFatPct == null || bodyFatPct <= 0 || bodyFatPct >= 100) return null
  return weightKg * (1 - bodyFatPct / 100)
}

function calcKetoMacros(targetCalories, goal, leanBodyMassKg, weightKg, netCarbLimit) {
  const carbCalories = netCarbLimit * 4
  const lbm = leanBodyMassKg || weightKg * 0.75
  const lbmLbs = lbm * 2.20462
  const proteinPerLb = goal === 'muscle' ? 1.0 : 0.8
  const proteinGrams = Math.round(lbmLbs * proteinPerLb)
  const proteinCalories = proteinGrams * 4
  const fatCalories = targetCalories - carbCalories - proteinCalories
  const fatGrams = Math.round(fatCalories / 9)
  const carbPct = Math.round((carbCalories / targetCalories) * 100)
  const proteinPct = Math.round((proteinCalories / targetCalories) * 100)
  const fatPct = 100 - carbPct - proteinPct
  const fiberRecommendation = Math.round(targetCalories / 1000 * 14)

  return {
    netCarbs: { grams: netCarbLimit, pct: carbPct },
    protein: { grams: proteinGrams, pct: proteinPct },
    fat: { grams: fatGrams, pct: fatPct },
    fiberRecommendation,
  }
}

describe('BMR calculation (Mifflin-St Jeor)', () => {
  it('calculates BMR for a 30-year-old male, 80kg, 175cm', () => {
    const bmr = calcBmr('male', 80, 175, 30)
    // 10*80 + 6.25*175 - 5*30 + 5 = 800 + 1093.75 - 150 + 5 = 1748.75
    expect(bmr).toBeCloseTo(1748.75)
  })

  it('calculates BMR for a 30-year-old female, 65kg, 165cm', () => {
    const bmr = calcBmr('female', 65, 165, 30)
    // 10*65 + 6.25*165 - 5*30 - 161 = 650 + 1031.25 - 150 - 161 = 1370.25
    expect(bmr).toBeCloseTo(1370.25)
  })
})

describe('TDEE calculation', () => {
  it('applies sedentary factor (1.2)', () => {
    expect(calcTdee(1748.75, 'sedentary')).toBeCloseTo(2098.5)
  })

  it('applies very active factor (1.725)', () => {
    expect(calcTdee(1748.75, 'very')).toBeCloseTo(3016.59, 0)
  })
})

describe('Target calories by goal', () => {
  it('weight loss: 80% of TDEE', () => {
    expect(calcTargetCalories(2500, 'lose')).toBe(2000)
  })

  it('maintenance: 100% of TDEE', () => {
    expect(calcTargetCalories(2500, 'maintain')).toBe(2500)
  })

  it('muscle gain: 110% of TDEE', () => {
    expect(calcTargetCalories(2500, 'muscle')).toBe(2750)
  })
})

describe('Lean body mass', () => {
  it('calculates LBM from weight and body fat %', () => {
    expect(calcLeanBodyMass(80, 20)).toBeCloseTo(64)
  })

  it('returns null for invalid body fat %', () => {
    expect(calcLeanBodyMass(80, 0)).toBeNull()
    expect(calcLeanBodyMass(80, 100)).toBeNull()
    expect(calcLeanBodyMass(80, null)).toBeNull()
  })
})

describe('Keto macro calculation', () => {
  it('calculates macros with 20g net carbs, maintenance, with body fat', () => {
    // 2500 kcal, maintain, LBM=64kg, weight=80kg, 20g carbs
    const result = calcKetoMacros(2500, 'maintain', 64, 80, 20)
    // carbs: 20g = 80 cal
    // protein: 64*2.20462*0.8 = 112.9g => 113g => 452 cal
    // fat: (2500 - 80 - 452) / 9 = 218.7g => 219g
    expect(result.netCarbs.grams).toBe(20)
    expect(result.protein.grams).toBe(113)
    expect(result.fat.grams).toBe(219)
    expect(result.netCarbs.pct + result.protein.pct + result.fat.pct).toBe(100)
  })

  it('calculates macros for muscle gain (1.0g protein per lb LBM)', () => {
    const result = calcKetoMacros(2750, 'muscle', 64, 80, 20)
    // protein: 64*2.20462*1.0 = 141.1g => 141g => 564 cal
    // fat: (2750 - 80 - 564) / 9 = 234g
    expect(result.protein.grams).toBe(141)
    expect(result.fat.grams).toBe(234)
  })

  it('falls back to 75% bodyweight when no body fat provided', () => {
    const result = calcKetoMacros(2500, 'maintain', null, 80, 20)
    // LBM fallback: 80*0.75 = 60kg
    // protein: 60*2.20462*0.8 = 105.8g => 106g
    expect(result.protein.grams).toBe(106)
  })

  it('uses custom net carb limit', () => {
    const result = calcKetoMacros(2500, 'maintain', 64, 80, 30)
    expect(result.netCarbs.grams).toBe(30)
  })

  it('calculates fiber recommendation based on calories', () => {
    const result = calcKetoMacros(2000, 'maintain', 64, 80, 20)
    // 2000/1000 * 14 = 28g
    expect(result.fiberRecommendation).toBe(28)
  })

  it('percentages always sum to 100', () => {
    const result = calcKetoMacros(2200, 'lose', 55, 70, 25)
    expect(result.netCarbs.pct + result.protein.pct + result.fat.pct).toBe(100)
  })
})
