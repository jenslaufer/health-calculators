import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Serve from the domain root (custom domain).
  base: '/',
  plugins: [vue(), tailwindcss()],
})
