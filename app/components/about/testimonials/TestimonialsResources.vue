<template>
  <section class="tst-resources" aria-labelledby="tst-resources-heading">
    <div class="container">
      <header class="tst-resources__head">
        <p class="tst-resources__eyebrow">{{ resources.eyebrow }}</p>
        <h2 id="tst-resources-heading" class="tst-resources__title">
          {{ resources.title }}
        </h2>
        <p class="tst-resources__lead">
          {{ resources.lead }}
        </p>
      </header>

      <div class="tst-resources__grid">
        <article class="tst-resources__col">
          <h3>{{ resources.explore.title }}</h3>
          <p>{{ resources.explore.description }}</p>
          <ul>
            <li v-for="link in exploreLinks" :key="link.label">
              <NuxtLink :to="link.href" class="tst-resources__link">
                {{ link.label }}
                <span aria-hidden="true">↗</span>
              </NuxtLink>
            </li>
          </ul>
        </article>

        <article class="tst-resources__col">
          <h3>{{ resources.learn.title }}</h3>
          <p>{{ resources.learn.description }}</p>
          <ul>
            <li v-for="link in learnLinks" :key="link.label">
              <NuxtLink :to="link.href" class="tst-resources__link">
                {{ link.label }}
                <span aria-hidden="true">↗</span>
              </NuxtLink>
            </li>
          </ul>
        </article>

        <article class="tst-resources__col tst-resources__col--featured">
          <p class="tst-resources__featured-label">{{ featured.label }}</p>
          <h3 class="tst-resources__featured-title">{{ featured.title }}</h3>
          <p class="tst-resources__featured-text">{{ featured.text }}</p>
          <NuxtLink :to="featured.href" class="tst-resources__link tst-resources__link--featured">
            {{ featured.cta }}
            <span aria-hidden="true">↗</span>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  TESTIMONIALS_FEATURED_BLOG,
  TESTIMONIALS_RESOURCES,
  testimonialsExploreLinks,
  testimonialsLearnLinks,
} from '~/constants/testimonials'

const resources = TESTIMONIALS_RESOURCES
const exploreLinks = testimonialsExploreLinks
const learnLinks = testimonialsLearnLinks
const featured = TESTIMONIALS_FEATURED_BLOG
</script>
