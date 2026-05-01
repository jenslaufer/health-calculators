<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Erektile Dysfunktion testen: IIEF-5-Fragebogen, Ursachen und was hilft | Health Calculators',
  description: 'Erektile Dysfunktion mit dem IIEF-5 (SHIM) einschätzen. Ursachen, Schweregrade nach Cappelleri & Rosen, evidenzbasierte Maßnahmen — anonym und kostenlos.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Erektile Dysfunktion testen: IIEF-5-Fragebogen, Ursachen und was hilft',
    description: 'Erektile Dysfunktion mit dem IIEF-5 (SHIM) einschätzen. Ursachen, Schweregrade nach Cappelleri & Rosen, evidenzbasierte Maßnahmen — anonym und kostenlos.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/erektile-dysfunktion-test',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Erektile Dysfunktion testen: IIEF-5-Fragebogen, Ursachen und was hilft</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">1. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Erektile Dysfunktion (ED) ist häufiger als die meisten Männer denken: weltweit sind etwa <strong>52 % aller Männer zwischen 40 und 70</strong> davon betroffen — meist unausgesprochen. Mit dem <strong>IIEF-5</strong> kannst du in 2 Minuten einschätzen, ob deine Erektionsprobleme im klinisch relevanten Bereich liegen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel erklärt den Test, die Schweregrade nach <strong>Cappelleri & Rosen (2005)</strong>, die häufigsten Ursachen und was wirklich hilft.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist der IIEF-5?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>International Index of Erectile Function (IIEF-5)</strong> — auch <strong>SHIM</strong> (Sexual Health Inventory for Men) genannt — ist die wissenschaftlich validierte 5-Fragen-Kurzform des längeren IIEF-15. Entwickelt 1999 von Raymond Rosen et al., ist er heute der weltweite Standard im Screening auf erektile Dysfunktion.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Jede der 5 Fragen wird auf einer Skala von 1 bis 5 beantwortet. Der Gesamtscore reicht von 5 (schwere ED) bis 25 (keine ED).
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-sm text-stone-600 leading-relaxed mb-2"><strong>Sensitivität:</strong> 98 % — der Test entdeckt fast alle ED-Fälle.</p>
          <p class="text-sm text-stone-600 leading-relaxed"><strong>Spezifität:</strong> 88 % — wenige Fehlalarme bei einem Cutoff von ≤ 21.</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schweregrade nach Cappelleri & Rosen</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schweregrad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">22 – 25</td><td class="px-6 py-3 text-stone-600">Keine ED</td><td class="px-6 py-3 text-stone-600">Beobachten</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">17 – 21</td><td class="px-6 py-3 text-stone-600">Leicht</td><td class="px-6 py-3 text-stone-600">Lebensstil-Anpassung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">12 – 16</td><td class="px-6 py-3 text-stone-600">Leicht bis mittelschwer</td><td class="px-6 py-3 text-stone-600">Hausarzt</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">8 – 11</td><td class="px-6 py-3 text-stone-600">Mittelschwer</td><td class="px-6 py-3 text-stone-600">Urologe + Diagnostik</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7</td><td class="px-6 py-3 text-stone-600">Schwer</td><td class="px-6 py-3 text-stone-600">Urologe zeitnah</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Cutoff von ≤ 21 ist klinisch etabliert — darunter wird eine ärztliche Abklärung empfohlen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die häufigsten Ursachen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          ED ist selten rein psychogen. In über 80 % der Fälle liegt eine organische Mitursache vor:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Vaskulär (häufigste Ursache)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Atherosklerose, Bluthochdruck, hohe Cholesterinwerte und Rauchen schädigen die kleinen Penisarterien — oft Jahre bevor andere Symptome auftreten. ED gilt als <strong>Frühmarker für Herz-Kreislauf-Erkrankungen</strong> mit 3–5 Jahren Vorlauf.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Endokrin / Hormonell</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              <strong>Testosteronmangel</strong> (Hypogonadismus) und Diabetes mellitus sind häufig. 50 % der Diabetiker entwickeln innerhalb von 10 Jahren eine ED — vor allem durch Schädigung der Nervenfasern und Gefäße.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Medikamentös</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Betablocker, Thiazide, SSRI-Antidepressiva, Finasterid, Opioide und einige Antipsychotika können Erektionsstörungen verursachen — bei Verdacht mit dem Arzt sprechen, nie eigenmächtig absetzen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Psychogen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Versagensangst, Stress, Beziehungskonflikte, Depression — typisches Zeichen: Morgenerektionen sind erhalten, aber bei Geschlechtsverkehr versagt die Erektion. Häufiger bei jüngeren Männern.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">ED als Frühwarnzeichen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Studie im <em>Journal of the American Medical Association</em> (Inman et al. 2009) zeigte: Männer unter 50 mit ED haben <strong>50-fach erhöhtes Risiko</strong> für einen Herzinfarkt in den nächsten 5–10 Jahren — verglichen mit Gleichaltrigen ohne ED. Die Penisarterien sind nur 1–2 mm dick und reagieren früher auf Atherosklerose als die 3–4 mm dicken Koronararterien.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Deshalb gehört zur ED-Abklärung immer ein Check der kardiovaskulären Risikofaktoren — Blutdruck, Cholesterin, Blutzucker, Bauchumfang und Rauchstatus.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt IIEF-5-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">5 Fragen, sofortiger Schweregrad nach Cappelleri & Rosen, anonym und ohne Anmeldung — direkt im Browser.</p>
        <router-link
          :to="localePath('erectileDysfunction')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos testen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was wirklich hilft</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Studien zeigen: bei leichter bis mittelschwerer ED ist Lebensstil-Modifikation oft wirksam wie Medikamente:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bewegung:</strong> 150 Minuten moderate Aktivität pro Woche senken das ED-Risiko um 40 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Gewichtsabnahme:</strong> bei BMI &gt; 30 verbessert eine 10-%-Reduktion die Erektionsfähigkeit deutlich</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mediterrane Ernährung:</strong> Olivenöl, Fisch, Nüsse, viel Gemüse — verbessert Endothelfunktion</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Rauchstopp:</strong> Nikotin ist einer der stärksten ED-Risikofaktoren</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Schlaf:</strong> 7–9 Stunden — Schlafapnoe ist eine unterdiagnostizierte ED-Ursache</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Beckenbodentraining:</strong> Kegel-Übungen verbesserten in einer Studie 40 % der Männer mit leichter ED</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Testosteronmangel kann Substitution helfen, bei vaskulären Ursachen sind PDE-5-Hemmer (Sildenafil, Tadalafil) erste Wahl — verschreibungspflichtig und nur nach ärztlicher Abklärung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Da ED häufig zusammen mit anderen Risikofaktoren auftritt, lohnt sich ein Blick auf den
          <router-link :to="localeBlogPath('testosteronwert-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Testosteron-Rechner</router-link>
          (Hypogonadismus ausschließen),
          den <router-link :to="localeBlogPath('diabetes-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko-Rechner</router-link>
          (FINDRISC-Score) und das
          <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologische Alter</router-link>
          als Gesamt-Marker für deinen Gesundheitszustand.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der IIEF-5 ist ein zuverlässiges Screening — aber nur der erste Schritt. Bei einem Score unter 22 lohnt sich die ärztliche Abklärung, denn ED ist häufig die Spitze eines Eisbergs aus vaskulären, hormonellen oder metabolischen Risikofaktoren. Nutze unseren
          <router-link :to="localePath('erectileDysfunction')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">IIEF-5-Rechner</router-link>
          für die anonyme Selbsteinschätzung — und sprich bei auffälligen Werten mit deinem Arzt.
        </p>
      </div>

      <RelatedArticles slug="erektile-dysfunktion-test" />
    </div>
  </article>
</template>
