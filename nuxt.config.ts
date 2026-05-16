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
        ignore: ['practice-areas/**', 'the-case-process/**'],
      },
      {
        path: '~/components/practice-areas',
        pathPrefix: false,
      },
      {
        path: '~/components/the-case-process',
        pathPrefix: false,
      },
    ],
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
    },
  },
})
