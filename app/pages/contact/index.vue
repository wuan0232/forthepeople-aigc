<template>
  <div class="contact-page">
    <ContactHero />
    <ContactWhy />
    <PracticeAreaTestimonials :clients="clients" />
    <ContactInquiries />
    <SiteLeadFeeSection section-id="contact-fee" />
  </div>
</template>

<script setup lang="ts">
import ContactHero from './ContactHero.vue'
import ContactWhy from './ContactWhy.vue'
import ContactInquiries from './ContactInquiries.vue'
import type { ClientTestimonial } from '~/types/practice-area'

useHead({
  title: 'Contact Us | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Contact Morgan & Morgan 24/7 for a free case evaluation. Offices nationwide, no fee unless we win.',
    },
  ],
})

const clients: ClientTestimonial[] = [
  {
    name: 'Lashondra',
    quote:
      "When it came to negotiating, they didn't just settle for anything. They definitely went to the bat for me.",
    thumbBg: 'linear-gradient(135deg,#b8d4f0,#7eb3e8)',
    thumb: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&fit=crop',
  },
  {
    name: 'Ray',
    quote:
      "They took care of me, and now we're doing okay. Thank God that I went to Morgan & Morgan.",
    thumbBg: 'linear-gradient(135deg,#cfe8fc,#8ec5f2)',
    thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&fit=crop',
  },
  {
    name: 'Sean',
    quote: 'The company handled absolutely everything from start to finish.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop',
  },
]
</script>

<style src="~/assets/css/practice-area.css"></style>

<style scoped>
.contact-page {
  background: #fff;
}
</style>
