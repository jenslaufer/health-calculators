<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Wasserbedarf berechnen: So viel Wasser brauchst du täglich | Health Calculators',
  description: 'Täglichen Wasserbedarf berechnen — angepasst an Gewicht, Aktivität und Klima. Mit Gläser-Umrechnung und Tipps.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wasserbedarf berechnen: So viel Wasser brauchst du täglich',
    description: 'Täglichen Wasserbedarf berechnen — angepasst an Gewicht, Aktivität und Klima. Mit Gläser-Umrechnung und Tipps.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/wasserbedarf-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Wasserbedarf berechnen: So viel Wasser brauchst du täglich</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">6 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ausreichend Wasser zu trinken ist eine der einfachsten und wirkungsvollsten Maßnahmen für deine Gesundheit. Doch <strong>wie viel Wasser</strong> ist genug? Die Antwort hängt von deinem Gewicht, deiner Aktivität und dem Klima ab.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel zeigen wir dir die Formel, die Einflussfaktoren und praktische Tipps für den Alltag.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Grundformel</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Wasserbedarf (Liter) = Körpergewicht (kg) &times; 0,033</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Beispiel:</strong> Eine Person mit 70 kg benötigt 70 &times; 0,033 = <strong>2,3 Liter</strong> pro Tag als Basis.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Wert wird dann durch Aktivitäts- und Klimafaktoren angepasst.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Einflussfaktoren</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Körperliche Aktivität</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Mehr Bewegung bedeutet mehr Schweiß und höheren Wasserbedarf. Leichte Aktivität erhöht den Bedarf um 10 %, intensive Aktivität um bis zu 40 %.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Klima</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Heiße, feuchte Umgebungen steigern den Wasserbedarf um ca. 20 %. In kaltem Klima sinkt er leicht, da weniger Schweiß verdunstet.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ernährung</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Eine proteinreiche Ernährung erhöht den Wasserbedarf, da die Nieren mehr Wasser zur Verarbeitung benötigen. Obst und Gemüse liefern zusätzlich Wasser.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deinen Wasserbedarf berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Personalisiert nach Gewicht, Aktivität und Klima — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('water')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wasserbedarf und Ernährung</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Dein Wasserbedarf hängt eng mit deiner Ernährung zusammen. Wer seinen <router-link :to="localeBlogPath('tdee-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> kennt und seine <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoffe</router-link> plant, sollte auch die Flüssigkeitszufuhr nicht vergessen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Ausreichend Wasser trinken ist die einfachste Gesundheitsmaßnahme. Berechne deinen <router-link :to="localePath('water')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Wasserbedarf</router-link> und verteile die Menge gleichmäßig über den Tag.
        </p>
      </div>

      <RelatedArticles slug="wasserbedarf-berechnen" />
    </div>
  </article>
</template>
