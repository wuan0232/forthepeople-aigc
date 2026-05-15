<template>
  <div class="pa-view-all">
    <section class="pa-view-all__hero">
      <div class="container">
        <SiteBreadcrumb class="pa-view-all__breadcrumb" :items="[{ label: 'Home', to: '/' }, { label: 'Practice Areas' }]" />

        <div class="pa-view-all__intro">
          <h1>FIGHTING FOR YOU, WHEREVER LIFE STRIKES</h1>
          <p>We fight for the compensation you deserve. With over 50 case types, we're here to guide your next steps.</p>
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
          <h2>Other Ways We Can Help</h2>
          <div class="pa-other-grid">
            <NuxtLink v-for="item in otherWays" :key="item.title" :to="item.href" class="pa-other-link">
              {{ item.title }}
              <span aria-hidden="true">›</span>
            </NuxtLink>
          </div>
          <NuxtLink to="#contact" class="pa-view-all__get-started">
            Get Started
            <span aria-hidden="true">↓</span>
          </NuxtLink>
        </div>

        <div class="pa-corporate" aria-labelledby="corporate-heading">
          <h2 id="corporate-heading">Cases Fighting Corporate Negligence</h2>
          <MediaCarousel
            :count="corporateCases.length"
            mode="paged"
            region-label="Corporate negligence cases"
            dots-label="Corporate negligence carousel position"
            strip-class="pa-corporate__strip"
            dots-class="pa-corporate__dots"
            dot-class="pa-corporate__dot"
            active-dot-class="pa-corporate__dot--on"
            dragging-class="pa-corporate__strip--dragging"
            dot-label-prefix="Corporate case slide"
            dot-key-prefix="corporate-dot"
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

    <section class="pa-view-all__banner" aria-labelledby="more-heading">
      <div class="container">
        <div class="pa-view-all__banner-card">
          <h2 id="more-heading">More of What We Do</h2>
          <p>Whatever the practice area, every case gets our strength, focus, and care.</p>
        </div>
      </div>
    </section>

    <section class="pa-view-all__list" aria-labelledby="all-practice-heading">
      <div class="container">
        <h2 id="all-practice-heading" class="sr-only">All Practice Areas</h2>
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
    title: 'Ultra-Processed Foods:',
    href: '#practice',
    text: 'Food giants sued for marketing addictive foods',
  },
  {
    title: 'Hair Color Products:',
    href: '#practice',
    text: 'Hair stylists concerned over cancer-causing ingredients',
  },
  {
    title: 'Weight Loss Drugs:',
    href: '/practice-areas/dangerous-drugs/weight-loss-drug',
    text: 'Main stream media meds may have dangerous side effects',
  },
  {
    title: 'Depo-Provera:',
    href: '/practice-areas/dangerous-drugs/depo-provera',
    text: 'Popular birth control may lead to brain tumors',
  },
]

const featuredCards: FeatureCard[] = [
  {
    title: 'Car Accidents',
    href: '/practice-areas/car-accident',
    text: "We've helped thousands recover medical bills, lost wages, and more after crashes caused by negligence.",
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 19h22M8 16l2-6h12l2 6"/><circle cx="11" cy="21" r="2"/><circle cx="23" cy="21" r="2"/></svg>`,
  },
  {
    title: 'Slip and Fall',
    href: '/practice-areas/slip-and-fall',
    text: 'From wet floors to unsafe conditions, we fight to hold property owners accountable for your injuries.',
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="7" r="3"/><path d="M16 10v7l-5 10M16 17l6 10M11 18h11"/></svg>`,
  },
  {
    title: "Workers' Compensation",
    href: '#practice',
    text: 'We guide workers through the claims process to secure the benefits they deserve for workplace injuries.',
    icon: `<svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="11" width="16" height="14" rx="2"/><path d="M12 11V8h8v3M12 17h8"/></svg>`,
  },
]

const otherWays: PracticeLink[] = [
  { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
  { title: 'Nursing Home Abuse', href: '#practice' },
  { title: 'Dangerous Drugs', href: '/practice-areas/dangerous-drugs' },
  { title: 'Defective Products', href: '#practice' },
  { title: 'Social Security Disability', href: '#practice' },
  { title: 'Labor & Employment', href: '#practice' },
]

const practiceLinks: PracticeLink[] = [
  { title: 'Admiralty and Maritime Law', href: '#practice' },
  { title: 'Americans with Disabilities Act', href: '#practice' },
  { title: 'Aviation Accident', href: '/practice-areas/aviation-accident' },
  { title: 'Birth Injury', href: '#practice' },
  { title: 'Boating Accident', href: '/practice-areas/boating-accident' },
  { title: 'Brain Injury', href: '/practice-areas/brain-injury' },
  { title: 'Breach of Contract', href: '#practice' },
  { title: 'Burn Injury', href: '/practice-areas/burn-injury' },
  { title: 'California Wildfire', href: '#practice' },
  { title: 'Car Accident', href: '/practice-areas/car-accident' },
  { title: 'Carbon Monoxide Exposure', href: '#practice' },
  { title: 'Catastrophic Events', href: '#practice' },
  { title: 'Child Sexual Abuse', href: '#practice' },
  { title: 'Class Action', href: '#practice' },
  { title: 'Construction Accident', href: '#practice' },
  { title: 'Construction Defect', href: '#practice' },
  { title: 'Dangerous Drugs', href: '/practice-areas/dangerous-drugs' },
  { title: 'Data Privacy', href: '#practice' },
  { title: 'Defective Airbag', href: '#practice' },
  { title: 'Depo-Provera', href: '/practice-areas/dangerous-drugs/depo-provera' },
  { title: 'Discrimination', href: '#practice' },
  { title: 'Dog Bite', href: '#practice' },
  { title: 'Dram Shop Liability', href: '#practice' },
  { title: 'Drowning Accident', href: '#practice' },
  { title: 'Elder Abuse', href: '#practice' },
  { title: 'Employee Misclassification', href: '#practice' },
  { title: 'Explosion', href: '#practice' },
  { title: 'Family and Medical Leave Act', href: '#practice' },
  { title: 'GM Transmission Issue', href: '#practice' },
  { title: 'Grok AI Lawsuit', href: '#practice' },
  { title: 'Hair Dye Lawsuit', href: '#practice' },
  { title: 'Insurance Claim', href: '#practice' },
  { title: 'Labor and Employment', href: '#practice' },
  { title: 'Mass Arbitration', href: '#practice' },
  { title: 'Mass Tort', href: '#practice' },
  { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
  { title: 'Mesothelioma', href: '/practice-areas/mesothelioma' },
  { title: 'Motorcycle Accident', href: '/practice-areas/motorcycle-accident' },
  { title: 'Negligent Security', href: '#practice' },
  { title: 'Nursing Home Abuse', href: '#practice' },
  { title: 'Offshore Injury', href: '#practice' },
  { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
  { title: 'Premises Liability', href: '#practice' },
  { title: 'Product Liability', href: '#practice' },
  { title: 'Professional Liability', href: '#practice' },
  { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
  { title: 'Social Media Harm', href: '#practice' },
  { title: 'Social Security Disability', href: '#practice' },
  { title: 'Spine Injury', href: '/practice-areas/spinal-cord-injury' },
  { title: 'Talcum Powder Lawsuit', href: '#practice' },
  { title: 'Toxic Air Lawsuit', href: '#practice' },
  { title: 'Toxic and Environmental', href: '#practice' },
  { title: 'Truck Accident', href: '/practice-areas/truck-accident' },
  { title: 'TruDi Navigation System Lawsuit', href: '#practice' },
  { title: 'Ultra-Processed Foods', href: '#practice' },
  { title: 'Under Armour Data Breach', href: '#practice' },
  { title: 'Unpaid Overtime', href: '#practice' },
  { title: 'Veterans Benefits', href: '#practice' },
  { title: 'Wage & Hour', href: '#practice' },
  { title: 'Weight Loss Drug', href: '#practice' },
  { title: 'Whistleblower & Qui Tam', href: '#practice' },
  { title: 'Wildfire', href: '#practice' },
  { title: "Workers' Compensation", href: '#practice' },
  { title: 'Wrongful Death', href: '#practice' },
  { title: 'Wrongful Termination', href: '#practice' },
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
