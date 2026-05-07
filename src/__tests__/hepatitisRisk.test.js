import { describe, it, expect } from 'vitest'
import {
  calcRiskScore,
  classifyRisk,
  calcHepatitisRisk,
  FACTOR_KEYS,
} from '../utils/hepatitisRisk.js'

// Hepatitis risk screening from CDC/WHO exposure factors.
//
// Factor weights:
//   bornHighPrevalence (2), birthCohort1945to1965 (2),
//   injectionDrugUse (4), transfusionBefore1992 (3),
//   tattooPiercingUnsterile (1), multipleSexPartners (1),
//   hivPositive (2), healthcareNeedlestick (2),
//   householdContactInfected (2), hemodialysis (3),
//   incarcerated (1), maternalInfection (3),
//   elevatedLiverEnzymes (2).
//
// HBV vaccine subtracts 2 from the total (capped at 0).
//
// Bands: 0 → none, 1–3 → low, 4–7 → moderate, ≥8 → high.

describe('calcRiskScore', () => {
  it('returns 0 for no factors', () => {
    expect(calcRiskScore({})).toBe(0)
  })

  it('returns 0 for null / non-object', () => {
    expect(calcRiskScore(null)).toBe(0)
    expect(calcRiskScore(undefined)).toBe(0)
    expect(calcRiskScore('foo')).toBe(0)
  })

  it('weights injectionDrugUse as 4 (highest single factor)', () => {
    expect(calcRiskScore({ injectionDrugUse: true })).toBe(4)
  })

  it('weights tattooPiercingUnsterile as 1', () => {
    expect(calcRiskScore({ tattooPiercingUnsterile: true })).toBe(1)
  })

  it('sums multiple factors correctly', () => {
    expect(
      calcRiskScore({
        injectionDrugUse: true,        // 4
        transfusionBefore1992: true,   // 3
        hivPositive: true,             // 2
      }),
    ).toBe(9)
  })

  it('ignores unknown flags', () => {
    expect(calcRiskScore({ injectionDrugUse: true, foo: true })).toBe(4)
  })

  it('subtracts 2 for HBV vaccination', () => {
    expect(calcRiskScore({ tattooPiercingUnsterile: true, hbvVaccinated: true })).toBe(0)
    expect(calcRiskScore({ injectionDrugUse: true, hbvVaccinated: true })).toBe(2)
  })

  it('vaccine bonus is capped at 0 — never goes negative', () => {
    expect(calcRiskScore({ hbvVaccinated: true })).toBe(0)
  })
})

describe('classifyRisk', () => {
  it('score 0 → none', () => {
    expect(classifyRisk(0)).toBe('none')
  })

  it('score 1 → low', () => {
    expect(classifyRisk(1)).toBe('low')
  })

  it('score 3 → low', () => {
    expect(classifyRisk(3)).toBe('low')
  })

  it('score 4 → moderate', () => {
    expect(classifyRisk(4)).toBe('moderate')
  })

  it('score 7 → moderate', () => {
    expect(classifyRisk(7)).toBe('moderate')
  })

  it('score 8 → high', () => {
    expect(classifyRisk(8)).toBe('high')
  })

  it('score 30 → high', () => {
    expect(classifyRisk(30)).toBe('high')
  })

  it('handles invalid input as none', () => {
    expect(classifyRisk(null)).toBe('none')
    expect(classifyRisk(NaN)).toBe('none')
    expect(classifyRisk(-1)).toBe('none')
  })
})

describe('calcHepatitisRisk integration', () => {
  it('no factors → none, score 0', () => {
    const r = calcHepatitisRisk({})
    expect(r.category).toBe('none')
    expect(r.score).toBe(0)
    expect(r.maxScore).toBeGreaterThan(20)
  })

  it('single low-weight factor → low', () => {
    const r = calcHepatitisRisk({ tattooPiercingUnsterile: true })
    expect(r.category).toBe('low')
    expect(r.score).toBe(1)
  })

  it('two moderate factors → moderate', () => {
    const r = calcHepatitisRisk({
      birthCohort1945to1965: true,   // 2
      hivPositive: true,             // 2
    })
    expect(r.score).toBe(4)
    expect(r.category).toBe('moderate')
  })

  it('IDU plus pre-1992 transfusion → high', () => {
    const r = calcHepatitisRisk({
      injectionDrugUse: true,        // 4
      transfusionBefore1992: true,   // 3
      hivPositive: true,             // 2
    })
    expect(r.score).toBe(9)
    expect(r.category).toBe('high')
  })

  it('IDU alone (4 pts) is moderate, not high', () => {
    const r = calcHepatitisRisk({ injectionDrugUse: true })
    expect(r.category).toBe('moderate')
  })

  it('HBV vaccination drops borderline moderate back to low', () => {
    // 4 raw → 2 after vaccine bonus
    const r = calcHepatitisRisk({
      birthCohort1945to1965: true,
      hivPositive: true,
      hbvVaccinated: true,
    })
    expect(r.score).toBe(2)
    expect(r.category).toBe('low')
  })

  it('exposes a stable list of factor keys without hbvVaccinated', () => {
    expect(FACTOR_KEYS).not.toContain('hbvVaccinated')
    expect(FACTOR_KEYS).toContain('injectionDrugUse')
    expect(FACTOR_KEYS.length).toBeGreaterThanOrEqual(10)
  })
})
