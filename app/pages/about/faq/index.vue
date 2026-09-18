<template>
  <FaqPage />
</template>

<script setup lang="ts">
import FaqPage from '~/components/about/faq/FaqPage.vue'

useHead({
  title: 'FAQ | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Answers to common questions about hiring For The People Clinic, the case process, and how we can help with your claim.',
    },
  ],
})
</script>

<style>
@import url('~/assets/css/about-faq.css');
</style>
