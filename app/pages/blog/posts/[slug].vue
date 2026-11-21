<template><BlogLocalArticle v-if="isLocal" :key="String(route.params.slug)" /><BlogRemoteArticle v-else :key="String(route.params.slug)" /></template>
<script setup lang="ts">
import { blogMedicalArticles } from '~/constants/blog'
const route = useRoute()
const isLocal = computed(() => blogMedicalArticles.some(article => article.slug === route.params.slug))
</script>
