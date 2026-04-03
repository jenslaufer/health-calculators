import Component from './HeartRateZones.vue'
import BlogDe from './blog/HerzfrequenzZonenBerechnen.vue'
import BlogEn from './blog/en/CalculateHeartRateZones.vue'

export default {
  key: 'heartRate',
  component: Component,
  slugs: { de: 'herzfrequenz-zonen', en: 'heart-rate-zones' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 0,
  oldRedirect: '/heart-rate',
  blog: {
    de: { slug: 'herzfrequenz-zonen-berechnen', component: BlogDe },
    en: { slug: 'calculate-heart-rate-zones', component: BlogEn },
  },
}
