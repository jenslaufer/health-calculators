// Premenstrual Symptoms Screening Tool (PSST) — Steiner et al. 2003.
//
// 14 symptom items (Part A) + 5 functional impairment items (Part B).
// Each rated 0–3: 0 not at all, 1 mild, 2 moderate, 3 severe.
//
// Part A items 1–4 are "core" mood items (anger, anxiety, tearfulness,
// depressed mood). Items 5–14 are additional symptoms.
//
// PMDD (Premenstrual Dysphoric Disorder):
//   - ≥ 1 of items 1–4 rated severe (3)
//   - ≥ 4 more of items 1–14 rated moderate or severe (≥ 2)
//   - ≥ 1 of items 15–19 rated severe (3)
//
// Moderate/Severe PMS:
//   - ≥ 1 of items 1–4 rated moderate or severe (≥ 2)
//   - ≥ 4 more of items 1–14 rated moderate or severe (≥ 2)
//   - ≥ 1 of items 15–19 rated moderate or severe (≥ 2)
//
// Otherwise: No/Mild PMS.

export const PSST_CORE_ITEMS = [
  'anger',
  'anxiety',
  'tearful',
  'depressed',
]

export const PSST_OTHER_ITEMS = [
  'lessInterestWork',
  'lessInterestHome',
  'lessInterestSocial',
  'concentration',
  'fatigue',
  'overeating',
  'insomnia',
  'hypersomnia',
  'overwhelmed',
  'physical',
]

export const PSST_IMPAIRMENT_ITEMS = [
  'workEfficiency',
  'relationshipsCoworkers',
  'relationshipsFamily',
  'socialLife',
  'homeResponsibilities',
]

export const PSST_ALL_SYMPTOM_ITEMS = [...PSST_CORE_ITEMS, ...PSST_OTHER_ITEMS]

function clamp(n) {
  const v = Math.round(Number(n) || 0)
  if (v < 0) return 0
  if (v > 3) return 3
  return v
}

export function calcPmsSymptom(values = {}) {
  const scores = {}
  for (const key of [...PSST_ALL_SYMPTOM_ITEMS, ...PSST_IMPAIRMENT_ITEMS]) {
    scores[key] = clamp(values[key])
  }

  const coreSevere = PSST_CORE_ITEMS.some(k => scores[k] === 3)
  const coreModerateOrSevere = PSST_CORE_ITEMS.some(k => scores[k] >= 2)

  const otherModerateOrSevereCount = PSST_OTHER_ITEMS
    .filter(k => scores[k] >= 2).length
  const coreModerateOrSevereCount = PSST_CORE_ITEMS
    .filter(k => scores[k] >= 2).length

  // "≥ 4 more" — additional moderate/severe symptoms beyond the qualifying core item.
  // We count: total moderate/severe across all 14 items minus 1 qualifying core.
  const totalModerateOrSevere = coreModerateOrSevereCount + otherModerateOrSevereCount
  const additionalModerateOrSevere = Math.max(0, totalModerateOrSevere - 1)

  const impairmentSevere = PSST_IMPAIRMENT_ITEMS.some(k => scores[k] === 3)
  const impairmentModerateOrSevere = PSST_IMPAIRMENT_ITEMS.some(k => scores[k] >= 2)

  const symptomTotal = PSST_ALL_SYMPTOM_ITEMS
    .reduce((sum, k) => sum + scores[k], 0)
  const impairmentTotal = PSST_IMPAIRMENT_ITEMS
    .reduce((sum, k) => sum + scores[k], 0)

  let category = 'none'
  if (
    coreSevere &&
    additionalModerateOrSevere >= 4 &&
    impairmentSevere
  ) {
    category = 'pmdd'
  } else if (
    coreModerateOrSevere &&
    additionalModerateOrSevere >= 4 &&
    impairmentModerateOrSevere
  ) {
    category = 'moderateSevere'
  } else if (totalModerateOrSevere > 0 || impairmentTotal > 0 || symptomTotal > 0) {
    category = 'mild'
  }

  return {
    scores,
    symptomTotal,
    impairmentTotal,
    totalModerateOrSevere,
    coreModerateOrSevereCount,
    otherModerateOrSevereCount,
    category,
    evaluationRecommended: category === 'pmdd' || category === 'moderateSevere',
  }
}
