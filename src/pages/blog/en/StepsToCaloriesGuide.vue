<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Steps to Calories: How Many Calories in 10000 Steps? | Health Calculators',
  description: 'How many calories does 10000 steps burn? How far is 10000 steps in km? Formula, stride length, activity bands and the truth behind the magic 10000 number.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Steps to Calories: How Many Calories in 10000 Steps?',
      description: 'How many calories does 10000 steps burn? How far is 10000 steps in km? Formula, stride length, activity bands and the truth behind the magic 10000 number.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/steps-to-calories-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many calories does 10000 steps burn?',
          acceptedAnswer: { '@type': 'Answer', text: 'About 400 kcal at 70 kg, 457 kcal at 80 kg. Rule of thumb: kcal ≈ steps × 0.04 × (weight / 70) for moderate walking.' },
        },
        {
          '@type': 'Question',
          name: 'How far is 10000 steps in km?',
          acceptedAnswer: { '@type': 'Answer', text: 'At a 75 cm stride, 10000 steps is 7.5 km. Average stride length is roughly 41 % of body height.' },
        },
      ],
    },
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Steps to Calories: What 10000 Steps Really Means</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 9, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „10000 steps a day" is probably the most famous fitness rule of thumb in the world. But how many <strong>calories</strong> do you actually burn? And how many <strong>kilometres</strong> is that? The math is surprisingly simple — and the origin of the magic number 10000 is anything but scientific.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Below: the formula, hard numbers for different step counts, and a clear take on the 10000-step myth.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The rule of thumb</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A 70 kg person walking at a moderate pace (~5 km/h) burns about <strong>0.04 kcal per step</strong>. From that:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-5 mb-4 text-center">
          <p class="text-stone-900 font-semibold text-lg tabular-nums">kcal ≈ steps × 0.04 × (weight / 70)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Sources: Compendium of Physical Activities (Ainsworth 2011) and Tudor-Locke et al. 2008. The relationship is linear in the 60–110 kg range; outside it, energy cost scales slightly differently, with a typical error under ±15 %.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">10000 steps — the real numbers</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Weight</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">10000 steps</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Distance (75 cm stride)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 kg</td><td class="px-6 py-3 text-stone-600 tabular-nums">~343 kcal</td><td class="px-6 py-3 text-stone-600 tabular-nums">7.5 km</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">70 kg</td><td class="px-6 py-3 text-stone-600 tabular-nums">~400 kcal</td><td class="px-6 py-3 text-stone-600 tabular-nums">7.5 km</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80 kg</td><td class="px-6 py-3 text-stone-600 tabular-nums">~457 kcal</td><td class="px-6 py-3 text-stone-600 tabular-nums">7.5 km</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">90 kg</td><td class="px-6 py-3 text-stone-600 tabular-nums">~514 kcal</td><td class="px-6 py-3 text-stone-600 tabular-nums">7.5 km</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>In short:</strong> 10000 steps ≈ 7.5 km. Calories scale linearly with weight — heavier walkers burn more per step.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Stride length — the underrated factor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Distance depends on your personal stride length. <strong>Quick estimate:</strong> stride ≈ height × 0.41.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">5'5" (165 cm) → ~68 cm stride → 10000 steps = 6.8 km</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">5'9" (175 cm) → ~72 cm stride → 10000 steps = 7.2 km</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">6'1" (185 cm) → ~76 cm stride → 10000 steps = 7.6 km</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Want precision? Walk a marked 10 m, count steps, divide by 10 — done.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Activity bands — Tudor-Locke classification</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Catrine Tudor-Locke's pedometer research established these widely used bands:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Steps/day</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Classification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 5000</td><td class="px-6 py-3 text-stone-600">Sedentary</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5000 – 7499</td><td class="px-6 py-3 text-stone-600">Low active</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">7500 – 9999</td><td class="px-6 py-3 text-stone-600">Somewhat active</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10000 – 12499</td><td class="px-6 py-3 text-stone-600">Active</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 12500</td><td class="px-6 py-3 text-stone-600">Highly active</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 10000-steps myth</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The number didn't come from science. It came from a <strong>1965 Japanese marketing campaign</strong>: Yamasa launched the first commercial pedometer, the „Manpo-kei" — literally „10000-step meter". The round number stuck.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Decades later researchers actually checked. A widely cited JAMA Internal Medicine study (Lee et al. 2019) found mortality dropping noticeably from <strong>4400 steps</strong> upward, with the benefit plateauing near <strong>7500 steps</strong>. More is fine, but 10000 is a goal, not a threshold.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What shifts the estimate</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pace</strong> — strolling (&lt; 3 km/h) burns ~20 % less; brisk walking (&gt; 6 km/h) up to 30 % more.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Incline</strong> — uphill can double energy expenditure. Stairs are ridiculously efficient.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Surface</strong> — sand or soft ground demands up to 50 % more energy than asphalt.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Loads</strong> — backpacks, kids, groceries: every extra kilogram raises cost in proportion to total weight.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators &amp; reading</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Running pace</strong> — when walking grows into running. <router-link :to="localeBlogPath('calculate-running-pace')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Running pace article</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Calories burned by activity</strong> — compare walking vs. cycling vs. swimming. <router-link :to="localeBlogPath('calculate-calories-burned')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Calories burned article</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>TDEE</strong> — your full daily energy expenditure, where step calories live. <router-link :to="localeBlogPath('calculate-tdee')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">TDEE article</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Convert your steps now</h3>
        <p class="text-stone-300 text-sm mb-5">Steps, weight, optional stride — calories, km and activity level instantly.</p>
        <router-link
          :to="localePath('schritteKalorienRechner')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the steps calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Common questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Are fewer than 10000 steps still healthy?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Yes. The WHO recommends 150 minutes of moderate activity per week — roughly 7000 daily steps. Health benefits flatten out around 7500–10000; beyond that returns are marginal.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How accurate are smartphone step counters?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Modern phones count within ±5 % when carried on the body. Left on a desk, they miss everything. Smartwatches and fitness trackers are usually more reliable and don't depend on the phone being in pocket.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does brisk walking burn more than 0.04 kcal/step?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Yes — substantially. Power-walking at 6.5 km/h pushes energy cost to 0.05–0.06 kcal/step. Rule of thumb: if you can talk but not sing, you're in the right range.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Are 10000 steps enough to lose weight?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Rarely on their own. 10000 steps burn ~400 kcal — half a slice of pizza. Weight loss is an energy-balance game; steps are a great anchor habit but pair them with conscious nutrition.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
