<template>
  <aside class="contact-lead" :class="`contact-lead--${variant}`" :aria-labelledby="titleId">
    <h2 :id="titleId" class="contact-lead__title">Build Your Recovery Checklist</h2>
    <p v-if="subtitle" class="contact-lead__sub">{{ subtitle }}</p>
    <form class="contact-lead__form" @submit.prevent="onSubmit">
      <div class="contact-lead__select-wrap">
        <select v-model="caseType" class="contact-lead__select" aria-label="Injury or medication context">
          <option value="">- Injury / Medication Context -</option>
          <option v-for="opt in MEDICAL_INTAKE_OPTIONS" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
      <div class="contact-lead__select-wrap">
        <select v-model="timing" class="contact-lead__select" aria-label="When the injury or symptoms began">
          <option value="">- When did it happen? -</option>
          <option v-for="opt in MEDICAL_TIMING_OPTIONS" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
      <fieldset class="contact-lead__status">
        <legend>Are symptoms worsening or changing?</legend>
        <label v-for="opt in MEDICAL_WORSENING_OPTIONS" :key="opt.value">
          <input v-model="worsening" type="radio" name="contact-worsening" :value="opt.value" />
          <span>{{ opt.label }}</span>
        </label>
      </fieldset>
      <p v-if="formError" class="contact-lead__error" role="alert">{{ formError }}</p>
      <div class="contact-lead__disclaimers">
        <p>
          This public tool is educational and does not collect your contact details or medical notes.
          If symptoms are severe or rapidly worsening, seek urgent medical attention immediately.
        </p>
      </div>
      <button type="submit" class="contact-lead__cta" :disabled="submitting">
        {{ submitting ? 'Opening your checklist…' : 'Show My Recovery Checklist' }}
      </button>
      <p class="contact-lead__micro">
        No name, phone number, email, or medical notes are collected by this tool. © {{ year }} For The People Clinic.
      </p>
    </form>
  </aside>
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
    variant?: 'light' | 'dark'
    title?: string
    subtitle?: string
    titleId?: string
    presetCaseType?: string
  }>(),
  {
    variant: 'light',
    title: "It's Free to Get Started",
    subtitle: '',
    titleId: 'contact-lead-title',
    presetCaseType: '',
  },
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
.contact-lead--light {
  --lead-bg: #fff;
  --lead-border: #d1d9e2;
  --lead-title: #1f2933;
  --lead-sub: #4b5563;
  --lead-disclaimer: #4b5563;
  --lead-micro: #6b7280;
  --lead-cta-bg: var(--yellow, #ffde00);
  --lead-cta-text: #111;
}

.contact-lead--dark {
  --lead-bg: rgba(0, 0, 0, 0.12);
  --lead-border: rgba(180, 200, 220, 0.55);
  --lead-title: #fff;
  --lead-sub: rgba(255, 255, 255, 0.92);
  --lead-disclaimer: rgba(255, 255, 255, 0.88);
  --lead-micro: rgba(255, 255, 255, 0.78);
  --lead-cta-bg: var(--yellow, #ffde00);
  --lead-cta-text: #111;
}

.contact-lead {
  border: 1px solid var(--lead-border);
  border-radius: 10px;
  padding: clamp(1.25rem, 3vw, 1.65rem);
  background: var(--lead-bg);
}

.contact-lead__title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-weight: 800;
  color: var(--lead-title);
}

.contact-lead__sub {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--lead-sub);
}

.contact-lead__form {
  display: grid;
  gap: 0.7rem;
}

.contact-lead__row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}

@media (max-width: 420px) {
  .contact-lead__row2 {
    grid-template-columns: 1fr;
  }
}

.contact-lead input,
.contact-lead select,
.contact-lead textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 0.65rem 0.75rem;
  background: #fff;
  color: #111;
}

.contact-lead--dark input,
.contact-lead--dark select,
.contact-lead--dark textarea {
  border: 0;
}

.contact-lead input::placeholder,
.contact-lead textarea::placeholder {
  color: #9ca3af;
}

.contact-lead__select-wrap {
  position: relative;
}

.contact-lead__select {
  appearance: none;
  padding-right: 2.25rem;
  cursor: pointer;
}

.contact-lead__select-wrap::after {
  content: '';
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-35%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #4b5563;
  pointer-events: none;
}

.contact-lead__textarea {
  resize: vertical;
  min-height: 6.5rem;
  line-height: 1.45;
}

.contact-lead__status {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0.8rem;
  border: 1px solid var(--lead-border);
  border-radius: 6px;
}

.contact-lead__status legend {
  padding: 0 0.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--lead-sub);
}

.contact-lead__status label {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  font-size: 0.82rem;
  line-height: 1.35;
  color: var(--lead-sub);
  cursor: pointer;
}

.contact-lead__status input {
  width: auto;
  margin: 0.1rem 0 0;
}

.contact-lead__error {
  margin: 0;
  padding: 0.55rem 0.7rem;
  background: #fee2e2;
  border-radius: 4px;
  color: #991b1b;
  font-size: 0.85rem;
  font-weight: 700;
}

.contact-lead__disclaimers {
  display: grid;
  gap: 0.5rem;
}

.contact-lead__disclaimers p {
  margin: 0;
  font-size: 0.62rem;
  line-height: 1.5;
  color: var(--lead-disclaimer);
}

.contact-lead--dark .contact-lead__disclaimers a {
  color: #fff;
}

.contact-lead--light .contact-lead__disclaimers a {
  color: var(--blue, #0066cc);
}

.contact-lead__disclaimers a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.contact-lead__cta {
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 0.95rem 1rem;
  font-weight: 800;
  font-size: 1rem;
  background: var(--lead-cta-bg);
  color: var(--lead-cta-text);
  cursor: pointer;
}

.contact-lead__cta:hover:not(:disabled) {
  filter: brightness(1.04);
}

.contact-lead__cta:disabled {
  opacity: 0.85;
  cursor: wait;
}

.contact-lead__micro {
  margin: 0.5rem 0 0;
  font-size: 0.58rem;
  line-height: 1.45;
  text-align: center;
  color: var(--lead-micro);
}
</style>
