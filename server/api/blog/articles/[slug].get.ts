export default defineEventHandler(async event => {
  setHeader(event, 'Cache-Control', 'no-store')
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Missing article' })
  const result: any = await readBlogApi(`/${encodeURIComponent(slug)}`)
  if (typeof result?.bodyHtml !== 'string' || typeof result?.title !== 'string') {
    throw createError({ statusCode: 502, statusMessage: 'Invalid article response' })
  }
  return result
})
