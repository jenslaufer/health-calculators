<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'GAD-7 Angst-Test: Generalisierte Angst erkennen — Rechner & Score | Health Calculators',
  description: 'GAD-7 Angst-Screening verstehen: 7 Fragen, Score 0–21, Schweregrade minimal/mild/moderat/schwer. Cutoff 10, Spitzer 2006, was die Werte für dich bedeuten — mit kostenlosem Online-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'GAD-7 Angst-Test: Generalisierte Angst erkennen — Rechner & Score',
      description: 'Wie ausgeprägt sind deine Angstsymptome? Der GAD-7 ist ein validiertes 7-Fragen-Screening für generalisierte Angststörung. Was die Score-Bänder bedeuten, wann der Cutoff von 10 zählt und was du jetzt tun kannst.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/gad-7-angst-test-rechner',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was misst der GAD-7?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der GAD-7 misst die Häufigkeit von sieben Kernsymptomen einer generalisierten Angststörung über die letzten 2 Wochen. Er ist als Screening- und Verlaufsinstrument validiert.' },
        },
        {
          '@type': 'Question',
          name: 'Was bedeuten die Score-Bereiche?',
          acceptedAnswer: { '@type': 'Answer', text: '0–4 minimal, 5–9 mild, 10–14 moderat, 15–21 schwer ausgeprägte Angstsymptome. Ein Score ≥ 10 ist der übliche Cutoff für eine weitere klinische Abklärung.' },
        },
        {
          '@type': 'Question',
          name: 'Ist der GAD-7 eine Diagnose?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. Der GAD-7 ist ein Screening-Werkzeug, keine medizinische Diagnose. Eine Angststörung wird durch eine ärztliche oder psychotherapeutische Untersuchung bestätigt.' },
        },
        {
          '@type': 'Question',
          name: 'Was, wenn ich an Selbstverletzung denke?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der GAD-7 fragt suizidale Gedanken nicht ab. Bei Gedanken an Selbstverletzung sofort den Notruf 112 wählen oder die Telefonseelsorge unter 0800 1110111 (kostenlos, 24/7) kontaktieren.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">GAD-7 Angst-Test: Generalisierte Angst erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">8. Juni 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie ausgeprägt sind deine <strong>Angstsymptome</strong>? Der <strong>GAD-7</strong> (Generalized Anxiety Disorder 7-item) liefert in sieben Fragen eine validierte Antwort und ist heute das Standard-Werkzeug für das Screening generalisierter Angst in Hausarztpraxen, psychiatrisch-psychotherapeutischen Settings und Studien.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Beitrag erfährst du, wie der GAD-7 funktioniert, was die Score-Bänder bedeuten, ab wann eine weitere Abklärung sinnvoll ist und wie der GAD-7 mit anderen Symptom-Tools zusammenpasst.
        </p>
      </div>

      <!-- Prominent disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed font-medium">
          Dies ist ein Screening-Werkzeug, keine medizinische Diagnose. Bei einem Wert ab 10 oder bei Beschwerden bitte ärztlichen Rat einholen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der GAD-7?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der GAD-7 wurde 2006 von Spitzer, Kroenke, Williams und Löwe im <em>Archives of Internal Medicine</em> publiziert. Er fragt nach sieben Kernsymptomen generalisierter Angst über die letzten <strong>2 Wochen</strong>. Jedes Item wird mit 0 (Überhaupt nicht) bis 3 (Beinahe jeden Tag) bewertet, der Gesamtscore reicht von 0 bis 21.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei einem Cutoff von 10 hat der GAD-7 eine Sensitivität von 89 % und eine Spezifität von 82 % für die generalisierte Angststörung. Er screent darüber hinaus mit moderater Genauigkeit auch auf Panikstörung, soziale Phobie und PTBS.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die sieben Fragen</h2>
        <ol class="space-y-3 mb-4 list-decimal list-inside">
          <li class="text-stone-600 text-base"><strong>Nervosität, Ängstlichkeit oder Anspannung</strong></li>
          <li class="text-stone-600 text-base"><strong>Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren</strong></li>
          <li class="text-stone-600 text-base"><strong>Übermäßige Sorgen um verschiedene Dinge</strong></li>
          <li class="text-stone-600 text-base"><strong>Schwierigkeiten, zu entspannen</strong></li>
          <li class="text-stone-600 text-base"><strong>So unruhig sein, dass Stillsitzen schwerfällt</strong></li>
          <li class="text-stone-600 text-base"><strong>Leicht verärgert oder reizbar sein</strong></li>
          <li class="text-stone-600 text-base"><strong>Gefühl der Angst, als würde etwas Schlimmes passieren</strong></li>
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
                <td class="px-6 py-3 text-stone-600">Selbstfürsorge, Stressmanagement, Wiederholung in 2–4 Wochen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10 – 14</td>
                <td class="px-6 py-3 text-stone-600">Moderat</td>
                <td class="px-6 py-3 text-stone-600">Ärztlichen Rat einholen, weitere Abklärung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 21</td>
                <td class="px-6 py-3 text-stone-600">Schwer</td>
                <td class="px-6 py-3 text-stone-600">Zeitnah professionelle Hilfe — aktive Behandlung empfohlen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der <strong>Cutoff von 10</strong> ist die etablierte Schwelle für eine weitere klinische Abklärung. Eine <strong>Score-Veränderung um ≥ 5 Punkte</strong> gilt als klinisch bedeutsam — wichtig zur Verlaufsbeurteilung unter Therapie.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was der GAD-7 nicht ersetzt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der GAD-7 erkennt <strong>Symptomhäufigkeit</strong>, aber nicht die Ursache. Schilddrüsenüberfunktion, Koffein, Medikamente, Schlafmangel und körperliche Erkrankungen können ein angst-ähnliches Bild erzeugen. Ein erhöhter Score sollte deshalb immer ärztlich eingeordnet werden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Suizidale Gedanken und Selbstverletzung fragt der GAD-7 <strong>nicht</strong> ab. Bei akuten Krisen ist sofortige Hilfe wichtig — Notruf 112 oder Telefonseelsorge 0800 1110111 (kostenlos, 24/7).
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
            <span class="text-stone-600 text-base"><strong>Score 5–9:</strong> Selbstfürsorge — Schlaf, Bewegung, Atemübungen, Reduktion von Koffein/Alkohol. Re-Test in 2–4 Wochen.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score ≥ 10:</strong> Termin beim Hausarzt oder Psychotherapeuten. Kognitive Verhaltenstherapie ist gut belegt; medikamentöse Optionen (SSRI) gibt es ebenfalls.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Akute Krise:</strong> Telefonseelsorge 0800 1110111 oder Notruf 112.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen & Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>PMS-Symptome</strong> — Angstsymptome treten zyklusabhängig auf. Eine PMS-Selbstauskunft hilft, prämenstruelle Belastung von generalisierter Angst zu trennen. Zum <router-link :to="localeBlogPath('pms-symptome-bewerten')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">PMS-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Menopause-Symptome</strong> — in den Wechseljahren häufen sich Angst und innere Unruhe. Eine Symptomerfassung zeigt, ob die hormonelle Phase eine Rolle spielt. Zum <router-link :to="localeBlogPath('menopause-symptome-bewerten')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Menopause-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schlafzyklen</strong> — Schlafmangel ist einer der stärksten Verstärker von Angstsymptomen. Schon eine Woche ausreichender Schlaf senkt häufig den GAD-7-Score. Zum <router-link :to="localeBlogPath('schlafzyklen-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Schlafzyklen-Artikel</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen GAD-7-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sieben Fragen, anonym, sofort. Direkte Einordnung deiner Angstsymptome der letzten 2 Wochen.</p>
        <router-link
          :to="localePath('gad7')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum GAD-7 Angst-Screening &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie oft sollte ich den GAD-7 machen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Sinnvoll ist ein Ausgangswert und dann alle 2–4 Wochen während einer Behandlung oder bei Symptomveränderungen. Die Trend-Entwicklung über mehrere Tests ist aussagekräftiger als ein Einzelwert.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Score liegt über 15 — ist das ein Notfall?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ein hoher Score ist kein akuter Notfall, aber ein klares Signal für ausgeprägte Symptome. Vereinbare zeitnah einen Termin bei Hausarzt oder Psychotherapie. Bei akuten Suizidgedanken oder Selbstverletzungs-Impulsen unabhängig vom Score sofort Notruf 112 oder Telefonseelsorge 0800 1110111.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Funktioniert der GAD-7 auch bei Jugendlichen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Der GAD-7 ist primär für Erwachsene validiert und wird auch ab etwa 13 Jahren eingesetzt. Für jüngere Kinder gibt es altersgerechtere Werkzeuge.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Erkennt der GAD-7 auch Panikstörung oder Depression?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Der GAD-7 ist auf generalisierte Angst optimiert, hat aber moderate Genauigkeit für Panikstörung, soziale Phobie und PTBS. Für Depression nutzt man ergänzend den PHQ-9. In der Praxis werden GAD-7 und PHQ-9 häufig gemeinsam eingesetzt.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles slug="gad-7-angst-test-rechner" />
  </article>
</template>
