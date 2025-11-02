import { useVfm } from 'vue-final-modal'


export const useProducts = ()=>{
  
  const vfm = useVfm()
  const store = useMainStore()
  const config = useRuntimeConfig()
  const cart = useStoreCart()

  const getProductsV2 = async (params = {}) => {
    try {
      const data = await $fetch('http://127.0.0.1:8000/api/v1/productlist/', {
        method: "GET",
        query: params,
        // body: { categories: ['phones', 'laptops'] }
      })
      console.log(data, 'ssdsdsdsds')
      // if (error.value) throw error.value
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const getProducts = async (params = {}) => {
    try {
      const { data, error } = await useFetch('/api/products', {
        method: "GET",
        query: params,
        // body: { categories: ['phones', 'laptops'] }
      })
      if (error.value) throw error.value
      return data.value
    } catch (error) {
      console.log(error)
    }
  }
  const getProduct = async (id: number) => {
    try {
      // const { data, error } = await useFetch(`${config.public.apiBase}/data/Product.json`)
      const { data, error } = await useFetch('/api/products')
      return data.value.find(i => i.id == id)
    } catch (error) {
      console.log(error)
    }
  }
  
  const getCounts = async (params = {}) => {
    try {
      const { data, error } = await useFetch('/api/counts', {
        method: "GET",
        query: params,
      })
      if (error.value) throw error.value
      return data.value
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddToCart = (product: object, nocheck: boolean) =>{
    cart.addToCart(product, nocheck)
    vfm.close('quickview')
    vfm.open('cart');
  }
  const handleQuickview = async (product: object) => {
    const existing = cart.existing(product)
    if(existing)
      product = existing
    else
      product = {...product, quantityCur: 1}
    store.addQuickview(product)
    
    vfm.close('cart');
    vfm.open('quickview')

  };


  return { 
      handleAddToCart,
      handleQuickview, 
      getProducts,
      getProduct,
      getCounts,

      getProductsV2,
  }
}