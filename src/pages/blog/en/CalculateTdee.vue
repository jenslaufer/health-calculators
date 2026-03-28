<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate TDEE: How to Determine Your Daily Calorie Burn | Health Calculators',
  description: 'Calculate TDEE using the Mifflin-St Jeor formula. Basal metabolic rate, activity factors and calorie goals for losing or gaining weight.',
  path: '/en/blog/calculate-tdee',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate TDEE: How to Determine Your Daily Calorie Burn',
    description: 'Calculate TDEE using the Mifflin-St Jeor formula. Basal metabolic rate, activity factors and calorie goals for losing or gaining weight.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-25',
    dateModified: '2026-03-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/en/blog/calculate-tdee',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate TDEE: How to Determine Your Daily Calorie Burn</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 25, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your <strong>TDEE (Total Daily Energy Expenditure)</strong> is the total number of calories your body burns in a day — including basal metabolism, digestion, and physical activity.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Knowing your TDEE is the most important step whether you want to <strong>lose weight</strong>, <strong>maintain</strong> your weight, or <strong>build muscle</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Basal Metabolic Rate (BMR) vs. TDEE</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your <strong>Basal Metabolic Rate (BMR)</strong> is the energy your body burns at rest — for breathing, heartbeat, and cell regeneration. TDEE multiplies BMR by an <strong>activity factor</strong>.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">TDEE = BMR &times; Activity Factor</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Mifflin-St Jeor Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Mifflin-St Jeor formula (1990) is considered the most accurate method for calculating basal metabolic rate:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Men: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Women: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age &minus; 161</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Activity Factors</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Activity Level</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Factor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Sedentary (office job)</td><td class="px-6 py-3 text-stone-900 font-medium">1.2</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Lightly active (1–3 days/week)</td><td class="px-6 py-3 text-stone-900 font-medium">1.375</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Moderately active (3–5 days/week)</td><td class="px-6 py-3 text-stone-900 font-medium">1.55</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Very active (6–7 days/week)</td><td class="px-6 py-3 text-stone-900 font-medium">1.725</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Extremely active (athlete)</td><td class="px-6 py-3 text-stone-900 font-medium">1.9</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your TDEE now</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor formula with calorie goals — free and no sign-up required.</p>
        <router-link
          to="/tdee"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">TDEE and Nutrition</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your TDEE determines your calorie goal. For <strong>weight loss</strong>, eat 500 kcal less; for <strong>muscle building</strong>, eat 500 kcal more. How to split those calories is covered in our <router-link to="/en/blog/calculate-macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrient guide</router-link>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Your <router-link to="/en/blog/calculate-bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> can also help you determine whether losing or gaining weight makes sense.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          TDEE is the foundation of any nutrition plan. Calculate your <router-link to="/tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">daily calorie burn</router-link> and use the result as a basis for your <router-link to="/macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrient distribution</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-tdee" />
    </div>
  </article>
</template>
