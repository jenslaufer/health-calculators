<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Dehydration berechnen: Flüssigkeitsmangel-Risiko mit Symptomen erkennen | Health Calculators',
  description: 'Dehydrations-Risiko aus Trinkmenge, Körpergewicht und Symptomen einschätzen. EFSA-Tagesbedarf, WHO-Symptomkriterien, Notfallzeichen und Trinkempfehlungen — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dehydration berechnen: Flüssigkeitsmangel-Risiko mit Symptomen erkennen',
    description: 'Dehydrations-Risiko aus Trinkmenge, Körpergewicht und Symptomen einschätzen. EFSA-Tagesbedarf, WHO-Symptomkriterien, Notfallzeichen und Trinkempfehlungen — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/dehydrations-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Dehydration berechnen: Flüssigkeitsmangel-Risiko mit Symptomen erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">4. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schon ein <strong>Flüssigkeitsverlust von 1–2 %</strong> des Körpergewichts beeinträchtigt Konzentration, Stimmung und körperliche Leistungsfähigkeit. Bei Hitze, Sport oder Krankheit kann sich das innerhalb weniger Stunden zu einer ernsten Dehydration entwickeln.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein Risiko quantitativ einschätzen kannst — über die Trinkmenge im Verhältnis zum Tagesbedarf (35 ml/kg, EFSA) und einen klinischen Symptom-Score nach WHO/CDC.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie viel Flüssigkeit brauchst du wirklich?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Europäische Behörde für Lebensmittelsicherheit (EFSA)</strong> empfiehlt Erwachsenen 2,0 l (Frauen) bis 2,5 l (Männer) Flüssigkeit täglich aus Getränken — etwa <strong>35 ml pro kg Körpergewicht</strong>. Bei einer 70-kg-Person sind das rund 2,45 Liter.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bedarfssteigernde Faktoren:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Hitze:</strong> +0,5–1,0 l ab 30 °C — Schweißverlust kann 1–2 l/h erreichen</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sport:</strong> 400–800 ml pro Stunde Belastung, je nach Intensität</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Fieber:</strong> +10 % pro 1 °C über 37 °C</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schwangerschaft / Stillzeit:</strong> +300 ml bzw. +700 ml</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schweregrade der Dehydration</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stufe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Defizit</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Typische Zeichen</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Leicht</td><td class="px-6 py-3 text-stone-600">1–3 %</td><td class="px-6 py-3 text-stone-600">Durst, dunklerer Urin, leichte Müdigkeit</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Moderat</td><td class="px-6 py-3 text-stone-600">3–6 %</td><td class="px-6 py-3 text-stone-600">Trockener Mund, Kopfschmerzen, Schwindel, Tachykardie</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Schwer</td><td class="px-6 py-3 text-stone-600">&gt; 6 %</td><td class="px-6 py-3 text-stone-600">Verwirrtheit, kein Wasserlassen, Kreislaufschwäche, Bewusstlosigkeit</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ab einem Verlust von 10 % besteht <strong>akute Lebensgefahr</strong>. Säuglinge und ältere Menschen verschlechtern sich deutlich schneller.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die acht klinischen Symptome im Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner wertet acht Zeichen mit unterschiedlicher Gewichtung aus — angelehnt an die Empfehlungen von WHO und CDC:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Durst</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Frühestes, sensitivstes Zeichen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Dunkler Urin</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Konzentrierter Urin, Urinfarbskala 5–8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Trockener Mund</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Reduzierte Speichelproduktion</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Müdigkeit</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Sinkende Leistungsfähigkeit</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kopfschmerzen</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Reduziertes Plasmavolumen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Schwindel beim Aufstehen</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Orthostatische Hypotonie</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Schneller Puls</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Tachykardie als Kompensation</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Verwirrtheit</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Notfallzeichen — ärztliche Versorgung</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Verwirrtheit gilt immer als schweres Warnzeichen</strong> — unabhängig vom Trinkprotokoll. In diesem Fall sofort medizinische Hilfe rufen.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Dehydrations-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Trinkmenge, Körpergewicht, 8 klinische Symptome — sofortiges Ergebnis mit Schweregrad und Trinkempfehlung. Anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('dehydrationRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So gleichst du eine Dehydration richtig aus</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Behandlung richtet sich nach dem Schweregrad:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Leicht (1–3 %):</strong> 250–500 ml Wasser oder verdünnte Saftschorle in 30–60 Minuten trinken.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Moderat (3–6 %):</strong> 500–1000 ml über 1–2 Stunden, idealerweise mit Elektrolyten (Natrium, Kalium, Glukose) — orale Rehydratationssalze (ORS) sind erste Wahl.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schwer (&gt; 6 %):</strong> Notruf 112 — orale Rehydratation reicht meist nicht mehr aus, intravenöse Infusionen sind erforderlich.</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Vorsicht:</strong> Reines Wasser in sehr großen Mengen über kurze Zeit kann zu <em>Hyponatriämie</em> führen — besonders nach langen Ausdauerbelastungen. Daher gleichmäßig trinken und Elektrolyte ergänzen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein individueller Tagesbedarf lässt sich präzise mit dem
          <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarfs-Rechner</router-link>
          ermitteln. Wer viel Kaffee trinkt, sollte einen Blick auf den
          <router-link :to="localeBlogPath('koffein-rechner-schlafen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Koffein-Rechner</router-link>
          werfen — Koffein ist nur leicht harntreibend, aber relevant. Bei häufigen Kreislaufbeschwerden lohnt sich der
          <router-link :to="localeBlogPath('natrium-korrektur-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Natrium-Korrektur-Rechner</router-link>
          zur Einschätzung von Elektrolytstörungen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dehydration ist mehr als nur „durstig sein". Bereits ab einem Defizit von 1–2 % sinkt deine Leistungsfähigkeit messbar. Mit unserem
          <router-link :to="localePath('dehydrationRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Dehydrations-Risiko-Rechner</router-link>
          erkennst du in Sekunden, ob du nachtrinken solltest — oder ob ein Notfall vorliegt. Im Zweifel: lieber einmal zu früh Hilfe holen als zu spät.
        </p>
      </div>

      <RelatedArticles slug="dehydrations-risiko-berechnen" />
    </div>
  </article>
</template>
