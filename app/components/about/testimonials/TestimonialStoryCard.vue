<template>
  <article
    class="tst-story-card"
    :class="{ 'tst-story-card--large': story.variant === 'large' }"
  >
    <img
      class="tst-story-card__img"
      :src="story.imageSrc"
      :alt="story.imageAlt"
      width="640"
      height="480"
      loading="lazy"
      decoding="async"
    >
    <h3 class="tst-story-card__title">{{ story.title }}</h3>
    <p class="tst-story-card__text">{{ story.text }}</p>
  </article>
</template>

<script setup lang="ts">
import type { TestimonialStory } from '~/types/testimonials'

defineProps<{
  story: TestimonialStory
}>()
</script>
