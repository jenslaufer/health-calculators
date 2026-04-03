<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Keto Calculator: How to Calculate Your Keto Macros | Health Calculators',
  description: 'Calculate your keto macros — fat, protein and net carbs for the ketogenic diet. TDEE-based, personalized to your body and goals.',
  path: '/en/blog/keto-calculator-guide',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Keto Calculator: How to Calculate Your Keto Macros',
    description: 'Calculate your keto macros — fat, protein and net carbs for the ketogenic diet. TDEE-based, personalized to your body and goals.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/keto-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Keto Calculator: How to Calculate Your Keto Macros</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 3, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>ketogenic diet</strong> focuses on high fat, moderate protein and very low carbohydrates. The goal: push your body into ketosis, a metabolic state where fat replaces glucose as the primary fuel source.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide covers the science behind ketosis, the different keto approaches, and how to calculate your personalized macros.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is Ketosis?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          When carbohydrate intake drops below 20-50 g per day, glycogen stores deplete. The liver converts fatty acids into <strong>ketone bodies</strong> — acetoacetate, beta-hydroxybutyrate and acetone. These ketones replace glucose as fuel for the brain and muscles.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The transition into ketosis typically takes 2-7 days. Blood ketone levels of 0.5-3.0 mmol/L indicate nutritional ketosis.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Types of Keto</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Standard Keto (SKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              70-75% fat, 20-25% protein, 5-10% carbs. The classic approach for beginners and weight loss.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Targeted Keto (TKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Extra carbs around workouts. Ideal for athletes who need quick energy before training.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cyclical Keto (CKD)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              5 keto days followed by 2 higher-carb days. Suited for strength athletes who need to replenish glycogen stores.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to Calculate Keto Macros</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Step</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1. Calculate TDEE</td>
                <td class="px-6 py-3 text-stone-600">Mifflin-St Jeor + activity factor</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">2. Set calorie target</td>
                <td class="px-6 py-3 text-stone-600">Weight loss: -20%, maintain: 0%, muscle gain: +10%</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">3. Net carbs</td>
                <td class="px-6 py-3 text-stone-600">Default: 20 g (adjustable)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">4. Protein</td>
                <td class="px-6 py-3 text-stone-600">0.8 g per lb lean body mass (1.0 g for muscle gain)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">5. Fat</td>
                <td class="px-6 py-3 text-stone-600">Remaining calories &divide; 9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Common Mistakes &amp; Tips</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Watch your electrolytes</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              In ketosis, your body excretes more sodium, potassium, and magnesium. Supplement deliberately to avoid keto flu symptoms — headaches, fatigue, and cramps.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Don't overdo protein</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Excess protein can be converted to glucose via gluconeogenesis, potentially disrupting ketosis. Stick to your calculated amount.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Net carbs vs. total carbs</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Net carbs = total carbs minus fiber. Fiber doesn't impact blood sugar and doesn't count toward your keto carb limit.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your keto macros now</h3>
        <p class="text-stone-300 text-sm mb-5">Personalized keto macros based on your TDEE — free and no sign-up.</p>
        <router-link
          to="/en/keto-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related Calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Start by calculating your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> as the foundation for your calorie target. Compare with our general <router-link to="/en/blog/calculate-macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Macro Calculator</router-link>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Stay hydrated — your <router-link to="/en/blog/calculate-water-intake" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">water needs</router-link> increase in ketosis.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The ketogenic diet can help with weight loss, blood sugar control, and mental clarity. The key: the right macros, adequate electrolytes, and patience during the transition. Use our <router-link to="/en/keto-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Keto Calculator</router-link> for your personalized values.
        </p>
      </div>

      <RelatedArticlesEn slug="keto-calculator-guide" />
    </div>
  </article>
</template>
