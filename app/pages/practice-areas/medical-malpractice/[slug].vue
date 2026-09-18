<template>
  <PracticeAreaPage v-if="detail">
    <PracticeAreaHero
      :breadcrumb-items="breadcrumbItems"
      :breadcrumb-label="detail.title"
      :title="detail.title"
      :lead="detail.heroLead"
    />

    <section class="ca-block ca-block--white" aria-labelledby="scenarios-heading">
      <div class="container">
        <h2 id="scenarios-heading" class="ca-h2">Common Scenarios</h2>
        <div class="ca-ways-grid">
          <article v-for="s in detail.scenarios" :key="s.title" class="ca-way-card">
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <PracticeAreaClaimCopy
      heading-id="recognition-heading"
      :title="detail.recognition.title"
      :paragraphs="detail.recognition.paragraphs"
    />

    <section class="ca-block ca-block--soft" aria-labelledby="action-heading">
      <div class="container medical-category-action">
        <h2 id="action-heading" class="ca-h2">Recommended Actions</h2>
        <p>{{ detail.actionSummary }}</p>
        <NuxtLink to="/medical/what-to-do" class="link-arrow">
          View the Full 5-Step Action Guide
        </NuxtLink>
      </div>
    </section>

    <PracticeAreaLearnMore
      title="Related Reading"
      intro="These articles provide additional patient-focused medical context for this topic."
      :left-links="detail.relatedReading"
      :right-links="[]"
    />

    <section class="ca-block ca-block--white medical-category-back">
      <div class="container">
        <NuxtLink to="/practice-areas/medical-malpractice" class="link-arrow">
          Back to Medical Malpractice Overview
        </NuxtLink>
      </div>
    </section>
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import { getMedicalCategoryDetail } from '~/constants/medical'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const detail = computed(() => getMedicalCategoryDetail(slug.value))

if (!detail.value) {
  throw createError({ statusCode: 404, statusMessage: 'Medical category not found' })
}

useHead({
  title: () => `${detail.value!.title} | Medical Malpractice Guide`,
  meta: [
    {
      name: 'description',
      content: detail.value!.heroLead,
    },
  ],
})

const breadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Medical Malpractice', to: '/practice-areas/medical-malpractice' },
  { label: detail.value!.title, strong: true },
])
</script>

<style scoped>
.medical-category-action p {
  margin: 0 0 1.25rem;
  max-width: 48rem;
  line-height: 1.65;
}

.medical-category-back {
  padding-top: 0;
}
</style>
