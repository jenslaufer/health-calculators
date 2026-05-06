<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'APGAR-Score: Neugeborene in 1 und 5 Minuten richtig bewerten | Health Calculators',
  description: 'Was der APGAR-Score nach 1 und 5 Minuten über dein Neugeborenes aussagt. Die fünf Kriterien, Punktebewertung, normale und kritische Werte — kompakt erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'APGAR-Score: Neugeborene in 1 und 5 Minuten richtig bewerten',
    description: 'Was der APGAR-Score nach 1 und 5 Minuten über dein Neugeborenes aussagt. Die fünf Kriterien, Punktebewertung, normale und kritische Werte — kompakt erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/apgar-score-bewerten',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">APGAR-Score: Neugeborene in 1 und 5 Minuten richtig bewerten</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">6. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wenige Sekunden nach der Geburt schauen Hebamme und Geburtshelfer auf <strong>fünf Vitalzeichen</strong>. Sie addieren sie zu einer Zahl zwischen 0 und 10 — dem APGAR-Score. Diese Zahl zeigt, wie gut sich dein Baby an das Leben außerhalb der Gebärmutter angepasst hat.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Was bedeuten die einzelnen Punkte? Wann ist Eingreifen nötig? Und warum sagt ein 1-Minuten-Wert von 5 noch nichts Schlimmes aus? Dieser Ratgeber erklärt es Schritt für Schritt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Geschichte: Von Virginia Apgar 1953 bis heute</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die amerikanische Anästhesistin <strong>Virginia Apgar</strong> stellte 1953 fest, dass Neugeborene oft sterben, weil ihr Zustand direkt nach der Geburt nicht systematisch erfasst wurde. Sie entwickelte einen Score aus fünf Kriterien — schnell zu erheben, ohne Gerät, von jeder Fachperson reproduzierbar.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Ihr Akronym war doppelt clever gewählt: APGAR steht sowohl für ihren Namen als auch für die fünf Kriterien — Appearance, Pulse, Grimace, Activity, Respiration. Bis heute ist der Score weltweit Standard und in jeder Geburtsleitlinie verankert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die fünf APGAR-Kriterien im Detail</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Kriterium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">0 Punkte</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">1 Punkt</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">2 Punkte</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hautfarbe (Appearance)</td><td class="px-6 py-3 text-stone-600">Blau / blass</td><td class="px-6 py-3 text-stone-600">Körper rosig, Extremitäten blau</td><td class="px-6 py-3 text-stone-600">Komplett rosig</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Puls (Pulse)</td><td class="px-6 py-3 text-stone-600">Nicht tastbar</td><td class="px-6 py-3 text-stone-600">&lt; 100/min</td><td class="px-6 py-3 text-stone-600">≥ 100/min</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Reflexe (Grimace)</td><td class="px-6 py-3 text-stone-600">Keine Reaktion</td><td class="px-6 py-3 text-stone-600">Grimassieren</td><td class="px-6 py-3 text-stone-600">Schreien, Husten, Niesen</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Muskeltonus (Activity)</td><td class="px-6 py-3 text-stone-600">Schlaff</td><td class="px-6 py-3 text-stone-600">Geringe Beugung</td><td class="px-6 py-3 text-stone-600">Aktive Bewegung</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Atmung (Respiration)</td><td class="px-6 py-3 text-stone-600">Keine Atmung</td><td class="px-6 py-3 text-stone-600">Langsam / unregelmäßig</td><td class="px-6 py-3 text-stone-600">Kräftiges Schreien</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bewertung: Was die Gesamtsumme bedeutet</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Punkte aller fünf Kriterien werden addiert. Das Ergebnis liegt zwischen 0 (schwerste Beeinträchtigung) und 10 (optimale Anpassung):
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>7 bis 10 Punkte — unauffällig:</strong> Das Neugeborene hat sich gut angepasst. Routine reicht.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>4 bis 6 Punkte — moderat eingeschränkt:</strong> Atemunterstützung, Sauerstoffgabe oder Stimulation häufig nötig. Engmaschige Kontrolle.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>0 bis 3 Punkte — kritisch:</strong> Sofortige Reanimation. Neonatologisches Team alarmieren.</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">APGAR-Score jetzt berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Strukturiere die Bewertung deines Neugeborenen — fünf Kriterien für 1 und 5 Minuten, sofortiges Ergebnis mit klinischer Einordnung. Kostenlos, ohne Anmeldung.</p>
        <router-link
          :to="localePath('apgarScore')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum 1 und 5 Minuten?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>1-Minuten-Wert</strong> beschreibt die unmittelbare Anpassung — wie gut das Kind den Geburtsstress überwunden hat. Niedrige Werte hier sind häufig (z. B. nach langer Geburt) und sagen wenig über die Prognose.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der <strong>5-Minuten-Wert</strong> ist klinisch deutlich aussagekräftiger. Er zeigt, ob das Neugeborene auf Maßnahmen anspricht oder sich von selbst stabilisiert. Liegt er unter 7, werden weitere Messungen nach 10, 15 und 20 Minuten empfohlen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Erst <strong>persistierend niedrige Werte</strong> über 10–20 Minuten korrelieren mit erhöhtem neurologischem Risiko. Die meisten Babys mit niedrigem 1-Minuten-Wert entwickeln sich völlig normal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufige Faktoren, die den Score beeinflussen</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Frühgeburtlichkeit:</strong> Frühgeborene haben physiologisch oft niedrigere Werte (Muskeltonus, Hautfarbe). Das ist nicht zwingend pathologisch.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mütterliche Anästhesie:</strong> Periduralanästhesie oder Vollnarkose kann initial die Reflexe und Atmung dämpfen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Geburtsstress:</strong> Lange oder traumatische Geburten senken zunächst Puls und Atmung.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mekoniumaspiration:</strong> Eingeatmetes Mekonium kann Atemnot und niedrige Sauerstoffsättigung verursachen.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Konstitutionell rosige vs. dunkelhäutige Babys:</strong> Hautfarbe ist beim APGAR-Score umstritten — kritischer ist die Sauerstoffsättigung an Mund- und Nagelschleimhaut.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Rund um die Geburt gibt es weitere klinisch wichtige Berechnungen. Der
          <router-link :to="localeBlogPath('geburtsterminrechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Geburtsterminrechner</router-link>
          hilft, das voraussichtliche Geburtsdatum nach Naegele zu bestimmen. Nach der Entbindung dokumentiert die
          <router-link :to="localeBlogPath('wachstumsperzentile-kinder')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Wachstumsperzentile</router-link>
          die kindliche Entwicklung. Bei medikamentöser Versorgung im Kindesalter ist die
          <router-link :to="localeBlogPath('kinder-dosierung-rechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kinder-Dosierungsberechnung</router-link>
          unverzichtbar.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Der APGAR-Score ist seit über 70 Jahren das Standardinstrument zur ersten Einschätzung Neugeborener. Mit unserem
          <router-link :to="localePath('apgarScore')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">APGAR-Score-Rechner</router-link>
          erfasst du die fünf Kriterien strukturiert für 1- und 5-Minuten-Werte. Werte unter 7 nach 5 Minuten erfordern weitere Maßnahmen, ≤ 3 sind ein Notfall. Die meisten Babys liegen zwischen 7 und 10 — ein guter Start ins Leben.
        </p>
      </div>

      <RelatedArticles slug="apgar-score-bewerten" />
    </div>
  </article>
</template>
