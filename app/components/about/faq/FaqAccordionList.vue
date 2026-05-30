<template>
  <div class="afaq-acc" role="list">
    <div v-for="(item, i) in items" :key="item.q" class="afaq-acc__item" role="listitem">
      <button
        type="button"
        class="afaq-acc__trigger"
        :class="{ 'afaq-acc__trigger--open': isOpen(i) }"
        :aria-expanded="isOpen(i)"
        :aria-controls="panelId(i)"
        :id="headId(i)"
        @click="emitToggle(i)"
      >
        <span class="afaq-acc__q">{{ item.q }}</span>
        <span class="afaq-acc__icon" aria-hidden="true">{{ isOpen(i) ? '−' : '+' }}</span>
      </button>
      <div
        v-show="isOpen(i)"
        :id="panelId(i)"
        class="afaq-acc__panel"
        :aria-labelledby="headId(i)"
      >
        <p v-for="(para, pi) in item.paragraphs" :key="pi">{{ para }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AboutFaqItem } from '~/types/about-faq'

const props = defineProps<{
  sectionId: string
  items: AboutFaqItem[]
  openKey: string | null
}>()

const emit = defineEmits<{
  toggle: [index: number]
}>()

function itemKey(index: number) {
  return `${props.sectionId}:${index}`
}

function isOpen(index: number) {
  return props.openKey === itemKey(index)
}

function headId(index: number) {
  return `afaq-head-${props.sectionId}-${index}`
}

function panelId(index: number) {
  return `afaq-panel-${props.sectionId}-${index}`
}

function emitToggle(index: number) {
  emit('toggle', index)
}
</script>
