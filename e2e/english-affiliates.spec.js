import { test, expect } from '@playwright/test'
import { adConfig, routeContextMap } from '../src/ads/config.js'

const LIVE_URL = /^https?:\/\//

function resolveUrl(lang, slug) {
  const contextMap = routeContextMap[lang] || routeContextMap.de
  const ctx = contextMap[slug] || 'default'
  const localeConfig = adConfig[lang] || adConfig.de
  const config = localeConfig[ctx] || localeConfig.default
  return config.affiliate.url
}

const enSlugs = [
  'bmi-calculator',
  'body-fat-calculator',
  'calorie-deficit-calculator',
  'tdee-calculator',
  'macro-calculator',
  'bmr-calculator',
  'protein-calculator',
  'water-intake-calculator',
  'heart-rate-zones',
  'ideal-weight-calculator',
  'sleep-cycle-calculator',
  'blood-pressure-calculator',
  'pregnancy-calculator',
  'ovulation-calculator',
  'intermittent-fasting-calculator',
  'waist-hip-ratio-calculator',
  'calories-burned',
]

const cases = [
  ...enSlugs.map((slug) => ({ lang: 'en', slug, path: `en/${slug}`, label: 'Ad' })),
  { lang: 'de', slug: 'bmi-rechner', path: 'de/bmi-rechner', label: 'Anzeige' },
]

for (const { lang, slug, path, label } of cases) {
  const url = resolveUrl(lang, slug)
  const live = LIVE_URL.test(url)

  test(`${lang.toUpperCase()} ${slug} — banner ${live ? 'visible with live URL' : 'hidden while URL is placeholder'}`, async ({ page }) => {
    await page.goto(path)
    const banner = page.getByTestId('affiliate-banner')

    if (!live) {
      await expect(banner).toHaveCount(0)
      return
    }

    await expect(banner).toBeVisible()
    await expect(banner.getByText(label, { exact: true })).toBeVisible()
    const cta = banner.locator('a')
    await expect(cta).toHaveAttribute('rel', 'noopener sponsored')
    await expect(cta).toHaveAttribute('href', url)
  })
}
