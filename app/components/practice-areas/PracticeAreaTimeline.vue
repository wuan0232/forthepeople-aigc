<template>
  <section class="ca-block ca-block--soft ca-after" :aria-labelledby="headingId">
    <div class="container ca-after__grid">
      <figure v-if="graphicSrc" class="ca-after__figure">
        <img
          class="ca-after__graphic"
          :src="graphicSrc"
          :alt="graphicAlt ?? title + ' — illustrated timeline of four steps'"
          width="531"
          height="163"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div v-else class="ca-timeline">
        <div class="ca-timeline__line" aria-hidden="true" />
        <div class="ca-timeline__nodes">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="ca-timeline__item"
            :data-pos="i % 2 === 0 ? 'top' : 'bottom'"
          >
            <div class="ca-timeline__node" aria-hidden="true" />
            <div class="ca-step-card">
              <div class="ca-step-card__icon" v-html="step.icon" />
              <p>{{ step.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ca-after__copy">
        <h2 :id="headingId" class="ca-h2">{{ title }}</h2>
        <p>{{ description }}</p>
        <a href="tel:+19293993134" class="link-arrow">
          {{ linkLabel }}
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 10L10 2M10 2H4M10 2V8" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineStep } from '~/types/practice-area'

withDefaults(
  defineProps<{
    headingId?: string
    title: string
    description: string
    steps: TimelineStep[]
    linkLabel?: string
    /** When set, replaces the built-in timeline with this image (e.g. `/after-incident-four-steps-timeline.svg`). */
    graphicSrc?: string
    graphicAlt?: string
  }>(),
  { headingId: 'steps-heading', linkLabel: 'View guide' },
)
</script>
