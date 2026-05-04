import Component from './BloodAlcoholEstimatorCalculator.vue'
import BlogDe from './blog/BlutalkoholSchaetzen.vue'
import BlogEn from './blog/en/BloodAlcoholEstimatorGuide.vue'

export default {
  key: 'bloodAlcoholEstimator',
  component: Component,
  slugs: { de: 'blutalkohol-schaetzer', en: 'blood-alcohol-estimator' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 33,
  blog: {
    de: { slug: 'blutalkohol-schaetzen', component: BlogDe },
    en: { slug: 'blood-alcohol-estimator-guide', component: BlogEn },
  },
}
