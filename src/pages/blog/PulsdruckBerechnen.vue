<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Pulsdruck berechnen: Formel, Normalwerte, Eng vs. Weit | Health Calculators',
  description: 'Pulsdruck per Formel (SBP − DBP) berechnen. Klinische Bedeutung von engem (< 40), normalem (40–60) und weitem (> 60 mmHg) Pulsdruck — Hinweise auf Herzinsuffizienz und Gefäßsteifigkeit.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pulsdruck berechnen: Formel, Normalwerte, Eng vs. Weit',
      description: 'Pulsdruck-Formel, Normalbereich, klinische Bedeutung von engem und weitem Pulsdruck und altersabhängige Einordnung.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-31',
      dateModified: '2026-05-31',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/pulsdruck-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der Pulsdruck?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der Pulsdruck (PP) ist die Differenz zwischen systolischem und diastolischem Blutdruck: PP = SBP − DBP. Er spiegelt die Kraft pro Herzschlag und die Dehnbarkeit der großen Arterien wider.' },
        },
        {
          '@type': 'Question',
          name: 'Welcher Pulsdruck ist normal?',
          acceptedAnswer: { '@type': 'Answer', text: '40 bis 60 mmHg in Ruhe gelten bei Erwachsenen als normal. Werte unter 40 sind eng, Werte über 60 sind weit.' },
        },
        {
          '@type': 'Question',
          name: 'Warum ist ein enger Pulsdruck relevant?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ein enger PP (< 40 mmHg) kann auf reduziertes Schlagvolumen hindeuten — z. B. Herzinsuffizienz, schwere Aortenstenose, Perikardtamponade oder hypovolämischen Schock.' },
        },
        {
          '@type': 'Question',
          name: 'Warum ist ein weiter Pulsdruck relevant?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ein weiter PP (> 60 mmHg) spiegelt meist eine altersbedingte arterielle Versteifung wider, kann aber auch Aorteninsuffizienz, schwere Anämie oder Hyperthyreose anzeigen. Bei älteren Erwachsenen ist er ein unabhängiger kardiovaskulärer Risikomarker.' },
        },
        {
          '@type': 'Question',
          name: 'Wie beeinflusst das Alter den Pulsdruck?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nach dem 50. Lebensjahr steigt der Pulsdruck oft, weil die großen Arterien an Elastizität verlieren. Ein PP von 50–60 bei einem 70-Jährigen ist weniger besorgniserregend als der gleiche Wert bei einem 25-Jährigen.' },
        },
        {
          '@type': 'Question',
          name: 'Was tun bei dauerhaft auffälligem Pulsdruck?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mehrfach unter standardisierten Bedingungen messen, kardiovaskuläre Risikofaktoren (Blutdruck, LDL, Diabetes, Rauchen) konsequent behandeln und bei anhaltend engem PP mit Symptomen oder weitem PP > 70 mmHg kardiologisch abklären lassen.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pulsdruck berechnen: Formel, Normalwerte, Eng vs. Weit</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">31. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Auf jedem Blutdruckergebnis stehen zwei Zahlen — systolisch und diastolisch. Die <strong>dritte Zahl</strong>, der Pulsdruck, fehlt meist im Befund, sagt aber überraschend viel über Herz und Gefäße aus.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Eine einzige Subtraktion verrät, ob das Schlagvolumen passt und wie steif die großen Arterien sind. Diese Anleitung zeigt Formel, Normalbereich und klinische Bedeutung — und warum „eng" und „weit" verschiedene Geschichten erzählen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          PP = SBP − DBP
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei einem Standardwert von <strong>120/80 mmHg</strong> ist der Pulsdruck genau 40 — die untere Normgrenze. Bei 140/70 wären es 70 mmHg, also bereits weit. Bei 100/85 nur 15 mmHg, also deutlich eng.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Wert reflektiert zwei Dinge gleichzeitig: das vom linken Ventrikel ausgeworfene Schlagvolumen und die Compliance der Aorta. Beides verändert sich mit Alter, Pathologie und Volumenstatus.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Klinische Bänder</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Pulsdruck-Klassifikation</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&lt; 40 mmHg</span>
              <span class="text-red-600 font-medium">Eng</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">40 – 60 mmHg</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">&gt; 60 mmHg</span>
              <span class="text-orange-600 font-medium">Weit</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Diese Grenzen sind grobe Orientierungen für Erwachsene in Ruhe. Während Belastung steigt der Pulsdruck physiologisch — eine Einzelmessung darf nie isoliert interpretiert werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Enger Pulsdruck (&lt; 40 mmHg): Was steckt dahinter?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein enger Pulsdruck spricht für ein <strong>reduziertes Schlagvolumen</strong>. Häufige Ursachen:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Herzinsuffizienz:</strong> Das geschwächte Herz wirft pro Schlag weniger Volumen aus.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Schwere Aortenstenose:</strong> Die verengte Klappe begrenzt den systolischen Auswurf.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Perikardtamponade / konstriktive Perikarditis:</strong> Behinderte Füllung → geringeres Schlagvolumen.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Hypovolämischer Schock:</strong> Volumendefizit, kompensatorischer Vasokonstriktion.</span></li>
        </ul>
        <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-red-800 mb-2">Warnzeichen</p>
          <p class="text-sm text-red-700">PP &lt; 25 mmHg mit Tachykardie, kalter Peripherie oder Bewusstseinstrübung → notfallmäßige Abklärung. Ein enger PP bei niedrigem systolischen Druck (z. B. 90/75) ist klinisch relevanter als ein enger PP bei normalem Druck (130/100).</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weiter Pulsdruck (&gt; 60 mmHg): Was steckt dahinter?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein weiter Pulsdruck zeigt entweder <strong>versteifte große Arterien</strong> oder einen erhöhten Auswurf an:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Arterielle Versteifung (Alter, Atherosklerose):</strong> Häufigste Ursache; die unelastische Aorta dämpft den Druckpuls nicht mehr.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Aorteninsuffizienz:</strong> Diastolischer Rückfluss senkt den DBP, klassisches Bild „Wasserschlag-Puls".</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Hyperthyreose:</strong> Erhöhtes Herzzeitvolumen, periphere Vasodilatation.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Schwere Anämie, AV-Fistel, Beriberi:</strong> Hochzirkulatorische Zustände.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Erwachsenen &gt; 60 Jahren ist ein PP &gt; 60 mmHg ein <strong>unabhängiger Risikomarker</strong> für Herzinfarkt, Schlaganfall und Herzinsuffizienz — sogar bei normalem Mittelwert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Alter und Pulsdruck</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bis etwa zum 50. Lebensjahr steigen Systole und Diastole parallel — der Pulsdruck bleibt stabil bei 40–45 mmHg. Danach steigt vor allem die Systole, die Diastole fällt sogar leicht: der PP nimmt zu. Das ist <em>ein</em> Alterungsphänomen — wird er zu hoch, ist es ein <em>pathologisches</em>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein PP von 55 bei einem 30-Jährigen ist auffälliger als ein PP von 70 bei einem 75-Jährigen. Immer im Altersrahmen interpretieren.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Pulsdruck jetzt berechnen</h3>
        <p class="text-base text-stone-600 mb-6">Systole, Diastole (optional Alter) eingeben — der Rechner liefert PP, klinische Einordnung und altersabhängigen Kontext.</p>
        <router-link
          :to="localePath('pulsePressure')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Pulsdruck-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bei auffälligem Pulsdruck hilft</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">1.</span><span class="text-stone-600"><strong>Standardisiert messen:</strong> 5 Minuten sitzen, drei Messungen im Abstand von einer Minute, Mittelwert nutzen.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">2.</span><span class="text-stone-600"><strong>Kardiovaskuläre Risikofaktoren senken:</strong> Blutdruck, LDL, Diabetes, Rauchstopp, Gewicht — alle reduzieren auch arterielle Steifigkeit.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">3.</span><span class="text-stone-600"><strong>Bei engem PP mit Symptomen:</strong> Echokardiografie zur Beurteilung von Klappen und Funktion.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">4.</span><span class="text-stone-600"><strong>Bei weitem PP &gt; 70 mmHg:</strong> Herzfrequenz, Schilddrüsenfunktion und ggf. Aortenklappe abklären.</span></li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Pulsdruck ist eine Kennzahl unter mehreren. Sinnvoll kombinieren mit dem
          <router-link :to="localePath('bloodPressure')" class="text-stone-900 underline hover:no-underline">Blutdruck-Rechner</router-link>
          für die Klassifikation der arteriellen Hypertonie, dem
          <router-link :to="localePath('meanArterialPressure')" class="text-stone-900 underline hover:no-underline">Rechner für den mittleren arteriellen Druck (MAP)</router-link>
          für die Organperfusion und dem
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Herz-Kreislauf-Risiko-Rechner</router-link>
          für das 10-Jahres-Risiko nach Framingham / SCORE2.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Subtraktion, drei Bänder, viele Hinweise. Der Pulsdruck ergänzt Systole und Diastole um Information über Schlagvolumen und Gefäßsteifigkeit, die das Mittelwertbild allein nicht zeigt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Werte unter 40 oder über 60 mmHg sind keine Diagnose — aber ein guter Anlass, genauer hinzuschauen.
        </p>
      </div>
    </div>

    <RelatedArticles slug="pulsdruck-berechnen" />
  </article>
</template>
