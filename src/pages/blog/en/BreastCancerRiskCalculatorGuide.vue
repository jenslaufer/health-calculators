<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Gail model?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Gail model (Gail et al. 1989) estimates individual 5-year and lifetime risk of invasive breast cancer from age, menarche, first birth, family history and prior breast biopsies. It powers the NCI Breast Cancer Risk Assessment Tool.' },
    },
    {
      '@type': 'Question',
      name: 'When is my breast cancer risk considered elevated?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 5-year risk of 1.66 % or higher is the NCI/ASCO threshold for elevated risk. Above that, enhanced screening and risk-reducing medication (tamoxifen, raloxifene) may be offered.' },
    },
    {
      '@type': 'Question',
      name: 'Which risk factors does the Gail model miss?',
      acceptedAnswer: { '@type': 'Answer', text: 'BRCA1/2 mutations, male relatives with breast cancer, second-degree relatives, dense breast tissue, hormone replacement therapy and lifestyle are not included. Strong family history calls for the Tyrer-Cuzick or BRCAPRO model in addition.' },
    },
  ],
}

useHead({
  title: 'Breast Cancer Risk Calculator: How the Gail Model Works | Health Calculators',
  description: 'Calculate your breast cancer risk with the Gail model — 5-year and lifetime risk, key risk factors, screening thresholds and prevention options explained.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Breast Cancer Risk Calculator: How the Gail Model Works',
      description: 'Calculate your breast cancer risk with the Gail model — 5-year and lifetime risk, key risk factors, screening thresholds and prevention options explained.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/breast-cancer-risk-calculator-guide',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Breast Cancer Risk Calculator: How the Gail Model Works</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Breast cancer is the most common cancer in women — about <strong>one in eight</strong> women will develop it in her lifetime. The good news: risk is not destiny. The <strong>Gail model</strong> turns a handful of personal data points into a reasonably accurate estimate of your 5-year breast cancer risk.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks you through how the model works, which factors carry the most weight, what counts as "elevated" risk, and what you can actually do about it.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Gail model in 60 seconds</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Built in 1989 by Mitchell Gail at the US National Cancer Institute and validated repeatedly since (Costantino 1999), the Gail model combines <strong>six variables</strong> into a relative risk multiplier, then applies that to age-specific breast cancer incidence:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed mb-4">
          <li>Current age (35–85 years)</li>
          <li>Age at first menstrual period (menarche)</li>
          <li>Age at first live birth or nulliparity</li>
          <li>Number of first-degree relatives with breast cancer</li>
          <li>Number of breast biopsies</li>
          <li>Atypical hyperplasia on biopsy</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          The output is a probability — for example: "<em>You have a 3.2 % probability of developing invasive breast cancer in the next 5 years.</em>"
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risk factors in detail</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Relative risk</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Menarche &lt; 12 years</td><td class="px-6 py-3 text-stone-600">×1.21</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">One biopsy, no atypical hyperplasia</td><td class="px-6 py-3 text-stone-600">×1.58</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">One biopsy with atypical hyperplasia</td><td class="px-6 py-3 text-stone-600">×3.09</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">One first-degree relative</td><td class="px-6 py-3 text-stone-600">×2.6–2.8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Two or more first-degree relatives</td><td class="px-6 py-3 text-stone-600">×4.2–6.8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Nulliparity or first birth ≥ 30</td><td class="px-6 py-3 text-stone-600">×1.93</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The biggest levers are <strong>family history</strong> and <strong>atypical hyperplasia</strong>. Either can multiply your risk three- to fivefold above the population average for your age.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risk categories — what your result means</h2>
        <div class="space-y-3">
          <div class="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Low: 5-year risk &lt; 1.2 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Routine screening — most guidelines: biennial mammography from age 50 (or 40, depending on country).</p>
          </div>
          <div class="bg-stone-100 border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Average: 1.2 – 1.66 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Population average. Standard screening plus healthy-lifestyle basics (alcohol, weight, physical activity).</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Elevated: 1.66 – 3.0 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">NCI/ASCO threshold for "high risk." Talk to your gynecologist or a breast clinic — annual mammography ± clinical exam may be appropriate.</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">High: &gt; 3.0 %</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Specialist referral. Consider genetic counseling (BRCA testing), supplemental MRI screening, and discuss preventive medication (tamoxifen, raloxifene).</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What the Gail model <em>cannot</em> do</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The model was developed on US white women and <strong>underestimates</strong> risk in several important groups:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed mb-4">
          <li>BRCA1/BRCA2 carriers → use Tyrer-Cuzick or BRCAPRO instead</li>
          <li>Male relatives with breast cancer or second-degree relatives</li>
          <li>Very dense breast tissue (BI-RADS C or D)</li>
          <li>Previous chest radiation (e.g. for Hodgkin lymphoma)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          A strong family history — multiple affected relatives, very young age at diagnosis, or ovarian cancer in the family — warrants formal genetic counseling beyond a quick risk calculator.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your breast cancer risk now</h3>
        <p class="text-stone-300 text-sm mb-5">Gail model with 5-year risk, comparison to your age-group average and a clear classification. Free, instant, no sign-up.</p>
        <router-link
          :to="localePath('breastCancerRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Lifestyle — the levers you control</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The WHO estimates roughly 30 % of breast cancer cases could be prevented by lifestyle. The most evidence-backed moves:
        </p>
        <ul class="list-disc list-inside space-y-1 text-base text-stone-600 leading-relaxed">
          <li><strong>Alcohol:</strong> each daily drink raises risk by about 7–10 %.</li>
          <li><strong>Postmenopausal obesity:</strong> BMI &gt; 30 nearly doubles risk.</li>
          <li><strong>Physical activity:</strong> 150 min/week of moderate exercise cuts risk by 10–20 %.</li>
          <li><strong>Breastfeeding:</strong> protective — risk falls by ~4 % per year of breastfeeding.</li>
          <li><strong>Hormone replacement therapy (HRT):</strong> combined estrogen-progestin therapy &gt; 5 years raises risk.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Women's health risks cluster. If breast cancer risk is on your mind, these three indicators share underlying drivers — estrogen exposure, age and lifestyle:
        </p>
        <ul class="list-disc list-inside space-y-2 text-base text-stone-600 leading-relaxed">
          <li>Score your menopause symptoms with the
            <router-link :to="localeBlogPath('menopause-symptom-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Menopause Symptom Calculator</router-link> — HRT decisions affect breast cancer risk directly.
          </li>
          <li>Check your
            <router-link :to="localeBlogPath('osteoporosis-risk-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">osteoporosis risk</router-link> — both conditions cluster after menopause.
          </li>
          <li>Compare against your
            <router-link :to="localeBlogPath('biological-age-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age</router-link> — a strong combined indicator for cancer and cardiovascular risk.
          </li>
        </ul>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The Gail model is not a substitute for a clinical exam — but it is a solid starting point. Calculate your personal 5-year risk with the
          <router-link :to="localePath('breastCancerRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Breast Cancer Risk Calculator</router-link>
          and bring elevated results (≥ 1.66 % over 5 years) to a gynecologist or a certified breast clinic early.
        </p>
      </div>

      <RelatedArticlesEn slug="breast-cancer-risk-calculator-guide" />
    </div>
  </article>
</template>
