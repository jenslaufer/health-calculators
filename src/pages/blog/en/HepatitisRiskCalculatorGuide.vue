<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Hepatitis Risk Calculator: Score Your HBV and HCV Risk by Exposure | Health Calculators',
  description: 'Score hepatitis B and C risk from 13 CDC/USPSTF exposure factors. Transmission routes, screening recommendations, vaccination, treatment, and emergency steps explained.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hepatitis Risk Calculator: Score Your HBV and HCV Risk by Exposure',
    description: 'Score hepatitis B and C risk from 13 CDC/USPSTF exposure factors. Transmission routes, screening recommendations, vaccination, treatment, and emergency steps explained.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/hepatitis-risk-calculator-guide',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Hepatitis Risk Calculator: Score Your HBV and HCV Risk by Exposure</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 6, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          About <strong>290 million people worldwide</strong> live with chronic hepatitis B; another 50 million with hepatitis C — most undiagnosed. Both viruses are bloodborne, both can stay silent for decades, and both lead untreated to cirrhosis and liver cancer.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide shows how to score your personal hepatitis risk across 13 exposure factors weighted by USPSTF and CDC guidance. The good news: HCV is now curable, HBV is preventable.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is hepatitis?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hepatitis means inflammation of the liver. The five clinically relevant viral types are <strong>HAV, HBV, HCV, HDV, and HEV</strong>. HAV and HEV spread fecal-orally and usually clear. HBV, HCV, and HDV spread parenterally or sexually and may become chronic — with risk of cirrhosis and hepatocellular carcinoma.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          More than 80 percent of chronic HCV infections progress for decades without symptoms. They are typically discovered through incidental elevated liver enzymes (ALT) or via risk-based screening.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 13 risk factors in the score</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The calculator weighs each factor by USPSTF priority — high-risk 3–4 points, mid-risk 2 points, low-risk 1 point:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Points</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Significance</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Injection drug use (ever)</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">Leading risk factor for HCV</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Born in high-prevalence region</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Asia, Africa, Eastern Europe</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">HIV co-infection</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Mandatory screening</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hemodialysis</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Repeated blood contact</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Transfusion before 1992</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Pre-routine HCV screening</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Mother HBV/HCV positive</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Vertical transmission</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Incarceration (ever)</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Higher prevalence in correctional settings</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Needlestick injury</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Occupational, acute</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unregulated tattoo / piercing</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Abroad, prison, no standards</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Multiple sexual partners</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">HBV is sexually transmitted</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Shared razors / toothbrushes</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Household contact</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Travel to endemic region</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Stay ≥ 4 weeks</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Chronic liver disease</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Persistently elevated enzymes</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Risk bands and recommendations</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 0 — no risk:</strong> USPSTF still recommends a one-time HCV screen at least once in adulthood.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 1–3 — low:</strong> One-time antibody panel at primary care. Verify HBV vaccine status.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score 4–7 — moderate:</strong> Full screening panel (HBsAg, anti-HBc, anti-HBs, anti-HCV) is warranted. Catch up on HBV vaccine if unvaccinated.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Score ≥ 8 — high:</strong> Prompt testing. Add HCV-RNA PCR if IDU or HIV co-infection. After acute exposure (needlestick) seek post-exposure prophylaxis assessment.</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Calculate your hepatitis risk now</h3>
        <p class="text-stone-300 text-sm mb-5">13 exposure factors plus vaccination status — instant result with severity band and screening recommendation. Anonymous, no sign-up.</p>
        <router-link
          :to="localePath('hepatitisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate now &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Transmission routes in detail</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Parenteral:</strong> IV drug use, needlestick injury, contaminated tattoo/piercing instruments, transfusions before 1992, hemodialysis.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Sexual:</strong> HBV is highly efficient (50–100× more contagious than HIV); HCV is rare except in MSM with HIV co-infection or traumatic practices.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Vertical:</strong> Mother to child during birth — 90 percent transmission for HBV without prophylaxis, 5–10 percent for HCV.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Household contact:</strong> Shared razors, toothbrushes, nail clippers — small but measurable risk.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Treatment and cure</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>HCV:</strong> Direct-acting antivirals (DAAs) like sofosbuvir/velpatasvir cure 8–12 weeks oral therapy in nearly 100 percent of cases, regardless of genotype. Insurance-covered in most countries with confirmed infection.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Chronic HBV:</strong> Tenofovir or entecavir oral, often lifelong. Cure is rare but reliable suppression below detection is achievable.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Acute HBV:</strong> Clears spontaneously in 95 percent of adults. Severe cases warrant antiviral therapy.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Post-exposure prophylaxis:</strong> After needlestick from HBV-positive source: HBV vaccine plus immunoglobulin within 24 hours. No PEP exists for HCV — only follow-up testing.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Liver health intersects with multiple metabolic and risk dimensions. Regular drinkers should benchmark weekly intake with the
          <router-link :to="localeBlogPath('alcohol-unit-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Alcohol Unit Calculator</router-link>
          against WHO guidance — abstinence is mandatory in chronic hepatitis. Elevated liver enzymes often coexist with reduced
          <router-link :to="localeBlogPath('gfr-calculator-kidney-function')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">kidney function (GFR)</router-link>
          — the hepatorenal axis is clinically important. Chronic hepatitis frequently drives anemia of chronic disease — the
          <router-link :to="localeBlogPath('anemia-risk-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Anemia Risk Calculator</router-link>
          helps detect secondary anemia early.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Hepatitis B and C are common, frequently asymptomatic, and decisively treatable — when detected. Our
          <router-link :to="localePath('hepatitisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Hepatitis Risk Calculator</router-link>
          scores your personal risk in seconds. Score ≥ 4 or an unclear history merits a primary-care visit — a single blood draw delivers a definitive answer.
        </p>
      </div>

      <RelatedArticles slug="hepatitis-risk-calculator-guide" />
    </div>
  </article>
</template>
