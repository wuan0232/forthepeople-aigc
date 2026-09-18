<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Dangerous Drugs"
      title="Medication Safety & Drug Harm Resource Guide"
      lead="If a medication causes unexpected or severe harm, this guide helps patients act quickly: get care, document exposure, and organize follow-up safely."
    />

    <PracticeAreaTakeaways title="Medication Safety Priorities" :blocks="takeaways" />

    <PracticeAreaWaysHelp title="Common Drug Harm Patterns" :items="waysHelp" />

    <PracticeAreaClaimCopy
      heading-id="drug-next-steps-heading"
      title="What should I do after a suspected drug-related injury?"
      :paragraphs="nextStepParagraphs"
    />

    <PracticeAreaGuidePromo
      heading-id="drug-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="When symptoms and medication history do not align, use a structured process to protect health and improve clinical review quality."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <PracticeAreaInjuryTypes
      heading-id="drug-context-heading"
      title="Medication Risk Contexts"
      :items="contextTypes"
    />

    <PracticeAreaLearnMore
      title="Related Reading"
      intro="Continue with patient-focused medication safety and medical review resources."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Medication safety patient FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { FaqItem, IconCard, LearnLink, TextBlock } from '~/types/practice-area'

useHead({
  title: 'Medication Safety Guide | Patient Next Steps After Drug Harm',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused guidance for suspected drug harm, including urgent symptom response, medication timeline documentation, and specialist follow-up planning.',
    },
  ],
})

const takeaways: TextBlock[] = [
  {
    title: 'Safety before conclusions',
    text: 'Urgent symptoms need immediate medical care first. Clinical stabilization is always more important than attribution in the first phase.',
  },
  {
    title: 'Medication timelines matter',
    text: 'Document start dates, dose changes, stop dates, and symptom onset timing. Sequence quality often determines review quality.',
  },
  {
    title: 'Bring complete evidence to follow-up',
    text: 'Keep packaging, prescription labels, pharmacy records, and test results for clinicians reviewing causation possibilities.',
  },
  {
    title: 'Use specialist review when needed',
    text: 'Complex adverse-effect patterns may require toxicology, neurology, endocrinology, or other specialty input.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Dose and administration errors',
    text: 'Wrong dose, route, or schedule can lead to preventable harm and should be reviewed urgently when serious symptoms appear.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="10" width="20" height="28" rx="3"/><path d="M18 18h12M24 10v8"/></svg>`,
  },
  {
    title: 'Unrecognized interactions',
    text: 'Multi-drug regimens can produce severe interactions if contraindications are missed or not monitored.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 24h20M24 14v20"/><circle cx="24" cy="24" r="12"/></svg>`,
  },
  {
    title: 'Unexpected severe adverse effects',
    text: 'When severe symptoms occur after medication exposure, rapid reassessment and documentation are essential for safer care.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8l14 26H10L24 8z"/><path d="M24 18v8M24 30h.01"/></svg>`,
  },
]

const nextStepParagraphs = [
  'Seek urgent care for severe allergic reaction, breathing difficulty, chest pain, confusion, uncontrolled vomiting, or new neurological symptoms.',
  'Keep medication packaging, prescription details, pharmacy receipts, and a symptom timeline with date/time entries.',
  'Ask for medication reconciliation and specialist follow-up when symptoms and expected side-effect profile do not match.',
]

const contextTypes: TextBlock[] = [
  {
    title: 'New medication starts',
    text: 'Early exposure periods often reveal intolerance, interaction issues, or contraindication concerns that need prompt review.',
  },
  {
    title: 'Dose escalation periods',
    text: 'Symptom changes after dose increase should be documented carefully and discussed with prescribing clinicians.',
  },
  {
    title: 'Polypharmacy and chronic disease care',
    text: 'Patients on multiple medications may face compounded adverse-effect risk and need coordinated medication reconciliation.',
  },
  {
    title: 'Post-discharge transitions',
    text: 'Medication list discrepancies after hospitalization can create preventable safety gaps without timely follow-up.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Medication Error vs Side Effect: How to Tell', href: '/blog/medical-malpractice' },
  { title: 'How to Build a Complete Medical Timeline', href: '/blog/posts/how-to-build-a-complete-medical-timeline' },
]

const learnRight: LearnLink[] = [
  { title: 'Second Medical Opinion: Patient Checklist', href: '/blog/posts/second-medical-opinion-patient-checklist' },
  { title: 'Medical Malpractice Resource Hub', href: '/practice-areas/medical-malpractice' },
]

const faqAside = [
  'What should I do first after suspected drug harm?',
  'Which symptoms are emergencies?',
  'What medication records should I preserve?',
  'When should I request specialist review?',
  'How do I track medication timeline accurately?',
  'Can adverse effects appear late?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do first after suspected medication-related harm?',
    paragraphs: [
      'Get urgent care for severe symptoms first, then preserve medication records and timeline details for follow-up review.',
    ],
  },
  {
    q: 'Which medication-related symptoms require emergency care?',
    paragraphs: [
      'Breathing difficulty, severe rash/swelling, chest pain, confusion, seizures, persistent vomiting, or sudden neurological changes require urgent evaluation.',
    ],
  },
  {
    q: 'What records should I preserve?',
    paragraphs: [
      'Keep pill bottles, package inserts, prescription labels, pharmacy printouts, dose change history, and symptom logs.',
    ],
  },
  {
    q: 'When should I request specialist reassessment?',
    paragraphs: [
      'Request one when symptoms are severe, persistent, atypical, or inconsistent with expected side effects, especially in complex medication regimens.',
    ],
  },
  {
    q: 'How should I build a useful medication timeline?',
    paragraphs: [
      'Record exact start/stop dates, dose changes, co-medications, and symptom onset timing in chronological order.',
    ],
  },
  {
    q: 'Can medication adverse effects appear days or weeks later?',
    paragraphs: [
      'Yes. Some reactions are delayed, especially with accumulation, interaction effects, or organ-specific toxicity patterns.',
    ],
  },
]
</script>
