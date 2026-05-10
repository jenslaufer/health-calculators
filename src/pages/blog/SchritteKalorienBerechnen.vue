<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Schritte in Kalorien & km umrechnen — 10000 Schritte erklärt | Health Calculators',
  description: '10000 Schritte sind wie viele Kalorien und wie viele km? Faustformel, Schrittlänge, Aktivitätslevel und der Mythos der „magischen" Zahl 10000.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Schritte in Kalorien & km umrechnen — 10000 Schritte erklärt',
      description: '10000 Schritte sind wie viele Kalorien und wie viele km? Faustformel, Schrittlänge, Aktivitätslevel und der Mythos der „magischen" Zahl 10000.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/schritte-kalorien-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viele Kalorien verbrennen 10000 Schritte?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bei 70 kg Körpergewicht etwa 400 kcal, bei 80 kg rund 457 kcal. Die Faustformel: kcal ≈ Schritte × 0,04 × (Gewicht / 70) für moderates Gehen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie weit sind 10000 Schritte in km?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bei 75 cm Schrittlänge sind 10000 Schritte 7,5 km. Die durchschnittliche Schrittlänge entspricht etwa 41 % der Körpergröße.' },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schritte in Kalorien &amp; km umrechnen — was 10000 Schritte wirklich bedeuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">9. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „10000 Schritte am Tag" ist die wohl bekannteste Fitness-Faustregel der Welt. Aber wie viele <strong>Kalorien</strong> verbrennt man dabei eigentlich? Und wie viele <strong>Kilometer</strong> sind das? Die Antwort ist erstaunlich einfach — und der Hintergrund der Zahl 10000 hat überraschend wenig mit Wissenschaft zu tun.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Hier erklären wir die Formel, geben dir konkrete Werte für verschiedene Schrittzahlen und ordnen den Mythos rund um die magische 10000-Schritte-Marke ein.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Faustformel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beim moderaten Gehen (~5 km/h) verbrennt eine Person mit 70 kg Körpergewicht etwa <strong>0,04 kcal pro Schritt</strong>. Daraus ergibt sich die schlichte Formel:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-5 mb-4 text-center">
          <p class="text-stone-900 font-semibold text-lg tabular-nums">kcal ≈ Schritte × 0,04 × (Gewicht / 70)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Quelle: Compendium of Physical Activities (Ainsworth 2011) sowie Tudor-Locke et al. 2008. Die Linearität gilt im Bereich 60–110 kg gut; an den Extremen werden Energieumsätze etwas anders skaliert, der Fehler bleibt aber meist unter ±15 %.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">10000 Schritte — die konkreten Zahlen</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gewicht</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">10000 Schritte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Strecke (75 cm Stride)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~343 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">7,5 km</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">70 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~400 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">7,5 km</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~457 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">7,5 km</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">90 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~514 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">7,5 km</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Kurz:</strong> 10000 Schritte ≈ 7,5 km. Der Kalorienwert hängt linear vom Gewicht ab — schwerere Personen verbrennen pro Schritt mehr.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schrittlänge — der unterschätzte Faktor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die zurückgelegte Strecke hängt von deiner persönlichen Schrittlänge ab. Eine <strong>gute Schätzung</strong>: Schrittlänge ≈ Körpergröße × 0,41.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">165 cm → ~68 cm Schrittlänge → 10000 Schritte = 6,8 km</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">175 cm → ~72 cm Schrittlänge → 10000 Schritte = 7,2 km</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">185 cm → ~76 cm Schrittlänge → 10000 Schritte = 7,6 km</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer es genau wissen will: 10 m Strecke ablaufen, Schritte zählen, durch 10 dividieren — fertig.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Aktivitätslevel — die Tudor-Locke-Bänder</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Schrittforschung von Catrine Tudor-Locke (PhD) hat sich auf folgende Einteilung geeinigt:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schritte/Tag</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 5000</td><td class="px-6 py-3 text-stone-600">Sedentär</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5000 – 7499</td><td class="px-6 py-3 text-stone-600">Niedrig aktiv</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">7500 – 9999</td><td class="px-6 py-3 text-stone-600">Moderat aktiv</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10000 – 12499</td><td class="px-6 py-3 text-stone-600">Aktiv</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 12500</td><td class="px-6 py-3 text-stone-600">Sehr aktiv</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Der 10000-Schritte-Mythos</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Zahl 10000 stammt nicht aus medizinischer Forschung, sondern aus einer japanischen <strong>Werbekampagne</strong>: 1965 brachte Yamasa den ersten Schrittzähler heraus, den „Manpo-kei" — wörtlich „10000-Schritte-Messer". Die runde Zahl klang griffig.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Erst Jahrzehnte später untersuchte man, ob 10000 Schritte wirklich der ideale Wert sind. Eine viel zitierte Studie der JAMA Internal Medicine (Lee et al. 2019) kam zum Schluss: Ab <strong>4400 Schritten</strong> sinkt die Sterblichkeit deutlich, der Effekt plateaut etwa ab <strong>7500 Schritten</strong>. Mehr ist gut, aber nicht zwingend nötig — entscheidend ist, sich überhaupt regelmäßig zu bewegen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Worauf die Schätzung empfindlich ist</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Tempo</strong> — Schlendern (&lt; 3 km/h) verbrennt ~20 % weniger, zügiges Walking (&gt; 6 km/h) bis zu 30 % mehr.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Steigung</strong> — Bergauf kann den Energieumsatz verdoppeln. Treppensteigen ist enorm effizient.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Untergrund</strong> — Sand oder weiche Erde erfordern bis zu 50 % mehr Energie als Asphalt.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lasten</strong> — Rucksack, Kinder, Einkäufe: jedes zusätzliche Kilo erhöht den Verbrauch proportional zum Gesamtgewicht.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen &amp; Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lauftempo</strong> — wenn du das Gehen zum Laufen ausbauen willst. <router-link :to="localeBlogPath('lauftempo-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Zum Lauftempo-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Kalorienverbrauch nach Sportart</strong> — Vergleich Gehen vs. Radfahren vs. Schwimmen. <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Zum Kalorienverbrauch-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>TDEE</strong> — der Gesamtumsatz, in dem deine Schritt-Kalorien stecken. <router-link :to="localeBlogPath('tdee-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Zum TDEE-Artikel</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Schritte umrechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Schritte, Gewicht, optional die Schrittlänge — Kalorien, km und Aktivitätslevel sofort.</p>
        <router-link
          :to="localePath('schritteKalorienRechner')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Schritte-Kalorien-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Reichen weniger als 10000 Schritte für einen gesunden Lebensstil?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja. Die WHO empfiehlt 150 Minuten moderate körperliche Aktivität pro Woche — das entspricht etwa 7000 Schritten täglich. Studien zeigen den größten Gesundheitsnutzen zwischen 7500 und 10000 Schritten; darüber hinaus bringt mehr nur noch geringfügige Zusatzeffekte.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie zuverlässig sind Smartphone-Schrittzähler?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Moderne Smartphones zählen Schritte mit ±5 % Genauigkeit, sofern man das Gerät am Körper trägt. Liegt es auf dem Tisch, fehlen Schritte komplett. Smartwatches und Fitness-Tracker sind oft präziser und zählen auch Schritte ohne Telefon mit.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Verbrennt schnelles Gehen mehr als 0,04 kcal/Schritt?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja, deutlich. Bei Power-Walking mit 6,5 km/h kann der Wert auf 0,05–0,06 kcal/Schritt steigen. Faustregel: Wenn du noch sprechen, aber nicht mehr singen kannst, bist du im richtigen Tempo für maximale Kalorienverbrennung.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Sind 10000 Schritte gut zum Abnehmen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Allein reichen 10000 Schritte selten — sie verbrennen ~400 kcal, das ist eine Hälfte einer Pizzascheibe. Abnehmen funktioniert über die Energiebilanz. Schritte sind ein guter Anker, müssen aber mit bewusster Ernährung kombiniert werden.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
