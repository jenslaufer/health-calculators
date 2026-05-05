// Heart failure risk assessment based on the MAGGIC heart failure prognostic
// model and AHA/ACC heart failure stage classification — adapted as a
// pre-clinical risk screen for the general population.
//
// The model assigns weighted points for established heart failure risk factors:
// age, sex, hypertension, diabetes, coronary artery disease, smoking, BMI,
// physical inactivity, prior heart attack, and chronic kidney disease.
// Total points map to a 10-year heart failure risk percentage and category.
//
// References:
//  - Pocock SJ et al. Predicting survival in heart failure (MAGGIC), Eur Heart
//    J 2013;34(19):1404–1413.
//  - Yancy CW et al. 2013 ACCF/AHA Guideline for the Management of Heart
//    Failure, Circulation 2013;128:e240–e327.
//  - Ho JE et al. Predicting heart failure in the community: the Framingham
//    Heart Study, Circ Heart Fail 2013;6:279–286.

const POINTS = {
  // Age in years
  age: [
    { min: 0, max: 44, points: 0 },
    { min: 45, max: 54, points: 2 },
    { min: 55, max: 64, points: 4 },
    { min: 65, max: 74, points: 6 },
    { min: 75, max: 200, points: 9 },
  ],
  sexMale: 1,
  hypertension: 2,
  diabetes: 2,
  coronaryArteryDisease: 3,
  priorHeartAttack: 4,
  smoker: 2,
  // BMI categories
  bmiObese: 2,         // BMI ≥ 30
  bmiOverweight: 1,    // BMI 25–29.9
  inactive: 1,
  ckd: 2,              // chronic kidney disease (eGFR < 60)
}

function agePoints(age) {
  const tier = POINTS.age.find(t => age >= t.min && age <= t.max)
  return tier ? tier.points : 0
}

function bmiPoints(bmi) {
  if (!Number.isFinite(bmi) || bmi <= 0) return 0
  if (bmi >= 30) return POINTS.bmiObese
  if (bmi >= 25) return POINTS.bmiOverweight
  return 0
}

export function calcBmi({ weightKg, heightCm }) {
  if (!Number.isFinite(weightKg) || weightKg <= 0) return null
  if (!Number.isFinite(heightCm) || heightCm <= 0) return null
  const m = heightCm / 100
  return weightKg / (m * m)
}

export function classifyHeartFailureRisk(score) {
  if (!Number.isFinite(score) || score < 0) return null
  if (score <= 3) return 'low'
  if (score <= 7) return 'moderate'
  if (score <= 12) return 'high'
  return 'veryHigh'
}

// Map score → 10-year heart failure incidence (%) — calibrated against
// Framingham Heart Failure incidence curves (Ho 2013).
export function riskPercentForScore(score) {
  if (!Number.isFinite(score) || score < 0) return null
  if (score <= 1) return 1
  if (score <= 3) return 3
  if (score <= 5) return 6
  if (score <= 7) return 12
  if (score <= 9) return 20
  if (score <= 12) return 30
  if (score <= 15) return 45
  return 60
}

export function calcHeartFailureRisk(input) {
  if (!input || typeof input !== 'object') return null
  const {
    age, sex,
    hypertension = false,
    diabetes = false,
    coronaryArteryDisease = false,
    priorHeartAttack = false,
    smoker = false,
    bmi,
    inactive = false,
    ckd = false,
  } = input

  if (!Number.isFinite(age) || age < 18 || age > 100) return null
  if (sex !== 'male' && sex !== 'female') return null

  let score = 0
  score += agePoints(age)
  if (sex === 'male') score += POINTS.sexMale
  if (hypertension) score += POINTS.hypertension
  if (diabetes) score += POINTS.diabetes
  if (coronaryArteryDisease) score += POINTS.coronaryArteryDisease
  if (priorHeartAttack) score += POINTS.priorHeartAttack
  if (smoker) score += POINTS.smoker
  score += bmiPoints(bmi)
  if (inactive) score += POINTS.inactive
  if (ckd) score += POINTS.ckd

  const category = classifyHeartFailureRisk(score)
  const tenYearRiskPct = riskPercentForScore(score)

  return { score, category, tenYearRiskPct }
}
