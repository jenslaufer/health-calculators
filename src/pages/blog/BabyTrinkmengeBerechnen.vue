<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Baby Trinkmenge berechnen — Wie viel Milch braucht dein Baby? | Health Calculators',
  description: 'Wie viel Muttermilch oder Säuglingsnahrung braucht dein Baby? Trinkmenge nach Alter und Gewicht — mit Faustformel, Tabelle und kostenlosem Online-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Baby Trinkmenge berechnen — Milchmenge nach Alter und Gewicht',
      description: 'Wie viel Milch braucht dein Baby? Faustformel, Altersstufen und Praxis-Tipps für Flasche und Stillen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/baby-trinkmenge-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Baby-Trinkmenge berechnen',
      step: [
        { '@type': 'HowToStep', name: 'Aktuelles Gewicht ermitteln', text: 'Wiege das Baby (idealerweise zur Vorsorge frisch gemessen).' },
        { '@type': 'HowToStep', name: 'Milchbedarf pro kg ansetzen', text: 'Bis 6 Monate: ~150 ml/kg/Tag. 6–11 Monate: ~120 ml/kg. 12+ Monate: ~90 ml/kg.' },
        { '@type': 'HowToStep', name: 'Tagesmenge berechnen', text: 'Gewicht in kg × ml/kg = Tagesmenge in ml.' },
        { '@type': 'HowToStep', name: 'Auf Mahlzeiten verteilen', text: 'Tagesmenge / Anzahl Mahlzeiten = Menge pro Mahlzeit.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viel Milch braucht ein Baby pro Tag?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Faustregel: ca. 150 ml pro kg Körpergewicht pro Tag in den ersten 6 Monaten. Ein 4 kg schweres Baby benötigt rund 600 ml/Tag, verteilt auf 6–8 Mahlzeiten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gilt die Formel auch beim Stillen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beim Stillen nach Bedarf rechnet man keine ml — gestillte Babys regulieren selbst. Die Formel ist v.a. für Flasche, Säuglingsnahrung und abgepumpte Milch hilfreich.',
          },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Baby Trinkmenge berechnen — Wie viel Milch braucht dein Baby?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „Trinkt mein Baby genug?" — die häufigste Frage frischgebackener Eltern. Der einfachste Antwort-Anker ist die <strong>Faustformel 150 ml pro kg Körpergewicht pro Tag</strong> für Babys in den ersten sechs Monaten.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die Formel funktioniert, wie sich der Bedarf mit dem Alter ändert, und warum gestillte Babys nicht nach Tabelle trinken sollten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Faustformel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Tagesmenge [ml] = Gewicht [kg] × ml/kg/Tag</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Faktor ml/kg/Tag hängt vom Alter ab. Mit Beginn der Beikost sinkt er, weil ein Teil der Energie über Brei kommt:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>0–5 Monate:</strong> ~150 ml/kg/Tag</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>6–11 Monate (Beikost):</strong> ~120 ml/kg/Tag</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>12+ Monate:</strong> ~90 ml/kg/Tag (zusätzlich zu fester Nahrung)</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Beispiel: 4 kg schweres Baby, 2 Monate</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900">4 kg × 150 ml/kg = <strong>600 ml/Tag</strong></p>
          <p class="text-base font-mono text-stone-900 mt-2">600 ml / 6 Mahlzeiten = <strong>100 ml pro Mahlzeit</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Schwankungen von ±20 % sind völlig normal — heute 80 ml, morgen 130 ml. Wichtig ist die Tagesbilanz, nicht die Einzelmahlzeit.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Mahlzeiten nach Alter</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Mahlzeiten/Tag</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Abstand</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">0–1 Monat</td><td class="px-6 py-3 text-stone-600">7–8</td><td class="px-6 py-3 text-stone-600">2–3 Stunden</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2–3 Monate</td><td class="px-6 py-3 text-stone-600">6</td><td class="px-6 py-3 text-stone-600">3–4 Stunden</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4–5 Monate</td><td class="px-6 py-3 text-stone-600">5–6</td><td class="px-6 py-3 text-stone-600">3–4 Stunden</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6–11 Monate</td><td class="px-6 py-3 text-stone-600">5</td><td class="px-6 py-3 text-stone-600">+ Beikost</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">12+ Monate</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">+ Mahlzeiten am Tisch</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Stillen: warum keine Mengenrechnung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Gestillte Babys regulieren ihre Trinkmenge selbst — über Häufigkeit und Saugintensität. Die ml-Rechnung ist v.a. dann wichtig, wenn du
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">mit der Flasche fütterst (Säuglingsnahrung oder abgepumpte Milch),</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">teilstillst und sicher gehen willst, dass die Zufütterung passt,</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">vorsorgen willst (Kita-Übergabe, Babysitter, Reise).</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Die wichtigsten Indikatoren für „genug getrunken" sind <strong>regelmäßige Gewichtszunahme</strong>, mindestens <strong>6 nasse Windeln pro Tag</strong> und ein zufriedenes Baby zwischen den Mahlzeiten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann der Rechner nicht passt</h2>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Frühchen</strong> — höherer Kalorienbedarf, kleinere Mahlzeiten, Kinderarzt entscheidet</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsstörungen</strong> — Über- oder Untergewicht braucht individuelle Pläne</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Krankheit, Reflux, Allergien</strong> — Trinkmenge kann sich kurzzeitig stark ändern</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsperzentile</strong> — passt das Gewicht zum Alter? Zum <router-link :to="localePath('childGrowth')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Wachstumsperzentil-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Geburtstermin</strong> — wichtig bei Frühchen für korrigiertes Alter. Zum <router-link :to="localePath('dueDate')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Geburtsterminrechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Kinder-Dosierung</strong> — Medikamente nach Gewicht für Säuglinge und Kleinkinder. Zum <router-link :to="localePath('childDosage')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Kinder-Dosierungsrechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Baby-Trinkmenge jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Alter und Gewicht eingeben — sofort die Tagesmenge und die Menge pro Mahlzeit erhalten.</p>
        <router-link
          :to="localePath('babyFeedingAmount')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Baby-Trinkmenge-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Baby trinkt weniger als die Tabelle sagt — Problem?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nicht zwingend. Wenn das Baby zunimmt, mindestens 6 nasse Windeln pro Tag hat und zufrieden ist, ist die Trinkmenge meistens ausreichend. Bei dauerhaft niedrigen Mengen oder fehlender Gewichtszunahme aber unbedingt zum Kinderarzt.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie groß sollten Flaschenmahlzeiten sein?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Tagesmenge geteilt durch Anzahl Mahlzeiten ergibt einen Richtwert. In den ersten Wochen sind 60–90 ml typisch, ab 2 Monaten 120–150 ml, ab 4 Monaten 180–210 ml pro Mahlzeit — abhängig vom Gewicht.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wann zusätzlich Wasser geben?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              In den ersten 6 Monaten brauchen voll gestillte oder mit Säuglingsnahrung gefütterte Babys kein zusätzliches Wasser. Mit Beikost-Einführung kann ungesüßter Tee oder Wasser zu den Mahlzeiten angeboten werden — der Bedarf bleibt aber klein.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticles />
  </article>
</template>
