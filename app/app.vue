<script setup>
useHead({
  link: [
    // { rel: 'stylesheet', href: '/css/swiper-bundle.min.css' },
    // { rel: 'stylesheet', href: '/css/style.css' },
    //  { rel: 'stylesheet', href: '/css/output-scss.css' },
    // { rel: 'stylesheet', href: '/css/output-tailwind.css' },
    { rel: 'stylesheet', href: '/css/icomoon/style.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap' },
  ],
  script: [
    { src: '/js/phosphor-icons.js', defer: true },
    // { src: '/js/swiper-bundle.min.js', defer: true },
    { src: '/js/main.js', defer: true },
    // { src: '/js/plg.js', defer: true },
  ]
})
// const dataTwice = await $fetch('/data/Product.json')
// console.log(dataTwice)


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
