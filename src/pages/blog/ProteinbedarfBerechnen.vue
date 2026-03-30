<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Proteinbedarf berechnen: So viel Protein brauchst du wirklich | Health Calculators',
  description: 'Proteinbedarf berechnen basierend auf Gewicht, Aktivität und Ziel. Empfehlungen für Muskelaufbau, Abnehmen und Erhalt — mit Lebensmitteltabelle.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Proteinbedarf berechnen: So viel Protein brauchst du wirklich',
    description: 'Proteinbedarf berechnen basierend auf Gewicht, Aktivität und Ziel. Empfehlungen für Muskelaufbau, Abnehmen und Erhalt — mit Lebensmitteltabelle.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-30',
    dateModified: '2026-03-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/proteinbedarf-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Proteinbedarf berechnen: So viel Protein brauchst du wirklich</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">30. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Protein</strong> ist der wichtigste Makronährstoff für Muskelerhalt, Sättigung und Regeneration. Doch wie viel brauchst du wirklich? Die Antwort hängt von deinem Gewicht, deiner Aktivität und deinem Ziel ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen individuellen Proteinbedarf berechnest — und welche Lebensmittel die besten Quellen sind.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Protein so wichtig ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Protein liefert Aminosäuren, die dein Körper für den Aufbau und Erhalt von Muskeln, Enzymen und Hormonen braucht. Ohne ausreichend Protein verlierst du bei einer Diät Muskelmasse statt Fett — und erholst dich langsamer vom Training.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Protein hat außerdem den höchsten thermischen Effekt aller Makronährstoffe: Dein Körper verbraucht 20–30 % der Protein-Kalorien allein für die Verdauung. Bei Kohlenhydraten sind es nur 5–10 %, bei Fett sogar nur 0–3 %.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie viel Protein brauchst du?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die DGE empfiehlt 0,8 g/kg Körpergewicht — das ist das Minimum zur Vermeidung von Mangelerscheinungen. Für sportlich aktive Menschen, Muskelaufbau oder Diäten liegt der optimale Bereich deutlich höher.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ziel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Gewicht halten (sitzend)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">0,8 – 1,0 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Gewicht halten (aktiv)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,2 – 1,4 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Fett abbauen</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,2 – 1,6 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Muskelaufbau</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,6 – 2,2 g/kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Protein nach Ziel</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Muskelaufbau</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Für maximalen Muskelaufbau empfiehlt die Forschung 1,6–2,2 g/kg Körpergewicht. Mehr als 2,2 g/kg bringt keinen zusätzlichen Vorteil. Verteile das Protein gleichmäßig auf 3–5 Mahlzeiten mit je 20–40 g.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Fett abbauen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Im Kaloriendefizit schützt eine erhöhte Proteinzufuhr (1,2–1,6 g/kg) die Muskelmasse. Protein sättigt außerdem stärker als Kohlenhydrate und Fett — du hast weniger Hunger.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Gewicht halten</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Auch ohne spezifisches Fitnessziel profitierst du von ausreichend Protein. Es stärkt das Immunsystem, unterstützt die Knochengesundheit und verbessert den Stoffwechsel.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Proteinbedarf berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Individuelles Proteinziel — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('protein')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Proteinquellen im Vergleich</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Tierische Quellen wie Hähnchenbrust (31 g/100 g), Thunfisch (26 g) und Eier (13 g) haben eine hohe biologische Wertigkeit. Pflanzliche Alternativen wie Linsen (9 g), Tofu (8 g) und Seitan (25 g) sind ebenfalls gute Quellen — Veganer sollten verschiedene Quellen kombinieren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Kombiniere deinen Proteinbedarf mit den richtigen <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffen</router-link> und ausreichend <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasser</router-link> für optimale Ergebnisse.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vegetarisch und vegan</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Pflanzliche Proteine haben eine niedrigere Bioverfügbarkeit als tierische. Vegetarier und Veganer sollten ihren Proteinbedarf um 10–20 % erhöhen und verschiedene Quellen kombinieren. Hülsenfrüchte plus Getreide (z. B. Reis und Bohnen) ergänzen sich zu einem vollständigen Aminosäureprofil.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein Proteinbedarf hängt von Gewicht, Aktivität und Ziel ab. Nutze unseren <router-link :to="localePath('protein')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein-Rechner</router-link> für eine individuelle Empfehlung. Berechne auch deinen <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> und deine <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffe</router-link> für das große Bild.
        </p>
      </div>

      <RelatedArticles slug="proteinbedarf-berechnen" />
    </div>
  </article>
</template>
