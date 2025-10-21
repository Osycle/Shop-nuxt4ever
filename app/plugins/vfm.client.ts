import { createVfm } from 'vue-final-modal'

export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm() as any

  // Подключаем плагин к Vue
  nuxtApp.vueApp.use(vfm)

  // Делаем глобальным: доступен без useNuxtApp()
  nuxtApp.vueApp.config.globalProperties.$vfm = vfm

  // (чтобы также работало в setup, если нужно)
  return {
    provide: {
      vfm,
    },
  }
})