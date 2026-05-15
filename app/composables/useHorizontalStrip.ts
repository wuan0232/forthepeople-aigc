import { onMounted, onUnmounted, ref, type MaybeRefOrGetter, toValue } from 'vue'

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

  /** Leftmost card aligned with (or just before) the visible start — matches multi-card strips. */
  function activeCardIndex(el: HTMLElement, children: HTMLElement[]) {
    const scrollLeft = el.scrollLeft
    let index = 0
    for (let i = 0; i < children.length; i++) {
      if (cardLeft(el, children[i]!) <= scrollLeft + 1) index = i
    }
    return index
  }

  function syncIndex() {
    const el = stripRef.value
    const n = toValue(options.count)
    if (!el || n <= 0) return

    if (options.mode === 'cards') {
      const children = cardChildren(el)
      if (!children.length) return
      activeIndex.value = Math.min(n - 1, activeCardIndex(el, children))
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
        const index = activeCardIndex(el, children)
        const child = children[index]
        if (child) el.scrollTo({ left: cardLeft(el, child), behavior: 'smooth' })
      }
    }
    syncIndex()
  }

  function onResize() {
    syncIndex()
  }

  onMounted(() => {
    syncIndex()
    window.addEventListener('resize', onResize, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    stripRef,
    activeIndex,
    syncIndex,
    scrollToIndex,
    onScroll,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  }
}
