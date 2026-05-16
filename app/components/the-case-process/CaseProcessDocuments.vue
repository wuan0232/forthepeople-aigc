<template>
  <section class="tcp-docs" aria-labelledby="tcp-docs-heading">
    <div class="container">
      <article class="tcp-docs__card">
        <div class="tcp-docs__art" v-html="tcpNotepadArt" aria-hidden="true" />
        <div class="tcp-docs__copy">
          <h2 id="tcp-docs-heading">Documents 101: A Checklist</h2>
          <p>
            Piles of paperwork can get messy. If you're wondering how to approach the forms, receipts,
            bills, and more related to your injury, look no further.
          </p>
          <button type="button" class="tcp-docs__more" @click="onLearnMore">
            Learn More
            <span class="tcp-docs__more-icon" aria-hidden="true">→</span>
          </button>
        </div>
      </article>

      <div class="tcp-glossary">
        <aside class="tcp-glossary__aside">
          <h2 class="ca-h2">Glossary</h2>
          <p>
            From defense to depositions, view the complete guide for helpful explanations of common
            legal terms.
          </p>
        </aside>
        <div>
          <div class="tcp-glossary__grid">
            <article v-for="term in tcpGlossaryTerms" :key="term.title" class="tcp-glossary__term">
              <span class="tcp-glossary__icon" aria-hidden="true">{{ term.icon }}</span>
              <h3>{{ term.title }}</h3>
              <p>{{ term.text }}</p>
            </article>
          </div>
          <p class="tcp-glossary__foot">
            <a href="#learn-more" class="tcp-glossary__all" @click.prevent="onLearnMore">
              Read all glossary terms
              <span class="tcp-docs__more-icon" aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { tcpGlossaryTerms, tcpNotepadArt } from '~/constants/the-case-process'

const emit = defineEmits<{
  'learn-more': []
}>()

const openLearnMore = useTcpLearnMore()

function onLearnMore() {
  emit('learn-more')
  openLearnMore?.()
}
</script>
