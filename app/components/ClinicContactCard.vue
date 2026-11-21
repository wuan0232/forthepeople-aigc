<template>
  <aside class="clinic-contact" :class="{ 'clinic-contact--dark': dark }" :aria-labelledby="headingId">
    <h2 :id="headingId">Ready to Schedule a Visit?</h2>
    <p>Choose an office and call to ask about appointments.</p>
    <label :for="selectId">Choose Your Office</label>
    <select :id="selectId" v-model="selectedId">
      <option v-for="office in SITE_OFFICES" :key="office.id" :value="office.id">{{ office.name }}</option>
    </select>
    <div class="clinic-contact__details" aria-live="polite" aria-atomic="true">
      <h3>{{ selected.name }}</h3>
      <address><span v-for="line in selected.addressLines" :key="line">{{ line }}</span></address>
      <p class="clinic-contact__number">{{ selected.phoneDisplay }}</p>
    </div>
    <a class="clinic-contact__call" :href="`tel:${selected.phoneTel}`">Call {{ selected.name }}</a>
    <a class="clinic-contact__map" :href="selected.mapsUrl" target="_blank" rel="noopener noreferrer">View Map &amp; Directions <span aria-hidden="true">&#8599;</span></a>
    <p class="clinic-contact__note">Please call to confirm appointment availability and office hours.</p>
  </aside>
</template>
<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { SITE_OFFICES } from '~/constants/offices'
defineProps<{ dark?: boolean }>()
const id = useId()
const headingId = `clinic-contact-heading-${id}`
const selectId = `clinic-contact-office-${id}`
const selectedId = ref('syracuse')
const selected = computed(() => SITE_OFFICES.find(office => office.id === selectedId.value) ?? SITE_OFFICES[0]!)
</script>
<style scoped>
.clinic-contact { padding: 1.5rem 1.25rem; border: 1px solid #d1d9e2; border-radius: 8px; background: #fff; color: #1f2933; }
.clinic-contact--dark { background: rgba(10,31,68,.55); border-color: rgba(147,197,253,.45); color: #fff; }
.clinic-contact h2 { margin: 0 0 .75rem; font-size: 1.35rem; font-weight: 800; line-height: 1.25; }
.clinic-contact p { line-height: 1.5; }
.clinic-contact label { display: block; font-weight: 700; margin: 1.25rem 0 .5rem; }
.clinic-contact select { width: 100%; padding: .75rem; border: 1px solid #cbd5e1; border-radius: 6px; background: #fff; color: #1f2933; font: inherit; }
.clinic-contact__details { margin: 1.25rem 0; }
.clinic-contact h3 { font-size: 1.05rem; margin: 0 0 .5rem; }
.clinic-contact address { font-style: normal; line-height: 1.6; }
.clinic-contact address span { display: block; }
.clinic-contact__number { font-size: 1.15rem; font-weight: 700; margin: .75rem 0 0; }
.clinic-contact__call { display: block; text-align: center; padding: 1rem .75rem; border-radius: 8px; background: var(--yellow, #ffde00); color: #111; font-weight: 900; text-decoration: none; }
.clinic-contact__map { display: block; text-align: center; color: var(--blue, #0066cc); margin: 1rem 0; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
.clinic-contact--dark .clinic-contact__map { color: #b9dcff; }
.clinic-contact__note { font-size: .8rem; margin-bottom: 0; }
.clinic-contact a:focus-visible, .clinic-contact select:focus-visible { outline: 3px solid #4b9de8; outline-offset: 3px; }
</style>
