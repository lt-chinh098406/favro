import Vue from 'vue'

Vue.directive('trim', {
  inserted: (el) => {
    const input = el.querySelector('input, textarea') as HTMLInputElement

    input?.addEventListener(
      'blur',
      (ev) => {
        const focusEl = ev.target as HTMLInputElement

        focusEl.value = focusEl.value.trim()
        focusEl.dispatchEvent(new Event('input', { bubbles: true }))
      },
      true
    )
  },
})
