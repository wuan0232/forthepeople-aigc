import { onInPageHashClick } from '~/composables/useScrollToSection'

/** 页内 #contact 等锚点：平滑滚动并预留顶栏高度 */
export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#' || href.length < 2) return

      // 组件内已自行处理点击时跳过
      if (anchor.dataset.scrollHandled === 'true') return

      onInPageHashClick(event, href)
    },
    { capture: true },
  )
})
