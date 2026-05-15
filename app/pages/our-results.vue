<template>
  <main class="our-results-page">
    <OurResultsCaseGrid />
    <OurResultsExplore />
    <OurResultsCorporations />
    <OurResultsWaysHelp />
    <SiteLeadFeeSection />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Our Results | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Explore Morgan & Morgan case results, major verdicts, settlements, and the ways our attorneys fight for clients.',
    },
  ],
})
</script>

<style scoped>
.our-results-page {
  background: #fff;
}
</style>
