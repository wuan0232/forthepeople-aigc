const measurementId = 'G-WXLT70ZM7P'

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  siteAnalytics?: { initialized: boolean; lastPage: string | null }
}

/** Main-site tracking only. Blog tracking belongs to its existing integration. */
export function useSiteAnalytics() {
  if (import.meta.server) return

  const nuxtApp = useNuxtApp()
  const router = useRouter()
  const analyticsWindow = window as AnalyticsWindow
  const state = analyticsWindow.siteAnalytics ||= { initialized: false, lastPage: null }
  let frame = 0

  function trackPage() {
    const route = router.currentRoute.value
    if (route.path === '/blog' || route.path.startsWith('/blog/')) {
      state.lastPage = null
      return
    }

    const pageLocation = `${window.location.origin}${window.location.pathname}`
    if (state.lastPage === pageLocation) return

    if (!state.initialized) {
      // Defer to any integration injected by the host; never add a second tag.
      const existingTag = document.querySelector(
        'script[src*="googletagmanager.com/gtag/js"], script[src*="googletagmanager.com/gtm.js"]',
      )
      const existingConfig = analyticsWindow.dataLayer?.some((command) => {
        const args = command as { 0?: unknown }
        return args?.[0] === 'config'
      })
      if (existingTag || existingConfig) return

      analyticsWindow.dataLayer ||= []
      analyticsWindow.gtag ||= function () {
        analyticsWindow.dataLayer!.push(arguments)
      }

      // Preserve queued Consent Mode commands; do not grant or change consent.
      analyticsWindow.gtag('js', new Date())
      analyticsWindow.gtag('config', measurementId, { send_page_view: false })
      state.initialized = true

      const script = document.createElement('script')
      script.id = 'main-site-ga4'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script)
    }

    analyticsWindow.gtag!('event', 'page_view', {
      send_to: measurementId,
      page_location: pageLocation,
      page_title: document.title,
      page_referrer: state.lastPage || (document.referrer ? new URL(document.referrer).origin + new URL(document.referrer).pathname : ''),
    })
    state.lastPage = pageLocation
  }

  function trackInteraction(event: MouseEvent) {
    if (!state.initialized || router.currentRoute.value.path.startsWith('/blog')) return
    const target = event.target instanceof Element ? event.target.closest('a, button') : null
    if (!target) return
    const href = target.getAttribute('href') || ''
    const name = href.startsWith('tel:') ? 'clinic_phone_click'
      : href.startsWith('https://www.google.com/maps/search/') ? 'clinic_directions_click'
      : target.classList.contains('ca-faq-acc-trigger') ? 'clinic_faq_click' : null
    if (!name) return
    analyticsWindow.gtag?.('event', name, {
      send_to: measurementId,
      page_location: `${window.location.origin}${window.location.pathname}`,
    })
  }

  function schedulePageView() {
    cancelAnimationFrame(frame)
    // Let Nuxt's head updates finish before reading the page title.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(trackPage)
    })
  }

  const removeHook = nuxtApp.hook('page:finish', schedulePageView)
  onMounted(() => {
    schedulePageView()
    document.addEventListener('click', trackInteraction)
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    removeHook()
    document.removeEventListener('click', trackInteraction)
  })
}
