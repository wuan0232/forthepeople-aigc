<template>
  <section
    id="client-stories"
    class="tst-stories"
    aria-labelledby="tst-stories-heading"
  >
    <div class="container">
      <h2 id="tst-stories-heading" class="tst-stories__heading">Client Stories</h2>
      <div class="tst-stories__grid">
        <TestimonialStoryCard
          v-for="story in stories"
          :key="story.id"
          :story="story"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialStoryCard from '~/components/about/testimonials/TestimonialStoryCard.vue'
import { testimonialStories } from '~/constants/testimonials'

const stories = testimonialStories
</script>
