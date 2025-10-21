<script setup>
  const breadcrumbs = toRef(useProductsBreadcrumbs(), 'items')
</script>

<template>
  <div class="breadcrumb-product" v-if="breadcrumbs.length">
    <div class="main bg-surface md:pt-[88px] pt-[70px] pb-[14px]">
      <div class="container flex items-center justify-between flex-wrap gap-3">
        <div class="left flex items-center gap-1">
          <NuxtLink to="/" class="caption1 text-secondary2 hover:underline">Главная</NuxtLink>
          <i class="ph ph-caret-right text-xs text-secondary2"></i>
          <template v-for="(item, key) in breadcrumbs" :key="item.name">
            <NuxtLink :to="`${item.path}`" class="caption1 capitalize text-secondary2 hover:underline">
              {{ item.name }}
            </NuxtLink>
            <i v-if="key != breadcrumbs.length-1" class="ph ph-caret-right text-xs text-secondary2"></i>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>