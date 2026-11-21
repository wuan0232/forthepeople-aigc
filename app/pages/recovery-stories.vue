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
  title: 'Recovery Examples | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Illustrative recovery scenarios and educational resources for medical follow-up after injury. These examples are not verified patient testimonials.',
    },
  ],
})
</script>

<style scoped>
.recovery-stories-page {
  background: #fff;
}
</style>
