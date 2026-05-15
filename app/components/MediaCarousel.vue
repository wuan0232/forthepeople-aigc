<template>
  <div
    ref="stripRef"
    :class="stripClass"
    role="region"
    :aria-label="regionLabel"
    :tabindex="tabindex"
    @scroll.passive="onScroll"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <slot />
  </div>

  <div v-if="showDots" :class="dotsClass" role="tablist" :aria-label="dotsLabel">
    <button
      v-for="i in count"
      :key="`${dotKeyPrefix}-${i - 1}`"
      type="button"
      role="tab"
      :aria-selected="i - 1 === activeIndex"
      :aria-label="dotLabel(i - 1)"
      :class="dotClassList(i - 1)"
      :style="dotStyle(i - 1)"
      @click="scrollToIndex(i - 1)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { HorizontalStripMode } from '~/composables/useHorizontalStrip'

const props = withDefaults(
  defineProps<{
    count: number
    mode: HorizontalStripMode
    regionLabel: string
    dotsLabel: string
    stripClass: string
    dotsClass: string
    dotClass?: string
    activeDotClass?: string
    draggingClass: string
    dotLabelPrefix?: string
    dotLabels?: string[]
    dotKeyPrefix?: string
    dotStyleMode?: 'none' | 'dist' | 'index'
    showDots?: boolean
    tabindex?: number
  }>(),
  {
    dotClass: '',
    activeDotClass: '',
    dotLabelPrefix: 'Slide',
    dotLabels: () => [],
    dotKeyPrefix: 'dot',
    dotStyleMode: 'none',
    showDots: true,
    tabindex: 0,
  },
)

const dotCount = computed(() => Math.max(0, props.count))
const showDots = computed(() => props.showDots && dotCount.value > 0)

const { stripRef, activeIndex, scrollToIndex, onScroll, onPointerDown, onPointerMove, onPointerUp } =
  useHorizontalStrip({
    mode: props.mode,
    count: () => dotCount.value,
    draggingClass: props.draggingClass,
  })

function dotLabel(index: number) {
  return props.dotLabels[index] ?? `${props.dotLabelPrefix} ${index + 1}`
}

function dotClassList(index: number) {
  return [props.dotClass, { [props.activeDotClass]: props.activeDotClass && index === activeIndex.value }]
}

function dotStyle(index: number) {
  if (props.dotStyleMode === 'dist') return { '--dist': Math.abs(index - activeIndex.value) }
  if (props.dotStyleMode === 'index') return { '--i': index }
  return undefined
}
</script>
