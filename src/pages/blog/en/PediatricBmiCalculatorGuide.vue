<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Pediatric BMI Calculator: Why Children Need Percentiles, Not Cut-offs | Health Calculators',
  description: 'Why kids’ BMI is interpreted as a percentile, not against fixed adult cut-offs. WHO method, CDC categories, and when an unusual value is clinically meaningful — explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pediatric BMI Calculator: Why Children Need Percentiles, Not Cut-offs',
    description: 'Why kids’ BMI is interpreted as a percentile, not against fixed adult cut-offs. WHO method, CDC categories, and when an unusual value is clinically meaningful — explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/blog/pediatric-bmi-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Pediatric BMI Calculator: Why Children Need Percentiles, Not Cut-offs</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 6, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For adults, the rule is simple: BMI above 25 is overweight, above 30 is obesity. For kids, that rule fails. A BMI of 20 is <strong>far too high</strong> for a 5-year-old — and perfectly normal for a 17-year-old.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The reason: body fat percentage shifts dramatically during growth. So pediatric BMI is interpreted as an <strong>age- and sex-specific percentile</strong>, not against fixed thresholds.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is a percentile?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A percentile compares your child to peers of the same age and sex. Example: if your 8-year-old son lands on the <strong>75th percentile</strong>, that means 75% of 8-year-old boys have a lower BMI — and 25% have a higher one. He's in the upper third, but still in the healthy range.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This view is more robust than fixed cut-offs because it respects natural growth: a BMI of 18 is high for a 4-year-old and low for a 14-year-old.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The four CDC/WHO weight-status categories</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Percentile</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">What it means</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">&lt; 5th</td><td class="px-6 py-3 text-amber-600">Underweight</td><td class="px-6 py-3 text-stone-600">Medical evaluation recommended</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5th – 85th</td><td class="px-6 py-3 text-green-600">Healthy weight</td><td class="px-6 py-3 text-stone-600">In the typical healthy range</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">85th – 95th</td><td class="px-6 py-3 text-orange-500">Overweight</td><td class="px-6 py-3 text-stone-600">Lifestyle counselling helpful</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">≥ 95th</td><td class="px-6 py-3 text-red-700">Obesity</td><td class="px-6 py-3 text-stone-600">Structured intervention indicated</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          This classification applies to ages 2 through 20. For infants under 2, weight-for-length percentiles are used instead of BMI.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Get your child's BMI percentile in 30 seconds</h3>
        <p class="text-stone-300 text-sm mb-5">Enter age, sex, height, and weight — the calculator returns BMI, percentile, and a CDC/WHO classification. Free, no signup.</p>
        <router-link
          :to="localePath('pediatricBMI')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How is the percentile computed?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The WHO publishes <strong>LMS reference tables</strong> for BMI by age and sex. Three parameters per age in months:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>L</strong> — Box-Cox power parameter (corrects skewness of the distribution)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>M</strong> — median (typical BMI for that age and sex)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>S</strong> — coefficient of variation (spread of the distribution)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          From these three numbers, a <strong>z-score</strong> (standard deviations from the median) is computed and then mapped through the standard normal CDF to a percentile. That's how the smooth growth curves used in well-child visits are derived from a handful of values per age.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When is a high BMI clinically meaningful?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A single elevated value isn't an alarm. Three things matter more:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Trajectory, not snapshot:</strong> if a child crosses out of their percentile corridor over several measurements — up or down — it deserves a closer look.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Body composition:</strong> very muscular or late-maturing children can have an elevated BMI without clinical concern. Look at the build.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Co-factors:</strong> high blood pressure, insulin resistance, or dyslipidemia raise the risk substantially even at moderate overweight.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What helps when BMI trends up?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Diets are problematic for growing children — they need nutrients. Better levers:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Movement, not restriction:</strong> 60 minutes of moderate activity daily often returns kids to their growth corridor.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Family meals:</strong> children who eat with their family statistically have healthier weight outcomes.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Limit screen time:</strong> time on phones, tablets, and TV correlates directly with elevated BMI.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sleep:</strong> sleep loss disrupts hormonal balance — under-slept children develop overweight more often.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A few related tools help round out the picture. The
          <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">adult BMI calculator</router-link>
          covers the WHO classification logic. The
          <router-link :to="localeBlogPath('child-growth-percentile-chart')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">child growth percentile</router-link>
          guide adds height, weight, and head circumference. For the classic ideal-weight formulas (adults only), see the
          <router-link :to="localeBlogPath('calculate-ideal-weight')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">ideal-weight calculator</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Children's BMI only makes sense when compared to peers. Our
          <router-link :to="localePath('pediatricBMI')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Pediatric BMI Calculator</router-link>
          delivers the percentile and CDC weight-status category in one step — for ages 2 through 20, separated by sex. Values below the 5th or above the 95th percentile warrant a conversation with the pediatrician — most values in between are physiological.
        </p>
      </div>

      <RelatedArticles slug="pediatric-bmi-calculator-guide" />
    </div>
  </article>
</template>
