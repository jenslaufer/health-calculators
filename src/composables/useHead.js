import { computed } from 'vue'
import { useHead as useUnhead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localePath as resolveLocalePath, routeMap, keyToGroup } from './useLocaleRouter.js'

const BASE_URL = 'https://healthcalculator.app'

const ensureSlash = path => path.endsWith('/') ? path : `${path}/`

export function buildBreadcrumb({ routeKey, title, locale, t, homeUrl, blogUrl }) {
  if (routeKey === 'home') return null

  const items = [
    { '@type': 'ListItem', position: 1, name: t('nav.brand'), item: homeUrl },
  ]

  if (routeKey === 'blog') {
    items.push({ '@type': 'ListItem', position: 2, name: t('nav.blog') })
  } else if (routeKey === 'blogArticle') {
    items.push({ '@type': 'ListItem', position: 2, name: t('nav.blog'), item: blogUrl })
    items.push({ '@type': 'ListItem', position: 3, name: title })
  } else {
    const group = keyToGroup[routeKey]
    if (group) {
      items.push({ '@type': 'ListItem', position: 2, name: t(`home.groups.${group}`), item: homeUrl })
    }
    items.push({ '@type': 'ListItem', position: items.length + 1, name: title })
  }

  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }
}

export function useHead(getConfig) {
  const resolve = typeof getConfig === 'function' ? getConfig : () => getConfig
  const route = useRoute()
  const { locale, t } = useI18n()

  const headData = computed(() => {
    const { title, description, routeKey: configRouteKey, jsonLd } = resolve()
    const currentLocale = locale.value
    const otherLocale = currentLocale === 'de' ? 'en' : 'de'

    let currentPath, otherPath
    if (configRouteKey === 'blogArticle') {
      const slug = route.meta.slug
      currentPath = `/${currentLocale}/blog/${slug}/`
      otherPath = `/${otherLocale}/blog/${slug}/`
    } else if (configRouteKey && routeMap[configRouteKey]) {
      currentPath = ensureSlash(resolveLocalePath(configRouteKey, currentLocale))
      otherPath = ensureSlash(resolveLocalePath(configRouteKey, otherLocale))
    } else {
      currentPath = ensureSlash(route.path)
      otherPath = ensureSlash(route.path)
    }

    const url = `${BASE_URL}${currentPath}`
    const homeUrl = `${BASE_URL}/${currentLocale}/`
    const blogUrl = `${BASE_URL}/${currentLocale}/blog/`

    const head = {
      title,
      htmlAttrs: { lang: currentLocale },
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `${BASE_URL}/og-image.png` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${BASE_URL}/og-image.png` },
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: currentLocale, href: `${BASE_URL}${currentPath}` },
        { rel: 'alternate', hreflang: otherLocale, href: `${BASE_URL}${otherPath}` },
      ],
    }

    const scripts = []

    if (jsonLd) {
      const enriched = { ...jsonLd }
      if (enriched['@type'] === 'WebApplication') {
        enriched.url = url
        enriched.description = description
      }
      if (enriched['@type'] === 'Article') {
        enriched.mainEntityOfPage = { '@type': 'WebPage', '@id': url }
        if (!enriched.image) {
          enriched.image = `${BASE_URL}/og-image.png`
        }
      }
      scripts.push({ type: 'application/ld+json', innerHTML: JSON.stringify(enriched) })
    }

    const effectiveRouteKey = configRouteKey || route.meta.routeKey
    const breadcrumb = buildBreadcrumb({ routeKey: effectiveRouteKey, title, locale: currentLocale, t, homeUrl, blogUrl })
    if (breadcrumb) {
      scripts.push({ type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumb) })
    }

    if (scripts.length) {
      head.script = scripts
    }

    return head
  })

  useUnhead(headData)
}
