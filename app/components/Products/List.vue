<script setup lang="ts">
  defineProps<{
    products: object,
    
  }>()
</script>
<template>
  <!-- <template v-for="(itemProducts, key) in products" :key="key"> -->
    <!-- <div> -->
      <ProductsCard 
        v-for="(product) in products" 
        :key="product.id" 
        :product="product"
      />
    <!-- </div> -->
  <!-- </template> -->
</template>