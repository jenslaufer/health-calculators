import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import TdeeCalculator from './pages/TdeeCalculator.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/bmi', component: BmiCalculator },
    { path: '/tdee', component: TdeeCalculator },
  ],
})
