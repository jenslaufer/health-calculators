import { describe, it, expect, vi } from 'vitest'

vi.mock('../data/articles.js', () => ({ articles: [] }))
vi.mock('../data/articles-en.js', () => ({ articlesEn: [] }))
vi.mock('../discovery.js', () => ({
  routeMap: {
    home: { de: '', en: '' },
    bmi: { de: 'bmi-rechner', en: 'bmi-calculator' },
    bmiFrauen: { de: 'bmi-rechner-frauen', en: 'bmi-calculator-women' },
    blog: { de: 'blog', en: 'blog' },
  },
  keyToGroup: {},
}))

import { localePath, localeBlogPath } from '../composables/useLocaleRouter.js'

describe('localePath', () => {
  it('returns /de/ for home key with de locale', () => {
    expect(localePath('home', 'de')).toBe('/de/')
  })

  it('returns /en/ for home key with en locale', () => {
    expect(localePath('home', 'en')).toBe('/en/')
  })

  it('returns /de/bmi-rechner/ with trailing slash for bmi calculator', () => {
    expect(localePath('bmi', 'de')).toBe('/de/bmi-rechner/')
  })

  it('returns /en/bmi-calculator/ with trailing slash for bmi calculator in English', () => {
    expect(localePath('bmi', 'en')).toBe('/en/bmi-calculator/')
  })

  it('returns /de/bmi-rechner-frauen/ with trailing slash for bmiFrauen', () => {
    expect(localePath('bmiFrauen', 'de')).toBe('/de/bmi-rechner-frauen/')
  })

  it('returns /en/bmi-calculator-women/ with trailing slash for bmiFrauen in English', () => {
    expect(localePath('bmiFrauen', 'en')).toBe('/en/bmi-calculator-women/')
  })

  it('returns /de/ for undefined route key (fallback to locale)', () => {
    expect(localePath('nonexistent', 'de')).toBe('/de/')
  })

  it('returns /en/ for undefined route key with en locale', () => {
    expect(localePath('nonexistent', 'en')).toBe('/en/')
  })
})

describe('localeBlogPath', () => {
  it('returns /de/blog/my-article/ with trailing slash for de locale', () => {
    expect(localeBlogPath('my-article', 'de')).toBe('/de/blog/my-article/')
  })

  it('returns /en/blog/my-article/ with trailing slash for en locale', () => {
    expect(localeBlogPath('my-article', 'en')).toBe('/en/blog/my-article/')
  })

  it('returns /de/blog/weight-loss-tips/ with trailing slash for weight-loss-tips', () => {
    expect(localeBlogPath('weight-loss-tips', 'de')).toBe('/de/blog/weight-loss-tips/')
  })

  it('returns /en/blog/weight-loss-tips/ with trailing slash for weight-loss-tips in English', () => {
    expect(localeBlogPath('weight-loss-tips', 'en')).toBe('/en/blog/weight-loss-tips/')
  })
})
