// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: {
    dirs: [
      {
        path: '~/components',
        ignore: ['practice-areas/**', 'blog/**'],
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
        path: '~/components/blog',
        pathPrefix: false,
      },
    ],
  },
  routeRules: {
    '/about/blog': { redirect: { to: '/blog', statusCode: 301 } },
    '/blog/posts': { redirect: { to: '/blog#blog-latest-posts', statusCode: 301 } },
  },
  app: {
    head: {
      title: 'Morgan & Morgan — Injury Law Firm',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'America’s largest injury law firm. Free case evaluation. We fight for the people.'
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
        name: 'our-results',
        path: '/our-results',
        file: '~/pages/ourResult/our-results.vue',
      })
      pages.push({
        name: 'blog',
        path: '/blog',
        file: '~/pages/blog/index.vue',
      })
    },
  },
})
