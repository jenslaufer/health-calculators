<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Wasserbedarf berechnen: So viel Wasser brauchst du wirklich | Health Calculators',
  description: 'Wasserbedarf berechnen mit Formel, Tabelle nach Gewicht & Aktivität. Erfahre, wie viel Wasser du täglich trinken solltest.',
  path: '/blog/wasserbedarf-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wasserbedarf berechnen: So viel Wasser brauchst du wirklich',
    description: 'Wasserbedarf berechnen mit Formel, Tabelle nach Gewicht & Aktivität. Erfahre, wie viel Wasser du täglich trinken solltest.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/wasserbedarf-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Wasserbedarf berechnen: So viel Wasser brauchst du wirklich</h1>
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
          Wasser ist der wichtigste Nährstoff deines Körpers. Rund <strong>60 % deines Körpergewichts</strong> bestehen aus Wasser — es reguliert die Körpertemperatur, transportiert Nährstoffe und entsorgt Abfallprodukte. Trotzdem trinken die meisten Menschen zu wenig.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen <strong>Wasserbedarf berechnen</strong> kannst, welche Faktoren den Bedarf beeinflussen, und wie du erkennst, ob du genug trinkst.
        </p>
      </div>

      <!-- Warum Wasser so wichtig ist -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Wasser so wichtig ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Selbst leichter Flüssigkeitsmangel von 1–2 % des Körpergewichts beeinträchtigt bereits deine Leistungsfähigkeit. Die Auswirkungen betreffen nahezu jede Körperfunktion:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Stoffwechsel</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wasser ist an praktisch jeder biochemischen Reaktion beteiligt. Dein Körper benötigt es, um Nährstoffe aufzuspalten, zu transportieren und in Energie umzuwandeln. Ein dehydrierter Stoffwechsel arbeitet langsamer — das betrifft auch die Fettverbrennung.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Konzentration & Gehirnleistung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dein Gehirn besteht zu etwa 75 % aus Wasser. Studien zeigen, dass bereits 2 % Dehydration die Konzentrationsfähigkeit, das Kurzzeitgedächtnis und die Reaktionszeit messbar verschlechtern. Kopfschmerzen sind oft das erste Warnsignal.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sportliche Leistung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Bei körperlicher Belastung verlierst du 0,5–2 Liter Schweiß pro Stunde. Schon 2 % Flüssigkeitsverlust senken die Ausdauerleistung um bis zu 25 %. Die Muskelkraft nimmt ab und das Verletzungsrisiko steigt.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nieren & Entgiftung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Deine Nieren filtern täglich rund 180 Liter Blut. Ohne ausreichend Wasser können sie Abfallstoffe nicht effektiv ausscheiden. Chronischer Flüssigkeitsmangel erhöht das Risiko für Nierensteine und Harnwegsinfektionen.
            </p>
          </div>
        </div>
      </div>

      <!-- Wasserbedarf berechnen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wasserbedarf berechnen: Die Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die gängigste Methode zur Berechnung des täglichen Wasserbedarfs basiert auf dem Körpergewicht:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Wasserbedarf = Körpergewicht (kg) &times; 30–40 ml</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Faktor 30 ml/kg gilt als Basiswert für wenig aktive Erwachsene. Bei sportlicher Aktivität, Hitze oder körperlich anstrengender Arbeit steigt der Bedarf auf 35–40 ml/kg.
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Körpergewicht in Kilogramm notieren.</strong> Beispiel: 75 kg.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Aktivitätslevel einschätzen.</strong> Wenig aktiv = 30 ml/kg, moderat aktiv = 35 ml/kg, sehr aktiv = 40 ml/kg.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Multiplizieren.</strong> 75 kg &times; 35 ml = 2.625 ml &asymp; 2,6 Liter pro Tag.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Einflussfaktoren -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was den Wasserbedarf beeinflusst</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein individueller Wasserbedarf hängt von mehreren Faktoren ab:
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">&#x2602;</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Klima & Temperatur.</strong> Bei Hitze oder trockener Luft (Heizung, Klimaanlage) verliert der Körper mehr Wasser über Haut und Atmung. Im Sommer kann der Bedarf um 0,5–1 Liter steigen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold flex items-center justify-center">&#x2661;</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Körperliche Aktivität.</strong> Pro Stunde Sport solltest du zusätzlich 500–1.000 ml trinken. Bei intensivem Training auch elektrolythaltige Getränke, um Mineralstoffverluste auszugleichen.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center">&#x2606;</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Ernährung.</strong> Etwa 20–30 % deines Wasserbedarfs deckst du über feste Nahrung. Wasserreiche Lebensmittel wie Gurke (96 %), Wassermelone (92 %) und Tomaten (95 %) tragen erheblich bei.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-700 text-sm font-bold flex items-center justify-center">&#x2764;</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Gesundheitszustand.</strong> Fieber, Durchfall und Erbrechen erhöhen den Flüssigkeitsverlust stark. Auch Schwangerschaft und Stillzeit erfordern 300–700 ml zusätzlich pro Tag.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabelle -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tabelle: Wasserbedarf nach Gewicht und Aktivität</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt den ungefähren täglichen Wasserbedarf in Litern:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Körpergewicht</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Wenig aktiv (30 ml/kg)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Moderat aktiv (35 ml/kg)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Sehr aktiv (40 ml/kg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">50 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1,5 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1,8 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,0 L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">60 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">1,8 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,1 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,4 L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">70 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,1 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,5 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,8 L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">80 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,4 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,8 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">3,2 L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">90 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">2,7 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">3,2 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">3,6 L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">100 kg</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">3,0 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">3,5 L</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">4,0 L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Diese Werte sind Richtwerte für gesunde Erwachsene. Individuelle Faktoren wie Klima, Ernährung und Gesundheitszustand können den Bedarf verändern.
        </p>
      </div>

      <!-- Anzeichen für Dehydration -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Anzeichen für Dehydration</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Körper sendet deutliche Warnsignale, wenn er zu wenig Flüssigkeit bekommt. Lerne sie zu erkennen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schweregrad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptome</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Leicht (1–2 %)
                </td>
                <td class="px-6 py-3 text-stone-600">Durst, dunkler Urin, trockener Mund, leichte Kopfschmerzen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Mittel (3–5 %)
                </td>
                <td class="px-6 py-3 text-stone-600">Müdigkeit, Schwindel, verminderte Konzentration, trockene Haut</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-red-600 mr-2"></span>Schwer (&gt; 5 %)
                </td>
                <td class="px-6 py-3 text-stone-600">Herzrasen, Verwirrtheit, Muskelkrämpfe, Kreislaufprobleme</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Tipp:</strong> Die Farbe deines Urins ist der einfachste Indikator. Hellgelb bis fast klar bedeutet gute Hydration. Dunkelgelb bis bernsteinfarben zeigt Flüssigkeitsmangel an.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt deinen Wasserbedarf</h3>
        <p class="text-stone-300 text-sm mb-5">Individuelles Ergebnis basierend auf Gewicht, Aktivität und Klima — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/water"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt Wasserbedarf berechnen &rarr;</router-link>
      </div>

      <!-- Tipps für mehr Wasser trinken -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">7 Tipps, um mehr Wasser zu trinken</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Starte den Tag mit Wasser.</strong> Trinke direkt nach dem Aufstehen ein großes Glas (300–500 ml). Nach 6–8 Stunden Schlaf ist dein Körper dehydriert.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Trinkflasche immer dabei.</strong> Sichtbares Wasser wird häufiger getrunken. Eine 1-Liter-Flasche auf dem Schreibtisch wirkt als stille Erinnerung.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Trinke vor jeder Mahlzeit.</strong> Ein Glas Wasser 30 Minuten vor dem Essen verbessert die Verdauung und hilft, das Sättigungsgefühl zu steuern.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Geschmack hinzufügen.</strong> Zitrone, Gurke, Minze oder Ingwer machen Wasser abwechslungsreicher — ohne Zucker oder Kalorien.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">5</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Erinnerungen setzen.</strong> Nutze eine App oder stelle stündliche Timer. Gewohnheiten bilden sich durch Wiederholung — nach 2–3 Wochen trinkt man automatisch mehr.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">6</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Wasserreiche Lebensmittel essen.</strong> Gurke, Wassermelone, Erdbeeren, Brokkoli und Suppen zählen zur Flüssigkeitsaufnahme und liefern zusätzlich Vitamine.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">7</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Koffein und Alkohol ausgleichen.</strong> Beide wirken leicht harntreibend. Trinke pro Tasse Kaffee ein zusätzliches Glas Wasser, bei Alkohol mindestens die gleiche Menge.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Verwandte Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Wasserbedarf hängt eng mit anderen Gesundheitskennzahlen zusammen. Diese Rechner helfen dir, ein vollständiges Bild zu bekommen:
        </p>
        <div class="space-y-4">
          <router-link to="/tdee" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">TDEE — Täglicher Energieverbrauch</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wer mehr Kalorien verbrennt, braucht mehr Wasser. Der TDEE-Rechner zeigt dir deinen täglichen Energieumsatz — ein direkter Indikator für deinen Flüssigkeitsbedarf.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">TDEE berechnen &rarr;</span>
          </router-link>
          <router-link to="/bmi" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">BMI berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Dein Körpergewicht beeinflusst deinen Wasserbedarf direkt. Der BMI hilft dir, dein Gewicht einzuordnen und die richtige Trinkmenge abzuleiten.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">BMI berechnen &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ausreichend Wasser zu trinken ist eine der einfachsten und wirkungsvollsten Maßnahmen für deine Gesundheit. Die Formel 30–40 ml pro Kilogramm Körpergewicht gibt dir einen soliden Ausgangspunkt. Passe den Wert an dein Aktivitätslevel, das Klima und deinen Gesundheitszustand an.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Nutze unseren <router-link to="/water" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarf-Rechner</router-link> für eine individuelle Berechnung und kombiniere das Ergebnis mit deinem <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Energieverbrauch</router-link> und <router-link to="/bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> für ein umfassendes Gesundheitsbild.
        </p>
      </div>

    </div>
  </article>
</template>
