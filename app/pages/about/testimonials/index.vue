<template>
  <AboutPageShell title="Patient Resources" description="Explore medical guidance, learn about our doctor, and find contact details for your preferred office.">
    <ul>
      <li><NuxtLink to="/injury-recovery-guides">Injury recovery guides</NuxtLink></li>
      <li><NuxtLink to="/about/meet-our-doctors">Meet our doctor</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact the clinic</NuxtLink></li>
    </ul>
  </AboutPageShell>
</template>
<script setup lang="ts">
useHead({ title: 'Patient Resources | For The People Clinic', meta: [{ name: 'description', content: 'Find injury recovery guides, doctor information, and clinic contact details.' }] })
</script>
