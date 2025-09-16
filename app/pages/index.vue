<script setup lang="ts">
// import { WhatNew } from '#components';

  const breadcrumbs = usePageBreadcrumbs()
  breadcrumbs.setItems([])
</script>

<template>
  <main>
    <ClientOnly>
      <Slider />
      <WhatNew />
    </ClientOnly>
  </main>
</template>