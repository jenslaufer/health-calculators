// Schritte-Kalorien-Rechner — converts step count to calories burned and distance.
//
// Calorie baseline (moderate walking, ~5 km/h):
//   kcal = steps × 0.04 × (weightKg / 70)
// Calibration source: Tudor-Locke et al. 2008; Compendium of Physical Activities (Ainsworth 2011).
// 0.04 kcal/step at 70 kg is the canonical mid-range walking energy cost.
//
// Activity bands (Tudor-Locke 2008, "How many steps/day are enough?"):
//   < 5000        → sedentary
//   5000–7499     → low
//   7500–9999     → moderate
//   10000–12499   → active
//   ≥ 12500       → veryActive

const KCAL_PER_STEP_AT_70KG = 0.04
const REFERENCE_WEIGHT_KG = 70
const STRIDE_HEIGHT_FACTOR = 0.41
const DEFAULT_STRIDE_CM = 75

function isPositive(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function calcCalories(steps, weightKg) {
  if (!isPositive(steps) || !isPositive(weightKg)) return 0
  return steps * KCAL_PER_STEP_AT_70KG * (weightKg / REFERENCE_WEIGHT_KG)
}

export function calcDistanceKm(steps, strideCm) {
  if (!isPositive(steps) || !isPositive(strideCm)) return 0
  return (steps * strideCm) / 100000
}

export function classifyActivityLevel(steps) {
  if (typeof steps !== 'number' || !Number.isFinite(steps) || steps < 0) return null
  if (steps < 5000) return 'sedentary'
  if (steps < 7500) return 'low'
  if (steps < 10000) return 'moderate'
  if (steps < 12500) return 'active'
  return 'veryActive'
}

export function estimateStrideCm(heightCm) {
  if (!isPositive(heightCm)) return DEFAULT_STRIDE_CM
  return heightCm * STRIDE_HEIGHT_FACTOR
}

export function computeStepsResult({ steps, weightKg, strideCm, heightCm } = {}) {
  if (!isPositive(steps) || !isPositive(weightKg)) return null
  const stride = isPositive(strideCm) ? strideCm : estimateStrideCm(heightCm)
  return {
    kcal: calcCalories(steps, weightKg),
    km: calcDistanceKm(steps, stride),
    activityLevel: classifyActivityLevel(steps),
    strideCm: stride,
  }
}
