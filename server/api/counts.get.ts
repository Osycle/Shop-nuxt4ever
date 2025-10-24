export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const data = await import('~~/public/data/Product.json')
  
  const groups = data.default.reduce((acc, item) => {
    const keyValue = item[query.key]
    if (keyValue !== undefined) {
      acc[keyValue] = (acc[keyValue] || 0) + 1
    }
    return acc
  }, {})
  
  const result = Object.entries(groups)
  .map(([key, count]) => ({
    key,
    count
  }))
  .sort((a, b) => b.count - a.count); // Сортировка оп убыванию
  
  return result
})