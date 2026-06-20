import { ref } from 'vue'

export const isLoading = ref(true)

let loadingTimer: ReturnType<typeof setTimeout> | null = null

export function showLoading() {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
  isLoading.value = true
}

export function hideLoading(delay = 2500) {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }

  loadingTimer = setTimeout(() => {
    isLoading.value = false
    loadingTimer = null
  }, delay)
}
