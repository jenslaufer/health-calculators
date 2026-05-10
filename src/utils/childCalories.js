// Child Calories Calculator — Estimated Energy Requirement (EER)
//
// Source: Institute of Medicine (IOM) / National Academies, Dietary Reference
// Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol,
// Protein, and Amino Acids (2002/2005). Equations for "normal-weight" boys
// and girls, ages 3–18 years.
//
// EER (kcal/day) — Boys 3–8y:    88.5 − 61.9·age + PA·(26.7·weight + 903·height) + 20
// EER (kcal/day) — Boys 9–18y:   88.5 − 61.9·age + PA·(26.7·weight + 903·height) + 25
// EER (kcal/day) — Girls 3–8y:  135.3 − 30.8·age + PA·(10.0·weight + 934·height) + 20
// EER (kcal/day) — Girls 9–18y: 135.3 − 30.8·age + PA·(10.0·weight + 934·height) + 25
//
// weight in kg, height in metres. PA = Physical Activity coefficient.
//
// Physical Activity coefficients (IOM, ages 3–18):
//   sedentary:    boys 1.00, girls 1.00
//   low_active:   boys 1.13, girls 1.16
//   active:       boys 1.26, girls 1.31
//   very_active:  boys 1.42, girls 1.56
//
// For toddlers (ages 1–2), the IOM specifies fixed values:
//   1y boy 948, 1y girl 865; 2y boy 1046, 2y girl 992 (kcal/day)
//
// This is an estimate. Individual needs vary with growth spurts, body
// composition and health status. Always consult a pediatrician.

export const KG_PER_LB = 0.453592
export const CM_PER_IN = 2.54

export const PA = {
  boy: { sedentary: 1.00, low_active: 1.13, active: 1.26, very_active: 1.42 },
  girl: { sedentary: 1.00, low_active: 1.16, active: 1.31, very_active: 1.56 },
}

export const ACTIVITY_LEVELS = ['sedentary', 'low_active', 'active', 'very_active']
export const SEXES = ['boy', 'girl']

const TODDLER_KCAL = {
  boy: { 1: 948, 2: 1046 },
  girl: { 1: 865, 2: 992 },
}

export function isFiniteNumber(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

export function isPlausibleAge(age) {
  return isFiniteNumber(age) && age >= 1 && age <= 18
}

export function isPlausibleWeightKg(kg) {
  return isFiniteNumber(kg) && kg >= 5 && kg <= 150
}

export function isPlausibleHeightCm(cm) {
  return isFiniteNumber(cm) && cm >= 60 && cm <= 220
}

export function lbToKg(lb) {
  return lb * KG_PER_LB
}

export function inToCm(inches) {
  return inches * CM_PER_IN
}

export function ftInToCm(ft, inches = 0) {
  return ft * 12 * CM_PER_IN + inches * CM_PER_IN
}

function ageOffset(age) {
  return age < 9 ? 20 : 25
}

export function calcEER({ age, sex, weightKg, heightCm, activity }) {
  if (!isPlausibleAge(age)) return null
  if (!SEXES.includes(sex)) return null
  if (!ACTIVITY_LEVELS.includes(activity)) return null

  // Toddler fixed values for ages 1 and 2 (IOM)
  if (age < 3) {
    const yr = Math.floor(age) === 0 ? 1 : Math.floor(age)
    return TODDLER_KCAL[sex][yr] || null
  }

  if (!isPlausibleWeightKg(weightKg)) return null
  if (!isPlausibleHeightCm(heightCm)) return null

  const heightM = heightCm / 100
  const pa = PA[sex][activity]
  const offset = ageOffset(age)

  if (sex === 'boy') {
    return 88.5 - 61.9 * age + pa * (26.7 * weightKg + 903 * heightM) + offset
  }
  return 135.3 - 30.8 * age + pa * (10.0 * weightKg + 934 * heightM) + offset
}

export function childCalories(input) {
  const eer = calcEER(input)
  if (eer === null) return null
  return {
    dailyKcal: Math.round(eer),
    activity: input.activity,
    sex: input.sex,
    age: input.age,
  }
}
