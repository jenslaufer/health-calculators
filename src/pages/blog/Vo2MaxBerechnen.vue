<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'VO2 Max berechnen: Wie fit bist du wirklich? | Health Calculators',
  description: 'VO2 Max berechnen mit dem Cooper-Test, Rockport-Walktest oder Direkteingabe. Fitnesskategorien, Altersvergleich und was dein VO2 Max über deine Gesundheit aussagt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'VO2 Max berechnen: Wie fit bist du wirklich?',
    description: 'VO2 Max berechnen mit dem Cooper-Test, Rockport-Walktest oder Direkteingabe. Fitnesskategorien, Altersvergleich und was dein VO2 Max über deine Gesundheit aussagt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/vo2max-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">VO2 Max berechnen: Wie fit bist du wirklich?</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">2. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>VO2 Max ist der Goldstandard der Ausdauerfitness.</strong> Er misst die maximale Menge an Sauerstoff, die dein Körper unter Belastung verwerten kann — in Milliliter pro Kilogramm Körpergewicht pro Minute (ml/kg/min). Je höher dein VO2 Max, desto fitter bist du.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du deinen VO2 Max berechnest, was die Werte bedeuten und warum VO2 Max ein starker Prädiktor für Langlebigkeit ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist VO2 Max?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          VO2 Max steht für die maximale Sauerstoffaufnahme (Volume O2 Maximum). Sie gibt an, wie effizient dein Herz-Kreislauf-System Sauerstoff zu den arbeitenden Muskeln transportiert. Der Wert wird in ml/kg/min gemessen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Studien zeigen, dass ein hoher VO2 Max das Risiko für Herz-Kreislauf-Erkrankungen senkt und stark mit der Lebenserwartung korreliert. Eine Studie im JAMA Network Open (2018) fand keinen oberen Grenzwert — je höher der VO2 Max, desto geringer das Sterberisiko.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Testmethoden zur VO2 Max Berechnung</h2>

        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cooper-Test (12-Minuten-Lauf)</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Der bekannteste Feldtest: Laufe 12 Minuten so weit wie möglich. Die zurückgelegte Distanz wird in die Cooper-Formel eingesetzt.
            </p>
            <div class="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <p class="text-sm font-semibold text-stone-900 text-center">VO2 Max = (Distanz in Metern &minus; 504,9) / 44,73</p>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Rockport-Walktest (1-Meilen-Gehtest)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Ideal für Einsteiger: Gehe 1 Meile (1.609 m) so schnell wie möglich. Die Formel berücksichtigt Gehzeit, Herzfrequenz, Alter, Geschlecht und Gewicht.
            </p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Direkteingabe</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wenn du deinen VO2 Max bereits aus einem Labortest oder einer Smartwatch kennst, kannst du ihn direkt eingeben, um deine Fitnesskategorie zu sehen.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fitnesskategorien nach Alter und Geschlecht</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt VO2 Max Richtwerte für Männer (basierend auf der American College of Sports Medicine Klassifikation):
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hervorragend</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ausgezeichnet</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Gut</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Durchschnittlich</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">20–29</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;49</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;44</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;39</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;34</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">30–39</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;47</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;42</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;37</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;32</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">40–49</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;43</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;38</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;34</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;29</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">50–59</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;39</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;34</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;30</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;25</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">60+</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;36</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;31</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;27</td><td class="px-6 py-3 text-stone-900 font-medium">&ge;22</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-400">Werte in ml/kg/min. Quelle: ACSM Guidelines for Exercise Testing and Prescription.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">VO2 Max und Langlebigkeit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Peter Attia nennt VO2 Max den wichtigsten Einzelmarker für Langlebigkeit. Studien zeigen:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-xl p-4">
            <p class="text-sm text-stone-700"><strong>5x niedrigeres Sterberisiko:</strong> Menschen im obersten Quintil des VO2 Max haben ein 5-fach geringeres Sterberisiko als im untersten Quintil.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-xl p-4">
            <p class="text-sm text-stone-700"><strong>Kein Plateau:</strong> Anders als bei vielen Biomarkern gibt es beim VO2 Max keinen Punkt, ab dem mehr nicht besser wäre.</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-xl p-4">
            <p class="text-sm text-stone-700"><strong>Trainierbar in jedem Alter:</strong> Selbst mit 60+ kann VO2 Max durch gezieltes Training um 15–20 % gesteigert werden.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">VO2 Max verbessern</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>1. High-Intensity Interval Training (HIIT):</strong> 4&times;4-Minuten-Intervalle bei 90–95 % der maximalen <router-link :to="localeBlogPath('herzfrequenz-zonen-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz</router-link>, mit 3 Minuten aktiver Pause. 2–3 Mal pro Woche.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>2. Lange Ausdauereinheiten:</strong> Zone 2 Training (60–70 % der max. Herzfrequenz) für 45–90 Minuten baut die aerobe Basis auf.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>3. Krafttraining:</strong> Erhöht die Muskelmasse und verbessert die periphere Sauerstoffverwertung. Berechne deinen <router-link :to="localeBlogPath('kalorienverbrauch-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kalorienverbrauch</router-link> für optimale Regeneration.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4. Gewicht optimieren:</strong> Da VO2 Max pro Kilogramm Körpergewicht gemessen wird, verbessert Fettreduktion den Wert direkt. Nutze den <router-link :to="localeBlogPath('kaloriendefizit-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit-Rechner</router-link> für nachhaltige Ergebnisse.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen VO2 Max berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Cooper-Test, Rockport-Walktest oder Direkteingabe — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('vo2Max')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">VO2 Max vs. andere Fitness-Metriken</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          VO2 Max ist nicht die einzige relevante Kennzahl. Kombiniere sie mit anderen Metriken für ein vollständiges Bild deiner Fitness:
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Deine <router-link :to="localePath('heartRate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz-Zonen</router-link> helfen dir, im richtigen Bereich zu trainieren. Dein <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> bestimmt, wie viel Energie du täglich brauchst. Und dein <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Körperfettanteil</router-link> beeinflusst deinen relativen VO2 Max direkt.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          VO2 Max ist der aussagekräftigste Marker für kardiovaskuläre Fitness und Langlebigkeit. Du brauchst kein Labor — mit dem Cooper-Test oder Rockport-Walktest kannst du deinen Wert zu Hause schätzen. Nutze unseren <router-link :to="localePath('vo2Max')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">VO2 Max Rechner</router-link> für eine sofortige Berechnung mit Fitnesskategorie und Altersvergleich.
        </p>
      </div>

      <RelatedArticles slug="vo2max-berechnen" />
    </div>
  </article>
</template>
