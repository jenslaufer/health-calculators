<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Hepatitis Risk Calculator: Screen for Hepatitis B and C from Exposure Factors | Health Calculators',
  description: 'Estimate hepatitis B and C risk from 13 evidence-based exposure factors. Transmission routes, CDC birth cohort, vaccination, post-exposure prophylaxis, and diagnostics — explained clearly.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hepatitis Risk Calculator: Screen for Hepatitis B and C from Exposure Factors',
    description: 'Estimate hepatitis B and C risk from 13 evidence-based exposure factors. Transmission routes, CDC birth cohort, vaccination, post-exposure prophylaxis, and diagnostics — explained clearly.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-07',
    dateModified: '2026-05-07',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Hepatitis Risk Calculator: Screen for Hepatitis B and C from Exposure Factors</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 7, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Worldwide, an estimated <strong>296 million people live with chronic hepatitis B</strong> and <strong>58 million with hepatitis C</strong> — most without knowing it. Both diseases progress silently for years before cirrhosis or liver cancer appear. Early detection changes the trajectory dramatically.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This guide shows how to quantify your personal hepatitis risk — based on 13 CDC- and WHO-recommended exposure factors. Anyone in the moderate or high band should pursue targeted testing.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Hepatitis B vs. hepatitis C — what's different?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Both viruses target the liver, but differ in transmission, course, and treatment:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Feature</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hepatitis B (HBV)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hepatitis C (HCV)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Transmission</td><td class="px-6 py-3 text-stone-600">Sex, perinatal, blood</td><td class="px-6 py-3 text-stone-600">Primarily blood (IV)</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Chronicity</td><td class="px-6 py-3 text-stone-600">5–10 % in adults</td><td class="px-6 py-3 text-stone-600">75–85 % of all infections</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Vaccine</td><td class="px-6 py-3 text-stone-600">Yes (3-dose, highly effective)</td><td class="px-6 py-3 text-stone-600">No</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Treatment</td><td class="px-6 py-3 text-stone-600">Tenofovir / entecavir (suppression)</td><td class="px-6 py-3 text-stone-600">DAAs — cure in &gt; 95 %</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Incubation</td><td class="px-6 py-3 text-stone-600">30–180 days</td><td class="px-6 py-3 text-stone-600">14–180 days</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Note: <strong>Hepatitis A</strong> spreads through contaminated food (fecal-oral route) and is not part of this risk model. Travelers to endemic regions should get the HAV vaccine, which protects for 20+ years.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 13 most important risk factors</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The calculator weights 13 factors that CDC and WHO explicitly cite as a screening indication:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Factor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Points</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Why it matters</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Injection drug use</td><td class="px-6 py-3 text-stone-600">4</td><td class="px-6 py-3 text-stone-600">Leading HCV transmission route worldwide</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Transfusion before 1992</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Pre-systematic donor screening era</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Long-term hemodialysis</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Elevated nosocomial risk</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Infected mother</td><td class="px-6 py-3 text-stone-600">3</td><td class="px-6 py-3 text-stone-600">Perinatal HBV transmission in 70–90 % without vaccine</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">High-prevalence country of birth</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">East Asia, sub-Saharan Africa, Pacific</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Born 1945–1965</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">CDC HCV birth cohort</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">HIV infection</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Shared routes; co-infection is common</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Occupational needlestick</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">HBV ~30 %, HCV ~1.8 % per incident</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Elevated liver enzymes</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Unexplained ALT/AST elevation needs workup</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Hep+ household contact</td><td class="px-6 py-3 text-stone-600">2</td><td class="px-6 py-3 text-stone-600">Shared razors / toothbrushes possible</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Unsterile tattoo / piercing</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Done abroad or without single-use needles</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Multiple sex partners</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">≥ 4 in 6 months or unprotected</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">Long incarceration</td><td class="px-6 py-3 text-stone-600">1</td><td class="px-6 py-3 text-stone-600">Elevated prevalence in correctional settings</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A complete <strong>HBV vaccination subtracts 2 points</strong> from the score (never below zero) — it protects against HBV, but not HCV.
        </p>
      </div>

      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Run the hepatitis risk calculator</h3>
        <p class="text-stone-300 text-sm mb-5">13 exposure factors plus vaccination status — instant result with severity grade and clinical guidance. Anonymous and no sign-up.</p>
        <router-link
          :to="localePath('hepatitisRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Calculate for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What tests should you run?</h2>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>HBsAg:</strong> Hepatitis-B surface antigen — positive in acute or chronic infection.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HBc:</strong> Antibody to the core antigen — marker of past or current HBV infection.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HBs:</strong> Protective antibody from vaccine or cleared infection (titer &gt; 10 IU/L = immune).</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Anti-HCV:</strong> Hepatitis-C antibody screen. If positive, confirm with HCV-RNA PCR.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>HCV-RNA PCR:</strong> Direct virus detection — distinguishes active from cleared infection.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>ALT/AST:</strong> Transaminases as markers of liver inflammation — usually elevated, but not specific.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Post-exposure prophylaxis (PEP)</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          After acute exposure — needlestick or unprotected sex with a confirmed HBV carrier — post-exposure prophylaxis should be considered <strong>within 72 hours</strong>:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>HBV PEP:</strong> Active vaccination plus hepatitis-B immune globulin (HBIG) for unvaccinated or seronegative contacts.</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>HCV:</strong> No PEP available — close monitoring (HCV-RNA at 4 and 12 weeks). If infection confirmed, early DAA therapy is possible.</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Treatment and cure</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Hepatitis C is curable today.</strong> Direct-acting antivirals (sofosbuvir/velpatasvir, glecaprevir/pibrentasvir) achieve cure rates above 95 % in 8–12 weeks with virtually no side effects. In most countries, treatment cost is fully covered by insurance.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          <strong>Hepatitis B</strong> usually cannot be eradicated, but tenofovir or entecavir suppress viral DNA below the detection limit and dramatically reduce the risk of cirrhosis and liver cancer. Acute hepatitis B in adults clears spontaneously in 90–95 % of cases.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hepatitis risk overlaps with other liver and transmission risks. To estimate alcohol as an additional liver stressor, see the
          <router-link :to="localeBlogPath('blood-alcohol-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">blood alcohol calculator</router-link>
          or the longer-term
          <router-link :to="localeBlogPath('alcohol-unit-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">alcohol units guide</router-link>.
          Chronic fatigue can be an early sign of HCV — the
          <router-link :to="localeBlogPath('anemia-risk-calculator-guide')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">anemia risk calculator</router-link>
          is helpful here, since chronic liver disease often comes with anemia.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Summary</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Hepatitis B and C are common but mostly silent. The key question is: are there risk factors? With our
          <router-link :to="localePath('hepatitisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">hepatitis risk calculator</router-link>
          you can answer that in seconds. The earlier chronic hepatitis is detected, the better treatment outcomes are — and HCV is now curable in the vast majority of cases.
        </p>
      </div>

      <RelatedArticles slug="hepatitis-risk-calculator-guide" />
    </div>
  </article>
</template>
