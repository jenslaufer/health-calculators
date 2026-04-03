import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'
import { routeMap } from '../discovery.js'

// Build blog slug map from article data using calculatorKey
const blogSlugMap = {}
for (const deArticle of articles) {
  const enArticle = articlesEn.find(a => a.calculatorKey === deArticle.calculatorKey)
  if (enArticle) {
    blogSlugMap[deArticle.slug] = enArticle.slug
    blogSlugMap[enArticle.slug] = deArticle.slug
  }
}

export { routeMap }

export function localePath(routeKey, locale) {
  const slug = routeMap[routeKey]?.[locale]
  if (slug === undefined) return `/${locale}/`
  return slug ? `/${locale}/${slug}` : `/${locale}/`
}

export function localeBlogPath(slug, locale) {
  return `/${locale}/blog/${slug}`
}

export function switchLocalePath(route, targetLocale) {
  const routeKey = route.meta.routeKey
  if (routeKey === 'blogArticle') {
    const currentSlug = route.meta.slug
    const targetSlug = blogSlugMap[currentSlug] || currentSlug
    return `/${targetLocale}/blog/${targetSlug}`
  }
  return localePath(routeKey, targetLocale)
}

export function useLocaleRouter() {
  const route = useRoute()
  const router = useRouter()
  const { locale } = useI18n()

  function lp(routeKey) {
    return localePath(routeKey, locale.value)
  }

  function lbp(slug) {
    return localeBlogPath(slug, locale.value)
  }

  function switchLocale(targetLocale) {
    const path = switchLocalePath(route, targetLocale)
    router.push(path)
  }

  return { localePath: lp, localeBlogPath: lbp, switchLocale, locale }
}
