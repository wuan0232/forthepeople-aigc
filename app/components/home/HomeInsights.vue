<template>
  <section class="insights-head section-pad">
    <div class="insights-align">
      <h2 class="insights__title">Fighting for the People</h2>
      <p class="insights__lead">
        There's a reason we're America's largest injury law firm: our size means we can help more
        people, in more places, and fight for the justice they deserve.
      </p>

      <div class="stats" role="list">
        <div
          v-for="(b, i) in stats"
          :key="b.label"
          class="stat"
          :class="{ dark: i === stats.length - 1, 'stat--first': i === 0 }"
          role="listitem"
        >
          <strong :class="{ 'stat__big--xl': i === stats.length - 1 }">{{ b.big }}</strong>
          <span>{{ b.label }}</span>
        </div>
      </div>

      <!-- 中间主视频区：填入 videoSrc 即渲染 <video>，否则为占位 -->
      <div class="video-stage">
        <div class="video-stage__ratio">
          <video
            v-if="videoSrc"
            class="video-stage__media"
            :src="videoSrc"
            :poster="videoPoster"
            controls
            playsinline
            preload="metadata"
          />
          <div v-else class="video-stage__placeholder" aria-hidden="true" />
          <div class="video-stage__overlay">
            <strong class="video-stage__name">{{ videoOverlayName }}</strong>
            <span class="video-stage__role">{{ videoOverlayRole }}</span>
          </div>
        </div>
        <p class="video-stage__disclaimer">
          The attorney featured above is licensed in Florida. For a full list of attorneys in your
          state please visit our
          <a href="#attorneys">attorney page</a>. Results may vary depending on your particular facts
          and legal circumstances.
        </p>
      </div>
    </div>
  </section>

  <section class="resources section-pad" id="blog">
    <div class="resources-align">
      <div class="resources__head">
        <h2 class="resources__title">Insights &amp; Resources</h2>
        <div class="resources__blurb">
          <p>
            Explore articles and resources to guide you through your options and making informed
            decisions after an accident.
          </p>
          <a href="#" class="link-arrow resources__more">
            View more helpful articles
            <span class="icon-box">
              <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
            </span>
          </a>
        </div>
      </div>

      <div class="resources__grid">
        <article v-for="r in resourceCards" :key="r.title" class="rcard">
          <a :href="r.href" class="rcard__link">
            <div
              class="rcard__thumb"
              :class="{ 'rcard__thumb--muted': r.thumbMuted }"
            >
              <img
                v-if="r.imageSrc"
                class="rcard__img"
                :src="r.imageSrc"
                :alt="r.imageAlt ?? ''"
                loading="lazy"
                decoding="async"
              />
              <div v-else class="rcard__placeholder" aria-hidden="true" />
            </div>
            <h3 class="rcard__title" :class="{ 'rcard__title--underline': r.titleUnderline }">
              {{ r.title }}
            </h3>
          </a>
        </article>
      </div>

     
    </div>
  </section>
</template>

<script setup lang="ts">
/** 有值时主区域渲染原生 `<video>`（例如 `'/videos/insights-story.mp4'`） */
const videoSrc = ''
/** 可选封面，对应 `<video poster>` */
const videoPoster = ''

const videoOverlayName = 'Howard'
const videoOverlayRole = 'Actual Client'

const stats = [
  { big: '$30 BILLION', label: 'Recovered for clients nationwide' },
  { big: '700,000+', label: 'Clients and families' },
  { big: '50 STATES', label: 'With attorneys ready' },
  { big: '1', label: 'Click may change your life' }
]

type ResourceCard = {
  title: string
  href: string
  /** 填入 `public/` 下路径则显示缩略图；留空为占位块 */
  imageSrc?: string
  imageAlt?: string
  /** 占位时使用略灰底（参考图第四张） */
  thumbMuted?: boolean
  titleUnderline?: boolean
}

const resourceCards: ResourceCard[] = [
  {
    title: 'The Basics: What is a personal injury lawsuit?',
    href: '#',
    thumbMuted: false
  },
  {
    title: 'How Much is My Personal Injury Case Worth?',
    href: '#',
    titleUnderline: true,
    thumbMuted: false
  },
  {
    title: 'The Morgan & Morgan Difference',
    href: '#',
    thumbMuted: false
  },
  {
    title: 'Why Do Some Personal Injury Cases Get Turned Down (or Ineligible)?',
    href: '#',
    thumbMuted: true
  }
]
</script>

<style scoped>
.insights-head {
  background: #f9f9fb;
}

.insights-align {
  box-sizing: border-box;
  width: var(--container);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.insights__title {
  margin: 1 0 1rem;
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-800);
}

.insights__lead {
  margin: 0 auto 2.5rem;
  max-width: 52rem;
  text-align: center;
  color: var(--gray-500);
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
}

.stats {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  margin: 0 0 2rem;
  filter: drop-shadow(0 10px 24px rgba(15, 23, 42, 0.08));
  border-radius: 14px;
  overflow: hidden;
  min-width: 0;
}

.stat {
  flex: 1 1 0;
  min-width: 0;
  background: var(--white);
  padding: 1.35rem 0.85rem 1.35rem 1.1rem;
  text-align: center;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
  margin-right: -14px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.stat--first {
  padding-left: 1.25rem;
}

.stat:not(:first-child) {
  padding-left: 1.85rem;
}

.stat strong {
  display: block;
  font-size: clamp(0.85rem, 1.8vw, 1.2rem);
  font-weight: 900;
  color: var(--navy);
  line-height: 1.15;
}

.stat__big--xl {
  font-size: clamp(2.25rem, 5vw, 3.25rem) !important;
  line-height: 1 !important;
}

.stat span {
  font-size: clamp(0.65rem, 1.1vw, 0.8rem);
  font-weight: 600;
  color: var(--navy);
  line-height: 1.35;
  max-width: 12rem;
}

.stat.dark {
  background: var(--navy);
  color: var(--white);
  z-index: 4;
  margin-right: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  padding-right: 1.25rem;
  border-radius: 0 14px 14px 0;
}

.stat.dark span {
  color: rgba(255, 255, 255, 0.92);
  max-width: 11rem;
}

.stat.dark strong {
  color: var(--white);
}

@media (max-width: 900px) {
  .stats {
    flex-direction: column;
    border-radius: var(--radius-lg);
    overflow: visible;
    filter: drop-shadow(0 8px 20px rgba(15, 23, 42, 0.06));
    gap: 0.5rem;
  }

  .stat,
  .stat.dark {
    margin-right: 0;
    clip-path: none;
    border-radius: var(--radius-lg);
    padding: 1.25rem 1rem !important;
  }

  .stat.dark {
    border-radius: var(--radius-lg);
  }
}

.video-stage {
  margin-top: 0.25rem;
}

.video-stage__ratio {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: #0a1628;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
}

.video-stage__ratio::before {
  content: '';
  display: block;
  width: 100%;
  padding-bottom: 56.25%;
}

.video-stage__media,
.video-stage__placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: 0;
}

.video-stage__placeholder {
  background: linear-gradient(145deg, #1a2d4a 0%, #0a1628 45%, #152238 100%);
}

.video-stage__overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: min(20rem, 55%);
  padding: 1rem 1.25rem 1.1rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 70%, transparent 100%);
  color: #fff;
  text-align: left;
  pointer-events: none;
  border-radius: 0 10px 0 0;
}

.video-stage__name {
  display: block;
  font-size: clamp(1.1rem, 2.2vw, 1.45rem);
  font-weight: 800;
  margin-bottom: 0.2rem;
}

.video-stage__role {
  font-size: clamp(0.8rem, 1.4vw, 0.95rem);
  opacity: 0.95;
}

.video-stage__disclaimer {
  text-align: center;
  font-size: 0.68rem;
  line-height: 1.55;
  color: var(--gray-500);
  margin: 1rem auto 0;
  max-width: 48rem;
}

.video-stage__disclaimer a {
  color: var(--blue);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.resources {
  background: var(--white);
}

.resources-align {
  box-sizing: border-box;
  width: var(--container);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.resources__head {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 2rem;
  padding-top: 64PX;
}

@media (min-width: 800px) {
  .resources__head {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.resources__title {
  margin: 0;
  font-size: clamp(1.75rem, 3.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-800);
  line-height: 1.15;
}

.resources__blurb p {
  margin: 0 0 1rem;
  color: var(--gray-500);
  line-height: 1.55;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
}

.resources__grid {
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 1.75rem;
}

@media (max-width: 1024px) {
  .resources__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .resources__grid {
    grid-template-columns: 1fr;
  }
}

.rcard {
  margin: 0;
}

.rcard__link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.rcard__link:hover .rcard__title {
  color: var(--blue);
}

.rcard__thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  background: #dbeafe;
}

.rcard__thumb--muted {
  background: #e8ecf1;
}

.rcard__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rcard__placeholder {
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.5) 0%, transparent 45%),
    linear-gradient(135deg, #bfdbfe 0%, #dbeafe 50%, #e0f2fe 100%);
}

.rcard__thumb--muted .rcard__placeholder {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.45) 0%, transparent 40%),
    linear-gradient(135deg, #dce3ea 0%, #e8ecf1 55%, #eef1f5 100%);
}

.rcard__title {
  margin: 0.85rem 0 0;
  font-size: clamp(0.9rem, 1.15vw, 1rem);
  font-weight: 700;
  line-height: 1.35;
  color: var(--gray-800);
}

.rcard__title--underline {
  text-decoration: underline;
  text-underline-offset: 3px;
}



.resources__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #d1d5db;
  flex-shrink: 0;
}

.resources__dot--active {
  background: #111827;
}
</style>
