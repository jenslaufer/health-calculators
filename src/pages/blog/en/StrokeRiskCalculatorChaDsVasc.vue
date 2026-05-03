<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Stroke Risk Calculator (CHA₂DS₂-VASc) for Atrial Fibrillation | Health Calculators',
  description: 'Estimate stroke risk in atrial fibrillation with the CHA₂DS₂-VASc score. Risk factors, anticoagulation guidance per ESC guideline and tips to lower your risk.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stroke Risk Calculator (CHA₂DS₂-VASc) for Atrial Fibrillation',
    description: 'Estimate stroke risk in atrial fibrillation with the CHA₂DS₂-VASc score. Risk factors, anticoagulation guidance per ESC guideline and tips to lower your risk.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-03',
    dateModified: '2026-05-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/stroke-risk-calculator-cha2ds2-vasc',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Stroke Risk Calculator (CHA₂DS₂-VASc) for Atrial Fibrillation</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 3, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Atrial fibrillation (AF) is the most common sustained cardiac arrhythmia — and one of the strongest risk factors for stroke. Patients with AF have a <strong>5-fold higher stroke risk</strong> than people without it. The <strong>CHA₂DS₂-VASc score</strong> quantifies that risk and guides therapy.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains the score by <strong>Lip et al. (2010)</strong> and the <strong>2020 ESC guideline</strong>, the meaning of each component, and when oral anticoagulation is indicated.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the CHA₂DS₂-VASc score?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The CHA₂DS₂-VASc score was introduced in 2010 by Gregory Lip et al. as an extension of the older CHADS₂ score. It identifies "low-risk" patients who would otherwise still suffer strokes. The letters stand for:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Letter</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risk factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Points</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">C</td><td class="px-6 py-3 text-stone-600">Congestive heart failure</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">H</td><td class="px-6 py-3 text-stone-600">Hypertension</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">A₂</td><td class="px-6 py-3 text-stone-600">Age ≥ 75 years</td><td class="px-6 py-3 text-stone-600">2</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">D</td><td class="px-6 py-3 text-stone-600">Diabetes mellitus</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">S₂</td><td class="px-6 py-3 text-stone-600">Stroke / TIA / thromboembolism history</td><td class="px-6 py-3 text-stone-600">2</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">V</td><td class="px-6 py-3 text-stone-600">Vascular disease (CAD, PAD, aortic plaque)</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">A</td><td class="px-6 py-3 text-stone-600">Age 65–74 years</td><td class="px-6 py-3 text-stone-600">1</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Sc</td><td class="px-6 py-3 text-stone-600">Sex category — female</td><td class="px-6 py-3 text-stone-600">1</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The maximum is <strong>9 points</strong>. The higher the score, the higher the annual stroke risk without anticoagulation.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Annual stroke risk by score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Risk estimates are derived from the Swedish AF cohort study by Friberg et al. (Eur Heart J 2012, n = 90,490):
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Annual risk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Recommendation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">0</td><td class="px-6 py-3 text-stone-600">0.2 %</td><td class="px-6 py-3 text-stone-600">No OAC</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">1</td><td class="px-6 py-3 text-stone-600">0.6 %</td><td class="px-6 py-3 text-stone-600">Consider OAC</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2</td><td class="px-6 py-3 text-stone-600">2.2 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3</td><td class="px-6 py-3 text-stone-600">3.2 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4</td><td class="px-6 py-3 text-stone-600">4.8 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5</td><td class="px-6 py-3 text-stone-600">7.2 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6</td><td class="px-6 py-3 text-stone-600">9.7 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7</td><td class="px-6 py-3 text-stone-600">11.2 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">8–9</td><td class="px-6 py-3 text-stone-600">10.8–12.2 %</td><td class="px-6 py-3 text-stone-600">OAC recommended</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Adequate oral anticoagulation (OAC) reduces stroke risk by about <strong>64 %</strong> (Hart et al., Ann Intern Med 2007).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When is anticoagulation indicated?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The 2020 ESC guideline (Hindricks et al.) provides clear thresholds:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Men: from score ≥ 2</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              OAC is clearly recommended (Class I). First-line agents are direct oral anticoagulants (DOACs / NOACs) — apixaban, rivaroxaban, edoxaban, dabigatran. They outperform warfarin with similar efficacy and lower major bleeding risk.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Women: from score ≥ 3</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Because women automatically receive +1 point for sex, the threshold is one higher. <strong>Female sex alone</strong> is not an indication for anticoagulation.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Score 1 (men) / 2 (women): individual decision</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              OAC may be considered — based on bleeding risk (HAS-BLED score), patient preference, and adherence. Shared decision-making with a cardiologist is recommended.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bleeding risk: don't forget HAS-BLED</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Before starting OAC, the <strong>HAS-BLED score</strong> should also be assessed to estimate bleeding risk. A high HAS-BLED (≥ 3) is <em>not a contraindication</em> but a flag to address modifiable factors:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">Treat hypertension to target</li>
          <li class="text-base text-stone-600 leading-relaxed">Stop NSAIDs and aspirin where possible</li>
          <li class="text-base text-stone-600 leading-relaxed">Reduce alcohol intake</li>
          <li class="text-base text-stone-600 leading-relaxed">Avoid INR variability (with warfarin) or prefer DOACs</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your CHA₂DS₂-VASc score now</h3>
        <p class="text-stone-300 text-sm mb-5">8 risk factors, instant score, annual stroke risk and ESC anticoagulation guidance — anonymous and free.</p>
        <router-link
          :to="localePath('strokeRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to lower your stroke risk</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beyond anticoagulation, most CHA₂DS₂-VASc components are modifiable:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Blood pressure:</strong> target &lt; 130/80 mmHg — every 10 mmHg drop halves stroke risk</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Diabetes:</strong> aim for HbA1c &lt; 7.0 %, Mediterranean diet, exercise</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Cholesterol:</strong> LDL &lt; 70 mg/dL in high-risk patients — statins as indicated</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Smoking cessation:</strong> halves stroke risk within 5 years</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Exercise:</strong> 150 min/week of moderate activity reduces risk by 27 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Weight:</strong> BMI &lt; 30 — obesity drives both AF and stroke</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Because stroke risk is closely tied to cardiovascular comorbidities, take a look at the
          <router-link :to="localeBlogPath('measure-blood-pressure')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">blood pressure guide</router-link>
          (hypertension is the strongest modifiable risk factor),
          the <router-link :to="localeBlogPath('diabetes-risk-score')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk score</router-link>
          (FINDRISC) and the
          <router-link :to="localeBlogPath('cholesterol-ratio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">cholesterol ratio</router-link>
          as core markers of vascular health.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The CHA₂DS₂-VASc score is the international standard for stroke risk assessment in atrial fibrillation. From a score of 2 (men) or 3 (women), oral anticoagulation is recommended — it cuts stroke risk by roughly two thirds. Use our
          <router-link :to="localePath('strokeRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">CHA₂DS₂-VASc calculator</router-link>
          for self-assessment, and discuss any score ≥ 2 with your physician or cardiologist for optimal therapy.
        </p>
      </div>

      <RelatedArticles slug="stroke-risk-calculator-cha2ds2-vasc" />
    </div>
  </article>
</template>
