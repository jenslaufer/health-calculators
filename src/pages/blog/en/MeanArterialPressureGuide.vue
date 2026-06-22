<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Mean Arterial Pressure (MAP): Formula, Normal Range, Why It Matters | Health Calculators',
  description: 'MAP explained: the (SBP + 2 × DBP) / 3 formula, normal ranges, why 65 mmHg is the critical floor, and what the target should be in older adults.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Mean Arterial Pressure (MAP): Formula, Normal Range, Why It Matters',
      description: 'MAP explained: formula, clinical relevance, normal range and targets in older adults.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-27',
      dateModified: '2026-05-27',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/mean-arterial-pressure-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is mean arterial pressure (MAP)?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mean arterial pressure is the average pressure in your arteries during one cardiac cycle. It determines how well organs like the brain, kidneys and heart muscle are perfused. A MAP of at least 65 mmHg is generally considered the minimum needed for adequate perfusion.' },
        },
        {
          '@type': 'Question',
          name: 'How is MAP calculated?',
          acceptedAnswer: { '@type': 'Answer', text: 'The standard clinical formula is MAP ≈ (SBP + 2 × DBP) / 3. For 120/80 mmHg this gives (120 + 160) / 3 = 93.3 mmHg. Diastolic pressure is weighted twice because the heart spends roughly two-thirds of the cardiac cycle in diastole.' },
        },
        {
          '@type': 'Question',
          name: 'What is a normal MAP range?',
          acceptedAnswer: { '@type': 'Answer', text: '70 to 100 mmHg is the typical normal range in healthy adults. Below 65 mmHg vital organs may be hypoperfused. Persistently above 100 mmHg suggests hypertension and higher cardiovascular risk.' },
        },
        {
          '@type': 'Question',
          name: 'Why is MAP more useful than systolic or diastolic alone?',
          acceptedAnswer: { '@type': 'Answer', text: 'Systolic shows the peak pressure during contraction; diastolic shows the trough during relaxation. MAP captures the average perfusion pressure across the whole cardiac cycle — the value that actually drives blood flow into kidneys, brain and heart muscle. That is why intensive care uses MAP as the main control parameter.' },
        },
        {
          '@type': 'Question',
          name: 'Does the MAP target change for older adults?',
          acceptedAnswer: { '@type': 'Answer', text: 'In older adults (≥ 65 years) cerebral autoregulation is often impaired. A slightly higher MAP — typically 70–90 mmHg — is often targeted to maintain brain perfusion. The individual target should be set by the treating physician.' },
        },
        {
          '@type': 'Question',
          name: 'Does the formula replace a real measurement?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. (SBP + 2 × DBP) / 3 is a simplified estimate that is fine for home orientation. Invasive arterial monitoring in hospital is more accurate, but rarely needed for everyday questions.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Mean Arterial Pressure (MAP): Formula, Normal Range, Why It Matters</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 27, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          120 over 80 — everyone knows those two numbers. But in hospitals, especially in intensive care, doctors often watch a third one: <strong>mean arterial pressure (MAP)</strong>. It tells you how well the heart actually perfuses the organs.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide explains the formula, the normal range, and why MAP matters more for organ perfusion than systolic or diastolic alone.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula: simple but clever</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The clinical estimate uses one short equation:
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          MAP ≈ (SBP + 2 × DBP) / 3
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Why is diastolic weighted twice? Because the heart spends about <strong>two-thirds of each cycle in diastole</strong> — the relaxation phase. The lower pressure lasts longer, so it pulls the average down more strongly.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Example: at 120/80 mmHg the calculation is (120 + 160) / 3 = <strong>93.3 mmHg</strong>. That is a typical healthy adult value.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Normal ranges at a glance</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">MAP categories</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">Below 70 mmHg</span>
              <span class="text-amber-600 font-medium">Low</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">70 – 100 mmHg</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">Above 100 mmHg</span>
              <span class="text-red-500 font-medium">High</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          The critical floor for organ perfusion is <strong>65 mmHg</strong>. In critical care, anything below that is treated as an alarm — kidneys, brain and heart muscle are at risk of inadequate perfusion.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why MAP beats systolic or diastolic on their own</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The top number tells you the peak pressure as the heart contracts. The bottom number tells you the trough between beats. Both are <em>snapshots</em>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MAP is the <strong>average pressure across the whole cycle</strong>. That is the pressure actually driving blood through the capillaries of kidneys, brain and myocardium. That is why ICU staff titrate fluids and vasopressors against MAP, not against systolic.
        </p>
        <div class="bg-stone-50 rounded-xl p-5 mb-4">
          <p class="text-sm text-stone-700">
            Rule of thumb: as long as MAP ≥ 65 mmHg, organ perfusion is usually adequate — regardless of how the individual readings "look".
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">MAP in older adults</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          From roughly age <strong>65 onward</strong>, cerebral autoregulation gets sluggish. Vessels in the brain are less able to compensate for a sudden drop in blood pressure. Many clinicians therefore target a slightly higher MAP — <strong>70 to 90 mmHg</strong> — for older patients.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">What to watch for in older patients</p>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>→ Dizziness or falls when MAP is too low</li>
            <li>→ Orthostatic hypotension increasing fall risk</li>
            <li>→ Medication adjustments discussed with the family doctor</li>
            <li>→ Individual MAP targets set by the treating physician</li>
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When low MAP becomes dangerous</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A MAP below 65 mmHg may be caused by:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Hypovolemia (dehydration, bleeding)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Sepsis and septic shock</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Heart failure with reduced output</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Over-treatment with antihypertensives</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Symptoms such as dizziness, weakness, confusion or cool extremities deserve medical review.
        </p>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your MAP</h3>
        <p class="text-base text-stone-600 mb-6">Enter systolic and diastolic — the calculator returns MAP and a clinical band.</p>
        <router-link
          :to="localePath('meanArterialPressure')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Open the MAP Calculator
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MAP is one piece of the picture. For the full blood pressure status use the
          <router-link :to="localePath('bloodPressure')" class="text-stone-900 underline hover:no-underline">Blood Pressure Calculator</router-link>.
          To put long-term risk in context, the
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Cardiovascular Risk Calculator</router-link>
          is the natural next step. If you have atrial fibrillation, the
          <router-link :to="localePath('strokeRisk')" class="text-stone-900 underline hover:no-underline">Stroke Risk Calculator</router-link>
          is worth checking too.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Takeaway</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          MAP is the underrated third blood pressure number. Systolic and diastolic only show peaks; MAP shows the average perfusion pressure — what actually matters for the organs.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          With the formula (SBP + 2 × DBP) / 3 you can compute it in seconds. That is enough for home orientation. Treatment decisions remain with your doctor.
        </p>
      </div>
    </div>

    <RelatedArticlesEn slug="mean-arterial-pressure-guide" />
  </article>
</template>
