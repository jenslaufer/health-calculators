<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Calories Burned: How Many Calories You Really Burn | Health Calculators',
  description: 'Calculate calories burned with MET values. Formula, activity table, influencing factors and tips to boost your burn.',
  path: '/en/blog/calculate-calories-burned',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Calories Burned: How Many Calories You Really Burn',
    description: 'Calculate calories burned with MET values. Formula, activity table, influencing factors and tips to boost your burn.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-calories-burned',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Calories Burned: How Many Calories You Really Burn</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 2, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>How many calories do you burn running, swimming, or cycling?</strong> Calories burned depend on the activity, your weight, and the duration. The most scientifically grounded method uses MET values from the Compendium of Physical Activities.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn how the formula works, which activities burn the most calories, and how to increase your calorie burn.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Are MET Values?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MET stands for Metabolic Equivalent of Task. One MET equals the energy expenditure at rest — roughly 1 kcal per kilogram of body weight per hour. An activity with 5 METs burns five times as much energy as resting.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The Compendium of Physical Activities from Arizona State University catalogues over 800 activities with their MET values. These values are based on laboratory studies and are the gold standard for estimating calorie burn.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Formula</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-lg font-semibold text-stone-900 text-center">Calories = MET &times; Weight (kg) &times; Duration (hours)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Example:</strong> 30 minutes of running at 10 km/h (MET 9.8) at 80 kg body weight:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">9.8 &times; 80 &times; 0.5 = <strong>392 kcal</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The formula provides a solid estimate. Actual burn varies based on fitness level, temperature, and individual metabolic rate.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Calories Burned by Activity</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The following table shows estimated calorie burn per 30 minutes for an 80 kg person:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Activity</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">MET</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">kcal / 30 min</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">Walking (moderate)</td><td class="px-6 py-3 text-stone-900 font-medium">3.5</td><td class="px-6 py-3 text-stone-900 font-medium">140</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Cycling (moderate)</td><td class="px-6 py-3 text-stone-900 font-medium">6.8</td><td class="px-6 py-3 text-stone-900 font-medium">272</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Swimming (moderate)</td><td class="px-6 py-3 text-stone-900 font-medium">7.0</td><td class="px-6 py-3 text-stone-900 font-medium">280</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Running (10 km/h)</td><td class="px-6 py-3 text-stone-900 font-medium">9.8</td><td class="px-6 py-3 text-stone-900 font-medium">392</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">HIIT</td><td class="px-6 py-3 text-stone-900 font-medium">8.0</td><td class="px-6 py-3 text-stone-900 font-medium">320</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Yoga</td><td class="px-6 py-3 text-stone-900 font-medium">2.5</td><td class="px-6 py-3 text-stone-900 font-medium">100</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Stair climbing</td><td class="px-6 py-3 text-stone-900 font-medium">8.8</td><td class="px-6 py-3 text-stone-900 font-medium">352</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Factors That Affect Calorie Burn</h2>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Body Weight</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Heavier people burn more calories during the same activity. A 100 kg runner burns about 490 kcal in 30 minutes at 10 km/h — 25% more than an 80 kg person.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Intensity</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Higher intensity means a higher MET value and more calories burned. Interval training (HIIT) can burn more calories in less time than steady-state exercise.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Duration</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Calorie burn increases linearly with duration. Running for 60 minutes burns twice as much as 30 minutes — at the same intensity.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Afterburn Effect (EPOC)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              After intense exercise, your body continues to burn calories during recovery. This Excess Post-exercise Oxygen Consumption (EPOC) can account for 6–15% of workout calorie burn.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your calories burned now</h3>
        <p class="text-stone-300 text-sm mb-5">30+ activities — free and no sign-up required.</p>
        <router-link
          to="/en/calories-burned"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Calories Burned and Weight Loss</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          To lose one kilogram of body fat, you need a calorie deficit of about 7,700 kcal. Running three times a week for 30 minutes (392 kcal) burns roughly 1,176 kcal per week — equivalent to about 0.15 kg of fat.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Combine exercise with a moderate <router-link to="/en/blog/calculate-calorie-deficit" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calorie deficit</router-link> for sustainable results. Calculate your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> to get started.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Tips to Increase Your Calorie Burn</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>1. Add interval training:</strong> Alternating between high and low intensity burns more calories and increases the afterburn effect.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>2. Choose full-body exercises:</strong> Swimming, rowing, and burpees engage more muscle groups and increase energy expenditure.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>3. Boost daily activity:</strong> Take the stairs (8.8 METs) instead of the elevator, bike instead of drive. These NEAT calories (Non-Exercise Activity Thermogenesis) add up.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4. Build muscle mass:</strong> Muscle burns more calories at rest than fat tissue. Strength training increases your <router-link to="/en/blog/calculate-bmr" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">basal metabolic rate</router-link>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Limitations of the MET Method</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          MET values are averages from laboratory studies. Individual factors like fitness level, body composition, temperature, and terrain affect actual calorie burn. Heart rate monitors and fitness trackers can provide more precise values. Still, the MET method remains the best available estimate without specialized equipment.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your calorie burn depends on activity, weight, and duration. Use our <router-link to="/en/calories-burned" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Calories Burned Calculator</router-link> for a personalized estimate. Combine the result with your <router-link to="/en/tdee-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE</router-link> and <router-link to="/en/macro-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">macronutrients</router-link> for the full picture.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-calories-burned" />
    </div>
  </article>
</template>
