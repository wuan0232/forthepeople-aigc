<template>
  <section
    class="ca-block ca-block--white"
    :class="{ 'ca-meet--centered': centered }"
    aria-labelledby="meet-lawyers-heading"
  >
    <div class="container">
      <div class="ca-meet__head" :class="{ 'ca-meet__head--center': centered }">
        <h2 :id="headingId" class="ca-h2" :class="{ 'ca-center': centered }">{{ title }}</h2>
        <p class="ca-meet__intro" :class="{ 'ca-meet__intro--center': centered }">{{ intro }}</p>
      </div>

      <MediaCarousel
        :count="lawyers.length"
        mode="proportional"
        :region-label="ariaLabel"
        dots-label="Lawyer carousel position"
        strip-class="ca-lawyer-strip"
        dots-class="ca-lawyer-dots"
        dot-class="ca-lawyer-dot"
        active-dot-class="ca-lawyer-dot--on"
        dragging-class="ca-lawyer-strip--dragging"
        :dot-labels="lawyers.map((lawyer, i) => `Slide ${i + 1}, ${lawyer.name}`)"
        dot-key-prefix="ldot"
        dot-style-mode="index"
      >
        <article v-for="lawyer in lawyers" :key="lawyer.name" class="ca-lawyer-card">
          <div class="ca-lawyer-card__photo">
            <img :src="lawyer.img" :alt="lawyer.name" width="200" height="260" loading="lazy" draggable="false" />
          </div>
          <p class="ca-lawyer-card__name">{{ lawyer.name }}</p>
        </article>
      </MediaCarousel>

      <p class="ca-disclaimer ca-disclaimer--center">
        The attorneys shown in these photos may not be licensed in your state. To find an attorney licensed in your
        area, please visit our attorney page.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PracticeAreaMeetProps } from '~/types/practice-area'

const props = withDefaults(defineProps<PracticeAreaMeetProps>(), {
  headingId: 'meet-lawyers-heading',
  centered: false,
})

</script>
