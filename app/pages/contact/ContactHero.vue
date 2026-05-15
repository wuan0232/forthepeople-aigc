<template>
  <section class="contact-hero" aria-labelledby="contact-hero-heading">
    <div class="container">
      <SiteBreadcrumb
        class="contact-hero__crumb"
        :items="[{ label: 'Home', to: '/' }, { label: 'Contact' }]"
      />

      <div class="contact-hero__grid">
        <div class="contact-hero__main">
          <h1 id="contact-hero-heading" class="contact-hero__title">Contact Us Your Way</h1>
          <p class="contact-hero__lead">
            No matter where an injury happens, getting help shouldn't be hard. Morgan &amp; Morgan makes it easy to
            fight for the compensation you deserve.
          </p>

          <div class="contact-hero__photo">
            <img
              :src="heroImage"
              alt="Morgan & Morgan attorney meeting with a client"
              width="640"
              height="360"
              loading="eager"
            />
          </div>

          <div class="contact-hero__callout">
            <span class="contact-hero__callout-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M5 4h4l2 5-2 1a12 12 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                />
              </svg>
            </span>
            <div>
              <p class="contact-hero__callout-title">We're here 24/7.</p>
              <p class="contact-hero__callout-text">
                Fill out the form, call us at
                <a href="tel:+18442934275">844-293-4275</a>, or use the text button for your free case evaluation.
              </p>
            </div>
          </div>

          <p class="contact-hero__disclaimer">
            The attorney shown above may not be licensed in your state. To find an attorney licensed in your area,
            please visit our
            <a href="#attorneys">attorney page</a>.
          </p>
        </div>

        <ContactLeadForm title-id="contact-hero-form-title" class="contact-hero__form" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactLeadForm from './ContactLeadForm.vue'

const heroImage =
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&q=80&fit=crop'
</script>

<style scoped>
.contact-hero {
  background: #eef4f9;
  padding: calc(var(--header-offset) + 1rem) 0 3.5rem;
}

.contact-hero__crumb {
  margin-bottom: 1.75rem;
  font-size: 0.78rem;
  color: #4b5563;
}

.contact-hero__crumb :deep(a) {
  color: inherit;
  text-decoration: none;
}

.contact-hero__grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 960px) {
  .contact-hero__grid {
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 26rem);
    gap: 2.5rem;
  }
}

.contact-hero__title {
  margin: 0 0 0.85rem;
  font-size: clamp(1.85rem, 3.5vw, 2.65rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1f2933;
  line-height: 1.1;
}

.contact-hero__lead {
  margin: 0 0 1.5rem;
  max-width: 34rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #374151;
}

.contact-hero__photo {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
}

.contact-hero__photo img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.contact-hero__callout {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  padding: 1rem 1.1rem;
  margin-bottom: 1rem;
  background: #dceeff;
  border-radius: 10px;
}

.contact-hero__callout-icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  border-radius: 8px;
  color: var(--blue, #0066cc);
}

.contact-hero__callout-title {
  margin: 0 0 0.25rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #1f2933;
}

.contact-hero__callout-text {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.5;
  color: #374151;
}

.contact-hero__callout-text a {
  color: var(--blue, #0066cc);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.contact-hero__disclaimer {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: #6b7280;
}

.contact-hero__disclaimer a {
  color: var(--blue, #0066cc);
  text-decoration: underline;
}

@media (min-width: 960px) {
  .contact-hero__form {
    position: sticky;
    top: calc(var(--header-offset) + 1rem);
  }
}
</style>
