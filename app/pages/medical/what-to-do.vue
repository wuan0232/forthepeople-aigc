<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      :breadcrumb-items="breadcrumbItems"
      :breadcrumb-label="PATIENT_GUIDE_HERO.breadcrumbLabel"
      :title="PATIENT_GUIDE_HERO.title"
      :lead="PATIENT_GUIDE_HERO.lead"
    />

    <section
      v-for="(step, index) in PATIENT_GUIDE_STEPS"
      :key="step.title"
      class="ca-block"
      :class="index % 2 === 0 ? 'ca-block--white' : 'ca-block--soft'"
      :aria-labelledby="`guide-step-${index}`"
    >
      <div class="container medical-guide-step">
        <h2 :id="`guide-step-${index}`" class="ca-h2">{{ step.title }}</h2>
        <p v-for="(para, pi) in step.paragraphs" :key="pi" class="medical-guide-step__para">
          {{ para }}
        </p>
        <h3 class="medical-guide-step__check-heading">Action Checklist</h3>
        <ul class="medical-guide-step__checklist">
          <li v-for="item in step.checklist" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <PracticeAreaDifference
      heading-id="guide-rights-heading"
      :title="MEDICAL_RIGHTS_BASICS.title"
      :blocks="[...MEDICAL_RIGHTS_BASICS.blocks]"
    />

    <section class="ca-block ca-block--white medical-guide-disclaimer" aria-label="Disclaimer">
      <div class="container">
        <p>{{ PATIENT_GUIDE_DISCLAIMER }}</p>
        <NuxtLink to="/practice-areas/medical-malpractice" class="link-arrow">
          Back to Medical Malpractice Overview
        </NuxtLink>
      </div>
    </section>
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import {
  MEDICAL_RIGHTS_BASICS,
  PATIENT_GUIDE_DISCLAIMER,
  PATIENT_GUIDE_HERO,
  PATIENT_GUIDE_SEO,
  PATIENT_GUIDE_STEPS,
} from '~/constants/medical'

useHead({
  title: PATIENT_GUIDE_SEO.title,
  meta: [{ name: 'description', content: PATIENT_GUIDE_SEO.description }],
})

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Medical Malpractice', to: '/practice-areas/medical-malpractice' },
  { label: PATIENT_GUIDE_HERO.breadcrumbLabel, strong: true },
]
</script>

<style scoped>
.medical-guide-step__para {
  margin: 0 0 1rem;
  max-width: 48rem;
  line-height: 1.65;
}

.medical-guide-step__check-heading {
  margin: 1.5rem 0 0.75rem;
  font-size: 1.125rem;
}

.medical-guide-step__checklist {
  margin: 0;
  padding-left: 1.25rem;
  max-width: 48rem;
  line-height: 1.7;
}

.medical-guide-step__checklist li {
  margin-bottom: 0.5rem;
}

.medical-guide-disclaimer p {
  margin: 0 0 1rem;
  max-width: 48rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
