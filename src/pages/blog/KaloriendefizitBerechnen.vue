<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kaloriendefizit berechnen: So nimmst du gesund ab | Health Calculators',
  description: 'Kaloriendefizit berechnen mit der Mifflin-St Jeor-Formel. TDEE, sicheres Defizit und 7.700-kcal-Regel einfach erklärt.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kaloriendefizit berechnen: So nimmst du gesund ab',
    description: 'Kaloriendefizit berechnen mit der Mifflin-St Jeor-Formel. TDEE, sicheres Defizit und 7.700-kcal-Regel einfach erklärt.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/kaloriendefizit-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kaloriendefizit berechnen: So nimmst du gesund ab</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">27. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein <strong>Kaloriendefizit</strong> ist die einzige Voraussetzung zum Abnehmen: Du musst weniger Energie aufnehmen, als dein Körper verbraucht. Wie groß das Defizit sein sollte, hängt von deinem Zielgewicht, deinem Zeitrahmen und deinem täglichen Verbrauch ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie du dein <strong>persönliches Kaloriendefizit</strong> berechnest — sicher, nachhaltig und wissenschaftlich fundiert.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die 7.700-kcal-Regel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein Kilogramm Körperfett entspricht etwa <strong>7.700 kcal</strong> gespeicherter Energie. Um 1 kg abzunehmen, musst du also insgesamt 7.700 kcal einsparen — entweder durch weniger Essen, mehr Bewegung oder beides.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Gesamtdefizit = Abnehmziel (kg) &times; 7.700 kcal</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wenn du beispielsweise 5 kg abnehmen möchtest, brauchst du ein Gesamtdefizit von 38.500 kcal. Bei 12 Wochen ergibt das ein tägliches Defizit von rund 460 kcal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schritt 1: TDEE mit der Mifflin-St Jeor-Formel berechnen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein <strong>TDEE (Total Daily Energy Expenditure)</strong> ist dein gesamter täglicher Kalorienverbrauch. Er basiert auf deinem Grundumsatz (BMR), multipliziert mit einem Aktivitätsfaktor.
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Männer: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Frauen: BMR = 10 &times; Gewicht(kg) + 6,25 &times; Größe(cm) &minus; 5 &times; Alter &minus; 161</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Mehr dazu in unserem <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE-Ratgeber</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schritt 2: Tägliches Defizit berechnen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Teile das Gesamtdefizit durch die Anzahl der Tage deines Zeitraums:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Tägliches Defizit = Gesamtdefizit &divide; Tage</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Dein tägliches Kalorienziel ist dann: <strong>TDEE &minus; tägliches Defizit</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Sicheres Defizit: Was du beachten solltest</h2>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li>Nie unter <strong>1.200 kcal/Tag</strong> essen — darunter drohen Nährstoffmangel und Stoffwechselprobleme.</li>
          <li>Maximal <strong>0,5–1 kg pro Woche</strong> abnehmen — schnellerer Verlust führt oft zu Muskelabbau und Jo-Jo-Effekt.</li>
          <li>Ein moderates Defizit von <strong>300–500 kcal/Tag</strong> ist für die meisten Menschen ideal.</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Wie du deine Kalorien optimal auf <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffe</router-link> aufteilst, erfährst du in unserem Makro-Ratgeber.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt dein Kaloriendefizit berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor-Formel mit persönlichem Kalorienziel — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('calorieDeficit')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein Kaloriendefizit ist der Schlüssel zum Abnehmen. Berechne deinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Kalorienverbrauch (TDEE)</router-link>, lege ein realistisches Ziel fest und nutze unseren <router-link :to="localePath('calorieDeficit')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Kaloriendefizit-Rechner</router-link> für dein persönliches Tagesziel.
        </p>
      </div>

      <RelatedArticles slug="kaloriendefizit-berechnen" />
    </div>
  </article>
</template>
