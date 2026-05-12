<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist das Menopause Rating Scale (MRS)?',
      acceptedAnswer: { '@type': 'Answer', text: 'Die MRS ist ein international validierter Fragebogen mit 11 Items zur Bewertung von Wechseljahresbeschwerden in 3 Dimensionen (somatisch, psychisch, urogenital). Heinemann et al. 2003 haben die heute genutzten Schweregradgrenzen etabliert.' },
    },
    {
      '@type': 'Question',
      name: 'Was bedeutet mein MRS-Gesamtscore?',
      acceptedAnswer: { '@type': 'Answer', text: '0–4 Punkte: keine bis sehr leichte Beschwerden. 5–8: leicht. 9–16: moderat. 17+: schwer — Therapie meist klar indiziert.' },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauern Wechseljahresbeschwerden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vasomotorische Symptome bestehen median 7,4 Jahre. Urogenitale Symptome bleiben oft lebenslang ohne lokale Therapie.' },
    },
  ],
}

useHead({
  title: 'Menopause-Symptome bewerten: MRS-Score, Schweregrade und Therapieoptionen | Health Calculators',
  description: 'Wechseljahresbeschwerden mit dem Menopause Rating Scale (MRS) bewerten — 11 Symptome, 3 Bereiche, Schweregradgrenzen nach Heinemann 2003. Mit Rechner und Therapie-Übersicht.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Menopause-Symptome bewerten: MRS-Score, Schweregrade und der Weg zur Therapie',
      description: 'Wechseljahresbeschwerden mit dem Menopause Rating Scale (MRS) bewerten — 11 Symptome, 3 Bereiche, Schweregradgrenzen nach Heinemann 2003. Mit Rechner und Therapie-Übersicht.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-11',
      dateModified: '2026-05-11',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/menopause-symptome-bewerten',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Menopause-Symptome bewerten: MRS-Score, Schweregrade und der Weg zur Therapie</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">11. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>Wechseljahre</strong> sind keine Krankheit — aber sie können den Alltag massiv beeinträchtigen. Hitzewallungen, Schlafstörungen, Stimmungsschwankungen und urogenitale Beschwerden treten in unterschiedlicher Intensität auf, oft über viele Jahre hinweg.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Das <strong>Menopause Rating Scale (MRS)</strong> ist der internationale Goldstandard zur Erfassung dieser Beschwerden. Es liefert einen klaren Schweregrad pro Bereich — und damit eine fundierte Grundlage für das Gespräch mit der Gynäkologin.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist das Menopause Rating Scale?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die MRS wurde 1996 in Deutschland entwickelt (Schneider, Heinemann) und ist heute in über 25 Sprachen übersetzt. Sie erfasst <strong>11 typische Wechseljahressymptome</strong> auf einer 5-stufigen Skala (0 = keine, 4 = sehr stark) — gruppiert in 3 klinisch sinnvolle Dimensionen:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Dimension</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptome</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Range</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Somatisch-vegetativ</td><td class="px-6 py-3 text-stone-600">Hitzewallungen, Herzbeschwerden, Schlaf, Gelenke</td><td class="px-6 py-3 text-stone-600 tabular-nums">0–16</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Psychisch</td><td class="px-6 py-3 text-stone-600">Stimmung, Reizbarkeit, Ängste, Erschöpfung</td><td class="px-6 py-3 text-stone-600 tabular-nums">0–16</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Urogenital</td><td class="px-6 py-3 text-stone-600">Sexualität, Blase, Scheidentrockenheit</td><td class="px-6 py-3 text-stone-600 tabular-nums">0–12</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Gesamtscore reicht von <strong>0 bis 44</strong>. Die Schweregradgrenzen (Heinemann et al. 2003) sind in zehntausenden Patientinnen validiert und werden weltweit in Studien und Praxis genutzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">MRS-Schweregrade — was bedeutet dein Score?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gesamtscore</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schweregrad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0–4</td><td class="px-6 py-3 text-stone-600">keine / sehr leicht</td><td class="px-6 py-3 text-stone-600">Beobachten</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5–8</td><td class="px-6 py-3 text-stone-600">leicht</td><td class="px-6 py-3 text-stone-600">Lebensstil-Maßnahmen meist ausreichend</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">9–16</td><td class="px-6 py-3 text-stone-600">moderat</td><td class="px-6 py-3 text-stone-600">Gynäkologische Beratung sinnvoll</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 17</td><td class="px-6 py-3 text-stone-600">schwer</td><td class="px-6 py-3 text-stone-600">Fachärztliche Therapie klar empfohlen</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen MRS-Score berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">11 Symptome, 3 Bereiche, klare Schweregrad-Auswertung nach Heinemann 2003. Kostenlos, sofort, ohne Anmeldung.</p>
        <router-link
          :to="localePath('menopauseSymptom')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >MRS-Score berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die wichtigsten Symptome im Detail</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Hitzewallungen (vasomotorische Symptome)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Häufigstes Symptom (≈ 80 % aller Frauen). Mediane Dauer: 7,4 Jahre — bei Frauen mit frühem Beginn sogar &gt; 14 Jahre. Auslöser: Schwankungen der Östrogene mit Sensibilisierung des hypothalamischen Thermoregulationszentrums.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Schlafstörungen</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Bei ≈ 40–60 % der Frauen. Teils durch nächtliches Schwitzen, teils unabhängig — Östrogenmangel verändert REM-Phasen und Stimmung. Schlafhygiene und Therapie der Hitzewallungen helfen beide.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Stimmungsänderungen</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Reizbarkeit, depressive Verstimmung und Ängste treten in der Perimenopause 2–4× häufiger auf als zuvor. Wichtiger Differentialcheck: echte Depression (PHQ-9) abgrenzen — beides ist behandelbar.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Urogenitale Beschwerden (GSM)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Scheidentrockenheit, Brennen, Drangsymptomatik, Inkontinenz — zusammengefasst als „Genitourinäres Menopause-Syndrom". Bessert sich oft <em>nicht</em> spontan und sollte aktiv behandelt werden (lokale Östrogene sind sehr wirksam und sicher).</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Therapie — was wirklich hilft</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebensstil</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Kühle Schlafräume, regelmäßige Bewegung (3–5× pro Woche), Gewichtskontrolle, Alkohol- und Koffein-Begrenzung — alles mit moderaten, aber realen Effekten.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Hormonersatztherapie (HRT)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Goldstandard für moderate bis schwere Beschwerden. Senkt MRS-Score klinisch deutlich, schützt vor Osteoporose, hat klar definiertes Risikoprofil. Frühstart (&lt; 60 J., &lt; 10 J. seit Menopause) verbessert Nutzen-Risiko-Bilanz erheblich.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Nicht-hormonell</h3>
            <p class="text-sm text-stone-600 leading-relaxed">SSRI/SNRI (Venlafaxin, Paroxetin), Gabapentin, Clonidin, neu: Fezolinetant (NK3-Antagonist). Kognitive Verhaltenstherapie reduziert Hitzewallungen messbar.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lokale Östrogene</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Für urogenitale Beschwerden sehr wirksam und systemisch nahezu wirkungslos — auch nach Mammakarzinom oft vertretbar (individuelle Abwägung).</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wechseljahre, Knochen und Stoffwechsel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Östrogenmangel beschleunigt den <strong>Knochenabbau</strong> messbar — in den ersten 5 Jahren nach Menopause verlieren Frauen 1–3 % Knochenmasse pro Jahr. Prüfe daher dein
          <router-link :to="localeBlogPath('osteoporose-risiko-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Osteoporose-Risiko</router-link>
          parallel zum MRS — Knochendichte-Messung wird ab 65 Jahren oder bei Risikofaktoren empfohlen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wechseljahre verändern auch Stoffwechsel und Hormone insgesamt. Wenn du Zyklusunregelmäßigkeiten oder typische androgene Zeichen hast, schau zusätzlich den
          <router-link :to="localeBlogPath('pcos-symptome-erkennen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PCOS-Symptom-Check</router-link>
          an. Für ein Gesamtbild deiner Alterungsbiologie lohnt sich das
          <router-link :to="localeBlogPath('biologisches-alter-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biologische Alter</router-link>
          — ein ehrlicher Blick auf den eigenen Status.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Wechseljahresbeschwerden sind häufig, oft jahrelang — und meist gut behandelbar. Die MRS gibt dir einen klaren, vergleichbaren Wert für die Schwere deiner Symptome und einen sinnvollen Ausgangspunkt für die nächste Sprechstunde. Starte mit dem
          <router-link :to="localePath('menopauseSymptom')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">MRS-Rechner</router-link> und nimm das Ergebnis mit ins Gespräch mit deiner Gynäkologin.
        </p>
      </div>

      <RelatedArticles slug="menopause-symptome-bewerten" />
    </div>
  </article>
</template>
