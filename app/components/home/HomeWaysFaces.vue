<template>
  <section class="ways section-pad" id="practice">
    <div class="container ways__inner">
      <h2 class="ways__title">Ways We Can Help</h2>
      <div class="cards">
        <article v-for="c in cards" :key="c.title" class="card">
          <div class="icon" v-html="c.icon" />
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
          <a href="#" class="ways-link">
            How We Help
            <span class="ways-link__icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="10" height="10">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>
        </article>
      </div>

      <div class="grid-box">
        <div class="grid-box__head">
          <strong class="grid-box__title">Over 50 Case Types, Like:</strong>
          <a href="#" class="grid-box__view">View all &gt;</a>
        </div>
        <div class="grid-box__grid">
          <span v-for="t in caseTypes" :key="t" class="grid-box__item">
            <span class="chk" aria-hidden="true">✓</span>{{ t }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <section class="faces section-pad" id="about">
    <div class="faces-align faces-layout">
      <div class="faces__copy">
        <h2 class="faces__title">The Faces of Justice</h2>
        <p class="faces__quote">
          Our 1,000+ attorneys are whip-smart, bighearted, and passionate people who wouldn't
          hesitate to go the extra mile for their clients.
        </p>
        <p class="faces__sig" aria-hidden="true">Matt Morgan</p>
        <div class="faces__profile">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80"
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <div>
            <strong>Matt Morgan</strong>
            <span>Managing Partner</span>
          </div>
        </div>
        <a href="#attorneys" class="faces-cta">
          Meet our attorneys
          <span class="faces-cta__icon" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="10" height="10">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      <div class="faces__carousel">
        <div ref="stripRef" class="carousel__strip" tabindex="0" role="region" aria-label="Attorney videos">
          <figure v-for="(a, i) in faceVideos" :key="a.id" class="carousel__slide">
            <div class="video-shell">
              <video
                :ref="(el) => setVideoRef(el, i)"
                class="video-shell__media"
                :poster="a.poster"
                :src="a.videoSrc"
                playsinline
                preload="metadata"
                muted
                @click="onVideoAreaClick(i)"
              />
              <button
                type="button"
                class="play-btn"
                :aria-label="playingIndex === i ? 'Pause video' : 'Play video'"
                @click.stop="togglePlay(i)"
              >
                <span class="play-btn__tri" aria-hidden="true" />
              </button>
            </div>
            <figcaption class="carousel__cap">
              <strong>{{ a.name }}</strong>
              <span>{{ a.role }}</span>
            </figcaption>
          </figure>
        </div>
        <div class="carousel__dots" role="tablist" aria-label="Choose attorney video">
          <button
            v-for="(a, i) in faceVideos"
            :key="a.id + '-dot'"
            type="button"
            role="tab"
            :class="['carousel__dot', { 'carousel__dot--on': i === activeFace }]"
            :aria-selected="i === activeFace"
            :aria-label="`Show ${a.name}`"
            @click="goFace(i)"
          ></button>
        </div>
      </div>

      <p class="faces__disclaimer">
        The attorneys shown in these videos may not be licensed in your state. To find an attorney
        licensed in your area, please visit our
        <a href="#attorneys">attorney page</a>.
      </p>
    </div>
  </section>

  <section class="band section-pad" id="claim">
    <div class="band-align">
      <div class="band__surface">
        <div class="band__row">
          <h2 class="band__title">We're here to help you recover compensation for:</h2>
          <a href="#contact" class="link-arrow band__link">
            Start your claim
            <span class="icon-box">
              <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
            </span>
          </a>
        </div>
        <div class="band__pills">
          <div class="band__pill">
            <span class="band__pill-inner">
              <span class="chk" aria-hidden="true">✓</span>
              Medical Treatments
            </span>
          </div>
          <div class="band__pill">
            <span class="band__pill-inner">
              <span class="chk" aria-hidden="true">✓</span>
              Lost Wages
            </span>
          </div>
          <div class="band__pill">
            <span class="band__pill-inner">
              <span class="chk" aria-hidden="true">✓</span>
              Pain &amp; Suffering
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const cards = [
  {
    title: 'Injured in a car accident?',
    text: "We've helped thousands recover medical bills, lost wages, and more after crashes caused by negligence.",
    icon: '<svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="#1a1a1a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 27h28l-2.2-7.5H8.2L6 27z"/><circle cx="12.5" cy="28.5" r="2.5" fill="#1a1a1a"/><circle cx="27.5" cy="28.5" r="2.5" fill="#1a1a1a"/><path d="M9.5 19.5h21"/><path d="M11 19.5l3.5-9h11L29 19.5"/></svg>'
  },
  {
    title: 'Hurt in a slip and fall?',
    text: 'From wet floors to unsafe conditions, we fight to hold property owners accountable for your injuries.',
    icon: '<svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="#1a1a1a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 33h30"/><path d="M26 9c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/><path d="M24 13l-8 10 4 10M18 23l-6 4"/><path d="M12 27l-4 3"/></svg>'
  },
  {
    title: 'Injured on the job?',
    text: 'We guide workers through the claims process to secure the benefits they deserve for workplace injuries.',
    icon: '<svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="#1a1a1a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="7" width="12" height="7" rx="1"/><path d="M16 14v5"/><path d="M8 22h24"/><path d="M22 8l3-2"/><circle cx="28" cy="9" r="2.2" fill="#1a1a1a"/><path d="M17 22l2 11M23 22l-1 11"/></svg>'
  }
]

const caseTypes = [
  'Social Security',
  'Dangerous Drugs',
  'Defective Products',
  'Medical Malpractice',
  'Nursing Home Abuse',
  'Labor & Employment',
  'Truck Accidents',
  'Class Actions'
]

const faceVideos = [
  {
    id: 'ashley',
    name: 'Ashley Winstead',
    role: 'Trial Attorney, Jacksonville',
    poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=720&q=80',
    videoSrc: '/videos/faces/ashley-winstead.mp4'
  },
  {
    id: 'jack',
    name: 'Jack T. Cook',
    role: 'Trial Attorney, Orlando',
    poster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=720&q=80',
    videoSrc: '/videos/faces/jack-t-cook.mp4'
  },
  {
    id: 'jon',
    name: 'Jon Marsh',
    role: 'Trial Attorney, Miami',
    poster: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=720&q=80',
    videoSrc: '/videos/faces/jon-marsh.mp4'
  },
  {
    id: 'priya',
    name: 'Priya Shah',
    role: 'Trial Attorney, Tampa',
    poster: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=720&q=80',
    videoSrc: '/videos/faces/priya-shah.mp4'
  }
]

const stripRef = ref<HTMLElement | null>(null)
const activeFace = ref(0)
const playingIndex = ref<number | null>(null)
const videoEls = ref<(HTMLVideoElement | null)[]>([])

function setVideoRef(el: unknown, i: number) {
  if (!el) {
    videoEls.value[i] = null
    return
  }
  videoEls.value[i] = el as HTMLVideoElement
}

function pauseAll() {
  videoEls.value.forEach((v) => {
    if (v) v.pause()
  })
  playingIndex.value = null
}

async function togglePlay(i: number) {
  const v = videoEls.value[i]
  if (!v) return
  if (!v.paused) {
    v.pause()
    playingIndex.value = null
    return
  }
  pauseAll()
  try {
    await v.play()
    playingIndex.value = i
  } catch {
    playingIndex.value = null
  }
}

function onVideoAreaClick(i: number) {
  togglePlay(i)
}

function goFace(i: number) {
  activeFace.value = i
  pauseAll()
  void scrollToSlide(i)
}

async function scrollToSlide(i: number) {
  await nextTick()
  const strip = stripRef.value
  const slide = strip?.children[i] as HTMLElement | undefined
  if (!strip || !slide) return
  const target =
    slide.offsetLeft - (strip.clientWidth - slide.offsetWidth) / 2
  strip.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
}

onBeforeUnmount(() => pauseAll())

onMounted(() => {
  void scrollToSlide(activeFace.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.section-pad {
  padding-block: 4rem;
}

.ways {
  --ways-bg: #f4f5f7;
  --ways-blue: #0056b3;
  background: var(--ways-bg);
}

.ways__inner {
  max-width: 72rem;
  margin-inline: auto;
}

.ways__title {
  margin: 0 0 2.25rem;
  text-align: center;
  font-size: clamp(1.85rem, 3.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1f2937;
}

.cards {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: clamp(1.35rem, 3vw, 1.75rem);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.icon {
  margin-bottom: 0.35rem;
}

.icon :deep(svg) {
  display: block;
}

.card h3 {
  margin: 0.5rem 0 0.65rem;
  font-size: 1.125rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.25;
}

.card p {
  margin: 0 0 1.15rem;
  color: #5c6370;
  font-size: 0.9375rem;
  line-height: 1.55;
  flex: 1;
}

.ways-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--ways-blue);
  text-decoration: none;
}

.ways-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ways-link__icon {
  width: 1.25rem;
  height: 1.25rem;
  background: var(--ways-blue);
  border-radius: 3px;
  display: inline-grid;
  place-items: center;
}

.grid-box {
  margin-top: 2.25rem;
  background: #fff;
  border-radius: 12px;
  padding: 0 1.35rem 1.35rem;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
}

.grid-box__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 1.15rem 0 0.9rem;
  border-bottom: 1px solid #e8eaed;
}

.grid-box__title {
  font-size: 1rem;
  font-weight: 800;
  color: #1f2937;
}

.grid-box__view {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--ways-blue);
  text-decoration: none;
}

.grid-box__view:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.grid-box__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem 1.5rem;
  padding-top: 1.15rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
}

.grid-box__item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

@media (max-width: 900px) {
  .grid-box__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-box__grid {
    grid-template-columns: 1fr;
  }
}

.chk {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  font-weight: 900;
  color: #111;
  line-height: 1;
}

.faces {
  background: #fff;
}

.faces-align {
  box-sizing: border-box;
  width: var(--container);
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.faces-layout {
  display: grid;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: start;
  column-gap: clamp(2rem, 4.5vw, 4rem);
}

@media (min-width: 960px) {
  .faces-layout {
    grid-template-columns: minmax(0, 0.4fr) minmax(0, 0.6fr);
  }
}

.faces__title {
  margin: 0 0 1.15rem;
  font-size: clamp(1.85rem, 3.2vw, 2.45rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #000;
  line-height: 1.15;
}

.faces__quote {
  margin: 0 0 1.25rem;
  max-width: 100%;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #4b5563;
  font-weight: 400;
}

.faces__sig {
  margin: 0 0 1rem;
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1;
  color: #000;
}

.faces__profile {
  display: flex;
  gap: 0.85rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

.faces__profile img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
}

.faces__profile strong {
  display: block;
  font-size: 1rem;
  color: #000;
}

.faces__profile span {
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.1rem;
}

.faces-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: #0056b3;
  text-decoration: none;
}

.faces-cta:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.faces-cta__icon {
  width: 1.25rem;
  height: 1.25rem;
  background: #0056b3;
  border-radius: 3px;
  display: inline-grid;
  place-items: center;
}

.faces__carousel {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  min-width: 0;
  width: 100%;
}

.carousel__strip {
  --card-gap: clamp(1rem, 2.2vw, 1.5rem);
  display: flex;
  gap: var(--card-gap);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0.15rem 0 0.4rem;
  scrollbar-width: thin;
}

.carousel__slide {
  flex: 0 0 calc((100% - 2 * var(--card-gap)) / 2.28);
  min-width: 11.5rem;
  max-width: 19rem;
  scroll-snap-align: start;
  margin: 0;
}

@media (max-width: 959px) {
  .carousel__slide {
    flex: 0 0 min(68vw, 17rem);
    max-width: none;
  }
}

.video-shell {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #0f172a;
  width: 100%;
  aspect-ratio: 3 / 4;
}

.video-shell__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}

.play-btn {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3.5rem;
  height: 2.35rem;
  border: 0;
  border-radius: 6px;
  background: #ffde00;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s ease;
}

.play-btn:hover {
  transform: scale(1.04);
}

.play-btn__tri {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 13px;
  border-color: transparent transparent transparent #111;
  margin-left: 3px;
}

.carousel__cap {
  margin: 0.65rem 0 0;
  padding: 0 0.15rem;
}

.carousel__cap strong {
  display: block;
  font-size: 0.98rem;
  color: #000;
}

.carousel__cap span {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.84rem;
  color: #6b7280;
}

.carousel__dots {
  display: flex;
  justify-content: flex-end;
  gap: 0.45rem;
  padding-right: 0.15rem;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  cursor: pointer;
  background: #d1d5db;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.carousel__dot--on {
  background: #000;
  transform: scale(1.15);
}

.carousel__dot:focus-visible {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}

.faces__disclaimer {
  margin: 0;
  grid-column: 1 / -1;
  max-width: 36rem;
  font-size: 0.68rem;
  line-height: 1.55;
  color: #9ca3af;
}

@media (min-width: 960px) {
  .faces__disclaimer {
    grid-column: 1;
  }
}

.faces__disclaimer a {
  color: #6b7280;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.faces__disclaimer a:hover {
  color: #0056b3;
}

.band {
  background: #fff;
}

.band-align {
  box-sizing: border-box;
  /* width: var(--container); */
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.band__surface {
  background: #f3f8ff;
  border-radius: var(--radius-lg);
  /* 增大浅蓝区域垂直高度；左右与内部比例样式保持不变 */
  padding-block: clamp(2.25rem, 6vw, 3.5rem);
  /* 左右留白加大，让正文相对浅蓝盒占比更小 */
  padding-inline: clamp(1.75rem, 7vw, 4rem);
}

.band__row,
.band__pills {
  max-width: min(78rem, 92%);
  margin-inline: auto;
}

.band__row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  margin-bottom: clamp(1rem, 2.5vw, 1.35rem);
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.band__row::-webkit-scrollbar {
  display: none;
}

.band__title {
  margin: 0;
  flex: 0 0 auto;
  font-size: clamp(1rem, 1.35vw + 0.65rem, 1.75rem);
  font-weight: 900;
  color: var(--navy);
  line-height: 1.2;
  white-space: nowrap;
}

.band__link {
  flex-shrink: 0;
  white-space: nowrap;
}

.band__pills {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.5rem, 1.5vw, 0.85rem);
}

.band__pill {
  min-width: 0;
  background: #daeaff;
  border-radius: var(--radius);
  padding: clamp(0.75rem, 2vw, 1rem) 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  color: var(--navy);
}

.band__pill-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}
</style>
