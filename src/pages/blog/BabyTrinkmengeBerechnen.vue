<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Baby-Trinkmenge berechnen: So viel Milch braucht dein Baby wirklich | Health Calculators',
  description: 'Baby-Trinkmenge nach Alter und Gewicht berechnen. Richtwerte in ml/kg, Flaschenmenge pro Mahlzeit, Warnzeichen für Unter- und Überfütterung — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Baby-Trinkmenge berechnen: So viel Milch braucht dein Baby wirklich',
    description: 'Baby-Trinkmenge nach Alter und Gewicht berechnen. Richtwerte in ml/kg, Flaschenmenge pro Mahlzeit, Warnzeichen für Unter- und Überfütterung — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/baby-trinkmenge-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Baby-Trinkmenge berechnen: So viel Milch braucht dein Baby wirklich</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Gerade in den ersten Monaten fragen sich viele Eltern: <strong>Trinkt mein Baby genug?</strong> Eine praktikable Orientierung liefert die ml/kg-Regel aus der Pädiatrie.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Mit unserem Rechner bestimmst du aus Alter und Gewicht die tägliche Trinkmenge und die Menge pro Flasche — für Pre-Nahrung, Folgemilch und abgepumpte Muttermilch.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Faustregel nach Alter</h2>
        <ul class="space-y-2 text-base text-stone-600">
          <li><strong>0–6 Monate:</strong> etwa 150 ml pro kg Körpergewicht und Tag</li>
          <li><strong>ab 6 Monaten:</strong> etwa 120 ml pro kg und Tag (durch Beikost sinkt die Milchmenge)</li>
          <li><strong>oberes Orientierungs-Limit:</strong> ca. 960 ml/Tag</li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Baby-Trinkmenge jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Alter und Gewicht eingeben, sofort Tagesmenge und Menge pro Mahlzeit erhalten.</p>
        <router-link
          :to="localePath('babyFeedingAmount')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum Baby-Trinkmengen-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann die Werte nicht 1:1 passen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Babys trinken nicht jeden Tag gleich viel. Wachstumsschübe, Infekte, Hitze und Schlafphasen verändern den Bedarf kurzfristig. Entscheidend ist der Verlauf über mehrere Tage.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig sind klinische Signale: nasse Windeln, altersgerechte Gewichtszunahme, waches Verhalten und eine entspannte Trinksituation ohne ständiges Erbrechen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für die ersten Lebensmonate helfen auch der
          <router-link :to="localePath('apgarScore')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">APGAR-Score-Rechner</router-link>,
          die
          <router-link :to="localePath('childGrowth')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wachstumsperzentilen für Kinder</router-link>
          und der
          <router-link :to="localePath('childDosage')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kinder-Dosierungsrechner</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Berechnung der Baby-Trinkmenge gibt eine gute Orientierung, ersetzt aber keine individuelle Einschätzung. Nutze den
          <router-link :to="localePath('babyFeedingAmount')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Baby-Trinkmengen-Rechner</router-link>
          als praktische Hilfe im Alltag und sprich bei Unsicherheit mit Kinderarzt oder Hebamme.
        </p>
      </div>

      <RelatedArticles slug="baby-trinkmenge-berechnen" />
    </div>
  </article>
</template>
