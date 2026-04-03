export const adConfig = {
  // ── German affiliate programs (unchanged) ──
  de: {
    supplements: {
      network: 'various',
      program: 'MyProtein / Foodspring',
      affiliate: {
        text: 'Proteinpulver & Supplements vergleichen — für dein Trainingsziel.',
        cta: 'Jetzt vergleichen',
        url: '#',
      },
    },
    fitness: {
      network: 'Amazon PartnerNet',
      program: 'Fitness Trackers & Scales',
      affiliate: {
        text: 'Fitness-Tracker & Waagen im Vergleich — für präzises Tracking.',
        cta: 'Produkte vergleichen',
        url: '#',
      },
    },
    nutrition: {
      network: 'various',
      program: 'HelloFresh / Weight Management',
      affiliate: {
        text: 'Gesund essen leicht gemacht — fertige Rezepte nach Hause.',
        cta: 'Angebote ansehen',
        url: '#',
      },
    },
    pregnancy: {
      network: 'Amazon PartnerNet',
      program: 'Pregnancy & Baby Products',
      affiliate: {
        text: 'Schwangerschafts-Essentials — von Vitaminen bis Erstausstattung.',
        cta: 'Produkte entdecken',
        url: '#',
      },
    },
    wellness: {
      network: 'Amazon PartnerNet',
      program: 'Blood Pressure Monitors & Sleep Aids',
      affiliate: {
        text: 'Blutdruckmessgeräte & Schlaf-Tracker im Vergleich.',
        cta: 'Jetzt vergleichen',
        url: '#',
      },
    },
    default: {
      network: 'various',
      program: 'General Health & Fitness',
      affiliate: {
        text: 'Gesundheit optimieren? Die besten Tools und Produkte im Vergleich.',
        cta: 'Jetzt entdecken',
        url: '#',
      },
    },
  },

  // ── English affiliate programs ──
  en: {
    'weight-loss': {
      network: 'Impact',
      program: 'Hims & Hers',
      affiliate: {
        text: 'Clinically-backed weight loss programs — prescribed by real doctors.',
        cta: 'Get started',
        url: '#', // TODO: Add Hims & Hers affiliate tracking link (Impact)
      },
    },
    coaching: {
      network: 'ShareASale',
      program: 'Noom',
      affiliate: {
        text: 'Personalized coaching to build healthier habits — backed by science.',
        cta: 'Try Noom',
        url: '#', // TODO: Add Noom affiliate tracking link (ShareASale)
      },
    },
    greens: {
      network: 'Impact',
      program: 'AG1 Athletic Greens',
      affiliate: {
        text: 'Daily nutrition made simple — vitamins, probiotics & adaptogens in one scoop.',
        cta: 'Try AG1',
        url: '#', // TODO: Add AG1 affiliate tracking link (Impact)
      },
    },
    supplements: {
      network: 'Impact',
      program: 'Thorne',
      affiliate: {
        text: 'NSF-certified supplements trusted by pro athletes and practitioners.',
        cta: 'Shop Thorne',
        url: '#', // TODO: Add Thorne affiliate tracking link (Impact)
      },
    },
    vitamins: {
      network: 'FlexOffers',
      program: 'Ritual',
      affiliate: {
        text: 'Essential vitamins with traceable ingredients — clean and science-backed.',
        cta: 'Try Ritual',
        url: '#', // TODO: Add Ritual affiliate tracking link (FlexOffers)
      },
    },
    default: {
      network: 'Impact',
      program: 'AG1 Athletic Greens',
      affiliate: {
        text: 'Daily nutrition made simple — vitamins, probiotics & adaptogens in one scoop.',
        cta: 'Try AG1',
        url: '#', // TODO: Add AG1 affiliate tracking link (Impact)
      },
    },
  },
}

export const routeContextMap = {
  // ── German route mappings ──
  de: {
    // supplements: Protein, Macro, TDEE, Calorie Deficit, BMR
    'protein-rechner': 'supplements',
    'makro-rechner': 'supplements',
    'tdee-rechner': 'supplements',
    'kaloriendefizit-rechner': 'supplements',
    'bmr-rechner': 'supplements',
    // fitness: BMI, Body Fat, Heart Rate, WHR, VO2 Max, Running Pace
    'bmi-rechner': 'fitness',
    'koerperfett-rechner': 'fitness',
    'herzfrequenz-zonen': 'fitness',
    'taille-hueft-verhaeltnis': 'fitness',
    'vo2max-rechner': 'fitness',
    'lauftempo-rechner': 'fitness',
    // nutrition: Ideal Weight, Intermittent Fasting
    'idealgewicht-rechner': 'nutrition',
    'intervallfasten-rechner': 'nutrition',
    // pregnancy: Pregnancy, Ovulation
    'schwangerschafts-rechner': 'pregnancy',
    'eisprung-rechner': 'pregnancy',
    // wellness: Blood Pressure, Sleep, Water Intake
    'blutdruck-rechner': 'wellness',
    'schlafzyklen-rechner': 'wellness',
    'wasser-rechner': 'wellness',
    // supplements: One Rep Max
    'one-rep-max-rechner': 'supplements',
  },

  // ── English route mappings ──
  en: {
    // weight-loss (Hims & Hers): BMI, Calorie Deficit, Body Fat, TDEE
    'bmi-calculator': 'weight-loss',
    'calorie-deficit-calculator': 'weight-loss',
    'body-fat-calculator': 'weight-loss',
    'tdee-calculator': 'weight-loss',
    // coaching (Noom): Macro, BMR
    'macro-calculator': 'coaching',
    'bmr-calculator': 'coaching',
    // supplements (Thorne): Protein, One Rep Max
    'protein-calculator': 'supplements',
    'one-rep-max-calculator': 'supplements',
    // vitamins (Ritual): Water Intake
    'water-intake-calculator': 'vitamins',
    // fitness: Heart Rate, WHR, VO2 Max, Running Pace
    'heart-rate-zones': 'fitness',
    'waist-hip-ratio-calculator': 'fitness',
    'vo2max-calculator': 'fitness',
    'running-pace-calculator': 'fitness',
    // nutrition: Ideal Weight, Intermittent Fasting
    'ideal-weight-calculator': 'nutrition',
    'intermittent-fasting-calculator': 'nutrition',
    // pregnancy: Pregnancy, Ovulation
    'pregnancy-calculator': 'pregnancy',
    'ovulation-calculator': 'pregnancy',
    // wellness: Blood Pressure, Sleep
    'blood-pressure-calculator': 'wellness',
    'sleep-cycle-calculator': 'wellness',
    // all others fall through to default (AG1)
  },
}
