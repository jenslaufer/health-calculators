// Mean Arterial Pressure (MAP) — clinical estimate.
// Formula: MAP ≈ (SBP + 2 × DBP) / 3.

export function calcMap(sbp, dbp) {
  if (sbp == null || dbp == null) return null
  const s = Number(sbp)
  const d = Number(dbp)
  if (!Number.isFinite(s) || !Number.isFinite(d)) return null
  if (s <= 0 || d <= 0) return null
  if (d > s) return null
  return (s + 2 * d) / 3
}

export function getCategory(map) {
  if (map == null || !Number.isFinite(map)) return null
  if (map < 70) return 'low'
  if (map <= 100) return 'normal'
  return 'high'
}

const COLORS = {
  low: 'text-amber-600',
  normal: 'text-emerald-600',
  high: 'text-red-600',
}

const BGS = {
  low: 'bg-amber-50 border-amber-200',
  normal: 'bg-emerald-50 border-emerald-200',
  high: 'bg-red-50 border-red-200',
}

export function categoryColor(category) {
  return COLORS[category] || 'text-stone-900'
}

export function categoryBg(category) {
  return BGS[category] || 'bg-white border-stone-200'
}
