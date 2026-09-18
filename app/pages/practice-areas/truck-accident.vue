<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      :breadcrumb-label="data.hero.breadcrumbLabel"
      :title="data.hero.title"
      :lead="data.hero.lead"
    />

    <PracticeAreaTakeaways title="Clinical Priorities After a Truck Crash" :blocks="data.priorities" />

    <PracticeAreaClaimCopy
      heading-id="truck-red-flags-heading"
      title="Urgent warning signs — seek emergency care"
      :paragraphs="redFlagParagraphs"
    />

    <PracticeAreaWaysHelp title="Common High-Energy Injury Patterns" :items="data.injuryPatterns" />

    <PracticeAreaDifference
      variant="band"
      heading-id="truck-48h-heading"
      title="First 48 Hours: Medical Action Checklist"
      :blocks="data.checklist48h"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="truck-7d-heading"
      title="First 7 Days: Follow-up Checklist"
      :blocks="data.checklist7day"
    />

    <PracticeAreaDifference
      variant="band"
      heading-id="truck-rights-heading"
      title="Light Rights Basics (Education Only)"
      :blocks="LIGHT_RIGHTS_BLOCKS"
    />

    <PracticeAreaMeetClinicians
      title="Meet Our Clinicians"
      intro="Our clinic helps coordinate post-trauma follow-up after high-energy crashes, including multi-specialty sequencing."
      :clinicians="clinicians"
      aria-label="Clinic clinicians for truck crash recovery"
    />

    <PracticeAreaGuidePromo
      heading-id="truck-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="Organize urgent monitoring, records, and escalation decisions after complex trauma with a clear patient checklist."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <SiteLeadFeeSection preset-case-type="Truck Accident" />

    <PracticeAreaLearnMore
      title="Related Patient Resources"
      intro="Continue with medical action planning, related injury guides, and clinic contact options."
      :left-links="CLINIC_CTA_LEARN.left"
      :right-links="CLINIC_CTA_LEARN.right"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="data.faqAside"
      :items="data.faqItems"
      region-label="Truck crash patient FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import { CLINIC_DOCTORS } from '~/constants/clinic'
import { truckRecovery, CLINIC_CTA_LEARN, LIGHT_RIGHTS_BLOCKS } from '~/constants/injury-recovery'

const data = truckRecovery

useHead({
  title: data.seo.title,
  meta: [{ name: 'description', content: data.seo.description }],
})

const redFlagParagraphs = [
  'Seek emergency care right away if any of these occur after a truck crash:',
  ...data.redFlags.map((item) => `• ${item}`),
]

const clinicians = CLINIC_DOCTORS.map((d) => ({
  name: d.name,
  specialty: d.specialty,
  bio: d.bio,
  img: d.img,
}))
</script>
