<template>
  <section class="ca-hero">
    <div class="container">
      <SiteBreadcrumb
        class="ca-hero__eyebrow"
        separator="/"
        :items="
          breadcrumbItems ?? [
            { label: 'Home', to: '/' },
            { label: 'Practice Areas' },
            { label: breadcrumbLabel, strong: true },
          ]
        "
      />
      <h1 class="ca-hero__title">{{ title }}</h1>
      <p class="ca-hero__lead">{{ lead }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PracticeAreaHeroProps } from '~/types/practice-area'

defineProps<PracticeAreaHeroProps>()
</script>
