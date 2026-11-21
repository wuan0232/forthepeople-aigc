<template>
  <section class="ca-block ca-block--white ca-faq" id="faq" aria-labelledby="faq-heading">
    <div class="container ca-faq__grid" :class="{ 'ca-faq__grid--46': false }">
      <div class="ca-faq__aside">
        <h2 id="faq-heading" class="ca-h2">Planning Your Visit</h2>
        <p class="ca-faq__lead">
          <template v-for="(q, i) in asideQuestions" :key="i">
            <span>{{ q }}</span>
            <br v-if="i < asideQuestions.length - 1" />
          </template>
        </p>
      </div>
      <div class="ca-faq-acc-scroll" tabindex="0" role="region" :aria-label="regionLabel">
        <div v-for="(item, i) in items" :key="item.q" class="ca-faq-acc-item">
          <button
            type="button"
            class="ca-faq-acc-trigger"
            :class="{ 'ca-faq-acc-trigger--open': openIndex === i }"
            :aria-expanded="openIndex === i"
            :aria-controls="'faq-acc-panel-' + i"
            :id="'faq-acc-head-' + i"
            @click="toggle(i)"
          >
            <span class="ca-faq-acc-q">{{ item.q }}</span>
            <span class="ca-faq-acc-icon" aria-hidden="true">
              <span class="ca-faq-acc-icon__inner">{{ openIndex === i ? '−' : '+' }}</span>
            </span>
          </button>
          <div
            v-show="openIndex === i"
            :id="'faq-acc-panel-' + i"
            class="ca-faq-acc-panel"
            :aria-labelledby="'faq-acc-head-' + i"
          >
            <p v-for="(para, pi) in item.paragraphs" :key="pi">{{ para }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container ca-faq__foot">
      <p class="ca-faq__scroll-hint">
        Scroll down for more
        <span class="ca-faq__scroll-arrow" aria-hidden="true">↓</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const openIndex = ref<number | null>(null)
const toggle = (index: number) => { openIndex.value = openIndex.value === index ? null : index }
const regionLabel = 'Questions about clinic visits'
const asideQuestions = ['Appointments, preparation, and payment questions.']
const items = [
  { q: 'Can I call before I have all my records?', paragraphs: ['Yes. Call to ask what the office needs before scheduling or reviewing your concern. Tell the team about any care you have already received.'] },
  { q: 'How do I request an appointment?', paragraphs: ['Call your preferred office using the contact details below. Ask about available appointments and confirm your visit with the office before traveling.'] },
  { q: 'Can I book a visit on this website?', paragraphs: ['Please call your preferred office to arrange a visit. The contact card displays its phone number and directions; it does not submit an appointment request.'] },
  { q: 'What should I bring?', paragraphs: ['Ask the office which records and imaging are needed. Prepare your questions, a current medication list, and information about previous care. Confirm any identification and payment documents required.'] },
  { q: 'What if I already had an examination or imaging?', paragraphs: ['Tell the office about your previous care when you call. Ask how to provide existing reports and images for review; the doctor can discuss whether any additional evaluation is appropriate.'] },
  { q: 'How do I check fees and insurance?', paragraphs: ['Contact your preferred office before your visit to ask about fees, accepted coverage, referrals, and any prior authorization requirements. Confirm coverage and benefits with your insurer as well.'] },
  { q: 'Are the same services available at every office?', paragraphs: ['Ask the office to confirm the services and appointment options available for your concern. Do not assume a particular doctor, procedure, or appointment time is available at every location.'] },
]
</script>
<style src="~/assets/css/practice-area.css"></style>
