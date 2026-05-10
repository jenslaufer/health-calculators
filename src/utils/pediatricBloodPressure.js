// Pediatric blood pressure stratification — AAP 2017 simplified screening table
// (Flynn et al., Pediatrics 2017 — "Clinical Practice Guideline for Screening
// and Management of High Blood Pressure in Children and Adolescents").
//
// Simplified BP cutoffs (90th and 95th percentile) for ages 1–12 by sex.
// For age ≥ 13 the AHA adult thresholds replace the percentile table.
//
// Categories (worst of SBP / DBP wins):
//   normal      — SBP and DBP < 90th percentile  (<120/<80 if ≥13)
//   elevated    — 90th ≤ BP < 95th percentile    (120–129/<80 if ≥13)
//   stage1      — 95th ≤ BP < 95th + 12 mmHg     (130–139/80–89 if ≥13)
//   stage2      — BP ≥ 95th + 12 mmHg            (≥140/≥90 if ≥13)
//
// Reference values are taken from AAP 2017 Table 3 ("simplified BP table").
// For ages 1–12 the 90th percentile is for the 5th height percentile —
// the conservative cutoff that maximises sensitivity.

// rows: [age, sbpP90, sbpP95, dbpP90, dbpP95]
const BOYS = [
  [1,  98, 102, 52, 56],
  [2, 100, 104, 55, 59],
  [3, 101, 105, 58, 62],
  [4, 102, 107, 60, 64],
  [5, 103, 108, 63, 67],
  [6, 105, 109, 66, 70],
  [7, 106, 110, 68, 72],
  [8, 107, 111, 69, 73],
  [9, 107, 112, 70, 74],
  [10, 108, 112, 72, 76],
  [11, 110, 114, 74, 77],
  [12, 113, 116, 75, 79],
]

const GIRLS = [
  [1,  98, 102, 54, 58],
  [2, 101, 104, 58, 62],
  [3, 102, 106, 60, 64],
  [4, 103, 107, 62, 66],
  [5, 104, 108, 64, 68],
  [6, 105, 109, 67, 70],
  [7, 106, 110, 68, 72],
  [8, 107, 111, 69, 73],
  [9, 108, 112, 71, 75],
  [10, 109, 113, 72, 76],
  [11, 111, 114, 74, 77],
  [12, 114, 117, 75, 79],
]

// Adult AHA cutoffs applied for age ≥ 13
const ADULT = { sbpP90: 120, sbpP95: 130, dbpP90: 80, dbpP95: 80 }

const MIN_AGE = 1
const MAX_AGE = 17

export const PEDIATRIC_BP_AGE_RANGE = { min: MIN_AGE, max: MAX_AGE }

export function getBpThresholds(ageYears, sex) {
  if (typeof ageYears !== 'number' || !Number.isFinite(ageYears)) return null
  if (ageYears < MIN_AGE || ageYears > MAX_AGE) return null
  if (sex !== 'male' && sex !== 'female') return null
  if (ageYears >= 13) {
    return { sbpP90: ADULT.sbpP90, sbpP95: ADULT.sbpP95, dbpP90: ADULT.dbpP90, dbpP95: ADULT.dbpP95 }
  }
  const table = sex === 'male' ? BOYS : GIRLS
  const age = Math.floor(ageYears)
  const row = table.find(r => r[0] === age)
  if (!row) return null
  return { sbpP90: row[1], sbpP95: row[2], dbpP90: row[3], dbpP95: row[4] }
}

function classifySingle(value, p90, p95, isAdolescent, isSystolic) {
  if (isAdolescent) {
    if (isSystolic) {
      if (value >= 140) return 'stage2'
      if (value >= 130) return 'stage1'
      if (value >= 120) return 'elevated'
      return 'normal'
    }
    if (value >= 90) return 'stage2'
    if (value >= 80) return 'stage1'
    return 'normal'
  }
  if (value >= p95 + 12) return 'stage2'
  if (value >= p95) return 'stage1'
  if (value >= p90) return 'elevated'
  return 'normal'
}

const SEVERITY = { normal: 0, elevated: 1, stage1: 2, stage2: 3 }

export function classifyPediatricBp({ ageYears, sex, sbp, dbp }) {
  if (typeof sbp !== 'number' || !Number.isFinite(sbp) || sbp <= 0) return null
  if (typeof dbp !== 'number' || !Number.isFinite(dbp) || dbp <= 0) return null
  if (sbp <= dbp) return null
  const thresholds = getBpThresholds(ageYears, sex)
  if (!thresholds) return null
  const isAdolescent = ageYears >= 13
  const sbpCategory = classifySingle(sbp, thresholds.sbpP90, thresholds.sbpP95, isAdolescent, true)
  const dbpCategory = classifySingle(dbp, thresholds.dbpP90, thresholds.dbpP95, isAdolescent, false)
  const category = SEVERITY[sbpCategory] >= SEVERITY[dbpCategory] ? sbpCategory : dbpCategory
  return { category, sbpCategory, dbpCategory, thresholds, ageYears, sex, sbp, dbp }
}
