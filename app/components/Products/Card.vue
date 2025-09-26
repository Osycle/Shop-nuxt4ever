<script setup lang="ts">
import Countdown from './Countdown.vue';
import AddToCard from './AddToCard.vue';
import RightBtns from './RightBtns.vue';

import { onMounted, ref, reactive } from 'vue'

  const { productsAll } = defineProps<{
    product: object,
    productsAll: any[],
  }>()

  onMounted(() => {
    addEventToProductItem(productsAll)
  })

  //////////
  // show information about product in modalQuickview
  const handleItemModalQuickview = () => {
    quickViewStore = localStorage.getItem("quickViewStore");
    quickViewStore = quickViewStore ? JSON.parse(quickViewStore) : [];

    // Set quickView item
    quickViewStore.forEach((item) => {
      modalQuickviewMain.setAttribute('data-item', item.id)

      const listImg = modalQuickviewMain.querySelector('.list-img')
      listImg.innerHTML = `
        ${item.images.map((img) => (
        `
          <div class="bg-img w-full aspect-[3/4] max-md:w-[150px] max-md:flex-shrink-0 rounded-[20px] overflow-hidden md:mt-6">
            <img
              src=${img}
              alt="item"
              class="w-full h-full object-cover"
            />
          </div>
          `
      )).join('')}
      `

      modalQuickviewMain.querySelector('.product-infor .category').innerHTML = item.category
      modalQuickviewMain.querySelector('.product-infor .name').innerHTML = item.name

      let arrOfStar = "";
      for (let i = 0; i < 5; i++) {
        if (item.rate) {
          if (i >= item.rate) {
            arrOfStar += '<i class="ph-fill ph-star text-sm text-secondary"></i>';
          } else {
            arrOfStar += '<i class="ph-fill ph-star text-sm text-yellow"></i>';
          }
        }
      }
      modalQuickviewMain.querySelector('.product-infor .rate').innerHTML = arrOfStar
      modalQuickviewMain.querySelector('.product-infor .product-price').innerHTML = '$' + item.price + '.00'
      modalQuickviewMain.querySelector('.product-infor .product-origin-price del').innerHTML = '$' + item.originPrice + '.00'
      modalQuickviewMain.querySelector('.product-infor .product-sale').innerHTML = '-' + Math.floor(100 - (item.price / item.originPrice) * 100) + '%'
      modalQuickviewMain.querySelector('.product-infor .desc').innerHTML = item.description

      const listColor = modalQuickviewMain.querySelector('.list-color')
      listColor.innerHTML = `
        ${item.variation.map((color) => (
        `
          <div class="color-item w-12 h-12 rounded-xl duration-300 relative">
            <img
                src="${color.colorImage}"
                alt='color'
                class='rounded-xl w-full h-full object-cover'
            />
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">${color.color}</div>
          </div>
          `
      )).join('')}
      `

      const listCategory = modalQuickviewMain.querySelector('.list-category')

      listCategory.innerHTML = `
        <a href="shop-breadcrumb1.html" class="text-secondary">${item.category},</a>
        <a href="shop-breadcrumb1.html" class="text-secondary"> ${item.gender}</a>
      `

      const listTag = modalQuickviewMain.querySelector('.list-tag')

      listTag.innerHTML = `
        <a href="shop-breadcrumb1.html" class="text-secondary">${item.type}</a>
      `

      let wishlistStore = localStorage.getItem("wishlistStore");
      wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : [];
      const addWishlistIcon = modalQuickviewMain.querySelector('.add-wishlist-btn')

      const existingIndex = wishlistStore.findIndex(
        (prd) => prd.id === item.id
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
          (prd) => prd.id === item.id
        );

        if (existingIndex > -1) {
          // If prd existed in wishlist, remove it from wishlist
          wishlistStore.splice(existingIndex, 1);
          addWishlistIcon.classList.remove("active");
          addWishlistIcon.querySelector("i").classList.add("ph");
          addWishlistIcon.querySelector("i").classList.remove("ph-fill");
        } else {
          // If prd not exist in wishlist, add it to wishlist
          wishlistStore.push(item);
          addWishlistIcon.classList.add("active");
          addWishlistIcon.querySelector("i").classList.remove("ph");
          addWishlistIcon.querySelector("i").classList.add("ph-fill");
        }

        // Save wishlist to localStorage
        localStorage.setItem("wishlistStore", JSON.stringify(wishlistStore));

        handleItemModalWishlist()
        openModalWishlist()
      });

      let cartStore = localStorage.getItem("cartStore");
      cartStore = cartStore ? JSON.parse(cartStore) : [];
      const addCartIcon = modalQuickviewMain.querySelector('.add-cart-btn')

      addCartIcon.addEventListener("click", (e) => {
        e.stopPropagation();

        const existingIndex = cartStore.findIndex(
          (prd) => prd.id === item.id
        );

        if (existingIndex > -1) {
          // If prd existed in cart
          openModalCart();
        } else {
          // If prd not exist in cart, add it to cart
          cartStore.push(item);
          openModalCart();
        }

        // Save cart to localStorage
        localStorage.setItem("cartStore", JSON.stringify(cartStore));
        handleItemModalCart();
      });

      handleActiveSizeChange()
      handleActiveColorChange()
    });
  };
  // Active size
  const handleActiveSizeChange = () => {
    console.log('Event handleActiveSizeChange')
    // List size
    const listSizes = document.querySelectorAll(".list-size");

    listSizes.forEach((list) => {
      const sizeItems = list.querySelectorAll(".size-item");

      sizeItems.forEach((size) => {
        size.addEventListener("click", () => {
          let parent = size.parentElement;
          if (!parent.querySelector(".active")) {
            size.classList.add("active");
          } else {
            parent.querySelector(".active").classList.remove("active");
            size.classList.add("active");
          }
        });
      });

      list.addEventListener("click", (e) => {
        e.stopPropagation();
        const chooseSizeBlock = list.parentElement;
        const sizeSelected = chooseSizeBlock.querySelector(".size");
        const activeSize = list.querySelector(".size-item.active");

        if (sizeSelected && activeSize) {
          sizeSelected.textContent = activeSize.textContent;
        }
      });
    });
  }
  // Active size
  const handleActiveColorChange = () => {
    // List color
    const listColors = document.querySelectorAll(".list-color");

    listColors.forEach((list) => {
      const colorItems = list.querySelectorAll(".color-item");

      colorItems.forEach((color) => {
        color.addEventListener("click", () => {
          let parent = color.parentElement;
          if (!parent.querySelector(".active")) {
            color.classList.add("active");
          } else {
            parent.querySelector(".active").classList.remove("active");
            color.classList.add("active");
          }
        });
      });

      list.addEventListener("click", (e) => {
        e.stopPropagation();
        const chooseColorBlock = list.parentElement;
        const colorSelected = chooseColorBlock.querySelector(".color");
        const activeColor = list.querySelector(".color-item.active .tag-action");

        if (colorSelected && activeColor) {
          colorSelected.textContent = activeColor.textContent;
        }
      });
    });
  }

  function addEventToProductItem(products) {
    // Product item
    const productItems = document.querySelectorAll(".product-item");

    if (productItems) {
      productItems.forEach((product) => {
        const productId = product.getAttribute("data-item");

        product.addEventListener("click", () => {
          window.location.href = `product-default.html?id=${productId}`;
        });

        const compareIcon = product.querySelector(".compare-btn");
        const addWishlistIcon = product.querySelector(".add-wishlist-btn");
        const addCartIcon = product.querySelectorAll(".add-cart-btn");
        const quickviewIcon = product.querySelector(".quick-view-btn");
        const quickshopIcon = product.querySelector(".quick-shop-btn");
        const modalQuickshop = product.querySelector(".quick-shop-block");

        if (addWishlistIcon) {
          let wishlistStore = localStorage.getItem("wishlistStore");
          wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : [];
          wishlistStore.forEach((prd) => {
            if (prd.id === productId) {
              addWishlistIcon.classList.add("active");
              addWishlistIcon.querySelector("i").classList.remove("ph");
              addWishlistIcon.querySelector("i").classList.add("ph-fill");
            }
          });

          addWishlistIcon.addEventListener("click", (e) => {
            e.stopPropagation();

            // save prd to wishlist in local storage
            const productId = addWishlistIcon
              .closest(".product-item")
              .getAttribute("data-item");
            let wishlistStore = localStorage.getItem("wishlistStore");
            wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : [];

            const existingIndex = wishlistStore.findIndex(
              (item) => item.id === productId
            );

            if (existingIndex > -1) {
              // If prd existed in wishlist, remove it from wishlist
              wishlistStore.splice(existingIndex, 1);
              addWishlistIcon.classList.remove("active");
              addWishlistIcon.querySelector("i").classList.add("ph");
              addWishlistIcon.querySelector("i").classList.remove("ph-fill");
            } else {
              // If prd not exist in wishlist, add it to wishlist
              const productToAdd = products?.find((item) => item.id === productId);
              if (productToAdd) {
                wishlistStore.push(productToAdd);
                addWishlistIcon.classList.add("active");
                addWishlistIcon.querySelector("i").classList.remove("ph");
                addWishlistIcon.querySelector("i").classList.add("ph-fill");
                openModalWishlist();
              }
            }

            // Save wishlist to localStorage
            localStorage.setItem("wishlistStore", JSON.stringify(wishlistStore));
            handleItemModalWishlist();
          });
        }

        if (compareIcon) {
          let compareStore = localStorage.getItem("compareStore");
          compareStore = compareStore ? JSON.parse(compareStore) : [];
          compareStore.forEach((prd) => {
            if (prd.id === productId) {
              compareIcon.classList.add("active");
            } else {
              compareIcon.classList.remove("active");
            }
          });

          compareIcon.addEventListener("click", (e) => {
            e.stopPropagation();

            // save prd to compare in local storage
            const productId = compareIcon
              .closest(".product-item")
              .getAttribute("data-item");
            let compareStore = localStorage.getItem("compareStore");
            compareStore = compareStore ? JSON.parse(compareStore) : [];

            const existingIndex = compareStore.findIndex(
              (item) => item.id === productId
            );

            if (existingIndex > -1) {
              // If prd existed in compare, remove it from compare
              compareStore.splice(existingIndex, 1);
              compareIcon.classList.remove("active");
            } else {
              if (compareStore.length < 3) {
                // If prd not exist in compare, add it to compare
                const productToAdd = products?.find(
                  (item) => item.id === productId
                );
                if (productToAdd) {
                  compareStore.push(productToAdd);
                  compareIcon.classList.add("active");
                }
              } else {
                alert("List compare product must be <= 3");
              }
            }

            // Save compare to localStorage
            localStorage.setItem("compareStore", JSON.stringify(compareStore));
            handleItemModalCompare();
            openModalCompare();
          });
        }

        if (quickviewIcon) {
          quickviewIcon.addEventListener("click", (e) => {
            console.log('quickviewIcon click')
            e.stopPropagation();
            // save prd to quick view in local storage
            const productItem = quickviewIcon.closest(".product-item");
            const productId = productItem.getAttribute("data-item");
            let quickViewStore = localStorage.getItem("quickViewStore");
            quickViewStore = quickViewStore && [];

            // add it to quick view
            const productToAdd = products?.find((item) => item.id === productId);
            if (productToAdd) {
              quickViewStore.push(productToAdd);
            }

            // Save quickView to localStorage
            localStorage.setItem(
              "quickViewStore",
              JSON.stringify(quickViewStore)
            );
            handleItemModalQuickview();
            closeModalCart()
            openModalQuickview();
          });
        }

        if (addCartIcon) {
          addCartIcon.forEach(icon => icon.addEventListener("click", (e) => {
            e.stopPropagation();
            // save prd to cart in local storage
            const productItem = icon.closest(".product-item");
            const productId = productItem.getAttribute("data-item");
            let cartStore = localStorage.getItem("cartStore");
            cartStore = cartStore ? JSON.parse(cartStore) : [];

            const existingIndex = cartStore.findIndex(
              (item) => item.id === productId
            );

            if (existingIndex > -1) {
              // If prd existed in cart
              openModalCart();
            } else {
              // If prd not exist in cart, add it to cart
              const productToAdd = products?.find((item) => item.id === productId);
              if (productToAdd) {
                cartStore.push(productToAdd);
                openModalCart();
              }
            }

            // Save cart to localStorage
            localStorage.setItem("cartStore", JSON.stringify(cartStore));
            handleItemModalCart();
          }));
        }

        if (quickshopIcon) {
          quickshopIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            modalQuickshop.classList.add("open");
          });

          if (addCartIcon) {
            addCartIcon.forEach(icon => icon.addEventListener("click", (e) => {
              e.stopPropagation();
              if (modalQuickshop.classList.contains("open")) {
                modalQuickshop.classList.remove("open");
              }
              openModalCart();
            }));
          }
        }
      });
    }

    handleActiveSizeChange()
    handleActiveColorChange()
  }



</script>
<template>
  <figure class="product-item grid-type" :data-item="product.id">
    <div class="product-main cursor-pointer block" :data-item="product.id">
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
        <div v-if="product.variation.length > 0 && product.action === 'add to cart'" class="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
          <div 
            v-for="(item, key) in product.variation"
            :key="key" 
            :data-key="key"
            class="color-item w-8 h-8 rounded-full duration-300 relative" 
            :style="`background-color: ${item.colorCode};`">
            <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
              {{item.color}}
            </div>
          </div>
        </div>
        <div v-else class="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
          <div 
            v-for="(item, key) in product.variation"
            :key="key"
            :data-key="key"
            class="color-item w-12 h-12 rounded-xl duration-300 relative" key="0">
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