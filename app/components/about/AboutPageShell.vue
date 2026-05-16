<template>
  <section class="about-page">
    <div class="about-page__inner container">
      <h1 class="about-page__title">{{ title }}</h1>
      <p v-if="description" class="about-page__desc">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<style scoped>
.about-page {
  padding: clamp(5rem, 12vw, 7rem) 0 3rem;
  min-height: 50vh;
  background: #fff;
  color: #0f172a;
}

.about-page__inner {
  max-width: 42rem;
}

.about-page__title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.about-page__desc {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #475569;
}
</style>
