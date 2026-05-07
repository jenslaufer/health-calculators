<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Hepatitis-Risiko berechnen: Hepatitis B und C aus Expositionsfaktoren erkennen | Health Calculators',
  description: 'Hepatitis-B- und -C-Risiko aus 13 evidenzbasierten Expositionsfaktoren einschätzen. Übertragungswege, CDC-Geburtskohorte, Impfschutz, Postexpositionsprophylaxe und Diagnostik — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hepatitis-Risiko berechnen: Hepatitis B und C aus Expositionsfaktoren erkennen',
    description: 'Hepatitis-B- und -C-Risiko aus 13 evidenzbasierten Expositionsfaktoren einschätzen. Übertragungswege, CDC-Geburtskohorte, Impfschutz, Postexpositionsprophylaxe und Diagnostik — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Hepatitis-Risiko berechnen: Hepatitis B und C aus Expositionsfaktoren erkennen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Weltweit leben rund <strong>296 Millionen Menschen mit chronischer Hepatitis B</strong> und <strong>58 Millionen mit Hepatitis C</strong> — die meisten ohne es zu wissen. Beide Erkrankungen verlaufen jahrelang stumm, bevor Leberzirrhose oder Leberkrebs entstehen. Frühe Erkennung ändert den Verlauf radikal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Ratgeber zeigt, wie du dein persönliches Hepatitis-Risiko quantifizierst — anhand von 13 von CDC und WHO empfohlenen Expositionsfaktoren. Wer in eine moderate oder hohe Kategorie fällt, sollte sich gezielt testen lassen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hepatitis B vs. Hepatitis C — was unterscheidet sie?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beide Viren befallen die Leber, unterscheiden sich aber in Übertragungsweg, Verlauf und Therapie:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Merkmal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hepatitis B (HBV)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hepatitis C (HCV)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Übertragung</td><td class="px-6 py-3 text-stone-600">Sex, perinatal, Blut</td><td class="px-6 py-3 text-stone-600">Vorrangig Blut (i.v.)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Chronifizierung</td><td class="px-6 py-3 text-stone-600">5–10 % der Erwachsenen</td><td class="px-6 py-3 text-stone-600">75–85 % aller Infektionen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Impfung</td><td class="px-6 py-3 text-stone-600">Ja (3 Dosen, hoch wirksam)</td><td class="px-6 py-3 text-stone-600">Nein</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Therapie</td><td class="px-6 py-3 text-stone-600">Tenofovir / Entecavir (Suppression)</td><td class="px-6 py-3 text-stone-600">DAA — Heilung in &gt; 95 %</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Inkubationszeit</td><td class="px-6 py-3 text-stone-600">30–180 Tage</td><td class="px-6 py-3 text-stone-600">14–180 Tage</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: <strong>Hepatitis A</strong> wird fäkal-oral via verseuchte Lebensmittel übertragen und ist von dieser Risikoanalyse nicht erfasst. Reisende in Endemiegebiete sollten sich gegen HAV impfen lassen — der Schutz hält 20+ Jahre.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 13 wichtigsten Risikofaktoren</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner gewichtet 13 Faktoren, die in den CDC- und WHO-Empfehlungen explizit als Screening-Indikation genannt werden:
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
              <tr><td class="px-6 py-3 text-stone-900 font-medium">i.v.-Drogenkonsum</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">Wichtigster HCV-Übertragungsweg weltweit</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Transfusion vor 1992</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Vor systematischem Spender-Screening</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hämodialyse</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Erhöhtes nosokomiales Risiko</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Infizierte Mutter</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Perinatale HBV-Übertragung in 70–90 % ohne Impfung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">HBV-Hochprävalenzland</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Ostasien, Subsahara-Afrika, Pazifik</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Geboren 1945–1965</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">CDC-Geburtskohorte mit erhöhter HCV-Prävalenz</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">HIV-Infektion</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Gleiche Übertragungswege, häufige Koinfektion</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Nadelstich beruflich</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">HBV 30 %, HCV 1,8 % Übertragung pro Vorfall</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Erhöhte Leberwerte</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Unklare ALT/AST-Erhöhung muss abgeklärt werden</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hep+-Haushaltskontakt</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Geteilte Rasierer/Zahnbürsten als Übertragungsquelle</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unsteriles Tattoo/Piercing</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Im Ausland oder ohne Einwegnadel</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Mehrere Sexpartner</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">≥ 4 Partner in 6 Monaten oder ungeschützt</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Längere Haft</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Erhöhte Prävalenz im Strafvollzug</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Eine vollständige <strong>HBV-Impfung subtrahiert 2 Punkte</strong> vom Score, aber nie unter null — sie schützt nur vor HBV, nicht vor HCV.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt Hepatitis-Risiko berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">13 Expositionsfaktoren plus Impfstatus — sofortiges Ergebnis mit Schweregrad und ärztlicher Empfehlung. Anonym und ohne Anmeldung.</p>
        <router-link
          :to="localePath('hepatitisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Welche Tests bei Verdacht?</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>HBsAg:</strong> Hepatitis-B-Oberflächenantigen — positiv bei akuter oder chronischer Infektion.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HBc:</strong> Antikörper gegen das Core-Antigen — Marker für durchgemachte oder bestehende HBV-Infektion.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HBs:</strong> Schutzantikörper nach Impfung oder ausgeheilter Infektion (Titer &gt; 10 IU/L gilt als immun).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HCV:</strong> Hepatitis-C-Antikörper-Suchtest. Bei positivem Ergebnis Bestätigung mit HCV-RNA-PCR.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>HCV-RNA-PCR:</strong> Direkter Virusnachweis — unterscheidet aktive Infektion von ausgeheilter.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>ALT/AST:</strong> Transaminasen als Marker für Leberentzündung — meist erhöht, aber nicht spezifisch.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Postexpositionsprophylaxe (PEP)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei akuter Exposition — etwa Nadelstich oder ungeschützter Sexualkontakt mit nachgewiesenem HBV-Träger — sollte <strong>innerhalb von 72 Stunden</strong> eine Postexpositionsprophylaxe erwogen werden:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>HBV-PEP:</strong> Aktive Impfung plus Hepatitis-B-Hyperimmunglobulin (HBIG) bei ungeimpften oder seronegativen Exponierten.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>HCV:</strong> Keine PEP verfügbar — engmaschige Verlaufskontrolle (HCV-RNA nach 4 und 12 Wochen). Bei nachgewiesener Infektion frühe DAA-Therapie möglich.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Therapie und Heilung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Hepatitis C ist heute heilbar.</strong> Direkt wirksame Antivirale (Sofosbuvir/Velpatasvir, Glecaprevir/Pibrentasvir) erreichen in 8–12 Wochen Heilungsraten von &gt; 95 % — fast ohne Nebenwirkungen. Die Therapiekosten werden in Deutschland von den gesetzlichen Krankenkassen übernommen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Hepatitis B</strong> ist meist nicht eliminierbar, aber mit Tenofovir oder Entecavir gut suppressierbar — die Virus-DNA fällt unter die Nachweisgrenze, und das Risiko für Zirrhose und Leberkrebs sinkt deutlich. Eine akute Hepatitis B beim Erwachsenen heilt in 90–95 % der Fälle spontan aus.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hepatitis-Risiko überschneidet sich mit anderen Lebererkrankungen und Übertragungsrisiken. Wer Alkohol als zusätzlichen Leberstressor einschätzen möchte, nutzt den
          <router-link :to="localeBlogPath('promille-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Promille-Rechner</router-link>
          oder die längerfristigen
          <router-link :to="localeBlogPath('alkohol-einheiten-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alkohol-Einheiten</router-link>.
          Bei chronischer Müdigkeit als HCV-Frühzeichen lohnt zudem der Blick auf den
          <router-link :to="localeBlogPath('anaemie-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anämie-Risiko-Rechner</router-link>,
          da chronische Lebererkrankungen häufig mit Blutarmut einhergehen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Hepatitis B und C sind häufig, aber meist symptomarm. Die wichtigste Frage lautet: gibt es Risikofaktoren? Mit unserem
          <router-link :to="localePath('hepatitisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Hepatitis-Risiko-Rechner</router-link>
          erkennst du in Sekunden, ob ein Test sinnvoll ist. Je früher eine chronische Hepatitis entdeckt wird, desto besser sind die Therapie- und Heilungsaussichten — und HCV ist heute in den allermeisten Fällen vollständig heilbar.
        </p>
      </div>

      <RelatedArticles slug="hepatitis-risiko-berechnen" />
    </div>
  </article>
</template>
