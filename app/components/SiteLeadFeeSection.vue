<template>
  <section class="fee" :id="sectionId">
    <div class="container fee__grid">
      <div class="fee__copy">
        <h2 class="fee__title">START YOUR 5-STEP MEDICAL ACTION PLAN</h2>
        <p class="fee__sub">Get a structured recovery checklist and safer follow-up guidance in minutes.</p>
      </div>
      <aside class="lead-form" aria-labelledby="fee-form-title">
        <h2 id="fee-form-title" class="lead-form__title">Build Your Recovery Checklist</h2>
        <p class="lead-form__sub">
          Choose three non-identifying details to see a practical recovery checklist. Nothing is submitted or saved.
        </p>
        <form class="lead-form__form" @submit.prevent="onSubmit">
          <div class="select-wrap">
            <select v-model="caseType" class="select" aria-label="Injury or medication context">
              <option value="">- Injury / Medication Context -</option>
              <option v-for="opt in MEDICAL_INTAKE_OPTIONS" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>
          <div class="select-wrap">
            <select v-model="timing" class="select" aria-label="When the injury or symptoms began">
              <option value="">- When did it happen? -</option>
              <option v-for="opt in MEDICAL_TIMING_OPTIONS" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>
          <fieldset class="status-fieldset">
            <legend>Are symptoms worsening or changing?</legend>
            <label v-for="opt in MEDICAL_WORSENING_OPTIONS" :key="opt.value" class="status-option">
              <input v-model="worsening" type="radio" :name="`${sectionId}-worsening`" :value="opt.value" />
              <span>{{ opt.label }}</span>
            </label>
          </fieldset>
          <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>
          <div class="disclaimers">
            <p>
              This public tool provides educational recovery guidance and does not replace emergency care.
              If symptoms are severe or rapidly worsening, seek urgent medical attention immediately.
            </p>
          </div>
          <button type="submit" class="cta" :disabled="submitting">
            {{ submitting ? 'Opening your checklist…' : 'Show My Recovery Checklist' }}
          </button>
          <p class="micro">
            No name, phone number, email, or medical notes are collected by this tool. © {{ year }} For The People Clinic.
          </p>
        </form>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  MEDICAL_INTAKE_OPTIONS,
  MEDICAL_TIMING_OPTIONS,
  MEDICAL_WORSENING_OPTIONS,
} from '~/constants/medical/intake'
import { useMedicalIntake } from '~/composables/useMedicalIntake'

const props = withDefaults(
  defineProps<{
    presetCaseType?: string
    sectionId?: string
  }>(),
  { presetCaseType: '', sectionId: 'contact' },
)

const year = new Date().getFullYear()
const { buildChecklist } = useMedicalIntake()

const caseType = ref(props.presetCaseType || '')
const timing = ref('')
const worsening = ref('')
const formError = ref('')
const submitting = ref(false)

watch(
  () => props.presetCaseType,
  (v) => {
    if (v) caseType.value = v
  },
)

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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;0,900;1,400&display=swap');

.fee {
  --fee-bg: #0a1f44;
  --fee-border: rgba(180, 200, 220, 0.55);
  --fee-yellow: #ffde00;
  --fee-placeholder: #9ca3af;

  background: var(--fee-bg);
  color: #fff;
  padding: clamp(2.5rem, 6vw, 4.5rem) 0;
  scroll-margin-top: var(--header-offset);
}

.fee__grid {
  display: grid;
  gap: clamp(1.75rem, 4vw, 2.75rem);
  align-items: stretch;
}

@media (min-width: 960px) {
  .fee__grid {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: clamp(2rem, 4vw, 3.5rem);
  }
}

.fee__copy {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 0;
}

@media (min-width: 960px) {
  .fee__copy {
    min-height: 100%;
    padding-bottom: 0.25rem;
  }
}

.fee__title {
  margin: 0;
  font-family: 'Roboto Condensed', 'Arial Narrow', 'Franklin Gothic Medium', Impact, sans-serif;
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
}

.fee__sub {
  margin: 0;
  font-size: clamp(1.15rem, 2.2vw, 1.45rem);
  font-weight: 700;
  line-height: 1.3;
  color: #fff;
  max-width: 22rem;
}

@media (max-width: 959px) {
  .fee__copy {
    justify-content: flex-start;
  }
}

.lead-form {
  border: 1px solid var(--fee-border);
  border-radius: 8px;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  background: rgba(0, 0, 0, 0.12);
}

.lead-form__title {
  margin: 0 0 0.4rem;
  font-size: clamp(1.2rem, 2.2vw, 1.45rem);
  font-weight: 800;
  color: #fff;
}

.lead-form__sub {
  margin: 0 0 1.1rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.92);
}

.lead-form__form {
  display: grid;
  gap: 0.7rem;
}

.row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}

@media (max-width: 420px) {
  .row2 {
    grid-template-columns: 1fr;
  }
}

.lead-form input,
.lead-form select,
.lead-form textarea {
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 0.65rem 0.75rem;
  background: #fff;
  color: #111;
}

.lead-form input::placeholder,
.lead-form textarea::placeholder {
  color: var(--fee-placeholder);
}

.select-wrap {
  position: relative;
}

.select {
  appearance: none;
  padding-right: 2.25rem;
  cursor: pointer;
  color: #111;
}

.select-wrap::after {
  content: '';
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-35%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #4b5563;
  pointer-events: none;
}

.textarea {
  resize: vertical;
  min-height: 6.5rem;
  line-height: 1.45;
}

.status-fieldset {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 5px;
}

.status-fieldset legend {
  padding: 0 0.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
}

.status-option {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  font-size: 0.78rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.94);
  cursor: pointer;
}

.status-option input {
  width: auto;
  margin: 0.15rem 0 0;
}

.form-error {
  margin: 0;
  padding: 0.55rem 0.7rem;
  background: rgba(254, 226, 226, 0.95);
  border-radius: 4px;
  color: #991b1b;
  font-size: 0.85rem;
  font-weight: 700;
}

.disclaimers {
  display: grid;
  gap: 0.5rem;
  margin-top: 0.15rem;
}

.disclaimers p {
  margin: 0;
  font-size: 0.62rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
}

.disclaimers a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.disclaimers a:hover {
  color: #e0e7ff;
}

.cta {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0.95rem 1rem;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.02em;
  background: var(--fee-yellow);
  color: #111;
  cursor: pointer;
  margin-top: 0.15rem;
}

.cta:hover:not(:disabled) {
  filter: brightness(1.04);
}

.cta:disabled {
  opacity: 0.85;
  cursor: wait;
}

.micro {
  margin: 0.85rem 0 0;
  padding-top: 0.25rem;
  font-size: 0.58rem;
  line-height: 1.45;
  text-align: center;
  color: rgba(255, 255, 255, 0.78);
}
</style>
