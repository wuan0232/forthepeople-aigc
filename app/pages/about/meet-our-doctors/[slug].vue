<template>
  <section class="doctor-detail">
    <div class="container doctor-detail__inner">
      <SiteBreadcrumb
        class="doctor-detail__crumb"
        separator="/"
        :items="[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Meet Our Doctors', to: '/about/meet-our-doctors' },
          { label: doctor.name, strong: true },
        ]"
      />

      <div class="doctor-detail__hero">
        <div class="doctor-detail__photo">
          <img
            v-if="doctor.img"
            :src="doctor.img"
            :alt="doctor.name"
            width="400"
            height="500"
            loading="eager"
            decoding="async"
          />
          <span v-else class="doctor-detail__monogram" aria-hidden="true">YL</span>
        </div>
        <div class="doctor-detail__copy">
          <p class="doctor-detail__eyebrow">Physician Profile</p>
          <h1>{{ doctor.name }}</h1>
          <p class="doctor-detail__specialty">{{ doctor.specialty }}</p>
          <p class="doctor-detail__lead">{{ doctor.detail }}</p>

          <div class="doctor-detail__actions">
            <NuxtLink to="/contact" class="link-arrow">Contact the clinic</NuxtLink>
            <NuxtLink to="/about/meet-our-doctors" class="link-arrow">Back to doctor profile</NuxtLink>
          </div>
        </div>
      </div>

      <div class="doctor-detail__content">
        <section class="doctor-detail__section">
          <p class="doctor-detail__section-label">Areas of care</p>
          <h2>Clinical focus</h2>
          <ul>
            <li v-for="item in doctor.focus" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="doctor-detail__section">
          <p class="doctor-detail__section-label">Professional background</p>
          <h2>Education &amp; fellowship training</h2>
          <ul>
            <li v-for="item in doctor.education" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="doctor-detail__programs">
          <p class="doctor-detail__achievement-label">Specialized care pathways</p>
          <h2>Programs</h2>
          <ul>
            <li v-for="item in doctor.programs" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="doctor-detail__distinction" aria-labelledby="distinction-heading">
          <header>
            <p class="doctor-detail__achievement-label">What sets Dr. Li apart</p>
            <h2 id="distinction-heading">Advanced techniques, grounded in complex-care experience</h2>
          </header>
          <div class="doctor-detail__distinction-grid">
            <div>
              <h3>Technical approach</h3>
              <ul>
                <li v-for="item in doctor.differentiators" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <h3>Clinical experience</h3>
              <ul>
                <li v-for="item in doctor.experience" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="doctor-detail__achievement">
          <p class="doctor-detail__achievement-label">76 peer-reviewed publications</p>
          <h2>Research &amp; recognition</h2>
          <p>{{ doctor.research }}</p>
          <ul>
            <li v-for="item in doctor.achievements" :key="item">{{ item }}</li>
          </ul>
          <div class="doctor-detail__journals" aria-label="Selected journals">
            <span v-for="venue in doctor.publicationVenues" :key="venue">{{ venue }}</span>
          </div>
        </section>

        <section class="doctor-detail__research" aria-labelledby="research-highlights-heading">
          <header>
            <p class="doctor-detail__achievement-label">Selected publications</p>
            <h2 id="research-highlights-heading">Research highlights</h2>
          </header>
          <div class="doctor-detail__research-grid">
            <article v-for="item in doctor.researchHighlights" :key="item.title" class="doctor-detail__research-card">
              <h3>{{ item.title }}</h3>
              <p class="doctor-detail__citation">{{ item.citation }}</p>
              <p>{{ item.takeaway }}</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getClinicDoctorBySlug } from '~/constants/clinic'

const route = useRoute()
const doctor = getClinicDoctorBySlug(String(route.params.slug || ''))

if (!doctor) {
  throw createError({ statusCode: 404, statusMessage: 'Doctor not found' })
}

useHead({
  title: `${doctor.name} | Meet Our Doctors | For The People Clinic`,
  meta: [
    {
      name: 'description',
      content: doctor.bio,
    },
  ],
})
</script>

<style scoped>
.doctor-detail {
  padding: calc(var(--header-offset, 5rem) + 2rem) 0 4rem;
  background: #fff;
}

.doctor-detail__inner {
  width: min(960px, calc(100% - 2rem));
  margin-inline: auto;
}

.doctor-detail__crumb {
  margin-bottom: 1.75rem;
}

.doctor-detail__hero {
  display: grid;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

@media (min-width: 800px) {
  .doctor-detail__hero {
    grid-template-columns: minmax(240px, 320px) 1fr;
    gap: 2.5rem;
    align-items: start;
  }
}

.doctor-detail__photo {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #d9e8f5;
}

.doctor-detail__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.doctor-detail__monogram {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  background: linear-gradient(135deg, #071b3d, #24578d);
  color: #fff;
  font-family: Georgia, serif;
  font-size: clamp(5rem, 16vw, 9rem);
  letter-spacing: -0.1em;
}

.doctor-detail__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #64748b;
}

.doctor-detail__copy h1 {
  margin: 0 0 0.35rem;
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy, #0a1f44);
}

.doctor-detail__specialty {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--mm-red, #c41230);
}

.doctor-detail__lead {
  margin: 0 0 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #334155;
}

.doctor-detail__content {
  display: grid;
  gap: 1.5rem;
  padding-top: 2.25rem;
  border-top: 1px solid #dbe4ee;
}

@media (min-width: 800px) {
  .doctor-detail__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

.doctor-detail__section {
  padding: 1.25rem 0;
}

.doctor-detail__section h2,
.doctor-detail__achievement h2,
.doctor-detail__programs h2,
.doctor-detail__distinction h2,
.doctor-detail__research h2 {
  margin: 0 0 0.65rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--navy, #0a1f44);
}

.doctor-detail__section-label {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-red, #c41230);
}

.doctor-detail__content ul {
  margin: 0 0 1.25rem;
  padding-left: 1.15rem;
  color: #475569;
  line-height: 1.55;
}

.doctor-detail__content li + li {
  margin-top: 0.35rem;
}

.doctor-detail__achievement,
.doctor-detail__programs,
.doctor-detail__distinction,
.doctor-detail__research {
  margin: 0;
  padding: 1.25rem;
  grid-column: 1 / -1;
}

.doctor-detail__programs {
  background: var(--navy, #0a1f44);
  color: #fff;
}

.doctor-detail__programs h2 {
  color: #fff;
}

.doctor-detail__programs ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.doctor-detail__programs li {
  margin: 0;
  padding: 0.75rem 1rem;
  border: 1px solid rgb(255 255 255 / 0.3);
  color: #fff;
}

.doctor-detail__programs li + li {
  margin-top: 0;
}

.doctor-detail__distinction {
  border-top: 3px solid var(--mm-red, #c41230);
  background: #f6f9fc;
}

.doctor-detail__distinction-grid,
.doctor-detail__research-grid {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 800px) {
  .doctor-detail__distinction-grid,
  .doctor-detail__research-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

.doctor-detail__distinction h3,
.doctor-detail__research-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--navy, #0a1f44);
}

.doctor-detail__achievement {
  border-left: 3px solid var(--mm-red, #c41230);
  background: #f6f9fc;
}

.doctor-detail__achievement > p:last-of-type {
  margin-bottom: 1.25rem;
}

.doctor-detail__journals {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.doctor-detail__journals span {
  padding: 0.35rem 0.55rem;
  background: #e2e8f0;
  font-size: 0.78rem;
  font-weight: 600;
  color: #334155;
}

.doctor-detail__research {
  padding-inline: 0;
}

.doctor-detail__research-card {
  padding: 1.15rem;
  border-top: 2px solid #cbd5e1;
  background: #fff;
}

.doctor-detail__research-card > p:last-child {
  margin: 0;
  color: #334155;
  line-height: 1.55;
}

.doctor-detail__citation {
  margin: 0 0 0.75rem;
  font-size: 0.86rem;
  font-style: italic;
  line-height: 1.45;
  color: #64748b;
}

.doctor-detail__achievement-label {
  margin: 0 0 0.35rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mm-red, #c41230);
}

.doctor-detail__achievement > p:last-child {
  margin: 0;
  color: #475569;
  line-height: 1.55;
}

.doctor-detail__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}
</style>
