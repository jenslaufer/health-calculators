import { describe, it, expect } from 'vitest'
import { calcBmi, getBmiCategory, getBmiBarPosition } from '../composables/useBmi.js'

describe('useBmi composable', () => {
  it('calculates metric BMI', () => {
    expect(calcBmi(60, 165, 'metric')).toBeCloseTo(22.0, 0)
    expect(calcBmi(80, 180, 'metric')).toBeCloseTo(24.7, 0)
  })

  it('calculates imperial BMI', () => {
    expect(calcBmi(154, 67, 'imperial')).toBeCloseTo(24.1, 0)
  })

  it('returns null for missing input', () => {
    expect(calcBmi(null, 170, 'metric')).toBeNull()
    expect(calcBmi(70, null, 'metric')).toBeNull()
  })

  it('maps categories using standard thresholds', () => {
    expect(getBmiCategory(18.4).label).toBe('bmi.underweight')
    expect(getBmiCategory(18.5).label).toBe('bmi.normal')
    expect(getBmiCategory(25).label).toBe('bmi.overweight')
    expect(getBmiCategory(30).label).toBe('bmi.obese')
  })

  it('calculates bar position with clamp', () => {
    expect(getBmiBarPosition(10)).toBe(0)
    expect(getBmiBarPosition(25)).toBeCloseTo(50, 0)
    expect(getBmiBarPosition(40)).toBe(100)
    expect(getBmiBarPosition(50)).toBe(100)
  })
})
