<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'WHtR berechnen: Taille-zu-Größe-Verhältnis & Gesundheitsrisiko | Health Calculators',
  description: 'WHtR berechnen: Taille-zu-Größe-Verhältnis nach Ashwell. Klassifikation, Messanleitung und warum WHtR den BMI als Risikomarker übertrifft.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'WHtR berechnen: Taille-zu-Größe-Verhältnis & Gesundheitsrisiko',
    description: 'WHtR berechnen: Taille-zu-Größe-Verhältnis nach Ashwell. Klassifikation, Messanleitung und warum WHtR den BMI als Risikomarker übertrifft.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/whtr-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">WHtR berechnen: Taille-zu-Größe-Verhältnis &amp; Gesundheitsrisiko</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>Taille-zu-Größe-Verhältnis</strong> (Waist-to-Height Ratio, WHtR) gilt heute in vielen Studien als der einfachste und zugleich aussagekräftigste Marker für viszerales Bauchfett — und damit für das Risiko von Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und metabolischem Syndrom.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Beitrag erfährst du, wie das WHtR berechnet wird, welche Grenzwerte nach Ashwell gelten, wie du richtig misst und warum das WHtR den klassischen <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> in der Risikoeinschätzung übertrifft.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-stone-900">WHtR = Taillenumfang &divide; Körpergröße</p>
          <p class="text-sm text-stone-500 mt-2">beide in derselben Einheit (cm)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Die Faustregel: <strong>Halte deinen Taillenumfang unter der Hälfte deiner Körpergröße.</strong> Bei 175 cm Körpergröße bedeutet das eine Taille unter 87,5 cm. Diese «Half-Waist-Rule» wurde von Margaret Ashwell und Kollegen 2012 in einer großen Meta-Analyse als robustes Screening-Kriterium etabliert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Klassifikation nach Ashwell (2012)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">WHtR (unter 40 J.)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">WHtR (über 50 J.)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Untergewicht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 0,40</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 0,40</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Niedriges Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,40 – 0,49</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,40 – 0,54</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Erhöhtes Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,50 – 0,54</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,55 – 0,59</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Stark erhöht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,55 – 0,59</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,60 – 0,64</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Sehr hohes Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 0,60</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 0,65</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Zwischen 40 und 50 Jahren werden die Grenzen um 0,005 nach oben verschoben.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Beispiel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine 35-jährige Frau hat einen Taillenumfang von 85 cm und eine Körpergröße von 175 cm:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <p class="text-base text-stone-700 tabular-nums">85 cm ÷ 175 cm = <strong class="text-stone-900">0,486</strong></p>
          <p class="text-sm text-stone-500 mt-2">Ergebnis: niedriges Risiko nach Ashwell.</p>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne dein WHtR jetzt</h3>
        <p class="text-stone-300 text-sm mb-5">Ashwell-basierte Risikoeinschätzung — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('whtrRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum WHtR-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Richtig messen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Miss morgens, nüchtern, im Stehen. Das Maßband liegt waagerecht auf Nabelhöhe an, eng anliegend, aber ohne in die Haut einzuschnüren. Atme normal aus und halte dann den Atem für die Messung an. Wiederhole zur Sicherheit zwei Mal und nimm den Mittelwert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Körpergröße misst du barfuß, an der Wand stehend, mit geradem Rücken und Blick nach vorn.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHtR vs. BMI vs. WHR</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> berücksichtigt nur Gewicht und Größe — er unterscheidet nicht zwischen Muskel- und Fettmasse und sagt nichts über die Fettverteilung aus. Das <router-link :to="localeBlogPath('taille-hueft-verhaeltnis-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Taille-Hüft-Verhältnis (WHR)</router-link> erfasst die Fettverteilung, benötigt aber zwei Umfänge.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das WHtR vereint die Vorteile: Es misst die abdominale Fettverteilung mit nur einem zusätzlichen Maß und ist über alle Körpergrößen hinweg anwendbar. In Meta-Analysen schnitt es bei der Vorhersage kardiometabolischer Risiken besser ab als BMI und WHR.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das WHtR ist schnell berechnet, leicht zu messen und gilt als verlässlicher Marker für viszerales Bauchfett. Nutze unseren <router-link :to="localePath('whtrRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHtR-Rechner</router-link> und ergänze ihn mit <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> für ein vollständiges Bild.
        </p>
      </div>

      <RelatedArticles slug="whtr-berechnen" />
    </div>
  </article>
</template>
