import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'auto' }
    }
    // 从 blog 子页返回首页：由 useBlogScrollCache / plugin 瞬间恢复，此处不滚到顶部
    if (to.path === '/blog' && from.path.startsWith('/blog/')) {
      return false
    }
    if (to.hash) {
      const behavior =
        to.path === '/blog' && from.path === '/blog' ? 'auto' : 'smooth'
      return {
        el: to.hash,
        top: 88,
        behavior,
      }
    }
    return { top: 0, behavior: 'auto' }
  },
} satisfies RouterConfig
