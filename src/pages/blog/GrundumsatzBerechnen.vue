<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Grundumsatz berechnen: BMR mit zwei Formeln ermitteln | Health Calculators',
  description: 'Grundumsatz (BMR) berechnen mit der Mifflin-St Jeor- und Harris-Benedict-Formel. Aktivitätsfaktoren, Einflussfaktoren und praktische Tipps.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Grundumsatz berechnen: BMR mit zwei Formeln ermitteln',
    description: 'Grundumsatz (BMR) berechnen mit der Mifflin-St Jeor- und Harris-Benedict-Formel. Aktivitätsfaktoren, Einflussfaktoren und praktische Tipps.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-30',
    dateModified: '2026-03-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/grundumsatz-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Grundumsatz berechnen: BMR mit zwei Formeln ermitteln</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">30. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein <strong>Grundumsatz (BMR — Basal Metabolic Rate)</strong> ist die Energiemenge, die dein Körper im absoluten Ruhezustand verbrennt — allein für Atmung, Herzschlag, Gehirnaktivität und Zellregeneration.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Grundumsatz macht etwa <strong>60–75 %</strong> deines gesamten täglichen Kalorienverbrauchs aus. Ihn zu kennen ist der erste Schritt, um deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> zu berechnen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der Grundumsatz?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Grundumsatz beschreibt die Kalorien, die dein Körper bei völliger Ruhe benötigt — 24 Stunden lang, nüchtern, bei neutraler Temperatur. Er hängt ab von:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Körpergewicht</strong> — mehr Masse bedeutet höheren Energiebedarf</li>
          <li><strong>Körpergröße</strong> — größere Oberfläche erfordert mehr Energie</li>
          <li><strong>Alter</strong> — der Grundumsatz sinkt mit zunehmendem Alter</li>
          <li><strong>Geschlecht</strong> — Männer haben im Durchschnitt einen höheren Grundumsatz</li>
          <li><strong>Muskelmasse</strong> — Muskeln verbrennen mehr Energie als Fett</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Mifflin-St Jeor-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Mifflin-St Jeor-Formel (1990) gilt als die genaueste Methode zur Berechnung des Grundumsatzes. Sie wird von der Academy of Nutrition and Dietetics empfohlen:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Männer: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Frauen: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter &minus; 161</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Beispiel:</strong> Ein 30-jähriger Mann, 180 cm, 80 kg: 10 &times; 80 + 6,25 &times; 180 &minus; 5 &times; 30 + 5 = <strong>1.780 kcal/Tag</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Harris-Benedict-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Harris-Benedict-Formel wurde 1919 entwickelt und 1984 von Roza & Shizgal revidiert. Sie liefert etwas höhere Werte als Mifflin-St Jeor:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Männer: BMR = 13,397 &times; Gewicht(kg) + 4,799 &times; Größe(cm) &minus; 5,677 &times; Alter + 88,362</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Frauen: BMR = 9,247 &times; Gewicht(kg) + 3,098 &times; Größe(cm) &minus; 4,330 &times; Alter + 447,593</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Harris-Benedict-Formel tendiert dazu, den Grundumsatz leicht zu überschätzen — besonders bei übergewichtigen Personen. Für die meisten Menschen ist Mifflin-St Jeor die bessere Wahl.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vom Grundumsatz zum Gesamtverbrauch</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Grundumsatz ist nur ein Teil des Bildes. Um deinen tatsächlichen täglichen Kalorienbedarf zu ermitteln, multiplizierst du den BMR mit einem Aktivitätsfaktor:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivität</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Faktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beispiel (BMR 1.780)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Sitzend</td><td class="px-6 py-3 text-stone-900 font-medium">1,2</td><td class="px-6 py-3 text-stone-900 font-medium">2.136 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Leicht aktiv</td><td class="px-6 py-3 text-stone-900 font-medium">1,375</td><td class="px-6 py-3 text-stone-900 font-medium">2.448 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Moderat aktiv</td><td class="px-6 py-3 text-stone-900 font-medium">1,55</td><td class="px-6 py-3 text-stone-900 font-medium">2.759 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Sehr aktiv</td><td class="px-6 py-3 text-stone-900 font-medium">1,725</td><td class="px-6 py-3 text-stone-900 font-medium">3.070 kcal</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Extrem aktiv</td><td class="px-6 py-3 text-stone-900 font-medium">1,9</td><td class="px-6 py-3 text-stone-900 font-medium">3.382 kcal</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Ergebnis ist dein <strong>TDEE (Total Daily Energy Expenditure)</strong> — die Grundlage für jede Ernährungsplanung. Mehr dazu in unserem <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Ratgeber</router-link>.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Grundumsatz berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor und Harris-Benedict im Vergleich — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('bmr')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was beeinflusst den Grundumsatz?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Neben den Standardfaktoren (Gewicht, Größe, Alter, Geschlecht) spielen weitere Faktoren eine Rolle:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Muskelmasse:</strong> Muskeln verbrennen im Ruhezustand deutlich mehr Kalorien als Fettgewebe. Krafttraining kann deinen Grundumsatz dauerhaft steigern.</li>
          <li><strong>Schilddrüsenfunktion:</strong> Schilddrüsenhormone regulieren den Stoffwechsel. Eine Unter- oder Überfunktion wirkt sich direkt auf den BMR aus.</li>
          <li><strong>Crash-Diäten:</strong> Extreme Kalorienreduktion senkt den Grundumsatz — der Körper passt sich an und verbrennt weniger (metabolische Adaptation).</li>
          <li><strong>Genetik:</strong> Individuelle genetische Unterschiede können den Grundumsatz um 5–10 % variieren lassen.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMR und Ernährungsziele</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Grundumsatz ist die absolute Untergrenze deiner Kalorienzufuhr. Niemals solltest du dauerhaft weniger als deinen BMR essen. Für gesundes Abnehmen empfiehlt sich ein moderates <router-link :to="localeBlogPath('kaloriendefizit-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit</router-link> von 300–500 kcal unter deinem TDEE.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wie du deine Kalorien optimal aufteilst, zeigt dir unser <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoff-Ratgeber</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Grundumsatz ist die Basis jeder Ernährungsberechnung. Berechne deinen <router-link :to="localePath('bmr')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMR mit unserem Rechner</router-link> und nutze das Ergebnis, um deinen <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Gesamtverbrauch</router-link> zu ermitteln.
        </p>
      </div>

      <RelatedArticles slug="grundumsatz-berechnen" />
    </div>
  </article>
</template>
