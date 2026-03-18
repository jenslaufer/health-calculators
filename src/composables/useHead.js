import { onMounted, onUnmounted } from 'vue'

export function useHead({ title, description }) {
  let prevTitle

  onMounted(() => {
    prevTitle = document.title
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
  })

  onUnmounted(() => {
    document.title = prevTitle
  })
}
