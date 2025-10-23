<script setup lang="ts">
  defineProps<{
    products: object,
    
  }>()
</script>
<template>
  <ProductsCard 
    v-for="(product) in products" 
    :key="product.id" 
    :product="product"
  />
</template>