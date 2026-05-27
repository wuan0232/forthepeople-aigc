<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Workers' Compensation"
      title="Workers' Compensation Lawyers"
      lead="We guide workers through the claims process to secure the benefits they deserve for workplace injuries."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Workers' Compensation Attorneys"
      intro="Workplace injuries can disrupt your health, income, and future. Our workers' compensation attorneys help you navigate claims, disputes, and appeals so you can focus on recovery."
      :lawyers="lawyers"
      aria-label="Workers compensation attorneys"
    />

    <SiteLeadFeeSection preset-case-type="Workers' Compensation" />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
useHead({
  title: "Workers' Compensation Lawyers | Morgan & Morgan",
  meta: [
    {
      name: 'description',
      content:
        "Meet our workers' compensation attorneys and learn how we help injured workers pursue workplace injury benefits. Free case evaluation.",
    },
  ],
})

const lawyers = [
  { name: 'John Morgan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Matt Morgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Tatevik "Vicki" Gasparyan', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Michael Bird', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Sarah Mitchell', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop' },
]
</script>
