import type { FaqItem, LearnLink } from '~/types/practice-area'

export const TCP_OPEN_LEARN_MORE = Symbol('tcpOpenLearnMore')

export type TcpTopicCard = {
  title: string
  href: string
  /** Inline SVG markup when `imageSrc` is not set */
  art: string
  imageSrc?: string
}

export const TCP_AFTER_INJURY_POST_CHECKLIST_IMAGE =
  '/images/about/the-case-process/tcp-after-injury-post-checklist.avif'

export const TCP_AFTER_INJURY_BASICS_IMAGE =
  '/images/about/the-case-process/tcp-after-injury-basics.avif'

export const TCP_AFTER_INJURY_INSURANCE_IMAGE =
  '/images/about/the-case-process/tcp-after-injury-insurance.avif'

export const TCP_QUALIFY_VISUAL_IMAGE =
  '/images/about/the-case-process/tcp-qualify-visual.png'

export const TCP_WORTH_VISUAL_IMAGE =
  '/images/about/the-case-process/tcp-worth-visual.webp'

export const TCP_WORKING_TIMELINE_IMAGE =
  '/images/about/the-case-process/tcp-working-timeline.avif'

export const TCP_WORKING_PAID_IMAGE =
  '/images/about/the-case-process/tcp-working-paid.avif'

export const TCP_WORKING_DOS_DONTS_IMAGE =
  '/images/about/the-case-process/tcp-working-dos-donts.avif'

export const TCP_CTA_CAR_IMAGE =
  '/images/about/the-case-process/tcp-cta-car.webp'

export const TCP_DOCUMENTS_CHECKLIST_IMAGE =
  '/images/about/the-case-process/tcp-documents-checklist.avif'

export const TCP_RIGHT_ILLUSTRATION_IMAGE =
  '/images/about/the-case-process/the-case-process-right-illustration.avif'

export type TcpNavLink = {
  label: string
  href: string
}

export type TcpGlossaryTerm = {
  title: string
  text: string
  icon: string
}

export const tcpAfterInjuryCards: TcpTopicCard[] = [
  {
    title: 'Next Steps: The Post-Injury Medical Checklist',
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_AFTER_INJURY_POST_CHECKLIST_IMAGE,
  },
  {
    title: 'The Basics: What to monitor after an injury',
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_AFTER_INJURY_BASICS_IMAGE,
  },
  {
    title: 'Why keeping records and timelines matters',
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_AFTER_INJURY_INSURANCE_IMAGE,
  },
]

export const tcpQualifyCriteria: FaqItem[] = [
  {
    q: 'Symptoms that need urgent care',
    paragraphs: [
      'Severe pain, breathing difficulty, neurological changes, uncontrolled bleeding, or rapidly worsening symptoms should be treated as emergencies—not as something to “wait and see.”',
    ],
  },
  {
    q: 'Injuries that need structured follow-up',
    paragraphs: [
      'Fractures, concussion signs, deep wounds, and multi-system trauma often need clinic reassessment even when the first visit felt reassuring.',
    ],
  },
  {
    q: 'A clear medical timeline helps',
    paragraphs: [
      'Saving discharge notes, imaging reports, medication lists, and a short symptom diary improves second opinions and safer recovery planning.',
    ],
  },
  {
    q: 'Not sure what to do next? Contact the clinic.',
    paragraphs: [
      'Share what happened, your current symptoms, and any visit records. Our team can help you map practical medical next steps.',
    ],
  },
]

export const tcpClinicLinks: TcpNavLink[] = [
  { label: 'Choosing the Right Follow-up Path', href: '/medical/what-to-do' },
  { label: 'How Clinic Visits Work After an Injury', href: '/about/meet-our-doctors' },
  { label: 'When Recovery Needs Specialist Input', href: '/medical/what-to-do' },
  { label: 'The For The People Clinic Difference', href: '/about/meet-our-doctors' },
]

/** @deprecated Use tcpClinicLinks */
export const tcpAttorneyLinks = tcpClinicLinks

export const tcpWorkingCards: TcpTopicCard[] = [
  {
    title: 'Recovery Pathway: A Practical Timeline',
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_WORKING_TIMELINE_IMAGE,
  },
  {
    title: 'How Long Does Healing Usually Take?',
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_WORKING_PAID_IMAGE,
  },
  {
    title: "Dos and Don'ts for Safer Recovery",
    href: '/medical/what-to-do',
    art: '',
    imageSrc: TCP_WORKING_DOS_DONTS_IMAGE,
  },
]

export const tcpGlossaryTerms: TcpGlossaryTerm[] = [
  {
    title: 'Red Flags',
    text: 'Urgent warning signs—such as worsening headache, chest pain, confusion, or new weakness—that mean you should seek emergency care right away.',
    icon: '✦',
  },
  {
    title: 'Follow-up Visit',
    text: 'A planned clinic reassessment after an ER or urgent-care visit to check healing, adjust the plan, and decide if specialty care is needed.',
    icon: '▲',
  },
  {
    title: 'Imaging',
    text: 'Tests such as X-ray, CT, or MRI used to evaluate fractures, internal injury, or other findings that a physical exam alone may miss.',
    icon: '☰',
  },
  {
    title: 'Informed Consent',
    text: 'Clear explanation of a procedure’s purpose, risks, alternatives, and expected recovery before you agree to major treatment decisions.',
    icon: '⚖',
  },
  {
    title: 'Second Opinion',
    text: 'Asking another qualified clinician to review your diagnosis or plan—especially useful when recovery stalls or decisions feel unclear.',
    icon: '👤',
  },
  {
    title: 'Rehab Pathway',
    text: 'A staged plan for mobility, pain management, and return-to-activity that matches your injury and daily function goals.',
    icon: '💬',
  },
]

export const tcpLearnLeft: LearnLink[] = [
  { title: '5-Step Medical Action Guide', href: '/medical/what-to-do' },
  { title: 'Car Crash Recovery Guide', href: '/practice-areas/car-accident' },
  { title: 'Slip and Fall Recovery Guide', href: '/practice-areas/slip-and-fall' },
  { title: 'Truck Crash Recovery Guide', href: '/practice-areas/truck-accident' },
  { title: 'Brain Injury Patient Guide', href: '/practice-areas/brain-injury' },
  { title: 'Spinal Cord Injury Guide', href: '/practice-areas/spinal-cord-injury' },
  { title: 'Meet Our Doctors', href: '/about/meet-our-doctors' },
  { title: 'Why Preserve Medical Records', href: '/medical/what-to-do' },
  { title: 'When to Seek Urgent Reassessment', href: '/medical/what-to-do' },
  { title: 'Patient Blog Resources', href: '/blog/medical-malpractice' },
]

export const tcpLearnRight: LearnLink[] = [
  { title: 'Medical Harm Overview', href: '/practice-areas/medical-malpractice' },
  { title: 'Medication Safety Hub', href: '/practice-areas/dangerous-drugs' },
  { title: 'Motorcycle Injury Recovery', href: '/practice-areas/motorcycle-accident' },
  { title: 'Burn Injury Recovery Guide', href: '/practice-areas/burn-injury' },
  { title: 'Workplace Injury Medical Guide', href: '/practice-areas/workers-compensation' },
  { title: 'Contact For The People Clinic', href: '/contact' },
  { title: 'Next Steps After Injury', href: '/medical/what-to-do' },
  { title: 'Light Rights Basics for Patients', href: '/practice-areas/medical-malpractice' },
  { title: 'Clinic Services Overview', href: '/about/meet-our-doctors' },
  { title: 'Personal Injury Recovery Guide', href: '/practice-areas/personal-injury' },
]

export const tcpHeroBriefcaseArt = `<svg viewBox="0 0 320 280" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <rect x="70" y="95" width="180" height="120" rx="12" fill="#1f6dde" stroke="#0a1f44" stroke-width="3"/>
  <path d="M110 95 V72 a50 50 0 0 1 100 0 V95" fill="none" stroke="#0a1f44" stroke-width="3"/>
  <rect x="145" y="118" width="30" height="22" rx="4" fill="#ffde00" stroke="#0a1f44" stroke-width="2"/>
  <rect x="95" y="40" width="36" height="48" rx="4" fill="#fff" stroke="#0a1f44" stroke-width="2" transform="rotate(-18 113 64)"/>
  <rect x="125" y="28" width="36" height="48" rx="4" fill="#fff" stroke="#0a1f44" stroke-width="2"/>
  <rect x="155" y="36" width="36" height="48" rx="4" fill="#fff" stroke="#0a1f44" stroke-width="2" transform="rotate(14 173 60)"/>
  <rect x="185" y="48" width="36" height="48" rx="4" fill="#fff" stroke="#0a1f44" stroke-width="2" transform="rotate(22 203 72)"/>
</svg>`

export const tcpFlashlightArt = `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <path d="M35 155 L95 45 L115 55 L55 165 Z" fill="#1f6dde" stroke="#0a1f44" stroke-width="2"/>
  <path d="M115 55 L175 95 L165 115 L105 75 Z" fill="#fff" stroke="#0a1f44" stroke-width="2"/>
  <path d="M95 45 L175 95 L140 140 L60 90 Z" fill="#ffde00" opacity="0.95"/>
</svg>`

export const tcpMoneyBagArt = `<svg viewBox="0 0 120 120" width="120" height="120" preserveAspectRatio="xMidYMid meet">
  <path d="M60 18c-18 0-28 14-28 28 0 8 4 14 10 18-8 6-14 16-14 28 0 18 14 28 32 28s32-10 32-28c0-12-6-22-14-28 6-4 10-10 10-18 0-14-10-28-28-28z" fill="#ffde00" stroke="#0a1f44" stroke-width="2"/>
  <text x="60" y="78" font-family="Arial" font-size="36" font-weight="800" text-anchor="middle" fill="#0a1f44">$</text>
</svg>`

export const tcpNotepadArt = `<svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <rect x="55" y="35" width="90" height="130" rx="6" fill="#fff" stroke="#0a1f44" stroke-width="2"/>
  <path d="M55 50 H145" stroke="#1f6dde" stroke-width="4"/>
  <circle cx="68" cy="42" r="4" fill="#1f6dde"/><circle cx="82" cy="42" r="4" fill="#1f6dde"/>
  <text x="68" y="78" font-size="11" font-weight="700" fill="#0a1f44">Forms ✓</text>
  <text x="68" y="98" font-size="11" font-weight="700" fill="#0a1f44">Receipts ✓</text>
  <text x="68" y="118" font-size="11" font-weight="700" fill="#0a1f44">Bills ✓</text>
  <text x="68" y="138" font-size="11" font-weight="700" fill="#0a1f44">Medicals ○</text>
  <path d="M130 145 L165 175" stroke="#1f6dde" stroke-width="4" stroke-linecap="round"/>
  <rect x="150" y="155" width="28" height="8" rx="2" fill="#fff" stroke="#0a1f44" stroke-width="2" transform="rotate(40 164 159)"/>
</svg>`

export const tcpCarArt = `<svg viewBox="0 0 280 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <path d="M40 95h200l-25-35H65z" fill="#7eb8f0" stroke="#0a1f44" stroke-width="2"/>
  <rect x="55" y="60" width="50" height="30" rx="4" fill="#b9d4ff" stroke="#0a1f44" stroke-width="2"/>
  <rect x="175" y="60" width="50" height="30" rx="4" fill="#b9d4ff" stroke="#0a1f44" stroke-width="2"/>
  <circle cx="90" cy="100" r="16" fill="#0a1f44"/><circle cx="190" cy="100" r="16" fill="#0a1f44"/>
  <circle cx="82" cy="72" r="5" fill="#fff"/><circle cx="98" cy="72" r="5" fill="#fff"/>
  <path d="M115 78 Q130 88 145 78" fill="none" stroke="#0a1f44" stroke-width="2"/>
</svg>`
