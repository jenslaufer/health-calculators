import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

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

const blogSlugMap = {
  'bmi-berechnen': 'calculate-bmi',
  'tdee-berechnen': 'calculate-tdee',
  'schlafzyklen-berechnen': 'calculate-sleep-cycles',
  'herzfrequenz-zonen-berechnen': 'calculate-heart-rate-zones',
  'koerperfett-berechnen': 'calculate-body-fat',
  'makronaehrstoffe-berechnen': 'calculate-macros',
  'wasserbedarf-berechnen': 'calculate-water-intake',
  'idealgewicht-berechnen': 'calculate-ideal-weight',
  'geburtstermin-berechnen': 'calculate-due-date',
  'blutdruck-richtig-messen': 'measure-blood-pressure',
  'kaloriendefizit-berechnen': 'calculate-calorie-deficit',
  'taille-hueft-verhaeltnis-berechnen': 'calculate-waist-hip-ratio',
  'calculate-bmi': 'bmi-berechnen',
  'calculate-tdee': 'tdee-berechnen',
  'calculate-sleep-cycles': 'schlafzyklen-berechnen',
  'calculate-heart-rate-zones': 'herzfrequenz-zonen-berechnen',
  'calculate-body-fat': 'koerperfett-berechnen',
  'calculate-macros': 'makronaehrstoffe-berechnen',
  'calculate-water-intake': 'wasserbedarf-berechnen',
  'calculate-ideal-weight': 'idealgewicht-berechnen',
  'calculate-due-date': 'geburtstermin-berechnen',
  'measure-blood-pressure': 'blutdruck-richtig-messen',
  'calculate-calorie-deficit': 'kaloriendefizit-berechnen',
  'calculate-waist-hip-ratio': 'taille-hueft-verhaeltnis-berechnen',
}

export function switchLocalePath(route, targetLocale) {
  const routeKey = route.meta.routeKey
  if (routeKey === 'blogArticle') {
    const translatedSlug = blogSlugMap[route.meta.slug] || route.meta.slug
    return `/${targetLocale}/blog/${translatedSlug}`
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
