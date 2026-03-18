import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import BmiCalculator from './pages/BmiCalculator.vue'
import HeartRateZones from './pages/HeartRateZones.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/bmi', component: BmiCalculator },
    { path: '/heart-rate', component: HeartRateZones },
  ],
})
