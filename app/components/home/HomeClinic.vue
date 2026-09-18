<template>
  <section class="home-clinic section-pad" aria-labelledby="home-clinic-heading">
    <div class="home-clinic-align">
      <header class="home-clinic__head">
        <h2 id="home-clinic-heading" class="home-clinic__title">Our Clinic &amp; Doctors</h2>
        <p class="home-clinic__lead">{{ CLINIC_INTRO }}</p>
      </header>

      <div class="home-clinic__services" role="list">
        <article v-for="s in CLINIC_SERVICES" :key="s.title" class="home-clinic__service" role="listitem">
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </article>
      </div>

      <div class="home-clinic__doctors" role="list">
        <article v-for="d in CLINIC_DOCTORS" :key="d.name" class="home-clinic__doctor" role="listitem">
          <NuxtLink :to="`/about/meet-our-doctors/${d.slug}`" class="home-clinic__doctor-link">
            <div class="home-clinic__photo">
              <img v-if="d.img" :src="d.img" :alt="d.name" width="160" height="200" loading="lazy" decoding="async" />
              <span v-else class="home-clinic__monogram" aria-hidden="true">YL</span>
            </div>
            <h3>{{ d.name }}</h3>
            <p class="home-clinic__specialty">{{ d.specialty }}</p>
            <p class="home-clinic__bio">{{ d.bio }}</p>
          </NuxtLink>
        </article>
      </div>

      <div class="home-clinic__cta">
        <a href="/about/meet-our-doctors" class="link-arrow">
          Meet Dr. Li
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
          </span>
        </a>
        <a href="/medical/what-to-do" class="link-arrow">
          Start the 5-Step Medical Action Guide
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
          </span>
        </a>
        <a href="/contact" class="link-arrow home-clinic__cta-secondary">
          Contact For The People Clinic
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CLINIC_DOCTORS, CLINIC_INTRO, CLINIC_SERVICES } from '~/constants/clinic'
</script>

<style scoped>
.home-clinic {
  background: linear-gradient(180deg, #f3f8fc 0%, #fff 55%);
}

.home-clinic-align {
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}

.home-clinic__head {
  max-width: 40rem;
  margin-bottom: 2rem;
}

.home-clinic__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy, #0a1f44);
}

.home-clinic__lead {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.55;
  color: #444;
}

.home-clinic__services {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 720px) {
  .home-clinic__services {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .home-clinic__services {
    grid-template-columns: repeat(4, 1fr);
  }
}

.home-clinic__service {
  padding: 1rem 0;
  border-top: 2px solid var(--mm-red, #c41230);
}

.home-clinic__service h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy, #0a1f44);
}

.home-clinic__service p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.45;
  color: #555;
}

.home-clinic__doctors {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .home-clinic__doctors {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .home-clinic__doctors {
    grid-template-columns: repeat(4, 1fr);
  }
}

.home-clinic__doctor-link {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.home-clinic__doctor-link:hover h3 {
  text-decoration: underline;
}

.home-clinic__photo {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #d9e8f5;
  margin-bottom: 0.75rem;
}

.home-clinic__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.home-clinic__monogram {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  background: linear-gradient(135deg, #0a1f44, #1f4f82);
  color: #fff;
  font-family: Georgia, serif;
  font-size: 3rem;
  letter-spacing: -0.08em;
}

.home-clinic__doctor h3 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy, #0a1f44);
}

.home-clinic__specialty {
  margin: 0.25rem 0 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--mm-red, #c41230);
}

.home-clinic__bio {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.45;
  color: #555;
}

.home-clinic__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.75rem;
  align-items: center;
}

.home-clinic__cta-secondary {
  opacity: 0.9;
}
</style>
