<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Gewichtszunahme in der Schwangerschaft berechnen — IOM-Leitlinien | Health Calculators',
  description: 'Empfohlene Gewichtszunahme in der Schwangerschaft nach IOM 2009. Richtwerte nach BMI-Kategorie, Wochenverlauf und Zwillingsschwangerschaften verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gewichtszunahme in der Schwangerschaft berechnen — IOM-Leitlinien',
    description: 'Empfohlene Gewichtszunahme in der Schwangerschaft nach IOM 2009. Richtwerte nach BMI-Kategorie, Wochenverlauf und Zwillingsschwangerschaften verständlich erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-09',
    dateModified: '2026-04-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/gewichtszunahme-schwangerschaft-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Gewichtszunahme in der Schwangerschaft berechnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">9. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie viel Gewicht solltest du in der Schwangerschaft zunehmen? Die Antwort hängt von deinem
          <strong>Vor-Schwangerschafts-BMI</strong> ab. Das Institute of Medicine (IOM) hat 2009 evidenzbasierte
          Leitlinien veröffentlicht, die bis heute weltweit als Goldstandard gelten.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Zu wenig Gewichtszunahme erhöht das Risiko für Frühgeburt und geringes Geburtsgewicht. Zu viel
          erhöht das Risiko für Schwangerschaftsdiabetes, Kaiserschnitt und spätere Gewichtsprobleme des Kindes.
          Der richtige Bereich schützt Mutter und Kind.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">IOM 2009 Leitlinien nach BMI-Kategorie</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Berechne zuerst deinen <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Vor-Schwangerschafts-BMI</router-link>.
          Dieser bestimmt, in welcher Kategorie du bist:
        </p>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">BMI vor der Schwangerschaft</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfohlene Zunahme</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">&lt; 18,5</td>
                <td class="px-6 py-3 font-medium text-blue-700">Untergewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">12,5 – 18 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">18,5 – 24,9</td>
                <td class="px-6 py-3 font-medium text-emerald-700">Normalgewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">11,5 – 16 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">25 – 29,9</td>
                <td class="px-6 py-3 font-medium text-yellow-700">Übergewicht</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">7 – 11,5 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 tabular-nums">≥ 30</td>
                <td class="px-6 py-3 font-medium text-red-700">Adipositas</td>
                <td class="px-6 py-3 font-semibold text-stone-900 tabular-nums">5 – 9 kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <h3 class="text-base font-bold text-stone-900 mb-2">Zwillingsschwangerschaften</h3>
          <p class="text-sm text-stone-600 mb-3">
            Bei Zwillingen empfiehlt das IOM eine höhere Gesamtzunahme:
          </p>
          <div class="space-y-1 text-sm text-stone-700">
            <div class="flex justify-between"><span>Normalgewicht (BMI 18,5–24,9)</span><span class="font-semibold tabular-nums">17 – 25 kg</span></div>
            <div class="flex justify-between"><span>Übergewicht (BMI 25–29,9)</span><span class="font-semibold tabular-nums">14 – 23 kg</span></div>
            <div class="flex justify-between"><span>Adipositas (BMI ≥ 30)</span><span class="font-semibold tabular-nums">11 – 19 kg</span></div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie verteilt sich die Gewichtszunahme?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Gewichtszunahme verläuft nicht gleichmäßig. Im ersten Trimester (bis Woche 13) nehmen die meisten
          Frauen nur wenig zu — oft 0,5 bis 2 kg. Der Großteil der Zunahme findet im zweiten und dritten
          Trimester statt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Als grobe Orientierung gilt für Normalgewichtige nach dem ersten Trimester eine wöchentliche Zunahme
          von etwa 0,35–0,5 kg. Für Übergewichtige sind es 0,23–0,33 kg/Woche, für Adipöse 0,17–0,27 kg/Woche.
        </p>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">1. Trimester</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">2./3. Trimester (pro Woche)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium text-blue-700">Untergewicht</td>
                <td class="px-6 py-3 text-stone-600">~1–2 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0,44–0,58 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-emerald-700">Normalgewicht</td>
                <td class="px-6 py-3 text-stone-600">~1–2 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0,35–0,50 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-yellow-700">Übergewicht</td>
                <td class="px-6 py-3 text-stone-600">~0,5–1 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0,23–0,33 kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-red-700">Adipositas</td>
                <td class="px-6 py-3 text-stone-600">~0,5–1 kg</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">~0,17–0,27 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deine persönliche Empfehlung berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gewichtszunahme nach IOM-Leitlinien — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('pregnancyWeightGain')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Woraus setzt sich das Mehrgewicht zusammen?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Gewichtszunahme in der Schwangerschaft kommt nicht nur vom Baby selbst. Bei einer Gesamtzunahme
          von 12 kg entfallen ungefähr:
        </p>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~3,3 kg</div>
            <div class="text-sm text-stone-500">Baby</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~0,7 kg</div>
            <div class="text-sm text-stone-500">Plazenta</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~0,8 kg</div>
            <div class="text-sm text-stone-500">Fruchtwasser</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~1,8 kg</div>
            <div class="text-sm text-stone-500">Gebärmutter & Brustgewebe</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~1,8 kg</div>
            <div class="text-sm text-stone-500">Blutvolumen</div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-4">
            <div class="text-lg font-bold text-stone-900 tabular-nums mb-1">~3,5 kg</div>
            <div class="text-sm text-stone-500">Mütterliche Fettreserven</div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>

        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Was, wenn ich außerhalb des empfohlenen Bereichs liege?</h3>
            <p class="text-sm text-stone-600">
              Einzelne Schwankungen sind normal. Wichtig ist der Trend über mehrere Wochen. Sprich bei
              deutlichen Abweichungen mit deiner Gynäkologin oder deinem Gynäkologen.
            </p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Gilt der Richtwert für alle Frauen?</h3>
            <p class="text-sm text-stone-600">
              Die IOM-Leitlinien sind evidenzbasierte Empfehlungen für gesunde Einlings- und Zwillingsschwangerschaften.
              Bei Erkrankungen wie Schwangerschaftsdiabetes oder Bluthochdruck gelten individuelle Empfehlungen.
            </p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Zählt Wassereinlagerung zur Gewichtszunahme?</h3>
            <p class="text-sm text-stone-600">
              Ja. Leichte Ödeme in Beinen und Füßen sind normal und Teil der empfohlenen Zunahme.
              Plötzlich starke Schwellungen sollten ärztlich abgeklärt werden.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die empfohlene Gewichtszunahme in der Schwangerschaft hängt vom Vor-Schwangerschafts-BMI ab.
          Nutze unseren <router-link :to="localePath('pregnancyWeightGain')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Rechner für die Gewichtszunahme in der Schwangerschaft</router-link>,
          um deine individuelle Empfehlung zu berechnen — und vergleiche deinen BMI mit dem
          <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link>.
          Den errechneten Geburtstermin und die Schwangerschaftswoche kannst du mit dem
          <router-link :to="localePath('pregnancy')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schwangerschafts-Rechner</router-link> ermitteln.
        </p>
      </div>

      <RelatedArticles slug="gewichtszunahme-schwangerschaft-berechnen" />
    </div>
  </article>
</template>
