// Anemia risk screening.
//
// Combines a hemoglobin assessment against WHO sex-specific cutoffs with a
// clinical symptom score. The final category is the higher of both estimates,
// so a severe Hb deficit always overrides a low symptom score.
//
// WHO Hb cutoffs (g/dL) for non-pregnant adults:
//   Women: < 12.0 anemia, < 11.0 moderate, < 8.0 severe
//   Men:   < 13.0 anemia, < 11.0 moderate, < 8.0 severe
//
// Symptom point weights:
//   fatigue (1), pallor (1), shortnessOfBreath (2), dizziness (1),
//   coldHandsFeet (1), headache (1), rapidHeartbeat (2),
//   brittleNails (1), restlessLegs (1), pica (2)
//
// Symptom bands:
//   0      → none
//   1–3    → mild
//   4–6    → moderate
//   ≥ 7    → severe

const SYMPTOM_POINTS = {
  fatigue: 1,
  pallor: 1,
  shortnessOfBreath: 2,
  dizziness: 1,
  coldHandsFeet: 1,
  headache: 1,
  rapidHeartbeat: 2,
  brittleNails: 1,
  restlessLegs: 1,
  pica: 2,
}

const HB_CUTOFFS = {
  female: { mild: 12.0, moderate: 11.0, severe: 8.0 },
  male: { mild: 13.0, moderate: 11.0, severe: 8.0 },
}

const LEVELS = ['none', 'mild', 'moderate', 'severe']

function isPositiveNumber(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function classifyHemoglobin(hb, sex) {
  if (!isPositiveNumber(hb)) return null
  const cutoffs = HB_CUTOFFS[sex]
  if (!cutoffs) return null
  if (hb < cutoffs.severe) return 'severe'
  if (hb < cutoffs.moderate) return 'moderate'
  if (hb < cutoffs.mild) return 'mild'
  return 'none'
}

export function calcSymptomScore(symptoms) {
  if (!symptoms || typeof symptoms !== 'object') return 0
  let score = 0
  for (const [key, points] of Object.entries(SYMPTOM_POINTS)) {
    if (symptoms[key]) score += points
  }
  return score
}

export function symptomBand(score) {
  if (score >= 7) return 'severe'
  if (score >= 4) return 'moderate'
  if (score >= 1) return 'mild'
  return 'none'
}

export function classifyAnemia(hbCategory, symptomScore) {
  const hbLevel = LEVELS.indexOf(hbCategory ?? 'none')
  const symLevel = LEVELS.indexOf(symptomBand(symptomScore))
  return LEVELS[Math.max(hbLevel < 0 ? 0 : hbLevel, symLevel)]
}

export function calcAnemiaRisk({ hemoglobin, sex, symptoms } = {}) {
  if (sex !== 'male' && sex !== 'female') return null
  const hbCategory = classifyHemoglobin(hemoglobin, sex)
  const symptomScore = calcSymptomScore(symptoms)
  const category = classifyAnemia(hbCategory, symptomScore)
  return {
    category,
    hbCategory,
    symptomScore,
    cutoff: HB_CUTOFFS[sex].mild,
  }
}
