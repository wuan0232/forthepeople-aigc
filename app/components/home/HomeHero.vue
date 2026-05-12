<template>
  <section class="hero" id="top">
    <div class="hero__bg" aria-hidden="true" />
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title">AMERICA'S LARGEST INJURY LAW FIRM™</h1>
        <p class="hero__sub">
          Get a <span class="ul">FREE case evaluation</span> today.
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

        <p class="seen-label">As seen on:</p>
        <div class="seen-logos" role="list">
          <span>abc NEWS</span>
          <span>CNN</span>
          <span>USA TODAY</span>
          <span>FOX</span>
          <span>NBC NEWS</span>
        </div>
      </div>

      <aside class="lead-form" aria-labelledby="lead-form-title">
        <h2 id="lead-form-title" class="lead-form__title">It's Easy to Get Started.</h2>
        <form class="lead-form__form" @submit.prevent>
          <div class="row2">
            <label class="sr-only" for="fn">First Name</label>
            <input id="fn" type="text" placeholder="First Name" autocomplete="given-name" />
            <label class="sr-only" for="ln">Last Name</label>
            <input id="ln" type="text" placeholder="Last Name" autocomplete="family-name" />
          </div>
          <div class="row2">
            <label class="sr-only" for="ph">Phone Number</label>
            <input id="ph" type="tel" placeholder="Phone Number" autocomplete="tel" />
            <label class="sr-only" for="zip">Zip Code</label>
            <input id="zip" type="text" placeholder="Zip Code" autocomplete="postal-code" />
          </div>
          <label class="sr-only" for="em">E-mail</label>
          <input id="em" type="email" placeholder="E-mail" autocomplete="email" />
          <label class="sr-only" for="case">Case Type</label>
          <select id="case">
            <option value="">- Case Type -</option>
            <option>Car Accident</option>
            <option>Medical Malpractice</option>
            <option>Workers' Comp</option>
          </select>
          <label class="sr-only" for="desc">Describe what happened</label>
          <textarea id="desc" rows="4" placeholder="Please describe what happened." />
          <p class="disclaimer">
            By submitting my phone number above I authorize Morgan & Morgan, and its service providers, to deliver calls including using an automatic telephone dialing system or artificial or prerecorded voice, to the number submitted. Consent is not a condition to receive services. Msg frequency varies. Msg & data rates may apply. Upon receipt of any message, reply STOP to unsubscribe.
<br>
By submitting this form, you agree to our Terms & acknowledge our privacy policy.
          </p>
          <button type="submit" class="cta">See if you qualify</button>
          <p class="micro">
            Results may vary depending on your particular facts and legal circumstances. ©2026 Morgan and Morgan, P.A. All rights reserved.
          </p>
        </form>
      </aside>
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

.disclaimer {
  font-size: 0.65rem;
  line-height: 1.45;
  opacity: 0.9;
  margin: 0.25rem 0 0;
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

.cta:hover {
  filter: brightness(1.03);
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
