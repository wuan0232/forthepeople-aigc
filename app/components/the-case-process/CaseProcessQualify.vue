<template>
  <section class="tcp-section tcp-qualify" aria-labelledby="tcp-qualify-heading">
    <div class="container">
      <header class="tcp-qualify__intro">
        <h2 id="tcp-qualify-heading" class="ca-h2">Do I have a case?</h2>
        <p>
          Here's what we look for to see if an incident might qualify for a personal injury claim.
        </p>
      </header>

      <div class="tcp-qualify__body">
        <div class="tcp-qualify__visual" v-html="tcpFlashlightArt" aria-hidden="true" />

        <div class="tcp-qualify__acc-wrap">
          <div class="tcp-qualify__rail" aria-hidden="true" />
          <div
            class="tcp-qualify__acc"
            role="region"
            aria-label="Case qualification criteria"
            tabindex="0"
          >
            <div v-for="(item, i) in tcpQualifyCriteria" :key="item.q" class="tcp-acc-item">
              <button
                type="button"
                class="tcp-acc-trigger"
                :aria-expanded="isOpen(i)"
                :aria-controls="'tcp-acc-panel-' + i"
                :id="'tcp-acc-head-' + i"
                @click="toggle(i)"
              >
                <span>{{ item.q }}</span>
                <span class="tcp-acc-chev" :class="{ 'tcp-acc-chev--open': isOpen(i) }" aria-hidden="true">^</span>
              </button>
              <div
                v-show="isOpen(i)"
                :id="'tcp-acc-panel-' + i"
                class="tcp-acc-panel"
                :aria-labelledby="'tcp-acc-head-' + i"
              >
                <p v-for="(para, pi) in item.paragraphs" :key="pi">{{ para }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tcpFlashlightArt, tcpQualifyCriteria } from '~/constants/the-case-process'

/** First two panels open by default to match design. */
const openIndices = ref<Set<number>>(new Set([0, 1]))

function isOpen(i: number) {
  return openIndices.value.has(i)
}

function toggle(i: number) {
  const next = new Set(openIndices.value)
  if (next.has(i)) next.delete(i)
  else next.add(i)
  openIndices.value = next
}
</script>
