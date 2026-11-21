export async function readBlogApi(path: string, query?: Record<string, number>) {
  const config = useRuntimeConfig()
  try {
    return await $fetch(`${config.blogApiBase}/blog/sites/${encodeURIComponent(config.blogSite)}/articles${path}`, {
      query, timeout: 15000, retry: 0, headers: { 'Cache-Control': 'no-cache' },
    })
  } catch (error: any) {
    const status = error?.response?.status ?? error?.statusCode
    throw createError({ statusCode: status === 404 || status === 410 ? status : 503,
      statusMessage: status === 404 ? 'Article not found' : status === 410 ? 'Article no longer available' : 'Blog service temporarily unavailable' })
  }
}
