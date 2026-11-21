<template>
  <div class="article-list">
    <NuxtLink v-for="article in articles" :key="article.slug" :to="'publicPath' in article ? article.publicPath : `/blog/posts/${article.slug}`" class="blog-post-row article-list__row">
      <h3 class="blog-post-row__title">{{ article.title }}</h3>
      <div class="blog-post-row__meta">
        <template v-if="'categoryLabel' in article">
          <BlogTag :label="article.categoryLabel" />
          <BlogReadTime :minutes="article.readMinutes" />
        </template>
        <time v-else-if="article.publishedAt" :datetime="article.publishedAt">{{ new Date(article.publishedAt).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' }) }}</time>
      </div>
    </NuxtLink>
    <p v-if="!articles.length">No articles are available yet.</p>
  </div>
</template>
<script setup lang="ts">
import type { BlogArticle } from '~/types/blog'
import type { ApiArticle } from '~/types/blog-api'
defineProps<{ articles: (BlogArticle | ApiArticle)[] }>()
</script>
<style scoped>
.article-list__row { text-align: left; min-height: 6rem; }
.article-list__row:focus-visible { outline: 2px solid var(--blue); outline-offset: 4px; }
@media (max-width: 640px) {
  .article-list__row .blog-post-row__title { flex-basis: 100%; }
  .article-list__row .blog-post-row__meta { padding-left: 0; }
}
</style>
