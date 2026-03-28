import { watchEffect, onUnmounted } from 'vue'

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

  watchEffect(() => {
    const { title, description, path = '/', jsonLd } = resolve()
    const url = `${BASE_URL}${path}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setCanonical(url)

    if (jsonLd) {
      setJsonLd(jsonLd)
    }
  })

  onUnmounted(() => {
    document.title = prevTitle
    removeJsonLd()
  })
}
