import { describe, it, expect } from 'vitest'
import { adConfig, routeContextMap } from '../ads/config.js'

describe('English affiliate programs', () => {
  const enCategories = ['weight-loss', 'coaching', 'greens', 'supplements', 'vitamins', 'default']

  it('has all expected EN categories', () => {
    for (const cat of enCategories) {
      expect(adConfig.en[cat], `missing EN category: ${cat}`).toBeDefined()
    }
  })

  it.each(enCategories)('EN %s has affiliate text, CTA, and placeholder URL', (cat) => {
    const a = adConfig.en[cat].affiliate
    expect(a.text).toBeTruthy()
    expect(a.cta).toBeTruthy()
    expect(typeof a.url).toBe('string')
  })

  it.each(enCategories)('EN %s has network and program fields', (cat) => {
    const cfg = adConfig.en[cat]
    expect(cfg.network).toBeTruthy()
    expect(cfg.program).toBeTruthy()
  })

  it('maps Hims & Hers to weight-loss calculators', () => {
    const weightLossSlugs = ['bmi-calculator', 'calorie-deficit-calculator', 'body-fat-calculator', 'tdee-calculator']
    for (const slug of weightLossSlugs) {
      expect(routeContextMap.en[slug], `${slug} should map to weight-loss`).toBe('weight-loss')
    }
  })

  it('maps Noom to coaching calculators', () => {
    const coachingSlugs = ['macro-calculator', 'bmr-calculator']
    for (const slug of coachingSlugs) {
      expect(routeContextMap.en[slug], `${slug} should map to coaching`).toBe('coaching')
    }
  })

  it('maps Thorne to supplements calculators', () => {
    expect(routeContextMap.en['protein-calculator']).toBe('supplements')
  })

  it('maps Ritual to vitamins calculators', () => {
    expect(routeContextMap.en['water-intake-calculator']).toBe('vitamins')
  })

  it('uses AG1 as EN default for unmapped calculators', () => {
    expect(adConfig.en.default.program).toContain('AG1')
  })
})

describe('German affiliate config preserved under de key', () => {
  const deCategories = ['supplements', 'fitness', 'nutrition', 'pregnancy', 'wellness', 'default']

  it('has all expected DE categories', () => {
    for (const cat of deCategories) {
      expect(adConfig.de[cat], `missing DE category: ${cat}`).toBeDefined()
    }
  })

  it.each(deCategories)('DE %s has affiliate text, CTA, and url', (cat) => {
    const a = adConfig.de[cat].affiliate
    expect(a.text).toBeTruthy()
    expect(a.cta).toBeTruthy()
    expect(typeof a.url).toBe('string')
  })

  it('preserves all DE route mappings', () => {
    const deSlugs = [
      'protein-rechner', 'makro-rechner', 'tdee-rechner', 'kaloriendefizit-rechner', 'bmr-rechner',
      'bmi-rechner', 'koerperfett-rechner', 'herzfrequenz-zonen', 'taille-hueft-verhaeltnis',
      'idealgewicht-rechner', 'schwangerschafts-rechner', 'eisprung-rechner',
      'blutdruck-rechner', 'schlafzyklen-rechner', 'wasser-rechner', 'intervallfasten-rechner',
    ]
    for (const slug of deSlugs) {
      expect(routeContextMap.de[slug], `DE slug ${slug} should be mapped`).toBeTruthy()
    }
  })
})
