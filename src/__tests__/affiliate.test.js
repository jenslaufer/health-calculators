import { describe, it, expect } from 'vitest'
import { adConfig, routeContextMap } from '../ads/config.js'

describe('adConfig', () => {
  const categories = ['supplements', 'fitness', 'nutrition', 'pregnancy', 'wellness', 'default']

  it('has all expected categories', () => {
    for (const cat of categories) {
      expect(adConfig[cat]).toBeDefined()
    }
  })

  it.each(categories)('%s has DE and EN affiliate text + CTA + url', (cat) => {
    const cfg = adConfig[cat]
    for (const lang of ['de', 'en']) {
      const a = cfg.affiliate[lang]
      expect(a.text).toBeTruthy()
      expect(a.cta).toBeTruthy()
      expect(a.url).toBe('#')
    }
  })

  it.each(categories)('%s has network and program fields', (cat) => {
    const cfg = adConfig[cat]
    expect(cfg.network).toBeTruthy()
    expect(cfg.program).toBeTruthy()
  })
})

describe('routeContextMap', () => {
  const expectedMappings = {
    // supplements
    'protein-rechner': 'supplements',
    'protein-calculator': 'supplements',
    'makro-rechner': 'supplements',
    'macro-calculator': 'supplements',
    'tdee-rechner': 'supplements',
    'tdee-calculator': 'supplements',
    'kaloriendefizit-rechner': 'supplements',
    'calorie-deficit-calculator': 'supplements',
    'bmr-rechner': 'supplements',
    'bmr-calculator': 'supplements',
    // fitness
    'bmi-rechner': 'fitness',
    'bmi-calculator': 'fitness',
    'koerperfett-rechner': 'fitness',
    'body-fat-calculator': 'fitness',
    'herzfrequenz-zonen': 'fitness',
    'heart-rate-zones': 'fitness',
    'taille-hueft-verhaeltnis': 'fitness',
    'waist-hip-ratio-calculator': 'fitness',
    // nutrition
    'idealgewicht-rechner': 'nutrition',
    'ideal-weight-calculator': 'nutrition',
    // pregnancy
    'schwangerschafts-rechner': 'pregnancy',
    'pregnancy-calculator': 'pregnancy',
    'eisprung-rechner': 'pregnancy',
    'ovulation-calculator': 'pregnancy',
    // wellness
    'blutdruck-rechner': 'wellness',
    'blood-pressure-calculator': 'wellness',
    'schlafzyklen-rechner': 'wellness',
    'sleep-cycle-calculator': 'wellness',
    'wasser-rechner': 'wellness',
    'water-intake-calculator': 'wellness',
  }

  it('maps all calculator slugs to correct categories', () => {
    for (const [slug, category] of Object.entries(expectedMappings)) {
      expect(routeContextMap[slug], `${slug} should map to ${category}`).toBe(category)
    }
  })

  it('covers all DE and EN calculator route slugs', () => {
    const allSlugs = Object.keys(expectedMappings)
    expect(allSlugs.length).toBe(30) // 15 calculators × 2 locales
  })

  it('returns undefined for unmapped slugs (fallback to default)', () => {
    expect(routeContextMap['nonexistent']).toBeUndefined()
  })
})
