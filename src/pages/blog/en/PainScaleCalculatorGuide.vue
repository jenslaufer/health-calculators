<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Pain Scale Guide — NRS, VAS, Wong-Baker Explained | Health Calculators',
  description: 'How to use the NRS, VAS, and Wong-Baker FACES pain scales: when each is appropriate, what scores mean, and how to track pain over time.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pain Scale Guide — NRS, VAS, Wong-Baker Explained',
      description: 'Pick the right pain scale, interpret your score correctly, and decide when a pain level needs treatment.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/pain-scale-calculator-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the NRS pain scale?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Numeric Rating Scale (NRS) rates pain from 0 (no pain) to 10 (worst pain imaginable). It is the most common pain scale in clinical practice worldwide.' },
        },
        {
          '@type': 'Question',
          name: 'When should I see a doctor?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most guidelines call pain ≥ 4/10 treatment-worthy. Pain ≥ 7/10 or sudden new pain warrants prompt medical attention.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pain Scale Guide — NRS, VAS, Wong-Baker Explained</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „How bad is your pain, on a scale from 0 to 10?" You hear that question in nearly every emergency department and primary care office. Behind it sits the <strong>Numeric Rating Scale (NRS)</strong> — the simplest, most widely validated pain assessment tool in medicine.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Two other clinical scales sit alongside it: the <strong>Visual Analog Scale (VAS)</strong> and <strong>Wong-Baker FACES</strong>. This guide covers when each is appropriate, what the numbers mean, and how to track pain over time.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why use a pain scale at all?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pain is subjective — it can't be measured objectively. A standardised scale still makes it <strong>comparable</strong>: across time, across patients, across treatments. Without one, you're left arguing about „better" or „worse" with no reference point.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Practically, pain scales drive <strong>therapy decisions</strong> (is this working?), <strong>tracking</strong> (is it getting better?), and <strong>triage</strong> (who needs urgent attention?).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The three main scales compared</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Scale</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Range</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Best for</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">NRS</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0 – 10 (integers)</td>
                <td class="px-6 py-3 text-stone-600">Routine clinical practice</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">VAS</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0 – 100 mm (continuous)</td>
                <td class="px-6 py-3 text-stone-600">Studies, pain research</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">Wong-Baker FACES</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">0, 2, 4, 6, 8, 10</td>
                <td class="px-6 py-3 text-stone-600">Children ≥ 3 y, language barriers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          All three scales normalise to the <strong>same 0 – 10 reference</strong>, so scores remain comparable. That's the basis our pain scale calculator builds on.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What do the scores mean?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The standard categorical bands trace back to <strong>Serlin et al. 1995</strong> and were adopted by IASP and WHO:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0</td>
                <td class="px-6 py-3 text-stone-600">No pain</td>
                <td class="px-6 py-3 text-stone-600">Observe</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">1 – 3</td>
                <td class="px-6 py-3 text-stone-600">Mild</td>
                <td class="px-6 py-3 text-stone-600">Self-care, simple analgesics if needed</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">4 – 6</td>
                <td class="px-6 py-3 text-stone-600">Moderate</td>
                <td class="px-6 py-3 text-stone-600">Treatment-worthy</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">7 – 10</td>
                <td class="px-6 py-3 text-stone-600">Severe</td>
                <td class="px-6 py-3 text-stone-600">See a clinician</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>4/10 is the key threshold</strong>: above it, pain noticeably impairs daily life — and most guidelines recommend active treatment at that point.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What counts as a clinically meaningful change?</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Not every change matters. Studies show that a reduction of <strong>at least 30 % or 2 points</strong> on the NRS is the minimal clinically important difference (MCID). Smaller changes are often statistically detectable but not perceived by patients as improvement.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to track pain over time</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Acute pain</strong>: rate before and 30–60 min after each intervention.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Chronic pain</strong>: same time daily, ideally three numbers (rest, activity, worst in last 24 h).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Keep a <strong>pain diary</strong> for at least 2 weeks — triggers, context, what helps.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">A number alone isn't enough. Add <strong>quality</strong> (sharp, burning), <strong>location</strong>, and <strong>associated symptoms</strong>.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics &amp; calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Asthma Control Test (ACT)</strong> — another validated five-question self-assessment. See the <router-link :to="localeBlogPath('asthma-control-test-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">ACT guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>COPD Assessment Test (CAT)</strong> — symptom rating with a similar structure. See the <router-link :to="localeBlogPath('copd-assessment-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">CAT guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Creatinine clearance</strong> — important for chronic pain patients on long-term NSAIDs or opioids. See the <router-link :to="localeBlogPath('creatinine-clearance-calculator-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">CrCl guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Rate your pain now</h3>
        <p class="text-stone-300 text-sm mb-5">NRS, VAS, Wong-Baker — pick a scale, enter a value, get an evidence-based category.</p>
        <router-link
          :to="localePath('painScale')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the Pain Scale Calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What's the difference between pain and suffering?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Pain is the sensory component. Suffering covers the emotional load, daily-life impact, and social consequences. NRS measures intensity only — for full assessment use multidimensional tools such as the Brief Pain Inventory (BPI).
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Are self-ratings reliable?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Yes — self-rating is the gold standard because pain is subjective by definition. Observer-rated scales are reserved for patients who cannot communicate (e.g. dementia, unconsciousness, infants).
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Why use faces for children?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Young children don't reliably grasp abstract numbers. The Wong-Baker FACES scale was developed in 1983 for paediatric nursing and is now the international standard for ages 3–10.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My score is 7 — what should I do?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Scores ≥ 7/10 indicate severe pain. If onset is sudden or paired with chest pain, breathing difficulty, altered consciousness, or acute abdominal pain — call emergency services. Otherwise, see your primary care clinician or a pain clinic promptly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
