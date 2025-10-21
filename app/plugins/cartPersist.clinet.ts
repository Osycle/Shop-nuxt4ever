import { watch } from 'vue'
import { useStoreCart } from '~/stores/cart'

export default defineNuxtPlugin(() => {
  const store = useStoreCart()

  // Загружаем данные при запуске
  store.loadFromLocalStorage()

  // Автосохранение
  watch(
    () => store.items,
    (newVal) => {
      localStorage.setItem('cart', JSON.stringify(newVal))
    },
    { deep: true }
  )
})