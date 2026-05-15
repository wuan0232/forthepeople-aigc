<template>
  <section class="ca-block ca-block--white" :aria-labelledby="headingId">
    <div class="container ca-claim-copy">
      <h2 :id="headingId" class="ca-h2">{{ title }}</h2>
      <p v-for="(para, i) in paragraphs" :key="i">{{ para }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  headingId: string
  title: string
  paragraphs: string[]
}>()
</script>
