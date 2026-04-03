<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate One Rep Max: Estimate Your 1RM With Four Formulas | Health Calculators',
  description: 'Calculate your one-rep max (1RM) using Epley, Brzycki, Lombardi and O\'Conner formulas. Percentage chart and practical tips.',
  path: '/en/blog/calculate-one-rep-max',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate One Rep Max: Estimate Your 1RM With Four Formulas',
    description: 'Calculate your one-rep max (1RM) using Epley, Brzycki, Lombardi and O\'Conner formulas. Percentage chart and practical tips.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-one-rep-max',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate One Rep Max: Estimate Your 1RM With Four Formulas</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 2, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>How much can you lift at maximum?</strong> The one-rep max (1RM) is the heaviest weight you can lift for a single repetition with proper form. It's the most important metric in strength training for planning training loads and tracking progress.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn how to safely estimate your 1RM from submaximal sets, which formulas exist, and how to use the results for your training.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is the One Rep Max?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The one-rep max (1RM) describes the maximum weight you can lift for exactly one repetition on a given exercise. It serves as the reference for training programming: percentages of your 1RM determine how heavy you should train across different rep ranges.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Rather than testing your true maximum (high injury risk), most athletes use estimation formulas. You lift a weight for multiple reps and calculate your 1RM from that.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Four Formulas</h2>

        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Epley (Default)</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = weight &times; (1 + reps / 30)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">The most widely used formula. Works well for 2&ndash;10 reps.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Brzycki</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = weight &times; 36 / (37 &minus; reps)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">Produces similar results to Epley at low rep counts, diverges at higher reps.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Lombardi</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = weight &times; reps<sup>0.10</sup></p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">An exponential approach that estimates more conservatively at high rep counts.</p>
          </div>

          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">O'Conner</h3>
            <div class="bg-stone-50 rounded-lg p-4 mb-2">
              <p class="text-base font-semibold text-stone-900 text-center">1RM = weight &times; (1 + reps &times; 0.025)</p>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">A simple linear formula. Tends to estimate slightly lower than Epley.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Example Calculation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Example:</strong> You bench press 100 kg for 5 reps:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Formula</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Estimated 1RM</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Epley</td><td class="px-6 py-3 text-stone-900 font-medium">117 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Brzycki</td><td class="px-6 py-3 text-stone-900 font-medium">113 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Lombardi</td><td class="px-6 py-3 text-stone-900 font-medium">117 kg</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">O'Conner</td><td class="px-6 py-3 text-stone-900 font-medium">113 kg</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The formulas typically fall within a 5% range. For training programming, use the average or the most conservative estimate.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your one rep max now</h3>
        <p class="text-stone-300 text-sm mb-5">Four formulas, percentage chart &mdash; free and no sign-up required.</p>
        <router-link
          to="/en/one-rep-max-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Percentage Chart</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Use your 1RM to calculate training weights for different goals:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">% of 1RM</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Reps</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Training Goal</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">90&ndash;100%</td><td class="px-6 py-3 text-stone-900 font-medium">1&ndash;3</td><td class="px-6 py-3 text-stone-500">Max strength</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">80&ndash;90%</td><td class="px-6 py-3 text-stone-900 font-medium">3&ndash;6</td><td class="px-6 py-3 text-stone-500">Strength</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">70&ndash;80%</td><td class="px-6 py-3 text-stone-900 font-medium">6&ndash;12</td><td class="px-6 py-3 text-stone-500">Hypertrophy</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">50&ndash;70%</td><td class="px-6 py-3 text-stone-900 font-medium">12&ndash;20</td><td class="px-6 py-3 text-stone-500">Muscular endurance</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tips for Accurate Results</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>1. Use 3&ndash;8 reps:</strong> The formulas are most accurate in this range. Beyond 10 reps, estimation error increases.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>2. Strict form:</strong> Only with proper technique will the results be realistic. Cheated reps skew the estimate.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>3. Test while fresh:</strong> Perform the test at the beginning of your workout, not after fatigue. A proper warm-up is essential.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4. Update regularly:</strong> Your 1RM changes with training. Retest every 4&ndash;6 weeks to adjust your working weights.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">1RM and Nutrition</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your strength potential also depends on nutrition. Adequate <router-link to="/en/blog/protein-intake-guide" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">protein</router-link> supports muscle building and recovery. Combine your 1RM training with an appropriate <router-link to="/en/blog/calculate-calories-burned" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calorie burn</router-link> estimate and your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your one rep max is the foundation for effective training programming. Use our <router-link to="/en/one-rep-max-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">1RM Calculator</router-link> for a quick estimate with four formulas and a percentage chart. Combine the result with your <router-link to="/en/protein-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">protein intake</router-link> and <router-link to="/en/macro-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macros</router-link> for optimal results.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-one-rep-max" />
    </div>
  </article>
</template>
