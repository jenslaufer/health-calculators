// WHtR — Waist-to-Height Ratio
// Reference: Ashwell M, Gunn P, Gibson S. (2012). Obesity Reviews, 13(3): 275-286.
// "Keep your waist circumference to less than half your height."

export function calcWhtr(waistCm, heightCm) {
  if (!waistCm || !heightCm || waistCm <= 0 || heightCm <= 0) return null
  return waistCm / heightCm
}

// Ashwell age-adjusted boundaries: lower edge of "moderate" rises with age.
// Under 40: standard; 40-50: +0.005; over 50: +0.05.
function ageOffset(ageYears) {
  if (ageYears > 50) return 0.05
  if (ageYears >= 40) return 0.005
  return 0
}

export function getWhtrRiskZone(whtr, ageYears) {
  if (whtr == null || ageYears == null) return null

  const off = ageOffset(ageYears)

  if (whtr < 0.40) return 'slim'
  if (whtr < 0.50 + off) return 'low'
  if (whtr < 0.55 + off) return 'moderate'
  if (whtr < 0.60 + off) return 'increased'
  return 'high'
}
