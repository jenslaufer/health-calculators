<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Herzfrequenz-Zonen: Richtig trainieren nach Puls | Health Calculators',
  description: 'Die 5 Herzfrequenz-Zonen erklärt: Karvonen-Formel, Fettverbrennungszone & optimales Zonentraining für Ausdauer, Abnehmen und Leistung.',
  path: '/blog/herzfrequenz-zonen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Herzfrequenz-Zonen: Richtig trainieren nach Puls',
    description: 'Die 5 Herzfrequenz-Zonen erklärt: Karvonen-Formel, Fettverbrennungszone & optimales Zonentraining für Ausdauer, Abnehmen und Leistung.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/herzfrequenz-zonen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Herzfrequenz-Zonen: Richtig trainieren nach Puls</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">10 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wer effektiv trainieren will, braucht mehr als Motivation — er braucht die richtige <strong>Trainingsintensität</strong>. Herzfrequenz-Zonen helfen dir, dein Training gezielt zu steuern: ob du Fett verbrennen, deine Ausdauer verbessern oder deine maximale Leistung steigern willst.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel lernst du die <strong>5 Herzfrequenz-Zonen</strong> kennen, verstehst die Karvonen-Formel und erfährst, warum die „Fettverbrennungszone" ein Mythos ist.
        </p>
      </div>

      <!-- Maximale Herzfrequenz -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Maximale Herzfrequenz bestimmen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Grundlage jeder Zonenberechnung ist deine <strong>maximale Herzfrequenz (HFmax)</strong>. Die bekannteste Schätzformel stammt von Fox (1971):
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">HFmax = 220 &minus; Alter</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> Eine 35-jährige Person hat eine geschätzte HFmax von 220 &minus; 35 = <strong>185 Schläge pro Minute (bpm)</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Diese Formel ist ein Richtwert. Die tatsächliche HFmax kann individuell um &plusmn;10–15 bpm abweichen. Genauere Alternativen sind die Formel von Tanaka (HFmax = 208 &minus; 0,7 &times; Alter) oder ein sportmedizinischer Belastungstest.
        </p>
      </div>

      <!-- Karvonen-Formel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Karvonen-Formel: Individuelle Zonen berechnen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Karvonen-Formel</strong> bezieht den Ruhepuls mit ein und liefert dadurch präzisere Trainingszonen. Sie nutzt die sogenannte Herzfrequenzreserve (HFR):
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center space-y-2">
          <p class="text-lg font-semibold text-stone-900">HFR = HFmax &minus; Ruhepuls</p>
          <p class="text-lg font-semibold text-stone-900">Zielpuls = (HFR &times; Intensität) + Ruhepuls</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> Alter 35, Ruhepuls 60 bpm. HFmax = 185, HFR = 125. Für Zone 2 (60–70 %): Untere Grenze = (125 &times; 0,60) + 60 = <strong>135 bpm</strong>, obere Grenze = (125 &times; 0,70) + 60 = <strong>148 bpm</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein niedriger Ruhepuls deutet auf eine gute Grundlagenausdauer hin. Ausdauersportler haben häufig einen Ruhepuls von 40–50 bpm — ihre Trainingszonen verschieben sich entsprechend nach oben.
        </p>
      </div>

      <!-- Die 5 Zonen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 5 Herzfrequenz-Zonen im Überblick</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Jede Zone trainiert unterschiedliche Energiesysteme und hat spezifische Effekte auf deinen Körper:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zone</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">% HFmax</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Wirkung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-300 mr-2"></span>Zone 1 — Regeneration
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">50–60 %</td>
                <td class="px-6 py-3 text-stone-500">Erholung, Durchblutung, Einstieg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Zone 2 — Grundlagenausdauer
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60–70 %</td>
                <td class="px-6 py-3 text-stone-500">Fettstoffwechsel, aerobe Basis</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Zone 3 — Aerobe Zone
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">70–80 %</td>
                <td class="px-6 py-3 text-stone-500">Herz-Kreislauf-Fitness, Ausdauer</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Zone 4 — Anaerobe Schwelle
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80–90 %</td>
                <td class="px-6 py-3 text-stone-500">Laktattoleranz, Tempohärte</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Zone 5 — Maximale Belastung
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">90–100 %</td>
                <td class="px-6 py-3 text-stone-500">Maximalkraft, Sprintfähigkeit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Zone 1 & 2 -->
      <div class="mb-8">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Zone 1 & 2: Das Fundament</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In Zone 1 und 2 arbeitest du <strong>ausschließlich aerob</strong>. Dein Körper nutzt hauptsächlich Fett als Energiequelle. Du kannst dich noch problemlos unterhalten — der sogenannte „Talk Test".
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Zone 2</strong> ist die wichtigste Zone für den Aufbau der Grundlagenausdauer. Profisportler verbringen 80 % ihrer Trainingszeit in dieser Zone. Sie verbessert die Mitochondriendichte, die Kapillarisierung der Muskulatur und die Fähigkeit, Fett effizient zu verbrennen.
        </p>
      </div>

      <!-- Zone 3 -->
      <div class="mb-8">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Zone 3: Die aerobe Zone</h3>
        <p class="text-base text-stone-600 leading-relaxed">
          Zone 3 trainiert das Herz-Kreislauf-System. Hier steigt die Kohlenhydratverbrennung an, während der Fettanteil sinkt. Diese Zone eignet sich für moderate Dauerläufe und Radfahrten. Viele Hobbyläufer trainieren unbewusst zu oft in Zone 3 — zu schnell für den Grundlagenaufbau, zu langsam für echte Leistungsreize. Experten nennen dies die „Graue Zone".
        </p>
      </div>

      <!-- Zone 4 & 5 -->
      <div class="mb-8">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Zone 4 & 5: Leistung am Limit</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ab Zone 4 arbeitest du <strong>überwiegend anaerob</strong>. Der Körper kann Laktat nicht mehr vollständig abbauen — die Belastung ist nur über kurze Zeiträume durchzuhalten.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Zone 4</strong> verbessert deine anaerobe Schwelle — den Punkt, ab dem Laktat schneller gebildet als abgebaut wird. <strong>Zone 5</strong> ist reines Sprint- und Maximaltraining. Intervalle in diesen Zonen dauern typischerweise 30 Sekunden bis 5 Minuten mit langen Pausen dazwischen.
        </p>
      </div>

      <!-- Fettverbrennungszone Mythos -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Mythos Fettverbrennungszone</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der hartnäckigste Mythos im Ausdauersport: „In Zone 2 verbrennst du am meisten Fett." Das stimmt — <strong>prozentual</strong>. Bei niedriger Intensität stammt ein höherer Anteil der Energie aus Fett. Aber die <strong>absolut verbrannte Fettmenge</strong> ist entscheidend.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Intensität</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">kcal/Std.</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fettanteil</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fett-kcal</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Zone 2 (65 %)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">400</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">240</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Zone 3 (75 %)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">600</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">45 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">270</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Zone 4 (85 %)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">800</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Fazit: Bei höherer Intensität verbrennst du <strong>absolut mehr Fett</strong> pro Stunde — und zusätzlich profitierst du vom Nachbrenneffekt (EPOC). Für das Abnehmen zählt das <strong>Gesamtkaloriendefizit</strong>, nicht die Zone.
        </p>
      </div>

      <!-- Zonentraining für verschiedene Ziele -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zonentraining für verschiedene Ziele</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Abnehmen & Gesundheit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Kombiniere lange Zone-2-Einheiten (45–90 min) mit kurzen Zone-4-Intervallen (1–2x pro Woche). Das Gesamtkaloriendefizit entscheidet — nicht die einzelne Zone. Regelmäßigkeit schlägt Intensität.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Marathon & Langstrecke</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              80 % Zone 2, 20 % Zone 4 — das polarisierte Trainingsmodell. Lange, langsame Läufe bilden die Basis. Tempoeinheiten an der Schwelle (Zone 4) setzen gezielte Reize. Vermeide die „Graue Zone" 3.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Kurz- & Mitteldistanz (5K–10K)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Mehr Zone-4- und Zone-5-Arbeit als bei Langstrecke. Intervalltraining (z.B. 6 &times; 1000 m mit 3 min Pause) trainiert die VO2max und verschiebt die anaerobe Schwelle nach oben.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Allgemeine Fitness</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              3–4 Einheiten pro Woche: 2 in Zone 2 (30–60 min), 1 moderate Einheit in Zone 3, 1 Intervalleinheit mit Zone-4-Blöcken. Diese Mischung verbessert Ausdauer, Herzgesundheit und Leistungsfähigkeit gleichzeitig.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt deine persönlichen Herzfrequenz-Zonen</h3>
        <p class="text-stone-300 text-sm mb-5">Individuelle Zonen basierend auf Alter und Ruhepuls — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/heart-rate"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Herzfrequenz-Zonen berechnen &rarr;</router-link>
      </div>

      <!-- Praktische Tipps -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Praktische Tipps für das Zonentraining</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Ruhepuls korrekt messen.</strong> Miss deinen Ruhepuls morgens direkt nach dem Aufwachen, noch im Liegen. Nimm den Durchschnitt von 3–5 Tagen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Brustgurt statt Handgelenk-Sensor.</strong> Optische Sensoren am Handgelenk sind bei hohen Intensitäten ungenau. Ein Brustgurt liefert EKG-nahe Genauigkeit.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Zone 2 fühlt sich langsam an — das ist richtig so.</strong> Die meisten Hobbysportler trainieren zu schnell. Zone 2 bedeutet: du könntest dich locker unterhalten.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Zonen regelmäßig neu berechnen.</strong> Mit steigender Fitness sinkt dein Ruhepuls — deine Zonen verschieben sich. Berechne sie alle 4–6 Wochen neu.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Herzfrequenz-Zonen machen dein Training messbar und steuerbar. Statt nach Gefühl zu trainieren, weißt du genau, welchen Effekt jede Einheit auf deinen Körper hat. Die Karvonen-Formel liefert dir individuelle Zonen — präziser als die einfache Prozentberechnung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Nutze unseren <router-link to="/heart-rate" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz-Zonen-Rechner</router-link>, um deine persönlichen Zonen zu berechnen, und kombiniere das Ergebnis mit deinem <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Energieverbrauch</router-link> für ein ganzheitliches Trainingsbild.
        </p>
      </div>

    </div>
  </article>
</template>
