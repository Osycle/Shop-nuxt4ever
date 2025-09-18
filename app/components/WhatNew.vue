
<script setup lang="ts">
import { Product } from '#components';
import { onMounted } from 'vue'
// const { data, pending, error } = await useFetch('/posts')
// import { httpGet, httpPost } from '~/utils/http'
const products = await fetch('/data/Product.json').then(response => response.json())
onMounted(() => {
  // Append child
})
console.log(products, 'data, pending, error')
</script>

<template>
  <div class="what-new-block filter-product-block md:pt-20 pt-10">
    <div class="container">
      <div class="heading flex flex-col items-center text-center">
        <div class="heading3">What's new</div>
        <div class="menu-tab bg-surface rounded-2xl mt-6">
          <div class="menu flex items-center gap-2 p-1">
            <div class="indicator absolute top-1 bottom-1 bg-white rounded-full shadow-md duration-300"></div>
            <div class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black" data-item="top">top</div>
            <div class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black active" data-item="t-shirt">t-shirt</div>
            <div class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black" data-item="dress">dress</div>
            <div class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black" data-item="sets">sets</div>
            <div class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black" data-item="shirt">shirt</div>
          </div>
        </div>
      </div>
      <div class="list-product four-product hide-product-sold grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-[30px] gap-4 md:mt-10 mt-6">
        <!-- List four product -->
        <Product :product="products[0]"/>
      </div>
    </div>
  </div>
</template>