<template>
  <section class="ca-block ca-results-wrap" aria-labelledby="pa-results-heading">
    <div class="container">
      <h2 id="pa-results-heading" class="ca-h2 ca-center">Our Results</h2>
      <MediaCarousel
        :count="pages.length"
        mode="paged"
        :region-label="ariaLabel"
        dots-label="Results carousel position"
        strip-class="ca-results-strip"
        dots-class="ca-results-dots"
        dot-class="ca-results-dot"
        active-dot-class="ca-results-dot--on"
        dragging-class="ca-results-strip--dragging"
        dot-label-prefix="Results slide"
        dot-key-prefix="rdot"
        dot-style-mode="dist"
      >
        <div v-for="(page, pi) in pages" :key="'page-' + pi" class="ca-results-page">
          <article v-for="r in page" :key="r.amount + r.location" class="ca-results-item">
            <strong class="ca-results-item__amount">{{ r.amount }}</strong>
            <div class="ca-results-item__meta">
              <span class="ca-results-item__type">{{ r.type ?? defaultType }}</span>
              <span class="ca-results-item__loc">{{ r.location }}</span>
            </div>
          </article>
        </div>
      </MediaCarousel>
      <p class="ca-disclaimer ca-disclaimer--center">
        Individual situations vary. This information is educational and not a substitute for personalized medical care.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CaseResult } from '~/types/practice-area'

const props = withDefaults(
  defineProps<{
    results: CaseResult[]
    perPage?: number
    defaultType?: string
    ariaLabel?: string
  }>(),
  {
    perPage: 3,
    defaultType: 'Trucking Accident',
    ariaLabel: 'Case results',
  },
)

const pages = computed(() => {
  const out: CaseResult[][] = []
  for (let i = 0; i < props.results.length; i += props.perPage) {
    out.push(props.results.slice(i, i + props.perPage))
  }
  return out
})

</script>
