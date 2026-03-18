import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import IdealWeightCalculator from './pages/IdealWeightCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/ideal-weight', component: IdealWeightCalculator },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
