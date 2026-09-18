<template>
  <PracticeAreaPage>
    <section class="plan-hero">
      <div class="container plan-hero__inner">
        <SiteBreadcrumb
          separator="/"
          :items="[
            { label: 'Home', to: '/' },
          { label: 'Recovery Checklist', strong: true },
          ]"
        />
        <p class="plan-hero__eyebrow">PUBLIC SELF-GUIDED TOOL</p>
        <h1>Your Recovery Checklist</h1>
        <p class="plan-hero__lead">
          This checklist is matched to your selected context and timing. It is educational guidance—not
          a diagnosis—and no personal information was collected or stored.
        </p>
        <p class="plan-hero__note">
          <strong>Selected:</strong> {{ contextLabel }} · {{ timingLabel }} · {{ worseningLabel }}
        </p>
      </div>
    </section>

    <section class="plan-priority" :class="`plan-priority--${presentation.priority}`" aria-live="polite">
      <div class="container">
        <p class="plan-priority__label">{{ priorityLabel }}</p>
        <p class="plan-priority__message">{{ presentation.message }}</p>
      </div>
    </section>

    <section class="ca-block ca-block--soft" aria-labelledby="plan-context-heading">
      <div class="container plan-context">
        <h2 id="plan-context-heading" class="ca-h2">Your selected recovery path</h2>
        <p class="plan-context__label">{{ plan.contextLabel }}</p>
        <p class="plan-context__focus">{{ plan.focusNote }}</p>
        <div class="plan-context__links">
          <NuxtLink :to="plan.recoveryGuideHref" class="link-arrow">Open injury recovery guide</NuxtLink>
          <NuxtLink :to="plan.actionGuideHref" class="link-arrow">Open 5-step action guide</NuxtLink>
        </div>
      </div>
    </section>

    <section class="ca-block ca-block--white" aria-labelledby="plan-red-flags-heading">
      <div class="container">
        <h2 id="plan-red-flags-heading" class="ca-h2">{{ redFlagHeading }}</h2>
        <ul class="plan-list plan-list--alert">
          <li v-for="item in plan.redFlags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section
      v-for="(section, sectionIndex) in actionSections"
      :key="section.id"
      class="ca-block"
      :class="sectionIndex % 2 === 0 ? 'ca-block--soft' : 'ca-block--white'"
      :aria-labelledby="`${section.id}-heading`"
    >
      <div class="container plan-checklist">
        <h2 :id="`${section.id}-heading`" class="ca-h2">{{ section.title }}</h2>
        <ul class="plan-list">
          <li v-for="(item, index) in section.items" :key="item">
            <span class="plan-step-number">{{ index + 1 }}</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="ca-block ca-block--soft plan-next" aria-labelledby="plan-next-heading">
      <div class="container">
        <h2 id="plan-next-heading" class="ca-h2">Continue your plan</h2>
        <div class="plan-next__grid">
          <NuxtLink to="/about/meet-our-doctors" class="plan-next__card">
            <h3>Meet our clinicians</h3>
            <p>See who can help coordinate follow-up and specialist sequencing.</p>
          </NuxtLink>
          <NuxtLink to="/locations" class="plan-next__card">
            <h3>Visit a clinic location</h3>
            <p>Find our New York offices and book an in-person follow-up.</p>
          </NuxtLink>
          <NuxtLink to="/contact" class="plan-next__card">
            <h3>Contact the clinic</h3>
            <p>Call or message us if you need help organizing your next visit.</p>
          </NuxtLink>
        </div>
        <p class="plan-next__disclaimer">{{ MEDICAL_DISCLAIMER_SHORT }}</p>
        <NuxtLink to="/#contact" class="plan-next__restart">Choose a different path</NuxtLink>
      </div>
    </section>
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MEDICAL_DISCLAIMER_SHORT } from '~/constants/medical/disclaimer'
import {
  getMedicalIntakeOptionLabel,
  getMedicalIntakePlan,
  getChecklistPresentation,
  MEDICAL_TIMING_OPTIONS,
  MEDICAL_WORSENING_OPTIONS,
} from '~/constants/medical/intake'

const route = useRoute()
const caseType = computed(() => String(route.query.context ?? ''))
const timing = computed(() => String(route.query.timing ?? ''))
const worsening = computed(() => String(route.query.worsening ?? ''))

const plan = computed(() => getMedicalIntakePlan(caseType.value))
const presentation = computed(() => getChecklistPresentation(timing.value, worsening.value))
const contextLabel = computed(() => getMedicalIntakeOptionLabel(caseType.value))
const timingLabel = computed(
  () => MEDICAL_TIMING_OPTIONS.find((option) => option.value === timing.value)?.label ?? 'Timing not selected',
)
const worseningLabel = computed(
  () =>
    MEDICAL_WORSENING_OPTIONS.find((option) => option.value === worsening.value)?.label ??
    'Symptom status not selected',
)
const redFlagHeading = computed(() => `${plan.value.contextLabel} warning signs requiring urgent care`)
const priorityLabel = computed(() => {
  if (presentation.value.priority === 'urgent') return 'HIGHER PRIORITY: ACT NOW IF WARNING SIGNS APPLY'
  if (presentation.value.priority === 'caution') return 'USE A CAUTIOUS NEXT STEP'
  return 'RECOVERY PATHWAY GUIDANCE'
})
const actionSections = computed(() => {
  const first48h = { id: 'plan-48h', title: 'First 48 hours', items: plan.value.next48h }
  const first7d = { id: 'plan-7d', title: 'First 7 days', items: plan.value.next7d }
  return presentation.value.firstSection === '7d' ? [first7d, first48h] : [first48h, first7d]
})

useHead({
  title: 'Recovery Checklist | For The People Clinic',
  meta: [
    {
      name: 'description',
      content:
        'Personalized post-injury recovery checklist: urgent warning signs, 48-hour actions, 7-day follow-up, and links to clinic resources.',
    },
  ],
})
</script>

<style scoped>
.plan-hero {
  padding: calc(var(--header-offset, 5rem) + 2rem) 0 2rem;
  background: linear-gradient(180deg, #eaf2fc 0%, #fff 100%);
}

.plan-hero__inner {
  max-width: 44rem;
}

.plan-hero h1 {
  margin: 1rem 0 0.75rem;
  font-size: clamp(1.85rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy, #0a1f44);
}

.plan-hero__eyebrow {
  margin: 1rem 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--mm-red, #c41230);
}

.plan-hero__lead {
  margin: 0 0 1rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #334155;
}

.plan-hero__note {
  margin: 0;
  padding: 0.85rem 1rem;
  background: #f1f5f9;
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #475569;
}

.plan-context__label {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--mm-red, #c41230);
}

.plan-priority {
  padding: 1.1rem 0;
  background: #eff6ff;
  border-block: 1px solid #bfdbfe;
}

.plan-priority--urgent {
  background: #fff1f2;
  border-color: #fecdd3;
}

.plan-priority--caution {
  background: #fff8e6;
  border-color: #fde68a;
}

.plan-priority__label,
.plan-priority__message {
  margin: 0;
}

.plan-priority__label {
  margin-bottom: 0.3rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #0a1f44;
}

.plan-priority--urgent .plan-priority__label {
  color: #9f1239;
}

.plan-priority--caution .plan-priority__label {
  color: #92400e;
}

.plan-priority__message {
  max-width: 52rem;
  line-height: 1.5;
  color: #334155;
}

.plan-context__focus {
  margin: 0 0 1.25rem;
  max-width: 40rem;
  line-height: 1.6;
  color: #475569;
}

.plan-context__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}

.plan-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
  max-width: 44rem;
}

.plan-list--alert li {
  padding: 0.65rem 0.85rem;
  background: #fff5f5;
  border-left: 3px solid var(--mm-red, #c41230);
  color: #7f1d1d;
  font-weight: 600;
}

.plan-list:not(.plan-list--alert) li {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
  line-height: 1.5;
  color: #334155;
}

.plan-step-number {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 999px;
  background: var(--navy, #0a1f44);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
}

.plan-next__grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 720px) {
  .plan-next__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.plan-next__card {
  display: block;
  padding: 1.25rem;
  background: #fff;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
}

.plan-next__card:hover h3 {
  text-decoration: underline;
}

.plan-next__card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: var(--navy, #0a1f44);
}

.plan-next__card p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.45;
  color: #64748b;
}

.plan-next__disclaimer {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  color: #64748b;
  max-width: 40rem;
}

.plan-next__restart {
  display: inline-block;
  border: 1px solid #cbd5e1;
  background: transparent;
  border-radius: 6px;
  padding: 0.55rem 1rem;
  font-weight: 700;
  color: #334155;
  text-decoration: none;
}
</style>
