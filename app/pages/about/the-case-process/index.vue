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
        intro="Injured and not sure what to do next? Explore patient recovery guides, clinic resources, and practical medical checklists."
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
  title: 'Recovery Process | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Injured and not sure what to do next? For The People Clinic guides you through medical recovery—from urgent warning signs to clinic follow-up and rehab planning.',
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
