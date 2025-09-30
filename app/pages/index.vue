<script setup lang="ts">
import { Collections } from '#components';

// import { WhatNew } from '#components';

  const breadcrumbs = usePageBreadcrumbs()
  breadcrumbs.setItems([])
</script>

<template>
  <main>
    <ClientOnly>
      <Slider />
      <WhatNew />
      <Collections />
    </ClientOnly>
  </main>
</template>