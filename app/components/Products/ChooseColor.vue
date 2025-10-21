<script setup>
  const { product } = defineProps({
    product: Object
  })
  const colors = product.variation
  const currentColor = ref(product.variation?.[0])
</script>
<template>
  <div class="choose-color">
    <template v-if="colors">
      <div class="text-title">Colors: <span class="text-title color">{{ currentColor.color }}</span></div>
      <div class="list-color flex items-center gap-2 flex-wrap mt-3">
        <!-- color-item -->
        <div 
          v-for="(item, key) in colors" :key="key"
          class="color-item w-12 h-12 rounded-xl duration-300 relative active"
          @click="currentColor = item"
        >
          <img :src="item.colorImage" alt="color" class="rounded-xl" />
          <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
            {{ item.color }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>
        Цветов нет
      </div>
    </template>
  </div>
</template>