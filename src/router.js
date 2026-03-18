import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import WaterIntakeCalculator from './pages/WaterIntakeCalculator.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/bmi', component: BmiCalculator },
  { path: '/water', component: WaterIntakeCalculator },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
