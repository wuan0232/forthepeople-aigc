<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner container">
      <a href="#" class="header__logo" aria-label="Home">
        <span class="logo-badge">
          <span class="logo-badge__title">MORGAN &amp; MORGAN</span>
          <span class="logo-badge__tag">AMERICA'S LARGEST INJURY LAW FIRM</span>
        </span>
      </a>

      <nav class="header__nav" aria-label="Primary">
        <a href="#results">Our Results</a>
        <a href="#locations">Locations</a>
        <a href="#practice" class="has-chevron">Practice Areas</a>
        <a href="#about" class="has-chevron">About</a>
        <a href="#contact">Contact</a>
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
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 32
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
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
