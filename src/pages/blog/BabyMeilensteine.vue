<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Baby-Meilensteine 0–24 Monate — was dein Baby wann kann | Health Calculators',
  description: 'Welche Entwicklungsmeilensteine erreicht ein Baby in welchem Alter? Übersicht für 2, 4, 6, 9, 12, 15, 18 und 24 Monate nach CDC — Motorik, Sprache, Sozialverhalten, Kognition.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Baby-Meilensteine 0–24 Monate — was dein Baby wann kann',
      description: 'CDC-Meilensteine 2022 — Motorik, Sprache, Sozial, Kognition. Alle acht Bezugsalter erklärt, mit Hinweisen, wann zum Kinderarzt.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/baby-meilensteine-tracker',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche Meilensteine gibt es im ersten Lebensjahr?',
          acceptedAnswer: { '@type': 'Answer', text: 'Die CDC unterscheidet acht Bezugsalter zwischen 2 und 24 Monaten. Im ersten Jahr: 2, 4, 6, 9 und 12 Monate. Beispiele: lächeln (2 Monate), Plappern (4 Monate), Sitzen (6 Monate), Pinzettengriff (9 Monate), erste Worte (12 Monate).' },
        },
        {
          '@type': 'Question',
          name: 'Wann sollte ich beim Kinderarzt nachfragen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bei einem Verlust bereits erlernter Fähigkeiten, fehlendem Augenkontakt, ausbleibendem Lächeln oder Plappern, oder wenn dein Bauchgefühl Alarm schlägt. Mehrere verpasste Meilensteine in einem Bezugsalter sind ein guter Gesprächsanlass.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Baby-Meilensteine 0–24 Monate — was dein Baby wann kann</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Im ersten Lebensjahr verändert sich dein Baby fast wöchentlich. Was als unkoordiniertes Strampeln beginnt, wird zu Greifen, Sitzen, Plappern, Krabbeln, ersten Schritten — manchmal in wenigen Tagen. Diese Übersicht zeigt dir, welche <strong>Entwicklungsmeilensteine</strong> die meisten Babys in welchem Alter erreichen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wir folgen dabei dem 2022 überarbeiteten <strong>CDC-Framework</strong> („Learn the Signs. Act Early.") und den AAP-Bright-Futures-Empfehlungen — der weltweit am besten dokumentierten Meilenstein-Liste.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die acht Bezugsalter</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die CDC nennt acht Checkpoint-Alter, an denen typische Entwicklungsschritte ablesbar sind: <strong>2, 4, 6, 9, 12, 15, 18 und 24 Monate</strong>. Diese decken sich mit den Vorsorge-Terminen in vielen Ländern (in Deutschland: U2 bis U7).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Pro Alter werden vier Domänen betrachtet: <strong>Motorik</strong> (Grob- und Feinmotorik), <strong>Sprache</strong> (Lautieren, Verstehen), <strong>Sozial/Emotional</strong> (Beziehung, Spiel) und <strong>Kognition</strong> (Lernen, Problemlösen).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Übersicht — was wann typisch ist</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Typischer Meilenstein</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium tabular-nums">2 Monate</td><td class="px-6 py-3 text-stone-600">Lächelt soziale Bezugspersonen an, hebt den Kopf in Bauchlage kurz an</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">4 Monate</td><td class="px-6 py-3 text-stone-600">Plappert, hält den Kopf stabil, greift gezielt nach Spielzeug</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">6 Monate</td><td class="px-6 py-3 text-stone-600">Rollt sich in beide Richtungen, reicht Gegenstände von Hand zu Hand</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">9 Monate</td><td class="px-6 py-3 text-stone-600">Sitzt ohne Unterstützung, beginnt den Pinzettengriff, fremdelt</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">12 Monate</td><td class="px-6 py-3 text-stone-600">Zieht sich zum Stehen hoch, sagt „Mama"/„Papa" gezielt, winkt</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">15 Monate</td><td class="px-6 py-3 text-stone-600">Geht alleine, kritzelt, zeigt mit dem Finger, befolgt einfache Aufforderungen</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">18 Monate</td><td class="px-6 py-3 text-stone-600">Spricht 6–10 Wörter, isst mit dem Löffel, beginnt Rollenspiele</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">24 Monate</td><td class="px-6 py-3 text-stone-600">2-Wort-Sätze, läuft sicher, kickt einen Ball, sortiert nach Form</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Diese Übersicht ist eine Auswahl. Die vollständige Liste mit Hinweisen für deinen Kinderarzt findest du im interaktiven <router-link :to="localePath('babyMilestones')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Baby-Meilensteine-Rechner</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Domänen — kurz erklärt</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Motorik</strong> — Grobmotorik (Sitzen, Rollen, Stehen, Laufen) und Feinmotorik (Greifen, Pinzettengriff, Stiftführung). Diese Meilensteine sind oft am sichtbarsten und werden von Eltern zuerst bemerkt.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sprache</strong> — vom Gurren über Plappern zu ersten Worten und Zwei-Wort-Sätzen. Die Sprachentwicklung beginnt rezeptiv (Verstehen) deutlich vor produktiv (Sprechen).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sozial/Emotional</strong> — soziales Lächeln, Fremdeln, Lieblingsmenschen, Trotzanfälle. Diese Domäne wird oft unterschätzt, ist aber für die spätere Bindungsfähigkeit zentral.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Kognition</strong> — Aufmerksamkeit, Objekt-Permanenz, Problemlösen, Symbolverständnis. Schwer von außen messbar, aber typische Spielsequenzen geben Hinweise.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zum Kinderarzt?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die CDC nennt für jedes Bezugsalter konkrete <strong>Warnzeichen</strong> („Act Early signs"). Wichtigster gemeinsamer Nenner über alle Alter hinweg: ein <strong>Verlust bereits erworbener Fähigkeiten</strong> (Skills-Loss). Wenn dein Baby mit 9 Monaten Mama gesagt hat und mit 12 Monaten gar nicht mehr — das ist immer ein Anlass zum Gespräch.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Weitere klassische Warnzeichen: kein Reagieren auf laute Geräusche (2 Monate), kein Lächeln (4 Monate), kein Sitzen mit Hilfe (6 Monate), kein Bein-Belasten (9 Monate), kein Zeigen mit dem Finger (15 Monate), keine 2-Wort-Sätze (24 Monate).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frühgeborene — korrigiertes Alter</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Frühgeborenen (vor SSW 37) wird das <strong>korrigierte Alter</strong> verwendet. Beispiel: Geburt mit 35 SSW (5 Wochen früh), tatsächliches Alter 12 Monate, korrigiertes Alter ca. 11 Monate. Die AAP empfiehlt die Korrektur bis zum 2. Geburtstag. Danach holen die meisten Kinder den Rückstand auf.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wachstum: nicht nur Meilensteine zählen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Neben den Meilensteinen ist auch das <strong>körperliche Wachstum</strong> ein wichtiger Indikator. Gewicht, Länge und Kopfumfang werden bei jeder U-Untersuchung in eine WHO-Wachstumskurve eingetragen. Eine konstante Perzentile (z. B. P50) ist wichtiger als der absolute Wert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wenn du Wachstumskurven, Perzentilen und Z-Scores genauer verstehen willst, findest du im <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Wachstumsperzentile-Artikel</router-link> alle Hintergründe und einen interaktiven Rechner.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen & Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Wachstumsperzentile</strong> — gehört zur Vorsorge wie der Meilenstein-Check. Zum <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Perzentile-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>APGAR-Score</strong> — der erste Vitalitätscheck nach der Geburt. Zum <router-link :to="localeBlogPath('apgar-score-bewerten')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">APGAR-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Geburtstermin</strong> — Basis für die Korrektur des Alters bei Frühgeborenen. Zum <router-link :to="localeBlogPath('geburtsterminrechner')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Geburtsterminrechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Meilensteine deines Babys ansehen</h3>
        <p class="text-stone-300 text-sm mb-5">Wähle ein Alter oder gib das Geburtsdatum ein — und sieh sofort, was bei deinem Baby gerade dran ist.</p>
        <router-link
          :to="localePath('babyMilestones')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Baby-Meilensteine-Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Welche Meilensteine sind im ersten Jahr am wichtigsten?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Sozialer Kontakt (Lächeln, Augenkontakt), Sprachentwicklung (Plappern, erste Worte) und Grobmotorik (Sitzen, Krabbeln, Stehen). Die CDC betont seit 2022 vor allem soziale und sprachliche Meilensteine — sie sind die zuverlässigsten Frühindikatoren.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Mein Kind ist langsamer als andere Kinder im selben Alter — soll ich mir Sorgen machen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ein einzelner verzögerter Meilenstein bei einem ansonsten aktiven, kontaktfreudigen Kind ist meist normal. Wenn mehrere Bereiche gleichzeitig zurückbleiben oder dein Kind Fähigkeiten verliert: Termin beim Kinderarzt vereinbaren.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie kann ich die Entwicklung unterstützen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Mit dem Baby sprechen, vorlesen, Spielzeit auf dem Boden, Bewegungsfreiräume schaffen, Bildschirmzeit unter 2 Jahren vermeiden (AAP-Empfehlung). Das Wichtigste ist allerdings: Bindung und Aufmerksamkeit.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Sind die deutschen U-Untersuchungen ausreichend?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja. Die U2–U7 (3.–10. Lebenstag bis ca. 24 Monate) decken alle CDC-Bezugsalter ab und werden von der gesetzlichen Krankenkasse erstattet. Zwischen den Terminen lohnt sich ein Blick in die CDC-Liste — bei Auffälligkeiten kannst du immer einen Zwischen-Termin vereinbaren.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
