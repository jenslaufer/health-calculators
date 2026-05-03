<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Cardiovascular Risk Calculator: Framingham, SCORE2 and What the Numbers Mean | Health Calculators',
  description: 'Estimate your 10-year risk of heart attack and stroke with Framingham/SCORE2. Cholesterol, blood pressure, lifestyle — and what actually moves the needle.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cardiovascular Risk Calculator: Framingham, SCORE2 and What the Numbers Mean',
    description: 'Estimate your 10-year risk of heart attack and stroke with Framingham/SCORE2. Cholesterol, blood pressure, lifestyle — and what actually moves the needle.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-02',
    dateModified: '2026-05-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/cardiovascular-risk-framingham',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Cardiovascular Risk Calculator: Framingham, SCORE2 and What the Numbers Mean</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 2, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Cardiovascular disease is the leading cause of death worldwide — over <strong>17 million people per year</strong>. The good news: up to 80 % of these events are preventable through early detection and a few well-known interventions.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains the established risk scores (<strong>Framingham</strong> and <strong>SCORE2</strong>), how to read your 10-year risk realistically, and which levers move the needle the most.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why calculate at all?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A single value like blood pressure or LDL says little about actual risk. Only the <em>combination</em> of all factors — age, sex, cholesterol, blood pressure, smoking, diabetes — gives a reliable picture. That's exactly what <strong>risk scores</strong> do: they translate several values into a single percentage, your 10-year risk.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Example: a 55-year-old man with an LDL of 160 mg/dL might have a 5 % or a 25 % risk depending on the rest of his profile. That has direct consequences for treatment decisions.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The major scores at a glance</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Region</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Age</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Endpoint</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Framingham</td><td class="px-6 py-3 text-stone-600">USA</td><td class="px-6 py-3 text-stone-600">30–79</td><td class="px-6 py-3 text-stone-600">fatal + non-fatal</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SCORE2</td><td class="px-6 py-3 text-stone-600">Europe (ESC)</td><td class="px-6 py-3 text-stone-600">40–69</td><td class="px-6 py-3 text-stone-600">fatal + non-fatal</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">SCORE2-OP</td><td class="px-6 py-3 text-stone-600">Europe</td><td class="px-6 py-3 text-stone-600">≥ 70</td><td class="px-6 py-3 text-stone-600">fatal + non-fatal</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">ASCVD (PCE)</td><td class="px-6 py-3 text-stone-600">USA (AHA/ACC)</td><td class="px-6 py-3 text-stone-600">40–79</td><td class="px-6 py-3 text-stone-600">infarction + stroke</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed">
          Our calculator implements the <strong>Framingham General CVD model</strong> by D'Agostino (Circulation 2008). It gives well-validated, intuitive results across both US and European populations.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 6 risk factors that count</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">1. Age and sex</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Men reach a comparable risk roughly <strong>10 years earlier</strong> than women. After menopause the gap closes — estrogen is protective until then.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">2. Cholesterol (total and HDL)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Not LDL alone, but the <strong>ratio with HDL</strong> matters. A 1 mmol/L (≈ 39 mg/dL) reduction in LDL lowers cardiovascular events by 22 % (CTT meta-analysis, Lancet 2010).
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">3. Blood pressure</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hypertension from <strong>140/90 mmHg</strong>. A 10 mmHg reduction in systolic BP lowers heart attacks by 17 % and strokes by 27 % (Ettehad, Lancet 2016).
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">4. Smoking</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Current smokers have <strong>2-3× the risk</strong>. After 5 years of abstinence the risk halves; after 15 years it approaches that of non-smokers.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">5. Diabetes mellitus</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Diabetes doubles cardiovascular risk independent of other factors. Even prediabetes (HbA1c 5.7–6.4 %) raises risk meaningfully.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">6. Family history</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Premature coronary disease in a parent or sibling (men &lt; 55 y, women &lt; 65 y) raises risk by 50 %. Not captured by standard scores — discuss with your physician.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your 10-year risk now</h3>
        <p class="text-stone-300 text-sm mb-5">7 inputs, instant risk band including heart age — anonymous, no sign-up.</p>
        <router-link
          :to="localePath('cardiovascularRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open the calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">How to read your result</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">10-year risk</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Category</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">&lt; 5 %</td><td class="px-6 py-3 text-green-600 font-semibold">low</td><td class="px-6 py-3 text-stone-600">Maintain lifestyle, check every 4–6 years</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7.5 %</td><td class="px-6 py-3 text-yellow-600 font-semibold">borderline</td><td class="px-6 py-3 text-stone-600">Intensify lifestyle, annual check</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7.5 – 20 %</td><td class="px-6 py-3 text-orange-600 font-semibold">intermediate</td><td class="px-6 py-3 text-stone-600">Discuss statin eligibility with physician</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">≥ 20 %</td><td class="px-6 py-3 text-red-600 font-semibold">high</td><td class="px-6 py-3 text-stone-600">Statin + BP control usually indicated</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What actually works — evidence-based</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Lifestyle interventions are well documented — and often more effective than medication:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mediterranean diet</strong> (PREDIMED, NEJM 2018): olive oil, nuts, fish, lots of vegetables — lowers risk by 30 %.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>150 min/week of moderate exercise</strong>: halves heart attack risk (WHO, Lancet 2020).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Smoking cessation</strong>: 50 % risk reduction within 5 years.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Statins</strong> at intermediate/high risk: −22 % events per mmol/L LDL reduction.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>BP reduction</strong> to &lt; 130/80 mmHg: −20 % strokes.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>5–10 % weight loss</strong> in obesity: improves all risk factors simultaneously.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When to see a doctor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Have your physician check your risk regularly from <strong>age 40</strong>. Seek immediate care for:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed">Chest tightness or pressure, possibly radiating into arm/jaw</li>
          <li class="text-base text-stone-600 leading-relaxed">Sudden shortness of breath or unexplained fatigue on exertion</li>
          <li class="text-base text-stone-600 leading-relaxed">Dizziness, palpitations or irregular pulse</li>
          <li class="text-base text-stone-600 leading-relaxed">Strong family history (heart attack &lt; 55/65 years)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Cardiovascular risk is connected to many markers. Also check your
          <router-link :to="localeBlogPath('cholesterol-ratio')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">cholesterol ratio</router-link>,
          your
          <router-link :to="localeBlogPath('diabetes-risk-score')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk</router-link>
          and how to
          <router-link :to="localeBlogPath('measure-blood-pressure')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">measure blood pressure correctly</router-link>.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The 10-year risk is one of the most powerful numbers in preventive medicine: it makes lifestyle decisions measurable and comparable. Calculate yours with our
          <router-link :to="localePath('cardiovascularRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">cardiovascular risk calculator</router-link>
          — and discuss elevated values with your physician.
        </p>
      </div>

      <RelatedArticles slug="cardiovascular-risk-framingham" />
    </div>
  </article>
</template>
