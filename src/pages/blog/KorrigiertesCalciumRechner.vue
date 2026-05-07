<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Korrigiertes Calcium berechnen — Albumin-Korrektur (Payne-Formel) | Health Calculators',
  description: 'Was ist albumin-korrigiertes Calcium? Payne-Formel, Normwerte, Hypoalbuminämie und klinische Bedeutung verständlich erklärt — mit kostenlosem Online-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Korrigiertes Calcium berechnen — Albumin-Korrektur einfach erklärt',
      description: 'Albumin-korrigiertes Calcium nach Payne. Formel, Normwerte, Indikationen und Grenzen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/korrigiertes-calcium-rechner',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Korrigiertes Calcium berechnen',
      step: [
        { '@type': 'HowToStep', name: 'Gesamtcalcium messen', text: 'Serum-Gesamtcalcium aus dem Routinelabor (mg/dL oder mmol/L).' },
        { '@type': 'HowToStep', name: 'Albumin messen', text: 'Serum-Albumin aus derselben Probe (g/dL oder g/L).' },
        { '@type': 'HowToStep', name: 'Payne-Formel anwenden', text: 'Korrigiertes Ca = Total Ca + 0,8 × (4,0 − Albumin [g/dL]).' },
        { '@type': 'HowToStep', name: 'Ergebnis einordnen', text: 'Hypokalzämie < 8,5 mg/dL · Normal 8,5–10,2 mg/dL · Hyperkalzämie > 10,2 mg/dL.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum muss Calcium nach Albumin korrigiert werden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Etwa 40 % des Serumcalciums sind an Albumin gebunden. Bei Hypoalbuminämie fällt das Gesamtcalcium falsch niedrig aus, obwohl das ionisierte Calcium normal sein kann.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wann ist die Payne-Korrektur unzuverlässig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bei schweren Säure-Basen-Störungen, Multiplem Myelom und in der Intensivmedizin. Goldstandard ist dann das ionisierte Calcium.',
          },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Korrigiertes Calcium berechnen — Albumin-Korrektur einfach erklärt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>korrigierte Serumcalcium</strong> (Payne-Formel) ist eine schnelle Methode, um das gemessene Gesamtcalcium an den Albuminspiegel anzupassen. Es hilft, eine <strong>Pseudohypokalzämie</strong> bei Hypoalbuminämie zu erkennen — und vermeidet so unnötige Calcium-Substitution.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, warum Calcium an Albumin gebunden ist, wie die Korrektur in konventionellen und SI-Einheiten funktioniert und in welchen Situationen das ionisierte Calcium der Goldstandard bleibt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Payne-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Payne-Formel passt das Gesamtcalcium an einen Norm-Albuminwert von 4,0 g/dL (40 g/L) an:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Korrigiertes Ca [mg/dL] = Total Ca + 0,8 × (4,0 − Albumin [g/dL])</p>
        </div>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Korrigiertes Ca [mmol/L] = Total Ca + 0,02 × (40 − Albumin [g/L])</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei genau Albumin = 4,0 g/dL ergibt sich keine Korrektur — Gesamtcalcium und korrigiertes Calcium sind identisch.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Albumin-Korrektur?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Calcium liegt im Serum in drei Fraktionen vor:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Ionisiertes Calcium (~50 %)</strong> — physiologisch wirksam</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>An Albumin gebunden (~40 %)</strong> — biologisch inaktiv</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>An Anionen komplexiert (~10 %)</strong> — z.B. an Phosphat, Citrat</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Hypoalbuminämie (z.B. Leberzirrhose, nephrotisches Syndrom, Mangelernährung) sinkt das gemessene Gesamtcalcium, ohne dass das ionisierte Calcium betroffen ist. Ohne Korrektur wird fälschlich eine Hypokalzämie diagnostiziert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Referenzbereiche</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Korrigiertes Calcium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 8,5 mg/dL · &lt; 2,12 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hypokalzämie</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">8,5 – 10,2 mg/dL · 2,12 – 2,55 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 10,2 mg/dL · &gt; 2,55 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hyperkalzämie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann der Rechner unzuverlässig ist</h2>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schwere Säure-Basen-Störungen</strong> — pH-Schwankungen verändern die Calcium-Albumin-Bindung direkt</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Multiples Myelom</strong> — Paraproteine binden Calcium und führen zu Pseudohypercalcämie</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Intensivmedizin</strong> — Dynamik zu schnell, Citrat-Antikoagulation, häufige Transfusionen</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesen Fällen ist das <strong>ionisierte Calcium</strong> der Goldstandard und sollte direkt gemessen werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Laborwerte</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Anionenlücke</strong> — eng verwandte Albumin-Korrektur bei metabolischer Azidose. Zum <router-link :to="localePath('anionGap')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Anionenlücken-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Natrium-Korrektur bei Hyperglykämie</strong> — analoges Prinzip mit korrigierten Elektrolyten. Zum <router-link :to="localePath('sodiumCorrection')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Natrium-Korrektur-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR (Nierenfunktion)</strong> — chronische Niereninsuffizienz ist eine wichtige Ursache der Hypokalzämie. Zum <router-link :to="localePath('gfr')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR-Rechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Korrigiertes Calcium jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gesamtcalcium und Albumin eingeben — sofort die Albumin-korrigierte Calcium-Konzentration und Einordnung.</p>
        <router-link
          :to="localePath('correctedCalcium')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Korrigiertes-Calcium-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Werte gelten als Hypokalzämie nach Korrektur?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Korrigierte Calciumwerte unter 8,5 mg/dL (2,12 mmol/L) gelten als Hypokalzämie. Symptome wie Tetanie, Parästhesien und Krämpfe treten jedoch meist erst bei deutlich niedrigeren Werten auf — und insbesondere bei rascher Abnahme.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Warum 0,8 als Korrekturfaktor?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Pro 1 g/dL Albumin sind etwa 0,8 mg/dL Calcium gebunden. Dieser Faktor stammt aus den Originalarbeiten von Payne et al. (1973) und ist klinisch etabliert — auch wenn er empirisch und populationsabhängig ist.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wann sollte ich ionisiertes Calcium messen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei intensivmedizinischer Versorgung, Säure-Basen-Störungen, Massentransfusion (Citrat), Multiplem Myelom und unklaren Befunden. Das ionisierte Calcium spiegelt die physiologisch wirksame Fraktion direkt wider.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles />
  </article>
</template>
