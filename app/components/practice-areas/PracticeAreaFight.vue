<template>
  <section class="ca-block ca-block--white ca-fight" aria-labelledby="fight-heading">
    <div class="container">
      <header class="ca-fight__head">
        <h2 id="fight-heading" class="ca-h2 ca-center">Fighting For the People</h2>
        <p class="ca-fight__sub">Backed by Patient Care & Medical Guidance.</p>
      </header>

      <div class="ca-stats">
        <div
          v-for="(s, i) in stats"
          :key="s.k"
          class="ca-stats__card"
          :class="{ 'ca-stats__card--last': i === stats.length - 1 }"
        >
          <strong class="ca-stats__k">{{ s.k }}</strong>
          <span class="ca-stats__v">{{ s.v }}</span>
        </div>
      </div>

      <MediaCarousel
        :count="partners.length"
        mode="paged"
        region-label="Managing partner messages"
        dots-label="Partner carousel"
        strip-class="ca-partner-strip"
        dots-class="ca-partner-dots"
        dot-class="ca-partner-dot"
        active-dot-class="ca-partner-dot--on"
        dragging-class="ca-partner-strip--dragging"
        :show-dots="false"
        :dot-labels="partners.map((p, i) => `Slide ${i + 1}, ${p.name}`)"
        dot-key-prefix="pdot"
      >
        <article v-for="p in partners" :key="p.name" class="ca-partner-slide">
          <div class="ca-partner-slide__quote">
            <span class="ca-quote-mark ca-quote-mark--light" aria-hidden="true">"</span>
            <p>{{ p.quote }}</p>
            <div class="ca-partner-slide__who">
              <strong>{{ p.name }}</strong>
              <span>{{ p.role }}</span>
            </div>
            <a href="#" class="ca-read-bio">Read Bio</a>
          </div>
          <div class="ca-partner-slide__photo">
            <img
              :src="partnerPhotoSrc"
              :alt="p.name"
              width="520"
              height="420"
              loading="lazy"
              draggable="false"
            />
          </div>
        </article>
      </MediaCarousel>

      <p class="ca-disclaimer ca-disclaimer--center">{{ footerDisclaimer }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PartnerSlide, StatItem } from '~/types/practice-area'

withDefaults(
  defineProps<{
    stats: StatItem[]
    partners: PartnerSlide[]
    /** Shared portrait for all partner slides (practice-area pages use one firm photo). */
    partnerPhotoSrc?: string
    footerDisclaimer?: string
  }>(),
  {
    partnerPhotoSrc: '/practice-area-partner-photo.avif',
    footerDisclaimer:
      'Clinician profiles are for educational introduction. Care plans always depend on your individual medical evaluation. Individual situations vary and this information is not a substitute for personalized medical care.',
  },
)

</script>
