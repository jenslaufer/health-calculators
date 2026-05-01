<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PCOS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Polycystic ovary syndrome is a hormonal disorder with elevated androgens, ovulatory dysfunction and often polycystic ovaries — affecting roughly 5–10 % of women of reproductive age.' },
    },
    {
      '@type': 'Question',
      name: 'What are the Rotterdam criteria?',
      acceptedAnswer: { '@type': 'Answer', text: 'The international diagnostic standard (ESHRE/ASRM 2003): ovulatory dysfunction, hyperandrogenism, or polycystic ovaries — two of three are required.' },
    },
    {
      '@type': 'Question',
      name: 'What symptoms are typical?',
      acceptedAnswer: { '@type': 'Answer', text: 'Irregular or missed cycles, acne, hirsutism, scalp hair thinning, weight gain, acanthosis nigricans, and difficulty conceiving.' },
    },
  ],
}

useHead({
  title: 'PCOS Symptom Checker: Rotterdam Criteria, Signs & Diagnosis Path | Health Calculators',
  description: 'PCOS symptom checker — irregular cycles, hyperandrogenism, acanthosis nigricans and fertility issues. With Rotterdam criteria, diagnosis pathway and a free PCOS screener.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PCOS Symptom Checker: Rotterdam Criteria, Signs and the Path to Diagnosis',
      description: 'PCOS symptom checker — irregular cycles, hyperandrogenism, acanthosis nigricans and fertility issues. With Rotterdam criteria, diagnosis pathway and a free PCOS screener.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-01',
      dateModified: '2026-05-01',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/pcos-symptom-checker',
      },
    },
    faqJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PCOS Symptom Checker: Rotterdam Criteria, Signs and the Path to Diagnosis</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 1, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Polycystic ovary syndrome (PCOS)</strong> is the most common endocrine disorder in women of reproductive age — and the most commonly missed. About <strong>5–10 % of women</strong> are affected, yet many wait years for a diagnosis.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article walks through the typical symptoms, the international Rotterdam criteria and the clear path to diagnosis — so you can step into a gynecology visit with a focused, evidence-backed suspicion.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The Rotterdam criteria (2 of 3 required)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Since 2003 the <strong>Rotterdam criteria</strong> (ESHRE/ASRM) have been the international gold standard for PCOS diagnosis. PCOS is met when two of these three are present:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">1. Ovulatory dysfunction (oligo- or anovulation)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Cycles longer than 35 days, shorter than 21 days, or fewer than 8 menses per year.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">2. Hyperandrogenism</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Clinical (hirsutism, acne, androgenic alopecia) or biochemical (testosterone, free androgen index).</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">3. Polycystic ovaries on ultrasound</h3>
            <p class="text-sm text-stone-600 leading-relaxed">≥ 20 follicles per ovary or ovarian volume ≥ 10 mL — assessed by transvaginal ultrasound.</p>
          </div>
        </div>
        <p class="text-sm text-stone-500 leading-relaxed mt-4">
          Important: other causes (hyperprolactinemia, thyroid disease, NCAH) must be ruled out first.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Typical symptoms — and what they mean</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Symptom</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Background</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Irregular cycles</td><td class="px-6 py-3 text-stone-600">Anovulation driven by disturbed LH/FSH regulation</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hirsutism</td><td class="px-6 py-3 text-stone-600">Elevated androgens, modified Ferriman-Gallwey ≥ 8</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Acne, oily skin</td><td class="px-6 py-3 text-stone-600">Sebum production driven by testosterone</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Scalp hair thinning</td><td class="px-6 py-3 text-stone-600">Androgenic alopecia, classically a wider parting</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Weight gain, central obesity</td><td class="px-6 py-3 text-stone-600">Insulin resistance and impaired glucose handling</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Acanthosis nigricans</td><td class="px-6 py-3 text-stone-600">Dark velvety patches — direct skin marker of insulin resistance</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Difficulty conceiving</td><td class="px-6 py-3 text-stone-600">Anovulation is the leading cause of infertility in PCOS</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Insulin resistance: the hidden driver</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Up to 70 % of women with PCOS have <strong>insulin resistance</strong> — independent of body weight. High insulin amplifies ovarian androgen output and suppresses SHBG in the liver, increasing free testosterone. Acanthosis nigricans (dark velvety patches in skin folds) is the classic clinical clue.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          A fasting insulin level or an oral glucose tolerance test belongs in any PCOS work-up. See the
          <router-link :to="localeBlogPath('diabetes-risk-score')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk article</router-link> — the metabolic link runs deep.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Run a PCOS symptom check</h3>
        <p class="text-stone-300 text-sm mb-5">Score 9 typical signs along the Rotterdam criteria — with a clear next-step recommendation. Free, instant, no sign-up.</p>
        <router-link
          :to="localePath('pcosSymptoms')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Start symptom check &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The path to a diagnosis</h2>
        <ol class="list-decimal list-inside space-y-2 text-base text-stone-600 leading-relaxed mb-4">
          <li><strong>Cycle log</strong> over 3–6 months (period tracker app or basal body temperature).</li>
          <li><strong>Hormone panel</strong> in the early follicular phase (day 2–5): testosterone, SHBG, free androgen index, DHEAS, LH/FSH, estradiol, prolactin, TSH, 17-OH-progesterone.</li>
          <li><strong>Metabolic labs</strong>: fasting insulin, HbA1c, OGTT, lipid panel.</li>
          <li><strong>Transvaginal ultrasound</strong> during the follicular phase for follicle count and ovarian volume.</li>
          <li><strong>Rule out differentials</strong>: hyperprolactinemia, thyroid disease, non-classic adrenal hyperplasia, Cushing's.</li>
        </ol>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What helps — therapy in a nutshell</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lifestyle</h3>
            <p class="text-sm text-stone-600 leading-relaxed">A 5–10 % weight loss often restores cycles in those with overweight and lowers androgens measurably. Strength training improves insulin sensitivity.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Medication</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Metformin (insulin resistance), combined oral contraceptive (cycle, acne, hirsutism), spironolactone (antiandrogen), letrozole for ovulation induction.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Supplements</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Inositol (myo / D-chiro 40:1) has improved cycles and ovulation in trials. Correct vitamin D deficiency where present.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PCOS sits at the intersection of cycle, ovulation and metabolic health. Track your cycle with the
          <router-link :to="localeBlogPath('period-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">period calculator</router-link>,
          plan
          <router-link :to="localeBlogPath('calculate-ovulation')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">ovulation</router-link>,
          and check your
          <router-link :to="localeBlogPath('diabetes-risk-score')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk</router-link>
          — three numbers that together paint a clear picture of reproductive-metabolic health.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          PCOS is a high-leverage diagnosis: once recognized, lifestyle and medication work well — cycles, skin, hair and fertility often improve substantially. The first step is taking the symptoms seriously. Start with the
          <router-link :to="localePath('pcosSymptoms')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PCOS symptom checker</router-link> and bring an evidence-based picture to your next appointment.
        </p>
      </div>

      <RelatedArticles slug="pcos-symptom-checker" />
    </div>
  </article>
</template>
