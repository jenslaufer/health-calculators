<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'PHQ-9 Depressionstest: Depression erkennen — Rechner & Score | Health Calculators',
  description: 'PHQ-9 Depressions-Screening verstehen: 9 Fragen, Score 0–27, fünf Schweregrade von minimal bis schwer. Cutoff 10, Item 9 zur Selbstgefährdung, Kroenke 2001 — mit kostenlosem Online-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PHQ-9 Depressionstest: Depression erkennen — Rechner & Score',
      description: 'Wie ausgeprägt sind deine depressiven Symptome? Der PHQ-9 ist ein validiertes 9-Fragen-Screening für Depression. Was die fünf Schweregrade bedeuten, warum Item 9 zur Selbstgefährdung unabhängig vom Score zählt und was du jetzt tun kannst.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/phq-9-depressionstest-rechner',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was misst der PHQ-9?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der PHQ-9 misst die Häufigkeit von neun Kernsymptomen einer Depression über die letzten 2 Wochen. Er ist als Screening- und Verlaufsinstrument validiert.' },
        },
        {
          '@type': 'Question',
          name: 'Was bedeuten die Score-Bereiche?',
          acceptedAnswer: { '@type': 'Answer', text: '0–4 minimal, 5–9 mild, 10–14 moderat, 15–19 mittelschwer, 20–27 schwer ausgeprägte depressive Symptome. Ein Score ≥ 10 ist der übliche Cutoff für eine weitere klinische Abklärung.' },
        },
        {
          '@type': 'Question',
          name: 'Was bedeutet Frage 9 zur Selbstgefährdung?',
          acceptedAnswer: { '@type': 'Answer', text: 'Item 9 fragt nach Gedanken, lieber tot zu sein oder sich Leid zuzufügen. Jede Antwort außer „Überhaupt nicht“ erfordert unabhängig vom Gesamtscore sofortige Hilfe — Telefonseelsorge 0800 111 0 111 oder Notruf 112.' },
        },
        {
          '@type': 'Question',
          name: 'Ist der PHQ-9 eine Diagnose?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. Der PHQ-9 ist ein Screening-Werkzeug, keine medizinische Diagnose. Eine Depression wird durch eine ärztliche oder psychotherapeutische Untersuchung bestätigt.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PHQ-9 Depressionstest: Depression erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">16. Juni 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie ausgeprägt sind deine <strong>depressiven Symptome</strong>? Der <strong>PHQ-9</strong> (Patient Health Questionnaire, 9 Items) liefert in neun Fragen eine validierte Antwort und ist heute das am häufigsten genutzte Werkzeug für das Screening von Depression in Hausarztpraxen, psychiatrisch-psychotherapeutischen Settings und Studien weltweit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Beitrag erfährst du, wie der PHQ-9 funktioniert, was die fünf Schweregrade bedeuten, warum die neunte Frage zur Selbstgefährdung eine Sonderrolle einnimmt und was du nach deinem Ergebnis tun kannst.
        </p>
      </div>

      <!-- Prominent disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed font-medium">
          Dies ist ein Screening-Werkzeug, keine medizinische Diagnose. Bei einem Wert ab 10 oder bei Beschwerden bitte ärztlichen Rat einholen. Bei Gedanken an Selbstgefährdung sofort Hilfe holen: Telefonseelsorge 0800 111 0 111 / 0800 111 0 222 (kostenlos, 24/7) oder Notruf 112.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der PHQ-9?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der PHQ-9 wurde 2001 von Kroenke, Spitzer und Williams im <em>Journal of General Internal Medicine</em> publiziert. Er bildet die neun Kernsymptome einer Major Depression aus dem Diagnosemanual DSM direkt ab und fragt, wie häufig sie dich über die letzten <strong>2 Wochen</strong> belastet haben. Jedes Item wird mit 0 (Überhaupt nicht) bis 3 (Beinahe jeden Tag) bewertet, der Gesamtscore reicht von 0 bis 27.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei einem Cutoff von 10 hat der PHQ-9 eine Sensitivität und Spezifität von jeweils rund 88 % für eine Major Depression. Im deutschsprachigen Raum ist er als Teil des <em>Gesundheitsfragebogens für Patienten</em> (PHQ-D) weit verbreitet. Er ist gemeinfrei und kostenlos einsetzbar — einer der Gründe für seine globale Verbreitung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die neun Fragen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „Wie oft fühlten Sie sich im Verlauf der letzten 2 Wochen durch die folgenden Beschwerden beeinträchtigt?“
        </p>
        <ol class="space-y-3 mb-4 list-decimal list-inside">
          <li class="text-stone-600 text-base"><strong>Wenig Interesse oder Freude an Ihren Tätigkeiten</strong></li>
          <li class="text-stone-600 text-base"><strong>Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit</strong></li>
          <li class="text-stone-600 text-base"><strong>Schwierigkeiten ein- oder durchzuschlafen oder vermehrter Schlaf</strong></li>
          <li class="text-stone-600 text-base"><strong>Müdigkeit oder Gefühl, keine Energie zu haben</strong></li>
          <li class="text-stone-600 text-base"><strong>Verminderter Appetit oder übermäßiges Bedürfnis zu essen</strong></li>
          <li class="text-stone-600 text-base"><strong>Schlechte Meinung von sich selbst; Gefühl, ein Versager zu sein</strong></li>
          <li class="text-stone-600 text-base"><strong>Schwierigkeiten, sich zu konzentrieren</strong></li>
          <li class="text-stone-600 text-base"><strong>Verlangsamung oder im Gegenteil ungewohnte Unruhe</strong></li>
          <li class="text-stone-600 text-base"><strong>Gedanken, lieber tot zu sein oder sich Leid zuzufügen</strong></li>
        </ol>
        <p class="text-base text-stone-600 leading-relaxed">
          Antwortoptionen: Überhaupt nicht (0), An einzelnen Tagen (1), An mehr als der Hälfte der Tage (2), Beinahe jeden Tag (3).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Score-Bereiche</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schweregrad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0 – 4</td>
                <td class="px-6 py-3 text-stone-600">Minimal</td>
                <td class="px-6 py-3 text-stone-600">Minimale Symptome — weiter beobachten</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5 – 9</td>
                <td class="px-6 py-3 text-stone-600">Mild</td>
                <td class="px-6 py-3 text-stone-600">Selbstfürsorge, Unterstützung, Wiederholung in 2–4 Wochen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10 – 14</td>
                <td class="px-6 py-3 text-stone-600">Moderat</td>
                <td class="px-6 py-3 text-stone-600">Ärztlichen Rat einholen, weitere Abklärung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 19</td>
                <td class="px-6 py-3 text-stone-600">Mittelschwer</td>
                <td class="px-6 py-3 text-stone-600">Zeitnah professionelle Hilfe — aktive Behandlung empfohlen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">20 – 27</td>
                <td class="px-6 py-3 text-stone-600">Schwer</td>
                <td class="px-6 py-3 text-stone-600">Zeitnah professionelle Hilfe — Behandlung dringend empfohlen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der <strong>Cutoff von 10</strong> ist die etablierte Schwelle für eine weitere klinische Abklärung. Eine <strong>Score-Veränderung um ≥ 5 Punkte</strong> gilt als klinisch bedeutsam — wichtig zur Verlaufsbeurteilung unter Therapie.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Sonderrolle von Frage 9</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Anders als alle anderen Items steht die <strong>neunte Frage zur Selbstgefährdung</strong> für sich. Sie fragt nach Gedanken, lieber tot zu sein oder sich Leid zuzufügen. Wer hier mehr als „Überhaupt nicht“ ankreuzt, sollte <strong>unabhängig vom Gesamtscore</strong> sofort Unterstützung suchen — selbst dann, wenn die übrigen acht Fragen niedrig ausfallen und der Gesamtwert im minimalen Bereich liegt.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Genau deshalb zeigt der Rechner bei einer positiven Antwort auf Item 9 einen eigenen, deutlich hervorgehobenen Hinweis an. Ein niedriger Gesamtscore mit positivem Item 9 ist der kritische Fall, der leicht übersehen wird. Suizidale Gedanken sind ein medizinischer Notfall — bitte zögere nicht, Hilfe zu holen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was der PHQ-9 nicht ersetzt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der PHQ-9 erkennt <strong>Symptomhäufigkeit</strong>, aber nicht die Ursache. Schilddrüsenunterfunktion, Eisenmangel, chronischer Schlafmangel, Medikamente und körperliche Erkrankungen können ein depressionsähnliches Bild erzeugen. Ein erhöhter Score sollte deshalb immer ärztlich eingeordnet werden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Auch trennt der PHQ-9 nicht zwischen Depression und Angst — beide treten häufig gemeinsam auf. In der Praxis werden PHQ-9 und <router-link :to="localePath('gad7')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GAD-7</router-link> deshalb oft gemeinsam eingesetzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was du jetzt tun kannst</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score &lt; 5:</strong> Symptome minimal. Weiter beobachten und Belastungen reduzieren.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score 5–9:</strong> Selbstfürsorge — Schlaf, Bewegung, soziale Kontakte, Tagesstruktur. Re-Test in 2–4 Wochen.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score ≥ 10:</strong> Termin beim Hausarzt oder Psychotherapeuten. Psychotherapie ist gut belegt; medikamentöse Optionen (z. B. SSRI) gibt es ebenfalls.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Gedanken an Selbstgefährdung — unabhängig vom Score:</strong> Telefonseelsorge 0800 111 0 111 / 0800 111 0 222 (kostenlos, 24/7) oder Notruf 112.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen & Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GAD-7 Angst-Screening</strong> — Depression und Angst treten häufig gemeinsam auf. Der GAD-7 ergänzt den PHQ-9 für ein vollständigeres Bild. Zum <router-link :to="localeBlogPath('gad-7-angst-test-rechner')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GAD-7-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schlafzyklen</strong> — Schlafstörungen sind ein Kernsymptom der Depression (Frage 3). Geregelter Schlaf wirkt sich häufig direkt auf den PHQ-9-Score aus. Zum <router-link :to="localeBlogPath('schlafzyklen-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Schlafzyklen-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Biologisches Alter</strong> — anhaltende depressive Symptome und chronischer Stress beschleunigen die Alterung. Ein Blick auf das biologische Alter ordnet Lebensstil-Faktoren ein. Zum <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Artikel über biologisches Alter</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen PHQ-9-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Neun Fragen, anonym, sofort. Direkte Einordnung deiner depressiven Symptome der letzten 2 Wochen.</p>
        <router-link
          :to="localePath('phq9')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum PHQ-9 Depressions-Screening &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie oft sollte ich den PHQ-9 machen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Sinnvoll ist ein Ausgangswert und dann alle 2–4 Wochen während einer Behandlung oder bei Symptomveränderungen. Die Trend-Entwicklung über mehrere Tests ist aussagekräftiger als ein Einzelwert.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ich habe Frage 9 angekreuzt — was nun?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Jede Antwort außer „Überhaupt nicht“ auf Frage 9 ist ein ernstes Signal, unabhängig vom Gesamtscore. Bitte hole dir sofort Hilfe: Telefonseelsorge 0800 111 0 111 oder 0800 111 0 222 (kostenlos, rund um die Uhr), in akuten Notfällen den Notruf 112. Du musst das nicht allein durchstehen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Funktioniert der PHQ-9 auch bei Jugendlichen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Der PHQ-9 ist für Erwachsene validiert. Für Jugendliche gibt es die angepasste Variante PHQ-A. Für jüngere Kinder sind altersgerechtere Werkzeuge vorzuziehen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Erkennt der PHQ-9 auch Angststörungen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nein, der PHQ-9 ist auf Depression optimiert. Für Angst nutzt man ergänzend den GAD-7. In der Praxis werden beide häufig gemeinsam eingesetzt, da Depression und Angst oft zusammen auftreten.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles slug="phq-9-depressionstest-rechner" />
  </article>
</template>
