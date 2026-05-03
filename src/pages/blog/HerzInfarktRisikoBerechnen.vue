<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Herz-Kreislauf-Risiko berechnen: Framingham, SCORE2 und was die Werte bedeuten | Health Calculators',
  description: 'Berechne dein 10-Jahres-Risiko für Herzinfarkt und Schlaganfall mit Framingham/SCORE2. Cholesterin, Blutdruck, Lebensstil — und was wirklich hilft.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Herz-Kreislauf-Risiko berechnen: Framingham, SCORE2 und was die Werte bedeuten',
    description: 'Berechne dein 10-Jahres-Risiko für Herzinfarkt und Schlaganfall mit Framingham/SCORE2. Cholesterin, Blutdruck, Lebensstil — und was wirklich hilft.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-02',
    dateModified: '2026-05-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/herz-kreislauf-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Herz-Kreislauf-Risiko berechnen: Framingham, SCORE2 und was die Werte bedeuten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Herz-Kreislauf-Erkrankungen sind in Deutschland mit <strong>rund 340.000 Todesfällen pro Jahr</strong> die häufigste Todesursache. Die gute Nachricht: bis zu 80 % davon sind durch frühzeitige Erkennung und einfache Maßnahmen vermeidbar.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die etablierten Risiko-Scores (<strong>Framingham</strong> und <strong>SCORE2</strong>), wie du dein 10-Jahres-Risiko realistisch einschätzt — und welche Hebel den größten Effekt haben.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum überhaupt rechnen?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein einzelner Wert wie der Blutdruck oder das LDL sagt wenig über das tatsächliche Risiko aus. Erst die Kombination aller Risikofaktoren — Alter, Geschlecht, Cholesterin, Blutdruck, Rauchen, Diabetes — ergibt ein belastbares Bild. Genau das leisten die <strong>Risiko-Scores</strong>: sie übersetzen mehrere Werte in <em>eine</em> Zahl: dein 10-Jahres-Risiko in Prozent.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beispiel: Ein 55-jähriger Mann mit einem LDL von 160 mg/dL kann je nach restlichen Werten ein Risiko von 5 % oder 25 % haben. Das hat direkte Konsequenzen für die Therapieentscheidung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die wichtigsten Scores im Vergleich</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Region</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Endpunkt</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Framingham</td><td class="px-6 py-3 text-stone-600">USA</td><td class="px-6 py-3 text-stone-600">30–79</td><td class="px-6 py-3 text-stone-600">tödlich + nicht-tödlich</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SCORE2</td><td class="px-6 py-3 text-stone-600">Europa</td><td class="px-6 py-3 text-stone-600">40–69</td><td class="px-6 py-3 text-stone-600">tödlich + nicht-tödlich</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SCORE2-OP</td><td class="px-6 py-3 text-stone-600">Europa</td><td class="px-6 py-3 text-stone-600">≥ 70</td><td class="px-6 py-3 text-stone-600">tödlich + nicht-tödlich</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">ASCVD</td><td class="px-6 py-3 text-stone-600">USA (AHA/ACC)</td><td class="px-6 py-3 text-stone-600">40–79</td><td class="px-6 py-3 text-stone-600">Infarkt + Schlaganfall</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Unser Rechner verwendet das <strong>Framingham General CVD-Modell</strong> nach D'Agostino (Circulation 2008). Es liefert für deutsche Patienten realistische Werte und ist gut validiert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 6 Risikofaktoren, die zählen</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">1. Alter und Geschlecht</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Männer haben im Schnitt <strong>10 Jahre früher</strong> ein vergleichbares Risiko wie Frauen. Nach der Menopause gleicht sich das Risiko an — Östrogene wirken bis dahin schützend.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">2. Cholesterin (Total und HDL)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Nicht das LDL allein, sondern das <strong>Verhältnis zu HDL</strong> ist entscheidend. Eine LDL-Senkung um 1 mmol/L (≈ 39 mg/dL) reduziert kardiovaskuläre Ereignisse um 22 % (CTT-Metaanalyse, Lancet 2010).
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">3. Blutdruck</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ab <strong>140/90 mmHg</strong> Hypertonie. Eine Senkung des systolischen Werts um 10 mmHg verringert Herzinfarkt-Risiko um 17 % und Schlaganfall-Risiko um 27 % (Ettehad, Lancet 2016).
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">4. Rauchen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Aktive Raucher haben ein <strong>2-3-fach erhöhtes Risiko</strong>. Nach 5 Jahren Abstinenz halbiert sich das Risiko, nach 15 Jahren ist es nahezu wie bei Nichtrauchern.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">5. Diabetes mellitus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Diabetes verdoppelt das Herz-Kreislauf-Risiko unabhängig von anderen Faktoren. Schon Prädiabetes (HbA1c 5,7–6,4 %) erhöht das Risiko deutlich.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">6. Familienanamnese</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Frühe Herzerkrankung (Männer &lt; 55 J., Frauen &lt; 65 J.) bei Eltern oder Geschwistern erhöht das Risiko um 50 % — wird in den Standard-Scores nicht erfasst, aber separat berücksichtigt.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne dein 10-Jahres-Risiko jetzt</h3>
        <p class="text-stone-300 text-sm mb-5">7 Eingaben, sofortige Risikoeinordnung inklusive Herzalter — anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('cardiovascularRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum Risiko-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So liest du dein Ergebnis</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">10-Jahres-Risiko</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">&lt; 5 %</td><td class="px-6 py-3 text-green-600 font-semibold">niedrig</td><td class="px-6 py-3 text-stone-600">Lebensstil halten, Kontrolle alle 4–6 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7,5 %</td><td class="px-6 py-3 text-yellow-600 font-semibold">grenzwertig</td><td class="px-6 py-3 text-stone-600">Lebensstil intensivieren, jährliche Kontrolle</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7,5 – 20 %</td><td class="px-6 py-3 text-orange-600 font-semibold">mittel</td><td class="px-6 py-3 text-stone-600">Statin-Indikation prüfen, Hausarztgespräch</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">≥ 20 %</td><td class="px-6 py-3 text-red-600 font-semibold">hoch</td><td class="px-6 py-3 text-stone-600">Statin + Blutdrucksenkung in der Regel indiziert</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was wirklich hilft — evidenzbasiert</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Lebensstil-Maßnahmen wirken nachweisbar — und oft stärker als Medikamente:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mediterrane Ernährung</strong> (PREDIMED, NEJM 2018): Olivenöl, Nüsse, Fisch, viel Gemüse — senkt Risiko um 30 %.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>150 min/Woche moderate Bewegung</strong>: halbiert das Infarktrisiko (WHO, Lancet 2020).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Rauchstopp</strong>: nach 5 Jahren Risikoreduktion um 50 %.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Statine</strong> bei intermediärem/hohem Risiko: −22 % Ereignisse pro mmol/L LDL-Senkung.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blutdrucksenkung</strong> auf &lt; 130/80 mmHg: −20 % Schlaganfälle.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gewichtsabnahme</strong> 5–10 % bei Adipositas: verbessert alle Risikofaktoren gleichzeitig.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zum Arzt?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Hausarzt sollte dein Risiko spätestens ab dem <strong>40. Lebensjahr</strong> regelmäßig erfassen. Sofort zum Arzt bei:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">Brustenge oder Druck hinter dem Brustbein, ggf. mit Ausstrahlung in Arm/Kiefer</li>
          <li class="text-base text-stone-600 leading-relaxed">Plötzlicher Atemnot oder unerklärlicher Erschöpfung bei Belastung</li>
          <li class="text-base text-stone-600 leading-relaxed">Schwindel, Herzrasen oder unregelmäßigem Puls</li>
          <li class="text-base text-stone-600 leading-relaxed">Familiärer Belastung (Herzinfarkt vor 55/65 Jahren)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Herz-Kreislauf-Risiko hängt mit vielen Werten zusammen. Prüfe ergänzend dein
          <router-link :to="localeBlogPath('cholesterol-verhaeltnis-rechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Cholesterin-Verhältnis</router-link>,
          dein
          <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko</router-link>
          und lies, wie du
          <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck korrekt misst</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Das 10-Jahres-Risiko ist eine der mächtigsten Zahlen in der Präventivmedizin: sie macht Lebensstil-Entscheidungen mess- und vergleichbar. Berechne deinen Wert mit unserem
          <router-link :to="localePath('cardiovascularRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herz-Kreislauf-Risiko-Rechner</router-link>
          — und sprich auffällige Werte mit deinem Hausarzt durch.
        </p>
      </div>

      <RelatedArticles slug="herz-kreislauf-risiko-berechnen" />
    </div>
  </article>
</template>
