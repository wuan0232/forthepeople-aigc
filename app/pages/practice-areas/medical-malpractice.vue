<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      :breadcrumb-label="MEDICAL_HUB_HERO.breadcrumbLabel"
      :title="MEDICAL_HUB_HERO.title"
      :lead="MEDICAL_HUB_HERO.lead"
    />

    <PracticeAreaDifference
      :heading-id="MEDICAL_HUB_DIFFERENCE.headingId"
      :title="MEDICAL_HUB_DIFFERENCE.title"
      :blocks="[...MEDICAL_HUB_DIFFERENCE.blocks]"
    />

    <PracticeAreaWaysHelp title="Common Medical Malpractice Categories" :items="categoryCards" />

    <PracticeAreaClaimCopy
      :heading-id="MEDICAL_HUB_CLAIM.headingId"
      :title="MEDICAL_HUB_CLAIM.title"
      :paragraphs="[...MEDICAL_HUB_CLAIM.paragraphs]"
    />

    <PracticeAreaLawsuit
      :title="MEDICAL_HUB_LAWSUIT.title"
      :requirements="[...MEDICAL_HUB_LAWSUIT.requirements]"
    />

    <PracticeAreaGuidePromo
      :heading-id="MEDICAL_HUB_GUIDE_PROMO.headingId"
      :title="MEDICAL_HUB_GUIDE_PROMO.title"
      :description="MEDICAL_HUB_GUIDE_PROMO.description"
      :link-label="MEDICAL_HUB_GUIDE_PROMO.linkLabel"
      :link-href="MEDICAL_HUB_GUIDE_PROMO.linkHref"
    />

    <PracticeAreaDifference
      heading-id="patient-rights-heading"
      :title="MEDICAL_RIGHTS_BASICS.title"
      :blocks="[...MEDICAL_RIGHTS_BASICS.blocks]"
    />

    <PracticeAreaLearnMore
      :title="MEDICAL_HUB_LEARN_MORE.title"
      :intro="MEDICAL_HUB_LEARN_MORE.intro"
      :left-links="[...MEDICAL_HUB_LEARN_MORE.leftLinks]"
      :right-links="[...MEDICAL_HUB_LEARN_MORE.rightLinks]"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="[...MEDICAL_FAQ_ASIDE]"
      :items="MEDICAL_FAQ_ITEMS"
      region-label="Medical malpractice frequently asked questions"
      :reviewed-by="{ name: MEDICAL_HUB_FAQ_REVIEWED_BY.name, date: MEDICAL_HUB_FAQ_REVIEWED_BY.date }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import {
  MEDICAL_CATEGORIES,
  MEDICAL_FAQ_ASIDE,
  MEDICAL_FAQ_ITEMS,
  MEDICAL_HUB_CLAIM,
  MEDICAL_HUB_DIFFERENCE,
  MEDICAL_HUB_FAQ_REVIEWED_BY,
  MEDICAL_HUB_GUIDE_PROMO,
  MEDICAL_HUB_HERO,
  MEDICAL_HUB_LAWSUIT,
  MEDICAL_HUB_LEARN_MORE,
  MEDICAL_HUB_SEO,
  MEDICAL_RIGHTS_BASICS,
} from '~/constants/medical'

useHead({
  title: MEDICAL_HUB_SEO.title,
  meta: [
    {
      name: 'description',
      content: MEDICAL_HUB_SEO.description,
    },
  ],
})

const categoryCards = MEDICAL_CATEGORIES.map(({ title, text, icon, href }) => ({
  title,
  text,
  icon,
  href,
}))
</script>
