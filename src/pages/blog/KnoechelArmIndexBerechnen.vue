<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Knöchel-Arm-Index (ABI) berechnen: Formel, Werte, pAVK-Screening | Health Calculators',
  description: 'ABI per Formel aus vier systolischen Blutdrücken (Arm und Knöchel) berechnen. ACC/AHA-Bänder von normal bis schwerer pAVK, Mediasklerose-Warnung ab 1,4, klinische Bedeutung.',
  routeKey: 'blogArticle',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Knöchel-Arm-Index (ABI) berechnen: Formel, Werte, pAVK-Screening',
      description: 'ABI-Formel, ACC/AHA-Klassifikation und was bei auffälligem Knöchel-Arm-Index zu tun ist.',
      author: { '@type': 'Organization', name: 'Health Calculators' },
      publisher: { '@type': 'Organization', name: 'Health Calculators' },
      datePublished: '2026-05-30',
      dateModified: '2026-05-30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://healthcalculator.app/de/blog/knoechel-arm-index-berechnen',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der Knöchel-Arm-Index?',
          acceptedAnswer: { '@type': 'Answer', text: 'Der ABI (Ankle-Brachial Index) ist das Verhältnis des systolischen Blutdrucks am Knöchel zum höheren Arm-SBP. Er ist der nicht-invasive Standard zur Erkennung einer peripheren arteriellen Verschlusskrankheit (pAVK).' },
        },
        {
          '@type': 'Question',
          name: 'Wie wird der ABI berechnet?',
          acceptedAnswer: { '@type': 'Answer', text: 'Vier systolische Drücke messen (linker und rechter Arm, linker und rechter Knöchel). ABI(Seite) = Knöchel-SBP / max(linker Arm-SBP, rechter Arm-SBP). Der Gesamt-ABI ist der niedrigere der beiden seitigen Werte.' },
        },
        {
          '@type': 'Question',
          name: 'Welcher ABI-Wert ist normal?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nach ACC/AHA: 1,00–1,40 normal, 0,90–0,99 grenzwertig, 0,80–0,89 leichte pAVK, 0,50–0,79 mittel, ≤ 0,50 schwer. Werte > 1,4 gelten als nicht komprimierbar (Mediasklerose).' },
        },
        {
          '@type': 'Question',
          name: 'Warum kann der ABI über 1,4 liegen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Verkalkte Arterien — typisch bei Diabetes und chronischer Niereninsuffizienz — lassen sich nicht abdrücken. ABI > 1,4 ist unzuverlässig. Nächster Schritt sind Zehen-Arm-Index (TBI) oder Duplex-Sonografie.' },
        },
        {
          '@type': 'Question',
          name: 'Wer sollte einen ABI-Test machen lassen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Erwachsene ab 65, Raucher ab 50, Menschen mit Diabetes oder bekannter Atherosklerose sowie alle mit Claudicatio-Symptomen (Wadenschmerz beim Gehen) oder nicht heilenden Fußwunden.' },
        },
        {
          '@type': 'Question',
          name: 'Was tun bei niedrigem ABI?',
          acceptedAnswer: { '@type': 'Answer', text: 'Rauchstopp, Bewegung (Gehtraining), Behandlung von Bluthochdruck, Diabetes und LDL — meist mit Statin und Thrombozytenaggregationshemmer. Ab ABI < 0,5 oder Ruheschmerz ist gefäßmedizinische Vorstellung dringend.' },
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
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">Knöchel-Arm-Index (ABI) berechnen: Formel, Werte, pAVK-Screening</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">30. Mai 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">8 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Beinschmerzen beim Gehen, die in Ruhe verschwinden? Kalte Füße auf einer Seite? Eine nicht heilende Wunde am Vorfuß? Der <strong>Knöchel-Arm-Index</strong> ist die einfachste Antwort auf die Frage: „Sind die Beinarterien noch durchgängig?"
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Vier Blutdruckmessungen, eine Division — und ein zuverlässiges Screening auf die periphere arterielle Verschlusskrankheit (pAVK). Diese Anleitung zeigt die Formel, die ACC/AHA-Bänder und die Stolperfalle bei verkalkten Gefäßen.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Formel</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4 font-mono text-base text-stone-700 text-center">
          ABI(Seite) = Knöchel-SBP(Seite) ÷ max(linker Arm-SBP, rechter Arm-SBP)
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der höhere der beiden Arm-Drücke wird als Referenz verwendet — denn er spiegelt den zentralen systemischen Druck besser wider. Pro Bein erhält man einen ABI. Der <strong>Gesamt-ABI</strong> ist der niedrigere der beiden Werte, weil pAVK oft nur eine Seite betrifft.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Beispiel: Linker Arm 130, rechter Arm 135, linker Knöchel 90, rechter Knöchel 140. ABI links = 90 / 135 ≈ <strong>0,67</strong> (mittel), ABI rechts = 140 / 135 ≈ <strong>1,04</strong> (normal). Gesamt-ABI = 0,67 — Verdacht auf pAVK links.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">ACC/AHA-Bänder auf einen Blick</h2>
        <div class="bg-stone-50 rounded-xl p-6 mb-4">
          <p class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">ABI-Klassifikation</p>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-stone-600">&le; 0,50</span>
              <span class="text-red-700 font-medium">Schwere pAVK</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0,50 – 0,79</span>
              <span class="text-red-500 font-medium">Mittel</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0,80 – 0,89</span>
              <span class="text-orange-500 font-medium">Leicht</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">0,90 – 0,99</span>
              <span class="text-amber-500 font-medium">Grenzwertig</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">1,00 – 1,40</span>
              <span class="text-emerald-600 font-medium">Normal</span>
            </div>
            <div class="flex justify-between">
              <span class="text-stone-600">&gt; 1,40</span>
              <span class="text-purple-600 font-medium">Nicht komprimierbar</span>
            </div>
          </div>
        </div>
        <p class="text-base text-stone-600 leading-relaxed">
          Ein ABI ≤ 0,90 bestätigt eine pAVK mit hoher Spezifität (95 %+). Werte zwischen 0,90 und 0,99 sind grenzwertig und sollten in 3–6 Monaten kontrolliert oder durch Belastungstest ergänzt werden.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die Mediasklerose-Falle: ABI > 1,4</h2>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
          <p class="text-sm font-semibold text-amber-800 mb-2">Achtung bei Diabetes und CKD</p>
          <p class="text-sm text-amber-700">Ab ABI &gt; 1,4 sind die Knöchelarterien zu verkalkt, um sich abdrücken zu lassen. Der Wert ist diagnostisch unzuverlässig — eine pAVK kann trotzdem vorliegen.</p>
        </div>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Bei Mönckeberg-Mediasklerose (typisch bei Diabetes mellitus oder chronischer Niereninsuffizienz) lagert sich Kalzium in die Tunica media ein. Die Manschette komprimiert die Arterie nicht mehr vollständig — der gemessene Druck ist falsch hoch.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Alternative: der <strong>Zehen-Arm-Index (TBI)</strong>. Die Zehenarterien sind selten von Mediasklerose betroffen. Ein TBI &lt; 0,7 deutet auf pAVK hin.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wer sollte einen ABI-Test machen?</h2>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Alle Erwachsenen ab 65 Jahren</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Raucher und Ex-Raucher ab 50 Jahren</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Menschen mit Diabetes ab 50</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Bekannte Atherosklerose (KHK, Schlaganfall in der Vorgeschichte)</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Claudicatio intermittens — belastungsabhängiger Wadenschmerz</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">→</span><span class="text-stone-600">Nicht heilende Fußwunden, kalte oder pulslose Extremitäten</span></li>
        </ul>
      </div>

      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">ABI jetzt berechnen</h3>
        <p class="text-base text-stone-600 mb-6">Vier systolische Drücke eingeben — der Rechner liefert seitengetrennten und Gesamt-ABI plus ACC/AHA-Klassifikation.</p>
        <router-link
          :to="localePath('ankleBrachialIndex')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Knöchel-Arm-Index-Rechner
        </router-link>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was bei auffälligem ABI hilft</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          pAVK ist eine systemische Erkrankung — wer atherosklerotisch verschlossene Beinarterien hat, hat auch ein erhöhtes Herzinfarkt- und Schlaganfallrisiko. Drei Hebel mit der besten Evidenz:
        </p>
        <ul class="space-y-2 mb-4">
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">1.</span><span class="text-stone-600"><strong>Rauchstopp:</strong> Senkt das Progressionsrisiko der pAVK drastischer als jedes Medikament.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">2.</span><span class="text-stone-600"><strong>Strukturiertes Gehtraining:</strong> 3 × pro Woche bis zur Schmerzgrenze — verlängert die schmerzfreie Gehstrecke nachweislich.</span></li>
          <li class="flex gap-3"><span class="text-stone-400 mt-0.5">3.</span><span class="text-stone-600"><strong>Medikamentöse Sekundärprävention:</strong> Statin (LDL-Ziel &lt; 70 mg/dL), Thrombozytenaggregationshemmer, Blutdruckeinstellung &lt; 140/90.</span></li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Ab ABI &lt; 0,50, Ruheschmerz oder Wundheilungsstörung: gefäßchirurgische oder interventionelle Vorstellung — Bypass, Angioplastie oder Stent können die Extremität retten.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Verwandte Themen</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          ABI ist ein Baustein im kardiovaskulären Risikoprofil. Sinnvoll kombinieren mit dem
          <router-link :to="localePath('bloodPressure')" class="text-stone-900 underline hover:no-underline">Blutdruck-Rechner</router-link>
          für die Klassifikation der arteriellen Hypertonie, dem
          <router-link :to="localePath('cardiovascularRisk')" class="text-stone-900 underline hover:no-underline">Herz-Kreislauf-Risiko-Rechner</router-link>
          nach Framingham/SCORE2 und dem
          <router-link :to="localePath('diabetesRisk')" class="text-stone-900 underline hover:no-underline">Diabetes-Risiko-Rechner</router-link>,
          da Diabetes ein wesentlicher Treiber der pAVK ist.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Knöchel-Arm-Index liefert mit minimalem Aufwand eine zuverlässige Aussage darüber, ob die Beinarterien noch frei durchblutet sind. Vier Manschettendrücke, eine Division, ein klares Ergebnis nach ACC/AHA.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Bei Werten unter 0,90 oder über 1,40 lohnt sich der Gang zur Gefäßmedizin. Beides hat klinische Konsequenzen — und beide Befunde sind häufiger, als die meisten denken.
        </p>
      </div>
    </div>

    <RelatedArticles slug="knoechel-arm-index-berechnen" />
  </article>
</template>
