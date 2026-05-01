// PCOS symptom screening — Rotterdam criteria 2/3 logic.
// Two of three required for clinical PCOS diagnosis:
//   1) Oligo-anovulation (irregular / missed periods)
//   2) Clinical or biochemical hyperandrogenism (hirsutism, acne, scalp hair loss)
//   3) Polycystic ovarian morphology on ultrasound — not assessed here.
// This tool is a screening aid, not a diagnostic instrument.

export function calcPcosSymptoms({
  irregularCycles = false,
  missedPeriods = false,
  hirsutism = false,
  acne = false,
  hairLoss = false,
  weightGain = false,
  acanthosis = false,
  fertilityIssues = false,
  familyHistory = false,
} = {}) {
  const ovulatoryDysfunction = !!(irregularCycles || missedPeriods)
  const hyperandrogenism = !!(hirsutism || acne || hairLoss)
  const criteriaMetCount = (ovulatoryDysfunction ? 1 : 0) + (hyperandrogenism ? 1 : 0)

  const symptoms = [
    irregularCycles, missedPeriods, hirsutism, acne, hairLoss,
    weightGain, acanthosis, fertilityIssues, familyHistory,
  ]
  const symptomCount = symptoms.filter(Boolean).length

  let score = symptomCount * 10
  if (criteriaMetCount === 2) score += 15
  if (acanthosis) score += 5
  score = Math.min(100, score)

  let category
  if (criteriaMetCount === 2) category = 'high'
  else if (criteriaMetCount === 1 || symptomCount >= 2) category = 'moderate'
  else category = 'low'

  const evaluationRecommended =
    criteriaMetCount >= 2 ||
    (criteriaMetCount >= 1 && symptomCount >= 4)

  return {
    category,
    score,
    criteriaMetCount,
    ovulatoryDysfunction,
    hyperandrogenism,
    symptomCount,
    evaluationRecommended,
  }
}
