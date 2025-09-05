
<script setup>
// Create 10 slides
const containerRef = ref(null)
const items = [
  {
    title: "Sale! Up To 50% Off!",
    description: "Summer Sale Collections",
    img: "/images/slider/bg1-1.png",
  },
  {
    title: "Sale! Up To 50% Off!",
    description: "Summer Sale Collections",
    img: "/images/slider/bg1-1.png",
  },
]
// const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

// onMounted(() => {
//   // Access Swiper instance
//   // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
//   console.log(swiper.instance)
// })
</script>

<template>
  <ClientOnly>
    <div class="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
      <div class="slider-main h-full w-full">
        <div class="swiper swiper-slider h-full relative">
          <swiper-container ref="containerRef" class="swiper-wrapper">
            <swiper-slide
              class="swiper-slide"
              v-for="(slide, idx) in items"
              :key="idx"
            >
              <div class="slider-item h-full w-full relative">
                <div class="container w-full h-full flex items-center relative">
                  <div class="text-content basis-1/2">
                    <div class="text-sub-display">{{slide.title}}</div>
                    <div class="text-display md:mt-5 mt-2">{{slide.description}}</div>
                    <a href="shop-breadcrumb-img.html" class="button-main md:mt-8 mt-3">Shop Now</a>
                  </div>
                  <div class="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
                    <img :src="slide.img" alt="bg1-1" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
  
</style>
