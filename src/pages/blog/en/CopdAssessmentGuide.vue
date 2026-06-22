<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'COPD Assessment Guide — CAT, mMRC, and GOLD Group Explained | Health Calculators',
  description: 'Quantify COPD symptom burden and exacerbation risk with mMRC, CAT, and GOLD 2023 ABE classification. Score interpretation, thresholds, and treatment cues.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'COPD Assessment Guide — CAT, mMRC, and GOLD Group Explained',
      description: 'mMRC + CAT + exacerbations → GOLD 2023 group A/B/E. A practical, validated way to assess COPD impact and risk.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/copd-assessment-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are GOLD groups A, B, and E?',
          acceptedAnswer: { '@type': 'Answer', text: 'GOLD 2023 uses three groups: A (few symptoms, low risk), B (many symptoms, low risk), E (≥ 2 moderate or ≥ 1 hospitalized exacerbation in 12 months).' },
        },
        {
          '@type': 'Question',
          name: 'mMRC vs CAT — what is the difference?',
          acceptedAnswer: { '@type': 'Answer', text: 'mMRC measures dyspnea only, on a 0–4 scale. CAT covers eight symptom and quality-of-life dimensions and yields a 0–40 score; GOLD prefers it for monitoring.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">COPD Assessment Guide — CAT, mMRC, and GOLD Group Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Chronic obstructive pulmonary disease (COPD)</strong> is more than "cough and breathlessness." How much the disease actually limits you — and how high your risk is for a serious flare — can be measured. That is the job of the <strong>COPD assessment</strong>: three validated tools, one clean assignment to <strong>GOLD group A, B, or E</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks through mMRC, CAT, and exacerbation history, how GOLD 2023 derives the group, and what it means for therapy.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Three tools, one verdict</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          GOLD (Global Initiative for Chronic Obstructive Lung Disease) recommends combining three validated instruments:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>mMRC</strong> (modified Medical Research Council scale) — dyspnea grade 0 to 4 (Bestall, Thorax 1999).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>CAT</strong> (COPD Assessment Test) — 8 items × 0–5 each, total 0–40 (Jones, Eur Respir J 2009).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Exacerbations</strong> in the last 12 months — moderate count + hospitalizations.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">mMRC — the dyspnea scale</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Grade</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium tabular-nums">0</td><td class="px-6 py-3 text-stone-600">Breathless only with strenuous exercise</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">1</td><td class="px-6 py-3 text-stone-600">Hurrying or walking up a slight hill</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">2</td><td class="px-6 py-3 text-stone-600">Walks slower than peers, has to stop</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">3</td><td class="px-6 py-3 text-stone-600">Stops after 100 m or after a few minutes</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">4</td><td class="px-6 py-3 text-stone-600">Too breathless to leave home or to dress</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The threshold for "many symptoms" is <strong>mMRC ≥ 2</strong>. It separates GOLD A from B (in patients at low exacerbation risk).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">CAT — the symptom score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          CAT covers eight domains: cough, phlegm, chest tightness, breathlessness on exertion, activities at home, confidence leaving home, sleep, and energy. Each item is rated 0–5, total <strong>0–40</strong>:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">CAT score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Impact</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 font-medium tabular-nums">&lt; 10</td><td class="px-6 py-3 text-stone-600">Low</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">10 – 20</td><td class="px-6 py-3 text-stone-600">Medium</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">21 – 30</td><td class="px-6 py-3 text-stone-600">High</td></tr>
              <tr><td class="px-6 py-3 font-medium tabular-nums">31 – 40</td><td class="px-6 py-3 text-stone-600">Very high</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Clinically meaningful change: <strong>≥ 2 points</strong> (MCID, Kon et al., Lancet Respir Med 2014). The GOLD threshold for "many symptoms" is <strong>CAT ≥ 10</strong>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Exacerbations — the risk driver</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          An <strong>exacerbation</strong> is an acute worsening that triggers a treatment change:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Moderate:</strong> outpatient — antibiotics and/or oral steroids.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Severe:</strong> hospital admission or emergency-department visit.</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          GOLD assigns anyone with <strong>≥ 2 moderate</strong> or <strong>≥ 1 hospitalized</strong> exacerbation per year directly to <strong>group E</strong> — irrespective of symptoms.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The GOLD ABE matrix</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Group</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Criteria</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Initial therapy (cue)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 font-medium">A</td>
                <td class="px-6 py-3 text-stone-600">0–1 moderate, no admission · mMRC ≤ 1 · CAT &lt; 10</td>
                <td class="px-6 py-3 text-stone-600">Single bronchodilator (LAMA or LABA)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium">B</td>
                <td class="px-6 py-3 text-stone-600">0–1 moderate, no admission · mMRC ≥ 2 or CAT ≥ 10</td>
                <td class="px-6 py-3 text-stone-600">LABA + LAMA (dual bronchodilation)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-medium">E</td>
                <td class="px-6 py-3 text-stone-600">≥ 2 moderate or ≥ 1 hospitalization</td>
                <td class="px-6 py-3 text-stone-600">LABA + LAMA, ± ICS if eosinophils elevated</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Note: GOLD 2023 merged the previous groups C and D into a single group E. The rationale — exacerbation risk drives escalation independent of the symptom profile.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What the assessment does not replace</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A <strong>COPD diagnosis</strong> requires post-bronchodilator FEV1/FVC &lt; 0.70. The spirometric GOLD grade (1–4) hinges on FEV1 % predicted — that needs your clinician.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Symptom assessment and spirometry complement each other. A reassuring mMRC with a low FEV1 — or a high CAT with only mildly reduced FEV1 — each tell distinct stories.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What you can do now</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Quit smoking:</strong> the single most impactful intervention. Cuts exacerbation rate, FEV1 decline, and mortality.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Check inhaler technique:</strong> up to 70% of COPD patients inhale incorrectly — a 2-minute pharmacy or clinic check fixes most errors.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pulmonary rehabilitation:</strong> measurable gains in exercise tolerance, CAT score, and quality of life (Cochrane 2023).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Vaccinations:</strong> influenza, pneumococcus, COVID-19, RSV — fewer exacerbations.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics & calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Asthma control:</strong> COPD and asthma overlap (ACOS); patients with both should track each tool. See the <router-link :to="localeBlogPath('asthma-control-test-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">ACT guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>VO₂max:</strong> maximal oxygen uptake correlates with CAT and is a strong outcome marker. See the <router-link :to="localeBlogPath('calculate-vo2max')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">VO₂max guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Smoking cost:</strong> tobacco smoke is the leading cause. Visualizing the financial savings is a strong motivator. See the <router-link :to="localeBlogPath('smoking-cost-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">smoking cost calculator</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Run your COPD assessment now</h3>
        <p class="text-stone-300 text-sm mb-5">10 questions, anonymous, instant. mMRC, CAT, and GOLD group (A/B/E) at a glance.</p>
        <router-link
          :to="localePath('copdAssessment')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the COPD Assessment Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Is the assessment enough to diagnose COPD?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              No. Diagnosis requires post-bronchodilator spirometry showing FEV1/FVC &lt; 0.70. The assessment quantifies symptoms and risk in established COPD or signals when further work-up is warranted.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should I repeat the scales?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Every 6–12 months when stable. Sooner with any therapy change, after an exacerbation, or when you feel worse. The trend matters more than any single value.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What changed between ABCD (old) and ABE (new)?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Until 2022 GOLD used four groups (A, B, C, D). GOLD 2023 merged C and D into a single group E ("exacerbation"); high-risk patients are escalated regardless of symptom profile.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What does a CAT of 25 mean?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              25 sits in the "high impact" band — many symptoms, considerable quality-of-life burden. That argues for a therapy review: dual bronchodilation, rehab, and ICS-eligibility discussion with a pulmonologist.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
