<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Blutzucker umrechnen — mg/dL und mmol/L verstehen | Health Calculators',
  description: 'Blutzucker zwischen mg/dL und mmol/L umrechnen. Nüchternwert und postprandialen Wert einordnen. Referenzbereiche, Formel und kostenloser Rechner.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blutzucker umrechnen — mg/dL und mmol/L verstehen',
    description: 'Blutzucker zwischen mg/dL und mmol/L umrechnen. Referenzbereiche für Nüchtern- und postprandiale Werte einfach erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-12',
    dateModified: '2026-04-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/blutzucker-umrechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Blutzucker umrechnen — mg/dL und mmol/L verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">12. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ob auf dem Blutzuckermessgerät, im Arztbericht oder in einer amerikanischen Studie — Blutzuckerwerte erscheinen in zwei Einheiten: <strong>mg/dL</strong> (Milligramm pro Deziliter) und <strong>mmol/L</strong> (Millimol pro Liter). In Europa ist mg/dL Standard, in vielen anderen Ländern mmol/L.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die Umrechnung funktioniert, was die Referenzbereiche bedeuten und wie du deinen Wert richtig einordnest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Umrechnungsformel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Blutzucker lässt sich mit einem festen Faktor zwischen beiden Einheiten umrechnen. Der Faktor basiert auf dem Molekulargewicht von Glukose (180,18 g/mol):
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
                <td class="px-6 py-3 text-stone-600">mg/dL → mmol/L</td>
                <td class="px-6 py-3 font-mono text-stone-900">mmol/L = mg/dL ÷ 18,018</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">mmol/L → mg/dL</td>
                <td class="px-6 py-3 font-mono text-stone-900">mg/dL = mmol/L × 18,018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-sm text-stone-700 font-semibold mb-2">Beispiel</p>
          <p class="text-sm text-stone-600">Ein Nüchternblutzucker von <strong>95 mg/dL</strong> entspricht <strong>5,27 mmol/L</strong> (95 ÷ 18,018 ≈ 5,27).</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Nüchternblutzucker — Referenzbereiche</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Den Nüchternblutzucker misst man nach mindestens 8 Stunden ohne Essen. Er ist der wichtigste Basiswert zur Diagnose von Diabetes und Prädiabetes.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">mg/dL</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">mmol/L</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-600 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Normal</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">&lt; 100</td>
                <td class="px-6 py-3 text-stone-600">&lt; 5,6</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Prädiabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">100 – 125</td>
                <td class="px-6 py-3 text-stone-600">5,6 – 6,9</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Diabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">≥ 126</td>
                <td class="px-6 py-3 text-stone-600">≥ 7,0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 italic">Quelle: American Diabetes Association (ADA) Standards of Care 2024.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Postprandialer Blutzucker — Referenzbereiche</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Den postprandialen Blutzucker misst man 2 Stunden nach einer Mahlzeit. Er zeigt, wie gut der Körper Kohlenhydrate verarbeitet, und kann erhöht sein, während der Nüchternwert noch normal ist.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">mg/dL</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">mmol/L</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-600 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Normal</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">&lt; 140</td>
                <td class="px-6 py-3 text-stone-600">&lt; 7,8</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Prädiabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">140 – 199</td>
                <td class="px-6 py-3 text-stone-600">7,8 – 11,0</td>
              </tr>
              <tr>
                <td class="px-6 py-3">
                  <span class="inline-flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <span class="text-stone-900 font-medium">Diabetes</span>
                  </span>
                </td>
                <td class="px-6 py-3 text-stone-600">≥ 200</td>
                <td class="px-6 py-3 text-stone-600">≥ 11,1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Nüchternwert vs. postprandialer Wert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beide Messungen geben unterschiedliche Einblicke in die Blutzuckerregulation:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Nüchternwert</strong> zeigt die Basisfunktion der Bauchspeicheldrüse und Insulinresistenz im Ruhezustand.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Postprandialer Wert</strong> zeigt die Reaktion auf Kohlenhydrate und ist oft früher erhöht als der Nüchternwert.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Ein erhöhter postprandialer Wert bei normalem Nüchternwert kann auf Prädiabetes hindeuten.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zusammenhang mit HbA1c</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der HbA1c-Wert spiegelt den durchschnittlichen Blutzucker der letzten 2–3 Monate wider — er ist der Langzeit-Gegenstück zum aktuellen Blutzucker. Ein einzelner Blutzuckerwert zeigt den Momentanzustand; der HbA1c zeigt das Gesamtbild.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <p class="text-sm text-stone-600">Ein HbA1c von 6,5 % entspricht einem geschätzten mittleren Blutzucker von ca. <strong>140 mg/dL (7,8 mmol/L)</strong>.</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Blutzucker jetzt umrechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gib deinen Wert ein und sieh sofort die Einordnung für Nüchtern- oder postprandialen Wert.</p>
        <router-link
          :to="localePath('bloodSugar')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Blutzucker-Umrechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Warum gibt es zwei verschiedene Einheiten?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Historisch haben verschiedene Länder unterschiedliche Messsysteme eingeführt. Deutschland, Österreich und die Schweiz verwenden mg/dL, während viele andere Länder (UK, Kanada, Australien) mmol/L bevorzugen. Medizinische Geräte können oft zwischen beiden umschalten.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Kann ein einzelner Wert Diabetes diagnostizieren?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nein. Ein einzelner erhöhter Wert allein genügt nicht für eine Diagnose. Die ADA fordert mindestens zwei abnormale Messungen an verschiedenen Tagen oder einen oralen Glukosetoleranztest. Wende dich immer an einen Arzt.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was beeinflusst den Blutzucker?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Mahlzeiten (besonders Kohlenhydrate), körperliche Aktivität, Stress, Schlafmangel, Medikamente und Krankheiten können den Blutzucker kurzfristig stark beeinflussen. Für verlässliche Werte ist eine standardisierte Messbedingung wichtig.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles />
  </article>
</template>
