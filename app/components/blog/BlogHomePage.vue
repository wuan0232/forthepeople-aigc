<template>
  <!-- 1. 页头 LAW SCHOOL + 标语 + 社交链接 -->
  <header class="blog-hero">
    <div class="container blog-hero__row">
      <h1 class="blog-hero__brand">LAW SCHOOL</h1>
      <p class="blog-hero__tagline">
        Resources, guides, and insights for<br />
        all things injury.
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
        description="Start with practical recovery guidance after a crash, fall, workplace injury, or medication concern."
      />
      <div class="blog-filing__grid">
        <NuxtLink
          v-for="card in blogFilingCards"
          :key="card.title"
          :to="card.href"
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
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- 4. Medication Safety Updates -->
  <section class="blog-block blog-block--soft-blue" aria-labelledby="blog-cases-heading">
    <div class="container">
      <h2 id="blog-cases-heading" class="blog-head__title">Medication Safety Updates</h2>
      <div class="blog-cases__grid">
        <NuxtLink
          v-for="item in blogLatestCases"
          :key="item.title"
          :to="item.href"
          class="blog-case-card"
        >
          <h3 class="blog-case-card__title">{{ item.title }}</h3>
          <p class="blog-case-card__text">{{ item.text }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- 5. After an Accident -->
  <section class="blog-block blog-block--white" aria-labelledby="blog-accident-heading">
    <div class="container">
      <BlogSectionHead
        heading-id="blog-accident-heading"
        title="After an Accident"
        description="Practical guidance for the moments that matter most after an injury."
      />
      <div class="blog-img-grid blog-img-grid--4">
        <NuxtLink
          v-for="post in blogAfterAccidentPosts"
          :key="post.slug"
          :to="post.href"
          class="blog-img-card"
        >
          <div
            class="blog-img-card__thumb"
            :class="{ 'blog-img-card__thumb--muted': post.thumbMuted }"
          >
            <img
              v-if="post.imageSrc && !post.thumbMuted"
              class="blog-img-card__img"
              :src="post.imageSrc"
              :alt="post.imageAlt ?? ''"
              loading="lazy"
            />
          </div>
          <h3
            class="blog-img-card__title"
            :class="{ 'blog-img-card__title--underline': post.titleUnderline }"
          >
            {{ post.title }}
          </h3>
        </NuxtLink>
      </div>
      <div class="blog-foot">
        <BlogSeeAllLink :href="BLOG_ACCIDENTS_INCIDENTS_PATH" />
      </div>
    </div>
  </section>

  <!-- 6. Being Prepared -->
  <section class="blog-block blog-block--gray" aria-labelledby="blog-prepared-heading">
    <div class="container blog-prepared">
      <div class="blog-prepared__intro">
        <BlogSectionHead
          heading-id="blog-prepared-heading"
          title="Being Prepared"
          description="Stay informed with tips to protect yourself and your family before problems arise."
        />
      </div>
      <div>
        <NuxtLink
          v-for="item in blogBeingPrepared"
          :key="item.title"
          :to="item.href"
          class="blog-list__item"
        >
          <h3 class="blog-list__title">{{ item.title }}</h3>
          <span class="blog-list__chev" aria-hidden="true">›</span>
        </NuxtLink>
        <div class="blog-foot">
          <BlogSeeAllLink :href="BLOG_ACCIDENTS_INCIDENTS_PATH" />
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Newsroom -->
  <section class="blog-block blog-block--white" aria-labelledby="blog-news-heading">
    <div class="container">
      <h2 id="blog-news-heading" class="blog-head__title">Newsroom</h2>
      <div class="blog-news__grid">
        <NuxtLink
          v-for="post in blogNewsroomPosts"
          :key="post.slug"
          :to="post.href"
          class="blog-news-card"
        >
          <div class="blog-news-card__thumb">
            <svg class="blog-news-card__badge" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="3" width="16" height="18" rx="1" fill="rgba(255,255,255,0.9)" />
              <path d="M8 8h8M8 12h8M8 16h5" stroke="#1f6dde" stroke-width="1.5" />
            </svg>
            <p class="blog-news-card__label">In The<br />News</p>
          </div>
          <h3 class="blog-news-card__title">{{ post.title }}</h3>
        </NuxtLink>
      </div>
      <div class="blog-foot">
        <BlogSeeAllLink />
      </div>
    </div>
  </section>

  <!-- 8. We've got your back 订阅 -->
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
          <h2 id="blog-subscribe-heading" class="blog-subscribe__title">We've got your back</h2>
          <p class="blog-subscribe__lead">
            Get the latest safety tips, news and case updates delivered to your inbox!
          </p>
          <form class="blog-subscribe__form" @submit.prevent="onSubscribe">
            <input type="text" name="firstName" placeholder="First Name" autocomplete="given-name" />
            <input type="text" name="lastName" placeholder="Last Name" autocomplete="family-name" />
            <input type="email" name="email" placeholder="Email" autocomplete="email" required />
            <button type="submit" class="blog-subscribe__btn">Subscribe</button>
          </form>
          <p class="blog-subscribe__fine">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any
            time. See our Privacy Policy for details.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. Latest Posts（订阅与 Fee 表单之间） -->
  <div id="blog-latest-posts" class="blog-latest-posts">
    <header class="blog-posts-hero">
      <div class="container blog-posts-hero__grid">
        <h2 class="blog-posts-hero__title">Your right to safety is simple.</h2>
        <p class="blog-posts-hero__lead">
          We're here to keep it that way. Here's what you need to know.
        </p>
      </div>
    </header>
    <nav class="blog-posts-nav" aria-label="Blog categories">
      <div class="container">
        <ul class="blog-posts-nav__list">
          <li>
            <NuxtLink to="#blog-latest-posts" class="blog-posts-nav__search" aria-label="Search posts">
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
        <h2 id="blog-latest-heading" class="blog-posts-list__heading">Latest Posts</h2>
        <NuxtLink
          v-for="post in blogLatestListPosts"
          :key="post.slug"
          :to="post.href"
          class="blog-post-row"
        >
          <div
            v-if="post.thumbNews"
            class="blog-post-row__thumb blog-post-row__thumb--news"
            aria-hidden="true"
          >
            <span>In The News</span>
          </div>
          <div v-else-if="post.imageSrc" class="blog-post-row__thumb">
            <img :src="post.imageSrc" :alt="post.imageAlt ?? ''" loading="lazy" />
          </div>
          <h3 class="blog-post-row__title">{{ post.title }}</h3>
          <div class="blog-post-row__meta">
            <BlogTag :label="post.tag" />
            <BlogReadTime :minutes="post.readMinutes" />
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  BLOG_ACCIDENTS_INCIDENTS_PATH,
  BLOG_SOCIAL,
  blogAfterAccidentPosts,
  blogBeingPrepared,
  blogFeaturedPosts,
  blogFilingCards,
  blogLatestCases,
  blogLatestListPosts,
  blogNewsroomPosts,
  blogPostFilters,
} from '~/constants/blog'

const featuredPost = blogFeaturedPosts[0]
const featuredSide = blogFeaturedPosts.slice(1)

function onSubscribe() {
  /* placeholder — wire to API when available */
}
</script>
