// Baby feeding amount calculator (formula / pumped breast milk).
//
// Pediatric guideline (AAP, ESPGHAN): bottle-fed infants need approximately
// 150 ml of formula per kg of body weight per day during the first ~6 months.
// After 6 months, complementary foods reduce milk intake to ~120 ml/kg/day.
// Daily intake is generally capped at ~960 ml (32 oz) regardless of weight.
//
// This is an estimate. Demand-feeding cues should always take precedence over
// schedules. Breastfed infants self-regulate and these values do NOT apply.

export const ML_PER_KG_UNDER_6M = 150
export const ML_PER_KG_FROM_6M = 120
export const DAILY_CAP_ML = 960
export const ML_PER_OZ = 29.5735
export const KG_PER_LB = 0.453592

export function isFiniteNumber(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

export function isPlausibleAge(months) {
  if (!isFiniteNumber(months)) return false
  return months >= 0 && months <= 24
}

export function isPlausibleWeightKg(kg) {
  if (!isFiniteNumber(kg)) return false
  return kg >= 1 && kg <= 18
}

export function mlToOz(ml) {
  return ml / ML_PER_OZ
}

export function lbToKg(lb) {
  return lb * KG_PER_LB
}

export function calcDailyAmountMl(weightKg, ageMonths) {
  if (!isFiniteNumber(weightKg) || weightKg <= 0) return null
  if (!isFiniteNumber(ageMonths) || ageMonths < 0) return null
  const factor = ageMonths < 6 ? ML_PER_KG_UNDER_6M : ML_PER_KG_FROM_6M
  return Math.min(weightKg * factor, DAILY_CAP_ML)
}

export function feedingsPerDay(ageMonths) {
  if (ageMonths < 1) return 8
  if (ageMonths < 3) return 7
  if (ageMonths < 5) return 6
  if (ageMonths < 6) return 5
  if (ageMonths < 9) return 4
  return 3
}

export function calcPerFeedingMl(weightKg, ageMonths) {
  const daily = calcDailyAmountMl(weightKg, ageMonths)
  if (daily === null) return null
  return daily / feedingsPerDay(ageMonths)
}

export function babyFeedingAmount({ weightKg, ageMonths }) {
  if (!isPlausibleAge(ageMonths)) return null
  if (!isFiniteNumber(weightKg) || weightKg <= 0) return null
  const dailyMl = calcDailyAmountMl(weightKg, ageMonths)
  if (dailyMl === null) return null
  const feedings = feedingsPerDay(ageMonths)
  return {
    dailyMl,
    feedings,
    perFeedingMl: dailyMl / feedings,
    dailyOz: mlToOz(dailyMl),
    perFeedingOz: mlToOz(dailyMl / feedings),
  }
}
