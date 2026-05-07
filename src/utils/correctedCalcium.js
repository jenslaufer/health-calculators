// Corrected calcium (Payne formula).
//
// Albumin contributes to total serum calcium. In hypoalbuminemia the measured
// total calcium falsely appears low; the formula compensates.
//
// Conventional units (mg/dL, g/dL):
//   correctedCa = totalCa + 0.8 * (4.0 - albumin)
//
// SI units (mmol/L, g/L):
//   correctedCa = totalCa + 0.02 * (40 - albumin)
//
// Internally we canonicalize to conventional units, compute, then convert back.
//
// NOTE: not reliable in severe acid–base disturbances; ionized calcium remains
// the gold standard in those settings.

export const NORMAL_ALBUMIN_MGDL = 4.0
export const NORMAL_ALBUMIN_GL = 40

// Conversion factors
export const CA_MGDL_PER_MMOL = 4.008  // mg/dL = mmol/L * 4.008
export const ALBUMIN_GDL_PER_GL = 0.1  // g/dL = g/L * 0.1

export function isFiniteNumber(v) {
  return typeof v === 'number' && Number.isFinite(v)
}

// Convert any input pair (totalCa, albumin) given a unit system to conventional
// (mg/dL, g/dL). Unit can be 'conventional' or 'si'.
export function toConventional(totalCa, albumin, unit) {
  if (unit === 'si') {
    return {
      totalCa: totalCa * CA_MGDL_PER_MMOL,
      albumin: albumin * ALBUMIN_GDL_PER_GL,
    }
  }
  return { totalCa, albumin }
}

export function fromConventional(value, unit) {
  if (unit === 'si') return value / CA_MGDL_PER_MMOL
  return value
}

// Core formula in conventional units (mg/dL).
export function calcCorrectedCalciumMgDl(totalCaMgDl, albuminGdl) {
  return totalCaMgDl + 0.8 * (NORMAL_ALBUMIN_MGDL - albuminGdl)
}

// Core formula in SI units (mmol/L) using the SI-form constant directly.
// Numerically identical to converting through conventional units (within fp).
export function calcCorrectedCalciumMmol(totalCaMmol, albuminGl) {
  return totalCaMmol + 0.02 * (NORMAL_ALBUMIN_GL - albuminGl)
}

export function getInterpretationMgDl(correctedCaMgDl) {
  if (correctedCaMgDl < 8.5) return 'hypocalcemia'
  if (correctedCaMgDl <= 10.2) return 'normal'
  return 'hypercalcemia'
}

export function getInterpretationMmol(correctedCaMmol) {
  if (correctedCaMmol < 2.12) return 'hypocalcemia'
  if (correctedCaMmol <= 2.55) return 'normal'
  return 'hypercalcemia'
}

// Plausibility (in conventional units).
export function isPlausibleMgDl(totalCaMgDl, albuminGdl) {
  if (totalCaMgDl < 5 || totalCaMgDl > 15) return false
  if (albuminGdl < 1 || albuminGdl > 6) return false
  return true
}

// One-shot helper. Returns null if inputs missing/invalid.
export function correctedCalcium({ totalCa, albumin, unit = 'conventional' }) {
  if (!isFiniteNumber(totalCa) || !isFiniteNumber(albumin)) return null
  if (albumin <= 0 || totalCa <= 0) return null
  if (unit === 'si') {
    const corrected = calcCorrectedCalciumMmol(totalCa, albumin)
    return {
      corrected,
      delta: corrected - totalCa,
      interpretation: getInterpretationMmol(corrected),
      unit,
    }
  }
  const corrected = calcCorrectedCalciumMgDl(totalCa, albumin)
  return {
    corrected,
    delta: corrected - totalCa,
    interpretation: getInterpretationMgDl(corrected),
    unit,
  }
}
