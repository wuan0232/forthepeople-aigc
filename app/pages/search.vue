<template>
  <main class="search-page">
    <div class="container search-page__inner">
      <SiteBreadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Search', strong: true }]" />
      <header class="search-page__head">
        <p>CLINIC RESOURCE SEARCH</p>
        <h1>Find recovery guidance and articles</h1>
      </header>

      <form class="search-page__form" role="search" @submit.prevent="applySearch">
        <input v-model="draftQuery" type="search" aria-label="Search the site" placeholder="Try “car accident”, “spine”, or “medication safety”" />
        <button type="submit">Search</button>
        <NuxtLink v-if="query" to="/search" class="search-page__clear">Clear</NuxtLink>
      </form>

      <section v-if="query" class="search-page__results" aria-live="polite">
        <p class="search-page__count">{{ results.length }} result{{ results.length === 1 ? '' : 's' }} for “{{ query }}”</p>
        <div v-if="results.length" class="search-page__list">
          <NuxtLink v-for="result in results" :key="result.href" :to="result.href" class="search-result">
            <span class="search-result__type">{{ result.type }}</span>
            <h2>{{ result.title }}</h2>
            <p>{{ result.summary }}</p>
            <span class="search-result__more">Open resource →</span>
          </NuxtLink>
        </div>
        <div v-else class="search-page__empty">
          <h2>No exact resource match yet</h2>
          <p>Try a broader injury, symptom, medication, or care-topic term.</p>
        </div>
      </section>

      <section v-else class="search-page__popular" aria-labelledby="popular-heading">
        <h2 id="popular-heading">Popular topics</h2>
        <div>
          <NuxtLink v-for="topic in POPULAR_SEARCH_TOPICS" :key="topic.query" :to="{ path: '/search', query: { q: topic.query } }">
            {{ topic.label }}
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { POPULAR_SEARCH_TOPICS, searchSite } from '~/constants/search'

const route = useRoute()
const router = useRouter()
const query = computed(() => String(route.query.q ?? '').trim())
const draftQuery = ref(query.value)
const results = computed(() => searchSite(query.value))

watch(query, (value) => {
  draftQuery.value = value
})

function applySearch() {
  const value = draftQuery.value.trim()
  router.push(value ? { path: '/search', query: { q: value } } : '/search')
}

useHead({
  title: 'Search Recovery Guidance | For The People Clinic',
  meta: [{ name: 'description', content: 'Search recovery guides, clinic resources, and educational articles.' }],
})
</script>

<style scoped>
.search-page {
  min-height: 100vh;
  padding: calc(var(--header-offset, 5rem) + 2rem) 0 5rem;
  background: #fff;
}

.search-page__inner {
  width: min(960px, calc(100% - 2rem));
  margin-inline: auto;
}

.search-page__head {
  margin: 2rem 0 1.5rem;
}

.search-page__head > p,
.search-result__type {
  margin: 0 0 0.45rem;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--mm-red, #c41230);
}

.search-page__head h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.03em;
  color: var(--navy, #0a1f44);
}

.search-page__form {
  display: flex;
  gap: 0;
  align-items: stretch;
  border: 1px solid #cbd5e1;
}

.search-page__form input {
  flex: 1;
  min-width: 0;
  padding: 1rem;
  border: 0;
  color: #0f172a;
  font: inherit;
  outline-color: var(--blue, #1f6dde);
}

.search-page__form button {
  padding: 0.85rem 1.35rem;
  border: 0;
  background: var(--navy, #0a1f44);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.search-page__clear {
  display: grid;
  padding: 0 1rem;
  place-items: center;
  color: #334155;
  font-weight: 700;
  text-decoration: none;
}

.search-page__results {
  margin-top: 2.5rem;
}

.search-page__count {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #94a3b8;
  color: #475569;
}

.search-page__list {
  display: grid;
}

.search-result {
  display: block;
  padding: 1.75rem 0;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #dbe4ee;
}

.search-result:hover h2,
.search-result:focus-visible h2 {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.search-result__type {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  background: #eff6ff;
  color: #0057a8;
}

.search-result h2 {
  margin: 0.7rem 0 0.45rem;
  font-size: 1.25rem;
  color: var(--navy, #0a1f44);
}

.search-result p,
.search-page__empty p {
  max-width: 44rem;
  margin: 0;
  color: #475569;
  line-height: 1.55;
}

.search-result__more {
  display: inline-block;
  margin-top: 0.8rem;
  color: var(--blue, #1f6dde);
  font-weight: 700;
}

.search-page__empty,
.search-page__popular {
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: #f1f5f9;
}

.search-page__empty h2,
.search-page__popular h2 {
  margin: 0 0 0.6rem;
  color: var(--navy, #0a1f44);
}

.search-page__popular > div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.search-page__popular a {
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: #fff;
  color: #334155;
  text-decoration: none;
}
</style>
