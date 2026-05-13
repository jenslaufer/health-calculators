<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Kalorienbedarf in der Schwangerschaft: So viel brauchst du pro Trimester | Health Calculators',
  description: 'Wie viele Kalorien brauchst du in der Schwangerschaft? Trimester-Tabelle, IOM-Formel, Mythos „für zwei essen" und praktische Tipps für werdende Mütter.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Kalorienbedarf in der Schwangerschaft: So viel brauchst du pro Trimester',
      description: 'Trimester-spezifische Zuschläge, IOM-Empfehlungen, Mehrlinge und realistische Portionsgrößen.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-13',
      dateModified: '2026-05-13',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/kalorienbedarf-schwangerschaft-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie viele Kalorien brauche ich in der Schwangerschaft?',
          acceptedAnswer: { '@type': 'Answer', text: 'Im 1. Trimester null zusätzlich, im 2. Trimester +340 kcal/Tag und im 3. Trimester +452 kcal/Tag (IOM 2002/2005). Bei Zwillingen kommen +300 kcal/Tag ab T2 dazu.' },
        },
        {
          '@type': 'Question',
          name: 'Stimmt es, dass ich „für zwei essen" muss?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. Der Mehrbedarf entspricht im Maximum einer kleinen zusätzlichen Mahlzeit. Wichtiger ist die Nährstoffdichte: Folsäure, Eisen, Jod, Omega-3.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Kalorienbedarf in der Schwangerschaft: So viel brauchst du pro Trimester</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          „Du musst doch jetzt <strong>für zwei essen</strong>!" — kaum ein Schwangerschaftsmythos hält sich so hartnäckig. Tatsächlich liegt der zusätzliche Energiebedarf weit unter dem, was viele erwarten: Im <strong>1. Trimester praktisch null</strong>, im 2. nur +340 kcal/Tag, im 3. rund +452 kcal/Tag.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Beitrag zeigt dir die offiziellen Empfehlungen, erklärt die <strong>IOM-Formel</strong>, ordnet Mehrlinge ein und gibt Beispielmahlzeiten in der richtigen Größenordnung.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Trimester-Tabelle auf einen Blick</h2>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Trimester</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Einling</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Zwillinge</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">1. Trimester (Wochen 1–13)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+0 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+0 kcal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">2. Trimester (Wochen 14–27)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+340 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+640 kcal</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-900 font-medium">3. Trimester (Wochen 28–40)</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+452 kcal</td>
                <td class="px-6 py-3 text-stone-600 tabular-nums">+752 kcal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Quelle: <em>Institute of Medicine, Dietary Reference Intakes for Energy (2002/2005)</em>. Auch DGE und WHO orientieren sich an diesen Werten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Warum im 1. Trimester (fast) kein Mehrbedarf?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          In den ersten 13 Wochen wächst der Embryo zwar rasant — von der Grundeinheit zur erkennbaren Babyform — aber er ist energetisch noch winzig. Die Plazenta beginnt erst zu arbeiten, dein Körper baut neue Strukturen auf, doch der zusätzliche Energiebedarf liegt unter 50 kcal/Tag und gilt damit als <strong>nicht relevant</strong>.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtiger als zusätzliche Kalorien sind in dieser Phase <strong>Folsäure</strong> (Neuralrohrschluss!), <strong>Jod</strong> und <strong>Eisen</strong>. Wer Übelkeit hat, darf der Heißhungerlogik folgen — Hauptsache, es kommt überhaupt etwas runter.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">2. Trimester: +340 kcal — was ist das eigentlich?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          340 kcal entsprechen ungefähr:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Einem <strong>belegten Vollkornbrötchen</strong> mit Käse und Avocado</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Einer <strong>Schüssel Müsli (60 g)</strong> mit Milch und einer Banane</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Einem <strong>Naturjoghurt 500 g</strong> mit zwei Esslöffeln Nüssen</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base">Einer <strong>Handvoll Nüsse (50 g)</strong> plus einem Apfel</span>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Du siehst: Es geht nicht um eine zweite Hauptmahlzeit, sondern um <em>eine ordentliche Zwischenmahlzeit</em>.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">3. Trimester: +452 kcal — die letzte Wachstumsphase</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Im 3. Trimester verdreifacht das Baby fast sein Gewicht — von rund 1 kg auf 3,3 kg im Schnitt. Der Energiebedarf der Mutter steigt entsprechend auf ca. <strong>+450 kcal/Tag</strong>. Das ist immer noch keine zweite Mahlzeit, aber spürbar mehr als T2.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wichtig: Diese Werte gelten für eine <strong>normalgewichtige Frau mit moderater Aktivität</strong>. Bei Untergewicht kann der Bedarf höher liegen, bei Übergewicht etwas niedriger — der Rechner berücksichtigt dein Vorgewicht direkt in der IOM-Formel.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Zwillinge: +300 kcal extra ab T2</h2>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Zwillingsschwangerschaften empfehlen ACOG und viele Kliniken zusätzliche <strong>300 kcal/Tag</strong> ab dem 2. Trimester. Im 1. Trimester bleibt der Mehrbedarf nahe null. Die Werte sind aber Schätzungen — eine engmaschige Betreuung durch Frauenarzt und ggf. Ernährungsberatung ist bei Mehrlingen Standard.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wie die Formel rechnet</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Rechner nutzt die <strong>Estimated Energy Requirement (EER)</strong> des Institute of Medicine für erwachsene Frauen:
        </p>
        <div class="bg-stone-50 border border-stone-200 rounded-lg p-4 mb-4 font-mono text-sm text-stone-700">
          EER = 354 − 6,91 · Alter + PA · (9,36 · Gewicht_kg + 726 · Größe_m)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          PA ist der Aktivitäts-Koeffizient: 1,00 (sitzend), 1,12 (wenig aktiv), 1,27 (aktiv) oder 1,45 (sehr aktiv). Anschließend wird der trimester-spezifische Zuschlag addiert.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Gerechnet wird mit deinem <strong>Vorschwangerschafts-Gewicht</strong> — nicht mit dem aktuellen. Dadurch bleibt die Schätzung über die Schwangerschaft stabil und reflektiert deinen Grundverbrauch, nicht die wachsende Gebärmutter.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was noch zählt — neben den Kalorien</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Folsäure 400–600 µg/Tag</strong> — am besten ab Kinderwunsch.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Eisen ~30 mg/Tag</strong> — Bedarf verdoppelt sich. Vollkorn, Hülsenfrüchte, mageres Fleisch.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Jod 230 µg/Tag</strong> — jodiertes Salz, Seefisch (2× pro Woche).</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Omega-3 (DHA)</strong> — wichtig für Gehirnentwicklung im 3. Trimester.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Gewichtszunahme im Zielkorridor</strong> — wichtiger als eine perfekte Kalorienzahl.</span>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Rechner &amp; Themen</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Gewichtszunahme in der Schwangerschaft</strong> — die andere Seite der Energie-Bilanz. Lies den <router-link :to="localeBlogPath('gewichtszunahme-schwangerschaft-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Artikel zur Gewichtszunahme</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>BMI vor der Schwangerschaft</strong> — bestimmt den empfohlenen Zuwachskorridor. Lies den <router-link :to="localeBlogPath('bmi-schwangerschaft-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">BMI-Schwangerschafts-Guide</router-link>.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0"></span>
            <span class="text-stone-600 text-base"><strong>Geburtstermin</strong> — Wann beginnt welches Trimester? Lies den <router-link :to="localeBlogPath('geburtstermin-berechnen')" class="text-stone-700 underline underline-offset-2 hover:text-stone-900">Geburtsterminrechner-Guide</router-link>.</span>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Berechne jetzt deinen Bedarf</h3>
        <p class="text-stone-300 text-sm mb-5">IOM-Formel, anonym, sofort. Mit metrischen und imperialen Einheiten.</p>
        <router-link
          :to="localePath('pregnancyCalories')"
          class="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors"
        >Zum Schwangerschafts-Kalorienrechner &rarr;</router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Häufig gestellte Fragen</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Soll ich meine Kalorien wirklich tracken?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Für gesunde Schwangere meist nein. Hunger und Sättigung sind in der Schwangerschaft ausgeprägt — vertraue ihnen. Tracking macht nur Sinn, wenn die Gewichtszunahme aus dem Ruder läuft oder bei Schwangerschaftsdiabetes.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Was, wenn ich übergewichtig in die Schwangerschaft starte?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Aktives Abnehmen wird nicht empfohlen. Stattdessen: niedrigere Zuwachskorridore anstreben (5–9 kg bei Adipositas) und mit Frauenarzt oder Ernährungsberatung abstimmen.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Ich habe ständig Hunger — ist das normal?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Ja, gerade ab dem 2. Trimester ist erhöhter Appetit normal. Achte auf <em>sättigende, nährstoffdichte</em> Lebensmittel: Vollkorn, Protein, gute Fette. Süßes und Snacks landen sonst schnell oberhalb der +340 kcal.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-stone-900 mb-2">Gilt das auch beim Stillen?</h3>
            <p class="text-base text-stone-600 leading-relaxed">
              Nein, der Stillbedarf ist nochmal anders kalkuliert (ca. +500 kcal/Tag in den ersten 6 Monaten). Für die Schwangerschaft gelten die Trimester-Werte aus diesem Artikel.
            </p>
          </div>
        </div>
      </div>
    </div>

    <RelatedArticles />
  </article>
</template>
