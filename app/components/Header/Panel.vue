<script setup>
  const cart = useStoreCart()  
</script>

<template>
  <div class="max-md:hidden search-icon flex items-center cursor-pointer relative">
    <i class="ph-bold ph-magnifying-glass text-2xl"></i>
    <div class="line absolute bg-line w-px h-6 -right-6"></div>
  </div>
  <div class="list-action flex items-center gap-4">
    <div class="user-icon flex items-center justify-center cursor-pointer">
      <i class="ph-bold ph-user text-2xl"></i>
      <div class="login-popup absolute top-[74px] w-[320px] p-7 rounded-xl bg-white box-shadow-small">
        <a href="login.html" class="button-main w-full text-center">Login</a>
        <div class="text-secondary text-center mt-3 pb-4">
          Don’t have an account?
          <a href="register.html" class="text-black pl-1 hover:underline">Register </a>
        </div>
        <div class="bottom pt-4 border-t border-line"></div>
        <a href="#!" class="body1 hover:underline">Support</a>
      </div>
    </div>
    <div class="max-md:hidden wishlist-icon flex items-center relative cursor-pointer">
      <i class="ph-bold ph-heart text-2xl"></i>
      <span class="quantity wishlist-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
    </div>
    <div 
      @click="$vfm.open('cart')"
      class="max-md:hidden cart-icon flex items-center relative cursor-pointer"
    >
      <i class="ph-bold ph-handbag text-2xl"></i>
      <span class="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">
        {{ cart.items.length }}
      </span>
    </div>
  </div>
</template>