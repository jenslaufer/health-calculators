<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Promille berechnen: Wie schnell baut der Körper Alkohol ab? | Health Calculators',
  description: 'Promille berechnen mit der Widmark-Formel. Alkoholabbau, Einflussfaktoren, gesetzliche Grenzen und wann du wieder nüchtern bist.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Promille berechnen: Wie schnell baut der Körper Alkohol ab?',
    description: 'Promille berechnen mit der Widmark-Formel. Alkoholabbau, Einflussfaktoren, gesetzliche Grenzen und wann du wieder nüchtern bist.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/promille-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Promille berechnen: Wie schnell baut der Körper Alkohol ab?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">3. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wie viel <strong>Promille</strong> hat man nach einem Bier? Wann darf man wieder Auto fahren? Die <strong>Widmark-Formel</strong> liefert eine Schätzung des Blutalkoholspiegels auf Basis von Getränkemenge, Alkoholgehalt, Körpergewicht und Geschlecht.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt die Berechnung, den Abbau im Körper und die wichtigsten Grenzwerte in Deutschland.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Widmark-Formel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die 1932 von Erik Widmark entwickelte Formel berechnet die <strong>Blutalkoholkonzentration (BAK)</strong> in Promille:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Alkohol (g)</strong> = Volumen (ml) &times; (Vol.-% / 100) &times; 0,8</p>
          <p class="mb-2"><strong>BAK (&permil;)</strong> = Alkohol (g) / (Körpergewicht (kg) &times; r)</p>
          <p>r = 0,68 (Männer) | r = 0,55 (Frauen)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Reduktionsfaktor <strong>r</strong> berücksichtigt den unterschiedlichen Wasseranteil im Körper. Frauen haben im Durchschnitt einen geringeren Wasseranteil, weshalb Alkohol stärker konzentriert wird.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schritt</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Berechnung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Getränk</td>
                <td class="px-6 py-3 text-stone-600">500 ml Bier, 5 % Alkohol</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Alkohol (g)</td>
                <td class="px-6 py-3 text-stone-600">500 &times; 0,05 &times; 0,8 = 20 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">BAK (Mann, 80 kg)</td>
                <td class="px-6 py-3 text-stone-600">20 / (80 &times; 0,68) = 0,37 &permil;</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">BAK (Frau, 60 kg)</td>
                <td class="px-6 py-3 text-stone-600">20 / (60 &times; 0,55) = 0,61 &permil;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Alkoholabbau</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Körper baut Alkohol mit einer nahezu konstanten Rate ab: etwa <strong>0,15 Promille pro Stunde</strong>. Dieser Wert variiert leicht von Person zu Person, ist aber weitgehend unabhängig von Körpergewicht oder Geschlecht.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Aktueller BAK</strong> = Ausgangs-BAK &minus; (0,15 &times; Stunden)</p>
          <p><strong>Zeit bis nüchtern</strong> = Ausgangs-BAK / 0,15</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Kaffee, kalte Duschen oder Bewegung beschleunigen den Abbau <strong>nicht</strong>. Nur die Zeit hilft.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Gesetzliche Grenzwerte in Deutschland</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Grenzwert</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Regelung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">0,0 &permil;</td>
                <td class="px-6 py-3 text-stone-600">Fahranfänger (Probezeit) und unter 21 Jahre</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">0,5 &permil;</td>
                <td class="px-6 py-3 text-stone-600">Allgemeine Grenze (Ordnungswidrigkeit)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">0,3 &permil;</td>
                <td class="px-6 py-3 text-stone-600">Bei Auffälligkeiten oder Unfall (relative Fahruntüchtigkeit)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1,1 &permil;</td>
                <td class="px-6 py-3 text-stone-600">Absolute Fahruntüchtigkeit (Straftat)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Einflussfaktoren</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Körpergewicht</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Mehr Körpermasse verteilt den Alkohol auf ein größeres Volumen — der Promillewert sinkt.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Geschlecht</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Frauen haben einen geringeren Körperwasseranteil (55 % vs. 68 %), daher bei gleicher Menge einen höheren Promillewert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mageninhalt</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Essen verlangsamt die Alkoholaufnahme, senkt aber nicht den Gesamtpromillewert. Der Spitzenwert wird lediglich verzögert.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Trinkgeschwindigkeit</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Schnelles Trinken lässt den Promillewert schneller steigen, da der Abbau nicht mithalten kann.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Promillewert berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Sofortergebnis mit Widmark-Formel, Restabbauzeit und Grenzwert-Vergleich — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('bac')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wasserbedarf</router-link> steigt durch Alkoholkonsum. Und dein täglicher <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch</router-link> wird durch Alkohol beeinflusst — ein Bier hat rund 200 kcal.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Widmark-Formel liefert eine gute Schätzung des Blutalkoholspiegels. Beachte aber: individuelle Faktoren wie Medikamente, Lebergesundheit und genetische Unterschiede können den Wert beeinflussen. Im Zweifel gilt: nicht fahren. Nutze unseren <router-link :to="localePath('bac')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Promillerechner</router-link> für eine persönliche Schätzung.
        </p>
      </div>

      <RelatedArticles slug="promille-berechnen" />
    </div>
  </article>
</template>
