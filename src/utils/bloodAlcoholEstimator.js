// Quick Blood Alcohol Estimator using US standard drinks (14 g pure alcohol per drink)
// and the Widmark formula. Output is in % BAC (g/dL) — US convention.
//
//   alcoholGrams = drinks × 14
//   BAC (%) = alcoholGrams / (weightKg × r) × 0.1 − 0.015 × hours
//   r = 0.68 (male), 0.55 (female)  — Widmark distribution ratios
//   Elimination ~ 0.015 % per hour (≈ 0.15 g/L per hour)

const STD_DRINK_GRAMS = 14
const ELIMINATION_PCT_PER_HOUR = 0.015
const WIDMARK_R = { male: 0.68, female: 0.55 }

function isValidSex(sex) {
  return sex === 'male' || sex === 'female'
}

function rawBac({ standardDrinks, weightKg, sex }) {
  const grams = standardDrinks * STD_DRINK_GRAMS
  return (grams / (weightKg * WIDMARK_R[sex])) * 0.1
}

export function estimateBac({ standardDrinks, weightKg, sex, hours = 0 } = {}) {
  if (standardDrinks == null || standardDrinks < 0) return null
  if (weightKg == null || weightKg <= 0) return null
  if (!isValidSex(sex)) return null
  const peak = rawBac({ standardDrinks, weightKg, sex })
  const elapsed = hours > 0 ? hours : 0
  return Math.max(0, peak - ELIMINATION_PCT_PER_HOUR * elapsed)
}

export function timeUntilSober(bac) {
  if (bac == null || bac <= 0) return 0
  return bac / ELIMINATION_PCT_PER_HOUR
}

export function classifyImpairment(bac) {
  if (bac == null) return null
  if (bac <= 0) return 'sober'
  if (bac < 0.03) return 'minimal'
  if (bac < 0.08) return 'mild'
  if (bac < 0.15) return 'legal'
  if (bac < 0.30) return 'significant'
  return 'dangerous'
}

export function estimate(input) {
  const bac = estimateBac(input)
  if (bac === null) return null
  return {
    bac,
    timeUntilSober: timeUntilSober(bac),
    impairment: classifyImpairment(bac),
  }
}
