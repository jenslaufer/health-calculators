<script setup>
import { useHead } from '../../composables/useHead.js'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Biologisches Alter berechnen — Was steckt hinter dem Konzept? | Health Calculators',
  description: 'Biologisches Alter berechnen: Wie Herzfrequenz, Bewegung, Schlaf und Ernährung dein biologisches Alter beeinflussen. PhenoAge-Algorithmus erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Biologisches Alter berechnen — Was steckt hinter dem Konzept?',
    description: 'Biologisches Alter berechnen: Wie Herzfrequenz, Bewegung, Schlaf und Ernährung dein biologisches Alter beeinflussen. PhenoAge-Algorithmus erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-17',
    dateModified: '2026-04-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/biologisches-alter-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Biologisches Alter berechnen — Was steckt hinter dem Konzept?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">17. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Geburtstagsdatum ist nur eine Zahl — dein <strong>biologisches Alter</strong> verrät, wie alt dein Körper wirklich ist. Zwei 45-Jährige können biologisch 10 Jahre auseinanderliegen: eine Person mit gesundem Lebensstil, niedrigem Blutdruck und guter Schlafqualität altert langsamer als jemand mit Rauchen, Übergewicht und chronischem Stress.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unser <router-link :to="localePath('biologicalAge')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Biologisches Alter Rechner</router-link> kombiniert Herzfrequenz, Bewegung, Schlaf, Ernährung, Stress und Gesundheitsmarker zu einer personalisierten Schätzung — inspiriert vom PhenoAge-Konzept.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist das biologische Alter?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das biologische Alter beschreibt den funktionellen Zustand deines Körpers — gemessen an physiologischen Markern statt am Kalender. Es ist ein Maß dafür, wie schnell du alterst. Wissenschaftliche Konzepte wie <strong>PhenoAge</strong> (Levine et al., 2018) und epigenetische Uhren (z.B. Horvath-Uhr) zeigen, dass biologisches und chronologisches Alter erheblich voneinander abweichen können.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Studien belegen: Wer sein biologisches Alter unter dem chronologischen hält, hat ein deutlich geringeres Risiko für Herzerkrankungen, Diabetes, Demenz und einen vorzeitigen Tod.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die vier Kategorien des biologischen Alters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Unser Rechner analysiert vier Bereiche, die das biologische Alter maßgeblich beeinflussen:
        </p>

        <div class="space-y-4 mb-6">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">1. Herz-Kreislauf</h3>
            <p class="text-sm text-stone-600 mb-3">Ruheherzfrequenz, Blutdruck und Trainingsgewohnheiten sind zentrale Indikatoren der kardiovaskulären Fitness. Eine niedrige Ruheherzfrequenz (&lt;55 bpm) signalisiert ein trainiertes Herz und ist mit einem bis zu 3 Jahre jüngeren biologischen Alter assoziiert. Hoher Blutdruck (&ge;160 mmHg) kann das biologische Alter dagegen um 4 Jahre erhöhen.</p>
            <div class="bg-stone-50 rounded-lg overflow-hidden">
              <table class="w-full text-sm">
                <thead><tr class="border-b border-stone-200"><th class="text-left px-4 py-2 font-semibold text-stone-700">Ruheherzfrequenz</th><th class="text-left px-4 py-2 font-semibold text-stone-700">Einfluss</th></tr></thead>
                <tbody class="divide-y divide-stone-100">
                  <tr><td class="px-4 py-2 text-stone-600">&lt; 55 bpm (Sportler)</td><td class="px-4 py-2 text-emerald-600 font-medium">−3 Jahre</td></tr>
                  <tr><td class="px-4 py-2 text-stone-600">55–64 bpm</td><td class="px-4 py-2 text-emerald-600 font-medium">−1 Jahr</td></tr>
                  <tr><td class="px-4 py-2 text-stone-600">65–74 bpm</td><td class="px-4 py-2 text-stone-500">±0</td></tr>
                  <tr><td class="px-4 py-2 text-stone-600">75–84 bpm</td><td class="px-4 py-2 text-red-500 font-medium">+2 Jahre</td></tr>
                  <tr><td class="px-4 py-2 text-stone-600">&ge; 85 bpm</td><td class="px-4 py-2 text-red-500 font-medium">+4 Jahre</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">2. Stoffwechsel</h3>
            <p class="text-sm text-stone-600">BMI, Ernährungsqualität und chronische Erkrankungen wie Diabetes oder Bluthochdruck beeinflussen metabolische Marker direkt. Adipositas (BMI &ge;40) kann das biologische Alter um bis zu 8 Jahre erhöhen. Eine mediterrane oder pflanzenbasierte Ernährung spart bis zu 2 biologische Jahre.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">3. Lebensstil</h3>
            <p class="text-sm text-stone-600">Rauchen, Alkohol und Schlaf prägen das biologische Alter stark. Starkes Rauchen erhöht es um bis zu 7 Jahre. Schlechter Schlaf (&lt;5 Stunden) kostet weitere 4 Jahre. Umgekehrt: ausgezeichneter Schlaf spart 1 Jahr, nie zu rauchen 0 Jahre Aufpreis.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">4. Mental & Sozial</h3>
            <p class="text-sm text-stone-600">Chronischer Stress erhöht Cortisol, fördert Entzündungen und beschleunigt das Altern auf Zellebene. Sehr hoher Stress kostet bis zu 4 biologische Jahre. Soziale Einsamkeit ist ebenso schädlich wie Rauchen — ein starkes soziales Netzwerk spart 1 Jahr.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">PhenoAge — der wissenschaftliche Hintergrund</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das PhenoAge-Konzept (Morgan Levine, Yale, 2018) basiert auf 9 Blutmarkern wie Albumin, Kreatinin, Glukose, CRP und Lymphozyten-Anteil. Diese Marker erklären, warum Menschen mit gleichem Geburtsjahr biologisch sehr unterschiedlich altern.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unser Rechner ist eine vereinfachte, für den Alltag zugängliche Version: Statt Laborwerte nutzen wir messbare Lebensstilfaktoren, die in der Forschung als starke Prädiktoren des biologischen Alters etabliert sind.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Verwandte Konzepte sind der <strong>Lebenserwartungs-Rechner</strong> — der berechnet, wie viele Jahre du noch vor dir hast — sowie der <strong>Diabetes-Risiko-Score</strong>, der metabolische Risikofaktoren bewertet.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie viel kann man das biologische Alter beeinflussen?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Maßnahme</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einfluss (biologische Jahre)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Rauchen aufhören (von heavy → never)</td><td class="px-6 py-3 text-emerald-600 font-medium">−7 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Von sitzend zu 5+× Sport/Woche + intensiv</td><td class="px-6 py-3 text-emerald-600 font-medium">−5 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">BMI von ≥40 auf Normalgewicht</td><td class="px-6 py-3 text-emerald-600 font-medium">−8 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Schlaf von &lt;5h schlecht → 7–8h gut</td><td class="px-6 py-3 text-emerald-600 font-medium">−7 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Ernährung sehr schlecht → ausgezeichnet</td><td class="px-6 py-3 text-emerald-600 font-medium">−6 Jahre</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Chronischer Stress → niedriger Stress</td><td class="px-6 py-3 text-emerald-600 font-medium">−5 Jahre</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-stone-500">Geschätzte Einflüsse basierend auf epidemiologischen Studien. Individuelle Ergebnisse variieren.</p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein biologisches Alter berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Personalisierte Analyse in 2 Minuten — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('biologicalAge')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Weitere verwandte Rechner</h2>
        <div class="space-y-3">
          <router-link
            :to="localeBlogPath('lebenserwartung-berechnen')"
            class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
          >
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lebenserwartung berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Faktoren, WHO-Tabellen und ein kostenloser Lebenserwartung-Rechner.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Weiterlesen &rarr;</span>
          </router-link>
          <router-link
            :to="localeBlogPath('diabetes-risiko-berechnen')"
            class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
          >
            <h3 class="text-base font-semibold text-stone-900 mb-1">Diabetes-Risiko berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">FINDRISC-Score erklärt: Typ-2-Diabetes-Risiko verstehen und senken.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Weiterlesen &rarr;</span>
          </router-link>
          <router-link
            :to="localeBlogPath('herzfrequenz-zonen-berechnen')"
            class="block bg-white border border-stone-200 rounded-xl shadow-sm p-6 hover:border-stone-300 hover:shadow transition-all duration-150"
          >
            <h3 class="text-base font-semibold text-stone-900 mb-1">Herzfrequenz-Zonen berechnen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Die fünf Herzfrequenz-Zonen verstehen und gezielt trainieren.</p>
            <span class="text-sm font-medium text-stone-900 mt-2 inline-block">Weiterlesen &rarr;</span>
          </router-link>
        </div>
      </div>

      <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <p class="text-xs text-stone-500 leading-relaxed">
          <strong>Hinweis:</strong> Diese Schätzungen basieren auf epidemiologischen Durchschnittswerten und ersetzen keine medizinische Beratung. Individuelle Risiken hängen von vielen weiteren Faktoren ab. Wende dich für persönliche Gesundheitsfragen an einen Arzt.
        </p>
      </div>

    </div>
  </article>
</template>
