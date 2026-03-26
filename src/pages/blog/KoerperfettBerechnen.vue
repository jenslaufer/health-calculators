<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Körperfettanteil berechnen: Methoden, Tabellen & Tipps | Health Calculators',
  description: 'Körperfettanteil berechnen mit Navy-Methode, Caliper & BIA. Gesunde Werte nach Alter und Geschlecht plus Tipps zur Reduktion.',
  path: '/blog/koerperfett-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Körperfettanteil berechnen: Methoden, Tabellen & Tipps',
    description: 'Körperfettanteil berechnen mit Navy-Methode, Caliper & BIA. Gesunde Werte nach Alter und Geschlecht plus Tipps zur Reduktion.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/koerperfett-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Körperfettanteil berechnen: Methoden, Tabellen &amp; Tipps</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">26. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">10 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>Körperfettanteil</strong> (KFA) gibt an, wie viel Prozent deines Körpergewichts aus Fettgewebe besteht. Anders als der BMI unterscheidet er zwischen Fett- und Muskelmasse — und liefert damit ein deutlich genaueres Bild deiner Gesundheit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen <strong>Körperfettanteil berechnen</strong> kannst, welche Messmethoden es gibt, welche Werte gesund sind und wie du überschüssiges Körperfett effektiv reduzierst.
        </p>
      </div>

      <!-- Was ist der Körperfettanteil? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der Körperfettanteil?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Körperfettanteil beschreibt das Verhältnis von Fettmasse zur Gesamtkörpermasse in Prozent. Ein gewisser Anteil an Körperfett ist lebenswichtig: Er schützt Organe, reguliert Hormone und dient als Energiespeicher.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Zu viel Körperfett — insbesondere viszerales Fett im Bauchbereich — erhöht das Risiko für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes und bestimmte Krebsarten. Zu wenig Körperfett kann hormonelle Störungen, Unfruchtbarkeit und ein geschwächtes Immunsystem verursachen.
        </p>
      </div>

      <!-- Warum besser als BMI -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum der Körperfettanteil aussagekräftiger ist als der BMI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <router-link to="/blog/bmi-berechnen" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> teilt Gewicht durch Größe zum Quadrat — ohne zwischen Fett und Muskeln zu unterscheiden. Das führt zu Fehleinschätzungen:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sportler werden als übergewichtig eingestuft</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ein Fußballspieler mit 85 kg bei 1,78 m hat einen BMI von 26,8 (übergewichtig). Sein Körperfettanteil liegt aber bei nur 12 % — ein ausgezeichneter Wert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Normalgewichtige mit hohem Fettanteil werden übersehen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Eine Person mit BMI 23 (normalgewichtig), wenig Muskelmasse und 32 % Körperfett hat ein erhöhtes Gesundheitsrisiko, das der BMI nicht erkennt — sogenanntes „Skinny Fat".
            </p>
          </div>
        </div>
      </div>

      <!-- Messmethoden -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Körperfettanteil berechnen: 4 Methoden im Vergleich</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">1. Navy-Methode (Umfangsmessung)</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Entwickelt von der US Navy. Benötigt nur ein Maßband: Hals-, Taillen- und bei Frauen zusätzlich Hüftumfang werden in eine logarithmische Formel eingesetzt.
            </p>
            <div class="flex flex-wrap gap-3 text-xs">
              <span class="bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">Genauigkeit: &plusmn;3–4 %</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Kosten: Kostenlos</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Zuhause durchführbar</span>
            </div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">2. Caliper (Hautfaltenmessung)</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Mit einer Messzange wird die Hautfaltendicke an 3–7 Körperstellen gemessen. Die Werte werden in Formeln (z.B. Jackson-Pollock) eingesetzt. Erfordert etwas Übung für reproduzierbare Ergebnisse.
            </p>
            <div class="flex flex-wrap gap-3 text-xs">
              <span class="bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">Genauigkeit: &plusmn;3–4 %</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Kosten: 10–30 €</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Zuhause durchführbar</span>
            </div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">3. BIA (Bioelektrische Impedanzanalyse)</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Ein schwacher Strom fließt durch den Körper. Da Muskeln mehr Wasser enthalten als Fett, leiten sie besser. Aus dem Widerstand wird der Körperfettanteil geschätzt. In vielen Körperwaagen und Fitness-Studios verfügbar.
            </p>
            <div class="flex flex-wrap gap-3 text-xs">
              <span class="bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full font-medium">Genauigkeit: &plusmn;4–5 %</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Kosten: 30–200 € (Waage)</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Hydration beeinflusst Ergebnis</span>
            </div>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">4. DEXA-Scan (Goldstandard)</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Dual-Energy X-ray Absorptiometry — ein Röntgenverfahren, das Fett, Muskeln und Knochen separat misst. Liefert die genauesten Ergebnisse und zeigt die regionale Fettverteilung.
            </p>
            <div class="flex flex-wrap gap-3 text-xs">
              <span class="bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">Genauigkeit: &plusmn;1–2 %</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Kosten: 80–150 €</span>
              <span class="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">Nur in Kliniken/Praxen</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt deinen Körperfettanteil</h3>
        <p class="text-stone-300 text-sm mb-5">Sofortergebnis mit der Navy-Methode — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/body-fat"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- Tabelle gesunde Werte -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Körperfettanteil Tabelle: Gesunde Werte nach Geschlecht und Alter</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgenden Richtwerte basieren auf den Kategorien des American Council on Exercise (ACE) und epidemiologischen Studien:
        </p>

        <!-- Männer -->
        <h3 class="text-lg font-semibold text-stone-900 mb-3">Männer</h3>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">20–29 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">30–39 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">40–49 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">50+ Jahre</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 mr-2"></span>Essentiell</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">2–5 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">2–5 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">2–5 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">2–5 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Sportlich</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">6–13 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">8–14 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–16 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">12–18 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Fitness</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">14–17 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15–18 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">17–20 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">19–22 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Durchschnitt</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">18–24 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">19–25 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">21–27 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">23–29 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Übergewicht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 25 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 26 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 28 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 30 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Frauen -->
        <h3 class="text-lg font-semibold text-stone-900 mb-3">Frauen</h3>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kategorie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">20–29 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">30–39 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">40–49 Jahre</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">50+ Jahre</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 mr-2"></span>Essentiell</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–13 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–13 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–13 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–13 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Sportlich</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">14–20 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15–21 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">17–23 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">19–25 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Fitness</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">21–24 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">22–25 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">24–27 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">26–29 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Durchschnitt</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25–31 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">26–32 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">28–34 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30–36 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Übergewicht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 32 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 33 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 35 %</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 37 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Körperfett reduzieren -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Körperfett reduzieren: Ernährung &amp; Training</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Um Körperfett nachhaltig zu senken, brauchst du ein moderates Kaloriendefizit in Kombination mit dem richtigen Training. Crash-Diäten führen zu Muskelverlust und Jojo-Effekt.
        </p>

        <h3 class="text-lg font-semibold text-stone-900 mb-3">Ernährung</h3>
        <div class="space-y-4 mb-6">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Moderates Kaloriendefizit (300–500 kcal/Tag).</strong> Berechne deinen <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Energieverbrauch (TDEE)</router-link> und iss 300–500 kcal weniger.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Proteinzufuhr hoch halten (1,6–2,2 g/kg).</strong> Protein schützt Muskelmasse im Defizit und erhöht die Sättigung. Nutze unseren <router-link to="/macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makro-Rechner</router-link> für die optimale Verteilung.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Verarbeitete Lebensmittel reduzieren.</strong> Vollwertige Nahrung sättigt besser und liefert mehr Mikronährstoffe pro Kalorie.</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold text-stone-900 mb-3">Training</h3>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Krafttraining 2–4x pro Woche.</strong> Muskeln erhöhen den Grundumsatz und sorgen dafür, dass du Fett statt Muskelmasse abbaust.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Ausdauertraining ergänzen.</strong> 2–3 Einheiten à 30–45 Minuten (Joggen, Radfahren, Schwimmen) verbessern die Fettverbrennung und Herzgesundheit.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Alltagsbewegung steigern.</strong> 8.000–10.000 Schritte pro Tag erhöhen den Kalorienverbrauch ohne zusätzlichen Trainingsaufwand.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Verwandte Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <div class="space-y-4">
          <router-link to="/bmi" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">BMI berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der Body Mass Index als schneller erster Anhaltspunkt zur Gewichtseinschätzung — inklusive WHO-Klassifikation.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">BMI Calculator &rarr;</span>
          </router-link>
          <router-link to="/ideal-weight" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Idealgewicht berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Berechne deinen gesunden Gewichtsbereich basierend auf mehreren wissenschaftlichen Formeln.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Ideal Weight Calculator &rarr;</span>
          </router-link>
          <router-link to="/tdee" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">TDEE — Täglicher Energieverbrauch</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Erfahre, wie viele Kalorien du täglich verbrennst — die Grundlage für jede Fettreduktion.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">TDEE Calculator &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Körperfettanteil ist eine der aussagekräftigsten Kennzahlen für deine Gesundheit und Fitness. Er zeigt, was der BMI verbirgt: ob dein Gewicht aus Muskeln oder Fett besteht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Für den Einstieg reicht die <strong>Navy-Methode</strong> — schnell, kostenlos und überraschend genau. Nutze unseren <router-link to="/body-fat" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil-Rechner</router-link> und ergänze das Ergebnis mit deinem <router-link to="/bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und <router-link to="/ideal-weight" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht</router-link> für ein umfassendes Bild.
        </p>
      </div>

    </div>
  </article>
</template>
