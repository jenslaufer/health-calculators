// LDL Cholesterol Friedewald Calculator
// Formula (mg/dL):  LDL = Total − HDL − Triglycerides / 5
// Formula (mmol/L): LDL = Total − HDL − Triglycerides / 2.2
// Validity: triglycerides must be < 400 mg/dL (< 4.5 mmol/L).
//
// ATP III risk bands (NCEP, mg/dL):
//   < 100        Optimal
//   100 – 129    Near optimal
//   130 – 159    Borderline high
//   160 – 189    High
//   ≥ 190        Very high

const TG_INVALID_MGDL = 400
const TG_INVALID_MMOL = 4.5

function toNum(v) {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

export function calcLdlMgdl(total, hdl, trig) {
  const t = toNum(total)
  const h = toNum(hdl)
  const tg = toNum(trig)
  if (t == null || h == null || tg == null) return null
  return t - h - tg / 5
}

export function calcLdlMmol(total, hdl, trig) {
  const t = toNum(total)
  const h = toNum(hdl)
  const tg = toNum(trig)
  if (t == null || h == null || tg == null) return null
  return t - h - tg / 2.2
}

export function calcLdl({ total, hdl, trig, unit = 'mg' }) {
  return unit === 'mmol'
    ? calcLdlMmol(total, hdl, trig)
    : calcLdlMgdl(total, hdl, trig)
}

export function isFriedewaldInvalid(trig, unit = 'mg') {
  const tg = toNum(trig)
  if (tg == null) return false
  return unit === 'mmol' ? tg >= TG_INVALID_MMOL : tg >= TG_INVALID_MGDL
}

// ATP III bands are defined in mg/dL. Convert mmol/L → mg/dL with 38.67 first.
const MGDL_PER_MMOL = 38.67

export function ldlToMgdl(ldl, unit = 'mg') {
  const v = toNum(ldl)
  if (v == null) return null
  return unit === 'mmol' ? v * MGDL_PER_MMOL : v
}

export function getAtpBand(ldlMgdl) {
  if (ldlMgdl == null || !Number.isFinite(ldlMgdl)) return null
  if (ldlMgdl < 100) return 'optimal'
  if (ldlMgdl < 130) return 'nearOptimal'
  if (ldlMgdl < 160) return 'borderline'
  if (ldlMgdl < 190) return 'high'
  return 'veryHigh'
}

const COLORS = {
  optimal: 'text-emerald-600',
  nearOptimal: 'text-lime-600',
  borderline: 'text-amber-600',
  high: 'text-orange-600',
  veryHigh: 'text-red-600',
}

const BGS = {
  optimal: 'bg-emerald-50 border-emerald-200',
  nearOptimal: 'bg-lime-50 border-lime-200',
  borderline: 'bg-amber-50 border-amber-200',
  high: 'bg-orange-50 border-orange-200',
  veryHigh: 'bg-red-50 border-red-200',
}

export function bandColor(band) {
  return COLORS[band] || 'text-stone-900'
}

export function bandBg(band) {
  return BGS[band] || 'bg-white border-stone-200'
}

// Integer rounding used by the UI for mg/dL output.
export function roundLdl(ldl) {
  if (ldl == null || !Number.isFinite(ldl)) return null
  return Math.round(ldl)
}
