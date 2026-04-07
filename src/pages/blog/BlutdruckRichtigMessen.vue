<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Blutdruck richtig messen: Werte verstehen & einordnen | Health Calculators',
  description: 'Blutdruck richtig messen und Werte einordnen. Kategorien nach AHA, Messtipps, Risikofaktoren und wann zum Arzt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blutdruck richtig messen: Werte verstehen & einordnen',
    description: 'Blutdruck richtig messen und Werte einordnen. Kategorien nach AHA, Messtipps, Risikofaktoren und wann zum Arzt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/blutdruck-richtig-messen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Blutdruck richtig messen: Werte verstehen & einordnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">27. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Bluthochdruck</strong> ist einer der häufigsten Risikofaktoren für Herzinfarkt und Schlaganfall — und bleibt oft jahrelang unbemerkt. Regelmäßiges Messen ist der erste Schritt zur Vorsorge.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen Blutdruck <strong>richtig misst</strong>, was die Werte bedeuten und wann du handeln solltest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bedeuten die Blutdruckwerte?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Blutdruck wird in zwei Werten angegeben: <strong>systolisch</strong> (oberer Wert, Druck beim Herzschlag) und <strong>diastolisch</strong> (unterer Wert, Druck zwischen Herzschlägen). Die Einheit ist mmHg (Millimeter Quecksilbersäule).
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Blutdruck = Systolisch / Diastolisch mmHg</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Blutdruckwerte nach AHA-Kategorien</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Systolisch</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Diastolisch</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Normal</td><td class="px-6 py-3 text-stone-900 font-medium">&lt; 120</td><td class="px-6 py-3 text-stone-900 font-medium">&lt; 80</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Erhöht</td><td class="px-6 py-3 text-stone-900 font-medium">120–129</td><td class="px-6 py-3 text-stone-900 font-medium">&lt; 80</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Bluthochdruck Grad 1</td><td class="px-6 py-3 text-stone-900 font-medium">130–139</td><td class="px-6 py-3 text-stone-900 font-medium">80–89</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Bluthochdruck Grad 2</td><td class="px-6 py-3 text-stone-900 font-medium">&ge; 140</td><td class="px-6 py-3 text-stone-900 font-medium">&ge; 90</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Hypertensive Krise</td><td class="px-6 py-3 text-stone-900 font-medium">&gt; 180</td><td class="px-6 py-3 text-stone-900 font-medium">&gt; 120</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Entscheidend ist immer der <strong>höhere Wert</strong>: Liegt einer der beiden Werte in einer höheren Kategorie, gilt diese Kategorie.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So misst du deinen Blutdruck richtig</h2>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm text-stone-700"><strong>1. Ruhe:</strong> 5 Minuten ruhig sitzen, nicht sprechen.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm text-stone-700"><strong>2. Position:</strong> Arm auf Herzhöhe, Füße flach auf dem Boden.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm text-stone-700"><strong>3. Manschette:</strong> Oberarm-Manschette, nicht zu eng, nicht zu locker.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm text-stone-700"><strong>4. Wiederholung:</strong> Zwei Messungen im Abstand von 1–2 Minuten, Durchschnitt nehmen.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm text-stone-700"><strong>5. Zeitpunkt:</strong> Morgens und abends messen, vor der Medikamenteneinnahme.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikofaktoren für Bluthochdruck</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Übergewicht, Bewegungsmangel, hoher Salzkonsum, Stress und Alkohol erhöhen das Risiko. Auch genetische Veranlagung spielt eine Rolle. Ein gesunder <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und ausreichend <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Flüssigkeit</router-link> helfen, den Blutdruck im Normalbereich zu halten.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Blutdruckwerte einordnen</h3>
        <p class="text-stone-300 text-sm mb-5">Kategorie sofort erfahren — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('bloodPressure')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Regelmäßiges Blutdruckmessen ist einfach und kann Leben retten. Nutze unseren <router-link :to="localePath('bloodPressure')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck-Rechner</router-link>, um deine Werte einzuordnen, und sprich bei auffälligen Ergebnissen mit deinem Arzt.
        </p>
      </div>

      <RelatedArticles slug="blutdruck-richtig-messen" />
    </div>
  </article>
</template>
