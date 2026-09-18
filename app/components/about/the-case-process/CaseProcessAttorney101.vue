<template>
  <section class="tcp-section" aria-labelledby="tcp-clinic-heading">
    <div class="container">
      <div class="tcp-attorney__grid">
        <div>
          <h2 id="tcp-clinic-heading" class="ca-h2">Working With Our Clinic</h2>
          <p class="tcp-attorney__sub">Medical follow-up should feel clear, not confusing.</p>
        </div>
        <nav class="tcp-attorney__list" aria-label="Clinic follow-up topics">
          <NuxtLink
            v-for="link in tcpClinicLinks"
            :key="link.label"
            :to="link.href"
            class="tcp-attorney__link"
          >
            {{ link.label }}
            <span class="tcp-attorney__arrow" aria-hidden="true">→</span>
          </NuxtLink>
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
        <h2 id="tcp-worth-heading">What does my recovery plan include?</h2>
        <p>
          A practical plan usually covers symptom monitoring, records, specialist timing, and when to
          return for urgent reassessment.
        </p>
        <NuxtLink to="/medical/what-to-do" class="link-arrow">
          Open the 5-step medical guide
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 10L10 2M10 2H4M10 2V8" />
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TCP_WORTH_VISUAL_IMAGE, tcpClinicLinks } from '~/constants/the-case-process'
</script>
