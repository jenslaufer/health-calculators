<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Erectile Dysfunction Test (IIEF-5): Score, Causes and What Works | Health Calculators',
  description: 'Assess erectile dysfunction with the IIEF-5 (SHIM). Causes, severity bands by Cappelleri & Rosen, evidence-based interventions — anonymous and free.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Erectile Dysfunction Test (IIEF-5): Score, Causes and What Works',
    description: 'Assess erectile dysfunction with the IIEF-5 (SHIM). Causes, severity bands by Cappelleri & Rosen, evidence-based interventions — anonymous and free.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/erectile-dysfunction-iief-5',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Erectile Dysfunction Test (IIEF-5): Score, Causes and What Works</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 1, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Erectile dysfunction (ED) is far more common than most men think: roughly <strong>52 % of men aged 40–70</strong> experience it — usually in silence. With the <strong>IIEF-5</strong> you can self-assess in under 2 minutes whether your symptoms are in the clinically relevant range.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains the test, the severity bands published by <strong>Cappelleri & Rosen (2005)</strong>, the most common causes, and what actually helps.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the IIEF-5?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The <strong>International Index of Erectile Function (IIEF-5)</strong> — also known as <strong>SHIM</strong> (Sexual Health Inventory for Men) — is the validated 5-question short form of the longer IIEF-15. Developed by Raymond Rosen and colleagues in 1999, it is now the global standard for ED screening.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Each of the 5 questions is rated on a 1–5 scale. The total score ranges from 5 (severe ED) to 25 (no ED).
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-sm text-stone-600 leading-relaxed mb-2"><strong>Sensitivity:</strong> 98 % — catches almost every case of ED.</p>
          <p class="text-sm text-stone-600 leading-relaxed"><strong>Specificity:</strong> 88 % — few false positives at a cutoff of ≤ 21.</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Severity bands (Cappelleri & Rosen)</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Score</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Severity</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">22 – 25</td><td class="px-6 py-3 text-stone-600">No ED</td><td class="px-6 py-3 text-stone-600">Monitor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">17 – 21</td><td class="px-6 py-3 text-stone-600">Mild</td><td class="px-6 py-3 text-stone-600">Lifestyle changes</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">12 – 16</td><td class="px-6 py-3 text-stone-600">Mild to moderate</td><td class="px-6 py-3 text-stone-600">See your GP</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">8 – 11</td><td class="px-6 py-3 text-stone-600">Moderate</td><td class="px-6 py-3 text-stone-600">Urologist + workup</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5 – 7</td><td class="px-6 py-3 text-stone-600">Severe</td><td class="px-6 py-3 text-stone-600">See a urologist soon</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A cutoff of ≤ 21 is the established clinical threshold for medical evaluation.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The most common causes</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          ED is rarely purely psychological. In more than 80 % of cases, an organic factor is involved:
        </p>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Vascular (most common)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Atherosclerosis, hypertension, high cholesterol and smoking damage the small penile arteries — often years before other symptoms emerge. ED is considered an <strong>early marker for cardiovascular disease</strong> with a 3–5 year lead time.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Endocrine / hormonal</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              <strong>Low testosterone</strong> (hypogonadism) and diabetes are common. About 50 % of diabetic men develop ED within 10 years — primarily through nerve and vascular damage.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Drug-induced</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Beta-blockers, thiazide diuretics, SSRI antidepressants, finasteride, opioids and some antipsychotics can trigger ED. If you suspect a medication, talk to your doctor — never stop on your own.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Psychogenic</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Performance anxiety, stress, relationship issues, depression — typical sign: morning erections are present but fail during sex. More common in younger men.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">ED as an early warning sign</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A landmark study in <em>JAMA</em> (Inman et al., 2009) showed that men under 50 with ED have a <strong>50-fold higher risk</strong> of heart attack within 5–10 years compared to peers without ED. Penile arteries are only 1–2 mm in diameter and react to atherosclerosis earlier than the 3–4 mm coronary arteries.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          That's why ED workup should always include cardiovascular risk factors — blood pressure, cholesterol, blood glucose, waist circumference and smoking status.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your IIEF-5 score now</h3>
        <p class="text-stone-300 text-sm mb-5">5 questions, instant Cappelleri & Rosen severity, anonymous and no sign-up — runs entirely in your browser.</p>
        <router-link
          :to="localePath('erectileDysfunction')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Take the test for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What actually works</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Studies show that for mild-to-moderate ED, lifestyle interventions are often as effective as medication:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Exercise:</strong> 150 minutes of moderate activity per week reduce ED risk by 40 %</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Weight loss:</strong> if BMI &gt; 30, a 10 % reduction markedly improves erectile function</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Mediterranean diet:</strong> olive oil, fish, nuts, plenty of vegetables — improves endothelial function</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Quit smoking:</strong> nicotine is one of the strongest ED risk factors</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sleep:</strong> 7–9 hours — sleep apnea is an underdiagnosed ED cause</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Pelvic floor training:</strong> Kegel exercises improved 40 % of men with mild ED in one trial</li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          For low testosterone, replacement therapy can help; for vascular causes, PDE-5 inhibitors (sildenafil, tadalafil) are first-line — prescription-only and only after medical evaluation.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Because ED clusters with other risk factors, it's worth checking your
          <router-link :to="localeBlogPath('testosterone-level-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">testosterone level</router-link>
          (rule out hypogonadism), your
          <router-link :to="localeBlogPath('diabetes-risk-score')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">diabetes risk score</router-link>
          (FINDRISC) and your
          <router-link :to="localeBlogPath('biological-age-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age</router-link>
          as a holistic health marker.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The IIEF-5 is a reliable screen — but only the first step. If your score is below 22, a medical evaluation is worth it: ED is often the tip of an iceberg of vascular, hormonal or metabolic risk factors. Use our
          <router-link :to="localePath('erectileDysfunction')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">IIEF-5 calculator</router-link>
          for an anonymous self-check — and bring concerning results to your doctor.
        </p>
      </div>

      <RelatedArticles slug="erectile-dysfunction-iief-5" />
    </div>
  </article>
</template>
