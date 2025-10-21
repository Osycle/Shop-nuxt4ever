import { useVfm } from 'vue-final-modal'


export const useProducts = ()=>{
  
  const vfm = useVfm()
  const store = useMainStore()
  const config = useRuntimeConfig()
  const cart = useStoreCart()

  const getProducts = async () => {
    // const { data, error } = await useFetch(`${config.public.apiBase}/products`)
    try {
      // const { data, error } = await useFetch(`${config.public.apiBase}/data/Product.json`)
      const { data, error } = await useFetch('/api/products')
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
    
    // if (error.value) throw error.value
    
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
  }
}