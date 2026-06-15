<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'PHQ-9 Depression Test: Screening for Depression — Score & Bands | Health Calculators',
  description: 'Understand the PHQ-9 depression screening: 9 questions, score 0–27, five severity bands from minimal to severe. Cutoff 10, item 9 on self-harm, Kroenke 2001 — with free online calculator.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'PHQ-9 Depression Test: Screening for Depression — Score & Bands',
      description: 'How troubled are you by depression symptoms? The PHQ-9 is a validated 9-question screening for depression. What the five severity bands mean, why item 9 on self-harm matters regardless of the total score, and what to do next.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-16',
      dateModified: '2026-06-16',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/phq-9-depression-test-calculator',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does the PHQ-9 measure?',
          acceptedAnswer: { '@type': 'Answer', text: 'The PHQ-9 measures the frequency of nine core symptoms of depression over the past 2 weeks. It is validated as a screening and severity tool.' },
        },
        {
          '@type': 'Question',
          name: 'What do the score bands mean?',
          acceptedAnswer: { '@type': 'Answer', text: '0–4 minimal, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe depression symptoms. A score ≥ 10 is the commonly used cutoff for further clinical evaluation.' },
        },
        {
          '@type': 'Question',
          name: 'What does question 9 about self-harm mean?',
          acceptedAnswer: { '@type': 'Answer', text: 'Item 9 asks about thoughts of being better off dead or of hurting yourself. Any answer other than “Not at all” means you should seek help immediately, regardless of your total score — contact your local emergency services or a crisis line right now.' },
        },
        {
          '@type': 'Question',
          name: 'Is the PHQ-9 a diagnosis?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The PHQ-9 is a screening tool, not a medical diagnosis. Depression is confirmed through clinical evaluation with a healthcare professional.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">PHQ-9 Depression Test: Screening for Depression</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">June 16, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          How troubled are you by <strong>depression symptoms</strong>? The <strong>PHQ-9</strong> (Patient Health Questionnaire, 9 items) provides a validated answer in nine questions and is today the most widely used tool for screening depression in primary care, mental-health settings and research worldwide.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how the PHQ-9 works, what the five severity bands mean, why the ninth question on self-harm plays a special role, and what to do after you see your result.
        </p>
      </div>

      <!-- Prominent disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed font-medium">
          This is a screening tool, not a medical diagnosis. If your score is 10 or above, or you have concerns, please consult a healthcare professional. If you have thoughts of self-harm, get help now — contact your local emergency services or a crisis line immediately (US: call or text 988; UK: 116 123).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the PHQ-9?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The PHQ-9 was developed and validated in 2001 by Kroenke, Spitzer and Williams in the <em>Journal of General Internal Medicine</em>. It maps the nine core symptoms of major depression from the DSM diagnostic manual directly into questions and asks how often they have bothered you over the past <strong>2 weeks</strong>. Each item is scored 0 (Not at all) to 3 (Nearly every day), with a total range of 0–27.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          At a cutoff of 10, the PHQ-9 has a sensitivity and specificity of roughly 88 % each for major depression. It is in the public domain and free to use — one reason for its global adoption.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The nine questions</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          “Over the last 2 weeks, how often have you been bothered by any of the following problems?”
        </p>
        <ol class="space-y-3 mb-4 list-decimal list-inside">
          <li class="text-stone-600 text-base"><strong>Little interest or pleasure in doing things</strong></li>
          <li class="text-stone-600 text-base"><strong>Feeling down, depressed, or hopeless</strong></li>
          <li class="text-stone-600 text-base"><strong>Trouble falling or staying asleep, or sleeping too much</strong></li>
          <li class="text-stone-600 text-base"><strong>Feeling tired or having little energy</strong></li>
          <li class="text-stone-600 text-base"><strong>Poor appetite or overeating</strong></li>
          <li class="text-stone-600 text-base"><strong>Feeling bad about yourself — or that you are a failure</strong></li>
          <li class="text-stone-600 text-base"><strong>Trouble concentrating on things</strong></li>
          <li class="text-stone-600 text-base"><strong>Moving or speaking slowly — or the opposite, being fidgety or restless</strong></li>
          <li class="text-stone-600 text-base"><strong>Thoughts that you would be better off dead, or of hurting yourself</strong></li>
        </ol>
        <p class="text-base text-stone-600 leading-relaxed">
          Response options: Not at all (0), Several days (1), More than half the days (2), Nearly every day (3).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Severity bands</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Severity</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Meaning</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">0 – 4</td>
                <td class="px-6 py-3 text-stone-600">Minimal</td>
                <td class="px-6 py-3 text-stone-600">Minimal symptoms — keep monitoring</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5 – 9</td>
                <td class="px-6 py-3 text-stone-600">Mild</td>
                <td class="px-6 py-3 text-stone-600">Self-care, support, re-test in 2–4 weeks</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10 – 14</td>
                <td class="px-6 py-3 text-stone-600">Moderate</td>
                <td class="px-6 py-3 text-stone-600">Consult a healthcare professional, further evaluation</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 19</td>
                <td class="px-6 py-3 text-stone-600">Moderately severe</td>
                <td class="px-6 py-3 text-stone-600">Seek professional help promptly — active treatment recommended</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">20 – 27</td>
                <td class="px-6 py-3 text-stone-600">Severe</td>
                <td class="px-6 py-3 text-stone-600">Seek professional help promptly — treatment strongly recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A <strong>cutoff of 10</strong> is the established threshold for further clinical evaluation. A change of <strong>≥ 5 points</strong> on follow-up is considered clinically meaningful and useful for tracking response to treatment.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The special role of question 9</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Unlike every other item, the <strong>ninth question on self-harm</strong> stands on its own. It asks about thoughts of being better off dead or of hurting yourself. Anyone who selects more than “Not at all” here should seek support immediately — <strong>regardless of the total score</strong>, even if the other eight questions are low and the total sits in the minimal range.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          That is exactly why the calculator shows a separate, prominently highlighted note whenever item 9 is positive. A low total with a positive item 9 is the critical case that is easily missed. Suicidal thoughts are a medical emergency — please do not hesitate to reach out for help.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What the PHQ-9 does not replace</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The PHQ-9 captures <strong>symptom frequency</strong>, not cause. Hypothyroidism, iron deficiency, chronic sleep loss, certain medications and other medical conditions can mimic a depression picture. An elevated score should therefore always be put in context by a clinician.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The PHQ-9 also does not separate depression from anxiety — the two frequently occur together. In practice, the PHQ-9 and the <router-link :to="localePath('gad7')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GAD-7</router-link> are therefore often used together.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What to do next</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score &lt; 5:</strong> Symptoms minimal. Keep monitoring and reduce stressors.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score 5–9:</strong> Self-care — sleep, exercise, social contact, daily structure. Re-test in 2–4 weeks.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score ≥ 10:</strong> Make an appointment with your GP or a mental-health professional. Psychotherapy is well evidenced; medication (e.g. SSRIs) is also an option.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Thoughts of self-harm — regardless of score:</strong> contact your local emergency services or a crisis line immediately (US: call or text 988; UK: 116 123 Samaritans).</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics & calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>GAD-7 anxiety screening</strong> — depression and anxiety frequently occur together. The GAD-7 complements the PHQ-9 for a fuller picture. Read the <router-link :to="localeBlogPath('gad-7-anxiety-test-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">GAD-7 guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sleep cycles</strong> — sleep problems are a core symptom of depression (question 3). Regular sleep often directly affects the PHQ-9 score. Read the <router-link :to="localeBlogPath('calculate-sleep-cycles')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">sleep cycle guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Biological age</strong> — persistent depression and chronic stress accelerate ageing. A look at biological age puts lifestyle factors in context. Read the <router-link :to="localeBlogPath('biological-age-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">biological age guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Take the PHQ-9 now</h3>
        <p class="text-stone-300 text-sm mb-5">Nine questions, anonymous, instant. Get an immediate interpretation of your depression symptoms over the past 2 weeks.</p>
        <router-link
          :to="localePath('phq9')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Go to the PHQ-9 depression screening &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should I take the PHQ-9?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              A baseline first, then every 2–4 weeks during treatment or whenever symptoms change. Trends across multiple tests are more meaningful than any single value.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">I answered question 9 — what now?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Any answer other than “Not at all” on question 9 is a serious signal, regardless of your total score. Please get help immediately — in the US call or text 988 (Suicide & Crisis Lifeline); in the UK call 116 123 (Samaritans); elsewhere contact your local emergency number. You do not have to face this alone.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Is the PHQ-9 suitable for teenagers?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The PHQ-9 is validated for adults. For adolescents there is an adapted version, the PHQ-A. For younger children, age-specific instruments are preferred.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does the PHQ-9 also detect anxiety disorders?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              No, the PHQ-9 is optimized for depression. For anxiety, the GAD-7 complements it. In practice the two are often used together, as depression and anxiety frequently co-occur.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn slug="phq-9-depression-test-calculator" />
  </article>
</template>
