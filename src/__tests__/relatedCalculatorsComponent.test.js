// @vitest-environment jsdom
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import RelatedCalculators from '../components/RelatedCalculators.vue'

function makeI18n(locale = 'de') {
  return createI18n({
    legacy: false,
    locale,
    messages: { de: {}, en: {} },
  })
}

function makeRouter(path = '/de/') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
  router.push(path)
  return router
}

describe('RelatedCalculators', () => {
  it('renders related calculators for bmi', async () => {
    const router = makeRouter('/de/')
    await router.isReady()
    const wrapper = mount(RelatedCalculators, {
      props: { calcKey: 'bmi' },
      global: { plugins: [makeI18n('de'), router] },
    })
    const section = wrapper.find('[data-testid="related-calculators"]')
    expect(section.exists()).toBe(true)
    const links = section.findAll('a')
    expect(links.length).toBeGreaterThan(0)
    expect(links.length).toBeLessThanOrEqual(4)
  })

  it('renders nothing for nonexistent calcKey', async () => {
    const router = makeRouter('/de/')
    await router.isReady()
    const wrapper = mount(RelatedCalculators, {
      props: { calcKey: 'nonexistent' },
      global: { plugins: [makeI18n('de'), router] },
    })
    expect(wrapper.find('[data-testid="related-calculators"]').exists()).toBe(false)
  })

  it('uses EN heading when locale is en', async () => {
    const router = makeRouter('/en/')
    await router.isReady()
    const wrapper = mount(RelatedCalculators, {
      props: { calcKey: 'bmi' },
      global: { plugins: [makeI18n('en'), router] },
    })
    expect(wrapper.text()).toContain('Related Calculators')
  })
})
