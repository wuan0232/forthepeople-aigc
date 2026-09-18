<template>
  <section class="ca-block ca-block--white ca-testimonials-wrap" aria-labelledby="their-words-heading">
    <div class="container">
      <header class="ca-tw-head">
        <h2 id="their-words-heading" class="ca-h2 ca-center">In Their Words</h2>
        <p class="ca-tw-sub">Real clients share their experience.</p>
      </header>

      <div class="ca-tw-viewport">
        <div class="ca-tw-track" :style="{ transform: `translateX(-${activeClient * 100}%)` }">
          <article v-for="c in clients" :key="c.name" class="ca-tw-slide">
            <div class="ca-tw-slide__text">
              <span class="ca-quote-mark" aria-hidden="true">"</span>
              <p class="ca-tw-quote">{{ c.quote }}</p>
              <div class="ca-tw-meta">
                <span class="ca-tw-name">{{ c.name }}</span>
                <div class="ca-stars" aria-label="5 out of 5 stars">
                  <span v-for="s in 5" :key="s" class="ca-star" aria-hidden="true">★</span>
                </div>
              </div>
            </div>
            <div class="ca-tw-slide__media">
              <div class="ca-tw-video" :style="{ background: c.thumbBg }">
                <img v-if="c.thumb" :src="c.thumb" :alt="`${c.name} video`" class="ca-tw-video__img" loading="lazy" />
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="ca-tw-thumbs" role="tablist" aria-label="Choose client story">
        <button
          v-for="(c, i) in clients"
          :key="'thumb-' + c.name"
          type="button"
          role="tab"
          :aria-selected="i === activeClient"
          :class="['ca-tw-thumb', { 'ca-tw-thumb--on': i === activeClient }]"
          @click="selectClient(i)"
          @keydown.enter.prevent="selectClient(i)"
          @keydown.space.prevent="selectClient(i)"
        >
          <span class="ca-tw-thumb__img" :style="{ background: c.thumbBg }">
            <img v-if="c.thumb" :src="c.thumb" :alt="''" width="72" height="72" loading="lazy" />
          </span>
          <span class="ca-tw-thumb__label">{{ c.name }}</span>
        </button>
      </div>

      <p class="ca-disclaimer ca-disclaimer--right">{{ disclaimer }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ClientTestimonial } from '~/types/practice-area'

const props = withDefaults(
  defineProps<{
    clients: ClientTestimonial[]
    disclaimer?: string
  }>(),
  {
    disclaimer:
      'Individual experiences vary. Based on select patient reviews.',
  },
)

const activeClient = ref(0)

function selectClient(index: number) {
  if (index < 0 || index >= props.clients.length) return
  activeClient.value = index
}
</script>
