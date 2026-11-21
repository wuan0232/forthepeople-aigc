<template>
  <ClinicContactCard class="contact-lead-card" :dark="variant === 'dark'" />
</template>
<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'light' | 'dark'; title?: string; subtitle?: string; titleId?: string; presetCaseType?: string }>(), { variant: 'light' })
</script>

<style scoped>
.contact-lead-card {
  min-width: 0;
}
</style>
