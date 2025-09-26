
<script setup lang="ts">
// import { Products } from '#components';
import { onMounted, ref, reactive } from 'vue'
// const { data, pending, error } = await useFetch('/posts')
// import { httpGet, httpPost } from '~/utils/http'

let productsAll = await fetch('/data/Product.json').then(response => response.json())
let productsTypes = [ "top", "t-shirt", "dress", "sets", "shirt"]
let currentTab = ref(productsTypes[0])
let products = reactive({});
productsTypes.forEach(e=>{
  products[e] = productsAll.filter((product: { type: string; }) => product.type === e).slice(0, 4)
})
// currentTab
console.log(products, 'products')
onMounted(() => {
  
  // Change active menu tab
  const tabItems = document.querySelectorAll(".menu-tab .tab-item");
  const itemActive = document.querySelectorAll(".menu-tab .tab-item.active");

  itemActive.forEach((item) => {
    let indicator = item.parentElement.querySelector(".indicator");
    if (indicator) {
      indicator.style.width = item.getBoundingClientRect().width + "px";
      indicator.style.left =
        item.getBoundingClientRect().left -
        item.parentElement.getBoundingClientRect().left +
        "px";
    }
  });
  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      let indicator = item.parentElement.querySelector(".indicator");
      if (indicator) {
        indicator.style.width = item.getBoundingClientRect().width + "px";
        indicator.style.left =
          item.getBoundingClientRect().left -
          item.parentElement.getBoundingClientRect().left +
          "px";
      }
      if (item.parentElement.querySelector(".active")) {
        item.parentElement.querySelector(".active").classList.remove("active");
      }
      item.classList.add("active");
    });
  });



})

</script>

<template>
  <div class="what-new-block filter-product-block md:pt-20 pt-10">
    <div class="container">
      <div class="heading flex flex-col items-center text-center">
        <div class="heading3">What's new</div>
        <div class="menu-tab bg-surface rounded-2xl mt-6">
          <div class="menu flex items-center gap-2 p-1">
            <div class="indicator absolute top-1 bottom-1 bg-white rounded-full shadow-md duration-300"></div>
            <div 
              v-for="(item, key) in products" :key="key"
              class="tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-300 hover:text-black" 
              :class="{'active': currentTab == key}"
              :data-item="key"
              @click="currentTab = key">
              {{ key }}
            </div>
          </div>
        </div>
      </div>
      <div class="list-product four-product hide-product-sold grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-[30px] gap-4 md:mt-10 mt-6">
        <!-- List four product -->
        <!-- {{ products[currentTab] }} -->
        <ProductsList :products="products[currentTab]" :productsAll="productsAll"/>
      </div>
    </div>
  </div>
</template>