<template>
  <section class="hero" id="top">
    <div class="hero__bg" aria-hidden="true" />
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title">ACCIDENT RECOVERY STARTS WITH A CLEAR MEDICAL PLAN</h1>
        <p class="hero__sub">
          Use a practical <span class="ul">5-step medical action path</span> to stabilize symptoms,
          document what happened, and plan safer follow-up.
        </p>

        <div class="hero__video">
          <button type="button" class="video-card" aria-label="Play video">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt=""
              width="640"
              height="360"
              loading="eager"
            />
            <span class="play" aria-hidden="true" />
          </button>
        </div>

        <p class="seen-label">Common recovery priorities:</p>
        <div class="seen-logos" role="list">
          <span>URGENT RED FLAGS</span>
          <span>48-HOUR CHECKLIST</span>
          <span>SYMPTOM TIMELINE</span>
          <span>SPECIALIST REVIEW</span>
          <span>RECOVERY FOLLOW-UP</span>
        </div>
      </div>

      <aside class="lead-form" aria-labelledby="lead-form-title">
        <h2 id="lead-form-title" class="lead-form__title">Build Your Recovery Checklist</h2>
        <form class="lead-form__form" @submit.prevent="onSubmit">
          <label class="sr-only" for="case">Injury or medication context</label>
          <select id="case" v-model="caseType">
            <option value="">- Injury / Medication Context -</option>
            <option v-for="opt in MEDICAL_INTAKE_OPTIONS" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
          <label class="sr-only" for="timing">When did it happen?</label>
          <select id="timing" v-model="timing">
            <option value="">- When did it happen? -</option>
            <option v-for="opt in MEDICAL_TIMING_OPTIONS" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
          <fieldset class="status-fieldset">
            <legend>Are symptoms worsening or changing?</legend>
            <label v-for="opt in MEDICAL_WORSENING_OPTIONS" :key="opt.value" class="status-option">
              <input v-model="worsening" type="radio" name="hero-worsening" :value="opt.value" />
              <span>{{ opt.label }}</span>
            </label>
          </fieldset>
          <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>
          <p class="disclaimer">
            This intake provides educational recovery guidance and does not replace emergency care.
            If symptoms are severe or rapidly worsening, seek urgent medical attention immediately.
          </p>
          <button type="submit" class="cta" :disabled="submitting">
            {{ submitting ? 'Opening your checklist…' : 'Show My Recovery Checklist' }}
          </button>
          <p class="micro">
            No name, phone number, email, or medical notes are collected by this tool.
          </p>
        </form>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  MEDICAL_INTAKE_OPTIONS,
  MEDICAL_TIMING_OPTIONS,
  MEDICAL_WORSENING_OPTIONS,
} from '~/constants/medical/intake'
import { useMedicalIntake } from '~/composables/useMedicalIntake'

const { buildChecklist } = useMedicalIntake()

const caseType = ref('')
const timing = ref('')
const worsening = ref('')
const formError = ref('')
const submitting = ref(false)

function onSubmit() {
  formError.value = ''
  submitting.value = true

  const result = buildChecklist({
    caseType: caseType.value,
    timing: timing.value,
    worsening: worsening.value,
  })

  if (!result.ok) {
    formError.value = result.error
    submitting.value = false
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  margin-top: calc(-1 * var(--header-offset));
  padding-top: calc(var(--header-offset) + 1.5rem);
  padding-bottom: 4rem;
  color: var(--white);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 80% at 10% 0%, #123a7a 0%, var(--navy) 45%, var(--navy-deep) 100%);
  z-index: 0;
}

.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.5rem;
  align-items: start;
}

@media (min-width: 960px) {
  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
  }
}

.hero__title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
}

.hero__sub {
  font-size: 1.15rem;
  margin: 0 0 1.5rem;
}

.ul {
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 700;
}

.video-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.video-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  background: var(--yellow);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.play::after {
  content: '';
  position: absolute;
  left: 52%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: 10px 0 10px 16px;
  border-color: transparent transparent transparent #111;
}

.seen-label {
  margin: 1.5rem 0 0.5rem;
  font-size: 0.85rem;
  opacity: 0.9;
}

.seen-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  opacity: 0.95;
}

.lead-form {
  background: rgba(10, 31, 68, 0.55);
  border: 1px solid rgba(147, 197, 253, 0.45);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.25rem 1.25rem;
  backdrop-filter: blur(6px);
}

.lead-form__title {
  margin: 0 0 1.25rem;
  font-size: 1.35rem;
  font-weight: 800;
}

.lead-form__form {
  display: grid;
  gap: 0.65rem;
}

.row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}

.lead-form input,
.lead-form select,
.lead-form textarea {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0.65rem 0.75rem;
  background: var(--white);
  color: #111;
}

.lead-form textarea {
  resize: vertical;
  min-height: 6rem;
}

.status-fieldset {
  display: grid;
  gap: 0.4rem;
  margin: 0;
  padding: 0.75rem;
  border: 1px solid rgba(147, 197, 253, 0.55);
  border-radius: 8px;
}

.status-fieldset legend {
  padding: 0 0.2rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-option {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.76rem;
  line-height: 1.3;
  cursor: pointer;
}

.status-option input {
  width: auto;
  margin: 0.1rem 0 0;
}

.disclaimer {
  font-size: 0.65rem;
  line-height: 1.45;
  opacity: 0.9;
  margin: 0.25rem 0 0;
}

.form-error {
  margin: 0;
  padding: 0.55rem 0.7rem;
  background: rgba(254, 226, 226, 0.95);
  border-radius: 4px;
  color: #991b1b;
  font-size: 0.8rem;
  font-weight: 700;
}

.cta {
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: var(--yellow);
  color: #111;
  cursor: pointer;
  font-size: 1rem;
}

.cta:hover:not(:disabled) {
  filter: brightness(1.03);
}

.cta:disabled {
  opacity: 0.85;
  cursor: wait;
}

.micro {
  font-size: 0.6rem;
  opacity: 0.85;
  margin: 0.5rem 0 0;
  line-height: 1.4;
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
