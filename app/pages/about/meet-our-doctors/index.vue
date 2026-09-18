<template>
  <section class="doctors-page">
    <div class="container doctors-page__inner">
      <SiteBreadcrumb
        class="doctors-page__crumb"
        separator="/"
        :items="[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Meet Our Doctors', strong: true },
        ]"
      />

      <header class="doctors-page__head">
        <h1>Meet Our Doctors</h1>
        <p>
          Meet the specialist currently featured by For The People Clinic. Additional clinician
          profiles will be introduced as our care network grows.
        </p>
      </header>

      <article class="doctors-page__profile">
        <div class="doctors-page__intro">
          <div class="doctors-page__photo">
            <img
              v-if="doctor.img"
              :src="doctor.img"
              :alt="doctor.name"
              width="400"
              height="500"
              loading="eager"
              decoding="async"
            />
            <span v-else class="doctors-page__monogram" aria-hidden="true">YL</span>
          </div>
          <div class="doctors-page__summary">
            <p class="doctors-page__eyebrow">Physician profile</p>
            <h2>{{ doctor.name }}</h2>
            <p class="doctors-page__specialty">{{ doctor.specialty }}</p>
            <p class="doctors-page__bio">{{ doctor.detail }}</p>
          </div>
        </div>

        <div class="doctors-page__content">
          <section class="doctors-page__section">
            <p class="doctors-page__label">Areas of care</p>
            <h3>Clinical focus</h3>
            <ul><li v-for="item in doctor.focus" :key="item">{{ item }}</li></ul>
          </section>
          <section class="doctors-page__section">
            <p class="doctors-page__label">Professional background</p>
            <h3>Education &amp; fellowship training</h3>
            <ul><li v-for="item in doctor.education" :key="item">{{ item }}</li></ul>
          </section>
          <section class="doctors-page__programs">
            <p class="doctors-page__label">Specialized care pathways</p>
            <h3>Programs</h3>
            <ul><li v-for="item in doctor.programs" :key="item">{{ item }}</li></ul>
          </section>
          <section class="doctors-page__distinction">
            <p class="doctors-page__label">What sets Dr. Li apart</p>
            <h3>Advanced techniques, grounded in complex-care experience</h3>
            <div class="doctors-page__two-column">
              <div><h4>Technical approach</h4><ul><li v-for="item in doctor.differentiators" :key="item">{{ item }}</li></ul></div>
              <div><h4>Clinical experience</h4><ul><li v-for="item in doctor.experience" :key="item">{{ item }}</li></ul></div>
            </div>
          </section>
          <section class="doctors-page__scholarship">
            <p class="doctors-page__label">76 peer-reviewed publications</p>
            <h3>Research &amp; recognition</h3>
            <p>{{ doctor.research }}</p>
            <ul><li v-for="item in doctor.achievements" :key="item">{{ item }}</li></ul>
            <div class="doctors-page__journals"><span v-for="venue in doctor.publicationVenues" :key="venue">{{ venue }}</span></div>
          </section>
          <section class="doctors-page__research">
            <p class="doctors-page__label">Selected publications</p>
            <h3>Research highlights</h3>
            <div class="doctors-page__research-grid">
              <article v-for="item in doctor.researchHighlights" :key="item.title">
                <h4>{{ item.title }}</h4>
                <p class="doctors-page__citation">{{ item.citation }}</p>
                <p>{{ item.takeaway }}</p>
              </article>
            </div>
          </section>
        </div>
      </article>

      <p class="doctors-page__cta">
        <NuxtLink to="/medical/what-to-do" class="link-arrow">
          Start the 5-Step Medical Action Guide
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
          </span>
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CLINIC_DOCTORS } from '~/constants/clinic'

const doctor = CLINIC_DOCTORS[0]!

useHead({
  title: 'Meet Our Doctors | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Meet the clinicians at For The People Clinic who support post-accident follow-up, injury recovery planning, and specialist coordination.',
    },
  ],
})
</script>

<style scoped>
.doctors-page {
  padding: calc(var(--header-offset, 5rem) + 2rem) 0 4rem;
  background: linear-gradient(180deg, #f3f8fc 0%, #fff 40%);
}

.doctors-page__inner {
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}

.doctors-page__crumb {
  margin-bottom: 1.5rem;
}

.doctors-page__head {
  max-width: 40rem;
  margin-bottom: 2.5rem;
}

.doctors-page__head h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy, #0a1f44);
}

.doctors-page__head p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.55;
  color: #475569;
}

.doctors-page__profile {
  border-top: 1px solid #dbe4ee;
}

.doctors-page__intro {
  display: grid;
  gap: 2rem;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0;
}

@media (min-width: 800px) {
  .doctors-page__intro {
    grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
    align-items: center;
    gap: clamp(3rem, 6vw, 5.5rem);
  }
}

.doctors-page__summary {
  max-width: 42rem;
  padding-block: 1rem;
}

.doctors-page__eyebrow,
.doctors-page__label {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-red, #c41230);
}

.doctors-page__intro h2 {
  margin: 0;
  font-size: clamp(1.75rem, 3.5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy, #0a1f44);
}

.doctors-page__content {
  display: grid;
  gap: 1.5rem;
  padding-top: 2.25rem;
  border-top: 1px solid #dbe4ee;
}

@media (min-width: 800px) {
  .doctors-page__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

.doctors-page__section {
  padding: 0 0 1rem;
}

.doctors-page__section h3,
.doctors-page__programs h3,
.doctors-page__distinction h3,
.doctors-page__scholarship h3,
.doctors-page__research h3 {
  margin: 0 0 0.65rem;
  font-size: 1.15rem;
  color: var(--navy, #0a1f44);
}

.doctors-page__content ul {
  margin: 0;
  padding-left: 1.15rem;
  color: #475569;
  line-height: 1.55;
}

.doctors-page__content li + li {
  margin-top: 0.35rem;
}

.doctors-page__programs,
.doctors-page__distinction,
.doctors-page__scholarship,
.doctors-page__research {
  grid-column: 1 / -1;
  padding: 1.25rem;
}

.doctors-page__programs {
  background: var(--navy, #0a1f44);
  color: #fff;
}

.doctors-page__programs h3 {
  color: #fff;
}

.doctors-page__programs ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0;
  list-style: none;
}

.doctors-page__programs li,
.doctors-page__programs li + li {
  margin: 0;
  padding: 0.75rem 1rem;
  border: 1px solid rgb(255 255 255 / 0.3);
  color: #fff;
}

.doctors-page__distinction {
  border-top: 3px solid var(--mm-red, #c41230);
  background: #f6f9fc;
}

.doctors-page__two-column,
.doctors-page__research-grid {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 800px) {
  .doctors-page__two-column,
  .doctors-page__research-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

.doctors-page__two-column h4,
.doctors-page__research-grid h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--navy, #0a1f44);
}

.doctors-page__scholarship {
  border-left: 3px solid var(--mm-red, #c41230);
  background: #f6f9fc;
}

.doctors-page__scholarship > p:not(.doctors-page__label) {
  margin: 0 0 1.25rem;
  color: #475569;
  line-height: 1.55;
}

.doctors-page__journals {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.25rem;
}

.doctors-page__journals span {
  padding: 0.35rem 0.55rem;
  background: #e2e8f0;
  font-size: 0.78rem;
  font-weight: 600;
  color: #334155;
}

.doctors-page__research {
  padding-inline: 0;
}

.doctors-page__research-grid article {
  padding: 1.15rem;
  border-top: 2px solid #cbd5e1;
  background: #fff;
}

.doctors-page__research-grid article > p:last-child {
  margin: 0;
  color: #334155;
  line-height: 1.55;
}

.doctors-page__citation {
  margin: 0 0 0.75rem;
  font-size: 0.86rem;
  font-style: italic;
  line-height: 1.45;
  color: #64748b;
}

.doctors-page__grid {
  display: grid;
  gap: 1.75rem;
}

@media (min-width: 640px) {
  .doctors-page__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .doctors-page__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.doctors-page__link {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.doctors-page__link:hover .doctors-page__more {
  text-decoration: underline;
}

.doctors-page__photo {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  overflow: hidden;
  background: #d9e8f5;
  margin: 0 auto;
  box-shadow: 0 1.25rem 3rem rgb(15 23 42 / 0.12);
}

.doctors-page__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.doctors-page__monogram {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  background: linear-gradient(135deg, #0a1f44, #1f4f82);
  color: #fff;
  font-family: Georgia, serif;
  font-size: clamp(3rem, 8vw, 5rem);
  letter-spacing: -0.08em;
}

.doctors-page__card h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--navy, #0a1f44);
}

.doctors-page__specialty {
  margin: 0.45rem 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--mm-red, #c41230);
}

.doctors-page__bio {
  margin: 0;
  max-width: 39rem;
  font-size: 1rem;
  line-height: 1.65;
  color: #475569;
}

.doctors-page__more {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--blue, #1f6dde);
}

.doctors-page__cta {
  margin: 2.5rem 0 0;
}
</style>
