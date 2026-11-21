<template>
  <!-- 1. 页头 INJURY &amp; RECOVERY + 标语 + 社交链接 -->
  <header class="blog-hero">
    <div class="container blog-hero__row">
      <h1 class="blog-hero__brand">INJURY &amp; RECOVERY</h1>
      <p class="blog-hero__tagline">
        Practical information on injury care,<br />
        spine health, and preparing for your visit.
      </p>
      <nav class="blog-hero__social" aria-label="Social media">
        <a
          v-for="item in BLOG_SOCIAL"
          :key="item.label"
          :href="item.href"
          :aria-label="item.label"
          :target="item.icon === 'email' ? undefined : '_blank'"
          :rel="item.icon === 'email' ? undefined : 'noopener noreferrer'"
          class="blog-hero__social-link"
        >
          <BlogSocialIcon :name="item.icon" />
        </a>
      </nav>
    </div>
  </header>

  <!-- 2. 精选文章（一大两小） -->
  <section class="blog-featured" aria-label="Featured articles">
    <div class="container blog-featured__grid">
      <BlogPostCard v-if="featuredPost" :post="featuredPost" featured />
      <div v-if="featuredSide.length" class="blog-featured__side">
        <BlogPostCard
          v-for="post in featuredSide"
          :key="post.slug"
          :post="post"
          compact
        />
      </div>
    </div>
  </section>

  <!-- 3. Medical Next Steps 三卡片 -->
  <section class="blog-block blog-block--white" aria-labelledby="blog-filing-heading">
    <div class="container">
      <BlogSectionHead
        heading-id="blog-filing-heading"
        title="Medical Next Steps"
        description="Prepare for a medical visit, organize existing records, and write down questions for your doctor."
      />
      <div class="blog-filing__grid">
        <article
          v-for="card in blogFilingCards"
          :key="card.title"
          class="blog-filing-card"
        >
          <div class="blog-filing-card__art">
            <img
              v-if="card.imageSrc"
              class="blog-filing-card__img"
              :src="card.imageSrc"
              :alt="card.imageAlt ?? ''"
              loading="lazy"
            />
            <div v-else-if="card.icon" v-html="card.icon" />
          </div>
          <h3
            class="blog-filing-card__title"
            :class="{ 'blog-filing-card__title--accent': card.accent }"
          >
            {{ card.title }}
          </h3>
          <p class="blog-filing-card__text">{{ card.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. Common Questions After an Injury -->
  <section class="blog-block blog-block--soft-blue" aria-labelledby="blog-cases-heading">
    <div class="container">
      <h2 id="blog-cases-heading" class="blog-head__title">Common Questions After an Injury</h2>
      <div class="blog-cases__grid">
        <article
          v-for="item in blogLatestCases"
          :key="item.title"
          class="blog-case-card"
        >
          <h3 class="blog-case-card__title">{{ item.title }}</h3>
          <p class="blog-case-card__text">{{ item.text }}</p>
          <p class="blog-content-note">{{ item.note }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="blog-block blog-block--white" aria-labelledby="blog-accident-heading">
    <div class="container">
      <BlogSectionHead heading-id="blog-accident-heading" title="After an Accident" description="Practical guidance for the moments that matter most after an injury." />
      <div class="blog-img-grid blog-img-grid--4">
        <article v-for="(card, index) in BLOG_TOPIC_SECTIONS[0]!.cards" :key="card.title" class="blog-img-card">
          <div class="blog-img-card__thumb" :class="{ 'blog-img-card__thumb--muted': index === 3 }">
            <img v-if="accidentImages[index]" :src="accidentImages[index]" alt="" class="blog-img-card__img" loading="lazy" />
          </div>
          <h3 class="blog-img-card__title">{{ card.title }}</h3>
          <p class="blog-content-copy">{{ card.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="blog-block blog-block--gray" aria-labelledby="blog-prepared-heading">
    <div class="container blog-prepared">
      <div class="blog-prepared__intro">
        <BlogSectionHead heading-id="blog-prepared-heading" title="Preparing for Your Visit" description="Bring the information and questions that matter for your next appointment." />
      </div>
      <div>
        <article v-for="item in blogBeingPrepared" :key="item.title" class="blog-list__item blog-prepared-item">
          <h3 class="blog-list__title">{{ item.title }}</h3>
          <p class="blog-content-copy">{{ item.text }}</p>
          <p class="blog-content-note">{{ item.note }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="blog-block blog-block--white" aria-labelledby="blog-news-heading">
    <div class="container">
      <h2 id="blog-news-heading" class="blog-head__title">Understanding Injury Care</h2>
      <div class="blog-care-grid">
        <article v-for="card in BLOG_INJURY_CARE_CARDS" :key="card.title" class="blog-care-card">
          <h3>{{ card.title }}</h3>
          <p class="blog-content-copy">{{ card.text }}</p>
          <div class="blog-care-card__questions">
            <h4>For your visit</h4>
            <ul><li v-for="point in card.points" :key="point">{{ point }}</li></ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 8. Find Your Nearest Office 订阅 -->
  <section class="blog-subscribe" aria-labelledby="blog-subscribe-heading">
    <div class="container">
      <div class="blog-subscribe__inner">
        <div class="blog-subscribe__art" aria-hidden="true">
          <img
            class="blog-subscribe__img"
            src="/images/blog/blog-got-your-back.webp"
            alt=""
            width="320"
            height="320"
            loading="lazy"
          />
        </div>
        <div>
          <h2 id="blog-subscribe-heading" class="blog-subscribe__title">Find Your Nearest Office</h2>
          <p class="blog-subscribe__lead">
            Visit us in Syracuse, Dallas, or Flushing. Choose an office to call or get directions.
          </p>
          <div class="blog-subscribe__form">
            <select v-model="selectedOfficeId" class="blog-office-field" aria-label="Choose your office">
              <option v-for="office in SITE_OFFICES" :key="office.id" :value="office.id">{{ office.name }}</option>
            </select>
            <a class="blog-office-field" :href="`tel:${selectedOffice.phoneTel}`">{{ selectedOffice.phoneDisplay }}</a>
            <address class="blog-office-field blog-office-address" aria-live="polite">{{ selectedOffice.addressLines.join(', ') }}</address>
            <a :href="selectedOffice.mapsUrl" class="blog-subscribe__btn" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </div>
          <p class="blog-subscribe__fine">
            Please call to confirm appointment availability and office hours.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. Latest Posts（订阅与 Fee 表单之间） -->
  <div id="blog-latest-posts" class="blog-latest-posts">
    <header class="blog-posts-hero">
      <div class="container blog-posts-hero__grid">
        <h2 class="blog-posts-hero__title">Helpful Reading for Your Next Visit.</h2>
        <p class="blog-posts-hero__lead">
          Explore practical articles about preparing for care and discussing your next steps.
        </p>
      </div>
    </header>
    <nav class="blog-posts-nav" aria-label="Blog categories">
      <div class="container">
        <ul class="blog-posts-nav__list">
          <li>
            <NuxtLink to="/search" class="blog-posts-nav__search" aria-label="Search posts">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                <path d="M20 20l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </NuxtLink>
          </li>
          <li v-for="item in blogPostFilters" :key="item.label">
            <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <section class="blog-posts-list" aria-labelledby="blog-latest-heading">
      <div class="container">
        <div class="blog-latest-head">
          <h2 id="blog-latest-heading" class="blog-posts-list__heading">Latest Posts</h2>
          <BlogSeeAllLink href="/blog/posts" label="See All Posts" />
        </div>
        <BlogFeed latest />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { SITE_OFFICES } from '~/constants/offices'
import {
  BLOG_SOCIAL,
  BLOG_TOPIC_SECTIONS,
  blogBeingPrepared,
  BLOG_INJURY_CARE_CARDS,
  blogFeaturedPosts,
  blogFilingCards,
  blogLatestCases,
  blogPostFilters,
} from '~/constants/blog'

const accidentImages = [
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=85&fit=crop',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=85&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85&fit=crop',
  '',
]


const featuredPost = blogFeaturedPosts[0]
const featuredSide = blogFeaturedPosts.slice(1)

const selectedOfficeId = ref('syracuse')
const selectedOffice = computed(() => SITE_OFFICES.find(office => office.id === selectedOfficeId.value) ?? SITE_OFFICES[0]!)
</script>

<style scoped>
.blog-office-field { flex: 1 1 8rem; box-sizing: border-box; border: 1px solid #d1d5db; background: #fff; color: #1f2937; padding: .65rem .85rem; font: inherit; font-size: .9rem; border-radius: var(--radius); min-width: 0; }
.blog-office-address { flex: 1 1 100%; font-style: normal; margin: 0; }
.blog-subscribe__btn { text-align: center; text-decoration: none; }
.blog-latest-head { display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb; }
.blog-latest-head h2 { border: 0; margin: 0; padding: 0; }
.blog-content-copy { margin: .85rem 0 0; color: #475569; font-size: .95rem; line-height: 1.75; }
.blog-content-note { margin: 1rem 0 0; padding-top: .85rem; border-top: 1px solid #dce6ef; color: #475569; font-size: .875rem; line-height: 1.65; }
.blog-prepared-item { display: block; padding-block: 1.4rem; }
.blog-case-card__text { line-height: 1.75; }
.blog-care-grid { margin-top: 1.5rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.blog-care-card { padding: clamp(1.25rem, 3vw, 2rem); background: #f5f9fd; border: 1px solid #dce6ef; border-top: 3px solid var(--blue); }
.blog-care-card h3 { margin: 0; color: var(--navy); font-size: 1.25rem; line-height: 1.4; }
.blog-care-card__questions { margin-top: 1.25rem; padding: 1rem 1.1rem; background: #fff; }
.blog-care-card__questions h4 { margin: 0 0 .6rem; color: var(--blue); font-size: .9rem; }
.blog-care-card__questions ul { margin: 0; padding-left: 1.15rem; color: #475569; line-height: 1.65; font-size: .9rem; }
.blog-care-card__questions li + li { margin-top: .4rem; }
@media (max-width: 640px) { .blog-care-grid { grid-template-columns: 1fr; } }
</style>
