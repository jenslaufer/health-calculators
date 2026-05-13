// FFMI — Fettfreie-Masse-Index (Fat-Free Mass Index).
// Reference: Kouri EM, Pope HG Jr, Katz DL, Oliva P. "Fat-free mass index in
// users and nonusers of anabolic-androgenic steroids." Clin J Sport Med 1995.
//
//   FFM (kg)   = weight × (1 − bodyFat% / 100)
//   FFMI       = FFM / heightM²
//   normFFMI   = FFMI + 6.1 × (1.80 − heightM)
//
// Classification on normalized FFMI, 5 buckets per sex:
//   Male:   <18 belowAverage, 18–20 average, 20–25 aboveAverage, 25–28 top1, >28 unlikelyNatural
//   Female: <13 belowAverage, 13–15 average, 15–19 aboveAverage, 19–22 top1, >22 unlikelyNatural

const THRESHOLDS = {
  male: { average: 18, aboveAverage: 20, top1: 25, unlikelyNatural: 28 },
  female: { average: 13, aboveAverage: 15, top1: 19, unlikelyNatural: 22 },
}

function isPositiveNumber(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function calcFFM(weightKg, bodyFatPct) {
  if (!isPositiveNumber(weightKg)) return null
  if (typeof bodyFatPct !== 'number' || !Number.isFinite(bodyFatPct)) return null
  if (bodyFatPct < 0 || bodyFatPct >= 100) return null
  return weightKg * (1 - bodyFatPct / 100)
}

export function calcFFMI(weightKg, heightCm, bodyFatPct) {
  const ffm = calcFFM(weightKg, bodyFatPct)
  if (ffm == null || !isPositiveNumber(heightCm)) return null
  const heightM = heightCm / 100
  return ffm / (heightM * heightM)
}

export function calcNormalizedFFMI(ffmi, heightCm) {
  if (typeof ffmi !== 'number' || !Number.isFinite(ffmi)) return null
  if (!isPositiveNumber(heightCm)) return null
  const heightM = heightCm / 100
  return ffmi + 6.1 * (1.80 - heightM)
}

export function classifyFFMI(normalizedFFMI, sex) {
  if (typeof normalizedFFMI !== 'number' || !Number.isFinite(normalizedFFMI)) return null
  const t = THRESHOLDS[sex]
  if (!t) return null
  if (normalizedFFMI < t.average) return 'belowAverage'
  if (normalizedFFMI < t.aboveAverage) return 'average'
  if (normalizedFFMI < t.top1) return 'aboveAverage'
  if (normalizedFFMI < t.unlikelyNatural) return 'top1'
  return 'unlikelyNatural'
}

export function calcFFMIResult({ weightKg, heightCm, bodyFatPct, sex } = {}) {
  if (sex !== 'male' && sex !== 'female') return null
  const ffm = calcFFM(weightKg, bodyFatPct)
  if (ffm == null) return null
  const ffmi = calcFFMI(weightKg, heightCm, bodyFatPct)
  if (ffmi == null) return null
  const normalizedFFMI = calcNormalizedFFMI(ffmi, heightCm)
  const category = classifyFFMI(normalizedFFMI, sex)
  return { ffm, ffmi, normalizedFFMI, category }
}

export const FFMI_CATEGORIES = ['belowAverage', 'average', 'aboveAverage', 'top1', 'unlikelyNatural']
