<template>
  <span class="blog-read">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    {{ minutes }} min read time
  </span>
</template>

<script setup lang="ts">
defineProps<{
  minutes: number
}>()
</script>
