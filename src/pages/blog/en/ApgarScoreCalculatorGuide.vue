<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'APGAR Score: How to Read 1- and 5-Minute Newborn Assessments | Health Calculators',
  description: 'What the APGAR score at 1 and 5 minutes tells you about your newborn. The five criteria, scoring scale, normal vs. critical values — explained clearly.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'APGAR Score: How to Read 1- and 5-Minute Newborn Assessments',
    description: 'What the APGAR score at 1 and 5 minutes tells you about your newborn. The five criteria, scoring scale, normal vs. critical values — explained clearly.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/apgar-score-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">APGAR Score: How to Read 1- and 5-Minute Newborn Assessments</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 6, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Within seconds of birth, the midwife or obstetrician scans <strong>five vital signs</strong> and adds them up. The result — a number between 0 and 10 — is the APGAR score, an instant snapshot of how well a newborn is adapting to life outside the womb.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          What does each point mean? When does the team need to step in? And why is a 1-minute score of 5 usually nothing to panic about? This guide walks you through the score one criterion at a time.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The history: From Virginia Apgar in 1953 to today</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          American anaesthesiologist <strong>Virginia Apgar</strong> noticed in 1953 that newborns often died because no one systematically checked their condition right after birth. She designed a fast, equipment-free score using five clinical criteria — reproducible by any trained clinician.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The acronym was doubly clever: APGAR is both her surname and a mnemonic for the five signs — Appearance, Pulse, Grimace, Activity, Respiration. The score is now embedded in every delivery guideline worldwide.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The five APGAR criteria in detail</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Sign</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">0 points</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">1 point</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">2 points</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Appearance (skin color)</td><td class="px-6 py-3 text-stone-600">Blue / pale</td><td class="px-6 py-3 text-stone-600">Body pink, extremities blue</td><td class="px-6 py-3 text-stone-600">Pink all over</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Pulse (heart rate)</td><td class="px-6 py-3 text-stone-600">Absent</td><td class="px-6 py-3 text-stone-600">&lt; 100 bpm</td><td class="px-6 py-3 text-stone-600">≥ 100 bpm</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Grimace (reflex irritability)</td><td class="px-6 py-3 text-stone-600">No response</td><td class="px-6 py-3 text-stone-600">Grimace</td><td class="px-6 py-3 text-stone-600">Cry, cough, sneeze</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Activity (muscle tone)</td><td class="px-6 py-3 text-stone-600">Limp</td><td class="px-6 py-3 text-stone-600">Some flexion</td><td class="px-6 py-3 text-stone-600">Active motion</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Respiration (breathing)</td><td class="px-6 py-3 text-stone-600">Absent</td><td class="px-6 py-3 text-stone-600">Slow / irregular</td><td class="px-6 py-3 text-stone-600">Strong cry</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Reading the total score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Add the five points together. The total ranges from 0 (most depressed) to 10 (optimal adaptation):
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>7 to 10 — reassuring:</strong> The newborn has adapted well. Routine post-delivery care is sufficient.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>4 to 6 — moderately depressed:</strong> Airway clearing, oxygen, or stimulation often needed. Continued close monitoring.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>0 to 3 — critical:</strong> Immediate resuscitation. Alert the neonatal team.</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate the APGAR score now</h3>
        <p class="text-stone-300 text-sm mb-5">Structure the assessment of your newborn — five criteria for 1- and 5-minute scores, instant clinical interpretation. Free, no sign-up required.</p>
        <router-link
          :to="localePath('apgarScore')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Score it now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why 1 and 5 minutes?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>1-minute score</strong> captures immediate adaptation — how well the newborn coped with the stress of birth. Low scores here are common (e.g. after a long labour) and rarely have prognostic value.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>5-minute score</strong> is clinically far more meaningful. It reflects whether the baby responds to interventions or stabilises spontaneously. If it is below 7, the score is repeated at 10, 15, and 20 minutes.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Only <strong>persistently low scores</strong> over 10–20 minutes correlate with elevated neurologic risk. Most babies with low 1-minute scores develop completely normally.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Factors that commonly affect the score</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Prematurity:</strong> Preterm infants physiologically score lower (muscle tone, color). Not necessarily pathological.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Maternal anaesthesia:</strong> Epidural or general anaesthesia can initially blunt reflexes and breathing.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Birth stress:</strong> Long or traumatic deliveries depress pulse and respiration in the first minute.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Meconium aspiration:</strong> Inhaled meconium can cause respiratory distress and low oxygen saturation.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Skin color in darker-skinned babies:</strong> Appearance is the most criticised criterion — oxygen saturation at the lips and nail beds is more reliable.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Several calculators support clinical decisions around birth and the newborn period. The
          <router-link :to="localeBlogPath('due-date-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Due Date Calculator</router-link>
          predicts the expected date of delivery. After birth, the
          <router-link :to="localeBlogPath('child-growth-percentile-chart')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Child Growth Percentile Chart</router-link>
          documents healthy infant development. For paediatric medication dosing, the
          <router-link :to="localeBlogPath('child-dosage-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Child Dosage Calculator</router-link>
          is essential.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The APGAR score has been the standard newborn screen for over seven decades. Use our
          <router-link :to="localePath('apgarScore')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">APGAR Score Calculator</router-link>
          to record the five criteria for 1- and 5-minute assessments in a structured way. Values below 7 at 5 minutes call for further measures, and ≤ 3 is an emergency. Most babies score between 7 and 10 — a good start to life.
        </p>
      </div>

      <RelatedArticles slug="apgar-score-calculator-guide" />
    </div>
  </article>
</template>
