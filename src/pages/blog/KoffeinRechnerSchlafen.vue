<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Koffein-Rechner: Wann kannst du wieder schlafen? | Health Calculators',
  description: 'Koffein hat eine Halbwertszeit von ~5 Stunden. Erfahre, wie du deinen aktuellen Koffeinspiegel berechnest und wann du wieder sicher einschlafen kannst.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Koffein-Rechner: Wann kannst du wieder schlafen?',
    description: 'Koffein hat eine Halbwertszeit von ~5 Stunden. Erfahre, wie du deinen aktuellen Koffeinspiegel berechnest und wann du wieder sicher einschlafen kannst.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/koffein-rechner-schlafen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Koffein-Rechner: Wann kannst du wieder schlafen?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Koffein</strong> ist das weltweit am häufigsten konsumierte Stimulanz. Es hält wach, steigert die Konzentration und verbessert die körperliche Leistung. Doch Koffein verlässt den Körper nicht sofort — es baut sich über Stunden ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer nach dem Mittagsespresso schlechter einschläft, liegt nicht falsch. Unser <router-link :to="localePath('caffeine')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Koffein-Rechner</router-link> zeigt dir deinen aktuellen Koffeinspiegel und den optimalen Schlafzeitpunkt — basierend auf der Koffein-Halbwertszeit.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist die Koffein-Halbwertszeit?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Halbwertszeit beschreibt, wie lange es dauert, bis der Körper die Hälfte einer Substanz abgebaut hat. Für Koffein beträgt sie durchschnittlich <strong>5 Stunden</strong> — mit individuellen Schwankungen zwischen 2 und 10 Stunden, abhängig von Genetik, Alter, Medikamenten und Schwangerschaft.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das bedeutet: 100 mg Koffein (etwa eine Tasse Kaffee) sind nach 5 Stunden auf 50 mg gesunken, nach 10 Stunden auf 25 mg, nach 15 Stunden auf 12,5 mg. Unsere Berechnung verwendet 5 Stunden als Standardwert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Koffeingehalt der häufigsten Getränke</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Getränk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Koffein</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Kaffee (250 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">95 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Espresso (30 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">63 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Doppelter Espresso</td>
                <td class="px-6 py-3 text-stone-900 font-medium">126 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Schwarztee (240 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">47 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Grüntee (240 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">28 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Energy Drink (250 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">80 mg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Cola (330 ml)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">34 mg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Koffeinspiegel berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gib deine heutigen Getränke ein — der Rechner zeigt sofort deinen aktuellen Koffeinstand und den optimalen Schlafzeitpunkt.</p>
        <router-link
          :to="localePath('caffeine')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie viel Koffein ist zu viel?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die FDA empfiehlt für gesunde Erwachsene ein Tageslimit von <strong>400 mg Koffein</strong>. Das entspricht etwa 4 Tassen Kaffee oder 6 Espresso. Darüber steigt das Risiko für Herzrasen, Nervosität, Schlafstörungen und Bluthochdruck.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Für Schwangere gilt ein deutlich niedrigeres Limit von 200 mg täglich. Kinder und Jugendliche sollten koffeinhaltinge Getränke meiden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ab wann stört Koffein den Schlaf?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schlafforscher empfehlen, koffeinhaltinge Getränke mindestens 6 Stunden vor dem Schlafengehen zu meiden. Bei einem Koffeinspiegel unter 100 mg ist die schlafstörende Wirkung in der Regel vernachlässigbar.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Koffein blockiert Adenosin-Rezeptoren</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Adenosin ist ein Botenstoff, der im Laufe des Tages Müdigkeit signalisiert. Koffein blockiert diese Rezeptoren und verhindert so das Müdigkeitsgefühl — aber das Adenosin sammelt sich weiterhin an. Wenn das Koffein abbaut, trifft die aufgestaute Müdigkeit auf einmal.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Tiefschlaf leidet besonders</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Selbst wenn Koffein das Einschlafen nicht verhindert, reduziert es die Tiefschlafphasen. Das führt zu weniger erholsamem Schlaf — auch wenn du die Schlafdauer nicht merkst.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel: Koffeinspiegel im Tagesverlauf</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Angenommen, du trinkst um 8 Uhr einen Kaffee (95 mg) und um 14 Uhr einen Espresso (63 mg). Dein kombinierter Koffeinstand um 20 Uhr berechnet sich so:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 font-mono text-sm text-stone-700 mb-4">
          <p>Kaffee (8 Uhr): 95 mg × (0,5 ^ (12/5)) = 95 × 0,193 = <strong>18,4 mg</strong></p>
          <p class="mt-1">Espresso (14 Uhr): 63 mg × (0,5 ^ (6/5)) = 63 × 0,435 = <strong>27,4 mg</strong></p>
          <p class="mt-2 font-bold text-stone-900">Gesamt um 20 Uhr: ~46 mg</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei 46 mg liegt der Koffeinspiegel bereits unter der 100-mg-Schwelle — du könntest problemlos schlafen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Koffein baut sich nach einer Halbwertszeit von ~5 Stunden ab. Mit unserem <router-link :to="localePath('caffeine')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Koffein-Rechner</router-link> siehst du jederzeit deinen aktuellen Spiegel, vergleichst ihn mit dem FDA-Tageslimit und erfährst, wann du wieder sicher schlafen kannst.
        </p>
      </div>

      <RelatedArticles slug="koffein-rechner-schlafen" />
    </div>
  </article>
</template>
