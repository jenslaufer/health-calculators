import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

vi.mock('@unhead/vue', () => ({ useHead: vi.fn() }))

const mockRoute = { path: '/de/bmi-rechner', meta: { slug: 'bmi' } }
vi.mock('vue-router', () => ({ useRoute: () => mockRoute }))
vi.mock('vue-i18n', () => ({ useI18n: () => ({ locale: ref('de') }) }))
vi.mock('../composables/useLocaleRouter.js', () => ({
  localePath: (key, locale) => `/${locale}/${key === 'bmi' ? (locale === 'de' ? 'bmi-rechner' : 'bmi-calculator') : key}`,
  routeMap: { bmi: { de: 'bmi-rechner', en: 'bmi-calculator' } },
}))

import { useHead as useUnhead } from '@unhead/vue'
import { useHead } from '../composables/useHead.js'

describe('useHead', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls @unhead/vue useHead with correct structure', () => {
    useHead(() => ({
      title: 'BMI Rechner',
      description: 'Berechne deinen BMI',
      routeKey: 'bmi',
    }))

    expect(useUnhead).toHaveBeenCalledTimes(1)
    const arg = useUnhead.mock.calls[0][0]
    // arg is a computed ref
    const head = arg.value

    expect(head.title).toBe('BMI Rechner')
    expect(head.meta).toEqual(expect.arrayContaining([
      { name: 'description', content: 'Berechne deinen BMI' },
      { property: 'og:title', content: 'BMI Rechner' },
      { property: 'og:description', content: 'Berechne deinen BMI' },
      { name: 'twitter:title', content: 'BMI Rechner' },
      { name: 'twitter:description', content: 'Berechne deinen BMI' },
    ]))
    expect(head.link).toEqual(expect.arrayContaining([
      { rel: 'canonical', href: 'https://healthcalculator.app/de/bmi-rechner' },
      { rel: 'alternate', hreflang: 'de', href: 'https://healthcalculator.app/de/bmi-rechner' },
      { rel: 'alternate', hreflang: 'en', href: 'https://healthcalculator.app/en/bmi-calculator' },
    ]))
  })

  it('accepts a plain object instead of a function', () => {
    useHead({
      title: 'Test',
      description: 'Desc',
      routeKey: 'bmi',
    })

    const head = useUnhead.mock.calls[0][0].value
    expect(head.title).toBe('Test')
  })

  it('includes jsonLd as script when provided', () => {
    const jsonLd = { '@type': 'WebPage', name: 'BMI' }
    useHead(() => ({
      title: 'BMI',
      description: 'BMI',
      routeKey: 'bmi',
      jsonLd,
    }))

    const head = useUnhead.mock.calls[0][0].value
    expect(head.script).toEqual([
      { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) },
    ])
  })

  it('omits script when jsonLd is not provided', () => {
    useHead(() => ({
      title: 'BMI',
      description: 'BMI',
      routeKey: 'bmi',
    }))

    const head = useUnhead.mock.calls[0][0].value
    expect(head.script).toBeUndefined()
  })

  it('sets og:url from routeKey and locale', () => {
    useHead(() => ({
      title: 'BMI',
      description: 'BMI',
      routeKey: 'bmi',
    }))

    const head = useUnhead.mock.calls[0][0].value
    const ogUrl = head.meta.find(m => m.property === 'og:url')
    expect(ogUrl.content).toBe('https://healthcalculator.app/de/bmi-rechner')
  })
})
