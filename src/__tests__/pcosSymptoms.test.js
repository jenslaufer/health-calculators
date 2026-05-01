import { describe, it, expect } from 'vitest'
import { calcPcosSymptoms } from '../utils/pcosSymptoms.js'

// Rotterdam criteria (2/3 needed for diagnosis):
// 1. Ovulatory dysfunction (irregular or missed periods)
// 2. Hyperandrogenism (hirsutism / acne / scalp hair loss)
// 3. Polycystic ovaries on ultrasound — not assessed by this tool

describe('calcPcosSymptoms', () => {
  it('returns low risk for no symptoms', () => {
    const r = calcPcosSymptoms({})
    expect(r.category).toBe('low')
    expect(r.criteriaMetCount).toBe(0)
    expect(r.symptomCount).toBe(0)
    expect(r.score).toBe(0)
    expect(r.evaluationRecommended).toBe(false)
  })

  it('flags ovulatory dysfunction when irregular cycles present', () => {
    const r = calcPcosSymptoms({ irregularCycles: true })
    expect(r.ovulatoryDysfunction).toBe(true)
    expect(r.hyperandrogenism).toBe(false)
    expect(r.criteriaMetCount).toBe(1)
  })

  it('flags ovulatory dysfunction when periods are missed', () => {
    const r = calcPcosSymptoms({ missedPeriods: true })
    expect(r.ovulatoryDysfunction).toBe(true)
    expect(r.criteriaMetCount).toBe(1)
  })

  it('flags hyperandrogenism when hirsutism is present', () => {
    const r = calcPcosSymptoms({ hirsutism: true })
    expect(r.hyperandrogenism).toBe(true)
    expect(r.ovulatoryDysfunction).toBe(false)
    expect(r.criteriaMetCount).toBe(1)
  })

  it('flags hyperandrogenism when acne is present', () => {
    const r = calcPcosSymptoms({ acne: true })
    expect(r.hyperandrogenism).toBe(true)
    expect(r.criteriaMetCount).toBe(1)
  })

  it('flags hyperandrogenism when scalp hair loss is present', () => {
    const r = calcPcosSymptoms({ hairLoss: true })
    expect(r.hyperandrogenism).toBe(true)
    expect(r.criteriaMetCount).toBe(1)
  })

  it('returns moderate when one Rotterdam criterion is met', () => {
    const r = calcPcosSymptoms({ irregularCycles: true })
    expect(r.category).toBe('moderate')
    expect(r.evaluationRecommended).toBe(false)
  })

  it('returns high when two Rotterdam criteria are met', () => {
    const r = calcPcosSymptoms({ irregularCycles: true, hirsutism: true })
    expect(r.category).toBe('high')
    expect(r.criteriaMetCount).toBe(2)
    expect(r.evaluationRecommended).toBe(true)
  })

  it('classifies as high when both groups have symptoms regardless of which', () => {
    const r = calcPcosSymptoms({ missedPeriods: true, acne: true, hairLoss: true })
    expect(r.category).toBe('high')
    expect(r.criteriaMetCount).toBe(2)
  })

  it('counts every symptom toggled on', () => {
    const r = calcPcosSymptoms({
      irregularCycles: true,
      missedPeriods: true,
      hirsutism: true,
      acne: true,
      hairLoss: true,
      weightGain: true,
      acanthosis: true,
      fertilityIssues: true,
      familyHistory: true,
    })
    expect(r.symptomCount).toBe(9)
    expect(r.score).toBe(100)
    expect(r.category).toBe('high')
    expect(r.evaluationRecommended).toBe(true)
  })

  it('score scales monotonically with symptom count', () => {
    const r1 = calcPcosSymptoms({ irregularCycles: true })
    const r2 = calcPcosSymptoms({ irregularCycles: true, hirsutism: true })
    const r3 = calcPcosSymptoms({ irregularCycles: true, hirsutism: true, acanthosis: true })
    expect(r2.score).toBeGreaterThan(r1.score)
    expect(r3.score).toBeGreaterThan(r2.score)
  })

  it('recommends evaluation when ovulatory + hyperandrogenism overlap', () => {
    const r = calcPcosSymptoms({ irregularCycles: true, acne: true })
    expect(r.evaluationRecommended).toBe(true)
  })

  it('recommends evaluation for one criterion plus four+ supporting symptoms', () => {
    const r = calcPcosSymptoms({
      irregularCycles: true,
      weightGain: true,
      acanthosis: true,
      fertilityIssues: true,
      familyHistory: true,
    })
    expect(r.criteriaMetCount).toBe(1)
    expect(r.evaluationRecommended).toBe(true)
  })

  it('handles undefined input as all false', () => {
    const r = calcPcosSymptoms()
    expect(r.symptomCount).toBe(0)
    expect(r.category).toBe('low')
  })

  it('caps score at 100', () => {
    const r = calcPcosSymptoms({
      irregularCycles: true, missedPeriods: true,
      hirsutism: true, acne: true, hairLoss: true,
      weightGain: true, acanthosis: true,
      fertilityIssues: true, familyHistory: true,
    })
    expect(r.score).toBeLessThanOrEqual(100)
  })
})
