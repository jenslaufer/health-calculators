import { computed } from 'vue'
import { useHead as useUnhead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localePath as resolveLocalePath, routeMap } from './useLocaleRouter.js'

const BASE_URL = 'https://healthcalculator.app'

export function useHead(getConfig) {
  const resolve = typeof getConfig === 'function' ? getConfig : () => getConfig
  const route = useRoute()
  const { locale } = useI18n()

  const headData = computed(() => {
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

    const head = {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'alternate', hreflang: currentLocale, href: `${BASE_URL}${currentPath}` },
        { rel: 'alternate', hreflang: otherLocale, href: `${BASE_URL}${otherPath}` },
      ],
    }

    if (jsonLd) {
      head.script = [
        { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) },
      ]
    }

    return head
  })

  useUnhead(headData)
}
