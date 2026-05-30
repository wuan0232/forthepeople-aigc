<template>
  <div class="tst tst-page">
    <TestimonialsHero />
    <TestimonialsReviews />
    <TestimonialsClientStories />
    <TestimonialsResources />
    <SiteLeadFeeSection section-id="tst-contact" />
  </div>
</template>

<script setup lang="ts">
import SiteLeadFeeSection from '~/components/SiteLeadFeeSection.vue'
import TestimonialsClientStories from '~/components/about/testimonials/TestimonialsClientStories.vue'
import TestimonialsHero from '~/components/about/testimonials/TestimonialsHero.vue'
import TestimonialsResources from '~/components/about/testimonials/TestimonialsResources.vue'
import TestimonialsReviews from '~/components/about/testimonials/TestimonialsReviews.vue'
</script>
