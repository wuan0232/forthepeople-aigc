<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Brain Injury"
      title="Traumatic Brain Injury: Patient Recovery Guide"
      lead="Brain injuries can affect memory, mood, concentration, sleep, and physical function. This page focuses on medical monitoring and practical patient next steps."
    />

    <PracticeAreaTakeaways title="Clinical Priorities After Suspected TBI" :blocks="takeaways" />

    <PracticeAreaWaysHelp title="Common Brain Injury Patterns" :items="waysHelp" />

    <PracticeAreaClaimCopy
      heading-id="brain-followup-heading"
      title="When should I seek urgent reassessment?"
      :paragraphs="followupParagraphs"
    />

    <PracticeAreaGuidePromo
      heading-id="brain-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="If symptoms worsen or do not match expected recovery, use a structured approach: stabilize, document, review, and escalate when needed."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="brain-diff-heading"
      title="How to Reduce Missed or Delayed TBI Follow-up"
      :blocks="differenceBlocks"
    />

    <PracticeAreaInjuryTypes
      heading-id="brain-incidents-heading"
      title="Frequent Brain Injury Contexts"
      :items="incidentTypes"
    />

    <PracticeAreaLearnMore
      title="Related Reading"
      intro="Continue with patient-focused resources on symptom tracking, second opinions, and informed consent."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Brain injury patient FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { FaqItem, IconCard, LearnLink, TextBlock } from '~/types/practice-area'

useHead({
  title: 'Traumatic Brain Injury Guide | Patient Medical Next Steps',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused traumatic brain injury guidance covering urgent warning signs, symptom tracking, specialist follow-up, and practical recovery planning.',
    },
  ],
})

const takeaways: TextBlock[] = [
  {
    title: 'Symptoms can be delayed',
    text: 'Headache, confusion, memory difficulty, sleep disturbance, and mood change may evolve over days after injury.',
  },
  {
    title: 'Baseline and trend matter',
    text: 'A daily symptom log helps clinicians distinguish expected recovery from deterioration requiring intervention.',
  },
  {
    title: 'Multidisciplinary care improves outcomes',
    text: 'Neurology, rehabilitation, neuropsychology, and primary care coordination often provide better long-term recovery planning.',
  },
  {
    title: 'Documentation supports safer care',
    text: 'Keeping complete records and timeline details helps reduce repeated testing gaps and improves second-opinion quality.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Concussion and Mild TBI',
    text: 'Even mild injury can cause prolonged cognitive and sensory symptoms. Re-evaluation is important when recovery stalls.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="5"/><path d="M12 38c0-8 5-12 12-12s12 4 12 12"/><path d="M20 22h8"/></svg>`,
  },
  {
    title: 'Contusion and Hemorrhagic Injury',
    text: 'Brain bruising or bleeding can progress. New neurological findings after discharge should trigger immediate reassessment.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="22" r="10"/><path d="M18 18l6 4 6-4"/></svg>`,
  },
  {
    title: 'Diffuse Axonal Injury Patterns',
    text: 'Shear injury can present with prolonged cognitive and functional deficits requiring structured rehab and specialist follow-up.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="22" r="12"/><path d="M14 22h20M24 10v24"/></svg>`,
  },
  {
    title: 'Anoxic/Hypoxic Brain Injury',
    text: 'Oxygen-deprivation injury may affect memory, executive function, and motor recovery; long-term monitoring is often needed.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><path d="M24 14v6M20 24h8"/></svg>`,
  },
]

const followupParagraphs = [
  'Seek urgent care for worsening headache, repeated vomiting, confusion, seizure, new weakness, speech changes, or reduced consciousness.',
  'If recovery is slower than expected, request reassessment and ask whether repeat imaging or specialist referral is indicated.',
  'Track daily symptoms, medications, sleep changes, and functional impact. This improves clinical interpretation over time.',
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Do not rely on one-time symptom checks',
    text: 'TBI symptoms can change after discharge. Scheduled follow-up and symptom trend review reduce missed deterioration.',
  },
  {
    title: 'Keep objective records',
    text: 'Timeline documentation of symptom progression, tests, and treatment changes helps clinicians reconcile conflicting impressions.',
  },
  {
    title: 'Use specialist input early when needed',
    text: 'Persistent cognitive, behavioral, or neurologic changes may need neurology or neuropsychology review rather than watchful waiting alone.',
  },
]

const incidentTypes: TextBlock[] = [
  {
    title: 'Traffic collisions',
    text: 'Acceleration-deceleration and blunt impact can cause concussion through severe TBI and require staged follow-up.',
  },
  {
    title: 'Falls',
    text: 'Falls in older adults and workplace settings are major causes of intracranial injury and delayed neurological decline.',
  },
  {
    title: 'Sports and recreation',
    text: 'Return-to-play decisions should be medically supervised to reduce risk of repeat injury and prolonged symptoms.',
  },
  {
    title: 'Peri-procedural oxygen or circulation events',
    text: 'Anoxic/hypoxic injury risk in medical settings requires careful longitudinal cognitive and neurological follow-up.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Medical Malpractice vs Medical Dispute', href: '/blog/posts/medical-malpractice-vs-medical-dispute' },
  { title: 'How to Build a Complete Medical Timeline', href: '/blog/posts/how-to-build-a-complete-medical-timeline' },
]

const learnRight: LearnLink[] = [
  { title: 'Second Medical Opinion: Patient Checklist', href: '/blog/posts/second-medical-opinion-patient-checklist' },
  { title: 'Informed Consent: What to Check Before You Sign', href: '/blog/posts/informed-consent-what-to-check-before-you-sign' },
]

const faqAside = [
  'What should I do first after a suspected TBI?',
  'Which symptoms need urgent care?',
  'Can symptoms appear later?',
  'When should I request a second opinion?',
  'What records should I keep?',
  'How can families support recovery?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do first after a suspected traumatic brain injury?',
    paragraphs: [
      'Seek immediate medical assessment, then follow discharge instructions closely while tracking symptom progression day by day.',
    ],
  },
  {
    q: 'Which symptoms require urgent reassessment?',
    paragraphs: [
      'Worsening headache, repeated vomiting, confusion, seizure, speech changes, new weakness, or reduced alertness require urgent care.',
    ],
  },
  {
    q: 'Can TBI symptoms appear days or weeks later?',
    paragraphs: [
      'Yes. Delayed cognitive, mood, sleep, and balance symptoms are common, which is why structured follow-up is important.',
    ],
  },
  {
    q: 'When should I request a second medical opinion?',
    paragraphs: [
      'Request one when symptoms persist despite treatment, diagnosis remains unclear, or recommendations differ significantly between clinicians.',
    ],
  },
  {
    q: 'What records are most useful for follow-up?',
    paragraphs: [
      'Keep ER notes, imaging reports, discharge instructions, medication history, therapy plans, and a daily symptom timeline.',
    ],
  },
  {
    q: 'How can caregivers support recovery?',
    paragraphs: [
      'Caregivers can help monitor symptom trends, medication adherence, appointment continuity, and functional changes at home and work.',
    ],
  },
]
</script>
