<template>
  <div :aria-busy="status === 'pending'">
    <div v-if="error" role="alert" class="feed-message">
      <p>Articles could not be loaded. Please try again.</p>
      <button type="button" @click="refresh()">Retry</button>
    </div>
    <p v-else-if="status === 'pending' && !data" role="status">Loading articles…</p>
    <template v-else>
      <BlogArticleList :articles="articles" />
      <nav v-if="!latest && totalPages > 1" class="feed-pages" aria-label="Article pages">
        <NuxtLink v-if="page > 1" :to="{ path: '/blog/posts', query: { page: page - 1 } }">Previous</NuxtLink>
        <span>Page {{ page }} of {{ totalPages }}</span>
        <NuxtLink v-if="page < totalPages" :to="{ path: '/blog/posts', query: { page: page + 1 } }">Next</NuxtLink>
      </nav>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { ApiArticleList } from '~/types/blog-api'
import { blogMedicalArticles } from '~/constants/blog'
const props = defineProps<{ latest?: boolean }>()
const route = useRoute()
const page = computed(() => props.latest ? 1 : Math.max(1, Math.floor(Number(route.query.page) || 1)))
// Fetch every page for Latest so sorting does not depend on undocumented API ordering.
const { data, error, status, refresh } = await useAsyncData(
  () => props.latest ? 'blog-latest-api' : `blog-all-api-${page.value}`,
  async () => {
    const first = await $fetch<ApiArticleList>('/api/blog/articles', { query: { page: page.value, pageSize: props.latest ? 100 : 12 } })
    if (!props.latest) return first
    const items = [...first.items]
    for (let next = 2; next <= Math.ceil(first.total / 100); next++) {
      const more = await $fetch<ApiArticleList>('/api/blog/articles', { query: { page: next, pageSize: 100 } })
      items.push(...more.items)
    }
    return { ...first, items }
  },
)
const articles = computed(() => {
  if (!data.value || error.value) return []
  if (data.value.total === 0) {
    const local = [...blogMedicalArticles].sort((a, b) => b.publishedIso.localeCompare(a.publishedIso))
    return props.latest ? local.slice(0, 5) : local.slice((page.value - 1) * 12, page.value * 12)
  }
  const items = [...data.value.items]
  return props.latest ? items.sort((a, b) => (Date.parse(b.publishedAt ?? '') || 0) - (Date.parse(a.publishedAt ?? '') || 0)).slice(0, 5) : items
})
const totalPages = computed(() => Math.max(1, Math.ceil((data.value?.total || blogMedicalArticles.length) / 12)))
// /blog is kept alive to preserve scroll; revalidate when the visitor returns.
let activated = false
onActivated(() => {
  if (activated) refresh()
  activated = true
})
</script>
<style scoped>
.feed-message { padding: 2rem 0; }
.feed-message button { color: #0066cc; background: white; border: 1px solid #0066cc; padding: .6rem 1.2rem; cursor: pointer; }
.feed-pages { display: flex; justify-content: center; gap: 1.5rem; padding: 2rem 0; }
.feed-pages a { color: #0066cc; }
</style>
