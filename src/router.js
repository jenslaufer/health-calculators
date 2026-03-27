import { createRouter, createWebHistory } from 'vue-router'
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

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/water', component: WaterIntakeCalculator },
  { path: '/body-fat', component: BodyFatCalculator },
  { path: '/heart-rate', component: HeartRateZones },
  { path: '/ideal-weight', component: IdealWeightCalculator },
  { path: '/macros', component: MacroCalculator },
  { path: '/sleep', component: SleepCycleCalculator },
  { path: '/tdee', component: TdeeCalculator },
  { path: '/pregnancy', component: PregnancyCalculator },
  { path: '/blog', component: BlogHome },
  { path: '/blog/bmi-berechnen', component: BmiBerechnen },
  { path: '/blog/tdee-berechnen', component: TdeeBerechnen },
  { path: '/blog/schlafzyklen-berechnen', component: SchlafzyklenBerechnen },
  { path: '/blog/herzfrequenz-zonen-berechnen', component: HerzfrequenzZonenBerechnen },
  { path: '/blog/koerperfett-berechnen', component: KoerperfettBerechnen },
  { path: '/blog/makronaehrstoffe-berechnen', component: MakronaehrstoffeBerechnen },
  { path: '/blog/wasserbedarf-berechnen', component: WasserbedarfBerechnen },
  { path: '/blog/idealgewicht-berechnen', component: IdealgewichtBerechnen },
  { path: '/blog/geburtstermin-berechnen', component: GeburtsterminBerechnen },
  { path: '/blutdruck-rechner', component: BloodPressureCalculator },
  { path: '/blog/blutdruck-richtig-messen', component: BlutdruckRichtigMessen },
]

export default createRouter({
  history: createWebHistory('/health-calculators/'),
  routes,
})
