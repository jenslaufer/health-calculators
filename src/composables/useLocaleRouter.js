import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { articles } from '../data/articles.js'
import { articlesEn } from '../data/articles-en.js'

// Build blog slug map from article data using calculatorKey
const blogSlugMap = {}
for (const deArticle of articles) {
  const enArticle = articlesEn.find(a => a.calculatorKey === deArticle.calculatorKey)
  if (enArticle) {
    blogSlugMap[deArticle.slug] = enArticle.slug
    blogSlugMap[enArticle.slug] = deArticle.slug
  }
}

export const routeMap = {
  home: { de: '', en: '' },
  bmi: { de: 'bmi-rechner', en: 'bmi-calculator' },
  water: { de: 'wasser-rechner', en: 'water-intake-calculator' },
  bodyFat: { de: 'koerperfett-rechner', en: 'body-fat-calculator' },
  heartRate: { de: 'herzfrequenz-zonen', en: 'heart-rate-zones' },
  idealWeight: { de: 'idealgewicht-rechner', en: 'ideal-weight-calculator' },
  macro: { de: 'makro-rechner', en: 'macro-calculator' },
  sleep: { de: 'schlafzyklen-rechner', en: 'sleep-cycle-calculator' },
  tdee: { de: 'tdee-rechner', en: 'tdee-calculator' },
  pregnancy: { de: 'schwangerschafts-rechner', en: 'pregnancy-calculator' },
  bloodPressure: { de: 'blutdruck-rechner', en: 'blood-pressure-calculator' },
  calorieDeficit: { de: 'kaloriendefizit-rechner', en: 'calorie-deficit-calculator' },
  waistHipRatio: { de: 'taille-hueft-verhaeltnis', en: 'waist-hip-ratio-calculator' },
  ovulation: { de: 'eisprung-rechner', en: 'ovulation-calculator' },
  protein: { de: 'protein-rechner', en: 'protein-calculator' },
  bmr: { de: 'bmr-rechner', en: 'bmr-calculator' },
  caloriesBurned: { de: 'kalorienverbrauch', en: 'calories-burned' },
  intermittentFasting: { de: 'intervallfasten-rechner', en: 'intermittent-fasting-calculator' },
vo2Max: { de: 'vo2max-rechner', en: 'vo2max-calculator' },
oneRepMax: { de: 'one-rep-max-rechner', en: 'one-rep-max-calculator' },
runningPace: { de: 'lauftempo-rechner', en: 'running-pace-calculator' },
keto: { de: 'keto-rechner', en: 'keto-calculator' },
period: { de: 'zyklusrechner', en: 'period-calculator' },
bac: { de: 'promillerechner', en: 'blood-alcohol-calculator' },
  blog: { de: 'blog', en: 'blog' },
}

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
