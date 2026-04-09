<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Lean Body Mass Calculator — What It Tells You About Your Fitness | Health Calculators',
  description: 'Calculate lean body mass using three scientific formulas: Boer, James and Hume. What LBM reveals about your fitness and why it matters more than body weight.',
  path: '/en/blog/calculate-lean-body-mass',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lean Body Mass Calculator — What It Tells You About Your Fitness',
    description: 'Calculate lean body mass using three scientific formulas: Boer, James and Hume. What LBM reveals about your fitness and why it matters more than body weight.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-lean-body-mass',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Lean Body Mass Calculator — What It Tells You About Your Fitness</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Lean body mass</strong> (LBM) is your body weight minus fat — muscles, bones, organs and water. It is one of the most meaningful metrics for fitness and health.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Unlike body weight alone, LBM shows how much "functional" mass you carry. Athletes with high muscle mass have a high LBM even if their <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> appears elevated.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Three Scientific Formulas</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Three established formulas exist for calculating lean body mass — each with a slightly different approach:
        </p>

        <div class="space-y-4 mb-6">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Boer Formula (1984)</h3>
            <p class="text-sm text-stone-600 mb-3">Based on weight and height — simple and widely used.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Male: 0.407 × W + 0.267 × H − 19.2</div>
              <div>Female: 0.252 × W + 0.473 × H − 48.3</div>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">James Formula (1976)</h3>
            <p class="text-sm text-stone-600 mb-3">Accounts for the weight-to-height ratio — more sensitive to overweight.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Male: 1.1 × W − 128 × (W/H)²</div>
              <div>Female: 1.07 × W − 148 × (W/H)²</div>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-bold text-stone-900 mb-2">Hume Formula (1966)</h3>
            <p class="text-sm text-stone-600 mb-3">One of the oldest formulas, derived from cadaver measurements — more conservative estimates.</p>
            <div class="bg-stone-50 rounded-lg p-3 font-mono text-sm text-stone-700">
              <div>Male: 0.3281 × W + 0.33929 × H − 29.5336</div>
              <div>Female: 0.29569 × W + 0.41813 × H − 43.2933</div>
            </div>
          </div>
        </div>
        <p class="text-sm text-stone-500">W = weight in kg, H = height in cm</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typical Reference Values</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Profile</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Weight</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">LBM (avg)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">LBM %</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Male, 180 cm, active</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~61 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~76%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Female, 165 cm, active</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~44 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~74%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Male, 175 cm, athlete</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">75 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~58 kg</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~77%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your lean body mass now</h3>
        <p class="text-stone-300 text-sm mb-5">Three formulas compared — free and no sign-up required.</p>
        <router-link
          :to="localePath('leanBodyMass')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why LBM Matters More Than Body Weight</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Two people with the same weight can have very different health profiles. Regular training builds muscle mass — weight rises, but LBM rises too. That is a positive sign.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Conversely, losing weight without training means losing not just fat but also muscle. LBM drops — a warning sign that body weight alone does not reveal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Combine LBM with your <router-link :to="localeBlogPath('calculate-body-fat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">body fat percentage</router-link> for a complete picture of your body composition.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Lean body mass is a more precise metric than body weight. Use our <router-link :to="localePath('leanBodyMass')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lean Body Mass Calculator</router-link> and complement the result with the <router-link :to="localePath('bodyFat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Body Fat Calculator</router-link> and the <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI Calculator</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-lean-body-mass" />
    </div>
  </article>
</template>
