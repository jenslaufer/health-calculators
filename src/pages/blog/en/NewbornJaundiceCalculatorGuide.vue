<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Newborn Jaundice: Bilirubin Risk Made Simple with the Bhutani Nomogram | Health Calculators',
  description: 'How the Bhutani nomogram stratifies newborn bilirubin into risk zones. Hour-specific percentiles, risk factors, phototherapy thresholds — clearly explained.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Newborn Jaundice: Bilirubin Risk Made Simple with the Bhutani Nomogram',
      description: 'How the Bhutani nomogram stratifies newborn total serum bilirubin into risk zones, what risk factors lower the action thresholds, and when phototherapy is indicated.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/newborn-jaundice-calculator-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is newborn jaundice?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yellowing of the skin caused by elevated bilirubin in the blood. Common and usually harmless in the first days of life — but very high values can damage the brain (kernicterus).' },
        },
        {
          '@type': 'Question',
          name: 'What does the Bhutani nomogram do?',
          acceptedAnswer: { '@type': 'Answer', text: 'It maps a newborn’s total serum bilirubin to an hour-specific percentile, sorting infants into four risk zones from low risk to high risk.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Newborn Jaundice: Bilirubin Risk Made Simple with the Bhutani Nomogram</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 8, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Around <strong>60 % of term and 80 % of preterm newborns</strong> develop visible jaundice in the first days of life. In most cases it is benign — but in some infants total serum bilirubin (TSB) rises to a level that needs phototherapy, and rare extreme values can cause permanent brain injury (kernicterus).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>Bhutani nomogram</strong> (Bhutani, Johnson &amp; Sivieri, Pediatrics 1999) maps any TSB value to an hour-specific percentile. Four risk zones predict how likely significant hyperbilirubinemia becomes — and whether closer follow-up or treatment is appropriate.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why a single number tells you very little</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A TSB of 10 mg/dL (171 µmol/L) on its own says nothing. <strong>Postnatal age in hours is decisive</strong>. At 12 hours of life, 10 mg/dL is clearly abnormal — at 5 days of life, it is often normal. The nomogram gives an age-specific reference corridor instead of a single threshold.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          That is why the old rule of thumb "treat above 12 mg/dL" is outdated. The much more useful question is: <em>is the value above or below the 95th percentile for the current postnatal age?</em>
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The four risk zones</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Percentile</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zone</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Recommendation</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 40th</td>
                <td class="px-6 py-3 text-stone-600">Low risk</td>
                <td class="px-6 py-3 text-stone-600">Routine follow-up</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">40th – 75th</td>
                <td class="px-6 py-3 text-stone-600">Low intermediate</td>
                <td class="px-6 py-3 text-stone-600">Re-check in 24 – 48 h</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">76th – 94th</td>
                <td class="px-6 py-3 text-stone-600">High intermediate</td>
                <td class="px-6 py-3 text-stone-600">Close follow-up; review risk factors</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 95th</td>
                <td class="px-6 py-3 text-stone-600">High risk</td>
                <td class="px-6 py-3 text-stone-600">Prompt medical evaluation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          In Bhutani's original cohort, <strong>40 % of infants in the high-risk zone</strong> developed significant hyperbilirubinemia, compared with under 1 % in the low-risk zone. That is why the nomogram is the leading screening tool before discharge from the maternity ward.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risk factors that lower the threshold</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Hemolysis</strong> — ABO/Rh incompatibility, G6PD deficiency, hereditary spherocytosis. Significantly lowers treatment thresholds.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Lower gestational age</strong> — 35–36 weeks: less liver mass, slower bilirubin conjugation.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Feeding difficulties / weight loss &gt; 8 %</strong> — fewer stools, more enterohepatic recycling of bilirubin.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Cephalohematoma / bruising</strong> — extravasated blood is metabolised to additional bilirubin.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sibling who needed phototherapy</strong> — familial clustering signals genetic predisposition.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>East Asian ancestry</strong> — higher incidence, often UGT1A1 variants affecting bilirubin conjugation.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When phototherapy is indicated</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>AAP 2022 guideline</strong> provides separate threshold tables for each gestational age (35 – 38+ weeks) and risk-factor profile. Simplified: the younger the infant, the lower the gestational age, and the more risk factors present, the earlier treatment is started.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Phototherapy converts bilirubin in the skin into water-soluble isomers that are excreted without hepatic conjugation. It is safe and usually sufficient. Exchange transfusion is reserved for extreme values where kernicterus is imminent.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What parents can spot</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Yellowing in daylight</strong> — starts on the face and progresses downward. Yellow legs and feet usually mean a clearly elevated value.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Sleepy, weak feeding</strong> — a warning sign, especially in the first 72 h.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Pale stools, dark urine</strong> — may suggest a cholestatic (conjugated) hyperbilirubinemia, which behaves differently from the typical unconjugated form.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics &amp; calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>APGAR score</strong> — first-minute and five-minute newborn assessment. Read the <router-link :to="localeBlogPath('apgar-score-calculator-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">APGAR guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby feeding amount</strong> — adequate intake reduces bilirubin via more frequent stooling. See the <router-link :to="localeBlogPath('baby-feeding-amount-calculator')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">feeding-amount guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Baby milestones</strong> — what normal development looks like in the first weeks. See the <router-link :to="localeBlogPath('baby-milestone-tracker-guide')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">milestone tracker guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Estimate your newborn's bilirubin risk</h3>
        <p class="text-stone-300 text-sm mb-5">Bhutani nomogram, anonymous, instant. Converts mg/dL ⇄ µmol/L automatically.</p>
        <router-link
          :to="localePath('newbornBilirubin')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open the bilirubin calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">At what value does my baby need phototherapy?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              There is no single number. AAP 2022 thresholds depend on postnatal age, gestational age, and risk factors. For a healthy term newborn, typical day-3 thresholds sit between 18 and 21 mg/dL — much lower with risk factors. The pediatrician makes the decision.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Does sunlight help?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              No. Direct sun exposure risks sunburn and overheating. Effective phototherapy uses defined wavelengths (440–470 nm) at controlled intensity — delivered in hospital or with explicitly prescribed home devices.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How often should bilirubin be measured?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              At least once before discharge from the maternity ward, ideally with a transcutaneous bilirubinometer or serum sample. Early-discharge infants and those with risk factors need closer surveillance until values clearly plateau.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What is kernicterus?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Kernicterus is the most severe form of bilirubin toxicity: unconjugated bilirubin crosses the blood–brain barrier and damages the basal ganglia. It is now extremely rare because Bhutani-based screening and AAP thresholds usually catch high-risk infants in time.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticlesEn />
  </article>
</template>
