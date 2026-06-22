<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Creatinine Clearance Calculator Guide — Cockcroft-Gault Explained | Health Calculators',
  description: 'How to read your Cockcroft-Gault creatinine clearance: formula, normal ranges, CKD stages, drug-dosing role, and when CKD-EPI is the better tool.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Creatinine Clearance Calculator Guide — Cockcroft-Gault Explained',
      description: 'A practical guide to interpreting Cockcroft-Gault creatinine clearance: what the number means, how it relates to GFR, and when to use it.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/creatinine-clearance-calculator-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is creatinine clearance?',
          acceptedAnswer: { '@type': 'Answer', text: 'Creatinine clearance describes the volume of blood filtered free of creatinine per minute, serving as a surrogate for the glomerular filtration rate (GFR).' },
        },
        {
          '@type': 'Question',
          name: 'What is a normal value?',
          acceptedAnswer: { '@type': 'Answer', text: '90–140 mL/min in healthy young adults. Sustained < 60 mL/min for more than 3 months meets criteria for chronic kidney disease (CKD).' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Creatinine Clearance Calculator Guide — Cockcroft-Gault Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Creatinine clearance</strong> is one of the oldest and most widely cited markers of kidney function. It appears on virtually every drug label that mentions renal dose adjustment — and the <strong>Cockcroft-Gault formula</strong>, published in 1976, generates it from three routine values: age, body weight, and serum creatinine.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks through how the formula works, what your number means, when nephrology referral makes sense, and how Cockcroft-Gault relates to modern GFR estimators (CKD-EPI 2021).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What does creatinine clearance measure?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Creatinine is a by-product of muscle metabolism. Its production is fairly constant, and the kidneys eliminate almost all of it. <strong>Clearance</strong> is the volume of plasma cleared of creatinine per minute — and therefore an indirect measure of how many millilitres of blood your kidneys filter in the same time.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          That makes clearance a <strong>surrogate marker</strong> for the glomerular filtration rate (GFR). A direct measurement requires a 24-hour urine collection or inulin clearance — Cockcroft-Gault gives you a usable estimate from routine labs in seconds.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Cockcroft-Gault formula</h2>
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-4">
          <p class="text-base text-stone-900 font-medium mb-2 tabular-nums">CrCl = (140 − age) × weight (kg) / (72 × S<sub>Cr</sub> mg/dL)</p>
          <p class="text-sm text-stone-500">For women: result × 0.85</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Using SI units (µmol/L)? The calculator converts automatically: <span class="tabular-nums">88.4 µmol/L = 1 mg/dL</span>. The <strong>0.85 correction for women</strong> reflects, on average, lower muscle mass; without it, the formula would systematically overestimate clearance in women.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Interpreting your value</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Clearance</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Interpretation</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">CKD stage</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 90 mL/min</td>
                <td class="px-6 py-3 text-stone-600">Normal</td>
                <td class="px-6 py-3 text-stone-600">G1</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60 – 89</td>
                <td class="px-6 py-3 text-stone-600">Mildly decreased</td>
                <td class="px-6 py-3 text-stone-600">G2</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30 – 59</td>
                <td class="px-6 py-3 text-stone-600">Moderately decreased</td>
                <td class="px-6 py-3 text-stone-600">G3</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 29</td>
                <td class="px-6 py-3 text-stone-600">Severely decreased</td>
                <td class="px-6 py-3 text-stone-600">G4</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 15</td>
                <td class="px-6 py-3 text-stone-600">Kidney failure</td>
                <td class="px-6 py-3 text-stone-600">G5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          CKD stages <strong>G3 and below</strong> sustained for more than 3 months meet criteria for chronic kidney disease (KDIGO 2024). The lower the value, the more important dose adjustment, avoidance of nephrotoxic drugs, and nephrology co-management become.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Cockcroft-Gault vs. CKD-EPI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          KDIGO recommends <strong>CKD-EPI 2021</strong> as today's standard for estimating GFR — it is more accurate, especially in normal to mildly decreased function. Cockcroft-Gault still matters: many drug labels and older studies are anchored to it, which is why pharmacists keep using it.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Practical advice: <strong>compute both</strong>. eGFR helps stage kidney function; creatinine clearance drives concrete drug dosing.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When the formula misleads</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Obesity</strong> — body weight in the formula overstates active muscle volume. With BMI &gt; 30, ideal body weight or eGFR is often more honest.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sarcopenia / underweight</strong> — low muscle mass artificially lowers serum creatinine; clearance can look better than it is.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Acute kidney injury</strong> — the formula assumes a steady state. Rapidly rising creatinine breaks that assumption.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pregnancy</strong> — physiologically increased GFR. Cockcroft-Gault tends to underestimate.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Vegan diet</strong> — low meat intake lowers serum creatinine and may slightly overestimate clearance.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics & tools</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR calculator</strong> — modern eGFR via CKD-EPI 2021 complements creatinine clearance. Read the <router-link :to="localeBlogPath('gfr-calculator-kidney-function')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blood pressure</strong> — hypertension is the second leading cause of CKD globally. See <router-link :to="localeBlogPath('measure-blood-pressure')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">how to measure blood pressure correctly</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Diabetes risk</strong> — diabetes is the #1 driver of CKD worldwide. Check the <router-link :to="localeBlogPath('diabetes-risk-score')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">FINDRISC score</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Run your Cockcroft-Gault calculation</h3>
        <p class="text-stone-300 text-sm mb-5">Anonymous, instant. Supports kg/lbs and mg/dL/µmol/L.</p>
        <router-link
          :to="localePath('creatinineClearance')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Creatinine Clearance Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should I check clearance?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Once a year is enough for stable kidney function without risk factors. With diabetes, hypertension, new nephrotoxic medication, or known CKD G3+, every 3–6 months is reasonable.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My value is 65 mL/min — is that bad?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              That falls into CKD stage G2 (mildly decreased). On its own it is not a disease — what matters is the trend, presence of albuminuria, and the underlying cause. Discuss with your primary-care doctor.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Which drugs are nephrotoxic?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Common examples: NSAIDs (ibuprofen, diclofenac), aminoglycosides, contrast media, lithium, high-dose paracetamol, certain antibiotics. With clearance &lt; 60 mL/min, ask your pharmacist or doctor before starting any of them.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Do I need to fast before the blood test?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Not strictly. However, a large meat meal can transiently raise serum creatinine; many labs suggest avoiding meat for the 12 hours before the draw.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
