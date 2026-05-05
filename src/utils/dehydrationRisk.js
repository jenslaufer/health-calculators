// Dehydration severity assessment.
//
// Combines a fluid-balance estimate (intake vs. requirement of 35 ml/kg/day,
// EFSA/IOM reference) with a clinical symptom score derived from WHO and CDC
// signs of dehydration.
//
// Symptom point weights:
//   thirst (1), darkUrine (1), dryMouth (1), fatigue (1),
//   headache (1), dizziness (2), rapidHeartbeat (2), confusion (3)
//
// Severity bands (use whichever is highest from deficit % or symptom score,
// confusion is always severe):
//   none      < 1 % deficit AND symptom score 0
//   mild      1–3 % OR score 1–2
//   moderate  3–6 % OR score 3–5
//   severe    > 6 % OR score ≥ 6 OR confusion present

const ML_PER_KG = 35

const SYMPTOM_POINTS = {
  thirst: 1,
  darkUrine: 1,
  dryMouth: 1,
  fatigue: 1,
  headache: 1,
  dizziness: 2,
  rapidHeartbeat: 2,
  confusion: 3,
}

function isPositiveNumber(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function calcRequirementMl(weightKg) {
  if (!isPositiveNumber(weightKg)) return null
  return weightKg * ML_PER_KG
}

export function calcFluidDeficit(weightKg, intakeMl) {
  if (!isPositiveNumber(weightKg)) return null
  if (intakeMl == null || !Number.isFinite(intakeMl) || intakeMl < 0) return null
  const requirement = weightKg * ML_PER_KG
  const ratio = intakeMl / requirement
  if (ratio >= 1) return 0
  return (1 - ratio) * 100
}

export function calcSymptomScore(symptoms) {
  if (!symptoms || typeof symptoms !== 'object') return 0
  let score = 0
  for (const [key, points] of Object.entries(SYMPTOM_POINTS)) {
    if (symptoms[key]) score += points
  }
  return score
}

export function classifyDehydration(deficitPct, symptomScore, hasConfusion) {
  if (hasConfusion) return 'severe'
  let level = 0 // 0 none, 1 mild, 2 moderate, 3 severe
  if (deficitPct > 6) level = Math.max(level, 3)
  else if (deficitPct >= 3) level = Math.max(level, 2)
  else if (deficitPct >= 1) level = Math.max(level, 1)
  if (symptomScore >= 6) level = Math.max(level, 3)
  else if (symptomScore >= 3) level = Math.max(level, 2)
  else if (symptomScore >= 1) level = Math.max(level, 1)
  return ['none', 'mild', 'moderate', 'severe'][level]
}

export function calcDehydrationRisk({ weightKg, intakeMl, symptoms } = {}) {
  if (!isPositiveNumber(weightKg)) return null
  if (intakeMl == null || !Number.isFinite(intakeMl) || intakeMl < 0) return null

  const requirementMl = weightKg * ML_PER_KG
  const deficitPct = calcFluidDeficit(weightKg, intakeMl)
  const symptomScore = calcSymptomScore(symptoms)
  const hasConfusion = !!(symptoms && symptoms.confusion)
  const category = classifyDehydration(deficitPct, symptomScore, hasConfusion)
  const deficitMl = Math.max(0, Math.round(requirementMl - intakeMl))
  return { category, deficitPct, symptomScore, requirementMl, deficitMl }
}
