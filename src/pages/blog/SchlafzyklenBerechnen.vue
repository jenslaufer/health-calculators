<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Schlafzyklen berechnen: Wann du aufstehen solltest | Health Calculators',
  description: 'Schlafzyklen berechnen und zur optimalen Zeit aufwachen. Erfahre alles über 90-Minuten-Zyklen, REM-Schlaf, Tiefschlaf und die besten Einschlafzeiten.',
  path: '/blog/schlafzyklen-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Schlafzyklen berechnen: Wann du aufstehen solltest',
    description: 'Schlafzyklen berechnen und zur optimalen Zeit aufwachen. Erfahre alles über 90-Minuten-Zyklen, REM-Schlaf, Tiefschlaf und die besten Einschlafzeiten.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/schlafzyklen-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schlafzyklen berechnen: Wann du aufstehen solltest</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. M&auml;rz 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">10 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kennst du das? Der Wecker klingelt, und du f&uuml;hlst dich wie ger&auml;dert &mdash; obwohl du acht Stunden geschlafen hast. Das Problem liegt oft nicht an der Schlafdauer, sondern am <strong>Zeitpunkt des Aufwachens</strong>. Wer mitten in einer Tiefschlafphase geweckt wird, f&uuml;hlt sich benommen und unausgeruht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die L&ouml;sung: <strong>Schlafzyklen berechnen</strong> und den Wecker so stellen, dass du am Ende eines Zyklus aufwachst &mdash; in einer leichten Schlafphase. In diesem Artikel erf&auml;hrst du, wie Schlafzyklen funktionieren und wie du sie f&uuml;r besseren Schlaf nutzt.
        </p>
      </div>

      <!-- Was ist ein Schlafzyklus? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist ein Schlafzyklus?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Schlafzyklus dauert im Durchschnitt <strong>90 Minuten</strong> und besteht aus mehreren Phasen. Pro Nacht durchl&auml;ufst du typischerweise 4 bis 6 solcher Zyklen. Jeder Zyklus folgt einem festen Muster aus leichtem Schlaf, Tiefschlaf und REM-Schlaf.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die 90 Minuten sind ein Durchschnittswert &mdash; bei manchen Menschen dauert ein Zyklus 80, bei anderen 100 Minuten. F&uuml;r die meisten ist 90 Minuten aber ein zuverl&auml;ssiger Richtwert.
        </p>
      </div>

      <!-- Die Schlafphasen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Schlafphasen im Detail</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Phase 1: Einschlafphase (N1)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dauer: 1&ndash;5 Minuten. Der &Uuml;bergang vom Wachsein zum Schlaf. Muskelspannung l&auml;sst nach, Augenbewegungen werden langsamer. Du bist leicht weckbar und bemerkst manchmal ein Zuckungsgef&uuml;hl.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Phase 2: Leichter Schlaf (N2)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dauer: 10&ndash;25 Minuten. Die K&ouml;rpertemperatur sinkt, der Herzschlag verlangsamt sich. Sogenannte Schlafspindeln &mdash; kurze Ausbr&uuml;che elektrischer Aktivit&auml;t &mdash; helfen bei der Ged&auml;chtniskonsolidierung. Etwa 50 % der Nacht verbringst du in dieser Phase.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Phase 3: Tiefschlaf (N3)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dauer: 20&ndash;40 Minuten. Die wichtigste Phase f&uuml;r k&ouml;rperliche Erholung. Wachstumshormon wird ausgesch&uuml;ttet, Zellen repariert, das Immunsystem gest&auml;rkt. Wer in dieser Phase geweckt wird, f&uuml;hlt sich desorientiert und ben&ouml;tigt bis zu 30 Minuten, um richtig wach zu werden &mdash; das nennt man <strong>Schlaftr&auml;gheit</strong>.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Phase 4: REM-Schlaf</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dauer: 10&ndash;60 Minuten (wird zum Morgen hin l&auml;nger). REM steht f&uuml;r &bdquo;Rapid Eye Movement&ldquo; &mdash; schnelle Augenbewegungen unter geschlossenen Lidern. Hier finden die intensivsten Tr&auml;ume statt. Das Gehirn ist fast so aktiv wie im Wachzustand und verarbeitet Emotionen, festigt Gelerntes und f&ouml;rdert Kreativit&auml;t.
            </p>
          </div>
        </div>
      </div>

      <!-- Tiefschlaf vs REM -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tiefschlaf vs. REM-Schlaf: Was ist wichtiger?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beide Phasen sind unverzichtbar &mdash; aber f&uuml;r unterschiedliche Funktionen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Eigenschaft</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Tiefschlaf (N3)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">REM-Schlaf</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600 font-medium">Hauptfunktion</td>
                <td class="px-6 py-3 text-stone-500">K&ouml;rperliche Erholung</td>
                <td class="px-6 py-3 text-stone-500">Geistige Erholung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 font-medium">Schwerpunkt</td>
                <td class="px-6 py-3 text-stone-500">Zellreparatur, Immunsystem</td>
                <td class="px-6 py-3 text-stone-500">Ged&auml;chtnis, Emotionen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 font-medium">Zeitpunkt</td>
                <td class="px-6 py-3 text-stone-500">Erste Nachth&auml;lfte</td>
                <td class="px-6 py-3 text-stone-500">Zweite Nachth&auml;lfte</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600 font-medium">Anteil pro Nacht</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">15&ndash;20 %</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">20&ndash;25 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer zu fr&uuml;h aufsteht, verliert vor allem REM-Schlaf. Wer zu sp&auml;t einschl&auml;ft, verpasst wertvolle Tiefschlafphasen. Beides f&uuml;hrt zu sp&uuml;rbaren Einschr&auml;nkungen am n&auml;chsten Tag.
        </p>
      </div>

      <!-- Schlafzyklen berechnen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schlafzyklen berechnen: So gehst du vor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Berechnung ist einfach: Gehe von deiner gew&uuml;nschten Aufwachzeit aus und z&auml;hle in 90-Minuten-Schritten r&uuml;ckw&auml;rts. Plane zus&auml;tzlich <strong>15 Minuten zum Einschlafen</strong> ein.
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Aufwachzeit festlegen.</strong> Beispiel: 6:30 Uhr.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Zyklen r&uuml;ckw&auml;rts z&auml;hlen.</strong> 5 Zyklen &times; 90 min = 7,5 Stunden. 6 Zyklen &times; 90 min = 9 Stunden.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Einschlafzeit addieren.</strong> 15 Minuten zur&uuml;ckrechnen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Ergebnis:</strong> F&uuml;r 6:30 Uhr Aufwachzeit &rarr; um 21:15 oder 22:45 Uhr ins Bett gehen.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Optimale Einschlafzeiten Tabelle -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Optimale Einschlafzeiten nach Aufwachzeit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Diese Tabelle zeigt dir die idealen Einschlafzeiten f&uuml;r g&auml;ngige Weckzeiten (jeweils inkl. 15 Minuten Einschlafzeit):
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aufwachzeit</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">5 Zyklen (7,5 h)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">6 Zyklen (9 h)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5:00</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">21:15</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">19:45</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5:30</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">21:45</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">20:15</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">6:00</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">22:15</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">20:45</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">6:30</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">22:45</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">21:15</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">7:00</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">23:15</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">21:45</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">7:30</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">23:45</td>
                <td class="px-6 py-3 text-stone-500 tabular-nums">22:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine optimale Schlafzeit berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Gib deine Aufwachzeit ein und erhalte sofort die besten Einschlafzeiten &mdash; kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/sleep"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Schlafzyklen berechnen &rarr;</router-link>
      </div>

      <!-- Schlafhygiene -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">7 Tipps f&uuml;r bessere Schlafhygiene</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die richtige Schlafzeit ist nur die halbe Miete. Mit diesen Gewohnheiten verbesserst du zus&auml;tzlich deine Schlafqualit&auml;t:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Feste Schlafzeiten einhalten</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Gehe jeden Tag zur gleichen Zeit ins Bett und stehe zur gleichen Zeit auf &mdash; auch am Wochenende. Dein K&ouml;rper stellt seine innere Uhr darauf ein und du schl&auml;fst schneller ein.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Bildschirme 60 Minuten vor dem Schlafen meiden</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Blaues Licht von Smartphones und Laptops unterdr&uuml;ckt die Melatonin-Produktion. Nutze abends den Nachtmodus oder lege Ger&auml;te ganz weg.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. Schlafzimmer k&uuml;hl halten</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die ideale Schlaftemperatur liegt zwischen 16 und 18 &deg;C. Ein k&uuml;hler Raum signalisiert deinem K&ouml;rper, dass es Zeit zum Schlafen ist.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. Koffein ab dem Nachmittag vermeiden</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Koffein hat eine Halbwertszeit von 5&ndash;6 Stunden. Ein Kaffee um 15 Uhr wirkt um 21 Uhr noch zur H&auml;lfte. Trinke nach 14 Uhr kein Koffein mehr.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">5. Abendliches Ritual etablieren</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Lesen, leichte Dehn&uuml;bungen oder Meditation &mdash; ein festes Abendritual signalisiert deinem Gehirn, dass die Schlafenszeit naht.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">6. Schwere Mahlzeiten sp&auml;t abends meiden</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Iss deine letzte gr&ouml;&szlig;ere Mahlzeit 2&ndash;3 Stunden vor dem Schlafengehen. Verdauung und guter Schlaf vertragen sich schlecht.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">7. Tageslicht am Morgen tanken</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Helles Licht am Morgen stoppt die Melatonin-Produktion und setzt die innere Uhr. 15&ndash;30 Minuten Tageslicht nach dem Aufstehen verbessern den Schlaf-Wach-Rhythmus sp&uuml;rbar.
            </p>
          </div>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Guter Schlaf beginnt mit dem richtigen Timing. Wer seine <strong>Schlafzyklen berechnet</strong> und den Wecker auf das Ende eines 90-Minuten-Zyklus legt, wacht erfrischt auf &mdash; selbst mit weniger Gesamtschlaf als &uuml;blich.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Probiere unseren <router-link to="/sleep" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schlafzyklen-Rechner</router-link> aus, um deine optimale Einschlafzeit zu finden. Kombiniere das Ergebnis mit guter Schlafhygiene, und du wirst den Unterschied nach wenigen Tagen sp&uuml;ren.
        </p>
      </div>

    </div>
  </article>
</template>
