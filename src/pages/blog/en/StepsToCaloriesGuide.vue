<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Steps to Calories & km: What 10,000 Steps Really Burn | Health Calculators',
  description: 'How many calories does 10,000 steps burn? How far is that? Formula, activity levels and a quick reference table — in one guide.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Steps to Calories & km: What 10,000 Steps Really Burn',
    description: 'How many calories does 10,000 steps burn? How far is that? Formula, activity levels and a quick reference table — in one guide.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-09',
    dateModified: '2026-05-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/steps-to-calories-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Steps to Calories &amp; km: What 10,000 Steps Really Burn</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 9, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>10,000 steps</strong> is the most famous fitness benchmark in the world. But how many calories does it actually burn? And how far is that? The answers depend mostly on your body weight and stride length.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide gives you the formula, a reference table, and the activity tiers from Tudor-Locke &amp; Bassett.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For moderate walking (~5 km/h, ~3.5 MET) the rule of thumb is:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>Calories</strong> &asymp; Steps &times; 0.04 &times; (Weight / 70)</p>
          <p><strong>Distance (km)</strong> = Steps &times; Stride (cm) / 100,000</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The factor <strong>0.04 kcal per step</strong> comes from the Compendium of Physical Activities (Ainsworth et al., 2011) and applies to a 70 kg person. At other body weights, calories scale linearly.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference table</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Steps</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Distance (75 cm)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Calories (70 kg)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium">5,000</td><td class="px-6 py-3 text-stone-600">3.75 km</td><td class="px-6 py-3 text-stone-600">200 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">7,500</td><td class="px-6 py-3 text-stone-600">5.63 km</td><td class="px-6 py-3 text-stone-600">300 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">10,000</td><td class="px-6 py-3 text-stone-600">7.5 km</td><td class="px-6 py-3 text-stone-600">400 kcal</td></tr>
              <tr><td class="px-6 py-3 font-medium">12,500</td><td class="px-6 py-3 text-stone-600">9.38 km</td><td class="px-6 py-3 text-stone-600">500 kcal</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          At 80 kg, multiply the calories column by 80/70 ≈ 1.14: 10,000 steps → 457 kcal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Activity tiers</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Tudor-Locke &amp; Bassett (2004) classification is the most widely cited step scale:
        </p>
        <ul class="space-y-2 text-base text-stone-600 leading-relaxed">
          <li><strong>Sedentary:</strong> &lt;5,000 steps/day — typical office work without movement.</li>
          <li><strong>Low active:</strong> 5,000–7,499 — moderate everyday movement.</li>
          <li><strong>Somewhat active:</strong> 7,500–9,999 — deliberate walking habits.</li>
          <li><strong>Active:</strong> 10,000–12,499 — the WHO recommendation.</li>
          <li><strong>Highly active:</strong> ≥12,500 — athletic activity.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Stride length</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A typical stride is <strong>70–80 cm</strong>. For a personal estimate use <strong>height × 0.43</strong>:
        </p>
        <ul class="space-y-1 text-base text-stone-600 leading-relaxed">
          <li>165 cm tall → 71 cm stride</li>
          <li>175 cm tall → 75 cm stride</li>
          <li>185 cm tall → 80 cm stride</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          More accurate: walk 10 steps, measure the distance, divide by 10.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Convert steps to calories &amp; km</h3>
        <p class="text-stone-300 text-sm mb-5">See instantly what your step count burns — free, no sign-up.</p>
        <router-link
          :to="localePath('schritteKalorienRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Jogging burns considerably more per minute — pace it with the <router-link :to="localeBlogPath('calculate-running-pace')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">running pace calculator</router-link>. The full daily burn is in the <router-link :to="localeBlogPath('calculate-tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE calculator</router-link>; the resting baseline in the <router-link :to="localeBlogPath('calculate-bmr')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMR calculator</router-link>. For other activities use the <router-link :to="localeBlogPath('calculate-calories-burned')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calories burned calculator</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          10,000 steps is a useful target, but not magical. Studies show clear health benefits starting around 7,500 daily steps. Consistency matters more than the exact number — and a brisker pace adds more than just bumping the count. The <router-link :to="localePath('schritteKalorienRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">steps to calories calculator</router-link> shows calories, distance and activity level at a glance.
        </p>
      </div>

      <RelatedArticles slug="steps-to-calories-guide" />
    </div>
  </article>
</template>
