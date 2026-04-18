<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Alkoholeinheiten berechnen — Wöchentlicher Konsum & Gesundheitsrisiko | Health Calculators',
  description: 'Was ist eine Alkoholeinheit? UK-Einheiten, Gramm reiner Alkohol, WHO-Risikoklassen und Vergleich mit DHS-, NHS- und NIAAA-Leitlinien erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Alkoholeinheiten berechnen — Wöchentlicher Konsum & Gesundheitsrisiko',
    description: 'Was ist eine Alkoholeinheit? UK-Einheiten, Gramm reiner Alkohol, WHO-Risikoklassen und Vergleich mit DHS-, NHS- und NIAAA-Leitlinien erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/alkohol-einheiten-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Alkoholeinheiten berechnen — Wöchentlicher Konsum & Gesundheitsrisiko</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">18. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie viel Alkohol ist zu viel? Die Antwort hängt davon ab, in welchen Einheiten du denkst. Eine <strong>UK-Alkoholeinheit</strong> entspricht 10 ml (8 g) reinen Alkohols — eine Messgröße, die es ermöglicht, Bier, Wein und Spirituosen auf einen gemeinsamen Nenner zu bringen und mit internationalen Leitlinien zu vergleichen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel lernst du, wie Alkoholeinheiten berechnet werden, was die Leitlinien von DHS, NHS und NIAAA bedeuten, und warum die gesündeste Option immer noch <strong>kein Alkohol</strong> ist.
        </p>
      </div>

      <!-- Was ist eine Alkoholeinheit? -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist eine Alkoholeinheit?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine <strong>UK-Alkoholeinheit</strong> ist definiert als 10 ml (8 g) reiner Alkohol (Ethanol). Diese Einheit wurde in Großbritannien eingeführt, um den Konsum verschiedener Getränke vergleichbar zu machen. Die Formel ist einfach:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-base font-semibold text-stone-900">Einheiten = Volumen (ml) × Alkoholgehalt (%) ÷ 1 000</p>
          <p class="text-sm text-stone-500 mt-2">Gramm reiner Alkohol = Einheiten × 8</p>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Getränk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Volumen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alkohol</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einheiten</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gramm</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Bier (Pils)</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">500 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">5 %</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">2,5</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">20 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Wein (Rotwein)</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">175 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">12 %</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">2,1</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">16,8 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Whisky (Einfach)</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">40 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">40 %</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">1,6</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">12,8 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Cocktail</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">200 ml</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">15 %</td>
                <td class="px-6 py-3 text-stone-900 font-semibold tabular-nums">3,0</td>
                <td class="px-6 py-3 text-stone-900 tabular-nums">24 g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Leitlinien -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Nationale Leitlinien im Vergleich</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Verschiedene Länder und Organisationen haben unterschiedliche Richtwerte für risikoarmen Alkoholkonsum definiert. Wichtig: Alle Leitlinien betonen, dass <em>weniger immer besser ist</em>.
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">UK NHS — 14 Einheiten / Woche</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das britische Gesundheitssystem empfiehlt, nicht mehr als 14 UK-Einheiten (112 g) pro Woche zu konsumieren — für Männer und Frauen gleichermaßen. Das entspricht etwa 6 mittelgroßen Gläsern Wein oder 6 Pint Bier. Außerdem wird empfohlen, den Konsum auf mehrere Tage zu verteilen und mindestens 2 alkoholfreie Tage pro Woche einzulegen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">DE DHS — 84 g / Woche Frauen · 168 g / Woche Männer</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Deutsche Hauptstelle für Suchtfragen (DHS) unterscheidet nach Geschlecht: Frauen gelten bei max. 12 g/Tag (84 g/Woche, ≈ 10,5 UK-Einheiten) als risikoarm, Männer bei max. 24 g/Tag (168 g/Woche, ≈ 21 UK-Einheiten). Der niedrigere Grenzwert für Frauen erklärt sich durch physiologische Unterschiede beim Alkoholabbau.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">US NIAAA — 7 Drinks / Woche Frauen · 14 Drinks / Woche Männer</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Das National Institute on Alcohol Abuse and Alcoholism (NIAAA) definiert einen US-Standard-Drink als 14 g Alkohol (≈ 1,75 UK-Einheiten). Risikoarmer Konsum liegt bei max. 7 Drinks/Woche für Frauen und 14 Drinks/Woche für Männer — entsprechend etwa 98 g bzw. 196 g pro Woche.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">WHO 2023 — Kein sicheres Niveau</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Weltgesundheitsorganisation betonte 2023, dass es <strong>kein sicheres Konsumniveau</strong> gibt. Alkohol ist ein Klasse-1-Karzinogen (IARC) und verursacht mindestens 7 Krebsarten. Selbst geringer Konsum erhöht das Krebsrisiko leicht. Die bestehenden Leitlinien beschreiben lediglich ein <em>geringes</em>, nicht ein <em>null</em> Risiko.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Deinen Alkoholkonsum berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">UK-Einheiten, Gramm, Risikostufe und Vergleich mit allen Leitlinien — in einem Rechner.</p>
        <router-link
          :to="localePath('alcoholUnits')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <!-- Gesundheitsrisiken -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gesundheitsrisiken durch Alkohol</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Regelmäßiger Alkoholkonsum wirkt sich auf nahezu alle Organsysteme aus. Das Risiko steigt nicht erst ab einem bestimmten Schwellenwert — es beginnt mit dem ersten Glas.
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Leber</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Die Leber ist das Hauptorgan für den Alkoholabbau. Bei chronisch erhöhtem Konsum (ab ~30 g/Tag bei Frauen, ~60 g/Tag bei Männern) entwickelt sich zunächst eine Fettleber, dann Alkoholhepatitis und schließlich Zirrhose. Eine Leberzirrhose ist irreversibel.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Krebs</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alkohol erhöht das Risiko für mindestens 7 Krebsarten: Mund-, Rachen-, Kehlkopf-, Speiseröhren-, Leber-, Darm- und Brustkrebs. Der Mechanismus: Acetaldehyd (ein Abbauprodukt) schädigt die DNA direkt. Selbst 1–2 Drinks pro Tag erhöhen das Brustkrebsrisiko um etwa 7–10 %.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Herz-Kreislauf</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Auch wenn frühere Studien einen "Herzschutz" durch moderaten Alkohol behaupteten, zeigen neuere Analysen: Der vermeintliche Vorteil war methodischer Fehler. Bei erhöhtem Konsum steigen Blutdruck, Schlaganfall- und Vorhofflimmern-Risiko deutlich an.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Schlaf & psychische Gesundheit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alkohol unterdrückt den REM-Schlaf und führt zu fragmentiertem Schlaf in der zweiten Nachthälfte. Langfristig erhöht regelmäßiger Konsum das Risiko für Depression und Angststörungen — teils als Ursache, teils als Selbstmedikation in einem Teufelskreis.
            </p>
          </div>
        </div>
      </div>

      <!-- Kalorien -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Alkohol und Kalorien</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alkohol liefert 7 kcal pro Gramm — nur Fett (9 kcal/g) enthält mehr Energie. Diese Kalorien sind <em>leere Kalorien</em>: kein Protein, keine Mikronährstoffe, kein Sättigungsgefühl. Ein typischer Abend mit 4 Bier (je 500 ml, 5 %) liefert:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">4 × 500 ml Bier, 5 %</p>
          <ul class="space-y-1 text-sm text-stone-600">
            <li>• 10 UK-Einheiten → 80 g reiner Alkohol</li>
            <li>• 80 g × 7 kcal = <strong>560 kcal</strong> aus Alkohol</li>
            <li>• Plus Kohlenhydrate im Bier: weitere ~200–300 kcal</li>
            <li>• Gesamt: ~750–850 kcal — entspricht einer vollständigen Hauptmahlzeit</li>
          </ul>
        </div>
      </div>

      <!-- Verwandte Rechner -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <div class="space-y-4">
          <router-link :to="localePath('bac')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Promillerechner</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Berechne deinen Blutalkoholspiegel nach dem Trinken — wie schnell baut dein Körper Alkohol ab?</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Zum Promillerechner &rarr;</span>
          </router-link>
          <router-link :to="localePath('smokingCost')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Rauchen-Kosten-Rechner</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Wie viel kostet Rauchen wirklich? Tages-, Jahres- und Lebenskosten im Vergleich — ähnlich wie bei Alkohol unterschätzt.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Zum Rauchen-Kosten-Rechner &rarr;</span>
          </router-link>
          <router-link :to="localePath('lifeExpectancy')" class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebenserwartung-Rechner</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Alkohol ist einer der stärksten Einflussfaktoren auf die Lebenserwartung — berechne, wie sich dein Lebensstil auswirkt.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Zum Lebenserwartung-Rechner &rarr;</span>
          </router-link>
        </div>
      </div>

      <!-- Fazit -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alkoholeinheiten ermöglichen einen präzisen Vergleich des Konsums mit nationalen und internationalen Leitlinien. Die Kernbotschaft ist klar: Weniger ist immer besser. Kein Konsum ist am gesündesten — das ist der wissenschaftliche Konsens von WHO, IARC und allen führenden Gesundheitsbehörden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Berechne deinen wöchentlichen Konsum mit unserem <router-link :to="localePath('alcoholUnits')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkoholeinheiten-Rechner</router-link> — mit Vergleich zu DHS-, NHS- und NIAAA-Leitlinien sowie Kalorien- und Kostenschätzung.
        </p>
      </div>

      <RelatedArticles slug="alkohol-einheiten-berechnen" />
    </div>
  </article>
</template>
