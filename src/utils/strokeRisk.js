// CHA₂DS₂-VASc score (Lip et al., Chest 2010) — stroke risk in atrial fibrillation.
// Annual stroke rates from Friberg et al., Eur Heart J 2012 (Swedish AF cohort).
//
// Components (max 9 points):
//   C  Congestive heart failure / LV dysfunction          1
//   H  Hypertension                                        1
//   A₂ Age ≥ 75                                            2
//   D  Diabetes mellitus                                   1
//   S₂ Prior stroke / TIA / thromboembolism                2
//   V  Vascular disease (CAD, PAD, aortic plaque)          1
//   A  Age 65–74                                           1
//   Sc Sex category — female                               1

const ANNUAL_RISK_PCT = {
  0: 0.2,
  1: 0.6,
  2: 2.2,
  3: 3.2,
  4: 4.8,
  5: 7.2,
  6: 9.7,
  7: 11.2,
  8: 10.8,
  9: 12.2,
}

function isValidSex(sex) {
  return sex === 'male' || sex === 'female'
}

export function calcChaDsVascScore({
  age,
  sex,
  heartFailure,
  hypertension,
  diabetes,
  strokeHistory,
  vascularDisease,
}) {
  if (age == null || !Number.isFinite(age) || age <= 0) return null
  if (!isValidSex(sex)) return null

  let score = 0
  if (heartFailure) score += 1
  if (hypertension) score += 1
  if (age >= 75) score += 2
  else if (age >= 65) score += 1
  if (diabetes) score += 1
  if (strokeHistory) score += 2
  if (vascularDisease) score += 1
  if (sex === 'female') score += 1
  return score
}

export function classifyStrokeRisk(score) {
  if (!Number.isFinite(score) || score < 0 || score > 9) return null
  if (score === 0) return 'low'
  if (score === 1) return 'borderline'
  if (score < 4) return 'moderate'
  if (score < 6) return 'high'
  return 'veryHigh'
}

function anticoagulationRecommendation(score, sex) {
  if (score === 0) return 'none'
  // Female sex alone scores 1 but does not increase stroke risk meaningfully —
  // ESC 2020 guideline: no anticoagulation if score is 1 only because of sex.
  if (score === 1 && sex === 'female') return 'none'
  if (score === 1) return 'consider'
  return 'recommended'
}

export function calcStrokeRisk(input) {
  const score = calcChaDsVascScore(input)
  if (score === null) return null
  const category = classifyStrokeRisk(score)
  const annualRiskPct = ANNUAL_RISK_PCT[score]
  const anticoagulation = anticoagulationRecommendation(score, input.sex)
  return { score, category, annualRiskPct, anticoagulation }
}
