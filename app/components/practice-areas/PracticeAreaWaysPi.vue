<template>
  <section
    class="ca-block ca-ways-pi"
    :class="variant === 'white' ? 'ca-block--white' : 'ca-block--soft'"
    :aria-labelledby="headingId"
  >
    <div class="container">
      <h2 :id="headingId" class="ca-h2 ca-center">{{ title }}</h2>
      <p v-if="intro" class="ca-meet__intro ca-meet__intro--center">{{ intro }}</p>
      <div class="ca-ways-pi__cards">
        <article v-for="card in cards" :key="card.title" class="ca-ways-pi-card">
          <div class="ca-ways-pi-card__icon" v-html="card.icon" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <a :href="card.linkHref ?? '#'" class="ca-ways-pi-card__link">
            {{ card.linkLabel ?? 'Learn More' }}
            <span class="icon-box" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="8" height="8">
                <path d="M2 10L10 2M10 2H4M10 2V8" />
              </svg>
            </span>
          </a>
        </article>
      </div>

      <div class="ca-case-types">
        <div class="ca-case-types__head">
          <h3 class="ca-case-types__title">{{ caseTypesTitle }}</h3>
          <a :href="viewAllHref" class="ca-case-types__view">{{ viewAllLabel }}</a>
        </div>
        <ul class="ca-case-types__grid">
          <li v-for="t in caseTypes" :key="t">{{ t }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WaysPiCard } from '~/types/practice-area'

withDefaults(
  defineProps<{
    headingId?: string
    title?: string
    intro?: string
    variant?: 'soft' | 'white'
    cards: WaysPiCard[]
    caseTypes: string[]
    caseTypesTitle?: string
    viewAllLabel?: string
    viewAllHref?: string
  }>(),
  {
    headingId: 'ways-pi-heading',
    title: 'Ways We Can Help',
    variant: 'soft',
    caseTypesTitle: 'Over 50 Case Types, Like:',
    viewAllLabel: 'View All',
    viewAllHref: '#practice',
  },
)
</script>
