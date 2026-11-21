<template>
  <article
    class="blog-card"
    :class="{ 'blog-card--featured': featured, 'blog-card--compact': compact }"
  >
    <div class="blog-card__body">
      <p class="recovery-eyebrow">{{ post.eyebrow }}</p>
      <h3 class="blog-card__title">{{ post.title }}</h3>
      <p class="recovery-description">{{ post.description }}</p>
      <ul v-if="post.points?.length" class="recovery-points"><li v-for="point in post.points" :key="point">{{ point }}</li></ul>
      <p class="recovery-note">{{ post.note }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
  post: BlogPost & { eyebrow?: string; description?: string; points?: string[]; note?: string }
  featured?: boolean
  compact?: boolean
}>()
</script>
<style scoped>
.blog-card { height: auto; flex: 1; border: 1px solid #d4e4f5; box-shadow: 0 6px 22px rgb(15 35 65 / 5%); background: #fff; }
.blog-card__body { padding: clamp(1.4rem, 3vw, 2rem); gap: .8rem; }
.blog-card--featured { background: #102e54; border-color: #102e54; color: #fff; }
.blog-card--featured .blog-card__body { padding: clamp(1.6rem, 3.5vw, 2.75rem); justify-content: center; }
.blog-card__title { font-size: clamp(1.05rem, 1.7vw, 1.35rem); }
.blog-card--featured .blog-card__title { color: #fff; font-size: clamp(1.6rem, 2.6vw, 2.2rem); max-width: 23ch; }
.recovery-eyebrow { margin: 0 0 .2rem; color: #0066cc; font-size: .72rem; letter-spacing: .12em; font-weight: 800; }
.blog-card--featured .recovery-eyebrow { color: #9ed2ff; }
.recovery-description { margin: 0; color: #435a73; font-size: .95rem; line-height: 1.7; max-width: 52ch; }
.blog-card--featured .recovery-description { color: #d9e7f6; font-size: 1rem; }
.recovery-points { margin: .5rem 0; padding-left: 1.2rem; line-height: 1.7; }
.recovery-points li { padding: .3rem 0 .3rem .25rem; }
.recovery-points li::marker { color: #85c9ff; }
.recovery-note { margin: .5rem 0 0; padding-top: .85rem; border-top: 1px solid #d6e5f5; color: #0066cc; font-size: .8rem; font-weight: 600; line-height: 1.6; }
.blog-card--featured .recovery-note { color: #b3d9fb; border-color: #375577; }
.blog-card--compact:last-child { background: #e5f1ff; }
</style>
