/** 浏览器后退时禁用 smooth，从分类页返回 blog 瞬间恢复滚动位置 */
export default defineNuxtPlugin(() => {
  const router = useRouter()

  window.addEventListener(
    'popstate',
    () => {
      document.documentElement.style.scrollBehavior = 'auto'
      document.body.style.scrollBehavior = 'auto'
    },
    { capture: true },
  )

  router.afterEach((to, from) => {
    if (to.path !== '/blog' || !from.path.startsWith('/blog/')) return
    const raw = sessionStorage.getItem('blog-home-scroll-y')
    if (raw == null) return

    const y = Number(raw)
    if (!Number.isFinite(y)) return

    const html = document.documentElement
    const body = document.body
    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    window.scrollTo(0, y)
    requestAnimationFrame(() => {
      html.style.scrollBehavior = ''
      body.style.scrollBehavior = ''
    })
  })
})
