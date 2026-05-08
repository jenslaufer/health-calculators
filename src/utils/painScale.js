// Pain Scale calculator — NRS, VAS, Wong-Baker FACES.
//
// Categorical bands (Serlin et al. 1995, IASP/WHO):
//   0       → none
//   1 – 3   → mild
//   4 – 6   → moderate
//   7 – 10  → severe

export function classifyPain(score) {
  if (typeof score !== 'number' || !Number.isFinite(score)) return null
  if (score < 0 || score > 10) return null
  if (score === 0) return 'none'
  if (score < 4) return 'mild'
  if (score < 7) return 'moderate'
  return 'severe'
}

export function vasToNrs(mm) {
  if (typeof mm !== 'number' || !Number.isFinite(mm)) return null
  if (mm < 0 || mm > 100) return null
  return mm / 10
}

export function nrsToVas(score) {
  if (typeof score !== 'number' || !Number.isFinite(score)) return null
  if (score < 0 || score > 10) return null
  return score * 10
}

const WONG_BAKER_FACES = new Set([0, 2, 4, 6, 8, 10])

export function evaluatePainScore({ scale, value } = {}) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null

  let score
  if (scale === 'nrs') {
    if (!Number.isInteger(value) || value < 0 || value > 10) return null
    score = value
  } else if (scale === 'vas') {
    const nrs = vasToNrs(value)
    if (nrs === null) return null
    score = nrs
  } else if (scale === 'wongBaker') {
    if (!WONG_BAKER_FACES.has(value)) return null
    score = value
  } else {
    return null
  }

  const category = classifyPain(score)
  if (category === null) return null
  return { score, category, vas: nrsToVas(score) }
}
