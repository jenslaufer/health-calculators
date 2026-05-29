<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'HOMA-IR berechnen: Insulinresistenz früh erkennen | Health Calculators',
  description: 'HOMA-IR aus Nüchternblutzucker und Nüchterninsulin berechnen. Formel, Risikobänder, klinische Bedeutung und was bei erhöhten Werten zu tun ist.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'HOMA-IR berechnen: Insulinresistenz früh erkennen',
      description: 'HOMA-IR-Formel, Risikoeinordnung und praktische Schritte bei erhöhten Werten.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-28',
      dateModified: '2026-05-28',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/homa-ir-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist HOMA-IR?',
          acceptedAnswer: { '@type': 'Answer', text: 'HOMA-IR (Homeostatic Model Assessment for Insulin Resistance) ist ein einfacher Marker für Insulinresistenz. Er nutzt nur zwei nüchterne Blutwerte: Glukose und Insulin. Eingeführt 1985 von Matthews und Kollegen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie wird HOMA-IR berechnet?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die klassische Formel: HOMA-IR = (Nüchterninsulin in µU/mL × Nüchternglukose in mg/dL) / 405. In SI-Einheiten: (Insulin µU/mL × Glukose mmol/L) / 22,5. Beide Varianten liefern denselben Index.' },
        },
        {
          '@type': 'Question',
          name: 'Welche Werte gelten als auffällig?',
          acceptedAnswer: { '@type': 'Answer', text: 'Unter 1,5: normal. 1,5 bis 1,99: leichte Insulinresistenz. 2,0 bis 2,89: relevante Insulinresistenz. Ab 2,9: schwere Insulinresistenz mit hohem Risiko für Typ-2-Diabetes.' },
        },
        {
          '@type': 'Question',
          name: 'Wer sollte HOMA-IR messen lassen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sinnvoll bei PCOS, Fettleber, Übergewicht, familiärer Diabetesbelastung oder grenzwertigem HbA1c. Der Test ist günstig, schnell und gibt frühe Hinweise — noch bevor der Blutzucker auffällig wird.' },
        },
        {
          '@type': 'Question',
          name: 'Was verfälscht den Wert?',
          acceptedAnswer: { '@type': 'Answer', text: 'Akute Infekte, Stress, kürzliche Mahlzeiten, Steroide, Schwangerschaft oder eine zu kurze Nüchternperiode (unter 8 Stunden) können sowohl Glukose als auch Insulin verschieben. Im Zweifel den Test in Ruhe wiederholen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie lässt sich der HOMA-IR senken?',
          acceptedAnswer: { '@type': 'Answer', text: 'Gewichtsreduktion, regelmäßige Bewegung — vor allem Krafttraining und Ausdauer kombiniert —, kohlenhydratbewusste Ernährung und ausreichend Schlaf verbessern die Insulinsensitivität messbar. Erste Effekte zeigen sich oft schon nach wenigen Wochen.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">HOMA-IR berechnen: Insulinresistenz früh erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">28. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Blutzucker ist noch normal — und trotzdem stimmt etwas nicht. Genau diese Lücke füllt der <strong>HOMA-IR</strong>. Aus zwei Nüchternblutwerten zeigt er, wie hart die Bauchspeicheldrüse arbeiten muss, um den Zucker im Griff zu halten.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt Formel, Risikobänder und was sich bei erhöhten Werten konkret tun lässt — bevor aus Insulinresistenz Typ-2-Diabetes wird.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel: zwei Zahlen, ein Index</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Matthews und Kollegen veröffentlichten den Index 1985. Die Idee: Wer insulinresistent ist, produziert nüchtern <em>mehr</em> Insulin, um denselben Blutzucker zu erreichen. Das Produkt aus beiden Werten zeigt diese Mehrarbeit.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          HOMA-IR = (Insulin µU/mL × Glukose mg/dL) / 405
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In SI-Einheiten (mmol/L): HOMA-IR = (Insulin µU/mL × Glukose mmol/L) / 22,5. Beides liefert denselben Index — der Divisor unterscheidet sich nur, weil 22,5 × 18 = 405 ist (Glukose-Umrechnungsfaktor).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Glukose 90 mg/dL, Insulin 8 µU/mL → (8 × 90) / 405 = <strong>1,78</strong>. Das liegt im Bereich „leichte Insulinresistenz".
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risikobänder auf einen Blick</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">HOMA-IR-Einordnung</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&lt; 1,5</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">1,5 – 1,99</span>
              <span class="text-amber-600 font-medium">Leichte Insulinresistenz</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">2,0 – 2,89</span>
              <span class="text-orange-600 font-medium">Insulinresistenz</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">≥ 2,9</span>
              <span class="text-red-500 font-medium">Schwer</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Grenzen stammen aus Querschnittsstudien (u. a. Geloneze 2009). Sie sind ein guter Richtwert, aber nicht in Stein gemeißelt — Labor, Alter und Ethnie können die Bewertung verschieben.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum HOMA-IR mehr aussagt als nur der Nüchternzucker</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Nüchternblutzucker von 95 mg/dL gilt als unauffällig. Aber: Wenn dafür schon 15 µU/mL Insulin im Spiel sind, kämpft die Bauchspeicheldrüse bereits gegen eine wachsende Resistenz an. Der
          <router-link :to="localePath('hba1c')" class="text-stone-900 underline hover:no-underline">HbA1c-Wert</router-link>
          zeigt das oft erst Jahre später.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Mit HOMA-IR lässt sich diese stille Vorphase sichtbar machen — und genau hier sind Lebensstiländerungen am wirksamsten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wer sollte den Wert messen lassen?</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Übergewicht oder Adipositas (BMI ≥ 25)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Polyzystisches Ovarsyndrom (PCOS)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Nicht-alkoholische Fettleber</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Familiäre Belastung mit Typ-2-Diabetes</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Schon grenzwertiger HbA1c oder Nüchternzucker</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer zu einer dieser Gruppen gehört, profitiert von einer frühen Bestimmung. Der Test kostet wenig und liefert eine klare Richtung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was den Wert verfälschen kann</h2>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Vor dem Test beachten</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ 8–12 Stunden vollständig nüchtern</li>
            <li>→ Kein akuter Infekt oder hohes Fieber</li>
            <li>→ Keine kurzfristige Steroidtherapie</li>
            <li>→ Vor dem Test ausreichend geschlafen</li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          In der Schwangerschaft greifen andere Referenzwerte — hier ersetzt der Test nicht den oralen Glukosetoleranztest.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">HOMA-IR direkt berechnen</h3>
        <p class="text-base text-stone-600 mb-6">Nüchternglukose und Nüchterninsulin eingeben — der Rechner liefert den Index und die Einordnung.</p>
        <router-link
          :to="localePath('homaIr')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum HOMA-IR-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was tun bei erhöhtem HOMA-IR?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Insulinresistenz ist umkehrbar — vor allem in den frühen Stadien. Drei Hebel wirken am stärksten:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">1.</span><span class="text-stone-600"><strong>Bewegung:</strong> 150 Minuten moderate Ausdauer pro Woche plus zweimal Krafttraining. Muskelzellen werden so deutlich insulinempfindlicher.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">2.</span><span class="text-stone-600"><strong>Gewichtsreduktion:</strong> Schon 5–7 % Körpergewicht weniger senken den HOMA-IR oft messbar.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">3.</span><span class="text-stone-600"><strong>Ernährung:</strong> Weniger raffinierte Kohlenhydrate, mehr Ballaststoffe, ausreichend Protein. Zuckerhaltige Getränke streichen ist der größte Einzelhebel.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei stark erhöhten Werten kommt — auf ärztliche Empfehlung — auch Metformin als Unterstützung in Frage. Die Lebensstilbasis bleibt aber entscheidend.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          HOMA-IR allein ist nur ein Mosaikstein. Für die Langzeitperspektive lohnt sich der
          <router-link :to="localePath('hba1c')" class="text-stone-900 underline hover:no-underline">HbA1c-Konverter</router-link>,
          für die strukturierte Risikoabschätzung der
          <router-link :to="localePath('diabetesRisk')" class="text-stone-900 underline hover:no-underline">Diabetes-Risiko-Rechner</router-link>.
          Da Übergewicht eine zentrale Ursache ist, hilft auch der
          <router-link :to="localePath('bmi')" class="text-stone-900 underline hover:no-underline">BMI-Rechner</router-link>
          beim Einordnen des eigenen Status.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          HOMA-IR ist ein einfacher, aber unterschätzter Marker. Zwei Laborwerte reichen, um die stille Vorstufe von Typ-2-Diabetes sichtbar zu machen — Jahre bevor der Blutzucker steigt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei erhöhten Werten ist die Botschaft selten dramatisch, aber klar: Bewegung, Gewicht, Ernährung. Wer früh ansetzt, hat die besten Karten.
        </p>
      </div>
    </div>

    <RelatedArticles slug="homa-ir-berechnen" />
  </article>
</template>
