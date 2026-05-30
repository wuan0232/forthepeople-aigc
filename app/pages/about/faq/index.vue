<template>
  <FaqPage />
</template>

<script setup lang="ts">
import FaqPage from '~/components/about/faq/FaqPage.vue'

useHead({
  title: 'FAQ | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Answers to common questions about hiring Morgan & Morgan, the case process, and how we can help with your claim.',
    },
  ],
})
</script>

<style>
@import url('~/assets/css/about-faq.css');
</style>
