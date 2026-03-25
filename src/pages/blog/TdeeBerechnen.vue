<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'TDEE berechnen: So bestimmst du deinen Kalorienbedarf | Health Calculators',
  description: 'TDEE berechnen mit Harris-Benedict & Mifflin-St Jeor Formel. Erfahre deinen täglichen Kalorienverbrauch inkl. Aktivitätsfaktoren und praktischen Tipps.',
  path: '/blog/tdee-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TDEE berechnen: So bestimmst du deinen Kalorienbedarf',
    description: 'TDEE berechnen mit Harris-Benedict & Mifflin-St Jeor Formel. Erfahre deinen täglichen Kalorienverbrauch inkl. Aktivitätsfaktoren und praktischen Tipps.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/tdee-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">TDEE berechnen: So bestimmst du deinen Kalorienbedarf</h1>
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
          Dein <strong>TDEE (Total Daily Energy Expenditure)</strong> ist die Gesamtmenge an Kalorien, die dein Körper an einem Tag verbrennt. Er umfasst alles — vom Atmen über Verdauung bis hin zu Sport und Alltagsbewegung.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ob du abnehmen, zunehmen oder dein Gewicht halten willst: Ohne deinen <strong>TDEE zu kennen</strong>, tappst du im Dunkeln. In diesem Artikel lernst du die zwei wichtigsten Formeln kennen, verstehst die Aktivitätsfaktoren und bekommst praktische Tipps für deinen Alltag.
        </p>
      </div>

      <!-- Was ist der TDEE? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der TDEE?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          TDEE steht für <strong>Total Daily Energy Expenditure</strong> — auf Deutsch: täglicher Gesamtenergieumsatz. Er setzt sich aus drei Komponenten zusammen:
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Grundumsatz (BMR)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Energie, die dein Körper in völliger Ruhe verbraucht — für Herzschlag, Atmung, Zellregeneration und Gehirnfunktion. Der BMR macht etwa <strong>60–70 %</strong> deines TDEE aus.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Thermischer Effekt der Nahrung (TEF)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dein Körper braucht Energie, um Nahrung zu verdauen und Nährstoffe aufzunehmen. Das macht etwa <strong>10 %</strong> deines TDEE aus. Proteinreiche Nahrung hat den höchsten thermischen Effekt.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Aktivitätsumsatz (EAT + NEAT)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Gezieltes Training (EAT) plus Alltagsbewegung wie Gehen, Tippen oder Stehen (NEAT). Dieser Anteil variiert stark — zwischen <strong>20–40 %</strong> deines TDEE.
            </p>
          </div>
        </div>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-stone-900">TDEE = BMR + TEF + Aktivitätsumsatz</p>
        </div>
      </div>

      <!-- Formeln -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die zwei wichtigsten Formeln zur BMR-Berechnung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Um deinen TDEE zu berechnen, brauchst du zuerst deinen Grundumsatz (BMR). Zwei Formeln haben sich in der Praxis durchgesetzt:
        </p>

        <!-- Harris-Benedict -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Harris-Benedict-Formel (1919, revidiert 1984)</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Die ältere und bekanntere Formel. Wird seit über 100 Jahren verwendet und ist gut validiert für Normalgewichtige.
          </p>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-3 space-y-2">
            <p class="text-sm font-semibold text-stone-900">Männer:</p>
            <p class="text-sm text-stone-700">BMR = 88,362 + (13,397 &times; Gewicht in kg) + (4,799 &times; Größe in cm) &minus; (5,677 &times; Alter)</p>
            <p class="text-sm font-semibold text-stone-900 mt-3">Frauen:</p>
            <p class="text-sm text-stone-700">BMR = 447,593 + (9,247 &times; Gewicht in kg) + (3,098 &times; Größe in cm) &minus; (4,330 &times; Alter)</p>
          </div>
        </div>

        <!-- Mifflin-St Jeor -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-stone-900 mb-3">Mifflin-St Jeor-Formel (1990)</h3>
          <p class="text-base text-stone-600 leading-relaxed mb-3">
            Die modernere und laut Studien <strong>genauere Formel</strong>. Die American Dietetic Association empfiehlt sie als Standardmethode.
          </p>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-3 space-y-2">
            <p class="text-sm font-semibold text-stone-900">Männer:</p>
            <p class="text-sm text-stone-700">BMR = (10 &times; Gewicht in kg) + (6,25 &times; Größe in cm) &minus; (5 &times; Alter) + 5</p>
            <p class="text-sm font-semibold text-stone-900 mt-3">Frauen:</p>
            <p class="text-sm text-stone-700">BMR = (10 &times; Gewicht in kg) + (6,25 &times; Größe in cm) &minus; (5 &times; Alter) &minus; 161</p>
          </div>
        </div>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base text-stone-600 leading-relaxed">
            <strong>Beispiel:</strong> Ein 30-jähriger Mann, 80 kg, 180 cm — Mifflin-St Jeor ergibt: (10 &times; 80) + (6,25 &times; 180) &minus; (5 &times; 30) + 5 = 800 + 1125 &minus; 150 + 5 = <strong>1.780 kcal BMR</strong>.
          </p>
        </div>
      </div>

      <!-- Aktivitätsfaktoren -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Aktivitätsfaktoren: Vom BMR zum TDEE</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Deinen BMR multiplizierst du mit einem Aktivitätsfaktor, um den TDEE zu erhalten:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivitätslevel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Faktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beschreibung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Sitzend</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1,2</td>
                <td class="px-6 py-3 text-stone-500">Bürojob, kaum Bewegung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Leicht aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1,375</td>
                <td class="px-6 py-3 text-stone-500">1–3 Trainingseinheiten pro Woche</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Moderat aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1,55</td>
                <td class="px-6 py-3 text-stone-500">3–5 Trainingseinheiten pro Woche</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Sehr aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1,725</td>
                <td class="px-6 py-3 text-stone-500">6–7 Trainingseinheiten pro Woche</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Extrem aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1,9</td>
                <td class="px-6 py-3 text-stone-500">Schwere körperliche Arbeit oder 2x täglich Training</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
          <p class="text-base text-stone-600 leading-relaxed">
            <strong>Beispiel:</strong> Unser 30-jähriger Mann mit 1.780 kcal BMR trainiert 4x pro Woche: 1.780 &times; 1,55 = <strong>2.759 kcal TDEE</strong>.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt kostenlos deinen TDEE berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sofortergebnis mit beiden Formeln und allen Aktivitätsstufen — ohne Anmeldung.</p>
        <router-link
          to="/tdee"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- TDEE zum Abnehmen/Zunehmen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">TDEE nutzen: Abnehmen, Zunehmen oder Gewicht halten</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein TDEE ist der Dreh- und Angelpunkt jeder Ernährungsstrategie:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Abnehmen: Kaloriendefizit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Iss <strong>300–500 kcal unter deinem TDEE</strong>. Das ergibt ein gesundes Defizit von ca. 0,3–0,5 kg Fettabbau pro Woche. Größere Defizite führen oft zu Muskelabbau und Jojo-Effekt.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Zunehmen: Kalorienüberschuss</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Iss <strong>200–400 kcal über deinem TDEE</strong>. In Kombination mit Krafttraining baust du so Muskelmasse auf, ohne übermäßig Fett anzusetzen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Gewicht halten: Maintenance</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Iss ungefähr auf TDEE-Niveau. Eine Schwankung von &plusmn;100 kcal pro Tag ist völlig normal und kein Grund zur Sorge.
            </p>
          </div>
        </div>
      </div>

      <!-- Praktische Tipps -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">5 praktische Tipps für deinen TDEE</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Sei ehrlich beim Aktivitätslevel.</strong> Die meisten Menschen überschätzen ihre Aktivität. Im Zweifel eine Stufe niedriger wählen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Beobachte 2–3 Wochen.</strong> Dein TDEE ist eine Schätzung. Vergleiche ihn mit deinem tatsächlichen Gewichtsverlauf und passe die Kalorien an.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Berechne regelmäßig neu.</strong> Dein TDEE ändert sich mit Gewicht, Alter, Muskelmasse und Aktivitätslevel. Alle 4–6 Wochen neu berechnen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Kombiniere mit Makros.</strong> Nicht nur die Kalorienmenge zählt — auch die Verteilung auf Protein, Kohlenhydrate und Fett beeinflusst deine Ergebnisse.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Vergiss NEAT nicht.</strong> Alltagsbewegung wie Spazierengehen, Treppensteigen und Stehen kann 200–400 kcal pro Tag ausmachen.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein TDEE ist die wichtigste Zahl, wenn es um Ernährungsplanung geht. Die Mifflin-St Jeor-Formel liefert die genauesten Ergebnisse für die meisten Menschen. Kombiniert mit dem richtigen Aktivitätsfaktor bekommst du eine solide Grundlage für deine Kalorienziele.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Berechne jetzt deinen TDEE mit unserem <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Rechner</router-link> und ergänze das Ergebnis mit dem <router-link to="/macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makro-Rechner</router-link> für einen vollständigen Ernährungsplan.
        </p>
      </div>

    </div>
  </article>
</template>
