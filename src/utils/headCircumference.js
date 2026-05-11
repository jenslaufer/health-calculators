// Head Circumference Percentile Calculator
// Uses WHO Child Growth Standards 2006 LMS tables for head circumference 0–36 months.

import { BOYS_HC, GIRLS_HC, calcPercentile, percentileCategory } from '../data/whoGrowth.js'

export const HC_MIN_MONTHS = 0
export const HC_MAX_MONTHS = 36

export function inchesToCm(inches) {
  if (inches === null || inches === undefined || inches === '' || isNaN(inches)) return null
  const v = Number(inches)
  if (v <= 0) return null
  return v * 2.54
}

export function cmToInches(cm) {
  if (cm === null || cm === undefined || cm === '' || isNaN(cm)) return null
  const v = Number(cm)
  if (v <= 0) return null
  return v / 2.54
}

export function totalMonths(years, months) {
  const y = Number(years) || 0
  const m = Number(months) || 0
  return y * 12 + m
}

export function isAgeInRange(months) {
  return Number.isFinite(months) && months >= HC_MIN_MONTHS && months <= HC_MAX_MONTHS
}

export function headCircumferencePercentile({ sex, ageMonths, headCm }) {
  if (sex !== 'male' && sex !== 'female') return null
  if (!isAgeInRange(ageMonths)) return null
  if (!headCm || headCm <= 0) return null
  const table = sex === 'male' ? BOYS_HC : GIRLS_HC
  return calcPercentile(table, ageMonths, headCm)
}

export function headCircumferenceCategory(percentile) {
  return percentileCategory(percentile)
}
