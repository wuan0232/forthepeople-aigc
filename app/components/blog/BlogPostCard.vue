<template>
  <NuxtLink
    :to="post.href"
    class="blog-card"
    :class="{ 'blog-card--featured': featured, 'blog-card--compact': compact }"
  >
    <figure v-if="post.imageSrc" class="blog-card__media">
      <img class="blog-card__img" :src="post.imageSrc" :alt="post.imageAlt ?? ''" loading="lazy" />
    </figure>
    <div class="blog-card__body">
      <h3 class="blog-card__title">{{ post.title }}</h3>
      <div class="blog-card__meta">
        <BlogReadTime :minutes="post.readMinutes" />
        <BlogTag :label="post.tag" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
  post: BlogPost
  featured?: boolean
  compact?: boolean
}>()
</script>
