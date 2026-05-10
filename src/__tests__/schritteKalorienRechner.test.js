import { describe, it, expect } from 'vitest'
import {
  calcCalories,
  calcDistanceKm,
  classifyActivityLevel,
  estimateStrideCm,
  computeStepsResult,
} from '../utils/schritteKalorienRechner.js'

// Schritte-Kalorien-Rechner
//
// Calorie baseline (moderate walking, ~5 km/h):
//   kcal ≈ steps × 0.04 × (weightKg / 70)
//   Source calibration: Tudor-Locke et al. 2008 / Compendium of Physical Activities.
//
// Distance:
//   km = (steps × strideCm) / 100000
//
// Activity bands (Tudor-Locke 2008, "How many steps/day are enough?"):
//   < 5000        → sedentary
//   5000–7499     → low
//   7500–9999     → moderate
//   10000–12499   → active
//   ≥ 12500       → veryActive

describe('calcCalories — baseline formula', () => {
  it('10000 steps × 70 kg → 400 kcal (canonical)', () => {
    expect(calcCalories(10000, 70)).toBeCloseTo(400, 1)
  })

  it('10000 steps × 80 kg → ~457 kcal', () => {
    // 10000 * 0.04 * (80/70) = 457.14
    expect(calcCalories(10000, 80)).toBeCloseTo(457.14, 1)
  })

  it('5000 steps × 70 kg → 200 kcal', () => {
    expect(calcCalories(5000, 70)).toBeCloseTo(200, 1)
  })

  it('returns 0 for zero or negative steps', () => {
    expect(calcCalories(0, 70)).toBe(0)
    expect(calcCalories(-1000, 70)).toBe(0)
  })

  it('returns 0 for zero or negative weight', () => {
    expect(calcCalories(10000, 0)).toBe(0)
    expect(calcCalories(10000, -50)).toBe(0)
  })

  it('returns 0 for null/undefined inputs', () => {
    expect(calcCalories(null, 70)).toBe(0)
    expect(calcCalories(10000, null)).toBe(0)
    expect(calcCalories(undefined, undefined)).toBe(0)
  })
})

describe('calcDistanceKm — stride-based distance', () => {
  it('10000 steps × 75 cm → 7.5 km', () => {
    expect(calcDistanceKm(10000, 75)).toBeCloseTo(7.5, 2)
  })

  it('10000 steps × 80 cm → 8.0 km', () => {
    expect(calcDistanceKm(10000, 80)).toBeCloseTo(8.0, 2)
  })

  it('7500 steps × 70 cm → 5.25 km', () => {
    expect(calcDistanceKm(7500, 70)).toBeCloseTo(5.25, 2)
  })

  it('returns 0 for zero or invalid input', () => {
    expect(calcDistanceKm(0, 75)).toBe(0)
    expect(calcDistanceKm(10000, 0)).toBe(0)
    expect(calcDistanceKm(null, 75)).toBe(0)
    expect(calcDistanceKm(10000, null)).toBe(0)
  })
})

describe('classifyActivityLevel — Tudor-Locke bands', () => {
  it('4000 steps → sedentary', () => {
    expect(classifyActivityLevel(4000)).toBe('sedentary')
  })

  it('5000 steps → low (lower bound)', () => {
    expect(classifyActivityLevel(5000)).toBe('low')
  })

  it('7000 steps → low', () => {
    expect(classifyActivityLevel(7000)).toBe('low')
  })

  it('8000 steps → moderate', () => {
    expect(classifyActivityLevel(8000)).toBe('moderate')
  })

  it('10000 steps → active (lower bound)', () => {
    expect(classifyActivityLevel(10000)).toBe('active')
  })

  it('12000 steps → active', () => {
    expect(classifyActivityLevel(12000)).toBe('active')
  })

  it('13000 steps → veryActive', () => {
    expect(classifyActivityLevel(13000)).toBe('veryActive')
  })

  it('returns null for invalid input', () => {
    expect(classifyActivityLevel(null)).toBe(null)
    expect(classifyActivityLevel(-100)).toBe(null)
    expect(classifyActivityLevel('abc')).toBe(null)
  })
})

describe('estimateStrideCm — fallback from height', () => {
  it('height 180 cm → ~73.8 cm (factor 0.41)', () => {
    expect(estimateStrideCm(180)).toBeCloseTo(73.8, 1)
  })

  it('height 165 cm → ~67.65 cm', () => {
    expect(estimateStrideCm(165)).toBeCloseTo(67.65, 1)
  })

  it('returns default 75 for missing height', () => {
    expect(estimateStrideCm(null)).toBe(75)
    expect(estimateStrideCm(0)).toBe(75)
    expect(estimateStrideCm(undefined)).toBe(75)
  })
})

describe('computeStepsResult — combined pipeline', () => {
  it('10000 steps, 80 kg, 75 cm stride → kcal+km+activity', () => {
    const r = computeStepsResult({ steps: 10000, weightKg: 80, strideCm: 75 })
    expect(r.kcal).toBeCloseTo(457.14, 1)
    expect(r.km).toBeCloseTo(7.5, 2)
    expect(r.activityLevel).toBe('active')
  })

  it('uses estimated stride when not provided but height is', () => {
    const r = computeStepsResult({ steps: 10000, weightKg: 70, heightCm: 180 })
    expect(r.km).toBeCloseTo(7.38, 1)
  })

  it('falls back to 75 cm stride when no stride or height given', () => {
    const r = computeStepsResult({ steps: 10000, weightKg: 70 })
    expect(r.km).toBeCloseTo(7.5, 2)
  })

  it('returns null for missing required inputs', () => {
    expect(computeStepsResult({ weightKg: 70 })).toBe(null)
    expect(computeStepsResult({ steps: 10000 })).toBe(null)
    expect(computeStepsResult({})).toBe(null)
  })

  it('returns null for non-positive steps or weight', () => {
    expect(computeStepsResult({ steps: 0, weightKg: 70 })).toBe(null)
    expect(computeStepsResult({ steps: 10000, weightKg: 0 })).toBe(null)
    expect(computeStepsResult({ steps: -100, weightKg: 70 })).toBe(null)
  })
})
