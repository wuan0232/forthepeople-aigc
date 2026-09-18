<template>
  <main class="recovery-stories-page">
    <OurResultsCaseGrid />
    <OurResultsExplore />
    <OurResultsCorporations />
    <OurResultsWaysHelp />
    <SiteLeadFeeSection />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Recovery Stories | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused recovery stories from For The People Clinic: post-injury follow-up, symptom monitoring, rehab pathways, and practical medical next steps.',
    },
  ],
})
</script>

<style scoped>
.recovery-stories-page {
  background: #fff;
}
</style>
