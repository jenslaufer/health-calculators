import { describe, it, expect } from 'vitest'

// Pure functions (copied from BodyTemperatureCalculator.vue)

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9
}

function getCategory(tempC) {
  if (tempC < 35.0) return 'hypothermia'
  if (tempC < 36.1) return 'low'
  if (tempC <= 37.2) return 'normal'
  if (tempC <= 38.0) return 'elevated'
  if (tempC <= 39.0) return 'fever'
  if (tempC <= 40.0) return 'high_fever'
  return 'very_high_fever'
}

describe('celsiusToFahrenheit', () => {
  it('0 °C → 32 °F', () => {
    expect(celsiusToFahrenheit(0)).toBeCloseTo(32)
  })
  it('37 °C → 98.6 °F', () => {
    expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6)
  })
  it('100 °C → 212 °F', () => {
    expect(celsiusToFahrenheit(100)).toBeCloseTo(212)
  })
})

describe('fahrenheitToCelsius', () => {
  it('32 °F → 0 °C', () => {
    expect(fahrenheitToCelsius(32)).toBeCloseTo(0)
  })
  it('98.6 °F → 37 °C', () => {
    expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37)
  })
  it('104 °F → 40 °C', () => {
    expect(fahrenheitToCelsius(104)).toBeCloseTo(40)
  })
})

describe('roundtrip conversion', () => {
  it('C → F → C returns original', () => {
    const original = 38.5
    expect(fahrenheitToCelsius(celsiusToFahrenheit(original))).toBeCloseTo(original)
  })
})

describe('getCategory', () => {
  it('34.9 → hypothermia', () => {
    expect(getCategory(34.9)).toBe('hypothermia')
  })
  it('35.5 → low', () => {
    expect(getCategory(35.5)).toBe('low')
  })
  it('36.1 → normal', () => {
    expect(getCategory(36.1)).toBe('normal')
  })
  it('37.0 → normal', () => {
    expect(getCategory(37.0)).toBe('normal')
  })
  it('37.2 → normal', () => {
    expect(getCategory(37.2)).toBe('normal')
  })
  it('37.5 → elevated', () => {
    expect(getCategory(37.5)).toBe('elevated')
  })
  it('38.5 → fever', () => {
    expect(getCategory(38.5)).toBe('fever')
  })
  it('39.5 → high_fever', () => {
    expect(getCategory(39.5)).toBe('high_fever')
  })
  it('40.1 → very_high_fever', () => {
    expect(getCategory(40.1)).toBe('very_high_fever')
  })
})
