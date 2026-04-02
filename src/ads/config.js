export const adConfig = {
  supplements: {
    network: 'various',
    program: 'MyProtein / Foodspring',
    affiliate: {
      de: {
        text: 'Proteinpulver & Supplements vergleichen — für dein Trainingsziel.',
        cta: 'Jetzt vergleichen',
        url: '#',
      },
      en: {
        text: 'Compare protein powders & supplements — for your training goal.',
        cta: 'Compare now',
        url: '#',
      },
    },
  },
  fitness: {
    network: 'Amazon PartnerNet',
    program: 'Fitness Trackers & Scales',
    affiliate: {
      de: {
        text: 'Fitness-Tracker & Waagen im Vergleich — für präzises Tracking.',
        cta: 'Produkte vergleichen',
        url: '#',
      },
      en: {
        text: 'Compare fitness trackers & scales — for precise tracking.',
        cta: 'Compare products',
        url: '#',
      },
    },
  },
  nutrition: {
    network: 'various',
    program: 'HelloFresh / Weight Management',
    affiliate: {
      de: {
        text: 'Gesund essen leicht gemacht — fertige Rezepte nach Hause.',
        cta: 'Angebote ansehen',
        url: '#',
      },
      en: {
        text: 'Healthy eating made easy — ready-made recipes delivered.',
        cta: 'View offers',
        url: '#',
      },
    },
  },
  pregnancy: {
    network: 'Amazon PartnerNet',
    program: 'Pregnancy & Baby Products',
    affiliate: {
      de: {
        text: 'Schwangerschafts-Essentials — von Vitaminen bis Erstausstattung.',
        cta: 'Produkte entdecken',
        url: '#',
      },
      en: {
        text: 'Pregnancy essentials — from vitamins to first gear.',
        cta: 'Discover products',
        url: '#',
      },
    },
  },
  wellness: {
    network: 'Amazon PartnerNet',
    program: 'Blood Pressure Monitors & Sleep Aids',
    affiliate: {
      de: {
        text: 'Blutdruckmessgeräte & Schlaf-Tracker im Vergleich.',
        cta: 'Jetzt vergleichen',
        url: '#',
      },
      en: {
        text: 'Compare blood pressure monitors & sleep trackers.',
        cta: 'Compare now',
        url: '#',
      },
    },
  },
  default: {
    network: 'various',
    program: 'General Health & Fitness',
    affiliate: {
      de: {
        text: 'Gesundheit optimieren? Die besten Tools und Produkte im Vergleich.',
        cta: 'Jetzt entdecken',
        url: '#',
      },
      en: {
        text: 'Optimize your health? Compare the best tools and products.',
        cta: 'Discover now',
        url: '#',
      },
    },
  },
}

export const routeContextMap = {
  // supplements: Protein, Macro, TDEE, Calorie Deficit, BMR
  'protein-rechner': 'supplements',
  'protein-calculator': 'supplements',
  'makro-rechner': 'supplements',
  'macro-calculator': 'supplements',
  'tdee-rechner': 'supplements',
  'tdee-calculator': 'supplements',
  'kaloriendefizit-rechner': 'supplements',
  'calorie-deficit-calculator': 'supplements',
  'bmr-rechner': 'supplements',
  'bmr-calculator': 'supplements',
  // fitness: BMI, Body Fat, Heart Rate, WHR
  'bmi-rechner': 'fitness',
  'bmi-calculator': 'fitness',
  'koerperfett-rechner': 'fitness',
  'body-fat-calculator': 'fitness',
  'herzfrequenz-zonen': 'fitness',
  'heart-rate-zones': 'fitness',
  'taille-hueft-verhaeltnis': 'fitness',
  'waist-hip-ratio-calculator': 'fitness',
  // nutrition: Ideal Weight
  'idealgewicht-rechner': 'nutrition',
  'ideal-weight-calculator': 'nutrition',
  // pregnancy: Pregnancy, Ovulation
  'schwangerschafts-rechner': 'pregnancy',
  'pregnancy-calculator': 'pregnancy',
  'eisprung-rechner': 'pregnancy',
  'ovulation-calculator': 'pregnancy',
  // wellness: Blood Pressure, Sleep, Water Intake
  'blutdruck-rechner': 'wellness',
  'blood-pressure-calculator': 'wellness',
  'schlafzyklen-rechner': 'wellness',
  'sleep-cycle-calculator': 'wellness',
  'wasser-rechner': 'wellness',
  'water-intake-calculator': 'wellness',
  // nutrition: Intermittent Fasting
  'intervallfasten-rechner': 'nutrition',
  'intermittent-fasting-calculator': 'nutrition',
  // supplements: One Rep Max
  'one-rep-max-rechner': 'supplements',
  'one-rep-max-calculator': 'supplements',
}
