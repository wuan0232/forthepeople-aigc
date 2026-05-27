const BLOG_SCROLL_KEY = 'blog-home-scroll-y'

/** 离开 /blog 前保存滚动；返回时无动画瞬间恢复 */
export function useBlogScrollCache() {
  const route = useRoute()

  function saveScroll() {
    if (import.meta.server) return
    sessionStorage.setItem(BLOG_SCROLL_KEY, String(window.scrollY))
  }

  function restoreScroll() {
    if (import.meta.server) return
    const raw = sessionStorage.getItem(BLOG_SCROLL_KEY)
    if (raw == null) return
    const y = Number(raw)
    if (!Number.isFinite(y) || y < 0) return

    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.scrollBehavior
    const prevBody = body.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    window.scrollTo(0, y)
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevHtml
      body.style.scrollBehavior = prevBody
    })
  }

  onBeforeRouteLeave((to) => {
    if (route.path === '/blog' && to.path.startsWith('/blog/')) {
      saveScroll()
    }
  })

  onActivated(() => {
    if (route.path === '/blog') {
      restoreScroll()
    }
  })

  onMounted(() => {
    if (route.path !== '/blog') return
    const nav = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined
    if (nav?.type === 'back_forward') {
      nextTick(restoreScroll)
    }
  })
}
