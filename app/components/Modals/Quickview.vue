<script setup>
  import { useVfm } from 'vue-final-modal'
  const vfm = useVfm()
  
  const store = useMainStore()
  const product = store.quickview
  const modalMain = ref()
  
  
  const close = () =>{
    modalMain.value.classList.remove("open");
    setTimeout(() => {vfm.close('quickview')}, 300);
  }
  onMounted(()=>{
    setTimeout(()=>{modalMain.value.classList.add('open')}, 1);
    return


    let wishlistStore = localStorage.getItem("wishlistStore");
      wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : [];
      const addWishlistIcon = modalBlockMain.querySelector('.add-wishlist-btn')

      const existingIndex = wishlistStore.findIndex(
        (prd) => prd.id === product.value.id
      );

      if (existingIndex > -1) {
        // If prd existed in wishlist, remove it from wishlist
        addWishlistIcon.classList.add("active");
        addWishlistIcon.querySelector("i").classList.remove("ph");
        addWishlistIcon.querySelector("i").classList.add("ph-fill");
      } else {
        // If prd not exist in wishlist, add it to wishlist
        addWishlistIcon.classList.remove("active");
        addWishlistIcon.querySelector("i").classList.add("ph");
        addWishlistIcon.querySelector("i").classList.remove("ph-fill");
      }

      addWishlistIcon.addEventListener("click", (e) => {
        const existingIndex = wishlistStore.findIndex(
          (prd) => prd.id === product.value.id
        );

        if (existingIndex > -1) {
          // If prd existed in wishlist, remove it from wishlist
          wishlistStore.splice(existingIndex, 1);
          addWishlistIcon.classList.remove("active");
          addWishlistIcon.querySelector("i").classList.add("ph");
          addWishlistIcon.querySelector("i").classList.remove("ph-fill");
        } else {
          // If prd not exist in wishlist, add it to wishlist
          wishlistStore.push(product.value);
          addWishlistIcon.classList.add("active");
          addWishlistIcon.querySelector("i").classList.remove("ph");
          addWishlistIcon.querySelector("i").classList.add("ph-fill");
        }

        // Save wishlist to localStorage
        localStorage.setItem("wishlistStore", JSON.stringify(wishlistStore));

        handleItemModalWishlist()
        openModalWishlist()
      });




  })


</script>

<template>
  <div class="modal-quickview-block" @click="close">
    <div class="modal-quickview-main py-6" @click.stop ref="modalMain">
      <div 
        class="flex h-full max-md:flex-col-reverse gap-y-6" 
        v-if="store.quickview"
      >
        <div class="left lg:w-[388px] md:w-[300px] flex-shrink-0 px-6">
          <div class="list-img max-md:flex items-center gap-4">
            <div 
              v-for="(url, key) in product.images" :key="key"
              class="bg-img w-full aspect-[3/4] max-md:w-[150px] max-md:flex-shrink-0 rounded-[20px] overflow-hidden md:mt-6">
              <img :src="url" alt="item" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div class="right w-full px-6">
          <div class="heading pb-6 flex items-center justify-between relative">
            <div class="heading5">Quick View</div>
            <div 
              @click="() => vfm.close('quickview')"
              class="close-btn absolute right-0 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white">
              <i class="ph ph-x text-sm"></i>
            </div>
          </div>
          <div class="product-infor">
            <div class="flex justify-between">
              <div>
                <div class="category caption2 text-secondary font-semibold uppercase">{{product.category}}</div>
                <div class="name heading4 mt-1">{{product.name}}</div>
              </div>
              <div class="add-wishlist-btn w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-lg duration-300 hover:bg-black hover:text-white">
                <i class="ph ph-heart text-xl"></i>
              </div>
            </div>
            <div class="flex items-center gap-1 mt-3">
              <div class="rate flex">
                <template v-for="rate in 5" :key="rate">
                  <i 
                    :class="{'text-yellow': rate <= product.rate}"
                    class="ph-fill ph-star text-sm text-secondary"></i>
                </template>
              </div>
              <span class="caption1 text-secondary">(1.234 reviews)</span>
            </div>
            <div class="flex items-center gap-1 gap-y-3 flex-wrap mt-3">
              <div class="text-xs font-semibold bg-black text-white uppercase py-1 px-3 rounded-full">best seller</div>
              <div class="flex items-center gap-1">
                <i class="ph-fill ph-lightning text-red text-xl"></i>
                <div class="caption1 text-secondary">Selling fast! 22 people have this in their carts.</div>
              </div>
            </div>
            <div class="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
              <div class="product-price heading5">{{'$' + product.price + '.00'}}</div>
              <div class="w-px h-4 bg-line"></div>
              <div class="product-origin-price font-normal text-secondary2">
                <del>{{'$' + product.originPrice + '.00'}}</del>
              </div>
              <div class="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                {{ '-' + Math.floor(100 - (product.price / product.originPrice) * 100) + '%' }}
              </div>
              <div class="desc text-secondary mt-3">
                {{ product.desc }}
              </div>
            </div>
            <div class="list-action mt-6">
              <ProductsChooseColor :product="product" />
              <ProductsChooseQuantity :product="product" />
              
              <div class="button-block mt-5">
                <a href="checkout.html" class="button-main w-full text-center">Buy It Now</a>
              </div>
            </div>
            <div class="flex items-center flex-wrap lg:gap-20 gap-8 gap-y-4 mt-5">
              <div class="compare flex items-center gap-3 cursor-pointer">
                <div class="compare-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                  <i class="ph-fill ph-arrows-counter-clockwise cursor-pointer heading6"></i>
                </div>
                <span>Compare</span>
              </div>
              <div class="share flex items-center gap-3 cursor-pointer">
                <div class="share-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                  <i class="ph-fill ph-share-network cursor-pointer heading6"></i>
                </div>
                <span>Share Products</span>
              </div>
            </div>
            <div class="more-infor mt-6">
              <div class="flex items-center gap-4 flex-wrap">
                <div class="flex items-center gap-1">
                  <i class="ph ph-arrow-clockwise cursor-pointer body1"></i>
                  <div class="text-title">Delivery & Return</div>
                </div>
                <div class="flex items-center gap-1">
                  <i class="ph ph-question cursor-pointer body1"></i>
                  <div class="text-title">Ask A Question</div>
                </div>
              </div>
              <div class="flex items-center flex-wrap gap-1 mt-3">
                <i class="ph ph-timer cursor-pointer body1"></i>
                <span class="text-title">Estimated Delivery:</span>
                <span class="text-secondary">14 January - 18 January</span>
              </div>
              <div class="flex items-center flex-wrap gap-1 mt-3">
                <i class="ph ph-eye cursor-pointer body1"></i>
                <span class="text-title">38</span>
                <span class="text-secondary">people viewing this product right now!</span>
              </div>
              <div class="flex items-center gap-1 mt-3">
                <div class="text-title">SKU:</div>
                <div class="text-secondary">53453412</div>
              </div>
              <div class="flex items-center gap-1 mt-3">
                <div class="text-title">Categories:</div>
                <div class="list-category text-secondary">{{ product.category }}, {{ product.gender }}</div>
              </div>
              <div class="flex items-center gap-1 mt-3">
                <div class="text-title">Tag:</div>
                <div class="list-tag text-secondary">{{ product.type }}</div>
              </div>
            </div>
            <div class="list-payment mt-7">
              <div class="main-content lg:pt-8 pt-6 lg:pb-6 pb-4 sm:px-4 px-3 border border-line rounded-xl relative max-md:w-2/3 max-sm:w-full">
                <div class="heading6 px-5 bg-white absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap">Guranteed safe checkout</div>
                <div class="list grid grid-cols-6">
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-0.png" alt="payment" class="w-full" />
                  </div>
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-1.png" alt="payment" class="w-full" />
                  </div>
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-2.png" alt="payment" class="w-full" />
                  </div>
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-3.png" alt="payment" class="w-full" />
                  </div>
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-4.png" alt="payment" class="w-full" />
                  </div>
                  <div class="item flex items-center justify-center lg:px-3 px-1">
                    <img src="/images/payment/Frame-5.png" alt="payment" class="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        Not quickviews
      </div>
    </div>
  </div>
</template>
