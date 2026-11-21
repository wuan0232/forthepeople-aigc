<template>
  <AboutPageShell title="Legal Resources" description="Our clinic focuses on medical care. For questions about legal representation, contact an independent licensed attorney of your choice.">
    <p>These external resources can help you find information about legal services in the states where our offices are located.</p>
    <ul>
      <li><a href="https://nysba.org/" target="_blank" rel="noopener noreferrer">New York State Bar Association</a></li>
      <li><a href="https://www.texasbar.com/" target="_blank" rel="noopener noreferrer">State Bar of Texas</a></li>
    </ul>
    <p><NuxtLink to="/contact">Contact the clinic about medical care</NuxtLink></p>
  </AboutPageShell>
</template>

<script setup lang="ts">
useHead({ title: 'Legal Resources | For The People Clinic' })
</script>
