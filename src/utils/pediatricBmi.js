// CDC BMI-for-age LMS percentile data (2–20 years) — simplified inline table.
// Approximated from the CDC 2000 BMI-for-age reference (boys + girls).
// Format: [ageYears, L, M, S]

export const LMS_BOYS = [
  [2.0, -1.7862, 16.5749, 0.07581],
  [3.0, -2.0707, 16.0490, 0.07505],
  [4.0, -2.2675, 15.7235, 0.07453],
  [5.0, -2.4040, 15.4961, 0.07423],
  [6.0, -2.5045, 15.3915, 0.07533],
  [7.0, -2.5764, 15.4181, 0.07811],
  [8.0, -2.6315, 15.5419, 0.08197],
  [9.0, -2.6754, 15.7472, 0.08667],
  [10.0, -2.7128, 16.0254, 0.09192],
  [11.0, -2.7464, 16.3653, 0.09745],
  [12.0, -2.7787, 16.7440, 0.10314],
  [13.0, -2.8117, 17.1419, 0.10874],
  [14.0, -2.8485, 17.5436, 0.11405],
  [15.0, -2.8919, 17.9335, 0.11888],
  [16.0, -2.9449, 18.3122, 0.12313],
  [17.0, -3.0103, 18.6781, 0.12671],
  [18.0, -3.0902, 19.0245, 0.12953],
  [19.0, -3.1846, 19.3450, 0.13155],
  [20.0, -3.2929, 19.6326, 0.13273],
]

export const LMS_GIRLS = [
  [2.0, -2.0699, 16.1450, 0.08006],
  [3.0, -2.1928, 15.7427, 0.07955],
  [4.0, -2.2929, 15.4076, 0.07953],
  [5.0, -2.3779, 15.2123, 0.08035],
  [6.0, -2.4517, 15.1571, 0.08210],
  [7.0, -2.5165, 15.2418, 0.08482],
  [8.0, -2.5734, 15.4640, 0.08851],
  [9.0, -2.6234, 15.8147, 0.09314],
  [10.0, -2.6677, 16.2670, 0.09859],
  [11.0, -2.7074, 16.7867, 0.10468],
  [12.0, -2.7436, 17.3403, 0.11119],
  [13.0, -2.7773, 17.8983, 0.11785],
  [14.0, -2.8094, 18.4382, 0.12437],
  [15.0, -2.8409, 18.9486, 0.13050],
  [16.0, -2.8722, 19.4279, 0.13604],
  [17.0, -2.9026, 19.8807, 0.14081],
  [18.0, -2.9303, 20.3160, 0.14467],
  [19.0, -2.9527, 20.7456, 0.14753],
  [20.0, -2.9669, 21.1843, 0.14934],
]

const LB_TO_KG = 0.45359237
const IN_TO_CM = 2.54

export function convertWeightToKg(weight, unit) {
  const v = Number(weight)
  if (!Number.isFinite(v) || v <= 0) return null
  return unit === 'imperial' ? v * LB_TO_KG : v
}

export function convertHeightToCm(height, unit) {
  const v = Number(height)
  if (!Number.isFinite(v) || v <= 0) return null
  return unit === 'imperial' ? v * IN_TO_CM : v
}

export function calcBmi(weightKg, heightCm) {
  const w = Number(weightKg)
  const h = Number(heightCm)
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return null
  const m = h / 100
  return w / (m * m)
}

function interpolateLMS(table, ageYears) {
  if (ageYears < table[0][0] || ageYears > table[table.length - 1][0]) return null
  for (let i = 0; i < table.length - 1; i++) {
    const [t0, L0, M0, S0] = table[i]
    const [t1, L1, M1, S1] = table[i + 1]
    if (ageYears >= t0 && ageYears <= t1) {
      const frac = t1 === t0 ? 0 : (ageYears - t0) / (t1 - t0)
      return [
        L0 + frac * (L1 - L0),
        M0 + frac * (M1 - M0),
        S0 + frac * (S1 - S0),
      ]
    }
  }
  return null
}

function lmsZscore(x, L, M, S) {
  if (Math.abs(L) < 1e-6) return Math.log(x / M) / S
  return (Math.pow(x / M, L) - 1) / (L * S)
}

// Standard normal CDF (Abramowitz & Stegun, error < 1.5e-7)
function normalCDF(z) {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741
  const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911
  const sign = z < 0 ? -1 : 1
  const x = Math.abs(z) / Math.SQRT2
  const t = 1 / (1 + p * x)
  const erf = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)
  return 0.5 * (1 + sign * erf)
}

export function calcBmiPercentile(bmi, ageYears, sex) {
  if (!Number.isFinite(bmi) || bmi <= 0) return null
  if (!Number.isFinite(ageYears) || ageYears < 2 || ageYears > 20) return null
  const table = sex === 'female' ? LMS_GIRLS : LMS_BOYS
  const lms = interpolateLMS(table, ageYears)
  if (!lms) return null
  const [L, M, S] = lms
  const z = lmsZscore(bmi, L, M, S)
  const p = normalCDF(z) * 100
  return Math.max(0.1, Math.min(99.9, p))
}

export function getCategory(percentile) {
  if (percentile === null || percentile === undefined || !Number.isFinite(percentile)) return null
  if (percentile < 5) return 'underweight'
  if (percentile < 85) return 'healthy'
  if (percentile < 95) return 'overweight'
  return 'obesity'
}

export function categoryColor(category) {
  switch (category) {
    case 'underweight': return 'text-amber-600'
    case 'healthy': return 'text-emerald-600'
    case 'overweight': return 'text-amber-600'
    case 'obesity': return 'text-red-500'
    default: return 'text-stone-400'
  }
}

export function categoryBg(category) {
  switch (category) {
    case 'underweight': return 'bg-amber-50 border-amber-200'
    case 'healthy': return 'bg-emerald-50 border-emerald-200'
    case 'overweight': return 'bg-amber-50 border-amber-200'
    case 'obesity': return 'bg-red-50 border-red-200'
    default: return 'bg-stone-50 border-stone-200'
  }
}
