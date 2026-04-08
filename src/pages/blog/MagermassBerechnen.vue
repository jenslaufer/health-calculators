<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Fettfreie Körpermasse berechnen: Boer, James & Hume im Vergleich | Health Calculators',
  description: 'Fettfreie Körpermasse (Magermasse) berechnen mit drei wissenschaftlichen Formeln. Was LBM über deine Fitness verrät und warum sie wichtiger ist als das Körpergewicht.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fettfreie Körpermasse berechnen — was sie über deine Fitness verrät',
    description: 'Fettfreie Körpermasse (Magermasse) berechnen mit drei wissenschaftlichen Formeln. Was LBM über deine Fitness verrät und warum sie wichtiger ist als das Körpergewicht.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/magermasse-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Fettfreie Körpermasse berechnen — was sie über deine Fitness verrät</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>fettfreie Körpermasse</strong> (Lean Body Mass, LBM) ist die Masse deines Körpers ohne Fett — also Muskeln, Knochen, Organe und Wasser. Sie ist eine der aussagekräftigsten Kennzahlen für Fitness und Gesundheit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Anders als das Körpergewicht allein zeigt die LBM, wie viel „funktionale" Masse du trägst. Sportler mit hoher Muskelmasse haben eine hohe LBM, auch wenn ihr <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> erhöht erscheint.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei wissenschaftlichen Formeln</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Es gibt drei etablierte Formeln zur Berechnung der Magermasse — jede mit leicht unterschiedlichem Ansatz:
        </p>

        <div class="space-y-4 mb-6">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Boer-Formel (1984)</h3>
            <p class="text-sm text-stone-600 mb-3">Basiert auf Gewicht und Körpergröße, einfach und weit verbreitet.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Männer: 0,407 × W + 0,267 × H − 19,2</div>
              <div>Frauen: 0,252 × W + 0,473 × H − 48,3</div>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">James-Formel (1976)</h3>
            <p class="text-sm text-stone-600 mb-3">Berücksichtigt das Verhältnis von Gewicht zu Körpergröße — reagiert stärker auf Übergewicht.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Männer: 1,1 × W − 128 × (W/H)²</div>
              <div>Frauen: 1,07 × W − 148 × (W/H)²</div>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Hume-Formel (1966)</h3>
            <p class="text-sm text-stone-600 mb-3">Eine der ältesten Formeln, abgeleitet aus Messungen an Leichen — konservativere Schätzungen.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Männer: 0,3281 × W + 0,33929 × H − 29,5336</div>
              <div>Frauen: 0,29569 × W + 0,41813 × H − 43,2933</div>
            </div>
          </div>
        </div>
        <p class="text-sm text-stone-500">W = Gewicht in kg, H = Körpergröße in cm</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typische Richtwerte</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Profil</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gewicht</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Magermasse (Ø)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Magermasse %</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Mann, 180 cm, aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~61 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~76 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Frau, 165 cm, aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~44 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~74 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Mann, 175 cm, Sportler</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">75 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~58 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~77 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Magermasse berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Drei Formeln im Vergleich — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('leanBodyMass')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum die Magermasse wichtiger ist als das Gewicht</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Zwei Personen mit gleichem Gewicht können einen sehr unterschiedlichen Gesundheitszustand haben. Wer regelmäßig trainiert, baut Muskelmasse auf — das Gewicht steigt, aber die LBM steigt ebenfalls. Das ist ein positives Zeichen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Umgekehrt: Wer abnimmt, ohne zu trainieren, verliert nicht nur Fett, sondern auch Muskeln. Die LBM sinkt — ein Warnsignal, das das Gewicht allein nicht zeigt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Kombiniere die LBM mit dem <router-link :to="localeBlogPath('koerperfett-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> für ein vollständiges Bild deiner Körperzusammensetzung.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die fettfreie Körpermasse ist eine präzisere Kennzahl als das Körpergewicht. Nutze unseren <router-link :to="localePath('leanBodyMass')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Magermasse-Rechner</router-link> und ergänze das Ergebnis mit dem <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfett-Rechner</router-link> und dem <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link>.
        </p>
      </div>

      <RelatedArticles slug="magermasse-berechnen" />
    </div>
  </article>
</template>
