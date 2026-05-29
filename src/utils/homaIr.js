// HOMA-IR (Homeostatic Model Assessment for Insulin Resistance)
// Formula (conventional units): HOMA-IR = (insulin µU/mL × glucose mg/dL) / 405
// Formula (SI units):            HOMA-IR = (insulin µU/mL × glucose mmol/L) / 22.5
//
// Risk bands (clinical reference, Matthews et al. 1985 / Geloneze et al. 2009):
//   < 1.5        Normal
//   1.5 – 1.99   Mild insulin resistance
//   2.0 – 2.89   Insulin resistance
//   ≥ 2.9        Severe insulin resistance

// Unit conversions
// Glucose: mg/dL ↔ mmol/L  (factor 18.0182, commonly rounded to 18)
// Insulin: µU/mL ↔ pmol/L  (factor 6.945, commonly rounded to 6)
const GLUCOSE_FACTOR = 18.0182
const INSULIN_FACTOR = 6.945

export function mgdlToMmol(mg) {
  if (mg == null || !Number.isFinite(Number(mg))) return null
  return Number(mg) / GLUCOSE_FACTOR
}

export function mmolToMgdl(mmol) {
  if (mmol == null || !Number.isFinite(Number(mmol))) return null
  return Number(mmol) * GLUCOSE_FACTOR
}

export function pmolToMicroU(pmol) {
  if (pmol == null || !Number.isFinite(Number(pmol))) return null
  return Number(pmol) / INSULIN_FACTOR
}

export function microUToPmol(microU) {
  if (microU == null || !Number.isFinite(Number(microU))) return null
  return Number(microU) * INSULIN_FACTOR
}

// Core formula. Inputs already in conventional µU/mL and mg/dL.
export function calcHomaIrConventional(insulinMicroU, glucoseMgdl) {
  if (insulinMicroU == null || glucoseMgdl == null) return null
  const i = Number(insulinMicroU)
  const g = Number(glucoseMgdl)
  if (!Number.isFinite(i) || !Number.isFinite(g)) return null
  if (i <= 0 || g <= 0) return null
  return (i * g) / 405
}

// Core formula in SI units (mmol/L).
export function calcHomaIrSi(insulinMicroU, glucoseMmol) {
  if (insulinMicroU == null || glucoseMmol == null) return null
  const i = Number(insulinMicroU)
  const g = Number(glucoseMmol)
  if (!Number.isFinite(i) || !Number.isFinite(g)) return null
  if (i <= 0 || g <= 0) return null
  return (i * g) / 22.5
}

// Convenience wrapper that handles unit selection.
// glucoseUnit: 'mg' (mg/dL) or 'mmol' (mmol/L)
// insulinUnit: 'uU' (µU/mL) or 'pmol' (pmol/L)
export function calcHomaIr({ glucose, insulin, glucoseUnit = 'mg', insulinUnit = 'uU' }) {
  if (glucose == null || insulin == null) return null
  const i = Number(insulin)
  const g = Number(glucose)
  if (!Number.isFinite(i) || !Number.isFinite(g)) return null
  if (i <= 0 || g <= 0) return null

  const insulinMicroU = insulinUnit === 'pmol' ? pmolToMicroU(i) : i
  if (glucoseUnit === 'mmol') {
    return calcHomaIrSi(insulinMicroU, g)
  }
  return calcHomaIrConventional(insulinMicroU, g)
}

export function getRiskBand(homaIr) {
  if (homaIr == null || !Number.isFinite(homaIr)) return null
  if (homaIr < 1.5) return 'normal'
  if (homaIr < 2.0) return 'mild'
  if (homaIr < 2.9) return 'resistance'
  return 'severe'
}

const COLORS = {
  normal: 'text-emerald-600',
  mild: 'text-amber-600',
  resistance: 'text-orange-600',
  severe: 'text-red-600',
}

const BGS = {
  normal: 'bg-emerald-50 border-emerald-200',
  mild: 'bg-amber-50 border-amber-200',
  resistance: 'bg-orange-50 border-orange-200',
  severe: 'bg-red-50 border-red-200',
}

export function bandColor(band) {
  return COLORS[band] || 'text-stone-900'
}

export function bandBg(band) {
  return BGS[band] || 'bg-white border-stone-200'
}
