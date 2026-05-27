<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Pediatric BMI Calculator: Understanding CDC Growth Percentiles | Health Calculators',
  description: 'Pediatric BMI calculator explained: why adult BMI cutoffs fail for children, how CDC growth-chart percentiles work, and when to see a pediatrician.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pediatric BMI Calculator: Understanding CDC Growth Percentiles',
      description: 'Pediatric BMI explained: percentiles, CDC categories, and what they really mean.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/pediatric-bmi-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do children use different BMI ranges than adults?',
          acceptedAnswer: { '@type': 'Answer', text: "Children are growing: body fat, muscle mass, and body composition change with age and sex. Fixed BMI cutoffs like 25 or 30 don't work. Instead, a child's BMI is compared with thousands of children of the same age and sex — that comparison is the CDC percentile." },
        },
        {
          '@type': 'Question',
          name: 'What does the CDC percentile mean?',
          acceptedAnswer: { '@type': 'Answer', text: 'The percentile shows how many children of the same age and sex have a lower BMI. The 75th percentile means 75% have a lower BMI. The 5th to 84th percentile range is considered healthy weight.' },
        },
        {
          '@type': 'Question',
          name: 'At what percentile is a child considered overweight?',
          acceptedAnswer: { '@type': 'Answer', text: '85th to below 95th percentile is overweight, 95th and above is obesity. Below the 5th percentile is underweight.' },
        },
        {
          '@type': 'Question',
          name: 'How accurate is the CDC calculation?',
          acceptedAnswer: { '@type': 'Answer', text: "The CDC LMS method (Cole & Green, 1992) derives a Z-score from age, sex, and BMI and converts it to a percentile. It's clinically validated and the standard in the US and many other countries." },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my child is outside the healthy range?',
          acceptedAnswer: { '@type': 'Answer', text: 'A single reading is not a diagnosis. What matters is the trend over multiple measurements. If a child stays below the 5th or above the 95th percentile, parents should consult a pediatrician to review nutrition, activity, and possible medical causes.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pediatric BMI Calculator: Understanding CDC Growth Percentiles</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 26, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Your pediatrician says: <strong>"Your son is at the 92nd BMI percentile."</strong> Should you worry? And why doesn't the simple adult rule — BMI&nbsp;&lt;&nbsp;25 = healthy — apply here?
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how pediatric BMI works, which CDC categories exist, and how to read your child's number correctly.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why adult BMI fails for children</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In adults, BMI is a fixed scale: below 18.5 underweight, 18.5–24.9 healthy, 25 and above overweight. For children, that doesn't work. A 4-year-old with BMI 17 is in a healthy range. A 10-year-old with the same BMI sits at the lower end of normal. A 16-year-old with BMI 17 would be underweight.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The reason: body fat, muscle, and shape change throughout childhood. Babies are chubby, school-age kids slim down, puberty adds mass back. A single fixed line cannot capture this. Instead, pediatrics compares each child with thousands of same-age, same-sex peers.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">CDC growth-chart percentiles: the US standard</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>Centers for Disease Control and Prevention (CDC)</strong> published growth charts for US children ages 2–20 in the year 2000. They are the US standard and widely used internationally — especially for assessing overweight and obesity.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The CDC percentile answers: "What fraction of children of the same age and sex have a lower BMI?" The 50th percentile is the median. The 95th percentile means only 5 out of 100 children of that age and sex have a higher BMI.
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">CDC categories for child BMI</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Below 5th percentile</span>
              <span class="text-amber-600 font-medium">Underweight</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">5th–84th percentile</span>
              <span class="text-emerald-600 font-medium">Healthy weight</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">85th–94th percentile</span>
              <span class="text-amber-600 font-medium">Overweight</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">95th percentile and above</span>
              <span class="text-red-500 font-medium">Obesity</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How the calculation works</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Behind the CDC curves is the <strong>LMS method</strong> by Cole and Green (1992). Three parameters describe the BMI distribution for each age and sex:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3 font-sans">LMS parameters</div>
          <div class="space-y-2 text-stone-700">
            <div><strong>L</strong> — skewness correction (Box-Cox transformation)</div>
            <div><strong>M</strong> — median (50th percentile)</div>
            <div><strong>S</strong> — coefficient of variation (spread)</div>
          </div>
          <div class="mt-4 pt-4 border-t border-stone-200 text-stone-600">
            Z = [(BMI / M)<sup>L</sup> − 1] / (L × S)
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          The Z-score is converted to a percentile via the normal distribution. Z = 0 maps to the 50th percentile; Z = 1.645 maps to the 95th (the obesity cutoff).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What each category really means</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          CDC thresholds are not hard lines between "healthy" and "sick." They are statistical markers where risk for related conditions rises.
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Underweight (&lt; 5th):</span>
              <p class="text-stone-600 text-sm mt-1">Can be genetic or due to late development. Persistent low readings warrant medical review — possible causes include undernutrition, eating disorders, or chronic conditions.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Healthy weight (5th–84th):</span>
              <p class="text-stone-600 text-sm mt-1">The broad normal range. 80% of children sit here. Stable values are reassuring; jumps up or down deserve attention.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Overweight (85th–94th):</span>
              <p class="text-stone-600 text-sm mt-1">Risk zone but not obesity. Often correctable with lifestyle changes — more movement, balanced meals, fewer sweetened drinks. Family context matters.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Obesity (≥ 95th):</span>
              <p class="text-stone-600 text-sm mt-1">Higher risk for type 2 diabetes, hypertension, and related conditions. A pediatrician and possibly a dietitian should be involved.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The trend matters more than a single value</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          One BMI number is not very informative on its own. What matters is the <strong>trend over months and years</strong>. A child tracking steadily at the 88th percentile is very different from one who jumped from the 50th to the 88th percentile in two years.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">When to see a pediatrician</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ BMI below the 5th or above the 95th percentile</li>
            <li>→ Jump of more than two major percentile lines (e.g., 50th → 90th)</li>
            <li>→ Stagnation or decline despite normal eating</li>
            <li>→ Symptoms like fatigue, breathing difficulty, or joint pain</li>
          </ul>
        </div>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your child's BMI</h3>
        <p class="text-base text-stone-600 mb-6">Enter age, height and weight — the calculator shows BMI and the CDC percentile instantly.</p>
        <router-link
          :to="localePath('pediatricBmi')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Open the Pediatric BMI Calculator
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Takeaway</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pediatric BMI is not adult BMI. Instead of fixed cutoffs, you compare the child to same-age, same-sex peers and read the CDC percentile. Healthy weight sits between the 5th and 84th percentile; obesity starts at the 95th.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          A single number is never a diagnosis. What counts is the curve over time — and looking at the whole child: nutrition, activity, sleep, mood. When in doubt, your pediatrician is the right partner.
        </p>
      </div>

    </div>

    <RelatedArticles slug="pediatric-bmi-guide" />
  </article>
</template>
