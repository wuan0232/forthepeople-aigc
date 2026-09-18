<template>
  <section id="explore-results" class="or-explore" aria-labelledby="or-explore-heading">
    <div class="container">
      <header class="or-explore__head">
        <h2 id="or-explore-heading">Explore Recovery Pathways</h2>
        <p>
          These stories highlight practical medical next steps—symptom monitoring, documentation, and
          clinic follow-up—not courtroom outcomes.
        </p>
      </header>

      <div class="or-explore__grid">
        <img
          class="or-explore__photo"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85&fit=crop"
          alt="Clinician reviewing a patient recovery plan"
          width="620"
          height="560"
          loading="lazy"
        />
        <div class="or-explore__copy">
          <h3>MEET CEMRAN B.</h3>
          <p>
            Cemran was rear-ended on an expressway and developed lasting neck and lower-back pain.
            With structured follow-up, imaging review, and a staged rehab plan, she regained safer
            daily function and clearer return-to-activity guidance.
          </p>

          <div class="or-offer">
            <div class="or-offer__x">
              <strong>5</strong>
              <span>Step Care Path</span>
            </div>
            <div class="or-offer__bars" aria-label="Early visit compared with structured follow-up">
              <div class="or-offer__row or-offer__row--small">
                <span></span>
                <p><strong>Day 1</strong> urgent evaluation</p>
              </div>
              <div class="or-offer__row or-offer__row--large">
                <span></span>
                <p><strong>Week 1–4</strong> clinic + rehab plan</p>
              </div>
            </div>
          </div>

          <div class="or-explore__actions">
            <NuxtLink to="/medical/what-to-do" class="or-explore__guide">Open the 5-step guide</NuxtLink>
          </div>
        </div>
      </div>

      <NuxtLink to="/about/meet-our-doctors" class="or-explore__more">
        Meet our clinicians <span aria-hidden="true">↗</span>
      </NuxtLink>
      <p class="or-explore__note">
        Stories are educational and anonymized for privacy. They are not a substitute for emergency
        care or individualized medical advice. If symptoms are severe or worsening, seek urgent care
        first.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700;900&display=swap');

.or-explore {
  background: #fff;
  color: #20242b;
  padding: clamp(3.5rem, 7vw, 5rem) 0 3rem;
}

.or-explore__head {
  max-width: 52rem;
  margin: 0 auto 2.6rem;
  text-align: center;
}

.or-explore__head h2 {
  margin: 0 0 1rem;
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.or-explore__head p {
  margin: 0 auto;
  max-width: 45rem;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.35;
  color: #34383f;
}

.or-explore__grid {
  display: grid;
  gap: 2rem;
  align-items: center;
  max-width: 64rem;
  margin: 0 auto;
}

@media (min-width: 860px) {
  .or-explore__grid {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
  }
}

.or-explore__photo {
  width: 100%;
  aspect-ratio: 1 / 1.05;
  object-fit: cover;
  border-radius: 8px;
}

.or-explore__copy h3 {
  margin: 0 0 1rem;
  font-family: 'Roboto Condensed', Impact, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.98;
}

.or-explore__copy > p {
  margin: 0 0 2rem;
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #2f3338;
}

.or-offer {
  display: grid;
  gap: 1.4rem;
  align-items: center;
}

@media (min-width: 620px) {
  .or-offer {
    grid-template-columns: auto 1fr;
  }
}

.or-offer__x strong {
  display: block;
  font-family: 'Roboto Condensed', Impact, sans-serif;
  font-size: clamp(4rem, 8vw, 6rem);
  line-height: 0.85;
  color: #0872d9;
}

.or-offer__x span {
  display: block;
  margin-top: 0.4rem;
  font-weight: 900;
}

.or-offer__bars {
  display: grid;
  gap: 0.75rem;
}

.or-offer__row {
  display: grid;
  grid-template-columns: var(--bar-width) 1fr;
  align-items: center;
}

.or-offer__row--small {
  --bar-width: 2.2rem;
}

.or-offer__row--large {
  --bar-width: 19rem;
  color: #fff;
}

.or-offer__row span {
  display: block;
  height: 3.2rem;
  background: #d9dde2;
}

.or-offer__row--large span {
  background: #0872d9;
}

.or-offer__row p {
  margin: 0;
  padding: 0.55rem 0.8rem;
  min-height: 3.2rem;
  background: transparent;
  font-size: 0.95rem;
  line-height: 1.15;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.or-offer__row--large p {
  background: #0872d9;
}

.or-offer__row strong {
  display: block;
  font-size: 1.15rem;
}

.or-explore__actions {
  margin-top: 2rem;
}

.or-explore__guide {
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  background: #071f3c;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
}

.or-explore__more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.2rem auto 2.3rem;
  color: #111;
  font-weight: 900;
  text-decoration: none;
}

.or-explore__more span {
  display: inline-grid;
  place-items: center;
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 5px;
  background: #0872d9;
  color: #fff;
}

.or-explore__note {
  margin: 0 auto;
  max-width: 44rem;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.45;
  color: #8b8f96;
}
</style>
