<template>
  <main class="remote-article">
    <div v-if="error" class="container" role="alert"><h1>Article temporarily unavailable</h1><p>Please try again in a moment.</p><button @click="refresh()">Retry</button></div>
    <article v-else-if="article">
      <header><div class="container">
        <p class="article-meta"><span v-if="article.authorName">{{ article.authorName }}</span><time v-if="article.publishedAt" :datetime="article.publishedAt">{{ new Date(article.publishedAt).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }) }}</time></p>
        <h1>{{ article.title }}</h1><p>{{ article.excerpt }}</p>
      </div></header>
      <div class="container article-content"><div class="article-html" v-html="body.html" /><NuxtLink to="/blog/posts">Back to All Posts</NuxtLink></div>
    </article>
  </main>
</template>
<script setup lang="ts">
import type { ApiArticle } from '~/types/blog-api'
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: article, error, refresh } = await useAsyncData(() => `blog-article-${slug.value}`, () => $fetch<ApiArticle>(`/api/blog/articles/${encodeURIComponent(slug.value)}`))
const event = import.meta.server ? useRequestEvent() : undefined
function checkStatus() {
  const code = error.value?.statusCode ?? (error.value as any)?.data?.statusCode
  if (code === 404 || code === 410) throw createError({ statusCode: code, statusMessage: code === 410 ? 'Article no longer available' : 'Article not found', fatal: true })
  if (event) setResponseStatus(event, error.value ? 503 : 200)
}
checkStatus()
watch(error, checkStatus)
async function redirectCanonical() {
  const path = article.value?.publicPath
  if (path && /^\/blog\/(?!\/)[^?#]+$/.test(path) && path !== route.path) await navigateTo(path, { redirectCode: 301, replace: true })
}
await redirectCanonical()
watch(article, redirectCanonical)
const body = computed(() => {
  const schemas: string[] = []
  const html = (article.value?.bodyHtml ?? '').replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi, (_match, attrs, content) => {
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) {
      try { schemas.push(JSON.stringify(JSON.parse(content))) } catch { /* Invalid JSON-LD is omitted. */ }
    }
    return ''
  })
  return { html, schemas: [...new Set(schemas)] }
})
useHead(() => ({
  title: article.value?.metaTitle || article.value?.title || 'Article | For The People Clinic',
  link: article.value?.canonicalUrl ? [{ rel: 'canonical', href: article.value.canonicalUrl }] : [],
  meta: [
    { name: 'description', content: article.value?.metaDescription || article.value?.excerpt || '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: article.value?.metaTitle || article.value?.title || '' },
    { property: 'og:description', content: article.value?.metaDescription || article.value?.excerpt || '' },
    { property: 'og:url', content: article.value?.canonicalUrl || '' },
    ...(article.value?.coverImage ? [{ property: 'og:image', content: article.value.coverImage.url }] : []),
    { name: 'twitter:card', content: article.value?.coverImage ? 'summary_large_image' : 'summary' },
  ],
  script: body.value.schemas.map((json, index) => ({ key: `blog-schema-${index}`, type: 'application/ld+json', innerHTML: json.replace(/</g, '\\u003c') })),
}))
</script>
<style scoped>
.remote-article { color: #0b2348; }
.remote-article header { padding: 3rem 0; background: #f0f7ff; }
.remote-article .container { max-width: 54rem; }
.remote-article h1 { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2; }
.article-meta { display: flex; flex-wrap: wrap; gap: 1rem; }
.article-content { padding-top: 2rem; padding-bottom: 3rem; }
.article-html { line-height: 1.8; overflow-wrap: anywhere; }
.article-html :deep(img) { max-width: 100%; height: auto; }
.article-html :deep(figure) { margin: 1.5rem 0; }
.article-html :deep(figcaption) { font-size: .9rem; color: #52647a; }
.article-html :deep(table) { display: block; max-width: 100%; overflow-x: auto; border-collapse: collapse; margin: 1.5rem 0; }
.article-html :deep(th), .article-html :deep(td) { padding: .75rem; border: 1px solid #d1dfef; min-width: 8rem; }
.article-html :deep(blockquote), .article-html :deep(aside), .article-html :deep(.callout) { margin: 1.5rem 0; padding: 1rem 1.5rem; border-left: 3px solid #0066cc; background: #f0f7ff; }
.article-html :deep(a), .article-content > a { color: #0066cc; text-decoration: underline; }
.article-html :deep(ul), .article-html :deep(ol) { padding-left: 1.5rem; }
.article-html :deep(h2), .article-html :deep(h3) { line-height: 1.3; margin-top: 2rem; }
</style>
