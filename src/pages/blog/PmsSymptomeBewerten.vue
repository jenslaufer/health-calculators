<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen PMS und PMDD?',
      acceptedAnswer: { '@type': 'Answer', text: 'PMS ist häufig (bis 75 % der Frauen). PMDD ist eine schwere Form mit massiver Beeinträchtigung (3–8 % der Frauen). Bei PMDD dominieren Stimmungssymptome (Wut, Depression, Angst).' },
    },
    {
      '@type': 'Question',
      name: 'Was ist das Premenstrual Symptoms Screening Tool (PSST)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Der PSST ist ein 2003 von Steiner validierter Fragebogen mit 14 Symptomen und 5 Beeinträchtigungs-Items zur Erfassung von PMS und PMDD nach DSM-5-Kriterien.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Therapien wirken bei PMDD?',
      acceptedAnswer: { '@type': 'Answer', text: 'SSRI (Fluoxetin, Sertralin) auch nur in der Lutealphase, kombinierte Pillen mit Drospirenon (24/4-Schema, FDA-zugelassen für PMDD), Kalzium, Bewegung und kognitive Verhaltenstherapie.' },
    },
  ],
}

useHead({
  title: 'PMS-Symptome bewerten: PSST-Score, PMDD-Diagnose und Therapie | Health Calculators',
  description: 'Prämenstruelles Syndrom (PMS) und prämenstruelle dysphorische Störung (PMDD) mit dem PSST-Fragebogen nach Steiner bewerten. 14 Symptome, 5 Beeinträchtigungen, klare Therapieempfehlungen.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PMS-Symptome bewerten: PSST-Score, PMDD-Diagnose und der Weg zur Therapie',
      description: 'Prämenstruelles Syndrom (PMS) und prämenstruelle dysphorische Störung (PMDD) mit dem PSST-Fragebogen nach Steiner bewerten. 14 Symptome, 5 Beeinträchtigungen, klare Therapieempfehlungen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/pms-symptome-bewerten',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PMS-Symptome bewerten: PSST-Score, PMDD-Diagnose und der Weg zur Therapie</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>prämenstruelle Syndrom (PMS)</strong> kennt fast jede Frau — leichte Stimmungsschwankungen, Brustspannen, Müdigkeit in der Woche vor der Periode. Aber bei etwa 3 bis 8 % der Frauen wird daraus eine eigenständige Erkrankung: die <strong>prämenstruelle dysphorische Störung (PMDD)</strong>. Sie ist schwer, sie ist real — und sie ist gut behandelbar.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das <strong>Premenstrual Symptoms Screening Tool (PSST)</strong> hilft, beides zu unterscheiden. Es bildet die DSM-5-Kriterien für PMDD ab und gibt dir einen klaren Ausgangspunkt für das Gespräch mit der Gynäkologin.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist PMS, was ist PMDD?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PMS und PMDD sind beide an die <strong>Lutealphase</strong> des Zyklus gebunden — also die 1 bis 2 Wochen vor der Periode. Die Symptome verschwinden mit Beginn der Blutung. Wer Symptome auch in der ersten Zyklushälfte hat, leidet wahrscheinlich an etwas anderem (z. B. Depression, Angststörung, Schilddrüse).
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Merkmal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PMS</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PMDD</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Häufigkeit</td><td class="px-6 py-3 text-stone-600">bis 75 %</td><td class="px-6 py-3 text-stone-600">3–8 %</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hauptsymptome</td><td class="px-6 py-3 text-stone-600">Körperlich + leicht psychisch</td><td class="px-6 py-3 text-stone-600">Schwer affektiv (Wut, Angst, Depression)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Beeinträchtigung</td><td class="px-6 py-3 text-stone-600">leicht bis mittel</td><td class="px-6 py-3 text-stone-600">schwer, Lebensqualität deutlich reduziert</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">DSM-5</td><td class="px-6 py-3 text-stone-600">keine Diagnose</td><td class="px-6 py-3 text-stone-600">eigenständige psychische Diagnose</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Das PSST — 14 Symptome, 5 Lebensbereiche</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Premenstrual Symptoms Screening Tool</strong> wurde 2003 von Steiner und Kollegen entwickelt. Er hat zwei Teile: 14 Symptom-Items und 5 Items zur Beeinträchtigung im Alltag. Jedes Item wird auf einer 4-stufigen Skala bewertet (0 = gar nicht, 3 = stark).
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gruppe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Items</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kern (4)</td><td class="px-6 py-3 text-stone-600">Wut/Reizbarkeit, Angst, Weinerlichkeit, depressive Verstimmung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Weitere (10)</td><td class="px-6 py-3 text-stone-600">Interesse, Konzentration, Müdigkeit, Heißhunger, Schlaf, Überforderung, körperliche Beschwerden</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Beeinträchtigung (5)</td><td class="px-6 py-3 text-stone-600">Arbeit, Kolleg:innen, Familie, soziales Leben, Haushalt</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die PSST-Kriterien</h2>
        <div class="bg-white border border-stone-200 rounded-xl p-6 mb-4">
          <h3 class="text-base font-semibold text-stone-900 mb-2">PMDD (alle drei Bedingungen)</h3>
          <ul class="list-disc pl-6 text-sm text-stone-600 leading-relaxed space-y-1">
            <li>≥ 1 Kernsymptom <strong>stark</strong> (Stufe 3)</li>
            <li>≥ 4 weitere Symptome <strong>mittel oder stark</strong> (Stufe ≥ 2)</li>
            <li>≥ 1 Beeinträchtigung <strong>stark</strong> (Stufe 3)</li>
          </ul>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl p-6 mb-4">
          <h3 class="text-base font-semibold text-stone-900 mb-2">Mittelschweres bis schweres PMS</h3>
          <ul class="list-disc pl-6 text-sm text-stone-600 leading-relaxed space-y-1">
            <li>≥ 1 Kernsymptom <strong>mittel oder stark</strong></li>
            <li>≥ 4 weitere Symptome <strong>mittel oder stark</strong></li>
            <li>≥ 1 Beeinträchtigung <strong>mittel oder stark</strong></li>
          </ul>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen PSST-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">14 Symptome, 5 Beeinträchtigungen, klare PMDD-Auswertung nach Steiner 2003. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('pmsSymptom')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >PSST-Score berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Therapie — was wirklich hilft</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebensstil bei leichtem PMS</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Regelmäßige Bewegung (3–5×/Woche, auch in der Lutealphase), Schlafhygiene, Stressabbau, Reduktion von Alkohol und Koffein. Kalzium 1.000–1.200 mg/Tag, Vitamin B6 50–100 mg, Magnesium 200–400 mg — evidenzbasiert, mild wirksam.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mönchspfeffer (Vitex agnus-castus)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">In mehreren RCT bei mittlerem PMS wirksam. Wirkprofil mild, Nebenwirkungen selten. Erste Wahl bei pflanzlicher Präferenz.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Kombinierte Pille mit Drospirenon</h3>
            <p class="text-sm text-stone-600 leading-relaxed">24/4-Schema (z. B. Yaz, Yasminelle). Von der FDA für PMDD zugelassen, in Studien klar wirksam gegen affektive und körperliche Symptome. Klassische 21/7-Pillen wirken oft weniger.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">SSRI bei PMDD</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Fluoxetin, Sertralin oder Paroxetin sind Erstlinientherapie bei PMDD. Können auch nur in der Lutealphase eingenommen werden — Wirkung bereits in der ersten Woche. Therapie der Wahl bei dominanter Stimmungssymptomatik.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Kognitive Verhaltenstherapie (KVT)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Wirksam bei moderatem bis schwerem PMS und PMDD. Wirkt besonders gut auf Reizbarkeit, depressive Verstimmung und Bewältigungsstrategien.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zur Gynäkologin?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Spätestens bei mittelschwerem bis schwerem PMS oder PMDD-Verdacht. Bring zum Termin ein <strong>Zyklustagebuch</strong> über mindestens 2 Zyklen mit (Tagesnotizen zu Stimmung, Schlaf, Symptomen). Das ist die Grundlage jeder PMDD-Diagnose nach DSM-5.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wenn dein Zyklus stark unregelmäßig ist oder Anzeichen für Hyperandrogenismus bestehen, prüfe parallel den
          <router-link :to="localeBlogPath('pcos-symptome-erkennen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PCOS-Symptom-Check</router-link>.
          Den genauen Lutealphasen-Beginn findest du mit dem
          <router-link :to="localeBlogPath('eisprung-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eisprungrechner</router-link>.
          Wer den eigenen Zyklus generell besser verstehen will, findet im
          <router-link :to="localeBlogPath('zyklusrechner-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Zyklusrechner-Guide</router-link>
          alle Phasen, hormonellen Verläufe und Auswertungs-Tipps.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          PMS ist häufig — PMDD ist real, schwer und oft jahrelang unerkannt. Der PSST trennt beide zuverlässig und gibt dir einen klaren Ausgangspunkt für die nächste Sprechstunde. Starte mit dem
          <router-link :to="localePath('pmsSymptom')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PMS-Symptome-Rechner</router-link>,
          führe ein Zyklustagebuch und sprich mit deiner Gynäkologin — wirksame Therapien existieren für jede Stufe.
        </p>
      </div>

      <RelatedArticles slug="pms-symptome-bewerten" />
    </div>
  </article>
</template>
