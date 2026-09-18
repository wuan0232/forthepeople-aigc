<template>
  <section class="or-corps" aria-labelledby="or-corps-heading">
    <div class="container">
      <div class="or-corps__head">
        <h2 id="or-corps-heading">Patient Education Spotlight</h2>
        <p>
          Practical guides that help families understand symptoms, documentation, medication safety,
          and when to escalate care after injury or suspected medical harm.
        </p>
      </div>

      <div class="or-corps__grid">
        <NuxtLink
          v-for="story in stories"
          :key="story.title"
          :to="story.href"
          class="or-story"
        >
          <img :src="story.img" :alt="story.alt" width="360" height="250" loading="lazy" />
          <h3>{{ story.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stories = [
  {
    title: '5-Step Medical Action Guide after an injury',
    href: '/medical/what-to-do',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=520&q=85&fit=crop',
    alt: 'Clinician reviewing medical notes with a patient',
  },
  {
    title: 'Medication safety: what to monitor and when to call',
    href: '/practice-areas/dangerous-drugs',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=520&q=85&fit=crop',
    alt: 'Prescription medication bottles on a counter',
  },
  {
    title: 'Brain injury recovery: delayed symptoms to watch',
    href: '/practice-areas/brain-injury',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=520&q=85&fit=crop',
    alt: 'Neurological care illustration context',
  },
  {
    title: 'Meet the clinicians coordinating follow-up care',
    href: '/about/meet-our-doctors',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=520&q=85&fit=crop',
    alt: 'Clinic doctor portrait',
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
  font-size: clamp(2.2rem, 5vw, 3.5rem);
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

.or-story {
  color: inherit;
  text-decoration: none;
}

.or-story:hover h3 {
  text-decoration: underline;
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
