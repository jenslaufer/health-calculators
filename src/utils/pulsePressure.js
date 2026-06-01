// Pulse Pressure (PP) — difference between systolic and diastolic blood pressure.
//
// Formula: PP = SBP − DBP
//
// Clinical bands (resting, brachial cuff):
//   < 40 mmHg     Narrow — possible reduced stroke volume (heart failure, aortic stenosis, shock).
//   40 – 60 mmHg  Normal.
//   > 60 mmHg     Wide — arterial stiffening, aortic regurgitation, hyperthyroidism;
//                 in adults > 60 it is an independent cardiovascular risk marker.

function toNum(v) {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

export function calcPulsePressure(sbp, dbp) {
  const s = toNum(sbp)
  const d = toNum(dbp)
  if (s == null || d == null) return null
  if (s <= 0 || d <= 0) return null
  if (d > s) return null
  return s - d
}

export function getPulsePressureBand(pp) {
  if (pp == null || !Number.isFinite(pp)) return null
  if (pp < 40) return 'narrow'
  if (pp <= 60) return 'normal'
  return 'wide'
}

export function getAgeContext(age) {
  const a = toNum(age)
  if (a == null) return null
  if (a < 40) return 'young'
  if (a < 60) return 'middle'
  return 'older'
}

const COLORS = {
  narrow: 'text-red-600',
  normal: 'text-emerald-600',
  wide: 'text-orange-600',
}

const BGS = {
  narrow: 'bg-red-50 border-red-200',
  normal: 'bg-emerald-50 border-emerald-200',
  wide: 'bg-orange-50 border-orange-200',
}

export function bandColor(band) {
  return COLORS[band] || 'text-stone-900'
}

export function bandBg(band) {
  return BGS[band] || 'bg-white border-stone-200'
}

export function formatPp(v) {
  if (v == null || !Number.isFinite(v)) return '—'
  return String(Math.round(v))
}
