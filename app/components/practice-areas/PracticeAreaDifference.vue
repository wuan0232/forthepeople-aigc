<template>
  <section
    class="ca-block"
    :class="variant === 'band' ? 'ca-diff-band' : 'ca-block--white'"
    :aria-labelledby="headingId"
  >
    <div class="container ca-diff">
      <h2 :id="headingId" class="ca-h2 ca-diff__title">{{ title }}</h2>
      <div class="ca-diff__grid">
        <div v-for="d in blocks" :key="d.title" class="ca-diff__cell">
          <h3>{{ d.title }}</h3>
          <p>{{ d.text }}</p>
        </div>
      </div>
      <p class="ca-disclaimer ca-disclaimer--center">
        Individual situations vary. This information is educational and not a substitute for personalized medical care.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TextBlock } from '~/types/practice-area'

withDefaults(
  defineProps<{
    headingId: string
    title: string
    blocks: TextBlock[]
    /** `band` = gray background (slip/truck); `white` = white section (car). */
    variant?: 'band' | 'white'
  }>(),
  { variant: 'band' },
)
</script>
