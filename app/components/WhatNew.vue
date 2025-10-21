
<script setup>



// import { onMounted, <r></r>ef, reactive } from 'vue'
// const { data, pending, error } = await useFetch('/posts')
// import { httpGet, httpPost } from '~/utils/http'

const { getProducts } = useProducts()
const productsAll = await getProducts()



const products = reactive({});
[ "top", "t-shirt", "dress", "sets", "shirt"].forEach(e=>{
  products[e] = productsAll.filter((product) => product.type === e).slice(0, 4)
})
onMounted(() => {
})

</script>

<template>
  <div class="what-new-block filter-product-block md:pt-20 pt-10">
    <div class="container">
      <UITabs :products="products"/>
    </div>
  </div>
</template>