<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Body Surface Area Calculator — BSA Formulas and Medical Uses | Health Calculators',
  description: 'Calculate body surface area (BSA) using Du Bois, Mosteller, Haycock, and Boyd formulas. Learn why BSA matters for chemotherapy dosing, burn assessment, and kidney function.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Body Surface Area Calculator — BSA Formulas and Medical Uses',
    description: 'Calculate body surface area using validated formulas. Medical applications: chemotherapy dosing, burn assessment, renal function.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-12',
    dateModified: '2026-04-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/body-surface-area-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Body Surface Area Calculator — BSA Formulas and Medical Uses</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 12, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Body surface area (BSA)</strong> is one of the most clinically important measurements in medicine. It drives chemotherapy dosing, burn severity assessment, and kidney function normalization.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains the four validated BSA formulas, how they differ, and which one to use in different clinical contexts.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is Body Surface Area?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Body surface area is the total external surface of the human body, measured in square meters (m²). For an average adult, BSA ranges from <strong>~1.6 m² (women)</strong> to <strong>~1.9 m² (men)</strong>. A newborn has approximately 0.2 m².
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-semibold text-stone-900 mb-2">Why BSA beats body weight for drug dosing</p>
          <p class="text-sm text-stone-600 leading-relaxed">
            Two patients can weigh the same but have very different body surface areas depending on their height. BSA-based dosing accounts for this variation, producing more consistent drug concentrations and better clinical outcomes.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Four Standard Formulas</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Several validated formulas exist for calculating BSA. They differ in precision, target population, and clinical adoption.
        </p>

        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Formula</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Year</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Key Feature</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Du Bois</td>
                <td class="px-6 py-3 text-stone-600">1916</td>
                <td class="px-6 py-3 text-stone-600">Oldest, most widely used; oncology standard</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Mosteller</td>
                <td class="px-6 py-3 text-stone-600">1987</td>
                <td class="px-6 py-3 text-stone-600">Simplest formula; NEJM-endorsed</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Haycock</td>
                <td class="px-6 py-3 text-stone-600">1978</td>
                <td class="px-6 py-3 text-stone-600">Best for children and adults; high precision</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium text-stone-900">Boyd</td>
                <td class="px-6 py-3 text-stone-600">1935</td>
                <td class="px-6 py-3 text-stone-600">Non-linear weight relationship; less common</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Du Bois (1916)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          The oldest BSA formula, still the most widely used in clinical practice — especially in oncology:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-4">
          BSA = 0.007184 × height (cm)^0.725 × weight (kg)^0.425
        </div>
        <p class="text-sm text-stone-500 leading-relaxed mb-6">
          For a 170 cm, 70 kg adult: BSA ≈ 1.81 m².
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Mosteller (1987)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          The simplest and most practical formula. Published in the New England Journal of Medicine and recommended for clinical use:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-6">
          BSA = √(height (cm) × weight (kg) / 3600)
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Haycock (1978)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Developed and validated for pediatric patients, also highly accurate in adults:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-6">
          BSA = 0.024265 × height (cm)^0.3964 × weight (kg)^0.5378
        </div>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Boyd (1935)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-3">
          Accounts for a non-linear relationship between weight and BSA. Less commonly used today:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm font-mono text-stone-700 mb-6">
          BSA = 0.0003207 × height (cm)^0.3 × weight (g)^(0.7285 − 0.0188 × log₁₀(weight (g)))
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Medical Applications</h2>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Chemotherapy Dosing</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          BSA is the standard basis for <strong>chemotherapy dosing</strong>. Since many cancer drugs have a narrow therapeutic window — too little fails, too much is toxic — doses are calculated in <strong>mg/m²</strong> to achieve consistent plasma concentrations across patients.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          For example, cisplatin is commonly dosed at 75–100 mg/m² every 3–4 weeks. With a BSA of 1.80 m², that equals 135–180 mg total dose.
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Burn Area Assessment</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In burn medicine, the percentage of total body surface area (TBSA) burned is estimated using the <strong>Rule of Nines</strong>: head 9%, each arm 9%, each thigh 9%, each lower leg 9%, front and back trunk 18% each. This percentage drives fluid resuscitation calculations.
        </p>

        <h3 class="text-xl font-bold text-stone-900 mb-3">Kidney Function (GFR)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-6">
          Glomerular filtration rate (GFR) is normalized to a standard BSA of <strong>1.73 m²</strong>. This BSA-adjusted GFR allows clinicians to compare kidney function across patients with different body sizes and make consistent treatment decisions.
        </p>
      </div>

      <!-- CTA box -->
      <div class="bg-stone-900 text-white rounded-xl p-8 mb-8">
        <h2 class="text-xl font-bold mb-2">Calculate Your Body Surface Area</h2>
        <p class="text-stone-300 text-sm mb-4">Compare all four BSA formulas with your own measurements instantly.</p>
        <router-link
          :to="localePath('bsa')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open BSA Calculator →</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Which Formula Should You Use?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The right formula depends on the clinical context:
        </p>
        <ul class="space-y-2 text-sm text-stone-600 mb-4">
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Oncology / chemo dosing:</strong> Du Bois — historical standard, well-validated in this setting.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>General clinical use:</strong> Mosteller — simple and accurate enough for most purposes.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Pediatrics:</strong> Haycock — developed and validated specifically for children.</span></li>
          <li class="flex gap-2"><span class="text-stone-400">•</span> <span><strong>Research:</strong> Report all formulas and acknowledge variability.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          For personal health awareness, the choice of formula matters little — differences between formulas are typically less than 2–3%. What matters is knowing your approximate BSA and understanding what it means for your health.
        </p>
      </div>

    </div>

    <RelatedArticles slug="body-surface-area-calculator" />
  </article>
</template>
