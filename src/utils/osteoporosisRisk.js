// Osteoporosis 10-year fracture risk screen (FRAX-inspired simplified model).
//
// Inputs combine demographic and clinical risk factors. The result is a
// weighted point score plus a low / moderate / high category.
//
// Risk-factor weights (points):
//   Age band:  <50 = 0, 50–64 = 1, 65–74 = 3, 75–84 = 5, ≥85 = 7
//   Sex:       female = 1
//   Low BMI:   <19 = 2, 19–20 = 1, ≥20 = 0
//   Previous fragility fracture:  3
//   Parent had hip fracture:      2
//   Current smoking:              1
//   Glucocorticoids ≥3 months:    2
//   Rheumatoid arthritis:         1
//   Secondary osteoporosis:       1
//   Alcohol ≥3 units/day:         2
//   Femoral-neck T-score (optional, overrides nothing):
//     ≤ -2.5  → +3 (osteoporosis)
//     -2.4 to -1.0 → +1 (osteopenia)
//     > -1.0  → 0
//
// Categories:
//   0–3   → low       (<10 % 10-year major fracture risk)
//   4–7   → moderate  (10–20 %)
//   ≥ 8   → high      (>20 %, treatment threshold)

const VALID_SEX = new Set(['female', 'male'])

function ageBand(age) {
  if (typeof age !== 'number' || !Number.isFinite(age) || age < 0) return null
  if (age < 50) return 0
  if (age < 65) return 1
  if (age < 75) return 3
  if (age < 85) return 5
  return 7
}

function bmiBand(bmi) {
  if (typeof bmi !== 'number' || !Number.isFinite(bmi) || bmi <= 0) return 0
  if (bmi < 19) return 2
  if (bmi < 20) return 1
  return 0
}

function tScoreBand(t) {
  if (typeof t !== 'number' || !Number.isFinite(t)) return 0
  if (t <= -2.5) return 3
  if (t <= -1.0) return 1
  return 0
}

export function calcBmi(weightKg, heightCm) {
  if (
    typeof weightKg !== 'number' || !Number.isFinite(weightKg) || weightKg <= 0 ||
    typeof heightCm !== 'number' || !Number.isFinite(heightCm) || heightCm <= 0
  ) return null
  const m = heightCm / 100
  return weightKg / (m * m)
}

export function categorize(score) {
  if (score >= 8) return 'high'
  if (score >= 4) return 'moderate'
  return 'low'
}

export function calcOsteoporosisRisk({
  age,
  sex,
  weightKg,
  heightCm,
  previousFracture = false,
  parentHipFracture = false,
  smoking = false,
  glucocorticoids = false,
  rheumatoidArthritis = false,
  secondaryOsteoporosis = false,
  alcohol3Plus = false,
  tScore = null,
} = {}) {
  if (!VALID_SEX.has(sex)) return null
  const aBand = ageBand(age)
  if (aBand === null) return null

  const bmi = calcBmi(weightKg, heightCm)

  let score = 0
  score += aBand
  if (sex === 'female') score += 1
  score += bmiBand(bmi)
  if (previousFracture) score += 3
  if (parentHipFracture) score += 2
  if (smoking) score += 1
  if (glucocorticoids) score += 2
  if (rheumatoidArthritis) score += 1
  if (secondaryOsteoporosis) score += 1
  if (alcohol3Plus) score += 2
  score += tScoreBand(tScore)

  return {
    score,
    category: categorize(score),
    bmi,
  }
}
