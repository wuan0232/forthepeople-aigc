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
    // 仅在 blog 首页内点击锚点（如 #blog-latest-posts）
    if (to.hash && to.path === '/blog' && from.path === '/blog') {
      return {
        el: to.hash,
        top: 88,
        behavior: 'auto',
      }
    }
    return { top: 0, behavior: 'auto' }
  },
} satisfies RouterConfig
