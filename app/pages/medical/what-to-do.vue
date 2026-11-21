<template><PracticeAreaVisitGuide :data="guide" /></template>
<script setup lang="ts">
import { remainingGuides } from '~/constants/injury-recovery/remaining-guides'
const base = remainingGuides['personal-injury']!
const guide = { ...base,
  hero: { breadcrumbLabel: 'Medical Visit Preparation', title: 'Prepare for Your Next Medical Visit', lead: 'Bring your questions, existing records, and practical needs together before you contact the office. This is a general preparation guide, not a personalized medical plan.' },
  seo: { title: 'Medical Visit Preparation | For The People Clinic', description: 'Prepare questions, records, and appointment details for a medical visit. Contact your preferred office to confirm suitability and availability.' },
  related: [{ title: 'Choose an Injury Recovery Guide', href: '/injury-recovery-guides' }, { title: 'Questions About Your Medical Care', href: '/practice-areas/medical-malpractice' }],
}
</script>
