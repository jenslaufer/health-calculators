import Component from './HbA1cConverter.vue'
import BlogDe from './blog/HbA1cUmrechnen.vue'
import BlogEn from './blog/en/HbA1cConverterGuide.vue'

export default {
  key: 'hba1c',
  component: Component,
  slugs: { de: 'hba1c-konverter', en: 'hba1c-converter' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 7,
  oldRedirect: '/hba1c-konverter',
  blog: {
    de: { slug: 'hba1c-umrechnen', component: BlogDe },
    en: { slug: 'hba1c-converter-guide', component: BlogEn },
  },
}
