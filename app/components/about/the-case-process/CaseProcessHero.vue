<template>
  <section class="tcp-hero" aria-labelledby="tcp-hero-heading">
    <div class="container">
      <SiteBreadcrumb
        class="tcp-hero__breadcrumb"
        separator="/"
        :items="[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'The Case Process', strong: true },
        ]"
      />
      <div class="tcp-hero__grid">
        <div class="tcp-hero__copy">
          <img
            class="tcp-hero__title-img"
            src="/images/about/the-case-process/the-case-process-title.png"
            alt="The Case Process"
            width="635"
            height="136"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          <h1 id="tcp-hero-heading" class="visually-hidden">The Case Process</h1>
          <p class="tcp-hero__lead">
            Injured and not sure what to do next?<br />
            Start with medical next steps. We'll guide you through what you need to know.
          </p>
        </div>
        <div class="tcp-hero__art" aria-hidden="true">
          <img
            v-if="useAvif"
            :src="TCP_RIGHT_ILLUSTRATION_IMAGE"
            alt=""
            loading="eager"
            decoding="async"
            @error="useAvif = false"
          />
          <div v-else v-html="tcpHeroBriefcaseArt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  TCP_RIGHT_ILLUSTRATION_IMAGE,
  tcpHeroBriefcaseArt,
} from '~/constants/the-case-process'

const useAvif = ref(true)
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
