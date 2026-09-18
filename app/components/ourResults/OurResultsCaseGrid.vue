<template>
  <section class="or-hero" aria-labelledby="or-hero-heading">
    <div class="container">
      <div class="or-hero__head">
        <h1 id="or-hero-heading">RECOVERY STORIES<br />FOCUSED ON CARE</h1>
        <p>Real patient pathways after injury—stabilization, follow-up, and getting daily life back on track.</p>
        <a href="/medical/what-to-do" class="or-hero__cta">Start your medical action plan</a>
      </div>

      <div class="or-results" aria-label="Featured recovery stories">
        <div class="or-results__track" :style="{ transform: `translateX(-${activePage * 100}%)` }">
          <div v-for="(page, pageIndex) in pages" :key="pageIndex" class="or-results__page">
            <article
              v-for="item in page"
              :key="item.highlight + item.title"
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
                    <strong>{{ item.highlight }}</strong>
                    <h2>{{ item.title }}</h2>
                  </div>
                  <button type="button" class="or-result-card__link" @click="openCard(item)">
                    Read more <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <div class="or-result-card__face or-result-card__face--back">
                  <div class="or-result-card__detail">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.detail }}</p>
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
        <div class="or-results__controls" aria-label="Recovery story pages">
          <button type="button" :disabled="activePage === 0" aria-label="Previous stories" @click="prevPage">←</button>
          <button
            type="button"
            :disabled="activePage === pages.length - 1"
            aria-label="Next stories"
            @click="nextPage"
          >
            →
          </button>
        </div>
        <p>Stories are educational examples. Individual recovery timelines vary and are not medical advice.</p>
        <a href="#explore-results" class="or-results__more">View more stories <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type IconKey = 'group' | 'shield' | 'car' | 'scale' | 'bike' | 'briefcase' | 'fire'

type ResultCard = {
  location: string
  highlight: string
  title: string
  icon: IconKey
  detail: string
}

const activePage = ref(0)
const flippedCards = ref(new Set<string>())
const LocationIcon = {
  template:
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s6-6.4 6-11a6 6 0 1 0-12 0c0 4.6 6 11 6 11z"/><circle cx="12" cy="10" r="2"/></svg>',
}

const pages: ResultCard[][] = [
  [
    {
      location: 'Flushing, NY',
      highlight: '48-HR PLAN',
      title: 'Car crash → delayed neck pain',
      icon: 'car',
      detail:
        'After a rear-end crash, symptoms worsened on day two. A structured 48-hour checklist, imaging review, and clinic follow-up helped stabilize pain and guide safer activity limits.',
    },
    {
      location: 'Syracuse, NY',
      highlight: 'CONCUSSION CARE',
      title: 'Fall injury → fogginess & sleep change',
      icon: 'shield',
      detail:
        'A slip-and-fall led to delayed headache and concentration trouble. Daily symptom logging and neurology-oriented follow-up clarified when rest versus gradual return-to-activity was appropriate.',
    },
    {
      location: 'Brooklyn, NY',
      highlight: 'WOUND FOLLOW-UP',
      title: 'Motorcycle road rash recovery',
      icon: 'bike',
      detail:
        'Deep abrasions needed disciplined dressing care and infection checks. Clinic reassessment caught stalled healing early and adjusted the wound-care plan.',
    },
    {
      location: 'Queens, NY',
      highlight: 'ORTHO PATH',
      title: 'Ankle sprain that would not bear weight',
      icon: 'briefcase',
      detail:
        'Initial urgent care was reassuring, but instability persisted. Orthopedic follow-up and a graded mobility plan reduced reinjury risk during return to work.',
    },
    {
      location: 'Long Island, NY',
      highlight: 'MULTI-VISIT',
      title: 'Truck impact → multi-system monitoring',
      icon: 'group',
      detail:
        'High-energy trauma required coordinated checks for chest, spine, and soft-tissue symptoms. Centralizing records made specialty sequencing clearer.',
    },
    {
      location: 'Manhattan, NY',
      highlight: 'REHAB STEPS',
      title: 'Back strain after workplace lift',
      icon: 'scale',
      detail:
        'Clear lifting limits, therapy timing, and a written work-status note helped the patient progress without rushing back to full duty too early.',
    },
    {
      location: 'Bronx, NY',
      highlight: 'BURN CARE',
      title: 'Kitchen scald → dressing & infection watch',
      icon: 'fire',
      detail:
        'A care log for dressings, pain, and fever checks supported safer home recovery and timely clinic rechecks when redness spread.',
    },
    {
      location: 'Staten Island, NY',
      highlight: '5-STEP GUIDE',
      title: 'Family organizing post-ER records',
      icon: 'shield',
      detail:
        'Discharge papers, imaging portals, and medication lists were gathered into one packet before the first clinic visit—improving questions and second-opinion readiness.',
    },
    {
      location: 'Westchester, NY',
      highlight: 'RETURN PLAN',
      title: 'Boating injury → breathing watch',
      icon: 'car',
      detail:
        'After water exposure, delayed cough and fatigue triggered urgent reassessment. Follow-up clarified when returning to water activity was medically appropriate.',
    },
  ],
  [
    {
      location: 'Flushing, NY',
      highlight: 'IMAGING REVIEW',
      title: 'Missed fracture concern after a fall',
      icon: 'briefcase',
      detail:
        'Persistent inability to walk prompted imaging reassessment. Confirming the fracture early changed bracing and weight-bearing instructions.',
    },
    {
      location: 'Syracuse, NY',
      highlight: 'SPECIALIST MAP',
      title: 'Head injury with stalled recovery',
      icon: 'shield',
      detail:
        'When fogginess lasted beyond the first week, the clinic helped sequence neurology and rehab input instead of waiting indefinitely.',
    },
    {
      location: 'Albany, NY',
      highlight: 'PAIN STRATEGY',
      title: 'Soft-tissue injury sleep disruption',
      icon: 'group',
      detail:
        'A practical plan balanced rest, activity, and medication side-effect monitoring so pain control supported function—not just overnight relief.',
    },
    {
      location: 'Rochester, NY',
      highlight: 'HOME SAFETY',
      title: 'Older adult fall prevention after injury',
      icon: 'scale',
      detail:
        'Beyond the acute sprain, follow-up included footwear, lighting, and balance discussion to reduce a second fall while healing.',
    },
    {
      location: 'Buffalo, NY',
      highlight: 'MEDS CHECK',
      title: 'Medication reaction after discharge',
      icon: 'fire',
      detail:
        'New nausea and dizziness after a pain regimen led to clinician review. Adjusting the plan avoided unsafe self-dose changes.',
    },
    {
      location: 'Newark, NJ',
      highlight: 'TIMELINE',
      title: 'Building a clear injury diary',
      icon: 'briefcase',
      detail:
        'Daily notes on pain location, sleep, and activity limits made the first clinic visit more efficient and reduced repeated testing gaps.',
    },
    {
      location: 'Jersey City, NJ',
      highlight: 'PT START',
      title: 'Shoulder impact → therapy timing',
      icon: 'bike',
      detail:
        'Waiting too long risked stiffness; starting too early risked flare. Clinic guidance set a safer physical-therapy window.',
    },
    {
      location: 'Yonkers, NY',
      highlight: 'SECOND LOOK',
      title: 'Unclear diagnosis after urgent care',
      icon: 'shield',
      detail:
        'A second medical review clarified whether symptoms matched expected recovery or needed additional imaging.',
    },
    {
      location: 'White Plains, NY',
      highlight: 'CARE TEAM',
      title: 'Family coordinating multiple visits',
      icon: 'group',
      detail:
        'One coordinating clinician visit helped prioritize orthopedics versus neurology first, cutting down on conflicting instructions.',
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
  return `${item.highlight}-${item.title}`
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
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.025em;
}

.or-hero__head p {
  margin: 1.1rem auto 1.5rem;
  max-width: 36rem;
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
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  line-height: 0.95;
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
