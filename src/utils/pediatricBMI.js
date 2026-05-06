// Pediatric BMI calculator — BMI-for-age percentile and CDC weight-status category.
//
// BMI for children and teens (2–20 years) is interpreted as an age- and
// sex-specific percentile, not against fixed adult cut-offs. The percentile
// is derived from WHO BMI-for-age LMS reference data via the BoxCox formula:
//
//   z = ((value / M)^L − 1) / (L · S)         (L ≠ 0)
//   z = ln(value / M) / S                     (L = 0)
//
// Percentile = Φ(z) · 100, where Φ is the standard normal CDF.
//
// CDC weight-status categories for ages 2–20:
//   < 5th         → underweight
//   5th – < 85th  → healthy
//   85th – < 95th → overweight
//   ≥ 95th        → obesity

// LMS rows: [ageMonths, L, M, S]
export const BOYS_BMI_LMS = [
  [24, -0.5884, 16.3920, 0.08550],
  [36, -0.5880, 15.6865, 0.08530],
  [48, -0.5878, 15.3122, 0.08630],
  [60, -0.5879, 15.0850, 0.08690],
  [72, -0.5880, 15.0195, 0.08770],
  [84, -0.5879, 15.0654, 0.08960],
  [96, -0.5882, 15.2484, 0.09290],
  [108, -0.5887, 15.5387, 0.09740],
  [120, -0.5892, 15.9128, 0.10270],
  [132, -0.5895, 16.3645, 0.10820],
  [144, -0.5896, 16.8823, 0.11340],
  [156, -0.5895, 17.4471, 0.11810],
  [168, -0.5892, 18.0362, 0.12180],
  [180, -0.5887, 18.6268, 0.12450],
  [192, -0.5882, 19.1952, 0.12610],
  [204, -0.5877, 19.7229, 0.12670],
  [216, -0.5872, 20.1991, 0.12630],
  [228, -0.5867, 20.6202, 0.12530],
  [240, -0.5862, 20.9955, 0.12410],
]

export const GIRLS_BMI_LMS = [
  [24, -1.3144, 16.1024, 0.08210],
  [36, -1.3139, 15.4375, 0.08130],
  [48, -1.3133, 15.0632, 0.08210],
  [60, -1.3129, 14.8602, 0.08360],
  [72, -1.3127, 14.7880, 0.08570],
  [84, -1.3126, 14.8264, 0.08900],
  [96, -1.3127, 14.9888, 0.09380],
  [108, -1.3129, 15.2573, 0.09980],
  [120, -1.3133, 15.6157, 0.10590],
  [132, -1.3138, 16.0424, 0.11180],
  [144, -1.3144, 16.5189, 0.11720],
  [156, -1.3150, 17.0258, 0.12180],
  [168, -1.3156, 17.5428, 0.12560],
  [180, -1.3162, 18.0513, 0.12850],
  [192, -1.3167, 18.5358, 0.13060],
  [204, -1.3172, 18.9844, 0.13190],
  [216, -1.3177, 19.3893, 0.13230],
  [228, -1.3181, 19.7438, 0.13180],
  [240, -1.3185, 20.0436, 0.13070],
]

export const MIN_AGE_MONTHS = 24
export const MAX_AGE_MONTHS = 240

function isPositiveFinite(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function calcBMI(weightKg, heightCm) {
  if (!isPositiveFinite(weightKg) || !isPositiveFinite(heightCm)) return null
  const hM = heightCm / 100
  return weightKg / (hM * hM)
}

function interpolateLMS(table, ageMonths) {
  if (ageMonths < table[0][0] || ageMonths > table[table.length - 1][0]) return null
  for (let i = 0; i < table.length - 1; i++) {
    const [a0, L0, M0, S0] = table[i]
    const [a1, L1, M1, S1] = table[i + 1]
    if (ageMonths >= a0 && ageMonths <= a1) {
      if (a0 === a1) return [L0, M0, S0]
      const f = (ageMonths - a0) / (a1 - a0)
      return [L0 + f * (L1 - L0), M0 + f * (M1 - M0), S0 + f * (S1 - S0)]
    }
  }
  const last = table[table.length - 1]
  return [last[1], last[2], last[3]]
}

function lmsZscore(x, L, M, S) {
  if (Math.abs(L) < 1e-6) return Math.log(x / M) / S
  return (Math.pow(x / M, L) - 1) / (L * S)
}

// Standard normal CDF — Abramowitz & Stegun approximation.
function normalCDF(z) {
  const a1 = 0.254829592
  const a2 = -0.284496736
  const a3 = 1.421413741
  const a4 = -1.453152027
  const a5 = 1.061405429
  const p = 0.3275911
  const sign = z < 0 ? -1 : 1
  const x = Math.abs(z) / Math.SQRT2
  const t = 1 / (1 + p * x)
  const erf = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)
  return 0.5 * (1 + sign * erf)
}

function pickTable(sex) {
  if (sex === 'male') return BOYS_BMI_LMS
  if (sex === 'female') return GIRLS_BMI_LMS
  return null
}

export function bmiZScore(ageMonths, sex, bmi) {
  if (!isPositiveFinite(bmi)) return null
  if (typeof ageMonths !== 'number' || !Number.isFinite(ageMonths)) return null
  if (ageMonths < MIN_AGE_MONTHS || ageMonths > MAX_AGE_MONTHS) return null
  const table = pickTable(sex)
  if (!table) return null
  const lms = interpolateLMS(table, ageMonths)
  if (!lms) return null
  return lmsZscore(bmi, lms[0], lms[1], lms[2])
}

export function bmiPercentile(ageMonths, sex, bmi) {
  const z = bmiZScore(ageMonths, sex, bmi)
  if (z === null) return null
  const p = normalCDF(z) * 100
  return Math.max(0.1, Math.min(99.9, p))
}

export function classifyPediatricBMI(percentile) {
  if (typeof percentile !== 'number' || !Number.isFinite(percentile)) return null
  if (percentile < 0 || percentile > 100) return null
  if (percentile < 5) return 'underweight'
  if (percentile < 85) return 'healthy'
  if (percentile < 95) return 'overweight'
  return 'obesity'
}

export function evaluatePediatricBMI({ ageMonths, sex, heightCm, weightKg } = {}) {
  const empty = { bmi: null, percentile: null, category: null, zScore: null }
  if (typeof ageMonths !== 'number' || !Number.isFinite(ageMonths)) return empty
  if (sex !== 'male' && sex !== 'female') return empty
  const bmi = calcBMI(weightKg, heightCm)
  if (bmi === null) return empty
  const z = bmiZScore(ageMonths, sex, bmi)
  const percentile = bmiPercentile(ageMonths, sex, bmi)
  const category = percentile !== null ? classifyPediatricBMI(percentile) : null
  return { bmi, percentile, category, zScore: z }
}
