import { defineStore } from 'pinia'

export const useStoreCart = defineStore('cart', {
  state: () => ({
    items: [] as { id: number; name: string; price: number; quantityCur: number }[]
  }),

  getters: {
    count: (state) => state.items.reduce((t, i) => t + i.quantityCur, 0),
    totalPrice: (state) => state.items.reduce((t, i) => t + i.price, 0),
  },

  actions: {
    // Добавить товар
    addToCart(product: { id: number; name: string; quantityCur: number }, nocheck: boolean) {
      const existing = this.existing(product)
      if (existing) {
        console.log('nocheck', nocheck)
        if(nocheck || product.quantityCur > 0 && existing.quantityCur != product.quantityCur){
          existing.quantityCur = product.quantityCur
          console.log('existing.quantityCur', existing.quantityCur)
        }
        else
          existing.quantityCur++
      }
      else {
        this.items.push({ 
          ...product, 
          quantityCur: product.quantityCur ? product.quantityCur : 1 
        })
        console.log('else', this.items)
      }
    },

    // Удалить один товар
    removeOne(id: number) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      if (item.quantityCur > 1) item.quantityCur--
      else this.removeItem(id)
    },

    // Полностью удалить товар
    removeItem(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    },

    // Очистить корзину
    clearCart() {
      this.items = []
    },
    // existing
    existing(product: {id: number}): any{
      return this.items.find(item => item.id === product.id)
    },
    // Загрузить корзину при запуске
    loadFromLocalStorage() {
      if (process.client) {
        const data = localStorage.getItem('cart')
        if (data) {
          this.items = JSON.parse(data)
        }
      }
    }
  }
})
