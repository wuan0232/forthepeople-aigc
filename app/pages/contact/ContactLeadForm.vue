<template>
  <aside class="contact-lead" :class="`contact-lead--${variant}`" :aria-labelledby="titleId">
    <h2 :id="titleId" class="contact-lead__title">{{ title }}</h2>
    <p v-if="subtitle" class="contact-lead__sub">{{ subtitle }}</p>
    <form class="contact-lead__form" @submit.prevent>
      <div class="contact-lead__row2">
        <input type="text" placeholder="First Name" autocomplete="given-name" />
        <input type="text" placeholder="Last Name" autocomplete="family-name" />
      </div>
      <div class="contact-lead__row2">
        <input type="tel" placeholder="Phone Number" autocomplete="tel" />
        <input type="text" placeholder="Zip Code" autocomplete="postal-code" />
      </div>
      <input type="email" placeholder="E-mail" autocomplete="email" />
      <div class="contact-lead__select-wrap">
        <select v-model="caseType" class="contact-lead__select" aria-label="Case type">
          <option value="">- Case Type -</option>
          <option v-for="opt in caseTypes" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </div>
      <textarea class="contact-lead__textarea" rows="5" placeholder="Please describe what happened" />
      <div class="contact-lead__disclaimers">
        <p>
          By submitting my phone number above I authorize Morgan &amp; Morgan, and its service providers, to deliver
          calls including using an automatic telephone dialing system or artificial or prerecorded voice, to the number
          submitted. Consent is not a condition to receive services. Msg frequency varies. Msg &amp; data rates may apply.
          Upon receipt of any message, reply STOP to unsubscribe.
        </p>
        <p>
          By submitting this form, you agree to our
          <a href="#terms">Terms</a>
          &amp; acknowledge our
          <a href="#privacy">privacy policy</a>.
        </p>
      </div>
      <button type="submit" class="contact-lead__cta">See if you qualify</button>
      <p class="contact-lead__micro">
        Results may vary depending on your particular facts and legal circumstances. © {{ year }} Morgan and Morgan,
        P.A. All rights reserved.
      </p>
    </form>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

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
const caseType = ref(props.presetCaseType || '')

const caseTypes = [
  'Car Accident',
  'Slip and Fall',
  'Truck Accident',
  'Motorcycle Accident',
  'Personal Injury',
  'Medical Malpractice',
]

watch(
  () => props.presetCaseType,
  (v) => {
    if (v) caseType.value = v
  },
)
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

.contact-lead__cta:hover {
  filter: brightness(1.04);
}

.contact-lead__micro {
  margin: 0.5rem 0 0;
  font-size: 0.58rem;
  line-height: 1.45;
  text-align: center;
  color: var(--lead-micro);
}
</style>
