// Pregnancy BMI — pre-pregnancy BMI classification per IOM 2009 / WHO categories.
// BMI = weight (kg) / height (m)^2
// Classification thresholds (WHO, used by IOM 2009 for pregnancy guidance):
//   < 18.5  — underweight
//   18.5–24.9 — normal
//   25–29.9 — overweight
//   ≥ 30    — obese

export function calcBmi(weightKg, heightCm) {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return null
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

export function getBmiCategory(bmi) {
  if (bmi == null || bmi <= 0) return null
  if (bmi < 18.5) return 'underweight'
  if (bmi < 25) return 'normal'
  if (bmi < 30) return 'overweight'
  return 'obese'
}

// IOM 2009 total weight gain ranges (kg) by pre-pregnancy BMI category.
const IOM_GAIN = {
  singleton: {
    underweight: { min: 12.5, max: 18 },
    normal: { min: 11.5, max: 16 },
    overweight: { min: 7, max: 11.5 },
    obese: { min: 5, max: 9 },
  },
  twins: {
    underweight: { min: 12.5, max: 18 },
    normal: { min: 17, max: 25 },
    overweight: { min: 14, max: 23 },
    obese: { min: 11, max: 19 },
  },
}

export function getRecommendedGain(category, twins = false) {
  if (!category) return null
  const set = twins ? IOM_GAIN.twins : IOM_GAIN.singleton
  return set[category] || null
}

// Convert imperial inputs (lbs, inches) to metric.
export function lbsToKg(lbs) {
  if (!lbs || lbs <= 0) return null
  return lbs * 0.453592
}

export function inchesToCm(inches) {
  if (!inches || inches <= 0) return null
  return inches * 2.54
}
