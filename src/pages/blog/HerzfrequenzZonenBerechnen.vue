<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Herzfrequenz-Zonen berechnen: Trainiere im richtigen Bereich | Health Calculators',
  description: 'Die fünf Herzfrequenz-Zonen berechnen. Standard- und Karvonen-Methode für gezieltes Training von Fettverbrennung bis VO2max.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Herzfrequenz-Zonen berechnen: Trainiere im richtigen Bereich',
    description: 'Die fünf Herzfrequenz-Zonen berechnen. Standard- und Karvonen-Methode für gezieltes Training von Fettverbrennung bis VO2max.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/herzfrequenz-zonen-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Herzfrequenz-Zonen berechnen: Trainiere im richtigen Bereich</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ob Fettverbrennung, Ausdauer oder Sprinttraining — jedes Trainingsziel hat seine eigene <strong>Herzfrequenz-Zone</strong>. Wer im richtigen Bereich trainiert, erreicht sein Ziel schneller und vermeidet Übertraining.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erklären wir die fünf Zonen, die zwei Berechnungsmethoden und wie du das Wissen im Training nutzt.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die fünf Herzfrequenz-Zonen</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 1 — Erholung (50–60 % HFmax)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Leichtes Gehen, aktive Erholung. Verbessert die allgemeine Gesundheit und unterstützt die Regeneration nach hartem Training.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 2 — Fettverbrennung (60–70 % HFmax)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Lockeres Joggen, Radfahren. Hier verbrennt der Körper prozentual am meisten Fett. Ideal für die aerobe Basis.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 3 — Aerob (70–80 % HFmax)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Moderates Tempo, leichte Anstrengung. Verbessert kardiovaskuläre Fitness und Ausdauer.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 4 — Anaerob (80–90 % HFmax)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Intervalltraining, Tempowechsel. Erhöht Geschwindigkeit, Kraft und die Laktatschwelle.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Zone 5 — VO2max (90–100 % HFmax)</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Maximale Belastung, Sprints. Nur kurze Intervalle möglich. Entwickelt Spitzenleistung.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zwei Berechnungsmethoden</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Standard-Methode</h3>
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-2">
              <p class="text-sm font-semibold text-stone-900">HFmax = 220 &minus; Alter</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Einfach und schnell. Benötigt nur das Alter.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Karvonen-Methode</h3>
            <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-2">
              <p class="text-sm font-semibold text-stone-900">Ziel-HF = Ruhe-HF + (HFR &times; Intensität)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Genauer, da sie die Ruheherzfrequenz einbezieht. HFR = HFmax &minus; Ruhe-HF.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Herzfrequenz-Zonen berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Standard- und Karvonen-Methode — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('heartRate')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Training und Ernährung</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Effektives Training braucht die richtige Energieversorgung. Berechne deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE (täglichen Kalorienverbrauch)</router-link>, um sicherzustellen, dass dein Körper genug Energie für dein Trainingspensum hat.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Herzfrequenz-Zonen machen dein Training messbar und zielgerichtet. Nutze unseren <router-link :to="localePath('heartRate')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Herzfrequenz-Zonen-Rechner</router-link> und trainiere gezielt in der Zone, die zu deinem Ziel passt.
        </p>
      </div>

      <RelatedArticles slug="herzfrequenz-zonen-berechnen" />
    </div>
  </article>
</template>
