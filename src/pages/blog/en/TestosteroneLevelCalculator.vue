<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Testosterone Level Calculator: Free vs Bound, SHBG and What Your Numbers Mean | Health Calculators',
  description: 'Calculate free testosterone from total T, SHBG and albumin using the Vermeulen formula. Reference ranges, low-T symptoms, and natural ways to raise it.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Testosterone Level Calculator: Free vs Bound, SHBG and What Your Numbers Mean',
    description: 'Calculate free testosterone from total T, SHBG and albumin using the Vermeulen formula. Reference ranges, low-T symptoms, and natural ways to raise it.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/testosterone-level-calculator',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Testosterone Level Calculator: Free vs Bound, SHBG and What Your Numbers Mean</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 1, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A normal <strong>total testosterone</strong> result doesn't tell the full story. What matters is <strong>free testosterone</strong> — the biologically active fraction that actually reaches your muscles, libido and energy. With high SHBG, the free fraction can be deficient even if total T looks "normal."
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains the <strong>Vermeulen equation</strong>, reference ranges, and what low values mean for your health.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How testosterone circulates in blood</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Testosterone exists in three fractions in the bloodstream:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Fraction</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Share</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Activity</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Free</td><td class="px-6 py-3 text-stone-600">1–3 %</td><td class="px-6 py-3 text-stone-600">Fully active</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Albumin-bound</td><td class="px-6 py-3 text-stone-600">~54 %</td><td class="px-6 py-3 text-stone-600">Weakly active (bioavailable)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SHBG-bound</td><td class="px-6 py-3 text-stone-600">~44 %</td><td class="px-6 py-3 text-stone-600">Inactive</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          SHBG (sex hormone-binding globulin) binds testosterone with high affinity. When SHBG rises, free testosterone falls — even if production is unchanged.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Vermeulen equation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Published in 1999 by Alex Vermeulen, this equation is today the gold standard for estimating free testosterone from routine lab values — and it correlates strongly with direct measurement by mass spectrometry.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-sm text-stone-700">
          <p class="mb-2"><strong>N</strong> = K<sub>A</sub> &times; (Albumin / 69 000) + 1</p>
          <p class="mb-2"><strong>a</strong> &times; FT² + <strong>b</strong> &times; FT + c = 0</p>
          <p class="mb-2">a = N &times; K<sub>T</sub></p>
          <p class="mb-2">b = N + K<sub>T</sub> &times; (SHBG &minus; Total)</p>
          <p>c = &minus;Total</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          K<sub>T</sub> = 1·10⁹ L/mol (SHBG binding), K<sub>A</sub> = 3.6·10⁴ L/mol (albumin binding). Solving the quadratic yields free testosterone in nmol/L.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reference ranges (adult men)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Marker</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Normal</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Low</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Total T</td><td class="px-6 py-3 text-stone-600">8.6 – 29 nmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 8 nmol/L</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Free T</td><td class="px-6 py-3 text-stone-600">200 – 620 pmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 200 pmol/L</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SHBG</td><td class="px-6 py-3 text-stone-600">10 – 57 nmol/L</td><td class="px-6 py-3 text-stone-600">&lt; 10 or &gt; 70</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>Endocrine Society</strong> defines hypogonadism as total testosterone &lt; 8 nmol/L (≈ 230 ng/dL) plus clinical symptoms. The 8–12 nmol/L range is a gray zone.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Symptoms of low testosterone</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Sexual</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Low libido, erectile dysfunction, absent morning erections.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Physical</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Loss of muscle despite training, central body fat gain, reduced bone density, hot flashes.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Mental</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Low motivation, depressed mood, poor concentration, sleep problems.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What affects your numbers</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Testosterone has a strong <strong>diurnal rhythm</strong>. Peak is between 7 and 10am, trough in late afternoon. A single afternoon measurement can run 20–40 % below the morning value — falsely suggesting deficiency.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>SHBG</strong> rises with hyperthyroidism, estrogen therapy, age, and liver disease. It drops with obesity, insulin resistance and Cushing's syndrome — the latter can artificially raise free T even though the hormonal axis is disturbed.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your free testosterone now</h3>
        <p class="text-stone-300 text-sm mb-5">Instant result with Vermeulen formula, reference-range comparison and hypogonadism flag — free, no sign-up.</p>
        <router-link
          :to="localePath('testosteroneLevel')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Natural ways to raise testosterone</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For mild deficiency, studies show 10–20 % higher levels through:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Resistance training</strong> with heavy compound lifts (squats, deadlifts, bench press) 3× per week</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sleep</strong>: 7–9 hours per night — even one week of 5 hours drops T by 10–15 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vitamin D</strong> at 40–60 ng/mL plus adequate zinc intake</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Weight loss</strong> if obese — every 10 kg lost adds about 2 nmol/L to total testosterone</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Reduce alcohol</strong> — chronic intake lowers T by 15–25 %</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Low testosterone often clusters with other risk factors. Check your <router-link :to="localeBlogPath('prostate-cancer-risk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">prostate cancer risk</router-link> after age 45, your <router-link :to="localeBlogPath('biological-age-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age</router-link> as a whole-body marker, and cover your <router-link :to="localeBlogPath('protein-requirements-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">protein requirements</router-link> to support muscle maintenance.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Total testosterone alone isn't enough — free testosterone is the better marker for actual symptoms. The Vermeulen equation lets you derive it from routine lab values. If your numbers are low and you have symptoms, see an endocrinologist or urologist. Use our <router-link :to="localePath('testosteroneLevel')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">testosterone calculator</router-link> for a quick first read.
        </p>
      </div>

      <RelatedArticles slug="testosterone-level-calculator" />
    </div>
  </article>
</template>
