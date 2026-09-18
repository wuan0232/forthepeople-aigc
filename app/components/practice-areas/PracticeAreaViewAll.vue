<template>
  <div class="pa-view-all">
    <section class="pa-view-all__hero">
      <div class="container">
        <SiteBreadcrumb class="pa-view-all__breadcrumb" :items="[{ label: 'Home', to: '/' }, { label: 'Recovery Guides' }]" />

        <div class="pa-view-all__intro">
          <h1>RECOVERY GUIDANCE, WHEN YOU NEED IT MOST</h1>
          <p>Use clear, medical-first guides to recognize urgent symptoms, prepare for follow-up, and plan safer recovery after an injury or health concern.</p>
        </div>

        <div class="pa-view-all__featured" aria-label="Featured practice areas">
          <NuxtLink
            v-for="card in featuredCards"
            :key="card.title"
            :to="card.href"
            class="pa-feature-card"
          >
            <span class="pa-feature-card__icon" v-html="card.icon" />
            <span class="pa-feature-card__title">
              {{ card.title }}
              <span class="pa-view-all__arrow" aria-hidden="true">↗</span>
            </span>
            <span class="pa-feature-card__text">{{ card.text }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="pa-view-all__support">
      <div class="container pa-view-all__support-grid">
        <div>
          <h2>Other Recovery Pathways</h2>
          <div class="pa-other-grid">
            <NuxtLink v-for="item in otherWays" :key="item.title" :to="item.href" class="pa-other-link">
              {{ item.title }}
              <span aria-hidden="true">›</span>
            </NuxtLink>
          </div>
          <NuxtLink to="#contact" class="pa-view-all__get-started">
            Start a recovery checklist
            <span aria-hidden="true">↓</span>
          </NuxtLink>
        </div>

        <div class="pa-corporate" aria-labelledby="corporate-heading">
          <h2 id="corporate-heading">Medication &amp; Health Safety Updates</h2>
          <MediaCarousel
            :count="corporateCases.length"
            mode="paged"
            region-label="Medication and health safety updates"
            dots-label="Medication safety carousel position"
            strip-class="pa-corporate__strip"
            dots-class="pa-corporate__dots"
            dot-class="pa-corporate__dot"
            active-dot-class="pa-corporate__dot--on"
            dragging-class="pa-corporate__strip--dragging"
            dot-label-prefix="Medication safety slide"
            dot-key-prefix="safety-dot"
          >
            <article v-for="item in corporateCases" :key="item.title" class="pa-corporate__card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
              <a :href="item.href">Learn More</a>
            </article>
          </MediaCarousel>
        </div>
      </div>
    </section>

    <section class="pa-view-all__rights" aria-labelledby="rights-heading">
      <div class="container">
        <header class="pa-view-all__rights-head">
          <p>LIGHT RIGHTS EDUCATION</p>
          <h2 id="rights-heading">Practical rights &amp; records after an injury</h2>
          <span>
            Understanding your care records and everyday documentation can support clearer medical
            follow-up and help you prepare informed questions if you later seek independent advice.
          </span>
        </header>
        <div class="pa-rights-grid">
          <article>
            <h3>Request your care records</h3>
            <p>
              Keep visit summaries, imaging reports, medication lists, and discharge instructions
              together so each clinician can see the full recovery timeline.
            </p>
          </article>
          <article>
            <h3>Document functional changes</h3>
            <p>
              A dated symptom and activity log can make follow-up conversations clearer—especially
              when pain, sleep, mobility, or work tasks change over time.
            </p>
          </article>
          <article>
            <h3>Ask before signing or deciding</h3>
            <p>
              If an insurance, workplace, or other document affects your medical care, ask
              questions and consider independent professional advice before making decisions.
            </p>
          </article>
        </div>
        <p class="pa-view-all__rights-note">
          Educational information only. This is not legal advice and does not replace medical care
          or emergency services.
        </p>
      </div>
    </section>

    <section class="pa-view-all__banner" aria-labelledby="more-heading">
      <div class="container">
        <div class="pa-view-all__banner-card">
          <h2 id="more-heading">More Recovery Guidance</h2>
          <p>Explore medical guidance for injury recovery, symptom monitoring, and safer follow-up conversations.</p>
        </div>
      </div>
    </section>

    <section class="pa-view-all__list" aria-labelledby="all-practice-heading">
      <div class="container">
        <h2 id="all-practice-heading" class="sr-only">All Recovery Guides</h2>
        <div class="pa-practice-list">
          <NuxtLink v-for="item in practiceLinks" :key="item.title" :to="item.href">
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type PracticeLink = {
  title: string
  href: string
}

type FeatureCard = PracticeLink & {
  text: string
  icon: string
}

type CorporateCase = PracticeLink & {
  text: string
}

const corporateCases: CorporateCase[] = [
  {
    title: 'Medication safety:',
    href: '/practice-areas/dangerous-drugs',
    text: 'Understand warning signs, prescriber questions, and safer follow-up after a medication concern.',
  },
  {
    title: 'Brain injury follow-up:',
    href: '/practice-areas/brain-injury',
    text: 'Learn which delayed neurological symptoms need urgent reassessment after an injury.',
  },
  {
    title: 'Weight Loss Drugs:',
    href: '/practice-areas/dangerous-drugs/weight-loss-drug',
    text: 'Review abdominal-pain, dehydration, and other urgent warning signs with a medical-first guide.',
  },
  {
    title: 'Depo-Provera:',
    href: '/practice-areas/dangerous-drugs/depo-provera',
    text: 'Review symptoms that need prompt medical evaluation and prepare questions for your clinician.',
  },
]

const featuredCards: FeatureCard[] = [
  {
    title: 'Car Accidents',
    href: '/practice-areas/car-accident',
    text: 'Recognize delayed symptoms, organize records, and prepare for timely medical follow-up after a crash.',
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 19h22M8 16l2-6h12l2 6"/><circle cx="11" cy="21" r="2"/><circle cx="23" cy="21" r="2"/></svg>`,
  },
  {
    title: 'Slip and Fall',
    href: '/practice-areas/slip-and-fall',
    text: 'Learn warning signs after a fall, protect mobility, and plan a safe clinical reassessment.',
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="7" r="3"/><path d="M16 10v7l-5 10M16 17l6 10M11 18h11"/></svg>`,
  },
  {
    title: 'Workplace Injury',
    href: '/practice-areas/workers-compensation',
    text: 'Track work-related symptoms, discuss medical restrictions, and plan a safer return to activity.',
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="11" width="16" height="14" rx="2"/><path d="M12 11V8h8v3M12 17h8"/></svg>`,
  },
]

const otherWays: PracticeLink[] = [
  { title: 'Medical Harm Recovery', href: '/practice-areas/medical-malpractice' },
  { title: 'Brain Injury Follow-Up', href: '/practice-areas/brain-injury' },
  { title: 'Spinal Cord Injury Follow-Up', href: '/practice-areas/spinal-cord-injury' },
  { title: 'Medication Safety', href: '/practice-areas/dangerous-drugs' },
  { title: 'Burn Injury Recovery', href: '/practice-areas/burn-injury' },
  { title: 'Mesothelioma Care Pathway', href: '/practice-areas/mesothelioma' },
]

const practiceLinks: PracticeLink[] = [
  { title: 'Aviation Trauma Recovery', href: '/practice-areas/aviation-accident' },
  { title: 'Boating Injury Recovery', href: '/practice-areas/boating-accident' },
  { title: 'Brain Injury Follow-Up', href: '/practice-areas/brain-injury' },
  { title: 'Burn Injury Recovery', href: '/practice-areas/burn-injury' },
  { title: 'Car Crash Recovery', href: '/practice-areas/car-accident' },
  { title: 'Dangerous Drugs Safety', href: '/practice-areas/dangerous-drugs' },
  { title: 'Depo-Provera Safety Guide', href: '/practice-areas/dangerous-drugs/depo-provera' },
  { title: 'Fall Injury Recovery', href: '/practice-areas/slip-and-fall' },
  { title: 'GLP-1 & Weight Loss Drug Guide', href: '/practice-areas/dangerous-drugs/weight-loss-drug' },
  { title: 'General Injury Recovery', href: '/practice-areas/personal-injury' },
  { title: 'Medical Harm Recovery', href: '/practice-areas/medical-malpractice' },
  { title: 'Mesothelioma Care Pathway', href: '/practice-areas/mesothelioma' },
  { title: 'Motorcycle Injury Recovery', href: '/practice-areas/motorcycle-accident' },
  { title: 'Spinal Cord Injury Follow-Up', href: '/practice-areas/spinal-cord-injury' },
  { title: 'Truck Crash Recovery', href: '/practice-areas/truck-accident' },
  { title: 'Workplace Injury Recovery', href: '/practice-areas/workers-compensation' },
]
</script>

<style scoped>
.pa-view-all {
  background: #fff;
}

.pa-view-all__hero {
  padding: calc(var(--header-offset) + 1.25rem) 0 4rem;
}

.pa-view-all__breadcrumb {
  display: flex;
  gap: 0.45rem;
  align-items: center;
  margin: 0 0 2rem;
  font-size: 0.78rem;
  color: #4b5563;
}

.pa-view-all__breadcrumb :deep(a) {
  color: inherit;
  text-decoration: none;
}

.pa-view-all__intro {
  display: grid;
  gap: 2rem;
  align-items: start;
  margin-bottom: 3rem;
}

.pa-view-all__intro h1 {
  margin: 0;
  max-width: 34rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #1f2933;
  text-transform: uppercase;
}

.pa-view-all__intro p {
  margin: 0;
  max-width: 31rem;
  font-size: clamp(1.2rem, 2.2vw, 1.75rem);
  line-height: 1.25;
  color: #1f2933;
}

@media (min-width: 900px) {
  .pa-view-all__intro {
    grid-template-columns: 1fr 1fr;
  }
}

.pa-view-all__featured {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 800px) {
  .pa-view-all__featured {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pa-feature-card {
  display: grid;
  gap: 0.8rem;
  padding: 1.5rem;
  min-height: 12rem;
  color: #1f2933;
  text-decoration: none;
  background: #f3f4f6;
  border-radius: 0.45rem;
}

.pa-feature-card__icon {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  color: var(--blue);
  background: #fff;
  border-radius: 0.5rem;
}

.pa-feature-card__title {
  display: inline-flex;
  gap: 0.45rem;
  align-items: center;
  font-weight: 800;
  font-size: 1.1rem;
}

.pa-view-all__arrow,
.pa-view-all__get-started span {
  display: inline-grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  color: #fff;
  background: var(--blue);
  border-radius: 0.4rem;
  font-size: 0.85rem;
  line-height: 1;
}

.pa-feature-card__text {
  font-size: 0.98rem;
  line-height: 1.45;
  color: #374151;
}

.pa-view-all__support {
  background: #edf5ff;
  padding: clamp(3rem, 6vw, 5rem) 0;
}

.pa-view-all__support-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 900px) {
  .pa-view-all__support-grid {
    grid-template-columns: 1.45fr 0.9fr;
    align-items: start;
  }
}

.pa-view-all__support h2,
.pa-corporate h2 {
  margin: 0 0 1.5rem;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  line-height: 1.15;
  color: #1f2933;
}

.pa-other-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .pa-other-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.pa-other-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.7rem;
  padding: 0.95rem 1.5rem;
  background: #d8ebff;
  color: #1f2933;
  text-decoration: none;
  font-weight: 800;
}

.pa-view-all__get-started {
  display: inline-flex;
  gap: 0.55rem;
  align-items: center;
  margin-top: 1rem;
  color: #1f2933;
  text-decoration: none;
  font-weight: 800;
}

.pa-corporate {
  max-width: 22rem;
}

:deep(.pa-corporate__strip) {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  cursor: grab;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

:deep(.pa-corporate__strip)::-webkit-scrollbar {
  display: none;
}

:deep(.pa-corporate__strip--dragging) {
  cursor: grabbing;
  scroll-snap-type: none;
  scroll-behavior: auto;
  user-select: none;
}

.pa-corporate__card {
  flex: 0 0 100%;
  scroll-snap-align: start;
  overflow: hidden;
  margin: 0;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
}

.pa-corporate__card h3 {
  margin: 0;
  padding: 1.2rem 1.4rem 0;
  font-size: 1rem;
}

.pa-corporate__card p {
  margin: 0;
  padding: 0.8rem 1.4rem 1.4rem;
  color: #374151;
  line-height: 1.5;
}

.pa-corporate__card a {
  display: block;
  padding: 1.05rem 1.4rem;
  color: #fff;
  background: var(--blue);
  text-decoration: none;
  font-weight: 800;
}

:deep(.pa-corporate__dots) {
  display: flex;
  gap: 1rem;
  margin-top: 1.1rem;
}

:deep(.pa-corporate__dot) {
  width: 0.6rem;
  height: 0.6rem;
  padding: 0;
  border: 0;
  background: #c9d3df;
  border-radius: 999px;
  cursor: pointer;
}

:deep(.pa-corporate__dot--on) {
  background: #000;
}

.pa-view-all__banner {
  padding: 3.5rem 0 2rem;
}

.pa-view-all__rights {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background: #f8fafc;
}

.pa-view-all__rights-head {
  max-width: 46rem;
  margin-bottom: 2rem;
}

.pa-view-all__rights-head > p {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  color: var(--mm-red, #c41230);
}

.pa-view-all__rights-head h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  color: #1f2933;
}

.pa-view-all__rights-head span,
.pa-view-all__rights-note {
  color: #475569;
  line-height: 1.6;
}

.pa-rights-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 800px) {
  .pa-rights-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pa-rights-grid article {
  padding: 1.4rem;
  background: #fff;
  border-top: 3px solid var(--blue, #1f6dde);
}

.pa-rights-grid h3 {
  margin: 0 0 0.55rem;
  font-size: 1.05rem;
  color: #1f2933;
}

.pa-rights-grid p {
  margin: 0;
  color: #475569;
  line-height: 1.55;
}

.pa-view-all__rights-note {
  margin: 1.25rem 0 0;
  font-size: 0.82rem;
}

.pa-view-all__banner-card {
  display: grid;
  place-items: center;
  min-height: 9rem;
  padding: 2rem;
  text-align: center;
  color: #fff;
  background:
    linear-gradient(rgba(8, 18, 33, 0.55), rgba(8, 18, 33, 0.55)),
    url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80&fit=crop') center/cover;
  border-radius: 0.2rem;
}

.pa-view-all__banner-card h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.pa-view-all__banner-card p {
  margin: 0;
  font-size: 0.85rem;
}

.pa-view-all__list {
  padding: 3rem 0 5rem;
}

.pa-practice-list {
  column-count: 1;
  column-gap: 5rem;
}

@media (min-width: 720px) {
  .pa-practice-list {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .pa-practice-list {
    column-count: 3;
  }
}

.pa-practice-list a {
  display: block;
  break-inside: avoid;
  margin: 0 0 1.15rem;
  color: #1f2933;
  text-decoration: none;
  font-weight: 800;
  line-height: 1.25;
}

.pa-practice-list a:hover,
.pa-view-all__breadcrumb :deep(a:hover),
.pa-feature-card:hover .pa-feature-card__title,
.pa-other-link:hover,
.pa-view-all__get-started:hover {
  text-decoration: underline;
}

.sr-only {
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
