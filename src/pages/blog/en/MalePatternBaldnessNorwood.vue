<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticles from '../../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Male Pattern Baldness: Norwood-Hamilton Scale, Causes and Treatment | Health Calculators',
  description: 'Assess male androgenetic alopecia with the Norwood-Hamilton scale. Stages, causes, minoxidil/finasteride and hair transplantation — evidence-based and free.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Male Pattern Baldness: Norwood-Hamilton Scale, Causes and Treatment',
    description: 'Assess male androgenetic alopecia with the Norwood-Hamilton scale. Stages, causes, minoxidil/finasteride and hair transplantation — evidence-based and free.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-05-02',
    dateModified: '2026-05-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/en/blog/male-pattern-baldness-norwood',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">&larr; Blog</router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Male Pattern Baldness: Norwood-Hamilton Scale, Causes and Treatment</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 2, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">9 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          By age 50, roughly <strong>half of all men have visible hair loss</strong> — by 70, about 80 % do. The cause is almost always the same: <strong>androgenetic alopecia</strong>, a genetically driven loss caused by follicle sensitivity to DHT (dihydrotestosterone).
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The <strong>Norwood-Hamilton scale</strong> has been the clinical standard since 1975 for grading the stage of loss across 8 levels. This article explains the scale, the most common causes, and which treatment makes sense at which stage.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What is the Norwood-Hamilton scale?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          James Hamilton was the first to systematically describe the typical patterns of male hair loss in 1951. <strong>O'Tar Norwood</strong> extended the scheme in 1975, adding intermediate stages — most notably the important <strong>stage 3-vertex</strong>, where the crown is affected in addition to the frontal hairline.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Today the scale is used worldwide in dermatology, clinical research and hair transplantation. Reproducibility between self- and clinician-rating is <strong>kappa 0.77–0.82</strong> (very good).
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The 8 stages at a glance</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Stage</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Description</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr><td class="px-6 py-3 text-stone-900 font-medium">1</td><td class="px-6 py-3 text-stone-600">Youthful hairline</td><td class="px-6 py-3 text-stone-600">Monitor</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">2</td><td class="px-6 py-3 text-stone-600">Mature hairline, slight temple recession</td><td class="px-6 py-3 text-stone-600">Photo baseline</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3</td><td class="px-6 py-3 text-stone-600">M-shape, clinically relevant</td><td class="px-6 py-3 text-stone-600">Minoxidil / finasteride</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">3-vertex</td><td class="px-6 py-3 text-stone-600">M-shape plus crown thinning</td><td class="px-6 py-3 text-stone-600">Combination therapy</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">4</td><td class="px-6 py-3 text-stone-600">Deep recession + vertex</td><td class="px-6 py-3 text-stone-600">Therapy ± transplant</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">5</td><td class="px-6 py-3 text-stone-600">Zones merging</td><td class="px-6 py-3 text-stone-600">Evaluate transplant</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">6</td><td class="px-6 py-3 text-stone-600">Hair band lost</td><td class="px-6 py-3 text-stone-600">Transplant / SMP</td></tr>
              <tr><td class="px-6 py-3 text-stone-900 font-medium">7</td><td class="px-6 py-3 text-stone-600">Horseshoe only</td><td class="px-6 py-3 text-stone-600">SMP / acceptance</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Why men lose hair — the biology</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The central player is <strong>DHT (dihydrotestosterone)</strong> — a potent androgen produced from testosterone by the enzyme <em>5-alpha-reductase</em>. In genetically sensitive follicles (mainly at the front and crown), DHT binds to androgen receptors and triggers a stepwise <strong>miniaturisation</strong>: the hair cycle shortens, new hairs come in thinner and shorter until the follicle stops producing altogether.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Importantly, the hair at the back and sides — the future <strong>donor area</strong> for transplants — is genetically DHT-resistant and almost always preserved. That is the biological reason hair transplantation works at all.
        </p>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-sm text-stone-600 leading-relaxed">
            <strong>Heredity:</strong> Male pattern baldness is roughly 80 % genetic. The maternal line is not the only contributor (a common myth) — studies show meaningful contribution from both parents.
          </p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">What actually works — evidence-based</h2>
        <div class="space-y-3">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Topical minoxidil 5 %</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              FDA- and EMA-approved. Extends the growth phase and stimulates blood flow to the follicle. Visible effect after 3–6 months, lifelong use — when you stop, loss returns. Outcomes: 60–70 % halt the loss, 30–40 % see visibly denser hair.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Oral finasteride 1 mg</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Inhibits 5-alpha-reductase, lowering DHT by ~70 %. In trials it stops loss in 90 % and improves density in 65 % of men. Prescription-only. Side effects (libido, mood) in 1–3 %, mostly reversible — discuss with your doctor first.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Hair transplantation (FUE / FUT)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Reasonable from stage 3–4 once loss is stable. <strong>FUE</strong> harvests individual follicular units — minimal scarring, longer surgery. <strong>FUT</strong> takes a strip and divides it — denser yield, visible scar. Realistic outcome: not a teenage head of hair, but an aesthetically dense hairline.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-1">Scalp micropigmentation (SMP)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Tattoo-like dots simulate stubble — especially useful for stages 6–7 or to complement a transplant. No regrowth, but a visually denser appearance with short hairstyles.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Find out your Norwood stage now</h3>
        <p class="text-stone-300 text-sm mb-5">4 questions, instant Norwood-Hamilton stage, anonymous and no sign-up — runs entirely in your browser.</p>
        <router-link
          :to="localePath('malePattern')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Take the assessment for free &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">When to see a doctor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Norwood stages describe typical androgenetic alopecia. For <strong>sudden, patchy or episodic</strong> loss, see a dermatologist — other causes need to be ruled out:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="text-base text-stone-600 leading-relaxed"><strong>Iron deficiency</strong> (especially in vegetarians and athletes)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Thyroid disorders</strong> (hyper- and hypothyroidism)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Alopecia areata</strong> (autoimmune patchy loss)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Telogen effluvium</strong> (stress, surgery, high fever 2–3 months earlier)</li>
          <li class="text-base text-stone-600 leading-relaxed"><strong>Medications</strong> (chemotherapy, beta-blockers, some antidepressants)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Related calculators</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Men's health is interconnected — beyond the hair status it's worth checking your
          <router-link :to="localeBlogPath('testosterone-level-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">testosterone level</router-link>
          (rule out hypogonadism), the
          <router-link :to="localeBlogPath('erectile-dysfunction-iief-5')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">IIEF-5 erectile function test</router-link>
          and your
          <router-link :to="localeBlogPath('biological-age-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">biological age</router-link>
          as a holistic marker.
        </p>
      </div>

      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          The Norwood-Hamilton scale gives you a clear language for a topic many men experience in silence. Knowing your stage early (typically 2–3) gives the best odds of stopping loss with minoxidil or finasteride. Use our
          <router-link :to="localePath('malePattern')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Norwood calculator</router-link>
          for an anonymous self-assessment — and bring concerning stages to a dermatologist.
        </p>
      </div>

      <RelatedArticles slug="male-pattern-baldness-norwood" />
    </div>
  </article>
</template>
