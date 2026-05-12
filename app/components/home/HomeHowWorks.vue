<template>
  <section class="how section-pad" id="how">
    <div class="how-align">
      <h2 class="how__title">How It Works</h2>
      <p class="how__lead">
        Unsure what to do next? With 35 years of experience, our personal injury lawyers will guide you
        every step of the way.
      </p>

      <div class="steps">
        <article v-for="s in steps" :key="s.n" class="step">
          <div class="step__visual">
            <img
              v-if="s.imageSrc"
              class="step__img"
              :src="s.imageSrc"
              :alt="s.imageAlt ?? ''"
              loading="lazy"
              decoding="async"
            />
            <div
              v-else
              class="step__visual-placeholder"
              role="img"
              :aria-label="s.placeholderLabel ?? 'Illustration'"
            />
          </div>
          <div class="step__body">
            <span class="step__num">{{ s.n }}</span>
            <h3 class="step__heading">{{ s.title }}</h3>
            <p class="step__text">{{ s.text }}</p>
            <a :href="s.href" class="link-arrow step__cta">
              {{ s.cta }}
              <span class="icon-box">
                <svg viewBox="0 0 12 12"><path d="M2 10L10 2M10 2H4M10 2V8" /></svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Step = {
  n: string
  title: string
  text: string
  cta: string
  href: string
  /** 填入 `public/` 下路径即可显示图；留空则显示浅蓝占位区 */
  imageSrc?: string
  imageAlt?: string
  placeholderLabel?: string
}

const steps: Step[] = [
  {
    n: '1',
    title: 'CONTACT US 24/7 - IT\'S FREE',
    text:
      'Start with a free, no-obligation case evaluation online, by phone, or via text. Tell us your story—we\'re here to listen.',
    cta: 'Start your claim',
    href: '#contact',
    placeholderLabel: 'Step 1 — contact channels illustration'
  },
  {
    n: '2',
    title: 'MEET YOUR DEDICATED ATTORNEY',
    text:
      'Once your case qualifies, we\'ll pair you with a lawyer and a supportive team. They\'ll handle everything, keep you informed, and answer all your questions.',
    cta: 'Meet the attorneys',
    href: '#attorneys',
    placeholderLabel: 'Step 2 — your legal team illustration'
  },
  {
    n: '3',
    title: 'WE FIGHT FOR MORE',
    text:
      'Your legal team will build a strong case, negotiate with insurance companies, and pursue the maximum results you deserve.',
    cta: 'Learn more about the case process',
    href: '#results',
    placeholderLabel: 'Step 3 — case building illustration'
  }
]
</script>

<style scoped>
.how-align {
  box-sizing: border-box;
  width: var(--container);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.how__title {
  margin: 1 0 1rem;
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-800);
}

.how__lead {
  margin: 0 auto 2.5rem;
  max-width: 46rem;
  text-align: center;
  color: var(--gray-500);
  line-height: 1.55;
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
}

.steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: grid;
  border: 1px solid #e5e7eb;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
}

@media (min-width: 900px) {
  .step {
    grid-template-columns: 1fr 1fr;
  }
}

.step__visual {
  position: relative;
  background: #f3f8ff;
  min-height: clamp(14rem, 28vw, 22rem);
}

.step__img {
  width: 100%;
  height: 100%;
  min-height: clamp(14rem, 28vw, 22rem);
  object-fit: cover;
  display: block;
}

.step__visual-placeholder {
  width: 100%;
  min-height: clamp(14rem, 28vw, 22rem);
  height: 100%;
  background: #f3f8ff;
}

.step__body {
  padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.25rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.step__num {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: #dbeafe;
  color: var(--blue);
  font-weight: 800;
  font-size: 0.95rem;
  margin-bottom: 0.85rem;
  flex-shrink: 0;
}

.step__heading {
  margin: 0 0 0.85rem;
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--navy);
}

.step__text {
  margin: 0 0 1.25rem;
  color: var(--gray-500);
  font-size: clamp(0.95rem, 1.4vw, 1rem);
  line-height: 1.6;
}

.step__cta {
  margin-top: auto;
  font-weight: 700;
}
</style>
