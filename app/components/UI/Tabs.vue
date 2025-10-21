<script setup>

  
  const {products} = defineProps({
    products: Object,
  })
  let currentTab = ref(Object.keys(products)[0])

  onMounted(()=>{
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
  <div>
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
      <ProductsList :products="products[currentTab]"/>
    </div>
  </div>
</template>