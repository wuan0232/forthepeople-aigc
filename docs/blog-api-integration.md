# Blog API integration

Nuxt proxies the public API on the server. No token or browser CORS registration is needed. Optional environment variables: `NUXT_BLOG_API_BASE` (default `https://aihosthub.aihnet.com/api`) and `NUXT_BLOG_SITE` (default `accidentinjuryrecover`). Deploy the Nitro server, not a static export.

Latest Posts fetches all API pages, sorts publishedAt and displays five. All Posts requests 12 per page with Previous/Next links. Successful total=0 uses retained local articles; errors show Retry. Static educational modules are unchanged. API rows omit unsupported category and reading time and intentionally retain the requested text-only layout.

Details render bodyHtml and extract JSON-LD into the SSR head without duplicating the cover. Missing/withdrawn articles retain 404/410. Legacy non-local article paths redirect to publicPath. Local example URLs remain available. No analytics tag was added. Requests are not permanently cached.

Before launch, coordinate switching the existing /blog and detail proxy to Nuxt. Preserve /blog-sitemap.xml and /media/ and verify sitemap/canonical consistency. This change does not modify production routing. Joint acceptance still needs production direct loads, refresh, old IDs, mobile, publishing updates, withdrawal and 404/410 checks.

Validation: production build passed. A local mock API against the built Nitro server passed SSR latest articles, page 2, detail body/JSON-LD, 404, 410, successful-empty fallback and service-error retry checks. Production API connectivity was unavailable in the development execution environment; live integration and visual mobile acceptance remain pending.
