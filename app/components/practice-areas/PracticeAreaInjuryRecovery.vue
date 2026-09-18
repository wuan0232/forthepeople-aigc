<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      :breadcrumb-label="data.hero.breadcrumbLabel"
      :title="data.hero.title"
      :lead="data.hero.lead"
    />

    <PracticeAreaTakeaways :title="data.prioritiesTitle" :blocks="data.priorities" />

    <PracticeAreaClaimCopy
      :heading-id="`${slug}-red-flags-heading`"
      title="Urgent warning signs — seek emergency care"
      :paragraphs="redFlagParagraphs"
    />

    <PracticeAreaWaysHelp :title="data.patternsTitle" :items="data.injuryPatterns" />

    <PracticeAreaDifference
      variant="band"
      :heading-id="`${slug}-48h-heading`"
      title="First 48 Hours: Medical Action Checklist"
      :blocks="data.checklist48h"
    />

    <PracticeAreaDifference
      variant="white"
      :heading-id="`${slug}-7d-heading`"
      title="First 7 Days: Follow-up Checklist"
      :blocks="data.checklist7day"
    />

    <PracticeAreaDifference
      variant="band"
      :heading-id="`${slug}-rights-heading`"
      title="Light Rights Basics (Education Only)"
      :blocks="LIGHT_RIGHTS_BLOCKS"
    />

    <PracticeAreaMeetClinicians
      title="Meet Our Clinicians"
      :intro="data.cliniciansIntro"
      :clinicians="clinicians"
      :aria-label="`Clinic clinicians — ${data.hero.breadcrumbLabel}`"
    />

    <PracticeAreaGuidePromo
      :heading-id="`${slug}-guide-heading`"
      title="Use the 5-Step Medical Action Guide"
      :description="data.guideDescription"
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <SiteLeadFeeSection :preset-case-type="data.presetCaseType" />

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
      :region-label="data.faqRegion"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import { CLINIC_DOCTORS } from '~/constants/clinic'
import { CLINIC_CTA_LEARN, LIGHT_RIGHTS_BLOCKS } from '~/constants/injury-recovery'
import type { InjuryRecoveryPage } from '~/constants/injury-recovery/phase-b'

const props = defineProps<{
  data: InjuryRecoveryPage
  slug: string
}>()

useHead({
  title: props.data.seo.title,
  meta: [{ name: 'description', content: props.data.seo.description }],
})

const redFlagParagraphs = [
  props.data.redFlagsIntro,
  ...props.data.redFlags.map((item) => `• ${item}`),
]

const clinicians = CLINIC_DOCTORS.map((d) => ({
  name: d.name,
  specialty: d.specialty,
  bio: d.bio,
  img: d.img,
}))
</script>
