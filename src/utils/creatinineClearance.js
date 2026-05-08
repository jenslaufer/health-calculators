// Cockcroft-Gault creatinine clearance (Cockcroft DW, Gault MH. Nephron 1976; 16: 31–41).
//
//   CrCl (mL/min) = ((140 - age) × weight_kg) / (72 × serumCreatinine_mg/dL)
//                   × (0.85 if female)
//
// Inputs:
//   age          : years (integer ≥ 1)
//   weight       : value in kg or lbs (per `weightUnit`)
//   weightUnit   : 'kg' | 'lbs'
//   creatinine   : value in mg/dL or µmol/L (per `creatinineUnit`)
//   creatinineUnit : 'mg/dL' | 'umol/L'
//   sex          : 'male' | 'female'
//
// Conversions:
//   1 lb        = 0.45359237 kg
//   1 mg/dL    = 88.4 µmol/L (Jaffé-corrected molar mass of creatinine ≈ 113.12 g/mol)

const LB_TO_KG = 0.45359237
const UMOL_PER_MG_DL = 88.4

export function toKg(value, unit) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) return null
  if (unit === 'kg') return value
  if (unit === 'lbs') return value * LB_TO_KG
  return null
}

export function toMgDl(value, unit) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) return null
  if (unit === 'mg/dL') return value
  if (unit === 'umol/L') return value / UMOL_PER_MG_DL
  return null
}

export function classifyCrCl(crcl) {
  if (typeof crcl !== 'number' || !Number.isFinite(crcl) || crcl < 0) return null
  if (crcl >= 90) return 'normal'
  if (crcl >= 60) return 'mild'
  if (crcl >= 30) return 'moderate'
  if (crcl >= 15) return 'severe'
  return 'kidneyFailure'
}

export function calcCreatinineClearance({ age, weight, weightUnit, creatinine, creatinineUnit, sex }) {
  if (!Number.isFinite(age) || age < 1 || age > 120) return null
  if (sex !== 'male' && sex !== 'female') return null

  const weightKg = toKg(weight, weightUnit)
  if (weightKg === null) return null

  const creatinineMgDl = toMgDl(creatinine, creatinineUnit)
  if (creatinineMgDl === null) return null

  const base = ((140 - age) * weightKg) / (72 * creatinineMgDl)
  const crcl = sex === 'female' ? base * 0.85 : base
  return Math.max(0, crcl)
}

export function evaluateCreatinineClearance(input) {
  const crcl = calcCreatinineClearance(input)
  if (crcl === null) return null
  return { crcl, category: classifyCrCl(crcl) }
}
