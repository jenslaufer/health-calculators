import Component from './FertilityWindowCalculator.vue'
import BlogDe from './blog/FruchtbaresFensterBerechnen.vue'
import BlogEn from './blog/en/FertilityWindowGuide.vue'

export default {
  key: 'fertilityWindow',
  component: Component,
  slugs: { de: 'fruchtbares-fenster-rechner', en: 'fertility-window-calculator' },
  group: 'pregnancy',
  groupOrder: 3,
  order: 1.1,
  blog: {
    de: { slug: 'fruchtbares-fenster-berechnen', component: BlogDe },
    en: { slug: 'fertility-window-guide', component: BlogEn },
  },
}
