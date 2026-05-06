<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Osteoporosis Risk Calculator: Understand Your 10-Year FRAX Fracture Risk | Health Calculators',
  description: 'Estimate your 10-year fracture risk with a FRAX-inspired osteoporosis calculator. Risk factors, T-score, treatment thresholds, and prevention — clearly explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Osteoporosis Risk Calculator: Understand Your 10-Year FRAX Fracture Risk',
    description: 'Estimate your 10-year fracture risk with a FRAX-inspired osteoporosis calculator. Risk factors, T-score, treatment thresholds, and prevention — clearly explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/osteoporosis-risk-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Osteoporosis Risk Calculator: Understand Your 10-Year FRAX Fracture Risk</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 6, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Worldwide, around <strong>200 million people have osteoporosis</strong> — most of them post-menopausal women. Each year, osteoporosis causes more than 9 million fragility fractures globally, including 1.6 million hip fractures with high morbidity and mortality. Yet osteoporosis is largely preventable and treatable — once it is recognized.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide shows how to estimate your <strong>10-year fracture risk</strong> with a FRAX-inspired score — without bone density (DXA) imaging, but precise enough to flag the need for clinical assessment.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is osteoporosis?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Osteoporosis is a systemic skeletal disease with <strong>reduced bone mass and disrupted micro-architecture</strong>. Bones become brittle — typical fracture sites are spine, hip, wrist, and humerus. About one in three women over 50 will experience an osteoporotic fracture in her remaining lifetime.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The diagnosis is based on bone density (BMD) measured by <strong>DXA at the femoral neck and lumbar spine</strong>. The T-score compares your BMD to that of young healthy adults: T ≤ -2.5 meets the WHO definition of osteoporosis, while -2.4 to -1.0 is osteopenia (a precursor state).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">FRAX — the gold standard for risk estimation</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The WHO developed FRAX (Fracture Risk Assessment Tool), an algorithm that calculates the <strong>10-year probability of major osteoporotic fracture</strong> from 11 clinical risk factors — optionally including bone density. FRAX underpins the treatment guidelines of NOF (USA) and DVO (Germany).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Our calculator translates FRAX logic into a simple point score — ideal as a pre-screen before getting a DXA scan.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 11 most important risk factors</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risk factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Points</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Why it matters</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Age</td><td class="px-6 py-3 text-stone-600">0–7</td><td class="px-6 py-3 text-stone-600">Strongest non-modifiable factor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Female sex</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Estrogen loss after menopause</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">BMI &lt; 19</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Underweight reduces bone mass</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Previous fracture</td><td class="px-6 py-3 text-stone-600">+3</td><td class="px-6 py-3 text-stone-600">Strongest modifiable predictor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Parent hip fracture</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Strongest genetic factor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Smoking</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Inhibits osteoblasts, impairs healing</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Glucocorticoids ≥ 3 mo</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">#1 cause of secondary osteoporosis</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Rheumatoid arthritis</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Inflammation plus glucocorticoids</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Secondary causes</td><td class="px-6 py-3 text-stone-600">+1</td><td class="px-6 py-3 text-stone-600">Type 1 diabetes, hyperthyroidism, early menopause</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Alcohol ≥ 3 units/day</td><td class="px-6 py-3 text-stone-600">+2</td><td class="px-6 py-3 text-stone-600">Inhibits osteoblasts, raises fall risk</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">T-score (DXA)</td><td class="px-6 py-3 text-stone-600">0–3</td><td class="px-6 py-3 text-stone-600">Optional, when bone density is known</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your osteoporosis risk now</h3>
        <p class="text-stone-300 text-sm mb-5">FRAX-based 10-year fracture risk from age, BMI, and 8 risk factors — instant, anonymous, no sign-up.</p>
        <router-link
          :to="localePath('osteoporosisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Try the calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When is treatment indicated?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Most guidelines recommend pharmacologic therapy when the <strong>10-year major fracture risk exceeds 20 %</strong> — corresponding to ≥ 8 points in our calculator. Other clear treatment indications:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">DXA T-score ≤ -2.5</li>
          <li class="text-base text-stone-600 leading-relaxed">Prevalent vertebral fracture (radiographically confirmed)</li>
          <li class="text-base text-stone-600 leading-relaxed">Hip fracture without adequate trauma</li>
          <li class="text-base text-stone-600 leading-relaxed">Long-term glucocorticoid therapy ≥ 7.5 mg prednisone equivalent</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Treatment options</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Bisphosphonates</strong> (alendronate, risedronate, zoledronate): first-line, oral or IV, reduce fracture rates by ~50 %.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Denosumab</strong>: anti-RANKL antibody every 6 months SC — caution when stopping (rebound fractures).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Teriparatide</strong>: PTH analog, anabolic, for severe osteoporosis with high fracture risk.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Romosozumab</strong>: sclerostin antibody, dual-acting, an option for very high risk.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Baseline therapy</strong>: always 1000 mg calcium and 800–1000 IU vitamin D — see our <router-link :to="localeBlogPath('vitamin-d-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">vitamin D calculator</router-link>.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Prevention: what you can do</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Weight-bearing &amp; resistance exercise:</strong> 2–3× per week, ideally with jumping or strength training against resistance.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Protein:</strong> 1.0–1.2 g per kg body weight, evenly spread across the day.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Calcium:</strong> 1000 mg/day, ideally from dairy and calcium-rich water.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vitamin D:</strong> 800–1000 IU/day, more if deficient or with low sun exposure.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Fall prevention:</strong> check vision, wear non-slip footwear, secure your home.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Avoid:</strong> tobacco, alcohol &gt; 2 units/day, sustained underweight.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bone health is tied to other metabolic and lifestyle factors. The
          <router-link :to="localeBlogPath('vitamin-d-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">vitamin D calculator</router-link>
          helps you set the right dose for adequate calcium absorption. The
          <router-link :to="localeBlogPath('biological-age-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age calculator</router-link>
          gives a holistic view of your aging trajectory — bone and muscle mass are part of it. And if you are underweight, start with the
          <router-link :to="localeBlogPath('calculate-bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI calculator</router-link>
          — low BMI is an established fracture risk factor.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Osteoporosis develops silently over years — the first fracture is often the first symptom. With our
          <router-link :to="localePath('osteoporosisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">osteoporosis risk calculator</router-link>
          you can see in seconds whether a DXA scan is warranted. Early diagnosis combined with consistent baseline and (when needed) pharmacologic therapy demonstrably halves fracture incidence.
        </p>
      </div>

      <RelatedArticles slug="osteoporosis-risk-calculator-guide" />
    </div>
  </article>
</template>
