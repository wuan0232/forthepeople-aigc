<template>
  <Teleport to="body">
    <Transition name="site-search">
      <div v-if="props.modelValue" class="site-search" role="dialog" aria-modal="true" aria-labelledby="site-search-title" @click.self="close">
        <section class="site-search__panel">
          <form class="site-search__form" role="search" @submit.prevent="submit">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
            <input ref="input" v-model="query" type="search" placeholder="Search recovery guides, articles, and clinic information" aria-label="Search the site" />
            <button type="button" class="site-search__close" aria-label="Close search" @click="close">×</button>
          </form>
          <div class="site-search__body">
            <p id="site-search-title" class="site-search__eyebrow">POPULAR TOPICS</p>
            <div class="site-search__topics">
              <button v-for="topic in POPULAR_SEARCH_TOPICS" :key="topic.query" type="button" @click="searchTopic(topic.query)">
                {{ topic.label }}
              </button>
            </div>
            <p class="site-search__hint">Search covers recovery guides, clinic pages, and educational blog articles.</p>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { POPULAR_SEARCH_TOPICS } from '~/constants/search'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const router = useRouter()
const query = ref('')
const input = ref<HTMLInputElement | null>(null)

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      await nextTick()
      input.value?.focus()
    }
  },
)

function close() {
  emit('update:modelValue', false)
}

function goToResults(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return
  close()
  router.push({ path: '/search', query: { q: trimmed } })
}

function submit() {
  goToResults(query.value)
}

function searchTopic(value: string) {
  query.value = value
  goToResults(value)
}
</script>

<style scoped>
.site-search {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: start center;
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  background: rgb(4 18 39 / 0.55);
}

.site-search__panel {
  width: min(46rem, 100%);
  overflow: hidden;
  background: #fff;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 1.5rem 4rem rgb(15 23 42 / 0.28);
}

.site-search__form {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.9rem;
  align-items: center;
  padding: 1.1rem 1.5rem;
  color: #55708d;
  border-bottom: 1px solid #dbe4ee;
}

.site-search__form input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  color: #0a1f44;
  font: inherit;
  font-size: 1rem;
}

.site-search__form input::placeholder {
  color: #6b7280;
}

.site-search__close {
  display: grid;
  width: 2rem;
  height: 2rem;
  padding: 0;
  place-items: center;
  border: 0;
  background: transparent;
  color: #718096;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
}

.site-search__body {
  padding: 1.6rem;
}

.site-search__eyebrow {
  margin: 0 0 1rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #0057a8;
}

.site-search__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.site-search__topics button {
  padding: 0.65rem 1rem;
  border: 0;
  border-radius: 999px;
  background: #eef2f6;
  color: #4b5563;
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;
}

.site-search__topics button:hover,
.site-search__topics button:focus-visible {
  background: #dcecff;
  color: #0a1f44;
  outline: 2px solid #0057a8;
  outline-offset: 2px;
}

.site-search__hint {
  margin: 1.35rem 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: #64748b;
}

.site-search-enter-active,
.site-search-leave-active {
  transition: opacity 0.2s ease;
}

.site-search-enter-active .site-search__panel,
.site-search-leave-active .site-search__panel {
  transition: transform 0.2s ease;
}

.site-search-enter-from,
.site-search-leave-to {
  opacity: 0;
}

.site-search-enter-from .site-search__panel,
.site-search-leave-to .site-search__panel {
  transform: translateY(-1rem);
}
</style>
