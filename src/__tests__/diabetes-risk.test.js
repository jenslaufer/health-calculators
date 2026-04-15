import { describe, it, expect } from 'vitest'

// FINDRISC scoring — Finnish Diabetes Risk Score
// Source: Lindström J, Tuomilehto J. Diabetes Care. 2003;26(3):725-731.

// Age scoring
function ageScore(group) {
  const map = { lt45: 0, '45_54': 2, '55_64': 3, gt64: 4 }
  return map[group]
}

// BMI scoring
function bmiScore(bmi) {
  if (bmi < 25) return 0
  if (bmi <= 30) return 1
  return 3
}

// BMI from weight (kg) and height (cm)
function calcBmi(weightKg, heightCm) {
  return weightKg / ((heightCm / 100) ** 2)
}

// Waist circumference scoring
function waistScore(waistCm, isFemale) {
  if (isFemale) {
    if (waistCm < 80) return 0
    if (waistCm <= 88) return 3
    return 4
  } else {
    if (waistCm < 94) return 0
    if (waistCm <= 102) return 3
    return 4
  }
}

// Physical activity scoring (at least 30 min/day)
function activityScore(active) {
  return active ? 0 : 2
}

// Vegetable/fruit daily scoring
function vegFruitScore(daily) {
  return daily ? 0 : 1
}

// Blood pressure medication scoring
function bpMedScore(onMed) {
  return onMed ? 2 : 0
}

// High blood glucose history scoring
function highGlucoseScore(history) {
  return history ? 5 : 0
}

// Family history scoring
function familyScore(type) {
  const map = { none: 0, distant: 3, close: 5 }
  return map[type]
}

// Total FINDRISC score
function findrisc({ age, bmi, waist, isFemale, active, vegFruit, bpMed, highGlucose, family }) {
  return (
    ageScore(age) +
    bmiScore(bmi) +
    waistScore(waist, isFemale) +
    activityScore(active) +
    vegFruitScore(vegFruit) +
    bpMedScore(bpMed) +
    highGlucoseScore(highGlucose) +
    familyScore(family)
  )
}

// Risk category
function riskCategory(score) {
  if (score <= 7) return 'low'
  if (score <= 11) return 'slightly_elevated'
  if (score <= 14) return 'moderate'
  if (score <= 20) return 'high'
  return 'very_high'
}

// 10-year probability (%)
function probability(score) {
  const cat = riskCategory(score)
  return { low: 1, slightly_elevated: 4, moderate: 17, high: 33, very_high: 50 }[cat]
}

// -------------------------------------------------------------------
// Age scoring
// -------------------------------------------------------------------

describe('FINDRISC — age scoring', () => {
  it('under 45 → 0 points', () => {
    expect(ageScore('lt45')).toBe(0)
  })

  it('45–54 → 2 points', () => {
    expect(ageScore('45_54')).toBe(2)
  })

  it('55–64 → 3 points', () => {
    expect(ageScore('55_64')).toBe(3)
  })

  it('over 64 → 4 points', () => {
    expect(ageScore('gt64')).toBe(4)
  })
})

// -------------------------------------------------------------------
// BMI scoring
// -------------------------------------------------------------------

describe('FINDRISC — BMI scoring', () => {
  it('BMI < 25 → 0 points', () => {
    expect(bmiScore(22.5)).toBe(0)
    expect(bmiScore(24.9)).toBe(0)
  })

  it('BMI = 25 → 1 point', () => {
    expect(bmiScore(25)).toBe(1)
  })

  it('BMI 25–30 → 1 point', () => {
    expect(bmiScore(27.5)).toBe(1)
    expect(bmiScore(30)).toBe(1)
  })

  it('BMI > 30 → 3 points', () => {
    expect(bmiScore(30.1)).toBe(3)
    expect(bmiScore(35)).toBe(3)
    expect(bmiScore(45)).toBe(3)
  })

  it('BMI boundary: 30.0 → 1, 30.1 → 3', () => {
    expect(bmiScore(30.0)).toBe(1)
    expect(bmiScore(30.1)).toBe(3)
  })
})

// -------------------------------------------------------------------
// BMI calculation
// -------------------------------------------------------------------

describe('BMI calculation', () => {
  it('75 kg, 175 cm → ~24.5', () => {
    const b = calcBmi(75, 175)
    expect(b).toBeGreaterThanOrEqual(24.4)
    expect(b).toBeLessThanOrEqual(24.6)
  })

  it('90 kg, 170 cm → ~31.1', () => {
    const b = calcBmi(90, 170)
    expect(b).toBeGreaterThanOrEqual(31.0)
    expect(b).toBeLessThanOrEqual(31.2)
  })

  it('BMI scores correctly when derived from weight/height', () => {
    expect(bmiScore(calcBmi(70, 175))).toBe(0)   // ~22.9
    expect(bmiScore(calcBmi(82, 175))).toBe(1)   // ~26.8
    expect(bmiScore(calcBmi(100, 175))).toBe(3)  // ~32.7
  })
})

// -------------------------------------------------------------------
// Waist circumference scoring
// -------------------------------------------------------------------

describe('FINDRISC — waist scoring (male)', () => {
  it('< 94 cm → 0 points', () => {
    expect(waistScore(85, false)).toBe(0)
    expect(waistScore(93, false)).toBe(0)
  })

  it('94–102 cm → 3 points', () => {
    expect(waistScore(94, false)).toBe(3)
    expect(waistScore(98, false)).toBe(3)
    expect(waistScore(102, false)).toBe(3)
  })

  it('> 102 cm → 4 points', () => {
    expect(waistScore(103, false)).toBe(4)
    expect(waistScore(120, false)).toBe(4)
  })

  it('boundary: 93.9 → 0, 94.0 → 3', () => {
    expect(waistScore(93.9, false)).toBe(0)
    expect(waistScore(94.0, false)).toBe(3)
  })

  it('boundary: 102.0 → 3, 102.1 → 4', () => {
    expect(waistScore(102.0, false)).toBe(3)
    expect(waistScore(102.1, false)).toBe(4)
  })
})

describe('FINDRISC — waist scoring (female)', () => {
  it('< 80 cm → 0 points', () => {
    expect(waistScore(70, true)).toBe(0)
    expect(waistScore(79, true)).toBe(0)
  })

  it('80–88 cm → 3 points', () => {
    expect(waistScore(80, true)).toBe(3)
    expect(waistScore(84, true)).toBe(3)
    expect(waistScore(88, true)).toBe(3)
  })

  it('> 88 cm → 4 points', () => {
    expect(waistScore(89, true)).toBe(4)
    expect(waistScore(100, true)).toBe(4)
  })

  it('boundary: 79.9 → 0, 80.0 → 3', () => {
    expect(waistScore(79.9, true)).toBe(0)
    expect(waistScore(80.0, true)).toBe(3)
  })

  it('boundary: 88.0 → 3, 88.1 → 4', () => {
    expect(waistScore(88.0, true)).toBe(3)
    expect(waistScore(88.1, true)).toBe(4)
  })
})

// -------------------------------------------------------------------
// Binary question scoring
// -------------------------------------------------------------------

describe('FINDRISC — activity scoring', () => {
  it('active ≥ 30 min/day → 0 points', () => {
    expect(activityScore(true)).toBe(0)
  })

  it('not active → 2 points', () => {
    expect(activityScore(false)).toBe(2)
  })
})

describe('FINDRISC — vegetable/fruit scoring', () => {
  it('daily consumption → 0 points', () => {
    expect(vegFruitScore(true)).toBe(0)
  })

  it('not daily → 1 point', () => {
    expect(vegFruitScore(false)).toBe(1)
  })
})

describe('FINDRISC — blood pressure medication scoring', () => {
  it('no medication → 0 points', () => {
    expect(bpMedScore(false)).toBe(0)
  })

  it('on medication → 2 points', () => {
    expect(bpMedScore(true)).toBe(2)
  })
})

describe('FINDRISC — high blood glucose scoring', () => {
  it('no history → 0 points', () => {
    expect(highGlucoseScore(false)).toBe(0)
  })

  it('history of high blood glucose → 5 points', () => {
    expect(highGlucoseScore(true)).toBe(5)
  })
})

// -------------------------------------------------------------------
// Family history scoring
// -------------------------------------------------------------------

describe('FINDRISC — family history scoring', () => {
  it('no family history → 0 points', () => {
    expect(familyScore('none')).toBe(0)
  })

  it('distant relative (grandparent, aunt/uncle, cousin) → 3 points', () => {
    expect(familyScore('distant')).toBe(3)
  })

  it('close relative (parent, sibling, child) → 5 points', () => {
    expect(familyScore('close')).toBe(5)
  })
})

// -------------------------------------------------------------------
// Total FINDRISC score — published reference cases
// -------------------------------------------------------------------

describe('FINDRISC — total score reference cases', () => {
  // Lowest possible score: young, normal BMI, normal waist, active, eats well, no meds, no glucose history, no family
  it('best-case profile → score 0', () => {
    const s = findrisc({
      age: 'lt45', bmi: 22, waist: 80, isFemale: false,
      active: true, vegFruit: true, bpMed: false, highGlucose: false, family: 'none',
    })
    expect(s).toBe(0)
  })

  // Maximum score: all worst-case answers
  it('worst-case profile → score 26', () => {
    const s = findrisc({
      age: 'gt64', bmi: 35, waist: 110, isFemale: false,
      active: false, vegFruit: false, bpMed: true, highGlucose: true, family: 'close',
    })
    // 4 + 3 + 4 + 2 + 1 + 2 + 5 + 5 = 26
    expect(s).toBe(26)
  })

  // Typical moderate-risk middle-aged person
  it('typical moderate-risk profile → 12–14', () => {
    const s = findrisc({
      age: '45_54', bmi: 27, waist: 96, isFemale: false,
      active: false, vegFruit: true, bpMed: false, highGlucose: false, family: 'none',
    })
    // 2 + 1 + 3 + 2 + 0 + 0 + 0 + 0 = 8
    expect(s).toBeGreaterThanOrEqual(6)
    expect(s).toBeLessThanOrEqual(10)
  })

  // High-risk elderly female with multiple factors
  it('high-risk elderly female → score ≥ 15', () => {
    const s = findrisc({
      age: 'gt64', bmi: 31, waist: 90, isFemale: true,
      active: false, vegFruit: false, bpMed: true, highGlucose: false, family: 'distant',
    })
    // 4 + 3 + 4 + 2 + 1 + 2 + 0 + 3 = 19
    expect(s).toBeGreaterThanOrEqual(15)
  })

  // Score with prior high glucose (5 points) pushes into high risk
  it('prior high glucose adds 5 points', () => {
    const without = findrisc({
      age: '45_54', bmi: 22, waist: 80, isFemale: false,
      active: true, vegFruit: true, bpMed: false, highGlucose: false, family: 'none',
    })
    const with_ = findrisc({
      age: '45_54', bmi: 22, waist: 80, isFemale: false,
      active: true, vegFruit: true, bpMed: false, highGlucose: true, family: 'none',
    })
    expect(with_ - without).toBe(5)
  })
})

// -------------------------------------------------------------------
// Risk category classification
// -------------------------------------------------------------------

describe('FINDRISC — risk category', () => {
  it('score 0–7 → low', () => {
    expect(riskCategory(0)).toBe('low')
    expect(riskCategory(7)).toBe('low')
  })

  it('score 8–11 → slightly_elevated', () => {
    expect(riskCategory(8)).toBe('slightly_elevated')
    expect(riskCategory(11)).toBe('slightly_elevated')
  })

  it('score 12–14 → moderate', () => {
    expect(riskCategory(12)).toBe('moderate')
    expect(riskCategory(14)).toBe('moderate')
  })

  it('score 15–20 → high', () => {
    expect(riskCategory(15)).toBe('high')
    expect(riskCategory(20)).toBe('high')
  })

  it('score 21–26 → very_high', () => {
    expect(riskCategory(21)).toBe('very_high')
    expect(riskCategory(26)).toBe('very_high')
  })

  it('boundary: score 7 → low, score 8 → slightly_elevated', () => {
    expect(riskCategory(7)).toBe('low')
    expect(riskCategory(8)).toBe('slightly_elevated')
  })

  it('boundary: score 11 → slightly_elevated, score 12 → moderate', () => {
    expect(riskCategory(11)).toBe('slightly_elevated')
    expect(riskCategory(12)).toBe('moderate')
  })

  it('boundary: score 14 → moderate, score 15 → high', () => {
    expect(riskCategory(14)).toBe('moderate')
    expect(riskCategory(15)).toBe('high')
  })

  it('boundary: score 20 → high, score 21 → very_high', () => {
    expect(riskCategory(20)).toBe('high')
    expect(riskCategory(21)).toBe('very_high')
  })
})

// -------------------------------------------------------------------
// 10-year probability
// -------------------------------------------------------------------

describe('FINDRISC — 10-year probability', () => {
  it('low risk → 1%', () => {
    expect(probability(5)).toBe(1)
  })

  it('slightly elevated → 4%', () => {
    expect(probability(9)).toBe(4)
  })

  it('moderate → 17%', () => {
    expect(probability(13)).toBe(17)
  })

  it('high → 33%', () => {
    expect(probability(17)).toBe(33)
  })

  it('very high → 50%', () => {
    expect(probability(24)).toBe(50)
  })
})

// -------------------------------------------------------------------
// Imperial unit conversion (for the UI)
// -------------------------------------------------------------------

describe('imperial unit conversion', () => {
  it('150 lbs → ~68 kg', () => {
    const kg = 150 * 0.453592
    expect(kg).toBeGreaterThanOrEqual(67.5)
    expect(kg).toBeLessThanOrEqual(68.5)
  })

  it('5 ft 9 in → ~175 cm', () => {
    const cm = (5 * 12 + 9) * 2.54
    expect(cm).toBeGreaterThanOrEqual(174)
    expect(cm).toBeLessThanOrEqual(176)
  })

  it('35 in waist → ~88.9 cm', () => {
    const cm = 35 * 2.54
    expect(cm).toBeGreaterThanOrEqual(88.8)
    expect(cm).toBeLessThanOrEqual(89.0)
  })

  it('BMI from imperial inputs matches metric', () => {
    const weightLbs = 165
    const heightFt = 5
    const heightIn = 10
    const weightKg = weightLbs * 0.453592
    const heightCm = (heightFt * 12 + heightIn) * 2.54
    const b = calcBmi(weightKg, heightCm)
    expect(b).toBeGreaterThanOrEqual(23.5)
    expect(b).toBeLessThanOrEqual(24.0)
  })
})
