import { describe, it, expect } from 'vitest'
import { adConfig, routeContextMap } from '../ads/config.js'

describe('adConfig', () => {
  const deCategories = ['supplements', 'fitness', 'nutrition', 'pregnancy', 'wellness', 'default']

  it('has all expected DE categories', () => {
    for (const cat of deCategories) {
      expect(adConfig.de[cat]).toBeDefined()
    }
  })

  it.each(deCategories)('DE %s has affiliate text + CTA + url', (cat) => {
    const a = adConfig.de[cat].affiliate
    expect(a.text).toBeTruthy()
    expect(a.cta).toBeTruthy()
    expect(typeof a.url).toBe('string')
  })

  it.each(deCategories)('DE %s has network and program fields', (cat) => {
    const cfg = adConfig.de[cat]
    expect(cfg.network).toBeTruthy()
    expect(cfg.program).toBeTruthy()
  })
})

describe('routeContextMap', () => {
  const expectedDeMappings = {
    // supplements
    'protein-rechner': 'supplements',
    'makro-rechner': 'supplements',
    'tdee-rechner': 'supplements',
    'kaloriendefizit-rechner': 'supplements',
    'bmr-rechner': 'supplements',
    // fitness
    'bmi-rechner': 'fitness',
    'koerperfett-rechner': 'fitness',
    'herzfrequenz-zonen': 'fitness',
    'taille-hueft-verhaeltnis': 'fitness',
    // nutrition
    'idealgewicht-rechner': 'nutrition',
    'intervallfasten-rechner': 'nutrition',
    // pregnancy
    'schwangerschafts-rechner': 'pregnancy',
    'eisprung-rechner': 'pregnancy',
    // wellness
    'blutdruck-rechner': 'wellness',
    'schlafzyklen-rechner': 'wellness',
    'wasser-rechner': 'wellness',
  }

  it('maps all DE calculator slugs to correct categories', () => {
    for (const [slug, category] of Object.entries(expectedDeMappings)) {
      expect(routeContextMap.de[slug], `${slug} should map to ${category}`).toBe(category)
    }
  })

  it('covers all DE calculator route slugs', () => {
    const allSlugs = Object.keys(expectedDeMappings)
    expect(allSlugs.length).toBe(16)
  })

  it('returns undefined for unmapped slugs (fallback to default)', () => {
    expect(routeContextMap.de['nonexistent']).toBeUndefined()
    expect(routeContextMap.en['nonexistent']).toBeUndefined()
  })
})
