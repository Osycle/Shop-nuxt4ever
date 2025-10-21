// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/style.scss',
    '@/assets/css/tailwind.css',
    '@/assets/plugins/swiper.scss',
    'vue-final-modal/style.css',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL, 
    },
  },
  plugins: [
    
  ],
  modules: [
    // '@nuxt/content',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],
  dir: {
    // public: 'static', // 👈 вместо public будет папка static/
  }
  // imports: {
  //   dirs: [
  //     'composables',
  //     'stores',
  //     'utils',   // 👈 теперь всё из utils/* будет автоподхватываться
  //   ],
  // },
})