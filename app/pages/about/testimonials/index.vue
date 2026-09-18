<template>
  <TestimonialsPage />
</template>

<script setup lang="ts">
import TestimonialsPage from '~/components/about/testimonials/TestimonialsPage.vue'

useHead({
  title: 'Testimonials | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Read client success stories, 5-star reviews, and testimonials from people who trust For The People Clinic.',
    },
  ],
})
</script>

<style>
@import url('~/assets/css/testimonials.css');
</style>
