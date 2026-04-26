// @vitest-environment jsdom
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import BlogArticleLink from '../components/BlogArticleLink.vue'

function makeI18n(locale = 'de') {
  return createI18n({
    legacy: false,
    locale,
    messages: {
      de: { blogArticleLink: { label: 'Vertiefung' } },
      en: { blogArticleLink: { label: 'Background' } },
    },
  })
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
  })
}

describe('BlogArticleLink', () => {
  it('renders label, title, reading time and arrow when an article exists', async () => {
    const i18n = makeI18n('de')
    const router = makeRouter()
    router.push('/de/')
    await router.isReady()
    const wrapper = mount(BlogArticleLink, {
      props: { calculatorKey: 'bmi' },
      global: { plugins: [i18n, router] },
    })
    expect(wrapper.text()).toContain('Vertiefung')
    expect(wrapper.text()).toContain('BMI berechnen')
    expect(wrapper.text()).toMatch(/\d+\s*min/i)
    expect(wrapper.find('a').attributes('href')).toContain('/de/blog/')
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('renders nothing when no article matches the calculatorKey', async () => {
    const i18n = makeI18n('de')
    const router = makeRouter()
    router.push('/de/')
    await router.isReady()
    const wrapper = mount(BlogArticleLink, {
      props: { calculatorKey: 'bmiFrauen' },
      global: { plugins: [i18n, router] },
    })
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it('uses EN article and EN label when locale is en', async () => {
    const i18n = makeI18n('en')
    const router = makeRouter()
    router.push('/en/')
    await router.isReady()
    const wrapper = mount(BlogArticleLink, {
      props: { calculatorKey: 'bmi' },
      global: { plugins: [i18n, router] },
    })
    expect(wrapper.text()).toContain('Background')
    expect(wrapper.find('a').attributes('href')).toContain('/en/blog/')
  })
})
