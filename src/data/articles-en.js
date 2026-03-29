export const articlesEn = [
  {
    slug: 'calculate-bmi',
    title: 'Calculate BMI: What the Body Mass Index Really Tells You',
    description: 'Calculate your BMI with the formula, WHO table & interpretation. Learn the limits of BMI and which alternatives exist.',
    date: '2026-03-25',
    readTime: '8 min',
    calculatorKey: 'bmi',
    calculator: '/bmi',
    related: ['calculate-ideal-weight', 'calculate-body-fat'],
  },
  {
    slug: 'calculate-ideal-weight',
    title: 'Calculate Ideal Weight: What Is the Perfect Weight?',
    description: 'Calculate your ideal weight with four formulas. Devine, Robinson, Miller & Hamwi compared — plus healthy BMI range.',
    date: '2026-03-25',
    readTime: '7 min',
    calculatorKey: 'idealWeight',
    calculator: '/ideal-weight',
    related: ['calculate-bmi', 'calculate-body-fat'],
  },
  {
    slug: 'calculate-body-fat',
    title: 'Calculate Body Fat Percentage: Methods, Table & Guidelines',
    description: 'Calculate body fat percentage using the U.S. Navy method. Categories, guidelines and why body fat is more meaningful than BMI.',
    date: '2026-03-25',
    readTime: '7 min',
    calculatorKey: 'bodyFat',
    calculator: '/body-fat',
    related: ['calculate-bmi', 'calculate-ideal-weight'],
  },
  {
    slug: 'calculate-tdee',
    title: 'Calculate TDEE: How to Determine Your Daily Calorie Burn',
    description: 'Calculate TDEE using the Mifflin-St Jeor formula. Basal metabolic rate, activity factors and calorie goals for losing or gaining weight.',
    date: '2026-03-25',
    readTime: '7 min',
    calculatorKey: 'tdee',
    calculator: '/tdee',
    related: ['calculate-macros', 'calculate-bmi'],
  },
  {
    slug: 'calculate-macros',
    title: 'Calculate Macronutrients: How to Split Protein, Carbs & Fat',
    description: 'Calculate macronutrients based on your calorie needs and goals. Optimal distribution for weight loss, maintenance and muscle building.',
    date: '2026-03-25',
    readTime: '7 min',
    calculatorKey: 'macro',
    calculator: '/macros',
    related: ['calculate-tdee', 'calculate-water-intake'],
  },
  {
    slug: 'calculate-water-intake',
    title: 'Calculate Water Intake: How Much Water You Need Daily',
    description: 'Calculate daily water intake — adjusted for weight, activity and climate. With glass conversion and practical tips.',
    date: '2026-03-25',
    readTime: '6 min',
    calculatorKey: 'water',
    calculator: '/water',
    related: ['calculate-tdee', 'calculate-macros'],
  },
  {
    slug: 'calculate-sleep-cycles',
    title: 'Calculate Sleep Cycles: Wake Up at the Right Time',
    description: 'Calculate sleep cycles for restful sleep. Understand 90-minute cycles and find your optimal bedtime or wake-up time.',
    date: '2026-03-25',
    readTime: '6 min',
    calculatorKey: 'sleep',
    calculator: '/sleep',
    related: ['calculate-water-intake'],
  },
  {
    slug: 'calculate-due-date',
    title: "Calculate Due Date: When Is My Baby Coming?",
    description: "Calculate your due date using Naegele's rule. Pregnancy weeks, trimesters, milestones and why only 4% of babies arrive on the estimated date.",
    date: '2026-03-26',
    readTime: '7 min',
    calculatorKey: 'pregnancy',
    calculator: '/pregnancy',
    related: ['calculate-bmi', 'calculate-ovulation'],
  },
  {
    slug: 'calculate-calorie-deficit',
    title: 'Calculate Calorie Deficit: How to Lose Weight Safely',
    description: 'Calculate your calorie deficit using the Mifflin-St Jeor formula. TDEE, safe deficit and the 7,700 kcal rule explained simply.',
    date: '2026-03-27',
    readTime: '7 min',
    calculatorKey: 'calorieDeficit',
    calculator: '/kaloriendefizit-rechner',
    related: ['calculate-tdee', 'calculate-macros'],
  },
  {
    slug: 'calculate-heart-rate-zones',
    title: 'Calculate Heart Rate Zones: Train in the Right Range',
    description: 'Calculate the five heart rate zones. Standard and Karvonen methods for targeted training from fat burn to VO2max.',
    date: '2026-03-25',
    readTime: '7 min',
    calculatorKey: 'heartRate',
    calculator: '/heart-rate',
    related: ['calculate-tdee'],
  },
  {
    slug: 'calculate-waist-hip-ratio',
    title: 'Calculate Waist-to-Hip Ratio: WHR, WHO Thresholds & Risk',
    description: 'Calculate your waist-to-hip ratio (WHR) and assess health risk. WHO thresholds, measurement guide and why WHR is more meaningful than BMI.',
    date: '2026-03-27',
    readTime: '7 min',
    calculatorKey: 'waistHipRatio',
    calculator: '/waist-hip-ratio',
    related: ['calculate-bmi', 'calculate-body-fat'],
  },
  {
    slug: 'measure-blood-pressure',
    title: 'Measure Blood Pressure: Understand & Interpret Your Values',
    description: 'Measure blood pressure correctly and interpret your values. AHA categories, measurement tips, risk factors and when to see a doctor.',
    date: '2026-03-27',
    readTime: '7 min',
    calculatorKey: 'bloodPressure',
    calculator: '/blutdruck-rechner',
    related: ['calculate-bmi', 'calculate-water-intake'],
  },
  {
    slug: 'calculate-ovulation',
    title: 'Calculate Ovulation: How to Determine Your Fertile Days',
    description: 'Calculate your ovulation with the calendar method. Fertile window, cycle length, luteal phase and tips for natural family planning.',
    date: '2026-03-29',
    readTime: '7 min',
    calculatorKey: 'ovulation',
    related: ['calculate-due-date'],
  },
]

export function getEnArticleBySlug(slug) {
  return articlesEn.find(a => a.slug === slug)
}

export function getEnRelatedArticles(slug) {
  const article = getEnArticleBySlug(slug)
  if (!article) return []
  return article.related.map(getEnArticleBySlug).filter(Boolean)
}

export function getEnArticleByCalculator(calculatorPath) {
  return articlesEn.find(a => a.calculator === calculatorPath)
}
