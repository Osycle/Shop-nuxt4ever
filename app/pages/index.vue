<script setup>
  usePageBreadcrumbs().setItems([])
  useProductsBreadcrumbs().setItems([])
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