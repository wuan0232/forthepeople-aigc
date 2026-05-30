import { nextTick, onMounted, onUnmounted, ref, watch, type MaybeRefOrGetter, toValue } from 'vue'

export type HorizontalStripMode = 'proportional' | 'paged' | 'cards'

/**
 * Drag-scroll + dot sync for lawyer strips (proportional) or full-width slides (paged).
 */
export function useHorizontalStrip(options: {
  mode: HorizontalStripMode
  count: MaybeRefOrGetter<number>
  draggingClass: string
}) {
  const stripRef = ref<HTMLElement | null>(null)
  const activeIndex = ref(0)
  let dragging = false
  let startX = 0
  let startScroll = 0
  let pointerId: number | null = null

  function cardChildren(el: HTMLElement) {
    return Array.from(el.children).filter((node): node is HTMLElement => node instanceof HTMLElement)
  }

  /** Scroll offset of a strip child (works for slotted flex cards). */
  function cardLeft(el: HTMLElement, child: HTMLElement) {
    if (child.parentElement === el) return child.offsetLeft
    const elRect = el.getBoundingClientRect()
    const childRect = child.getBoundingClientRect()
    return childRect.left - elRect.left + el.scrollLeft
  }

  /** 按横向滚动进度映射圆点（多卡同屏时比单卡 offset 对齐更准） */
  function cardIndexFromScroll(el: HTMLElement, childCount: number) {
    if (childCount <= 1) return 0

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    if (maxScroll <= 4) return 0
    if (el.scrollLeft >= maxScroll - 4) return childCount - 1

    const t = el.scrollLeft / maxScroll
    return Math.min(childCount - 1, Math.max(0, Math.round(t * (childCount - 1))))
  }

  function syncIndex() {
    const el = stripRef.value
    const n = toValue(options.count)
    if (!el || n <= 0) return

    if (options.mode === 'cards') {
      const children = cardChildren(el)
      if (!children.length) return
      activeIndex.value = cardIndexFromScroll(el, children.length)
      return
    }

    if (options.mode === 'paged') {
      const w = el.clientWidth
      if (w <= 0) return
      const i = Math.round(el.scrollLeft / w)
      activeIndex.value = Math.min(n - 1, Math.max(0, i))
      return
    }

    const max = el.scrollWidth - el.clientWidth
    if (max <= 4) {
      activeIndex.value = 0
      return
    }
    const t = el.scrollLeft / max
    activeIndex.value = Math.min(n - 1, Math.max(0, Math.round(t * (n - 1))))
  }

  function scrollToIndex(i: number) {
    const el = stripRef.value
    const n = toValue(options.count)
    if (!el || n <= 0) return

    if (options.mode === 'cards') {
      const children = cardChildren(el)
      const child = children[i]
      if (child) el.scrollTo({ left: cardLeft(el, child), behavior: 'smooth' })
      return
    }

    if (options.mode === 'paged') {
      el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
      return
    }

    const max = el.scrollWidth - el.clientWidth
    if (n <= 1) return
    el.scrollTo({ left: (max * i) / (n - 1), behavior: 'smooth' })
  }

  function onScroll() {
    syncIndex()
  }

  function onPointerDown(e: PointerEvent) {
    if (e.button !== 0) return
    const el = stripRef.value
    if (!el) return
    e.preventDefault()
    dragging = true
    pointerId = e.pointerId
    startX = e.clientX
    startScroll = el.scrollLeft
    el.setPointerCapture(e.pointerId)
    el.classList.add(options.draggingClass)
    el.style.scrollBehavior = 'auto'
  }

  function onPointerMove(e: PointerEvent) {
    if (!dragging || !stripRef.value || (pointerId != null && e.pointerId !== pointerId)) return
    e.preventDefault()
    stripRef.value.scrollLeft = startScroll - (e.clientX - startX)
  }

  function onPointerUp(e: PointerEvent) {
    const el = stripRef.value
    if (!dragging || !el || (pointerId != null && e.pointerId !== pointerId)) return
    dragging = false
    try {
      if (pointerId != null) el.releasePointerCapture(pointerId)
    } catch {
      /* noop */
    }
    pointerId = null
    el.classList.remove(options.draggingClass)
    el.style.scrollBehavior = ''
    if (options.mode === 'paged') {
      const w = el.clientWidth
      const target = Math.round(el.scrollLeft / w) * w
      el.scrollTo({ left: target, behavior: 'smooth' })
    } else if (options.mode === 'cards') {
      const children = cardChildren(el)
      if (children.length) {
        const index = cardIndexFromScroll(el, children.length)
        const child = children[index]
        if (child) el.scrollTo({ left: cardLeft(el, child), behavior: 'smooth' })
      }
      requestAnimationFrame(() => requestAnimationFrame(syncIndex))
      return
    }
    syncIndex()
  }

  function onResize() {
    syncIndex()
  }

  let scrollSyncTimer: ReturnType<typeof setTimeout> | undefined

  function onScrollDebounced() {
    syncIndex()
    if (scrollSyncTimer) clearTimeout(scrollSyncTimer)
    scrollSyncTimer = setTimeout(syncIndex, 120)
  }

  function onScrollEnd() {
    syncIndex()
  }

  watch(stripRef, (el, _, onCleanup) => {
    if (!el) return
    el.addEventListener('scrollend', onScrollEnd, { passive: true })
    onCleanup(() => el.removeEventListener('scrollend', onScrollEnd))
  })

  onMounted(() => {
    nextTick(syncIndex)
    window.addEventListener('resize', onResize, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    if (scrollSyncTimer) clearTimeout(scrollSyncTimer)
  })

  return {
    stripRef,
    activeIndex,
    syncIndex,
    scrollToIndex,
    onScroll: options.mode === 'cards' ? onScrollDebounced : onScroll,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  }
}
