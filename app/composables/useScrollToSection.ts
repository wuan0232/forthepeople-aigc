const HEADER_OFFSET_PX = 88

/** 平滑滚动到页面内锚点（预留固定顶栏高度） */
export function scrollToSection(sectionId: string, behavior: ScrollBehavior = 'smooth') {
  if (import.meta.server) return false
  const el = document.getElementById(sectionId)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX
  window.scrollTo({ top: Math.max(0, top), behavior })
  return true
}

/** 处理 #contact 等页内链接点击 */
export function onInPageHashClick(event: MouseEvent, hash: string) {
  if (!hash.startsWith('#')) return
  const id = hash.slice(1)
  if (!id) return
  if (!document.getElementById(id)) return
  event.preventDefault()
  scrollToSection(id)
  if (import.meta.client) {
    history.replaceState(null, '', hash)
  }
}
