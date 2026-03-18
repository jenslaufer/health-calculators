import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import BodyFatCalculator from './pages/BodyFatCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/body-fat', component: BodyFatCalculator },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
