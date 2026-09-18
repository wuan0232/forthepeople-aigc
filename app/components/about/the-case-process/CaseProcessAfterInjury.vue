<template>
  <section class="tcp-section" aria-labelledby="tcp-after-heading">
    <div class="container">
      <header class="tcp-section__head">
        <h2 id="tcp-after-heading" class="ca-h2">After an Injury</h2>
          <p>
            I've been hurt. Now what? Facing an injury can be overwhelming. Start with medical
            priorities—urgent signs, documentation, and follow-up.
          </p>
      </header>
      <div class="tcp-cards">
        <NuxtLink
          v-for="card in tcpAfterInjuryCards"
          :key="card.title"
          :to="card.href"
          class="tcp-card"
        >
          <div class="tcp-card__art">
            <img
              v-if="card.imageSrc"
              :src="card.imageSrc"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div v-else v-html="card.art" />
          </div>
          <h3 class="tcp-card__title">{{ card.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { tcpAfterInjuryCards } from '~/constants/the-case-process'
</script>
