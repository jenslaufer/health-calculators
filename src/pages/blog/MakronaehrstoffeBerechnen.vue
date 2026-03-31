<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Makronährstoffe berechnen: Protein, Kohlenhydrate & Fett richtig aufteilen | Health Calculators',
  description: 'Makronährstoffe berechnen basierend auf deinem Kalorienbedarf und Ziel. Optimale Verteilung für Abnehmen, Halten und Muskelaufbau.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Makronährstoffe berechnen: Protein, Kohlenhydrate & Fett richtig aufteilen',
    description: 'Makronährstoffe berechnen basierend auf deinem Kalorienbedarf und Ziel. Optimale Verteilung für Abnehmen, Halten und Muskelaufbau.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/makronaehrstoffe-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Makronährstoffe berechnen: Protein, Kohlenhydrate & Fett richtig aufteilen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kalorien allein erzählen nur die halbe Geschichte. <strong>Makronährstoffe</strong> — Protein, Kohlenhydrate und Fett — bestimmen, wie dein Körper diese Kalorien nutzt: für Muskelaufbau, Energieversorgung oder Fettspeicherung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deine optimale Makro-Verteilung berechnest und welche Aufteilung zu deinem Ziel passt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Makronährstoffe</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Protein — 4 kcal pro Gramm</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Baustoffe für Muskeln, Enzyme und Hormone. Besonders wichtig bei Muskelaufbau und Diäten, da Protein den Muskelabbau verhindert und lange sättigt.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Kohlenhydrate — 4 kcal pro Gramm</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hauptenergiequelle für Gehirn und Muskeln. Vollkornprodukte, Obst und Gemüse liefern zusätzlich Ballaststoffe und Mikronährstoffe.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Fett — 9 kcal pro Gramm</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wichtig für Hormonproduktion, Vitaminaufnahme und Zellmembranen. Ungesättigte Fette (Olivenöl, Nüsse, Fisch) bevorzugen.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Makro-Verteilung nach Ziel</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ziel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Protein</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kohlenhydrate</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fett</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Abnehmen</td>
                <td class="px-6 py-3 text-stone-900 font-medium">40 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Gewicht halten</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">40 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Muskelaufbau</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">45 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium">25 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Makronährstoffe berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Personalisierte Makro-Verteilung — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('macro')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">TDEE als Grundlage</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bevor du Makros verteilen kannst, brauchst du dein Kalorienziel. Berechne zuerst deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE (täglichen Kalorienverbrauch)</router-link> — das ist die Basis für alles Weitere.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Vergiss auch nicht, genug zu trinken. Dein <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarf</router-link> steigt mit der Proteinzufuhr.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die richtige Makro-Verteilung ist der Schlüssel zu deinem Ziel. Berechne deinen <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>, nutze unseren <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makro-Rechner</router-link> und passe die Verteilung an dein Ziel an.
        </p>
      </div>

      <RelatedArticles slug="makronaehrstoffe-berechnen" />
    </div>
  </article>
</template>
