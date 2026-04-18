<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Vitamin D berechnen: Wie viel Sonne brauche ich wirklich? | Health Calculators',
  description: 'Wie viel Sonne für Vitamin D? Hauttyp, Breitengrad, Jahreszeit — alles erklärt. Mit kostenlosem Vitamin-D-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vitamin D berechnen: Wie viel Sonne brauche ich wirklich?',
    description: 'Wie viel Sonne für Vitamin D? Hauttyp, Breitengrad, Jahreszeit — alles erklärt. Mit kostenlosem Vitamin-D-Rechner.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/vitamin-d-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Vitamin D berechnen: Wie viel Sonne brauche ich wirklich?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">18. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Vitamin D</strong> ist eines der wenigen Vitamine, die der Körper selbst herstellen kann — vorausgesetzt, die Sonne scheint. Doch wie viel Sonne braucht man wirklich? Die Antwort hängt von mehreren Faktoren ab: Hauttyp, Breitengrad, Jahreszeit und Bekleidung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie die <strong>Vitamin-D-Synthese</strong> in der Haut funktioniert, warum viele Menschen trotz Sonnenstunden einen Mangel haben, und wie du deinen persönlichen Sonnenbedarf berechnen kannst.
        </p>
      </div>

      <!-- Was ist Vitamin D? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Vitamin D und warum ist es so wichtig?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vitamin D ist eigentlich kein Vitamin im klassischen Sinne, sondern ein <strong>Prohormon</strong>. Es reguliert über 200 Gene im menschlichen Körper und ist an zahlreichen Prozessen beteiligt:
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Knochen und Muskeln:</strong> Vitamin D ermöglicht die Aufnahme von Calcium und Phosphor — unverzichtbar für starke Knochen und Muskelfunktion.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Immunsystem:</strong> Ein ausreichender Vitamin-D-Spiegel stärkt die Abwehrkräfte und reduziert das Risiko von Atemwegserkrankungen.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Stimmung und Psyche:</strong> Niedrige Vitamin-D-Spiegel sind mit erhöhtem Depressionsrisiko und Erschöpfung assoziiert.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Herz-Kreislauf:</strong> Studien deuten auf einen Zusammenhang zwischen niedrigem Vitamin D und erhöhtem Herzerkrankungsrisiko hin.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Schätzungsweise leidet ein Drittel der deutschen Bevölkerung an einem Vitamin-D-Mangel (Spiegel unter 30 nmol/L) — besonders in den Wintermonaten von Oktober bis März.
        </p>
      </div>

      <!-- Wie wird Vitamin D gebildet? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie bildet die Haut Vitamin D?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Vitamin-D-Synthese findet in der Haut statt und wird durch <strong>UV-B-Strahlung</strong> (Wellenlänge 290–315 nm) ausgelöst. Der Prozess läuft in drei Schritten ab:
        </p>
        <div class="space-y-4 mb-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>UV-B trifft Cholesterol:</strong> 7-Dehydrocholesterol in der Haut wird durch UV-B-Strahlung in Prävitamin D3 umgewandelt.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Wärmeaktivierung:</strong> Körperwärme wandelt Prävitamin D3 spontan in Cholecalciferol (Vitamin D3) um.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Aktivierung in Leber und Niere:</strong> D3 wird in Leber und Niere zum biologisch aktiven Calcitriol (1,25-Dihydroxyvitamin D) umgewandelt.</p>
            </div>
          </div>
        </div>

        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-base font-semibold text-stone-900">UV-B + Haut → Prävitamin D3 → Vitamin D3 → Calcitriol (aktiv)</p>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Entscheidend: Nur <strong>UV-B-Strahlung</strong> löst die Synthese aus — nicht UV-A. UV-A macht zwar den Großteil des durch Glas dringenden Sonnenlichts aus, erzeugt aber kein Vitamin D. Daher hilft Sonnen hinter einer Glasscheibe nicht.
        </p>
      </div>

      <!-- Einflussfaktoren -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was beeinflusst die Vitamin-D-Synthese?</h2>

        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Breitengrad und Jahreszeit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der wichtigste Faktor. UV-B-Strahlung erreicht die Erdoberfläche nur bei einem Sonnenstand über ~15°. In Deutschland (52°N) ist eine ausreichende Synthese nur von April bis September möglich. Im Winter steht die Sonne zu tief — selbst mittags reicht die UV-B-Intensität nicht aus.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Hauttyp (Fitzpatrick-Skala)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Melanin in der Haut absorbiert UV-B und schützt vor Sonnenbrand — aber reduziert auch die Vitamin-D-Synthese. Menschen mit Hauttyp I (sehr hell) produzieren Vitamin D bis zu 8x schneller als Hauttyp VI (sehr dunkel). Ein dunkelhäutiger Mensch, der von einer äquatorialen Region nach Nordeuropa zieht, hat dadurch ein deutlich erhöhtes Mangelrisiko.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Tageszeit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die UV-B-Intensität ist am höchsten zwischen 10 und 14 Uhr (Sonnenstand am höchsten). Frühmorgens und abends reicht die UV-B-Strahlung für eine nennenswerte Synthese nicht aus — selbst wenn die Sonne scheint.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Bekleidung und Sonnenschutz</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Kleidung blockiert UV-B vollständig. Je mehr Haut bedeckt ist, desto weniger Vitamin D wird produziert. Sonnencreme mit LSF 15 reduziert die UV-B-Penetration um ~93 %, LSF 50 um ~98 %. Für die Synthese ist daher ungeschützte Haut notwendig — ein kurzer Aufenthalt ohne Sonnenschutz reicht oft aus.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Alter</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ältere Menschen produzieren weniger Vitamin D aus UV-B, da die Konzentration von 7-Dehydrocholesterol in der Haut mit dem Alter abnimmt. Ein 70-Jähriger produziert nur noch etwa 25–30 % der Vitamin-D-Menge eines 20-Jährigen.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deinen persönlichen Sonnenbedarf berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Hauttyp, Standort, Monat, Tageszeit — alle Faktoren in einem Rechner.</p>
        <router-link
          :to="localePath('vitaminD')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- Referenzwerte -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vitamin-D-Spiegel: Was ist normal?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Vitamin-D-Status wird über den 25-Hydroxyvitamin-D-Spiegel im Blut (25(OH)D) gemessen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Status</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">nmol/L</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">ng/mL</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Mangel</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 30</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 12</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Unzureichend</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30–50</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">12–20</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Ausreichend</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">50–75</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">20–30</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Optimal</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 75</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt einen Spiegel von mindestens 50 nmol/L. Viele Experten halten 75–125 nmol/L für optimal.
        </p>
      </div>

      <!-- Supplementierung -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann und wie viel supplementieren?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Deutschland ist eine alleinige Deckung des Vitamin-D-Bedarfs über die Sonne von Oktober bis März praktisch nicht möglich. Die DGE empfiehlt bei fehlender Eigensynthese:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Allgemeine Empfehlung:</p>
          <ul class="space-y-2 text-sm text-stone-600">
            <li>• Erwachsene ohne Mangel: <strong>800–1.000 IU/Tag</strong> im Winter</li>
            <li>• Bei Unzulänglichkeit (30–50 nmol/L): <strong>1.000–2.000 IU/Tag</strong></li>
            <li>• Bei nachgewiesenem Mangel (&lt;30 nmol/L): <strong>2.000–4.000 IU/Tag</strong> unter ärztlicher Aufsicht</li>
            <li>• Ältere Menschen (über 65): möglicherweise höherer Bedarf</li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: Vitamin D3 (Cholecalciferol) ist besser wirksam als Vitamin D2 (Ergocalciferol). Fettlösliches Vitamin D wird am besten zusammen mit einer fetthaltigen Mahlzeit eingenommen. Eine Überdosierung ist bei &gt;4.000 IU/Tag über längere Zeit theoretisch möglich — jedoch in der Praxis selten.
        </p>
      </div>

      <!-- Verlinkte Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weitere Gesundheitsrechner</h2>
        <div class="space-y-4">
          <router-link :to="localePath('lifeExpectancy')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebenserwartung berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Faktoren wie Bewegung, Ernährung und Rauchen beeinflussen, wie lange wir leben — ähnlich wie Vitamin D die Langzeitgesundheit beeinflusst.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Lebenserwartung-Rechner &rarr;</span>
          </router-link>
          <router-link :to="localePath('water')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Wasserbedarf berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Ausreichend Wasser trinken ist ebenso grundlegend wie Vitamin D — berechne deinen persönlichen Tagesbedarf.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Wasserbedarf-Rechner &rarr;</span>
          </router-link>
          <router-link :to="localePath('bmi')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">BMI berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Übergewicht erhöht das Risiko für Vitamin-D-Mangel, da das Vitamin im Fettgewebe gespeichert wird und weniger zirkuliert.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">BMI-Rechner &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vitamin D ist entscheidend für Knochen, Immunsystem und allgemeines Wohlbefinden. Die benötigte Sonnenmenge hängt stark von Hauttyp, Jahreszeit und Standort ab. In Deutschland ist eine ausreichende Eigenproduktion von November bis Februar kaum möglich — eine Supplementierung ist dann sinnvoll.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Berechne deinen persönlichen Bedarf mit unserem <router-link :to="localePath('vitaminD')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Vitamin-D-Rechner</router-link> — und lass deinen Spiegel einmal jährlich beim Arzt prüfen, besonders wenn du risikoreich bist.
        </p>
      </div>

      <RelatedArticles slug="vitamin-d-berechnen" />
    </div>
  </article>
</template>
