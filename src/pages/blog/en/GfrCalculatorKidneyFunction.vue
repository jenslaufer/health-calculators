<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'GFR Calculator — Understanding eGFR & Kidney Function | Health Calculators',
  description: 'Calculate eGFR using CKD-EPI 2021 and understand your kidney function. What do GFR values mean, CKD stages G1–G5, and when to see a doctor.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GFR Calculator — Understanding eGFR & Kidney Function',
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/gfr-calculator-kidney-function',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">
        &larr; Blog
      </router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">
        GFR Calculator — Understanding eGFR &amp; Kidney Function
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>glomerular filtration rate (GFR)</strong> is the most important marker for assessing kidney function. It measures how much blood your kidneys filter per minute. A low value indicates impaired kidney function.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Because directly measuring GFR is complex, clinical practice uses the <strong>estimated GFR (eGFR)</strong>, calculated from serum creatinine, age, and sex. The <strong>CKD-EPI 2021 equation</strong> is the current gold standard.
        </p>
      </div>

      <!-- What is GFR -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Is Glomerular Filtration Rate?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The glomeruli are tiny filtering units in the kidneys — about one million per kidney. Together they filter roughly <strong>180 liters of blood per day</strong>, corresponding to an eGFR of 90–120 mL/min/1.73 m² in healthy adults.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          eGFR is normalized to a standard body surface area of <strong>1.73 m²</strong> to allow comparison between people of different sizes. Values above 60 are generally sufficient for everyday life; below that, chronic kidney disease (CKD) is indicated.
        </p>
      </div>

      <!-- CKD-EPI 2021 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The CKD-EPI 2021 Equation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>CKD-EPI 2021</strong> (Chronic Kidney Disease Epidemiology Collaboration) is the equation recommended by <strong>KDIGO</strong> (Kidney Disease: Improving Global Outcomes). It replaced the older CKD-EPI 2009, which included a race-based correction factor that has since been removed for equity and accuracy reasons.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">CKD-EPI 2021 Equation</div>
          <div class="font-mono text-sm text-stone-800 leading-relaxed">
            eGFR = 142 × min(Scr/κ, 1)<sup>α</sup> × max(Scr/κ, 1)<sup>−1.200</sup> × 0.9938<sup>Age</sup> × 1.012 [if female]
          </div>
          <div class="mt-4 text-sm text-stone-500 space-y-1">
            <div>κ = 0.7 (female) | 0.9 (male)</div>
            <div>α = −0.241 (female) | −0.302 (male)</div>
            <div>Scr = serum creatinine in mg/dL</div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Compared to the older MDRD formula, CKD-EPI is more accurate in the normal and mildly elevated range — precisely where early kidney damage needs to be detected.
        </p>
      </div>

      <!-- CKD Stages table -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">CKD Stages (KDIGO)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          KDIGO classifies chronic kidney disease into six stages:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stage</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">eGFR (mL/min/1.73m²)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-semibold text-green-700">G1</td>
                <td class="px-6 py-3 text-stone-700">≥ 90</td>
                <td class="px-6 py-3 text-stone-600">Normal or high</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-lime-700">G2</td>
                <td class="px-6 py-3 text-stone-700">60 – 89</td>
                <td class="px-6 py-3 text-stone-600">Mildly decreased</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-yellow-600">G3a</td>
                <td class="px-6 py-3 text-stone-700">45 – 59</td>
                <td class="px-6 py-3 text-stone-600">Mildly to moderately decreased</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-orange-600">G3b</td>
                <td class="px-6 py-3 text-stone-700">30 – 44</td>
                <td class="px-6 py-3 text-stone-600">Moderately to severely decreased</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-red-600">G4</td>
                <td class="px-6 py-3 text-stone-700">15 – 29</td>
                <td class="px-6 py-3 text-stone-600">Severely decreased</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-red-800">G5</td>
                <td class="px-6 py-3 text-stone-700">&lt; 15</td>
                <td class="px-6 py-3 text-stone-600">Kidney failure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500">
          <strong>Important:</strong> A single eGFR value is not a diagnostic criterion. CKD is only diagnosed when abnormalities persist for at least 3 months.
        </p>
      </div>

      <!-- Creatinine and unit conversion -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Serum Creatinine: mg/dL and µmol/L</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Creatinine is a metabolic byproduct of muscle activity. It is almost exclusively eliminated by the kidneys, making elevated creatinine a marker of reduced filtration.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Creatinine is reported in <strong>mg/dL</strong> in the US and some countries, and in <strong>µmol/L</strong> elsewhere. The conversion:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="font-mono text-sm text-stone-800 space-y-1">
            <div>mg/dL = µmol/L ÷ 88.42</div>
            <div>µmol/L = mg/dL × 88.42</div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Normal values: men 0.7–1.2 mg/dL (62–106 µmol/L), women 0.5–1.0 mg/dL (44–88 µmol/L). Older adults and people with low muscle mass tend to have lower values.
        </p>
      </div>

      <!-- When to see a doctor -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When to See a Doctor</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-lime-700 text-sm pt-0.5">G2</div>
            <p class="text-sm text-stone-600 leading-relaxed">Inform your primary care doctor and have risk factors (blood pressure, blood sugar) monitored regularly.</p>
          </div>
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-yellow-600 text-sm pt-0.5">G3a</div>
            <p class="text-sm text-stone-600 leading-relaxed">Regular follow-up visits with your primary care doctor or nephrologist (at least once a year).</p>
          </div>
          <div class="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-orange-600 text-sm pt-0.5">G3b</div>
            <p class="text-sm text-stone-600 leading-relaxed">See a nephrologist. Close monitoring and medication adjustments are required.</p>
          </div>
          <div class="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div class="w-14 shrink-0 font-semibold text-red-700 text-sm pt-0.5">G4 / G5</div>
            <p class="text-sm text-stone-600 leading-relaxed">Urgent nephrology referral. Discuss preparation for dialysis or kidney transplantation.</p>
          </div>
        </div>
      </div>

      <!-- Related calculators -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related Health Calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Kidney function is closely linked to other health parameters. These calculators help with a comprehensive assessment:
        </p>
        <ul class="space-y-2 text-sm text-stone-600">
          <li>
            <router-link :to="localePath('bloodPressure')" class="text-stone-800 font-medium hover:underline">
              Blood Pressure Calculator
            </router-link>
            — Hypertension is one of the most common causes of kidney disease.
          </li>
          <li>
            <router-link :to="localePath('bloodSugar')" class="text-stone-800 font-medium hover:underline">
              Blood Sugar Converter
            </router-link>
            — Diabetes is the second most common cause of CKD.
          </li>
          <li>
            <router-link :to="localePath('bmi')" class="text-stone-800 font-medium hover:underline">
              BMI Calculator
            </router-link>
            — Obesity increases the risk of kidney and cardiovascular disease.
          </li>
        </ul>
      </div>

      <RelatedArticles />
    </div>
  </article>
</template>
