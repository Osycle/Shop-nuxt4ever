

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    links: [] as { name: string; path: string }[]
  }),
  actions: {
    async fetchLinks() {
      this.links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Store list', path: '/store-list' },
        { name: '404', path: '/page-not-found' },
        { name: 'Faqs', path: '/faqs' },
        { name: 'Coming-soon', path: '/coming-soon' },
        { name: 'Customer-feedbacks', path: '/customer-feedbacks' },
      ]
      // await $fetch('/api/navigation')
    }
  }
})