<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <div class="logo-box" aria-label="For The People Clinic">
          <span class="logo-box__main">FOR THE PEOPLE CLINIC</span>
          <span class="logo-box__sub">Patient Care & Medical Guidance</span>
        </div>
        <p class="footer__lead">
          For The People Clinic provides patient-focused injury recovery guidance and practical medical next steps
          for families across New York.
        </p>
        <div class="footer__stars">
          <span class="stars" aria-hidden="true">★★★★★</span>
          <a href="#testimonials">100k+ 5-Star Reviews</a>
        </div>
      </div>

      <nav class="footer__col" aria-label="Clinic">
        <h3 class="footer__heading">Clinic</h3>
        <ul>
          <li><NuxtLink to="/locations">Locations</NuxtLink></li>
          <li><NuxtLink to="/injury-recovery-guides">Injury Recovery Guides</NuxtLink></li>
          <li><NuxtLink to="/recovery-stories">Recovery Stories</NuxtLink></li>
          <li><NuxtLink to="/about/the-case-process">How It Works</NuxtLink></li>
          <li><a href="#careers">Careers</a></li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
      </nav>

      <nav class="footer__col" aria-label="About">
        <h3 class="footer__heading">About</h3>
        <ul>
          <li><NuxtLink to="/about">Our Story</NuxtLink></li>
          <li><a href="#contact">Medical Action Plan</a></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/about/faq">FAQ</NuxtLink></li>
          <li><a href="#media">Resources</a></li>
          <li><NuxtLink to="/about/testimonials">Testimonials</NuxtLink></li>
        </ul>
      </nav>

      <nav class="footer__col" aria-label="Quick links">
        <h3 class="footer__heading">Quick Links</h3>
        <ul>
          <li><a href="#a11y">Accessibility</a></li>
          <li><a href="#complaints">Complaints</a></li>
          <li><a href="#pound">Pound Law</a></li>
          <li><a href="#optout">Opt Out</a></li>
          <li><a href="#cocounsel">Co-counsel</a></li>
          <li><a href="#editorial">Editorial Policy</a></li>
        </ul>
      </nav>

      <div class="footer__aside">
        <div class="aside-block">
          <h3 class="footer__heading">Share</h3>
          <div class="social">
            <button
              v-for="s in socials"
              :key="s.label"
              type="button"
              class="social__btn"
              :aria-label="`Share this page on ${s.label}`"
              :title="`Share on ${s.label}`"
              @click="sharePage(s.label)"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path :d="s.path" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__partners-wrap container">
      <div class="footer__partner-rail" role="list">
        <div class="partner partner--outlined" role="listitem">
          <span class="partner__line">For The People Clinic</span>
          <span class="partner__sub">Patient Care Network</span>
        </div>
        <div class="partner partner--bold" role="listitem">
          For The People Clinic<br />Recovery Care Team
        </div>
        <div class="partner partner--tilt" role="listitem">Medical Guidance Desk</div>
        <div class="partner partner--abogados" role="listitem">
          <span class="partner__ab">Patient Resources</span>
          <span class="partner__mm">For The People Clinic</span>
        </div>
        <div class="partner partner--class" role="listitem">
          <span class="partner__flag" aria-hidden="true" />
          <span>Injury Recovery Guides</span>
        </div>
      </div>
    </div>

    <div class="footer__legal container">
      <div class="office-line">
        <div class="office-line__list">
          <p v-for="office in offices" :key="office.id" class="office-line__item">
            <strong>{{ office.name }}</strong>
            <span>
              {{ office.addressLines.join(', ') }} ·
              <a :href="`tel:${office.phoneTel}`">{{ office.phoneDisplay }}</a>
            </span>
          </p>
        </div>
        <a href="/locations" class="office-link">Office Locations</a>
      </div>
      <div class="legal-row">
        <p class="fineprint">
          If you are vision-impaired or have some other impairment covered by the Americans with
          Disabilities Act or a similar law, and you wish to discuss potential accommodations
          related to using this website, please contact us at
          <a href="tel:+19293993134">(929) 399-3134</a> or
          <a href="mailto:NY@spineandneurosurgery.com">NY@spineandneurosurgery.com</a>.
          This website provides educational medical guidance and does not replace emergency care.
          Results and recommendations may vary depending on individual medical circumstances.
        </p>
        <button type="button" class="privacy-btn">
          <span class="privacy-btn__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" stroke="#2563eb" stroke-width="1.5" />
              <path d="M7 12l3 3 7-7" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
            </svg>
          </span>
          Your privacy choices.
        </button>
      </div>
      <div class="copyright-row">
        <span>© {{ year }} For The People Clinic All rights reserved</span>
        <span class="copyright-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Disclaimers and Terms of Use</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SITE_OFFICES } from '~/constants/offices'

const year = new Date().getFullYear()
const offices = SITE_OFFICES

const socials = [
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  }
]

function sharePage(platform: string) {
  if (typeof window === 'undefined') return

  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('For The People Clinic — Injury Recovery & Medical Guidance')
  const shareUrls: Record<string, string> = {
    X: `https://x.com/intent/post?text=${text}&url=${url}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  }
  const shareUrl = shareUrls[platform]
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=720,height=640')
  }
}
</script>

<style scoped>
.footer {
  background: #fff;
  color: #1a1a1a;
  border-top: 1px solid #e8eaed;
  padding-top: 3.25rem;
}

.footer__top {
  display: grid;
  gap: 2rem 2.5rem;
  padding-bottom: 2.75rem;
}

@media (min-width: 1100px) {
  .footer__top {
    grid-template-columns: minmax(200px, 1.15fr) repeat(3, minmax(100px, 0.85fr)) minmax(200px, 1fr);
    align-items: start;
  }
}

@media (min-width: 640px) and (max-width: 1099px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }

  .footer__aside {
    grid-column: 1 / -1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}

.logo-box {
  display: inline-flex;
  flex-direction: column;
  gap: 0.35rem;
  background: #0f0f0f;
  padding: 0.55rem 0.75rem 0.5rem;
  border-radius: 2px;
  margin-bottom: 1.1rem;
  max-width: 17rem;
}

.logo-box__main {
  color: var(--yellow, #ffde00);
  font-weight: 900;
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  letter-spacing: 0.06em;
  line-height: 1.15;
}

.logo-box__sub {
  color: #fff;
  font-weight: 700;
  font-size: 0.58rem;
  letter-spacing: 0.07em;
  line-height: 1.25;
}

.footer__lead {
  color: #5c6370;
  font-size: 0.9375rem;
  line-height: 1.55;
  max-width: 22rem;
  margin: 0 0 1.1rem;
}

.footer__stars {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.stars {
  letter-spacing: 3px;
  color: #111;
  font-size: 1rem;
  line-height: 1;
}

.footer__stars a {
  color: #0066cc;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.footer__stars a:hover {
  color: #004a99;
}

.footer__heading {
  margin: 0 0 0.85rem;
  font-size: 0.8125rem;
  font-weight: 800;
  color: #4b5563;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer__col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__col a {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.35;
}

.footer__col a:hover {
  color: #0066cc;
}

.footer__aside {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.aside-block {
  min-width: 0;
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.social__btn {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: #e8eaed;
  color: #374151;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.15s ease;
}

.social__btn:hover {
  background: #dde1e7;
  color: #111;
}

.social__btn :deep(svg) {
  display: block;
}

.store-badges {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 11.5rem;
}

.store-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.65rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111;
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.store-btn:hover {
  border-color: #9ca3af;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.store-btn__icon {
  flex-shrink: 0;
  color: #111;
}

.store-btn__gicon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
}

.store-btn__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.15;
  text-align: left;
}

.store-btn__small {
  font-size: 0.55rem;
  font-weight: 500;
  color: #374151;
  letter-spacing: 0.02em;
}

.store-btn__small--caps {
  letter-spacing: 0.04em;
}

.store-btn__large {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.store-btn--apple .store-btn__large {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.footer__partners-wrap {
  padding-bottom: 2rem;
}

.footer__partner-rail {
  background: #eceef1;
  border-radius: 10px;
  padding: 1.15rem 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 1.25rem;
}

.partner {
  font-size: 0.68rem;
  font-weight: 700;
  color: #374151;
  text-align: center;
  line-height: 1.25;
  max-width: 9.5rem;
}

.partner--outlined {
  border: 1px solid #111;
  padding: 0.45rem 0.55rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.partner__line {
  font-weight: 800;
  font-size: 0.62rem;
}

.partner__sub {
  font-weight: 600;
  font-size: 0.58rem;
  color: #4b5563;
}

.partner--bold {
  font-weight: 900;
  font-size: 0.62rem;
  color: #111;
}

.partner--tilt {
  background: #111;
  color: #fff;
  padding: 0.5rem 0.65rem;
  /* transform: rotate(-2deg); */
  border-radius: 2px;
  font-size: 0.58rem;
  letter-spacing: 0.02em;
}

.partner--abogados {
  background: #111;
  color: #fff;
  padding: 0.45rem 0.55rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.partner__ab {
  font-size: 0.72rem;
  font-weight: 900;
}

.partner__mm {
  font-size: 0.52rem;
  font-weight: 700;
  opacity: 0.9;
}

.partner--class {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 800;
  font-size: 0.65rem;
  color: #111;
}

.partner__flag {
  width: 1.1rem;
  height: 0.85rem;
  border-radius: 2px;
  background: linear-gradient(180deg, #b22234 0 36%, #fff 36% 64%, #3c3b6e 64%);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.footer__legal {
  padding: 0 0 2.75rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.office-line {
  margin: 0 0 1rem;
  line-height: 1.5;
  color: #4b5563;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  align-items: flex-start;
  justify-content: space-between;
}

.office-line__list {
  display: grid;
  gap: 0.55rem;
  flex: 1 1 18rem;
}

@media (min-width: 720px) {
  .office-line__list {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem 1.5rem;
  }
}

.office-line__item {
  margin: 0;
  display: grid;
  gap: 0.15rem;
}

.office-line__item strong {
  color: #1f2937;
  font-weight: 700;
}

.office-line__item a {
  color: #0066cc;
  text-decoration: none;
  font-weight: 600;
}

.office-line__item a:hover {
  text-decoration: underline;
}

.office-link {
  color: #0066cc;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.legal-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.fineprint {
  flex: 1 1 16rem;
  margin: 0;
  line-height: 1.65;
  min-width: min(100%, 18rem);
}

.fineprint a {
  color: #0066cc;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.privacy-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

.privacy-btn:hover {
  border-color: #9ca3af;
}

.privacy-btn__icon {
  display: grid;
  place-items: center;
}

.copyright-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.15rem;
  border-top: 1px solid #e8eaed;
  color: #6b7280;
}

.copyright-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-links a {
  color: #0066cc;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
