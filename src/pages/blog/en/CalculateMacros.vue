<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Macronutrients: How to Split Protein, Carbs & Fat | Health Calculators',
  description: 'Calculate macronutrients based on your calorie needs and goals. Optimal distribution for weight loss, maintenance and muscle building.',
  path: '/en/blog/calculate-macros',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Macronutrients: How to Split Protein, Carbs & Fat',
    description: 'Calculate macronutrients based on your calorie needs and goals. Optimal distribution for weight loss, maintenance and muscle building.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-macros',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Macronutrients: How to Split Protein, Carbs &amp; Fat</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 25, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Calories alone only tell half the story. <strong>Macronutrients</strong> — protein, carbohydrates, and fat — determine how your body uses those calories: for muscle building, energy supply, or fat storage.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn how to calculate your optimal macro distribution and which split fits your goal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Three Macronutrients</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Protein — 4 kcal per gram</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Building blocks for muscles, enzymes, and hormones. Especially important during muscle building and dieting, as protein prevents muscle loss and keeps you full longer.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Carbohydrates — 4 kcal per gram</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Primary energy source for brain and muscles. Whole grains, fruits, and vegetables also provide fiber and micronutrients.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <h3 class="text-base font-semibold text-stone-900">Fat — 9 kcal per gram</h3>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              Important for hormone production, vitamin absorption, and cell membranes. Prefer unsaturated fats (olive oil, nuts, fish).
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Macro Distribution by Goal</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Goal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Protein</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Carbs</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Weight loss</td>
                <td class="px-6 py-3 text-stone-900 font-medium">40%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Maintenance</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">40%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Muscle building</td>
                <td class="px-6 py-3 text-stone-900 font-medium">30%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">45%</td>
                <td class="px-6 py-3 text-stone-900 font-medium">25%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your macronutrients now</h3>
        <p class="text-stone-300 text-sm mb-5">Personalized macro distribution — free and no sign-up required.</p>
        <router-link
          to="/en/macro-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">TDEE as the Foundation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Before you can distribute macros, you need your calorie target. First calculate your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE (daily calorie burn)</router-link> — that's the basis for everything else.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Don't forget to drink enough water either. Your <router-link to="/en/blog/calculate-water-intake" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">water intake</router-link> increases with protein consumption.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The right macro distribution is the key to reaching your goal. Calculate your <router-link to="/en/tdee-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>, use our <router-link to="/en/macro-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Macro Calculator</router-link>, and adjust the distribution to match your goal.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-macros" />
    </div>
  </article>
</template>
