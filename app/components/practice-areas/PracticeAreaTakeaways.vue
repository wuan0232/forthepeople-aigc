<template>
  <section class="ca-block ca-block--soft ca-takeaways-band" :aria-labelledby="headingId">
    <div class="container ca-takeaways">
      <h2 :id="headingId" class="ca-h2 ca-takeaways__title">{{ title }}</h2>
      <div class="ca-takeaways__grid">
        <div v-for="b in blocks" :key="b.title" class="ca-takeaway">
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/practice-area'

defineProps<{
  headingId?: string
  title: string
  blocks: TextBlock[]
}>()
</script>
