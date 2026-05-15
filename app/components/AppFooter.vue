<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <div class="logo-box" aria-label="Morgan and Morgan">
          <span class="logo-box__main">MORGAN &amp; MORGAN</span>
          <span class="logo-box__sub">AMERICA'S LARGEST INJURY LAW FIRM</span>
        </div>
        <p class="footer__lead">
          After 35 years, Morgan &amp; Morgan remains a family firm dedicated to fighting for the
          average American family.
        </p>
        <div class="footer__stars">
          <span class="stars" aria-hidden="true">★★★★★</span>
          <a href="#testimonials">100k+ 5-Star Reviews</a>
        </div>
      </div>

      <nav class="footer__col" aria-label="M and M">
        <h3 class="footer__heading">M&amp;M</h3>
        <ul>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#practice">Practice Areas</a></li>
          <li><NuxtLink to="/our-results">Our Results</NuxtLink></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <nav class="footer__col" aria-label="About">
        <h3 class="footer__heading">About</h3>
        <ul>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#contact">The Fee is Free®</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#media">In the Media</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
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
          <h3 class="footer__heading">Social</h3>
          <div class="social">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="social__btn" :aria-label="s.label">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path :d="s.path" />
              </svg>
            </a>
          </div>
        </div>
        <div class="aside-block">
          <h3 class="footer__heading">App Stores</h3>
          <div class="store-badges">
            <a class="store-btn store-btn--apple" href="#" aria-label="Download on the App Store">
              <span class="store-btn__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.17 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.65 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                  />
                </svg>
              </span>
              <span class="store-btn__text">
                <span class="store-btn__small">Download on the</span>
                <span class="store-btn__large">App Store</span>
              </span>
            </a>
            <a class="store-btn store-btn--google" href="#" aria-label="Get it on Google Play">
              <span class="store-btn__gicon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#EA4335" d="M3.6 3.05l11.35 6.55-2.6 2.6L3.6 3.05z" />
                  <path fill="#FBBC04" d="M3.6 20.95l8.75-8.75 2.6 2.6L3.6 20.95z" />
                  <path fill="#34A853" d="M22.4 12L15 16.9l-2.65-2.65L15 11.6l7.4 4.4z" />
                  <path fill="#4285F4" d="M3.6 3.05L12.35 12 3.6 20.95V3.05z" />
                </svg>
              </span>
              <span class="store-btn__text">
                <span class="store-btn__small store-btn__small--caps">GET IT ON</span>
                <span class="store-btn__large">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__partners-wrap container">
      <div class="footer__partner-rail" role="list">
        <div class="partner partner--outlined" role="listitem">
          <span class="partner__line">Morgan &amp; Morgan</span>
          <span class="partner__sub">The Morgan Connection</span>
        </div>
        <div class="partner partner--bold" role="listitem">
          Morgan &amp; Morgan<br />Business Trial Group
        </div>
        <div class="partner partner--tilt" role="listitem">The Whistleblower Attorneys</div>
        <div class="partner partner--abogados" role="listitem">
          <span class="partner__ab">Abogados.com</span>
          <span class="partner__mm">Morgan &amp; Morgan</span>
        </div>
        <div class="partner partner--class" role="listitem">
          <span class="partner__flag" aria-hidden="true" />
          <span>ClassAction.com</span>
        </div>
      </div>
    </div>

    <div class="footer__legal container">
      <p class="office-line">
        <span>20 N. Orange Ave., Suite 1600, Orlando, FL 32801</span>
        <a href="#locations" class="office-link">Office Locations</a>
      </p>
      <div class="legal-row">
        <p class="fineprint">
          If you are vision-impaired or have some other impairment covered by the Americans with
          Disabilities Act or a similar law, and you wish to discuss potential accommodations
          related to using this website, please contact us at
          <a href="tel:+18448278082">(844) 827-8082</a> or
          <a href="mailto:ada@morganandmorgan.com">ada@morganandmorgan.com</a>. Attorney Advertising.
          Prior results do not guarantee a similar outcome. Not licensed to practice in all states.
          Communication through this website may not constitute the formation of an
          attorney-client relationship.
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
        <span>© {{ year }} Morgan and Morgan, P.A. All rights reserved</span>
        <span class="copyright-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Disclaimers and Terms of Use</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  {
    label: 'X',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  }
]
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
  border-radius: 6px;
  background: #e8eaed;
  color: #374151;
  display: grid;
  place-items: center;
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
  gap: 0.35rem 0.65rem;
  align-items: baseline;
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
