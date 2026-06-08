<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Wilks-Koeffizient berechnen: Formel, IPF 2020, Stärke-Bänder | Health Calculators',
  description: 'Wilks-Score aus Powerlifting-Total, Körpergewicht und Geschlecht nach IPF 2020 berechnen. Polynom-Formel, Bänder von Untrainiert bis Elite, Wilks vs. DOTS vs. GL-Points.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Wilks-Koeffizient berechnen: Formel, IPF 2020, Stärke-Bänder',
      description: 'Wilks-Formel nach IPF 2020, fünf Stärke-Bänder und der Vergleich zu DOTS und GL-Points.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-07',
      dateModified: '2026-06-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/wilks-koeffizient-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der Wilks-Koeffizient?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ein Multiplikator, der das Powerlifting-Total (Kniebeuge + Bankdrücken + Kreuzheben) so normalisiert, dass Athleten unterschiedlicher Gewichtsklassen und Geschlechter vergleichbar werden. Der resultierende Wilks-Score entscheidet im Wettkampf gewichtsklassenübergreifend.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist neu an Wilks 2020 (IPF)?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die IPF hat die Koeffizienten 2020 mit aktuellen Weltrekord-Daten neu angepasst. Schwerere Heber werden etwas stärker belohnt, während die Gesamtskala ähnlich bleibt. Dieser Rechner verwendet die IPF 2020-Konstanten.' },
        },
        {
          '@type': 'Question',
          name: 'Wie lautet die Wilks-Formel?',
          acceptedAnswer: { '@type': 'Answer', text: 'Score = Total_kg × 600 / (A + B·KG + C·KG² + D·KG³ + E·KG⁴). Die Konstanten A–E unterscheiden sich für Männer und Frauen. Das Polynom wird beim Körpergewicht in kg ausgewertet und mit dem Total multipliziert.' },
        },
        {
          '@type': 'Question',
          name: 'Welcher Wilks-Score ist gut?',
          acceptedAnswer: { '@type': 'Answer', text: 'Übliche Bänder: < 100 untrainiert, 100–199 Anfänger, 200–299 fortgeschritten, 300–399 erfahren, ≥ 400 Elite. Wettkampfheber auf Landesniveau erreichen meist 350–450; Weltklasse-Männer 500+.' },
        },
        {
          '@type': 'Question',
          name: 'Wilks oder DOTS oder GL-Points?',
          acceptedAnswer: { '@type': 'Answer', text: 'Alle drei normalisieren über das Körpergewicht. Wilks 2020 ist das aktuelle offizielle Scoring der IPF für raw classic. DOTS und GL-Points sind Alternativen. Die Reihenfolge der Heber ändert sich zwischen den Systemen meist nur geringfügig.' },
        },
        {
          '@type': 'Question',
          name: 'Kann ich Pfund (lb) eingeben?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja — im Rechner einfach auf Imperial wechseln. Intern wird mit 1 lb = 0,45359237 kg umgerechnet, das Polynom in kg ausgewertet. Der Wilks-Score ist identisch.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Wilks-Koeffizient berechnen: Formel, IPF 2020, Stärke-Bänder</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Juni 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wer im Wettkampf den 60-kg-Heber gegen den 120-kg-Heber stellen will, braucht eine Norm. Ohne sie gewinnt immer der Schwerere. Der <strong>Wilks-Koeffizient</strong> ist seit 1994 diese Norm — und seit 2020 in der IPF-Variante das offizielle Bewertungssystem für klassisches Powerlifting.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Vier Eingaben (Total, Körpergewicht, Geschlecht, Einheit), ein Polynom, ein Score. Dieser Guide zeigt, wie die Formel funktioniert, was die fünf Stärke-Bänder bedeuten und wann sich der Blick auf DOTS oder GL-Points lohnt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          Score = 600 × Total ÷ (A + B·KG + C·KG² + D·KG³ + E·KG⁴)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          KG ist das Körpergewicht in Kilogramm, Total die Summe der besten Versuche in Kniebeuge, Bankdrücken und Kreuzheben — ebenfalls in Kilogramm. Die fünf Konstanten A–E unterscheiden sich für Männer und Frauen. Die IPF veröffentlicht sie jährlich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: 83-kg-Heber, Total 600 kg (Männer, IPF 2020). Polynom-Nenner ≈ 796 → Score ≈ <strong>452</strong>. Damit liegt der Heber im Elite-Band — Welt-Top-Niveau in seiner Klasse.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die fünf Stärke-Bänder</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Wilks-Score-Bereiche</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&lt; 100</span>
              <span class="text-stone-600 font-medium">Untrainiert</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">100 – 199</span>
              <span class="text-amber-600 font-medium">Anfänger</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">200 – 299</span>
              <span class="text-emerald-600 font-medium">Fortgeschritten</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">300 – 399</span>
              <span class="text-blue-600 font-medium">Erfahren</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">&ge; 400</span>
              <span class="text-purple-600 font-medium">Elite</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Bänder gelten für beide Geschlechter, weil Wilks bereits für Sex korrigiert. Ein 350er-Score einer Frau ist also genauso „erfahren" wie ein 350er-Score eines Mannes.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wilks 1994 vs. IPF 2020</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Robert Wilks veröffentlichte die ursprüngliche Formel 1994 — gefittet an die damaligen Weltrekorde. Über die Jahre wuchsen die Totals (vor allem bei Frauen und im Superschwergewicht) deutlich, und die Koeffizienten passten nicht mehr. Das IPF-Komitee fittet 2020 das Polynom neu.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Praktisch heißt das: Heber in den oberen Gewichtsklassen kommen mit Wilks-2020 etwas höher raus als mit Wilks-1994, der Mittelbereich bleibt fast unverändert. Wer ältere Wilks-Vergleiche liest, sollte deshalb darauf achten, welche Version verwendet wurde.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Wilks-Score jetzt berechnen</h3>
        <p class="text-base text-stone-600 mb-6">Total, Körpergewicht, Geschlecht und Einheit eingeben — der Rechner gibt den IPF-2020-Score plus Stärke-Band aus.</p>
        <router-link
          :to="localePath('wilksCoefficient')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Wilks-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was Wilks <em>nicht</em> abdeckt</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Equipment:</strong> Single-Ply und Multi-Ply geben zusätzliche Kilos. Wilks ist für raw classic gedacht.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Alter:</strong> Junior- und Masters-Hebersklassen bekommen separate altersadjustierte Faktoren (McCulloch / Foster).</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Trainingsalter:</strong> Ein 200er-Score nach 6 Monaten ist beeindruckend, nach 10 Jahren bescheiden — die Zahl sagt nichts darüber.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Einzeldisziplinen:</strong> Wer nur Bankdrücken macht, sollte spezifische Scores wie den IPF-Bench-Coefficient nutzen.</span></li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wilks, DOTS oder GL-Points?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Es gibt drei verbreitete Scoring-Systeme im Kraftsport:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Wilks 2020 (IPF):</strong> aktuelles offizielles IPF-Scoring für raw classic.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>DOTS:</strong> ähnliche Polynom-Form, oft in USAPL und nordamerikanischen Verbänden genutzt.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>GL-Points (Goodlift):</strong> die neuere IPF-Bewertung für equipped lifting.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Für die meisten Heber liefern alle drei sehr ähnliche Rankings. Unterschiede zeigen sich erst in den extremen Gewichtsklassen oder bei equipped vs. raw.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wer den Wilks-Score steigern will, arbeitet an Maximalkraft. Sinnvoll ergänzend: der
          <router-link :to="localePath('oneRepMax')" class="text-stone-900 underline hover:no-underline">One-Rep-Max-Rechner</router-link>
          schätzt das echte 1RM aus Multi-Rep-Sätzen — die Grundlage fürs Programmieren von Squat, Bench und Deadlift. Der
          <router-link :to="localePath('leanBodyMass')" class="text-stone-900 underline hover:no-underline">Magermasse-Rechner</router-link>
          gibt die Fettfreie Masse aus — Wilks pro Magermasse ist oft aussagekräftiger als der reine Wilks-Score. Wer das Körpergewicht für eine neue Wettkampfklasse plant, kann den
          <router-link :to="localePath('bmi')" class="text-stone-900 underline hover:no-underline">BMI-Rechner</router-link>
          und den
          <router-link :to="localePath('bodyFat')" class="text-stone-900 underline hover:no-underline">Körperfett-Rechner</router-link>
          zur groben Verlaufskontrolle nutzen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Wilks-Koeffizient ist die schnellste Antwort auf „Wer hebt relativ am stärksten?". Ein Polynom, fünf Konstanten, ein Score — und Heber jeder Gewichtsklasse stehen vergleichbar nebeneinander.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das IPF 2020-Update ist die Version, die heute zählt. 400+ ist Elite, 300+ ein erfahrener Wettkampfheber. Den Score regelmäßig zu tracken zeigt langfristige Fortschritte, die im wöchentlichen Trainingsplan oft untergehen.
        </p>
      </div>
    </div>

    <RelatedArticles slug="wilks-koeffizient-berechnen" />
  </article>
</template>
