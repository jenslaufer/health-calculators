<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Taille-Hüft-Verhältnis berechnen: WHR, WHO-Grenzwerte & Risiko | Health Calculators',
  description: 'Taille-Hüft-Verhältnis (WHR) berechnen und Gesundheitsrisiko einschätzen. WHO-Grenzwerte, Messanleitung und warum WHR aussagekräftiger als der BMI ist.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Taille-Hüft-Verhältnis berechnen: WHR, WHO-Grenzwerte & Risiko',
    description: 'Taille-Hüft-Verhältnis (WHR) berechnen und Gesundheitsrisiko einschätzen. WHO-Grenzwerte, Messanleitung und warum WHR aussagekräftiger als der BMI ist.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/taille-hueft-verhaeltnis-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Taille-Hüft-Verhältnis berechnen: WHR, WHO-Grenzwerte & Risiko</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">27. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das <strong>Taille-Hüft-Verhältnis</strong> (Waist-to-Hip Ratio, WHR) ist ein einfacher Indikator für die Fettverteilung im Körper. Anders als der <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> zeigt es, <em>wo</em> sich das Fett befindet — und genau das bestimmt das Gesundheitsrisiko.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, was das WHR ist, wie du es korrekt misst, welche WHO-Grenzwerte gelten und warum das Taille-Hüft-Verhältnis aussagekräftiger als der BMI sein kann.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist das Taille-Hüft-Verhältnis?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das WHR ergibt sich aus der Division von Taillenumfang durch Hüftumfang. Ein hoher Wert deutet auf abdominale (bauchbetonte) Fettverteilung hin — ein bekannter Risikofaktor für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und metabolisches Syndrom.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-stone-900">WHR = Taillenumfang &divide; Hüftumfang</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Richtig messen: Schritt für Schritt</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Taillenumfang</strong> — Miss auf Nabelhöhe, entspannt nach dem Ausatmen. Das Maßband liegt waagerecht und eng an, ohne einzuschnüren.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Hüftumfang</strong> — Miss an der breitesten Stelle des Gesäßes. Steh aufrecht, Füße zusammen.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Berechnen</strong> — Teile den Taillenumfang durch den Hüftumfang. Oder nutze unseren <router-link :to="localePath('waistHipRatio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHR-Rechner</router-link>.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHO-Grenzwerte</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Weltgesundheitsorganisation (WHO) definiert folgende Schwellenwerte für ein erhöhtes Gesundheitsrisiko:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risikostufe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Niedriges Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&le; 0,85</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&le; 0,80</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Moderates Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,86 – 0,90</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0,81 – 0,85</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Hohes Risiko</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 0,90</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 0,85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Taille-Hüft-Verhältnis berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">WHO-basierte Risikoeinschätzung — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('waistHipRatio')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHR vs. BMI: Warum die Fettverteilung zählt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> misst nur das Verhältnis von Gewicht zu Größe — er kann nicht zwischen Muskel- und Fettmasse unterscheiden und sagt nichts über die Fettverteilung aus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das WHR erfasst gezielt die <strong>abdominale Adipositas</strong>. Studien zeigen, dass Bauchfett (viszerales Fett) metabolisch aktiver ist und stärker mit Herzerkrankungen, Schlaganfall und Diabetes korreliert als subkutanes Fett.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ergänze dein WHR mit dem <router-link :to="localeBlogPath('koerperfett-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> für ein vollständiges Bild deiner Körperzusammensetzung.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Taille-Hüft-Verhältnis ist ein schneller, kostenloser Test für dein Gesundheitsrisiko. Nutze unseren <router-link :to="localePath('waistHipRatio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHR-Rechner</router-link> und ergänze das Ergebnis mit dem <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und dem <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link>.
        </p>
      </div>

      <RelatedArticles slug="taille-hueft-verhaeltnis-berechnen" />
    </div>
  </article>
</template>
