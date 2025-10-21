<script setup>
  const breadcrumbs = toRef(usePageBreadcrumbs(), 'items')
</script>

<template>
  <div class="breadcrumb-block style-shared" >
    <div class="breadcrumb-main bg-linear overflow-hidden" v-if="breadcrumbs && breadcrumbs.length">
      <div class="container lg:pt-[134px] pt-24 pb-10 relative">
        <div class="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
          <div class="text-content">
            <div class="heading2 text-center">{{breadcrumbs[breadcrumbs.length-1].name}}</div>
            <div class="link flex items-center justify-center gap-1 caption1 mt-3">
              <NuxtLink to="/">Homepage</NuxtLink>
              <span v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center gap-2">
                <i class="ph ph-caret-right text-sm text-secondary2"></i>
                <div class="text-secondary2 capitalize">
                  <NuxtLink :to="crumb.path">{{ crumb.name }}</NuxtLink>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>