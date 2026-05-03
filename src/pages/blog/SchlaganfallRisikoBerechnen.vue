<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Schlaganfall-Risiko berechnen: CHA₂DS₂-VASc-Score bei Vorhofflimmern | Health Calculators',
  description: 'Schlaganfall-Risiko bei Vorhofflimmern mit dem CHA₂DS₂-VASc-Score berechnen. Risikofaktoren, Antikoagulations-Empfehlung nach ESC-Leitlinie und Tipps zur Senkung.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Schlaganfall-Risiko berechnen: CHA₂DS₂-VASc-Score bei Vorhofflimmern',
    description: 'Schlaganfall-Risiko bei Vorhofflimmern mit dem CHA₂DS₂-VASc-Score berechnen. Risikofaktoren, Antikoagulations-Empfehlung nach ESC-Leitlinie und Tipps zur Senkung.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-03',
    dateModified: '2026-05-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/schlaganfall-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schlaganfall-Risiko berechnen: CHA₂DS₂-VASc-Score bei Vorhofflimmern</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">3. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vorhofflimmern ist die häufigste Herzrhythmusstörung — und einer der stärksten Risikofaktoren für einen Schlaganfall. Das Risiko ist <strong>5-fach erhöht</strong> gegenüber Menschen ohne Vorhofflimmern. Der <strong>CHA₂DS₂-VASc-Score</strong> hilft, dieses Risiko quantitativ einzuschätzen und die richtige Therapie zu wählen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt den Score nach <strong>Lip et al. (2010)</strong> und der <strong>ESC-Leitlinie 2020</strong>, die Bedeutung der Komponenten und wann eine orale Antikoagulation indiziert ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der CHA₂DS₂-VASc-Score?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der CHA₂DS₂-VASc-Score wurde 2010 von Gregory Lip et al. als Erweiterung des älteren CHADS₂-Scores eingeführt — er erkennt Patienten besser, die zwar als „Niedrigrisiko" galten, aber dennoch einen Schlaganfall erleiden. Die Buchstaben stehen für:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Buchstabe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risikofaktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">C</td><td class="px-6 py-3 text-stone-600">Herzinsuffizienz</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">H</td><td class="px-6 py-3 text-stone-600">Bluthochdruck</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">A₂</td><td class="px-6 py-3 text-stone-600">Alter ≥ 75 Jahre</td><td class="px-6 py-3 text-stone-600">2</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">D</td><td class="px-6 py-3 text-stone-600">Diabetes mellitus</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">S₂</td><td class="px-6 py-3 text-stone-600">Schlaganfall / TIA / Thromboembolie</td><td class="px-6 py-3 text-stone-600">2</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">V</td><td class="px-6 py-3 text-stone-600">Gefäßerkrankung (KHK, pAVK, Aortenplaque)</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">A</td><td class="px-6 py-3 text-stone-600">Alter 65–74 Jahre</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Sc</td><td class="px-6 py-3 text-stone-600">Weibliches Geschlecht (Sex category)</td><td class="px-6 py-3 text-stone-600">1</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Maximalscore beträgt <strong>9 Punkte</strong>. Je höher der Score, desto höher das jährliche Schlaganfallrisiko ohne Antikoagulation.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Jährliches Schlaganfallrisiko nach Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Risiko-Werte basieren auf der schwedischen Kohortenstudie von Friberg et al. (Eur Heart J 2012) mit über 90 000 AF-Patienten:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Jährliches Risiko</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">0</td><td class="px-6 py-3 text-stone-600">0,2 %</td><td class="px-6 py-3 text-stone-600">Keine OAK</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">1</td><td class="px-6 py-3 text-stone-600">0,6 %</td><td class="px-6 py-3 text-stone-600">OAK erwägen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2</td><td class="px-6 py-3 text-stone-600">2,2 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3</td><td class="px-6 py-3 text-stone-600">3,2 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4</td><td class="px-6 py-3 text-stone-600">4,8 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5</td><td class="px-6 py-3 text-stone-600">7,2 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6</td><td class="px-6 py-3 text-stone-600">9,7 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7</td><td class="px-6 py-3 text-stone-600">11,2 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">8–9</td><td class="px-6 py-3 text-stone-600">10,8–12,2 %</td><td class="px-6 py-3 text-stone-600">OAK empfohlen</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Eine korrekte orale Antikoagulation (OAK) reduziert das Schlaganfallrisiko um etwa <strong>64 %</strong> (Hart et al., Ann Intern Med 2007).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann ist eine Antikoagulation indiziert?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die ESC-Leitlinie 2020 (Hindricks et al.) gibt klare Schwellenwerte:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Männer: ab Score ≥ 2</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              OAK klar empfohlen (Klasse I-Empfehlung). Erste Wahl: direkte orale Antikoagulanzien (DOAK) wie Apixaban, Rivaroxaban, Edoxaban oder Dabigatran — sie sind Warfarin überlegen bei vergleichbarer Wirksamkeit und geringerem Blutungsrisiko.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Frauen: ab Score ≥ 3</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Da Frauen automatisch +1 Punkt für das Geschlecht erhalten, gilt für sie der höhere Schwellenwert. <strong>Weibliches Geschlecht alleine</strong> ist keine Antikoagulations-Indikation.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Score 1 (Männer) / 2 (Frauen): individuelle Abwägung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hier kann eine OAK erwogen werden — abhängig vom Blutungsrisiko (HAS-BLED-Score), Patientenpräferenz und Compliance. Eine gemeinsame Entscheidungsfindung mit dem Kardiologen ist sinnvoll.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Blutungsrisiko: HAS-BLED nicht vergessen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vor jeder OAK-Verordnung sollte zusätzlich der <strong>HAS-BLED-Score</strong> erhoben werden, um das Blutungsrisiko abzuschätzen. Ein erhöhter HAS-BLED-Wert (≥ 3) ist <em>kein Ausschlusskriterium</em>, sondern signalisiert, dass modifizierbare Risikofaktoren behandelt werden sollten:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">Bluthochdruck konsequent einstellen</li>
          <li class="text-base text-stone-600 leading-relaxed">NSAR und Aspirin nach Möglichkeit absetzen</li>
          <li class="text-base text-stone-600 leading-relaxed">Alkoholkonsum reduzieren</li>
          <li class="text-base text-stone-600 leading-relaxed">INR-Schwankungen vermeiden (bei Warfarin) oder DOAK bevorzugen</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt CHA₂DS₂-VASc-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">8 Risikofaktoren, sofortiger Score, jährliches Schlaganfallrisiko und Antikoagulations-Empfehlung nach ESC-Leitlinie — anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('strokeRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So senkst du dein Schlaganfallrisiko</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Neben der Antikoagulation lassen sich die meisten Risikofaktoren durch Lebensstil und Therapie beeinflussen:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blutdruck:</strong> Zielwert &lt; 130/80 mmHg — jeder 10 mmHg Senkung halbiert das Schlaganfallrisiko</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Diabetes:</strong> HbA1c &lt; 7,0 % anstreben, mediterrane Ernährung, Bewegung</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Cholesterin:</strong> LDL &lt; 70 mg/dl bei kardiovaskulärem Risiko — Statine konsequent</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Rauchstopp:</strong> halbiert das Schlaganfallrisiko innerhalb von 5 Jahren</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bewegung:</strong> 150 Minuten moderate Aktivität pro Woche reduzieren das Risiko um 27 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gewicht:</strong> BMI &lt; 30 — Adipositas erhöht das AF- und Schlaganfallrisiko</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Da das Schlaganfallrisiko stark von kardiovaskulären Begleiterkrankungen abhängt, lohnt sich ein Blick auf den
          <router-link :to="localeBlogPath('blutdruck-richtig-messen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Blutdruck-Ratgeber</router-link>
          (Hypertonie ist der wichtigste modifizierbare Risikofaktor),
          den <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko-Rechner</router-link>
          (FINDRISC-Score) und das
          <router-link :to="localeBlogPath('cholesterol-verhaeltnis-rechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Cholesterin-Verhältnis</router-link>
          als zentrale Marker für deine Gefäßgesundheit.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der CHA₂DS₂-VASc-Score ist das international etablierte Werkzeug zur Einschätzung des Schlaganfallrisikos bei Vorhofflimmern. Ab einem Score von 2 (Männer) bzw. 3 (Frauen) wird eine orale Antikoagulation empfohlen — sie reduziert das Risiko um rund zwei Drittel. Nutze unseren
          <router-link :to="localePath('strokeRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">CHA₂DS₂-VASc-Rechner</router-link>
          für die Selbsteinschätzung und sprich bei einem Score ≥ 2 mit deinem Hausarzt oder Kardiologen über die optimale Therapie.
        </p>
      </div>

      <RelatedArticles slug="schlaganfall-risiko-berechnen" />
    </div>
  </article>
</template>
