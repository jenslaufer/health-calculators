import { watchEffect, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localePath as resolveLocalePath, routeMap } from './useLocaleRouter.js'

const BASE_URL = 'https://jenslaufer.github.io/health-calculators'

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function setHreflang(lang, url) {
  let el = document.querySelector(`link[hreflang="${lang}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', lang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function removeHreflang() {
  document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
}

function setJsonLd(data) {
  let el = document.querySelector('script[data-head="jsonld"]')
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    el.setAttribute('data-head', 'jsonld')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeJsonLd() {
  const el = document.querySelector('script[data-head="jsonld"]')
  if (el) el.remove()
}

export function useHead(getConfig) {
  const resolve = typeof getConfig === 'function' ? getConfig : () => getConfig
  const prevTitle = document.title
  const route = useRoute()
  const { locale } = useI18n()

  watchEffect(() => {
    const { title, description, routeKey, jsonLd } = resolve()
    const currentLocale = locale.value
    const otherLocale = currentLocale === 'de' ? 'en' : 'de'

    let currentPath, otherPath
    if (routeKey === 'blogArticle') {
      const slug = route.meta.slug
      currentPath = `/${currentLocale}/blog/${slug}`
      otherPath = `/${otherLocale}/blog/${slug}`
    } else if (routeKey && routeMap[routeKey]) {
      currentPath = resolveLocalePath(routeKey, currentLocale)
      otherPath = resolveLocalePath(routeKey, otherLocale)
    } else {
      currentPath = route.path
      otherPath = route.path
    }

    const url = `${BASE_URL}${currentPath}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setCanonical(url)

    setHreflang(currentLocale, `${BASE_URL}${currentPath}`)
    setHreflang(otherLocale, `${BASE_URL}${otherPath}`)

    if (jsonLd) {
      setJsonLd(jsonLd)
    }
  })

  onUnmounted(() => {
    document.title = prevTitle
    removeJsonLd()
    removeHreflang()
  })
}
