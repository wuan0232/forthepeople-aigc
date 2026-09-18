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
  title: 'Law School | For The People Clinic Blog',
  meta: [
    {
      name: 'description',
      content:
        'Resources, guides, and insights on injury law, safety, and the latest cases from For The People Clinic.',
    },
  ],
})
</script>
