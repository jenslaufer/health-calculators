import Component from './LdlFriedewaldCalculator.vue'
import BlogDe from './blog/LdlFriedewaldBerechnen.vue'
import BlogEn from './blog/en/LdlCholesterolFriedewaldGuide.vue'

export default {
  key: 'ldlFriedewald',
  component: Component,
  slugs: { de: 'ldl-friedewald-rechner', en: 'ldl-cholesterol-friedewald' },
  group: 'fitnessRecovery',
  groupOrder: 2,
  order: 26.5,
  blog: {
    de: { slug: 'ldl-friedewald-berechnen', component: BlogDe },
    en: { slug: 'ldl-cholesterol-friedewald-guide', component: BlogEn },
  },
}
