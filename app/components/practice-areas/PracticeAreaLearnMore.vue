<template>
  <section class="ca-block ca-learn-section" :aria-labelledby="headingId">
    <div class="container ca-learn">
      <h2 :id="headingId" class="ca-h2">{{ title }}</h2>
      <p class="ca-learn__intro" :class="{ 'ca-learn__intro--tight': introTight }">
        <template v-if="introHtml" v-html="introHtml" />
        <template v-else>{{ intro }}</template>
      </p>
      <div class="ca-learn__cols">
        <ul class="ca-learn__list">
          <li v-for="(link, i) in visibleLeft" :key="'l-' + i">
            <a :href="link.href" class="ca-learn__link">
              {{ link.title }} <span class="ca-learn__chev" aria-hidden="true">›</span>
            </a>
          </li>
        </ul>
        <ul class="ca-learn__list">
          <li v-for="(link, i) in visibleRight" :key="'r-' + i">
            <a :href="link.href" class="ca-learn__link">
              {{ link.title }} <span class="ca-learn__chev" aria-hidden="true">›</span>
            </a>
          </li>
        </ul>
      </div>
      <button v-if="hasMore && !expanded" type="button" class="ca-learn__more" @click="expanded = true">
        {{ moreLabel }}
        <span class="ca-learn__more-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" stroke-width="2.5">
            <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { LearnLink } from '~/types/practice-area'

const props = withDefaults(
  defineProps<{
    headingId?: string
    title: string
    intro?: string
    introHtml?: string
    introTight?: boolean
    leftLinks: LearnLink[]
    rightLinks: LearnLink[]
    initialCount?: number
    moreLabel?: string
  }>(),
  {
    headingId: 'learn-more-heading',
    initialCount: 5,
    moreLabel: 'Load more',
    introTight: false,
  },
)

const expanded = ref(false)

const hasMore = computed(
  () => props.leftLinks.length > props.initialCount || props.rightLinks.length > props.initialCount,
)

const visibleLeft = computed(() =>
  props.leftLinks.slice(0, expanded.value ? props.leftLinks.length : props.initialCount),
)
const visibleRight = computed(() =>
  props.rightLinks.slice(0, expanded.value ? props.rightLinks.length : props.initialCount),
)
</script>
