// @vitest-environment jsdom
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import RelatedCalculators from '../components/RelatedCalculators.vue'
import { calculatorMetas } from '../discovery.js'

function makeI18n(locale = 'de') {
  return createI18n({
    legacy: false,
    locale,
    missingWarn: false,
    fallbackWarn: false,
    messages: { de: {}, en: {} },
  })
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
}

async function mountWith(calcKey, locale = 'de') {
  const i18n = makeI18n(locale)
  const router = makeRouter()
  router.push(`/${locale}/`)
  await router.isReady()
  return mount(RelatedCalculators, {
    props: { calcKey },
    global: { plugins: [i18n, router] },
  })
}

describe('RelatedCalculators', () => {
  it('returns siblings in same group, excludes current, max 4 (oneRepMax/fitnessRecovery)', async () => {
    const wrapper = await mountWith('oneRepMax')
    const links = wrapper.findAll('[data-testid="related-calculators"] a')
    expect(links).toHaveLength(4)
    const current = calculatorMetas.find(m => m.key === 'oneRepMax')
    const expected = calculatorMetas
      .filter(m => m.group === current.group && m.key !== 'oneRepMax')
      .sort((a, b) => a.key.localeCompare(b.key))
      .slice(0, 4)
      .map(m => m.key)
    expect(expected).not.toContain('oneRepMax')
    expect(expected).toHaveLength(4)
  })

  it('returns 4 alphabetically sorted siblings for bmi (bodyComposition)', async () => {
    const wrapper = await mountWith('bmi')
    const links = wrapper.findAll('[data-testid="related-calculators"] a')
    expect(links).toHaveLength(4)
    const hrefs = links.map(a => a.attributes('href'))
    // Alphabetically first 4 in bodyComposition excluding bmi: bmiFrauen, bmiMaenner, bodyFat, bodyType
    expect(hrefs[0]).toBe('/de/bmi-rechner-frauen/')
    expect(hrefs[1]).toBe('/de/bmi-rechner-maenner/')
    expect(hrefs[2]).toBe('/de/koerperfett-rechner/')
  })

  it('renders nothing when calcKey does not exist', async () => {
    const wrapper = await mountWith('nonexistent')
    expect(wrapper.find('[data-testid="related-calculators"]').exists()).toBe(false)
  })

  it('renders nothing when group has only one calculator', async () => {
    const original = calculatorMetas.slice()
    // Inject a synthetic single-member group temporarily
    calculatorMetas.length = 0
    calculatorMetas.push({ key: 'lonely', group: 'soloGroup', slugs: { de: 'lonely', en: 'lonely' } })
    const wrapper = await mountWith('lonely')
    expect(wrapper.find('[data-testid="related-calculators"]').exists()).toBe(false)
    calculatorMetas.length = 0
    calculatorMetas.push(...original)
  })
})
