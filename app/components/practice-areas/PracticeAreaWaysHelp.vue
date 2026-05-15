<template>
  <section class="ca-block ca-block--white" :aria-labelledby="headingId">
    <div class="container">
      <h2 :id="headingId" class="ca-h2 ca-center">{{ title }}</h2>
      <div class="ca-ways-grid">
        <article v-for="w in items" :key="w.title" class="ca-way-card">
          <div class="ca-way-card__icon" v-html="w.icon" />
          <h3>{{ w.title }}</h3>
          <p>{{ w.text }}</p>
        </article>
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
  }>(),
  { headingId: 'ways-heading', title: 'Ways We Can Help' },
)
</script>
