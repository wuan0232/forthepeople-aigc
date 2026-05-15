<template>
  <section class="contact-inq" aria-labelledby="contact-inq-heading">
    <div class="container contact-inq__grid">
      <div class="contact-inq__intro">
        <h2 id="contact-inq-heading">Additional Inquiries</h2>
        <p>Here are some helpful links.</p>
      </div>

      <ul class="contact-inq__list">
        <li v-for="item in links" :key="item.title">
          <NuxtLink v-if="item.to" :to="item.to" class="contact-inq__link">
            <span class="contact-inq__link-title">{{ item.title }} <span aria-hidden="true">&gt;</span></span>
            <span class="contact-inq__link-desc">{{ item.description }}</span>
          </NuxtLink>
          <a v-else :href="item.href" class="contact-inq__link">
            <span class="contact-inq__link-title">{{ item.title }} <span aria-hidden="true">&gt;</span></span>
            <span class="contact-inq__link-desc">{{ item.description }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
type InquiryLink = {
  title: string
  description: string
  to?: string
  href?: string
}

const links: InquiryLink[] = [
  {
    title: 'Find a Location Near You',
    description: "Need local support? We've got offices nationwide to help you wherever you are.",
    to: '/locations',
  },
  {
    title: 'Case Process',
    description: 'Curious about what happens next? Learn how we handle your case from start to finish.',
    href: '#case-process',
  },
  {
    title: 'Practice Areas',
    description: 'Explore the cases we handle—from auto accidents to workplace injuries and beyond.',
    to: '/practice-areas',
  },
  {
    title: 'Careers',
    description: 'Ready to make a difference? Join our team and fight for the people.',
    href: '#careers',
  },
  {
    title: 'Refer a Case',
    description: 'Partner with Morgan & Morgan and help your client get the results they deserve.',
    href: '#refer',
  },
  {
    title: 'Media Inquiries',
    description: 'For press and media inquiries, email us!',
    href: 'mailto:press@forthepeople.com',
  },
]
</script>

<style scoped>
.contact-inq {
  background: #eef4f9;
  padding: clamp(3rem, 6vw, 4rem) 0;
}

.contact-inq__grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 900px) {
  .contact-inq__grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 3rem;
  }
}

.contact-inq__intro h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 800;
  color: #1f2933;
  letter-spacing: -0.02em;
}

.contact-inq__intro p {
  margin: 0;
  font-size: 0.95rem;
  color: #4b5563;
}

.contact-inq__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-inq__list li {
  border-bottom: 1px solid #d8e2ec;
}

.contact-inq__list li:first-child {
  border-top: 1px solid #d8e2ec;
}

.contact-inq__link {
  display: block;
  padding: 1.1rem 0;
  color: inherit;
  text-decoration: none;
}

.contact-inq__link:hover .contact-inq__link-title {
  color: var(--blue, #0066cc);
}

.contact-inq__link-title {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.98rem;
  font-weight: 800;
  color: #1f2933;
}

.contact-inq__link-desc {
  display: block;
  font-size: 0.88rem;
  line-height: 1.5;
  color: #4b5563;
  font-weight: 400;
}
</style>
