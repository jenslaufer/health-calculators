<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Körperoberfläche berechnen — BSA-Formeln und medizinische Bedeutung | Health Calculators',
  description: 'Körperoberfläche (BSA) nach Du Bois, Mosteller, Haycock und Boyd berechnen. Formeln erklärt, Normalwerte, Bedeutung für Chemotherapie und Verbrennungsmedizin.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Körperoberfläche berechnen — BSA-Formeln und medizinische Bedeutung',
    description: 'Körperoberfläche (BSA) nach Du Bois, Mosteller, Haycock und Boyd berechnen. Formeln erklärt und medizinische Anwendungen.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-12',
    dateModified: '2026-04-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/koerperoberflaeche-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Körperoberfläche berechnen — BSA-Formeln und medizinische Bedeutung</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">12. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Körperoberfläche (Body Surface Area, BSA)</strong> ist eine der wichtigsten Größen in der klinischen Medizin. Sie bildet die Basis für die Dosierung von Chemotherapeutika, die Einschätzung von Verbrennungen und die Normierung der Nierenfunktion.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, welche Formeln es gibt, wie sie sich unterscheiden und wann welche verwendet wird.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die Körperoberfläche?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Körperoberfläche gibt an, wie groß die gesamte Außenfläche des menschlichen Körpers ist — von der Kopfhaut bis zur Fußsohle. Sie wird in Quadratmetern (m²) angegeben.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für einen durchschnittlichen Erwachsenen liegt sie zwischen <strong>1,6 m² (Frauen)</strong> und <strong>1,9 m² (Männer)</strong>. Kinder haben naturgemäß kleinere Werte — ein Neugeborenes hat etwa 0,2 m².
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Warum ist die BSA wichtiger als das Körpergewicht?</p>
          <p class="text-sm text-stone-600 leading-relaxed">
            Das Körpergewicht allein berücksichtigt nicht die Körperzusammensetzung. Eine 80 kg schwere, 1,90 m große Person hat eine deutlich andere Körperoberfläche als eine 80 kg schwere, 1,60 m große Person. Dosierungen nach BSA sind daher individuell präziser.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Standardformeln</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Für die Berechnung der Körperoberfläche existieren mehrere wissenschaftlich validierte Formeln. Sie unterscheiden sich in Präzision, Zielgruppe und Verbreitung.
        </p>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Formel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Jahr</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Besonderheit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Du Bois</td>
                <td class="px-6 py-3 text-stone-600">1916</td>
                <td class="px-6 py-3 text-stone-600">Älteste, am meisten verwendete Formel; Standard in der Onkologie</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Mosteller</td>
                <td class="px-6 py-3 text-stone-600">1987</td>
                <td class="px-6 py-3 text-stone-600">Einfachste Berechnung; empfohlen vom New England Journal of Medicine</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Haycock</td>
                <td class="px-6 py-3 text-stone-600">1978</td>
                <td class="px-6 py-3 text-stone-600">Optimiert für Kinder und Erwachsene; gilt als besonders präzise</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Boyd</td>
                <td class="px-6 py-3 text-stone-600">1935</td>
                <td class="px-6 py-3 text-stone-600">Nichtlineare Gewichtsbeziehung; weniger klinisch verbreitet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Du Bois (1916)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Die Formel von Du Bois und Du Bois ist die älteste und meistverwendete Formel zur BSA-Berechnung. Sie wurde an einer kleinen Stichprobe entwickelt, hat sich aber in der klinischen Praxis bewährt:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-4">
          BSA = 0,007184 × Größe (cm)^0,725 × Gewicht (kg)^0,425
        </div>
        <p class="text-sm text-stone-500 leading-relaxed mb-6">
          Für einen 170 cm großen, 70 kg schweren Menschen ergibt sich BSA ≈ 1,81 m².
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Mosteller (1987)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Die Mosteller-Formel ist die einfachste Berechnung und liefert sehr gute Ergebnisse. Sie wurde im New England Journal of Medicine veröffentlicht und ist besonders für die schnelle klinische Anwendung geeignet:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-4">
          BSA = √(Größe (cm) × Gewicht (kg) / 3600)
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Haycock (1978)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Die Haycock-Formel wurde speziell für Kinder entwickelt und gilt auch bei Erwachsenen als sehr präzise:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-4">
          BSA = 0,024265 × Größe (cm)^0,3964 × Gewicht (kg)^0,5378
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Boyd (1935)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Die Boyd-Formel berücksichtigt eine nichtlineare Beziehung zwischen Gewicht und BSA und wird heute seltener verwendet:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-6">
          BSA = 0,0003207 × Größe (cm)^0,3 × Gewicht (g)^(0,7285 − 0,0188 × log₁₀(Gewicht (g)))
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Medizinische Anwendungen</h2>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Chemotherapie-Dosierung</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die wichtigste klinische Anwendung der BSA ist die <strong>Dosierung von Chemotherapeutika</strong>. Da viele Krebsmedikamente eine enge therapeutische Breite haben — zu wenig wirkt nicht, zu viel ist giftig — wird die Dosis präzise nach Körperoberfläche berechnet: in <strong>mg/m²</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Zum Beispiel wird Cisplatin häufig mit 75–100 mg/m² alle 3–4 Wochen dosiert. Bei einer BSA von 1,80 m² entspricht das einer Gesamtdosis von 135–180 mg.
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Verbrennungsmedizin</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Verbrennungsopfern wird der Anteil der verbrannten Körperoberfläche nach der <strong>Neuner-Regel</strong> geschätzt: Kopf 9 %, jeder Arm 9 %, jeder Oberschenkel 9 %, jeder Unterschenkel 9 %, Vorder- und Rücken je 18 %. Die geschätzte Fläche fließt direkt in die Flüssigkeitsersatz-Berechnung ein.
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Nierenfunktion (GFR)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Die glomeruläre Filtrationsrate (GFR) wird auf eine Standard-Körperoberfläche von <strong>1,73 m²</strong> normiert. Diese Normierung — bekannt als „BSA-adjustierte GFR" — ermöglicht den Vergleich der Nierenfunktion zwischen Patienten unterschiedlicher Körpergröße.
        </p>
      </div>

      <!-- CTA box -->
      <div class="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 class="text-xl font-bold mb-2">Körperoberfläche berechnen</h2>
        <p class="text-stone-300 text-sm mb-4">Berechne deine BSA mit allen vier Formeln und vergleiche die Ergebnisse direkt.</p>
        <router-link
          :to="localePath('bsa')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum BSA-Rechner →</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Welche Formel sollte ich verwenden?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In der klinischen Praxis gilt: Die verwendete Formel hängt vom medizinischen Kontext ab.
        </p>
        <ul class="space-y-2 text-sm text-stone-600 mb-4">
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Onkologie / Chemotherapie:</strong> Du Bois ist Standard — historisch bedingt und gut validiert.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Klinische Entscheidungen allgemein:</strong> Mosteller — einfach und ausreichend präzise.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Pädiatrie:</strong> Haycock — entwickelt und validiert für Kinder.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Forschung:</strong> Alle Formeln vergleichen und die Varianz berichten.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Für Laien ist es weniger relevant, welche Formel man verwendet — die Unterschiede sind meist kleiner als 2–3 %. Wichtig ist, den eigenen Wert zu kennen und ihn bei medizinischen Gesprächen parat zu haben.
        </p>
      </div>

    </div>

    <RelatedArticles slug="koerperoberflaeche-berechnen" />
  </article>
</template>
