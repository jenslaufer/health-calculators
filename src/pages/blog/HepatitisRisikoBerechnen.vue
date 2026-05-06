<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Hepatitis berechnen: Risiko für Hep B und C aus Expositionen | Health Calculators',
  description: 'Hepatitis-Risiko aus 13 CDC-/USPSTF-Faktoren einschätzen. Übertragungswege, Screening-Empfehlung, Impfung, Therapie und Notfall-Hinweise — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hepatitis berechnen: Risiko für Hep B und C aus Expositionen',
    description: 'Hepatitis-Risiko aus 13 CDC-/USPSTF-Faktoren einschätzen. Übertragungswege, Screening-Empfehlung, Impfung, Therapie und Notfall-Hinweise — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/hepatitis-risiko-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Hepatitis berechnen: Risiko für Hep B und C aus Expositionen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">6. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Etwa <strong>290 Millionen Menschen weltweit</strong> leben mit chronischer Hepatitis B, weitere 50 Millionen mit Hepatitis C — die meisten ohne Diagnose. Beide Viren werden über Blut übertragen, beide können jahrzehntelang stumm verlaufen und beide führen unbehandelt zu Leberzirrhose und Leberkrebs.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein persönliches Hepatitis-Risiko über 13 Expositionsfaktoren einschätzt — gewichtet nach den USPSTF- und CDC-Empfehlungen. Die gute Nachricht: Hep C ist heute heilbar, Hep B impfbar.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Hepatitis?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hepatitis bedeutet Leberentzündung. Die fünf relevanten Virusvarianten heißen <strong>Hep A, B, C, D und E</strong>. Hep A und E werden fäkal-oral übertragen und heilen meist aus. Hep B, C und D werden parenteral oder sexuell übertragen und können chronisch werden — mit Risiko für Zirrhose und hepatozelluläres Karzinom.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Über 80 Prozent aller chronischen Hep-C-Infektionen verlaufen jahrzehntelang ohne Symptome. Sie werden oft nur entdeckt, weil bei einer Routineuntersuchung erhöhte Leberwerte (ALT) auffallen oder ein Risikofaktor zur Testung führt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 13 Risikofaktoren im Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner gewichtet die Faktoren nach USPSTF-Priorität — Hochrisiko zählt 3–4 Punkte, mittleres Risiko 2 Punkte, niedriges Risiko 1 Punkt:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Faktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Bedeutung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">IV-Drogenkonsum (jemals)</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">Hauptrisikofaktor für Hep C</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Geboren in Hochprävalenz-Region</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Asien, Afrika, Osteuropa</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">HIV-Koinfektion</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Screening obligat</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hämodialyse</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Wiederholter Blutkontakt</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Transfusion vor 1992</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Vor Routine-HCV-Screening</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Mutter HBV-/HCV-positiv</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Vertikale Übertragung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Inhaftierung (jemals)</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Erhöhte Prävalenz im Vollzug</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Nadelstich-Verletzung</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Beruflich, akut</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Tattoo / Piercing unreguliert</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Ausland, Vollzug, ohne Standards</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Mehrere Sexualpartner</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Hep B sexuell übertragbar</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Geteilte Rasierer / Zahnbürsten</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Haushaltskontakt</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Reise in Endemiegebiet</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">≥ 4 Wochen Aufenthalt</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Chronische Lebererkrankung</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Erhöhte Leberwerte unklarer Ursache</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risiko-Bänder und Empfehlungen</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 0 — kein Risiko:</strong> USPSTF empfiehlt dennoch eine einmalige Hep-C-Screening-Untersuchung im Erwachsenenalter.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 1–3 — niedrig:</strong> Einmalige Antikörpertestung beim Hausarzt. Hep-B-Impfstatus prüfen lassen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 4–7 — moderat:</strong> Vollständiger Screening-Panel (HBsAg, Anti-HBc, Anti-HBs, Anti-HCV) erforderlich. Ungeimpfte sollten Hep-B-Impfung nachholen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score ≥ 8 — hoch:</strong> Zeitnahe Testung. Bei IDU oder HIV-Koinfektion zusätzlich HCV-RNA-PCR. Bei akuter Exposition (Nadelstich) sofortige PEP-Indikation prüfen.</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Hepatitis-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">13 Expositionsfaktoren und Impfstatus — sofortiges Ergebnis mit Risikostufe und Screening-Empfehlung. Anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('hepatitisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Übertragungswege im Detail</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Parenteral:</strong> IV-Drogenkonsum, Nadelstich, kontaminierte Tattoo-/Piercing-Nadeln, Bluttransfusionen vor 1992, Hämodialyse.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sexuell:</strong> Hep B sehr effizient (50–100× ansteckender als HIV), Hep C selten — außer bei MSM mit HIV-Koinfektion oder traumatischen Praktiken.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vertikal:</strong> Mutter zu Kind unter Geburt — bei Hep B in 90 Prozent der Fälle ohne Postexpositionsprophylaxe, bei Hep C in 5–10 Prozent.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Haushaltskontakt:</strong> Geteilte Rasierer, Zahnbürsten, Nagelscheren — geringes, aber nachweisbares Risiko.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Therapie und Heilung</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Hep C:</strong> Direkt antivirale Medikamente (DAA) wie Sofosbuvir/Velpatasvir heilen 8–12 Wochen oral, fast 100 Prozent unabhängig vom Genotyp. Kosten in Deutschland: GKV-Erstattung bei nachgewiesener Infektion.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Chronische Hep B:</strong> Tenofovir oder Entecavir oral, oft lebenslang. Heilung selten, aber sichere Suppression unter die Nachweisgrenze.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Akute Hep B:</strong> Heilt bei Erwachsenen meist spontan aus (95 %). Bei schwerem Verlauf antivirale Therapie.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Postexpositionsprophylaxe:</strong> Bei Nadelstich von HBV-positiver Quelle: Hep-B-Impfung + Immunglobulin innerhalb 24 h. Für HCV existiert keine PEP — nur Verlaufskontrollen.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Lebergesundheit hängt eng mit weiteren Stoffwechsel- und Risikofaktoren zusammen. Wer regelmäßig Alkohol trinkt, sollte mit dem
          <router-link :to="localeBlogPath('alkohol-einheiten-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkohol-Einheiten-Rechner</router-link>
          die wöchentliche Belastung gegen WHO-Richtwerte abgleichen — bei chronischer Hepatitis ist Abstinenz Pflicht. Erhöhte Leberwerte gehen oft mit eingeschränkter
          <router-link :to="localeBlogPath('gfr-rechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Nierenfunktion (GFR)</router-link>
          einher; die hepatorenale Achse ist klinisch relevant. Chronische Hepatitis verursacht häufig Anämie der chronischen Erkrankung — der
          <router-link :to="localeBlogPath('anaemie-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anämie-Risiko-Rechner</router-link>
          hilft dabei, eine sekundäre Blutarmut zu erkennen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Hepatitis B und C sind häufig, oft asymptomatisch und entscheidend behandelbar — wenn sie erkannt werden. Mit unserem
          <router-link :to="localePath('hepatitisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Hepatitis-Risiko-Rechner</router-link>
          schätzt du dein persönliches Risiko in Sekunden ein. Bei Score ≥ 4 oder unklarer Vorgeschichte zur Testung ins Hausarztpraxis — ein einziger Bluttest reicht für klare Antworten.
        </p>
      </div>

      <RelatedArticles slug="hepatitis-risiko-berechnen" />
    </div>
  </article>
</template>
