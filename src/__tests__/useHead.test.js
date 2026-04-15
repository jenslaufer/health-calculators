import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

vi.mock('@unhead/vue', () => ({ useHead: vi.fn() }))

const mockRoute = { path: '/de/bmi-rechner', meta: { slug: 'bmi', routeKey: 'bmi' } }
vi.mock('vue-router', () => ({ useRoute: () => mockRoute }))

const mockLocale = ref('de')
vi.mock('vue-i18n', () => ({ useI18n: () => ({ locale: mockLocale, t: key => key }) }))
vi.mock('../composables/useLocaleRouter.js', () => ({
  localePath: (key, locale) => `/${locale}/${key === 'bmi' ? (locale === 'de' ? 'bmi-rechner' : 'bmi-calculator') : key}`,
  routeMap: { bmi: { de: 'bmi-rechner', en: 'bmi-calculator' }, home: { de: '', en: '' }, blog: { de: 'blog', en: 'blog' } },
  keyToGroup: { bmi: 'bodyComposition' },
}))

import { useHead as useUnhead } from '@unhead/vue'
import { useHead, buildBreadcrumb } from '../composables/useHead.js'

describe('useHead', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocale.value = 'de'
    mockRoute.path = '/de/bmi-rechner'
    mockRoute.meta = { slug: 'bmi', routeKey: 'bmi' }
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
      { rel: 'canonical', href: 'https://healthcalculator.app/de/bmi-rechner/' },
      { rel: 'alternate', hreflang: 'de', href: 'https://healthcalculator.app/de/bmi-rechner/' },
      { rel: 'alternate', hreflang: 'en', href: 'https://healthcalculator.app/en/bmi-calculator/' },
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
    const jsonLdScript = head.script.find(s => JSON.parse(s.innerHTML)['@type'] === 'WebPage')
    expect(jsonLdScript).toBeDefined()
    expect(JSON.parse(jsonLdScript.innerHTML)).toEqual(jsonLd)
  })

  it('omits script when jsonLd is not provided and routeKey is home', () => {
    mockRoute.meta = { routeKey: 'home' }
    useHead(() => ({
      title: 'Home',
      description: 'Home',
      routeKey: 'home',
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
    expect(ogUrl.content).toBe('https://healthcalculator.app/de/bmi-rechner/')
  })

  it('sets htmlAttrs.lang to "de" when locale is "de"', () => {
    mockLocale.value = 'de'
    useHead(() => ({
      title: 'BMI Rechner',
      description: 'Berechne deinen BMI',
      routeKey: 'bmi',
    }))

    const head = useUnhead.mock.calls[0][0].value
    expect(head.htmlAttrs).toEqual({ lang: 'de' })
  })

  it('sets htmlAttrs.lang to "en" when locale is "en"', () => {
    mockLocale.value = 'en'
    useHead(() => ({
      title: 'BMI Calculator',
      description: 'Calculate your BMI',
      routeKey: 'bmi',
    }))

    const head = useUnhead.mock.calls[0][0].value
    expect(head.htmlAttrs).toEqual({ lang: 'en' })
  })

  it('canonical and all hreflang URLs end with a trailing slash', () => {
    mockLocale.value = 'de'
    useHead(() => ({
      title: 'BMI Rechner',
      description: 'Berechne deinen BMI',
      routeKey: 'bmi',
    }))

    const head = useUnhead.mock.calls[0][0].value
    const canonical = head.link.find(l => l.rel === 'canonical')
    expect(canonical.href, 'canonical missing trailing slash').toMatch(/\/$/)
    for (const link of head.link.filter(l => l.rel === 'alternate')) {
      expect(link.href, `hreflang URL missing trailing slash: ${link.href}`).toMatch(/\/$/)
    }
  })

  describe('BreadcrumbList schema', () => {
    it('adds BreadcrumbList for calculator pages', () => {
      useHead(() => ({
        title: 'BMI Rechner',
        description: 'Berechne deinen BMI',
        routeKey: 'bmi',
      }))

      const head = useUnhead.mock.calls[0][0].value
      const breadcrumbScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'BreadcrumbList'
      })
      expect(breadcrumbScript).toBeDefined()
      const breadcrumb = JSON.parse(breadcrumbScript.innerHTML)
      expect(breadcrumb.itemListElement).toHaveLength(3)
      expect(breadcrumb.itemListElement[0]).toMatchObject({
        position: 1, name: 'nav.brand', item: 'https://healthcalculator.app/de/',
      })
      expect(breadcrumb.itemListElement[1]).toMatchObject({
        position: 2, name: 'home.groups.bodyComposition', item: 'https://healthcalculator.app/de/',
      })
      expect(breadcrumb.itemListElement[2]).toMatchObject({
        position: 3, name: 'BMI Rechner',
      })
      expect(breadcrumb.itemListElement[2].item).toBeUndefined()
    })

    it('adds BreadcrumbList for blog home', () => {
      mockRoute.meta = { routeKey: 'blog' }
      useHead(() => ({
        title: 'Blog',
        description: 'Blog',
        routeKey: 'blog',
      }))

      const head = useUnhead.mock.calls[0][0].value
      const breadcrumbScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'BreadcrumbList'
      })
      expect(breadcrumbScript).toBeDefined()
      const breadcrumb = JSON.parse(breadcrumbScript.innerHTML)
      expect(breadcrumb.itemListElement).toHaveLength(2)
      expect(breadcrumb.itemListElement[0]).toMatchObject({ position: 1, name: 'nav.brand' })
      expect(breadcrumb.itemListElement[1]).toMatchObject({ position: 2, name: 'nav.blog' })
      expect(breadcrumb.itemListElement[1].item).toBeUndefined()
    })

    it('adds BreadcrumbList for blog articles', () => {
      mockRoute.meta = { slug: 'bmi-berechnen', routeKey: 'blogArticle' }
      useHead(() => ({
        title: 'BMI berechnen',
        description: 'BMI Artikel',
        routeKey: 'blogArticle',
      }))

      const head = useUnhead.mock.calls[0][0].value
      const breadcrumbScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'BreadcrumbList'
      })
      expect(breadcrumbScript).toBeDefined()
      const breadcrumb = JSON.parse(breadcrumbScript.innerHTML)
      expect(breadcrumb.itemListElement).toHaveLength(3)
      expect(breadcrumb.itemListElement[0]).toMatchObject({ position: 1, name: 'nav.brand' })
      expect(breadcrumb.itemListElement[1]).toMatchObject({
        position: 2, name: 'nav.blog', item: 'https://healthcalculator.app/de/blog/',
      })
      expect(breadcrumb.itemListElement[2]).toMatchObject({ position: 3, name: 'BMI berechnen' })
    })

    it('omits BreadcrumbList for home page', () => {
      mockRoute.meta = { routeKey: 'home' }
      useHead(() => ({
        title: 'Home',
        description: 'Home',
        routeKey: 'home',
        jsonLd: { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Home' },
      }))

      const head = useUnhead.mock.calls[0][0].value
      const breadcrumbScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'BreadcrumbList'
      })
      expect(breadcrumbScript).toBeUndefined()
    })

    it('uses route.meta.routeKey as fallback for breadcrumb', () => {
      mockRoute.meta = { routeKey: 'blogArticle', slug: 'calculate-bmi' }
      mockRoute.path = '/en/blog/calculate-bmi'
      mockLocale.value = 'en'
      useHead({
        title: 'Calculate BMI',
        description: 'BMI article',
      })

      const head = useUnhead.mock.calls[0][0].value
      const breadcrumbScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'BreadcrumbList'
      })
      expect(breadcrumbScript).toBeDefined()
      const breadcrumb = JSON.parse(breadcrumbScript.innerHTML)
      expect(breadcrumb.itemListElement).toHaveLength(3)
      expect(breadcrumb.itemListElement[1]).toMatchObject({ name: 'nav.blog' })
    })
  })

  describe('Article image enrichment', () => {
    it('adds default image to Article JSON-LD when not provided', () => {
      mockRoute.meta = { slug: 'bmi-berechnen', routeKey: 'blogArticle' }
      useHead(() => ({
        title: 'BMI berechnen',
        description: 'BMI Artikel',
        routeKey: 'blogArticle',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'BMI berechnen',
        },
      }))

      const head = useUnhead.mock.calls[0][0].value
      const articleScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'Article'
      })
      const article = JSON.parse(articleScript.innerHTML)
      expect(article.image).toBe('https://healthcalculator.app/og-image.png')
    })

    it('preserves custom image when provided in Article JSON-LD', () => {
      mockRoute.meta = { slug: 'bmi-berechnen', routeKey: 'blogArticle' }
      useHead(() => ({
        title: 'BMI berechnen',
        description: 'BMI Artikel',
        routeKey: 'blogArticle',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'BMI berechnen',
          image: 'https://healthcalculator.app/custom-image.png',
        },
      }))

      const head = useUnhead.mock.calls[0][0].value
      const articleScript = head.script.find(s => {
        const data = JSON.parse(s.innerHTML)
        return data['@type'] === 'Article'
      })
      const article = JSON.parse(articleScript.innerHTML)
      expect(article.image).toBe('https://healthcalculator.app/custom-image.png')
    })
  })
})

describe('buildBreadcrumb', () => {
  const t = key => key

  it('returns null for home page', () => {
    const result = buildBreadcrumb({
      routeKey: 'home',
      title: 'Home',
      locale: 'de',
      t,
      homeUrl: 'https://healthcalculator.app/de/',
      blogUrl: 'https://healthcalculator.app/de/blog/',
    })
    expect(result).toBeNull()
  })

  it('builds correct breadcrumb for blog home', () => {
    const result = buildBreadcrumb({
      routeKey: 'blog',
      title: 'Blog',
      locale: 'de',
      t,
      homeUrl: 'https://healthcalculator.app/de/',
      blogUrl: 'https://healthcalculator.app/de/blog/',
    })
    expect(result['@type']).toBe('BreadcrumbList')
    expect(result.itemListElement).toHaveLength(2)
  })

  it('builds correct breadcrumb for blog article', () => {
    const result = buildBreadcrumb({
      routeKey: 'blogArticle',
      title: 'BMI berechnen',
      locale: 'de',
      t,
      homeUrl: 'https://healthcalculator.app/de/',
      blogUrl: 'https://healthcalculator.app/de/blog/',
    })
    expect(result['@type']).toBe('BreadcrumbList')
    expect(result.itemListElement).toHaveLength(3)
    expect(result.itemListElement[1].item).toBe('https://healthcalculator.app/de/blog/')
  })

  it('builds 3-level breadcrumb for calculator with known group', () => {
    const result = buildBreadcrumb({
      routeKey: 'bmi',
      title: 'BMI Rechner',
      locale: 'de',
      t,
      homeUrl: 'https://healthcalculator.app/de/',
      blogUrl: 'https://healthcalculator.app/de/blog/',
    })
    expect(result.itemListElement).toHaveLength(3)
    expect(result.itemListElement[1].name).toBe('home.groups.bodyComposition')
  })

  it('builds 2-level breadcrumb for unknown route', () => {
    const result = buildBreadcrumb({
      routeKey: 'unknownPage',
      title: 'Unknown',
      locale: 'de',
      t,
      homeUrl: 'https://healthcalculator.app/de/',
      blogUrl: 'https://healthcalculator.app/de/blog/',
    })
    expect(result.itemListElement).toHaveLength(2)
    expect(result.itemListElement[1].name).toBe('Unknown')
  })
})
