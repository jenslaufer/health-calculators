<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'LDL-Cholesterin (Friedewald) berechnen: Formel, Grenzen, Werte | Health Calculators',
  description: 'LDL-Cholesterin per Friedewald-Formel aus Gesamtcholesterin, HDL und Triglyceriden schätzen. ATP-III-Bänder, Grenzen ab 400 mg/dL, was bei erhöhtem LDL hilft.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'LDL-Cholesterin (Friedewald) berechnen: Formel, Grenzen, Werte',
      description: 'Friedewald-Formel, ATP-III-Bänder und was bei erhöhtem LDL wirklich hilft.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-29',
      dateModified: '2026-05-29',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/ldl-friedewald-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist die Friedewald-Formel?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die Friedewald-Formel (1972) schätzt LDL-Cholesterin aus Gesamtcholesterin, HDL und Triglyceriden: LDL = Gesamt − HDL − Triglyceride/5 (mg/dL). In mmol/L wird durch 2,2 geteilt.' },
        },
        {
          '@type': 'Question',
          name: 'Ab wann ist die Friedewald-Schätzung ungenau?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ab Triglyceriden von 400 mg/dL (4,5 mmol/L) unterschätzt Friedewald das LDL systematisch. Dann ist eine direkte LDL-Messung im Labor empfohlen.' },
        },
        {
          '@type': 'Question',
          name: 'Welche LDL-Werte gelten als optimal?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nach NCEP ATP III gilt: < 100 mg/dL optimal, 100–129 fast optimal, 130–159 grenzwertig, 160–189 hoch, ≥ 190 sehr hoch.' },
        },
        {
          '@type': 'Question',
          name: 'Muss ich für den Test nüchtern sein?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja — 9 bis 12 Stunden nüchtern. Triglyceride steigen nach einer Mahlzeit deutlich, was die Friedewald-Schätzung verfälscht.' },
        },
        {
          '@type': 'Question',
          name: 'Was tun bei erhöhtem LDL?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ballaststoffe, weniger gesättigte Fette und Transfette, mehr Bewegung, Gewichtsreduktion. Bei LDL ≥ 190 mg/dL oder zusätzlichen Risikofaktoren ggf. Statintherapie.' },
        },
        {
          '@type': 'Question',
          name: 'Gibt es bessere Formeln als Friedewald?',
          acceptedAnswer: { '@type': 'Answer', text: 'Für Triglyceride über 400 mg/dL oder niedrige LDL-Werte schätzen die Sampson-Formel (2020) und Martin-Hopkins-Formel (2013) genauer. Im Routinelabor bleibt Friedewald aber Standard.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">LDL-Cholesterin (Friedewald) berechnen: Formel, Grenzen, Werte</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">29. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Auf den meisten Lipidprofilen taucht das LDL-Cholesterin als errechneter Wert auf — geschätzt nach einer Formel von 1972. Die <strong>Friedewald-Formel</strong> ist bis heute der Standard, hat aber eine klare Achillesferse: hohe Triglyceride.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel zeigt die Formel in beiden Einheiten, ordnet die Ergebnisse nach ATP III ein und erklärt, wann eine direkte LDL-Messung sinnvoller ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel — zwei Varianten</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          LDL = Gesamt − HDL − Triglyceride / 5  (mg/dL)
        </div>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          LDL = Gesamt − HDL − Triglyceride / 2,2  (mmol/L)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hintergrund: Triglyceride / 5 (bzw. /2,2 in mmol/L) schätzt das VLDL-Cholesterin. Was nach Abzug von HDL und VLDL bleibt, ist das LDL.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Gesamt 200, HDL 50, Triglyceride 150 → LDL = 200 − 50 − 30 = <strong>120 mg/dL</strong>. Das liegt im Bereich „fast optimal".
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">ATP-III-Bänder auf einen Blick</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">LDL-Einordnung (NCEP ATP III)</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&lt; 100 mg/dL</span>
              <span class="text-emerald-600 font-medium">Optimal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">100 – 129 mg/dL</span>
              <span class="text-lime-600 font-medium">Fast optimal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">130 – 159 mg/dL</span>
              <span class="text-amber-600 font-medium">Grenzwertig</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">160 – 189 mg/dL</span>
              <span class="text-orange-600 font-medium">Hoch</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">≥ 190 mg/dL</span>
              <span class="text-red-500 font-medium">Sehr hoch</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die ATP-III-Schwellen stammen aus den USA und sind in mg/dL definiert. Internationale Leitlinien (ESC) verwenden teilweise andere Zielwerte je nach Risikostratifizierung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann die Friedewald-Schätzung scheitert</h2>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Hauptgrenze</p>
          <p class="text-sm text-amber-700">Triglyceride ab 400 mg/dL (4,5 mmol/L) → Friedewald unterschätzt LDL. Direkte Messung anfordern.</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Warum? Die Annahme „VLDL = TG/5" gilt nur bei moderaten Triglyceriden. Bei Hypertriglyceridämie (z. B. nach üppigem Essen, bei Diabetes, Pankreatitis-Risiko) verzerren chylomikronenartige Partikel das Verhältnis.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Modernere Schätzer wie <strong>Sampson</strong> (2020) und <strong>Martin-Hopkins</strong> (2013) korrigieren diese Schwäche und sind bei sehr niedrigem LDL oder hohen Triglyceriden zuverlässiger.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was vor dem Test wichtig ist</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">9–12 Stunden vollständig nüchtern (Wasser ist erlaubt)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Kein Alkohol 24 Stunden vor der Blutentnahme</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Keine akute Krankheit oder OP in den letzten 2–6 Wochen</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Ruhig und ausgeschlafen (Stress verschiebt das Lipidprofil)</span></li>
        </ul>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">LDL jetzt schätzen lassen</h3>
        <p class="text-base text-stone-600 mb-6">Gesamtcholesterin, HDL und Triglyceride eingeben — der Rechner liefert Friedewald-LDL und die ATP-III-Einordnung.</p>
        <router-link
          :to="localePath('ldlFriedewald')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum LDL-Friedewald-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bei erhöhtem LDL hilft</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          LDL ist hochgradig veränderbar — über Ernährung, Bewegung und Gewicht. Drei Hebel mit der besten Evidenz:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">1.</span><span class="text-stone-600"><strong>Gesättigte Fette und Transfette reduzieren:</strong> Wenig fettes Fleisch, Wurst, Butter, frittierte Speisen.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">2.</span><span class="text-stone-600"><strong>Mehr lösliche Ballaststoffe:</strong> Hafer, Hülsenfrüchte, Äpfel, Leinsamen binden Cholesterin im Darm.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">3.</span><span class="text-stone-600"><strong>Regelmäßige Bewegung + Gewichtsreduktion:</strong> Senkt LDL und Triglyceride, erhöht HDL.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Ab LDL ≥ 190 mg/dL — oder bei zusätzlichen kardiovaskulären Risiken — wird ärztlich oft eine Statintherapie empfohlen. Lifestyle bleibt die Basis.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          LDL ist nur ein Baustein. Für die Risikoeinordnung lohnt sich zusätzlich das
          <router-link :to="localePath('cholesterolRatio')" class="text-stone-900 underline hover:no-underline">Cholesterin-Verhältnis</router-link>
          (Total/HDL), der
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Herz-Kreislauf-Risiko-Rechner</router-link>
          nach Framingham/SCORE2 und der
          <router-link :to="localePath('strokeRisk')" class="text-stone-900 underline hover:no-underline">Schlaganfall-Risiko-Rechner</router-link>
          bei Vorhofflimmern.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Friedewald-Formel liefert in der überwiegenden Mehrheit der Routinefälle ein verlässliches LDL — aus drei Werten, die jedes Labor ohnehin misst.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Triglyceriden über 400 mg/dL kippt sie. Dann ist die direkte Messung der nächste Schritt. Und unabhängig vom Verfahren gilt: Lebensstil bewegt LDL am stärksten und schnellsten.
        </p>
      </div>
    </div>

    <RelatedArticles slug="ldl-friedewald-berechnen" />
  </article>
</template>
