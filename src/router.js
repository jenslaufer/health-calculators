import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import MacroCalculator from './pages/MacroCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/macros', component: MacroCalculator },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
