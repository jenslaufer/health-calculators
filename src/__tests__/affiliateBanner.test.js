// @vitest-environment jsdom
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import AffiliateBanner from '../components/AffiliateBanner.vue'

function makeI18n(locale = 'en') {
  return createI18n({ legacy: false, locale, messages: { de: {}, en: {} } })
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
}

async function mountAt(path, locale) {
  const router = makeRouter()
  router.push(path)
  await router.isReady()
  return mount(AffiliateBanner, {
    global: { plugins: [makeI18n(locale), router] },
  })
}

describe('AffiliateBanner placeholder guard', () => {
  it('does NOT render when the resolved EN affiliate url is the placeholder "#"', async () => {
    const wrapper = await mountAt('/en/bmi-calculator', 'en')
    expect(wrapper.find('[data-testid="affiliate-banner"]').exists()).toBe(false)
  })

  it('does NOT render when the resolved DE affiliate url is the placeholder "#"', async () => {
    const wrapper = await mountAt('/de/bmi-rechner', 'de')
    expect(wrapper.find('[data-testid="affiliate-banner"]').exists()).toBe(false)
  })

  it('does NOT render for an unmapped slug (default url is also "#")', async () => {
    const wrapper = await mountAt('/en/some-unmapped-slug', 'en')
    expect(wrapper.find('[data-testid="affiliate-banner"]').exists()).toBe(false)
  })
})
