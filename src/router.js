import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import SleepCycleCalculator from './pages/SleepCycleCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/sleep', component: SleepCycleCalculator },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
