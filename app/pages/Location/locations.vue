<template>
  <div class="loc">
    <section class="loc-hero">
      <div class="container">
        <SiteBreadcrumb class="loc-breadcrumb" :items="[{ label: 'Home', to: '/' }, { label: 'Locations' }]" />

        <div class="loc-hero__grid">
          <div>
            <h1 class="loc-hero__title">We have an<br />office near you</h1>
            <form class="loc-search" @submit.prevent>
              <span class="loc-search__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3-3" />
                </svg>
              </span>
              <input type="text" placeholder="Enter your city, state, or zip code" />
              <button type="submit">Search</button>
            </form>
            <a href="#all-offices" class="loc-view-all">
              View all locations
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside class="loc-local" id="office" aria-label="Our offices">
          <p class="loc-local__eyebrow">Our Offices</p>
          <div class="loc-local__cards">
            <article
              v-for="office in offices"
              :id="office.id"
              :key="office.id"
              class="loc-local__card"
            >
              <h2>{{ office.name }}</h2>
              <hr />
              <p class="loc-local__row">
                <span class="loc-local__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span v-for="(line, i) in office.addressLines" :key="i" class="loc-local__addr-line">
                    {{ line }}
                  </span>
                </span>
              </p>
              <p class="loc-local__row">
                <span class="loc-local__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 4h4l2 5-2 1a12 12 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                  </svg>
                </span>
                <a :href="`tel:${office.phoneTel}`">{{ office.phoneDisplay }}</a>
              </p>
              <a
                :href="office.mapsUrl"
                class="loc-local__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Office
              </a>
            </article>
          </div>
        </aside>
      </div>
    </section>

    <section class="loc-no-visit" aria-label="How to get care at our clinics">
      <div class="container">
        <div class="loc-no-visit__top">
          <h2 class="loc-no-visit__title">Come in for care—or start your plan online.</h2>
          <NuxtLink to="/medical/what-to-do" class="loc-no-visit__link link-arrow">
            Start your medical action plan
            <span class="icon-box" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="8" height="8">
                <path d="M2 10L10 2M10 2H4M10 2V8" />
              </svg>
            </span>
          </NuxtLink>
        </div>
        <ul class="loc-no-visit__benefits">
          <li v-for="b in benefits" :key="b">
            <span class="loc-no-visit__check" aria-hidden="true">✓</span>
            {{ b }}
          </li>
        </ul>
      </div>
    </section>

    <section id="all-offices" class="loc-all">
      <div class="container">
        <div class="loc-all__head">
          <h2>Our New York clinics are here to help.</h2>
          <div class="loc-all__map">
            <img
              src="/locations-us-offices-map.svg"
              alt="Map highlighting our New York office locations"
              width="353"
              height="204"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div class="loc-states">
          <div v-for="state in states" :key="state.name" class="loc-state">
            <h3>{{ state.name }}</h3>
            <ul>
              <li v-for="office in offices" :key="office.id">
                <a :href="`#${office.id}`">{{ office.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="loc-how" aria-labelledby="loc-how-heading">
      <div class="container">
        <div class="loc-how__head">
          <h2 id="loc-how-heading">How It Works</h2>
          <p>Practical patient resources for what to do after an injury—before or after your clinic visit.</p>
        </div>

        <div class="loc-how__grid" role="list">
          <NuxtLink
            v-for="card in howItWorks"
            :key="card.title"
            :to="card.href"
            class="loc-how__card"
            :class="{ 'loc-how__card--muted': card.muted }"
            role="listitem"
          >
            <div class="loc-how__art" v-html="card.art" />
            <h3 :class="{ 'loc-how__title--underline': card.muted }">{{ card.title }}</h3>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SiteLeadFeeSection />
  </div>
</template>

<script setup lang="ts">
import { SITE_OFFICES } from '~/constants/offices'

useHead({
  title: 'Locations | For The People Clinic New York Offices',
  meta: [
    {
      name: 'description',
      content:
        'Visit For The People Clinic in Flushing or Syracuse for post-injury follow-up, recovery planning, and medical next steps. Call (929) 399-3134.',
    },
  ],
})

const offices = SITE_OFFICES
const benefits = [
  'Book a clinic follow-up visit',
  'Upload visit records securely',
  'Get a clear recovery checklist',
]

type StateGroup = { name: string; cities: string[] }

const states: StateGroup[] = [{ name: 'New York', cities: SITE_OFFICES.map((o) => o.name) }]

type HowCard = { title: string; art: string; href: string; muted?: boolean }

const howItWorks: HowCard[] = [
  {
    title: '5-Step Medical Action Guide after an injury',
    href: '/medical/what-to-do',
    art: `<img src="/images/locations/loc-how-basics-lawsuit.webp" alt="" width="400" height="400" loading="lazy" decoding="async" />`,
  },
  {
    title: 'What to monitor in the first 48 hours',
    href: '/medical/what-to-do',
    art: `<img src="/images/locations/loc-how-case-worth.webp" alt="" width="400" height="400" loading="lazy" decoding="async" />`,
  },
  {
    title: 'Meet the clinicians at For The People Clinic',
    href: '/about/meet-our-doctors',
    art: `<img src="/images/locations/loc-how-morgan-difference.webp" alt="" width="400" height="400" loading="lazy" decoding="async" />`,
  },
  {
    title: 'When symptoms need urgent reassessment',
    href: '/medical/what-to-do',
    muted: true,
    art: `<img src="/images/locations/loc-how-cases-ineligible.webp" alt="" width="400" height="400" loading="lazy" decoding="async" />`,
  },
]

</script>

<style scoped>
.loc {
  background: #fff;
}

.container {
  width: var(--container);
  max-width: 100%;
  margin-inline: auto;
  padding-inline: 15px;
  box-sizing: border-box;
}

.loc-hero {
  background: #eaf2fc;
  padding: calc(var(--header-offset) + 1rem) 0 3.25rem;
}

.loc-breadcrumb {
  display: flex;
  gap: 0.45rem;
  align-items: center;
  margin: 0 0 2.25rem;
  font-size: 0.78rem;
  color: #4b5563;
}

.loc-breadcrumb :deep(a) {
  color: inherit;
  text-decoration: none;
}

.loc-hero__grid {
  display: grid;
  gap: 2.5rem;
  align-items: start;
}

@media (min-width: 900px) {
  .loc-hero__grid {
    grid-template-columns: 1.35fr 1fr;
  }
}

.loc-hero__title {
  margin: 0 0 1.75rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: clamp(2.4rem, 6vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #1f2933;
  text-transform: uppercase;
}

.loc-search {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 32rem;
  padding: 0.55rem 0.55rem 0.55rem 1rem;
  background: #fff;
  border-radius: 0.55rem;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.05);
}

.loc-search__icon {
  display: grid;
  place-items: center;
  color: #4b5563;
}

.loc-search input {
  flex: 1;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  background: transparent;
  border: 0;
  outline: none;
}

.loc-search button {
  padding: 0.7rem 1.4rem;
  background: #ffd200;
  border: 0;
  border-radius: 0.4rem;
  font-weight: 800;
  cursor: pointer;
}

.loc-view-all {
  display: inline-flex;
  gap: 0.55rem;
  align-items: center;
  margin-top: 1rem;
  color: #1f2933;
  text-decoration: none;
  font-weight: 800;
}

.loc-view-all span {
  display: inline-grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  color: #fff;
  background: var(--blue);
  border-radius: 0.35rem;
  font-size: 0.85rem;
  line-height: 1;
}

.loc-local__eyebrow {
  margin: 0 0 0.65rem;
  font-weight: 800;
  color: #1f2933;
}

.loc-local {
  margin-top: 2.25rem;
}

.loc-local__cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .loc-local__cards {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
}

.loc-local__card {
  padding: 1.7rem 1.6rem;
  background: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.05);
  scroll-margin-top: calc(var(--header-offset) + 1rem);
}

.loc-local__card h2 {
  margin: 0 0 0.85rem;
  font-size: 1.3rem;
  color: #1f2933;
}

.loc-local__card hr {
  margin: 0 0 1.05rem;
  height: 1px;
  border: 0;
  background: #e5e7eb;
}

.loc-local__addr-line {
  display: block;
}

.loc-local__row {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin: 0 0 0.95rem;
  color: #374151;
  line-height: 1.45;
}

.loc-local__row a {
  color: var(--blue);
  text-decoration: none;
  font-weight: 800;
}

.loc-local__icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 1.65rem;
  height: 1.65rem;
  margin-top: 0.1rem;
  color: var(--blue);
  background: #e3edff;
  border-radius: 999px;
}

.loc-local__cta {
  display: block;
  margin-top: 0.5rem;
  padding: 0.95rem 1rem;
  background: #ffd200;
  color: #1f2933;
  text-decoration: none;
  text-align: center;
  font-weight: 800;
  border-radius: 0.4rem;
}

.loc-no-visit {
  background: #f3f4f6;
  padding: clamp(1.75rem, 3vw, 2.25rem) 0;
}

.loc-no-visit__top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem 1.5rem;
  margin-bottom: 1.25rem;
}

.loc-no-visit__title {
  margin: 0;
  font-size: clamp(1.25rem, 2.2vw, 1.5rem);
  font-weight: 800;
  color: #1f2933;
  line-height: 1.2;
}

.loc-no-visit__link {
  flex-shrink: 0;
  color: #1f2933;
  font-weight: 800;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  text-decoration: none;
  white-space: nowrap;
}

.loc-no-visit__link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.loc-no-visit__link .icon-box {
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 4px;
}

.loc-no-visit__benefits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.65rem;
}

@media (min-width: 720px) {
  .loc-no-visit__benefits {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
}

.loc-no-visit__benefits li {
  display: flex;
  gap: 0.55rem;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  background: #e0e3e8;
  border-radius: 6px;
  font-size: 0.92rem;
  font-weight: 800;
  color: #1f2933;
  line-height: 1.25;
  text-align: left;
}

@media (min-width: 720px) {
  .loc-no-visit__benefits li {
    justify-content: flex-start;
  }
}

.loc-no-visit__check {
  flex-shrink: 0;
  font-size: 0.85rem;
  font-weight: 800;
  color: #111;
  line-height: 1;
}

.loc-all {
  padding: 4rem 0 2.5rem;
}

.loc-all__head {
  display: grid;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;
}

@media (min-width: 900px) {
  .loc-all__head {
    grid-template-columns: 1.1fr 1fr;
  }
}

.loc-all__head h2 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #1f2933;
  letter-spacing: -0.02em;
}

.loc-all__map img {
  display: block;
  width: 100%;
  max-width: 353px;
  height: auto;
  margin-left: auto;
}

.loc-states {
  column-count: 1;
  column-gap: 3.5rem;
}

@media (min-width: 720px) {
  .loc-states {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .loc-states {
    column-count: 3;
  }
}

.loc-state {
  break-inside: avoid;
  margin: 0 0 1.5rem;
}

.loc-state h3 {
  margin: 0 0 0.65rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: #1f2933;
}

.loc-state ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.loc-state a {
  color: #6b7280;
  text-decoration: none;
}

.loc-state a:hover {
  color: var(--blue);
  text-decoration: underline;
}

.loc-how {
  padding: 3.5rem 0 4.5rem;
  background: #f3f4f6;
}

.loc-how__head {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-inline: auto;
  text-align: center;
}

.loc-how__head h2 {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  color: #1f2933;
}

.loc-how__head p {
  margin: 0;
  color: #4b5563;
  line-height: 1.5;
}

.loc-how__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  width: 100%;
  max-width: 72rem;
  margin-inline: auto;
  justify-items: center;
}

.loc-how__card {
  width: 100%;
  max-width: 16.5rem;
  display: grid;
  gap: 0.85rem;
  color: inherit;
  text-decoration: none;
}

.loc-how__card:hover h3 {
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 1024px) {
  .loc-how__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 36rem;
  }
}

@media (max-width: 520px) {
  .loc-how__grid {
    grid-template-columns: 1fr;
    max-width: 18rem;
  }
}

.loc-how__art {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #cfe1ff;
  border-radius: 12px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.loc-how__card--muted .loc-how__art {
  background: #e8ecf1;
}

.loc-how__art svg,
.loc-how__art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.loc-how__card h3 {
  margin: 0;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  font-weight: 800;
  color: #1f2933;
  line-height: 1.35;
  text-align: center;
}

.loc-how__title--underline {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.loc-view-all:hover {
  text-decoration: underline;
}
</style>
