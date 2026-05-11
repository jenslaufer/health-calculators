// Breast milk alcohol calculator.
// Alcohol passes freely between blood and breast milk — milk alcohol ≈ BAC.
// Uses Widmark formula with r = 0.55 (women) and 0.15‰/h elimination rate.

const R_WOMEN = 0.55
const ELIMINATION_PER_HOUR = 0.15
const ALCOHOL_DENSITY = 0.8

export function calcAlcoholGrams(volumeMl, alcoholPct) {
  if (!volumeMl || volumeMl <= 0 || !alcoholPct || alcoholPct <= 0) return 0
  return volumeMl * (alcoholPct / 100) * ALCOHOL_DENSITY
}

export function calcMilkBac(alcoholGrams, bodyWeightKg) {
  if (!alcoholGrams || alcoholGrams <= 0 || !bodyWeightKg || bodyWeightKg <= 0) return 0
  return alcoholGrams / (bodyWeightKg * R_WOMEN)
}

export function calcCurrentMilkBac(rawBac, hoursElapsed) {
  if (!rawBac || rawBac <= 0) return 0
  return Math.max(0, rawBac - ELIMINATION_PER_HOUR * (hoursElapsed || 0))
}

export function calcHoursUntilClear(rawBac, hoursElapsed) {
  if (!rawBac || rawBac <= 0) return 0
  const remaining = rawBac - ELIMINATION_PER_HOUR * (hoursElapsed || 0)
  if (remaining <= 0) return 0
  return remaining / ELIMINATION_PER_HOUR
}

export function getTotalAlcoholGrams(drinks) {
  return drinks.reduce((sum, d) => sum + calcAlcoholGrams(d.volumeMl, d.alcoholPct), 0)
}
