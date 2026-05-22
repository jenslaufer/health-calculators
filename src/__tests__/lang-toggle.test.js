// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

vi.mock('@unhead/vue', () => ({ useHead: vi.fn() }))

import { mount, flushPromises } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from '../App.vue'
import { calculatorMetas } from '../discovery.js'
import { de, en } from '../locales/index.js'

const DummyView = { template: '<div />' }

function makeI18n(locale = 'de') {
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { de, en },
  })
}

function makeRouter(calc) {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', redirect: '/de/' },
      { path: '/de/', component: DummyView, meta: { routeKey: 'home', locale: 'de' } },
      { path: '/en/', component: DummyView, meta: { routeKey: 'home', locale: 'en' } },
      { path: `/de/${calc.slugs.de}/`, component: DummyView, meta: { routeKey: calc.key, locale: 'de' } },
      { path: `/en/${calc.slugs.en}/`, component: DummyView, meta: { routeKey: calc.key, locale: 'en' } },
      { path: '/:pathMatch(.*)*', component: DummyView },
    ],
  })
}

async function mountApp(calc, path, locale = 'de') {
  const router = makeRouter(calc)
  // Ensure path has trailing slash for consistency with router config
  const normalizedPath = path.endsWith('/') ? path : `${path}/`
  router.push(normalizedPath)
  await router.isReady()
  const i18n = makeI18n(locale)
  const wrapper = mount(App, { global: { plugins: [router, i18n] } })
  return { wrapper, router }
}

describe('lang toggle — crawlable <a href> (issue #258)', () => {
  it('DE /de/<bmi-de-slug> renders <a href> pointing to EN counterpart', async () => {
    const first = calculatorMetas[0]
    const { wrapper } = await mountApp(first, `/de/${first.slugs.de}`, 'de')
    const anchors = wrapper.findAll(`a[href="/en/${first.slugs.en}/"]`)
    expect(anchors.length).toBeGreaterThanOrEqual(1)
  })

  it('EN counterpart renders <a href> pointing to DE counterpart', async () => {
    const first = calculatorMetas[0]
    const { wrapper } = await mountApp(first, `/en/${first.slugs.en}`, 'en')
    const anchors = wrapper.findAll(`a[href="/de/${first.slugs.de}/"]`)
    expect(anchors.length).toBeGreaterThanOrEqual(1)
  })

  it('toggle is an <a> element, not a <button>', async () => {
    const first = calculatorMetas[0]
    const { wrapper } = await mountApp(first, `/de/${first.slugs.de}`, 'de')
    expect(wrapper.find('a[aria-label="Switch to English"]').exists()).toBe(true)
    expect(wrapper.find('button[aria-label="Switch to English"]').exists()).toBe(false)
  })

  it('click navigates via router to other locale (no hard reload)', async () => {
    const first = calculatorMetas[0]
    const { wrapper, router } = await mountApp(first, `/de/${first.slugs.de}`, 'de')
    const toggle = wrapper.find('a[aria-label="Switch to English"]')
    await toggle.trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.path).toBe(`/en/${first.slugs.en}/`)
  })

  it('samples 5 DE calc slugs — all render <a href> pointing to EN counterpart', async () => {
    const samples = calculatorMetas.slice(0, 5)
    for (const calc of samples) {
      const { wrapper } = await mountApp(calc, `/de/${calc.slugs.de}`, 'de')
      const expectedHref = `/en/${calc.slugs.en}/`
      const anchors = wrapper.findAll(`a[href="${expectedHref}"]`)
      expect(anchors.length, `Expected <a href="${expectedHref}"> for /de/${calc.slugs.de}/`).toBeGreaterThanOrEqual(1)
    }
  })
})
