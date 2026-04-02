import { describe, it, expect } from 'vitest'

// MET values from Compendium of Physical Activities
const activities = [
  { key: 'running_8kmh', met: 8.3, category: 'running' },
  { key: 'running_10kmh', met: 9.8, category: 'running' },
  { key: 'running_12kmh', met: 11.0, category: 'running' },
  { key: 'running_14kmh', met: 11.8, category: 'running' },
  { key: 'running_16kmh', met: 12.8, category: 'running' },
  { key: 'cycling_leisure', met: 3.5, category: 'cycling' },
  { key: 'cycling_moderate', met: 6.8, category: 'cycling' },
  { key: 'cycling_vigorous', met: 10.0, category: 'cycling' },
  { key: 'cycling_mountain', met: 8.5, category: 'cycling' },
  { key: 'swimming_leisurely', met: 6.0, category: 'swimming' },
  { key: 'swimming_moderate', met: 7.0, category: 'swimming' },
  { key: 'swimming_vigorous', met: 9.8, category: 'swimming' },
  { key: 'swimming_backstroke', met: 4.8, category: 'swimming' },
  { key: 'swimming_butterfly', met: 13.8, category: 'swimming' },
  { key: 'weightlifting_light', met: 3.5, category: 'gym' },
  { key: 'weightlifting_vigorous', met: 6.0, category: 'gym' },
  { key: 'hiit', met: 8.0, category: 'gym' },
  { key: 'yoga', met: 2.5, category: 'gym' },
  { key: 'pilates', met: 3.0, category: 'gym' },
  { key: 'elliptical', met: 5.0, category: 'gym' },
  { key: 'rowing_moderate', met: 7.0, category: 'gym' },
  { key: 'soccer', met: 7.0, category: 'sports' },
  { key: 'basketball', met: 6.5, category: 'sports' },
  { key: 'tennis_singles', met: 8.0, category: 'sports' },
  { key: 'tennis_doubles', met: 5.0, category: 'sports' },
  { key: 'badminton', met: 5.5, category: 'sports' },
  { key: 'volleyball', met: 4.0, category: 'sports' },
  { key: 'hiking', met: 6.0, category: 'daily' },
  { key: 'walking_moderate', met: 3.5, category: 'daily' },
  { key: 'walking_brisk', met: 4.3, category: 'daily' },
  { key: 'gardening', met: 3.8, category: 'daily' },
  { key: 'housework', met: 3.3, category: 'daily' },
  { key: 'dancing', met: 5.5, category: 'daily' },
  { key: 'stair_climbing', met: 8.8, category: 'daily' },
]

function calcCaloriesBurned(met, weightKg, durationMinutes) {
  return met * weightKg * (durationMinutes / 60)
}

function convertLbsToKg(lbs) {
  return lbs * 0.453592
}

function calcFoodEquivalents(calories) {
  return {
    slicesPizza: Math.round(calories / 285 * 10) / 10,
    bananas: Math.round(calories / 105 * 10) / 10,
    chocolate: Math.round(calories / 235 * 10) / 10,
  }
}

function calcWeeklyProjection(caloriesPerSession, sessionsPerWeek) {
  return caloriesPerSession * sessionsPerWeek
}

describe('Calories burned formula', () => {
  it('running at 10 km/h, 80 kg, 30 min', () => {
    const result = calcCaloriesBurned(9.8, 80, 30)
    expect(Math.round(result)).toBe(392)
  })

  it('walking moderate, 70 kg, 60 min', () => {
    const result = calcCaloriesBurned(3.5, 70, 60)
    expect(Math.round(result)).toBe(245)
  })

  it('swimming vigorous, 90 kg, 45 min', () => {
    const result = calcCaloriesBurned(9.8, 90, 45)
    expect(Math.round(result)).toBe(662)
  })

  it('zero duration returns 0', () => {
    expect(calcCaloriesBurned(9.8, 80, 0)).toBe(0)
  })

  it('HIIT, 65 kg, 20 min', () => {
    const result = calcCaloriesBurned(8.0, 65, 20)
    expect(Math.round(result)).toBe(173)
  })
})

describe('Weight conversion', () => {
  it('converts 150 lbs to ~68 kg', () => {
    expect(Math.round(convertLbsToKg(150))).toBe(68)
  })

  it('converts 200 lbs to ~91 kg', () => {
    expect(Math.round(convertLbsToKg(200))).toBe(91)
  })
})

describe('Food equivalents', () => {
  it('392 calories = food equivalents', () => {
    const eq = calcFoodEquivalents(392)
    expect(eq.slicesPizza).toBe(1.4)
    expect(eq.bananas).toBe(3.7)
    expect(eq.chocolate).toBe(1.7)
  })

  it('0 calories = zero equivalents', () => {
    const eq = calcFoodEquivalents(0)
    expect(eq.slicesPizza).toBe(0)
    expect(eq.bananas).toBe(0)
    expect(eq.chocolate).toBe(0)
  })
})

describe('Weekly projection', () => {
  it('392 kcal x 3 sessions = 1176 kcal/week', () => {
    expect(calcWeeklyProjection(392, 3)).toBe(1176)
  })

  it('245 kcal x 5 sessions = 1225 kcal/week', () => {
    expect(calcWeeklyProjection(245, 5)).toBe(1225)
  })
})

describe('Activity data', () => {
  it('has at least 30 activities', () => {
    expect(activities.length).toBeGreaterThanOrEqual(30)
  })

  it('covers all 6 categories', () => {
    const categories = [...new Set(activities.map(a => a.category))]
    expect(categories).toContain('running')
    expect(categories).toContain('cycling')
    expect(categories).toContain('swimming')
    expect(categories).toContain('gym')
    expect(categories).toContain('sports')
    expect(categories).toContain('daily')
  })

  it('all MET values are positive', () => {
    activities.forEach(a => expect(a.met).toBeGreaterThan(0))
  })
})

describe('Edge cases', () => {
  it('very light activity (yoga 2.5 MET), light person (50 kg), short duration (10 min)', () => {
    const result = calcCaloriesBurned(2.5, 50, 10)
    expect(Math.round(result)).toBe(21)
  })

  it('heavy activity (butterfly 13.8 MET), heavy person (120 kg), long duration (90 min)', () => {
    const result = calcCaloriesBurned(13.8, 120, 90)
    expect(Math.round(result)).toBe(2484)
  })

  it('lbs to kg conversion with calculation', () => {
    const weightKg = convertLbsToKg(176)
    const result = calcCaloriesBurned(8.3, weightKg, 30)
    expect(Math.round(result)).toBe(331)
  })
})
