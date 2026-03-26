<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'

useHead({
  title: 'Körperfettanteil berechnen: Methoden, Tabelle & Richtwerte | Health Calculators',
  description: 'Körperfettanteil berechnen mit der U.S. Navy-Methode. Kategorien, Richtwerte und warum Körperfett mehr aussagt als der BMI.',
  path: '/blog/koerperfett-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Körperfettanteil berechnen: Methoden, Tabelle & Richtwerte',
    description: 'Körperfettanteil berechnen mit der U.S. Navy-Methode. Kategorien, Richtwerte und warum Körperfett mehr aussagt als der BMI.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/koerperfett-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Körperfettanteil berechnen: Methoden, Tabelle & Richtwerte</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Körperfettanteil</strong> ist eine der aussagekräftigsten Kennzahlen für deine Gesundheit. Anders als der <router-link to="/blog/bmi-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> unterscheidet er zwischen Fett- und Muskelmasse.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die U.S. Navy-Methode funktioniert, welche Richtwerte für Männer und Frauen gelten, und warum der Körperfettanteil dem BMI überlegen ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die U.S. Navy-Methode</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die U.S. Navy-Methode wurde in den 1980er Jahren entwickelt, um den Körperfettanteil von Militärpersonal schnell und ohne teure Geräte zu bestimmen. Du brauchst nur ein Maßband und drei bis vier Messungen:
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Körpergröße</strong> in cm oder Inches messen.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Halsumfang</strong> an der schmalsten Stelle messen.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Taillenumfang</strong> auf Nabelhöhe messen.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Hüftumfang</strong> (nur Frauen) an der breitesten Stelle messen.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Körperfett-Kategorien</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Essentielles Fett</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">2 – 5 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10 – 13 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Athleten</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">6 – 13 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">14 – 20 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Fitness</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">14 – 17 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">21 – 24 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Durchschnitt</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">18 – 24 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25 – 31 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Übergewicht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 25 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 32 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Körperfettanteil berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">U.S. Navy-Methode — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/body-fat"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Körperfett vs. BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der BMI kann nicht zwischen Fett und Muskeln unterscheiden. Ein muskulöser Sportler wird oft als „übergewichtig" eingestuft, obwohl sein Körperfettanteil sehr niedrig ist. Der Körperfettanteil löst dieses Problem.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ergänze dein Ergebnis mit deinem <router-link to="/blog/idealgewicht-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht</router-link>, um ein umfassendes Bild deiner Körperzusammensetzung zu erhalten.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Körperfettanteil ist aussagekräftiger als der BMI. Nutze unseren <router-link to="/body-fat" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Body Fat Calculator</router-link> und ergänze das Ergebnis mit dem <router-link to="/bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und dem <router-link to="/ideal-weight" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht</router-link>.
        </p>
      </div>

      <RelatedArticles slug="koerperfett-berechnen" />
    </div>
  </article>
</template>
