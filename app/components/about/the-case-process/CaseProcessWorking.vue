<template>
  <section class="tcp-section tcp-section--soft" aria-labelledby="tcp-working-heading">
    <div class="container">
      <header class="tcp-section__head">
        <h2 id="tcp-working-heading" class="ca-h2">Working With Our Care Team</h2>
        <p>Everything you need to know about what happens throughout your recovery pathway.</p>
      </header>

      <div class="tcp-working-cards">
        <NuxtLink
          v-for="card in tcpWorkingCards"
          :key="card.title"
          :to="card.href"
          class="tcp-work-card"
        >
          <div class="tcp-work-card__art">
            <img
              v-if="card.imageSrc"
              :src="card.imageSrc"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div v-else v-html="card.art" />
          </div>
          <h3 class="tcp-work-card__title">{{ card.title }}</h3>
        </NuxtLink>
      </div>
    </div>

    <div class="tcp-cta-band">
      <div class="container tcp-cta-band__grid">
        <div class="tcp-cta-band__copy">
          <h2>Injured? Safer recovery planning starts here.</h2>
          <NuxtLink to="/medical/what-to-do" class="tcp-cta-band__btn">Start your medical action plan</NuxtLink>
        </div>
        <div class="tcp-cta-band__art" aria-hidden="true">
          <img
            :src="TCP_CTA_CAR_IMAGE"
            alt=""
            width="302"
            height="178"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TCP_CTA_CAR_IMAGE, tcpWorkingCards } from '~/constants/the-case-process'
</script>
