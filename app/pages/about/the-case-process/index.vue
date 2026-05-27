<template>
  <div class="tcp ca">
    <CaseProcessHero />
    <CaseProcessAfterInjury />
    <CaseProcessQualify />
    <CaseProcessAttorney101 />
    <CaseProcessWorking />
    <CaseProcessDocuments @learn-more="openLearnMore" />

    <div v-if="learnMoreVisible" id="learn-more" class="tcp-learn-anchor">
      <PracticeAreaLearnMore
        heading-id="tcp-learn-heading"
        title="Learn More"
        intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
        :left-links="tcpLearnLeft"
        :right-links="tcpLearnRight"
        :initial-count="5"
      />
    </div>

    <SiteLeadFeeSection />
  </div>
</template>

<script setup lang="ts">
import { nextTick, provide, ref } from 'vue'
import { TCP_OPEN_LEARN_MORE, tcpLearnLeft, tcpLearnRight } from '~/constants/the-case-process'

useHead({
  title: 'The Case Process | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Injured and not sure what to do next? Morgan & Morgan guides you through the case process—from first steps to working with an attorney.',
    },
  ],
})

const learnMoreVisible = ref(false)

async function openLearnMore() {
  learnMoreVisible.value = true
  await nextTick()
  document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

provide(TCP_OPEN_LEARN_MORE, openLearnMore)
</script>

<style src="~/assets/css/the-case-process.css"></style>
<style src="~/assets/css/practice-area.css"></style>
