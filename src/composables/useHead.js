import { watchEffect, onUnmounted } from 'vue'

export function useHead({ title, meta }) {
  const originalTitle = document.title
  let metaTags = []

  watchEffect(() => {
    if (title) document.title = typeof title === 'function' ? title() : title
  })

  if (meta) {
    const entries = typeof meta === 'function' ? meta() : meta
    metaTags = entries.map((m) => {
      const tag = document.createElement('meta')
      Object.entries(m).forEach(([k, v]) => tag.setAttribute(k, v))
      document.head.appendChild(tag)
      return tag
    })
  }

  onUnmounted(() => {
    metaTags.forEach((tag) => tag.remove())
    document.title = originalTitle
  })
}
