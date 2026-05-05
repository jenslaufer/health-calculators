<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

useHead({
  title: 'Thyroid Function Calculator: Read TSH, T3 and T4 Like a Pro | Health Calculators',
  description: 'Interpret TSH, free T3 and free T4 values. Hypothyroidism, hyperthyroidism, subclinical patterns and what each marker really tells you.',
  path: '/en/blog/thyroid-function-calculator',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Thyroid Function Calculator: Read TSH, T3 and T4 Like a Pro',
    description: 'Interpret TSH, free T3 and free T4 values. Hypothyroidism, hyperthyroidism, subclinical patterns and what each marker really tells you.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/thyroid-function-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Thyroid Function Calculator: Read TSH, T3 and T4 Like a Pro</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 5, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your lab report shows three values: <strong>TSH</strong>, <strong>free T4</strong>, and <strong>free T3</strong>. What does "elevated" actually mean? When does treatment matter — and when is it just monitoring?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains the pituitary–thyroid feedback loop, the ATA reference ranges, and the eight clinical patterns you'll see on a thyroid panel.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How the thyroid is regulated</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The thyroid produces <strong>T4 (thyroxine, ~80 %)</strong> and <strong>T3 (triiodothyronine, ~20 %)</strong>. T3 is the biologically active form — it acts on cells and controls metabolism, heart rate, and body temperature. T4 is the storage form, converted to T3 in tissues as needed.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The pituitary regulates output via <strong>TSH (thyroid-stimulating hormone)</strong> in a negative feedback loop: when thyroid hormones drop, the pituitary releases more TSH; when they rise, TSH is suppressed.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The diagnostic principle that follows: <strong>TSH moves opposite to thyroid function</strong>. High TSH points to underactivity, low TSH to overactivity.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference ranges</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Reference range</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Alternative units</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">TSH</td>
                <td class="px-6 py-3 text-stone-600">0.4 – 4.0 mIU/L</td>
                <td class="px-6 py-3 text-stone-600">= µIU/mL</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Free T4</td>
                <td class="px-6 py-3 text-stone-600">0.8 – 1.8 ng/dL</td>
                <td class="px-6 py-3 text-stone-600">10.3 – 23.2 pmol/L</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Free T3</td>
                <td class="px-6 py-3 text-stone-600">2.3 – 4.2 pg/mL</td>
                <td class="px-6 py-3 text-stone-600">3.5 – 6.5 pmol/L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Source: American Thyroid Association (ATA). Pregnancy, age, and lab method can shift the ranges.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The eight clinical patterns</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">TSH</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">fT4</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Pattern</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-green-600 font-semibold">Euthyroid</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">High</td><td class="px-6 py-3 text-stone-900">Low</td><td class="px-6 py-3 text-red-600 font-semibold">Primary hypothyroidism</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">High</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-yellow-600 font-semibold">Subclinical hypothyroidism</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Low</td><td class="px-6 py-3 text-stone-900">High</td><td class="px-6 py-3 text-red-600 font-semibold">Primary hyperthyroidism</td></tr>
              <tr><td class="px-6 py-3 text-stone-900">Low</td><td class="px-6 py-3 text-stone-900">Normal</td><td class="px-6 py-3 text-yellow-600 font-semibold">Subclinical hyperthyroidism</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hypothyroidism — when output is too low</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Most common cause: <strong>Hashimoto's thyroiditis</strong>, an autoimmune attack on the thyroid that gradually destroys tissue. T4 falls, TSH climbs. Symptoms: fatigue, weight gain, cold intolerance, constipation, dry skin, low mood.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Treatment: levothyroxine, taken on an empty stomach. Target TSH 0.5–2.5 mIU/L. Subclinical disease (TSH high, T4 normal) is often watched until TSH exceeds 10 mIU/L or symptoms appear.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hyperthyroidism — when output is too high</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Main causes: <strong>Graves' disease</strong> (autoimmune, TRAb antibodies), autonomous nodules, thyroiditis. Symptoms: palpitations, weight loss with normal appetite, heat intolerance, anxiety, insomnia, tremor.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Treatment depends on cause: anti-thyroid drugs (methimazole), radioactive iodine, or surgery. Subclinical hyperthyroidism needs monitoring because of atrial fibrillation and bone density risks.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Interpret your thyroid panel</h3>
        <p class="text-stone-300 text-sm mb-5">Enter TSH, free T3 and free T4 — instant pattern matching against ATA reference ranges.</p>
        <router-link
          to="/en/thyroid-function-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Thyroid hormones drive your <router-link to="/en/blog/calculate-bmr" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">basal metabolic rate</router-link> directly — hypothyroidism can cut it by up to 15 %. Your <router-link to="/en/blog/calculate-tdee" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">total daily energy expenditure</router-link> follows. If metabolic markers are off, also check your <router-link to="/en/blog/diabetes-risk-score" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk</router-link>, since Hashimoto's and type 1 diabetes commonly cluster together.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          TSH is the most sensitive marker; free T4 and free T3 fill in the picture when something looks off. Subclinical patterns are common and often need only follow-up. Use our <router-link to="/en/thyroid-function-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Thyroid Function Calculator</router-link> as orientation — not as a substitute for clinical evaluation.
        </p>
      </div>

      <RelatedArticlesEn slug="thyroid-function-calculator" />
    </div>
  </article>
</template>
