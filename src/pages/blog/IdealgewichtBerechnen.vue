<script setup>
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'Idealgewicht berechnen: Formeln, Tabellen & was wirklich zählt | Health Calculators',
  description: 'Idealgewicht berechnen mit Broca, Creff & Hamwi. Tabelle nach Größe und Geschlecht. Erfahre, warum dein Idealgewicht individuell ist.',
  path: '/blog/idealgewicht-berechnen',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Idealgewicht berechnen: Formeln, Tabellen & was wirklich zählt',
    description: 'Idealgewicht berechnen mit Broca, Creff & Hamwi. Tabelle nach Größe und Geschlecht. Erfahre, warum dein Idealgewicht individuell ist.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/idealgewicht-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Idealgewicht berechnen: Formeln, Tabellen &amp; was wirklich zählt</h1>
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
          Was ist eigentlich das <strong>Idealgewicht</strong>? Die Antwort hängt davon ab, wen du fragst. Mediziner, Ernährungswissenschaftler und Fitness-Experten nutzen unterschiedliche Formeln — und kommen zu unterschiedlichen Ergebnissen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du dein <strong>Idealgewicht berechnen</strong> kannst, welche Formeln es gibt, was die Tabellen sagen — und warum das perfekte Gewicht am Ende individuell ist.
        </p>
      </div>

      <!-- Was ist das Idealgewicht? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist das Idealgewicht?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Begriff „Idealgewicht" beschreibt das Körpergewicht, bei dem das geringste Gesundheitsrisiko und die höchste Lebenserwartung statistisch nachgewiesen sind. Anders als das Normalgewicht, das einen breiteren Bereich abdeckt, zielt das Idealgewicht auf einen engeren, optimalen Korridor.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das Problem: Es gibt keine einheitliche Definition. Verschiedene Formeln liefern verschiedene Werte. Deshalb lohnt sich ein Blick auf die drei bekanntesten Ansätze.
        </p>
      </div>

      <!-- Broca-Formel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Broca-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der französische Arzt <strong>Paul Broca</strong> entwickelte 1871 die einfachste Formel zur Berechnung des Normalgewichts:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Normalgewicht = Körpergröße (cm) &minus; 100</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das Idealgewicht leitet sich daraus ab:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Männer: Normalgewicht &minus; 10 %</p>
          <p class="text-base font-semibold text-stone-900">Frauen: Normalgewicht &minus; 15 %</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Beispiel:</strong> Ein Mann mit 180 cm hat ein Normalgewicht von 80 kg und ein Idealgewicht von <strong>72 kg</strong>. Eine Frau mit 170 cm kommt auf ein Normalgewicht von 70 kg und ein Idealgewicht von <strong>59,5 kg</strong>.
        </p>
      </div>

      <!-- Creff-Formel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Creff-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Creff-Formel geht einen Schritt weiter als Broca und berücksichtigt neben der Körpergröße auch das <strong>Alter</strong> und den <strong>Körperbau</strong> (schmaler, mittlerer oder breiter Rahmen):
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Idealgewicht = (Größe &minus; 100 + Alter / 10) &times; 0,9 &times; Korrekturfaktor</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Körperbau</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Korrekturfaktor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Schmal (grazil)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">0,9</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Mittel (normal)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,0</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Breit (kräftig)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Beispiel:</strong> Eine 35-jährige Frau mit 170 cm und normalem Körperbau: (170 &minus; 100 + 35 / 10) &times; 0,9 &times; 1,0 = <strong>66,2 kg</strong>.
        </p>
      </div>

      <!-- Hamwi-Formel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Hamwi-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Hamwi-Formel wurde 1964 vom amerikanischen Endokrinologen <strong>G. J. Hamwi</strong> entwickelt und wird bis heute in der klinischen Praxis verwendet:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Männer: 48,0 kg + 2,7 kg pro 2,54 cm über 152,4 cm</p>
          <p class="text-base font-semibold text-stone-900">Frauen: 45,5 kg + 2,2 kg pro 2,54 cm über 152,4 cm</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Beispiel:</strong> Ein Mann mit 180 cm: 48,0 + 2,7 &times; (180 &minus; 152,4) / 2,54 = 48,0 + 29,3 = <strong>77,3 kg</strong>. Eine Frau mit 170 cm: 45,5 + 2,2 &times; (170 &minus; 152,4) / 2,54 = 45,5 + 15,2 = <strong>60,7 kg</strong>.
        </p>
      </div>

      <!-- Tabelle: Idealgewicht nach Größe -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Idealgewicht-Tabelle nach Größe und Geschlecht</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt Richtwerte für das Idealgewicht basierend auf einem Durchschnitt der gängigen Formeln. Beachte: Dies sind Orientierungswerte, keine absoluten Zielwerte.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Körpergröße</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen (kg)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer (kg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">155 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">47 – 55</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">51 – 59</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">160 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">50 – 58</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">55 – 63</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">165 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">53 – 62</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">58 – 67</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">170 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">56 – 65</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">62 – 72</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">175 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">59 – 69</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">65 – 76</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">180 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">63 – 73</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">69 – 80</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">185 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">66 – 77</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">73 – 85</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">190 cm</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">70 – 81</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">77 – 89</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt dein Idealgewicht</h3>
        <p class="text-stone-300 text-sm mb-5">Mehrere Formeln im Vergleich — kostenlos und ohne Anmeldung.</p>
        <router-link
          to="/ideal-weight"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- Warum Idealgewicht individuell ist -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum dein Idealgewicht individuell ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alle Formeln haben eine gemeinsame Schwäche: Sie berücksichtigen nicht die <strong>Körperzusammensetzung</strong>. Zwei Personen mit gleicher Größe und gleichem Gewicht können völlig unterschiedlich zusammengesetzt sein.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Muskelmasse vs. Fettmasse</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Muskeln wiegen mehr als Fett bei gleichem Volumen. Ein trainierter Mensch kann deutlich schwerer sein als sein rechnerisches Idealgewicht — und trotzdem gesünder als jemand, der exakt im „idealen" Bereich liegt, aber wenig Muskelmasse hat.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Knochendichte und Körperbau</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Menschen mit breiterem Knochenbau wiegen naturgemäß mehr. Die Creff-Formel berücksichtigt dies teilweise, aber auch sie kann die individuelle Knochendichte nicht exakt abbilden.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Alter und Hormonstatus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Mit zunehmendem Alter verändert sich die Körperzusammensetzung. Der Muskelanteil sinkt, der Fettanteil steigt. Ein leicht höheres Gewicht im Alter ist medizinisch oft unbedenklich — manche Studien zeigen sogar Vorteile für die Lebenserwartung.
            </p>
          </div>
        </div>
      </div>

      <!-- BMI vs Idealgewicht vs Körperfett -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI vs. Idealgewicht vs. Körperfettanteil</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Welche Kennzahl ist am aussagekräftigsten? Jede hat ihren Platz — aber unterschiedliche Stärken.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kennzahl</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stärke</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schwäche</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">BMI</td>
                <td class="px-6 py-3 text-stone-600">Schnelle Einordnung, weltweit anerkannt</td>
                <td class="px-6 py-3 text-stone-600">Ignoriert Muskelmasse und Fettverteilung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Idealgewicht</td>
                <td class="px-6 py-3 text-stone-600">Konkreter Zielwert in Kilogramm</td>
                <td class="px-6 py-3 text-stone-600">Formelabhängig, berücksichtigt keine Zusammensetzung</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Körperfettanteil</td>
                <td class="px-6 py-3 text-stone-600">Unterscheidet Fett- und Muskelmasse</td>
                <td class="px-6 py-3 text-stone-600">Schwieriger zu messen, erfordert Hilfsmittel</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die beste Strategie: Kombiniere mehrere Kennzahlen. Nutze das Idealgewicht als groben Richtwert, den BMI zur Einordnung und den Körperfettanteil für das vollständige Bild.
        </p>
      </div>

      <!-- Verlinkte Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <div class="space-y-4">
          <router-link to="/bmi" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">BMI berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Berechne deinen Body Mass Index und erfahre, in welche WHO-Kategorie du fällst.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">BMI Calculator &rarr;</span>
          </router-link>
          <router-link to="/body-fat" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Körperfettanteil berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Der Körperfettanteil zeigt dir, wie viel deines Gewichts tatsächlich Fett ist — die aussagekräftigste Einzelkennzahl.
            </p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Body Fat Calculator &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Idealgewicht ist ein nützlicher Orientierungswert — aber kein Dogma. Formeln wie Broca, Creff und Hamwi geben dir einen Rahmen, doch das wirklich „ideale" Gewicht hängt von deiner Körperzusammensetzung, deinem Trainingszustand und deiner Gesundheit ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Nutze unseren <router-link to="/ideal-weight" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Idealgewicht-Rechner</router-link> als Startpunkt und ergänze das Ergebnis mit dem <router-link to="/bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> und deinem <router-link to="/body-fat" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> für ein vollständiges Bild.
        </p>
      </div>

    </div>
  </article>
</template>
