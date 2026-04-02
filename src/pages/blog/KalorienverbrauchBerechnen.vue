<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kalorienverbrauch berechnen: So viele Kalorien verbrennst du wirklich | Health Calculators',
  description: 'Kalorienverbrauch berechnen mit MET-Werten. Formel, Aktivitätstabelle, Einflussfaktoren und Tipps zur Steigerung.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kalorienverbrauch berechnen: So viele Kalorien verbrennst du wirklich',
    description: 'Kalorienverbrauch berechnen mit MET-Werten. Formel, Aktivitätstabelle, Einflussfaktoren und Tipps zur Steigerung.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/kalorienverbrauch-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kalorienverbrauch berechnen: So viele Kalorien verbrennst du wirklich</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Wie viele Kalorien verbrennst du beim Laufen, Schwimmen oder Radfahren?</strong> Der Kalorienverbrauch hängt von der Aktivität, deinem Gewicht und der Dauer ab. Die wissenschaftlich fundierteste Methode zur Berechnung nutzt MET-Werte aus dem Compendium of Physical Activities.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die Formel funktioniert, welche Aktivitäten die meisten Kalorien verbrennen und wie du deinen Verbrauch gezielt steigern kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sind MET-Werte?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MET steht für Metabolisches Äquivalent. Ein MET entspricht dem Energieverbrauch im Ruhezustand — etwa 1 kcal pro Kilogramm Körpergewicht pro Stunde. Eine Aktivität mit 5 MET verbraucht also fünfmal so viel Energie wie Ruhen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Compendium of Physical Activities der Arizona State University katalogisiert über 800 Aktivitäten mit ihren MET-Werten. Diese Werte basieren auf Laborstudien und sind der Goldstandard für die Berechnung des Kalorienverbrauchs.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-lg font-semibold text-stone-900 text-center">Kalorien = MET &times; Gewicht (kg) &times; Dauer (Stunden)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> 30 Minuten Laufen bei 10 km/h (MET 9,8) mit 80 kg Körpergewicht:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">9,8 &times; 80 &times; 0,5 = <strong>392 kcal</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Formel liefert eine gute Schätzung. Der tatsächliche Verbrauch variiert je nach Fitness, Temperatur und individueller Stoffwechselrate.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Kalorienverbrauch nach Aktivität</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt den geschätzten Kalorienverbrauch pro 30 Minuten für eine 80 kg schwere Person:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivität</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">MET</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">kcal / 30 min</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Gehen (moderat)</td><td class="px-6 py-3 text-stone-900 font-medium">3,5</td><td class="px-6 py-3 text-stone-900 font-medium">140</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Radfahren (moderat)</td><td class="px-6 py-3 text-stone-900 font-medium">6,8</td><td class="px-6 py-3 text-stone-900 font-medium">272</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Schwimmen (moderat)</td><td class="px-6 py-3 text-stone-900 font-medium">7,0</td><td class="px-6 py-3 text-stone-900 font-medium">280</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Laufen (10 km/h)</td><td class="px-6 py-3 text-stone-900 font-medium">9,8</td><td class="px-6 py-3 text-stone-900 font-medium">392</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">HIIT</td><td class="px-6 py-3 text-stone-900 font-medium">8,0</td><td class="px-6 py-3 text-stone-900 font-medium">320</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Yoga</td><td class="px-6 py-3 text-stone-900 font-medium">2,5</td><td class="px-6 py-3 text-stone-900 font-medium">100</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Treppensteigen</td><td class="px-6 py-3 text-stone-900 font-medium">8,8</td><td class="px-6 py-3 text-stone-900 font-medium">352</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Einflussfaktoren auf den Kalorienverbrauch</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Körpergewicht</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Schwerere Personen verbrennen mehr Kalorien bei gleicher Aktivität. Ein 100-kg-Läufer verbraucht bei 10 km/h rund 490 kcal in 30 Minuten — 25 % mehr als eine 80-kg-Person.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Intensität</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Höhere Intensität bedeutet höheren MET-Wert und mehr verbrannte Kalorien. Intervalltraining (HIIT) kann in kürzerer Zeit mehr Kalorien verbrennen als gleichmäßiges Training.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Dauer</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der Kalorienverbrauch steigt linear mit der Dauer. 60 Minuten Laufen verbrennt doppelt so viel wie 30 Minuten — bei gleicher Intensität.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nachbrenneffekt (EPOC)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Nach intensivem Training verbrennt dein Körper weiterhin Kalorien, um sich zu regenerieren. Dieser Excess Post-exercise Oxygen Consumption (EPOC) kann 6–15 % des Trainingsverbrauchs ausmachen.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Kalorienverbrauch berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Über 30 Aktivitäten — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('caloriesBurned')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Kalorienverbrauch und Abnehmen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Um ein Kilogramm Körperfett abzubauen, brauchst du ein Kaloriendefizit von etwa 7.700 kcal. Wer dreimal pro Woche 30 Minuten läuft (392 kcal), verbrennt rund 1.176 kcal pro Woche — das entspricht etwa 0,15 kg Fett.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Kombiniere Sport mit einem moderaten <router-link :to="localeBlogPath('kaloriendefizit-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit</router-link> für nachhaltige Ergebnisse. Berechne dazu deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tipps zur Steigerung des Kalorienverbrauchs</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>1. Intervalltraining einbauen:</strong> Wechsel zwischen hoher und niedriger Intensität verbrennt mehr Kalorien und steigert den Nachbrenneffekt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>2. Ganzkörperübungen wählen:</strong> Schwimmen, Rudern und Burpees aktivieren mehr Muskelgruppen und erhöhen den Energieverbrauch.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>3. Alltagsaktivität steigern:</strong> Treppensteigen (8,8 MET) statt Aufzug, Fahrrad statt Auto. Diese NEAT-Kalorien (Non-Exercise Activity Thermogenesis) summieren sich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4. Muskelmasse aufbauen:</strong> Muskeln verbrennen auch im Ruhezustand mehr Kalorien als Fettgewebe. Krafttraining steigert deinen <router-link :to="localeBlogPath('grundumsatz-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Grundumsatz</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzen der MET-Methode</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          MET-Werte sind Durchschnittswerte aus Laborstudien. Individuelle Faktoren wie Fitnesslevel, Körperzusammensetzung, Temperatur und Gelände beeinflussen den tatsächlichen Verbrauch. Pulsmesser und Fitnesstracker können genauere Werte liefern. Die MET-Methode bleibt dennoch die beste verfügbare Schätzung ohne spezielle Geräte.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein Kalorienverbrauch hängt von Aktivität, Gewicht und Dauer ab. Nutze unseren <router-link :to="localePath('caloriesBurned')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch-Rechner</router-link> für eine individuelle Berechnung. Kombiniere das Ergebnis mit deinem <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> und deinen <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffen</router-link> für das große Bild.
        </p>
      </div>

      <RelatedArticles slug="kalorienverbrauch-berechnen" />
    </div>
  </article>
</template>
