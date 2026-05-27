<template>
  <section class="or-ways" aria-labelledby="or-ways-heading">
    <div class="container">
      <div class="or-ways__head">
        <h2 id="or-ways-heading">Ways We Can Help</h2>
        <p>From trucking accidents to pedestrian injuries, Morgan & Morgan has the experience and resources to fight for the compensation you deserve.</p>
      </div>

      <div class="or-ways__cards">
        <article v-for="card in cards" :key="card.title" class="or-way-card">
          <span class="or-way-card__icon" v-html="card.icon" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <a :href="card.href">How We Help <span aria-hidden="true">↗</span></a>
        </article>
      </div>

      <div class="or-case-types">
        <div class="or-case-types__head">
          <h3>Over 50 Case Types, Like:</h3>
          <a href="/practice-areas">View All <span aria-hidden="true">›</span></a>
        </div>
        <ul>
          <li v-for="type in caseTypes" :key="type">{{ type }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Injured in a car accident?',
    text: "We've helped thousands recover medical bills, lost wages, and more after crashes caused by negligence.",
    href: '/practice-areas/car-accident',
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18l2-6h12l2 6"/><path d="M4 18h20v5H4z"/><circle cx="8" cy="23" r="2"/><circle cx="20" cy="23" r="2"/><path d="M24 9l4-4M25 5h3v3"/></svg>',
  },
  {
    title: 'Hurt in a slip and fall?',
    text: 'From wet floors to unsafe conditions, we fight to hold property owners accountable for your injuries.',
    href: '/practice-areas/slip-and-fall',
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><circle cx="14" cy="7" r="3"/><path d="M14 10l-3 7 6 2 3 6M12 17l-6 3M18 13l5 2"/></svg>',
  },
  {
    title: 'Injured on the job?',
    text: 'We guide workers through the claims process to secure the benefits they deserve for workplace injuries.',
    href: '/practice-areas/workers-compensation',
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4v6M9 8l4 4M23 8l-4 4"/><rect x="9" y="13" width="14" height="14" rx="2"/><path d="M13 18h6M13 22h4"/></svg>',
  },
]

const caseTypes = [
  'Social Security',
  'Dangerous Drugs',
  'Defective Products',
  'Medical Malpractice',
  'Nursing Home Abuse',
  'Labor & Employment',
  'Truck Accidents',
  'Class Actions',
]
</script>

<style scoped>
.or-ways {
  background: #f3f3f3;
  color: #20242b;
  padding: clamp(3.5rem, 7vw, 5rem) 0;
}

.or-ways__head {
  display: grid;
  gap: 1.2rem 3rem;
  align-items: start;
  margin-bottom: 2.5rem;
}

@media (min-width: 800px) {
  .or-ways__head {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
}

.or-ways__head h2 {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.or-ways__head p {
  margin: 0;
  max-width: 34rem;
  font-size: clamp(1.05rem, 1.8vw, 1.38rem);
  line-height: 1.38;
}

.or-ways__cards {
  display: grid;
  gap: 1.2rem;
}

@media (min-width: 760px) {
  .or-ways__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.or-way-card {
  background: #fff;
  border-radius: 9px;
  padding: 1.65rem 1.5rem;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.035);
}

.or-way-card__icon {
  display: block;
  color: #111827;
  margin-bottom: 1.1rem;
}

.or-way-card__icon :deep(svg) {
  width: 2.8rem;
  height: 2.8rem;
}

.or-way-card h3 {
  margin: 0 0 0.8rem;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.12;
  font-weight: 900;
}

.or-way-card p {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.55;
  color: #3f454d;
}

.or-way-card a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #111827;
  font-weight: 900;
  text-decoration: none;
}

.or-way-card a span {
  display: inline-grid;
  place-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 5px;
  background: #0872d9;
  color: #fff;
}

.or-case-types {
  margin-top: 1.4rem;
  background: #fff;
  border-radius: 9px;
  padding: 1.1rem 1.35rem 1.4rem;
}

.or-case-types__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.or-case-types__head h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
}

.or-case-types__head a {
  color: #111827;
  font-weight: 900;
  text-decoration: none;
}

.or-case-types ul {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem 2rem;
}

@media (min-width: 760px) {
  .or-case-types ul {
    grid-template-columns: repeat(4, 1fr);
  }
}

.or-case-types li {
  font-weight: 900;
  color: #20242b;
}

.or-case-types li::before {
  content: '✓';
  margin-right: 0.6rem;
  font-weight: 900;
}
</style>
