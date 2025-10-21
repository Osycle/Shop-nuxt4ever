export default defineEventHandler(async () => {
  const data = await import('~~/public/data/Product.json')
  return data.default
})