<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'GFR-Rechner: Nierenfunktion verstehen und einordnen | Health Calculators',
  description: 'eGFR nach CKD-EPI 2021 berechnen und CKD-Stadium einordnen. Was bedeuten GFR-Werte, CKD-Stadien G1–G5 und wann zum Arzt? Alles zur Nierenfunktion.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GFR-Rechner: Nierenfunktion verstehen und einordnen',
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/gfr-rechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">
        &larr; Blog
      </router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">
        GFR-Rechner: Nierenfunktion verstehen und einordnen
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>glomeruläre Filtrationsrate (GFR)</strong> ist der wichtigste Parameter zur Beurteilung der Nierenfunktion. Sie gibt an, wie viel Blut die Nieren pro Minute filtern. Ein niedriger Wert deutet auf eine eingeschränkte Nierenfunktion hin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Da eine direkte GFR-Messung aufwendig ist, wird in der klinischen Praxis die <strong>geschätzte GFR (eGFR)</strong> aus Serum-Kreatinin, Alter und Geschlecht berechnet. Die <strong>CKD-EPI 2021-Formel</strong> ist dabei der aktuelle Goldstandard.
        </p>
      </div>

      <!-- What is GFR -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die glomeruläre Filtrationsrate?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Glomeruli sind winzige Filterknäuel in den Nieren. Pro Niere gibt es etwa eine Million. Gemeinsam filtern sie täglich rund <strong>180 Liter Blut</strong> — das entspricht einem eGFR-Wert von 90–120 mL/min/1,73 m² bei gesunden Erwachsenen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der eGFR-Wert wird auf eine Standardkörperoberfläche von <strong>1,73 m²</strong> normiert. Das ermöglicht den Vergleich zwischen Patienten unterschiedlicher Körpergröße. Werte über 60 gelten generell als ausreichend für den Alltag, darunter spricht man von einer chronischen Nierenerkrankung (CKD).
        </p>
      </div>

      <!-- CKD-EPI 2021 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die CKD-EPI 2021-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>CKD-EPI 2021</strong> (Chronic Kidney Disease Epidemiology Collaboration) ist die von der <strong>KDIGO</strong> (Kidney Disease: Improving Global Outcomes) empfohlene Formel. Sie löste die ältere CKD-EPI 2009 ab, die noch einen rassenbezogenen Korrekturfaktor enthielt.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">CKD-EPI 2021 Gleichung</div>
          <div class="font-mono text-sm text-stone-800 leading-relaxed">
            eGFR = 142 × min(Scr/κ, 1)<sup>α</sup> × max(Scr/κ, 1)<sup>−1,200</sup> × 0,9938<sup>Alter</sup> × 1,012 [wenn weiblich]
          </div>
          <div class="mt-4 text-sm text-stone-500 space-y-1">
            <div>κ = 0,7 (weiblich) | 0,9 (männlich)</div>
            <div>α = −0,241 (weiblich) | −0,302 (männlich)</div>
            <div>Scr = Serum-Kreatinin in mg/dL</div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Vorteil gegenüber der MDRD-Formel: CKD-EPI liefert präzisere Werte im normalen und leicht erhöhten Bereich — also genau dort, wo frühe Nierenschäden erkannt werden sollen.
        </p>
      </div>

      <!-- CKD Stages table -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">CKD-Stadien nach KDIGO</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die KDIGO teilt die chronische Nierenerkrankung (CKD) in sechs Stadien ein:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stadium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">eGFR (mL/min/1,73m²)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-semibold text-green-700">G1</td>
                <td class="px-6 py-3 text-stone-700">≥ 90</td>
                <td class="px-6 py-3 text-stone-600">Normal oder erhöht</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-lime-700">G2</td>
                <td class="px-6 py-3 text-stone-700">60 – 89</td>
                <td class="px-6 py-3 text-stone-600">Leicht eingeschränkt</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-yellow-600">G3a</td>
                <td class="px-6 py-3 text-stone-700">45 – 59</td>
                <td class="px-6 py-3 text-stone-600">Leicht bis mäßig eingeschränkt</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-orange-600">G3b</td>
                <td class="px-6 py-3 text-stone-700">30 – 44</td>
                <td class="px-6 py-3 text-stone-600">Mäßig bis stark eingeschränkt</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-red-600">G4</td>
                <td class="px-6 py-3 text-stone-700">15 – 29</td>
                <td class="px-6 py-3 text-stone-600">Stark eingeschränkt</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-red-800">G5</td>
                <td class="px-6 py-3 text-stone-700">&lt; 15</td>
                <td class="px-6 py-3 text-stone-600">Nierenversagen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">
          <strong>Wichtig:</strong> Ein einzelner eGFR-Wert ist kein Diagnosekriterium. CKD wird erst diagnostiziert, wenn Auffälligkeiten über mindestens 3 Monate anhalten.
        </p>
      </div>

      <!-- Creatinine and unit conversion -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Serum-Kreatinin: mg/dL und µmol/L</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kreatinin ist ein Stoffwechselprodukt des Muskelstoffwechsels. Es wird fast ausschließlich durch die Nieren ausgeschieden — ein erhöhter Kreatininwert weist daher auf eine eingeschränkte Filtration hin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Deutschland wird Kreatinin meist in <strong>mg/dL</strong> angegeben, in vielen anderen Ländern in <strong>µmol/L</strong>. Die Umrechnung:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="font-mono text-sm text-stone-800 space-y-1">
            <div>mg/dL = µmol/L ÷ 88,42</div>
            <div>µmol/L = mg/dL × 88,42</div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Normalwerte: Männer 0,7–1,2 mg/dL (62–106 µmol/L), Frauen 0,5–1,0 mg/dL (44–88 µmol/L). Ältere Menschen und Personen mit wenig Muskelmasse haben tendenziell niedrigere Werte.
        </p>
      </div>

      <!-- When to see a doctor -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zum Arzt?</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-lime-700 text-sm pt-0.5">G2</div>
            <p class="text-sm text-stone-600 leading-relaxed">Hausarzt informieren und Risikofaktoren (Blutdruck, Blutzucker) regelmäßig kontrollieren.</p>
          </div>
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-yellow-600 text-sm pt-0.5">G3a</div>
            <p class="text-sm text-stone-600 leading-relaxed">Regelmäßige Verlaufskontrollen beim Hausarzt oder Nephrologen (mindestens einmal jährlich).</p>
          </div>
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-orange-600 text-sm pt-0.5">G3b</div>
            <p class="text-sm text-stone-600 leading-relaxed">Nephrologen aufsuchen. Engmaschige Überwachung und Anpassung der Medikation notwendig.</p>
          </div>
          <div class="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-red-700 text-sm pt-0.5">G4 / G5</div>
            <p class="text-sm text-stone-600 leading-relaxed">Dringende nephrologische Behandlung. Vorbereitung auf Dialyse oder Nierentransplantation besprechen.</p>
          </div>
        </div>
      </div>

      <!-- Related calculators -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Gesundheitsrechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Nierenfunktion ist eng mit anderen Gesundheitsparametern verknüpft. Diese Rechner helfen bei der Gesamtbewertung:
        </p>
        <ul class="space-y-2 text-sm text-stone-600">
          <li>
            <router-link :to="localePath('bloodPressure')" class="text-stone-800 font-medium hover:underline">
              Blutdruck-Rechner
            </router-link>
            — Bluthochdruck ist eine der häufigsten Ursachen für Nierenerkrankungen.
          </li>
          <li>
            <router-link :to="localePath('bloodSugar')" class="text-stone-800 font-medium hover:underline">
              Blutzucker-Umrechner
            </router-link>
            — Diabetes ist die zweithäufigste Ursache für CKD.
          </li>
          <li>
            <router-link :to="localePath('bmi')" class="text-stone-800 font-medium hover:underline">
              BMI-Rechner
            </router-link>
            — Übergewicht erhöht das Risiko für Nieren- und Herz-Kreislauf-Erkrankungen.
          </li>
        </ul>
      </div>

      <RelatedArticles />
    </div>
  </article>
</template>
