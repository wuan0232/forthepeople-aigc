<template>
  <li
    class="about-menu__item"
    :class="{ 'about-menu__item--open': open }"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="about-menu__link about-menu__link--parent"
      :aria-expanded="open"
      aria-haspopup="true"
      @click="open = !open"
    >
      <span class="about-menu__label">Careers</span>
      <span class="about-menu__chev" aria-hidden="true">›</span>
    </button>
    <ul v-show="open" class="about-menu__sub" aria-label="Careers submenu">
      <li v-for="child in children" :key="child.to">
        <NuxtLink :to="child.to" class="about-menu__sublink" @click="open = false">{{ child.label }}</NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const children = [
  { label: 'Open Positions', to: '/about/careers' },
  { label: 'Attorney Careers', to: '/about/careers/attorneys' },
  { label: 'Staff & Operations', to: '/about/careers/staff' },
  { label: 'Law Students', to: '/about/careers/law-students' },
] as const
</script>
