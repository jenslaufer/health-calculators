// Prostate cancer risk estimation from PSA, age and family history.
// Age-adjusted PSA upper-limit reference per Oesterling et al., JAMA 1993.
// This is a screening-aid heuristic — not a diagnostic tool.

export function calcAgeAdjustedPsaThreshold(age) {
  if (age < 50) return 2.5
  if (age < 60) return 3.5
  if (age < 70) return 4.5
  return 6.5
}

export function calcProstateRisk({ psa, age, familyHistory }) {
  if (psa == null || !Number.isFinite(psa) || psa < 0) return null
  if (age == null || !Number.isFinite(age) || age <= 0) return null

  const threshold = calcAgeAdjustedPsaThreshold(age)
  const ratio = psa / threshold

  // Base score: 0 (very low) → 100 (very high) on a soft scale.
  // Anchor points: ratio 0 → 0; ratio 1 → 35; ratio 2 → 60; ratio 3+ → 80+.
  let score = Math.min(100, ratio * 30)

  // Absolute PSA contributions on top of age-adjusted ratio:
  // PSA > 10 indicates biopsy-recommended range regardless of age.
  if (psa > 10) score += 20
  if (psa > 20) score += 10

  // Family history boost: roughly doubles risk of clinically significant
  // prostate cancer in epidemiological studies — represented as +15 score.
  if (familyHistory) score += 15

  score = Math.min(100, score)

  let category
  if (psa > 20) category = 'veryHigh'
  else if (psa > 10) category = 'high'
  else if (psa >= threshold) category = 'moderate'
  else if (familyHistory && psa >= threshold * 0.8) category = 'moderate'
  else category = 'low'

  // Family-history rule: if normally low and family history is positive,
  // bump to moderate when PSA approaches the threshold.
  // (covered by the 0.8×threshold check above)

  const biopsyRecommended = psa > 10 || (psa >= threshold && familyHistory)

  return {
    category,
    score: Math.round(score),
    threshold,
    ratio: Number(ratio.toFixed(2)),
    biopsyRecommended,
  }
}
