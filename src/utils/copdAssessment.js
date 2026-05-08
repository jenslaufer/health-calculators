// COPD Assessment — combines validated tools used in GOLD 2023+ guidance.
//
// 1) mMRC (modified Medical Research Council) Dyspnea Scale
//    Single grade 0–4 (Bestall et al., Thorax 1999).
//
// 2) CAT (COPD Assessment Test) — 8 items, each 0–5, total 0–40
//    (Jones et al., Eur Respir J 2009).
//      <10  : low impact
//      10–20: medium impact
//      21–30: high impact
//      31–40: very high impact
//
// 3) Exacerbation history in the past 12 months
//      moderateCount  : 0, 1, or ≥2 moderate exacerbations
//      hospitalized   : ≥1 exacerbation leading to hospitalization (boolean)
//
// GOLD 2023 ABE assessment (symptom + exacerbation):
//   Group E : ≥2 moderate OR ≥1 hospitalization
//   Group B : 0–1 moderate AND not hospitalized AND (mMRC ≥ 2 OR CAT ≥ 10)
//   Group A : 0–1 moderate AND not hospitalized AND mMRC ≤ 1 AND CAT < 10
//
// Spirometric GOLD grade (1–4) requires FEV1 % predicted from a clinician
// and is intentionally NOT computed here — this calculator is symptom-based.

export const CAT_QUESTIONS = [
  'cough',
  'phlegm',
  'chestTightness',
  'breathlessness',
  'activityLimitation',
  'leavingHome',
  'sleep',
  'energy',
]

function isInt(v, lo, hi) {
  return Number.isInteger(v) && v >= lo && v <= hi
}

export function calcCatScore(answers) {
  if (!answers || typeof answers !== 'object') return null
  let total = 0
  for (const q of CAT_QUESTIONS) {
    if (!isInt(answers[q], 0, 5)) return null
    total += answers[q]
  }
  return total
}

export function classifyCat(score) {
  if (!isInt(score, 0, 40)) return null
  if (score < 10) return 'low'
  if (score <= 20) return 'medium'
  if (score <= 30) return 'high'
  return 'veryHigh'
}

export function classifyMmrc(grade) {
  if (!isInt(grade, 0, 4)) return null
  return grade <= 1 ? 'lowSymptoms' : 'highSymptoms'
}

export function classifyGold(input) {
  if (!input || typeof input !== 'object') return null
  const { mmrc, catScore, moderateCount, hospitalized } = input
  if (!isInt(mmrc, 0, 4)) return null
  if (!isInt(catScore, 0, 40)) return null
  if (!isInt(moderateCount, 0, 99)) return null
  if (typeof hospitalized !== 'boolean') return null

  if (moderateCount >= 2 || hospitalized) return 'E'
  if (mmrc >= 2 || catScore >= 10) return 'B'
  return 'A'
}

export function evaluateCopd(input) {
  if (!input || typeof input !== 'object') return null
  const { catAnswers, mmrc, moderateCount, hospitalized } = input

  const catScore = calcCatScore(catAnswers)
  if (catScore === null) return null
  if (!isInt(mmrc, 0, 4)) return null
  if (!isInt(moderateCount, 0, 99)) return null
  if (typeof hospitalized !== 'boolean') return null

  const goldGroup = classifyGold({ mmrc, catScore, moderateCount, hospitalized })
  return {
    catScore,
    catCategory: classifyCat(catScore),
    mmrc,
    mmrcCategory: classifyMmrc(mmrc),
    moderateCount,
    hospitalized,
    goldGroup,
  }
}
