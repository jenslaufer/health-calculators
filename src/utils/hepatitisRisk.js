// Hepatitis (B/C) exposure-based risk screen.
//
// Weights derived from CDC/USPSTF priority categories. The overall exposure
// score is summed and mapped to a risk band. HBV vaccination history adjusts
// the band downward by one step (Hep B is preventable; Hep C is not).
//
// Bands:
//   0       → none
//   1–3     → low
//   4–7     → moderate
//   ≥ 8     → high

const EXPOSURE_WEIGHTS = {
  injectionDrugUse: 4,
  bornHighPrevalenceCountry: 3,
  hivPositive: 3,
  hemodialysis: 3,
  transfusionBefore1992: 3,
  motherInfected: 3,
  incarceration: 2,
  needlestickExposure: 2,
  unregulatedTattooPiercing: 2,
  multipleSexualPartners: 2,
  sharedRazorsToothbrush: 1,
  travelEndemicArea: 1,
  chronicLiverDisease: 1,
}

const LEVELS = ['none', 'low', 'moderate', 'high']

export function calcExposureScore(exposures) {
  if (!exposures || typeof exposures !== 'object') return 0
  let score = 0
  for (const [key, weight] of Object.entries(EXPOSURE_WEIGHTS)) {
    if (exposures[key]) score += weight
  }
  return score
}

export function classifyHepatitisRisk(score) {
  if (score >= 8) return 'high'
  if (score >= 4) return 'moderate'
  if (score >= 1) return 'low'
  return 'none'
}

export function hbvVaccinated(score, vaccinated) {
  const base = classifyHepatitisRisk(score)
  if (!vaccinated) return base
  const idx = LEVELS.indexOf(base)
  return LEVELS[Math.max(0, idx - 1)]
}

export function calcHepatitisRisk(input) {
  if (!input || typeof input !== 'object') return null
  const { exposures, hbvVaccinated: vaccinated } = input
  const score = calcExposureScore(exposures)
  const category = hbvVaccinated(score, !!vaccinated)
  const exposureCount = exposures
    ? Object.keys(EXPOSURE_WEIGHTS).filter(k => exposures[k]).length
    : 0
  return {
    score,
    category,
    exposureCount,
    screeningRecommended: category === 'moderate' || category === 'high',
  }
}

export const EXPOSURES = EXPOSURE_WEIGHTS
