<template>
  <section class="contact-why" aria-labelledby="contact-why-heading">
    <div class="container contact-why__inner">
      <header class="contact-why__head">
        <h2 id="contact-why-heading">Why Morgan &amp; Morgan?</h2>
        <p>
          Choosing Morgan &amp; Morgan means more than hiring a law firm—it's having a strong, supportive, and proven
          team on your side.
        </p>
      </header>

      <div class="contact-why__grid">
        <article v-for="item in items" :key="item.title" class="contact-why__cell">
          <span class="contact-why__bar" aria-hidden="true" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <NuxtLink v-if="item.link" :to="item.link.to" class="contact-why__link">
            {{ item.link.label }}
            <span class="contact-why__link-icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 10L10 2M10 2H4M10 2V8" />
              </svg>
            </span>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type WhyItem = {
  title: string
  text: string
  link?: { label: string; to: string }
}

const items: WhyItem[] = [
  {
    title: 'Fighting for More',
    text: '35 years. 1,000 lawyers. $30 billion recovered. We have the power to take on any corporation.',
  },
  {
    title: 'The Fee Is Free, Unless We Win',
    text: "It's easy to get started with a free case evaluation by phone, text or web - 24/7. The fee is always free unless we win.",
  },
  {
    title: 'Local Care + National Power',
    text: 'Your attorney is from your community—backed by the strength of a national firm.',
    link: { label: 'Find an office near you', to: '/locations' },
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;0,900;1,400&display=swap');

.contact-why {
  background: #f7f7f7;
  padding: clamp(3rem, 6vw, 4.5rem) 0;
}

.contact-why__head {
  max-width: 42rem;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.contact-why__head h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 800;
  color: #1f2933;
  letter-spacing: -0.02em;
}

.contact-why__head p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
}

.contact-why__grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .contact-why__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem 2rem;
  }
}

.contact-why__cell h3 {
  margin: 0 0 0.65rem;
  font-family: 'Roboto Condensed', 'Arial Narrow', Impact, sans-serif;
  font-size: 1.05rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #1f2933;
  line-height: 1.2;
}

.contact-why__bar {
  display: block;
  width: 2.75rem;
  height: 4px;
  margin-bottom: 0.85rem;
  background: var(--blue, #0066cc);
  border-radius: 2px;
}

.contact-why__cell p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #374151;
}

.contact-why__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.85rem;
  font-size: 0.9rem;
  font-weight: 800;
  color: #1f2933;
}

.contact-why__link:hover {
  color: var(--blue, #0066cc);
}

.contact-why__link-icon {
  display: grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  background: var(--blue, #0066cc);
  color: #fff;
  border-radius: 3px;
}

.contact-why__link-icon svg {
  display: block;
}
</style>
