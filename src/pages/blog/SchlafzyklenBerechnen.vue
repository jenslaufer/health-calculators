<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Schlafzyklen berechnen: Zur richtigen Zeit aufwachen | Health Calculators',
  description: 'Schlafzyklen berechnen für erholsamen Schlaf. 90-Minuten-Zyklen verstehen und die optimale Schlaf- oder Aufwachzeit finden.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Schlafzyklen berechnen: Zur richtigen Zeit aufwachen',
    description: 'Schlafzyklen berechnen für erholsamen Schlaf. 90-Minuten-Zyklen verstehen und die optimale Schlaf- oder Aufwachzeit finden.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/blog/schlafzyklen-berechnen',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Schlafzyklen berechnen: Zur richtigen Zeit aufwachen</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">25. März 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">6 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Warum fühlt man sich manchmal nach 6 Stunden Schlaf fitter als nach 8? Die Antwort liegt in den <strong>Schlafzyklen</strong>. Wer zwischen den Zyklen aufwacht, fühlt sich ausgeruht — wer mitten in einem Zyklus geweckt wird, ist benommen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In diesem Artikel erfährst du, wie Schlafzyklen funktionieren und wie du die optimale Schlaf- oder Aufwachzeit findest.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist ein Schlafzyklus?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ein vollständiger Schlafzyklus dauert etwa <strong>90 Minuten</strong> und durchläuft vier Phasen:
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Einschlafphase (N1)</strong> — Leichter Übergang vom Wachsein zum Schlaf. 5–10 Minuten.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Leichtschlaf (N2)</strong> — Körpertemperatur sinkt, Herzfrequenz verlangsamt sich. 20 Minuten.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>Tiefschlaf (N3)</strong> — Körperliche Regeneration, Immunsystem-Stärkung. Hier aufzuwachen fühlt sich am schlimmsten an.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div>
              <p class="text-base text-stone-600 leading-relaxed"><strong>REM-Schlaf</strong> — Traumphase, Gedächtniskonsolidierung. Am Ende des Zyklus — der beste Zeitpunkt zum Aufwachen.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie viele Zyklen brauchst du?</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zyklen</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Schlafzeit</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Empfehlung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">4 Zyklen</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">6 Stunden</td>
                <td class="px-6 py-3 text-stone-500">Minimum</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">5 Zyklen</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">7,5 Stunden</td>
                <td class="px-6 py-3 text-green-600 font-medium">Empfohlen</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">6 Zyklen</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">9 Stunden</td>
                <td class="px-6 py-3 text-stone-500">Erholung</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Rechner berücksichtigt zusätzlich ~15 Minuten Einschlafzeit.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Jetzt deine Schlafzyklen berechnen</h3>
        <p class="text-stone-300 text-sm mb-5">Optimale Schlaf- oder Aufwachzeit — kostenlos und ohne Anmeldung.</p>
        <router-link
          :to="localePath('sleep')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Jetzt kostenlos berechnen &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Schlaf und Regeneration</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Guter Schlaf ist die Grundlage für Regeneration. Dein Körper braucht Schlaf und ausreichend Flüssigkeit. Berechne deinen <router-link :to="localeBlogPath('wasserbedarf-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">täglichen Wasserbedarf</router-link>, um die Regeneration optimal zu unterstützen.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Schlafqualität ist wichtiger als Schlafquantität. Nutze unseren <router-link :to="localePath('sleep')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schlafzyklen-Rechner</router-link>, um zur richtigen Zeit aufzuwachen und erholt in den Tag zu starten.
        </p>
      </div>

      <RelatedArticles slug="schlafzyklen-berechnen" />
    </div>
  </article>
</template>
