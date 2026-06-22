<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Asthma Control Test (ACT) — Score, Ranges, Next Steps | Health Calculators',
  description: 'How well is your asthma controlled? The validated 5-question Asthma Control Test (ACT) gives a 5–25 score with clear interpretation and next-step guidance.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Asthma Control Test (ACT) — Score, Ranges, Next Steps',
      description: 'The 5-question ACT translates four weeks of symptoms into a single score from 5 to 25 — a validated tool for monitoring asthma control.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/asthma-control-test-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does the Asthma Control Test measure?',
          acceptedAnswer: { '@type': 'Answer', text: 'The ACT measures how well your asthma was controlled over the past 4 weeks across activity limitation, shortness of breath, nighttime symptoms, rescue inhaler use, and self-rated control.' },
        },
        {
          '@type': 'Question',
          name: 'What do the ACT score ranges mean?',
          acceptedAnswer: { '@type': 'Answer', text: '20–25: well controlled. 16–19: not well controlled. 5–15: poorly controlled. A score of 25 indicates complete control.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Asthma Control Test (ACT) — Score, Ranges, Next Steps</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          How <strong>well controlled</strong> is your asthma right now? That single question shapes everything: whether your treatment plan still fits, whether environmental triggers are creeping in, and whether you need a clinic visit. The <strong>Asthma Control Test (ACT)</strong> answers it in five questions.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide walks you through the ACT — what it measures, what each score range means, and what to do next based on your result. We also place the ACT in context: how it complements lung function, fitness, and other health markers.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the ACT?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Asthma Control Test was published by Nathan and colleagues in the <em>Journal of Allergy and Clinical Immunology</em> in 2004 and has been validated in dozens of studies since. The Global Initiative for Asthma (GINA) recommends it as a longitudinal monitoring tool.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Five questions, scored 1–5 each. Reference period: the past <strong>four weeks</strong>. Total score: 5 to 25.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The five ACT questions</h2>
        <ol class="space-y-3 mb-4 list-decimal list-inside">
          <li class="text-stone-600 text-base"><strong>Activity limitation</strong> — How often did asthma keep you from getting things done at work, school, or home?</li>
          <li class="text-stone-600 text-base"><strong>Shortness of breath</strong> — How often have you been short of breath?</li>
          <li class="text-stone-600 text-base"><strong>Nighttime symptoms</strong> — How often did asthma wake you up at night or earlier than usual?</li>
          <li class="text-stone-600 text-base"><strong>Rescue inhaler use</strong> — How often have you used your SABA (albuterol/salbutamol)?</li>
          <li class="text-stone-600 text-base"><strong>Self-rating</strong> — How would you rate your overall asthma control?</li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Score ranges</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Meaning</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Suggested action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">20 – 25</td>
                <td class="px-6 py-3 text-stone-600">Well controlled</td>
                <td class="px-6 py-3 text-stone-600">Maintain therapy and trigger avoidance</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">16 – 19</td>
                <td class="px-6 py-3 text-stone-600">Not well controlled</td>
                <td class="px-6 py-3 text-stone-600">Discuss therapy adjustment with your doctor</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5 – 15</td>
                <td class="px-6 py-3 text-stone-600">Poorly controlled</td>
                <td class="px-6 py-3 text-stone-600">Seek medical review promptly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A change of <strong>≥ 3 points</strong> is considered clinically meaningful (MCID, Schatz et al. 2009). Trends across multiple ACTs carry more weight than a single value.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What the ACT does not replace</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The ACT captures <strong>symptoms</strong>, not <strong>lung function</strong>. Spirometry (FEV1) or peak flow complements the score. A reassuring ACT (e.g. 22) paired with a low FEV1 is a red flag — patients often underestimate their symptoms (Schatz 2006).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The ACT also does not assess <strong>exacerbation risk</strong> directly. Frequent oral steroid courses or hospital visits are independent warning signs even if the ACT looks fine.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What to do based on your score</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score &lt; 20:</strong> book a primary care or pulmonology visit — usually a step-up in controller therapy by GINA stage is enough.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Rescue inhaler &gt; 2× per week:</strong> a clear sign that controller therapy is too light. Overuse increases exacerbation risk.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Identify triggers:</strong> pollen, animal dander, smoke, exercise, infections. A 2-week asthma diary surfaces personal triggers reliably.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Check inhaler technique:</strong> up to 70% of patients inhale incorrectly. A 2-minute review at the pharmacy or clinic.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics & calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>VO₂max</strong> — maximum oxygen uptake stays normal in well-controlled asthma. A noticeable drop suggests further lung-function workup. See the <router-link :to="localeBlogPath('calculate-vo2max')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">VO₂max guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Heart-rate zones</strong> — exercise-induced asthma is common; targeted training zones help keep symptoms manageable. See the <router-link :to="localeBlogPath('calculate-heart-rate-zones')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">heart-rate guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Vitamin D</strong> — vitamin D deficiency is associated with higher asthma activity (Cochrane 2016). See the <router-link :to="localeBlogPath('vitamin-d-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">vitamin D guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Take the ACT now</h3>
        <p class="text-stone-300 text-sm mb-5">Five questions, instant score, anonymous. Get a clear read on how well your asthma was controlled over the past 4 weeks.</p>
        <router-link
          :to="localePath('asthmaControl')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Asthma Control Test &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should I take the ACT?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Every three months when stable. Weekly during therapy changes or after an exacerbation. Watching the trend is more informative than any single value.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My score is below 16 — is this an emergency?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              No, a low score is not an emergency, but it is a clear signal of insufficient control. Schedule a clinic visit soon. For acute breathlessness or rapid worsening, ignore the score and seek medical help or call emergency services.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does the ACT work for children?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The ACT shown here is validated for ages 12 and up. For children aged 4–11 use the Childhood ACT (cACT), which is age-appropriate and includes a parent-rated component.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What role do triggers play?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Triggers often explain sudden score drops. Common ones: respiratory infections, pollen, pet allergens, smoke, cold air, exercise. A two-week asthma diary usually reveals personal patterns.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
