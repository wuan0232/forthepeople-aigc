<template>
  <section class="or-corps" aria-labelledby="or-corps-heading">
    <div class="container">
      <div class="or-corps__head">
        <h2 id="or-corps-heading">Unafraid of Big Corporations</h2>
        <p>We've taken on the biggest corporations, and won. When companies disregard customer safety and care, we fight to hold them accountable.</p>
      </div>

      <div class="or-corps__grid">
        <article v-for="story in stories" :key="story.title" class="or-story">
          <img :src="story.img" :alt="story.alt" width="360" height="250" loading="lazy" />
          <h3>{{ story.title }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    title: 'Morgan & Morgan Files Lawsuit over Allegedly Harmful, Addictive Ultra-Processed Foods',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=520&q=85&fit=crop',
    alt: 'Medical test for a consumer safety case',
  },
  {
    title: "Morgan & Morgan Files Lawsuit Against Boar's Head Over Florida Man's Listeria Death.",
    img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=520&q=85&fit=crop',
    alt: 'Prepared meats on a board',
  },
  {
    title: 'Morgan & Morgan Files Lawsuit Over Massive Toxic Plume At Georgia Chemical Plant',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=520&q=85&fit=crop',
    alt: 'Dark smoke from an industrial incident',
  },
  {
    title: '$600M Settlement Reached in East Palestine Train Derailment Litigation',
    img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=520&q=85&fit=crop',
    alt: 'Railway tracks and train cars',
  },
]
</script>

<style scoped>
.or-corps {
  background: #fff;
  color: #20242b;
  padding: clamp(3rem, 6vw, 4.5rem) 0;
}

.or-corps__head {
  display: grid;
  gap: 1.2rem 3rem;
  align-items: start;
  margin-bottom: 2.2rem;
}

@media (min-width: 800px) {
  .or-corps__head {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}

.or-corps__head h2 {
  margin: 0;
  max-width: 28rem;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.02;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.or-corps__head p {
  margin: 0;
  max-width: 32rem;
  font-size: clamp(1rem, 1.7vw, 1.25rem);
  line-height: 1.45;
  color: #30343a;
}

.or-corps__grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 700px) {
  .or-corps__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.or-story img {
  width: 100%;
  aspect-ratio: 1.25 / 1;
  object-fit: cover;
  border-radius: 7px;
  display: block;
}

.or-story h3 {
  margin: 1rem 0 0;
  font-size: clamp(1rem, 1.5vw, 1.16rem);
  line-height: 1.22;
  font-weight: 900;
  color: #111827;
}
</style>
