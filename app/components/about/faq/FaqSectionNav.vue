<template>
  <nav class="afaq-nav" aria-label="FAQ categories">
    <button
      v-for="section in sections"
      :key="section.id"
      type="button"
      class="afaq-nav__btn"
      :class="{ 'afaq-nav__btn--active': activeId === section.id }"
      :aria-current="activeId === section.id ? 'true' : undefined"
      @click="emit('select', section.id)"
    >
      {{ section.navLabel }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import type { AboutFaqSection } from '~/types/about-faq'

defineProps<{
  sections: AboutFaqSection[]
  activeId: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>
