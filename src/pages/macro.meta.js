import Component from './MacroCalculator.vue'
import BlogDe from './blog/MakronaehrstoffeBerechnen.vue'
import BlogEn from './blog/en/CalculateMacros.vue'

export default {
  key: 'macro',
  component: Component,
  slugs: { de: 'makro-rechner', en: 'macro-calculator' },
  group: 'nutritionEnergy',
  groupOrder: 1,
  order: 2,
  oldRedirect: '/macros',
  blog: {
    de: { slug: 'makronaehrstoffe-berechnen', component: BlogDe },
    en: { slug: 'calculate-macros', component: BlogEn },
  },
}
