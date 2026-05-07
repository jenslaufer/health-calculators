<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Waist-to-Height Ratio (WHtR): Calculator, Risk & Ashwell Chart | Health Calculators',
  description: 'Calculate your waist-to-height ratio (WHtR). Ashwell classification, measurement guide, and why WHtR outperforms BMI as a cardiometabolic risk marker.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Waist-to-Height Ratio (WHtR): Calculator, Risk & Ashwell Chart',
    description: 'Calculate your waist-to-height ratio (WHtR). Ashwell classification, measurement guide, and why WHtR outperforms BMI as a cardiometabolic risk marker.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/calculate-waist-to-height-ratio',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Waist-to-Height Ratio (WHtR): Calculator, Risk &amp; Ashwell Chart</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>waist-to-height ratio</strong> (WHtR) is the simplest and arguably most informative single number for visceral abdominal fat — and therefore for the risk of cardiovascular disease, type&nbsp;2 diabetes and the metabolic syndrome.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article covers the formula, the Ashwell classification, how to measure correctly, and why WHtR outperforms <router-link to="/en/blog/calculate-bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> as a risk marker.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Formula</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
          <p class="text-lg font-semibold text-stone-900">WHtR = waist circumference &divide; height</p>
          <p class="text-sm text-stone-500 mt-2">both in the same unit (cm)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Rule of thumb: <strong>keep your waist below half your height.</strong> At 175 cm, that means a waist below 87.5 cm. Margaret Ashwell and colleagues established this «half-waist rule» in a 2012 meta-analysis as a robust screening criterion across populations.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ashwell Classification (2012)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">WHtR (under 40)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">WHtR (over 50)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>Underweight</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 0.40</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 0.40</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-600 mr-2"></span>Low risk</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.40 – 0.49</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.40 – 0.54</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Increased</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.50 – 0.54</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.55 – 0.59</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Substantially increased</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.55 – 0.59</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0.60 – 0.64</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Very high risk</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 0.60</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&ge; 0.65</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">Between ages 40 and 50 the boundaries shift up by 0.005.</p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Worked Example</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A 35-year-old woman with a waist of 85 cm and height of 175 cm:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <p class="text-base text-stone-700 tabular-nums">85 cm ÷ 175 cm = <strong class="text-stone-900">0.486</strong></p>
          <p class="text-sm text-stone-500 mt-2">Result: low risk per Ashwell.</p>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your WHtR now</h3>
        <p class="text-stone-300 text-sm mb-5">Ashwell-based risk classification — free, instant, no sign-up.</p>
        <router-link
          to="/en/waist-to-height-ratio-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open WHtR calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to measure correctly</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Measure in the morning, fasted, standing upright. Place the tape horizontally at navel height, snug but without compressing the skin. Exhale normally and hold the breath for the measurement. For accuracy, repeat twice and take the mean.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Measure height barefoot against a wall, with a straight back and head facing forward.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHtR vs. BMI vs. WHR</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <router-link to="/en/blog/calculate-bmi" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> uses only weight and height — it can't tell muscle from fat and ignores fat distribution. The <router-link to="/en/blog/calculate-waist-hip-ratio" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">waist-to-hip ratio (WHR)</router-link> captures distribution but requires two circumferences.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          WHtR combines the strengths: it captures abdominal fat with one extra measurement and scales across heights and sexes. In meta-analyses it predicted cardiometabolic risk better than both BMI and WHR.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          WHtR is fast to compute, easy to measure, and one of the most reliable single-number markers of visceral fat. Use our <router-link to="/en/waist-to-height-ratio-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">WHtR calculator</router-link> and combine it with <router-link to="/en/bmi-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> and <router-link to="/en/body-fat-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">body fat</router-link> for a complete picture.
        </p>
      </div>

      <RelatedArticlesEn slug="calculate-waist-to-height-ratio" />
    </div>
  </article>
</template>
