<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  slot: { type: String, default: 'ca-pub-5699878845397819/6221716078' },
  format: { type: String, default: 'auto' },
})

const container = ref(null)
const isProd = import.meta.env.PROD
let retryTimer = null
let retryCount = 0
const maxRetries = 20

function initAd() {
  const adEl = container.value?.querySelector('.adsbygoogle')
  if (!isProd || !props.slot || !adEl || adEl.dataset.adInitialized === 'true') return true
  if (!window.adsbygoogle) return false

  try {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    adEl.dataset.adInitialized = 'true'
    return true
  } catch {
    return false
  }
}

onMounted(() => {
  if (!isProd || !props.slot) return
  if (initAd()) return

  retryTimer = window.setInterval(() => {
    retryCount += 1
    if (initAd() || retryCount >= maxRetries) {
      window.clearInterval(retryTimer)
      retryTimer = null
    }
  }, 500)
})

onBeforeUnmount(() => {
  if (retryTimer) window.clearInterval(retryTimer)
})
</script>

<template>
  <div ref="container" aria-label="Advertisement" class="min-h-[90px]">
    <ins
      v-if="isProd && slot"
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="slot.split('/')[0]"
      :data-ad-slot="slot.split('/')[1]"
      :data-ad-format="format"
      data-full-width-responsive="true"
    ></ins>

    <div
      v-else
      class="flex items-center justify-center min-h-[90px] border-2 border-dashed border-stone-200 rounded-xl bg-stone-50 text-stone-400 text-xs font-medium uppercase tracking-widest"
    >
      Ad Slot
    </div>
  </div>
</template>
