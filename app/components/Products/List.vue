<script setup lang="ts">
  defineProps<{
    products: object,
    productsAll: array,
    
  }>()
</script>
<template>
  <!-- <template v-for="(itemProducts, key) in products" :key="key"> -->
    <!-- <div> -->
      <ProductsCard 
        v-for="(product) in products" 
        :key="product.id" 
        :productsAll="productsAll"
        :product="product"
      />
    <!-- </div> -->
  <!-- </template> -->
</template>