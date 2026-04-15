<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Diabetes-Risiko berechnen: FINDRISC-Score erklärt | Health Calculators',
  description: 'Typ-2-Diabetes-Risiko mit dem FINDRISC-Score berechnen. Wie der Test funktioniert, was die Punkte bedeuten und welche Maßnahmen das Risiko senken.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Diabetes-Risiko berechnen: FINDRISC-Score erklärt',
    description: 'Typ-2-Diabetes-Risiko mit dem FINDRISC-Score berechnen. Wie der Test funktioniert, was die Punkte bedeuten und welche Maßnahmen das Risiko senken.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/diabetes-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Diabetes-Risiko berechnen: FINDRISC-Score erklärt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">15. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Typ-2-Diabetes entwickelt sich schleichend — oft über Jahre, ohne Beschwerden. Der <strong>FINDRISC-Score</strong> (Finnish Diabetes Risk Score) ist ein validiertes Screeninginstrument, das mit 8 einfachen Fragen dein 10-Jahres-Risiko einschätzt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser <router-link :to="localePath('diabetesRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko-Rechner</router-link> berechnet deinen persönlichen FINDRISC-Score und gibt Empfehlungen, wie du dein Risiko senken kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der FINDRISC-Score?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der FINDRISC wurde 2003 von Lindström und Tuomilehto in Finnland entwickelt und in der Zeitschrift <em>Diabetes Care</em> veröffentlicht. Er basiert auf einer Langzeitstudie mit über 4.700 Teilnehmern und ist heute das meistgenutzte Diabetes-Screeningwerkzeug in Europa.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Fragebogen umfasst 8 Fragen ohne Blutabnahme oder ärztliche Untersuchung. Er identifiziert Personen mit erhöhtem Risiko, die von weiterführenden Tests und Präventionsmaßnahmen profitieren.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 8 Risikofaktoren im Detail</h2>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Faktor</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Punkte</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-5 py-3 text-stone-600">Alter unter 45 Jahren</td>
                <td class="px-5 py-3 font-medium tabular-nums">0</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Alter 45–54 Jahre</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Alter 55–64 Jahre</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Alter über 64 Jahre</td>
                <td class="px-5 py-3 font-medium tabular-nums">4</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">BMI 25–30 kg/m²</td>
                <td class="px-5 py-3 font-medium tabular-nums">1</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">BMI über 30 kg/m²</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Taillenumfang erhöht (Männer 94–102 cm / Frauen 80–88 cm)</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Taillenumfang stark erhöht (Männer &gt;102 cm / Frauen &gt;88 cm)</td>
                <td class="px-5 py-3 font-medium tabular-nums">4</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Keine tägliche körperliche Aktivität ≥ 30 min</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Kein tägliches Gemüse/Obst</td>
                <td class="px-5 py-3 font-medium tabular-nums">1</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Blutdruckmedikamente</td>
                <td class="px-5 py-3 font-medium tabular-nums">2</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Erhöhter Blutzucker in der Vergangenheit</td>
                <td class="px-5 py-3 font-medium tabular-nums">5</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Diabetes bei Großelternteil, Tante/Onkel oder Cousin</td>
                <td class="px-5 py-3 font-medium tabular-nums">3</td>
              </tr>
              <tr>
                <td class="px-5 py-3 text-stone-600">Diabetes bei Elternteil, Geschwister oder eigenem Kind</td>
                <td class="px-5 py-3 font-medium tabular-nums">5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Quelle: Lindström J, Tuomilehto J. Diabetes Care. 2003;26(3):725-731.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bedeuten die Punkte?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">Risiko</th>
                <th class="text-left px-5 py-3 font-semibold text-stone-700">10-Jahres-Wahrscheinlichkeit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">0–7</td>
                <td class="px-5 py-3 text-green-700 font-medium">Gering</td>
                <td class="px-5 py-3 text-stone-600">ca. 1 %</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">8–11</td>
                <td class="px-5 py-3 text-lime-700 font-medium">Leicht erhöht</td>
                <td class="px-5 py-3 text-stone-600">ca. 4 %</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">12–14</td>
                <td class="px-5 py-3 text-yellow-700 font-medium">Mäßig</td>
                <td class="px-5 py-3 text-stone-600">ca. 17 %</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">15–20</td>
                <td class="px-5 py-3 text-orange-700 font-medium">Hoch</td>
                <td class="px-5 py-3 text-stone-600">ca. 33 %</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-medium tabular-nums">21–26</td>
                <td class="px-5 py-3 text-red-700 font-medium">Sehr hoch</td>
                <td class="px-5 py-3 text-stone-600">ca. 50 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Taillenumfang so wichtig ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bauchfett — auch viszerales Fett genannt — ist stoffwechselaktiv und fördert Insulinresistenz. Der Taillenumfang ist daher ein stärkerer Prädiktor für Typ-2-Diabetes als der BMI allein.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Grenzwerte:</strong> Für Männer gelten 94 cm als erhöht, 102 cm als stark erhöht. Für Frauen liegen die Grenzwerte bei 80 cm und 88 cm. Der Taillenumfang wird im Stehen auf Höhe der untersten Rippe gemessen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was tun bei erhöhtem Risiko?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei einem FINDRISC-Score ab 12 empfehlen die Leitlinien eine weiterführende Abklärung. Das bedeutet nicht, dass du Diabetes hast — aber es lohnt sich, aktiv zu werden.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Bewegung steigern:</strong>
              <span class="text-stone-600"> Mindestens 150 Minuten moderate Aktivität pro Woche. Studien zeigen eine Risikoreduktion um bis zu 58 % allein durch mehr Bewegung.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Gewicht reduzieren:</strong>
              <span class="text-stone-600"> Schon 5–7 % weniger Körpergewicht verbessern die Insulinsensitivität spürbar.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Ernährung anpassen:</strong>
              <span class="text-stone-600"> Täglich Gemüse und Obst, ballaststoffreiche Vollkornprodukte, weniger Zucker und gesättigte Fettsäuren.</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-stone-400 mt-0.5 font-bold">›</span>
            <div>
              <strong class="text-stone-800">Blutzucker kontrollieren:</strong>
              <span class="text-stone-600"> Beim Arzt Nüchternblutzucker und HbA1c messen lassen. Prädiabetes ist reversibel — wenn man rechtzeitig handelt.</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzen des FINDRISC</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der FINDRISC ist ein Screeninginstrument, kein Diagnosewerkzeug. Er wurde für Typ-2-Diabetes entwickelt — Typ-1-Diabetes oder MODY (monogene Diabetesformen) werden damit nicht erfasst. Personen mit bereits diagnostiziertem Diabetes sollten den Score nicht zur Selbsteinschätzung verwenden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein niedriger Score schließt Diabetes nicht aus. Ein hoher Score bedeutet nicht, dass du Diabetes hast. Beide Fälle erfordern ärztliche Einschätzung bei Unsicherheit.
        </p>
      </div>

      <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <p class="text-sm font-semibold text-stone-700 mb-2">Verwandte Rechner</p>
        <ul class="space-y-1">
          <li>
            <router-link :to="localePath('hba1c')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">HbA1c-Konverter</router-link>
            — Langzeit-Blutzucker in mmol/mol und % umrechnen
          </li>
          <li>
            <router-link :to="localePath('bloodSugar')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">Blutzucker-Umrechner</router-link>
            — mg/dL und mmol/L verstehen und vergleichen
          </li>
          <li>
            <router-link :to="localePath('bmi')" class="text-sm text-stone-600 hover:text-stone-900 underline underline-offset-2">BMI-Rechner</router-link>
            — Body Mass Index berechnen und einordnen
          </li>
        </ul>
      </div>

    </div>

    <RelatedArticles slug="diabetes-risiko-berechnen" />
  </article>
</template>
