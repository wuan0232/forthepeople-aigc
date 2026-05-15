<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Dangerous Drugs"
      title="Dangerous Drugs Lawyers"
      lead="When pharmaceutical companies put profits ahead of patient safety, our attorneys fight for families harmed by dangerous medications."
      :breadcrumb-items="breadcrumbItems"
    />

    <section class="ca-block">
      <div class="container dd-index">
        <h2 class="ca-h2 ca-center">Explore Dangerous Drug Cases</h2>
        <ul class="dd-index__list">
          <li v-for="link in drugLinks" :key="link.href">
            <NuxtLink :to="link.href" class="dd-index__card">
              <h3>{{ link.title }}</h3>
              <p>{{ link.text }}</p>
              <span class="link-arrow">
                Learn more
                <span class="icon-box" aria-hidden="true">
                  <svg viewBox="0 0 12 12" width="8" height="8">
                    <path d="M2 10L10 2M10 2H4M10 2V8" />
                  </svg>
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <SiteLeadFeeSection preset-case-type="Dangerous Drugs" />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { PracticeAreaBreadcrumbItem } from '~/types/practice-area'

useHead({
  title: 'Dangerous Drugs Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Explore dangerous drug litigation including Depo-Provera and weight loss drug claims. Free case evaluation.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Dangerous Drugs', strong: true },
]

const drugLinks = [
  {
    title: 'Depo-Provera',
    href: '/practice-areas/dangerous-drugs/depo-provera',
    text: 'Popular birth control linked to meningioma and other serious brain tumor risks.',
  },
  {
    title: 'Weight Loss Drug',
    href: '/practice-areas/dangerous-drugs/weight-loss-drug',
    text: 'Investigations into mainstream weight loss medications and potentially dangerous side effects.',
  },
]
</script>

<style scoped>
.dd-index {
  padding-bottom: 1rem;
}

.dd-index__list {
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 720px) {
  .dd-index__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.dd-index__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  background: #eef6fc;
  color: inherit;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    box-shadow 0.15s ease;
}

.dd-index__card:hover {
  background: #e3f0fa;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
  text-decoration: none;
}

.dd-index__card h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--navy, #0a1f44);
}

.dd-index__card p {
  margin: 0;
  flex: 1;
  line-height: 1.55;
  color: #334155;
}
</style>
