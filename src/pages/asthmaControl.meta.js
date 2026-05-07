import Component from './AsthmaControlCalculator.vue'
import BlogDe from './blog/AsthmaKontrolleTesten.vue'
import BlogEn from './blog/en/AsthmaControlTestGuide.vue'

export default {
  key: 'asthmaControl',
  component: Component,
  slugs: { de: 'asthma-kontrolle-test', en: 'asthma-control-test' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 100,
  blog: {
    de: { slug: 'asthma-kontrolle-testen', component: BlogDe },
    en: { slug: 'asthma-control-test-guide', component: BlogEn },
  },
}
