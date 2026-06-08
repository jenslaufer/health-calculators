// IPF GL Points / Wilks-2020 coefficient — strength score normalising powerlifting
// totals across bodyweight and sex.
//
// Formula (IPF / Wilks 2020):
//   coeff(bw) = 600 / (A + B*bw + C*bw^2 + D*bw^3 + E*bw^4)
//   score     = total_kg * coeff(bw)
//
// Constants below are the IPF 2020 published values for raw classic squat-bench-deadlift
// totals. Male and female coefficients differ.

const MALE = {
  A: 47.46178854,
  B: 8.472061379,
  C: 0.07369410346,
  D: -0.001395833811,
  E: 7.07665973070743e-6,
}

const FEMALE = {
  A: -125.4255398,
  B: 13.71219419,
  C: -0.03307250631,
  D: -0.001050400051,
  E: 9.38773881462799e-6,
}

const KG_PER_LB = 0.45359237

export function kgFromLb(lb) {
  return lb * KG_PER_LB
}

export function lbFromKg(kg) {
  return kg / KG_PER_LB
}

function toPositive(v) {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  return Number.isFinite(n) && n > 0 ? n : null
}

export function wilksCoefficient(bodyweightKg, sex) {
  const bw = toPositive(bodyweightKg)
  if (bw == null) return null
  const k = sex === 'male' ? MALE : sex === 'female' ? FEMALE : null
  if (!k) return null
  const denom =
    k.A +
    k.B * bw +
    k.C * bw * bw +
    k.D * bw * bw * bw +
    k.E * bw * bw * bw * bw
  if (denom === 0) return null
  return 600 / denom
}

export function calcWilks({ bodyweightKg, totalKg, sex }) {
  const bw = toPositive(bodyweightKg)
  const total = toPositive(totalKg)
  if (bw == null || total == null) return null
  const coeff = wilksCoefficient(bw, sex)
  if (coeff == null || !Number.isFinite(coeff)) return null
  return Math.round(total * coeff)
}

export function getWilksBand(score) {
  if (score == null || !Number.isFinite(score)) return null
  if (score >= 400) return 'elite'
  if (score >= 300) return 'advanced'
  if (score >= 200) return 'intermediate'
  if (score >= 100) return 'novice'
  return 'untrained'
}

const COLORS = {
  untrained: 'text-stone-600',
  novice: 'text-amber-600',
  intermediate: 'text-emerald-600',
  advanced: 'text-blue-600',
  elite: 'text-purple-600',
}

const BGS = {
  untrained: 'bg-stone-50 border-stone-200',
  novice: 'bg-amber-50 border-amber-200',
  intermediate: 'bg-emerald-50 border-emerald-200',
  advanced: 'bg-blue-50 border-blue-200',
  elite: 'bg-purple-50 border-purple-200',
}

export function bandColor(band) {
  return COLORS[band] || 'text-stone-600'
}

export function bandBg(band) {
  return BGS[band] || 'bg-white border-stone-200'
}
