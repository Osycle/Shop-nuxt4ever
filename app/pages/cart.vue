<script setup>
  usePageBreadcrumbs().setItems([{ name: 'Shopping Cart', path: '/cart' }])
  const cart = useStoreCart()
</script>

<template>
  <div class="cart-block md:py-20 py-10">
    <div class="container">
      <div class="content-main flex justify-between max-xl:flex-col gap-y-8">
        <div class="xl:w-2/3 xl:pr-3 w-full">
          <div class="time countdown-cart bg-green py-3 px-5 flex items-center rounded-lg">
            <div class="heding5">🔥</div>
            <div class="caption1 pl-2">
              Your cart will expire in
              <span class="min text-red text-button fw-700"><span class="minute">10</span> : <span class="second">00</span></span>
              <span> minutes! Please checkout now before your items sell out!</span>
            </div>
          </div>
          <div class="heading banner mt-5">
            <div class="text">
              Buy
              <span class="text-button"> $<span class="more-price">250</span>.00 </span>
              <span>more to get </span>
              <span class="text-button">freeship</span>
            </div>
            <div class="tow-bar-block mt-4">
              <div class="progress-line" style="width: 50%"></div>
            </div>
          </div>
          <div class="list-product w-full sm:mt-7 mt-5">
            <div class="w-full">
              <div class="heading bg-surface bora-4 pt-4 pb-4">
                <div class="flex">
                  <div class="w-1/2">
                    <div class="text-button text-center">Products</div>
                  </div>
                  <div class="w-1/12">
                    <div class="text-button text-center">Price</div>
                  </div>
                  <div class="w-1/6">
                    <div class="text-button text-center">Quantity</div>
                  </div>
                  <div class="w-1/6">
                    <div class="text-button text-center">Total Price</div>
                  </div>
                </div>
              </div>
              <div class="list-product-main w-full mt-3">
                <div 
                  v-for="item in cart.items" :key="item.id"
                  class="item flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-line w-full">
                  <div class="w-1/2">
                    <div class="flex items-center gap-6">
                      <div class="bg-img md:w-[100px] w-20 aspect-[3/4]">
                        <img :src="item.images?.[0]" alt="img" class="w-full h-full object-cover rounded-lg">
                      </div>
                      <div>
                        <div class="text-title">{{ item.name }}</div>
                        <div class="list-select mt-3"></div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/12 price flex items-center justify-center">
                    <div class="text-title text-center">${{ item.price }}.00</div>
                  </div>
                  <div class="w-1/6 flex items-center justify-center">
                    <div class="quantity-block bg-surface md:p-3 p-2 flex items-center justify-between rounded-lg border border-line md:w-[100px] flex-shrink-0 w-20">
                      <i
                      @click="()=>{
                        if(item.quantityCur > 0 )
                        item.quantityCur--
                      }"
                      class="ph-bold ph-minus cursor-pointer text-base max-md:text-sm"></i>
                      <div class="text-button quantity">{{ item.quantityCur }}</div>
                      <i @click="item.quantityCur++" class="ph-bold ph-plus cursor-pointer text-base max-md:text-sm"></i>
                    </div>
                  </div>
                  <div class="w-1/6 flex total-price items-center justify-center">
                    <div class="text-title text-center">${{ item.quantityCur * item.price }}.00</div>
                  </div>
                  <div class="w-1/12 flex items-center justify-center">
                    <i @click="cart.removeItem(item.id)" class="remove-btn ph ph-x-circle text-xl max-md:text-base text-red cursor-pointer hover:text-black duration-300"></i>
                  </div>
                </div>
                <template v-if="!cart.items.length" class="text-center">
                  Корзина пуста
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/3 xl:pl-12 w-full">
          <div class="checkout-block bg-surface p-6 rounded-2xl">
            <div class="heading5">Order Summary</div>
            <div class="total-block py-5 flex justify-between border-b border-line">
              <div class="text-title">Subtotal</div>
              <div class="text-title">$<span class="total-product">{{ cart.totalPrice }}</span><span>.00</span></div>
            </div>
            <div class="discount-block py-5 flex justify-between border-b border-line">
              <div class="text-title">Discounts</div>
              <div class="text-title"><span>-$</span><span class="discount">0</span><span>.00</span></div>
            </div>
            <div class="ship-block py-5 flex justify-between border-b border-line">
              <div class="text-title">Shipping</div>
              <div class="choose-type flex gap-12">
                <div class="left">
                  <div class="type">
                    <input id="shipping" type="radio" name="ship" />
                    <label class="pl-1" for="shipping">Free Shipping:</label>
                  </div>
                  <div class="type mt-1">
                    <input id="local" type="radio" name="ship" value="{30}" />
                    <label class="text-on-surface-variant1 pl-1" for="local">Local:</label>
                  </div>
                  <div class="type mt-1">
                    <input id="flat" type="radio" name="ship" value="{40}" />
                    <label class="text-on-surface-variant1 pl-1" for="flat">Flat Rate:</label>
                  </div>
                </div>
                <div class="right">
                  <div class="ship">$0.00</div>
                  <div class="local text-on-surface-variant1 mt-1">$30.00</div>
                  <div class="flat text-on-surface-variant1 mt-1">$40.00</div>
                </div>
              </div>
            </div>
            <div class="total-cart-block pt-4 pb-4 flex justify-between">
              <div class="heading5">Total</div>
              <div class=""><span class="heading5">$</span><span class="total-cart heading5">116</span><span class="heading5">.00</span></div>
            </div>
            <div class="block-button flex flex-col items-center gap-y-4 mt-5">
              <a href="checkout.html" class="checkout-btn button-main text-center w-full"> Process To Checkout</a>
              <a class="text-button hover-underline" href="/shop-breadcrumb1.html">Continue shopping </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>