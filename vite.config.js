import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  test: {
    setupFiles: ['./src/__tests__/setup.js'],
  },
  ssgOptions: {
    dirStyle: 'nested',
    script: 'async',
    formatting: 'minify',
  },
  ssr: {
    noExternal: [/vue-i18n/],
  },
})
