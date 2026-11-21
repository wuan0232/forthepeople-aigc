<template>
  <div class="blog">
    <BlogHomePage />
    <SiteLeadFeeSection />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/blog.css'

definePageMeta({
  keepalive: true,
  scrollToTop: (to, from) => {
    if (to.path !== '/blog') return true
    return !from.path.startsWith('/blog/')
  },
})

useBlogScrollCache()

useHead({
  title: 'Injury & Recovery | For The People Clinic Blog',
  meta: [
    {
      name: 'description',
      content:
        'Practical articles about injury care, spine consultations, and preparing for your medical visit.',
    },
  ],
})
</script>
