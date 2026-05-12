<template>
  <section class="intro section-pad" id="locations">
    <div class="container intro__inner">
      <h2 class="intro-headline">
        <span class="intro-headline__line">Personal Injury Lawyers</span>
        <span class="intro-headline__line">Fighting For You</span>
      </h2>
      <p class="intro__text">
        With 35 years, 1,000 attorneys, and $30 billion recovered, we fight to get you what you
        deserve. Start your free case review anytime by text, phone, or online.
      </p>
      <div class="features">
        <article v-for="f in items" :key="f.line1">
          <span class="accent" aria-hidden="true" />
          <h3 class="feature-title">
            <span class="feature-title__line">{{ f.line1 }}</span>
            <span class="feature-title__line">{{ f.line2 }}</span>
          </h3>
        </article>
      </div>
    </div>
  </section>

  <section class="bigwins" id="results">
    <div class="container bigwins__grid">
      <div class="bigwins__copy">
        <div class="bigwins__copy-main">
          <h2 class="bigwins__title">The Right Firm for Big Wins</h2>
          <p class="bigwins__lead">
            Insurance companies know us—and they know we fight for every dollar.
          </p>
          <a href="#contact" class="btn-yellow">Get a free case evaluation</a>
          <a href="#more-results" class="link-more">
            See more results
            <span class="arr" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke-linecap="round" />
              </svg>
            </span>
          </a>
        </div>
        <p class="tiny">
          Results may vary depending on your particular facts and legal circumstances. The attorneys
          shown in these photos may not be licensed in your state. To find an attorney licensed in
          your area, please visit our
          <a href="#attorneys">attorney page</a>.
        </p>
      </div>
      <div class="bigwins__visual">
        <div class="photo-wrap">
          <img
            :src="currentSlide.img"
            :alt="currentSlide.imgAlt"
            width="900"
            height="600"
            loading="lazy"
            class="photo-wrap__img"
          />
          <div class="photo-wrap__scrim" aria-hidden="true" />
          <div class="case-card">
            <div class="case-card__head">
              Nathan won <strong>4.5x</strong> what was offered
            </div>
            <div class="case-card__body">
              <div class="case-card__col">
                <strong>{{ currentSlide.offer }}</strong>
                <span>insurance offer</span>
              </div>
              <span class="arrow" aria-hidden="true">→</span>
              <div class="case-card__col case-card__col--verdict">
                <strong>{{ currentSlide.verdict }}</strong>
                <span class="verdict-label">verdict</span>
              </div>
            </div>
          </div>
          <p class="photo-caption">{{ currentSlide.caption }}</p>
          <div class="dots" role="tablist" aria-label="Case results">
            <button
              v-for="(_, i) in slides"
              :key="i"
              type="button"
              role="tab"
              :aria-selected="i === activeSlide"
              :class="{ on: i === activeSlide }"
              :aria-label="`Slide ${i + 1}`"
              @click="activeSlide = i"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const items = [
  { line1: 'FIGHTING FOR', line2: 'MORE' },
  { line1: 'THE FEE IS FREE,', line2: 'UNLESS WE WIN' },
  { line1: 'LOCAL CARE +', line2: 'NATIONAL POWER' }
]

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1100&q=80',
    imgAlt: 'Legal professionals in front of a modern office building',
    offer: '$284,000',
    verdict: '$1,275,000',
    caption: 'General Liability | Louisville, KY'
  },
  {
    img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1100&q=80',
    imgAlt: 'Attorneys reviewing case documents',
    offer: '$120,000',
    verdict: '$890,000',
    caption: 'Auto Accident | Tampa, FL'
  },
  {
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1100&q=80',
    imgAlt: 'Law firm team portrait',
    offer: '$95,000',
    verdict: '$410,000',
    caption: 'Premises Liability | Dallas, TX'
  },
  {
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1100&q=80',
    imgAlt: 'Legal consultation at a desk',
    offer: '$200,000',
    verdict: '$2,100,000',
    caption: 'Medical Malpractice | Phoenix, AZ'
  },
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1100&q=80',
    imgAlt: 'Team collaboration in office',
    offer: '$75,000',
    verdict: '$325,000',
    caption: "Workers' Compensation | Atlanta, GA"
  }
]

const activeSlide = ref(0)
const currentSlide = computed(() => slides[activeSlide.value]!)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700;900&display=swap');

.section-pad {
  padding-block: clamp(3.5rem, 8vw, 5.5rem);
}

.intro {
  background: #fff;
  color: #1a1a1a;
}

.intro__inner {
  max-width: 72rem;
  margin-inline: auto;
}

.intro-headline {
  margin: 0 auto 1.25rem;
  text-align: center;
  font-family: Montserrat, system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(1.85rem, 4.2vw, 2.75rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: #1a1a1a;
}

.intro-headline__line {
  display: block;
}

.intro__text {
  margin: 0 auto 2.75rem;
  max-width: 38rem;
  text-align: center;
  color: #4b5563;
  font-size: clamp(0.95rem, 1.6vw, 1.0625rem);
  line-height: 1.65;
  font-weight: 400;
}

.features {
  display: grid;
  gap: 2rem 2.5rem;
}

@media (min-width: 768px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 2rem;
  }
}

.features article {
  text-align: left;
}

.accent {
  display: block;
  width: 2.75rem;
  height: 4px;
  background: #0056b3;
  border-radius: 2px;
  margin-bottom: 0.85rem;
}

.feature-title {
  margin: 0;
  font-family: 'Roboto Condensed', 'Arial Narrow', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.125rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  line-height: 1.08;
  text-transform: uppercase;
  color: #222;
}

.feature-title__line {
  display: block;
}

.bigwins {
  --bigwins-navy: #0b1e3b;
  --bigwins-cta: #f2e205;
  background: var(--bigwins-navy);
  color: #fff;
  padding: clamp(3rem, 7vw, 5rem) 0;
}

.bigwins__grid {
  display: grid;
  gap: 2.5rem;
  align-items: stretch;
}

@media (min-width: 960px) {
  .bigwins__grid {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: clamp(1.5rem, 4vw, 3.5rem);
  }
}

.bigwins__copy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(0.25rem, 1.5vw, 1rem) clamp(0.25rem, 2vw, 2.5rem) 0.25rem 0;
}

@media (max-width: 959px) {
  .bigwins__copy {
    padding: 0;
  }
}

.bigwins__copy-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bigwins__title {
  margin: 0 0 1rem;
  font-size: clamp(1.85rem, 3.8vw, 2.65rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #fff;
}

.bigwins__lead {
  margin: 0;
  max-width: 28rem;
  font-size: 1.05rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 400;
}

.btn-yellow {
  margin-top: 1.75rem;
  display: inline-block;
  padding: 0.875rem 1.35rem;
  border-radius: 8px;
  background: var(--bigwins-cta);
  color: #111;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  transition: filter 0.15s ease;
}

.btn-yellow:hover {
  filter: brightness(1.03);
}

.link-more {
  margin-top: 1.15rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
}

.link-more:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.arr {
  display: inline-grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 2px;
  color: #fff;
}

.tiny {
  margin: 0;
  max-width: 32rem;
  font-size: 0.625rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.55);
}

.tiny a {
  color: rgba(255, 255, 255, 0.78);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.tiny a:hover {
  color: #fff;
}

.bigwins__visual {
  min-height: 0;
}

.photo-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-height: min(520px, 72vw);
  background: #020617;
}

.photo-wrap__img {
  width: 100%;
  height: 100%;
  min-height: min(520px, 72vw);
  object-fit: cover;
  display: block;
}

.photo-wrap__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.38) 40%,
    transparent 65%
  );
  pointer-events: none;
}

.case-card {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4.85rem;
  width: min(calc(100% - 1.75rem), 26rem);
  background: #fff;
  color: #111;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
}

@media (max-width: 599px) {
  .case-card {
    bottom: 4.35rem;
    width: calc(100% - 1.25rem);
  }
}

.case-card__head {
  background: #0066cc;
  color: #fff;
  font-weight: 800;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  text-align: center;
}

.case-card__head strong {
  font-weight: 900;
}

.case-card__body {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.5rem 0.75rem;
  align-items: center;
  padding: 1.1rem 0.85rem 1.2rem;
  text-align: center;
}

.case-card__col strong {
  display: block;
  font-size: 1.28rem;
  color: #1f2937;
}

.case-card__col > span {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.72rem;
  color: #6b7280;
}

.case-card__col--verdict strong {
  color: #0066cc;
}

.verdict-label {
  color: #0066cc !important;
  font-weight: 600;
}

.arrow {
  color: #0066cc;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1;
}

.photo-caption {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 2.7rem;
  margin: 0;
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
}

.dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.85rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  padding: 0;
  margin: 0;
}

.dots button {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.35);
  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.dots button.on {
  background: #fff;
  transform: scale(1.2);
}

.dots button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
</style>
