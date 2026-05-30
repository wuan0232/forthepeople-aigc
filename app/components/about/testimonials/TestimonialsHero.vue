<template>
  <section class="tst-hero" aria-labelledby="tst-hero-heading">
    <div class="container tst-hero__grid">
      <div class="tst-hero__copy">
        <h1 id="tst-hero-heading" class="tst-hero__title">{{ hero.title }}</h1>
        <p class="tst-hero__disclaimer">{{ hero.disclaimer }}</p>
      </div>
      <div class="tst-hero__aside">
        <p class="tst-hero__lead">{{ hero.description }}</p>
        <div class="tst-hero__actions">
          <a :href="hero.primaryCta.href" class="tst-btn tst-btn--primary">
            {{ hero.primaryCta.label }}
            <span class="tst-btn__icon" aria-hidden="true">↗</span>
          </a>
          <a :href="hero.secondaryCta.href" class="tst-hero__link">
            {{ hero.secondaryCta.label }}
            <span class="tst-btn__icon tst-btn__icon--dark" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TESTIMONIALS_HERO } from '~/constants/testimonials'

const hero = TESTIMONIALS_HERO
</script>
