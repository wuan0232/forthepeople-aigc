<template><PracticeAreaVisitGuide v-if="guide" :key="String(route.params.slug)" :data="guide" /></template>
<script setup lang="ts">
import { medicalFollowupGuides } from '~/constants/injury-recovery/medical-followup-guides'
const route = useRoute()
const guide = computed(() => medicalFollowupGuides[String(route.params.slug)] )
if (!guide.value) throw createError({ statusCode: 404, statusMessage: 'Guide not found' })
watch(guide, value => { if (!value) showError({ statusCode: 404, statusMessage: 'Guide not found' }) })
</script>
