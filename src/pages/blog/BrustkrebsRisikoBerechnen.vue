<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist das Gail-Modell?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das Gail-Modell (Gail et al. 1989) schätzt das individuelle 5-Jahres- und Lebenszeitrisiko für invasiven Brustkrebs anhand von Alter, Menarche, erster Geburt, Familienanamnese und Brustbiopsien. Es ist Grundlage des NCI Breast Cancer Risk Assessment Tools.' },
    },
    {
      '@type': 'Question',
      name: 'Ab welchem Wert gilt das Risiko als erhöht?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ein 5-Jahres-Risiko ≥ 1,66 % gilt nach NCI- und ASCO-Leitlinien als erhöht. Frauen oberhalb dieser Schwelle profitieren von intensiverer Vorsorge oder einer medikamentösen Prävention mit Tamoxifen bzw. Raloxifen.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Risikofaktoren fehlen im Gail-Modell?',
      acceptedAnswer: { '@type': 'Answer', text: 'BRCA1/2-Mutationen, Brustkrebs bei männlichen Verwandten oder Verwandten zweiten Grades, Brustdichte, Hormontherapie und Lebensstilfaktoren sind nicht enthalten. Bei familiärer Häufung sollte zusätzlich das Tyrer-Cuzick- oder BRCAPRO-Modell verwendet werden.' },
    },
  ],
}

useHead({
  title: 'Brustkrebs-Risiko berechnen: Gail-Modell, Risikofaktoren & Vorsorge | Health Calculators',
  description: 'Brustkrebs-Risiko mit dem Gail-Modell berechnen — 5-Jahres- und Lebenszeitrisiko, Risikofaktoren, Schwellenwerte und Vorsorgeempfehlungen verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Brustkrebs-Risiko berechnen: Was das Gail-Modell wirklich aussagt',
      description: 'Brustkrebs-Risiko mit dem Gail-Modell berechnen — 5-Jahres- und Lebenszeitrisiko, Risikofaktoren, Schwellenwerte und Vorsorgeempfehlungen verständlich erklärt.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/brustkrebs-risiko-berechnen',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Brustkrebs-Risiko berechnen: Was das Gail-Modell wirklich aussagt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Brustkrebs ist die häufigste Krebserkrankung bei Frauen — etwa jede achte Frau erkrankt im Lauf ihres Lebens. Die gute Nachricht: <strong>Risiko ist nicht gleich Schicksal.</strong> Mit dem <strong>Gail-Modell</strong> lässt sich das persönliche 5-Jahres-Risiko aus wenigen Angaben recht zuverlässig schätzen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, wie das Modell funktioniert, welche Risikofaktoren zählen, ab welchem Wert dein Risiko als „erhöht" gilt — und was du dann konkret tun kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Das Gail-Modell auf einen Blick</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Gail-Modell wurde 1989 von Mitchell Gail am US National Cancer Institute entwickelt und seither mehrfach validiert (Costantino 1999). Es kombiniert <strong>sechs Variablen</strong> zu einem relativen Risiko und multipliziert dieses mit der altersabhängigen Brustkrebs-Inzidenz:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed mb-4">
          <li>Aktuelles Alter (35–85 Jahre)</li>
          <li>Alter bei der ersten Regelblutung (Menarche)</li>
          <li>Alter bei der ersten Lebendgeburt oder Nulliparität</li>
          <li>Anzahl Verwandter ersten Grades mit Brustkrebs</li>
          <li>Anzahl Brustbiopsien</li>
          <li>Atypische Hyperplasie in einer Biopsie</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Ergebnis ist eine Wahrscheinlichkeit in Prozent — z. B. „<em>3,2 % Risiko, in den nächsten 5 Jahren an invasivem Brustkrebs zu erkranken</em>".
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikofaktoren im Detail</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Faktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Relatives Risiko</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Menarche &lt; 12 Jahre</td><td class="px-6 py-3 text-stone-600">×1,21</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Eine Biopsie ohne atypische Hyperplasie</td><td class="px-6 py-3 text-stone-600">×1,58</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Eine Biopsie mit atypischer Hyperplasie</td><td class="px-6 py-3 text-stone-600">×3,09</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Eine Verwandte 1. Grades</td><td class="px-6 py-3 text-stone-600">×2,6–2,8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Zwei oder mehr Verwandte 1. Grades</td><td class="px-6 py-3 text-stone-600">×4,2–6,8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Nulliparität oder erste Geburt ≥ 30</td><td class="px-6 py-3 text-stone-600">×1,93</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die größten Hebel: <strong>familiäre Belastung</strong> und <strong>atypische Hyperplasie</strong>. Beide können das Risiko vervielfachen, oft auf das Drei- bis Fünffache der Altersnorm.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikokategorien — was bedeutet dein Ergebnis?</h2>
        <div class="space-y-3">
          <div class="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Niedrig: 5-Jahres-Risiko &lt; 1,2 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Reguläre Vorsorge (ab 50: Mammographie-Screening alle 2 Jahre, in Deutschland Kassenleistung).</p>
          </div>
          <div class="bg-stone-100 border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Durchschnittlich: 1,2 – 1,66 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Bevölkerungsdurchschnitt. Standardvorsorge, gesundheitsbewusster Lebensstil (Bewegung, wenig Alkohol, gesundes Gewicht).</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Erhöht: 1,66 – 3,0 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Schwellenwert nach NCI/ASCO. Gespräch mit Frauenarzt oder Brustzentrum, ggf. intensiviertes Screening (jährliche Mammographie ± Tastuntersuchung).</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Hoch: &gt; 3,0 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Zuweisung an spezialisiertes Brustzentrum. Genetische Beratung (BRCA-Test), MRT zusätzlich zur Mammographie, ggf. Chemoprävention mit Tamoxifen oder Raloxifen.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was das Gail-Modell <em>nicht</em> kann</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Modell wurde an US-amerikanischen weißen Frauen entwickelt. Es <strong>unterschätzt</strong> das Risiko bei:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed mb-4">
          <li>BRCA1/BRCA2-Mutationen → hier Tyrer-Cuzick oder BRCAPRO verwenden</li>
          <li>Männlichen Verwandten mit Brustkrebs oder Verwandten 2. Grades</li>
          <li>Sehr dichtem Brustgewebe (Mammographie ACR-C/D)</li>
          <li>Vorheriger Strahlentherapie des Thorax (z. B. wegen M. Hodgkin)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei mehreren erkrankten Verwandten — besonders mit jungem Erkrankungsalter oder Ovarialkrebs in der Familie — solltest du zusätzlich eine humangenetische Beratung in Erwägung ziehen.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Brustkrebs-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gail-Modell mit 5-Jahres-Risiko, Vergleich zur Altersnorm und klarer Einordnung. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('breastCancerRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Lebensstil — die kontrollierbaren Faktoren</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Etwa 30 % aller Brustkrebsfälle ließen sich laut WHO durch Lebensstilfaktoren vermeiden. Die wichtigsten Hebel:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed">
          <li><strong>Alkohol:</strong> Jedes Glas pro Tag erhöht das Risiko um ca. 7–10 %.</li>
          <li><strong>Übergewicht nach der Menopause:</strong> BMI &gt; 30 verdoppelt das Risiko nahezu.</li>
          <li><strong>Bewegung:</strong> 150 min/Woche moderate Bewegung senken das Risiko um 10–20 %.</li>
          <li><strong>Stillen:</strong> Schützt — pro Stilljahr sinkt das Risiko um ca. 4 %.</li>
          <li><strong>Hormonersatztherapie (HRT):</strong> Kombinierte Östrogen-Gestagen-Therapie &gt; 5 Jahre erhöht das Risiko.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Frauengesundheit hängt eng zusammen. Wenn dich dein Brustkrebs-Risiko beschäftigt, sind diese drei Werte ebenfalls relevant — sie alle teilen Risikofaktoren wie Östrogen-Exposition, Alter und Lebensstil:
        </p>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed">
          <li>Bewerte deine Wechseljahresbeschwerden mit dem
            <router-link :to="localeBlogPath('menopause-symptome-bewerten')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Menopause-Rechner</router-link> — HRT-Entscheidungen beeinflussen das Brustkrebsrisiko direkt.
          </li>
          <li>Prüfe dein
            <router-link :to="localeBlogPath('osteoporose-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Osteoporose-Risiko</router-link> — beide Erkrankungen treten gehäuft nach der Menopause auf.
          </li>
          <li>Vergleiche deinen Wert mit deinem
            <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologischen Alter</router-link> — ein guter Indikator für Krebs- und Herz-Kreislauf-Risiko zugleich.
          </li>
        </ul>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Gail-Modell ersetzt keine ärztliche Untersuchung — aber es liefert einen verlässlichen Ausgangspunkt. Berechne dein persönliches 5-Jahres-Risiko mit dem
          <router-link :to="localePath('breastCancerRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Brustkrebs-Risiko-Rechner</router-link>
          und besprich auffällige Werte (≥ 1,66 % über 5 Jahre) frühzeitig mit deinem Frauenarzt oder einem zertifizierten Brustzentrum.
        </p>
      </div>

      <RelatedArticles slug="brustkrebs-risiko-berechnen" />
    </div>
  </article>
</template>
