import { describe, it, expect } from 'vitest'
import { calcMenopauseSymptom, MRS_ITEMS } from '../utils/menopauseSymptom.js'

// MRS — Menopause Rating Scale (Heinemann et al. 2003).
// 11 items × 0–4 → total 0–44; subscales somatic (4 items), psychological (4),
// urogenital (3). Severity cutoffs validated in BMC Health Qual Life Outcomes 2004.

describe('calcMenopauseSymptom', () => {
  it('returns total 0 and category none when no symptoms', () => {
    const r = calcMenopauseSymptom({})
    expect(r.total).toBe(0)
    expect(r.somatic).toBe(0)
    expect(r.psychological).toBe(0)
    expect(r.urogenital).toBe(0)
    expect(r.category).toBe('none')
    expect(r.evaluationRecommended).toBe(false)
  })

  it('sums all 11 items into total score', () => {
    const r = calcMenopauseSymptom({
      hotFlushes: 4, heartDiscomfort: 4, sleepProblems: 4, jointMuscleDiscomfort: 4,
      depressiveMood: 4, irritability: 4, anxiety: 4, exhaustion: 4,
      sexualProblems: 4, bladderProblems: 4, vaginalDryness: 4,
    })
    expect(r.total).toBe(44)
    expect(r.somatic).toBe(16)
    expect(r.psychological).toBe(16)
    expect(r.urogenital).toBe(12)
    expect(r.category).toBe('severe')
    expect(r.evaluationRecommended).toBe(true)
  })

  it('classifies total 5–8 as mild', () => {
    const r = calcMenopauseSymptom({ hotFlushes: 2, sleepProblems: 2, depressiveMood: 2 })
    expect(r.total).toBe(6)
    expect(r.category).toBe('mild')
    expect(r.evaluationRecommended).toBe(false)
  })

  it('classifies total 9–16 as moderate', () => {
    const r = calcMenopauseSymptom({
      hotFlushes: 3, sleepProblems: 3, depressiveMood: 3, anxiety: 3,
    })
    expect(r.total).toBe(12)
    expect(r.category).toBe('moderate')
    expect(r.evaluationRecommended).toBe(false)
  })

  it('classifies total ≥17 as severe and recommends evaluation', () => {
    const r = calcMenopauseSymptom({
      hotFlushes: 4, sleepProblems: 4, depressiveMood: 4, anxiety: 4, exhaustion: 1,
    })
    expect(r.total).toBe(17)
    expect(r.category).toBe('severe')
    expect(r.evaluationRecommended).toBe(true)
  })

  it('classifies somatic subscale per Heinemann cutoffs', () => {
    expect(calcMenopauseSymptom({ hotFlushes: 2 }).somaticCategory).toBe('none')
    expect(calcMenopauseSymptom({ hotFlushes: 3 }).somaticCategory).toBe('mild')
    expect(calcMenopauseSymptom({ hotFlushes: 4, sleepProblems: 3 }).somaticCategory).toBe('moderate')
    expect(calcMenopauseSymptom({ hotFlushes: 4, sleepProblems: 3, jointMuscleDiscomfort: 2 }).somaticCategory).toBe('severe')
  })

  it('classifies psychological subscale per Heinemann cutoffs', () => {
    expect(calcMenopauseSymptom({ depressiveMood: 1 }).psychologicalCategory).toBe('none')
    expect(calcMenopauseSymptom({ depressiveMood: 2 }).psychologicalCategory).toBe('mild')
    expect(calcMenopauseSymptom({ depressiveMood: 3, irritability: 2 }).psychologicalCategory).toBe('moderate')
    expect(calcMenopauseSymptom({ depressiveMood: 4, irritability: 3 }).psychologicalCategory).toBe('severe')
  })

  it('classifies urogenital subscale per Heinemann cutoffs', () => {
    expect(calcMenopauseSymptom({}).urogenitalCategory).toBe('none')
    expect(calcMenopauseSymptom({ vaginalDryness: 1 }).urogenitalCategory).toBe('mild')
    expect(calcMenopauseSymptom({ vaginalDryness: 2 }).urogenitalCategory).toBe('moderate')
    expect(calcMenopauseSymptom({ vaginalDryness: 2, bladderProblems: 2 }).urogenitalCategory).toBe('severe')
  })

  it('clamps inputs to 0–4 range and floors fractional values', () => {
    const r = calcMenopauseSymptom({ hotFlushes: 9, sleepProblems: -3, depressiveMood: 2.6 })
    expect(r.scores.hotFlushes).toBe(4)
    expect(r.scores.sleepProblems).toBe(0)
    expect(r.scores.depressiveMood).toBe(3)
  })

  it('ignores unknown keys and treats missing values as 0', () => {
    const r = calcMenopauseSymptom({ unknownKey: 4, hotFlushes: 2 })
    expect(r.total).toBe(2)
    expect(r.scores.hotFlushes).toBe(2)
  })

  it('exposes 11 MRS_ITEMS with subscale tags', () => {
    expect(MRS_ITEMS).toHaveLength(11)
    expect(MRS_ITEMS.filter(i => i.subscale === 'somatic')).toHaveLength(4)
    expect(MRS_ITEMS.filter(i => i.subscale === 'psychological')).toHaveLength(4)
    expect(MRS_ITEMS.filter(i => i.subscale === 'urogenital')).toHaveLength(3)
  })
})
