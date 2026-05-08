<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kreatinin-Clearance berechnen — Cockcroft-Gault einfach erklärt | Health Calculators',
  description: 'Kreatinin-Clearance mit der Cockcroft-Gault-Formel berechnen — Bedeutung, Normalwerte, Bezug zur GFR und Dosis-Anpassung von Medikamenten verständlich erklärt.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Kreatinin-Clearance berechnen — Cockcroft-Gault einfach erklärt',
      description: 'Wie funktioniert die Cockcroft-Gault-Formel? Was sagt deine Kreatinin-Clearance über deine Nierenfunktion aus? Alle Antworten auf einen Blick.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kreatinin-clearance-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist die Kreatinin-Clearance?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die Kreatinin-Clearance gibt an, wie viel Milliliter Blut pro Minute von Kreatinin gereinigt werden. Sie ist ein Surrogat für die glomeruläre Filtrationsrate (GFR).' },
        },
        {
          '@type': 'Question',
          name: 'Welche Werte sind normal?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bei jungen Erwachsenen 90–140 mL/min. Werte < 60 mL/min über 3 Monate gelten als chronische Nierenerkrankung (CKD).' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kreatinin-Clearance berechnen — Cockcroft-Gault einfach erklärt</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Kreatinin-Clearance</strong> ist einer der ältesten und meistverwendeten Marker der Nierenfunktion. Sie taucht auf jedem Beipackzettel auf, der eine Dosis-Anpassung bei Niereninsuffizienz erwähnt — und die <strong>Cockcroft-Gault-Formel</strong> aus dem Jahr 1976 liefert sie aus drei Werten: Alter, Gewicht und Serum-Kreatinin.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Beitrag siehst du, wie die Formel funktioniert, was dein Wert bedeutet, wann du nephrologisch abklären solltest und wie sich Cockcroft-Gault zu modernen GFR-Schätzern (CKD-EPI) verhält.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was misst die Kreatinin-Clearance?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kreatinin ist ein Abbauprodukt aus dem Muskelstoffwechsel. Es wird relativ konstant produziert und nahezu ausschließlich durch die Nieren ausgeschieden. Die <strong>Clearance</strong> beschreibt das Blutvolumen, das pro Minute von Kreatinin „gereinigt" wird — also indirekt, wie viele Milliliter Blut die Nieren in derselben Zeit filtrieren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Damit ist die Clearance ein <strong>Surrogat-Marker</strong> für die glomeruläre Filtrationsrate (GFR). Eine echte Bestimmung wäre nur mit einer 24-Stunden-Urinsammlung oder Inulin-Clearance möglich — Cockcroft-Gault schätzt sie aus Routine-Werten in 5 Sekunden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Cockcroft-Gault-Formel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-900 font-medium mb-2 tabular-nums">CrCl = (140 − Alter) × Gewicht (kg) / (72 × S<sub>Krea</sub> mg/dL)</p>
          <p class="text-sm text-stone-500">Bei Frauen: Ergebnis × 0,85</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Nutzt du SI-Einheiten (µmol/L), rechnet der Rechner automatisch um: <span class="tabular-nums">88,4 µmol/L = 1 mg/dL</span>. Die <strong>0,85-Korrektur für Frauen</strong> berücksichtigt die im Schnitt geringere Muskelmasse — ohne sie würde die Formel die Clearance bei Frauen systematisch überschätzen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ist welcher Wert auffällig?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Clearance</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einordnung</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">CKD-Stadium</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 90 mL/min</td>
                <td class="px-6 py-3 text-stone-600">Normal</td>
                <td class="px-6 py-3 text-stone-600">G1</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 – 89</td>
                <td class="px-6 py-3 text-stone-600">Leicht eingeschränkt</td>
                <td class="px-6 py-3 text-stone-600">G2</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30 – 59</td>
                <td class="px-6 py-3 text-stone-600">Mäßig eingeschränkt</td>
                <td class="px-6 py-3 text-stone-600">G3</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 29</td>
                <td class="px-6 py-3 text-stone-600">Stark eingeschränkt</td>
                <td class="px-6 py-3 text-stone-600">G4</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 15</td>
                <td class="px-6 py-3 text-stone-600">Nierenversagen</td>
                <td class="px-6 py-3 text-stone-600">G5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          CKD-Stadien <strong>G3 und tiefer</strong> über mehr als 3 Monate gelten als chronische Nierenerkrankung (KDIGO 2024). Je niedriger der Wert, desto wichtiger werden Dosis-Anpassungen, Vermeidung nephrotoxischer Substanzen und enge nephrologische Mitbetreuung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Cockcroft-Gault vs. CKD-EPI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          KDIGO empfiehlt heute die <strong>CKD-EPI 2021</strong>-Formel zur eGFR-Schätzung — sie ist genauer, vor allem bei normaler bis leicht eingeschränkter Funktion. Cockcroft-Gault bleibt aber relevant: viele Beipackzettel und ältere Studien beziehen sich darauf, weshalb Apothekerinnen und Apotheker den Wert weiterhin verlangen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Praxis: <strong>beide Werte berechnen</strong>. Die eGFR ergänzt die Einordnung der Nierenfunktion; die Kreatinin-Clearance steuert die konkrete Medikamenten-Dosis.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann der Wert irreführen kann</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Adipositas</strong> — Gewicht in der Formel überschätzt das aktive Muskelvolumen. Bei BMI &gt; 30 oft besser: ideales Körpergewicht oder eGFR.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sarkopenie / Untergewicht</strong> — wenig Muskelmasse senkt das Kreatinin künstlich, Clearance wirkt scheinbar besser als sie ist.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Akutes Nierenversagen</strong> — die Formel ist für stabilen Steady-State gedacht. Bei rasch steigendem Kreatinin nicht zuverlässig.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schwangerschaft</strong> — physiologisch erhöhte GFR. Cockcroft-Gault unterschätzt hier.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Vegane Ernährung</strong> — geringere Fleischzufuhr senkt das Serum-Kreatinin und kann die Clearance leicht überschätzen.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen & Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR-Rechner</strong> — die moderne Schätzung nach CKD-EPI 2021 ergänzt die Kreatinin-Clearance. Zum <router-link :to="localeBlogPath('gfr-rechner')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blutdruck</strong> — Bluthochdruck ist die zweitwichtigste Ursache chronischer Niereninsuffizienz. Zur <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Blutdruck-Anleitung</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Diabetes-Risiko</strong> — Diabetes ist die häufigste Ursache von CKD weltweit. Zum <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">FINDRISC-Test</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Kreatinin-Clearance berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Cockcroft-Gault, anonym, sofort. Mit Umrechnung von kg/lbs und mg/dL/µmol/L.</p>
        <router-link
          :to="localePath('creatinineClearance')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Kreatinin-Clearance Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie oft sollte ich die Clearance kontrollieren?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei stabiler Funktion und ohne Risikofaktoren reicht eine jährliche Kontrolle. Bei Diabetes, Bluthochdruck, neuer Medikation mit Nierenwirkung oder bekanntem CKD-Stadium G3+ häufiger — meist alle 3–6 Monate.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Wert ist 65 mL/min — was bedeutet das?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ein Wert in diesem Bereich entspricht CKD-Stadium G2 (leicht eingeschränkt). Allein ist das kein Krankheitsbild — entscheidend ist der Verlauf, eine eventuelle Albuminurie und die zugrundeliegende Ursache. Mit deinem Hausarzt besprechen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Medikamente sind nephrotoxisch?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Häufige Beispiele: NSAR (Ibuprofen, Diclofenac), Aminoglykoside, Kontrastmittel, Lithium, hochdosiertes Paracetamol, manche Antibiotika. Bei Clearance &lt; 60 mL/min vor Einnahme apothekerlich oder ärztlich abklären lassen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Muss ich nüchtern zur Blutabnahme?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Für Kreatinin nicht zwingend. Allerdings können große Mengen Fleisch in den Stunden vor der Blutabnahme das Serum-Kreatinin kurzzeitig erhöhen — viele Labore empfehlen, vor der Bestimmung 12 h kein Fleisch zu essen.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
