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
import BlogHome from './pages/BlogHome.vue'
import BmiBerechnen from './pages/blog/BmiBerechnen.vue'
import TdeeBerechnen from './pages/blog/TdeeBerechnen.vue'
import SchlafzyklenBerechnen from './pages/blog/SchlafzyklenBerechnen.vue'
import HerzfrequenzZonen from './pages/blog/HerzfrequenzZonen.vue'
import KoerperfettBerechnen from './pages/blog/KoerperfettBerechnen.vue'
import MakronaehrstoffeBerechnen from './pages/blog/MakronaehrstoffeBerechnen.vue'
import WasserbedarfBerechnen from './pages/blog/WasserbedarfBerechnen.vue'

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
  { path: '/blog', component: BlogHome },
  { path: '/blog/bmi-berechnen', component: BmiBerechnen },
  { path: '/blog/tdee-berechnen', component: TdeeBerechnen },
  { path: '/blog/schlafzyklen-berechnen', component: SchlafzyklenBerechnen },
  { path: '/blog/herzfrequenz-zonen', component: HerzfrequenzZonen },
  { path: '/blog/koerperfett-berechnen', component: KoerperfettBerechnen },
  { path: '/blog/makronaehrstoffe-berechnen', component: MakronaehrstoffeBerechnen },
  { path: '/blog/wasserbedarf-berechnen', component: WasserbedarfBerechnen },
]

export default createRouter({
  history: createWebHistory('/health-calculators/'),
  routes,
})
