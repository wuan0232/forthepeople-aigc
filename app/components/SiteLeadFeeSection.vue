<template>
  <section class="fee" :id="sectionId">
    <div class="container fee__grid">
      <div class="fee__copy">
        <h2 class="fee__title">LET US HELP YOU TAKE THE NEXT STEP</h2>
        <p class="fee__sub">Choose your preferred office. Call to discuss your visit, ask about availability, and find out what to bring.</p>
      </div>
      <ClinicContactCard dark />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ presetCaseType?: string; sectionId?: string }>(), { sectionId: 'contact' })
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
