export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const data = await import('~~/public/data/Product.json')

  const filtered = data.default.filter(p => 
    !query.category || p.category === query.category
  )

  return filtered
})