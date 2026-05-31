<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Ankle-Brachial Index (ABI) Calculator Guide: Formula, Values, PAD Screening | Health Calculators',
  description: 'Calculate the ABI from four systolic blood pressures (arm and ankle). ACC/AHA bands from normal to severe PAD, the calcified-vessel pitfall at ABI > 1.4, and clinical implications.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Ankle-Brachial Index (ABI) Calculator Guide: Formula, Values, PAD Screening',
      description: 'ABI formula, ACC/AHA classification and what to do about an abnormal Ankle-Brachial Index.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-30',
      dateModified: '2026-05-30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/ankle-brachial-index-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Ankle-Brachial Index?',
          acceptedAnswer: { '@type': 'Answer', text: 'The ABI is the ratio of systolic blood pressure at the ankle to the higher arm SBP. It is the standard non-invasive screen for peripheral artery disease (PAD). An ABI ≤ 0.90 confirms PAD with high specificity.' },
        },
        {
          '@type': 'Question',
          name: 'How is the ABI calculated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Measure four systolic pressures (left arm, right arm, left ankle, right ankle). ABI(side) = ankle SBP / max(left arm SBP, right arm SBP). The overall ABI is the lower of the two side ratios.' },
        },
        {
          '@type': 'Question',
          name: 'What is a normal ABI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Per ACC/AHA: 1.00–1.40 normal, 0.90–0.99 borderline, 0.80–0.89 mild PAD, 0.50–0.79 moderate, ≤ 0.50 severe. Values > 1.4 are non-compressible (medial calcification).' },
        },
        {
          '@type': 'Question',
          name: 'Why can the ABI be greater than 1.4?',
          acceptedAnswer: { '@type': 'Answer', text: 'Calcified arteries — common in diabetes and chronic kidney disease — resist cuff occlusion. ABI > 1.4 is unreliable. The toe-brachial index (TBI) or duplex ultrasound is the appropriate next step.' },
        },
        {
          '@type': 'Question',
          name: 'Who should be screened with ABI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Adults aged 65 and older, smokers aged 50+, people with diabetes or known atherosclerosis, and anyone with claudication (calf pain on walking that resolves with rest) or non-healing foot ulcers.' },
        },
        {
          '@type': 'Question',
          name: 'What helps a low ABI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Smoking cessation, supervised walking exercise, treatment of hypertension, diabetes and LDL — usually with a statin and antiplatelet therapy. ABI < 0.5 or rest pain warrants prompt vascular referral.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Ankle-Brachial Index (ABI) Calculator Guide: Formula, Values, PAD Screening</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 30, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Leg pain on walking that disappears at rest? A cold foot on one side? A toe ulcer that refuses to heal? The <strong>Ankle-Brachial Index</strong> is the simplest answer to the question: "Are the leg arteries still patent?"
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Four blood pressures, one division — and a reliable screen for peripheral artery disease (PAD). This guide walks through the formula, the ACC/AHA bands, and the pitfall with calcified vessels.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The formula</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          ABI(side) = ankle SBP(side) ÷ max(left arm SBP, right arm SBP)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The higher of the two arm pressures is the reference — it best reflects central systemic pressure. Each leg yields its own ABI. The <strong>overall ABI</strong> is the lower of the two, because PAD frequently affects only one side.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Example: left arm 130, right arm 135, left ankle 90, right ankle 140. Left ABI = 90 / 135 ≈ <strong>0.67</strong> (moderate); right ABI = 140 / 135 ≈ <strong>1.04</strong> (normal). Overall ABI = 0.67 — suspicion of PAD on the left.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">ACC/AHA bands at a glance</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">ABI classification</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&le; 0.50</span>
              <span class="text-red-700 font-medium">Severely Reduced</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0.50 – 0.79</span>
              <span class="text-red-500 font-medium">Moderate</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0.80 – 0.89</span>
              <span class="text-orange-500 font-medium">Mild</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0.90 – 0.99</span>
              <span class="text-amber-500 font-medium">Borderline</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">1.00 – 1.40</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">&gt; 1.40</span>
              <span class="text-purple-600 font-medium">Non-Compressible</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          An ABI ≤ 0.90 confirms PAD with high specificity (>95 %). Values between 0.90 and 0.99 are borderline and should be repeated in 3–6 months or supplemented with an exercise test.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The medial-calcification pitfall: ABI > 1.4</h2>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Watch out in diabetes and CKD</p>
          <p class="text-sm text-amber-700">Once the ABI exceeds 1.4, the ankle arteries are too calcified to be compressed by the cuff. The result is diagnostically unreliable — PAD may still be present.</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          With Mönckeberg medial calcification (typical of diabetes mellitus and chronic kidney disease), calcium deposits in the tunica media. The cuff cannot fully occlude the artery — the measured pressure reads falsely high.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The alternative is the <strong>toe-brachial index (TBI)</strong>. Toe arteries are rarely affected by medial calcification. A TBI &lt; 0.7 suggests PAD.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Who should be screened?</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">All adults aged 65 and older</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Current and former smokers aged 50+</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">People with diabetes aged 50+</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Known atherosclerosis (prior MI, stroke, carotid disease)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Intermittent claudication — exercise-induced calf pain</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Non-healing foot ulcers, cold or pulseless extremities</span></li>
        </ul>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Calculate your ABI now</h3>
        <p class="text-base text-stone-600 mb-6">Enter four systolic pressures — the calculator returns per-leg and overall ABI plus the ACC/AHA category.</p>
        <router-link
          :to="localePath('ankleBrachialIndex')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Open the Ankle-Brachial Index Calculator
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What helps an abnormal ABI</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PAD is a systemic disease — atherosclerotic leg arteries imply elevated heart-attack and stroke risk. Three levers with the strongest evidence:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">1.</span><span class="text-stone-600"><strong>Quit smoking:</strong> Cuts PAD progression more than any drug.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">2.</span><span class="text-stone-600"><strong>Supervised walking exercise:</strong> 3× per week to the pain threshold — proven to extend pain-free walking distance.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">3.</span><span class="text-stone-600"><strong>Medical secondary prevention:</strong> Statin (target LDL &lt; 70 mg/dL), antiplatelet therapy, blood-pressure control &lt; 140/90.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          For ABI &lt; 0.50, rest pain, or impaired wound healing: prompt vascular surgical or interventional referral — bypass, angioplasty or stenting can save the limb.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related topics</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          ABI is one input in a cardiovascular risk profile. Pair it with the
          <router-link :to="localePath('bloodPressure')" class="text-stone-900 underline hover:no-underline">Blood Pressure Calculator</router-link>
          for hypertension classification, the
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Cardiovascular Risk Calculator</router-link>
          (Framingham/SCORE2), and the
          <router-link :to="localePath('diabetesRisk')" class="text-stone-900 underline hover:no-underline">Diabetes Risk Calculator</router-link>
          — diabetes is a major driver of PAD.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Takeaway</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The Ankle-Brachial Index gives a reliable read on leg perfusion with minimal effort. Four cuff pressures, one division, and a clear ACC/AHA result.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Values below 0.90 or above 1.40 are worth a vascular consultation. Both have clinical consequences — and both are more common than most people think.
        </p>
      </div>
    </div>

    <RelatedArticlesEn slug="ankle-brachial-index-guide" />
  </article>
</template>
