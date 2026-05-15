<template>
  <section class="ca-bigwins" id="big-wins" aria-labelledby="big-wins-heading">
    <div class="container ca-bigwins__grid">
      <div class="ca-bigwins__copy">
        <div class="ca-bigwins__copy-main">
          <h2 id="big-wins-heading" class="ca-bigwins__title">{{ title }}</h2>
          <p class="ca-bigwins__lead">{{ lead }}</p>
          <a :href="ctaHref" class="ca-bigwins__cta">{{ ctaLabel }}</a>
          <a :href="moreHref" class="ca-bigwins__more">
            {{ moreLabel }}
            <span class="ca-bigwins__more-arr" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke-linecap="round" />
              </svg>
            </span>
          </a>
        </div>
        <p class="ca-bigwins__tiny">
          Results may vary depending on your particular facts and legal circumstances. The attorneys
          shown in these photos may not be licensed in your state. To find an attorney licensed in
          your area, please visit our
          <a href="#attorneys">attorney page</a>.
        </p>
      </div>
      <div class="ca-bigwins__visual">
        <div class="ca-bigwins-photo">
          <img
            :src="currentSlide.img"
            :alt="currentSlide.imgAlt"
            width="900"
            height="600"
            loading="lazy"
            class="ca-bigwins-photo__img"
          />
          <div class="ca-bigwins-photo__scrim" aria-hidden="true" />
          <div class="ca-bigwins-case">
            <div class="ca-bigwins-case__head">
              {{ currentSlide.headline }}
            </div>
            <div class="ca-bigwins-case__body">
              <div class="ca-bigwins-case__col">
                <strong>{{ currentSlide.offer }}</strong>
                <span>insurance offer</span>
              </div>
              <span class="ca-bigwins-case__arrow" aria-hidden="true">→</span>
              <div class="ca-bigwins-case__col ca-bigwins-case__col--verdict">
                <strong>{{ currentSlide.verdict }}</strong>
                <span>verdict</span>
              </div>
            </div>
          </div>
          <p class="ca-bigwins-photo__caption">{{ currentSlide.caption }}</p>
          <div class="ca-bigwins-dots" role="tablist" :aria-label="dotsLabel">
            <button
              v-for="(_, i) in slides"
              :key="i"
              type="button"
              role="tab"
              :aria-selected="i === activeSlide"
              :class="{ 'ca-bigwins-dots__btn--on': i === activeSlide }"
              :aria-label="`Slide ${i + 1}`"
              @click="activeSlide = i"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export type BigWinsSlide = {
  img: string
  imgAlt: string
  headline: string
  offer: string
  verdict: string
  caption: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    lead?: string
    ctaLabel?: string
    ctaHref?: string
    moreLabel?: string
    moreHref?: string
    dotsLabel?: string
    slides?: BigWinsSlide[]
  }>(),
  {
    title: 'The Right Firm for Big Wins',
    lead: 'Insurance companies know us—and they know we fight for every dollar.',
    ctaLabel: 'Get a free case evaluation',
    ctaHref: '#contact',
    moreLabel: 'See more results',
    moreHref: '#results',
    dotsLabel: 'Case results',
    slides: () => [
      {
        img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1100&q=80',
        imgAlt: 'Legal professionals in front of a modern office building',
        headline: 'Nathan won 4.5x what was offered',
        offer: '$284,000',
        verdict: '$1,275,000',
        caption: 'General Liability | Louisville, KY',
      },
      {
        img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1100&q=80',
        imgAlt: 'Attorneys reviewing case documents',
        headline: 'Client won 7.4x the insurance offer',
        offer: '$120,000',
        verdict: '$890,000',
        caption: 'Personal Injury | Tampa, FL',
      },
      {
        img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1100&q=80',
        imgAlt: 'Law firm team portrait',
        headline: 'Verdict exceeded initial offer',
        offer: '$95,000',
        verdict: '$410,000',
        caption: 'Premises Liability | Dallas, TX',
      },
    ],
  },
)

const activeSlide = ref(0)
const currentSlide = computed(() => props.slides[activeSlide.value]!)
</script>
