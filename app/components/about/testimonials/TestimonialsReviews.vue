<template>
  <section class="tst-reviews" aria-labelledby="tst-reviews-heading">
    <div class="container tst-reviews__grid">
      <div class="tst-reviews__intro">
        <h2 id="tst-reviews-heading" class="tst-reviews__title">{{ intro.title }}</h2>
        <p class="tst-reviews__disclaimer">{{ intro.disclaimer }}</p>
      </div>
      <div class="tst-reviews__list-wrap">
        <ul class="tst-reviews__list">
          <li v-for="(review, index) in reviews" :key="`${review.author}-${index}`">
            <TestimonialStars />
            <blockquote class="tst-reviews__quote">{{ review.quote }}</blockquote>
            <p class="tst-reviews__meta">
              <span>{{ review.author }}</span>
              <span class="tst-reviews__sep" aria-hidden="true">|</span>
              <span class="tst-reviews__sep" aria-hidden="true">|</span>
              <span>{{ review.year }}</span>
            </p>
          </li>
        </ul>
        <p class="tst-reviews__scroll-hint" aria-hidden="true">
          Scroll down for more
          <span class="tst-reviews__scroll-chev">▼</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialStars from '~/components/about/testimonials/TestimonialStars.vue'
import { TESTIMONIALS_REVIEWS_INTRO, testimonialReviews } from '~/constants/testimonials'

const intro = TESTIMONIALS_REVIEWS_INTRO
const reviews = testimonialReviews
</script>
