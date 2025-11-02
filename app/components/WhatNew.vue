
<script setup>



// import { onMounted, <r></r>ef, reactive } from 'vue'
// const { data, pending, error } = await useFetch('/posts')
// import { httpGet, httpPost } from '~/utils/http'

const { getProducts, getProductsV2 } = useProducts()
const productsAll = await getProducts()
const productsZ = await getProductsV2()
console.log(productsZ)


const products = reactive({});
[ "top", "t-shirt", "dress", "sets", "shirt"].forEach(e=>{
  products[e] = productsZ.filter((product) => product.product_type.name === e)?.slice(0, 40)
})
onMounted(() => {
})

</script>

<template>
  <div class="what-new-block filter-product-block md:pt-20 pt-10">
    <div class="container">
      <ProductsList :products="productsZ"/>
      <!-- <UITabs :products="products"/> -->
    </div>
  </div>
</template>