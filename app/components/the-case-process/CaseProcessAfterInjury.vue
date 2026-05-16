<template>
  <section class="tcp-section" aria-labelledby="tcp-after-heading">
    <div class="container">
      <header class="tcp-section__head">
        <h2 id="tcp-after-heading" class="ca-h2">After an Injury</h2>
        <p>
          I've been hurt. Now what? Facing an injury can be overwhelming. Here are the basics.
        </p>
      </header>
      <div class="tcp-cards">
        <a
          v-for="card in tcpAfterInjuryCards"
          :key="card.title"
          href="#learn-more"
          class="tcp-card"
          @click.prevent="onTopicClick"
        >
          <div class="tcp-card__art" v-html="card.art" />
          <h3 class="tcp-card__title">{{ card.title }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { tcpAfterInjuryCards } from '~/constants/the-case-process'

const openLearnMore = useTcpLearnMore()

function onTopicClick() {
  openLearnMore?.()
}
</script>
