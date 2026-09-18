<template>
  <section class="reviews" id="testimonials">
    <div class="container">
      <h2 class="section-title center light">150,000+ Five Star Reviews</h2>
      <p class="sub center light">The reasons why clients trust For The People Clinic.</p>
      <div class="row">
        <article v-for="(item, i) in slides" :key="i" class="tile" :class="item.type">
          <template v-if="item.type === 'video'">
            <button type="button" class="vbtn" :aria-label="'Play ' + item.name">
              <img :src="item.img" alt="" width="320" height="400" loading="lazy" />
              <span class="play" />
            </button>
            <p class="cap">{{ item.name }}</p>
          </template>
          <template v-else>
            <span class="qt">“</span>
            <p class="txt">{{ item.quote }}</p>
            <div class="foot">
              <span>{{ item.name }}</span>
              <span class="stars">★★★★★</span>
            </div>
          </template>
        </article>
      </div>
      <div class="dots" aria-hidden="true"><span class="on" /><span /><span /><span /><span /></div>
      <p class="legal">
        Individual experiences vary. Based on select patient reviews.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const slides = [
  { type: 'video', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80', name: 'Client story' },
  {
    type: 'quote',
    quote:
      'They answered every question and fought when the insurance company tried to blame me. I felt heard the entire time.',
    name: 'Richard R. · Philadelphia, PA'
  },
  { type: 'video', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', name: 'Client story' }
]
</script>

<style scoped>
.reviews {
  background: var(--navy);
  color: var(--white);
  padding: 4rem 0;
}

.section-title.light {
  color: var(--white);
}

.sub {
  margin: 0 auto 2rem;
  max-width: 36rem;
  opacity: 0.9;
}

.row {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.tile {
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 280px;
}

.tile.quote {
  background: var(--white);
  color: #111;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}

.qt {
  color: var(--blue);
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
}

.txt {
  flex: 1;
  margin: 0.5rem 0 1rem;
  color: var(--gray-800);
  font-size: 0.95rem;
}

.foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
}

.stars {
  color: var(--yellow);
  letter-spacing: 1px;
}

.vbtn {
  position: relative;
  border: 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
}

.vbtn img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3.5rem;
  height: 3rem;
  border-radius: 8px;
  background: var(--yellow);
}

.play::after {
  content: '';
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: 9px 0 9px 14px;
  border-color: transparent transparent transparent #111;
}

.cap {
  margin: 0;
  padding: 0.65rem 0.75rem;
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.35);
}

.dots {
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  margin: 1.5rem 0 1rem;
}

.dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.dots .on {
  background: var(--white);
}

.legal {
  text-align: center;
  font-size: 0.65rem;
  opacity: 0.75;
  max-width: 44rem;
  margin: 0 auto;
  line-height: 1.5;
}
</style>
