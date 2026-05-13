<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'FFMI Calculator: How to Read Your Fat-Free Mass Index | Health Calculators',
  description: 'Calculate FFMI from weight, height and body fat. Normalized FFMI by Kouri, natural-athlete cutoffs, BMI comparison and training recommendations.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'FFMI Calculator: How to Read Your Fat-Free Mass Index',
    description: 'Calculate FFMI from weight, height and body fat. Normalized FFMI by Kouri, natural-athlete cutoffs, BMI comparison and training recommendations.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/ffmi-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">FFMI Calculator: How to Read Your Fat-Free Mass Index</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>Fat-Free Mass Index (FFMI)</strong> is the most honest answer to „am I muscular?". Where BMI wrongly labels muscular athletes as „overweight", FFMI only counts fat-free mass — muscle, bone, organs, water — relative to height. The result is a number that makes bodybuilders, strength athletes and recreational lifters comparable across every height class.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains the formula, the Kouri normalization, and why 25 is treated as the statistical ceiling for natural training.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula in three steps</h2>
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Fat-free mass:</strong> FFM (kg) = body weight × (1 − body fat % / 100). Example: 80 kg at 15 % body fat → 68 kg FFM.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>FFMI:</strong> FFMI = FFM / height in meters². At 1.80 m: 68 / 3.24 = 20.99.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Normalize to 1.80 m:</strong> normFFMI = FFMI + 6.1 × (1.80 − height_in_m). Short and tall athletes now share one scale.</li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FFMI classification for men and women</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Range</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Men</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Women</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Typical profile</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Below average</td><td class="px-6 py-3 text-stone-600">&lt; 18</td><td class="px-6 py-3 text-stone-600">&lt; 13</td><td class="px-6 py-3 text-stone-600">Untrained, slim build</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Average</td><td class="px-6 py-3 text-stone-600">18–20</td><td class="px-6 py-3 text-stone-600">13–15</td><td class="px-6 py-3 text-stone-600">Untrained normal range</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Above average</td><td class="px-6 py-3 text-stone-600">20–25</td><td class="px-6 py-3 text-stone-600">15–19</td><td class="px-6 py-3 text-stone-600">Recreational + competitive athletes</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Top 1 %</td><td class="px-6 py-3 text-stone-600">25–28</td><td class="px-6 py-3 text-stone-600">19–22</td><td class="px-6 py-3 text-stone-600">Natural elite athletes</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Physiologically unlikely</td><td class="px-6 py-3 text-stone-600">&gt; 28</td><td class="px-6 py-3 text-stone-600">&gt; 22</td><td class="px-6 py-3 text-stone-600">Statistically only with anabolics</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Source:</strong> Kouri EM, Pope HG Jr, Katz DL, Oliva P. „Fat-free mass index in users and nonusers of anabolic-androgenic steroids." Clin J Sport Med 1995. The study examined 157 natural bodybuilders and 83 steroid users — the highest natural FFMI was 25.0.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your FFMI now</h3>
        <p class="text-stone-300 text-sm mb-5">Weight, height, body fat — instant FFMI, normalized value and classification against natural athletes.</p>
        <router-link
          :to="localePath('ffmiRechner')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FFMI vs. BMI — the key difference</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI</router-link> makes no distinction between fat and muscle. A bodybuilder weighing 100 kg at 1.85 m has BMI 29.2 — flagged as „overweight" even at under 10 % body fat. FFMI solves this by removing fat mass from the equation. For a complete picture, combine
          <router-link :to="localeBlogPath('calculate-body-fat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">body fat percentage</router-link> and
          <router-link :to="localeBlogPath('calculate-lean-body-mass')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">lean body mass</router-link> with your FFMI.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How accurate must body fat measurement be?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Very accurate. A 3-percentage-point error shifts FFMI by about 0.6 — enough to move you across a category line. The methods compared:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>DEXA scan:</strong> Gold standard, accuracy ±1–2 %. Available at sports clinics and radiology practices from around $100.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Hydrostatic weighing:</strong> Classic gold standard, underwater weighing, ±1–2 % — rarely available outside research labs.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Calipers (skinfold):</strong> 3- or 7-site method, ±3–5 %, operator-dependent.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bioimpedance scales:</strong> ±3–8 %, drift with hydration and meals. Measure at the same time of day.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Using FFMI in your training plan</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          FFMI is a <strong>trend marker</strong> — it shows over months and years whether your training is building real muscle. Three hypertrophy levers matter most: progressive overload (more weight or reps), 1.6–2.2 g of protein per kg bodyweight, and a moderate caloric surplus. With your
          <router-link :to="localePath('tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">daily energy needs</router-link>
          known, eating 200–500 kcal over maintenance keeps fat gain in check while muscle grows.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Realistic expectations: beginners add 1.5–2.5 FFMI points in year one. Advanced lifters add 0.3–0.8 per year. Going from FFMI 21 to 24 is at least a three-year project — and every step closer to 25 gets exponentially harder.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          FFMI is one piece of the body composition puzzle. After running it, dig deeper with the
          <router-link :to="localeBlogPath('calculate-lean-body-mass')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Lean Body Mass calculator</router-link>
          (alternative estimate if no body fat measurement is available), the
          <router-link :to="localeBlogPath('calculate-body-fat')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Body Fat calculator</router-link>
          (U.S. Navy method from circumference measurements), the classic
          <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI calculator</router-link>
          for contrast, and the
          <router-link :to="localeBlogPath('calculate-tdee')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">TDEE calculator</router-link>
          to lock in the right energy intake for muscle gain.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          FFMI is the single best number for tracking muscle mass over time — fairer than BMI, more telling than scale weight. With our
          <router-link :to="localePath('ffmiRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">FFMI calculator</router-link>
          the math takes 30 seconds. The caveat: it is only as good as your body fat measurement — DEXA or a well-trained caliper operator are required if you want more than rough orientation.
        </p>
      </div>

      <RelatedArticles slug="ffmi-calculator-guide" />
    </div>
  </article>
</template>
