<template>
  <PracticeAreaPage class="ca-dangerous-drugs-page">
    <PracticeAreaHero
      breadcrumb-label="Depo-Provera"
      title="Depo-Provera: Patient Safety & Follow-Up Guide"
      lead="If you used Depo-Provera and later developed neurological symptoms or a brain tumor diagnosis, this guide helps you prioritize medical care, document injection history, and plan safer follow-up."
      :breadcrumb-items="breadcrumbItems"
    />

    <PracticeAreaDifference
      heading-id="depo-priority-heading"
      title="Clinical Priorities After Depo-Provera Concerns"
      :blocks="priorityBlocks"
    />

    <PracticeAreaWaysHelp title="Common Concern Patterns" :items="concernPatterns" />

    <PracticeAreaClaimCopy
      heading-id="depo-next-steps-heading"
      title="What should I do if I notice new neurological symptoms?"
      :paragraphs="nextStepParagraphs"
    />

    <PracticeAreaGuidePromo
      heading-id="depo-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="When symptoms and contraceptive history do not align, follow a structured process to stabilize, document, and seek appropriate specialist review."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <PracticeAreaInjuryTypes
      heading-id="depo-context-heading"
      title="Documentation Essentials for Clinical Review"
      :items="documentationEssentials"
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
      region-label="Depo-Provera patient safety FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { FaqItem, IconCard, LearnLink, PracticeAreaBreadcrumbItem, TextBlock } from '~/types/practice-area'

useHead({
  title: 'Depo-Provera Patient Guide | Meningioma & Neurological Follow-Up',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused Depo-Provera guidance covering meningioma concerns, neurological warning signs, injection history documentation, and specialist follow-up planning.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Injury Recovery Guides', to: '/injury-recovery-guides' },
  { label: 'Dangerous Drugs', to: '/practice-areas/dangerous-drugs' },
  { label: 'Depo-Provera', strong: true },
]

const priorityBlocks: TextBlock[] = [
  {
    title: 'Stabilize neurological symptoms first',
    text: 'New headaches, vision changes, seizures, weakness, or confusion require urgent medical evaluation before any administrative steps.',
  },
  {
    title: 'Reconstruct your injection timeline',
    text: 'Record approximate start date, injection frequency, total duration of use, and any gaps. Clinicians need this sequence to assess exposure patterns.',
  },
  {
    title: 'Preserve imaging and pathology records',
    text: 'Keep MRI or CT reports, biopsy or pathology results, operative notes, and follow-up plans together in chronological order.',
  },
  {
    title: 'Seek neurology or neurosurgery review',
    text: 'Brain tumor concerns often require specialist interpretation of imaging, symptom progression, and treatment options.',
  },
]

const concernPatterns: IconCard[] = [
  {
    title: 'Long-term injectable use',
    text: 'Patients who received Depo-Provera injections over many months or years may need closer neurological follow-up when new symptoms appear.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8v24M14 14h12M12 28h16"/><rect x="16" y="4" width="8" height="6" rx="1"/></svg>`,
  },
  {
    title: 'New or worsening headaches',
    text: 'Persistent or changing headache patterns, especially with vision changes or balance problems, should be evaluated promptly.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="18" r="10"/><path d="M12 30c2-4 6-6 8-6s6 2 8 6"/></svg>`,
  },
  {
    title: 'Meningioma or brain tumor diagnosis',
    text: 'If imaging reveals a meningioma or other intracranial lesion, organize records and ask how timing of symptoms relates to contraceptive history.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 30V14l10-6 10 6v16"/><path d="M16 30V22h8v8"/><path d="M14 18h12"/></svg>`,
  },
]

const nextStepParagraphs = [
  'Seek urgent care for sudden severe headache, new seizures, vision loss, weakness on one side, confusion, or rapidly worsening balance.',
  'Gather pharmacy records, clinic injection logs, and any patient portal messages showing Depo-Provera administration dates.',
  'Ask your clinician whether repeat imaging, neurosurgical consultation, or hormone-related review is appropriate given your symptom timeline.',
]

const documentationEssentials: TextBlock[] = [
  {
    title: 'Injection administration history',
    text: 'Clinic visit dates, pharmacy dispensing records, and any documented dose intervals help establish exposure duration.',
  },
  {
    title: 'Neuroimaging reports',
    text: 'MRI or CT findings, radiology impressions, and comparison scans over time support specialist assessment.',
  },
  {
    title: 'Symptom chronology',
    text: 'A dated log of headache onset, vision changes, cognitive symptoms, or other neurological complaints improves review quality.',
  },
  {
    title: 'Treatment and follow-up plans',
    text: 'Surgical notes, surveillance schedules, medication changes, and rehabilitation plans should be kept with imaging records.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Medication Safety Resource Guide', href: '/practice-areas/dangerous-drugs' },
  { title: 'How to Build a Complete Medical Timeline', href: '/blog/posts/how-to-build-a-complete-medical-timeline' },
]

const learnRight: LearnLink[] = [
  { title: 'Second Medical Opinion: Patient Checklist', href: '/blog/posts/second-medical-opinion-patient-checklist' },
  { title: 'Medical Malpractice Resource Hub', href: '/practice-areas/medical-malpractice' },
]

const faqAside = [
  'What is Depo-Provera?',
  'What health concerns have been reported?',
  'What symptoms need urgent evaluation?',
  'How do I document my injection history?',
  'Can symptoms appear after stopping Depo-Provera?',
  'What records help specialist review?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What is Depo-Provera?',
    paragraphs: [
      'Depo-Provera is an injectable contraceptive containing medroxyprogesterone acetate, typically administered every three months. It has been widely used for decades.',
    ],
  },
  {
    q: 'What health concerns have been reported with long-term use?',
    paragraphs: [
      'Research and patient reports have raised questions about prolonged Depo-Provera use and certain brain tumors, including meningioma. If you have new neurological symptoms, discuss them with a clinician promptly.',
    ],
  },
  {
    q: 'What neurological symptoms need urgent medical evaluation?',
    paragraphs: [
      'Sudden severe headache, new seizures, vision changes, one-sided weakness, speech difficulty, confusion, or rapidly worsening balance problems require urgent care.',
    ],
  },
  {
    q: 'How should I document my Depo-Provera injection history?',
    paragraphs: [
      'Collect clinic records, pharmacy printouts, and portal messages showing injection dates. Note start date, approximate number of injections, and when you stopped.',
    ],
  },
  {
    q: 'Can symptoms appear after I stop using Depo-Provera?',
    paragraphs: [
      'Yes. Some conditions may be diagnosed after stopping injections. Keep documenting symptoms and imaging results regardless of current contraceptive status.',
    ],
  },
  {
    q: 'What records are most useful for specialist review?',
    paragraphs: [
      'MRI or CT reports, pathology results if available, symptom timelines, injection records, and treatment plans help clinicians assess your situation more efficiently.',
    ],
  },
  {
    q: 'Should I get a second medical opinion?',
    paragraphs: [
      'A second opinion can be valuable when diagnosis, treatment approach, or the relationship between symptoms and medication history is unclear. Bring complete records and a written timeline.',
    ],
  },
  {
    q: 'What should I do first if I suspect a medication-related problem?',
    paragraphs: [
      'Prioritize immediate safety and clinical stability. Then organize records and follow the 5-step medical action guide before any formal escalation.',
    ],
  },
]
</script>
