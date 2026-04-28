<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is paediatric dose calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard formula is dose (mg) = body weight (kg) × mg per kg. Paracetamol uses 10–15 mg/kg per single dose, ibuprofen 7–10 mg/kg.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many mL of syrup should I give?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volume (mL) = dose (mg) ÷ concentration (mg/mL). 300 mg paracetamol at 24 mg/mL = 12.5 mL of syrup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum daily dose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paracetamol: max 60 mg/kg/day (or 4 g for older children). Ibuprofen: max 30 mg/kg/day (or 2.4 g). Amoxicillin: 20–90 mg/kg/day depending on indication.',
      },
    },
    {
      '@type': 'Question',
      name: 'From what age is ibuprofen allowed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ibuprofen is approved from 3 months of age and a minimum weight of 5 kg. Younger infants should use paracetamol instead.',
      },
    },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Calculate paediatric dosage',
  description: 'Three steps to safe weight-based dosing of paracetamol, ibuprofen or amoxicillin.',
  step: [
    { '@type': 'HowToStep', name: 'Enter body weight in kg', text: 'Weigh the child and enter the current weight in kilograms.' },
    { '@type': 'HowToStep', name: 'Choose the drug', text: 'Select paracetamol, ibuprofen or amoxicillin — the recommended mg/kg fills automatically.' },
    { '@type': 'HowToStep', name: 'Enter syrup concentration', text: 'Enter the liquid concentration (e.g. 24 mg/mL) to obtain the volume in mL.' },
  ],
}

useHead({
  title: 'Child Dosage Calculator — Safe Weight-Based Paediatric Dosing | Health Calculators',
  description: 'How to calculate the correct medicine dose for children. Paracetamol, ibuprofen and amoxicillin by body weight — formulas, daily maxima and volume in mL.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Child Dosage Calculator — Safe Weight-Based Paediatric Dosing',
      description: 'Weight-based dosing of paracetamol, ibuprofen and amoxicillin in children, explained simply.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-04-28',
      dateModified: '2026-04-28',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/child-dosage-calculator',
      },
    },
    faqJsonLd,
    howToJsonLd,
  ],
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Child Dosage Calculator — Safe Weight-Based Paediatric Dosing</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">28 April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Paediatric medicine doses are <strong>always weight-based</strong> — unlike adults, where one fixed dose fits most. A dose that is too high causes serious adverse effects; a dose too low leaves the child untreated.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article walks through the calculation for the three most common children's drugs: <strong>paracetamol</strong>, <strong>ibuprofen</strong> and <strong>amoxicillin</strong>. You will learn the formulas, daily maxima, typical syrup concentrations and safety warnings.
        </p>
      </div>

      <div class="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p class="text-sm text-red-800 font-medium">
          Important: this is not medical advice. Paediatric dosing must be confirmed by a licensed clinician or pharmacist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The core formula</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Every weight-based paediatric dose follows one simple rule:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Dose (mg) = body weight (kg) × mg per kg</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          For converting to syrup volume:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <p class="text-base font-mono text-stone-900 font-semibold">Volume (mL) = dose (mg) ÷ concentration (mg/mL)</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Paracetamol</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Single dose:</strong> 10–15 mg/kg</li>
          <li><strong>Daily maximum:</strong> 60 mg/kg/day (max 4 g for larger children)</li>
          <li><strong>Interval:</strong> every 4–6 hours, max 4 doses/day</li>
          <li><strong>Syrup concentration:</strong> typically 24 mg/mL</li>
          <li><strong>Example:</strong> 20 kg × 15 mg/kg = 300 mg = 12.5 mL of syrup</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Paracetamol is approved from birth. Note: an overdose can cause severe liver damage even when initial symptoms are absent.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Ibuprofen</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Single dose:</strong> 7–10 mg/kg</li>
          <li><strong>Daily maximum:</strong> 30 mg/kg/day (max 2.4 g)</li>
          <li><strong>Interval:</strong> every 6–8 hours</li>
          <li><strong>Syrup concentration:</strong> 20 mg/mL or 40 mg/mL</li>
          <li><strong>Example:</strong> 15 kg × 10 mg/kg = 150 mg = 7.5 mL at 20 mg/mL</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Ibuprofen is approved from 3 months of age and a minimum weight of 5 kg. For younger infants prefer paracetamol.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Amoxicillin</h2>
        <ul class="space-y-2 text-base text-stone-600 mb-4">
          <li><strong>Standard dose:</strong> 20–45 mg/kg/day, divided into 2–3 doses</li>
          <li><strong>High dose (e.g. otitis media):</strong> 80–90 mg/kg/day</li>
          <li><strong>Interval:</strong> every 8–12 hours</li>
          <li><strong>Syrup concentration:</strong> 50 mg/mL (typical suspension)</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Standard vs high-dose depends on age, pathogen and indication. Always prescribed by a clinician.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Safety warnings</h2>
        <ul class="space-y-3 text-base text-stone-600">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Weight under 3 kg:</strong> neonates require clinician-supervised dosing — never self-dose.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Weight over 80 kg:</strong> likely an adult — use adult dosing rather than the paediatric mg/kg formula.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Above the recommended single dose:</strong> never exceed the dose listed in the package insert — there is no upward "safety margin".</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span><strong>Suspected overdose:</strong> contact poison control or emergency services immediately.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Growth percentiles</strong> — compare a child's weight and height with WHO reference curves. Visit the <router-link :to="localePath('childGrowth')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">child growth percentile calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Body surface area</strong> — some drugs are dosed per BSA (e.g. oncology). Visit the <router-link :to="localePath('bsa')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">BSA calculator</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>BMI</strong> — body mass index for older children and adolescents. Visit the <router-link :to="localePath('bmi')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">BMI calculator</router-link>.</span>
          </li>
        </ul>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate the dose now</h3>
        <p class="text-stone-300 text-sm mb-5">Pick the drug, enter the weight — instant single dose and daily maximum in mg and mL.</p>
        <router-link
          :to="localePath('childDosage')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Open child dosage calculator &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Frequently asked questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How is paediatric dose calculated?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              The standard formula is dose (mg) = body weight (kg) × mg per kg. Paracetamol uses 10–15 mg/kg per single dose, ibuprofen 7–10 mg/kg. These come from paediatric prescribing references.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">How many mL of syrup should I give?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Volume (mL) = dose (mg) ÷ concentration (mg/mL). 300 mg paracetamol at 24 mg/mL = 12.5 mL of syrup.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">What is the maximum daily dose?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Paracetamol max 60 mg/kg/day (max 4 g), ibuprofen max 30 mg/kg/day (max 2.4 g), amoxicillin 20–90 mg/kg/day depending on indication.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">From what age is ibuprofen allowed?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ibuprofen is approved from 3 months of age and a minimum weight of 5 kg. Younger infants should use paracetamol instead.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
