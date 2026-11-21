<template>
  <div class="contact-page">
    <ContactHero />
    <ClinicOfficeMaps />
    <ContactWhy />
    <ContactInquiries />
    <SiteLeadFeeSection section-id="contact-fee" />
  </div>
</template>

<script setup lang="ts">
import ContactHero from './ContactHero.vue'
import ContactWhy from './ContactWhy.vue'
import ContactInquiries from './ContactInquiries.vue'

useHead({
  title: 'Contact Us | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Contact our Syracuse and Flushing offices at (929) 399-3134, or our Dallas office at (214) 884-6963.',
    },
  ],
})


</script>

<style src="~/assets/css/practice-area.css"></style>

<style scoped>
.contact-page {
  background: #fff;
}
</style>
