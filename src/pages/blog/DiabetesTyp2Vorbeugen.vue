<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath, localeBlogPath } = useLocaleRouter()

useHead({
  title: 'Typ-2-Diabetes vorbeugen: 5 evidenzbasierte Strategien | Health Calculators',
  description: 'Typ-2-Diabetes vorbeugen mit 5 belegten Strategien: Gewichtsverlust, Bewegung, Ernährung, Schlaf, Stress. Mit HbA1c, BMI- und Risiko-Rechner.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Typ-2-Diabetes vorbeugen: 5 evidenzbasierte Strategien',
      description: 'Typ-2-Diabetes vorbeugen mit 5 belegten Strategien: Gewichtsverlust, Bewegung, Ernährung, Schlaf, Stress. Mit HbA1c, BMI- und Risiko-Rechner.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-11',
      dateModified: '2026-05-11',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/diabetes-typ-2-vorbeugen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Typ-2-Diabetes vorbeugen: 5 evidenzbasierte Strategien',
      about: { '@type': 'MedicalCondition', name: 'Typ-2-Diabetes' },
      audience: { '@type': 'PeopleAudience', audienceType: 'Allgemeinbevölkerung' },
      lastReviewed: '2026-05-11',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann Typ-2-Diabetes wirklich verhindert werden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Die landmark Studien (Diabetes Prevention Program 2002, Finnish DPS 2001) zeigen: Lebensstil-Intervention reduziert die Diabetes-Inzidenz bei Hochrisiko-Personen um 58 % gegenüber Placebo — wirksamer als Metformin (31 %). Eine 10-Jahres-Nachbeobachtung bestätigt den Effekt langfristig.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viel Gewichtsverlust ist nötig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schon 5–7 % des Ausgangsgewichts reichen. Bei 90 kg sind das 4,5–6,3 kg. Jedes Kilogramm reduziert das Diabetes-Risiko um etwa 16 %. Größere Verluste (10–15 %) können bereits bestehenden Prädiabetes oft umkehren.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welcher HbA1c-Wert gilt als Prädiabetes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nach ADA-Kriterien: HbA1c 5,7–6,4 % (39–47 mmol/mol). Nüchternblutzucker 100–125 mg/dl (5,6–6,9 mmol/l). Ab 6,5 % HbA1c (≥ 48 mmol/mol) liegt manifester Diabetes vor. Prädiabetes ist umkehrbar — der jährliche Übergang in Diabetes liegt unbehandelt bei 5–10 %.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viel Bewegung pro Woche schützt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WHO und ADA empfehlen mindestens 150 Minuten moderate Aktivität pro Woche (5 × 30 Minuten) plus zweimal Krafttraining. Krafttraining wirkt unabhängig vom Cardio — Muskelgewebe verbraucht Glukose und verbessert Insulinsensitivität deutlich.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Ernährung beugt Diabetes vor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mediterrane Kost und DASH-Diät haben die beste Evidenz: viele Ballaststoffe (≥ 30 g/Tag), Vollkorn, Hülsenfrüchte, Nüsse, Fisch, Olivenöl. Wenig zuckergesüßte Getränke, raffinierte Kohlenhydrate und verarbeitetes Fleisch. Glykämischer Index spielt eine Rolle — Vollkornbrot statt Weißbrot, ganze Früchte statt Saft.',
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Typ-2-Diabetes vorbeugen: 5 evidenzbasierte Strategien</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">11. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">14 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Medical disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-amber-900 leading-relaxed">
          <strong>Medizinischer Hinweis:</strong> Dieser Artikel ersetzt keine ärztliche Beratung, Diagnose oder Behandlung. Bei Verdacht auf Prädiabetes oder Diabetes, vor Beginn eines Trainings- oder Ernährungsprogramms und bei bestehenden Erkrankungen (Herz-Kreislauf, Niere, Schwangerschaft) sprich mit einer Ärztin oder einem Arzt. Laborwerte sind individuell zu interpretieren.
        </p>
      </div>

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          <strong>Typ-2-Diabetes</strong> ist eine der häufigsten chronischen Erkrankungen weltweit — und eine der am besten vermeidbaren. Die International Diabetes Federation schätzt, dass 2024 rund 537 Millionen Erwachsene weltweit mit Diabetes leben, davon etwa 90 % vom Typ 2. In Deutschland sind etwa 8 Millionen Menschen betroffen, weitere 6 Millionen vermutlich unentdeckt im Prädiabetes-Stadium.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die gute Nachricht: Zwei der größten Studien der Präventionsmedizin — das amerikanische <strong>Diabetes Prevention Program (DPP, 2002)</strong> und die <strong>Finnish Diabetes Prevention Study (DPS, 2001)</strong> — zeigen unabhängig voneinander: Lebensstil-Veränderung reduziert das Diabetes-Risiko bei Hochrisiko-Personen um 58 %. Dieser Artikel erklärt die fünf Säulen, die diesen Effekt tragen.
        </p>
      </div>

      <!-- What is T2D -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was ist Typ-2-Diabetes?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Typ-2-Diabetes ist eine Stoffwechselerkrankung, bei der die Körperzellen nicht mehr ausreichend auf Insulin reagieren (Insulinresistenz) und die Bauchspeicheldrüse mit der Zeit nicht mehr genug Insulin produziert. Die Folge: Glukose bleibt im Blut. Über Jahre schädigen die erhöhten Werte Gefäße, Nerven, Niere und Netzhaut.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Erkrankung entwickelt sich langsam. Zwischen ersten Stoffwechselveränderungen und Diagnose vergehen oft 7–10 Jahre, in denen die Werte schleichend steigen. Frühe Warnzeichen sind unspezifisch: Müdigkeit, vermehrter Durst, häufiges Wasserlassen, schlecht heilende Wunden, wiederkehrende Infekte.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risikofaktor</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Wirkung</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Übergewicht (BMI ≥ 25)</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Wichtigster modifizierbarer Faktor — Bauchfett besonders kritisch</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Bewegungsmangel</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Reduziert Glukoseaufnahme der Muskulatur</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Familiäre Belastung</td>
                <td class="px-6 py-3 text-stone-900 font-medium">2–6-fach erhöhtes Risiko bei Eltern oder Geschwistern mit T2D</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Alter ab 45</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Risiko steigt mit jedem Jahrzehnt</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Schwangerschaftsdiabetes</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Lebenslang erhöhtes Diabetes-Risiko, bis zu 50 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Bluthochdruck, gestörte Blutfette</td>
                <td class="px-6 py-3 text-stone-900 font-medium">Teil des metabolischen Syndroms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer eigene Risikofaktoren einschätzen will, nutzt den
          <router-link :to="localePath('diabetesRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">FINDRISK-Diabetes-Risiko-Rechner</router-link> —
          ein evaluierter Fragebogen, der das 10-Jahres-Risiko schätzt.
        </p>
      </div>

      <!-- Prediabetes stage -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Prädiabetes-Phase: Das Zeitfenster für Prävention</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bevor sich ein manifester Diabetes entwickelt, liegen die Blutzuckerwerte über Jahre im Graubereich: zu hoch für normal, zu niedrig für die Diagnose. Dieser Zustand heißt <strong>Prädiabetes</strong> — und genau hier lässt sich am meisten erreichen.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Status</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">HbA1c</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Nüchternglukose</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>Normal</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 5,7 % (&lt; 39 mmol/mol)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 100 mg/dl (&lt; 5,6 mmol/l)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>Prädiabetes</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">5,7–6,4 % (39–47 mmol/mol)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">100–125 mg/dl (5,6–6,9 mmol/l)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>Diabetes</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 6,5 % (≥ 48 mmol/mol)</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">≥ 126 mg/dl (≥ 7,0 mmol/l)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Quelle: American Diabetes Association, <em>Standards of Medical Care in Diabetes</em>, 2024. Ohne Intervention wandeln sich pro Jahr 5–10 % der Prädiabetes-Fälle in manifesten Diabetes um. Über 10 Jahre wird etwa die Hälfte aller Betroffenen diabetisch.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Mit Lebensstil-Intervention dreht sich das Bild: Im DPP entwickelten in der Lebensstil-Gruppe nur 4,8 pro 100 Personenjahre einen Diabetes — in der Placebo-Gruppe 11. Damit reduziert sich das relative Risiko um 58 %, in der älteren Subgruppe (≥ 60 Jahre) sogar um 71 %.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer seine HbA1c-Werte ablesen will: Der
          <router-link :to="localePath('hba1c')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">HbA1c-Umrechner</router-link>
          wandelt zwischen % (DCCT) und mmol/mol (IFCC) und ordnet den Wert direkt ein.
        </p>
      </div>

      <!-- Strategy 1: Weight loss -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Strategie 1: Gewicht reduzieren — 5–7 % reichen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Übergewicht ist der stärkste modifizierbare Risikofaktor. Im DPP war Gewichtsabnahme der wichtigste Prädiktor für den Erfolg — pro verlorenem Kilogramm sank das Diabetes-Risiko um 16 %. Der Effekt setzt früh ein: Schon 5–7 % Gewichtsverlust gegenüber dem Ausgangsgewicht reichen, um das Risiko substantiell zu senken.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Konkret: Wer 90 kg wiegt, peilt 4,5–6,3 kg an. Wer 80 kg wiegt, etwa 4–5,5 kg. Diese Zielmarke ist realistisch und stabil haltbar — sie ist nicht „Idealgewicht", sondern „erste Stufe der Risikoreduktion".
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Besonders relevant ist das <strong>viszerale Fett</strong>, das innere Bauchfett. Es produziert entzündungsfördernde Botenstoffe (Adipokine, TNF-α), die die Insulinresistenz direkt verschlechtern. Der Bauchumfang ist daher ein besserer Risikoanzeiger als der BMI allein:
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Risiko</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Frauen (Bauchumfang)</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Männer (Bauchumfang)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Normal</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 80 cm</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&lt; 94 cm</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Erhöht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">80–88 cm</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">94–102 cm</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Deutlich erhöht</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 88 cm</td>
                <td class="px-6 py-3 text-stone-900 font-medium tabular-nums">&gt; 102 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Den eigenen BMI prüft der
          <router-link :to="localePath('bmi')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">BMI-Rechner</router-link>;
          das Verhältnis Taille zu Größe — ein noch zuverlässigerer Risikoindikator —
          <router-link :to="localePath('whtrRechner')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">der WHtR-Rechner</router-link>.
        </p>
      </div>

      <!-- CTA -->
      <div class="bg-stone-900 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-white mb-2">Wie hoch ist dein Diabetes-Risiko?</h3>
        <p class="text-stone-300 text-sm mb-5">Der FINDRISK-basierte Risiko-Rechner liefert eine 10-Jahres-Schätzung — in 2 Minuten.</p>
        <router-link
          :to="localePath('diabetesRisk')"
          class="inline-block bg-white text-stone-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-150"
        >Zum Diabetes-Risiko-Rechner &rarr;</router-link>
      </div>

      <!-- Strategy 2: Exercise -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Strategie 2: Bewegung — Ausdauer plus Krafttraining</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bewegung wirkt auf zwei Wegen: akut über die kontraktionsbedingte Glukoseaufnahme der Muskulatur (unabhängig vom Insulin) und chronisch über erhöhte Mitochondriendichte und Insulinsensitivität. Beides reduziert den Bedarf an Insulin spürbar.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die WHO und die American Diabetes Association empfehlen für Erwachsene:
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Mindestens 150 Minuten moderate Ausdaueraktivität pro Woche</strong> — zügiges Gehen, Radfahren, Schwimmen. Verteilt auf mindestens 3 Tage, möglichst nicht mehr als 2 Tage Pause.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>2–3 × pro Woche Krafttraining</strong> — alle großen Muskelgruppen. Hanteln, Geräte oder Eigengewicht. Krafttraining wirkt unabhängig vom Cardio und besonders gut auf die Nüchternglukose.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Langes Sitzen unterbrechen</strong> — alle 30 Minuten kurz aufstehen, etwas gehen. Eine Studie aus 2016 (Dunstan et al., <em>Diabetologia</em>) zeigt: 3 Minuten leichtes Gehen alle 30 Minuten senken den postprandialen Blutzucker um bis zu 39 % gegenüber durchgängigem Sitzen.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Warum Krafttraining? Muskelgewebe ist der größte Glukoseabnehmer im Körper. Mehr Muskelmasse bedeutet mehr Pufferkapazität — vor allem nach Mahlzeiten. Die HERITAGE-Studie und Meta-Analysen zeigen, dass kombiniertes Training (Cardio + Kraft) die HbA1c stärker senkt als jede Form alleine — typisch −0,67 % gegenüber −0,33 % bei Cardio-only.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer mit dem Zählen beginnt: Etwa 7.000–10.000 Schritte pro Tag bringen die meisten Erwachsenen über die 150-Minuten-Schwelle. Bei intensiverem Tempo (z. B. flotter Wandermarsch) reichen 75 Minuten pro Woche.
        </p>
      </div>

      <!-- Strategy 3: Diet -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Strategie 3: Ernährung — niedriger glykämischer Index, viele Ballaststoffe</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die größten Studien zur Diabetes-Prävention durch Ernährung untersuchten mediterrane Kost (PREDIMED 2013), DASH und überwiegend pflanzliche Muster (Nurses' Health Study, Health Professionals Follow-up Study). Die Kernergebnisse decken sich:
        </p>
        <div class="space-y-4 mb-4">
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Ballaststoffe — Ziel: ≥ 30 g pro Tag</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Lösliche Ballaststoffe (Haferflocken, Hülsenfrüchte, Äpfel, Leinsamen) verlangsamen die Glukoseaufnahme und füttern die kurzkettige-Fettsäuren-bildende Darmflora. Pro 10 g zusätzliche Ballaststoffe pro Tag sinkt das Diabetes-Risiko in Kohortenstudien um etwa 9 %.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Glykämischer Index niedrig halten</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Vollkornbrot statt Weißbrot, Naturreis statt geschältem Reis, Haferflocken statt Cornflakes. Ganze Früchte statt Saft. Stärkereiche Beilagen (Kartoffel, Reis, Pasta) am besten al dente und kombiniert mit Eiweiß, Fett oder Säure — das senkt den postprandialen Glukoseanstieg.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Zuckergesüßte Getränke streichen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Eine Meta-Analyse (Imamura, BMJ 2015): Jede zusätzliche tägliche Portion zuckergesüßter Getränke erhöht das T2D-Risiko um 18 %. Fruchtsaft ist nicht harmlos — er liefert konzentrierten Zucker ohne die ursprünglichen Ballaststoffe.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Verarbeitetes Fleisch reduzieren</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              Wurst, Salami, Schinken: 50 g pro Tag erhöhen das Diabetes-Risiko um etwa 32 % (Meta-Analyse, Pan et al., <em>Am J Clin Nutr</em>, 2011). Mageres Geflügel, Fisch oder pflanzliches Eiweiß sind die besseren Alternativen.
            </p>
          </div>
          <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-6">
            <h3 class="text-base font-semibold text-stone-900 mb-2">Nüsse, Olivenöl, Hülsenfrüchte einbauen</h3>
            <p class="text-sm text-stone-500 leading-relaxed">
              In der PREDIMED-Studie reduzierte mediterrane Kost mit zusätzlichen Nüssen oder Olivenöl das Diabetes-Risiko um 30–40 % gegenüber fettreduzierter Kost — trotz ähnlicher Kalorien.
            </p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Welche Kost auch immer gewählt wird — die Konstante ist: <strong>echte Lebensmittel statt verarbeiteter Produkte</strong>, viel Gemüse, Hülsenfrüchte als Eiweißquelle, Vollkorn statt Auszugsmehl. Wer wissen will, wie sich seine Kohlenhydrate aufteilen, findet im
          <router-link :to="localeBlogPath('makronaehrstoffe-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Makronährstoff-Guide</router-link>
          eine Anleitung.
        </p>
      </div>

      <!-- Strategy 4: Sleep -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Strategie 4: Schlaf — der unterschätzte Stoffwechsel-Hebel</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Schlafmangel wirkt direkt auf die Insulinempfindlichkeit. Schon eine Nacht mit 4 Stunden Schlaf senkt die Insulinsensitivität messbar um 20–25 % (Donga et al., <em>JCEM</em>, 2010). Chronischer Schlafmangel von &lt; 6 Stunden über Wochen erhöht das Risiko, einen Typ-2-Diabetes zu entwickeln, in großen Kohortenstudien um etwa 28 % gegenüber 7–8 Stunden.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Effekt geht über Gewicht hinaus. Mechanismen: erhöhter Cortisolspiegel am Abend, erhöhte sympathische Aktivität, gestörter Leptin-Ghrelin-Haushalt (mehr Hunger, weniger Sättigung), reduzierte Glukose-Clearance. Auch Schlafapnoe ist ein eigener, unabhängiger Risikofaktor — die wiederholten Sauerstoffabfälle und Stressreaktionen verschlechtern den Stoffwechsel.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Was hilft konkret:
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>7–9 Stunden pro Nacht</strong> sind das Ziel für die meisten Erwachsenen. Konstanz schlägt einzelne lange Schlafnächte.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Feste Zeiten</strong> — der zirkadiane Rhythmus stabilisiert sich. Wechselschicht erhöht das Diabetes-Risiko um etwa 9 % pro 5 Jahre (Vetter et al., <em>JAMA</em>, 2018).</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Schlafapnoe abklären lassen</strong>, wenn Schnarchen, Tagesmüdigkeit oder Atemaussetzer berichtet werden. Behandlung mit CPAP verbessert die Insulinsensitivität.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Späte schwere Mahlzeiten meiden</strong> — der nächtliche Glukosestoffwechsel ist gegenüber dem morgendlichen schlechter; späte Kalorien fördern Insulinresistenz.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer die Schlafdauer rückwärts vom Wecker plant, findet im
          <router-link :to="localeBlogPath('schlafzyklen-berechnen')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Schlafzyklen-Guide</router-link>
          die Logik der 90-Minuten-Zyklen.
        </p>
      </div>

      <!-- Strategy 5: Stress -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Strategie 5: Stress regulieren</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Chronischer Stress hält die Achse Hypothalamus-Hypophyse-Nebennierenrinde aktiviert. Folge: dauerhaft erhöhtes Cortisol. Cortisol mobilisiert Glukose aus der Leber und antagonisiert Insulin — physiologisch sinnvoll für „Kampf oder Flucht", chronisch eine direkte Diabetes-Brücke.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Meta-Analyse (Pouwer et al., <em>Discov Med</em>, 2010) findet einen Zusammenhang zwischen chronischem psychischem Stress, Depression und einem 60 % erhöhten Diabetes-Risiko. Mechanismen wirken sowohl direkt (Cortisol, Sympathikus) als auch indirekt (schlechterer Schlaf, ungesündere Ernährung, weniger Bewegung).
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Was hat Evidenz?
        </p>
        <div class="space-y-3 mb-4">
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Achtsamkeitsbasierte Stressreduktion (MBSR)</strong> — 8-Wochen-Programme senken Cortisol und verbessern HbA1c in mehreren randomisierten Studien um 0,3–0,5 %.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Regelmäßige Bewegung</strong> wirkt selbst stressreduzierend — der bekannte „doppelte Hebel" von Sport.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Soziale Bindungen</strong> sind ein eigenständiger Schutzfaktor; Einsamkeit erhöht das Diabetes-Risiko in Längsschnittstudien um etwa 30 %.</p>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2"></div>
            <p class="text-base text-stone-600 leading-relaxed"><strong>Depression aktiv behandeln</strong> — sie ist sowohl Risiko- als auch Folgefaktor; sowohl Verhaltenstherapie als auch SSRIs verbessern die metabolische Lage bei Komorbidität.</p>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Stressmanagement ist keine isolierte „nice-to-have"-Maßnahme — es ist die Voraussetzung, damit die anderen vier Strategien überhaupt umsetzbar bleiben. Wer chronisch erschöpft ist, ernährt sich schlechter, schläft schlechter und bewegt sich weniger.
        </p>
      </div>

      <!-- Putting it together -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die fünf Strategien zusammen — der DPP-Effekt</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Das amerikanische Diabetes Prevention Program kombinierte genau diese Bausteine: 7 % Gewichtsverlust als Ziel, 150 Minuten Bewegung pro Woche, eine ballaststoffreiche Kost mit reduziertem Fett, strukturierte Coaching-Sitzungen für Verhaltensänderung. Nach 2,8 Jahren: 58 % weniger Neuerkrankungen. Nach 10 Jahren Nachbeobachtung: immer noch 34 % weniger.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bemerkenswert: Die Lebensstil-Intervention war Metformin (31 % Risikoreduktion) deutlich überlegen — und das ohne Medikamentennebenwirkungen. Bei Personen über 60 Jahre war der Unterschied am größten.
        </p>
        <div class="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-stone-50 border-b border-stone-200">
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Strategie</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Ziel</th>
                <th class="text-left px-6 py-3 font-semibold text-stone-700">Effekt</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
              <tr>
                <td class="px-6 py-3 text-stone-600">Gewicht</td>
                <td class="px-6 py-3 text-stone-900 font-medium">−5–7 % Körpergewicht</td>
                <td class="px-6 py-3 text-stone-600">−16 % Risiko pro kg</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Bewegung</td>
                <td class="px-6 py-3 text-stone-900 font-medium">150 min/Woche + Kraft 2×</td>
                <td class="px-6 py-3 text-stone-600">HbA1c −0,5–0,7 %</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Ernährung</td>
                <td class="px-6 py-3 text-stone-900 font-medium">≥ 30 g Ballaststoffe, niedriger GI</td>
                <td class="px-6 py-3 text-stone-600">−30 % Risiko (PREDIMED)</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Schlaf</td>
                <td class="px-6 py-3 text-stone-900 font-medium">7–9 h, regelmäßig</td>
                <td class="px-6 py-3 text-stone-600">−28 % Risiko vs. &lt; 6 h</td>
              </tr>
              <tr>
                <td class="px-6 py-3 text-stone-600">Stress</td>
                <td class="px-6 py-3 text-stone-900 font-medium">MBSR, Soziales, Therapie bei Depression</td>
                <td class="px-6 py-3 text-stone-600">HbA1c −0,3–0,5 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Effekte sind nicht additiv im einfachen Sinne — sie überlappen und verstärken sich. Wer 6 kg verliert und sich regelmäßig bewegt, profitiert in beiden Bereichen. Aber: Je mehr der fünf Säulen umgesetzt werden, desto höher die Wahrscheinlichkeit, im Risikobereich Prädiabetes zu bleiben oder zurück in den Normalbereich zu kommen.
        </p>
      </div>

      <!-- Screening -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann zum Screening?</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die ADA empfiehlt ein Diabetes-Screening für alle Erwachsenen ab 35 Jahren — bei Risikofaktoren (Übergewicht, familiäre Belastung, Schwangerschaftsdiabetes, Bluthochdruck, gestörte Blutfette) bereits früher und unabhängig vom Alter. In Deutschland ist das Screening Teil der Check-up-Untersuchung ab 35, mit zwischenzeitlicher Wiederholung alle 3 Jahre.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei normalem Befund: alle 3 Jahre wiederholen. Bei Prädiabetes: jährliche Kontrolle plus Lebensstil-Plan. Bei manifestem Diabetes: ärztliche Therapieführung — die Lebensstil-Strategien bleiben weiterhin der Grundpfeiler.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Die Standardtests sind: <strong>HbA1c</strong> (zeigt durchschnittlichen Blutzucker der letzten 2–3 Monate), <strong>Nüchternglukose</strong> nach 8 h Fasten, gegebenenfalls oraler <strong>Glukosetoleranz-Test</strong> (oGTT). Idealerweise wird nicht ein einzelner, sondern zwei Werte zur Diagnose herangezogen.
        </p>
      </div>

      <!-- Conclusion -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Typ-2-Diabetes ist über Jahre vorprogrammiert — und über Jahre auch noch zu verhindern. Die fünf evidenzbasierten Säulen sind <strong>moderater Gewichtsverlust</strong>, <strong>Ausdauer plus Krafttraining</strong>, <strong>ballaststoffreiche Kost mit niedrigem GI</strong>, <strong>ausreichend regelmäßiger Schlaf</strong> und <strong>aktive Stressregulation</strong>. Zusammengenommen halbieren sie die Diabetes-Inzidenz in Hochrisiko-Gruppen — wirksamer als jedes derzeit verfügbare Medikament.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Der Einstieg muss nicht radikal sein. 5 % Gewichtsverlust, drei flotte 30-Minuten-Spaziergänge plus zweimal Krafttraining pro Woche, eine zusätzliche Portion Hülsenfrüchte pro Tag — das ist bereits die DPP-Dosis. Wer wissen will, wo er heute steht, beginnt mit dem
          <router-link :to="localePath('diabetesRisk')" class="font-semibold text-stone-900 underline underline-offset-2 hover:text-stone-600 transition-colors">Diabetes-Risiko-Rechner</router-link>
          und einer HbA1c-Bestimmung.
        </p>
      </div>

      <RelatedArticles slug="diabetes-typ-2-vorbeugen" />
    </div>
  </article>
</template>
