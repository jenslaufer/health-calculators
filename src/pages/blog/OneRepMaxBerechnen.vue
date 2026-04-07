<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'One Rep Max berechnen: 1RM mit vier Formeln ermitteln | Health Calculators',
  description: 'One Rep Max (1RM) berechnen mit Epley, Brzycki, Lombardi und O\'Conner. Formeln, Prozenttabelle und praktische Tipps.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'One Rep Max berechnen: 1RM mit vier Formeln ermitteln',
    description: 'One Rep Max (1RM) berechnen mit Epley, Brzycki, Lombardi und O\'Conner. Formeln, Prozenttabelle und praktische Tipps.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/one-rep-max-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">One Rep Max berechnen: 1RM mit vier Formeln ermitteln</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Wie viel kannst du maximal heben?</strong> Das One Rep Max (1RM) ist das Gewicht, das du genau einmal mit sauberer Technik bewegen kannst. Es ist die wichtigste Kennzahl im Krafttraining, um Trainingsgewichte zu planen und Fortschritt zu messen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du dein 1RM sicher aus submaximalen Sätzen berechnest, welche Formeln es gibt und wie du die Ergebnisse für dein Training nutzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist das One Rep Max?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das One Rep Max (1RM) beschreibt das maximale Gewicht, das du bei einer bestimmten Übung für genau eine Wiederholung heben kannst. Es dient als Referenzwert für die Trainingsplanung: Prozentangaben des 1RM bestimmen, wie schwer du in verschiedenen Wiederholungsbereichen trainieren solltest.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Statt dein echtes Maximum zu testen (hohes Verletzungsrisiko), nutzen die meisten Athleten Schätzformeln. Du hebst ein Gewicht für mehrere Wiederholungen und rechnest daraus dein 1RM hoch.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Formeln</h2>

        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Epley (Standard)</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = Gewicht &times; (1 + Wiederholungen / 30)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Die am häufigsten verwendete Formel. Funktioniert gut für 2&ndash;10 Wiederholungen.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Brzycki</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = Gewicht &times; 36 / (37 &minus; Wiederholungen)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Liefert ähnliche Ergebnisse wie Epley bei niedrigen Wiederholungszahlen, weicht bei höheren ab.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Lombardi</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = Gewicht &times; Wiederholungen<sup>0,10</sup></p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Exponentieller Ansatz, der bei hohen Wiederholungszahlen konservativer schätzt.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">O'Conner</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = Gewicht &times; (1 + Wiederholungen &times; 0,025)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Einfache lineare Formel. Schätzt tendenziell etwas niedriger als Epley.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> Du schaffst 100 kg für 5 Wiederholungen beim Bankdrücken:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Formel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Geschätztes 1RM</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Epley</td><td class="px-6 py-3 text-stone-900 font-medium">117 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Brzycki</td><td class="px-6 py-3 text-stone-900 font-medium">113 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Lombardi</td><td class="px-6 py-3 text-stone-900 font-medium">117 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">O'Conner</td><td class="px-6 py-3 text-stone-900 font-medium">113 kg</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Formeln liegen typischerweise innerhalb einer Spanne von 5 %. Für die Trainingsplanung empfiehlt sich der Durchschnitt oder die konservativste Schätzung.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein One Rep Max berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Vier Formeln, Prozenttabelle &mdash; kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('oneRepMax')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Prozenttabelle</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Mit deinem 1RM berechnest du Trainingsgewichte für verschiedene Ziele:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">% des 1RM</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Wiederholungen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Trainingsziel</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">90&ndash;100 %</td><td class="px-6 py-3 text-stone-900 font-medium">1&ndash;3</td><td class="px-6 py-3 text-stone-500">Maximalkraft</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">80&ndash;90 %</td><td class="px-6 py-3 text-stone-900 font-medium">3&ndash;6</td><td class="px-6 py-3 text-stone-500">Kraft</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">70&ndash;80 %</td><td class="px-6 py-3 text-stone-900 font-medium">6&ndash;12</td><td class="px-6 py-3 text-stone-500">Hypertrophie</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">50&ndash;70 %</td><td class="px-6 py-3 text-stone-900 font-medium">12&ndash;20</td><td class="px-6 py-3 text-stone-500">Kraftausdauer</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tipps für genaue Ergebnisse</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>1. Nutze 3&ndash;8 Wiederholungen:</strong> Die Formeln sind in diesem Bereich am genauesten. Bei mehr als 10 Wiederholungen steigt die Ungenauigkeit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>2. Saubere Technik:</strong> Nur mit korrekter Ausführung liefern die Ergebnisse realistische Werte. Abgefälschte Wiederholungen verfälschen die Schätzung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>3. Ausgeruht testen:</strong> Führe den Test am Anfang des Trainings durch, nicht nach Ermüdung. Ein gutes Aufwärmen ist wichtig.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4. Regelmäßig aktualisieren:</strong> Dein 1RM verändert sich mit dem Training. Teste alle 4&ndash;6 Wochen neu, um deine Gewichte anzupassen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">1RM und Ernährung</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein Kraftpotenzial hängt auch von der Ernährung ab. Ausreichend <router-link :to="localeBlogPath('proteinbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein</router-link> unterstützt Muskelaufbau und Regeneration. Kombiniere dein 1RM-Training mit einem passenden <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch</router-link> und deinem <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein One Rep Max ist die Basis für effektive Trainingsplanung. Nutze unseren <router-link :to="localePath('oneRepMax')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">1RM-Rechner</router-link> für eine schnelle Schätzung mit vier Formeln und Prozenttabelle. Kombiniere das Ergebnis mit deinem <router-link :to="localePath('protein')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Proteinbedarf</router-link> und <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makros</router-link> für optimale Ergebnisse.
        </p>
      </div>

      <RelatedArticles slug="one-rep-max-berechnen" />
    </div>
  </article>
</template>
