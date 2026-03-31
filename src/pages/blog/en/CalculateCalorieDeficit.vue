<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Calorie Deficit: How to Lose Weight Safely | Health Calculators',
  description: 'Calculate your calorie deficit using the Mifflin-St Jeor formula. TDEE, safe deficit and the 7,700 kcal rule explained simply.',
  path: '/en/blog/calculate-calorie-deficit',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Calorie Deficit: How to Lose Weight Safely',
    description: 'Calculate your calorie deficit using the Mifflin-St Jeor formula. TDEE, safe deficit and the 7,700 kcal rule explained simply.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-calorie-deficit',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Calorie Deficit: How to Lose Weight Safely</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 27, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A <strong>calorie deficit</strong> is the only requirement for weight loss: You need to consume less energy than your body burns. How large the deficit should be depends on your target weight, time frame, and daily expenditure.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn how to calculate your <strong>personal calorie deficit</strong> — safely, sustainably, and backed by science.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 7,700 kcal Rule</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          One kilogram of body fat stores approximately <strong>7,700 kcal</strong> of energy. To lose 1 kg, you need to save a total of 7,700 kcal — through eating less, moving more, or both.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Total deficit = Weight loss goal (kg) &times; 7,700 kcal</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          For example, if you want to lose 5 kg, you need a total deficit of 38,500 kcal. Over 12 weeks, that's a daily deficit of about 460 kcal.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Step 1: Calculate TDEE with the Mifflin-St Jeor Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your <strong>TDEE (Total Daily Energy Expenditure)</strong> is your total daily calorie burn. It's based on your Basal Metabolic Rate (BMR), multiplied by an activity factor.
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Men: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age + 5</p>
          </div>
          <div class="bg-stone-50 border border-stone-200 rounded-lg p-4">
            <p class="text-sm font-semibold text-stone-900">Women: BMR = 10 &times; Weight(kg) + 6.25 &times; Height(cm) &minus; 5 &times; Age &minus; 161</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Learn more in our <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE guide</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Step 2: Calculate Daily Deficit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Divide the total deficit by the number of days in your time frame:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4 text-center">
          <p class="text-lg font-semibold text-stone-900">Daily deficit = Total deficit &divide; Days</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Your daily calorie target is then: <strong>TDEE &minus; daily deficit</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Safe Deficit: What to Keep in Mind</h2>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li>Never eat below <strong>1,200 kcal/day</strong> — nutrient deficiencies and metabolic problems can occur.</li>
          <li>Lose a maximum of <strong>0.5–1 kg per week</strong> — faster loss often leads to muscle loss and yo-yo effects.</li>
          <li>A moderate deficit of <strong>300–500 kcal/day</strong> is ideal for most people.</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Learn how to optimally split your calories into <router-link to="/en/blog/calculate-macros" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrients</router-link> in our macro guide.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your calorie deficit now</h3>
        <p class="text-stone-300 text-sm mb-5">Mifflin-St Jeor formula with personal calorie goal — free and no sign-up required.</p>
        <router-link
          to="/en/calorie-deficit-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          A calorie deficit is the key to weight loss. Calculate your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">daily calorie burn (TDEE)</router-link>, set a realistic goal, and use our <router-link to="/en/calorie-deficit-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Calorie Deficit Calculator</router-link> for your personal daily target.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-calorie-deficit" />
    </div>
  </article>
</template>
