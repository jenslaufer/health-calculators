<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'HbA1c umrechnen — Langzeit-Blutzucker verstehen | Health Calculators',
  description: 'HbA1c-Wert in geschätzten mittleren Blutzucker (eAG) umrechnen. Formel, Risikokategorien Normal, Prädiabetes und Diabetes erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'HbA1c umrechnen — Langzeit-Blutzucker verstehen',
    description: 'HbA1c-Wert in geschätzten mittleren Blutzucker (eAG) umrechnen. Formel, Risikokategorien und was der Wert bedeutet.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-09',
    dateModified: '2026-04-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/hba1c-umrechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">HbA1c umrechnen — Langzeit-Blutzucker verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">9. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>HbA1c-Wert</strong> zeigt, wie gut der Blutzucker über die letzten zwei bis drei Monate eingestellt war. Er ist das wichtigste Langzeitmaß für das Diabetesrisiko — doch was bedeutet er genau, und wie rechnet man ihn in Blutzuckerwerte um?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die Umrechnung funktioniert, welche Risikokategorien es gibt und was du mit deinem Ergebnis anfangen kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist HbA1c?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          HbA1c steht für <strong>glykiertes Hämoglobin</strong>. Rote Blutkörperchen transportieren Sauerstoff durch den Körper. Bei hohem Blutzucker bindet Glukose dauerhaft an den roten Blutfarbstoff Hämoglobin — dieser Prozess heißt Glykierung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Da rote Blutkörperchen etwa 8–12 Wochen leben, spiegelt der HbA1c-Wert den <strong>durchschnittlichen Blutzucker der letzten 2–3 Monate</strong> wider. Ein einzelner Nüchternblutzucker kann durch Stress oder Ernährung verfälscht werden — der HbA1c nicht.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">HbA1c = Langzeit-Blutzucker der letzten ~3 Monate</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Umrechnungsformel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die American Diabetes Association (ADA) und das IFCC haben eine validierte Formel entwickelt, um HbA1c in den <strong>geschätzten mittleren Blutzucker (eAG)</strong> umzurechnen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Richtung</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Formel</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">HbA1c → eAG (mg/dL)</td>
                <td class="px-6 py-3 text-stone-900 font-mono font-medium">eAG = 28,7 × HbA1c − 46,7</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">eAG → HbA1c (%)</td>
                <td class="px-6 py-3 text-stone-900 font-mono font-medium">HbA1c = (eAG + 46,7) ÷ 28,7</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">mg/dL → mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-mono font-medium">mmol/L = mg/dL ÷ 18,015</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> Ein HbA1c von 6,5 % entspricht einem eAG von 28,7 × 6,5 − 46,7 = <strong>140 mg/dL</strong> (7,77 mmol/L).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikokategorien nach ADA</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die American Diabetes Association klassifiziert HbA1c-Werte in drei Kategorien:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">HbA1c</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">eAG (mg/dL)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">eAG (mmol/L)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-600"></span>
                    <span class="text-stone-900 font-medium">Normal</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">&lt; 5,7 %</td>
                <td class="px-6 py-3 text-stone-600">&lt; 117</td>
                <td class="px-6 py-3 text-stone-600">&lt; 6,5</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span class="text-stone-900 font-medium">Prädiabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">5,7 – 6,4 %</td>
                <td class="px-6 py-3 text-stone-600">117 – 137</td>
                <td class="px-6 py-3 text-stone-600">6,5 – 7,6</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                    <span class="text-stone-900 font-medium">Diabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">≥ 6,5 %</td>
                <td class="px-6 py-3 text-stone-600">≥ 140</td>
                <td class="px-6 py-3 text-stone-600">≥ 7,8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA to calculator -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">HbA1c jetzt umrechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gib deinen HbA1c-Wert oder deinen Blutzucker ein und erhalte sofort alle Umrechnungen und deine Risikokategorie.</p>
        <router-link
          :to="localePath('hba1c')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum HbA1c-Umrechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was beeinflusst den HbA1c-Wert?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der HbA1c-Wert ist robust, aber nicht unfehlbar. Bestimmte Faktoren können ihn verfälschen:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span><strong>Blutarmut (Anämie):</strong> Weniger rote Blutkörperchen können den HbA1c künstlich senken.</span>
          </li>
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span><strong>Hämoglobinvarianten:</strong> Genetische Varianten (z.B. Sichelzellanämie) stören manche Messverfahren.</span>
          </li>
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span><strong>Schwangerschaft:</strong> Veränderte Blutbildung kann den Wert beeinflussen.</span>
          </li>
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span><strong>Nierenerkrankung:</strong> Kann zu falschen Ergebnissen führen.</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Unsicherheiten immer das Gespräch mit einem Arzt suchen — der HbA1c ist ein Screening-Werkzeug, kein Ersatz für eine vollständige Diagnose.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zusammenhang mit Ernährung und Gewicht</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          HbA1c und Körpergewicht hängen direkt zusammen. Übergewicht erhöht die Insulinresistenz und damit langfristig den Blutzucker. Schon ein <strong>Kaloriendefizit von 500 kcal/Tag</strong> kann bei übergewichtigen Personen innerhalb von drei Monaten messbare Verbesserungen bewirken.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Zwei weitere nützliche Rechner für deinen Überblick:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span>
              <router-link :to="localePath('bmi')" class="text-stone-900 font-medium underline decoration-stone-300 hover:decoration-stone-600">BMI-Rechner</router-link>
              — prüfe, ob dein Gewicht im gesunden Bereich liegt.
            </span>
          </li>
          <li class="flex items-start gap-3 text-base text-stone-600">
            <span class="text-stone-400 mt-0.5">—</span>
            <span>
              <router-link :to="localePath('calorieDeficit')" class="text-stone-900 font-medium underline decoration-stone-300 hover:decoration-stone-600">Kaloriendefizit-Rechner</router-link>
              — berechne dein tägliches Energiedefizit für nachhaltiges Abnehmen.
            </span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-base font-semibold text-stone-900 mb-2">Wie oft sollte ich meinen HbA1c messen lassen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei normalem Befund empfiehlt die ADA alle 3 Jahre. Bei Prädiabetes oder bekanntem Diabetes je nach Einstellung alle 3–6 Monate.
            </p>
          </div>
          <div>
            <h3 class="text-base font-semibold text-stone-900 mb-2">Kann ich meinen HbA1c selbst senken?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja. Regelmäßige körperliche Aktivität, eine kohlenhydratbewusste Ernährung und Gewichtsreduktion wirken sich nachweislich positiv auf den HbA1c aus. Bei Werten ≥ 6,5 % ist jedoch immer eine ärztliche Begleitung wichtig.
            </p>
          </div>
          <div>
            <h3 class="text-base font-semibold text-stone-900 mb-2">Was ist der Unterschied zwischen HbA1c und Nüchternblutzucker?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Der Nüchternblutzucker ist eine Momentaufnahme — er zeigt den Blutzucker zu einem bestimmten Zeitpunkt. Der HbA1c zeigt den Durchschnitt über 2–3 Monate und ist damit stabiler und schwerer zu beeinflussen.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles slug="hba1c-umrechnen" />
  </article>
</template>
