<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Wilks Coefficient Calculator Guide: IPF 2020 Formula, Strength Bands | Health Calculators',
  description: 'Calculate your Wilks score from powerlifting total, bodyweight and sex with the IPF 2020 polynomial. Five strength bands, Wilks 1994 vs 2020, Wilks vs DOTS vs GL points.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Wilks Coefficient Calculator Guide: IPF 2020 Formula, Strength Bands',
      description: 'Wilks formula per IPF 2020, five strength bands, and how Wilks compares to DOTS and GL points.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-07',
      dateModified: '2026-06-07',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/wilks-coefficient-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Wilks coefficient?',
          acceptedAnswer: { '@type': 'Answer', text: 'A multiplier applied to a powerlifting total (squat + bench + deadlift) that normalises across bodyweight and sex. The resulting Wilks score ranks lifters of different weight classes against each other in a meet.' },
        },
        {
          '@type': 'Question',
          name: 'What changed with Wilks 2020 (IPF)?',
          acceptedAnswer: { '@type': 'Answer', text: 'The IPF refit the polynomial in 2020 using current world records. Heavier lifters are now slightly better rewarded, while mid-weight scores stay close to the 1994 values. This calculator uses the IPF 2020 constants.' },
        },
        {
          '@type': 'Question',
          name: 'What is the Wilks formula?',
          acceptedAnswer: { '@type': 'Answer', text: 'Score = total_kg × 600 / (A + B·bw + C·bw² + D·bw³ + E·bw⁴). The constants A–E differ for men and women. The polynomial is evaluated at bodyweight in kg, then multiplied by the total in kg.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good Wilks score?',
          acceptedAnswer: { '@type': 'Answer', text: 'Common bands: < 100 untrained, 100–199 novice, 200–299 intermediate, 300–399 advanced, ≥ 400 elite. National-level powerlifters typically score 350–450; world-class men reach 500+. Bands apply to both sexes since Wilks already corrects for sex.' },
        },
        {
          '@type': 'Question',
          name: 'Wilks, DOTS or GL points?',
          acceptedAnswer: { '@type': 'Answer', text: 'All three normalise across bodyweight. Wilks 2020 is the IPF\'s current official scoring for raw classic. DOTS and GL points are alternatives. Rankings between systems usually differ only slightly.' },
        },
        {
          '@type': 'Question',
          name: 'Can I enter pounds?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — switch the units toggle to imperial. The calculator converts using 1 lb = 0.45359237 kg, then evaluates the IPF 2020 polynomial in kg. The Wilks score is identical regardless of input unit.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Wilks Coefficient Calculator Guide: IPF 2020 Formula, Strength Bands</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">June 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          To rank a 60 kg lifter against a 120 kg lifter you need a norm. Without one, the heavier athlete always wins. The <strong>Wilks coefficient</strong> has been that norm since 1994 — and in its IPF 2020 form is the official scoring system for raw classic powerlifting.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Four inputs (total, bodyweight, sex, units), one polynomial, one score. This guide covers how the formula works, what the five strength bands mean, and when DOTS or GL points might be worth a look.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          Score = 600 × total ÷ (A + B·bw + C·bw² + D·bw³ + E·bw⁴)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          bw is bodyweight in kilograms, total is the sum of best squat, bench press and deadlift attempts — also in kilograms. The five constants A–E differ between men and women. The IPF publishes them annually.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Example: 83 kg male lifter, 600 kg total (IPF 2020). Polynomial denominator ≈ 796 → score ≈ <strong>452</strong>. That puts the lifter solidly in the Elite band — world-class numbers for the class.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The five strength bands</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Wilks score ranges</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&lt; 100</span>
              <span class="text-stone-600 font-medium">Untrained</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">100 – 199</span>
              <span class="text-amber-600 font-medium">Novice</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">200 – 299</span>
              <span class="text-emerald-600 font-medium">Intermediate</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">300 – 399</span>
              <span class="text-blue-600 font-medium">Advanced</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">&ge; 400</span>
              <span class="text-purple-600 font-medium">Elite</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The bands apply to both sexes because Wilks already adjusts for sex. A 350 score for a woman represents the same "advanced" tier as a 350 score for a man.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wilks 1994 vs IPF 2020</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Robert Wilks published the original polynomial in 1994 — fit to the world records of the time. Over the decades the records grew (especially in women's lifting and super-heavyweight men), and the old coefficients no longer matched. The IPF committee refit the polynomial in 2020.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Practically: lifters in the upper weight classes score slightly higher under Wilks 2020 than under the 1994 version; mid-weight scores are nearly unchanged. When reading historical Wilks comparisons, check which version was used.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your Wilks score</h3>
        <p class="text-base text-stone-600 mb-6">Enter total, bodyweight, sex and units — the calculator returns the IPF 2020 score and your strength band.</p>
        <router-link
          :to="localePath('wilksCoefficient')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Open the Wilks Coefficient Calculator
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What Wilks does <em>not</em> capture</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Equipment:</strong> single-ply and multi-ply gear add kilos. Wilks is intended for raw classic.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Age:</strong> junior and masters lifters get separate age-adjusted factors (McCulloch / Foster).</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Training age:</strong> a 200 after six months is impressive; the same score after ten years is not. Wilks knows neither.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Single-lift athletes:</strong> bench-only specialists should use lift-specific scoring like the IPF bench coefficient.</span></li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wilks, DOTS or GL points?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Three scoring systems dominate strength sports:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>Wilks 2020 (IPF):</strong> current official IPF scoring for raw classic.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>DOTS:</strong> similar polynomial form, common in USAPL and North-American federations.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600"><strong>GL points (Goodlift):</strong> the newer IPF scoring used for equipped lifting.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          For most lifters all three return very similar rankings. Differences show up mostly in the extreme weight classes or in equipped vs raw.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Raising your Wilks score is about maximal strength. Useful companions: the
          <router-link :to="localePath('oneRepMax')" class="text-stone-900 underline hover:no-underline">One-Rep-Max Calculator</router-link>
          estimates your true 1RM from multi-rep sets — the foundation for programming squat, bench and deadlift. The
          <router-link :to="localePath('leanBodyMass')" class="text-stone-900 underline hover:no-underline">Lean Body Mass Calculator</router-link>
          returns fat-free mass — Wilks per kilogram of lean mass is often more informative than the raw Wilks score. If you're planning a new weight class, track progress with the
          <router-link :to="localePath('bmi')" class="text-stone-900 underline hover:no-underline">BMI Calculator</router-link>
          and the
          <router-link :to="localePath('bodyFat')" class="text-stone-900 underline hover:no-underline">Body Fat Calculator</router-link>
          .
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Takeaway</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Wilks coefficient is the quickest answer to "who lifts the most for their size?". One polynomial, five constants, one score — and lifters from every weight class stand on the same scale.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          IPF 2020 is the version that counts today. 400+ is elite, 300+ a seasoned competitor. Tracking the score across years reveals the kind of long-arc progress that weekly training logs hide.
        </p>
      </div>
    </div>

    <RelatedArticlesEn slug="wilks-coefficient-guide" />
  </article>
</template>
