// Baby feeding amount calculator — daily milk volume by age and body weight.
// Reference: AAP and WHO infant feeding guidance.
//   Term infants <6 months: ~150 ml of milk per kg of body weight per day.
//   6–11 months (solids introduced): ~120 ml/kg/day.
//   12+ months (mostly solids): ~90 ml/kg/day.
// Per-feeding amount = daily amount / feedings appropriate for the age stage.

export const LB_TO_KG = 0.453592
export const OZ_TO_ML = 29.5735 // US fluid ounce

export function getStageByAgeMonths(ageMonths) {
  if (ageMonths == null) return null
  if (ageMonths < 2) return 'newborn'
  if (ageMonths < 4) return 'earlyInfant'
  if (ageMonths < 6) return 'midInfant'
  if (ageMonths < 12) return 'solidsIntro'
  return 'toddler'
}

export function getMlPerKg(ageMonths) {
  if (ageMonths == null) return 0
  if (ageMonths < 6) return 150
  if (ageMonths < 12) return 120
  return 90
}

export function getFeedingsPerDay(ageMonths) {
  if (ageMonths == null) return 0
  if (ageMonths < 1) return 8
  if (ageMonths < 2) return 7
  if (ageMonths < 4) return 6
  if (ageMonths < 6) return 6
  if (ageMonths < 9) return 5
  if (ageMonths < 12) return 5
  return 4
}

export function calcDailyAmountMl(weightKg, ageMonths = 0) {
  if (!weightKg || weightKg <= 0) return 0
  return weightKg * getMlPerKg(ageMonths)
}

export function calcPerFeedingMl(dailyMl, feedings) {
  if (!dailyMl || dailyMl <= 0 || !feedings || feedings <= 0) return 0
  return dailyMl / feedings
}

function isFiniteNum(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

export function babyFeedingAmount({ ageMonths, weight, unit = 'metric' }) {
  if (!isFiniteNum(ageMonths) || !isFiniteNum(weight)) return null
  if (ageMonths < 0 || weight <= 0) return null
  const weightKg = unit === 'imperial' ? weight * LB_TO_KG : weight
  const mlPerKg = getMlPerKg(ageMonths)
  const dailyMl = weightKg * mlPerKg
  const feedings = getFeedingsPerDay(ageMonths)
  const perFeedingMl = calcPerFeedingMl(dailyMl, feedings)
  return {
    stage: getStageByAgeMonths(ageMonths),
    weightKg,
    mlPerKg,
    dailyMl,
    dailyOz: dailyMl / OZ_TO_ML,
    feedings,
    perFeedingMl,
    perFeedingOz: perFeedingMl / OZ_TO_ML,
  }
}
