<template>
  <section class="ca-block ca-places-wrap" :aria-labelledby="headingId">
    <div class="container">
      <h2 :id="headingId" class="ca-h2 ca-center">{{ title }}</h2>
      <div class="ca-places-grid">
        <article v-for="p in visibleItems" :key="p.title" class="ca-place-card">
          <div class="ca-place-card__head">
            <span v-if="p.icon" class="ca-place-card__icon" v-html="p.icon" />
            <h3>{{ p.title }}</h3>
          </div>
          <p>{{ p.text }}</p>
        </article>
      </div>
      <div v-if="expandable && !expanded" class="ca-places-more-wrap">
        <button type="button" class="ca-learn__more" @click="expanded = true">
          {{ moreLabel }}
          <span class="ca-learn__more-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" stroke-width="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IconCard } from '~/types/practice-area'

const props = withDefaults(
  defineProps<{
    headingId: string
    title: string
    items: IconCard[]
    /** When set, only show this many until the expandable CTA is clicked. Omit to show all. */
    initialVisible?: number
    expandable?: boolean
    moreLabel?: string
  }>(),
  { expandable: false, moreLabel: 'Learn More' },
)

const expanded = ref(false)

const visibleItems = computed(() => {
  if (!props.expandable || props.initialVisible == null) return props.items
  const limit = expanded.value ? props.items.length : props.initialVisible
  return props.items.slice(0, limit)
})
</script>
