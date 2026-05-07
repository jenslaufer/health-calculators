<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Corrected Calcium Calculator — Albumin Correction (Payne Formula) | Health Calculators',
  description: 'What is albumin-corrected calcium? Payne formula, normal ranges, hypoalbuminemia, and clinical relevance — with a free online calculator.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Corrected Calcium Calculator — Albumin Correction Explained',
      description: 'Albumin-corrected calcium with the Payne formula. Formula, normal ranges, indications, and limitations.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/corrected-calcium-calculator',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calculate corrected calcium',
      step: [
        { '@type': 'HowToStep', name: 'Measure total calcium', text: 'Serum total calcium from routine labs (mg/dL or mmol/L).' },
        { '@type': 'HowToStep', name: 'Measure albumin', text: 'Serum albumin from the same draw (g/dL or g/L).' },
        { '@type': 'HowToStep', name: 'Apply the Payne formula', text: 'Corrected Ca = Total Ca + 0.8 × (4.0 − Albumin [g/dL]).' },
        { '@type': 'HowToStep', name: 'Classify the result', text: 'Hypocalcemia < 8.5 mg/dL · Normal 8.5–10.2 mg/dL · Hypercalcemia > 10.2 mg/dL.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why correct calcium for albumin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'About 40% of serum calcium is bound to albumin. In hypoalbuminemia the total calcium falls falsely low even though ionized calcium may be normal.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is the Payne correction unreliable?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In severe acid-base disturbances, multiple myeloma, and critically ill patients. Ionized calcium is then the gold standard.',
          },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Corrected Calcium Calculator — Albumin Correction Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Albumin-corrected calcium</strong> (Payne formula) is a fast bedside method to adjust measured total calcium for the patient's albumin level. It detects <strong>pseudohypocalcemia</strong> from hypoalbuminemia and prevents unnecessary calcium replacement.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide covers why calcium binds to albumin, how the correction works in conventional and SI units, and when ionized calcium remains the gold standard.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Payne Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Payne formula adjusts total calcium toward a reference albumin of 4.0 g/dL (40 g/L):
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Corrected Ca [mg/dL] = Total Ca + 0.8 × (4.0 − Albumin [g/dL])</p>
        </div>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Corrected Ca [mmol/L] = Total Ca + 0.02 × (40 − Albumin [g/L])</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          When albumin equals 4.0 g/dL no correction occurs — total and corrected calcium are identical.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why Correct for Albumin?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Serum calcium exists in three fractions:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Ionized (~50%)</strong> — physiologically active</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Albumin-bound (~40%)</strong> — biologically inactive</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Complexed to anions (~10%)</strong> — phosphate, citrate</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          In hypoalbuminemia (cirrhosis, nephrotic syndrome, malnutrition) measured total calcium drops without affecting ionized calcium. Without correction, hypocalcemia is misdiagnosed.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference Ranges</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Corrected Calcium</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Classification</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 8.5 mg/dL · &lt; 2.12 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hypocalcemia</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">8.5 – 10.2 mg/dL · 2.12 – 2.55 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 10.2 mg/dL · &gt; 2.55 mmol/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Hypercalcemia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When the Calculator Is Unreliable</h2>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Severe acid-base disturbances</strong> — pH shifts directly alter calcium-albumin binding</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Multiple myeloma</strong> — paraproteins bind calcium and cause pseudohypercalcemia</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Critical care</strong> — fast dynamics, citrate anticoagulation, frequent transfusions</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          In these settings, <strong>ionized calcium</strong> remains the gold standard and should be measured directly.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related Lab Values</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Anion gap</strong> — closely related albumin-correction concept in metabolic acidosis. Use the <router-link :to="localePath('anionGap')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Anion Gap Calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sodium correction in hyperglycemia</strong> — analogous corrected-electrolyte concept. Use the <router-link :to="localePath('sodiumCorrection')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Sodium Correction Calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR (kidney function)</strong> — chronic kidney disease is a key cause of hypocalcemia. Use the <router-link :to="localePath('gfr')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR Calculator</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate corrected calcium now</h3>
        <p class="text-stone-300 text-sm mb-5">Enter total calcium and albumin — get the albumin-corrected concentration and clinical classification instantly.</p>
        <router-link
          :to="localePath('correctedCalcium')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Corrected Calcium Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FAQ</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Which corrected values count as hypocalcemia?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Corrected calcium &lt; 8.5 mg/dL (2.12 mmol/L) is hypocalcemia. Tetany, paresthesia, and cramps usually appear at much lower values — particularly with rapid drops.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Why a 0.8 correction factor?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Each 1 g/dL of albumin binds about 0.8 mg/dL of calcium. The factor comes from Payne et al. (1973) and is widely adopted clinically — though it remains empirical and population-dependent.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">When should I measure ionized calcium?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              In critical care, acid-base disturbances, massive transfusion (citrate), multiple myeloma, and any unclear case. Ionized calcium reflects the physiologically active fraction directly.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticlesEn />
  </article>
</template>
