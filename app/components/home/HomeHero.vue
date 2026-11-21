<template>
  <section class="hero" id="top">
    <div class="hero__bg" aria-hidden="true" />
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title">HURT IN AN ACCIDENT? START HERE.</h1>
        <p class="hero__sub">
          Tell us what happened. Ask about a visit. Our Syracuse, Dallas, and Flushing offices can help you
          find appointment information and prepare to speak with the doctor.
        </p>
        <p class="hero__sub"><NuxtLink to="/contact" class="ul">Call About a Visit</NuxtLink>
        </p>

        <p class="seen-label">Your next steps:</p>
        <div class="seen-logos" role="list">
          <span>ASK ABOUT CARE</span>
          <span>PREPARE YOUR RECORDS</span>
          <span>WRITE DOWN QUESTIONS</span>
          <span>MEET THE DOCTOR</span>
          <span>PLAN YOUR FOLLOW-UP</span>
        </div>
      </div>

      <ClinicContactCard dark />
    </div>
  </section>
</template>


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
