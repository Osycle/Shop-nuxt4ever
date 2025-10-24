export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  // const body = await readBody(event)
  const data = await import('~~/public/data/Product.json')

  const filtered = data.default.filter(p => 
    !query.key || p[query.key] === query.value
  )

  return filtered
})