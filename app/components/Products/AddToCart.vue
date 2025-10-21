<script setup>
  const { product } = defineProps({
    product: Object,
  })
  const { handleAddToCart, handleQuickview } = useProducts()
</script>
<template>
  <div class="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5">
    <div 
      class="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white"
      @click="() => handleQuickview(product)"
    >
      <span class="max-lg:hidden">Quick View</span>
      <i class="ph ph-eye lg:hidden text-xl"></i>
    </div>
    <div 
      class="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white"
      @click="() => handleAddToCart(product)"
    >
      <span class="max-lg:hidden">Add To Cart</span>
      <i class="ph ph-shopping-bag-open lg:hidden text-xl"></i>
    </div>
    
  </div>
</template>