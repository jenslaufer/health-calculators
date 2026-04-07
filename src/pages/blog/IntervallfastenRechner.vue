<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Intervallfasten — Dein Leitfaden mit Rechner | Health Calculators',
  description: 'Intervallfasten erklärt: Protokolle (16:8, 18:6, 20:4, OMAD), Vorteile, Anfängertipps und kostenloser Intervallfasten-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Intervallfasten — Dein Leitfaden mit Rechner',
    description: 'Intervallfasten erklärt: Protokolle (16:8, 18:6, 20:4, OMAD), Vorteile, Anfängertipps und kostenloser Intervallfasten-Rechner.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/intervallfasten-rechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Intervallfasten — Dein Leitfaden mit Rechner</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Intervallfasten</strong> (Intermittent Fasting) ist keine Diät im klassischen Sinne — es ist ein Ernährungsmuster, das festlegt, <em>wann</em> du isst, nicht <em>was</em>. Du wechselst zwischen Essens- und Fastenphasen, um deinem Körper Zeit zur Regeneration zu geben.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du alles über die gängigsten Protokolle, die wissenschaftlich belegten Vorteile und wie du Intervallfasten als Anfänger starten kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Intervallfasten?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beim Intervallfasten isst du nur innerhalb eines definierten Zeitfensters und fastest den Rest des Tages. Während der Fastenphase trinkt man Wasser, ungesüßten Tee oder schwarzen Kaffee — keine kalorienhaltige Nahrung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Körper nutzt die Fastenzeit, um Reparaturprozesse (Autophagie) einzuleiten und die Fettverbrennung zu aktivieren. Anders als bei Crash-Diäten bleibt der Grundumsatz weitgehend stabil.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die gängigsten Protokolle</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Protokoll</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fasten</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Essen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Eignung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">16:8</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">16 h</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">8 h</td>
                <td class="px-6 py-3 text-stone-500">Anfänger — am beliebtesten</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">18:6</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">18 h</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">6 h</td>
                <td class="px-6 py-3 text-stone-500">Fortgeschrittene</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">20:4</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">20 h</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">4 h</td>
                <td class="px-6 py-3 text-stone-500">Erfahrene</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">OMAD</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">23 h</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1 h</td>
                <td class="px-6 py-3 text-stone-500">Fortgeschrittene — eine Mahlzeit/Tag</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">5:2</td>
                <td class="px-6 py-3 text-stone-600">2 Tage/Woche</td>
                <td class="px-6 py-3 text-stone-600">5 Tage/Woche</td>
                <td class="px-6 py-3 text-stone-500">Flexibel — tageweise statt stundenweise</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Das <strong>16:8-Protokoll</strong> ist der beste Einstieg: Du überspringst das Frühstück und isst zwischen 12:00 und 20:00 Uhr.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wissenschaftlich belegte Vorteile</h2>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed">
          <li><strong>Fettabbau</strong> — Intervallfasten senkt den Insulinspiegel und fördert die Fettverbrennung.</li>
          <li><strong>Autophagie</strong> — Der Körper baut geschädigte Zellbestandteile ab und recycelt sie.</li>
          <li><strong>Insulinsensitivität</strong> — Regelmäßiges Fasten verbessert die Blutzuckerregulation.</li>
          <li><strong>Entzündungsmarker</strong> — Studien zeigen reduzierte Entzündungswerte im Blut.</li>
          <li><strong>Einfachheit</strong> — Keine Kalorien zählen nötig, nur das Zeitfenster einhalten.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Intervallfasten und Kaloriendefizit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Intervallfasten allein garantiert keinen Fettabbau — entscheidend bleibt das <strong>Kaloriendefizit</strong>. Das Zeitfenster erleichtert es, weniger zu essen, ohne Kalorien zu zählen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Berechne deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Kalorienverbrauch (TDEE)</router-link> und nutze unseren <router-link :to="localeBlogPath('kaloriendefizit-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit-Rechner</router-link>, um dein Abnehmziel zu planen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tipps für Anfänger</h2>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed">
          <li>Starte mit dem <strong>16:8-Protokoll</strong> — das Frühstück auslassen ist der einfachste Einstieg.</li>
          <li>Trinke viel Wasser, ungesüßten Tee oder schwarzen Kaffee während der Fastenphase.</li>
          <li>Iss in deinem Essensfenster nährstoffreiche, sättigende Mahlzeiten — genug <router-link :to="localeBlogPath('proteinbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein</router-link> ist entscheidend.</li>
          <li>Steigere die Fastendauer schrittweise — von 14:10 über 16:8 zu längeren Protokollen.</li>
          <li>Höre auf deinen Körper: Schwindel, Schwäche oder Reizbarkeit sind Zeichen, kürzer zu fasten.</li>
          <li>Achte auf ausreichend <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffe</router-link> in deinen Mahlzeiten.</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Fastenfenster berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Protokoll wählen, Uhrzeit eingeben — sofort dein Essens- und Fastenfenster sehen.</p>
        <router-link
          :to="localePath('intermittentFasting')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Intervallfasten ist ein flexibles, wissenschaftlich gestütztes Ernährungsmuster. Starte mit 16:8, kombiniere es mit einem gesunden <router-link :to="localeBlogPath('kaloriendefizit-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit</router-link> und nutze unseren <router-link :to="localePath('intermittentFasting')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Intervallfasten-Rechner</router-link>, um dein optimales Zeitfenster zu finden.
        </p>
      </div>

      <RelatedArticles slug="intervallfasten-rechner" />
    </div>
  </article>
</template>
