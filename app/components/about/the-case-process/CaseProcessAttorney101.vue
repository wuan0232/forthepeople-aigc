<template>
  <section class="tcp-section" aria-labelledby="tcp-attorney-heading">
    <div class="container">
      <div class="tcp-attorney__grid">
        <div>
          <h2 id="tcp-attorney-heading" class="ca-h2">Hiring An Attorney 101</h2>
          <p class="tcp-attorney__sub">All law firms are not the same.</p>
        </div>
        <nav class="tcp-attorney__list" aria-label="Hiring an attorney topics">
          <a
            v-for="link in tcpAttorneyLinks"
            :key="link.label"
            href="#learn-more"
            class="tcp-attorney__link"
            @click.prevent="openLearnMore?.()"
          >
            {{ link.label }}
            <span class="tcp-attorney__arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </div>
  </section>

  <section class="tcp-worth" aria-labelledby="tcp-worth-heading">
    <div class="container tcp-worth__grid">
      <div class="tcp-worth__icon" aria-hidden="true">
        <img
          :src="TCP_WORTH_VISUAL_IMAGE"
          alt=""
          width="185"
          height="185"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="tcp-worth__copy">
        <h2 id="tcp-worth-heading">How much is my case worth?</h2>
        <p>The estimated value of a claim is based on something called "damages."</p>
        <a href="#learn-more" class="link-arrow" @click.prevent="openLearnMore?.()">
          Here's how it works.
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 10L10 2M10 2H4M10 2V8" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TCP_WORTH_VISUAL_IMAGE, tcpAttorneyLinks } from '~/constants/the-case-process'
import { useTcpLearnMore } from '~/composables/about/the-case-process/useTcpLearnMore'

const openLearnMore = useTcpLearnMore()
</script>
