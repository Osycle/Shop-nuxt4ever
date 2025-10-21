import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  // 🔹 Здесь храним все глобальные переменные
  state: () => ({
    count: 0,
    theme: 'light',
    username: 'Гость',
    isLoggedIn: false,
    quickview: {},
  }),

  // 🔹 Вычисляемые значения (аналог computed)
  getters: {
    welcomeMessage: (state) =>
      state.isLoggedIn
        ? `Привет, ${state.username}!`
        : 'Добро пожаловать, гость!'
  },

  // 🔹 Методы (аналог методов или мутаций)
  actions: {
    addQuickview(product){
      this.quickview = product 
    },
    increment() {
      this.count++
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    login(name: string) {
      this.username = name
      this.isLoggedIn = true
    },
    logout() {
      this.username = 'Гость'
      this.isLoggedIn = false
    }
  }
})