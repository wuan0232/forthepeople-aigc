<template>
  <header class="blog-head">
    <h2 :id="headingId" class="blog-head__title">{{ title }}</h2>
    <div v-if="description || $slots.default" class="blog-head__blurb">
      <slot>
        <p v-if="description">{{ description }}</p>
      </slot>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  headingId?: string
}>()
</script>
