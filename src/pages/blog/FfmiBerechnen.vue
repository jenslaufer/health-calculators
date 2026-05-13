<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'FFMI berechnen: Fettfreie-Masse-Index richtig deuten | Health Calculators',
  description: 'FFMI berechnen mit Gewicht, Größe und Körperfett. Normalisierter FFMI nach Kouri, Grenzwerte für natürliche Athleten, BMI-Vergleich und Trainingsempfehlungen.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'FFMI berechnen: Fettfreie-Masse-Index richtig deuten',
    description: 'FFMI berechnen mit Gewicht, Größe und Körperfett. Normalisierter FFMI nach Kouri, Grenzwerte für natürliche Athleten, BMI-Vergleich und Trainingsempfehlungen.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/ffmi-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">FFMI berechnen: Fettfreie-Masse-Index richtig deuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Fettfreie-Masse-Index (FFMI)</strong> ist die ehrlichste Antwort auf die Frage „bin ich muskulös?" Wo der BMI muskulöse Athleten zu Unrecht als „übergewichtig" abstempelt, bezieht der FFMI nur die fettfreie Masse — Muskeln, Knochen, Organe, Wasser — auf die Körpergröße. Das Ergebnis: eine Zahl, die Bodybuilder, Kraftsportler und Hobbyathleten quer durch alle Größenklassen vergleichbar macht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber erklärt die Formel, die Normalisierung nach Kouri und warum der Wert 25 als statistische Obergrenze für natürliches Training gilt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel in drei Schritten</h2>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Fettfreie Masse berechnen:</strong> FFM (kg) = Körpergewicht × (1 − Körperfett% / 100). Beispiel: 80 kg bei 15 % Körperfett ergibt 68 kg FFM.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>FFMI berechnen:</strong> FFMI = FFM / Körpergröße in Metern². Bei 1,80 m: 68 / 3,24 = 20,99.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Auf 1,80 m normalisieren:</strong> normFFMI = FFMI + 6,1 × (1,80 − Größe_in_m). So werden 1,65-m-Athleten und 1,95-m-Athleten direkt vergleichbar.</li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FFMI-Klassifikation für Männer und Frauen</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bereich</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Typische Athleten</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unterdurchschnittlich</td><td class="px-6 py-3 text-stone-600">&lt; 18</td><td class="px-6 py-3 text-stone-600">&lt; 13</td><td class="px-6 py-3 text-stone-600">Untrainiert, schmaler Körperbau</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Durchschnittlich</td><td class="px-6 py-3 text-stone-600">18–20</td><td class="px-6 py-3 text-stone-600">13–15</td><td class="px-6 py-3 text-stone-600">Untrainierter Normalbereich</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Überdurchschnittlich</td><td class="px-6 py-3 text-stone-600">20–25</td><td class="px-6 py-3 text-stone-600">15–19</td><td class="px-6 py-3 text-stone-600">Hobby- und Wettkampfsportler</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Top 1 %</td><td class="px-6 py-3 text-stone-600">25–28</td><td class="px-6 py-3 text-stone-600">19–22</td><td class="px-6 py-3 text-stone-600">Natürliche Spitzenathleten</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Physiologisch unwahrscheinlich</td><td class="px-6 py-3 text-stone-600">&gt; 28</td><td class="px-6 py-3 text-stone-600">&gt; 22</td><td class="px-6 py-3 text-stone-600">Statistisch nur mit Anabolika</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Quelle:</strong> Kouri EM, Pope HG Jr, Katz DL, Oliva P. „Fat-free mass index in users and nonusers of anabolic-androgenic steroids." Clin J Sport Med 1995. Die Studie untersuchte 157 Natural-Bodybuilder und 83 Steroidnutzer — der höchste natürliche FFMI lag bei 25,0.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt FFMI berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gewicht, Größe, Körperfett — sofort siehst du deinen FFMI, den normalisierten Wert und die Einordnung gegen natürliche Athleten.</p>
        <router-link
          :to="localePath('ffmiRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FFMI vs. BMI — der zentrale Unterschied</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> macht keinen Unterschied zwischen Fett- und Muskelmasse. Ein Bodybuilder mit 100 kg bei 1,85 m hat BMI 29,2 — formal „übergewichtig", obwohl er möglicherweise unter 10 % Körperfett trägt. Der FFMI löst das, indem er die Fettmasse rausrechnet. Wer wirklich wissen will, wie er körperlich dasteht, kombiniert <router-link :to="localeBlogPath('koerperfett-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> und <router-link :to="localeBlogPath('magermasse-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Magermasse</router-link> zum FFMI.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie genau muss die Körperfettmessung sein?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Sehr genau. Ein Fehler von 3 Prozentpunkten Körperfett verschiebt den FFMI um rund 0,6 Punkte — genug, um in eine andere Kategorie zu rutschen. Die Methoden im Vergleich:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>DEXA-Scan:</strong> Goldstandard, Genauigkeit ±1–2 %. In deutschen Sportkliniken und Radiologie-Praxen ab etwa 100 €.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Hydrostatic Weighing:</strong> Klassischer Goldstandard, Unterwasserwiegung, ±1–2 % — selten verfügbar.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Caliper (Hautfaltenmessung):</strong> 3- oder 7-Punkte-Methode, ±3–5 %, stark vom Tester abhängig.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bioimpedanz-Waagen:</strong> ±3–8 %, schwanken mit Hydratation und Mahlzeiten. Immer gleiche Tageszeit messen.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FFMI im Trainingsplan einsetzen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der FFMI ist ein <strong>Trend-Marker</strong> — er zeigt über Monate und Jahre, ob das Training Muskelmasse generiert. Für Hypertrophie sind drei Hebel entscheidend: progressive Überlastung (mehr Gewicht oder mehr Wiederholungen), 1,6–2,2 g Protein pro kg Körpergewicht und ein moderater Kalorienüberschuss. Wer den <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienbedarf</router-link> kennt, kann gezielt 200–500 kcal darüber essen — genug für Muskelwachstum, ohne dass die Fettmasse explodiert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Realistische Erwartung: Anfänger steigern den FFMI im ersten Jahr um 1,5–2,5 Punkte. Fortgeschrittene um 0,3–0,8 Punkte pro Jahr. Wer von FFMI 21 auf 24 will, sollte mindestens drei Jahre einplanen — und je näher man an 25 kommt, desto härter wird jedes zusätzliche Kilo Muskel.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der FFMI ist nur eine Kennzahl im Körperkomposition-Puzzle. Wer ihn berechnet hat, ergänzt sinnvoll mit dem
          <router-link :to="localeBlogPath('magermasse-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Magermasse-Rechner</router-link>
          (alternative Schätzformel, falls keine Körperfettmessung vorliegt), dem
          <router-link :to="localeBlogPath('koerperfett-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfett-Rechner</router-link>
          (U.S. Navy-Methode aus Umfangsmaßen), dem klassischen
          <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link>
          als Kontrast und dem
          <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienbedarf-Rechner</router-link>,
          um den passenden Energieumsatz für deinen Muskelaufbau zu finden.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der FFMI ist die beste Einzelzahl, um Muskelmasse über die Zeit zu tracken — fairer als BMI, anschaulicher als reine Gewichtsangaben. Mit unserem
          <router-link :to="localePath('ffmiRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">FFMI-Rechner</router-link>
          dauert die Auswertung 30 Sekunden. Wichtig: Die Aussagekraft hängt an der Körperfettmessung — DEXA oder gut geführter Caliper sind Pflicht, wenn der Wert mehr als grobe Orientierung sein soll.
        </p>
      </div>

      <RelatedArticles slug="ffmi-berechnen" />
    </div>
  </article>
</template>
