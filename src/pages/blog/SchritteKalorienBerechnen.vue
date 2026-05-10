<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Schritte in Kalorien & km umrechnen: Was 10.000 Schritte wirklich verbrennen | Health Calculators',
  description: '10.000 Schritte = wie viele Kalorien? Wie weit? Formel, Aktivitätslevel und Vergleich mit Joggen — alles in einem Guide.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Schritte in Kalorien & km umrechnen: Was 10.000 Schritte wirklich verbrennen',
    description: '10.000 Schritte = wie viele Kalorien? Wie weit? Formel, Aktivitätslevel und Vergleich mit Joggen — alles in einem Guide.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-09',
    dateModified: '2026-05-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/schritte-kalorien-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schritte in Kalorien &amp; km umrechnen: Was 10.000 Schritte wirklich verbrennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">9. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>10.000 Schritte</strong> sind der wohl bekannteste Fitness-Richtwert. Aber wie viele Kalorien stecken wirklich dahinter? Und wie weit gehst du tatsächlich? Die Antworten hängen vor allem von deinem Körpergewicht und deiner Schrittlänge ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Guide zeigt die Formel, eine Referenztabelle und die Aktivitätsstufen nach Tudor-Locke &amp; Bassett.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für moderates Gehen (~5 km/h, ~3,5 MET) gilt die Faustformel:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Kalorien</strong> &asymp; Schritte &times; 0,04 &times; (Gewicht / 70)</p>
          <p><strong>Strecke (km)</strong> = Schritte &times; Schrittlänge (cm) / 100.000</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Faktor <strong>0,04 kcal pro Schritt</strong> stammt aus dem Compendium of Physical Activities (Ainsworth et al., 2011) und gilt für eine 70-kg-Person. Bei anderem Gewicht skaliert der Wert linear.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Referenztabelle</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schritte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Strecke (75 cm)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kalorien (70 kg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium">5.000</td><td class="px-6 py-3 text-stone-600">3,75 km</td><td class="px-6 py-3 text-stone-600">200 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">7.500</td><td class="px-6 py-3 text-stone-600">5,63 km</td><td class="px-6 py-3 text-stone-600">300 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">10.000</td><td class="px-6 py-3 text-stone-600">7,5 km</td><td class="px-6 py-3 text-stone-600">400 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">12.500</td><td class="px-6 py-3 text-stone-600">9,38 km</td><td class="px-6 py-3 text-stone-600">500 kcal</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Bei 80 kg multiplizierst du die Kalorienspalte mit 80/70 ≈ 1,14: 10.000 Schritte → 457 kcal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Aktivitätsstufen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Klassifikation nach Tudor-Locke &amp; Bassett (2004) ist die meistzitierte Schritt-Skala:
        </p>
        <ul class="space-y-2 text-base text-stone-600 leading-relaxed">
          <li><strong>Sedentär:</strong> &lt;5.000 Schritte/Tag — typisch für Bürojobs ohne Bewegung.</li>
          <li><strong>Niedrig aktiv:</strong> 5.000–7.499 — mäßige Alltagsbewegung.</li>
          <li><strong>Moderat aktiv:</strong> 7.500–9.999 — bewusste Bewegung im Alltag.</li>
          <li><strong>Aktiv:</strong> 10.000–12.499 — die WHO-Empfehlung.</li>
          <li><strong>Sehr aktiv:</strong> ≥12.500 — sportlich aktiv.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schrittlänge bestimmen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine durchschnittliche Schrittlänge liegt bei <strong>70–80 cm</strong>. Genauer wird's mit der Faustformel <strong>Körpergröße × 0,43</strong>:
        </p>
        <ul class="space-y-1 text-base text-stone-600 leading-relaxed">
          <li>165 cm groß → 71 cm Schrittlänge</li>
          <li>175 cm groß → 75 cm Schrittlänge</li>
          <li>185 cm groß → 80 cm Schrittlänge</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Noch genauer: 10 Schritte abmessen, durch 10 teilen.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Schritte in Kalorien &amp; km umrechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sofort sehen, was deine Schrittzahl verbrennt — kostenlos, ohne Anmeldung.</p>
        <router-link
          :to="localePath('schritteKalorienRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Beim Joggen verbrennst du pro Minute deutlich mehr — der <router-link :to="localeBlogPath('lauftempo-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lauftempo-Rechner</router-link> hilft beim Pacing. Den vollständigen Tagesumsatz schätzt der <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Rechner</router-link>; den Ruheumsatz isoliert der <router-link :to="localeBlogPath('grundumsatz-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Grundumsatz-Rechner</router-link>. Für andere Aktivitäten gibt es den <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch-Rechner</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          10.000 Schritte sind ein guter Richtwert, aber kein magisches Ziel. Schon ab 7.500 Schritten täglich zeigen Studien deutliche Gesundheitsvorteile. Wichtiger als die exakte Zahl ist die Konsistenz — und etwas zügigeres Tempo bringt mehr als pure Schrittzahl. Der <router-link :to="localePath('schritteKalorienRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schritte-Kalorien Rechner</router-link> liefert dir auf einen Blick Kalorien, Strecke und Aktivitätslevel.
        </p>
      </div>

      <RelatedArticles slug="schritte-kalorien-berechnen" />
    </div>
  </article>
</template>
