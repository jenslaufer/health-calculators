<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Alkohol in der Stillzeit: Wann ist die Muttermilch wieder alkoholfrei? | Health Calculators',
  description: 'Alkohol & Stillen: Wie schnell baut der Körper Alkohol ab, was sagt die BZgA, hilft Abpumpen? Mit Rechner, Faustregeln und Empfehlungen für stillende Mütter.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Alkohol in der Stillzeit: Wann ist die Muttermilch wieder alkoholfrei?',
    description: 'Alkohol & Stillen: Abbauzeit, BZgA-Empfehlung, Faustregeln und ein kostenloser Rechner für stillende Mütter.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/alkohol-stillen-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Alkohol in der Stillzeit: Wann ist die Muttermilch wieder alkoholfrei?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">11. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Glas Sekt zum Anstoßen, ein Bier nach einer langen Stillwoche — viele frischgebackene Mütter fragen sich: <strong>Wann darf ich nach einem Drink wieder stillen?</strong> Die Antwort ist beruhigend einfach, wenn man die <strong>Widmark-Formel</strong> kennt: Alkohol gelangt im gleichen Verhältnis ins Blut und in die Muttermilch und baut sich mit etwa 0,15 ‰ pro Stunde ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt, was wissenschaftlich gesichert ist, was die BZgA empfiehlt — und zeigt, wann deine Muttermilch wieder alkoholfrei ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie kommt Alkohol in die Muttermilch?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Alkohol ist wasserlöslich und passiert die Blut-Milch-Schranke <strong>passiv und ungehindert</strong>. Die Konzentration in der Muttermilch entspricht etwa der im Blut (Verhältnis &asymp; 1:1). Das bedeutet: Wer 0,5 &permil; im Blut hat, hat auch rund 0,5 &permil; in der Muttermilch.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der <strong>Spitzenwert</strong> wird etwa 30–60 Minuten nach dem Trinken erreicht — auf nüchternen Magen schneller, nach einer Mahlzeit etwas später. Mit dem allmählichen Abbau in der Leber sinkt auch die Milchkonzentration.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Widmark-Formel für stillende Mütter</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Da die Konzentration in der Milch ungefähr der Blutalkoholkonzentration entspricht, gilt dieselbe Formel:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Alkohol (g)</strong> = Volumen (ml) &times; (Vol.-% / 100) &times; 0,8</p>
          <p class="mb-2"><strong>Spitzenwert (&permil;)</strong> = Alkohol (g) / (Körpergewicht &times; 0,55)</p>
          <p><strong>Aktueller Wert</strong> = Spitzenwert &minus; (0,15 &times; Stunden)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Reduktionsfaktor 0,55 berücksichtigt den Wasseranteil im weiblichen Körper. Der Abbau erfolgt linear mit etwa 0,15 &permil; pro Stunde — unabhängig von Kaffee, Sport oder Wasser.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel: 1 Glas Wein</h2>
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
                <td class="px-6 py-3 text-stone-600">150 ml Wein, 12 % Alkohol</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Alkohol</td>
                <td class="px-6 py-3 text-stone-600">150 &times; 0,12 &times; 0,8 = 14,4 g</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Spitzenwert (60 kg)</td>
                <td class="px-6 py-3 text-stone-600">14,4 / (60 &times; 0,55) = 0,44 &permil;</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Abbauzeit</td>
                <td class="px-6 py-3 text-stone-600">0,44 / 0,15 = ca. 2 Std. 55 Min.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Nach knapp 3 Stunden ist die Muttermilch wieder alkoholfrei.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Faustregel: pro Standardgetränk</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Getränk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Abbauzeit (60 kg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 Bier (0,33 l, 5 %)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 Std.</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 Glas Wein (0,15 l, 12 %)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 Std. 15 Min.</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 Schnaps (4 cl, 40 %)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~2 Std.</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1 Glas Sekt (0,1 l, 11 %)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">~1 Std. 25 Min.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was sagen Bundeszentrale und WHO?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong> und die <strong>WHO</strong> empfehlen während der Stillzeit grundsätzlich auf Alkohol zu verzichten. Begründet wird das mit Studien, die Auswirkungen auf den Schlaf und die Motorik des Babys zeigen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer gelegentlich ein Glas trinkt, sollte die Abbauzeit abwarten und vorher abgepumpte Milch bereithalten. Wichtig: <strong>Abpumpen beschleunigt den Alkoholabbau NICHT</strong>. Der Alkohol bleibt im Blut, bis die Leber ihn abgebaut hat.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die häufigsten Mythen</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mythos: Abpumpen entfernt Alkohol</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Falsch. Solange Alkohol im Blut zirkuliert, enthält jede neu gebildete Milch wieder Alkohol. Nur Zeit hilft.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mythos: Bier fördert die Milchbildung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Alkohol hemmt sogar das Hormon Oxytocin und kann die Milchmenge kurzfristig reduzieren. Hopfen-Tee oder alkoholfreies Bier sind die bessere Wahl.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mythos: Kaffee oder Sport bauen Alkohol ab</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Falsch. Die Leber baut Alkohol mit ca. 0,15 &permil; pro Stunde ab — unabhängig von Aktivität oder Koffein.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt berechnen, wann die Milch wieder alkoholfrei ist</h3>
        <p class="text-stone-300 text-sm mb-5">Individuell berechnet aus Gewicht, Getränken und Zeit — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('breastMilkAlcohol')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Für den generellen Blutalkoholspiegel nutze unseren <router-link :to="localeBlogPath('promille-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Promillerechner</router-link>. Wer wissen will, wie viele Standardeinheiten in einem Drink stecken, findet das im <router-link :to="localeBlogPath('alkohol-einheiten-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkohol-Einheiten-Rechner</router-link>. Und falls du noch in der Schwangerschaft bist: der <router-link :to="localeBlogPath('gewichtszunahme-schwangerschaft-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schwangerschafts-Gewichtsrechner</router-link> begleitet dich bis zur Geburt.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Alkohol in der Stillzeit ist nicht trivial — aber berechenbar. Mit der Widmark-Formel weißt du, wann der Alkohol abgebaut ist und das Stillen wieder unbedenklich. Der einfachste Weg ist unser <router-link :to="localePath('breastMilkAlcohol')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkohol & Stillen Rechner</router-link>: Gewicht, Getränk, Uhrzeit eingeben — fertig.
        </p>
      </div>

      <RelatedArticles slug="alkohol-stillen-berechnen" />
    </div>
  </article>
</template>
