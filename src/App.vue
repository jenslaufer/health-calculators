<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(false)

router.afterEach(() => { menuOpen.value = false })
</script>

<template>
  <div class="min-h-screen bg-stone-50 flex flex-col" style="font-family: 'Inter', system-ui, -apple-system, sans-serif;">
    <header>
      <nav class="bg-white border-b border-stone-200 shadow-sm">
        <div class="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <router-link
            to="/"
            class="text-sm font-bold tracking-widest text-stone-900 uppercase shrink-0"
          >Health Calculators</router-link>

          <div class="hidden md:flex items-center gap-6">
            <router-link
              to="/"
              class="text-sm font-medium text-stone-400 hover:text-stone-800 transition-colors duration-150"
            >All Calculators</router-link>
          </div>

          <div class="md:hidden">
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
            <router-link to="/bmi" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">BMI Calculator</router-link>
            <router-link to="/tdee" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">TDEE Calculator</router-link>
            <router-link to="/macros" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Macro Calculator</router-link>
            <router-link to="/body-fat" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Body Fat Calculator</router-link>
            <router-link to="/ideal-weight" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Ideal Weight Calculator</router-link>
            <router-link to="/heart-rate" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Heart Rate Zones</router-link>
            <router-link to="/water" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Water Intake Calculator</router-link>
            <router-link to="/sleep" class="text-sm text-stone-600 hover:text-stone-900 transition-colors py-1">Sleep Cycle Calculator</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-1 max-w-3xl w-full mx-auto px-6 py-14">
      <router-view />
    </main>

    <footer class="border-t border-stone-200 py-8 text-center">
      <p class="text-xs font-medium tracking-widest text-stone-400 uppercase">For informational purposes only — not medical advice</p>
    </footer>
  </div>
</template>
