<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'COPD Assessment berechnen — CAT, mMRC und GOLD-Gruppe verstehen | Health Calculators',
  description: 'COPD-Symptome objektiv einschätzen: mMRC, CAT-Score und Exazerbationen ergeben die GOLD 2023 ABE-Gruppe. Erklärung der Scores, Schwellenwerte und Therapie-Hinweise.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'COPD Assessment berechnen — CAT, mMRC und GOLD-Gruppe verstehen',
      description: 'COPD-Symptomlast und Exazerbationsrisiko mit mMRC, CAT und GOLD 2023 ABE-Klassifikation einordnen — verständlich erklärt.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/copd-assessment-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was sind GOLD-Gruppen A, B und E?',
          acceptedAnswer: { '@type': 'Answer', text: 'GOLD 2023 unterscheidet drei Gruppen: A (wenige Symptome, niedriges Risiko), B (viele Symptome, niedriges Risiko), E (≥ 2 moderate oder ≥ 1 stationäre Exazerbation in 12 Monaten).' },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen mMRC und CAT?',
          acceptedAnswer: { '@type': 'Answer', text: 'mMRC misst nur Atemnot in fünf Stufen (0–4). CAT erfasst acht Symptom-Dimensionen (Husten, Schleim, Energie, Schlaf usw.) als Score von 0–40 und ist sensitiver — GOLD bevorzugt CAT.' },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">COPD Assessment berechnen — CAT, mMRC und GOLD-Gruppe verstehen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">7. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>chronisch obstruktive Lungenerkrankung (COPD)</strong> ist mehr als „Husten und Atemnot". Wie stark dich die Erkrankung wirklich beeinträchtigt — und wie hoch dein Risiko für eine schwere Verschlechterung ist — lässt sich strukturiert messen. Genau dafür gibt es das <strong>COPD Assessment</strong>: drei einfache Werkzeuge, eine klare Einordnung in <strong>GOLD-Gruppe A, B oder E</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Beitrag erklärt, was mMRC, CAT und Exazerbationen aussagen, wie GOLD 2023 die Gruppen vergibt und welche Konsequenzen das für die Therapie hat.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Drei Werkzeuge — eine Aussage</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          GOLD (Global Initiative for Chronic Obstructive Lung Disease) empfiehlt die Kombination dreier validierter Tools:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>mMRC</strong> (modifizierte Medical Research Council Skala) — Atemnot-Grad 0 bis 4 (Bestall, Thorax 1999).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>CAT</strong> (COPD Assessment Test) — 8 Fragen, je 0–5 Punkte, Gesamtscore 0–40 (Jones, Eur Respir J 2009).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Exazerbationen</strong> in den letzten 12 Monaten — Anzahl moderater Episoden + Klinikaufenthalte.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">mMRC — die Atemnot-Skala</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Grad</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beschreibung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium tabular-nums">0</td><td class="px-6 py-3 text-stone-600">Atemnot nur bei starker Anstrengung</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">1</td><td class="px-6 py-3 text-stone-600">Atemnot beim schnellen Gehen oder leichten Steigungen</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">2</td><td class="px-6 py-3 text-stone-600">Langsamer als Gleichaltrige, muss stehen bleiben</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">3</td><td class="px-6 py-3 text-stone-600">Stoppen nach 100 m oder wenigen Minuten</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">4</td><td class="px-6 py-3 text-stone-600">Zu kurzatmig zum Anziehen oder Verlassen des Hauses</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Schwelle für „viele Symptome" liegt bei <strong>mMRC ≥ 2</strong>. Diese Grenze entscheidet über die GOLD-Gruppe A vs. B (bei niedrigem Exazerbationsrisiko).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">CAT — der Symptom-Score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der CAT erfasst acht Lebensbereiche: Husten, Schleim, Engegefühl, Atemnot bei Belastung, häusliche Aktivität, Vertrauen außer Haus, Schlaf und Energie. Jede Frage erlaubt eine Bewertung von 0 bis 5. Der Gesamtscore von <strong>0–40</strong> wird wie folgt eingeordnet:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">CAT-Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einfluss auf den Alltag</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium tabular-nums">&lt; 10</td><td class="px-6 py-3 text-stone-600">Gering</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">10 – 20</td><td class="px-6 py-3 text-stone-600">Mittel</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">21 – 30</td><td class="px-6 py-3 text-stone-600">Hoch</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">31 – 40</td><td class="px-6 py-3 text-stone-600">Sehr hoch</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Klinisch bedeutsame Veränderung: <strong>≥ 2 Punkte</strong> (MCID, Kon et al., Lancet Respir Med 2014). Die Schwelle für „viele Symptome" in der GOLD-Klassifikation liegt bei <strong>CAT ≥ 10</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Exazerbationen — der Risiko-Faktor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine <strong>Exazerbation</strong> ist eine akute Verschlechterung, die eine Therapie-Änderung erfordert:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Moderat:</strong> ambulant — Antibiotika und/oder orale Steroide.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Schwer:</strong> stationäre Aufnahme oder Notaufnahme-Besuch.</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          GOLD ordnet jeden Patienten mit <strong>≥ 2 moderaten</strong> oder <strong>≥ 1 stationären</strong> Exazerbation pro Jahr direkt in <strong>Gruppe E</strong> ein — unabhängig von Symptomen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die GOLD ABE-Matrix</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gruppe</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kriterien</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Initialtherapie (Stichworte)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium">A</td>
                <td class="px-6 py-3 text-stone-600">0–1 moderat, keine Klinik · mMRC ≤ 1 · CAT &lt; 10</td>
                <td class="px-6 py-3 text-stone-600">Bronchodilatator (LAMA oder LABA)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium">B</td>
                <td class="px-6 py-3 text-stone-600">0–1 moderat, keine Klinik · mMRC ≥ 2 oder CAT ≥ 10</td>
                <td class="px-6 py-3 text-stone-600">LABA + LAMA (duale Bronchodilatation)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium">E</td>
                <td class="px-6 py-3 text-stone-600">≥ 2 moderat oder ≥ 1 stationär</td>
                <td class="px-6 py-3 text-stone-600">LABA + LAMA, ggf. + ICS bei Eosinophilie</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: GOLD 2023 hat die früheren Gruppen C und D zu einer einzigen Gruppe E zusammengefasst — der Gedanke: Exazerbationsrisiko ist behandlungsleitend, unabhängig vom Symptom-Profil.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was das Assessment nicht ersetzt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die <strong>COPD-Diagnose</strong> setzt eine Spirometrie voraus: FEV1/FVC &lt; 0,70 nach Bronchodilatator. Die spirometrische GOLD-Gradierung (1–4) basiert auf dem FEV1-% des Sollwertes — und braucht den Pulmonologen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Symptom-Assessment und Spirometrie ergänzen sich. Ein guter mMRC-Wert bei niedrigem FEV1 oder ein hoher CAT-Score bei „nur leicht" reduziertem FEV1 erzählen jeweils unterschiedliche Geschichten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was du jetzt tun kannst</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Rauchstopp:</strong> die wichtigste Einzelmaßnahme. Senkt Exazerbationsrate, FEV1-Verlust und Mortalität deutlich.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Inhalator-Technik prüfen:</strong> bis zu 70 % der COPD-Patienten inhalieren falsch — nutzt einen 2-Minuten-Check beim Apotheker oder Arzt.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pneumologische Reha:</strong> Belastbarkeit, CAT-Score und Lebensqualität verbessern sich messbar (Cochrane 2023).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Impfungen:</strong> Grippe, Pneumokokken, COVID-19, ggf. RSV — reduziert Exazerbationen.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen & Rechner</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Asthma-Kontrolle:</strong> Asthma und COPD überschneiden sich (ACOS). Wer beides hat, sollte beide Tools regelmäßig nutzen. Zum <router-link :to="localeBlogPath('asthma-kontrolle-testen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">ACT-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>VO₂max:</strong> die maximale Sauerstoffaufnahme korreliert direkt mit dem CAT-Score und ist ein guter Verlaufsparameter. Zum <router-link :to="localeBlogPath('vo2max-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">VO₂max-Artikel</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Rauchen-Kosten:</strong> Tabakrauch ist Ursache Nr. 1. Den finanziellen Einsparungs-Effekt sichtbar machen ist starke Motivation. Zum <router-link :to="localeBlogPath('rauchen-kosten-rechner')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Kosten-Rechner</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein COPD-Assessment durchführen</h3>
        <p class="text-stone-300 text-sm mb-5">10 Fragen, anonym, sofort. mMRC, CAT-Score und GOLD-Gruppe (A/B/E) auf einen Blick.</p>
        <router-link
          :to="localePath('copdAssessment')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum COPD Assessment Rechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Reicht das Assessment für eine COPD-Diagnose?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nein. Die Diagnose verlangt eine Spirometrie mit FEV1/FVC &lt; 0,70 nach Bronchodilatator. Das Assessment quantifiziert Symptome und Risiko bei diagnostizierter COPD oder hilft, die Schwelle zur Abklärung niedriger zu legen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Wie oft sollte ich die Skalen wiederholen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bei stabiler COPD alle 6–12 Monate. Nach jeder Therapie-Umstellung, nach einer Exazerbation oder bei spürbarer Verschlechterung früher. Der Trend ist informativer als ein Einzelwert.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was ist der Unterschied zwischen ABCD (alt) und ABE (neu)?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Bis 2022 unterschied GOLD vier Gruppen (A, B, C, D). Seit GOLD 2023 wurden die früheren Gruppen C und D zur einheitlichen Gruppe E („Exacerbation") zusammengefasst — Therapie wird bei hohem Risiko unabhängig vom Symptom-Profil eskaliert.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was bedeutet ein CAT-Score von 25?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              25 fällt in die Kategorie „hoher Einfluss" — viele Symptome, deutlich beeinträchtigte Lebensqualität. Das spricht für eine Therapie-Anpassung. Sprich mit deinem Pneumologen über duale Bronchodilatation, Reha und ICS-Indikation.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
