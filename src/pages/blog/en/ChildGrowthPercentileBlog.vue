<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Child Growth Percentile Chart: What the Curves Really Mean | Health Calculators',
  description: 'Growth percentile charts explained: how WHO curves work, what counts as normal and when to see a paediatrician.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Child Growth Percentile Chart: What the Curves Really Mean',
    description: 'Growth percentile charts explained: how WHO curves work, what counts as normal and when to see a paediatrician.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/child-growth-percentile-chart',
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
        Child Growth Percentile Chart: What the Curves Really Mean
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
          At the next paediatric check-up, the doctor points to a chart and says: <strong>"Your child is on the 25th percentile."</strong> What does that actually mean? Cause for concern — or completely normal?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Growth percentiles are one of the most important tools in paediatrics, yet they are frequently misunderstood. This article explains how they work, what WHO charts measure and how to correctly interpret the numbers for your child.
        </p>
      </div>

      <!-- What are percentiles -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Are Growth Percentiles?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A percentile tells you where a measurement sits relative to a reference population. The <strong>25th weight percentile</strong> means: 25 % of children of the same age and sex weigh less, 75 % weigh more.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Crucially, a percentile is <em>not</em> a score for how "good" a child is. A child on the 10th height percentile is not shorter than they should be — they are simply shorter than 90 % of their peers, which can perfectly match their genetic make-up.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Key reference percentiles</p>
          <div class="space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">3rd percentile</span>
              <span class="text-stone-800 font-medium">Lower alert threshold</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">15th percentile</span>
              <span class="text-stone-800 font-medium">Lower normal range</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">50th percentile</span>
              <span class="text-stone-800 font-medium">Median (middle value)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">85th percentile</span>
              <span class="text-stone-800 font-medium">Upper normal range</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-stone-600">97th percentile</span>
              <span class="text-stone-800 font-medium">Upper alert threshold</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>normal range spans the 3rd to 97th percentile</strong>. Values outside this range are not automatically pathological, but do signal that a closer look may be warranted.
        </p>
      </div>

      <!-- WHO standards -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">WHO Growth Standards: The Global Reference</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In 2006, the World Health Organization published new growth standards for children aged 0–5 years, supplemented in 2007 by reference data up to age 19. These standards are now the worldwide gold standard.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Key distinction: WHO standards describe <strong>optimal growth</strong> under ideal conditions (breastfed children, non-smoking household, no chronic illness) — not average growth in any given population. They represent a target, not a mere average.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">What WHO tracks</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Weight-for-age</span>
                <p class="text-xs text-stone-500">0–10 years, boys and girls</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Height/Length-for-age</span>
                <p class="text-xs text-stone-500">0–18 years, boys and girls</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">BMI-for-age</span>
                <p class="text-xs text-stone-500">2–18 years — more useful than absolute BMI</p>
              </div>
            </div>
            <div class="flex gap-2 items-start">
              <span class="text-stone-400 mt-0.5">→</span>
              <div>
                <span class="text-sm font-semibold text-stone-700">Head circumference-for-age</span>
                <p class="text-xs text-stone-500">0–3 years — indicator of brain development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LMS method -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The LMS Method: How Percentiles Are Calculated</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          WHO charts rely on the <strong>LMS method</strong> by Cole and Green (1992). It transforms the often skewed distribution of body measurements into a normal distribution, enabling precise percentile calculation.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Three parameters describe the distribution at each age:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 font-sans">LMS parameters</div>
          <div class="space-y-2 text-stone-700">
            <div><strong>L</strong> — Box-Cox transformation (corrects skewness)</div>
            <div><strong>M</strong> — Median (50th percentile)</div>
            <div><strong>S</strong> — Coefficient of variation (spread)</div>
          </div>
          <div class="mt-4 pt-4 border-t border-stone-200 text-stone-600">
            Z = [(X/M)<sup>L</sup> − 1] / (L × S)
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          The Z-score is then converted to a percentile using the standard normal distribution. A Z-score of 0 is the 50th percentile; a Z-score of −2 is approximately the 2.3rd percentile.
        </p>
      </div>

      <!-- How to read -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to Read Growth Charts Correctly</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A single measurement is less informative than the <strong>trend over time</strong>. Two questions matter most:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">1.</span>
            <div>
              <span class="font-semibold text-stone-700">Is the child tracking steadily along a curve?</span>
              <p class="text-stone-600 text-sm mt-1">A child consistently on the 10th percentile is likely naturally small — this is normal.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">2.</span>
            <div>
              <span class="font-semibold text-stone-700">Is there a sudden drop or jump?</span>
              <p class="text-stone-600 text-sm mt-1">A child falling from the 50th to the 10th percentile needs medical assessment — even though 10th is within the normal range.</p>
            </div>
          </li>
        </ul>

        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">When to see a paediatrician</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ Measurement below the 3rd or above the 97th percentile</li>
            <li>→ Drop or rise crossing two or more major percentile lines</li>
            <li>→ Head circumference growing unusually fast or stalling</li>
            <li>→ Large discrepancy between weight and height percentiles</li>
          </ul>
        </div>
      </div>

      <!-- BMI in children -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">BMI in Children: Different from Adults</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The raw BMI number means little in children. A BMI of 17 can be normal for a 4-year-old but signal underweight for a 10-year-old. What matters is always the <strong>BMI-for-age percentile</strong>.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">WHO categories for BMI-for-age</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Below 3rd percentile</span>
              <span class="text-red-500 font-medium">Underweight</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">3rd–85th percentile</span>
              <span class="text-emerald-600 font-medium">Healthy weight</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85th–97th percentile</span>
              <span class="text-amber-600 font-medium">Overweight (at risk)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Above 97th percentile</span>
              <span class="text-red-500 font-medium">Obese</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Calculator CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your child's growth percentiles</h3>
        <p class="text-base text-stone-600 mb-6">Enter age, weight and height — the calculator instantly shows where your child stands on the WHO chart.</p>
        <router-link
          :to="localePath('childGrowth')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Open Child Growth Calculator
        </router-link>
      </div>

      <!-- Summary -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Summary</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Growth percentiles are not a ranking — they are a tool for understanding your child's individual growth over time. A child on the 10th percentile is not "worse" than one on the 90th: they simply grow differently.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          What matters is consistency of the curve. If your child follows their own growth trajectory, everything is fine. Deviations from that trajectory — not the absolute value — are the real signal for a paediatrician.
        </p>
      </div>

    </div>

    <RelatedArticles slug="child-growth-percentile-chart" />
  </article>
</template>
