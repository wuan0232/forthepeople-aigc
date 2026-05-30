<template>
  <TestimonialsPage />
</template>

<script setup lang="ts">
import TestimonialsPage from '~/components/about/testimonials/TestimonialsPage.vue'

useHead({
  title: 'Testimonials | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Read client success stories, 5-star reviews, and testimonials from people who trust Morgan & Morgan.',
    },
  ],
})
</script>

<style>
@import url('~/assets/css/testimonials.css');
</style>
