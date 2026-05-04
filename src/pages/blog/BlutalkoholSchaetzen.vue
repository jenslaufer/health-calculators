<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Blutalkohol schätzen: BAC, Promille und der schnelle Standardgetränk-Rechner | Health Calculators',
  description: 'Blutalkohol (BAC) schnell schätzen mit Standardgetränken und Körpergewicht. Widmark-Formel, US- und DE-Grenzwerte, Abbau pro Stunde — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blutalkohol schätzen: BAC, Promille und der schnelle Standardgetränk-Rechner',
    description: 'Blutalkohol (BAC) schnell schätzen mit Standardgetränken und Körpergewicht. Widmark-Formel, US- und DE-Grenzwerte, Abbau pro Stunde — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/blutalkohol-schaetzen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Blutalkohol schätzen: BAC, Promille und der schnelle Standardgetränk-Rechner</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">4. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie viel Promille hat man nach drei Bier? Reicht das schon für den US-Grenzwert? Und wann darf man wieder Auto fahren? Statt jedes Glas einzeln in Volumen und Vol.-% einzugeben, reicht für eine schnelle Einschätzung die <strong>Standardgetränk-Methode</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, wie der <strong>Blutalkohol-Schätzer</strong> mit der Widmark-Formel arbeitet, was BAC und Promille unterscheidet, und welche Grenzwerte in den USA und Deutschland gelten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist ein Standardgetränk?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein <strong>US-Standardgetränk</strong> enthält genau 14 Gramm reinen Alkohol — unabhängig davon, was im Glas ist. Diese Konvention macht die Rechnung im Kopf möglich.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Getränk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Menge</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alkohol</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Bier</td>
                <td class="px-6 py-3 text-stone-600">350 ml (12 oz)</td>
                <td class="px-6 py-3 text-stone-600">~ 5 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Wein</td>
                <td class="px-6 py-3 text-stone-600">150 ml (5 oz)</td>
                <td class="px-6 py-3 text-stone-600">~ 12 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Spirituose</td>
                <td class="px-6 py-3 text-stone-600">44 ml (1.5 oz)</td>
                <td class="px-6 py-3 text-stone-600">~ 40 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Achtung: ein 0,5-l-Bier sind <strong>~ 1,4 Standardgetränke</strong>, ein großes Glas Wein (250 ml) sind <strong>~ 1,7</strong>. Die UK-Einheit ist mit 8 g kleiner — siehe <router-link :to="localeBlogPath('alkohol-einheiten-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkoholeinheiten</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Schätzformel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Schätzer setzt die Standardgetränke direkt in die <strong>Widmark-Formel</strong> ein:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>BAC (%)</strong> = (Drinks &times; 14 g) / (Gewicht &times; r) &times; 0,1 &minus; 0,015 &times; Stunden</p>
          <p>r = 0,68 (Männer) | r = 0,55 (Frauen)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Reduktionsfaktor <strong>r</strong> spiegelt den Wasseranteil im Körper wider. Frauen haben im Durchschnitt weniger Körperwasser, weshalb derselbe Alkohol einen höheren BAC ergibt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schritt</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Berechnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Eingabe</td>
                <td class="px-6 py-3 text-stone-600">Mann, 80 kg, 4 Drinks, 1 h</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Alkohol (g)</td>
                <td class="px-6 py-3 text-stone-600">4 &times; 14 = 56 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Roher BAC</td>
                <td class="px-6 py-3 text-stone-600">56 / (80 &times; 0,68) &times; 0,1 = 0,103 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Nach 1 h</td>
                <td class="px-6 py-3 text-stone-600">0,103 &minus; 0,015 = <strong>0,088 %</strong> (≈ 0,88 ‰)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Zeit bis nüchtern</td>
                <td class="px-6 py-3 text-stone-600">0,088 / 0,015 = ~ 5,9 Stunden</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BAC vs. Promille</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          BAC in % (USA) und Promille (Deutschland, EU) messen dasselbe — nur in unterschiedlichen Einheiten:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p>0,08 % BAC = 0,8 ‰ &nbsp; | &nbsp; 0,05 % BAC = 0,5 ‰ &nbsp; | &nbsp; 0,02 % BAC = 0,2 ‰</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Faustregel: <strong>BAC &times; 10 = Promille</strong>. Der Rechner zeigt beide Werte parallel an.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzwerte beim Fahren</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Land</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Grenzwert</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Anmerkung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">USA (meiste Bundesstaaten)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0,08 %</td>
                <td class="px-6 py-3 text-stone-600">0,04 % für Berufsfahrer, 0,00 % unter 21</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Deutschland</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0,5 ‰ (0,05 %)</td>
                <td class="px-6 py-3 text-stone-600">0,3 ‰ bei Auffälligkeiten, 0,0 ‰ Fahranfänger</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Schweden, Norwegen</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0,2 ‰</td>
                <td class="px-6 py-3 text-stone-600">Praktisch ein Drink ist schon zu viel</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Österreich, Schweiz</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0,5 ‰</td>
                <td class="px-6 py-3 text-stone-600">Probefahrer 0,1 ‰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Alkoholabbau pro Stunde</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Körper baut Alkohol mit etwa <strong>0,015 % BAC pro Stunde</strong> (~ 0,15 ‰) ab. Diese Rate ist nahezu konstant — Kaffee, kalte Duschen oder Bewegung beschleunigen sie <strong>nicht</strong>. Was hilft, ist nur Zeit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Praktische Konsequenz: nach einer durchzechten Nacht mit BAC 0,15 % beim Schlafengehen ist man morgens nach 8 Stunden Schlaf erst bei <strong>0,03 %</strong> — Restalkohol ist Realität.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Schnell BAC schätzen</h3>
        <p class="text-stone-300 text-sm mb-5">Geschlecht, Gewicht, Drinks, Stunden — fertig. BAC, Promille und Restzeit auf einen Blick.</p>
        <router-link
          :to="localePath('bloodAlcoholEstimator')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos schätzen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ist eine Schätzung ungenau?</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Magenfüllung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Auf nüchternen Magen wird Alkohol schneller resorbiert — der Spitzenwert liegt höher. Eine deftige Mahlzeit kann den Peak um 20–30 % senken.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Medikamente</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Schmerzmittel, Antibiotika und einige Antidepressiva interagieren mit Alkohol und verstärken die Wirkung. Im Zweifel den Beipackzettel prüfen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Genetik & Lebergesundheit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alkoholdehydrogenase-Varianten (besonders bei Menschen ostasiatischer Herkunft) und Lebervorerkrankungen verlangsamen den Abbau deutlich.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Brauchst du eine genaue Eingabe pro Glas (Volumen × Vol.-%)? Nutze den ausführlicheren <router-link :to="localePath('bac')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Promillerechner</router-link>. Für die wöchentliche Konsumübersicht in UK-Einheiten siehe den <router-link :to="localePath('alcoholUnits')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkoholeinheiten-Rechner</router-link>. Und wer wissen will, wie sich Lebensstil-Entscheidungen langfristig auswirken: <router-link :to="localePath('lifeExpectancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lebenserwartung berechnen</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Standardgetränk-Methode liefert in 30 Sekunden eine brauchbare BAC-Schätzung — gut genug, um die Frage „darf ich noch Auto fahren?" mit einem klaren <em>Nein</em> zu beantworten. Im Zweifel: einen Drink weniger, eine Stunde länger warten. Probiere den <router-link :to="localePath('bloodAlcoholEstimator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutalkohol-Schätzer</router-link> für deine persönliche Situation.
        </p>
      </div>

      <RelatedArticles slug="blutalkohol-schaetzen" />
    </div>
  </article>
</template>
