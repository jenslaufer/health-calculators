// Newborn bilirubin risk assessment via the Bhutani nomogram
// (Bhutani VK, Johnson L, Sivieri EM. Pediatrics 1999; 103(1): 6–14).
//
// The nomogram plots Total Serum Bilirubin (TSB) against postnatal age in hours
// for term and near-term healthy newborns (≥ 35 weeks gestational age, ≥ 2000 g).
// Risk zones are defined by hour-specific percentiles of the TSB distribution
// in the first 168 hours of life:
//
//   high-risk          : TSB ≥ 95th percentile
//   high-intermediate  : 76th – 94th percentile
//   low-intermediate   : 40th – 75th percentile
//   low-risk           :  < 40th percentile
//
// The 40th, 75th and 95th percentile reference points are taken from Bhutani's
// original nomogram (Pediatrics 1999) and AAP 2004/2022 guidance.
// Interpolation between sampled hours is linear.
//
// Conversions:
//   1 mg/dL = 17.1 µmol/L (molar mass of bilirubin ≈ 584.7 g/mol)

const UMOL_PER_MG_DL = 17.1

// Hour-specific TSB percentile values (mg/dL).
// Each row: [hours, p40, p75, p95]
const NOMOGRAM = [
  [12, 2.5, 4.5, 6.0],
  [24, 4.0, 6.0, 8.0],
  [36, 5.0, 7.5, 9.5],
  [48, 6.5, 8.5, 11.5],
  [60, 7.5, 9.5, 13.0],
  [72, 8.0, 10.0, 14.0],
  [84, 8.5, 10.5, 14.7],
  [96, 9.0, 11.0, 15.0],
  [108, 9.5, 11.5, 15.3],
  [120, 10.0, 12.0, 15.5],
  [132, 10.2, 12.2, 15.7],
  [144, 10.4, 12.4, 15.8],
  [156, 10.5, 12.5, 15.9],
  [168, 10.5, 12.5, 16.0],
]

const MIN_AGE_HOURS = 12
const MAX_AGE_HOURS = 168

export function toMgDl(value, unit) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) return null
  if (unit === 'mg/dL') return value
  if (unit === 'umol/L') return value / UMOL_PER_MG_DL
  return null
}

function interpolate(ageHours, columnIndex) {
  if (ageHours <= NOMOGRAM[0][0]) return NOMOGRAM[0][columnIndex]
  if (ageHours >= NOMOGRAM[NOMOGRAM.length - 1][0]) {
    return NOMOGRAM[NOMOGRAM.length - 1][columnIndex]
  }
  for (let i = 0; i < NOMOGRAM.length - 1; i++) {
    const [h1, ...vals1] = NOMOGRAM[i]
    const [h2, ...vals2] = NOMOGRAM[i + 1]
    if (ageHours >= h1 && ageHours <= h2) {
      const v1 = vals1[columnIndex - 1]
      const v2 = vals2[columnIndex - 1]
      const frac = (ageHours - h1) / (h2 - h1)
      return v1 + (v2 - v1) * frac
    }
  }
  return null
}

export function getPercentileThresholds(ageHours) {
  if (typeof ageHours !== 'number' || !Number.isFinite(ageHours)) return null
  if (ageHours < MIN_AGE_HOURS || ageHours > MAX_AGE_HOURS) return null
  return {
    p40: interpolate(ageHours, 1),
    p75: interpolate(ageHours, 2),
    p95: interpolate(ageHours, 3),
  }
}

export function classifyBilirubinZone(tsbMgDl, ageHours) {
  if (typeof tsbMgDl !== 'number' || !Number.isFinite(tsbMgDl) || tsbMgDl < 0) return null
  const t = getPercentileThresholds(ageHours)
  if (!t) return null
  if (tsbMgDl >= t.p95) return 'highRisk'
  if (tsbMgDl >= t.p75) return 'highIntermediate'
  if (tsbMgDl >= t.p40) return 'lowIntermediate'
  return 'lowRisk'
}

export function evaluateBilirubin({ tsb, tsbUnit, ageHours }) {
  if (typeof ageHours !== 'number' || !Number.isFinite(ageHours)) return null
  if (ageHours < MIN_AGE_HOURS || ageHours > MAX_AGE_HOURS) return null
  const tsbMgDl = toMgDl(tsb, tsbUnit)
  if (tsbMgDl === null) return null
  const thresholds = getPercentileThresholds(ageHours)
  const zone = classifyBilirubinZone(tsbMgDl, ageHours)
  return { tsbMgDl, ageHours, thresholds, zone }
}

export const BILIRUBIN_AGE_RANGE = { min: MIN_AGE_HOURS, max: MAX_AGE_HOURS }
