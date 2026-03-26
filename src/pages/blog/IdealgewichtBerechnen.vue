<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'

useHead({
  title: 'Idealgewicht berechnen: Was ist das perfekte Gewicht? | Health Calculators',
  description: 'Idealgewicht mit vier Formeln berechnen. Devine, Robinson, Miller & Hamwi im Vergleich — plus gesunder BMI-Bereich.',
  path: '/blog/idealgewicht-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Idealgewicht berechnen: Was ist das perfekte Gewicht?',
    description: 'Idealgewicht mit vier Formeln berechnen. Devine, Robinson, Miller & Hamwi im Vergleich — plus gesunder BMI-Bereich.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/idealgewicht-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Idealgewicht berechnen: Was ist das perfekte Gewicht?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Was ist das <strong>Idealgewicht</strong>? Die Antwort hängt davon ab, wen man fragt. Es gibt nicht eine einzige Zahl, sondern einen <strong>gesunden Gewichtsbereich</strong>, der von Geschlecht, Größe und Körperbau abhängt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel vergleichen wir vier etablierte Formeln, erklären ihre Stärken und Schwächen, und zeigen dir, wie du dein persönliches Idealgewicht einordnen kannst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Vier Formeln im Vergleich</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Es gibt keine universelle Formel für das Idealgewicht. Stattdessen haben Wissenschaftler über Jahrzehnte verschiedene Ansätze entwickelt:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Devine-Formel (1974)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ursprünglich für die Medikamentendosierung entwickelt, ist sie heute die am häufigsten verwendete Formel. Männer: 50 kg + 2,3 kg pro Inch über 5 Fuß. Frauen: 45,5 kg + 2,3 kg pro Inch über 5 Fuß.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Robinson-Formel (1983)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Eine Weiterentwicklung der Devine-Formel mit angepassten Koeffizienten. Gilt als realistischer für den Durchschnitt der Bevölkerung.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Miller-Formel (1983)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Liefert tendenziell höhere Werte als die anderen Formeln und eignet sich besonders für größere Personen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Hamwi-Formel (1964)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die älteste der vier Formeln. Wird häufig in der klinischen Ernährungsberatung eingesetzt. Bei Männern etwas höhere, bei Frauen etwas niedrigere Werte.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum es kein einzelnes Idealgewicht gibt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Jede Formel liefert einen anderen Wert. Das liegt daran, dass sie auf unterschiedlichen Bevölkerungsdaten basieren. Der beste Ansatz: Berechne den <strong>Durchschnitt aller Formeln</strong> und betrachte den gesamten Bereich als gesunde Spanne.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ergänzend hilft der <strong>gesunde BMI-Bereich</strong> (18,5 – 24,9), dein Ergebnis einzuordnen. Ein Gewicht innerhalb dieses Bereichs gilt laut WHO als unbedenklich.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Idealgewicht berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Vier Formeln im Vergleich — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/ideal-weight"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Idealgewicht vs. BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <router-link to="/blog/bmi-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und das Idealgewicht messen unterschiedliche Dinge. Der BMI klassifiziert dein aktuelles Gewicht, das Idealgewicht zeigt dir einen Zielwert. Beide zusammen ergeben ein vollständigeres Bild.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Noch genauer wird es, wenn du zusätzlich deinen <router-link to="/blog/koerperfett-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> kennst — denn Muskeln wiegen mehr als Fett.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Idealgewicht ist keine feste Zahl, sondern ein Bereich. Nutze unseren <router-link to="/ideal-weight" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht-Rechner</router-link> als Orientierung und kombiniere das Ergebnis mit dem <router-link to="/bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und dem <router-link to="/body-fat" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link>.
        </p>
      </div>

      <RelatedArticles slug="idealgewicht-berechnen" />
    </div>
  </article>
</template>
