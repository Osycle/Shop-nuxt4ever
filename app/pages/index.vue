<script setup>
  usePageBreadcrumbs().setItems([])
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