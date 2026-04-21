<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Anion Gap Calculator — Understanding Metabolic Acidosis | Health Calculators',
  description: 'What is the anion gap? Formula, normal ranges, albumin correction, and MUDPILES explained. Free online anion gap calculator.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Anion Gap Calculator — Understanding Metabolic Acidosis',
    description: 'What is the anion gap? Formula, normal ranges, albumin correction, and MUDPILES explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-21',
    dateModified: '2026-04-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/anion-gap',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Anion Gap Calculator — Understanding Metabolic Acidosis</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 21, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>anion gap (AG)</strong> is a simple calculated parameter from serum electrolytes that helps systematically narrow the cause of <strong>metabolic acidosis</strong>. It is one of the most important tools in emergency and critical care medicine.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how to calculate the anion gap, what the normal values mean, when albumin correction is necessary, and which diseases can cause an elevated anion gap.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The anion gap is the difference between the measured cation sodium and the measured anions chloride and bicarbonate:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">AG = Na⁺ − (Cl⁻ + HCO₃⁻)</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The reference range is <strong>8–12 mEq/L</strong> (without potassium). The "gap" exists because not all anions in serum are routinely measured — albumin, phosphate, and others contribute to charge neutrality.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Anion Gap</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Interpretation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">&lt; 8 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Low</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">8 – 12 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Normal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">13 – 20 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Mildly elevated</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">&gt; 20 mEq/L</td>
                <td class="px-6 py-3 text-stone-900 font-medium">High — High-AG acidosis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why Albumin Correction Matters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Albumin is the most important "unmeasured anion" in serum. In hypoalbuminemia (e.g., liver disease, malnutrition, critically ill patients) the anion gap is falsely low — a high-AG acidosis can be missed.
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-4">
          <p class="text-base font-mono text-stone-900 font-semibold">Corrected AG = AG + 2.5 × (4.0 − Albumin [g/dL])</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A patient with albumin 2.0 g/dL and AG 10 mEq/L has a corrected AG of 10 + 2.5 × (4.0 − 2.0) = <strong>15 mEq/L</strong> — a mildly elevated gap despite an apparently normal raw value.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">High-AG Acidosis: MUDPILES</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          An anion gap above 20 mEq/L suggests high-AG metabolic acidosis. The mnemonic <strong>MUDPILES</strong> helps recall the most important causes:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Letter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Cause</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">M</td><td class="px-6 py-3 text-stone-600">Methanol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">U</td><td class="px-6 py-3 text-stone-600">Uremia</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">D</td><td class="px-6 py-3 text-stone-600">Diabetic Ketoacidosis (DKA)</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">P</td><td class="px-6 py-3 text-stone-600">Propylene glycol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">I</td><td class="px-6 py-3 text-stone-600">Iron / Isoniazid</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">L</td><td class="px-6 py-3 text-stone-600">Lactic acidosis</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">E</td><td class="px-6 py-3 text-stone-600">Ethylene glycol</td></tr>
              <tr><td class="px-6 py-3 font-mono font-bold text-stone-900">S</td><td class="px-6 py-3 text-stone-600">Salicylates (aspirin)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Low Anion Gap</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          An AG below 8 mEq/L is less common but clinically relevant. Common causes include:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hypoalbuminemia</strong> — most common cause of a low anion gap</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hyperchloremia</strong> — e.g., from saline infusion or hyperchloremic acidosis</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Bromide intoxication</strong> — bromide is measured as chloride</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lithium therapy</strong> — lithium is a cation that lowers the AG</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related Lab Parameters</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The anion gap is part of a broader metabolic workup. Related parameters:
        </p>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GFR (Glomerular Filtration Rate)</strong> — kidney function is key for uremia and renal acidosis. Calculate your <router-link :to="localePath('gfr')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GFR value</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>HbA1c</strong> — long-term blood glucose for assessing diabetic decompensation. To the <router-link :to="localePath('hba1c')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">HbA1c Converter</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Blood Sugar</strong> — glucose is central to diagnosing DKA. To the <router-link :to="localePath('bloodSugar')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Blood Sugar Converter</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate Your Anion Gap Now</h3>
        <p class="text-stone-300 text-sm mb-5">Enter sodium, chloride, and bicarbonate — get an instant result and clinical interpretation.</p>
        <router-link
          :to="localePath('anionGap')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open Anion Gap Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Why is potassium omitted from the anion gap formula?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The classic formula AG = Na − (Cl + HCO₃) omits potassium because its concentration is much lower than sodium. Some formulas add potassium to sodium, which shifts the normal range slightly higher (to 10–14 mEq/L). Clinical practice typically uses the formula without potassium.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Can I calculate the anion gap without a blood gas?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Yes. Sodium and chloride come from the serum electrolyte panel; bicarbonate (HCO₃⁻) from a blood gas or as serum bicarbonate from a routine metabolic panel. Values from different draw times should not be mixed.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does the normal range apply to all patients?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The normal range of 8–12 mEq/L assumes normal albumin. In hypoalbuminemia the albumin-corrected anion gap must always be calculated, otherwise a high-AG acidosis can be missed.
            </p>
          </div>
        </div>
      </div>

    </div>

    <RelatedArticlesEn />
  </article>
</template>
