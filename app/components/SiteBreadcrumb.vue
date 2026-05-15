<template>
  <component :is="tag" class="site-breadcrumb">
    <template v-for="(item, index) in items" :key="`${item.label}-${index}`">
      <NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      <strong v-else-if="item.strong">{{ item.label }}</strong>
      <span v-else>{{ item.label }}</span>
      <span v-if="index < items.length - 1" aria-hidden="true">{{ separator }}</span>
    </template>
  </component>
</template>

<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  to?: string
  strong?: boolean
}

withDefaults(
  defineProps<{
    items: BreadcrumbItem[]
    separator?: string
    tag?: 'p' | 'nav' | 'div'
  }>(),
  {
    separator: '›',
    tag: 'p',
  },
)
</script>
