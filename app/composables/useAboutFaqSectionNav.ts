import { onMounted, onUnmounted, ref } from 'vue'

const HEADER_OFFSET_PX = 96

export function useAboutFaqSectionNav(sectionIds: string[]) {
  const activeId = ref(sectionIds[0] ?? '')
  const sectionEls: Record<string, HTMLElement> = {}
  let observer: IntersectionObserver | null = null
  let scrollLockUntil = 0

  function setSectionRef(id: string, el: Element | null) {
    if (!el || !(el instanceof HTMLElement)) {
      delete sectionEls[id]
      return
    }
    sectionEls[id] = el
    observer?.observe(el)
  }

  function scrollToSection(id: string) {
    const el = sectionEls[id]
    if (!el || import.meta.server) return

    activeId.value = id
    scrollLockUntil = Date.now() + 700

    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }

  onMounted(() => {
    if (import.meta.server) return

    observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < scrollLockUntil) return

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        const topmost = visible[0]?.target as HTMLElement | undefined
        const id = topmost?.dataset.sectionId
        if (id && sectionIds.includes(id)) {
          activeId.value = id
        }
      },
      {
        root: null,
        rootMargin: `-${HEADER_OFFSET_PX + 24}px 0px -45% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    for (const id of sectionIds) {
      const el = sectionEls[id]
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { activeId, setSectionRef, scrollToSection }
}
