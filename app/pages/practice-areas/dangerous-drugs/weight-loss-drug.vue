<template>
  <PracticeAreaPage class="ca-dangerous-drugs-page">
    <PracticeAreaHero
      breadcrumb-label="Weight Loss Drug"
      title="GLP-1 & Weight Loss Medications: Patient Safety Guide"
      lead="If you took a GLP-1 or weight loss medication and developed severe gastrointestinal or neurological symptoms, this guide helps you respond safely, document exposure, and plan clinical follow-up."
      :breadcrumb-items="breadcrumbItems"
    />

    <PracticeAreaTakeaways title="Medication Safety Priorities" :blocks="takeaways" />

    <PracticeAreaWaysHelp title="Common Adverse-Effect Patterns" :items="adversePatterns" />

    <PracticeAreaCardGrid heading-id="wld-meds-heading" title="Frequently Discussed Medications" :items="medicationCards">
      <template #after-grid>
        <div class="wl-med-panel">
          <div class="wl-med-panel__head">
            <p class="wl-med-panel__title">GLP-1 and related weight management drugs often discussed in patient safety reviews:</p>
          </div>
          <div class="wl-med-panel__grid">
            <p v-for="med in popularMeds" :key="med" class="wl-med-panel__item">
              <span class="wl-med-panel__check" aria-hidden="true">✓</span>
              {{ med }}
            </p>
          </div>
        </div>
      </template>
    </PracticeAreaCardGrid>

    <PracticeAreaClaimCopy
      heading-id="wld-next-steps-heading"
      title="What should I do after severe medication side effects?"
      :paragraphs="nextStepParagraphs"
    />

    <PracticeAreaGuidePromo
      heading-id="wld-guide-heading"
      title="Use the 5-Step Medical Action Guide"
      description="When symptoms exceed expected mild side effects, use a structured process to stabilize, document medication history, and seek appropriate specialist review."
      link-label="Open the guide"
      link-href="/medical/what-to-do"
    />

    <PracticeAreaInjuryTypes
      heading-id="wld-injuries-heading"
      title="Symptoms That May Need Urgent Reassessment"
      :items="urgentSymptoms"
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
      region-label="Weight loss medication patient safety FAQs"
      :reviewed-by="{ name: 'Medical Education Editorial Team', date: 'July 2026' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { FaqItem, IconCard, LearnLink, PracticeAreaBreadcrumbItem, TextBlock } from '~/types/practice-area'

useHead({
  title: 'GLP-1 & Weight Loss Drug Safety Guide | Patient Next Steps',
  meta: [
    {
      name: 'description',
      content:
        'Patient-focused guidance for GLP-1 and weight loss medications, including gastroparesis warning signs, vision changes, medication timeline documentation, and specialist follow-up.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Injury Recovery Guides', to: '/injury-recovery-guides' },
  { label: 'Dangerous Drugs', to: '/practice-areas/dangerous-drugs' },
  { label: 'Weight Loss Drug', strong: true },
]

const takeaways: TextBlock[] = [
  {
    title: 'Do not dismiss severe GI symptoms',
    text: 'Persistent vomiting, inability to keep fluids down, or worsening abdominal pain may signal complications beyond typical nausea.',
  },
  {
    title: 'Track dose changes carefully',
    text: 'Record start date, dose escalation steps, co-medications, and exact timing when symptoms began relative to each change.',
  },
  {
    title: 'Vision changes need prompt review',
    text: 'Sudden or progressive vision loss after starting or increasing GLP-1 therapy should be evaluated without delay.',
  },
  {
    title: 'Bring complete medication evidence to follow-up',
    text: 'Prescription labels, pharmacy records, and patient portal messages help clinicians perform accurate medication reconciliation.',
  },
]

const adversePatterns: IconCard[] = [
  {
    title: 'Gastrointestinal complications',
    text: 'Nausea is common early on, but persistent vomiting, severe abdominal pain, or inability to eat may suggest gastroparesis or obstruction concerns.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><path d="M22 10v16M18 14h8M16 26h8" stroke="#0a1f44" fill="none" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'Vision-related symptoms',
    text: 'Blurred vision, field loss, or sudden vision changes after medication use should trigger urgent ophthalmology or emergency review.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><circle cx="20" cy="20" r="6" fill="#0a1f44"/></svg>`,
  },
  {
    title: 'Neurological warning signs',
    text: 'Confusion, coordination problems, or memory changes—especially with prolonged vomiting—may indicate serious metabolic or neurological complications.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><path d="M14 22h12v8H14v-8zM20 14v8M17 17h6" stroke="#0a1f44" fill="none" stroke-width="2" stroke-linecap="round"/><path d="M24 12l4-2v6h-4v-4z" stroke="#0a1f44" fill="none" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  },
]

const medicationCards: IconCard[] = [
  {
    title: 'Document what you took',
    text: 'Record brand name, generic name, dose, route, and prescribing clinician for every GLP-1 or weight management drug.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="8" width="16" height="24" rx="2"/><path d="M16 16h8M16 22h8"/></svg>`,
  },
  {
    title: 'Note when you stopped',
    text: 'Stopping date and reason (side effects, clinician advice, or supply issues) are important for timeline reconstruction.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="20" r="12"/><path d="M14 20h12"/></svg>`,
  },
  {
    title: 'List co-medications',
    text: 'Other diabetes drugs, supplements, and recent antibiotics can affect symptom interpretation and interaction risk.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20h20M20 10v20"/><circle cx="20" cy="20" r="14"/></svg>`,
  },
]

const popularMeds = ['Ozempic', 'Wegovy', 'Mounjaro', 'Trulicity', 'Rybelsus', 'Saxenda', 'Victoza', 'Zepbound']

const nextStepParagraphs = [
  'Seek emergency care for persistent vomiting with dehydration, severe abdominal pain, chest pain, breathing difficulty, confusion, or sudden vision loss.',
  'Stop self-adjusting doses without clinician guidance, but do tell your provider immediately about severe or worsening symptoms.',
  'Bring prescription history, dose changes, hospital visits, imaging, and a symptom timeline to gastroenterology, endocrinology, or ophthalmology follow-up as recommended.',
]

const urgentSymptoms: TextBlock[] = [
  {
    title: 'Gastroparesis',
    text: 'Chronic nausea, early satiety, bloating, and vomiting may indicate delayed gastric emptying requiring medical evaluation.',
  },
  {
    title: 'Intestinal obstruction concerns',
    text: 'Severe abdominal pain, distension, or inability to pass gas or stool may represent obstruction and need emergency assessment.',
  },
  {
    title: 'Persistent vomiting',
    text: 'Continuous vomiting leading to dehydration, electrolyte imbalance, or emergency department visits should not be managed at home alone.',
  },
  {
    title: 'Vision loss or blurring',
    text: 'Sudden or progressive vision changes after GLP-1 use warrant prompt ophthalmologic and medical review.',
  },
  {
    title: 'Gallbladder-related pain',
    text: 'Right upper abdominal pain, fever, or jaundice after medication use may signal biliary complications needing imaging.',
  },
  {
    title: 'Neurological changes',
    text: 'Confusion, gait instability, or coordination loss—especially with prolonged vomiting—may indicate serious metabolic complications.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Medication Error vs Side Effect: How to Tell', href: '/blog/medical-malpractice' },
  { title: 'How to Build a Complete Medical Timeline', href: '/blog/posts/how-to-build-a-complete-medical-timeline' },
]

const learnRight: LearnLink[] = [
  { title: 'Second Medical Opinion: Patient Checklist', href: '/blog/posts/second-medical-opinion-patient-checklist' },
  { title: 'Medication Safety Resource Guide', href: '/practice-areas/dangerous-drugs' },
]

const faqAside = [
  'What are GLP-1 medications?',
  'What symptoms are emergencies?',
  'What is gastroparesis?',
  'Can vision problems be linked to these drugs?',
  'What records should I preserve?',
  'When should I request specialist review?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What are GLP-1 and related weight loss medications?',
    paragraphs: [
      'These drugs mimic incretin hormones to slow digestion, reduce appetite, and help regulate blood sugar. Examples include semaglutide (Ozempic, Wegovy, Rybelsus), liraglutide (Saxenda, Victoza), dulaglutide (Trulicity), and tirzepatide (Mounjaro, Zepbound).',
    ],
  },
  {
    q: 'What symptoms require emergency medical care?',
    paragraphs: [
      'Persistent vomiting with dehydration, severe abdominal pain, inability to keep fluids down, chest pain, breathing difficulty, confusion, seizures, or sudden vision loss require urgent evaluation.',
    ],
  },
  {
    q: 'What is gastroparesis and how might it present?',
    paragraphs: [
      'Gastroparesis is delayed stomach emptying. Symptoms may include chronic nausea, vomiting, bloating, early fullness, and weight loss. It requires medical diagnosis and management—do not rely on online self-diagnosis alone.',
    ],
  },
  {
    q: 'Can these medications affect vision?',
    paragraphs: [
      'Some patients report vision changes after starting or increasing therapy. Sudden or progressive vision loss should be evaluated promptly by medical and eye specialists.',
    ],
  },
  {
    q: 'What medication records should I preserve?',
    paragraphs: [
      'Keep prescription labels, pharmacy printouts, dose change history, co-medications, hospital records, imaging, and a dated symptom log.',
    ],
  },
  {
    q: 'When should I request specialist reassessment?',
    paragraphs: [
      'Request specialist input when symptoms are severe, persistent, atypical, or inconsistent with expected mild side effects—especially after dose increases or polypharmacy.',
    ],
  },
  {
    q: 'Should I stop the medication on my own?',
    paragraphs: [
      'Do not change or stop prescribed medications without clinician guidance, except when emergency symptoms require immediate care. Contact your prescriber as soon as possible about severe reactions.',
    ],
  },
  {
    q: 'Can adverse effects appear after I stop the drug?',
    paragraphs: [
      'Some complications may persist or become apparent after discontinuation. Continue documenting symptoms and follow-up care regardless of current medication status.',
    ],
  },
]
</script>
