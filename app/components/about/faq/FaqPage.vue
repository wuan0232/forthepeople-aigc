<template>
  <div class="afaq afaq-page">
    <div class="container afaq__layout">
      <aside class="afaq__aside" aria-labelledby="afaq-page-title">
        <h1 id="afaq-page-title" class="afaq__title">
          <span>HOW CAN</span>
          <span>WE HELP</span>
          <span>YOU?</span>
        </h1>
        <FaqSectionNav
          :sections="sections"
          :active-id="activeId"
          @select="scrollToSection"
        />
      </aside>

      <div class="afaq__main">
        <section
          v-for="section in sections"
          :key="section.id"
          :ref="(el) => setSectionRef(section.id, el as Element | null)"
          class="afaq-panel"
          :data-section-id="section.id"
          :aria-labelledby="`afaq-panel-${section.id}`"
        >
          <div class="afaq-panel__card">
            <h2 :id="`afaq-panel-${section.id}`" class="afaq-panel__title">
              {{ section.panelTitle }}
            </h2>
            <FaqAccordionList
              :section-id="section.id"
              :items="section.items"
              :open-key="openKey"
              @toggle="onAccordionToggle(section.id, $event)"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ABOUT_FAQ_SECTIONS } from '~/constants/about-faq'
import { useAboutFaqSectionNav } from '~/composables/useAboutFaqSectionNav'
import FaqAccordionList from '~/components/about/faq/FaqAccordionList.vue'
import FaqSectionNav from '~/components/about/faq/FaqSectionNav.vue'

const sections = ABOUT_FAQ_SECTIONS
const sectionIds = sections.map((s) => s.id)

const { activeId, setSectionRef, scrollToSection } = useAboutFaqSectionNav(sectionIds)

const openKey = ref<string | null>(null)

function onAccordionToggle(sectionId: string, index: number) {
  const key = `${sectionId}:${index}`
  openKey.value = openKey.value === key ? null : key
}
</script>
