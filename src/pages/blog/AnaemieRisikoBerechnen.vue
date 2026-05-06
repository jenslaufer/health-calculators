<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Anämie berechnen: Eisenmangel und Blutarmut früh erkennen | Health Calculators',
  description: 'Anämie-Risiko aus Hämoglobin, Geschlecht und 10 typischen Symptomen einschätzen. WHO-Grenzwerte, Eisenmangel-Hinweise, Therapie und Notfallzeichen — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Anämie berechnen: Eisenmangel und Blutarmut früh erkennen',
    description: 'Anämie-Risiko aus Hämoglobin, Geschlecht und 10 typischen Symptomen einschätzen. WHO-Grenzwerte, Eisenmangel-Hinweise, Therapie und Notfallzeichen — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/anaemie-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Anämie berechnen: Eisenmangel und Blutarmut früh erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">6. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Etwa <strong>jede fünfte Frau im gebärfähigen Alter</strong> ist von Eisenmangelanämie betroffen — Männer trifft es seltener, dann aber oft mit ernsterer Ursache. Müdigkeit, blasse Haut und Atemnot sind die häufigsten Hinweise. Frühe Erkennung verhindert Komplikationen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein Anämie-Risiko quantitativ einschätzen kannst — über deinen Hämoglobinwert verglichen mit WHO-Grenzwerten und einen klinischen Symptom-Score über 10 typische Anämie-Zeichen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Anämie?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Anämie (umgangssprachlich Blutarmut) bedeutet einen <strong>verminderten Hämoglobingehalt im Blut</strong>. Das rote Eiweiß Hämoglobin transportiert Sauerstoff von der Lunge zu den Geweben — sinkt es ab, fehlt überall im Körper Sauerstoff. Daraus entstehen die typischen Beschwerden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Weltgesundheitsorganisation (WHO) schätzt, dass weltweit über 1,6 Milliarden Menschen anämisch sind. <strong>Eisenmangel ist mit Abstand die häufigste Ursache</strong>, gefolgt von Vitamin-B12- und Folatmangel sowie chronischen Erkrankungen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHO-Grenzwerte für Hämoglobin</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schweregrad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Keine Anämie</td><td class="px-6 py-3 text-stone-600">≥ 12,0 g/dL</td><td class="px-6 py-3 text-stone-600">≥ 13,0 g/dL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Leicht</td><td class="px-6 py-3 text-stone-600">11,0–11,9 g/dL</td><td class="px-6 py-3 text-stone-600">11,0–12,9 g/dL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Moderat</td><td class="px-6 py-3 text-stone-600">8,0–10,9 g/dL</td><td class="px-6 py-3 text-stone-600">8,0–10,9 g/dL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Schwer</td><td class="px-6 py-3 text-stone-600">&lt; 8,0 g/dL</td><td class="px-6 py-3 text-stone-600">&lt; 8,0 g/dL</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei <strong>Schwangeren</strong> liegt die Grenze niedriger (11,0 g/dL), bei Kindern altersabhängig zwischen 11,0 und 12,0 g/dL. Werte unter 7 g/dL sind eine Indikation für Bluttransfusion und gelten als Notfall.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 10 klinischen Symptome im Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner wertet zehn typische Zeichen mit unterschiedlicher Gewichtung aus — abgestützt auf S3-Leitlinien-Beschreibungen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Müdigkeit</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Häufigstes, aber unspezifisches Zeichen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Blasse Haut</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Augenlider innen, Nagelbett, Lippen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Atemnot bei Belastung</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Reduzierte Sauerstoff-Transportkapazität</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Schwindel</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Orthostatisch oder bei Anstrengung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kalte Hände/Füße</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Periphere Vasokonstriktion zur Schonung zentraler Organe</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kopfschmerzen</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Hypoxie der Hirnrinde</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Herzklopfen</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Tachykardie als Kompensation</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Brüchige Nägel / Haarausfall</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Spezifisch für Eisenmangel</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Restless-Legs</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Hochgradig spezifisch für Eisenmangel</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Pica (Eis-/Erde-Verlangen)</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Alarmzeichen — fast immer Eisenmangel</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Pica und Restless-Legs</strong> sind besonders aussagekräftig: Sie haben hohe Spezifität für einen Eisenmangel, auch wenn das Hämoglobin noch im Normbereich liegt (latenter Eisenmangel mit niedrigem Ferritin).
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Anämie-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Hämoglobin, Geschlecht und 10 klinische Symptome — sofortiges Ergebnis mit Schweregrad und ärztlicher Empfehlung. Anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('anemiaRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Ursachen einer Anämie</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Eisenmangel (50–80 % aller Anämien):</strong> Starke Menstruation, vegane Ernährung, Magengeschwüre, Darmtumoren, häufige Blutspenden.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vitamin-B12-Mangel:</strong> Veganer, Atrophische Gastritis, Magen-Operationen, Metformin-Langzeitgabe.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Folsäuremangel:</strong> Alkoholabusus, Schwangerschaft, bestimmte Antikonvulsiva.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Renale Anämie:</strong> Bei chronischer Niereninsuffizienz fehlt Erythropoetin.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anämie der chronischen Erkrankung:</strong> Tumoren, Autoimmunerkrankungen, chronische Infektionen.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So wird Anämie behandelt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Therapie richtet sich nach Ursache und Schweregrad:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Eisenmangel:</strong> Orale Eisenpräparate (60–120 mg elementares Eisen pro Tag) über mindestens 3 Monate, optimal nüchtern mit Vitamin C, ohne Kaffee/Tee. Bei Unverträglichkeit oder schwerem Mangel intravenöse Eisengabe.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>B12-Mangel:</strong> Intramuskuläre Injektionen oder hochdosiert oral.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schwere symptomatische Anämie (Hb &lt; 7–8 g/dL):</strong> Bluttransfusion erwägen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Grunderkrankung:</strong> Immer mitbehandeln — eine reine Eisengabe bei Tumoranämie oder Magenblutung ist nicht ausreichend.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Anämie geht oft mit Begleitsymptomen einher, die sich quantifizieren lassen. Bei Erschöpfung lohnt der
          <router-link :to="localeBlogPath('herz-kreislauf-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herz-Kreislauf-Risiko-Rechner</router-link>
          zur Einschätzung der kardiovaskulären Belastbarkeit. Bei niedrigem Energieumsatz hilft der
          <router-link :to="localeBlogPath('grundumsatz-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Grundumsatz-Rechner</router-link>
          zur Trennung von ernährungs- und erkrankungsbedingter Müdigkeit. Wer auch eine
          <router-link :to="localeBlogPath('schilddruesenfunktion-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schilddrüsen-Diagnostik</router-link>
          benötigt, findet dort eine kompakte TSH-Einordnung.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Anämie ist häufig, leicht zu screenen und sehr gut behandelbar — vorausgesetzt, sie wird erkannt. Mit unserem
          <router-link :to="localePath('anemiaRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anämie-Risiko-Rechner</router-link>
          erkennst du in Sekunden, ob ein Verdacht besteht. Bei Hb-Werten unter den WHO-Grenzwerten oder mehreren passenden Symptomen sollte ein vollständiges Blutbild plus Eisen-, B12- und Folatparameter erfolgen.
        </p>
      </div>

      <RelatedArticles slug="anaemie-risiko-berechnen" />
    </div>
  </article>
</template>
