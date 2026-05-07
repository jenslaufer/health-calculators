// Hepatitis B/C risk screening from CDC/WHO exposure-factor recommendations.
//
// Each risk factor adds weighted points. Total score maps to a band:
//   0     → none
//   1–3   → low
//   4–7   → moderate
//   ≥ 8   → high
//
// HBV vaccination subtracts 2 points (cap at 0) — it markedly reduces HBV
// transmission risk but does not eliminate HCV risk, so the bonus is partial.
//
// Factor weights:
//   bornHighPrevalence         (2)  CDC: HBV-endemic country of birth
//   birthCohort1945to1965      (2)  CDC HCV-cohort
//   injectionDrugUse           (4)  highest single risk factor for HCV
//   transfusionBefore1992      (3)  pre-screening era
//   tattooPiercingUnsterile    (1)  non-licensed setting
//   multipleSexPartners        (1)  ≥4 partners in 6 months / unprotected
//   hivPositive                (2)  shared transmission routes
//   healthcareNeedlestick      (2)  occupational sharps exposure
//   householdContactInfected   (2)  shared razors / toothbrushes possible
//   hemodialysis               (3)  long-term dialysis
//   incarcerated               (1)  long-term incarceration history
//   maternalInfection          (3)  perinatal transmission risk
//   elevatedLiverEnzymes       (2)  unexplained ALT/AST elevation

const FACTOR_POINTS = {
  bornHighPrevalence: 2,
  birthCohort1945to1965: 2,
  injectionDrugUse: 4,
  transfusionBefore1992: 3,
  tattooPiercingUnsterile: 1,
  multipleSexPartners: 1,
  hivPositive: 2,
  healthcareNeedlestick: 2,
  householdContactInfected: 2,
  hemodialysis: 3,
  incarcerated: 1,
  maternalInfection: 3,
  elevatedLiverEnzymes: 2,
}

const VACCINE_BONUS = 2
const MAX_SCORE = Object.values(FACTOR_POINTS).reduce((a, b) => a + b, 0)

export function calcRiskScore(factors) {
  if (!factors || typeof factors !== 'object') return 0
  let score = 0
  for (const [key, points] of Object.entries(FACTOR_POINTS)) {
    if (factors[key]) score += points
  }
  if (factors.hbvVaccinated) score = Math.max(0, score - VACCINE_BONUS)
  return score
}

export function classifyRisk(score) {
  if (typeof score !== 'number' || !Number.isFinite(score) || score < 0) return 'none'
  if (score >= 8) return 'high'
  if (score >= 4) return 'moderate'
  if (score >= 1) return 'low'
  return 'none'
}

export function calcHepatitisRisk(factors = {}) {
  const score = calcRiskScore(factors)
  return {
    score,
    maxScore: MAX_SCORE,
    category: classifyRisk(score),
  }
}

export const FACTOR_KEYS = Object.keys(FACTOR_POINTS)
export const FACTOR_WEIGHTS = { ...FACTOR_POINTS }
