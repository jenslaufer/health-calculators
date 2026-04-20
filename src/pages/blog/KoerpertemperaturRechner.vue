<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Körpertemperatur berechnen — Fieber, Normalwert & Unterkühlung | Health Calculators',
  description: 'Was ist Normaltemperatur? Fieber, Unterkühlung, Messunterschiede und wann zum Arzt. Mit kostenlosem Körpertemperatur-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Körpertemperatur berechnen — Fieber, Normalwert & Unterkühlung',
    description: 'Was ist Normaltemperatur? Fieber, Unterkühlung, Messunterschiede und wann zum Arzt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-20',
    dateModified: '2026-04-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/koerpertemperatur-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Körpertemperatur berechnen — Fieber, Normalwert & Unterkühlung</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">20. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 Min. Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die meisten Menschen kennen <strong>37 °C</strong> als "Normaltemperatur" — aber dieser Wert stammt aus einer Studie des Arztes Carl Wunderlich aus dem Jahr 1851. Moderne Studien zeigen: Gesunde Erwachsene haben Körpertemperaturen zwischen <strong>36,1 und 37,2 °C</strong>, je nach Tageszeit, Messort und Alter.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du Temperaturwerte richtig einordnest, ab wann Fieber vorliegt, wie du zwischen Celsius und Fahrenheit umrechnest und wann du zum Arzt solltest.
        </p>
      </div>

      <!-- Normaltemperatur -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist eine normale Körpertemperatur?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der übliche Normalbereich der oralen Körpertemperatur bei Erwachsenen liegt zwischen <strong>36,1 und 37,2 °C (97,0–99,0 °F)</strong>. Werte über 38 °C gelten medizinisch als Fieber. Die deutschen und WHO-Leitlinien setzen diese Grenze einheitlich bei <strong>38,0 °C</strong>.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-base font-semibold text-stone-900">Normalbereich oral: 36,1–37,2 °C (97,0–99,0 °F)</p>
          <p class="text-sm text-stone-500 mt-2">Fiebergrenze: ≥ 38,0 °C (100,4 °F)</p>
        </div>
      </div>

      <!-- Celsius und Fahrenheit -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Celsius und Fahrenheit umrechnen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Deutschland und den meisten europäischen Ländern wird Körpertemperatur in Celsius gemessen. In den USA ist Fahrenheit die übliche Einheit. Die Umrechnungsformeln:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">°F = (°C × 9/5) + 32</p>
          <p class="text-base font-semibold text-stone-900">°C = (°F − 32) × 5/9</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">°C</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">°F</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Unterkühlung</td><td class="px-6 py-3 tabular-nums">&lt; 35,0</td><td class="px-6 py-3 tabular-nums">&lt; 95,0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Zu niedrig</td><td class="px-6 py-3 tabular-nums">35,0–36,0</td><td class="px-6 py-3 tabular-nums">95,0–96,8</td></tr>
              <tr class="bg-green-50"><td class="px-6 py-3 font-semibold text-stone-700">Normal</td><td class="px-6 py-3 font-semibold tabular-nums">36,1–37,2</td><td class="px-6 py-3 font-semibold tabular-nums">97,0–99,0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Leicht erhöht</td><td class="px-6 py-3 tabular-nums">37,3–38,0</td><td class="px-6 py-3 tabular-nums">99,1–100,4</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Fieber</td><td class="px-6 py-3 tabular-nums">38,1–39,0</td><td class="px-6 py-3 tabular-nums">100,6–102,2</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Hohes Fieber</td><td class="px-6 py-3 tabular-nums">39,1–40,0</td><td class="px-6 py-3 tabular-nums">102,4–104,0</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Sehr hohes Fieber</td><td class="px-6 py-3 tabular-nums">&gt; 40,0</td><td class="px-6 py-3 tabular-nums">&gt; 104,0</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Messorte -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Messorte — was ist am genauesten?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Körpertemperatur variiert je nach Messort erheblich. Die rektale Messung spiegelt die Körperkerntemperatur am besten wider und ist der klinische Goldstandard.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Rektal (genaueste)</p>
            <p class="text-sm text-stone-500">36,6–38,0 °C. Goldstandard. Wird bei Säuglingen und in der Intensivmedizin eingesetzt.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Oral (Mund)</p>
            <p class="text-sm text-stone-500">35,5–37,5 °C. Praktisch und bei Erwachsenen verlässlich. 15 Minuten nach Essen oder Trinken warten.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Axillär (Achselhöhle)</p>
            <p class="text-sm text-stone-500">34,7–37,3 °C. Am wenigsten genau. Zur Annäherung an die Kerntemperatur ca. 0,5 °C addieren.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-5">
            <p class="font-semibold text-stone-900 mb-1">Tympanal (Ohr)</p>
            <p class="text-sm text-stone-500">35,8–38,0 °C. Schnell, aber erfordert korrekte Technik für genaue Ergebnisse.</p>
          </div>
        </div>
      </div>

      <!-- Wann zum Arzt -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ab wann zum Arzt?</h2>
        <div class="space-y-3 mb-4">
          <div class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-red-800 mb-1">Sofort Notarzt rufen</p>
            <ul class="text-sm text-red-700 space-y-1 list-disc list-inside">
              <li>Temperatur über 40 °C in jedem Alter</li>
              <li>Jedes Fieber bei Säuglingen unter 3 Monaten</li>
              <li>Temperatur unter 35 °C — Unterkühlung</li>
              <li>Fieber mit Nackensteifigkeit, schwerem Kopfschmerz, Verwirrtheit oder Ausschlag</li>
            </ul>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-orange-800 mb-1">Innerhalb von 24 Stunden zum Arzt</p>
            <ul class="text-sm text-orange-700 space-y-1 list-disc list-inside">
              <li>Fieber über 39 °C, das länger als einen Tag anhält</li>
              <li>Jedes Fieber bei Kindern unter 2 Jahren, das länger als einen Tag anhält</li>
              <li>Fieber über 38 °C bei Erwachsenen länger als 3 Tage</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tagesrhythmus -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Natürliche Schwankungen im Tagesverlauf</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Körpertemperatur folgt einem circadianen Rhythmus und schwankt täglich um bis zu <strong>0,5 °C</strong>:
        </p>
        <ul class="list-disc list-inside space-y-2 text-stone-600 mb-4 text-base">
          <li><strong>Tiefstwert:</strong> frühmorgens (ca. 4–6 Uhr), typisch 36,0–36,4 °C</li>
          <li><strong>Höchstwert:</strong> spätnachmittags (ca. 16–18 Uhr), typisch 36,8–37,2 °C</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Weitere Faktoren, die die Temperatur leicht erhöhen: körperliche Aktivität, Eisprung (ca. +0,3 °C), heiße Getränke und warme Kleidung. Faktoren, die sie senken: Schlaf, Fasten und Kälteexposition.
        </p>
      </div>

    </div>

    <RelatedArticles slug="koerpertemperatur-berechnen" />
  </article>
</template>
