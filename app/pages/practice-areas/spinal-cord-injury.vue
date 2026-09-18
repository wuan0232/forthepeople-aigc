<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Spinal Cord Injury"
      title="Spinal Cord Injury: Patient Recovery Guide"
      lead="A spinal cord injury can change mobility, sensation, and daily function. This page focuses on early warning signs, clinical follow-up, and practical next steps for patients and families."
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="sci-priority-heading"
      title="What Should Happen First After SCI?"
      :blocks="priorityBlocks"
    />

    <PracticeAreaWaysHelp title="Common SCI Presentations" :items="waysHelp" />

    <PracticeAreaClaimCopy
      heading-id="sci-followup-heading"
      title="When should I seek urgent re-evaluation?"
      :paragraphs="followupParagraphs"
    />

    <PracticeAreaLawsuit
      title="Three essentials for safer SCI follow-up"
      :requirements="['Clinical stability', 'Complete records', 'Specialist review']"
    />

    <PracticeAreaGuidePromo
      heading-id="sci-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="If you suspect delayed diagnosis, poor post-op monitoring, or avoidable deterioration, follow a structured medical checklist before escalation."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <PracticeAreaInjuryTypes
      heading-id="sci-causes-heading"
      title="Frequent SCI Risk Contexts"
      :items="commonContexts"
    />

    <PracticeAreaLearnMore
      title="Related Reading"
      intro="Continue with patient-focused guidance on records, second opinions, and recovery planning."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Spinal cord injury patient FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { FaqItem, IconCard, LearnLink, TextBlock } from '~/types/practice-area'

useHead({
  title: 'Spinal Cord Injury Guide | Patient Medical Next Steps',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused spinal cord injury guidance covering urgent re-evaluation signs, specialist follow-up, record organization, and long-term recovery planning.',
    },
  ],
})

const priorityBlocks: TextBlock[] = [
  {
    title: 'Stabilize First',
    text: 'Emergency symptoms such as breathing changes, rapidly worsening weakness, or new bowel/bladder dysfunction require urgent medical care before any administrative steps.',
  },
  {
    title: 'Track Neurological Changes',
    text: 'Small changes in sensation, strength, gait, or pain pattern can indicate progression. Daily symptom tracking improves clinical decision quality.',
  },
  {
    title: 'Preserve Complete Records',
    text: 'Keep imaging reports, operative notes, rehab plans, medication history, and discharge instructions together in a timeline.',
  },
  {
    title: 'Get the Right Specialist Review',
    text: 'Neurosurgery, spine, rehabilitation medicine, and neurology input may all matter depending on level and mechanism of injury.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Complete SCI',
    text: 'Complete injuries often involve major long-term mobility and care needs. Early rehab planning and multidisciplinary follow-up are critical.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="12" r="4"/><path d="M12 38c0-6 4-10 8-10s8 4 8 10"/><circle cx="34" cy="28" r="5"/><path d="M34 33v8M30 37h8"/></svg>`,
  },
  {
    title: 'Incomplete SCI',
    text: 'Incomplete injuries can evolve over time. Ongoing neurological assessment helps identify improvement opportunities and red flags.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="10" r="4"/><path d="M16 38c0-8 4-14 8-14s8 6 8 14"/><path d="M20 24h8"/></svg>`,
  },
  {
    title: 'Disc and Nerve Compression Patterns',
    text: 'Herniated or ruptured discs can mimic or worsen spinal cord symptoms and may need urgent imaging review when deficits progress.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 6v36"/><ellipse cx="24" cy="16" rx="6" ry="4"/><ellipse cx="24" cy="28" rx="6" ry="4"/><ellipse cx="24" cy="40" rx="6" ry="4"/></svg>`,
  },
]

const followupParagraphs = [
  'Seek urgent re-evaluation if you notice new limb weakness, increasing numbness, severe progressive pain, fever after spinal procedures, or loss of bladder/bowel control.',
  'If symptoms do not match the expected recovery plan, request reassessment and ask whether repeat imaging or specialist consultation is needed.',
  'Use a written timeline to document symptom progression, medication changes, and follow-up recommendations. This helps clinicians make faster, safer decisions.',
]

const commonContexts: TextBlock[] = [
  {
    title: 'Motor Vehicle Trauma',
    text: 'High-energy crashes can cause fractures, instability, and cord compression requiring staged clinical follow-up.',
  },
  {
    title: 'Falls and Workplace Incidents',
    text: 'Falls from height and industrial trauma are major SCI causes. Early rehabilitation referral can affect long-term outcomes.',
  },
  {
    title: 'Post-operative Complications',
    text: 'Delayed recognition of bleeding, infection, or hardware-related issues may worsen neurologic status if not re-evaluated promptly.',
  },
  {
    title: 'Sports and Recreation',
    text: 'Impact and hyperextension injuries may present with delayed neurological deficits, so return-to-activity decisions should be medically supervised.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'How to Build a Complete Medical Timeline', href: '/blog/posts/how-to-build-a-complete-medical-timeline' },
  { title: 'Second Medical Opinion: Patient Checklist', href: '/blog/posts/second-medical-opinion-patient-checklist' },
  { title: 'Medical Malpractice vs Medical Dispute', href: '/blog/posts/medical-malpractice-vs-medical-dispute' },
]

const learnRight: LearnLink[] = [
  { title: 'What to Do After a Suspected Medical Error', href: '/medical/what-to-do' },
  { title: 'Medical Malpractice Resource Hub', href: '/practice-areas/medical-malpractice' },
  { title: 'Medical Malpractice Articles', href: '/blog/medical-malpractice' },
]

const faqAside = [
  'What should I do first after a suspected SCI?',
  'When does SCI need urgent reassessment?',
  'Which records should I keep?',
  'When should I seek a second opinion?',
  'How do I plan long-term recovery?',
  'Can post-op problems present late?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do first after a suspected spinal cord injury?',
    paragraphs: [
      'Prioritize emergency care and stabilization. Then gather records, clarify follow-up milestones, and track neurological symptoms daily.',
    ],
  },
  {
    q: 'When does SCI require urgent reassessment?',
    paragraphs: [
      'Urgent reassessment is needed for new weakness, progressive numbness, severe pain escalation, fever after procedures, or new bladder/bowel dysfunction.',
    ],
  },
  {
    q: 'Which records matter most for follow-up?',
    paragraphs: [
      'Keep imaging reports, operative notes, discharge summaries, medication changes, rehab evaluations, and clinic follow-up instructions in one timeline.',
    ],
  },
  {
    q: 'When should I request a second specialist opinion?',
    paragraphs: [
      'Request one when diagnosis is unclear, symptoms worsen despite treatment, or recommended interventions differ significantly across teams.',
    ],
  },
  {
    q: 'How should families support long-term SCI recovery?',
    paragraphs: [
      'Coordinate rehabilitation, mobility planning, home modifications, mental-health support, and regular specialist review in a written care plan.',
    ],
  },
  {
    q: 'Can spinal complications appear days or weeks later?',
    paragraphs: [
      'Yes. Delayed neurologic changes and post-op complications can emerge later, which is why ongoing monitoring and timely reassessment are essential.',
    ],
  },
]
</script>
