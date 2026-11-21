<template>
  <section id="contact" class="office-maps section-pad" aria-labelledby="office-maps-heading">
    <div class="office-maps__inner">
      <header class="office-maps__header">
        <h2 id="office-maps-heading">Contact Your Preferred Office</h2>
        <p>Choose the office that works for you. Call to ask about a visit, fees, and what to bring.</p>
      </header>
      <div class="office-maps__grid">
        <article v-for="office in SITE_OFFICES" :key="office.id" class="office-maps__card">
          <div class="office-maps__details">
            <h3>{{ office.name }}</h3>
            <address>
              <span v-for="line in office.addressLines" :key="line">{{ line }}</span>
            </address>
            <p class="office-maps__note">Call to confirm your appointment and office hours.</p>
            <a class="office-maps__phone" :href="`tel:${office.phoneTel}`">{{ office.phoneDisplay }}</a>
          </div>
          <div class="office-maps__map">
            <iframe
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(office.addressLines.join(', '))}&output=embed`"
              :title="`${office.name} location on Google Maps`"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            />
            <a :href="office.mapsUrl" target="_blank" rel="noopener noreferrer" class="office-maps__open">
              Open in Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE_OFFICES } from '~/constants/offices'
</script>

<style scoped>
.office-maps { background: #f3f8fc; color: var(--navy, #0a1f44); }
.office-maps__inner { width: min(1120px, calc(100% - 2rem)); margin-inline: auto; }
.office-maps__header { margin-bottom: 2rem; }
.office-maps__header h2 { margin: 0 0 .75rem; font-size: clamp(1.75rem, 4vw, 2.35rem); font-weight: 800; letter-spacing: -.02em; }
.office-maps__header p { margin: 0; color: #475569; line-height: 1.6; }
.office-maps__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.office-maps__card { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 1.5rem; padding: 1.75rem; border: 1px solid #d6e5f5; border-radius: 0; background: #fff; }
.office-maps__details { min-width: 0; align-self: center; }
.office-maps__details h3 { margin: 0 0 1.5rem; font-size: clamp(1.3rem, 2.2vw, 1.9rem); line-height: 1.2; font-weight: 800; letter-spacing: -.02em; }
.office-maps__details address { font-style: normal; line-height: 1.75; }
.office-maps__details address span { display: block; }
.office-maps__note { margin: 1.25rem 0; color: #475569; line-height: 1.65; }
.office-maps__phone { color: var(--blue, #0066cc); font-weight: 700; white-space: nowrap; }
.office-maps__map { position: relative; min-width: 0; height: 340px; overflow: hidden; border: 1px solid #d6e5f5; border-radius: 0; background: #eef4f8; }
.office-maps__map iframe { display: block; width: 100%; height: 100%; border: 0; border-radius: 0; }
.office-maps__open { position: absolute; top: .65rem; left: .65rem; display: inline-flex; gap: .4rem; align-items: center; padding: .65rem .8rem; border: 1px solid #e2e8f0; border-radius: 0; background: #fff; color: var(--blue, #0066cc); font-size: .85rem; font-weight: 700; box-shadow: 0 2px 4px #0a1f4414; }
.office-maps a:hover { text-decoration: underline; }
.office-maps a:focus-visible { outline: 3px solid var(--blue, #0066cc); outline-offset: 3px; }
@media (max-width: 1100px) { .office-maps__grid { grid-template-columns: 1fr; } }
@media (max-width: 540px) {
  .office-maps__card { grid-template-columns: 1fr; padding: 1.25rem; }
  .office-maps__map { height: 300px; }
}
</style>
