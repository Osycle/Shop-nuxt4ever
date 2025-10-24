<script setup>
  import Countdown from './Countdown.vue';
  import AddToCart from './AddToCart.vue';
  import RightBtns from './RightBtns.vue';

  const currentColor = ref({})

  const { product } = defineProps({
    product: Object,
  })

  onMounted(() => {
    if(product.variation.length)
      currentColor.value = product.variation[0]
  })

  


</script>
<template>
  <figure class="product-item grid-type">
    <div class="product-main cursor-pointer block">
      <div class="product-thumb bg-white relative overflow-hidden rounded-2xl">
        <div v-if="product.sale" class="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">Sale</div>
        <div v-if="product.new" class="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">New</div>
        <RightBtns />
        <Nuxt-link :to="`/products/${product.id}`">
          <div class="product-img w-full h-full aspect-[3/4]">
            <img class="w-full h-full object-cover duration-700" :src="currentColor.image" >
            <img class="w-full h-full object-cover duration-700" :src="currentColor.image" >
          </div>
        </Nuxt-link>
        <Countdown v-if="product.sale" />
        <AddToCart :product="product"/>
      </div>
      <div class="product-infor mt-4 lg:mb-7">
        <div class="product-sold sm:pb-4 pb-2">
          <div class="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
            <div 
              class="progress-sold bg-red absolute left-0 top-0 h-full" 
              style="width: ${Math.floor((product.sold / product.quantity) * 100)}%">
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
            <div class="text-button-uppercase">
              <span class="text-secondary2 max-sm:text-xs">Sold:
              </span>
              <span class="max-sm:text-xs">{{ product.sold }}</span>
            </div>
            <div class="text-button-uppercase">
              <span class="text-secondary2 max-sm:text-xs">Available:
              </span>
              <span class="max-sm:text-xs">{{ product.quantity - product.sold }}</span>
            </div>
          </div>
        </div>
        <div class="product-name text-title duration-300">{{product.name}}</div>
        <div class="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
          <div 
            v-for="(item, key) in product.variation"
            :key="key"
            :data-key="key"
            class="color-item w-12 h-12 rounded-xl duration-300 relative" 
            :style="`background-color: ${item.colorCode};`"
            @click="currentColor = item"
            ref="colorItems"
            >
            <img :src="item.colorImage" alt="color" class="rounded-xl w-full h-full object-cover">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
              {{item.color}}
            </div>
          </div>
        </div>
        <div class="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
          <div class="product-price text-title">${{ product.price }}.00</div>
          <template v-if="Math.floor(100 - (product.price / product.originPrice) * 100) > 0">
            <div class="product-origin-price caption1 text-secondary2">
              <del>${{ product.originPrice }}.00</del>
            </div>
            <div class="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
              -{{ Math.floor(100 - (product.price / product.originPrice) * 100) }}%
            </div>
          </template>

        </div>
      </div>
    </div>
  </figure>
</template>