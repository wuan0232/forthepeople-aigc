export default defineEventHandler(async event => {
  setHeader(event, 'Cache-Control', 'no-store')
  const query = getQuery(event)
  const page = Number(query.page ?? 1)
  const pageSize = Number(query.pageSize ?? 12)
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid pagination' })
  }
  const result: any = await readBlogApi('', { page, pageSize })
  if (!Array.isArray(result?.items) || !Number.isInteger(result.total) || result.total < 0) {
    throw createError({ statusCode: 502, statusMessage: 'Invalid blog response' })
  }
  return result
})
