<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Eiweißbedarf berechnen: Wie viel Protein brauche ich wirklich? | Health Calculators',
  description: 'Eiweißbedarf berechnen nach Aktivitätslevel, Ziel und Alter. Empfehlungen für Sitzende, Sportler, Abnehmen und Muskelaufbau — mit Mahlzeiten-Aufteilung.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eiweißbedarf berechnen: Wie viel Protein brauche ich wirklich?',
    description: 'Eiweißbedarf berechnen nach Aktivitätslevel, Ziel und Alter. Empfehlungen für Sitzende, Sportler, Abnehmen und Muskelaufbau — mit Mahlzeiten-Aufteilung.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/eiweissbedarf-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Eiweißbedarf berechnen: Wie viel Protein brauche ich wirklich?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">3. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Eiweiß</strong> (Protein) ist der Baustoff deines Körpers. Muskeln, Enzyme, Hormone und Antikörper bestehen daraus. Doch wie viel brauchst du wirklich pro Tag? Die Antwort hängt von deinem Aktivitätslevel, deinem Ziel und deinem Alter ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel zeigen wir dir die aktuellen wissenschaftlichen Empfehlungen — und wie du deinen individuellen Eiweißbedarf berechnest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum Eiweiß so wichtig ist</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eiweiß liefert essentielle Aminosäuren, die dein Körper nicht selbst herstellen kann. Es ist unverzichtbar für Muskelaufbau, Regeneration und ein starkes Immunsystem. Zudem sättigt Eiweiß stärker als Kohlenhydrate oder Fett.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein Eiweißmangel führt zu Muskelverlust, geschwächter Immunabwehr und schlechterer Wundheilung. Besonders bei Sportlern, Älteren und in einer Diät ist eine ausreichende Zufuhr entscheidend.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Eiweißbedarf nach Aktivitätslevel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die DGE empfiehlt 0,8 g/kg Körpergewicht als Minimum. Für körperlich aktive Menschen liegt der optimale Bereich höher. Die folgende Tabelle zeigt die Empfehlungen nach Aktivitätslevel:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Aktivitätslevel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Sitzend (Büroarbeit)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">0,8 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Moderat aktiv</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,0 – 1,2 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Aktiv (regelmäßig Sport)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,4 – 1,6 g/kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Athlet / Leistungssport</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,6 – 2,2 g/kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Anpassungen nach Ziel und Alter</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Abnehmen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Im Kaloriendefizit schützt eine erhöhte Eiweißzufuhr (+0,2 g/kg) die Muskelmasse. Gleichzeitig sättigt Eiweiß stärker, was das Durchhalten erleichtert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Muskelaufbau</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Für Muskelaufbau empfiehlt die Forschung eine Zufuhr am oberen Ende des Bereichs. Die Verteilung auf 3–5 Mahlzeiten mit je 20–40 g optimiert die Muskelproteinsynthese.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Alter über 65</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ab 65 sinkt die anabole Empfindlichkeit des Muskels. Die Empfehlung steigt um +0,2 g/kg, um dem altersbedingten Muskelabbau (Sarkopenie) entgegenzuwirken.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Eiweißbedarf berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Individueller Proteinbedarf — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('proteinNeed')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Mahlzeiten richtig aufteilen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Muskelproteinsynthese wird bei 20–40 g Eiweiß pro Mahlzeit optimal stimuliert. Verteile deinen Tagesbedarf gleichmäßig auf 3–5 Mahlzeiten. Bei 120 g pro Tag und 4 Mahlzeiten ergibt das 30 g pro Mahlzeit.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser <router-link :to="localePath('proteinNeed')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eiweißbedarfs-Rechner</router-link> zeigt dir automatisch die Aufteilung auf deine gewünschte Mahlzeitenanzahl.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gute Eiweißquellen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hähnchenbrust (31 g/100 g), Thunfisch (26 g), Lachs (20 g) und Eier (13 g) sind Top-Quellen. Pflanzlich sind Linsen (9 g), Tofu (8 g) und Magerquark (12 g) gute Optionen. Kombiniere verschiedene Quellen für ein vollständiges Aminosäureprofil.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Berechne auch deine <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffe</router-link> und deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> für das Gesamtbild.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Unterschied zum Protein-Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser <router-link :to="localePath('protein')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Protein-Rechner</router-link> berechnet die optimale Verteilung deiner Proteinzufuhr auf Mahlzeiten und berücksichtigt Ernährungsformen (vegan, vegetarisch). Der Eiweißbedarfs-Rechner hingegen fokussiert sich auf die <strong>Bedarfsermittlung</strong> nach Aktivitätslevel und Lebenssituation.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein Eiweißbedarf hängt von Aktivität, Ziel und Alter ab. Nutze unseren <router-link :to="localePath('proteinNeed')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Eiweißbedarfs-Rechner</router-link> für eine individuelle Empfehlung. Ergänze mit dem <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Rechner</router-link> und dem <router-link :to="localePath('macro')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makro-Rechner</router-link>.
        </p>
      </div>

      <RelatedArticles slug="eiweissbedarf-berechnen" />
    </div>
  </article>
</template>
