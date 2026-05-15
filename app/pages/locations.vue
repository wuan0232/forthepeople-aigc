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

          <aside class="loc-local" aria-label="Your local office">
            <p class="loc-local__eyebrow">Your Local Office</p>
            <article class="loc-local__card">
              <h2>Morgan &amp; Morgan Los Angeles</h2>
              <hr />
              <p class="loc-local__row">
                <span class="loc-local__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span>
                  633 West Fifth Street, Suite 2200<br />
                  Los Angeles, CA 90071
                </span>
              </p>
              <p class="loc-local__row">
                <span class="loc-local__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 4h4l2 5-2 1a12 12 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                  </svg>
                </span>
                <a href="tel:+13238253424">(323) 825-3424</a>
              </p>
              <a href="#office" class="loc-local__cta">View Office</a>
            </article>
          </aside>
        </div>
      </div>
    </section>

    <section class="loc-no-visit" aria-label="No office visit needed">
      <div class="container loc-no-visit__grid">
        <h2>No office visit needed.</h2>
        <ul>
          <li v-for="b in benefits" :key="b">
            <span aria-hidden="true">✓</span>
            {{ b }}
          </li>
        </ul>
        <a href="#contact" class="loc-no-visit__link">
          Start your claim
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section id="all-offices" class="loc-all">
      <div class="container">
        <div class="loc-all__head">
          <h2>With 140 offices nationwide, we're here to help.</h2>
          <div class="loc-all__map">
            <img
              src="/locations-us-offices-map.svg"
              alt="US map showing Morgan &amp; Morgan office locations nationwide"
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
              <li v-for="(city, idx) in state.cities" :key="state.name + '-' + idx + '-' + city">
                <a href="#office">{{ city }}</a>
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
          <p>Explore these resources to help you make informed decisions after an accident.</p>
        </div>

        <MediaCarousel
          :count="howItWorks.length"
          mode="cards"
          region-label="How it works carousel"
          dots-label="How it works position"
          strip-class="loc-how__strip"
          dots-class="loc-how__dots"
          dot-class="loc-how__dot"
          active-dot-class="loc-how__dot--on"
          dragging-class="loc-how__strip--dragging"
          dot-label-prefix="How it works slide"
          dot-key-prefix="how-dot"
        >
          <article
            v-for="card in howItWorks"
            :key="card.title"
            class="loc-how__card"
            :class="{ 'loc-how__card--muted': card.muted }"
          >
            <div class="loc-how__art" v-html="card.art" />
            <h3 :class="{ 'loc-how__title--underline': card.muted }">{{ card.title }}</h3>
          </article>
        </MediaCarousel>
      </div>
    </section>

    <SiteLeadFeeSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Locations | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Find a Morgan & Morgan office near you. 140 offices nationwide, free consultations, and 24/7 support.',
    },
  ],
})

const benefits = ['Sign agreements digitally', 'Upload documents', 'Track case in real-time']

type StateGroup = { name: string; cities: string[] }

const states: StateGroup[] = [
  { name: 'Alabama', cities: ['Birmingham', 'Huntsville', 'Mobile', 'Montgomery'] },
  { name: 'Alaska', cities: ['Anchorage'] },
  { name: 'Arizona', cities: ['Chandler', 'Mesa', 'Peoria', 'Phoenix', 'Tucson'] },
  { name: 'Arkansas', cities: ['Little Rock'] },
  {
    name: 'California',
    cities: [
      'Fresno',
      'Irvine',
      'Los Angeles',
      'Los Angeles',
      'Los Angeles',
      'Riverside',
      'Sacramento',
      'San Diego',
      'San Francisco',
    ],
  },
  { name: 'Colorado', cities: ['Denver'] },
  { name: 'Connecticut', cities: ['Hamden', 'New Haven'] },
  { name: 'Delaware', cities: ['Wilmington'] },
  {
    name: 'Florida',
    cities: [
      'Bradenton',
      'Daytona Beach',
      'DeLand',
      'Fort Lauderdale',
      'Fort Myers',
      'Gainesville',
      'Jacksonville',
      'Key West',
      'Kissimmee',
      'Lakeland',
      'Lakeland',
      'Melbourne',
      'Miami',
      'Naples',
      'Ocala',
      'Orange Park',
      'Orlando',
      'Palm Harbor',
      'Panama City',
      'Pensacola',
      'Port St. Lucie',
      'Sarasota',
      'Spring Hill',
      'St. Augustine',
      'St. Petersburg',
      'Tallahassee',
      'Tampa',
      'Tavares',
      'The Villages',
      'Titusville',
      'West Palm Beach',
      'West Tampa',
      'Winter Haven',
      'Winter Park',
    ],
  },
  {
    name: 'Georgia',
    cities: [
      'Albany',
      'Alpharetta',
      'Alpharetta',
      'Alpharetta',
      'Atlanta',
      'Augusta',
      'Brunswick',
      'Columbus, Georgia',
      'Macon',
      'Marietta',
      'Savannah',
    ],
  },
  { name: 'Hawaii', cities: ['Honolulu'] },
  { name: 'Idaho', cities: ['Boise'] },
  { name: 'Illinois', cities: ['Chicago'] },
  { name: 'Indiana', cities: ['Indianapolis', 'New Albany'] },
  { name: 'Iowa', cities: ['Des Moines'] },
  { name: 'Kansas', cities: ['Wichita'] },
  {
    name: 'Kentucky',
    cities: ['Bowling Green', 'Lexington', 'Louisville', 'Louisville', 'Owensboro', 'Paducah'],
  },
  { name: 'Louisiana', cities: ['New Orleans'] },
  { name: 'Maine', cities: ['Portland Maine'] },
  { name: 'Maryland', cities: ['Baltimore'] },
  { name: 'Massachusetts', cities: ['Boston', 'Medford'] },
  { name: 'Michigan', cities: ['Detroit', 'Grand Rapids'] },
  { name: 'Minnesota', cities: ['Minneapolis'] },
  { name: 'Mississippi', cities: ['Biloxi', 'Hattiesburg', 'Jackson'] },
  { name: 'Missouri', cities: ['St. Louis'] },
  { name: 'Montana', cities: ['Bozeman'] },
  { name: 'Nebraska', cities: ['Lincoln'] },
  { name: 'North Carolina', cities: ['Charlotte', 'Raleigh'] },
  { name: 'North Dakota', cities: ['Fargo'] },
  { name: 'Ohio', cities: ['Cincinnati', 'Columbus, Ohio', 'Dayton'] },
  { name: 'Oklahoma', cities: ['Oklahoma City'] },
  { name: 'Oregon', cities: ['Portland'] },
  { name: 'Pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Scranton'] },
  { name: 'Rhode Island', cities: ['Providence'] },
  {
    name: 'South Carolina',
    cities: ['Charleston, South Carolina', 'Columbia', 'Greenville', 'Hilton Head', 'Myrtle Beach'],
  },
  { name: 'South Dakota', cities: ['Sioux Falls'] },
  {
    name: 'Tennessee',
    cities: ['Chattanooga', 'Knoxville', 'Memphis', 'Murfreesboro', 'Nashville'],
  },
  { name: 'Texas', cities: ['Dallas', 'Houston'] },
  { name: 'Utah', cities: ['Salt Lake City'] },
  { name: 'Vermont', cities: ['Burlington'] },
  { name: 'Virginia', cities: ['Arlington', 'Richmond'] },
  { name: 'Washington', cities: ['Seattle'] },
  { name: 'Washington D.C.', cities: ['Washington, D.C.'] },
  { name: 'West Virginia', cities: ['Charleston, West Virginia'] },
  { name: 'Wisconsin', cities: ['Milwaukee'] },
  { name: 'Wyoming', cities: ['Cheyenne'] },
]

type HowCard = { title: string; art: string; muted?: boolean }

const howItWorks: HowCard[] = [
  {
    title: 'The Basics: What is a personal injury lawsuit?',
    art: `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect width="200" height="200" rx="14" fill="#cfe1ff"/>
      <path d="M70 150 L80 150 L86 100 L74 100 Z" fill="#1f6dde" stroke="#0a1f44" stroke-width="2"/>
      <rect x="60" y="148" width="36" height="14" rx="3" fill="#ffd200" stroke="#0a1f44" stroke-width="2"/>
      <rect x="60" y="160" width="60" height="6" fill="#1f6dde" stroke="#0a1f44" stroke-width="2"/>
    </svg>`,
  },
  {
    title: 'How Much is My Personal Injury Case Worth?',
    art: `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect width="200" height="200" rx="14" fill="#b9d4ff"/>
      <path d="M100 60 c-22 0 -38 30 -38 60 c0 24 18 38 38 38 s38 -14 38 -38 c0 -30 -16 -60 -38 -60z" fill="#ffd200" stroke="#0a1f44" stroke-width="3"/>
      <text x="100" y="130" font-family="Arial" font-size="32" font-weight="800" text-anchor="middle" fill="#0a1f44">$</text>
      <path d="M82 60 l36 0 l-6 -10 l-24 0z" fill="#0a1f44"/>
    </svg>`,
  },
  {
    title: 'The Morgan & Morgan Difference',
    art: `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect width="200" height="200" rx="14" fill="#b9d4ff"/>
      <circle cx="60" cy="110" r="22" fill="#fff" stroke="#0a1f44" stroke-width="2"/>
      <circle cx="60" cy="110" r="10" fill="#ffd200"/>
      <rect x="78" y="98" width="60" height="28" rx="4" fill="#1f6dde" stroke="#0a1f44" stroke-width="2"/>
      <polygon points="138,98 158,108 158,116 138,126" fill="#ffd200" stroke="#0a1f44" stroke-width="2"/>
    </svg>`,
  },
  {
    title: 'Why Do Some Personal Injury Cases Get Turned Down ("Are Ineligible")?',
    muted: true,
    art: `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect width="200" height="200" rx="14" fill="#e8ecf1"/>
      <g stroke="#0a1f44" stroke-width="3" stroke-linejoin="round">
        <path d="M58 78 l54 -28 l16 26 l-54 28z" fill="#1f6dde"/>
        <rect x="78" y="76" width="22" height="22" transform="rotate(-25 89 87)" fill="#ffd200"/>
        <line x1="120" y1="78" x2="160" y2="138" />
        <line x1="120" y1="78" x2="170" y2="120" />
        <line x1="156" y1="116" x2="170" y2="148" />
      </g>
    </svg>`,
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

.loc-view-all span,
.loc-no-visit__link span {
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

.loc-local__card {
  padding: 1.7rem 1.6rem;
  background: #fff;
  border-radius: 0.7rem;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.05);
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
  padding: 2rem 0;
}

.loc-no-visit__grid {
  display: grid;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 960px) {
  .loc-no-visit__grid {
    grid-template-columns: auto 1fr auto;
    gap: 1.5rem;
  }
}

.loc-no-visit h2 {
  margin: 0;
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  color: #1f2933;
}

.loc-no-visit ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

@media (min-width: 720px) {
  .loc-no-visit ul {
    grid-template-columns: repeat(3, 1fr);
  }
}

.loc-no-visit li {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  min-height: 2.85rem;
  padding: 0.55rem 1.1rem;
  background: #dadde2;
  border-radius: 0.4rem;
  font-weight: 800;
  color: #1f2933;
}

.loc-no-visit li span {
  color: var(--blue);
}

.loc-no-visit__link {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  color: #1f2933;
  text-decoration: none;
  font-weight: 800;
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
  gap: 0.5rem;
  align-items: end;
  margin-bottom: 2rem;
}

@media (min-width: 720px) {
  .loc-how__head {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
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

:deep(.loc-how__strip) {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  touch-action: pan-x;
  cursor: grab;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 0.5rem;
  width: 100%;
  max-width: 100%;
}

:deep(.loc-how__strip)::-webkit-scrollbar {
  display: none;
}

:deep(.loc-how__strip--dragging) {
  cursor: grabbing;
  scroll-snap-type: none;
  scroll-behavior: auto;
  user-select: none;
}

:deep(.loc-how__card) {
  flex: 0 0 auto;
  width: calc((100% - 2.5rem) / 3);
  min-width: 14rem;
  display: grid;
  gap: 0.85rem;
  scroll-snap-align: start;
}

@media (max-width: 720px) {
  :deep(.loc-how__card) {
    width: 80%;
  }
}

:deep(.loc-how__art) {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #cfe1ff;
  border-radius: 12px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

:deep(.loc-how__card--muted .loc-how__art) {
  background: #e8ecf1;
}

:deep(.loc-how__art svg) {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.loc-how__card h3) {
  margin: 0;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  font-weight: 800;
  color: #1f2933;
  line-height: 1.35;
}

.loc-how__title--underline {
  text-decoration: underline;
  text-underline-offset: 3px;
}

:deep(.loc-how__dots) {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

:deep(.loc-how__dot) {
  width: 0.55rem;
  height: 0.55rem;
  padding: 0;
  border: 0;
  background: #c9d3df;
  border-radius: 999px;
  cursor: pointer;
}

:deep(.loc-how__dot--on) {
  background: #000;
}

.loc-view-all:hover,
.loc-no-visit__link:hover {
  text-decoration: underline;
}
</style>
