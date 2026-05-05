<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Herzinsuffizienz-Risiko berechnen: Risikofaktoren, Symptome und Prävention | Health Calculators',
  description: 'Berechne dein 10-Jahres-Risiko für Herzschwäche. Bluthochdruck, KHK, Diabetes, BMI — die wichtigsten Hebel und was Studien wirklich zeigen.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Herzinsuffizienz-Risiko berechnen: Risikofaktoren, Symptome und Prävention',
    description: 'Berechne dein 10-Jahres-Risiko für Herzschwäche. Bluthochdruck, KHK, Diabetes, BMI — die wichtigsten Hebel und was Studien wirklich zeigen.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/herzinsuffizienz-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Herzinsuffizienz-Risiko berechnen: Risikofaktoren, Symptome und Prävention</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">5. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Deutschland leben rund <strong>4 Millionen Menschen</strong> mit chronischer Herzinsuffizienz — Tendenz steigend. Sie ist die häufigste Krankenhausdiagnose bei über 65-Jährigen und für mehr als 35.000 Todesfälle pro Jahr verantwortlich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die gute Nachricht: Herzschwäche entwickelt sich meist über Jahre, und die wichtigsten Risikofaktoren sind beeinflussbar. Wer sein Risiko früh kennt, kann gegensteuern.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Herzinsuffizienz?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei einer Herzinsuffizienz pumpt das Herz nicht mehr genug Blut, um den Körper zu versorgen. Man unterscheidet zwischen <strong>HFrEF</strong> (eingeschränkte Auswurfleistung, EF &lt; 40 %) und <strong>HFpEF</strong> (erhaltene Auswurfleistung, aber gestörte Füllung). Beide Formen haben unterschiedliche Therapien, aber gemeinsame Risikofaktoren.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Frühe Stadien (NYHA I–II) verlaufen oft unauffällig — der Rechner hilft, das Risiko <em>vor</em> dem Auftreten von Symptomen einzuordnen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die wichtigsten Risikofaktoren</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">1. Bluthochdruck (Hypertonie)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hauptursache Nr. 1. Chronisch erhöhter Blutdruck zwingt das Herz, gegen einen erhöhten Widerstand zu pumpen — die linke Herzkammer verdickt sich (Hypertrophie) und versteift mit der Zeit. Eine Senkung um 10 mmHg systolisch reduziert das Herzinsuffizienz-Risiko um <strong>28 %</strong> (Ettehad, Lancet 2016).
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">2. Koronare Herzkrankheit und früherer Herzinfarkt</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Verengte Herzkranzgefäße rauben dem Herzmuskel Sauerstoff. Nach einem Herzinfarkt entsteht eine Narbe — diese Region kann nicht mehr mitarbeiten. <strong>40 % aller Herzinsuffizienz-Fälle</strong> gehen auf KHK zurück.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">3. Diabetes mellitus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Verdoppelt das Risiko unabhängig von anderen Faktoren. Hoher Blutzucker schädigt die kleinen Herzgefäße und führt zu einer „diabetischen Kardiomyopathie".
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">4. Übergewicht und Adipositas</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Pro 1 Punkt BMI-Zunahme über 25 steigt das Herzinsuffizienz-Risiko um etwa 5 % (Framingham Heart Study, JAMA 2002). Adipositas (BMI ≥ 30) verdoppelt das Risiko.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">5. Rauchen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Erhöht das Risiko um etwa <strong>45 %</strong> und beschleunigt KHK. Nach 5 Jahren Abstinenz sinkt das Risiko deutlich.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">6. Chronische Nierenerkrankung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Niere und Herz beeinflussen sich wechselseitig (kardiorenales Syndrom). Eine eGFR &lt; 60 ml/min ist ein eigenständiger Risikofaktor.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">7. Bewegungsmangel</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wer weniger als 150 min/Woche moderat trainiert, hat ein deutlich höheres Risiko. Regelmäßige Ausdauerbewegung ist eine der stärksten Prävention.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne dein 10-Jahres-Risiko</h3>
        <p class="text-stone-300 text-sm mb-5">7 Risikofaktoren, sofortige Einordnung — anonym, ohne Anmeldung.</p>
        <router-link
          :to="localePath('heartFailureRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum Herzinsuffizienz-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frühe Symptome erkennen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Achte auf diese Warnzeichen — sie treten oft schleichend auf:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Atemnot bei Belastung</strong> — Treppensteigen oder kurze Wege fallen schwerer als gewohnt</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Geschwollene Knöchel oder Beine</strong>, besonders abends — Druckspuren von Socken</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Nächtlicher trockener Husten</strong> oder Atemnot beim flachen Liegen</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schnelle Erschöpfung und Leistungsabfall</strong></li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Plötzliche Gewichtszunahme</strong> (mehr als 2 kg in wenigen Tagen — Wassereinlagerung)</li>
          <li class="text-base text-stone-600 leading-relaxed">Herzrasen, Herzstolpern oder Schwindel</li>
        </ul>
        <p class="text-sm text-stone-500 leading-relaxed">
          Mehrere dieser Symptome zusammen sind ein <strong>Notfallzeichen</strong> — sofort zum Arzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was die Punktzahl bedeutet</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">0 – 3</td><td class="px-6 py-3 text-green-600 font-semibold">niedrig</td><td class="px-6 py-3 text-stone-600">Lebensstil halten, Vorsorge alle 2–3 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4 – 7</td><td class="px-6 py-3 text-yellow-600 font-semibold">mittel</td><td class="px-6 py-3 text-stone-600">Risikofaktoren aktiv senken, jährliche Kontrolle</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">8 – 12</td><td class="px-6 py-3 text-orange-600 font-semibold">hoch</td><td class="px-6 py-3 text-stone-600">Hausarztgespräch, evtl. EKG/Echo</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">&ge; 13</td><td class="px-6 py-3 text-red-600 font-semibold">sehr hoch</td><td class="px-6 py-3 text-stone-600">Kardiologische Abklärung empfohlen</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was wirklich hilft — evidenzbasiert</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blutdruck unter 130/80 mmHg</strong>: senkt Risiko um bis zu 30 % (SPRINT-HF, NEJM 2017).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>150 min/Woche Ausdauerbewegung</strong>: bessere Pumpleistung, niedrigere Inzidenz.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mediterrane Ernährung</strong> (PREDIMED): −30 % kardiovaskuläre Ereignisse.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gewichtsabnahme bei BMI ≥ 30</strong>: pro 5 % Gewichtsverlust messbare Verbesserung der Herzfunktion.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Rauchstopp</strong>: nach 5 Jahren Risiko fast wie bei Nichtrauchern.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Diabetes-Einstellung</strong>: HbA1c &lt; 7 %, neue Wirkstoffe (SGLT2-Inhibitoren) senken Hospitalisierung um 30 %.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Herzinsuffizienz hängt eng mit anderen kardiovaskulären Werten zusammen. Prüfe ergänzend dein
          <router-link :to="localeBlogPath('herz-kreislauf-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herz-Kreislauf-Risiko</router-link>,
          dein
          <router-link :to="localeBlogPath('schlaganfall-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schlaganfall-Risiko</router-link>
          und lies, wie du
          <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck korrekt misst</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Herzinsuffizienz ist häufig, schwerwiegend — und in vielen Fällen vermeidbar. Wer Bluthochdruck, Diabetes, Übergewicht und Bewegungsmangel früh angeht, senkt sein Risiko deutlich. Berechne deinen Wert mit unserem
          <router-link :to="localePath('heartFailureRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzinsuffizienz-Risiko-Rechner</router-link>
          und sprich auffällige Werte mit deinem Hausarzt durch.
        </p>
      </div>

      <RelatedArticles slug="herzinsuffizienz-risiko-berechnen" />
    </div>
  </article>
</template>
