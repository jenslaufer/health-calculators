<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Lauftempo berechnen: Pace, Zielzeit & Splits für jede Distanz | Health Calculators',
  description: 'Lauftempo berechnen für 5K, 10K, Halbmarathon und Marathon. Pace in min/km, Zielzeit, Negative-Split-Strategie und Kilometer-Splits.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lauftempo berechnen: Pace, Zielzeit & Splits für jede Distanz',
    description: 'Lauftempo berechnen für 5K, 10K, Halbmarathon und Marathon. Pace in min/km, Zielzeit, Negative-Split-Strategie und Kilometer-Splits.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/lauftempo-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Lauftempo berechnen: Pace, Zielzeit & Splits für jede Distanz</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Wie schnell musst du laufen, um deine Zielzeit zu erreichen?</strong> Ob 5K, 10K, Halbmarathon oder Marathon — dein Lauftempo (Pace) bestimmt, wie du dir deine Energie einteilst und ob du dein Ziel erreichst.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du dein Lauftempo berechnest, was Negative Splits sind und wie du mit einer Splits-Tabelle dein Rennen planst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Pace?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pace beschreibt die Zeit, die du für eine bestimmte Distanz brauchst. In Europa wird Pace in <strong>Minuten pro Kilometer</strong> (min/km) angegeben, in den USA in Minuten pro Meile (min/mi).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein Pace von 5:00 min/km bedeutet: Du brauchst 5 Minuten für jeden Kilometer. Für 10 km brauchst du damit 50 Minuten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-lg font-semibold text-stone-900 text-center">Pace (min/km) = Gesamtzeit (min) &divide; Distanz (km)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> 10K in 50 Minuten:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">50 &divide; 10 = <strong>5:00 min/km</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Umgekehrt: Wenn du deinen Pace kennst, kannst du deine Zielzeit berechnen: Pace &times; Distanz = Zielzeit.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typische Pace-Werte nach Distanz</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Distanz</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einsteiger</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fortgeschritten</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ambitioniert</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">5K</td><td class="px-6 py-3 text-stone-900 font-medium">7:00–8:00</td><td class="px-6 py-3 text-stone-900 font-medium">5:00–6:00</td><td class="px-6 py-3 text-stone-900 font-medium">3:30–4:30</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">10K</td><td class="px-6 py-3 text-stone-900 font-medium">7:30–8:30</td><td class="px-6 py-3 text-stone-900 font-medium">5:15–6:15</td><td class="px-6 py-3 text-stone-900 font-medium">3:45–4:45</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Halbmarathon</td><td class="px-6 py-3 text-stone-900 font-medium">7:45–9:00</td><td class="px-6 py-3 text-stone-900 font-medium">5:30–6:30</td><td class="px-6 py-3 text-stone-900 font-medium">4:00–5:00</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Marathon</td><td class="px-6 py-3 text-stone-900 font-medium">8:00–9:30</td><td class="px-6 py-3 text-stone-900 font-medium">5:40–6:45</td><td class="px-6 py-3 text-stone-900 font-medium">4:15–5:15</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Angaben in min/km. Individuelle Werte variieren je nach Alter, Trainingszustand und Gelände.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Pace-Umrechnung: min/km zu min/mi</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Meile entspricht 1,609 km. Multipliziere deinen Pace in min/km mit 1,609, um min/mi zu erhalten.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">5:00 min/km &times; 1,609 = <strong>8:03 min/mi</strong></p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sind Negative Splits?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei einer Negative-Split-Strategie läufst du die zweite Hälfte schneller als die erste. Diese Taktik wird von Elite-Läufern bevorzugt, weil sie:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Energie spart</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Ein konservativer Start verhindert, dass du zu früh Glykogenspeicher aufbrauchst.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Mental stärkt</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Andere Läufer zu überholen gibt in der zweiten Hälfte einen psychologischen Schub.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Einbrüche vermeidet</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Ein zu schneller Start führt oft zum gefürchteten „Wall" ab Kilometer 30 beim Marathon.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser Rechner berechnet einen Negative-Split-Plan mit 2,5 % Differenz pro Hälfte — ein bewährter Wert aus der Trainingspraxis.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Lauftempo berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Für 5K, 10K, Halbmarathon und Marathon — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('runningPace')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Splits im Wettkampf nutzen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Splits-Tabelle zeigt dir für jeden Kilometer (oder jede Meile) die geplante Durchgangszeit. So kannst du im Rennen an jedem Kilometerstein prüfen, ob du im Plan liegst.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Drucke deine Splits-Tabelle aus oder speichere sie auf deiner Laufuhr. Viele GPS-Uhren erlauben es, virtuelle Pacer mit deinem Zieltempo einzustellen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Pace und Kalorienverbrauch</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Schnelleres Laufen verbrennt mehr Kalorien pro Minute, aber nicht unbedingt mehr pro Kilometer. Berechne deinen <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch</router-link> und optimiere dein Training mit den richtigen <router-link :to="localeBlogPath('herzfrequenz-zonen-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz-Zonen</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein Lauftempo ist der Schlüssel zu einer erfolgreichen Rennplanung. Nutze unseren <router-link :to="localePath('runningPace')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lauftempo-Rechner</router-link> für Pace, Zielzeit, Negative Splits und eine vollständige Splits-Tabelle. Kombiniere es mit deinem <router-link :to="localePath('heartRate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz-Zonen-Rechner</router-link> für optimales Training.
        </p>
      </div>

      <RelatedArticles slug="lauftempo-berechnen" />
    </div>
  </article>
</template>
