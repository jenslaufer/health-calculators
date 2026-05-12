<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Eisenmangel berechnen: Ferritin, TSAT und Symptome richtig einordnen | Health Calculators',
  description: 'Eisenmangel mit Ferritin, Transferrin-Sättigung, Hämoglobin und 10 klinischen Zeichen einschätzen. Grenzwerte, latenter Eisenmangel, Therapie und Ernährung — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eisenmangel berechnen: Ferritin, TSAT und Symptome richtig einordnen',
    description: 'Eisenmangel mit Ferritin, Transferrin-Sättigung, Hämoglobin und 10 klinischen Zeichen einschätzen. Grenzwerte, latenter Eisenmangel, Therapie und Ernährung — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-12',
    dateModified: '2026-05-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/eisenmangel-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Eisenmangel berechnen: Ferritin, TSAT und Symptome richtig einordnen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">12. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eisenmangel ist der <strong>häufigste Mikronährstoffmangel weltweit</strong>. Schätzungsweise zwei Milliarden Menschen sind betroffen — Frauen im gebärfähigen Alter, Veganer, Sportler und Kinder am stärksten. Oft beginnt der Mangel schleichend mit leerer werdenden Eisenspeichern, während das Hämoglobin noch normal aussieht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein Eisenmangel-Risiko quantitativ einschätzen kannst — mit den drei wichtigsten Labormarkern (Ferritin, Transferrin-Sättigung und Hämoglobin) plus einem gewichteten Symptom-Score.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die drei Stufen des Eisenmangels</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eisenmangel entwickelt sich nicht plötzlich. Klinisch unterscheidet man drei Stadien — wer sie kennt, kann gezielt früh handeln:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>1. Speicherdepletion (latenter Eisenmangel):</strong> Ferritin sinkt, Hämoglobin und TSAT noch normal. Erste Symptome wie Müdigkeit, Haarausfall oder Restless-Legs treten auf.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>2. Eisendefizitäre Erythropoese:</strong> Auch die Transferrin-Sättigung sinkt unter 20 %. Die roten Blutkörperchen werden kleiner und blasser, Hämoglobin ist noch grenzwertig normal.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>3. Eisenmangelanämie:</strong> Hämoglobin fällt unter die WHO-Grenze (Frauen 12,0 g/dL, Männer 13,0 g/dL). Klassische Anämie-Symptome wie Atemnot, Tachykardie und blasse Haut treten in den Vordergrund.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Grenzwerte für Erwachsene</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Normal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Auffällig</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Eisenmangel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schwer</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Ferritin (ng/mL)</td><td class="px-6 py-3 text-stone-600">≥ 100</td><td class="px-6 py-3 text-stone-600">30–99</td><td class="px-6 py-3 text-stone-600">15–29</td><td class="px-6 py-3 text-stone-600">&lt; 15</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">TSAT (%)</td><td class="px-6 py-3 text-stone-600">≥ 20</td><td class="px-6 py-3 text-stone-600">16–19</td><td class="px-6 py-3 text-stone-600">&lt; 16</td><td class="px-6 py-3 text-stone-600">—</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hb Frauen (g/dL)</td><td class="px-6 py-3 text-stone-600">≥ 12,0</td><td class="px-6 py-3 text-stone-600">11,0–11,9</td><td class="px-6 py-3 text-stone-600">8,0–10,9</td><td class="px-6 py-3 text-stone-600">&lt; 8,0</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hb Männer (g/dL)</td><td class="px-6 py-3 text-stone-600">≥ 13,0</td><td class="px-6 py-3 text-stone-600">11,0–12,9</td><td class="px-6 py-3 text-stone-600">8,0–10,9</td><td class="px-6 py-3 text-stone-600">&lt; 8,0</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Wichtig:</strong> Bei chronischer Entzündung, Niereninsuffizienz oder Tumorerkrankungen ist Ferritin als Akute-Phase-Reaktant oft falsch hoch. Dann gelten Ferritin-Werte bis 100 ng/mL noch als Mangel — und die TSAT wird zum entscheidenden Marker.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typische Symptome im Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner gewichtet zehn typische Eisenmangel-Zeichen — manche unspezifisch (Müdigkeit), andere hochspezifisch (Pica, Restless-Legs):
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hinweis</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Müdigkeit</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Häufigstes, aber unspezifisches Zeichen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Blasse Haut</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Augenlider innen, Lippen, Nagelbett</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Atemnot bei Belastung</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Reduzierte O₂-Transportkapazität</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Haarausfall</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Diffuser Verlust, häufig bei Ferritin &lt; 30</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Brüchige Nägel</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Längsrillen, Löffelnägel (Koilonychie)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Restless-Legs</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Hochspezifisch für Eisenmangel</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Pica (Eis, Erde)</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Alarmsignal — fast immer Eisenmangel</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kalte Hände/Füße</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Periphere Vasokonstriktion</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Kopfschmerzen</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Hypoxie der Hirnrinde</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Konzentrationsstörungen</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">"Brain-Fog", verlangsamtes Denken</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Eisenmangel-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Ferritin, Transferrin-Sättigung, Hämoglobin und 10 klinische Symptome — sofortiges Ergebnis mit Schweregrad und Empfehlung. Anonym und kostenlos.</p>
        <router-link
          :to="localePath('ironDeficiency')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Ursachen für Eisenmangel</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Erhöhter Bedarf:</strong> Menstruation (besonders Hypermenorrhö), Schwangerschaft, Wachstum, intensiver Ausdauersport.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Verminderte Aufnahme:</strong> Vegane oder vegetarische Ernährung, Magen-OPs, Zöliakie, atrophische Gastritis, häufiger Säureblocker-Einsatz.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blutverlust:</strong> Magengeschwüre, Hämorrhoiden, Darmtumoren, häufige Blutspenden, NSAR-bedingte Mikroblutungen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Chronische Erkrankungen:</strong> Niereninsuffizienz, Herzinsuffizienz, entzündliche Darmerkrankungen — funktioneller Eisenmangel trotz normaler Speicher.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">So wird Eisenmangel behandelt</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Orale Therapie:</strong> 60–120 mg elementares Eisen pro Tag, idealerweise nüchtern mit Vitamin C, ohne Kaffee, Tee oder Calcium. Neuere Studien zeigen, dass eine Dosis jeden zweiten Tag besser resorbiert wird als zweimal täglich.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Intravenöse Eisengabe:</strong> Bei oraler Unverträglichkeit, schwerem Mangel, chronisch entzündlichen Darmerkrankungen oder Herz-/Niereninsuffizienz. Vorteil: schnelle Speicherauffüllung, oft mit nur ein bis zwei Infusionen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Ursachensuche zwingend:</strong> Vor allem bei Männern und postmenopausalen Frauen muss eine Blutungsquelle (Magen, Darm) ausgeschlossen werden — eine Eisengabe ohne Diagnose kann eine Tumorblutung verschleiern.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eisenmangel und Anämie hängen eng zusammen, aber nicht jeder Eisenmangel führt sofort zur Anämie. Wer wissen will, ob bereits eine Blutarmut vorliegt, nutzt unseren
          <router-link :to="localeBlogPath('anaemie-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anämie-Risiko-Rechner</router-link>.
          Da Müdigkeit und Belastungsdyspnoe auch durch eine geschwächte Schilddrüse entstehen, lohnt ein Blick auf die
          <router-link :to="localeBlogPath('schilddruesenfunktion-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schilddrüsenfunktion</router-link>.
          Beim niedrigen Energieumsatz hilft zusätzlich der
          <router-link :to="localeBlogPath('grundumsatz-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Grundumsatz-Rechner</router-link>,
          um ernährungs- von erkrankungsbedingter Müdigkeit zu trennen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Eisenmangel ist häufig, gut behandelbar — und beginnt lange vor der Anämie. Mit unserem
          <router-link :to="localePath('ironDeficiency')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eisenmangel-Rechner</router-link>
          siehst du in Sekunden, ob deine Werte und Symptome auffällig sind. Bei Ferritin unter 30 ng/mL, TSAT unter 20 % oder mehreren typischen Symptomen lohnt sich der Termin beim Hausarzt — meist genügt ein einfaches Blutbild für die Diagnose.
        </p>
      </div>

      <RelatedArticles slug="eisenmangel-berechnen" />
    </div>
  </article>
</template>
