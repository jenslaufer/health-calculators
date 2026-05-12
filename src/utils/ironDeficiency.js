// Iron deficiency risk screening.
//
// Combines four signals into a single severity category:
//   1) Serum ferritin (ng/mL) — first depleted iron store.
//        < 15  → severe (depleted stores)
//        < 30  → moderate (clear iron deficiency)
//        < 100 → mild (suggestive, especially with inflammation)
//        ≥ 100 → none
//   2) Transferrin saturation TSAT (%) — circulating iron supply.
//        < 16  → moderate
//        < 20  → mild
//        ≥ 20  → none
//   3) Hemoglobin (g/dL, optional) — late marker, defines iron-deficiency anemia.
//        WHO cutoffs by sex:
//          Women: < 8 severe, < 11 moderate, < 12 mild, ≥ 12 none
//          Men:   < 8 severe, < 11 moderate, < 13 mild, ≥ 13 none
//   4) Symptom score (0–13) — typical clinical signs:
//        fatigue (1), pallor (1), shortnessOfBreath (2), hairLoss (1),
//        brittleNails (1), restlessLegs (2), pica (2), coldHandsFeet (1),
//        headache (1), poorConcentration (1)
//        score 0 → none, 1–3 → mild, 4–6 → moderate, ≥ 7 → severe
//
// Final category = max(ferritin, tsat, hb, symptom) so any one severe signal wins.

const SYMPTOM_POINTS = {
  fatigue: 1,
  pallor: 1,
  shortnessOfBreath: 2,
  hairLoss: 1,
  brittleNails: 1,
  restlessLegs: 2,
  pica: 2,
  coldHandsFeet: 1,
  headache: 1,
  poorConcentration: 1,
}

const HB_CUTOFFS = {
  female: { mild: 12.0, moderate: 11.0, severe: 8.0 },
  male: { mild: 13.0, moderate: 11.0, severe: 8.0 },
}

const LEVELS = ['none', 'mild', 'moderate', 'severe']

function isPositiveNumber(n) {
  return typeof n === 'number' && Number.isFinite(n) && n > 0
}

export function classifyFerritin(ferritin) {
  if (!isPositiveNumber(ferritin)) return null
  if (ferritin < 15) return 'severe'
  if (ferritin < 30) return 'moderate'
  if (ferritin < 100) return 'mild'
  return 'none'
}

export function classifyTsat(tsat) {
  if (tsat == null || !Number.isFinite(tsat) || tsat < 0) return null
  if (tsat < 16) return 'moderate'
  if (tsat < 20) return 'mild'
  return 'none'
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

function maxLevel(...levels) {
  let idx = 0
  for (const lvl of levels) {
    if (lvl == null) continue
    const i = LEVELS.indexOf(lvl)
    if (i > idx) idx = i
  }
  return LEVELS[idx]
}

export function calcIronDeficiency({ ferritin, tsat, hemoglobin, sex, symptoms } = {}) {
  if (sex !== 'male' && sex !== 'female') return null
  const ferritinCategory = classifyFerritin(ferritin)
  const tsatCategory = classifyTsat(tsat)
  const hbCategory = classifyHemoglobin(hemoglobin, sex)
  const symptomScore = calcSymptomScore(symptoms)
  const symptomCategory = symptomBand(symptomScore)
  const category = maxLevel(ferritinCategory, tsatCategory, hbCategory, symptomCategory)
  return {
    category,
    ferritinCategory,
    tsatCategory,
    hbCategory,
    symptomScore,
    symptomCategory,
  }
}

export const TOTAL_SYMPTOM_POINTS = Object.values(SYMPTOM_POINTS).reduce((a, b) => a + b, 0)
