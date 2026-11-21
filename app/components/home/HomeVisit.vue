<template>
  <section id="visit-preparation" class="home-clinic section-pad" aria-labelledby="visit-heading">
    <div class="home-clinic-align">
      <header class="home-clinic__head">
        <h2 id="visit-heading" class="home-clinic__title">Prepare for Your First Visit</h2>
        <p class="home-clinic__lead">A little preparation helps you make the most of your time with the doctor. Start with these four things.</p>
      </header>
      <div class="home-clinic__services">
        <article v-for="item in preparation" :key="item.title" class="home-clinic__service">
          <h3>{{ item.title }}</h3><p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const preparation = [
  { title: 'Your Questions', text: 'Write down what you want to discuss, including symptoms and how they affect daily activities.' },
  { title: 'Previous Care', text: 'Ask whether to bring discharge summaries, consultation notes, and existing imaging reports or images.' },
  { title: 'Medication List', text: 'Prepare a list of your current medications and any allergies to discuss with the doctor.' },
  { title: 'Visit Details', text: 'Confirm the location, appointment time, required identification, and payment or insurance information.' },
]
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
  border-top: 2px solid var(--blue, #0066cc);
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
  color: var(--blue, #0066cc);
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
