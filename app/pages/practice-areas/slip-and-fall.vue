<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      :breadcrumb-label="data.hero.breadcrumbLabel"
      :title="data.hero.title"
      :lead="data.hero.lead"
    />

    <PracticeAreaTakeaways title="Clinical Priorities After a Fall" :blocks="data.priorities" />

    <PracticeAreaClaimCopy
      heading-id="fall-red-flags-heading"
      title="Urgent warning signs — seek emergency care"
      :paragraphs="redFlagParagraphs"
    />

    <PracticeAreaWaysHelp title="Common Fall Injury Patterns" :items="data.injuryPatterns" />

    <PracticeAreaDifference
      variant="band"
      heading-id="fall-48h-heading"
      title="First 48 Hours: Medical Action Checklist"
      :blocks="data.checklist48h"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="fall-7d-heading"
      title="First 7 Days: Follow-up Checklist"
      :blocks="data.checklist7day"
    />

    <PracticeAreaDifference
      variant="band"
      heading-id="fall-rights-heading"
      title="Light Rights Basics (Education Only)"
      :blocks="LIGHT_RIGHTS_BLOCKS"
    />

    <PracticeAreaMeetClinicians
      title="Meet Our Clinicians"
      intro="Our clinicians support fall-injury reassessment, mobility planning, and safer return-to-activity decisions."
      :clinicians="clinicians"
      aria-label="Clinic clinicians for slip-and-fall recovery"
    />

    <PracticeAreaGuidePromo
      heading-id="fall-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="A practical patient pathway for documenting symptoms, requesting records, and deciding when to escalate care."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <SiteLeadFeeSection preset-case-type="Slip and Fall" />

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
      region-label="Slip and fall patient FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import { CLINIC_DOCTORS } from '~/constants/clinic'
import { fallRecovery, CLINIC_CTA_LEARN, LIGHT_RIGHTS_BLOCKS } from '~/constants/injury-recovery'

const data = fallRecovery

useHead({
  title: data.seo.title,
  meta: [{ name: 'description', content: data.seo.description }],
})

const redFlagParagraphs = [
  'Seek emergency care right away if any of these occur after a fall:',
  ...data.redFlags.map((item) => `• ${item}`),
]

const clinicians = CLINIC_DOCTORS.map((d) => ({
  name: d.name,
  specialty: d.specialty,
  bio: d.bio,
  img: d.img,
}))
</script>
