<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocaleRouter } from './composables/useLocaleRouter.js'

const router = useRouter()
const menuOpen = ref(false)
const { t } = useI18n()
const { localePath, switchLocale, locale } = useLocaleRouter()

router.afterEach(() => { menuOpen.value = false })
</script>

<template>
  <div class="min-h-screen bg-stone-50 flex flex-col" style="font-family: 'Inter', system-ui, -apple-system, sans-serif;">
    <header>
      <nav class="bg-white border-b border-stone-200 shadow-sm">
        <div class="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <router-link
            :to="localePath('home')"
            class="text-sm font-bold tracking-widest text-stone-900 uppercase shrink-0"
          >{{ t('nav.brand') }}</router-link>

          <div class="hidden md:flex items-center gap-6">
            <router-link
              :to="localePath('home')"
              class="text-sm font-medium text-stone-400 hover:text-stone-800 transition-colors duration-150"
            >{{ t('nav.allCalculators') }}</router-link>
            <router-link
              :to="localePath('blog')"
              class="text-sm font-medium text-stone-400 hover:text-stone-800 transition-colors duration-150"
            >{{ t('nav.blog') }}</router-link>
            <div class="flex items-center gap-1 text-sm">
              <button
                @click="switchLocale('de')"
                :class="locale === 'de' ? 'font-bold text-stone-900' : 'font-medium text-stone-400 hover:text-stone-600'"
                class="transition-colors duration-150"
              >DE</button>
              <span class="text-stone-300">|</span>
              <button
                @click="switchLocale('en')"
                :class="locale === 'en' ? 'font-bold text-stone-900' : 'font-medium text-stone-400 hover:text-stone-600'"
                class="transition-colors duration-150"
              >EN</button>
            </div>
          </div>

          <div class="md:hidden flex items-center gap-3">
            <div class="flex items-center gap-1 text-sm">
              <button
                @click="switchLocale('de')"
                :class="locale === 'de' ? 'font-bold text-stone-900' : 'font-medium text-stone-400 hover:text-stone-600'"
                class="transition-colors duration-150"
              >DE</button>
              <span class="text-stone-300">|</span>
              <button
                @click="switchLocale('en')"
                :class="locale === 'en' ? 'font-bold text-stone-900' : 'font-medium text-stone-400 hover:text-stone-600'"
                class="transition-colors duration-150"
              >EN</button>
            </div>
            <button
              @click="menuOpen = !menuOpen"
              class="p-2 -mr-2 text-stone-500 hover:text-stone-800 transition-colors"
              :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
              :aria-expanded="menuOpen"
            >
              <svg v-if="!menuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="menuOpen" class="border-t border-stone-100 bg-white md:hidden">
          <div class="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-2">
            <router-link :to="localePath('bmi')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.bmi.name') }}</router-link>
            <router-link :to="localePath('tdee')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.tdee.name') }}</router-link>
            <router-link :to="localePath('macro')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.macro.name') }}</router-link>
            <router-link :to="localePath('bodyFat')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.bodyFat.name') }}</router-link>
            <router-link :to="localePath('idealWeight')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.idealWeight.name') }}</router-link>
            <router-link :to="localePath('heartRate')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.heartRate.name') }}</router-link>
            <router-link :to="localePath('water')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.water.name') }}</router-link>
            <router-link :to="localePath('sleep')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('home.calculators.sleep.name') }}</router-link>
            <div class="border-t border-stone-100 mt-2 pt-2">
              <router-link :to="localePath('blog')" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">{{ t('nav.blog') }}</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-1 max-w-3xl w-full mx-auto px-6 py-14">
      <router-view />
    </main>

    <footer class="border-t border-stone-200 py-8 text-center">
      <p class="text-xs font-medium tracking-widest text-stone-400 uppercase">{{ t('footer.disclaimer') }}</p>
    </footer>
  </div>
</template>
