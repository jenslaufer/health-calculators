<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between PMS and PMDD?',
      acceptedAnswer: { '@type': 'Answer', text: 'PMS is common (up to 75 % of women). PMDD is a severe form with marked quality-of-life impact (3–8 % of women). In PMDD, mood symptoms dominate (anger, depression, anxiety).' },
    },
    {
      '@type': 'Question',
      name: 'What is the Premenstrual Symptoms Screening Tool (PSST)?',
      acceptedAnswer: { '@type': 'Answer', text: 'The PSST is a 2003 questionnaire validated by Steiner with 14 symptom items and 5 functional impairment items, mirroring the DSM-5 criteria for PMDD.' },
    },
    {
      '@type': 'Question',
      name: 'Which treatments work for PMDD?',
      acceptedAnswer: { '@type': 'Answer', text: 'SSRIs (fluoxetine, sertraline) including luteal-phase-only dosing, combined contraceptive pills with drospirenone (24/4 regimen, FDA-approved for PMDD), calcium, exercise and cognitive behavioral therapy.' },
    },
  ],
}

useHead({
  title: 'PMS Symptom Calculator: PSST Score, PMDD Diagnosis & Treatment | Health Calculators',
  description: 'Score premenstrual syndrome (PMS) and premenstrual dysphoric disorder (PMDD) with the Steiner PSST questionnaire. 14 symptoms, 5 impairment areas, clear treatment guidance.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PMS Symptom Calculator: PSST Score, PMDD Diagnosis and the Path to Treatment',
      description: 'Score premenstrual syndrome (PMS) and premenstrual dysphoric disorder (PMDD) with the Steiner PSST questionnaire. 14 symptoms, 5 impairment areas, clear treatment guidance.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/pms-symptom-calculator-guide',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PMS Symptom Calculator: PSST Score, PMDD Diagnosis and the Path to Treatment</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Almost every woman knows <strong>premenstrual syndrome (PMS)</strong> — mild mood swings, breast tenderness and fatigue in the week before your period. But for 3 to 8 % of women, it crosses into a distinct disorder: <strong>premenstrual dysphoric disorder (PMDD)</strong>. It is severe. It is real. And it is highly treatable.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>Premenstrual Symptoms Screening Tool (PSST)</strong> helps tell them apart. It mirrors the DSM-5 criteria for PMDD and gives you a clear starting point for the conversation with your gynecologist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is PMS, what is PMDD?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PMS and PMDD are both tied to the <strong>luteal phase</strong> of the cycle — the 1 to 2 weeks before your period. Symptoms resolve with the onset of bleeding. If symptoms persist into the first half of the cycle, something else is likely (depression, anxiety disorder, thyroid disease).
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Feature</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PMS</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">PMDD</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Prevalence</td><td class="px-6 py-3 text-stone-600">up to 75 %</td><td class="px-6 py-3 text-stone-600">3–8 %</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Main symptoms</td><td class="px-6 py-3 text-stone-600">Physical + mild psychological</td><td class="px-6 py-3 text-stone-600">Severe affective (anger, anxiety, depression)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Impairment</td><td class="px-6 py-3 text-stone-600">mild to moderate</td><td class="px-6 py-3 text-stone-600">severe, quality of life clearly reduced</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">DSM-5</td><td class="px-6 py-3 text-stone-600">not a diagnosis</td><td class="px-6 py-3 text-stone-600">distinct psychiatric diagnosis</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The PSST — 14 symptoms, 5 life areas</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>Premenstrual Symptoms Screening Tool</strong> was developed by Steiner et al. in 2003. It has two parts: 14 symptom items and 5 functional impairment items. Each is rated on a 4-point scale (0 = not at all, 3 = severe).
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Group</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Items</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Core (4)</td><td class="px-6 py-3 text-stone-600">Anger/irritability, anxiety, tearfulness, depressed mood</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Additional (10)</td><td class="px-6 py-3 text-stone-600">Interest, concentration, fatigue, food cravings, sleep, overwhelm, physical symptoms</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Impairment (5)</td><td class="px-6 py-3 text-stone-600">Work, coworkers, family, social life, home responsibilities</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The PSST criteria</h2>
        <div class="bg-white border border-stone-200 rounded-xl p-6 mb-4">
          <h3 class="text-base font-semibold text-stone-900 mb-2">PMDD (all three conditions)</h3>
          <ul class="list-disc pl-6 text-sm text-stone-600 leading-relaxed space-y-1">
            <li>≥ 1 core symptom <strong>severe</strong> (level 3)</li>
            <li>≥ 4 additional symptoms <strong>moderate or severe</strong> (level ≥ 2)</li>
            <li>≥ 1 impairment area <strong>severe</strong> (level 3)</li>
          </ul>
        </div>
        <div class="bg-white border border-stone-200 rounded-xl p-6 mb-4">
          <h3 class="text-base font-semibold text-stone-900 mb-2">Moderate to severe PMS</h3>
          <ul class="list-disc pl-6 text-sm text-stone-600 leading-relaxed space-y-1">
            <li>≥ 1 core symptom <strong>moderate or severe</strong></li>
            <li>≥ 4 additional symptoms <strong>moderate or severe</strong></li>
            <li>≥ 1 impairment area <strong>moderate or severe</strong></li>
          </ul>
        </div>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your PSST score now</h3>
        <p class="text-stone-300 text-sm mb-5">14 symptoms, 5 impairment areas, clear PMDD assessment per Steiner 2003. Free, instant, no sign-up.</p>
        <router-link
          :to="localePath('pmsSymptom')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate PSST score &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Treatment — what actually helps</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Lifestyle for mild PMS</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Regular exercise (3–5×/week, also in the luteal phase), sleep hygiene, stress reduction, less alcohol and caffeine. Calcium 1,000–1,200 mg/day, vitamin B6 50–100 mg, magnesium 200–400 mg — evidence-based, mild effect.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Chasteberry (Vitex agnus-castus)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Effective in multiple RCTs for moderate PMS. Mild effect profile, side effects rare. First choice for those preferring herbal options.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Combined pill with drospirenone</h3>
            <p class="text-sm text-stone-600 leading-relaxed">24/4 regimen (e.g. Yaz, Yasmin). FDA-approved for PMDD, with clear evidence against both affective and physical symptoms. Classic 21/7 pills are often less effective.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">SSRIs for PMDD</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Fluoxetine, sertraline or paroxetine are first-line for PMDD. Effective also as luteal-phase-only dosing — effect within the first week. Treatment of choice when mood symptoms dominate.</p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Cognitive behavioral therapy (CBT)</h3>
            <p class="text-sm text-stone-600 leading-relaxed">Effective for moderate-to-severe PMS and PMDD. Works especially well for irritability, depressed mood and coping strategies.</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When to see a gynecologist?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          At the latest with moderate-to-severe PMS or a PMDD suspicion. Bring a <strong>cycle diary</strong> covering at least 2 cycles to your appointment (daily notes on mood, sleep, symptoms). That is the foundation of any DSM-5 PMDD diagnosis.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          If your cycle is markedly irregular or you notice signs of hyperandrogenism, also check the
          <router-link :to="localeBlogPath('pcos-symptom-checker')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PCOS symptom checker</router-link>.
          To pin down the start of your luteal phase, use the
          <router-link :to="localeBlogPath('calculate-ovulation')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">ovulation calculator</router-link>.
          For an overall understanding of your cycle, the
          <router-link :to="localeBlogPath('period-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">period calculator guide</router-link>
          maps every phase, hormonal pattern and interpretation tip.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          PMS is common — PMDD is real, severe and often goes unrecognized for years. The PSST separates them reliably and gives you a clear baseline for your next appointment. Start with the
          <router-link :to="localePath('pmsSymptom')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">PMS symptom calculator</router-link>,
          keep a cycle diary and talk to your gynecologist — effective treatments exist for every severity level.
        </p>
      </div>

      <RelatedArticlesEn slug="pms-symptom-calculator-guide" />
    </div>
  </article>
</template>
