<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wann muss man Natrium bei Hyperglykämie korrigieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei Patienten mit Blutzucker über 200 mg/dL und auffälligem Natrium. Hohe Glukose zieht Wasser in den Extrazellulärraum und senkt das Natrium um etwa 2,4 mEq/L pro 100 mg/dL Glukose über 100 mg/dL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Formel ist Standard — Hillier oder Katz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Hillier-Formel (Faktor 2,4) aus dem Jahr 2018 gilt als Standard. Die ältere Katz-Formel (Faktor 1,6) aus 1973 unterschätzt die Korrektur und wird heute kaum noch verwendet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Pseudohyponatriämie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine scheinbare Hyponatriämie durch Hyperglykämie, Hyperlipidämie oder Hyperproteinämie. Nach Korrektur ist das Natrium normal — es liegt kein echter Mangel vor. Typisch bei diabetischer Ketoazidose (DKA).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie rechne ich Glukose von mmol/L in mg/dL um?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multipliziere mmol/L mit 18,0182. Beispiel: 22,2 mmol/L × 18 = 400 mg/dL.',
      },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Korrigiertes Natrium bei Hyperglykämie berechnen',
  description: 'In drei Schritten das korrigierte Serum-Natrium nach der Hillier-Formel bestimmen.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Werte erfassen',
      text: 'Gemessenes Serum-Natrium (mEq/L) und Blutzucker (mg/dL oder mmol/L) ablesen.',
    },
    {
      '@type': 'HowToStep',
      name: 'Differenz bilden',
      text: 'Glukose minus 100 mg/dL berechnen und durch 100 teilen.',
    },
    {
      '@type': 'HowToStep',
      name: 'Korrektur addieren',
      text: 'Ergebnis mit 2,4 multiplizieren (Hillier) und zum gemessenen Natrium addieren.',
    },
  ],
}

useHead({
  title: 'Natrium-Korrektur bei Hyperglykämie berechnen | Health Calculators',
  description: 'Korrigiertes Serum-Natrium bei Hyperglykämie: Formel, Pseudohyponatriämie, DKA und klinischer Kontext einfach erklärt. Mit kostenlosem Online-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Natrium-Korrektur bei Hyperglykämie berechnen',
      description: 'Korrigiertes Serum-Natrium bei Hyperglykämie: Formel, Pseudohyponatriämie, DKA und klinischer Kontext.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-26',
      dateModified: '2026-04-26',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/natrium-korrektur-berechnen',
      },
    },
    faqJsonLd,
    howToJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Natrium-Korrektur bei Hyperglykämie berechnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">26. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein erniedrigtes Serum-<strong>Natrium</strong> bei einem Patienten mit hohem Blutzucker ist häufig keine echte Hyponatriämie, sondern eine Folge der Hyperglykämie. Wer das nicht korrigiert, behandelt im schlimmsten Fall den falschen Befund.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die <strong>Hillier-Formel (2018)</strong>, die ältere Katz-Formel, das Konzept der Pseudohyponatriämie und die klinische Einordnung am Beispiel der diabetischen Ketoazidose (DKA).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die heute übliche Hillier-Formel korrigiert das Natrium um 2,4 mEq/L pro 100 mg/dL Glukose über 100 mg/dL:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Korrigiertes Na = Gemessenes Na + 2,4 × ((Glukose − 100) / 100)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die ältere Katz-Formel von 1973 verwendet einen Faktor von 1,6 und unterschätzt die Korrektur. Hilliers Arbeit aus 1999/2018 mit experimentellen Glukose-Infusionen zeigte, dass 2,4 die Realität besser abbildet.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Klinischer Kontext: DKA & Pseudohyponatriämie</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Patient mit diabetischer Ketoazidose hat z. B. Glukose 600 mg/dL und Natrium 130 mEq/L. Auf den ersten Blick eine Hyponatriämie. Mit der Hillier-Formel:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-sm font-mono text-stone-900">130 + 2,4 × ((600 − 100) / 100) = 130 + 12 = <strong>142 mEq/L</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Das korrigierte Natrium ist normal — es handelt sich um eine <strong>Pseudohyponatriämie</strong> infolge der Hyperglykämie, kein echter Natriummangel. Die Therapie zielt auf Glukose-, nicht Natrium-Korrektur.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Referenzbereiche</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Korrigiertes Natrium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 135 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hyponatriämie</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">135 – 145 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 145 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hypernatriämie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Anleitung: In drei Schritten</h2>
        <ol class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">1.</span>
            <span class="text-stone-600 text-base"><strong>Werte erfassen:</strong> Serum-Natrium (mEq/L) und Glukose (mg/dL oder mmol/L) aus dem Labor ablesen.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">2.</span>
            <span class="text-stone-600 text-base"><strong>Differenz bilden:</strong> Glukose minus 100 mg/dL berechnen, durch 100 teilen.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">3.</span>
            <span class="text-stone-600 text-base"><strong>Korrektur addieren:</strong> Ergebnis mit 2,4 multiplizieren (Hillier) und zum gemessenen Natrium addieren.</span>
          </li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blutzucker-Umrechner</strong> — Glukose zwischen mg/dL und mmol/L umrechnen. Zum <router-link :to="localePath('bloodSugar')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Blutzucker-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Diabetes-Risiko-Score</strong> — FINDRISC für Typ-2-Diabetes. Zum <router-link :to="localePath('diabetesRisk')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Diabetes-Risiko-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>HbA1c-Konverter</strong> — Langzeitblutzucker zwischen %, mmol/mol und durchschnittlicher Glukose umrechnen. Zum <router-link :to="localePath('hba1c')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">HbA1c-Konverter</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Korrigiertes Natrium jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Natrium und Glukose eingeben — sofort Ergebnis und klinische Einordnung.</p>
        <router-link
          :to="localePath('sodiumCorrection')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Natrium-Korrektur-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wann muss man Natrium bei Hyperglykämie korrigieren?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei Patienten mit Blutzucker über 200 mg/dL und auffälligem Natrium. Hohe Glukose zieht Wasser in den Extrazellulärraum und senkt das Natrium um etwa 2,4 mEq/L pro 100 mg/dL Glukose über 100 mg/dL.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Formel ist Standard — Hillier oder Katz?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Die Hillier-Formel (Faktor 2,4) aus dem Jahr 2018 gilt als Standard. Die ältere Katz-Formel (Faktor 1,6) aus 1973 unterschätzt die Korrektur und wird heute kaum noch verwendet.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was ist Pseudohyponatriämie?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Eine scheinbare Hyponatriämie durch Hyperglykämie, Hyperlipidämie oder Hyperproteinämie. Nach Korrektur ist das Natrium normal — es liegt kein echter Mangel vor. Typisch bei diabetischer Ketoazidose (DKA).
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie rechne ich Glukose von mmol/L in mg/dL um?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Multipliziere mmol/L mit 18,0182. Beispiel: 22,2 mmol/L × 18 = 400 mg/dL.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles />
  </article>
</template>
