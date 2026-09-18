<template>
  <section class="clinician-link" :aria-labelledby="headingId">
    <div class="container clinician-link__inner">
      <div class="clinician-link__copy">
        <p class="clinician-link__eyebrow">SPECIALIST PERSPECTIVE</p>
        <h2 :id="headingId">{{ title }}</h2>
        <p>{{ intro }}</p>
        <NuxtLink to="/about/meet-our-doctors" class="clinician-link__action">
          Meet Dr. Y. Michael Li
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>

      <NuxtLink
        v-if="clinicians[0]"
        to="/about/meet-our-doctors"
        class="clinician-link__profile"
        :aria-label="`Read ${clinicians[0].name} profile`"
      >
        <img
          :src="clinicians[0].img"
          :alt="clinicians[0].name"
          width="144"
          height="144"
          loading="lazy"
          draggable="false"
        />
        <span>
          <strong>{{ clinicians[0].name }}</strong>
          <small v-if="clinicians[0].specialty">{{ clinicians[0].specialty }}</small>
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PracticeAreaMeetCliniciansProps } from '~/types/practice-area'

withDefaults(defineProps<PracticeAreaMeetCliniciansProps>(), {
  headingId: 'meet-clinicians-heading',
  centered: false,
  disclaimer:
    'Clinician profiles are for educational clinic introduction. Care plans always depend on your individual medical evaluation.',
})
</script>

<style scoped>
.clinician-link {
  padding: clamp(2.5rem, 5vw, 4rem) 0;
  background: #f3f7fb;
}

.clinician-link__inner {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 760px) {
  .clinician-link__inner {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3rem;
  }
}

.clinician-link__copy {
  max-width: 43rem;
}

.clinician-link__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  color: var(--mm-red, #c41230);
}

.clinician-link h2 {
  margin: 0 0 0.65rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--navy, #0a1f44);
}

.clinician-link__copy > p:not(.clinician-link__eyebrow) {
  margin: 0 0 1.1rem;
  line-height: 1.6;
  color: #475569;
}

.clinician-link__action {
  display: inline-flex;
  gap: 0.55rem;
  align-items: center;
  color: var(--blue, #1f6dde);
  font-weight: 800;
  text-decoration: none;
}

.clinician-link__action:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.clinician-link__profile {
  display: grid;
  grid-template-columns: 10.5rem minmax(0, 1fr);
  gap: 1.5rem;
  align-items: center;
  width: min(100%, 35rem);
  padding: 1.25rem;
  background: #fff;
  color: inherit;
  text-decoration: none;
  border: 1px solid #dbe4ee;
  box-shadow: 0 0.75rem 2rem rgb(15 23 42 / 0.08);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.clinician-link__profile:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2.5rem rgb(15 23 42 / 0.12);
}

.clinician-link__profile img {
  display: block;
  width: 10.5rem;
  height: 10.5rem;
  object-fit: cover;
}

.clinician-link__profile strong,
.clinician-link__profile small {
  display: block;
}

.clinician-link__profile strong {
  font-size: 1.15rem;
  line-height: 1.35;
  color: var(--navy, #0a1f44);
}

.clinician-link__profile small {
  margin-top: 0.45rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--mm-red, #c41230);
}
</style>
