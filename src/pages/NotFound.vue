<script setup>
import { useHead as useUnhead } from '@unhead/vue'

useUnhead({
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 class="text-4xl font-bold mb-4">404</h1>
    <p class="text-lg text-gray-600 mb-6">Page not found</p>
    <router-link to="/de/" class="text-blue-600 hover:underline">Back to home</router-link>
  </div>
</template>
