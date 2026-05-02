// Norwood-Hamilton classification of male pattern baldness (androgenetic alopecia).
// Original scale: Hamilton (1951), modified by Norwood (1975).
// Stages 1, 2, 3, 3v, 4, 5, 6, 7 — increasing severity.
//
// Self-assessment: 4 questions about hairline recession at temples, vertex/crown
// thinning, scalp visibility on top, and density at sides/back. Each scored 1–5.
// Total range: 4–20. Mapping to Norwood stages:
//   4– 5  Stage 1 (no loss)
//   6– 7  Stage 2 (mature hairline)
//   8– 9  Stage 3 (frontal recession)
//  10–11  Stage 3v (frontal + vertex)
//  12–13  Stage 4 (advanced front + crown)
//  14–15  Stage 5 (zones merging)
//  16–17  Stage 6 (band lost)
//  18–20  Stage 7 (sides/back only)

const STAGES = ['1', '2', '3', '3v', '4', '5', '6', '7']

function isValidAnswer(a) {
  return Number.isInteger(a) && a >= 1 && a <= 5
}

export function calcNorwoodScore(answers) {
  if (!Array.isArray(answers) || answers.length !== 4) return null
  if (!answers.every(isValidAnswer)) return null
  return answers.reduce((sum, a) => sum + a, 0)
}

export function classifyNorwood(score) {
  if (!Number.isFinite(score) || score < 4 || score > 20) return null
  if (score <= 5) return '1'
  if (score <= 7) return '2'
  if (score <= 9) return '3'
  if (score <= 11) return '3v'
  if (score <= 13) return '4'
  if (score <= 15) return '5'
  if (score <= 17) return '6'
  return '7'
}

export function calcMalePatternResult(answers) {
  const score = calcNorwoodScore(answers)
  if (score === null) return null
  const stage = classifyNorwood(score)
  const stageIndex = STAGES.indexOf(stage)
  return {
    score,
    stage,
    stageIndex,
    hasLoss: stage !== '1',
    isAdvanced: stageIndex >= 4,
  }
}

export const NORWOOD_STAGES = STAGES
