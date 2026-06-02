<template>
  <section class="ca-block ca-block--soft" :aria-labelledby="headingId">
    <div class="container">
      <div class="ca-lawsuit-head">
        <h2 :id="headingId" class="ca-h2">{{ title }}</h2>
        <a :href="linkHref" class="link-arrow">
          {{ linkLabel }}
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 10L10 2M10 2H4M10 2V8" />
            </svg>
          </span>
        </a>
      </div>
      <div class="ca-lawsuit-cards">
        <div v-for="r in requirements" :key="r" class="ca-lawsuit-card">
          <span class="ca-check" aria-hidden="true">✓</span>
          <p>{{ r }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    headingId?: string
    title: string
    requirements: string[]
    linkLabel?: string
    /** 页内表单锚点，默认滚动到底部 THE FEE IS FREE 表单区 */
    linkHref?: string
  }>(),
  { headingId: 'lawsuit-heading', linkLabel: 'Learn more', linkHref: '#contact' },
)
</script>
