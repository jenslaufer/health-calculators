// Thyroid panel interpretation. Reference ranges follow the American Thyroid
// Association (ATA) guidelines for non-pregnant adults:
//   TSH        0.4 – 4.0  mIU/L  (= µIU/mL)
//   Free T4    0.8 – 1.8  ng/dL  (10.3 – 23.2 pmol/L)
//   Free T3    2.3 – 4.2  pg/mL  (3.5  –  6.5 pmol/L)
//
// Pattern interpretation (ATA / AACE):
//   high TSH + low  fT4   → primary hypothyroidism
//   high TSH + normal fT4 → subclinical hypothyroidism
//   low  TSH + high fT4 (or fT3) → primary hyperthyroidism
//   low  TSH + normal fT4 + normal fT3 → subclinical hyperthyroidism
//
// References:
//  - Garber JR et al. Clinical practice guidelines for hypothyroidism in adults
//    (AACE / ATA), Thyroid 2012;22(12):1200-1235.
//  - Ross DS et al. 2016 ATA Guidelines for Diagnosis and Management of
//    Hyperthyroidism, Thyroid 2016;26(10):1343-1421.

const TSH_LOW = 0.4
const TSH_HIGH = 4.0
const T4_LOW = 0.8
const T4_HIGH = 1.8
const T3_LOW = 2.3
const T3_HIGH = 4.2

const T4_NG_DL_TO_PMOL_L = 12.87
const T3_PG_ML_TO_PMOL_L = 1.536

function isValid(n) {
  return Number.isFinite(n) && n >= 0
}

export function classifyTsh(value) {
  if (!isValid(value)) return null
  if (value < TSH_LOW) return 'low'
  if (value > TSH_HIGH) return 'high'
  return 'normal'
}

export function classifyT4(value) {
  if (!isValid(value)) return null
  if (value < T4_LOW) return 'low'
  if (value > T4_HIGH) return 'high'
  return 'normal'
}

export function classifyT3(value) {
  if (!isValid(value)) return null
  if (value < T3_LOW) return 'low'
  if (value > T3_HIGH) return 'high'
  return 'normal'
}

export function convertTsh(value, from, to) {
  if (!isValid(value)) return null
  // mIU/L and µIU/mL are numerically identical
  return value
}

export function convertT4(value, from, to) {
  if (!isValid(value)) return null
  if (from === to) return value
  if (from === 'ng/dL' && to === 'pmol/L') return value * T4_NG_DL_TO_PMOL_L
  if (from === 'pmol/L' && to === 'ng/dL') return value / T4_NG_DL_TO_PMOL_L
  return null
}

export function convertT3(value, from, to) {
  if (!isValid(value)) return null
  if (from === to) return value
  if (from === 'pg/mL' && to === 'pmol/L') return value * T3_PG_ML_TO_PMOL_L
  if (from === 'pmol/L' && to === 'pg/mL') return value / T3_PG_ML_TO_PMOL_L
  return null
}

export function classifyThyroidFunction(input) {
  if (!input || typeof input !== 'object') return null
  const { tsh, freeT4, freeT3 } = input

  const tshCategory = classifyTsh(tsh)
  const t4Category = classifyT4(freeT4)
  const t3Category = classifyT3(freeT3)

  if (!tshCategory && !t4Category && !t3Category) return null

  let status = 'indeterminate'

  if (tshCategory === 'normal' && (t4Category === 'normal' || !t4Category) && (t3Category === 'normal' || !t3Category)) {
    status = 'euthyroid'
  } else if (tshCategory === 'high' && t4Category === 'low') {
    status = 'primaryHypo'
  } else if (tshCategory === 'high' && t4Category === 'normal') {
    status = 'subclinicalHypo'
  } else if (tshCategory === 'low' && (t4Category === 'high' || t3Category === 'high')) {
    status = 'primaryHyper'
  } else if (tshCategory === 'low' && (t4Category === 'normal' || !t4Category) && (t3Category === 'normal' || !t3Category)) {
    status = 'subclinicalHyper'
  } else if (tshCategory === 'high' && !t4Category) {
    status = 'elevatedTsh'
  } else if (tshCategory === 'low' && !t4Category && !t3Category) {
    status = 'suppressedTsh'
  }

  return { status, tshCategory, t4Category, t3Category }
}
