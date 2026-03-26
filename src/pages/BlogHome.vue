<script setup>
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Health Blog — Articles & Guides | Health Calculators',
  description: 'Evidence-based health articles, BMI guides, nutrition tips, and fitness insights. Learn how to use health metrics effectively.',
  path: '/blog',
})

const articles = [
  {
    slug: 'bmi-berechnen',
    title: 'BMI berechnen: Was der Body Mass Index wirklich aussagt',
    description: 'Alles zum BMI: Formel, WHO-Tabelle, Grenzen und bessere Alternativen. Mit kostenlosem BMI-Rechner.',
    date: '2026-03-25',
    readTime: '8 min',
  },
  {
    slug: 'tdee-berechnen',
    title: 'TDEE berechnen: So bestimmst du deinen Kalorienbedarf',
    description: 'TDEE berechnen mit Harris-Benedict & Mifflin-St Jeor Formel. Aktivitätsfaktoren, praktische Tipps und kostenloser TDEE-Rechner.',
    date: '2026-03-25',
    readTime: '10 min',
  },
  {
    slug: 'schlafzyklen-berechnen',
    title: 'Schlafzyklen berechnen: Wann du aufstehen solltest',
    description: 'Schlafzyklen verstehen und zur optimalen Zeit aufwachen. Alles über 90-Minuten-Zyklen, REM-Schlaf, Tiefschlaf und Schlafhygiene.',
    date: '2026-03-25',
    readTime: '10 min',
  },
  {
    slug: 'herzfrequenz-zonen',
    title: 'Herzfrequenz-Zonen: Richtig trainieren nach Puls',
    description: 'Die 5 Herzfrequenz-Zonen erklärt: Karvonen-Formel, Fettverbrennungszone & optimales Zonentraining für Ausdauer, Abnehmen und Leistung.',
    date: '2026-03-25',
    readTime: '10 min',
  },
  {
    slug: 'koerperfett-berechnen',
    title: 'Körperfettanteil berechnen: Methoden, Tabellen & Tipps',
    description: 'Körperfettanteil berechnen mit Navy-Methode, Caliper & BIA. Gesunde Werte nach Alter und Geschlecht plus Tipps zur Reduktion.',
    date: '2026-03-26',
    readTime: '10 min',
  },
  {
    slug: 'makronaehrstoffe-berechnen',
    title: 'Makronährstoffe berechnen: Eiweiß, Fett & Kohlenhydrate richtig verteilen',
    description: 'Lerne, wie du Protein, Fett und Kohlenhydrate optimal berechnest — mit Formeln, Verteilungen und praktischen Tipps.',
    date: '2026-03-26',
    readTime: '10 min',
  },
  {
    slug: 'wasserbedarf-berechnen',
    title: 'Wasserbedarf berechnen: So viel Wasser brauchst du wirklich',
    description: 'Wasserbedarf berechnen mit Formel, Tabelle nach Gewicht & Aktivität. Erfahre, wie viel Wasser du täglich trinken solltest.',
    date: '2026-03-26',
    readTime: '10 min',
  },
  {
    slug: 'idealgewicht-berechnen',
    title: 'Idealgewicht berechnen: Formeln, Tabellen & was wirklich zählt',
    description: 'Idealgewicht berechnen mit Broca, Creff & Hamwi. Tabelle nach Größe und Geschlecht plus warum dein Idealgewicht individuell ist.',
    date: '2026-03-26',
    readTime: '10 min',
  },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <router-link to="/" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; All Calculators</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-2">Blog</h1>
      <p class="text-base text-stone-500 font-normal">Evidence-based articles on health metrics, nutrition, and fitness.</p>
    </div>

    <div class="space-y-4">
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="block bg-white border border-stone-200 rounded-xl shadow-sm p-8 hover:border-stone-300 hover:shadow transition-all duration-150"
      >
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs font-medium text-stone-400 tabular-nums">{{ article.date }}</span>
          <span class="text-xs text-stone-300">&middot;</span>
          <span class="text-xs font-medium text-stone-400">{{ article.readTime }}</span>
        </div>
        <h2 class="text-xl font-semibold text-stone-900 mb-2">{{ article.title }}</h2>
        <p class="text-sm text-stone-500 leading-relaxed">{{ article.description }}</p>
      </router-link>
    </div>
  </div>
</template>
