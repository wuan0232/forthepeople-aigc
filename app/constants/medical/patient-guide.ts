export type PatientGuideStep = {
  title: string
  paragraphs: string[]
  checklist: string[]
}

export const PATIENT_GUIDE_SEO = {
  title: 'What to Do After a Suspected Medical Error | 5-Step Guide',
  description:
    'A practical five-step path for patients and families: stabilize, document, get a second opinion, understand complaint channels, and plan recovery.',
} as const

export const PATIENT_GUIDE_HERO = {
  breadcrumbLabel: 'Action Guide',
  title: '5 Steps to Take After a Suspected Medical Error',
  lead: 'If something feels wrong after treatment, focus first on safety and facts. This guide outlines immediate, patient-centered medical steps.',
} as const

export const PATIENT_GUIDE_DISCLAIMER =
  'Disclaimer: This content is educational and does not replace medical or legal advice. If symptoms worsen or urgent concerns arise, seek professional care immediately.'

export const PATIENT_GUIDE_STEPS: PatientGuideStep[] = [
  {
    title: 'Step 1: Stabilize the Patient First',
    paragraphs: [
      'Your immediate health status comes first. If there are emergency signs such as severe pain, breathing trouble, confusion, or sudden deterioration, seek urgent care right away.',
      'Do not stop medications or change treatment on your own unless guided by a licensed clinician. Unsupervised changes can worsen outcomes and obscure clinical review.',
    ],
    checklist: [
      'Log current symptoms and onset times',
      'Keep a complete list of medications in use',
      'Use emergency services for severe or fast-changing symptoms',
      'Inform a family member or caregiver about status changes',
    ],
  },
  {
    title: 'Step 2: Preserve Records and Evidence',
    paragraphs: [
      'A complete care record is critical for safe follow-up and objective review. Gather clinic notes, admission records, lab reports, imaging reports, prescriptions, and billing documents.',
      'Preserve written communication where possible. After phone calls, write a dated summary of what was discussed.',
    ],
    checklist: [
      'Request copies of outpatient and inpatient records',
      'Save all lab, pathology, and imaging reports',
      'Build a date-ordered care timeline',
      'Photograph visible changes with dates when relevant',
      'Keep prescriptions, medication labels, and payment receipts',
    ],
  },
  {
    title: 'Step 3: Seek a Second Medical Opinion',
    paragraphs: [
      'A second opinion means asking another qualified specialist to review the same condition. It can clarify diagnosis quality and treatment suitability.',
      'Bring complete records and imaging. Prepare focused questions in advance about diagnosis basis, alternatives, and next-step risks.',
    ],
    checklist: [
      'Choose a qualified provider in the same specialty',
      'Bring full records and imaging',
      'Prepare 3–5 key questions before the visit',
      'Document recommendations and compare plans',
    ],
  },
  {
    title: 'Step 4: Understand Complaint and Review Channels',
    paragraphs: [
      'If concerns remain after medical review, submit a written complaint to the hospital patient-services or quality office and request a written response.',
      'Formal technical review channels may exist by region. These can help evaluate whether care met standards, but should usually follow stabilization and documentation.',
    ],
    checklist: [
      'Submit a written concern through official hospital channels',
      'Check local mediation or review resources',
      'Understand required documents for technical review',
      'Track relevant timelines in your jurisdiction',
    ],
  },
  {
    title: 'Step 5: Plan Recovery and Long-Term Support',
    paragraphs: [
      'Recovery after medical harm is often multidisciplinary, including rehabilitation, mental health support, and home-care planning. Discuss a written recovery plan early.',
      'Family stress is real. Consider counseling or support groups when needed, and avoid rushed decisions without adequate information.',
    ],
    checklist: [
      'Create a written recovery plan with clinicians',
      'Ask about rehab, nutrition, and specialty referrals',
      'Assess home-care and assistive-device needs',
      'Address patient and caregiver mental health needs',
    ],
  },
]
