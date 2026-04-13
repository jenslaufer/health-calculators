<script setup>
import { useHead } from '../../composables/useHead.js'
import RelatedArticles from '../../components/RelatedArticles.vue'
import { useLocaleRouter } from '../../composables/useLocaleRouter.js'

const { localePath } = useLocaleRouter()

useHead({
  title: 'Rauchen Kosten Rechner: Was dich das Rauchen wirklich kostet | Health Calculators',
  description: 'Wie viel kostet Rauchen pro Jahr wirklich? Mit Rechenbeispielen, Investitionsvergleich und Motivation zum Aufhören.',
  routeKey: 'blogArticle',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rauchen Kosten Rechner: Was dich das Rauchen wirklich kostet',
    description: 'Wie viel kostet Rauchen pro Jahr wirklich? Mit Rechenbeispielen, Investitionsvergleich und Motivation zum Aufhören.',
    author: { '@type': 'Organization', name: 'Health Calculators' },
    publisher: { '@type': 'Organization', name: 'Health Calculators' },
    datePublished: '2026-04-13',
    dateModified: '2026-04-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://healthcalculator.app/de/blog/rauchen-kosten-rechner',
    },
  },
})
</script>

<template>
  <article>
    <div class="mb-10">
      <router-link :to="localePath('blog')" class="text-sm text-stone-400 hover:text-stone-800 transition-colors mb-4 inline-block">
        &larr; Blog
      </router-link>
      <h1 class="text-4xl font-bold tracking-tight text-stone-900 mb-3">
        Rauchen Kosten Rechner: Was dich das Rauchen wirklich kostet
      </h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-stone-400 tabular-nums">13. April 2026</span>
        <span class="text-sm text-stone-300">&middot;</span>
        <span class="text-sm text-stone-400">7 min Lesezeit</span>
      </div>
    </div>

    <div class="prose prose-stone max-w-none">

      <!-- Intro -->
      <div class="bg-white border border-stone-200 rounded-xl shadow-sm p-8 mb-8">
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Eine Schachtel Zigaretten kostet in Deutschland heute durchschnittlich <strong>8–9 Euro</strong>. Wer täglich eine Schachtel raucht, gibt damit über <strong>3.000 Euro pro Jahr</strong> aus — und das ist nur der direkte Kaufpreis, ohne Gesundheitskosten, Produktivitätsverluste und den entgangenen Zinseszins.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Dieser Artikel rechnet durch, was Rauchen über 5 und 10 Jahre wirklich kostet — und was dasselbe Geld, investiert statt verbrannt, bedeuten würde.
        </p>
      </div>

      <!-- Rechenbeispiel -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Rechenbeispiel: 20 Zigaretten täglich</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Angenommen, du rauchst eine Schachtel (20 Zigaretten) pro Tag zu einem Preis von 8,50 Euro:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Kostenübersicht</div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Pro Tag</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">8,50 €</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Pro Woche</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">59,50 €</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-stone-600">Pro Monat</span>
              <span class="text-sm font-semibold text-stone-900 tabular-nums">258,85 €</span>
            </div>
            <div class="flex justify-between items-center border-t border-stone-200 pt-3">
              <span class="text-sm font-semibold text-stone-700">Pro Jahr</span>
              <span class="text-base font-bold text-red-500 tabular-nums">3.102,50 €</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Über 3.000 Euro jährlich — das entspricht einem <strong>Mittelklasse-Urlaub für zwei Personen</strong>, einem neuen Laptop plus Smartphone, oder mehr als acht Monaten Fitnessstudio inklusive Personal Training.
        </p>
      </div>

      <!-- Der versteckte Preis: Zinseszins -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Der versteckte Preis: entgangener Zinseszins</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die reine Ausgabe ist nur ein Teil der Geschichte. Wer das Geld stattdessen monatlich investieren würde — zum Beispiel in einen breit diversifizierten Aktien-ETF — kann langfristig mit einer historischen Rendite von etwa <strong>7 % pro Jahr</strong> rechnen.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Die Formel für den Endwert einer monatlichen Einzahlung (Rentenbarwert) lautet:
        </p>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">Zinseszins-Formel</div>
          <div class="font-mono text-sm text-stone-800 leading-relaxed">
            FV = PMT × ((1 + r/12)<sup>12·t</sup> − 1) / (r/12)
          </div>
          <div class="mt-3 text-sm text-stone-500 space-y-1">
            <div>PMT = monatliche Einzahlung (z. B. 258,85 €)</div>
            <div>r = jährliche Rendite (0,07 = 7 %)</div>
            <div>t = Anlagezeitraum in Jahren</div>
          </div>
        </div>

        <div class="bg-stone-50 rounded-xl p-6 mb-6">
          <div class="text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">Ergebnis bei 20 Zigaretten/Tag, 8,50 €/Schachtel</div>
          <div class="space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <span class="text-sm font-semibold text-stone-700">Nach 5 Jahren</span>
                <p class="text-xs text-stone-400 mt-1">Ohne Zins eingezahlt: 15.512 €</p>
              </div>
              <span class="text-lg font-bold text-emerald-600 tabular-nums">18.143 €</span>
            </div>
            <div class="flex justify-between items-start border-t border-stone-200 pt-4">
              <div>
                <span class="text-sm font-semibold text-stone-700">Nach 10 Jahren</span>
                <p class="text-xs text-stone-400 mt-1">Ohne Zins eingezahlt: 31.025 €</p>
              </div>
              <span class="text-lg font-bold text-emerald-600 tabular-nums">44.791 €</span>
            </div>
          </div>
        </div>

        <p class="text-base text-stone-600 leading-relaxed">
          Nach 10 Jahren wäre aus monatlichen Raucher-Ausgaben ein Depot von fast <strong>45.000 Euro</strong> geworden — rund 14.000 Euro mehr als die reine Summe der Einzahlungen. Das ist die Kraft des Zinseszinses.
        </p>
      </div>

      <!-- Gesundheitskosten -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Die versteckten Gesundheitskosten</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Der Kaufpreis ist nur die Spitze des Eisbergs. Rauchen verursacht messbare Mehrkosten in mehreren Bereichen:
        </p>
        <ul class="space-y-3 mb-4">
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Krankenversicherung:</span>
              <span class="text-stone-600"> Raucher zahlen in der privaten KV bis zu 30 % Zuschlag. Bei einem monatlichen Beitrag von 400 € entspricht das 1.440 € Mehrkosten pro Jahr.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Zahnarzt:</span>
              <span class="text-stone-600"> Rauchen fördert Parodontitis und Karies. Mehrkosten je nach Schweregrad: 200–800 € jährlich.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Produktivitätsverlust:</span>
              <span class="text-stone-600"> Studien zeigen, dass Raucher im Durchschnitt 1,5–2 Stunden pro Arbeitstag für Raucherpausen aufwenden — Zeit, die Karriere und Einkommen kostet.</span>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-stone-400 mt-0.5">→</span>
            <div>
              <span class="font-semibold text-stone-700">Wohnung und Auto:</span>
              <span class="text-stone-600"> Rauchergeruch reduziert den Wiederverkaufswert und erhöht Reinigungskosten. Vermieter und Käufer zahlen weniger.</span>
            </div>
          </li>
        </ul>
        <p class="text-base text-stone-600 leading-relaxed">
          Eine britische Studie (ASH, 2023) bezifferte die indirekten Kosten des Rauchens auf durchschnittlich <strong>1.500–2.500 Euro pro Jahr</strong> zusätzlich zum direkten Kaufpreis.
        </p>
      </div>

      <!-- Altersvergleich -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Wann man mit dem Rauchen anfängt, macht einen enormen Unterschied</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Wer mit 18 anfängt zu rauchen und mit 40 aufhört, hat 22 Jahre lang täglich eine Schachtel geraucht. Bei 8,50 Euro pro Schachtel ergibt das eine direkte Ausgabe von rund <strong>68.000 Euro</strong> — ohne Zinseszins, ohne Gesundheitskosten.
        </p>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Hätte dieselbe Person das Geld ab 18 monatlich in einen ETF investiert (7 % p. a.), wäre das Depot mit 40 auf etwa <strong>260.000 Euro</strong> angewachsen. Das entspricht einer soliden Basis für die Altersvorsorge.
        </p>
      </div>

      <!-- Was könnte man kaufen -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Was du mit dem Geld kaufen könntest</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Manchmal helfen konkrete Bilder mehr als abstrakte Zahlen. Wer täglich eine Schachtel raucht und aufhört, spart jährlich rund 3.100 Euro — das reicht für:
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">✈️</p>
            <p class="text-sm font-semibold text-stone-700">2× Städtereise</p>
            <p class="text-xs text-stone-400 mt-1">à 700 €</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">📱</p>
            <p class="text-sm font-semibold text-stone-700">3× neues Smartphone</p>
            <p class="text-xs text-stone-400 mt-1">à 1.000 €</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">💻</p>
            <p class="text-sm font-semibold text-stone-700">1× Laptop</p>
            <p class="text-xs text-stone-400 mt-1">+ 2.200 € rest</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🚲</p>
            <p class="text-sm font-semibold text-stone-700">1× E-Bike</p>
            <p class="text-xs text-stone-400 mt-1">1.300 € rest</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🏋️</p>
            <p class="text-sm font-semibold text-stone-700">8× Fitnessstudio-Jahr</p>
            <p class="text-xs text-stone-400 mt-1">à 360 €</p>
          </div>
          <div class="bg-stone-50 rounded-xl p-4 text-center">
            <p class="text-2xl mb-2">🎬</p>
            <p class="text-sm font-semibold text-stone-700">21× Streaming-Jahr</p>
            <p class="text-xs text-stone-400 mt-1">à 144 €</p>
          </div>
        </div>
      </div>

      <!-- Rechner CTA -->
      <div class="bg-stone-50 rounded-xl p-8 mb-8 text-center">
        <h3 class="text-xl font-bold text-stone-900 mb-3">Berechne deine persönlichen Kosten</h3>
        <p class="text-base text-stone-600 mb-6">Gib deine eigenen Werte ein und sieh sofort, was du täglich, monatlich und über 10 Jahre ausgibst.</p>
        <router-link
          :to="localePath('smokingCost')"
          class="inline-block bg-stone-900 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Zum Rauchen Kosten Rechner
        </router-link>
      </div>

      <!-- Fazit -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-stone-900 mb-4">Fazit</h2>
        <p class="text-base text-stone-600 leading-relaxed mb-4">
          Rauchen ist nicht nur eine Gesundheitsfrage, sondern auch eine massive finanzielle Belastung. Die direkten Kosten von über 3.000 Euro pro Jahr sind nur der Anfang — dazu kommen höhere Versicherungsprämien, Zahnarztkosten und vor allem der entgangene Zinseszins.
        </p>
        <p class="text-base text-stone-600 leading-relaxed">
          Wer aufhört zu rauchen, gewinnt nicht nur Lebensqualität und Gesundheit zurück — er oder sie gewinnt auch eine handfeste finanzielle Zukunft. Der <router-link :to="localePath('smokingCost')" class="text-stone-900 underline underline-offset-2 hover:text-stone-600">Rauchen Kosten Rechner</router-link> zeigt dir, was das konkret für deine Situation bedeutet.
        </p>
      </div>

    </div>

    <RelatedArticles slug="rauchen-kosten-rechner" />
  </article>
</template>
