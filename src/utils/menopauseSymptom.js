// Menopause Rating Scale (MRS) — Heinemann et al. 2003.
// 11 items, each rated 0–4 (none/mild/moderate/severe/very severe).
// Grouped into 3 subscales: somato-vegetative, psychological, urogenital.
//
// Total score = sum of 11 items, range 0–44.
// Severity (total): 0–4 none/very mild · 5–8 mild · 9–16 moderate · ≥17 severe.
// Subscale cutoffs (Heinemann 2003):
//   somatic:        0–2 none · 3–4 mild · 5–8 moderate · ≥9 severe
//   psychological:  0–1 none · 2–3 mild · 4–6 moderate · ≥7 severe
//   urogenital:     0   none · 1   mild · 2–3 moderate · ≥4 severe

export const MRS_ITEMS = [
  { key: 'hotFlushes', subscale: 'somatic' },
  { key: 'heartDiscomfort', subscale: 'somatic' },
  { key: 'sleepProblems', subscale: 'somatic' },
  { key: 'jointMuscleDiscomfort', subscale: 'somatic' },
  { key: 'depressiveMood', subscale: 'psychological' },
  { key: 'irritability', subscale: 'psychological' },
  { key: 'anxiety', subscale: 'psychological' },
  { key: 'exhaustion', subscale: 'psychological' },
  { key: 'sexualProblems', subscale: 'urogenital' },
  { key: 'bladderProblems', subscale: 'urogenital' },
  { key: 'vaginalDryness', subscale: 'urogenital' },
]

function clamp(n) {
  const v = Math.round(Number(n) || 0)
  if (v < 0) return 0
  if (v > 4) return 4
  return v
}

function totalCategory(score) {
  if (score <= 4) return 'none'
  if (score <= 8) return 'mild'
  if (score <= 16) return 'moderate'
  return 'severe'
}

function somaticCategory(score) {
  if (score <= 2) return 'none'
  if (score <= 4) return 'mild'
  if (score <= 8) return 'moderate'
  return 'severe'
}

function psychologicalCategory(score) {
  if (score <= 1) return 'none'
  if (score <= 3) return 'mild'
  if (score <= 6) return 'moderate'
  return 'severe'
}

function urogenitalCategory(score) {
  if (score === 0) return 'none'
  if (score === 1) return 'mild'
  if (score <= 3) return 'moderate'
  return 'severe'
}

export function calcMenopauseSymptom(values = {}) {
  const scores = {}
  for (const item of MRS_ITEMS) {
    scores[item.key] = clamp(values[item.key])
  }

  const somatic = MRS_ITEMS
    .filter(i => i.subscale === 'somatic')
    .reduce((s, i) => s + scores[i.key], 0)
  const psychological = MRS_ITEMS
    .filter(i => i.subscale === 'psychological')
    .reduce((s, i) => s + scores[i.key], 0)
  const urogenital = MRS_ITEMS
    .filter(i => i.subscale === 'urogenital')
    .reduce((s, i) => s + scores[i.key], 0)

  const total = somatic + psychological + urogenital

  return {
    scores,
    somatic,
    psychological,
    urogenital,
    total,
    category: totalCategory(total),
    somaticCategory: somaticCategory(somatic),
    psychologicalCategory: psychologicalCategory(psychological),
    urogenitalCategory: urogenitalCategory(urogenital),
    evaluationRecommended: total >= 17,
  }
}
