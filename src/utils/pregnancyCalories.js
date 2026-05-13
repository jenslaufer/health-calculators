// Pregnancy Calorie Needs Calculator
//
// Estimates daily calorie needs during pregnancy by combining the
// pre-pregnancy Estimated Energy Requirement (EER) for adult women with
// the trimester-specific energy supplement.
//
// Source: U.S. Institute of Medicine (IOM) / National Academies, Dietary
// Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids,
// Cholesterol, Protein, and Amino Acids (2002/2005).
//
// Pre-pregnancy EER for women aged 19+:
//   EER = 354 − 6.91·age + PA·(9.36·weight + 726·height)
//   weight in kg, height in metres.
//
// Physical Activity (PA) coefficients (women):
//   sedentary    1.00
//   low_active   1.12
//   active       1.27
//   very_active  1.45
//
// Pregnancy supplement (singleton):
//   Trimester 1: +0 kcal
//   Trimester 2: +340 kcal
//   Trimester 3: +452 kcal
//
// For twin pregnancies, an additional +300 kcal/day is commonly recommended
// in the 2nd and 3rd trimester (ACOG / clinical practice; no extra in T1).
//
// This is a population estimate. Individual needs vary with body composition,
// metabolism and pregnancy course. Always consult a midwife or doctor.

export const KG_PER_LB = 0.453592
export const CM_PER_IN = 2.54

export const PA = {
  sedentary: 1.00,
  low_active: 1.12,
  active: 1.27,
  very_active: 1.45,
}

export const ACTIVITY_LEVELS = ['sedentary', 'low_active', 'active', 'very_active']
export const TRIMESTERS = [1, 2, 3]

const TRIMESTER_KCAL = { 1: 0, 2: 340, 3: 452 }
const TWIN_EXTRA_KCAL = 300

function isFiniteNumber(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

export function isPlausibleAge(age) {
  return isFiniteNumber(age) && age >= 18 && age <= 50
}

export function isPlausibleWeightKg(kg) {
  return isFiniteNumber(kg) && kg >= 35 && kg <= 200
}

export function isPlausibleHeightCm(cm) {
  return isFiniteNumber(cm) && cm >= 130 && cm <= 210
}

export function lbToKg(lb) {
  return lb * KG_PER_LB
}

export function inToCm(inches) {
  return inches * CM_PER_IN
}

export function calcPrePregnancyEER({ age, weightKg, heightCm, activity }) {
  if (!isPlausibleAge(age)) return null
  if (!isPlausibleWeightKg(weightKg)) return null
  if (!isPlausibleHeightCm(heightCm)) return null
  if (!ACTIVITY_LEVELS.includes(activity)) return null

  const heightM = heightCm / 100
  const pa = PA[activity]
  return 354 - 6.91 * age + pa * (9.36 * weightKg + 726 * heightM)
}

export function trimesterAddition(trimester, { twins = false } = {}) {
  if (!TRIMESTERS.includes(trimester)) return null
  const base = TRIMESTER_KCAL[trimester]
  if (!twins) return base
  return trimester === 1 ? base : base + TWIN_EXTRA_KCAL
}

export function pregnancyCalories({ age, weightKg, heightCm, activity, trimester, twins = false } = {}) {
  const prePregnancy = calcPrePregnancyEER({ age, weightKg, heightCm, activity })
  if (prePregnancy === null) return null
  const addition = trimesterAddition(trimester, { twins })
  if (addition === null) return null
  return {
    prePregnancyKcal: Math.round(prePregnancy),
    addition,
    dailyKcal: Math.round(prePregnancy) + addition,
    trimester,
    twins,
  }
}
