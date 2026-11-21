// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  runtimeConfig: {
    blogApiBase: 'https://aihosthub.aihnet.com/api',
    blogSite: 'accidentinjuryrecover',
  },
  dir: {
    public: 'public',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: {
    dirs: [
      {
        path: '~/components',
        ignore: ['practice-areas/**', 'blog/**', 'about/testimonials/**', 'about/faq/**'],
      },
      {
        path: '~/components/practice-areas',
        pathPrefix: false,
      },
      {
        path: '~/components/about/the-case-process',
        pathPrefix: false,
      },
      {
        path: '~/components/about/testimonials',
        pathPrefix: false,
      },
      {
        path: '~/components/about/faq',
        pathPrefix: false,
      },
      {
        path: '~/components/blog',
        pathPrefix: false,
      },
    ],
  },
  routeRules: {
    '/about/blog': { redirect: { to: '/blog', statusCode: 301 } },
    '/our-results': { redirect: { to: '/recovery-stories', statusCode: 301 } },
    '/practice-areas': { redirect: { to: '/injury-recovery-guides', statusCode: 301 } },
  },
  app: {
    head: {
      title: 'For The People Clinic | Injury Care & Medical Guidance',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Explore injury recovery resources and contact our Syracuse, Dallas, or Flushing office for appointment information.'
        }
      ]
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'locations',
        path: '/locations',
        file: '~/pages/Location/locations.vue',
      })
      pages.push({
        name: 'blog',
        path: '/blog',
        file: '~/pages/blog/index.vue',
      })
    },
  },
})
