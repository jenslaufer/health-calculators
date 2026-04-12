import Component from './BloodSugarConverter.vue'
import BlogDe from './blog/BlutzuckerUmrechnen.vue'
import BlogEn from './blog/en/BloodSugarConverterGuide.vue'

export default {
  key: 'bloodSugar',
  component: Component,
  slugs: { de: 'blutzucker-umrechner', en: 'blood-sugar-converter' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 8,
  oldRedirect: '/blutzucker-umrechner',
  blog: {
    de: { slug: 'blutzucker-umrechnen', component: BlogDe },
    en: { slug: 'blood-sugar-converter-guide', component: BlogEn },
  },
}
