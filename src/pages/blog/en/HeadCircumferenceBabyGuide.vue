<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Baby Head Circumference — Percentile, Normal Range & Red Flags | Health Calculators',
  description: 'How to measure and interpret your baby’s head circumference. WHO percentile charts 0–36 months, normal range, microcephaly and macrocephaly explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Baby Head Circumference: Percentile Chart, Normal Range and When to See a Doctor',
    description: 'How to measure and interpret your baby’s head circumference. WHO percentile charts 0–36 months, normal range, microcephaly and macrocephaly explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-11',
    dateModified: '2026-05-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/head-circumference-baby-guide',
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
        Baby Head Circumference: Percentile Chart, Normal Range and When to See a Doctor
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 11, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          At every well-baby visit, the paediatrician reaches for a tape measure — and records your baby's head circumference. Here's why this single number matters, what the percentile chart really tells you, and when to ask questions.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          During the first three years of life, the brain grows faster than at any other stage. Head circumference is the simplest — and most informative — measure of that growth.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why head circumference is measured</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          At birth, the brain is about 25 % of its eventual adult size. By age two, it has reached 75 %. That explosive growth shows up directly in skull size — unlike weight or length, which are far more influenced by feeding and genetics.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          For that reason, abnormalities in head circumference can flag developmental conditions, neurological disease or structural problems long before any other symptom shows up.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to measure correctly</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Step by step</p>
          <ol class="list-decimal list-inside space-y-2 text-sm text-stone-700">
            <li>Use a flexible tape measure (not a rigid ruler).</li>
            <li>Front: just above the eyebrows.</li>
            <li>Back: over the most prominent point of the occiput.</li>
            <li>Snug, but don't compress hair.</li>
            <li>Measure three times and take the largest value.</li>
          </ol>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Half a centimetre of measurement error visibly shifts the percentile. Right after birth the skull may still be slightly moulded from delivery — the maximum circumference is what gets recorded anyway.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Normal values: WHO reference 0–36 months</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The table below shows the median (50th percentile) head circumference from the WHO Child Growth Standards (2006).
        </p>

        <div class="overflow-x-auto bg-white rounded-xl border border-stone-200 mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-4 py-3 font-semibold text-stone-700">Age</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Boys (cm)</th>
                <th class="text-right px-4 py-3 font-semibold text-stone-700">Girls (cm)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-4 py-2.5 text-stone-700">Birth</td><td class="px-4 py-2.5 text-right tabular-nums">34.5</td><td class="px-4 py-2.5 text-right tabular-nums">33.9</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">3 months</td><td class="px-4 py-2.5 text-right tabular-nums">40.5</td><td class="px-4 py-2.5 text-right tabular-nums">39.5</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">6 months</td><td class="px-4 py-2.5 text-right tabular-nums">43.2</td><td class="px-4 py-2.5 text-right tabular-nums">42.0</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">12 months</td><td class="px-4 py-2.5 text-right tabular-nums">45.9</td><td class="px-4 py-2.5 text-right tabular-nums">44.5</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">18 months</td><td class="px-4 py-2.5 text-right tabular-nums">47.1</td><td class="px-4 py-2.5 text-right tabular-nums">45.7</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">24 months</td><td class="px-4 py-2.5 text-right tabular-nums">47.8</td><td class="px-4 py-2.5 text-right tabular-nums">46.6</td></tr>
              <tr><td class="px-4 py-2.5 text-stone-700">36 months</td><td class="px-4 py-2.5 text-right tabular-nums">48.7</td><td class="px-4 py-2.5 text-right tabular-nums">47.7</td></tr>
            </tbody>
          </table>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Striking: head circumference grows about <strong>12 cm</strong> in the first year of life, only <strong>2 cm</strong> in the second and less than <strong>1 cm</strong> in the third. After that, growth slows to a few millimetres per year.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What percentiles really mean</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A percentile answers a single question: <em>what share of same-age peers has a smaller head circumference?</em> The 50th percentile means exactly half — your baby is at the median.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Below 3rd percentile</span>
              <span class="text-red-500 font-medium">Very small — evaluate</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">3rd–15th percentile</span>
              <span class="text-amber-600 font-medium">Small but usually normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">15th–85th percentile</span>
              <span class="text-emerald-600 font-medium">Normal range</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85th–97th percentile</span>
              <span class="text-amber-600 font-medium">Large but usually normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Above 97th percentile</span>
              <span class="text-red-500 font-medium">Very large — evaluate</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          The single value matters less than the <strong>consistency of the curve</strong>. A baby steadily growing along the 10th percentile is healthy. A baby slipping from the 50th down to the 10th deserves a closer look.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When head circumference is unusual</h2>

        <h3 class="text-lg font-semibold text-stone-900 mb-2">Microcephaly (head too small)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Definition: head circumference persistently below the 3rd percentile (or –2 standard deviations). Possible causes:
        </p>
        <ul class="list-disc list-inside space-y-1 text-sm text-stone-600 mb-4">
          <li>Genetic syndromes (e.g. trisomies, Patau syndrome)</li>
          <li>Intrauterine infections (CMV, toxoplasmosis, Zika)</li>
          <li>Premature suture closure (craniosynostosis)</li>
          <li>Metabolic disorders</li>
        </ul>

        <h3 class="text-lg font-semibold text-stone-900 mb-2">Macrocephaly (head too large)</h3>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Definition: head circumference persistently above the 97th percentile. In most cases this is <strong>familial macrocephaly</strong> — one of the parents has a large head too, and the child develops perfectly normally.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Rarely an underlying condition such as hydrocephalus or a neurocutaneous syndrome is present. Once again, what matters is the <em>trajectory</em>: a head suddenly accelerating across percentiles is a far stronger signal than a head that is consistently large.
        </p>
      </div>

      <!-- Calculator CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate the head circumference percentile in 10 seconds</h3>
        <p class="text-base text-stone-600 mb-6">Enter age, sex and head circumference — the calculator instantly returns the WHO percentile.</p>
        <router-link
          :to="localePath('headCircumference')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Go to the head circumference calculator
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Combine with other growth measures</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Head circumference on its own only tells part of the story. The full picture emerges in combination with weight and length:
        </p>
        <ul class="list-disc list-inside space-y-2 text-sm text-stone-700">
          <li>
            <router-link :to="localePath('childGrowth')" class="text-stone-900 underline hover:text-stone-600">Child growth percentile calculator</router-link> — weight, height and BMI by WHO standards.
          </li>
          <li>
            <router-link :to="localePath('babyMilestones')" class="text-stone-900 underline hover:text-stone-600">Baby milestone tracker</router-link> — CDC developmental milestones from 0–24 months.
          </li>
          <li>
            <router-link :to="localePath('apgarScore')" class="text-stone-900 underline hover:text-stone-600">APGAR score</router-link> — newborn condition assessment right after birth.
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Head circumference is one of the simplest and at the same time most informative measures in early-childhood care. But a single reading is rarely conclusive — the trajectory over time is what counts.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          If your child stays on their own growth curve, things are fine. Sharp jumps — in either direction — are the actual signal to talk to your paediatrician.
        </p>
      </div>

    </div>

    <RelatedArticlesEn slug="head-circumference-baby-guide" />
  </article>
</template>
