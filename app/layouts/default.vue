
<script setup>
import { ModalsContainer } from 'vue-final-modal'
import { useStoreCart } from '~/stores/cart'
const cart = useStoreCart()
onMounted(() => {
  cart.loadFromLocalStorage()
})
</script>
<template>
  <Header />
  <main>
    <slot />
    <ModalsContainer />
  </main>
  <Footer />
  <Modals />
</template>