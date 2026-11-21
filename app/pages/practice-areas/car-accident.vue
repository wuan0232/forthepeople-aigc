<template>
  <PracticeAreaPage class="car-care">
    <PracticeAreaHero :breadcrumb-label="data.hero.breadcrumbLabel" :title="data.hero.title" :lead="data.hero.lead"
      :breadcrumb-items="[{ label: 'Home', to: '/' }, { label: 'Injury Recovery Guides', to: '/injury-recovery-guides' }, { label: 'Car Accident', strong: true }]" />
    <div class="car-care__actions"><div class="container">
      <a href="#contact" class="car-care__button">Contact the Clinic</a>
      <a href="#car-prepare-heading" class="car-care__text-link">Prepare for Your Visit</a>
    </div></div>

    <section class="car-care__urgent" aria-labelledby="car-urgent-heading"><div class="container">
      <h2 id="car-urgent-heading">When to Seek Emergency Care</h2>
      <p>After a head injury, a worsening headache, repeated vomiting, seizures, new weakness, slurred speech, confusion, or difficulty waking can be emergency warning signs. Call 911 or go to an emergency department right away. Do not wait for a clinic appointment.</p>
      <p class="car-care__source">These are examples, not a complete emergency checklist. Follow any return precautions you were given. <a href="https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html" target="_blank" rel="noopener noreferrer">CDC: head injury warning signs</a></p>
    </div></section>

    <PracticeAreaWaysHelp title="What to Discuss With Your Doctor" :items="data.concerns" />
    <PracticeAreaDifference variant="band" heading-id="car-prepare-heading" title="Prepare for Your Medical Visit" :blocks="data.preparation" />
    <PracticeAreaDifference variant="white" heading-id="car-visit-heading" title="During Your Appointment" :blocks="data.visit" />
    <PracticeAreaDifference variant="band" heading-id="car-followup-heading" title="Plan Your Follow-Up" :blocks="data.followUp" />

    <PracticeAreaMeetClinicians title="Meet Our Spine & Neurosurgical Specialist"
      intro="Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Explore his background, then contact the office to ask whether his specialty is a fit for your concerns after an accident."
      :clinicians="clinicians" />

    <PracticeAreaFaq layout="46" :aside-questions="data.faqAside" :items="data.faqItems" region-label="Car accident visit questions" />
    <SiteLeadFeeSection />
    <PracticeAreaLearnMore title="More Help Preparing for Care"
      intro="Explore our doctor?s background, browse patient articles, or find office details."
      :left-links="[{ title: 'Meet Our Doctor', href: '/about/meet-our-doctors' }, { title: 'Injury & Recovery Articles', href: '/blog' }]"
      :right-links="[{ title: 'Office Locations & Contact Details', href: '/contact' }, { title: 'All Recovery Guides', href: '/injury-recovery-guides' }]" />
  </PracticeAreaPage>
</template>
<script setup lang="ts">
import { CLINIC_DOCTORS } from '~/constants/clinic'
import { carRecovery } from '~/constants/injury-recovery'
const data = carRecovery
useHead({ title: data.seo.title, meta: [{ name: 'description', content: data.seo.description }] })
const clinicians = CLINIC_DOCTORS.map(d => ({ name: d.name, specialty: d.specialty, bio: d.homeBio ?? d.bio, img: d.img ?? '' }))
</script>
<style scoped>
.car-care { --mm-red: #0066cc; --red: #0066cc; }
.car-care__actions { background: #fff; padding: 0 0 2rem; }
.car-care__actions .container { display: flex; align-items: center; flex-wrap: wrap; gap: 1.25rem; }
.car-care__button { display: inline-flex; padding: .85rem 1.4rem; background: #0066cc; color: white; font-weight: 700; text-decoration: none; border-radius: 4px; }
.car-care__button:hover { background: #004f9f; }
.car-care__text-link, .car-care__source a { color: #0066cc; text-underline-offset: 3px; }
.car-care__urgent { background: #f0f7ff; padding: 1.75rem 0; border-block: 1px solid #d8e7f7; }
.car-care__urgent h2 { font-size: 1.25rem; margin: 0 0 .75rem; }
.car-care__urgent p { max-width: 65rem; line-height: 1.7; margin: .5rem 0; }
.car-care__source { font-size: .875rem; color: #52647a; }
.car-care :deep([id]) { scroll-margin-top: 7rem; }
.car-care :deep(.clinician-link__eyebrow) { color: #0066cc; }
.car-care :deep(.ca-way-card__icon) { display: none; }
.car-care :deep(.ca-faq__scroll-hint) { display: none; }
</style>
