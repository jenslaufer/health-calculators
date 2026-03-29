<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Calculate Waist-to-Hip Ratio: WHR, WHO Thresholds & Risk | Health Calculators',
  description: 'Calculate your waist-to-hip ratio (WHR) and assess health risk. WHO thresholds, measurement guide and why WHR is more meaningful than BMI.',
  path: '/en/blog/calculate-waist-hip-ratio',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Calculate Waist-to-Hip Ratio: WHR, WHO Thresholds & Risk',
    description: 'Calculate your waist-to-hip ratio (WHR) and assess health risk. WHO thresholds, measurement guide and why WHR is more meaningful than BMI.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-03-27',
    dateModified: '2026-03-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://jenslaufer.github.io/health-calculators/en/blog/calculate-waist-hip-ratio',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Calculate Waist-to-Hip Ratio: WHR, WHO Thresholds &amp; Risk</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">March 27, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>waist-to-hip ratio</strong> (WHR) is a simple indicator of body fat distribution. Unlike <router-link to="/en/blog/calculate-bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link>, it shows <em>where</em> the fat is located — and that's exactly what determines health risk.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          In this article, you'll learn what WHR is, how to measure it correctly, which WHO thresholds apply, and why the waist-to-hip ratio can be more meaningful than BMI.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is the Waist-to-Hip Ratio?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          WHR is calculated by dividing waist circumference by hip circumference. A high value indicates abdominal (belly-centered) fat distribution — a known risk factor for cardiovascular disease, type 2 diabetes, and metabolic syndrome.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-stone-900">WHR = Waist circumference &divide; Hip circumference</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to Measure Correctly: Step by Step</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">1</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Waist circumference</strong> — Measure at navel height, relaxed after exhaling. The tape should be level and snug without digging in.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">2</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Hip circumference</strong> — Measure at the widest point of the buttocks. Stand upright, feet together.</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center">3</div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Calculate</strong> — Divide waist circumference by hip circumference. Or use our <router-link to="/en/waist-hip-ratio-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHR Calculator</router-link>.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHO Thresholds</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The World Health Organization (WHO) defines the following thresholds for increased health risk:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risk Level</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Men</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Women</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Low risk</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&le; 0.85</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&le; 0.80</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Moderate risk</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.86 – 0.90</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.81 – 0.85</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>High risk</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 0.90</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 0.85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your waist-to-hip ratio now</h3>
        <p class="text-stone-300 text-sm mb-5">WHO-based risk assessment — free and no sign-up required.</p>
        <router-link
          to="/en/waist-hip-ratio-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHR vs. BMI: Why Fat Distribution Matters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <router-link to="/en/blog/calculate-bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> only measures the ratio of weight to height — it cannot distinguish between muscle and fat mass and says nothing about fat distribution.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          WHR specifically captures <strong>abdominal obesity</strong>. Studies show that belly fat (visceral fat) is metabolically more active and correlates more strongly with heart disease, stroke, and diabetes than subcutaneous fat.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Complement your WHR with your <router-link to="/en/blog/calculate-body-fat" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">body fat percentage</router-link> for a complete picture of your body composition.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The waist-to-hip ratio is a quick, free test for your health risk. Use our <router-link to="/en/waist-hip-ratio-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHR Calculator</router-link> and complement the result with your <router-link to="/en/bmi-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> and <router-link to="/en/body-fat-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">body fat percentage</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-waist-hip-ratio" />
    </div>
  </article>
</template>
