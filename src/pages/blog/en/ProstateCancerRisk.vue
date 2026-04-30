<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PSA?',
      acceptedAnswer: { '@type': 'Answer', text: 'Prostate-specific antigen (PSA) is a protein produced by prostate cells. Elevated values may indicate cancer, BPH or prostatitis — a high value alone does not mean cancer.' },
    },
    {
      '@type': 'Question',
      name: 'What PSA value is normal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Age-adjusted upper limits per Oesterling: 40–49 → 2.5, 50–59 → 3.5, 60–69 → 4.5, 70–79 → 6.5 ng/mL.' },
    },
    {
      '@type': 'Question',
      name: 'How does family history change the risk?',
      acceptedAnswer: { '@type': 'Answer', text: 'A first-degree relative (father, brother) diagnosed before age 65 doubles your risk. Two affected relatives roughly quadruple it.' },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to estimate your prostate cancer risk',
  step: [
    { '@type': 'HowToStep', name: 'Enter your PSA', text: 'Enter the PSA value (ng/mL) from your lab report.' },
    { '@type': 'HowToStep', name: 'Enter your age', text: 'Age sets the age-adjusted PSA threshold automatically.' },
    { '@type': 'HowToStep', name: 'Family history', text: 'Father or brother with prostate cancer before age 65 roughly doubles your risk.' },
    { '@type': 'HowToStep', name: 'Read your category', text: 'Low, moderate, high or very high — with a clear recommendation.' },
  ],
}

useHead({
  title: 'Prostate Cancer Risk: PSA, Age & Family History Explained | Health Calculators',
  description: 'Calculate your prostate cancer risk — PSA, age-adjusted thresholds and family history. Includes biopsy guidance per AUA / EAU recommendations.',
  path: '/en/blog/prostate-cancer-risk',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Prostate Cancer Risk: What Your PSA, Age and Family History Really Mean',
      description: 'Calculate your prostate cancer risk — PSA, age-adjusted thresholds and family history. Includes biopsy guidance per AUA / EAU recommendations.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/prostate-cancer-risk',
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
      <router-link to="/en/blog" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Prostate Cancer Risk: What Your PSA, Age and Family History Really Mean</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">April 30, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Prostate cancer is the most common male cancer in Western countries — and one with excellent outcomes when caught early. The <strong>PSA value</strong> is the primary screening marker, but a single number rarely tells the full story.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how to read PSA, age and family history together — and when further work-up is sensible.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is PSA?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Prostate-specific antigen (PSA) is a protein made only by prostate cells. Cancer, benign hyperplasia (BPH) or inflammation all release more PSA into the blood. That makes it a sensitive but non-specific marker — it rises for many reasons.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Age-adjusted PSA thresholds</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The prostate enlarges with age, raising baseline PSA. The <strong>Oesterling thresholds</strong> (JAMA 1993) account for that:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Age group</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PSA upper limit</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">40–49</td><td class="px-6 py-3 text-stone-600">2.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">50–59</td><td class="px-6 py-3 text-stone-600">3.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">60–69</td><td class="px-6 py-3 text-stone-600">4.5 ng/mL</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">70–79</td><td class="px-6 py-3 text-stone-600">6.5 ng/mL</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A PSA of 3.0 ng/mL is concerning at age 45 but well within range at 70.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risk categories by PSA</h2>
        <div class="space-y-3">
          <div class="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Low: PSA &lt; threshold</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Routine screening interval per AUA / EAU — typically every 2–4 years depending on baseline.</p>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Moderate: threshold to 10 ng/mL (gray zone)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">About 25–30 % of these men have prostate cancer. Repeat PSA in 3–6 months; consider free PSA, mpMRI.</p>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">High: 10–20 ng/mL</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Cancer probability 50–67 %. Urological work-up with MRI and likely targeted biopsy is advised promptly.</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Very high: &gt; 20 ng/mL</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Clinically significant cancer is highly likely. Urgent urological evaluation and staging.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Family history: the biggest single risk multiplier</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A first-degree relative (father, brother) diagnosed before age 65 <strong>doubles</strong> your risk. Two affected relatives <strong>quadruple</strong> it. AUA and EAU guidelines recommend starting shared decision-making about PSA at 40–45 (instead of 50) for these men.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          BRCA1/2 mutations — usually associated with breast cancer — also markedly raise prostate cancer risk.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What happens with an abnormal PSA</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Modern work-up has shifted away from blind systematic biopsy. Today the steps are:
        </p>
        <ol class="list-decimal list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>Repeat PSA</strong> after 4–6 weeks (avoid intercourse and cycling beforehand).</li>
          <li><strong>Free PSA</strong> (% fPSA): &lt; 15 % suggests cancer; &gt; 25 % suggests BPH.</li>
          <li><strong>Multiparametric MRI</strong> of the prostate (mpMRI) as triage.</li>
          <li><strong>Targeted fusion biopsy</strong> only if MRI shows a suspicious lesion (PI-RADS 3–5).</li>
        </ol>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your prostate cancer risk now</h3>
        <p class="text-stone-300 text-sm mb-5">PSA, age and family history — with age-adjusted thresholds and a clear recommendation. Free, instant, no sign-up.</p>
        <router-link
          to="/en/prostate-cancer-risk-calculator"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Cancer risk is closely tied to overall metabolic and biological aging. Compare your result to your
          <router-link to="/en/blog/life-expectancy-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">life expectancy</router-link>,
          your
          <router-link to="/en/blog/biological-age-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age</router-link>
          and your
          <router-link to="/en/blog/diabetes-risk-score" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk</router-link>
          — three numbers that together capture your metabolic health picture.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Conclusion</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          PSA alone tells you very little. Only the combination of age-adjusted threshold, PSA trend and family history yields a meaningful risk estimate. Calculate yours with our
          <router-link to="/en/prostate-cancer-risk-calculator" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Prostate Cancer Risk Calculator</router-link> — and discuss any abnormal value with a urologist promptly.
        </p>
      </div>

      <RelatedArticlesEn slug="prostate-cancer-risk" />
    </div>
  </article>
</template>
