<template>
  <section class="ca-block ca-block--white ca-faq" id="faq" aria-labelledby="faq-heading">
    <div class="container ca-faq__grid" :class="{ 'ca-faq__grid--46': layout === '46' }">
      <div class="ca-faq__aside">
        <h2 id="faq-heading" class="ca-h2">FAQ</h2>
        <p class="ca-faq__lead">
          <template v-for="(q, i) in asideQuestions" :key="i">
            <span>{{ q }}</span>
            <br v-if="layout !== '46' && i < asideQuestions.length - 1" />
          </template>
        </p>
      </div>
      <div class="ca-faq-acc-scroll" tabindex="0" role="region" :aria-label="regionLabel">
        <div v-for="(item, i) in items" :key="item.q" class="ca-faq-acc-item">
          <button
            type="button"
            class="ca-faq-acc-trigger"
            :class="{ 'ca-faq-acc-trigger--open': openIndex === i }"
            :aria-expanded="openIndex === i"
            :aria-controls="'faq-acc-panel-' + i"
            :id="'faq-acc-head-' + i"
            @click="toggle(i)"
          >
            <span class="ca-faq-acc-q">{{ item.q }}</span>
            <span class="ca-faq-acc-icon" aria-hidden="true">
              <span class="ca-faq-acc-icon__inner">{{ openIndex === i ? '−' : '+' }}</span>
            </span>
          </button>
          <div
            v-show="openIndex === i"
            :id="'faq-acc-panel-' + i"
            class="ca-faq-acc-panel"
            :aria-labelledby="'faq-acc-head-' + i"
          >
            <p v-for="(para, pi) in item.paragraphs" :key="pi">{{ para }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container ca-faq__foot">
      <p class="ca-faq__reviewed">
        Reviewed by
        <a :href="reviewedBy.href ?? '#'">{{ reviewedBy.name }}</a>, Trial Attorney at For The People Clinic, on
        {{ reviewedBy.date }}.
      </p>
      <p class="ca-faq__scroll-hint">
        Scroll down for more
        <span class="ca-faq__scroll-arrow" aria-hidden="true">↓</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PracticeAreaFaqProps } from '~/types/practice-area'

withDefaults(defineProps<PracticeAreaFaqProps>(), { layout: 'default' })

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
