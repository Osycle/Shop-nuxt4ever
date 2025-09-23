<script setup lang="ts">
  defineProps<{
    product: object
  }>()
</script>
<template>
  <div class="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5">
    <div class="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
      <span class="max-lg:hidden">Quick View</span>
      <i class="ph ph-eye lg:hidden text-xl"></i>
    </div>
    <div v-if="product.action != 'add to cart'" class="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white max-lg:hidden">
      Quick Shop
    </div>
    <div v-else class="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
      <span class="max-lg:hidden">Add To Cart</span>
      <i class="ph ph-shopping-bag-open lg:hidden text-xl"></i>
    </div>
    
    <div v-if="product.action != 'add to cart'" class="quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px]">
      <div class="list-size flex items-center justify-center flex-wrap gap-2">
        <div key="0" class="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line">S</div>
        <div key="1" class="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line">M</div>
        <div key="2" class="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line">L</div>
        <div key="3" class="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line">XL</div>
      </div>
      <div class="add-cart-btn button-main w-full text-center rounded-full py-3 mt-4">Add
        To cart</div>
    </div>
  </div>
</template>