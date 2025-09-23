<script setup lang="ts">
import Countdown from './Product/Countdown.vue';
import AddToCard from './Product/AddToCard.vue';
import RightBtns from './Product/RightBtns.vue';
  defineProps<{
    product: object
  }>()
</script>
<template>
  <div class="product-item grid-type" data-item="15">
    <div class="product-main cursor-pointer block" data-item="15">
      <div class="product-thumb bg-white relative overflow-hidden rounded-2xl">
        <div v-if="product.sale" class="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">Sale</div>
        <div v-if="product.new" class="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">New</div>
        <RightBtns />
        <div class="product-img w-full h-full aspect-[3/4]">
          <img key="0" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img"><img key="1" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img">
        </div>
        <Countdown v-if="product.sale" />
        <AddToCard :product="product"/>
      </div>
      <div class="product-infor mt-4 lg:mb-7">
        <div class="product-sold sm:pb-4 pb-2">
          <div class="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
            <div class="progress-sold bg-red absolute left-0 top-0 h-full" style="width: 10%">
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
            <div class="text-button-uppercase">
              <span class="text-secondary2 max-sm:text-xs">Sold:
              </span>
              <span class="max-sm:text-xs">8</span>
            </div>
            <div class="text-button-uppercase">
              <span class="text-secondary2 max-sm:text-xs">Available:
              </span>
              <span class="max-sm:text-xs">72</span>
            </div>
          </div>
        </div>
        <div class="product-name text-title duration-300">Off-the-Shoulder Blouse</div>
        <div class="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
          <div key="0" class="color-item w-8 h-8 rounded-full duration-300 relative" style="background-color:#D2EF9A;">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">green</div>
          </div>
          <div key="1" class="color-item w-8 h-8 rounded-full duration-300 relative" style="background-color:#DB4444;">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">red</div>
          </div>
          <div key="2" class="color-item w-8 h-8 rounded-full duration-300 relative" style="background-color:#ECB018;">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">yellow</div>
          </div>
          <div key="3" class="color-item w-8 h-8 rounded-full duration-300 relative" style="background-color:#8684D4;">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">purple</div>
          </div>
        </div>
        <div class="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
          <div class="product-price text-title">$32.00</div>
          <div class="product-origin-price caption1 text-secondary2">
            <del>$40.00</del>
          </div>
          <div class="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
            -20%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>