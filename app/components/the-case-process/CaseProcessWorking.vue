<template>
  <section class="tcp-section tcp-section--soft" aria-labelledby="tcp-working-heading">
    <div class="container">
      <header class="tcp-section__head">
        <h2 id="tcp-working-heading" class="ca-h2">Working with an Attorney</h2>
        <p>Everything you need to know about what happens throughout your case journey.</p>
      </header>

      <div class="tcp-working-cards">
        <a
          v-for="card in tcpWorkingCards"
          :key="card.title"
          href="#learn-more"
          class="tcp-work-card"
          @click.prevent="openLearnMore?.()"
        >
          <div class="tcp-work-card__icon" v-html="card.art" aria-hidden="true" />
          <h3>{{ card.title }}</h3>
        </a>
      </div>
    </div>

    <div class="tcp-cta-band">
      <div class="container tcp-cta-band__grid">
        <div class="tcp-cta-band__copy">
          <h2>Injured? Getting the compensation you deserve starts here.</h2>
          <NuxtLink to="/contact" class="tcp-cta-band__btn">Start your claim</NuxtLink>
        </div>
        <div class="tcp-cta-band__art" v-html="tcpCarArt" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { tcpCarArt, tcpWorkingCards } from '~/constants/the-case-process'

const openLearnMore = useTcpLearnMore()
</script>
