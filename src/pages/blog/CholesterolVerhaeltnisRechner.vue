<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Cholesterin-Verhältnis berechnen: Total/HDL, LDL/HDL und was die Quotienten bedeuten | Health Calculators',
  description: 'Was ist ein gutes Cholesterin-Verhältnis? Total/HDL, LDL/HDL und Triglyzerid/HDL erklärt — mit Friedewald-Formel, Normwerten und kardiovaskulärem Risiko.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Cholesterin-Verhältnis berechnen: Total/HDL, LDL/HDL und was die Quotienten bedeuten',
      description: 'Was ist ein gutes Cholesterin-Verhältnis? Total/HDL, LDL/HDL und Triglyzerid/HDL erklärt — mit Friedewald-Formel, Normwerten und kardiovaskulärem Risiko.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-22',
      dateModified: '2026-04-22',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/cholesterol-verhaeltnis-rechner',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cholesterin-Verhältnis berechnen',
      step: [
        { '@type': 'HowToStep', name: 'Gesamtcholesterin eingeben', text: 'Den Gesamtcholesterin-Wert aus dem Blutbild eingeben (mg/dL oder mmol/L).' },
        { '@type': 'HowToStep', name: 'HDL eingeben', text: 'Den HDL-Wert ("gutes Cholesterin") eingeben.' },
        { '@type': 'HowToStep', name: 'LDL eingeben oder schätzen lassen', text: 'LDL direkt eingeben oder das Feld leer lassen — dann berechnet der Rechner LDL nach Friedewald (nur bei Triglyzeriden < 400 mg/dL).' },
        { '@type': 'HowToStep', name: 'Triglyzeride eingeben', text: 'Den Triglyzerid-Wert eingeben.' },
        { '@type': 'HowToStep', name: 'Ergebnis ablesen', text: 'Der Rechner zeigt Total/HDL, LDL/HDL und Triglyzerid/HDL-Quotient mit klinischer Einordnung.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist ein normales Cholesterin-Verhältnis?',
          acceptedAnswer: { '@type': 'Answer', text: 'Total/HDL: idealerweise < 3,5. LDL/HDL: < 2,5. Triglyzerid/HDL: < 2 (in mg/dL). Werte über 5,0 (Total/HDL) gelten als erhöhtes Risiko.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist die Friedewald-Formel?',
          acceptedAnswer: { '@type': 'Answer', text: 'LDL = Gesamtcholesterin − HDL − Triglyzeride/5 (in mg/dL). Gültig bei Triglyzeriden unter 400 mg/dL.' },
        },
        {
          '@type': 'Question',
          name: 'Welcher Cholesterin-Quotient ist am wichtigsten?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der Total/HDL-Quotient ist der am besten validierte kardiovaskuläre Risikomarker und wird von der AHA und ESC als Standardparameter empfohlen.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Cholesterin-Verhältnis berechnen: Total/HDL, LDL/HDL und was die Quotienten bedeuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">22. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein einzelner Cholesterin-Wert sagt wenig — <strong>das Verhältnis der Lipide zueinander</strong> ist entscheidend. Der <strong>Total/HDL-Quotient</strong> ist der am besten validierte kardiovaskuläre Risikomarker und wird von AHA und ESC als Standardgröße empfohlen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, wie die Cholesterin-Quotienten berechnet werden, was die Normwerte bedeuten und wie du dein persönliches Risiko einordnen kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sind Cholesterin-Quotienten?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Cholesterin zirkuliert im Blut in verschiedenen Lipoproteinen. <strong>HDL</strong> ("gutes Cholesterin") transportiert Cholesterin zur Leber zurück, <strong>LDL</strong> ("schlechtes Cholesterin") lagert es in Gefäßwänden ab. Die Quotienten beschreiben das Gleichgewicht:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700 space-y-2">
          <p><strong>Total/HDL</strong> = Gesamtcholesterin ÷ HDL</p>
          <p><strong>LDL/HDL</strong> = LDL ÷ HDL</p>
          <p><strong>Triglyzerid/HDL</strong> = Triglyzeride ÷ HDL (in mg/dL)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein hoher HDL-Wert verbessert alle drei Quotienten — er ist der stärkste Schutzfaktor im Lipidprofil.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Normwerte und Risikostufen (AHA/ESC 2023)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Quotient</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Optimal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Moderat</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Erhöht</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Total/HDL</td>
                <td class="px-6 py-3 text-green-600">&lt; 3,5</td>
                <td class="px-6 py-3 text-yellow-600">3,5 – 5,0</td>
                <td class="px-6 py-3 text-red-600">&gt; 5,0</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">LDL/HDL</td>
                <td class="px-6 py-3 text-green-600">&lt; 2,5</td>
                <td class="px-6 py-3 text-yellow-600">2,5 – 3,5</td>
                <td class="px-6 py-3 text-red-600">&gt; 3,5</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Triglyzerid/HDL</td>
                <td class="px-6 py-3 text-green-600">&lt; 2,0</td>
                <td class="px-6 py-3 text-yellow-600">2,0 – 4,0</td>
                <td class="px-6 py-3 text-red-600">&gt; 4,0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Friedewald-Formel für LDL</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wenn kein direkt gemessener LDL-Wert vorliegt, kann LDL aus den anderen Lipidwerten geschätzt werden — mit der <strong>Friedewald-Formel</strong>:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p><strong>LDL (mg/dL)</strong> = Gesamtcholesterin − HDL − (Triglyzeride / 5)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-2">
          Die Formel ist bei Triglyzeriden unter <strong>400 mg/dL</strong> zuverlässig. Bei höheren Werten — etwa bei ausgeprägter Hypertriglyzeridämie — ist die Schätzung ungenau, und ein direkt gemessener LDL-Wert ist erforderlich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser Rechner wendet die Friedewald-Formel automatisch an, wenn kein LDL eingegeben wird und die Triglyzeridgrenze eingehalten ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Parameter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Wert</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ergebnis</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Gesamtcholesterin</td>
                <td class="px-6 py-3 text-stone-600">200 mg/dL</td>
                <td class="px-6 py-3 text-stone-400"></td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">HDL</td>
                <td class="px-6 py-3 text-stone-600">55 mg/dL</td>
                <td class="px-6 py-3 text-stone-400"></td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">LDL</td>
                <td class="px-6 py-3 text-stone-600">120 mg/dL</td>
                <td class="px-6 py-3 text-stone-400"></td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Total/HDL</td>
                <td class="px-6 py-3 text-stone-600">200 ÷ 55</td>
                <td class="px-6 py-3 text-green-600 font-semibold">3,64 — moderat</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">LDL/HDL</td>
                <td class="px-6 py-3 text-stone-600">120 ÷ 55</td>
                <td class="px-6 py-3 text-green-600 font-semibold">2,18 — optimal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Triglyzerid/HDL: der atherogenische Index</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Triglyzerid/HDL-Quotient</strong> (atherogenischer Index) ist ein sensitiver Marker für <strong>Insulinresistenz</strong> und metabolisches Syndrom. Er korreliert mit dem Anteil kleiner, dichter LDL-Partikel — die atherogen aktivsten Lipoproteine.
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Wert &lt; 2: Günstig</h3>
            <p class="text-sm text-stone-500">Geringes Risiko für Insulinresistenz und metabolisches Syndrom.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Wert 2–4: Grenzwertig</h3>
            <p class="text-sm text-stone-500">Mäßig erhöhtes Risiko — Ernährung und Bewegung anpassen.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Wert &gt; 4: Erhöht</h3>
            <p class="text-sm text-stone-500">Stark erhöhtes Risiko — ärztliche Abklärung empfohlen.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Cholesterin-Quotienten berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Total/HDL, LDL/HDL und Triglyzerid/HDL — kostenlos, sofort, ohne Anmeldung. Mit mmol/L-Unterstützung und Friedewald-Schätzung.</p>
        <router-link
          :to="localePath('cholesterolRatio')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie verbessere ich meine Werte?</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Regelmäßige Bewegung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Ausdauersport (150 min/Woche moderate Intensität) erhöht HDL messbar und senkt Triglyzeride.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Herzgesunde Ernährung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Weniger gesättigte Fette und Transfette, mehr Ballaststoffe, Hülsenfrüchte, Nüsse und Fisch senken LDL und verbessern alle Quotienten.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Gewichtsreduktion</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Bereits 5–10 % Gewichtsverlust senken Triglyzeride und verbessern den Trig/HDL-Quotienten signifikant.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Alkohol reduzieren</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Alkohol ist der stärkste diätetische Treiber von Hypertriglyzeridämie. Abstinenz oder starke Reduktion wirkt schnell.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und <router-link :to="localePath('bloodPressure')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck</router-link> sind weitere wichtige kardiovaskuläre Risikoparameter. Das <router-link :to="localePath('diabetesRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link> korreliert eng mit ungünstigen Lipidprofilen — besonders mit einem hohen Triglyzerid/HDL-Quotienten.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Cholesterin-Quotienten geben ein vollständigeres Bild des kardiovaskulären Risikos als Einzelwerte. Der Total/HDL-Quotient unter 3,5 ist das Ziel für optimale Herzgesundheit. Regelmäßige Bewegung, eine pflanzenbetonte Ernährung und Gewichtskontrolle sind die wirksamsten Hebel — ohne Medikamente. Nutze unseren <router-link :to="localePath('cholesterolRatio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Cholesterin-Verhältnis-Rechner</router-link> für eine schnelle Einschätzung.
        </p>
      </div>

      <RelatedArticles slug="cholesterol-verhaeltnis-rechner" />
    </div>
  </article>
</template>
