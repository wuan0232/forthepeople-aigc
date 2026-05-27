<template>
  <article class="blog-cat-card" :class="{ 'blog-cat-card--media': post.imageSrc }">
    <NuxtLink v-if="post.imageSrc" :to="post.href" class="blog-cat-card__media" tabindex="-1">
      <img
        class="blog-cat-card__img"
        :src="post.imageSrc"
        :alt="post.imageAlt ?? ''"
        loading="lazy"
      />
    </NuxtLink>

    <div class="blog-cat-card__body">
      <div class="blog-cat-card__meta">
        <time class="blog-cat-card__date" :datetime="post.publishedIso">{{ post.publishedAt }}</time>
        <span class="blog-cat-card__tag">{{ post.categoryLabel }}</span>
      </div>

      <NuxtLink :to="post.href" class="blog-cat-card__title-link">
        <h2 class="blog-cat-card__title">{{ post.title }}</h2>
      </NuxtLink>

      <p class="blog-cat-card__summary">{{ summaryText }}</p>
    </div>

    <footer class="blog-cat-card__foot">
      <NuxtLink :to="post.href" class="blog-cat-card__cta">Read article details</NuxtLink>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { BlogCategoryCard } from '~/types/blog'

const props = defineProps<{
  post: BlogCategoryCard
}>()

const summaryText = computed(() => {
  const text = props.post.summary?.trim()
  return text || 'No summary available.'
})
</script>
