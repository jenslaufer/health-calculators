// Steps → calories + distance.
// Baseline kcal ≈ steps × 0.04 × (weightKg / 70) for moderate walking.
// Distance km = steps × strideCm / 100 / 1000.
// Default stride 75 cm, or ~0.43 × heightCm if provided.

export function defaultStrideCm(heightCm) {
  if (heightCm && heightCm > 0) return heightCm * 0.43
  return 75
}

export function calcCalories(steps, weightKg) {
  if (!steps || steps <= 0 || !weightKg || weightKg <= 0) return 0
  return steps * 0.04 * (weightKg / 70)
}

export function calcDistanceKm(steps, strideCm) {
  if (!steps || steps <= 0 || !strideCm || strideCm <= 0) return 0
  return (steps * strideCm) / 100000
}

export function classifyActivity(steps) {
  if (!steps || steps <= 0) return 'sedentary'
  if (steps < 5000) return 'sedentary'
  if (steps < 7500) return 'low'
  if (steps < 10000) return 'moderate'
  if (steps < 12500) return 'active'
  return 'veryActive'
}

export function calcStepsResult(steps, weightKg, strideCm) {
  return {
    calories: calcCalories(steps, weightKg),
    distanceKm: calcDistanceKm(steps, strideCm),
    activity: classifyActivity(steps),
  }
}
