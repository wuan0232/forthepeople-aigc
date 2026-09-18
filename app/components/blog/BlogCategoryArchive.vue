<template>
  <div class="blog-category">
    <div class="container">
      <h1 class="blog-category__title">{{ category.title }}</h1>

      <div class="blog-cat-grid blog-cat-grid--articles">
        <BlogCategoryCard v-for="post in pagePosts" :key="post.slug" :post="post" />
      </div>

      <nav v-if="category.totalPages > 1" class="blog-cat-pagination" aria-label="Pagination">
        <NuxtLink
          v-for="page in pageLinks"
          :key="page.key"
          :to="page.href"
          class="blog-cat-pagination__item"
          :class="{
            'blog-cat-pagination__item--active': page.num === currentPage,
            'blog-cat-pagination__item--text': page.isText,
          }"
          :aria-current="page.num === currentPage ? 'page' : undefined"
        >
          {{ page.label }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  blogAccidentsIncidentsArchive,
  blogAccidentsIncidentsCategory,
} from '~/constants/blog'
import type { BlogCategoryArchiveMeta, BlogCategoryCard } from '~/types/blog'

const props = withDefaults(
  defineProps<{
    category?: BlogCategoryArchiveMeta
    posts?: BlogCategoryCard[]
  }>(),
  {
    category: () => blogAccidentsIncidentsCategory,
    posts: () => blogAccidentsIncidentsArchive,
  },
)

const route = useRoute()

const currentPage = computed(() => {
  const raw = Number(route.query.page)
  if (!Number.isFinite(raw) || raw < 1) return 1
  return Math.min(Math.floor(raw), props.category.totalPages)
})

const pagePosts = computed(() => {
  const start = (currentPage.value - 1) * props.category.postsPerPage
  return props.posts.slice(start, start + props.category.postsPerPage)
})

type PageLink = {
  key: string
  label: string
  href: string
  num?: number
  isText?: boolean
}

const pageLinks = computed((): PageLink[] => {
  const total = props.category.totalPages
  const base = props.category.path
  const links: PageLink[] = []

  for (let i = 1; i <= total; i += 1) {
    links.push({
      key: `page-${i}`,
      label: String(i),
      href: i === 1 ? base : `${base}?page=${i}`,
      num: i,
    })
  }

  if (total > 1) {
    links.push({
      key: 'ellipsis',
      label: '...',
      href: `${base}?page=${total}`,
      isText: true,
    })
    links.push({
      key: 'last',
      label: 'Last »',
      href: `${base}?page=${total}`,
      isText: true,
    })
  }

  return links
})

useHead(() => ({
  title: `${props.category.title} | For The People Clinic Blog`,
  meta: [
    {
      name: 'description',
      content: `Browse ${props.category.title} articles from For The People Clinic Law School.`,
    },
  ],
}))
</script>
