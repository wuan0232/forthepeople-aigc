<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Weight Loss Drug"
      title="Weight Loss Drug Lawyers"
      lead="If you took a weight loss medication and suffered serious side effects, our attorneys can help you understand your legal options at no upfront cost."
      :breadcrumb-items="breadcrumbItems"
    />

    <PracticeAreaDifference
      heading-id="wld-diff-heading"
      title="Morgan & Morgan's Weight Loss Drug Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <SiteLeadFeeSection preset-case-type="Weight Loss Drug" />

    <PracticeAreaLearnMore
      title="Learn More"
      intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
      :left-links="learnLeft"
      :right-links="learnRight"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { LearnLink, PracticeAreaBreadcrumbItem, TextBlock } from '~/types/practice-area'

useHead({
  title: 'Weight Loss Drug Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Learn your legal options after serious side effects from weight loss medications. Free case evaluation.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Dangerous Drugs', to: '/practice-areas/dangerous-drugs' },
  { label: 'Weight Loss Drug', strong: true },
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Hold Drug Companies Accountable',
    text: 'When manufacturers rush products to market without adequate warnings, patients can suffer life-altering harm. We fight to hold them responsible.',
  },
  {
    title: 'Covering Serious Side Effect Claims',
    text: 'From gastrointestinal injuries to cardiovascular complications, we represent individuals harmed by widely prescribed weight loss drugs.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With billions recovered and more than 1,000 attorneys nationwide, Morgan & Morgan has the resources to take on major pharmaceutical companies.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'The Fee Is Free® means you pay nothing unless we win. Start with a free, confidential case review.',
  },
]

const learnLeft: LearnLink[] = [{ title: 'Weight Loss Drug Lawsuit Updates', href: '#blog' }]

const learnRight: LearnLink[] = [
  { title: 'Dangerous Drug Litigation Overview', href: '/practice-areas/dangerous-drugs' },
]
</script>
