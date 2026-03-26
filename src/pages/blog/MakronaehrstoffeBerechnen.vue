<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Makronährstoffe berechnen: Eiweiß, Fett & Kohlenhydrate richtig verteilen | Health Calculators',
  description: 'Makronährstoffe berechnen leicht gemacht. Erfahre, wie du Eiweiß, Fett und Kohlenhydrate optimal verteilst — mit Formeln, Beispielen und kostenlosem Makro-Rechner.',
  path: '/blog/makronaehrstoffe-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Makronährstoffe berechnen: Eiweiß, Fett & Kohlenhydrate richtig verteilen',
    description: 'Makronährstoffe berechnen leicht gemacht. Erfahre, wie du Eiweiß, Fett und Kohlenhydrate optimal verteilst — mit Formeln, Beispielen und kostenlosem Makro-Rechner.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/makronaehrstoffe-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Makronährstoffe berechnen: Eiweiß, Fett & Kohlenhydrate richtig verteilen</h1>
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
          Kalorien zählen allein reicht nicht. Wer Muskeln aufbauen, Fett verlieren oder seine Leistung steigern will, muss wissen, wie sich die Kalorien auf <strong>Eiweiß, Fett und Kohlenhydrate</strong> verteilen. Diese drei Makronährstoffe liefern deinem Körper Energie — aber auf völlig unterschiedliche Weise.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deine <strong>Makronährstoffe berechnen</strong> kannst, welche Verteilungen sinnvoll sind und wie du die Theorie in deinen Alltag umsetzt.
        </p>
      </div>

      <!-- Was sind Makronährstoffe? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sind Makronährstoffe?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Makronährstoffe sind die drei Nährstoffgruppen, die dein Körper in großen Mengen braucht: <strong>Protein (Eiweiß)</strong>, <strong>Fett</strong> und <strong>Kohlenhydrate</strong>. Jeder Makronährstoff hat eine spezifische Funktion und liefert eine unterschiedliche Menge an Energie pro Gramm.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Makronährstoff</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Energie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hauptfunktion</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Protein (Eiweiß)
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">4 kcal/g</td>
                <td class="px-6 py-3 text-stone-500">Muskelaufbau, Zellreparatur, Enzyme</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Fett
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">9 kcal/g</td>
                <td class="px-6 py-3 text-stone-500">Hormone, Zellmembranen, Energiespeicher</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Kohlenhydrate
                </td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">4 kcal/g</td>
                <td class="px-6 py-3 text-stone-500">Schnelle Energie, Gehirnfunktion, Glykogen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Protein -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Protein: Der Baustein für Muskeln</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Protein ist der wichtigste Makronährstoff für Muskelaufbau und -erhalt. Die aktuelle Studienlage empfiehlt <strong>1,6 bis 2,2 g Protein pro Kilogramm Körpergewicht</strong> für Sportler und Menschen, die Muskeln aufbauen wollen. Für den Muskelerhalt in einer Diät solltest du am oberen Ende dieses Bereichs liegen.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-3">Beispiel: 80 kg schwere Person</p>
          <ul class="space-y-1 text-sm text-stone-600">
            <li>Minimum: 80 &times; 1,6 = <strong>128 g Protein/Tag</strong></li>
            <li>Optimal: 80 &times; 2,0 = <strong>160 g Protein/Tag</strong></li>
            <li>Maximum: 80 &times; 2,2 = <strong>176 g Protein/Tag</strong></li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Gute Proteinquellen:</strong> Hähnchenbrust (31 g/100 g), Magerquark (12 g/100 g), Eier (13 g/100 g), Linsen (9 g/100 g gekocht), Lachs (20 g/100 g), Tofu (15 g/100 g).
        </p>
      </div>

      <!-- Fett -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fett: Essentiell für Hormone und Gesundheit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Fett ist kein Feind. Dein Körper braucht Fett für die Produktion von Hormonen (besonders Testosteron), die Aufnahme fettlöslicher Vitamine (A, D, E, K) und als Schutz für Organe. Die Empfehlung liegt bei <strong>0,8 bis 1,2 g Fett pro Kilogramm Körpergewicht</strong>. Unter 20 % der Gesamtkalorien sollte der Fettanteil nicht fallen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Gute Fettquellen:</strong> Olivenöl, Avocado, Nüsse, fetter Fisch (Omega-3), Eier, dunkle Schokolade.
        </p>
      </div>

      <!-- Kohlenhydrate -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Kohlenhydrate: Treibstoff für Leistung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kohlenhydrate sind die bevorzugte Energiequelle deines Körpers — besonders bei intensivem Training. Sie füllen die Glykogenspeicher in Muskeln und Leber. Die Kohlenhydratmenge ergibt sich aus den <strong>verbleibenden Kalorien</strong>, nachdem Protein und Fett berechnet wurden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Gute Kohlenhydratquellen:</strong> Haferflocken, Reis, Kartoffeln, Süßkartoffeln, Vollkornbrot, Obst, Hülsenfrüchte.
        </p>
      </div>

      <!-- Makro-Split berechnen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Makronährstoffe berechnen: Schritt für Schritt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Um deine Makros zu berechnen, brauchst du zuerst deinen <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Kalorienverbrauch (TDEE)</router-link>. Von dort aus verteilst du die Kalorien auf die drei Makronährstoffe.
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>TDEE ermitteln.</strong> Berechne deinen täglichen Gesamtenergieverbrauch mit unserem <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Rechner</router-link>.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Ziel festlegen.</strong> Abnehmen: TDEE &minus; 300–500 kcal. Muskelaufbau: TDEE + 200–300 kcal. Halten: TDEE.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Protein berechnen.</strong> 1,6–2,2 g pro kg Körpergewicht. Gramm &times; 4 = Kalorien aus Protein.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Fett berechnen.</strong> 25–35 % der Gesamtkalorien. Kalorien aus Fett &divide; 9 = Gramm Fett.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Kohlenhydrate berechnen.</strong> Restliche Kalorien &divide; 4 = Gramm Kohlenhydrate.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Rechenbeispiel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel: 80 kg, Muskelaufbau</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <ul class="space-y-2 text-sm text-stone-600">
            <li><strong>TDEE:</strong> 2.500 kcal + 250 kcal Überschuss = <strong>2.750 kcal</strong></li>
            <li><strong>Protein:</strong> 80 kg &times; 2,0 g = 160 g &rarr; 160 &times; 4 = <strong>640 kcal</strong></li>
            <li><strong>Fett:</strong> 30 % von 2.750 = 825 kcal &rarr; 825 &divide; 9 = <strong>92 g</strong></li>
            <li><strong>Kohlenhydrate:</strong> 2.750 &minus; 640 &minus; 825 = 1.285 kcal &rarr; 1.285 &divide; 4 = <strong>321 g</strong></li>
          </ul>
          <p class="text-sm text-stone-900 font-semibold mt-4">Ergebnis: 160 g Protein | 92 g Fett | 321 g Kohlenhydrate</p>
        </div>
      </div>

      <!-- Gängige Makro-Verteilungen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gängige Makro-Verteilungen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Je nach Ziel eignen sich unterschiedliche Verhältnisse von Protein, Kohlenhydraten und Fett:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ausgewogen (40/30/30)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              40 % Kohlenhydrate, 30 % Protein, 30 % Fett. Der Klassiker für allgemeine Fitness und Gesundheit. Gut geeignet für Einsteiger und moderate Trainierende.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">High-Protein (40/35/25)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              40 % Kohlenhydrate, 35 % Protein, 25 % Fett. Ideal für Muskelaufbau und Diäten. Der höhere Proteinanteil schützt die Muskelmasse in einem Kaloriendefizit.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Low-Carb (20/35/45)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              20 % Kohlenhydrate, 35 % Protein, 45 % Fett. Für Menschen, die mit weniger Kohlenhydraten bessere Sättigung und stabilere Blutzuckerwerte erfahren.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ketogen (5/25/70)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              5 % Kohlenhydrate, 25 % Protein, 70 % Fett. Extreme Reduktion der Kohlenhydrate versetzt den Körper in Ketose. Erfordert strikte Disziplin und ist nicht für jeden geeignet.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt deine Makronährstoffe</h3>
        <p class="text-stone-300 text-sm mb-5">Individuelle Makro-Verteilung basierend auf deinem Ziel — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/macros"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Makros berechnen &rarr;</router-link>
      </div>

      <!-- Praktische Tipps -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Praktische Tipps für die Umsetzung</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Mahlzeiten vorbereiten (Meal Prep)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Koche Proteinquellen, Reis und Gemüse für 3–4 Tage vor. So triffst du deine Makros zuverlässig, ohne täglich kochen zu müssen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Protein auf Mahlzeiten verteilen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Verteile dein Protein gleichmäßig auf 3–5 Mahlzeiten (25–40 g pro Mahlzeit). Die Muskelproteinsynthese wird pro Mahlzeit durch 20–40 g Protein maximal stimuliert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">80/20-Regel anwenden</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              80 % deiner Nahrung sollten aus nährstoffreichen, unverarbeiteten Lebensmitteln bestehen. Die restlichen 20 % dürfen flexibel sein — so bleibst du langfristig dabei.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Tracking-App nutzen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Nutze eine App wie MyFitnessPal oder FDDB, um deine Makros in den ersten Wochen zu tracken. Nach 4–6 Wochen entwickelst du ein Gespür für Portionsgrößen und kannst intuitiver essen.
            </p>
          </div>
        </div>
      </div>

      <!-- Weiterführende Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weiterführende Rechner</h2>
        <div class="space-y-4">
          <router-link to="/tdee" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">TDEE berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dein täglicher Gesamtenergieverbrauch ist die Grundlage für jede Makro-Berechnung. Ohne TDEE kein sinnvoller Makro-Split.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">TDEE Calculator &rarr;</span>
          </router-link>
          <router-link to="/bmi" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">BMI berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der BMI gibt dir eine erste Einschätzung, ob dein Gewicht im gesunden Bereich liegt — ein guter Startpunkt vor der Makro-Optimierung.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">BMI Calculator &rarr;</span>
          </router-link>
          <router-link to="/body-fat" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Körperfettanteil berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dein Körperfettanteil hilft dir, den Proteinbedarf genauer zu bestimmen — basierend auf fettfreier Masse statt Gesamtgewicht.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Body Fat Calculator &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Makronährstoffe zu berechnen ist kein Hexenwerk. Ermittle deinen Kalorienverbrauch, setze Protein als Priorität, füge ausreichend Fett hinzu und fülle den Rest mit Kohlenhydraten auf. Die perfekte Verteilung hängt von deinem Ziel, deinem Training und deinen Vorlieben ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Starte mit unserem <router-link to="/macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoff-Rechner</router-link>, bestimme deinen <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> und tracke deine Makros für einige Wochen. Die Ergebnisse werden für sich sprechen.
        </p>
      </div>

    </div>
  </article>
</template>
