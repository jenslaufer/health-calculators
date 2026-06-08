<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'GAD-7 Anxiety Test: Generalized Anxiety Screening — Score & Bands | Health Calculators',
  description: 'Understand the GAD-7 anxiety screening: 7 questions, score 0–21, severity bands minimal/mild/moderate/severe. Cutoff 10, Spitzer 2006, what the score means — with free online calculator.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'GAD-7 Anxiety Test: Generalized Anxiety Screening — Score & Bands',
      description: 'How troubled are you by anxiety symptoms? The GAD-7 is a validated 7-question screening for generalized anxiety disorder. What the bands mean, when the cutoff of 10 matters and what to do next.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-06-08',
      dateModified: '2026-06-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/gad-7-anxiety-test-calculator',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does the GAD-7 measure?',
          acceptedAnswer: { '@type': 'Answer', text: 'The GAD-7 measures the frequency of seven core symptoms of generalized anxiety disorder over the past 2 weeks. It is validated as a screening and severity tool.' },
        },
        {
          '@type': 'Question',
          name: 'What do the score bands mean?',
          acceptedAnswer: { '@type': 'Answer', text: '0–4 minimal, 5–9 mild, 10–14 moderate, 15–21 severe anxiety symptoms. A score ≥ 10 is the commonly used cutoff for further clinical evaluation.' },
        },
        {
          '@type': 'Question',
          name: 'Is the GAD-7 a diagnosis?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The GAD-7 is a screening tool, not a medical diagnosis. An anxiety disorder is confirmed through clinical evaluation with a healthcare professional.' },
        },
        {
          '@type': 'Question',
          name: 'What if I have thoughts of self-harm?',
          acceptedAnswer: { '@type': 'Answer', text: 'The GAD-7 does not screen for suicidal thoughts. If you have thoughts of hurting yourself or others, contact emergency services or a crisis line immediately (US: 988; UK: 116 123; Germany: 0800 1110111).' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">GAD-7 Anxiety Test: Generalized Anxiety Screening</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">June 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          How troubled are you by <strong>anxiety symptoms</strong>? The <strong>GAD-7</strong> (Generalized Anxiety Disorder 7-item) provides a validated answer in seven questions and is today's standard tool for screening generalized anxiety in primary care, mental-health settings and research.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains how the GAD-7 works, what the severity bands mean, when further evaluation is needed, and how the GAD-7 connects to other symptom tools.
        </p>
      </div>

      <!-- Prominent disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed font-medium">
          This is a screening tool, not a medical diagnosis. If your score is 10 or above, or you have concerns, please consult a healthcare professional.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the GAD-7?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The GAD-7 was developed and validated in 2006 by Spitzer, Kroenke, Williams and Löwe in the <em>Archives of Internal Medicine</em>. It asks about seven core symptoms of generalized anxiety over the past <strong>2 weeks</strong>. Each item is scored 0 (Not at all) to 3 (Nearly every day), with a total range of 0–21.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          At a cutoff of 10, the GAD-7 has a sensitivity of 89 % and specificity of 82 % for generalized anxiety disorder. It also screens with moderate accuracy for panic disorder, social anxiety disorder and PTSD.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The seven questions</h2>
        <ol class="space-y-3 mb-4 list-decimal list-inside">
          <li class="text-stone-600 text-base"><strong>Feeling nervous, anxious or on edge</strong></li>
          <li class="text-stone-600 text-base"><strong>Not being able to stop or control worrying</strong></li>
          <li class="text-stone-600 text-base"><strong>Worrying too much about different things</strong></li>
          <li class="text-stone-600 text-base"><strong>Trouble relaxing</strong></li>
          <li class="text-stone-600 text-base"><strong>Being so restless that it is hard to sit still</strong></li>
          <li class="text-stone-600 text-base"><strong>Becoming easily annoyed or irritable</strong></li>
          <li class="text-stone-600 text-base"><strong>Feeling afraid as if something awful might happen</strong></li>
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
                <td class="px-6 py-3 text-stone-600">Self-care, stress management, re-test in 2–4 weeks</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10 – 14</td>
                <td class="px-6 py-3 text-stone-600">Moderate</td>
                <td class="px-6 py-3 text-stone-600">Consult a healthcare professional, further evaluation</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">15 – 21</td>
                <td class="px-6 py-3 text-stone-600">Severe</td>
                <td class="px-6 py-3 text-stone-600">Seek professional help promptly — active treatment recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A <strong>cutoff of 10</strong> is the established threshold for further clinical evaluation. A change of <strong>≥ 5 points</strong> on follow-up is considered clinically meaningful and useful for tracking response to treatment.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What the GAD-7 does not replace</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The GAD-7 captures <strong>symptom frequency</strong>, not cause. Thyroid overactivity, caffeine, certain medications, sleep deprivation and other medical conditions can mimic an anxiety picture. An elevated score should therefore always be put in context by a clinician.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The GAD-7 does <strong>not</strong> screen for suicidal thoughts or self-harm. If you are in acute crisis, contact emergency services immediately — US: 988 (Suicide & Crisis Lifeline); UK: 116 123 (Samaritans); Germany: 0800 1110111 (Telefonseelsorge).
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
            <span class="text-stone-600 text-base"><strong>Score 5–9:</strong> Self-care — sleep, exercise, breathing techniques, less caffeine/alcohol. Re-test in 2–4 weeks.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Score ≥ 10:</strong> Make an appointment with your GP or a mental-health professional. Cognitive behavioural therapy is well evidenced; SSRIs are also an option.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Acute crisis:</strong> Call your local emergency line or a crisis hotline (US: 988; UK: 116 123).</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics & calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>PMS symptoms</strong> — anxiety symptoms can be cycle-driven. A PMS self-assessment helps separate premenstrual distress from generalized anxiety. Read the <router-link :to="localeBlogPath('pms-symptom-calculator-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">PMS guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Menopause symptoms</strong> — anxiety and inner restlessness frequently increase during menopause. A symptom assessment shows whether the hormonal phase plays a role. Read the <router-link :to="localeBlogPath('menopause-symptom-calculator-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">menopause guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sleep cycles</strong> — sleep loss is one of the strongest amplifiers of anxiety. Even a week of adequate sleep often lowers the GAD-7 score. Read the <router-link :to="localeBlogPath('calculate-sleep-cycles')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">sleep cycle guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Take the GAD-7 now</h3>
        <p class="text-stone-300 text-sm mb-5">Seven questions, anonymous, instant. Get an immediate interpretation of your anxiety symptoms over the past 2 weeks.</p>
        <router-link
          :to="localePath('gad7')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Go to the GAD-7 anxiety screening &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should I take the GAD-7?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              A baseline first, then every 2–4 weeks during treatment or whenever symptoms change. Trends across multiple tests are more meaningful than any single value.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">My score is above 15 — is that an emergency?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              A high score is not an acute emergency, but it is a clear signal of significant symptoms. Make an appointment with a GP or therapist promptly. If you have acute thoughts of self-harm or suicide regardless of score, contact emergency services or a crisis line immediately (US: 988; UK: 116 123; Germany: 112 / 0800 1110111).
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Is the GAD-7 suitable for teenagers?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The GAD-7 is primarily validated for adults and is also used from about age 13. For younger children, age-specific instruments are preferred.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does the GAD-7 also detect panic disorder or depression?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The GAD-7 is optimized for generalized anxiety but has moderate accuracy for panic disorder, social anxiety and PTSD. For depression, the PHQ-9 complements it — in practice, the two are often used together.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn slug="gad-7-anxiety-test-calculator" />
  </article>
</template>
