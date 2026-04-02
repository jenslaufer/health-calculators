<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Running Pace: Pace, Finish Time & Splits for Any Distance | Health Calculators',
  description: 'Calculate your running pace for 5K, 10K, half marathon, and marathon. Pace in min/km and min/mi, finish time, negative split strategy, and km/mile splits.',
  path: '/en/blog/calculate-running-pace',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Running Pace: Pace, Finish Time & Splits for Any Distance',
    description: 'Calculate your running pace for 5K, 10K, half marathon, and marathon. Pace in min/km and min/mi, finish time, negative split strategy, and km/mile splits.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-running-pace',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Running Pace: Pace, Finish Time & Splits for Any Distance</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 2, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>How fast do you need to run to hit your target time?</strong> Whether it's a 5K, 10K, half marathon, or marathon — your running pace determines how you distribute your energy and whether you reach your goal.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn how to calculate your running pace, what negative splits are, and how to use a splits table to plan your race.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is Pace?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pace describes the time it takes you to cover a specific distance. In most of the world, pace is measured in <strong>minutes per kilometer</strong> (min/km), while in the US it's measured in minutes per mile (min/mi).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          A pace of 5:00 min/km means you take 5 minutes per kilometer. For 10K, that's a 50-minute finish time.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Formula</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-lg font-semibold text-stone-900 text-center">Pace (min/km) = Total Time (min) &divide; Distance (km)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Example:</strong> 10K in 50 minutes:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">50 &divide; 10 = <strong>5:00 min/km</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Conversely, if you know your pace, you can calculate your finish time: Pace &times; Distance = Finish Time.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typical Pace Values by Distance</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Distance</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Beginner</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Intermediate</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Advanced</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-600">5K</td><td class="px-6 py-3 text-stone-900 font-medium">7:00–8:00</td><td class="px-6 py-3 text-stone-900 font-medium">5:00–6:00</td><td class="px-6 py-3 text-stone-900 font-medium">3:30–4:30</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">10K</td><td class="px-6 py-3 text-stone-900 font-medium">7:30–8:30</td><td class="px-6 py-3 text-stone-900 font-medium">5:15–6:15</td><td class="px-6 py-3 text-stone-900 font-medium">3:45–4:45</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Half Marathon</td><td class="px-6 py-3 text-stone-900 font-medium">7:45–9:00</td><td class="px-6 py-3 text-stone-900 font-medium">5:30–6:30</td><td class="px-6 py-3 text-stone-900 font-medium">4:00–5:00</td></tr>
              <tr><td class="px-6 py-3 text-stone-600">Marathon</td><td class="px-6 py-3 text-stone-900 font-medium">8:00–9:30</td><td class="px-6 py-3 text-stone-900 font-medium">5:40–6:45</td><td class="px-6 py-3 text-stone-900 font-medium">4:15–5:15</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Values in min/km. Individual results vary by age, fitness level, and terrain.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Pace Conversion: min/km to min/mi</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          One mile equals 1.609 km. Multiply your pace in min/km by 1.609 to get min/mi.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-700 text-center">5:00 min/km &times; 1.609 = <strong>8:03 min/mi</strong></p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Are Negative Splits?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A negative split strategy means running the second half faster than the first. This tactic is favored by elite runners because it:
        </p>
        <div class="space-y-3 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Conserves energy</h3>
            <p class="text-sm text-stone-500 leading-relaxed">A conservative start prevents you from depleting glycogen stores too early.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Boosts mental strength</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Passing other runners in the second half provides a psychological boost.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Prevents bonking</h3>
            <p class="text-sm text-stone-500 leading-relaxed">Starting too fast often leads to the dreaded "wall" around kilometer 30 in a marathon.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Our calculator generates a negative split plan with a 2.5% difference per half — a proven value from training practice.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your running pace now</h3>
        <p class="text-stone-300 text-sm mb-5">For 5K, 10K, half marathon, and marathon — free and no sign-up required.</p>
        <router-link
          to="/en/running-pace-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Using Splits in a Race</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A splits table shows you the planned time at each kilometer (or mile) marker. This way, you can check at every km marker whether you're on target.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Print your splits table or save it to your running watch. Many GPS watches allow you to set a virtual pacer at your target pace.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Pace and Calorie Burn</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Running faster burns more calories per minute, but not necessarily more per kilometer. Calculate your <router-link to="/en/blog/calculate-calories-burned" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calories burned</router-link> and optimize your training with the right <router-link to="/en/blog/calculate-heart-rate-zones" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">heart rate zones</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Your running pace is the key to successful race planning. Use our <router-link to="/en/running-pace-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Running Pace Calculator</router-link> for pace, finish time, negative splits, and a full splits table. Combine it with your <router-link to="/en/heart-rate-zones" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Heart Rate Zone Calculator</router-link> for optimal training.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-running-pace" />
    </div>
  </article>
</template>
