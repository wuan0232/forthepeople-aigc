<template>
  <NuxtPage v-if="route.params.slug" />
  <PracticeAreaVisitGuide v-else :data="remainingGuides['medical-malpractice']!" />
</template>
<script setup lang="ts">
import { remainingGuides } from '~/constants/injury-recovery/remaining-guides'
const route = useRoute()
</script>
