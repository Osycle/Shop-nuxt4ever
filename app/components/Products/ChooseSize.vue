<script setup>
  const { product } = defineProps({
    product: Object
  })
  const sizes = product.sizes
  const currentSize = ref(product.sizes?.[0])
</script>
<template>
  <div class="choose-size mt-5" v-if="sizes">
    <div class="heading flex items-center justify-between">
      <div class="text-title">Size: <span class="text-title size"></span></div>
      <div class="caption1 size-guide text-red underline">Size Guide</div>
    </div>
    <div class="list-size flex items-center gap-2 flex-wrap mt-3">
      <div 
        v-for="(item, key) in sizes" :key="key"
        :class="{'active': currentSize.name == item.name}"
        class="size-item w-12 h-12 flex items-center justify-center text-button rounded-full bg-white border border-line"
        @click="currentSize = item"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>