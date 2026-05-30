<template>
  <div class="tst-stars" :aria-label="`${count} out of 5 stars`">
    <span v-for="n in count" :key="n" class="tst-stars__star" aria-hidden="true">★</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number
  }>(),
  { count: 5 },
)
</script>
