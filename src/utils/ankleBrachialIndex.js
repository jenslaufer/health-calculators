// Ankle-Brachial Index (ABI) — non-invasive marker for peripheral artery disease (PAD).
//
// Formula per ACC/AHA:
//   ABI(side) = max(left ankle SBP, right ankle SBP) / max(left arm SBP, right arm SBP)
//   The reported ABI for each leg is computed with the higher of the two arm pressures
//   as the denominator and that leg's ankle pressure as the numerator.
//   Final/overall ABI = lower of the two side ABIs.
//
// Clinical bands:
//   ≤ 0.50          Severely Reduced
//   0.50 – 0.79     Moderate
//   0.80 – 0.89     Mild
//   0.90 – 0.99     Borderline
//   1.00 – 1.40     Normal
//   > 1.40          Non-Compressible

function toNum(v) {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  return Number.isFinite(n) && n > 0 ? n : null
}

export function calcAbi({ leftArm, rightArm, leftAnkle, rightAnkle }) {
  const la = toNum(leftArm)
  const ra = toNum(rightArm)
  const lAnk = toNum(leftAnkle)
  const rAnk = toNum(rightAnkle)
  if (la == null || ra == null || lAnk == null || rAnk == null) return null

  const brachial = Math.max(la, ra)
  const left = lAnk / brachial
  const right = rAnk / brachial
  const overall = Math.min(left, right)

  return { left, right, overall, brachial }
}

export function getAbiBand(abi) {
  if (abi == null || !Number.isFinite(abi)) return null
  if (abi > 1.4) return 'nonCompressible'
  if (abi >= 1.0) return 'normal'
  if (abi >= 0.9) return 'borderline'
  if (abi >= 0.8) return 'mild'
  if (abi > 0.5) return 'moderate'
  return 'severe'
}

const COLORS = {
  severe: 'text-red-700',
  moderate: 'text-red-500',
  mild: 'text-orange-500',
  borderline: 'text-amber-500',
  normal: 'text-emerald-600',
  nonCompressible: 'text-purple-600',
}

const BGS = {
  severe: 'bg-red-50 border-red-200',
  moderate: 'bg-red-50 border-red-200',
  mild: 'bg-orange-50 border-orange-200',
  borderline: 'bg-amber-50 border-amber-200',
  normal: 'bg-emerald-50 border-emerald-200',
  nonCompressible: 'bg-purple-50 border-purple-200',
}

export function bandColor(band) {
  return COLORS[band] || 'text-stone-900'
}

export function bandBg(band) {
  return BGS[band] || 'bg-white border-stone-200'
}

export function formatAbi(v) {
  if (v == null || !Number.isFinite(v)) return '—'
  return v.toFixed(2)
}
