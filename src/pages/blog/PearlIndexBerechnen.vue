<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Pearl-Index berechnen: Verhütungsmethoden im Vergleich | Health Calculators',
  description: 'Pearl-Index verstehen und berechnen — Formel, perfekte vs. typische Anwendung, Referenzwerte für Pille, Kondom, Spirale, NFP. Quellen: BZgA, Trussell.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pearl-Index berechnen: Verhütungsmethoden im Vergleich',
    description: 'Pearl-Index verstehen und berechnen — Formel, perfekte vs. typische Anwendung, Referenzwerte für Pille, Kondom, Spirale, NFP.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/pearl-index-berechnen',
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
        Pearl-Index berechnen: Verhütungsmethoden im Vergleich
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">11. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed">
          Hinweis: Dieser Artikel dient ausschließlich der Information. Er ist kein Ersatz für eine ärztliche Verhütungsberatung. Sprich für die Wahl der passenden Verhütungsmethode mit deiner Frauenärztin oder deinem Frauenarzt.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Pearl-Index</strong> ist seit fast 100 Jahren die Standardgröße, wenn es um die Sicherheit von Verhütungsmethoden geht. Er sagt: <em>So viele von 100 Frauen werden bei einjähriger Anwendung schwanger.</em>
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Was der Pearl-Index leistet, wo seine Grenzen liegen — und welche Methoden im realen Alltag wirklich sicher sind.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eingeführt 1933 von dem amerikanischen Statistiker Raymond Pearl. Die Berechnung ist denkbar einfach:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900 tabular-nums">
            Pearl-Index = (Schwangerschaften &times; 1200) / (Frauen &times; Monate)
          </p>
          <p class="text-sm text-stone-500 mt-2">
            Der Faktor 1200 = 100 Frauen &times; 12 Monate normiert auf 100 Frauenjahre.
          </p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: 100 Frauen verhüten 12 Monate mit der Pille. 6 werden schwanger. Pearl-Index = (6 &times; 1200) / (100 &times; 12) = <strong>6,0</strong>. Sechs von hundert Anwenderinnen werden in einem Jahr schwanger.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Perfekte vs. typische Anwendung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der wichtigste Punkt beim Pearl-Index: Es gibt fast immer zwei Werte. <strong>Perfekt</strong> meint die Methode unter Idealbedingungen — Pille immer pünktlich, Kondom immer korrekt. <strong>Typisch</strong> meint die reale Welt: vergessene Tabletten, gerissene Kondome, Antibiotika-Wechselwirkungen.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Methode</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Perfekt</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Typisch</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-4 py-2">Hormonimplantat</td><td class="px-4 py-2 text-right tabular-nums">0,05</td><td class="px-4 py-2 text-right tabular-nums">0,05</td></tr>
              <tr><td class="px-4 py-2">Hormonspirale (LNG-IUS)</td><td class="px-4 py-2 text-right tabular-nums">0,2</td><td class="px-4 py-2 text-right tabular-nums">0,2</td></tr>
              <tr><td class="px-4 py-2">Kupferspirale</td><td class="px-4 py-2 text-right tabular-nums">0,6</td><td class="px-4 py-2 text-right tabular-nums">0,8</td></tr>
              <tr><td class="px-4 py-2">Kombinationspille</td><td class="px-4 py-2 text-right tabular-nums">0,3</td><td class="px-4 py-2 text-right tabular-nums">9</td></tr>
              <tr><td class="px-4 py-2">Kondom (männlich)</td><td class="px-4 py-2 text-right tabular-nums">2</td><td class="px-4 py-2 text-right tabular-nums">15</td></tr>
              <tr><td class="px-4 py-2">NFP symptothermal</td><td class="px-4 py-2 text-right tabular-nums">0,4</td><td class="px-4 py-2 text-right tabular-nums">2,3</td></tr>
              <tr><td class="px-4 py-2">Kalendermethode allein</td><td class="px-4 py-2 text-right tabular-nums">5</td><td class="px-4 py-2 text-right tabular-nums">24</td></tr>
              <tr><td class="px-4 py-2">Coitus interruptus</td><td class="px-4 py-2 text-right tabular-nums">4</td><td class="px-4 py-2 text-right tabular-nums">22</td></tr>
              <tr><td class="px-4 py-2">Keine Verhütung</td><td class="px-4 py-2 text-right tabular-nums">85</td><td class="px-4 py-2 text-right tabular-nums">85</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Quellen: BZgA Sichergehen.de, DGGG-Leitlinie Hormonelle Empfängnisverhütung, Trussell 2011, Frank-Herrmann et al. 2007.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was die Zahlen wirklich bedeuten</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PI &lt; 1 — Sehr sicher</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hormonimplantat, Hormonspirale, Kupferspirale, Sterilisation. Diese Long-Acting Reversible Contraceptives (LARC) sind anwendungsfehlerunabhängig.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PI 1–4 — Sicher</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Pille bei perfekter Anwendung, NFP symptothermal nach Sensiplan. Erfordert Disziplin und Lernkurve.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PI 5–9 — Mäßig sicher</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Pille bei typischer Anwendung. Anwendungsfehler werden statistisch sichtbar.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PI 10–24 — Geringe Sicherheit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Kondom typisch, Diaphragma. Geeignet bei Kombination mit anderen Methoden oder akzeptiertem Restrisiko.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">PI &ge; 25 — Unsicher</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Kalendermethode allein, Coitus interruptus. Nicht zur Verhütung empfohlen, wenn Schwangerschaft sicher vermieden werden soll.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzen des Pearl-Index</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Pearl-Index ist nicht perfekt. Drei methodische Probleme:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>Studiendauer verzerrt.</strong> Je länger die Studie, desto niedriger der PI — weil die fertilsten Paare am schnellsten ausscheiden.</li>
          <li><strong>Häufigkeit ignoriert.</strong> Ein Paar mit täglichem Geschlechtsverkehr hat ein höheres Schwangerschaftsrisiko als eines mit wöchentlichem.</li>
          <li><strong>Keine Subgruppen.</strong> Alter, Begleitmedikation, Lebensphase werden nicht differenziert.</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Moderne Studien ergänzen den Pearl-Index zunehmend mit der <strong>Lebenstabellenanalyse</strong>, die Versagensraten kumulativ über die Zeit darstellt.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Pearl-Index jetzt selbst berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Trage Studiendaten ein und vergleiche mit Referenzwerten — kostenlos.</p>
        <router-link
          :to="localePath('pearlIndexRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >
          Jetzt zum Rechner &rarr;
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bedeutet das für dich?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Drei praktische Empfehlungen aus der Datenlage:
        </p>
        <ol class="list-decimal pl-6 space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>Vergleiche typische, nicht perfekte Werte.</strong> Im Alltag zählt, wie sicher eine Methode bei realer Nutzung ist.</li>
          <li><strong>Wer Anwendungsfehler ausschließen will, wählt LARC.</strong> Hormonimplantat, Hormon- oder Kupferspirale halten 3–10 Jahre.</li>
          <li><strong>Hormonfreie Sicherheit gibt es.</strong> Kupferspirale (PI 0,8) und korrekt erlernte symptothermale NFP nach Sensiplan (PI 0,4) sind valide Alternativen.</li>
        </ol>
        <p class="text-base text-stone-600 leading-relaxed">
          Welche Methode für dich passt, hängt von deiner Gesundheit, Vorerkrankungen, Lebensphase und persönlichen Vorlieben ab.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <router-link :to="localePath('ovulation')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Eisprungrechner</p>
            <p class="text-sm text-stone-500">Wann ist der Eisprung?</p>
          </router-link>
          <router-link :to="localePath('period')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Zyklusrechner</p>
            <p class="text-sm text-stone-500">Periode &amp; Zyklusphasen</p>
          </router-link>
          <router-link :to="localePath('fertilityWindow')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Fruchtbares Fenster Rechner</p>
            <p class="text-sm text-stone-500">10-Tage-Fenster mit LH-Anstieg</p>
          </router-link>
          <router-link :to="localePath('pregnancy')" class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-stone-400 transition-colors">
            <p class="text-base font-semibold text-stone-900">Schwangerschafts-Rechner</p>
            <p class="text-sm text-stone-500">Schwangerschaftswoche bestimmen</p>
          </router-link>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Pearl-Index ist die etablierte Sprache der Verhütungssicherheit — wenn man sie richtig liest. Achte auf die typische Anwendung, nicht nur auf die perfekten Studienzahlen. Methoden mit niedrigem Anwendungsfehler-Risiko (LARC) sind im Alltag fast immer sicherer als jene, die tägliche Disziplin verlangen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Hinweis: Dieser Artikel ist kein Ersatz für ärztliche Verhütungsberatung. Welche Methode zu deiner Lebenssituation passt, klärst du am besten mit deiner Frauenärztin oder deinem Frauenarzt.
        </p>
      </div>

      <RelatedArticles slug="pearl-index-berechnen" />
    </div>
  </article>
</template>
