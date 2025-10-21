<script setup>

const swiperRef = ref(null)
const swiper = useSwiper(swiperRef, {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})
  const items = ref([
    {
      type: "swimwear",
      image: "/images/collection/swimwear.png", 
      link: "shop-breadcrumb1.html",
    },
    {
      type: "top",
      image: "/images/collection/top.png", 
      link: "shop-breadcrumb1.html",
    },
    {
      type: "sets",
      image: "/images/collection/sets.png", 
      link: "shop-breadcrumb1.html",
    },
    {
      type: "outerwear",
      image: "/images/collection/outerwear.png", 
      link: "shop-breadcrumb1.html",
    },
    {
      type: "underwear",
      image: "/images/collection/underwear.png", 
      link: "shop-breadcrumb1.html",
    },
    {
      type: "t-shirt",
      image: "/images/collection/t-shirt.png", 
      link: "shop-breadcrumb1.html",
    },
  ])

</script>
<template>
  <div class="collection-block md:pt-20 pt-10">
    <div class="container">
      <div class="heading3 text-center">Explore Collections</div>
    </div>
    <div class="list-collection relative section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
      <div class="swiper-button-prev lg:!left-10 left-6"></div>
      <div class="swiper swiper-collection h-full relative">
        <swiper-container 
            ref="swiperRef" 
            class="swiper-wrapper" 
            :init="false">
            <swiper-slide
              class="swiper-slide"
              v-for="(item, key) in items"
              :key="key"
            >
            <a :href="item.link" class="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
              <div class="bg-img">
                <img :src="item.image" :alt="item.type" />
              </div>
              <div class="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">{{ item.type }}</div>
            </a>
          </swiper-slide>
        </swiper-container>
        <!-- <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in items" :key="key">
            <a :href="item.link" class="collection-item block relative rounded-2xl overflow-hidden cursor-pointer">
              <div class="bg-img">
                <img :src="item.image" :alt="item.type" />
              </div>
              <div class="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">{{ item.type }}</div>
            </a>
          </div>
        </div> -->
      </div>
      <div class="swiper-button-next lg:!right-10 right-6"></div>
    </div>
  </div>
</template>