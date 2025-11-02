<script setup lang="ts">
  defineProps<{
    products: object,
    
  }>()
</script>
<template>
  <div class="list-product four-product hide-product-sold grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-[30px] gap-4 md:mt-10 mt-6">
    <ProductsCard 
      v-for="(product) in products" 
      :key="product.id" 
      :product="product"
    />
  </div>
</template>