<template>
  <section class="insights-head section-pad">
    <div class="insights-align">
      <h2 class="insights__title">Recovery-Focused Medical Guidance</h2>
      <p class="insights__lead">
        Our goal is practical, patient-first education: what to monitor, what to document, and when to
        escalate care after injury or suspected medical harm.
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

      <div class="guide-stage">
        <!-- Optional video when a source is provided -->
        <div v-if="videoSrc" class="guide-stage__video">
          <video
            class="guide-stage__media"
            :src="videoSrc"
            :poster="videoPoster"
            controls
            playsinline
            preload="metadata"
          />
          <div class="guide-stage__video-label">
            <strong>5-Step Action Guide</strong>
            <span>Patient Recovery Workflow</span>
          </div>
        </div>

        <!-- Default: filled pathway panel (replaces empty video placeholder) -->
        <div v-else class="guide-panel" aria-labelledby="guide-panel-heading">
          <div class="guide-panel__glow" aria-hidden="true" />
          <div class="guide-panel__grid" aria-hidden="true" />

          <header class="guide-panel__head">
            <div class="guide-panel__intro">
              <p class="guide-panel__eyebrow">Patient Recovery Workflow</p>
              <h3 id="guide-panel-heading" class="guide-panel__title">5-Step Action Guide</h3>
              <p class="guide-panel__lead">
                A clear path from urgent symptom checks to safer follow-up—so you know what to do next,
                not just what went wrong.
              </p>
            </div>
            <a href="/medical/what-to-do" class="guide-panel__cta">
              Open the full guide
              <svg viewBox="0 0 12 12" width="14" height="14" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </a>
          </header>

          <ol class="guide-panel__steps">
            <li v-for="(step, i) in guideSteps" :key="step.title" class="guide-step">
              <a :href="step.href" class="guide-step__link">
                <span class="guide-step__num">{{ i + 1 }}</span>
                <span class="guide-step__body">
                  <strong>{{ step.title }}</strong>
                  <span>{{ step.hint }}</span>
                </span>
              </a>
            </li>
          </ol>
        </div>

        <p class="guide-stage__disclaimer">
          This resource center is educational and not a substitute for emergency diagnosis or treatment.
          If symptoms are severe or worsening, seek urgent care first.
        </p>
      </div>
    </div>
  </section>

  <section class="resources section-pad" id="blog">
    <div class="resources-align">
      <div class="resources__head">
        <h2 class="resources__title">Patient Action Resources</h2>
        <div class="resources__blurb">
          <p>
            Explore practical guides for post-accident care, medication safety, symptom tracking, and
            specialist follow-up.
          </p>
          <a href="/blog/medical-malpractice" class="link-arrow resources__more">
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
/** Optional: set a path like `'/videos/insights-story.mp4'` to show video instead of the pathway panel */
const videoSrc = ''
const videoPoster = ''

const stats = [
  { big: '5', label: 'Core steps after suspected medical harm' },
  { big: '48H', label: 'Critical window for organized documentation' },
  { big: '1', label: 'Complete timeline for every follow-up visit' },
  { big: '24/7', label: 'Urgent symptoms require immediate care' },
]

const guideSteps = [
  {
    title: 'Stabilize',
    hint: 'Check red-flag symptoms first',
    href: '/medical/what-to-do',
  },
  {
    title: 'Document',
    hint: 'Build a dated care timeline',
    href: '/medical/what-to-do',
  },
  {
    title: 'Second opinion',
    hint: 'Bring records to a specialist',
    href: '/medical/what-to-do',
  },
  {
    title: 'Review channels',
    hint: 'Know how to escalate concerns',
    href: '/medical/what-to-do',
  },
  {
    title: 'Recovery plan',
    hint: 'Align follow-up and rehab',
    href: '/medical/what-to-do',
  },
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
    title: 'Medical Malpractice vs Medical Dispute',
    href: '/blog/posts/medical-malpractice-vs-medical-dispute',
    imageSrc: '/images/locations/loc-how-basics-lawsuit.webp',
    imageAlt: '',
    thumbMuted: false,
  },
  {
    title: 'How to Build a Complete Medical Timeline',
    href: '/blog/posts/coming-soon',
    imageSrc: '/images/locations/loc-how-case-worth.webp',
    imageAlt: '',
    titleUnderline: true,
    thumbMuted: false,
  },
  {
    title: 'Second Medical Opinion: Patient Checklist',
    href: '/blog/posts/coming-soon',
    imageSrc: '/images/locations/loc-how-morgan-difference.webp',
    imageAlt: '',
    thumbMuted: false,
  },
  {
    title: 'Informed Consent: What to Check Before You Sign',
    href: '/blog/posts/coming-soon',
    imageSrc: '/images/locations/loc-how-cases-ineligible.webp',
    imageAlt: '',
    thumbMuted: true,
  },
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
  margin: 0 0 1rem;
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

.guide-stage {
  margin-top: 0.25rem;
}

.guide-stage__video {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: #0a1628;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
  aspect-ratio: 16 / 9;
}

.guide-stage__media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  display: block;
}

.guide-stage__video-label {
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: min(20rem, 55%);
  padding: 1rem 1.25rem 1.1rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 70%, transparent 100%);
  color: #fff;
  pointer-events: none;
  border-radius: 0 10px 0 0;
}

.guide-stage__video-label strong {
  display: block;
  font-size: clamp(1.1rem, 2.2vw, 1.45rem);
  font-weight: 800;
  margin-bottom: 0.2rem;
}

.guide-stage__video-label span {
  font-size: clamp(0.8rem, 1.4vw, 0.95rem);
  opacity: 0.95;
}

.guide-panel {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: clamp(1.5rem, 3.5vw, 2.35rem);
  background:
    radial-gradient(ellipse 70% 80% at 90% 10%, rgba(0, 102, 204, 0.35), transparent 55%),
    radial-gradient(ellipse 50% 60% at 5% 90%, rgba(196, 18, 48, 0.12), transparent 50%),
    linear-gradient(145deg, #132a4a 0%, #0a1f44 48%, #071633 100%);
  color: #fff;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.14);
}

.guide-panel__glow {
  position: absolute;
  inset: -20% 40% auto -10%;
  height: 70%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 65%);
  pointer-events: none;
}

.guide-panel__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), transparent 85%);
  pointer-events: none;
}

.guide-panel__head {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.25rem 1.75rem;
  margin-bottom: clamp(1.35rem, 3vw, 2rem);
}

.guide-panel__eyebrow {
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #93c5fd;
}

.guide-panel__title {
  margin: 0 0 0.55rem;
  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.guide-panel__lead {
  margin: 0;
  max-width: 34rem;
  font-size: clamp(0.92rem, 1.4vw, 1.02rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.78);
}

.guide-panel__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  flex-shrink: 0;
  padding: 0.85rem 1.25rem;
  border-radius: 999px;
  background: #fff;
  color: var(--navy);
  font-weight: 800;
  font-size: 0.92rem;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.guide-panel__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
}

.guide-panel__steps {
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .guide-panel__steps {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.65rem;
  }
}

.guide-step {
  margin: 0;
  min-width: 0;
}

.guide-step__link {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: start;
  height: 100%;
  padding: 0.95rem 0.9rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: inherit;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.guide-step__link:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(147, 197, 253, 0.45);
  transform: translateY(-2px);
}

.guide-step__num {
  display: inline-grid;
  place-items: center;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 999px;
  background: #0066cc;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  flex-shrink: 0;
}

.guide-step__body {
  display: grid;
  gap: 0.25rem;
  min-width: 0;
}

.guide-step__body strong {
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.25;
}

.guide-step__body span {
  font-size: 0.78rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
}

.guide-stage__disclaimer {
  text-align: center;
  font-size: 0.68rem;
  line-height: 1.55;
  color: var(--gray-500);
  margin: 1rem auto 0;
  max-width: 48rem;
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
  object-fit: contain;
  display: block;
  padding: 0.75rem;
  box-sizing: border-box;
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
