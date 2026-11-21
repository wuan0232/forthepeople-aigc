<template>
  <div class="blog">
    <header class="blog-posts-hero"><div class="container"><h1 class="blog-posts-hero__title">All Posts</h1><p class="blog-posts-hero__lead">Articles on injury care, preparing for appointments, and medical follow-up.</p></div></header>
    <section class="blog-posts-list" aria-label="All articles"><div class="container"><BlogFeed /></div></section>
  </div>
</template>
<script setup lang="ts">
import '~/assets/css/blog.css'
useHead({ title: 'All Posts | For The People Clinic', meta: [{ name: 'description', content: 'Browse articles on preparing for care, medical visits, and follow-up.' }] })
</script>
