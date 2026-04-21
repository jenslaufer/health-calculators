<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Anionenlücke berechnen — Metabolische Azidose verstehen | Health Calculators',
  description: 'Was ist die Anionenlücke? Formel, Normwerte, Albumin-Korrektur und MUDPILES einfach erklärt. Kostenloser Anionenlücken-Rechner online.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Anionenlücke berechnen — Metabolische Azidose verstehen',
    description: 'Was ist die Anionenlücke? Formel, Normwerte, Albumin-Korrektur und MUDPILES einfach erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-21',
    dateModified: '2026-04-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/anionenluecke-rechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Anionenlücke berechnen — Metabolische Azidose verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">21. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Anionenlücke (AG)</strong> ist ein einfach berechenbarer Parameter aus dem Blutbild, der hilft, die Ursache einer <strong>metabolischen Azidose</strong> systematisch einzugrenzen. Sie gehört zu den wichtigsten Werkzeugen in der klinischen Notfall- und Intensivmedizin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erklärt du, wie die Anionenlücke berechnet wird, was die Normwerte bedeuten, wann eine Albumin-Korrektur notwendig ist und welche Erkrankungen hinter einer erhöhten Anionenlücke stecken können.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Anionenlücke ergibt sich aus der Differenz zwischen dem gemessenen Kation Natrium und den gemessenen Anionen Chlorid und Bikarbonat:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">AG = Na⁺ − (Cl⁻ + HCO₃⁻)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Referenzbereich liegt bei <strong>8–12 mEq/L</strong> (ohne Kalium). Die „Lücke" entsteht, weil im Serum nicht alle Anionen standardmäßig gemessen werden — Albumin, Phosphat und andere tragen zur Ladungsneutralität bei.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Anionenlücke</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 8 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Niedrig</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">8 – 12 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">13 – 20 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Leicht erhöht</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 20 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hoch — High-AG-Azidose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Albumin-Korrektur?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Albumin ist das wichtigste „unmessbare Anion" im Serum. Bei Hypoalbuminämie (z.B. bei Lebererkrankung, Malnutrition, kritisch kranken Patienten) fällt die Anionenlücke falsch niedrig aus — eine High-AG-Azidose kann dadurch übersehen werden.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Korrigierte AG = AG + 2,5 × (4,0 − Albumin [g/dL])</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein Patient mit Albumin 2,0 g/dL und AG 10 mEq/L hat eine korrigierte AG von 10 + 2,5 × (4,0 − 2,0) = <strong>15 mEq/L</strong> — also eine leicht erhöhte Anionenlücke trotz scheinbar normalem Ausgangswert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">High-AG-Azidose: MUDPILES</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Anionenlücke über 20 mEq/L weist auf eine High-AG-metabolische Azidose hin. Das Akronym <strong>MUDPILES</strong> hilft, die wichtigsten Ursachen zu erinnern:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Buchstabe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ursache</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">M</td><td class="px-6 py-3 text-stone-600">Methanol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">U</td><td class="px-6 py-3 text-stone-600">Urämie</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">D</td><td class="px-6 py-3 text-stone-600">Diabetische Ketoazidose (DKA)</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">P</td><td class="px-6 py-3 text-stone-600">Propylenglykol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">I</td><td class="px-6 py-3 text-stone-600">Eisen (Iron) / Isoniazid</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">L</td><td class="px-6 py-3 text-stone-600">Laktatazidose</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">E</td><td class="px-6 py-3 text-stone-600">Ethylenglykol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">S</td><td class="px-6 py-3 text-stone-600">Salicylate (Acetylsalicylsäure)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Niedrige Anionenlücke</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine AG unter 8 mEq/L ist seltener, aber klinisch relevant. Häufige Ursachen:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hypoalbuminämie</strong> — häufigste Ursache einer niedrigen Anionenlücke</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hyperchlorämie</strong> — z.B. durch Kochsalzinfusion oder Hyperchlorämische Azidose</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Bromid-Intoxikation</strong> — Bromid wird als Chlorid gemessen</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lithiumtherapie</strong> — Lithium ist ein Kation, das die AG senkt</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zusammenhang mit anderen Labortests</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Anionenlücke ist Teil einer umfassenderen Stoffwechselanalyse. Verwandte Laborparameter:
        </p>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR (Glomeruläre Filtrationsrate)</strong> — Nierenfunktion ist entscheidend für Urämie und renale Azidose. Berechne deinen <router-link :to="localePath('gfr')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR-Wert</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>HbA1c</strong> — Langzeitblutzucker zur Beurteilung einer diabetischen Entgleisung. Zum <router-link :to="localePath('hba1c')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">HbA1c-Konverter</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blutzucker</strong> — Glukose ist zentral für die Diagnose einer DKA. Zum <router-link :to="localePath('bloodSugar')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Blutzucker-Umrechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Anionenlücke jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Natrium, Chlorid und Bikarbonat eingeben — sofort Ergebnis und klinische Einordnung.</p>
        <router-link
          :to="localePath('anionGap')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Anionenlücken-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Warum wird Kalium bei der Anionenlücke oft weggelassen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Die klassische Formel AG = Na − (Cl + HCO₃) lässt Kalium weg, da dessen Konzentration im Vergleich zu Natrium sehr gering ist. Einige Formeln addieren Kalium zu Natrium, was den Normbereich leicht nach oben verschiebt (auf 10–14 mEq/L). Im klinischen Alltag wird meist die Formel ohne Kalium verwendet.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Kann ich die Anionenlücke ohne Blutgasanalyse berechnen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja. Natrium und Chlorid stammen aus der Serum-Elektrolytbestimmung, Bikarbonat (HCO₃⁻) aus der Blutgasanalyse oder als Serumbikarbonat aus dem Routinelabor. Werte aus verschiedenen Abnahmezeitpunkten sollten nicht kombiniert werden.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Gilt der Normbereich für alle Patienten?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Der Normbereich von 8–12 mEq/L gilt bei normalen Albuminwerten. Bei Hypoalbuminämie muss immer die korrigierte Anionenlücke berechnet werden, da sonst eine High-AG-Azidose übersehen werden kann.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles />
  </article>
</template>
