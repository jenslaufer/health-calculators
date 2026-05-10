<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Vitamin D Deficiency: Symptoms, Testing, How Much IU You Need | Health Calculators',
  description: 'Vitamin D deficiency explained: symptoms, 25-OH-D blood test ranges in ng/mL, IU per kg dosing, D3 vs D2, food sources and the safety upper limit.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Vitamin D Deficiency: Symptoms, Testing, How Much IU You Need',
      description: 'Vitamin D deficiency explained: symptoms, 25-OH-D blood test ranges in ng/mL, IU per kg dosing, D3 vs D2, food sources and the safety upper limit.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/vitamin-d-deficiency',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Vitamin D Deficiency: Symptoms, Testing and Dosing',
      about: { '@type': 'MedicalCondition', name: 'Vitamin D deficiency' },
      audience: { '@type': 'PeopleAudience', audienceType: 'General public' },
      lastReviewed: '2026-05-09',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the symptoms of vitamin D deficiency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common symptoms include persistent fatigue, bone and muscle pain, frequent infections, low mood and slow wound healing. Symptoms are non-specific, so a 25-OH-D blood test is needed to confirm.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many IU of vitamin D per day do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Adults typically need 800–2,000 IU per day for maintenance. Correcting a confirmed deficiency usually requires 2,000–4,000 IU per day, often dosed at 30–50 IU per kg of body weight. Higher loading doses should be supervised by a clinician.',
          },
        },
        {
          '@type': 'Question',
          name: 'What 25-OH-D level counts as deficient?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Below 20 ng/mL (50 nmol/L) is deficient, 20–30 ng/mL is insufficient, and 30–60 ng/mL is sufficient. Levels persistently above 100 ng/mL increase the risk of hypercalcemia.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is D3 or D2 better?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vitamin D3 (cholecalciferol) is the natural form, raises 25-OH-D more reliably and lasts longer than D2 (ergocalciferol). D3 is the standard recommendation for supplements.',
          },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Vitamin D Deficiency: Symptoms, Testing, How Much IU You Need</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 9, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">11 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Medical disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article does not replace medical advice, diagnosis, or treatment. If you suspect a vitamin D deficiency, plan to take high-dose supplements, or have an existing condition (kidney, thyroid, sarcoidosis, pregnancy), please consult a clinician. Lab values must be interpreted individually.
        </p>
      </div>

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Vitamin D deficiency</strong> is common in higher-latitude countries. Surveys suggest that 40–60 % of adults in northern Europe and roughly 1 billion people worldwide do not reach the threshold of 20 ng/mL of 25-hydroxy-vitamin D considered sufficient — particularly in late winter. The complaints are diffuse: fatigue, bone pain, low mood, frequent infections.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article explains what vitamin D does, which symptoms point to a deficiency, how the <strong>25-OH-D blood test</strong> works, how many IU per day are reasonable, and where the safety upper limit sits.
        </p>
      </div>

      <!-- Role of vitamin D -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The role of vitamin D in the body</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Strictly speaking, vitamin D is not a vitamin but a <strong>prohormone</strong>. Through the active form calcitriol, it regulates more than 200 genes and influences calcium and phosphate balance, immune cells, muscles, the nervous system, and gene expression in nearly every cell.
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Bones and teeth:</strong> Drives intestinal calcium absorption and bone mineralization.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Muscle function:</strong> Affects strength and coordination — relevant for falls and fractures in older adults.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Immunity:</strong> Activates antimicrobial peptides and modulates inflammation.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Mood and sleep:</strong> Low levels are associated with depressive symptoms and disturbed sleep — whether causal or a consequence is not fully resolved.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          If you want to understand how much sun the body needs to make its own vitamin D, see the
          <router-link :to="localeBlogPath('vitamin-d-calculator')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">background article on vitamin D synthesis</router-link>.
        </p>
      </div>

      <!-- Deficiency symptoms -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Symptoms of vitamin D deficiency</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The symptoms are non-specific and easily attributed to other causes. When several appear together, a blood test is worth ordering:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Persistent fatigue</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Exhaustion despite adequate sleep and quick fatigue during everyday tasks. Trials in people with confirmed deficiency show that supplementation measurably reduces fatigue.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Bone and muscle pain</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Diffuse bone or back pain, weakness in the thighs and shoulders. Severe deficiency can lead to osteomalacia (soft bones) — known as rickets in children.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Low mood</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Reduced mood, especially during winter. The link between vitamin D and seasonal affective symptoms is well documented; supplementing in deficient individuals can ease symptoms.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Frequent infections</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              More colds and prolonged respiratory infections than usual. A BMJ 2017 meta-analysis found that supplementing deficient individuals significantly reduces the rate of acute respiratory infections.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Hair loss and slow wound healing</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Diffuse hair shedding, slow-healing wounds, brittle nails. Vitamin D contributes to skin and hair follicle differentiation.
            </p>
          </div>
        </div>
      </div>

      <!-- Risk groups -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Who is at higher risk?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Some groups rarely reach adequate levels even in summer. Routine monitoring and year-round supplementation are usually appropriate:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risk group</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Reason</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Infants (0–12 months)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Limited sun exposure, low stores — 400–500 IU/day recommended</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Adults 65+</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Reduced skin synthesis, less time outdoors</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Darker skin types (V/VI)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Melanin reduces UV-B-driven synthesis 3–8×</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Obesity (BMI &gt; 30)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Vitamin D is sequestered in adipose tissue</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Veiled clothing or little outdoor time</td>
                <td class="px-6 py-3 text-stone-900 font-medium">UV-B barely reaches the skin</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Chronic gut or liver disease</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Impaired absorption or activation</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Pregnant and breastfeeding</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Increased need, supports the baby</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          If you also have bone pain, falls, or fractures in your history, it is worth checking your individual
          <router-link :to="localePath('osteoporosisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">osteoporosis risk</router-link>.
        </p>
      </div>

      <!-- Testing -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Blood test: interpreting 25-OH-D</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The standard test measures <strong>25-hydroxy-vitamin D (25-OH-D, calcidiol)</strong> in serum. This value reflects vitamin D status over the previous weeks. Calcitriol (1,25-OH-D) is the active form — measured only in special cases, since it usually stays normal even in deficiency.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Values are reported in <strong>ng/mL</strong> or <strong>nmol/L</strong>. Conversion: 1 ng/mL ≈ 2.5 nmol/L.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Status</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">ng/mL</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">nmol/L</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Severe deficiency</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 10</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 25</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>Deficient</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">10–20</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">25–50</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Insufficient</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">20–30</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">50–75</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Sufficient</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">30–60</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">75–150</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>High</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">60–100</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">150–250</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 mr-2"></span>Toxic range</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 100</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Ideally, test at the end of winter (February/March) and again after a sunny stretch (September) — that gives an honest picture of seasonal swings.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          When deficiency is found, related labs help: <strong>calcium</strong>, <strong>phosphate</strong>, <strong>parathyroid hormone (PTH)</strong>, and kidney function. If you already have a lab report,
          <router-link :to="localePath('correctedCalcium')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">calculate your corrected calcium</router-link>.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">How much sun do you actually need?</h3>
        <p class="text-stone-300 text-sm mb-5">Skin type, latitude, season — the free vitamin D calculator estimates your needs.</p>
        <router-link
          :to="localePath('vitaminD')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open the vitamin D calculator &rarr;</router-link>
      </div>

      <!-- Supplementation -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Supplementation: choosing the right IU per day</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          The International Unit (IU) is the standard dose unit. Conversion: 40 IU = 1 µg of vitamin D3. The right daily dose depends on starting level, body weight, and goal.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Group</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Maintenance dose</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Infants 0–12 months</td>
                <td class="px-6 py-3 text-stone-900 font-medium">400–500 IU/day</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Children 1–18 years</td>
                <td class="px-6 py-3 text-stone-900 font-medium">600–1,000 IU/day</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Adults</td>
                <td class="px-6 py-3 text-stone-900 font-medium">800–2,000 IU/day</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Older adults / obesity</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,500–4,000 IU/day</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Pregnant / breastfeeding</td>
                <td class="px-6 py-3 text-stone-900 font-medium">1,000–2,000 IU/day (under medical supervision)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          A practical rule of thumb when correcting a deficiency: <strong>30–50 IU per kg of body weight per day</strong>. A 70 kg person therefore needs about 2,100–3,500 IU/day, a 100 kg person 3,000–5,000 IU/day, until the target of 30–50 ng/mL is reached. After that, a lower maintenance dose usually suffices.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          High-dose loading regimens (for example 50,000 IU once weekly) should only be used after a lab result and under medical supervision.
        </p>
      </div>

      <!-- D3 vs D2 -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">D3 vs. D2 — which is better?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Two main forms are used in supplements:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Vitamin D3 (cholecalciferol)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Animal-derived form (often from lanolin, or from lichen for vegan products). It raises 25-OH-D more reliably and lasts longer than D2 — studies show roughly 1.7× greater effectiveness. The default choice for supplementation.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Vitamin D2 (ergocalciferol)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Plant-derived form from yeast or fungi. Cleared from the body more quickly and less effective at raising 25-OH-D. Available by prescription in some countries; in everyday use, D2 plays only a small role.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Vitamin D3 + K2</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Vitamin K2 (menaquinone) is often combined because it directs calcium into bone. Evidence is reasonable for osteoporosis prevention but K2 is not mandatory. Anyone on vitamin K antagonists (e.g. warfarin) should not start K2 without medical advice.
            </p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mt-4">
          Vitamin D is fat-soluble. Take supplements with a meal that contains some fat — absorption improves substantially.
        </p>
      </div>

      <!-- Food sources -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Food sources of vitamin D</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Diet alone rarely covers the requirement — even cod liver oil, the dietary champion, only provides part of what sun or supplements deliver. Still, these foods help:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Food</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Vitamin D per 100 g</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Cod liver oil</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~10,000 IU</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Wild salmon, cooked</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~600–1,000 IU</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Herring, mackerel</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~400–800 IU</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Sardines, tuna</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~200–400 IU</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Egg yolk (1)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~40 IU</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">UV-treated mushrooms</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~400–1,200 IU (D2)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Fortified cow milk</td>
                <td class="px-6 py-3 text-stone-900 font-medium">~40–50 IU</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Two to three portions of fatty fish per week provide a baseline supply. In northern winters this is rarely enough — a low-dose supplement is the simplest fix.
        </p>
      </div>

      <!-- Safety ceiling -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Upper limit and overdose</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vitamin D is fat-soluble and accumulates in body fat. Acute toxicity is rare but possible. Authorities define the <strong>Tolerable Upper Intake Level (UL)</strong> as:
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Infants:</strong> 1,000 IU/day (EFSA), 1,500 IU/day (IOM)</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Children up to age 10:</strong> 2,000–2,500 IU/day</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Adolescents and adults:</strong> 4,000 IU/day (EFSA, IOM)</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Toxicity typically appears only after very high, prolonged intakes — usually above 50,000 IU/day for weeks or sustained 25-OH-D levels &gt; 100 ng/mL. Symptoms reflect hypercalcemia: nausea, vomiting, confusion, increased thirst, kidney stones, cardiac arrhythmia.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Take extra care with sarcoidosis, tuberculosis, primary hyperparathyroidism, severe kidney disease, or while taking thiazide diuretics or digitalis. In these situations, medical supervision is mandatory.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          With long-term intake above 4,000 IU/day, plan annual checks of 25-OH-D, calcium, and kidney function.
        </p>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Vitamin D deficiency is common, often silent, and easy to fix. If you notice several typical symptoms or belong to a risk group, ask for a 25-OH-D test. Levels below 20 ng/mL are deficient; the goal is 30–50 ng/mL.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          For adults without deficiency, 800–2,000 IU of vitamin D3 per day usually suffices. If you are deficient, dose by body weight (30–50 IU/kg/day). Loading doses, very high doses, and special conditions belong in medical hands. In parallel, use the
          <router-link :to="localePath('vitaminD')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">vitamin D calculator</router-link>
          to see how much your own skin synthesis can realistically contribute.
        </p>
      </div>

      <RelatedArticlesEn slug="vitamin-d-deficiency" />
    </div>
  </article>
</template>
