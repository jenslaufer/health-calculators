<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Wachstumsperzentile Kinder: Was die Kurven wirklich bedeuten | Health Calculators',
  description: 'Wachstumsperzentilen verständlich erklärt: Wie WHO-Kurven funktionieren, was normal ist und wann du zum Kinderarzt solltest.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wachstumsperzentile Kinder: Was die Kurven wirklich bedeuten',
    description: 'Wachstumsperzentilen verständlich erklärt: Wie WHO-Kurven funktionieren, was normal ist und wann du zum Kinderarzt solltest.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/wachstumsperzentile-kinder',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">
        &larr; Blog
      </router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">
        Wachstumsperzentile Kinder: Was die Kurven wirklich bedeuten
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beim nächsten Kinderarztbesuch zeigt der Arzt auf eine Kurve und sagt: <strong>„Ihr Kind liegt auf der 25. Perzentile."</strong> Was bedeutet das eigentlich? Grund zur Sorge oder völlig normal?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wachstumsperzentilen sind eines der wichtigsten Werkzeuge in der Pädiatrie — aber sie werden häufig missverstanden. Dieser Artikel erklärt, wie sie funktionieren, was die WHO-Kurven messen und wie du die Werte für dein Kind richtig einordnest.
        </p>
      </div>

      <!-- Was sind Perzentilen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sind Wachstumsperzentilen?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Perzentile gibt an, wie ein Messwert im Vergleich zu einer Referenzpopulation einzuordnen ist. Die <strong>25. Gewichtsperzentile</strong> bedeutet: 25 % aller Kinder gleichen Alters und Geschlechts wiegen weniger, 75 % wiegen mehr.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Entscheidend: Eine Perzentile ist <em>keine</em> Prozentzahl für „wie gut" ein Kind ist. Ein Kind auf der 10. Größenperzentile ist nicht kleiner als es sein sollte — es ist schlicht schlanker als 90 % der Gleichaltrigen, aber das kann seiner genetischen Anlage vollkommen entsprechen.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Wichtige Referenzperzentilen</p>
          <div class="space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">3. Perzentile</span>
              <span class="text-stone-800 font-medium">Untere Warngrenze</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">15. Perzentile</span>
              <span class="text-stone-800 font-medium">Unterer Normalbereich</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">50. Perzentile</span>
              <span class="text-stone-800 font-medium">Medianwert</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">85. Perzentile</span>
              <span class="text-stone-800 font-medium">Oberer Normalbereich</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">97. Perzentile</span>
              <span class="text-stone-800 font-medium">Obere Warngrenze</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Der <strong>Normalbereich liegt zwischen der 3. und 97. Perzentile</strong>. Werte darunter oder darüber sind nicht automatisch krankhaft, signalisieren aber, dass eine genauere Untersuchung sinnvoll sein kann.
        </p>
      </div>

      <!-- WHO-Standard -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHO-Wachstumsstandards: die internationale Referenz</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Weltgesundheitsorganisation (WHO) veröffentlichte 2006 neue Wachstumsstandards für Kinder von 0 bis 5 Jahren, 2007 ergänzt durch Referenzwerte bis 19 Jahre. Diese Standards gelten heute weltweit als Goldstandard.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Besonderheit: Die WHO-Standards beschreiben das <strong>optimale Wachstum</strong> unter idealen Bedingungen (gestillte Kinder, Nichtraucher-Haushalt, keine chronischen Erkrankungen) — nicht das durchschnittliche Wachstum einer beliebigen Bevölkerung. Sie sind also ein Ziel, kein bloßer Durchschnitt.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Welche Messwerte die WHO erfasst</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Gewicht für Alter</span>
                <p class="text-xs text-stone-500">0–10 Jahre, Jungen und Mädchen</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Größe / Länge für Alter</span>
                <p class="text-xs text-stone-500">0–18 Jahre, Jungen und Mädchen</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">BMI für Alter</span>
                <p class="text-xs text-stone-500">2–18 Jahre — wichtiger als der absolute BMI</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Kopfumfang für Alter</span>
                <p class="text-xs text-stone-500">0–3 Jahre — Hinweis auf Hirnentwicklung</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LMS-Methode -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die LMS-Methode: Wie Perzentilen berechnet werden</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hinter den WHO-Kurven steckt die <strong>LMS-Methode</strong> von Cole und Green (1992). Sie transformiert die oft schiefe Verteilung von Körpermaßen in eine Normalverteilung — und macht damit präzise Perzentilberechnungen möglich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Drei Parameter beschreiben die Verteilung für jedes Alter:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 font-sans">LMS-Parameter</div>
          <div class="space-y-2 text-stone-700">
            <div><strong>L</strong> — Box-Cox-Transformation (korrigiert Schiefe)</div>
            <div><strong>M</strong> — Median (50. Perzentile)</div>
            <div><strong>S</strong> — Variationskoeffizient (Streuung)</div>
          </div>
          <div class="mt-4 pt-4 border-t border-stone-200 text-stone-600">
            Z = [(X/M)<sup>L</sup> − 1] / (L × S)
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Der Z-Score wird anschließend mit der Normalverteilung in eine Perzentile umgerechnet. Ein Z-Score von 0 entspricht der 50. Perzentile, ein Z-Score von −2 der etwa 2,3. Perzentile.
        </p>
      </div>

      <!-- Interpretation -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie man Wachstumskurven richtig liest</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein einzelner Messwert ist weniger aussagekräftig als der <strong>Verlauf über Zeit</strong>. Entscheidend sind zwei Fragen:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">1.</span>
            <div>
              <span class="font-semibold text-stone-700">Liegt das Kind auf einer stabilen Linie?</span>
              <p class="text-stone-600 text-sm mt-1">Ein Kind, das konsequent auf der 10. Perzentile wächst, ist wahrscheinlich von Natur aus klein — das ist normal.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">2.</span>
            <div>
              <span class="font-semibold text-stone-700">Gibt es einen Einbruch oder Sprung?</span>
              <p class="text-stone-600 text-sm mt-1">Ein Kind, das von der 50. auf die 10. Perzentile fällt, braucht ärztliche Abklärung — auch wenn 10 % noch „normal" ist.</p>
            </div>
          </li>
        </ul>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Wann zum Kinderarzt?</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ Messwert unter der 3. oder über der 97. Perzentile</li>
            <li>→ Abfall oder Anstieg um mehr als 2 Hauptperzentillinien</li>
            <li>→ Kopfumfang wächst ungewöhnlich schnell oder gar nicht</li>
            <li>→ Großer Unterschied zwischen Gewicht- und Größenperzentile</li>
          </ul>
        </div>
      </div>

      <!-- BMI bei Kindern -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI bei Kindern: anders als bei Erwachsenen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der BMI-Wert allein sagt bei Kindern wenig aus. Ein BMI von 17 kann für ein 4-jähriges Kind normal sein, für ein 10-jähriges jedoch Untergewicht bedeuten. Entscheidend ist immer der <strong>BMI-für-Alter-Perzentilwert</strong>.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">WHO-Kategorien für BMI-für-Alter</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Unter 3. Perzentile</span>
              <span class="text-red-500 font-medium">Untergewicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">3.–85. Perzentile</span>
              <span class="text-emerald-600 font-medium">Normalgewicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85.–97. Perzentile</span>
              <span class="text-amber-600 font-medium">Übergewicht (Risiko)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Über 97. Perzentile</span>
              <span class="text-red-500 font-medium">Adipositas</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Rechner CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Berechne die Wachstumsperzentilen deines Kindes</h3>
        <p class="text-base text-stone-600 mb-6">Gib Alter, Gewicht und Größe ein — der Rechner zeigt sofort, wo dein Kind im WHO-Vergleich liegt.</p>
        <router-link
          :to="localePath('childGrowth')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Wachstumsperzentile-Rechner
        </router-link>
      </div>

      <!-- Fazit -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wachstumsperzentilen sind kein Ranking — sie sind ein Werkzeug, um das individuelle Wachstum deines Kindes im Zeitverlauf zu verstehen. Ein Kind auf der 10. Perzentile ist nicht „schlechter" als eines auf der 90. Perzentile: Es wächst einfach anders.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Was zählt, ist die Konstanz der Kurve. Wenn dein Kind seiner eigenen Wachstumsbahn folgt, ist alles in Ordnung. Abweichungen davon — nicht der absolute Wert — sind der eigentliche Hinweis für den Kinderarzt.
        </p>
      </div>

    </div>

    <RelatedArticles slug="wachstumsperzentile-kinder" />
  </article>
</template>
