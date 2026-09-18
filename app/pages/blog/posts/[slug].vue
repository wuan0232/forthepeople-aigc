<template>
  <article v-if="article" class="blog-article">
    <header class="blog-article__hero">
      <div class="container">
        <p class="blog-article__meta">
          <span>{{ article.categoryLabel }}</span>
          <span>•</span>
          <span>{{ publishedAt }}</span>
          <span>•</span>
          <span>{{ article.readMinutes }} min read</span>
        </p>
        <h1 class="blog-article__title">{{ article.title }}</h1>
        <p class="blog-article__summary">{{ article.summary }}</p>
      </div>
    </header>

    <section class="blog-article__body">
      <div class="container blog-article__container">
        <img
          v-if="article.imageSrc"
          class="blog-article__image"
          :src="article.imageSrc"
          :alt="article.imageAlt ?? article.title"
          loading="lazy"
        />
        <section
          v-for="section in article.sections"
          :key="section.heading"
          class="blog-article__section"
        >
          <h2>{{ section.heading }}</h2>
          <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
        </section>
        <NuxtLink to="/blog/medical-malpractice" class="blog-article__back">
          Back to Medical Malpractice Articles
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { BlogArticle } from '~/types/blog'
import { blogMedicalArticles } from '~/constants/blog'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? '').trim())

const fallbackArticle = computed<BlogArticle>(() => ({
  slug: slug.value || 'coming-soon',
  title: 'SEO Article Placeholder',
  summary:
    'This is a temporary placeholder page. SEO articles will be automatically published via API and backend agents.',
  categoryLabel: 'Medical Malpractice',
  readMinutes: 2,
  publishedIso: '2026-07-08',
  imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&fit=crop',
  imageAlt: 'Blog publishing workflow placeholder',
  sections: [
    {
      heading: 'Publishing Pipeline In Progress',
      paragraphs: [
        'This slug is reserved for automated SEO publishing.',
        'When API publishing is enabled, this page will be replaced by structured article content from your backend.',
      ],
    },
  ],
}))

const article = computed(() => blogMedicalArticles.find((item) => item.slug === slug.value) ?? fallbackArticle.value)

const publishedAt = computed(() =>
  new Date(`${article.value!.publishedIso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }),
)

useHead(() => ({
  title: `${article.value!.title} | For The People Clinic Blog`,
  meta: [{ name: 'description', content: article.value!.summary }],
}))
</script>

<style scoped>
.blog-article__hero {
  background: #f0f7ff;
  padding: 2.5rem 0 2rem;
}

.blog-article__meta {
  margin: 0 0 0.75rem;
  display: flex;
  gap: 0.5rem;
  color: #516172;
  font-size: 0.9rem;
}

.blog-article__title {
  margin: 0 0 1rem;
  max-width: 54rem;
  line-height: 1.15;
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
}

.blog-article__summary {
  margin: 0;
  max-width: 54rem;
  line-height: 1.6;
  color: #374151;
}

.blog-article__body {
  background: #fff;
  padding: 2rem 0 3rem;
}

.blog-article__container {
  max-width: 54rem;
}

.blog-article__image {
  width: 100%;
  border-radius: 0.9rem;
  margin-bottom: 1.5rem;
}

.blog-article__section {
  margin-bottom: 1.5rem;
}

.blog-article__section h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
}

.blog-article__section p {
  margin: 0 0 0.85rem;
  line-height: 1.7;
  color: #25313f;
}

.blog-article__back {
  display: inline-flex;
  margin-top: 0.5rem;
  font-weight: 700;
  color: #1f6dde;
  text-decoration: none;
}

.blog-article__back:hover {
  text-decoration: underline;
}
</style>
