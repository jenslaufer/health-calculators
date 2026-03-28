<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'BMI berechnen: Was der Body Mass Index wirklich aussagt | Health Calculators',
  description: 'BMI berechnen mit Formel, WHO-Tabelle & Interpretation. Erfahre die Grenzen des BMI und welche Alternativen es gibt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BMI berechnen: Was der Body Mass Index wirklich aussagt',
    description: 'BMI berechnen mit Formel, WHO-Tabelle & Interpretation. Erfahre die Grenzen des BMI und welche Alternativen es gibt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/bmi-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">BMI berechnen: Was der Body Mass Index wirklich aussagt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Body Mass Index (BMI)</strong> ist die weltweit am häufigsten verwendete Kennzahl zur Einschätzung des Körpergewichts. Ob beim Arztbesuch, in der Ernährungsberatung oder im Fitness-Studio — überall wird der BMI herangezogen. Doch was sagt er wirklich aus? Und wo liegen seine Grenzen?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen <strong>BMI berechnen</strong> kannst, was die WHO-Klassifikation bedeutet, und warum der BMI allein nicht ausreicht, um deine Gesundheit zu beurteilen.
        </p>
      </div>

      <!-- Was ist der BMI? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der BMI?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Body Mass Index wurde 1832 vom belgischen Mathematiker <strong>Adolphe Quetelet</strong> entwickelt. Ursprünglich als statistisches Werkzeug für Bevölkerungsstudien gedacht, wurde er in den 1970er Jahren von Ernährungswissenschaftlern als einfache Methode zur Gewichtsklassifikation übernommen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die BMI-Formel lautet:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">BMI = Körpergewicht (kg) &divide; Körpergröße (m)&sup2;</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Beispiel:</strong> Eine Person mit 75 kg Gewicht und 1,75 m Größe hat einen BMI von 75 &divide; (1,75 &times; 1,75) = <strong>24,5</strong>.
        </p>
      </div>

      <!-- BMI Tabelle -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI Tabelle: WHO-Klassifikation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Weltgesundheitsorganisation (WHO) teilt den BMI in folgende Kategorien ein:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">BMI</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gesundheitsrisiko</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 mr-2"></span>Untergewicht
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 18,5</td>
                <td class="px-6 py-3 text-stone-500">Erhöht</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Normalgewicht
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">18,5 – 24,9</td>
                <td class="px-6 py-3 text-stone-500">Gering</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Übergewicht (Präadipositas)
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25,0 – 29,9</td>
                <td class="px-6 py-3 text-stone-500">Leicht erhöht</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Adipositas Grad I
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30,0 – 34,9</td>
                <td class="px-6 py-3 text-stone-500">Erhöht</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-400 mr-2"></span>Adipositas Grad II
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">35,0 – 39,9</td>
                <td class="px-6 py-3 text-stone-500">Hoch</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-600 mr-2"></span>Adipositas Grad III
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 40,0</td>
                <td class="px-6 py-3 text-stone-500">Sehr hoch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BMI berechnen Schritt für Schritt -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI berechnen: Schritt für Schritt</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Gewicht in Kilogramm notieren.</strong> Wiege dich morgens nüchtern für das genaueste Ergebnis.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Körpergröße in Metern messen.</strong> Beispiel: 175 cm = 1,75 m.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Größe quadrieren.</strong> 1,75 &times; 1,75 = 3,0625.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Gewicht durch das Ergebnis teilen.</strong> 75 &divide; 3,0625 = 24,5.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt kostenlos deinen BMI berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sofortergebnis mit Kategorie-Einordnung — ohne Anmeldung.</p>
        <router-link
          :to="localePath('bmi')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- Grenzen des BMI -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzen des BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Trotz seiner Verbreitung hat der BMI erhebliche Einschränkungen:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Muskelmasse wird nicht berücksichtigt</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Muskulöse Sportler haben oft einen BMI im Bereich „Übergewicht", obwohl ihr Körperfettanteil sehr niedrig ist. Ein Bodybuilder mit 100 kg bei 1,80 m hat einen BMI von 30,9 — laut Tabelle „adipös".
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Alter und Geschlecht fehlen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der BMI unterscheidet nicht zwischen Männern und Frauen, obwohl Frauen von Natur aus einen höheren Körperfettanteil haben. Auch das Alter spielt keine Rolle — ältere Menschen haben typischerweise einen höheren Fettanteil bei gleichem BMI.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Fettverteilung bleibt unsichtbar</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Bauchfett (viszerales Fett) ist deutlich gefährlicher als Fett an Hüften und Oberschenkeln. Der BMI sagt nichts darüber aus, <em>wo</em> das Fett sitzt — ein entscheidender Faktor für das Gesundheitsrisiko.
            </p>
          </div>
        </div>
      </div>

      <!-- Bessere Alternativen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bessere Alternativen zum BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für eine genauere Einschätzung deiner Körperzusammensetzung und Gesundheit gibt es bessere Kennzahlen:
        </p>
        <div class="space-y-4">
          <router-link :to="localePath('bodyFat')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Körperfettanteil berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der Körperfettanteil unterscheidet zwischen Fett- und Muskelmasse. Ein Mann mit 15 % und eine Frau mit 25 % Körperfett gelten als gesund — unabhängig vom BMI.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Body Fat Calculator &rarr;</span>
          </router-link>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Taille-Hüft-Verhältnis (WHR)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das Taille-Hüft-Verhältnis berücksichtigt die Fettverteilung. Ein WHR über 0,90 bei Männern und über 0,85 bei Frauen deutet auf ein erhöhtes Gesundheitsrisiko hin.
            </p>
          </div>
          <router-link :to="localePath('tdee')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">TDEE — Täglicher Energieverbrauch</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der TDEE zeigt dir, wie viele Kalorien dein Körper täglich verbrennt. In Kombination mit dem BMI hilft er, ein realistisches Bild deiner Gesundheit zu zeichnen.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">TDEE Calculator &rarr;</span>
          </router-link>
          <router-link :to="localePath('idealWeight')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Idealgewicht berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Statt nur den BMI zu betrachten, berechnet der Idealgewicht-Rechner basierend auf mehreren Formeln einen gesunden Gewichtsbereich für deine Größe.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Ideal Weight Calculator &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der BMI ist ein nützlicher erster Anhaltspunkt, aber kein vollständiges Bild deiner Gesundheit. Er eignet sich gut für eine schnelle Einordnung, sollte aber immer zusammen mit anderen Kennzahlen betrachtet werden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Nutze unseren <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link> als Ausgangspunkt und ergänze das Ergebnis mit dem <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> und deinem <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Energieverbrauch</router-link> für ein umfassendes Bild.
        </p>
      </div>

      <RelatedArticles slug="bmi-berechnen" />
    </div>
  </article>
</template>
