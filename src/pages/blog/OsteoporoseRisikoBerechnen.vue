<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Osteoporose-Risiko berechnen: FRAX 10-Jahres-Frakturrisiko verstehen | Health Calculators',
  description: 'Schätze dein 10-Jahres-Frakturrisiko mit dem FRAX-basierten Osteoporose-Rechner. Risikofaktoren, T-Score, DVO-Behandlungsschwelle und Prävention — verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteoporose-Risiko berechnen: FRAX 10-Jahres-Frakturrisiko verstehen',
    description: 'Schätze dein 10-Jahres-Frakturrisiko mit dem FRAX-basierten Osteoporose-Rechner. Risikofaktoren, T-Score, DVO-Behandlungsschwelle und Prävention — verständlich erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/osteoporose-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Osteoporose-Risiko berechnen: FRAX 10-Jahres-Frakturrisiko verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">6. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Deutschland leben rund <strong>6 Millionen Menschen mit Osteoporose</strong> — die Mehrheit Frauen nach der Menopause. Jährlich werden über 700.000 osteoporotische Frakturen registriert, davon ca. 130.000 Hüftbrüche mit erheblicher Morbidität. Dabei ist Osteoporose gut vermeidbar und behandelbar — wenn sie erkannt wird.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein <strong>10-Jahres-Frakturrisiko</strong> mit einem FRAX-basierten Score abschätzt — ohne DXA-Knochendichtemessung, aber präzise genug, um den Bedarf für ärztliche Abklärung zu erkennen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Osteoporose?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Osteoporose ist eine systemische Skeletterkrankung mit <strong>verminderter Knochenmasse und gestörter Mikroarchitektur</strong>. Die Knochen werden brüchig — typische Frakturlokalisationen sind Wirbelkörper, Hüfte, Handgelenk und Oberarmkopf. Ein Drittel aller Frauen über 50 erleidet im Laufe ihres Lebens eine osteoporotische Fraktur.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Diagnostisch wird die Knochendichte per <strong>DXA-Messung am Femurhals und Lendenwirbelsäule</strong> bestimmt. Der T-Score vergleicht den Wert mit gesunden jungen Erwachsenen: T ≤ -2,5 entspricht der WHO-Definition Osteoporose, -2,4 bis -1,0 ist Osteopenie (Vorstufe).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FRAX — der Goldstandard für die Risikoschätzung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die WHO entwickelte mit FRAX (Fracture Risk Assessment Tool) einen Algorithmus, der das <strong>10-Jahres-Risiko für eine schwere osteoporotische Fraktur</strong> aus 11 klinischen Risikofaktoren berechnet — optional mit Knochendichte. FRAX bildet die Grundlage der DVO- und NOF-Behandlungsleitlinien.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser Rechner überträgt die FRAX-Logik in einen einfachen Punktescore — ideal als Vorscreening, bevor du eine DXA durchführen lässt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 11 wichtigsten Risikofaktoren</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risikofaktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Alter</td><td class="px-6 py-3 text-stone-600">0–7</td><td class="px-6 py-3 text-stone-600">Stärkster nicht-modifizierbarer Faktor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Weibliches Geschlecht</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Östrogen-Mangel nach Menopause</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">BMI &lt; 19</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Untergewicht reduziert Knochenmasse</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Frühere Fraktur</td><td class="px-6 py-3 text-stone-600">+3</td><td class="px-6 py-3 text-stone-600">Stärkster modifizierbarer Prädiktor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hüftfraktur Elternteil</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Wichtigster genetischer Faktor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Rauchen</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Hemmt Osteoblasten, fördert Frakturheilungsstörungen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Glukokortikoide ≥ 3 Mon.</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Sekundäre Osteoporose Nr. 1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Rheumatoide Arthritis</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Entzündung + Glukokortikoide</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Sekundäre Ursachen</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Diabetes Typ 1, Hyperthyreose, frühe Menopause</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Alkohol ≥ 3 E/Tag</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Hemmt Osteoblasten, erhöht Sturzrisiko</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">T-Score (DXA)</td><td class="px-6 py-3 text-stone-600">0–3</td><td class="px-6 py-3 text-stone-600">Optional, wenn Knochendichtemessung vorliegt</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Osteoporose-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">FRAX-basiertes 10-Jahres-Frakturrisiko aus Alter, BMI und 8 Risikofaktoren — sofort, anonym, ohne Anmeldung.</p>
        <router-link
          :to="localePath('osteoporosisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ist eine Therapie nötig?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die DVO-Leitlinie empfiehlt eine medikamentöse Therapie ab einem <strong>10-Jahres-Risiko von ≥ 20 % für schwere Frakturen</strong> — entspricht in unserem Score ≥ 8 Punkten. Klare Therapieindikationen sind außerdem:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">T-Score ≤ -2,5 in der DXA</li>
          <li class="text-base text-stone-600 leading-relaxed">Stattgehabte Wirbelfraktur (radiologisch nachgewiesen)</li>
          <li class="text-base text-stone-600 leading-relaxed">Hüftfraktur ohne adäquates Trauma</li>
          <li class="text-base text-stone-600 leading-relaxed">Langzeit-Glukokortikoid-Therapie ≥ 7,5 mg Prednisolon-Äquivalent</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Therapieoptionen im Überblick</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bisphosphonate</strong> (Alendronat, Risedronat, Zoledronat): First-Line, oral oder i.v., reduzieren Frakturrate um ca. 50 %.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Denosumab</strong>: Antikörper gegen RANKL, alle 6 Monate s.c. — Vorsicht beim Absetzen (Rebound-Frakturen).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Teriparatid</strong>: PTH-Analog, anabol, für schwere Osteoporose mit hohem Frakturrisiko.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Romosozumab</strong>: Sklerostin-Antikörper, dual wirksam, neue Option bei sehr hohem Risiko.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Basistherapie</strong>: Immer 1000 mg Kalzium und 800–1000 IE Vitamin D — siehe auch unseren <router-link :to="localeBlogPath('vitamin-d-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Vitamin-D-Rechner</router-link>.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Prävention: Was du selbst tun kannst</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Belastung &amp; Krafttraining:</strong> 2–3× pro Woche, am besten mit Springen oder Krafttraining gegen Widerstand.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Eiweiß:</strong> 1,0–1,2 g pro kg Körpergewicht, gleichmäßig über den Tag verteilt.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Kalzium:</strong> 1000 mg pro Tag, bevorzugt aus Milchprodukten und kalziumreichem Wasser.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vitamin D:</strong> 800–1000 IE pro Tag, höher bei Mangel oder geringer Sonnenexposition.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sturzprophylaxe:</strong> Sehkraft prüfen, rutschfeste Schuhe, sichere Wohnumgebung.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Verzicht auf:</strong> Nikotin, Alkohol &gt; 2 Einheiten/Tag, exzessives Untergewicht.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Knochengesundheit hängt eng mit anderen Stoffwechsel- und Lebensstilfaktoren zusammen. Mit dem
          <router-link :to="localeBlogPath('vitamin-d-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Vitamin-D-Rechner</router-link>
          ermittelst du deinen Bedarf für eine ausreichende Kalziumresorption. Der
          <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Rechner für biologisches Alter</router-link>
          bewertet dein Alterungstempo holistisch — Knochen- und Muskelmasse gehören dazu. Und wer untergewichtig ist, profitiert vom
          <router-link :to="localeBlogPath('bmi-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link>
          zur ersten Orientierung — niedriger BMI ist ein etablierter Frakturrisikofaktor.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Osteoporose entwickelt sich über Jahre still — die erste Fraktur ist oft das erste Symptom. Mit unserem
          <router-link :to="localePath('osteoporosisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Osteoporose-Risiko-Rechner</router-link>
          siehst du in Sekunden, ob eine DXA-Messung sinnvoll ist. Frühzeitige Diagnose plus konsequente Basis- und ggf. medikamentöse Therapie reduziert das Frakturrisiko nachweislich um die Hälfte.
        </p>
      </div>

      <RelatedArticles slug="osteoporose-risiko-berechnen" />
    </div>
  </article>
</template>
