<template>
  <section id="explore-results" class="or-explore" aria-labelledby="or-explore-heading">
    <div class="container">
      <header class="or-explore__head">
        <h2 id="or-explore-heading">Explore Big Results</h2>
        <p>We've built a reputation that corporations know well: we fight for what's fair, taking it to court if necessary.</p>
      </header>

      <div class="or-explore__grid">
        <img
          class="or-explore__photo"
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=85&fit=crop"
          alt="Attorneys and client after a case result"
          width="620"
          height="560"
          loading="lazy"
        />
        <div class="or-explore__copy">
          <h3>MEET CEMRAN B.</h3>
          <p>
            Cemran was rear-ended while driving on an expressway. She sustained several painful and permanent injuries to her neck and lower back, requiring extensive treatment and surgery. She won a verdict of $2.6M.
          </p>

          <div class="or-offer">
            <div class="or-offer__x">
              <strong>13x</strong>
              <span>Insurance Offer</span>
            </div>
            <div class="or-offer__bars" aria-label="Insurance offer compared with verdict">
              <div class="or-offer__row or-offer__row--small">
                <span></span>
                <p><strong>$225,000</strong> insurance offer</p>
              </div>
              <div class="or-offer__row or-offer__row--large">
                <span></span>
                <p><strong>$2,668,652</strong> verdict</p>
              </div>
            </div>
          </div>

          <div class="or-explore__actions">
            <button type="button" disabled aria-label="Previous case">←</button>
            <button type="button" aria-label="Next case">→</button>
          </div>
        </div>
      </div>

      <a href="#contact" class="or-explore__more">View more cases <span aria-hidden="true">↗</span></a>
      <p class="or-explore__note">
        Results may vary depending on your particular facts and legal circumstances. Prior results do not guarantee a similar outcome.
        <br />
        The attorneys shown in these photos may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.
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
  font-size: clamp(2.6rem, 6vw, 4.8rem);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.or-explore__head p {
  margin: 0 auto;
  max-width: 45rem;
  font-size: clamp(1.05rem, 2vw, 1.45rem);
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
}

.or-offer__row--large p {
  background: #0872d9;
}

.or-offer__row strong {
  display: block;
  font-size: 1.25rem;
}

.or-explore__actions {
  display: flex;
  gap: 0.55rem;
  margin-top: 2.5rem;
}

.or-explore__actions button {
  width: 2.3rem;
  height: 2.3rem;
  border: 0;
  border-radius: 8px;
  background: #020617;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 900;
  cursor: pointer;
}

.or-explore__actions button:disabled {
  background: #a6a8ac;
  cursor: not-allowed;
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
  font-size: 0.66rem;
  line-height: 1.45;
  color: #8b8f96;
}
</style>
