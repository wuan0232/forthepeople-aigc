<template>
  <div v-if="wrapStack" class="container ca-type-stack">
    <section class="ca-type-card" :aria-labelledby="headingId">
      <div class="ca-split">
        <h2 :id="headingId" class="ca-split__title">{{ title }}</h2>
        <div class="ca-split__grid">
          <article v-for="item in items" :key="item.title" class="ca-split__cell">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
  <section v-else class="ca-type-card" :aria-labelledby="headingId">
    <div class="ca-split">
      <h2 :id="headingId" class="ca-split__title">{{ title }}</h2>
      <div class="ca-split__grid">
        <article v-for="item in items" :key="item.title" class="ca-split__cell">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/practice-area'

withDefaults(
  defineProps<{
    headingId: string
    title: string
    items: TextBlock[]
    wrapStack?: boolean
  }>(),
  { wrapStack: true },
)
</script>
