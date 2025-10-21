<script setup>
  const { handleAddToCart } = useProducts()
  const { product } = defineProps({
    product: Object
  })
  // const cnt = ref(product.value.quantityCur)
  console.log(product)
  
  // if(product.value.quantityCur === undefined)
  //   product.value.quantityCur = 1
  // watch({
  //   cnt(p){
  //     product.quantityCur = p
  //   }
  // })
</script>
<template>
  <div v-if="false">
    <div class="text-title mt-5">Quantity: {{ product.quantityCur }}</div>
    <div class="choose-quantity flex items-center flex-wrap lg:justify-between gap-5 mt-3">
      <div
        class="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
        <i @click="() => {
          if (product.quantityCur > 0)
            product.quantityCur--
        }" class="ph-bold ph-minus cursor-pointer body1"></i>
        <div class="quantity body1 font-semibold">{{ cnt }}</div>
        <i @click="cnt++" class="ph-bold ph-plus cursor-pointer body1"></i>
      </div>
      <div class="add-cart-btn button-main w-full text-center bg-white text-black border border-black"
        @click="() => handleAddToCart(product, true)">
        Add To Cart
      </div>
    </div>
  </div>
</template>