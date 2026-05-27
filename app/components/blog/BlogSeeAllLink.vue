<template>
  <NuxtLink :to="href" class="link-arrow blog-foot__link">
    {{ label }}
    <span class="icon-box" aria-hidden="true">
      <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    label?: string
  }>(),
  {
    href: '#blog-latest-posts',
    label: 'See all posts',
  },
)
</script>
