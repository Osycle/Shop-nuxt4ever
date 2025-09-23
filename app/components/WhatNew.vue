
<script setup lang="ts">
import { Product } from '#components';
import { onMounted } from 'vue'
// const { data, pending, error } = await useFetch('/posts')
// import { httpGet, httpPost } from '~/utils/http'
let products = await fetch('/data/Product.json').then(response => response.json())
products = products.filter((product) => product.type === 'top').slice(0, 4)
console.log(products, 'products')
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
        <div class="product-item grid-type" v-if="false" data-item="1">
          <div class="product-main cursor-pointer block" data-item="1">
            <div class="product-thumb bg-white relative overflow-hidden rounded-2xl">
              <div class="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">New</div>
              <div class="list-action-right absolute top-3 right-3 max-lg:hidden">
                <div class="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                  <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                    Add To Wishlist</div>
                  <i class="ph ph-heart text-lg"></i>
                </div>
                <div class="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                  <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                    Compare Product</div>
                  <i class="ph ph-arrow-counter-clockwise text-lg compare-icon"></i>
                  <i class="ph ph-check-circle text-lg checked-icon"></i>
                </div>
              </div>
              <div class="product-img w-full h-full aspect-[3/4]">
                <img key="0" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img"><img key="1" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img">
              </div>
              <div class="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5">
                <div class="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                  <span class="max-lg:hidden">Quick View</span>
                  <i class="ph ph-eye lg:hidden text-xl"></i>
                </div>
                <div class="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white max-lg:hidden">
                  Quick Shop</div>
                <div class="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white lg:hidden">
                  <span class="max-lg:hidden">Add To Cart</span>
                  <i class="ph ph-shopping-bag-open lg:hidden text-xl"></i>
                </div>
                <div class="quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px]">
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
            </div>
            <div class="product-infor mt-4 lg:mb-7">
              <div class="product-sold sm:pb-4 pb-2">
                <div class="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                  <div class="progress-sold bg-red absolute left-0 top-0 h-full" style="width: 12%">
                  </div>
                </div>
                <div class="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                  <div class="text-button-uppercase">
                    <span class="text-secondary2 max-sm:text-xs">Sold:
                    </span>
                    <span class="max-sm:text-xs">12</span>
                  </div>
                  <div class="text-button-uppercase">
                    <span class="text-secondary2 max-sm:text-xs">Available:
                    </span>
                    <span class="max-sm:text-xs">88</span>
                  </div>
                </div>
              </div>
              <div class="product-name text-title duration-300">mesh shirt</div>
              <div class="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                <div class="color-item w-12 h-12 rounded-xl duration-300 relative" key="0">
                  <img src="/images/product/color/48x48.png" alt="color" class="rounded-xl w-full h-full object-cover">
                  <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">red</div>
                </div>
                <div class="color-item w-12 h-12 rounded-xl duration-300 relative" key="1">
                  <img src="/images/product/color/48x48.png" alt="color" class="rounded-xl w-full h-full object-cover">
                  <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">yellow</div>
                </div>
              </div>
              <div class="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                <div class="product-price text-title">$45.00</div>
                <div class="product-origin-price caption1 text-secondary2">
                  <del>$55.00</del>
                </div>
                <div class="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                  -18%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-item grid-type" v-if="false" data-item="15">
          <div class="product-main cursor-pointer block" data-item="15">
            <div class="product-thumb bg-white relative overflow-hidden rounded-2xl">
              <div class="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">Sale</div>
              <div class="list-action-right absolute top-3 right-3 max-lg:hidden">
                <div class="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                  <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                    Add To Wishlist</div>
                  <i class="ph ph-heart text-lg"></i>
                </div>
                <div class="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                  <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                    Compare Product</div>
                  <i class="ph ph-arrow-counter-clockwise text-lg compare-icon"></i>
                  <i class="ph ph-check-circle text-lg checked-icon"></i>
                </div>
              </div>
              <div class="product-img w-full h-full aspect-[3/4]">
                <img key="0" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img"><img key="1" class="w-full h-full object-cover duration-700" src="/images/product/1000x1000.png" alt="img">
              </div>
              <div class="countdown-time-block py-1.5 flex items-center justify-center">
                <div class="text-xs font-semibold uppercase text-red">
                  <span class="countdown-day">24</span>
                  <span>D : </span>
                  <span class="countdown-hour">14</span>
                  <span>H : </span>
                  <span class="countdown-minute">36</span>
                  <span>M : </span>
                  <span class="countdown-second">51</span>
                  <span>S</span>
                </div>
              </div>
              <div class="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5">
                <div class="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                  <span class="max-lg:hidden">Quick View</span>
                  <i class="ph ph-eye lg:hidden text-xl"></i>
                </div>
                <div class="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                  <span class="max-lg:hidden">Add To Cart</span>
                  <i class="ph ph-shopping-bag-open lg:hidden text-xl"></i>
                </div>
              </div>
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
        <figure v-for="product in products" :key="product.id">
          <Product :product="product"/>
        </figure>
      </div>
    </div>
  </div>
</template>