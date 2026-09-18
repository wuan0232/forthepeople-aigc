<template>
  <section
    class="ca-block"
    :class="variant === 'soft' ? 'ca-block--soft' : 'ca-block--white'"
    :aria-labelledby="headingId"
  >
    <div class="container">
      <h2 :id="headingId" class="ca-h2 ca-center">{{ title }}</h2>
      <div class="ca-ways-grid">
        <component
          :is="w.href ? 'NuxtLink' : 'article'"
          v-for="w in items"
          :key="w.title"
          :to="w.href"
          class="ca-way-card"
          :class="{ 'ca-way-card--link': w.href }"
        >
          <div class="ca-way-card__icon" v-html="w.icon" />
          <h3>{{ w.title }}</h3>
          <p>{{ w.text }}</p>
          <span v-if="w.href" class="link-arrow ca-way-card__more">了解更多</span>
        </component>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IconCard } from '~/types/practice-area'

withDefaults(
  defineProps<{
    headingId?: string
    title?: string
    items: IconCard[]
    /** Soft blue band background (e.g. dangerous drugs landing). */
    variant?: 'white' | 'soft'
  }>(),
  { headingId: 'ways-heading', title: 'Ways We Can Help', variant: 'white' },
)
</script>
