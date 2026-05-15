<template>
  <section class="or-hero" aria-labelledby="or-hero-heading">
    <div class="container">
      <div class="or-hero__head">
        <h1 id="or-hero-heading">$30 BILLION RECOVERED<br />FOR CLIENTS</h1>
        <p>Every verdict and settlement is a life back on track.</p>
        <a href="#contact" class="or-hero__cta">See if you qualify</a>
      </div>

      <div class="or-results" aria-label="Featured case results">
        <div class="or-results__track" :style="{ transform: `translateX(-${activePage * 100}%)` }">
          <div v-for="(page, pageIndex) in pages" :key="pageIndex" class="or-results__page">
            <article
              v-for="item in page"
              :key="item.amount + item.title"
              class="or-result-card"
              :class="{ 'or-result-card--flipped': isFlipped(item) }"
            >
              <div class="or-result-card__inner">
                <div class="or-result-card__face or-result-card__face--front">
                  <div class="or-result-card__location">
                    <LocationIcon />
                    {{ item.location }}
                  </div>
                  <div class="or-result-card__body">
                    <span class="or-result-card__icon" v-html="icons[item.icon]" />
                    <strong>{{ item.amount }}</strong>
                    <h2>{{ item.title }}</h2>
                  </div>
                  <button type="button" class="or-result-card__link" @click="openCard(item)">
                    Read more <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <div class="or-result-card__face or-result-card__face--back">
                  <div class="or-result-card__detail">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.detail ?? fallbackDetail(item) }}</p>
                  </div>
                  <button type="button" class="or-result-card__link" @click="closeCard(item)">
                    Close <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="or-results__footer">
        <div class="or-results__controls" aria-label="Case result pages">
          <button type="button" :disabled="activePage === 0" aria-label="Previous results" @click="prevPage">←</button>
          <button
            type="button"
            :disabled="activePage === pages.length - 1"
            aria-label="Next results"
            @click="nextPage"
          >
            →
          </button>
        </div>
        <p>Results may vary depending on your particular facts and legal circumstances.</p>
        <a href="#explore-results" class="or-results__more">View more cases <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type IconKey = 'group' | 'shield' | 'car' | 'scale' | 'bike' | 'briefcase' | 'fire'

type ResultCard = {
  location: string
  amount: string
  title: string
  icon: IconKey
  detail?: string
}

const activePage = ref(0)
const flippedCards = ref(new Set<string>())
const LocationIcon = {
  template:
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s6-6.4 6-11a6 6 0 1 0-12 0c0 4.6 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>',
}

const pages: ResultCard[][] = [
  [
    { location: 'New Orleans, LA', amount: '$13,000,000,000', title: 'Deepwater Horizon Oil Spill', icon: 'group' },
    { location: 'Los Angeles, CA', amount: '$1,800,000,000', title: 'Porter Ranch Gas Leak', icon: 'group' },
    { location: 'Orlando, FL', amount: '$644,751,855', title: 'Plaintiff v. Soho WP, LLC and BE-1 Concepts Holdings, LLC', icon: 'car' },
    { location: 'San Francisco, CA', amount: '$425,651,947', title: 'Rodriguez v. Google', icon: 'shield' },
    { location: 'Nationwide', amount: '$400,000,000', title: 'Dicamba Herbicide Settlement', icon: 'group' },
    { location: 'Northern District of Georgia', amount: '$380,500,000', title: 'Equifax, Inc., Customer Data Security Breach Litigation', icon: 'shield' },
    { location: 'Eastern District of Virginia', amount: '$190,000,000', title: 'Capital One Consumer Data Security Breach Litigation', icon: 'shield' },
    { location: 'Alachua, FL', amount: '$120,000,000', title: 'Jacob T. Rodgers v. City of Gainesville', icon: 'car' },
    { location: 'Northern District of California', amount: '$117,500,000', title: 'Yahoo! Inc. Customer Data Security Breach Litigation', icon: 'shield' },
  ],
  [
    { location: 'Miami, FL', amount: '$100,000,000', title: 'Campbell v. Monte Carlo of Miami Condo Association', icon: 'briefcase' },
    { location: 'Volusia County, FL', amount: '$90,800,000', title: 'Estate of Frank Townsend v. RJ Reynolds, et al.', icon: 'group' },
    { location: 'Washington, DC', amount: '$63,000,000', title: 'U.S. OPM Data Security Breach Litigation', icon: 'shield' },
    { location: 'S.D. NY', amount: '$60,000,000', title: 'Morgan Stanley Data Security Litigation', icon: 'shield' },
    { location: 'Tampa, FL', amount: '$45,000,000', title: 'MGM Resorts Data Breach', icon: 'group' },
    { location: 'Escambia, FL', amount: '$40,000,000', title: 'Estate of Patricia Allen v. RJ Reynolds, et al.', icon: 'group' },
    { location: 'Hillsborough, FL', amount: '$37,850,000', title: 'Coleman v. Martinez', icon: 'briefcase' },
    { location: 'Nashville, TN', amount: '$31,894,263', title: 'Gooch v. Smyrna Ready Mix Concrete', icon: 'car' },
    { location: 'Jacksonville, FL', amount: '$30,600,000', title: 'Scott Winckler vs. Suzuki Motor Corporation', icon: 'bike' },
  ],
  [
    {
      location: 'Tampa, FL',
      amount: '$30,000,000',
      title: 'Conrad v. Woodward',
      icon: 'fire',
      detail:
        'In 2024, a Tampa jury awarded $30.1 million in Conrad v. Woodward following a devastating fire. Morgan & Morgan attorney Ryan Will helped hold the responsible parties accountable.',
    },
    {
      location: 'Philadelphia, PA',
      amount: '$29,045,285',
      title: 'Heath J. Wilson v. JM Lapp Plumbing and Heating',
      icon: 'car',
      detail:
        'In 2024, a Philadelphia jury awarded $29 million to cyclist Heath Wilson after a plumber’s truck struck him at an intersection, leaving him with catastrophic brain injuries.',
    },
    {
      location: 'Orlando, FL',
      amount: '$25,927,183',
      title: 'Brink v. Ruiz',
      icon: 'bike',
      detail:
        'In 2024, a Florida jury awarded $25 million to a motorcyclist who suffered a traumatic brain injury in a crash. Morgan & Morgan fought for his life-changing injuries.',
    },
    {
      location: 'Orlando, FL',
      amount: '$20,839,758',
      title: 'Hurley v. John Mina',
      icon: 'car',
      detail:
        'In 2023, an Orlando jury awarded $20.8 million to a motorcyclist injured in a serious crash. Morgan & Morgan attorney Ryan Rudd fought to ensure fair compensation.',
    },
    {
      location: 'San Francisco, CA',
      amount: '$20,000,000',
      title: 'Smith v. Apple, Inc.',
      icon: 'group',
      detail:
        'In 2024, Apple agreed to a $20 million settlement resolving claims that certain Apple Watch models were prone to battery swelling and screen damage.',
    },
    {
      location: 'Lawrenceville, GA',
      amount: '$19,000,000',
      title: 'Entrekin, Amos vs Comcast',
      icon: 'scale',
      detail:
        'In 2023, a Gwinnett County jury awarded nearly $19M to the family of Amos Entrekin after a Comcast work van ran a red light and crashed into his car.',
    },
    {
      location: 'Florida',
      amount: '$18,888,875',
      title: 'Van Zyl v. Kincaid',
      icon: 'car',
      detail:
        'In 2024, a Florida jury awarded $18.8 million to Deon Van Zyl after a negligent driver cut him off, causing a crash that left him permanently wheelchair-bound.',
    },
    {
      location: 'Gainesville, FL',
      amount: '$17,000,000',
      title: 'Gainesville Apartment Fire',
      icon: 'fire',
      detail:
        'In 2025, an Alachua County jury awarded $17 million to a mother and child badly burned in a Gainesville apartment fire caused by preventable safety failures.',
    },
    {
      location: 'Jacksonville, FL',
      amount: '$16,422,353',
      title: 'Jessica Long vs. The Travelers Home and Marine Insurance Company',
      icon: 'car',
      detail:
        'In 2022, a Jacksonville jury awarded $16.4 million to Jessica Long after a devastating car crash left her with lasting injuries.',
    },
  ],
  [
    {
      location: 'Orange County, FL',
      amount: '$14,500,000',
      title: 'Good Gateway LLC and SEG Gateway LLC',
      icon: 'briefcase',
      detail:
        'In 2014, an Orange County jury awarded $14.5 million to Good Gateway LLC and SEG Gateway LLC after developers proved they were defrauded out of membership interests.',
    },
    {
      location: 'Volusia, FL',
      amount: '$13,500,000',
      title: 'Brown v. R. J. Reynolds Tobacco Company',
      icon: 'group',
      detail:
        'In 2024, a Florida jury awarded $13.5 million to the family of Arthur Brown, who died from COPD after decades of cigarette addiction.',
    },
    {
      location: 'Kissimmee, FL',
      amount: '$12,206,398',
      title: 'Woida, Joanne vs Evers Wood Products Inc. and Thomas, Rosetta',
      icon: 'car',
      detail:
        'In 2023, an Osceola County jury awarded $12.2 million to Joanne Woida after a dump truck struck her car, causing severe neck and back injuries.',
    },
    {
      location: 'Florida',
      amount: '$12,023,195',
      title: 'Rausin v. Rodgers',
      icon: 'car',
      detail:
        'In 2024, a Florida jury awarded $12 million to the family of a 13-year-old girl left paraplegic after a reckless driver rear-ended her grandparents’ car.',
    },
    {
      location: 'Philadelphia, PA',
      amount: '$11,997,285',
      title: 'Yvette Torres v. Penske, et al.',
      icon: 'car',
      detail:
        'In 2024, a Philadelphia jury awarded $12 million to Yvette Torres, who suffered severe neck and back injuries after being struck by a commercial truck.',
    },
    {
      location: 'Orlando, FL',
      amount: '$11,391,183',
      title: 'Olga Mun v. Site Centers Corp., (Target) et. al',
      icon: 'car',
      detail:
        'In 2025, an Orange County jury awarded $11.3 million to a woman who fractured her leg after tripping on an uneven curb at Target in Winter Garden.',
    },
    {
      location: 'Orlando, FL',
      amount: '$11,000,000',
      title: 'Estate of Vinh Chung v. AK Family Holdings',
      icon: 'scale',
      detail:
        'In 2025, an Orlando jury awarded $11 million to the estate of Vinh Chung for wrongful death claims after a preventable incident.',
    },
    {
      location: 'Daytona Beach, FL',
      amount: '$10,766,000',
      title: 'William Duffey v. Janet Rogier',
      icon: 'bike',
      detail:
        'In 2025, a Volusia County jury awarded $10.6 million to Marine Corps veteran William Duffey, who was severely injured when a driver turned into his path.',
    },
    {
      location: 'Fulton, GA',
      amount: '$10,042,880',
      title: 'Wright v. Hagos Park, LLC & John Doe Corporation',
      icon: 'briefcase',
      detail:
        'In 2024, a Fulton County jury awarded $10 million to the family of Sharon Wright, who was fatally shot during an unprovoked attack at an apartment complex.',
    },
  ],
]

const icons: Record<IconKey, string> = {
  group:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="2.2"/><circle cx="15" cy="8" r="2.2"/><path d="M5 18c.4-3 2-5 4-5s3.6 2 4 5"/><path d="M11 18c.4-3 2-5 4-5s3.6 2 4 5"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z"/><path d="M12 7v10"/></svg>',
  car:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 15l1.5-5h11L19 15"/><path d="M4 15h16v4H4z"/><circle cx="7" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/></svg>',
  scale:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 4v16M6 7h12M8 7l-3 6h6L8 7zm8 0l-3 6h6l-3-6z"/><path d="M8 20h8"/></svg>',
  bike:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M8 17l4-7 3 7M12 10h3l2 3M10 7h3"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="8" width="16" height="11" rx="2"/><path d="M9 8V6h6v2M4 13h16"/></svg>',
  fire:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21c-4 0-7-2.7-7-6.4 0-2.7 1.6-4.8 3.5-6.6.2 2 1 3.1 2.1 3.7C10.4 8.5 12 5.8 15 3c.2 3.3 4 5.4 4 10 0 4.4-3 8-7 8z"/></svg>',
}

function nextPage() {
  activePage.value = Math.min(activePage.value + 1, pages.length - 1)
}

function prevPage() {
  activePage.value = Math.max(activePage.value - 1, 0)
}

function cardKey(item: ResultCard) {
  return `${item.amount}-${item.title}`
}

function isFlipped(item: ResultCard) {
  return flippedCards.value.has(cardKey(item))
}

function openCard(item: ResultCard) {
  flippedCards.value = new Set(flippedCards.value).add(cardKey(item))
}

function closeCard(item: ResultCard) {
  const next = new Set(flippedCards.value)
  next.delete(cardKey(item))
  flippedCards.value = next
}

function fallbackDetail(item: ResultCard) {
  return `Morgan & Morgan helped clients pursue accountability in ${item.location}, securing ${item.amount} in ${item.title}.`
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700;900&display=swap');

.or-hero {
  background: #071f3c;
  color: #fff;
  padding: clamp(6rem, 11vw, 8rem) 0 2.4rem;
}

.or-hero__head {
  text-align: center;
  margin-bottom: 2rem;
}

.or-hero__head h1 {
  margin: 0;
  font-family: 'Roboto Condensed', Impact, sans-serif;
  font-size: clamp(3rem, 8vw, 5.25rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.025em;
}

.or-hero__head p {
  margin: 1.1rem 0 1.5rem;
  font-size: clamp(1rem, 1.7vw, 1.25rem);
  color: rgba(255, 255, 255, 0.88);
}

.or-hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.65rem;
  padding: 0.7rem 1.25rem;
  border-radius: 5px;
  background: #ffdf00;
  color: #07111f;
  font-weight: 900;
  text-decoration: none;
}

.or-results {
  overflow: hidden;
  max-width: 63rem;
  margin-inline: auto;
}

.or-results__track {
  display: flex;
  transition: transform 0.38s ease;
}

.or-results__page {
  flex: 0 0 100%;
  display: grid;
  gap: 1.2rem;
  padding: 0 0.1rem;
}

@media (min-width: 720px) {
  .or-results__page {
    grid-template-columns: repeat(3, 1fr);
  }
}

.or-result-card {
  min-height: 15.25rem;
  perspective: 1200px;
}

.or-result-card__inner {
  position: relative;
  min-height: 15.25rem;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.42s ease;
}

.or-result-card--flipped .or-result-card__inner {
  transform: rotateY(180deg);
}

.or-result-card__face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  color: #10243d;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.16);
  backface-visibility: hidden;
}

.or-result-card__face--back {
  transform: rotateY(180deg);
  grid-template-rows: 1fr auto;
}

.or-result-card__location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  min-height: 1.65rem;
  border-bottom: 1px solid #d7e4f4;
  font-size: 0.78rem;
  font-weight: 800;
  color: #30455d;
}

.or-result-card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  min-height: 0;
  overflow: hidden;
  padding: 0.95rem 1rem 1rem;
  text-align: center;
}

.or-result-card__icon {
  display: grid;
  place-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid #e1e5ea;
  border-radius: 16px;
  background: #f7f7f7;
  color: #111827;
}

.or-result-card__icon :deep(svg) {
  width: 1.45rem;
  height: 1.45rem;
}

.or-result-card strong {
  font-family: 'Roboto Condensed', Impact, sans-serif;
  font-size: clamp(1.7rem, 3.5vw, 2.35rem);
  line-height: 0.9;
  color: #0872d9;
}

.or-result-card h2 {
  margin: 0;
  font-size: clamp(0.9rem, 1.35vw, 1.02rem);
  line-height: 1.25;
  font-weight: 800;
  color: #263a52;
  overflow-wrap: anywhere;
}

.or-result-card__detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 0;
  overflow: auto;
  padding: 1.6rem 1.35rem 1rem;
  text-align: center;
}

.or-result-card__detail h2 {
  margin-bottom: 0.9rem;
  font-size: clamp(1rem, 1.5vw, 1.18rem);
}

.or-result-card__detail p {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #405168;
}

.or-result-card__link {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-height: 2.2rem;
  width: 100%;
  border: 0;
  background: #dceeff;
  border-top: 1px solid #a9d0ff;
  color: #233b56;
  font-size: 0.8rem;
  font-weight: 800;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
}

.or-result-card__face--front .or-result-card__link {
  background: #dceeff;
}

.or-result-card__face--back .or-result-card__link {
  gap: 0.45rem;
}

.or-results__footer {
  max-width: 63rem;
  margin: 1.4rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 720px) {
  .or-results__footer {
    grid-template-columns: 1fr 2fr 1fr;
  }
}

.or-results__controls {
  display: flex;
  gap: 0.55rem;
}

.or-results__controls button {
  width: 2rem;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
}

.or-results__controls button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.or-results__footer p {
  margin: 0;
  text-align: center;
  font-size: 0.63rem;
  color: rgba(255, 255, 255, 0.78);
}

.or-results__more {
  justify-self: start;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
}

@media (min-width: 720px) {
  .or-results__more {
    justify-self: end;
  }
}

.or-results__more span {
  display: inline-grid;
  place-items: center;
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.25rem;
  border-radius: 4px;
  background: #fff;
  color: #0872d9;
}
</style>
