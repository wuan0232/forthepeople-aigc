<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner container">
      <a href="/" class="header__logo" aria-label="Home">
        <span class="logo-badge">
          <span class="logo-badge__title">MORGAN &amp; MORGAN</span>
          <span class="logo-badge__tag">AMERICA'S LARGEST INJURY LAW FIRM</span>
        </span>
      </a>

      <nav class="header__nav" aria-label="Primary">
        <NuxtLink to="/our-results">Our Results</NuxtLink>
        <NuxtLink to="/locations">Locations</NuxtLink>
        <div class="header__nav-item header__nav-item--mega">
          <a
            href="#practice"
            class="header__nav-trigger has-chevron"
            aria-haspopup="true"
            title="业务领域"
          >
            Practice Areas
          </a>
          <div class="practice-menu" aria-label="Practice areas">
            <ul class="practice-menu__list">
              <li
                v-for="item in practiceAreas"
                :key="item.label"
                class="practice-menu__item"
                :class="{ 'practice-menu__item--open': expandedItem === item.label }"
                @mouseenter="item.children && setExpanded(item.label)"
                @mouseleave="item.children && setExpanded(null)"
              >
                <button
                  v-if="item.children"
                  type="button"
                  class="practice-menu__link practice-menu__link--parent"
                  :aria-expanded="expandedItem === item.label"
                  @click="toggleExpanded(item.label)"
                >
                  <span class="practice-menu__label">{{ item.label }}</span>
                  <span class="practice-menu__chev practice-menu__chev--toggle" aria-hidden="true">
                    {{ expandedItem === item.label ? '⌃' : '›' }}
                  </span>
                </button>
                <NuxtLink
                  v-else-if="item.href && isInternalRoute(item.href)"
                  :to="item.href"
                  class="practice-menu__link"
                >
                  <span class="practice-menu__label">{{ item.label }}</span>
                  <span v-if="item.hasSub" class="practice-menu__chev" aria-hidden="true">›</span>
                </NuxtLink>
                <a v-else :href="item.href ?? '#practice'" class="practice-menu__link">
                  <span class="practice-menu__label">{{ item.label }}</span>
                  <span v-if="item.hasSub" class="practice-menu__chev" aria-hidden="true">›</span>
                </a>
                <ul
                  v-if="item.children && expandedItem === item.label"
                  class="practice-menu__sub"
                  :aria-label="`${item.label} subpages`"
                >
                  <li v-for="child in item.children" :key="child.label">
                    <NuxtLink
                      v-if="isInternalRoute(child.href)"
                      :to="child.href"
                      class="practice-menu__sublink"
                    >
                      {{ child.label }}
                    </NuxtLink>
                    <a v-else :href="child.href" class="practice-menu__sublink">{{ child.label }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <a href="#about" class="has-chevron">About</a>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>

      <div class="header__tools">
        <button type="button" class="lang" aria-label="Language">
          <span class="flag" aria-hidden="true" />
          <span>EN</span>
          <span class="chev" aria-hidden="true" />
        </button>
        <button type="button" class="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3-3" />
          </svg>
        </button>
        <a class="header__phone" href="tel:+18448278082">(844) 827-8082</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const route = useRoute()
/** Scroll position; only used on home to toggle transparent vs solid header. */
const scrollY = ref(0)

/**
 * Home hero is dark, so transparent header + white text works at the top.
 * Inner pages have light backgrounds — always use the solid (scrolled) header there.
 */
const isScrolled = computed(() => {
  const path = route.path
  if (path !== '/' && path !== '') {
    return true
  }
  return scrollY.value > 32
})

function onScroll() {
  scrollY.value = window.scrollY
}

watch(
  () => route.fullPath,
  () => {
    scrollY.value = typeof window !== 'undefined' ? window.scrollY : 0
  },
)

onMounted(() => {
  scrollY.value = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

type PracticeAreaChild = {
  label: string
  href: string
}

type PracticeAreaItem = {
  label: string
  href?: string
  hasSub?: boolean
  children?: PracticeAreaChild[]
}

const expandedItem = ref<string | null>(null)

function setExpanded(label: string | null) {
  expandedItem.value = label
}

function toggleExpanded(label: string) {
  expandedItem.value = expandedItem.value === label ? null : label
}

function isInternalRoute(href: string) {
  return href.startsWith('/')
}

/** Order matches design reference: scrollable full list with chevrons where nested menus apply. */
const practiceAreas: PracticeAreaItem[] = [
  { label: 'Car Accident', href: '/practice-areas/car-accident' },
  { label: 'Slip and Fall', href: '/practice-areas/slip-and-fall' },
  // { label: "Workers' Compensation", href: '#practice' },
  { label: 'Truck Accidents', href: '/practice-areas/truck-accident' },
  { label: 'Motorcycle Accidents', href: '/practice-areas/motorcycle-accident' },
  { label: 'Personal Injury', href: '/practice-areas/personal-injury' },
  // { label: 'General Liability', href: '#practice', hasSub: true },
  { label: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
  // { label: 'Workplace', href: '#practice', hasSub: true },
  { label: 'Americans with Disabilities Act', href: '#practice' },
  { label: 'Admiralty and Maritime Law', href: '#practice' },
  { label: 'Aviation Accident', href: '/practice-areas/aviation-accident' },
  { label: 'Birth Injury', href: '#practice' },
  { label: 'Boating Accident', href: '/practice-areas/boating-accident' },
  { label: 'Brain Injury', href: '/practice-areas/brain-injury' },
  { label: 'Burn Injury', href: '/practice-areas/burn-injury' },
  // { label: 'Business Litigation', href: '#practice', hasSub: true },
  // { label: 'Catastrophic Event', href: '#practice', hasSub: true },
  // { label: 'Child Sexual Abuse', href: '#practice' },
  // { label: 'Class Actions', href: '#practice' },
  {
    label: 'Dangerous Drugs',
    hasSub: true,
    children: [
      { label: 'Depo-Provera', href: '/practice-areas/dangerous-drugs/depo-provera' },
      { label: 'View All', href: '/practice-areas/dangerous-drugs' },
      { label: 'Weight Loss Drug', href: '/practice-areas/dangerous-drugs/weight-loss-drug' },
    ],
  },
  // { label: 'Data Privacy', href: '#practice', hasSub: true },
  // { label: 'Defective Products', href: '#practice', hasSub: true },
  // { label: 'Dram Shop Liability', href: '#practice' },
  // { label: 'Drowning', href: '#practice' },
  // { label: 'Elder Abuse', href: '#practice' },
  // { label: 'Insurance Disputes', href: '#practice', hasSub: true },
  // { label: 'Mass Arbitration', href: '#practice' },
  // { label: 'Mass Tort', href: '#practice', hasSub: true },
  { label: 'Mesothelioma', href: '/practice-areas/mesothelioma' },
  { label: 'Nursing Home Abuse', href: '#practice' },
  { label: 'Offshore Injury', href: '#practice' },
  { label: 'Spinal Cord Injury', href: '/practice-areas/spinal-cord-injury' },
  { label: 'Social Security Disability', href: '#practice' },
  { label: 'Toxics and Environmental', href: '#practice' },
  { label: 'Veteran Benefits Denied', href: '#practice' },
  { label: 'Whistleblower & Qui Tam', href: '#practice' },
  { label: 'Wildfires', href: '#practice' },
  { label: 'Wrongful Death', href: '#practice' },
  { label: 'View All', href: '/practice-areas' },
]
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 200;
  transition:
    background-color 0.25s ease,
    box-shadow 0.25s ease,
    color 0.2s ease;
  background: transparent;
  color: var(--white);
}

.header--scrolled {
  background: var(--white);
  color: var(--navy);
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 0;
  flex-wrap: wrap;
}

.logo-badge {
  display: inline-flex;
  flex-direction: column;
  background: #0f0f0f;
  color: var(--yellow);
  padding: 0.35rem 0.65rem;
  border-radius: 4px;
  line-height: 1.1;
  min-width: 9rem;
}

.logo-badge__title {
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.logo-badge__tag {
  font-size: 0.55rem;
  color: var(--white);
  font-weight: 600;
  letter-spacing: 0.06em;
  margin-top: 0.15rem;
}

.header__nav {
  display: none;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.header__nav a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.header__nav-item--mega {
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
}

.header__nav-item--mega:hover .practice-menu,
.header__nav-item--mega:focus-within .practice-menu,
.practice-menu:hover {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%);
}

.header__nav-trigger {
  display: inline-flex;
  align-items: center;
  height: 100%;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}

.practice-menu {
  position: absolute;
  left: 50%;
  top: 100%;
  /* Bridge gap so hover is not lost between trigger and panel */
  padding-top: 0.5rem;
  margin-top: -0.5rem;
  transform: translateX(-50%);
  min-width: 17.5rem;
  max-width: min(22rem, calc(100vw - 2rem));
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    visibility 0.18s;
  z-index: 220;
}

.practice-menu__list {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  color: #0f172a;
  border-radius: 4px;
  box-shadow:
    0 10px 40px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(15, 23, 42, 0.06);
  max-height: min(28rem, calc(100dvh - var(--header-offset, 5rem) - 2rem));
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.practice-menu__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.12s ease;
}

.header__nav .practice-menu__link:hover,
.header__nav .practice-menu__link:focus-visible {
  text-decoration: none;
}

.practice-menu__link:last-child {
  border-bottom: 0;
}

.practice-menu__link:hover,
.practice-menu__link:focus-visible,
.practice-menu__link.router-link-active {
  background: #f1f5f9;
  outline: none;
}

.practice-menu__link.router-link-active {
  color: var(--blue, #0066cc);
}

.practice-menu__label {
  flex: 1;
  text-align: left;
  line-height: 1.25;
}

.practice-menu__chev {
  flex-shrink: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.85;
}

.practice-menu__item--open > .practice-menu__link--parent {
  background: #f1f5f9;
}

.practice-menu__link--parent {
  width: 100%;
  border: 0;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.practice-menu__chev--toggle {
  font-size: 0.85rem;
}

.practice-menu__sub {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}

.practice-menu__sublink {
  display: block;
  padding: 0.7rem 1.1rem 0.7rem 1.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  text-decoration: none;
  border-top: 1px solid #e8edf2;
  transition:
    background-color 0.12s ease,
    color 0.12s ease;
}

.practice-menu__sublink:hover,
.practice-menu__sublink:focus-visible,
.practice-menu__sublink.router-link-active {
  background: #eef2f7;
  color: var(--blue, #0066cc);
  outline: none;
  text-decoration: none;
}

.practice-menu__list::-webkit-scrollbar {
  width: 8px;
}

.practice-menu__list::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}

.practice-menu__list::-webkit-scrollbar-track {
  background: #f8fafc;
}

.has-chevron::after {
  content: ' ›';
  opacity: 0.85;
}

.header__tools {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang {
  display: none;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  color: inherit;
}

.flag {
  width: 1.1rem;
  height: 0.75rem;
  border-radius: 2px;
  background: linear-gradient(180deg, #b22234 0 40%, #fff 40% 60%, #b22234 60% 100%);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.chev::before {
  content: '▾';
  font-size: 0.65rem;
  margin-left: 0.1rem;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.12);
}

.header--scrolled .icon-btn:hover {
  background: var(--gray-200);
}

.header__phone {
  font-weight: 800;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--yellow);
  white-space: nowrap;
}

.header--scrolled .header__phone {
  color: #c9a000;
}

@media (min-width: 960px) {
  .header__nav,
  .lang {
    display: flex;
  }
}
</style>
