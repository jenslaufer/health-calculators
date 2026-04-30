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
      name: 'Was sagt das Cholesterin-Verhältnis aus?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das Total/HDL-Verhältnis ist nach Framingham- und INTERHEART-Studien ein präziserer Prädiktor für Herzinfarkte als das absolute Cholesterin. Es berücksichtigt das schützende HDL.' },
    },
    {
      '@type': 'Question',
      name: 'Welcher Wert gilt als optimal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Total/HDL unter 3.5 ist nach AHA/ESC 2023 optimal. 3.5–5.0 gilt als moderat, über 5.0 als erhöht.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist die Friedewald-Formel?',
      acceptedAnswer: { '@type': 'Answer', text: 'LDL = Gesamt − HDL − Triglyceride/5 (nur valide bei Triglyceriden < 400 mg/dL).' },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cholesterin-Verhältnis berechnen',
  step: [
    { '@type': 'HowToStep', name: 'Werte eintragen', text: 'Gesamtcholesterin, HDL, LDL und Triglyceride aus deinem Laborbefund eingeben.' },
    { '@type': 'HowToStep', name: 'Einheit wählen', text: 'mg/dL oder mmol/L. Der Rechner konvertiert automatisch.' },
    { '@type': 'HowToStep', name: 'Verhältnisse ablesen', text: 'Total/HDL als Hauptmarker, LDL/HDL und Triglyceride/HDL als Zusatzinformation.' },
    { '@type': 'HowToStep', name: 'Risiko einordnen', text: 'Optimal < 3.5, moderat 3.5–5.0, erhöht > 5.0 (Total/HDL nach AHA/ESC).' },
  ],
}

useHead({
  title: 'Cholesterin-Verhältnis berechnen: Total/HDL, LDL/HDL & Triglyceride/HDL | Health Calculators',
  description: 'Cholesterin-Verhältnis berechnen — Total/HDL, LDL/HDL und atherogener Index. Risikoeinordnung nach AHA/ESC, Friedewald-Formel und Tipps zur Verbesserung.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Cholesterin-Verhältnis berechnen: Was deine Blutwerte wirklich aussagen',
      description: 'Cholesterin-Verhältnis berechnen — Total/HDL, LDL/HDL und atherogener Index. Risikoeinordnung nach AHA/ESC, Friedewald-Formel und Tipps zur Verbesserung.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/cholesterol-verhaeltnis-rechner',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Cholesterin-Verhältnis berechnen: Was deine Blutwerte wirklich aussagen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">30. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das absolute <strong>Gesamtcholesterin</strong> ist nur die halbe Wahrheit. Das <strong>Cholesterin-Verhältnis</strong> — insbesondere das Total/HDL-Verhältnis — sagt deutlich präziser voraus, wie hoch dein Risiko für Herzinfarkt und Schlaganfall ist.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die drei wichtigsten Verhältnisse, die Friedewald-Formel und wie du deine Werte verbesserst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Cholesterin-Verhältnisse</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Total/HDL</strong> = Gesamtcholesterin / HDL</p>
          <p class="mb-2"><strong>LDL/HDL</strong> = LDL / HDL</p>
          <p><strong>Triglyceride/HDL</strong> = Triglyceride / HDL (atherogener Index)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Studien wie <strong>Framingham</strong> und <strong>INTERHEART</strong> zeigen: Diese Verhältnisse sind robustere Marker als das Gesamtcholesterin alleine, weil sie das schützende HDL berücksichtigen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zielwerte nach AHA/ESC 2023</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Verhältnis</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Optimal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Moderat</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Erhöht</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Total/HDL</td><td class="px-6 py-3 text-stone-600">&lt; 3.5</td><td class="px-6 py-3 text-stone-600">3.5 – 5.0</td><td class="px-6 py-3 text-stone-600">&gt; 5.0</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">LDL/HDL</td><td class="px-6 py-3 text-stone-600">&lt; 2.5</td><td class="px-6 py-3 text-stone-600">2.5 – 3.5</td><td class="px-6 py-3 text-stone-600">&gt; 3.5</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Triglyceride/HDL</td><td class="px-6 py-3 text-stone-600">&lt; 2</td><td class="px-6 py-3 text-stone-600">2 – 4</td><td class="px-6 py-3 text-stone-600">&gt; 4</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Friedewald-Formel: LDL ohne direkte Messung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wenn dein Laborbefund kein direkt gemessenes LDL enthält, lässt es sich schätzen:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p><strong>LDL</strong> = Gesamtcholesterin &minus; HDL &minus; (Triglyceride / 5)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: Bei Triglyceriden ab 400 mg/dL wird die Schätzung ungenau und sollte nicht verwendet werden — dann muss LDL direkt gemessen werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Triglyceride/HDL — der atherogene Index</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Triglyceride/HDL-Verhältnis ist ein Marker für <strong>Insulinresistenz</strong> und das metabolische Syndrom. Hohe Werte (&gt; 4) korrelieren stark mit kleinen, dichten LDL-Partikeln, die besonders gefäßschädigend wirken — auch bei normalem LDL-Cholesterin.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie du dein Verhältnis verbesserst</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">HDL erhöhen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Ausdauersport (3–4×/Woche), Olivenöl, fetter Fisch, moderater Alkoholkonsum, Verzicht auf Transfette.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">LDL senken</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Lösliche Ballaststoffe (Hafer, Hülsenfrüchte), Pflanzensterole, weniger gesättigte Fette, Gewichtsabnahme.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Triglyceride senken</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Weniger Zucker und Alkohol, Omega-3 (Lachs, Leinöl), regelmäßige Bewegung.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Cholesterin-Verhältnis berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Total/HDL, LDL/HDL und atherogener Index — mit Risikoeinordnung und Friedewald-Fallback. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('cholesterolRatio')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Cholesterin hängt eng mit Gewicht und Lebensstil zusammen. Prüfe deinen
          <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link>,
          deinen
          <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck</router-link>
          und dein
          <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link>
          — drei Werte, die zusammen das kardiometabolische Gesamtrisiko abbilden.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Total/HDL-Verhältnis ist ein robusterer Risikomarker als das absolute Cholesterin. Ergänzt durch LDL/HDL und Triglyceride/HDL ergibt sich ein klareres Bild deines kardiovaskulären Risikos. Berechne deine Werte mit unserem
          <router-link :to="localePath('cholesterolRatio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Cholesterin-Verhältnis-Rechner</router-link>.
        </p>
      </div>

      <RelatedArticles slug="cholesterol-verhaeltnis-rechner" />
    </div>
  </article>
</template>
