<template>
  <section class="how section-pad" id="how">
    <div class="how-align">
      <h2 class="how__title">How It Works</h2>
      <p class="how__lead">
        Unsure what to do next? Our clinic team helps you organize medical next steps after an
        injury—from first contact through safer follow-up planning.
      </p>

      <div class="steps">
        <article v-for="step in steps" :key="step.n" class="step">
          <div class="step__visual" aria-hidden="true">
            <img
              class="step__art"
              :src="step.art"
              alt=""
              width="720"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="step__body">
            <span class="step__num">{{ step.n }}</span>
            <h3 class="step__heading">{{ step.title }}</h3>
            <p class="step__text">{{ step.text }}</p>
            <a :href="step.href" class="link-arrow step__cta">
              {{ step.cta }}
              <span class="icon-box">
                <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    n: '1',
    title: 'REACH OUT YOUR WAY',
    text: 'Start with the recovery checklist form, call the clinic, or send a message. We help you sort urgent warning signs from routine follow-up needs.',
    cta: 'Start a recovery checklist',
    href: '#contact',
    art: '/images/how-it-works/step-1-contact.png',
  },
  {
    n: '2',
    title: 'MEET YOUR CARE SUPPORT',
    text: 'Clinicians, care coordinators, and recovery planners help translate symptoms into a clear follow-up plan—records, referrals, and next appointments in one place.',
    cta: 'Meet our doctors',
    href: '/about/meet-our-doctors',
    art: '/images/how-it-works/step-2-care-team.png',
  },
  {
    n: '3',
    title: 'BUILD A CLEAR RECOVERY PLAN',
    text: 'Document what changed, organize visit records, and use a structured checklist so follow-up decisions are clearer and safer.',
    cta: 'Open the 5-step guide',
    href: '/medical/what-to-do',
    art: '/images/how-it-works/step-3-recovery-plan.png',
  },
]
</script>

<style scoped>
.how-align {
  box-sizing: border-box;
  width: var(--container);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.how__title {
  margin: 0 0 1rem;
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-800);
}

.how__lead {
  margin: 0 auto 2.5rem;
  max-width: 46rem;
  text-align: center;
  color: var(--gray-500);
  line-height: 1.55;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
}

.steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: grid;
  border: 1px solid #e5e7eb;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
}

@media (min-width: 900px) {
  .step {
    grid-template-columns: 1.05fr 0.95fr;
  }
}

.step__visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: clamp(14rem, 28vw, 22rem);
  padding: clamp(1rem, 2.5vw, 1.75rem);
  background: linear-gradient(180deg, #eef5fb 0%, #f7fbff 100%);
}

.step__art {
  display: block;
  width: 100%;
  max-width: 34rem;
  height: auto;
  object-fit: contain;
}

.step__body {
  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.25rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.step__num {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: #dbeafe;
  color: var(--blue);
  font-weight: 800;
  font-size: 0.95rem;
  margin-bottom: 0.85rem;
  flex-shrink: 0;
}

.step__heading {
  margin: 0 0 0.85rem;
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--navy);
}

.step__text {
  margin: 0 0 1.25rem;
  color: var(--gray-500);
  font-size: clamp(0.95rem, 1.4vw, 1rem);
  line-height: 1.6;
}

.step__cta {
  margin-top: auto;
  font-weight: 700;
}
</style>
