<script setup>
import { useHead } from '../../../composables/useHead.js'
import RelatedArticlesEn from '../../../components/RelatedArticlesEn.vue'
import { useLocaleRouter } from '../../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Menopause — Natural Symptom Relief and When to See a Doctor | Health Calculators',
  description: 'Menopause explained — perimenopause vs menopause, common symptoms, natural relief through diet, exercise, phytoestrogens, sleep and stress. Plus red flags, HRT overview and long-term bone and heart risks.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Menopause — Natural Symptom Relief and When to See a Doctor',
      description: 'Menopause explained — perimenopause vs menopause, common symptoms, natural relief, red flags, HRT overview and long-term bone and heart risks.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/en/blog/menopause-natural-relief',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Menopause — Natural Relief and Medical Care',
      about: { '@type': 'MedicalCondition', name: 'Menopause' },
      audience: { '@type': 'PeopleAudience', audienceType: 'Women 40–65' },
      lastReviewed: '2026-05-13',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between perimenopause and menopause?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Perimenopause is the transition phase with fluctuating hormones, usually starting in the mid-40s and lasting 4–10 years. Menopause is the point 12 months after your last period — on average at age 51. Afterwards you are in postmenopause.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which natural remedies help with hot flashes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Well-supported options include regular exercise, weight loss if BMI > 25, avoiding triggers such as caffeine, alcohol and spicy food, paced breathing, and phytoestrogens from soy and flaxseed. Effects are individual and usually moderate.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I see a doctor about menopause symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'See a doctor for heavy bleeding, any bleeding after 12 months of amenorrhea, a one-sided breast lump, persistent depression, chest pain, unexplained weight loss, or symptoms that dominate daily life. Hormone therapy (HRT) decisions also need a thorough medical consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does menopause raise the risk of osteoporosis and heart attack?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Estrogen loss accelerates bone loss (up to 2 % per year in the first 5–10 years) and worsens lipid profiles. Postmenopausal women have substantially higher risk of osteoporosis and cardiovascular disease — prevention should start early.',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Menopause — Natural Symptom Relief and When to See a Doctor</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">May 13, 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">14 min read</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Medical disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed">
          <strong>Medical disclaimer:</strong> This article does not replace medical advice, diagnosis, or treatment. Menopause symptoms are individual, and some overlap with other conditions (thyroid disease, anemia, depression). Severe symptoms, unusual bleeding, or questions about hormone therapy require a clinician's evaluation.
        </p>
      </div>

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Menopause</strong> is not a disease but a hormonal transition every woman goes through. On average it occurs at age 51 — earlier for some (premature ovarian insufficiency before 40), later for others. The years before are called <strong>perimenopause</strong>, which can start in the mid-40s with irregular cycles, mood swings or sleep problems and lasts an average of 4–10 years.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          This article maps the phases, describes the most common symptoms, summarizes what really helps for natural relief, and clearly states when medical care is non-negotiable. It also covers hormone therapy (HRT) and the often-underestimated long-term consequences for bone and heart health.
        </p>
      </div>

      <!-- Perimenopause vs Menopause -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Perimenopause, menopause, postmenopause — what is what?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Menopause is not a point in time but a process. Three phases can be distinguished clearly, even though the transitions blur:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Phase</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Typical onset</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Hallmark</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Perimenopause</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~ 45 years</td>
                <td class="px-6 py-3 text-stone-900">Cycle length varies, FSH rises in phases, first symptoms appear</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Menopause</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">~ 51 years</td>
                <td class="px-6 py-3 text-stone-900">Final menstrual period — diagnosed in retrospect after 12 months without one</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Postmenopause</td>
                <td class="px-6 py-3 text-stone-900 font-medium">afterwards</td>
                <td class="px-6 py-3 text-stone-900">Estrogen permanently low, symptoms usually ease, long-term risks rise</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hormonally, progesterone falls first because ovulation becomes less frequent. Estrogen swings strongly at first — with high peaks and deep troughs — and only later drops persistently. These swings explain why perimenopause is often more symptomatic than postmenopause itself.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          To objectively measure how strong your symptoms are, use the
          <router-link :to="localePath('menopauseSymptom')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">menopause symptom calculator</router-link>
          to compute your MRS score — a validated scale covering 11 symptoms across three domains.
        </p>
      </div>

      <!-- Common symptoms -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">The most common symptoms</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Roughly 80 % of women experience menopause-related symptoms. About a quarter find them severely disruptive. Symptoms are diverse, but three groups dominate:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Vasomotor symptoms</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Hot flashes and night sweats are the classic picture. A hot flash typically lasts 1–5 minutes, starts in the chest and rises to the head, often followed by chills. Some women experience them ten times a day, others hardly at all. They last on average 7–10 years — sometimes much longer.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Psychological and cognitive symptoms</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Irritability, low mood, anxiety, concentration problems, "brain fog" — all common companions. Women with a history of PMS or postpartum depression are more susceptible. Sleep loss makes these symptoms worse.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Genitourinary symptoms</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Vaginal dryness, burning, painful intercourse, recurrent urinary tract infections, urge and stress incontinence. This "genitourinary syndrome of menopause" (GSM) affects about 50 % of women, often only later — and often persists if left untreated.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Sleep disturbance</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Trouble falling and staying asleep affects 40–60 % of women in the transition — partly hormonal, partly a consequence of night sweats. Chronic sleep loss amplifies almost every other symptom and is an independent cardiovascular risk factor.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Joint and muscle pain</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Estrogen is anti-inflammatory and protects cartilage. As it drops, many women report morning stiffness, joint pain (especially hands and knees) and muscle aches. This "menopausal arthralgia" is often underestimated and confused with rheumatic disease.
            </p>
          </div>
        </div>
      </div>

      <!-- Natural relief intro -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Natural relief — what really helps</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          "Natural" does not automatically mean ineffective — and it does not automatically mean safe either. The measures below have demonstrated measurable symptom relief in studies. Realistic expectations: a 30–50 % reduction across multiple symptoms when combined. Anyone expecting complete relief will be disappointed.
        </p>
      </div>

      <!-- Diet -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">1. Diet: phytoestrogens and a Mediterranean pattern</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Phytoestrogens</strong> are plant compounds that bind weakly to estrogen receptors. Soy isoflavones (genistein, daidzein) are the most studied. Meta-analyses show a moderate effect on hot flashes — typically a 20–25 % reduction over placebo. Effective intake is 40–80 mg isoflavones per day (about 200–400 mL soy milk or 100 g tofu).
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Soy:</strong> Tofu, tempeh, edamame, soy milk, fermented products (miso, natto) provide highly bioavailable daidzein.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Flaxseed:</strong> Freshly ground, 1–2 tablespoons per day. Provides lignans with phytoestrogenic activity plus omega-3.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Legumes:</strong> Chickpeas, lentils, beans — moderate isoflavone content plus fiber and plant protein.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Mediterranean diet:</strong> Olive oil, vegetables, fish, nuts — lowers inflammation markers and protects the heart and vessels in postmenopause.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>What to avoid:</strong> Alcohol, caffeine and spicy foods are classic hot-flash triggers. A 2–4 week trial without alcohol and with reduced caffeine (max one morning coffee) quickly reveals whether these matter for you.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Weight gain in postmenopause is common because basal metabolic rate falls. The
          <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI calculator</router-link>
          provides a first orientation. Weight loss when BMI exceeds 25 measurably reduces hot flashes.
        </p>
      </div>

      <!-- Exercise -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">2. Exercise: strength training becomes mandatory</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Before menopause, exercise is a recommendation. After it, it becomes a medical necessity. With estrogen loss, the decline in muscle mass and bone density accelerates. Only loading the body counteracts this.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Type of training</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frequency</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Effect</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Strength training</td>
                <td class="px-6 py-3 text-stone-900 font-medium">2–3 × per week</td>
                <td class="px-6 py-3 text-stone-900">Muscle and bone, metabolism, mood</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Moderate aerobic</td>
                <td class="px-6 py-3 text-stone-900 font-medium">150 min/week</td>
                <td class="px-6 py-3 text-stone-900">Cardiovascular health, sleep, fewer hot flashes</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Impact loading (jumps, hops)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">2 × per week</td>
                <td class="px-6 py-3 text-stone-900">Bone density (especially hip and spine)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Yoga, Tai Chi</td>
                <td class="px-6 py-3 text-stone-900 font-medium">2–3 × per week</td>
                <td class="px-6 py-3 text-stone-900">Stress, sleep, balance, fall prevention</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          A controlled trial in women aged 50–65 doing two strength sessions per week showed preserved bone density at the spine and hip after one year — while the control group lost 1–2 %. To estimate your personal fracture risk, use the
          <router-link :to="localePath('osteoporosisRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">osteoporosis risk calculator</router-link>.
        </p>
      </div>

      <!-- Sleep hygiene -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">3. Sleep hygiene</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Sleep loss is often the most burdensome consequence of menopause — and one of the few areas where behavior change makes a big difference. The steps are mundane but effective when applied consistently:
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Keep the bedroom cool:</strong> 16–18 °C, breathable bedding, several thin layers instead of one thick duvet.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Consistent schedule:</strong> Go to bed and get up at the same time — including weekends. Circadian rhythm is sensitive to irregularity.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>No alcohol in the evening:</strong> It helps with falling asleep but heavily fragments the second half of the night.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>No caffeine after 2 p.m.:</strong> Caffeine half-life rises with age — afternoon coffee is still active at bedtime.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Dim screens:</strong> At least 60 minutes before sleep, avoid bright direct light to the eyes.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>For night sweats:</strong> Water within reach, layers to strip off, a fan. If you stay under 6 hours of sleep for more than 4 weeks despite these steps, seek medical advice.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          CBT-I (cognitive behavioral therapy for insomnia) is the most effective non-drug treatment for sleep problems — including during menopause. Online programs are widely available and often covered by insurance.
        </p>
      </div>

      <!-- Stress -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">4. Stress reduction and breathing</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Stress amplifies almost every menopause symptom. Chronically raised cortisol worsens sleep, mood and hot flashes. Two methods are particularly well supported:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Paced breathing</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Slow abdominal breathing at 6 breaths per minute (5 seconds in, 5 seconds out). Twice daily for 15 minutes — and additionally at the first sign of a hot flash. A randomized trial showed about a 30–40 % reduction in hot flashes after 9 weeks.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Mindfulness (MBSR)</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Mindfulness-based stress reduction reduces not primarily the frequency of hot flashes but the subjective burden — how disturbing they feel. Mood and sleep also improve in most trials.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Social support</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Women who talk openly about menopause — with a partner, friends or in groups — report less distress. The phase is normal and finite; making it a taboo only makes it worse.
            </p>
          </div>
        </div>
      </div>

      <!-- Herbal supplements -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">5. Herbal supplements — the honest picture</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Pharmacies are full of menopause supplements. The evidence is mixed — some products perform like placebo, others show moderate effects. Important: "herbal" does not equal "free of side effects".
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Supplement</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Evidence</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Caveats</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Black cohosh (Cimicifuga)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Moderate for hot flashes</td>
                <td class="px-6 py-3 text-stone-900">Rare liver effects — avoid with liver disease</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Soy isoflavones (standardized)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Moderate (20–25 % reduction)</td>
                <td class="px-6 py-3 text-stone-900">Discuss with a clinician if breast cancer history</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Red clover</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Mixed</td>
                <td class="px-6 py-3 text-stone-900">Phytoestrogen activity — same caution as soy</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">St. John's wort</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Good for mild depression</td>
                <td class="px-6 py-3 text-stone-900">Many drug interactions (oral contraceptives, anticoagulants)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Sage</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Weak, for sweating</td>
                <td class="px-6 py-3 text-stone-900">Strong tea or extract — not for long-term daily use</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Evening primrose oil</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Weak</td>
                <td class="px-6 py-3 text-stone-900">Effect barely better than placebo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Start with one supplement, give it 8–12 weeks, document symptoms (the MRS score is handy), then decide. Combining multiple herbal products at once increases interaction risk without reliably increasing benefit.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">How severe are your symptoms?</h3>
        <p class="text-stone-300 text-sm mb-5">The validated MRS score rates 11 symptoms across 3 domains — in 2 minutes.</p>
        <router-link
          :to="localePath('menopauseSymptom')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Open the menopause symptom calculator &rarr;</router-link>
      </div>

      <!-- Red flags -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Red flags — when to see a doctor</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Most menopause symptoms are uncomfortable but harmless. Some complaints, however, require prompt medical evaluation because they may indicate other conditions:
        </p>
        <div class="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-4">
          <ul class="space-y-3 text-sm text-rose-900 leading-relaxed">
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Bleeding after 12 months of amenorrhea:</strong> Postmenopausal bleeding always needs work-up (endometrial cancer risk).</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Very heavy or prolonged bleeding:</strong> Frequent heavy bleeding in perimenopause may indicate fibroids, polyps or hyperplasia.</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>One-sided breast lump or skin changes:</strong> Immediate mammography/ultrasound.</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Persistent depression, suicidal thoughts:</strong> Psychotherapy, antidepressants if needed — treatable also in perimenopause.</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Palpitations, chest pain, shortness of breath:</strong> Women often have atypical heart-attack symptoms — do not wait.</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Unexplained weight loss, persistent fatigue:</strong> Rule out thyroid, anemia, diabetes — not everything is "menopause".</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Severe hot flashes before age 40:</strong> Premature ovarian insufficiency (POI) — needs its own work-up.</span></li>
            <li class="flex gap-3"><span class="font-bold">!</span><span><strong>Symptoms that dominate daily life:</strong> Sleep under 5 hours, inability to work, social withdrawal — effective help exists.</span></li>
          </ul>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Before the first consultation, keep a symptom diary: frequency of hot flashes, sleep hours, mood, cycle length. It saves time and improves treatment choices.
        </p>
      </div>

      <!-- HRT overview -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">HRT — hormone therapy in brief</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hormone therapy (HRT, MHT) replaces estrogen — and progesterone in women with a uterus to protect the endometrium. It is the most effective treatment for hot flashes, genitourinary symptoms and bone loss during the early years after menopause.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          After the WHI study (2002), HRT was long considered risky. More nuanced analyses since around 2015 show: <strong>in healthy women under 60 and within 10 years of their last period</strong>, benefits often outweigh risks. This is called the "window of opportunity".
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Transdermal (patch, gel):</strong> Lower thrombosis risk than oral tablets — today's standard for systemic therapy.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Micronized progesterone:</strong> Preferred over synthetic progestins — better breast-cancer profile.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Local estrogen (vaginal cream, tablet, ring):</strong> Treats dryness, incontinence and pain — minimal systemic effect, safe even long-term.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Contraindications:</strong> Current or past breast cancer, endometrial cancer, acute thromboembolism, severe liver disease, unexplained vaginal bleeding.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          An honest risk discussion is part of every HRT consultation: breast-cancer risk rises slightly after 5 years of combined HRT (about 1 additional case per 1000 women per year), thrombosis risk doubles with oral therapy. Knowing your individual
          <router-link :to="localePath('cardiovascularRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">cardiovascular risk</router-link>
          makes the conversation more focused.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Non-hormonal medications are alternatives: SSRIs/SNRIs (paroxetine, venlafaxine), gabapentin, or the newer NK3 receptor antagonist fezolinetant — all prescription drugs with their own side-effect profiles.
        </p>
      </div>

      <!-- Long-term risks -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Long-term risks — bone and heart</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Menopause is not just a phase with symptoms but a health turning point. Two long-term risks are often underestimated:
        </p>
        <div class="space-y-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Osteoporosis</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              In the first 5–10 years after the final period, women can lose up to 2 % of bone density per year. One in two women over 50 will experience an osteoporosis-related fracture in her lifetime — most often vertebra, hip, or wrist.
            </p>
            <p class="text-sm text-stone-500 leading-relaxed">
              <strong>Prevention:</strong> Strength training, impact loading, 1,000–1,200 mg calcium per day (food first), 800–2,000 IU vitamin D, no smoking and limited alcohol. A DXA bone-density scan is recommended at age 65, earlier with risk factors.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cardiovascular disease</h3>
            <p class="text-sm text-stone-500 leading-relaxed mb-2">
              Before menopause, estrogen protects the vascular system. Afterwards, LDL cholesterol, blood pressure and visceral fat rise — and with them the risk of heart attack and stroke. Cardiovascular disease is the leading cause of death in postmenopausal women.
            </p>
            <p class="text-sm text-stone-500 leading-relaxed">
              <strong>Prevention:</strong> Measure blood pressure regularly (target &lt; 130/80), check lipids every 5 years, exercise 150 min/week, no smoking, healthy weight, Mediterranean pattern. If you already have high blood pressure, get individual risk assessed by a clinician.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Cognitive decline</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              "Brain fog" in perimenopause is usually transient. Yet women have about double the lifetime Alzheimer's risk of men — the exact contribution of menopause is still under study. Best current prevention: everything that protects the heart and vessels, plus mental and social activity.
            </p>
          </div>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Bottom line</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Menopause is not a defect, it is a phase. For most women, symptoms ease noticeably with diet, exercise, sleep hygiene and stress reduction. Herbal supplements may help moderately — with realistic expectations. For women with severe symptoms, modern HRT is an effective, well-studied option.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          The long-term decisions matter most: strength training and bone care from perimenopause on, regular check-ups, honest symptom tracking. Women who navigate this transition actively gain not just less suffering — but better decades after. A first objective look at your symptoms comes from the
          <router-link :to="localePath('menopauseSymptom')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">menopause symptom calculator</router-link>.
        </p>
      </div>

      <RelatedArticlesEn slug="menopause-natural-relief" />
    </div>
  </article>
</template>
