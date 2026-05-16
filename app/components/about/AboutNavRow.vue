<template>
  <li class="about-menu__item">
    <NuxtLink :to="to" class="about-menu__link">
      <span class="about-menu__label">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>
