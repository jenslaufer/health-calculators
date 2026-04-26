<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should I correct sodium for hyperglycemia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Whenever serum glucose exceeds 200 mg/dL and sodium is abnormal. High glucose draws water into the extracellular space and lowers sodium by roughly 2.4 mEq/L per 100 mg/dL of glucose above 100 mg/dL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hillier or Katz — which formula is standard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hillier formula (factor 2.4) from 2018 is today’s standard. The older Katz formula (factor 1.6) from 1973 underestimates the correction and is now rarely used.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is pseudohyponatremia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apparent hyponatremia caused by hyperglycemia, hyperlipidemia, or hyperproteinemia. Once corrected, sodium is normal — there is no true deficit. Classic in diabetic ketoacidosis (DKA).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert glucose from mmol/L to mg/dL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiply mmol/L by 18.0182. Example: 22.2 mmol/L × 18 ≈ 400 mg/dL.',
      },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Calculate corrected sodium for hyperglycemia',
  description: 'Three steps to correct serum sodium with the Hillier formula.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Gather values',
      text: 'Read measured serum sodium (mEq/L) and glucose (mg/dL or mmol/L) from the lab report.',
    },
    {
      '@type': 'HowToStep',
      name: 'Compute the difference',
      text: 'Subtract 100 mg/dL from glucose, then divide by 100.',
    },
    {
      '@type': 'HowToStep',
      name: 'Add the correction',
      text: 'Multiply the result by 2.4 (Hillier) and add to measured sodium.',
    },
  ],
}

useHead({
  title: 'Sodium Correction for Hyperglycemia | Health Calculators',
  description: 'Corrected serum sodium in hyperglycemia: Hillier formula, pseudohyponatremia, DKA, and clinical context — with a free online calculator.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Sodium Correction for Hyperglycemia',
      description: 'Corrected serum sodium in hyperglycemia: Hillier formula, pseudohyponatremia, DKA, and clinical context.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-26',
      dateModified: '2026-04-26',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/sodium-correction-calculator',
      },
    },
    faqJsonLd,
    howToJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Sodium Correction for Hyperglycemia</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 26, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A low serum <strong>sodium</strong> in a patient with high blood glucose is often not a true hyponatremia — it's a downstream effect of the hyperglycemia. Treating the wrong number can do real harm.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks through the <strong>Hillier formula (2018)</strong>, the legacy Katz formula, the concept of pseudohyponatremia, and the clinical interpretation in diabetic ketoacidosis (DKA).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The modern Hillier formula corrects sodium by 2.4 mEq/L for each 100 mg/dL of glucose above 100 mg/dL:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Corrected Na = Measured Na + 2.4 × ((Glucose − 100) / 100)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Katz's 1973 formula uses a factor of 1.6 and underestimates the correction. Hillier's 1999/2018 hypertonic glucose-infusion experiments showed 2.4 fits real-world data better.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Clinical context: DKA &amp; pseudohyponatremia</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Consider a patient in DKA: glucose 600 mg/dL, sodium 130 mEq/L. At first glance — hyponatremia. With Hillier:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-sm font-mono text-stone-900">130 + 2.4 × ((600 − 100) / 100) = 130 + 12 = <strong>142 mEq/L</strong></p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Corrected sodium is normal — this is <strong>pseudohyponatremia</strong> from the hyperglycemia, not a true sodium deficit. Treatment targets glucose, not sodium.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference ranges</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Corrected sodium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Classification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 135 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hyponatremia</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">135 – 145 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 145 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hypernatremia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Step-by-step</h2>
        <ol class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">1.</span>
            <span class="text-stone-600 text-base"><strong>Gather the lab values:</strong> serum sodium (mEq/L) and glucose (mg/dL or mmol/L).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">2.</span>
            <span class="text-stone-600 text-base"><strong>Compute the difference:</strong> subtract 100 from glucose, divide by 100.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-bold text-stone-900 shrink-0">3.</span>
            <span class="text-stone-600 text-base"><strong>Add the correction:</strong> multiply by 2.4 (Hillier) and add to measured sodium.</span>
          </li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blood sugar converter</strong> — convert glucose between mg/dL and mmol/L. Open the <router-link :to="localePath('bloodSugar')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">blood sugar converter</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Diabetes risk score</strong> — FINDRISC for type-2 diabetes. Open the <router-link :to="localePath('diabetesRisk')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">diabetes risk calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>HbA1c converter</strong> — long-term glycemia between %, mmol/mol, and average glucose. Open the <router-link :to="localePath('hba1c')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">HbA1c converter</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate corrected sodium now</h3>
        <p class="text-stone-300 text-sm mb-5">Enter sodium and glucose — get a corrected value and clinical classification instantly.</p>
        <router-link
          :to="localePath('sodiumCorrection')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Sodium Correction Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">When should I correct sodium for hyperglycemia?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Whenever serum glucose exceeds 200 mg/dL and sodium is abnormal. High glucose draws water into the extracellular space and lowers sodium by roughly 2.4 mEq/L per 100 mg/dL of glucose above 100 mg/dL.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Hillier or Katz — which formula is standard?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The Hillier formula (factor 2.4) from 2018 is today's standard. The older Katz formula (factor 1.6) from 1973 underestimates the correction and is now rarely used.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What is pseudohyponatremia?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Apparent hyponatremia caused by hyperglycemia, hyperlipidemia, or hyperproteinemia. Once corrected, sodium is normal — there is no true deficit. Classic in diabetic ketoacidosis (DKA).
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How do I convert glucose from mmol/L to mg/dL?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Multiply mmol/L by 18.0182. Example: 22.2 mmol/L × 18 ≈ 400 mg/dL.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticlesEn />
  </article>
</template>
