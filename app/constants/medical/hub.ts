import type { LearnLink, TextBlock } from '~/types/practice-area'

export const MEDICAL_HUB_SEO = {
  title: 'Medical Malpractice Guide | Patient & Family Resource',
  description:
    'Understand medical malpractice, distinguish complications from negligence, and follow clear patient-focused next steps after a suspected medical error.',
} as const

export const MEDICAL_HUB_HERO = {
  breadcrumbLabel: 'Medical Malpractice',
  title: 'Medical Malpractice: A Practical Guide for Patients and Families',
  lead: 'When care appears to go wrong, a clear medical plan matters more than panic. This guide helps you understand what happened, what to document, and what to do next.',
} as const

export const MEDICAL_HUB_DIFFERENCE = {
  headingId: 'malpractice-diff-heading',
  title: 'Start With These Core Questions',
  blocks: [
    {
      title: 'Medical Error vs Expected Complication',
      text: 'Some treatments carry known risks. A poor outcome alone does not always mean negligence. The key question is whether the care team followed accepted clinical standards.',
    },
    {
      title: 'Medical Malpractice vs General Medical Dispute',
      text: 'Not every complaint is malpractice. Service issues and communication problems differ from cases where care clearly deviates from standards and causes harm.',
    },
    {
      title: 'Concern Does Not Automatically Confirm Malpractice',
      text: 'Unexpected recovery patterns can happen even with proper care. Build a complete timeline, keep records, and seek a second medical opinion before drawing conclusions.',
    },
    {
      title: 'Prioritize Health First',
      text: 'Stabilize symptoms, confirm diagnosis, and follow a recovery plan first. This hub focuses on practical medical actions patients can take right away.',
    },
  ] satisfies TextBlock[],
} as const

export const MEDICAL_HUB_CLAIM = {
  headingId: 'malpractice-claim-heading',
  title: 'How Can I Tell If This Might Be Medical Malpractice?',
  paragraphs: [
    'Medical malpractice generally refers to a provider deviating from accepted standards of care and causing avoidable patient harm. Common scenarios include delayed diagnosis, surgical mistakes, medication errors, anesthesia incidents, and birth-related injuries.',
    'A practical three-part check is: (1) possible care deviation, (2) measurable harm, and (3) a plausible connection between the two.',
    'Complex disease progression and known complications can still lead to poor outcomes without negligence. If in doubt, organize complete records and seek a qualified second opinion before escalating.',
  ],
} as const

export const MEDICAL_HUB_LAWSUIT = {
  title: 'Three Core Elements to Evaluate',
  requirements: ['Harm occurred', 'Possible care deviation', 'Plausible clinical linkage'],
} as const

export const MEDICAL_HUB_GUIDE_PROMO = {
  headingId: 'doctor-guide-heading',
  title: 'Think Something Went Wrong? Start With the 5-Step Action Guide',
  description:
    'If you are worried about a treatment outcome, follow a clear sequence: stabilize, document, review, and escalate only when needed.',
  linkLabel: 'View the Action Guide',
  linkHref: '/medical/what-to-do',
} as const

export const MEDICAL_HUB_LEARN_MORE = {
  title: 'Related Reading',
  intro: 'Explore practical patient education topics. More articles will be added over time.',
  leftLinks: [
    {
      title: 'Medical Malpractice vs Medical Dispute: What Is the Difference?',
      href: '/blog/posts/medical-malpractice-vs-medical-dispute',
    },
    { title: 'Surgical Complications: What Is Expected and What Is Not?', href: '/blog/medical-malpractice' },
    { title: 'Delayed Diagnosis: Common Red Flags Patients Should Watch For', href: '/blog/medical-malpractice' },
    { title: 'When Dental Treatment Goes Wrong: A Patient Checklist', href: '/blog/medical-malpractice' },
    { title: 'Recognizing Potential Surgical Error Signals', href: '/blog/medical-malpractice' },
  ] satisfies LearnLink[],
  rightLinks: [
    {
      title: 'How to Build a Complete Medical Timeline',
      href: '/blog/posts/how-to-build-a-complete-medical-timeline',
    },
    {
      title: 'How to Request a Second Medical Opinion Effectively',
      href: '/blog/posts/second-medical-opinion-patient-checklist',
    },
    { title: 'Birth Injury: Early Signs Families Should Monitor', href: '/blog/medical-malpractice' },
    { title: 'Medication Error vs Side Effect: How to Tell', href: '/blog/medical-malpractice' },
    {
      title: 'What to Review Before Signing Informed Consent',
      href: '/blog/posts/informed-consent-what-to-check-before-you-sign',
    },
  ] satisfies LearnLink[],
} as const

export const MEDICAL_HUB_FAQ_REVIEWED_BY = {
  name: 'Medical Education Editorial Team',
  date: 'July 2026',
} as const
