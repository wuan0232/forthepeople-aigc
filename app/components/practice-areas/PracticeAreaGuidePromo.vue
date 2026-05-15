<template>
  <section class="ca-block ca-block--soft ca-guide-promo" :aria-labelledby="headingId">
    <div class="container ca-guide-promo__grid">
      <div class="ca-guide-promo__icon" aria-hidden="true" v-html="icon" />
      <div class="ca-guide-promo__copy">
        <h2 :id="headingId" class="ca-h2">{{ title }}</h2>
        <p>{{ description }}</p>
        <a :href="linkHref" class="link-arrow">
          {{ linkLabel }}
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 10L10 2M10 2H4M10 2V8" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    headingId?: string
    title: string
    description: string
    linkLabel?: string
    linkHref?: string
    icon?: string
  }>(),
  {
    headingId: 'guide-heading',
    linkLabel: 'See guide',
    linkHref: '#guide',
    icon: `<svg viewBox="0 0 80 80" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="10" width="44" height="56" rx="4"/><path d="M28 24h24M28 34h18M28 44h22"/><circle cx="52" cy="58" r="10" fill="#ffde00" stroke="none"/><path d="M52 54v8M48 58h8" stroke="#0a1f44" stroke-width="2"/></svg>`,
  },
)
</script>
