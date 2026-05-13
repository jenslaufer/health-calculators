import BlogDe from './blog/MenopauseNatuerlich.vue'
import BlogEn from './blog/en/MenopauseNaturalRelief.vue'

export default {
  key: 'menopauseNatural',
  blogOnly: true,
  blog: {
    de: { slug: 'menopause-natuerlich-begleiten', component: BlogDe },
    en: { slug: 'menopause-natural-relief', component: BlogEn },
  },
}
