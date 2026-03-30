import { createRouter, createWebHistory } from 'vue-router'
import { routeMap } from './composables/useLocaleRouter.js'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import WaterIntakeCalculator from './pages/WaterIntakeCalculator.vue'
import BodyFatCalculator from './pages/BodyFatCalculator.vue'
import HeartRateZones from './pages/HeartRateZones.vue'
import IdealWeightCalculator from './pages/IdealWeightCalculator.vue'
import MacroCalculator from './pages/MacroCalculator.vue'
import SleepCycleCalculator from './pages/SleepCycleCalculator.vue'
import TdeeCalculator from './pages/TdeeCalculator.vue'
import PregnancyCalculator from './pages/PregnancyCalculator.vue'
import BlogHome from './pages/BlogHome.vue'
import BmiBerechnen from './pages/blog/BmiBerechnen.vue'
import TdeeBerechnen from './pages/blog/TdeeBerechnen.vue'
import SchlafzyklenBerechnen from './pages/blog/SchlafzyklenBerechnen.vue'
import HerzfrequenzZonenBerechnen from './pages/blog/HerzfrequenzZonenBerechnen.vue'
import KoerperfettBerechnen from './pages/blog/KoerperfettBerechnen.vue'
import MakronaehrstoffeBerechnen from './pages/blog/MakronaehrstoffeBerechnen.vue'
import WasserbedarfBerechnen from './pages/blog/WasserbedarfBerechnen.vue'
import IdealgewichtBerechnen from './pages/blog/IdealgewichtBerechnen.vue'
import GeburtsterminBerechnen from './pages/blog/GeburtsterminBerechnen.vue'
import BloodPressureCalculator from './pages/BloodPressureCalculator.vue'
import BlutdruckRichtigMessen from './pages/blog/BlutdruckRichtigMessen.vue'
import CalorieDeficitCalculator from './pages/CalorieDeficitCalculator.vue'
import KaloriendefizitBerechnen from './pages/blog/KaloriendefizitBerechnen.vue'
import WaistHipRatioCalculator from './pages/WaistHipRatioCalculator.vue'
import OvulationCalculator from './pages/OvulationCalculator.vue'
import ProteinCalculator from './pages/ProteinCalculator.vue'
import TaillenHueftVerhaeltnis from './pages/blog/TaillenHueftVerhaeltnis.vue'
import EisprungBerechnen from './pages/blog/EisprungBerechnen.vue'
import ProteinbedarfBerechnen from './pages/blog/ProteinbedarfBerechnen.vue'
import BlogHomeEn from './pages/BlogHomeEn.vue'
import CalculateBmi from './pages/blog/en/CalculateBmi.vue'
import CalculateTdee from './pages/blog/en/CalculateTdee.vue'
import CalculateSleepCycles from './pages/blog/en/CalculateSleepCycles.vue'
import CalculateHeartRateZones from './pages/blog/en/CalculateHeartRateZones.vue'
import CalculateBodyFat from './pages/blog/en/CalculateBodyFat.vue'
import CalculateMacros from './pages/blog/en/CalculateMacros.vue'
import CalculateWaterIntake from './pages/blog/en/CalculateWaterIntake.vue'
import CalculateIdealWeight from './pages/blog/en/CalculateIdealWeight.vue'
import CalculateDueDate from './pages/blog/en/CalculateDueDate.vue'
import MeasureBloodPressure from './pages/blog/en/MeasureBloodPressure.vue'
import CalculateCalorieDeficit from './pages/blog/en/CalculateCalorieDeficit.vue'
import CalculateWaistHipRatio from './pages/blog/en/CalculateWaistHipRatio.vue'
import CalculateOvulation from './pages/blog/en/CalculateOvulation.vue'
import CalculateProteinIntake from './pages/blog/en/CalculateProteinIntake.vue'

const calculatorComponents = {
  bmi: BmiCalculator,
  water: WaterIntakeCalculator,
  bodyFat: BodyFatCalculator,
  heartRate: HeartRateZones,
  idealWeight: IdealWeightCalculator,
  macro: MacroCalculator,
  sleep: SleepCycleCalculator,
  tdee: TdeeCalculator,
  pregnancy: PregnancyCalculator,
  bloodPressure: BloodPressureCalculator,
  calorieDeficit: CalorieDeficitCalculator,
  waistHipRatio: WaistHipRatioCalculator,
  ovulation: OvulationCalculator,
  protein: ProteinCalculator,
}

const blogComponentsDe = {
  'bmi-berechnen': BmiBerechnen,
  'tdee-berechnen': TdeeBerechnen,
  'schlafzyklen-berechnen': SchlafzyklenBerechnen,
  'herzfrequenz-zonen-berechnen': HerzfrequenzZonenBerechnen,
  'koerperfett-berechnen': KoerperfettBerechnen,
  'makronaehrstoffe-berechnen': MakronaehrstoffeBerechnen,
  'wasserbedarf-berechnen': WasserbedarfBerechnen,
  'idealgewicht-berechnen': IdealgewichtBerechnen,
  'geburtstermin-berechnen': GeburtsterminBerechnen,
  'blutdruck-richtig-messen': BlutdruckRichtigMessen,
  'kaloriendefizit-berechnen': KaloriendefizitBerechnen,
  'taille-hueft-verhaeltnis-berechnen': TaillenHueftVerhaeltnis,
  'eisprung-berechnen': EisprungBerechnen,
  'proteinbedarf-berechnen': ProteinbedarfBerechnen,
}

const blogComponentsEn = {
  'calculate-bmi': CalculateBmi,
  'calculate-tdee': CalculateTdee,
  'calculate-sleep-cycles': CalculateSleepCycles,
  'calculate-heart-rate-zones': CalculateHeartRateZones,
  'calculate-body-fat': CalculateBodyFat,
  'calculate-macros': CalculateMacros,
  'calculate-water-intake': CalculateWaterIntake,
  'calculate-ideal-weight': CalculateIdealWeight,
  'calculate-due-date': CalculateDueDate,
  'measure-blood-pressure': MeasureBloodPressure,
  'calculate-calorie-deficit': CalculateCalorieDeficit,
  'calculate-waist-hip-ratio': CalculateWaistHipRatio,
  'calculate-ovulation': CalculateOvulation,
  'protein-intake-guide': CalculateProteinIntake,
}

const blogComponentsByLocale = {
  de: blogComponentsDe,
  en: blogComponentsEn,
}

const blogHomeByLocale = {
  de: BlogHome,
  en: BlogHomeEn,
}

function createLocaleRoutes(locale) {
  const prefix = `/${locale}`
  const routes = [
    {
      path: `${prefix}/`,
      component: Home,
      meta: { routeKey: 'home', locale },
    },
  ]

  for (const [key, component] of Object.entries(calculatorComponents)) {
    routes.push({
      path: `${prefix}/${routeMap[key][locale]}`,
      component,
      meta: { routeKey: key, locale },
    })
  }

  routes.push({
    path: `${prefix}/blog`,
    component: blogHomeByLocale[locale],
    meta: { routeKey: 'blog', locale },
  })

  for (const [slug, component] of Object.entries(blogComponentsByLocale[locale])) {
    routes.push({
      path: `${prefix}/blog/${slug}`,
      component,
      meta: { routeKey: 'blogArticle', locale, slug },
    })
  }

  return routes
}

// Old route paths for redirects to /de/ equivalents
const oldRouteRedirects = [
  { path: '/bmi', redirect: `/de/${routeMap.bmi.de}` },
  { path: '/water', redirect: `/de/${routeMap.water.de}` },
  { path: '/body-fat', redirect: `/de/${routeMap.bodyFat.de}` },
  { path: '/heart-rate', redirect: `/de/${routeMap.heartRate.de}` },
  { path: '/ideal-weight', redirect: `/de/${routeMap.idealWeight.de}` },
  { path: '/macros', redirect: `/de/${routeMap.macro.de}` },
  { path: '/sleep', redirect: `/de/${routeMap.sleep.de}` },
  { path: '/tdee', redirect: `/de/${routeMap.tdee.de}` },
  { path: '/pregnancy', redirect: `/de/${routeMap.pregnancy.de}` },
  { path: '/blutdruck-rechner', redirect: `/de/${routeMap.bloodPressure.de}` },
  { path: '/kaloriendefizit-rechner', redirect: `/de/${routeMap.calorieDeficit.de}` },
  { path: '/waist-hip-ratio', redirect: `/de/${routeMap.waistHipRatio.de}` },
  { path: '/ovulation', redirect: `/de/${routeMap.ovulation.de}` },
  { path: '/protein', redirect: `/de/${routeMap.protein.de}` },
  { path: '/blog', redirect: '/de/blog' },
]

// Redirect old blog article paths
const blogSlugs = Object.keys(blogComponentsDe)
const oldBlogRedirects = blogSlugs.map(slug => ({
  path: `/blog/${slug}`,
  redirect: `/de/blog/${slug}`,
}))

const routes = [
  { path: '/', redirect: '/de/' },
  ...createLocaleRoutes('de'),
  ...createLocaleRoutes('en'),
  ...oldRouteRedirects,
  ...oldBlogRedirects,
]

export default createRouter({
  history: createWebHistory('/health-calculators/'),
  routes,
})
