<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Kinder-BMI berechnen: CDC-Perzentile richtig verstehen | Health Calculators',
  description: 'Kinder-BMI nach CDC-Perzentile berechnen und richtig einordnen. Warum Erwachsenen-Grenzen nicht passen, was die 5./85./95. Perzentile bedeutet und wann der Kinderarzt schauen sollte.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Kinder-BMI berechnen: CDC-Perzentile richtig verstehen',
      description: 'Kinder-BMI nach CDC-Perzentile berechnen und richtig einordnen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kinder-bmi-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum gelten für Kinder andere BMI-Werte als für Erwachsene?',
          acceptedAnswer: { '@type': 'Answer', text: 'Kinder befinden sich im Wachstum: Körperfett, Muskelmasse und Körperbau verändern sich mit Alter und Geschlecht. Fixe BMI-Grenzen wie 25 oder 30 funktionieren nicht. Stattdessen vergleicht man den BMI eines Kindes mit Tausenden gleichaltriger Kinder gleichen Geschlechts — das ergibt die CDC-Perzentile.' },
        },
        {
          '@type': 'Question',
          name: 'Was bedeutet die CDC-Perzentile?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die Perzentile zeigt, wie viel Prozent gleichaltriger Kinder gleichen Geschlechts einen niedrigeren BMI haben. 75. Perzentile heißt: 75 % aller gleichaltrigen Kinder haben einen niedrigeren BMI. Der Normalbereich liegt zwischen der 5. und 84. Perzentile.' },
        },
        {
          '@type': 'Question',
          name: 'Ab welcher Perzentile spricht man von Übergewicht?',
          acceptedAnswer: { '@type': 'Answer', text: '85. bis unter 95. Perzentile: Übergewicht. 95. Perzentile und höher: Adipositas. Unter der 5. Perzentile: Untergewicht.' },
        },
        {
          '@type': 'Question',
          name: 'Wie genau ist die CDC-Berechnung?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die CDC-LMS-Methode (Cole & Green, 1992) berechnet aus Alter, Geschlecht und BMI einen Z-Score und daraus die Perzentile. Die Werte sind klinisch validiert und gelten als Standard in den USA und vielen weiteren Ländern.' },
        },
        {
          '@type': 'Question',
          name: 'Was tun bei einem Wert außerhalb des Normalbereichs?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ein einzelner Wert ist kein Diagnoseinstrument. Wichtig ist der Verlauf über mehrere Messungen. Liegt das Kind dauerhaft unter der 5. oder über der 95. Perzentile, sollten Eltern den Kinderarzt aufsuchen, um Ernährung, Bewegung und mögliche medizinische Ursachen zu prüfen.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kinder-BMI berechnen: CDC-Perzentile richtig verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">26. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Kinderarzt sagt: <strong>„Ihr Sohn liegt auf der 92. BMI-Perzentile."</strong> Ist das jetzt schlimm? Und warum gilt für Kinder nicht einfach BMI&nbsp;&lt;&nbsp;25 = gesund wie bei Erwachsenen?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, wie der Kinder-BMI funktioniert, welche CDC-Kategorien existieren und wie du das Ergebnis deines Kindes richtig einordnest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der Erwachsenen-BMI bei Kindern versagt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beim Erwachsenen ist der BMI eine fixe Skala: unter 18,5 Untergewicht, 18,5–24,9 Normalgewicht, ab 25 Übergewicht. Bei Kindern funktioniert das nicht. Ein 4-jähriges Kind mit BMI 17 ist normalgewichtig. Ein 10-jähriges Kind mit demselben BMI von 17 liegt im unteren Normalbereich. Ein 16-jähriger mit BMI 17 wäre untergewichtig.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Grund: Körperfett, Muskelmasse und Körperbau verändern sich permanent. Säuglinge sind „pummelig", Schulkinder werden dünner, in der Pubertät kommt wieder Masse dazu. Eine einzige fixe Grenze gibt es nicht. Stattdessen vergleicht die Pädiatrie das Kind mit Tausenden gleichaltriger Kinder gleichen Geschlechts.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die CDC-Perzentile: das US-Standardwerkzeug</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Centers for Disease Control and Prevention (CDC)</strong> veröffentlichten im Jahr 2000 Wachstumskurven für US-Kinder von 2 bis 20 Jahren. Sie sind in den USA der Standard und werden auch international häufig verwendet — besonders bei der Beurteilung von Über- und Adipositas.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die CDC-Perzentile sagt: „Welcher Anteil gleichaltriger Kinder gleichen Geschlechts hat einen niedrigeren BMI?" Die 50. Perzentile ist der Median. Die 95. Perzentile bedeutet: nur 5 von 100 Kindern haben einen höheren BMI.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">CDC-Kategorien für Kinder-BMI</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Unter 5. Perzentile</span>
              <span class="text-amber-600 font-medium">Untergewicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">5.–84. Perzentile</span>
              <span class="text-emerald-600 font-medium">Normalgewicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85.–94. Perzentile</span>
              <span class="text-amber-600 font-medium">Übergewicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Ab 95. Perzentile</span>
              <span class="text-red-500 font-medium">Adipositas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So funktioniert die Berechnung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hinter den CDC-Kurven steht die <strong>LMS-Methode</strong> von Cole und Green (1992). Drei Parameter beschreiben die Verteilung für jedes Alter und Geschlecht:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 font-sans">LMS-Parameter</div>
          <div class="space-y-2 text-stone-700">
            <div><strong>L</strong> — Schiefe-Korrektur (Box-Cox-Transformation)</div>
            <div><strong>M</strong> — Median (50. Perzentile)</div>
            <div><strong>S</strong> — Streuung (Variationskoeffizient)</div>
          </div>
          <div class="mt-4 pt-4 border-t border-stone-200 text-stone-600">
            Z = [(BMI / M)<sup>L</sup> − 1] / (L × S)
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Der Z-Score wird mit der Normalverteilung in eine Perzentile umgerechnet. Z=0 entspricht der 50. Perzentile, Z=1,645 der 95. Perzentile (Adipositas-Grenze).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was die Kategorien wirklich bedeuten</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die CDC-Grenzen sind keine festen Linien zwischen „gesund" und „krank". Sie sind statistische Marker, die das Risiko für Folgeerkrankungen erhöhen.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Untergewicht (&lt; 5. P.):</span>
              <p class="text-stone-600 text-sm mt-1">Kann genetisch oder durch späte Entwicklung bedingt sein. Anhaltend niedrige Werte sollten ärztlich abgeklärt werden — Stichwort Mangelernährung, Essstörung oder chronische Erkrankung.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Normalgewicht (5.–84. P.):</span>
              <p class="text-stone-600 text-sm mt-1">Der breite Normalbereich. 80 % aller Kinder liegen hier. Konstante Werte sind ein gutes Zeichen — Sprünge nach oben oder unten verdienen Aufmerksamkeit.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Übergewicht (85.–94. P.):</span>
              <p class="text-stone-600 text-sm mt-1">Risiko, aber noch keine Adipositas. Oft mit Lebensstil-Anpassungen (mehr Bewegung, ausgewogene Ernährung) zu korrigieren. Familiärer Kontext wichtig.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Adipositas (≥ 95. P.):</span>
              <p class="text-stone-600 text-sm mt-1">Erhöhtes Risiko für Diabetes, Bluthochdruck und Folgeerkrankungen. Sollte mit Kinderarzt und ggf. Ernährungsberatung begleitet werden.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verlauf zählt mehr als ein einzelner Wert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein BMI-Wert allein sagt wenig. Entscheidend ist die <strong>Wachstumskurve über mehrere Jahre</strong>. Ein Kind, das konstant auf der 88. Perzentile liegt, ist nicht das gleiche wie ein Kind, das innerhalb von zwei Jahren von der 50. auf die 88. Perzentile springt.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Wann zum Kinderarzt?</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ BMI unter der 5. oder über der 95. Perzentile</li>
            <li>→ Sprung um mehr als 2 Hauptperzentilen (z. B. 50. → 90.)</li>
            <li>→ Stillstand oder Abfall trotz normaler Ernährung</li>
            <li>→ Symptome wie Müdigkeit, Atemprobleme oder Gelenkschmerzen</li>
          </ul>
        </div>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Berechne den BMI deines Kindes</h3>
        <p class="text-base text-stone-600 mb-6">Alter, Größe und Gewicht eingeben — der Rechner zeigt sofort BMI und CDC-Perzentile.</p>
        <router-link
          :to="localePath('pediatricBmi')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Kinder-BMI-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Kinder-BMI ist nicht der Erwachsenen-BMI. Statt fixer Grenzen vergleicht man das Kind mit gleichaltrigen Kindern desselben Geschlechts und liest die CDC-Perzentile ab. Normalgewicht liegt zwischen der 5. und 84. Perzentile, Adipositas beginnt ab der 95.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein einzelner Wert ist nie eine Diagnose. Was zählt, ist die Kurve über Zeit — und der Blick auf das ganze Kind: Ernährung, Bewegung, Schlaf, Wohlbefinden. Bei Unsicherheit hilft der Kinderarzt weiter.
        </p>
      </div>

    </div>

    <RelatedArticles slug="kinder-bmi-berechnen" />
  </article>
</template>
