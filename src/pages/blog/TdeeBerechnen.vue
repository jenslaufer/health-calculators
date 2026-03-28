<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'TDEE berechnen: So ermittelst du deinen täglichen Kalorienverbrauch | Health Calculators',
  description: 'TDEE berechnen mit der Mifflin-St Jeor-Formel. Grundumsatz, Aktivitätsfaktor und Kalorienziele für Ab- und Zunehmen.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TDEE berechnen: So ermittelst du deinen täglichen Kalorienverbrauch',
    description: 'TDEE berechnen mit der Mifflin-St Jeor-Formel. Grundumsatz, Aktivitätsfaktor und Kalorienziele für Ab- und Zunehmen.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/tdee-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">TDEE berechnen: So ermittelst du deinen täglichen Kalorienverbrauch</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein <strong>TDEE (Total Daily Energy Expenditure)</strong> ist die Gesamtmenge an Kalorien, die dein Körper an einem Tag verbraucht — einschließlich Grundumsatz, Verdauung und körperlicher Aktivität.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Den TDEE zu kennen ist der wichtigste Schritt, ob du <strong>abnehmen</strong>, dein Gewicht <strong>halten</strong> oder <strong>Muskeln aufbauen</strong> willst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grundumsatz (BMR) vs. TDEE</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Grundumsatz (BMR)</strong> ist die Energiemenge, die dein Körper im Ruhezustand verbrennt — für Atmung, Herzschlag und Zellregeneration. Der TDEE multipliziert den BMR mit einem <strong>Aktivitätsfaktor</strong>.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">TDEE = BMR &times; Aktivitätsfaktor</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Mifflin-St Jeor-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Mifflin-St Jeor-Formel (1990) gilt als die genaueste Methode zur Berechnung des Grundumsatzes:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Männer: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Frauen: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter &minus; 161</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Aktivitätsfaktoren</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivität</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Faktor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Sitzend (Bürojob)</td><td class="px-6 py-3 text-stone-900 font-medium">1,2</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Leicht aktiv (1–3 Tage/Woche)</td><td class="px-6 py-3 text-stone-900 font-medium">1,375</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Moderat aktiv (3–5 Tage/Woche)</td><td class="px-6 py-3 text-stone-900 font-medium">1,55</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Sehr aktiv (6–7 Tage/Woche)</td><td class="px-6 py-3 text-stone-900 font-medium">1,725</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Extrem aktiv (Athlet)</td><td class="px-6 py-3 text-stone-900 font-medium">1,9</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen TDEE berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor-Formel mit Kalorienziel — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('tdee')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">TDEE und Ernährung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein TDEE bestimmt dein Kalorienziel. Für <strong>Gewichtsverlust</strong> isst du 500 kcal weniger, für <strong>Muskelaufbau</strong> 500 kcal mehr. Wie du diese Kalorien aufteilst, zeigt dir unser <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoff-Ratgeber</router-link>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Auch dein <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> hilft dir einzuordnen, ob Ab- oder Zunehmen sinnvoll ist.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der TDEE ist die Grundlage jeder Ernährungsplanung. Berechne deinen <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Kalorienverbrauch</router-link> und nutze das Ergebnis als Basis für deine <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoff-Verteilung</router-link>.
        </p>
      </div>

      <RelatedArticles slug="tdee-berechnen" />
    </div>
  </article>
</template>
