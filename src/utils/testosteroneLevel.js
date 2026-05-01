// Free testosterone via the Vermeulen equation (de Ronde / Vermeulen 1999).
// All inputs in SI units:
//   totalT  — nmol/L (or convertible via totalUnit)
//   shbg    — nmol/L
//   albumin — g/L (default 43)
// Output: nmol/L (free) and pmol/L convenience.

const KT = 1e9      // testosterone-SHBG association constant, L/mol
const KA = 3.6e4    // testosterone-albumin association constant, L/mol
const NG_DL_TO_NMOL_L = 0.0347  // total testosterone unit factor

function isPositive(x) {
  return Number.isFinite(x) && x > 0
}

export function calcFreeTestosterone({ totalT, shbg, albumin = 43, totalUnit = 'nmol/L' } = {}) {
  let total = totalT
  if (totalUnit === 'ng/dL') total = totalT * NG_DL_TO_NMOL_L
  if (!isPositive(total) || !isPositive(shbg) || !isPositive(albumin)) return null

  // Vermeulen quadratic: solves [Free T] from total, SHBG, albumin
  const N = KA * (albumin / 69_000) + 1   // 69 kDa albumin → mol/L
  const a = N * KT
  const b = N + KT * (shbg - total) * 1e-9
  const c = -total * 1e-9

  const free = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  return free * 1e9    // mol/L → nmol/L
}

export function classifyTotalTestosterone(totalT) {
  if (!isPositive(totalT)) return null
  if (totalT < 8) return 'low'
  if (totalT < 12) return 'borderline'
  if (totalT <= 30) return 'normal'
  return 'high'
}

export function classifyFreeTestosterone(freeT) {
  if (!isPositive(freeT)) return null
  if (freeT < 0.20) return 'low'
  if (freeT <= 0.62) return 'normal'
  return 'high'
}

export function calcTestosteroneStatus({ totalT, shbg, albumin = 43, totalUnit = 'nmol/L' } = {}) {
  let total = totalT
  if (totalUnit === 'ng/dL' && isPositive(totalT)) total = totalT * NG_DL_TO_NMOL_L

  if (!isPositive(total) || !isPositive(shbg) || !isPositive(albumin)) return null

  const freeT = calcFreeTestosterone({ totalT: total, shbg, albumin })
  if (freeT == null) return null

  const totalCategory = classifyTotalTestosterone(total)
  const freeCategory = classifyFreeTestosterone(freeT)

  return {
    totalT: Number(total.toFixed(2)),
    freeT: Number(freeT.toFixed(3)),
    freeTpmol: Math.round(freeT * 1000),
    totalCategory,
    freeCategory,
    hypogonadism: totalCategory === 'low' || freeCategory === 'low',
  }
}
