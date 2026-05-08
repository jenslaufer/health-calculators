<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Neugeborenen-Gelbsucht: Bilirubin-Risiko mit dem Bhutani-Nomogramm einschätzen | Health Calculators',
  description: 'Bhutani-Nomogramm einfach erklärt: Wie das Bilirubin-Risiko bei Neugeborenen anhand altersabhängiger Perzentilen eingeordnet wird — Symptome, Risikofaktoren, Phototherapie.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Neugeborenen-Gelbsucht: Bilirubin-Risiko mit dem Bhutani-Nomogramm einschätzen',
      description: 'Wie das Bhutani-Nomogramm das Risiko einer signifikanten Hyperbilirubinämie bei Neugeborenen einordnet. Risikozonen, Behandlungsschwellen, Phototherapie — verständlich erklärt.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/neugeborenen-gelbsucht-risiko',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist Neugeborenen-Gelbsucht?',
          acceptedAnswer: { '@type': 'Answer', text: 'Eine Gelbfärbung der Haut durch erhöhtes Bilirubin im Blut. Sehr häufig in den ersten Lebenstagen, in der Regel harmlos — extrem hohe Werte können das Gehirn schädigen.' },
        },
        {
          '@type': 'Question',
          name: 'Was bedeutet das Bhutani-Nomogramm?',
          acceptedAnswer: { '@type': 'Answer', text: 'Es ordnet die Gesamt-Bilirubin-Konzentration eines Neugeborenen einer altersabhängigen Perzentile zu und liefert vier Risikozonen — von niedrig bis hoch.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Neugeborenen-Gelbsucht: Bilirubin-Risiko mit dem Bhutani-Nomogramm einschätzen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Etwa <strong>60 % der reifen und 80 % der frühgeborenen Neugeborenen</strong> entwickeln in den ersten Lebenstagen eine sichtbare Gelbsucht. Meistens ist sie harmlos. Doch bei manchen Babys steigt das <strong>Bilirubin</strong> so stark, dass eine Behandlung mit Phototherapie nötig wird — selten droht sogar eine Hirnschädigung (Kernikterus).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das <strong>Bhutani-Nomogramm</strong> aus der Studie von Bhutani, Johnson und Sivieri (Pediatrics 1999) ordnet die Werte einer altersabhängigen Perzentile zu. Vier Risikozonen sagen voraus, wie wahrscheinlich eine signifikante Hyperbilirubinämie wird — und ob ein engeres Follow-up oder eine Therapie sinnvoll ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der Wert allein wenig sagt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein TSB-Wert von 10 mg/dL (171 µmol/L) sagt für sich genommen nichts aus. <strong>Entscheidend ist das Lebensalter in Stunden</strong>. Bei einem 12 Stunden alten Baby ist 10 mg/dL deutlich auffällig — bei einem 5 Tage alten Säugling oft normal. Genau hier setzt das Nomogramm an: Es liefert für jede Stunde nach der Geburt einen Korridor.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das ist auch der Grund, warum die alte Faustregel „ab 12 mg/dL ist Therapie nötig" überholt ist. Viel präziser ist die Frage: <em>Liegt der Wert über oder unter dem 95. Perzentil für das aktuelle Lebensalter?</em>
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Risikozonen</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Perzentilbereich</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zone</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 40.</td>
                <td class="px-6 py-3 text-stone-600">Niedriges Risiko</td>
                <td class="px-6 py-3 text-stone-600">Routine-Verlaufskontrolle</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">40. – 75.</td>
                <td class="px-6 py-3 text-stone-600">Niedrig-mittleres</td>
                <td class="px-6 py-3 text-stone-600">Kontrolle in 24 – 48 h</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">76. – 94.</td>
                <td class="px-6 py-3 text-stone-600">Hoch-mittleres</td>
                <td class="px-6 py-3 text-stone-600">Engmaschige Kontrolle, Risikofaktoren prüfen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 95.</td>
                <td class="px-6 py-3 text-stone-600">Hohes Risiko</td>
                <td class="px-6 py-3 text-stone-600">Sofortige ärztliche Bewertung</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          In der Originalstudie entwickelten <strong>40 % der Babys in der „high-risk"-Zone</strong> eine signifikante Hyperbilirubinämie — gegenüber unter 1 % in der Niedrig-Risiko-Zone. Damit ist das Nomogramm das wichtigste Screening-Instrument vor der Entlassung aus der Geburtsklinik.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikofaktoren, die das Bild verschärfen</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hämolyse</strong> — Blutgruppen-Inkompatibilität (z. B. ABO, Rh), G6PD-Mangel, hereditäre Sphärozytose. Senkt die Therapieschwelle deutlich.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Niedriges Gestationsalter</strong> — 35–36 SSW: weniger Lebermasse, langsamere Bilirubin-Konjugation.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Stillschwierigkeiten / Gewichtsverlust &gt; 8 %</strong> — weniger Stuhlgang, mehr enterohepatischer Bilirubin-Kreislauf.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hämatome / Kephalhämatom</strong> — Abbau von extravasalem Blut liefert zusätzliches Bilirubin.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Geschwister mit Phototherapie</strong> — familiäre Häufung signalisiert genetische Disposition.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Ostasiatische Abstammung</strong> — höhere Inzidenz, oft genetische Varianten der UGT1A1-Bilirubin-Konjugation.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann Phototherapie indiziert ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>AAP-Leitlinie 2022</strong> liefert separate Tabellen für Behandlungsschwellen, abhängig von Gestationsalter (35 – 38+ SSW) und Risikofaktoren. Vereinfacht: Je jünger das Kind, je niedriger das Gestationsalter und je mehr Risikofaktoren, desto früher wird therapiert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Phototherapie wandelt Bilirubin in der Haut in wasserlösliche Isomere um, die ohne Leber-Konjugation ausgeschieden werden. Sie ist sicher und in den meisten Fällen ausreichend. Erst bei extrem hohen Werten — und drohendem Kernikterus — wird eine Austauschtransfusion erwogen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was Eltern erkennen können</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Gelbfärbung im Tageslicht</strong> — beginnt am Gesicht, breitet sich nach unten aus. Ab Beinen und Füßen meist auffälliger Wert.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schläfriges, schwaches Trinken</strong> — Warnsymptom, gerade in den ersten 72 h.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Helle Stühle, dunkler Urin</strong> — kann auf eine cholestatische (konjugierte) Hyperbilirubinämie hinweisen — anders als die typische unkonjugierte Form.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen &amp; Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>APGAR-Score</strong> — Anpassungsstatus deines Neugeborenen in den ersten 5 Minuten. Zum <router-link :to="localeBlogPath('apgar-score-bewerten')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">APGAR-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby-Trinkmenge</strong> — ausreichendes Trinken senkt das Bilirubin durch häufigeren Stuhlgang. Zum <router-link :to="localeBlogPath('baby-trinkmenge-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Trinkmengen-Rechner</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby-Meilensteine</strong> — die normale Entwicklung in den ersten Lebenswochen. Zum <router-link :to="localeBlogPath('baby-meilensteine-tracker')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Meilenstein-Tracker</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt das Bilirubin-Risiko einschätzen</h3>
        <p class="text-stone-300 text-sm mb-5">Bhutani-Nomogramm, anonym, sofort. Mit Umrechnung mg/dL ⇄ µmol/L.</p>
        <router-link
          :to="localePath('newbornBilirubin')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Bilirubin-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ab welchem Wert ist Phototherapie nötig?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Es gibt keine feste Zahl — die AAP-Schwellen 2022 hängen von Lebensalter, Gestationsalter und Risikofaktoren ab. Bei einem reifen, gesunden Neugeborenen liegen typische Schwellen am Tag 3 zwischen 18 und 21 mg/dL, mit Risikofaktoren deutlich darunter. Entscheidung trifft die Kinderärztin.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Hilft Sonne wirklich?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nein. Direkte Sonneneinstrahlung birgt Risiko von Sonnenbrand und Überhitzung. Wirksame Phototherapie nutzt definierte Wellenlängen (440–470 nm) mit kontrollierter Intensität — sie wird in der Klinik oder mit klar instruierten Heimgeräten durchgeführt.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie oft sollte Bilirubin gemessen werden?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              In Deutschland gehören sichtbare Gelbsucht-Beurteilung und transkutane Bilirubinometrie zur U2 (3. – 10. Lebenstag). Bei früh entlassenen Neugeborenen oder Risikofaktoren wird häufiger kontrolliert — bis stabile Werte gesichert sind.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was ist Kernikterus?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Kernikterus ist die schwerste Form der Bilirubin-Toxizität: unkonjugiertes Bilirubin überwindet die Blut-Hirn-Schranke und schädigt die Basalganglien. Heute extrem selten, weil das Bhutani-Screening und die AAP-Schwellen meist rechtzeitig greifen.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
