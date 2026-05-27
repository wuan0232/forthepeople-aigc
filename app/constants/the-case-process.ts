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
    title: 'Next Steps: The Post-Injury Checklist',
    href: '#learn-more',
    art: '',
    imageSrc: TCP_AFTER_INJURY_POST_CHECKLIST_IMAGE,
  },
  {
    title: 'The Basics: What is a personal injury lawsuit?',
    href: '#learn-more',
    art: '',
    imageSrc: TCP_AFTER_INJURY_BASICS_IMAGE,
  },
  {
    title: "What Your Insurance Company Doesn't Want You to Know",
    href: '#learn-more',
    art: '',
    imageSrc: TCP_AFTER_INJURY_INSURANCE_IMAGE,
  },
]

export const tcpQualifyCriteria: FaqItem[] = [
  {
    q: 'There were damages',
    paragraphs: [
      "Personal injury lawsuits are filed to recover 'damages.' These include costs like medical expenses, lost wages, and pain and suffering. An injury must have significant associated costs to qualify for a lawsuit, which vary by state.",
    ],
  },
  {
    q: 'Someone else was at fault',
    paragraphs: [
      "To get compensation from someone else's insurance company, they must have acted negligently in a way that caused or contributed to your injuries.",
    ],
  },
  {
    q: 'There is enough insurance coverage',
    paragraphs: [
      'Personal injury lawsuits are usually filed against insurance companies, not individuals. Those responsible must have enough insurance coverage to cover the injured person\'s medical expenses or to fully compensate them for their injuries.',
    ],
  },
  {
    q: 'Think you have a case? Not sure? Get in touch.',
    paragraphs: [
      'Share some details about what happened to you and our experienced support staff will review.',
    ],
  },
]

export const tcpAttorneyLinks: TcpNavLink[] = [
  { label: 'Choosing the Right Attorney for You', href: '#learn-more' },
  { label: 'Injury Attorney Fees: How It Works', href: '#learn-more' },
  { label: 'Why Do Cases Get Turned Down?', href: '#learn-more' },
  { label: 'The Morgan & Morgan Difference', href: '#learn-more' },
]

export const tcpWorkingCards: TcpTopicCard[] = [
  {
    title: 'The Case Process: A Timeline',
    href: '#learn-more',
    art: '',
    imageSrc: TCP_WORKING_TIMELINE_IMAGE,
  },
  {
    title: 'How Long Does It Take to Get Paid?',
    href: '#learn-more',
    art: '',
    imageSrc: TCP_WORKING_PAID_IMAGE,
  },
  {
    title: "Dos and Don'ts for Case Success",
    href: '#learn-more',
    art: '',
    imageSrc: TCP_WORKING_DOS_DONTS_IMAGE,
  },
]

export const tcpGlossaryTerms: TcpGlossaryTerm[] = [
  {
    title: 'Damages',
    text: 'Financial compensation awarded for injury-related costs, including medical expenses, lost wages, and pain and suffering.',
    icon: '✦',
  },
  {
    title: 'Negligence',
    text: 'Failure to exercise reasonable care, resulting in harm or injury to another person.',
    icon: '▲',
  },
  {
    title: 'Settlement',
    text: 'An agreement reached between parties to resolve a lawsuit without going to trial, often involving compensation.',
    icon: '☰',
  },
  {
    title: 'Plaintiff',
    text: 'The person who initiates a lawsuit seeking legal remedy for damages caused by the defendant.',
    icon: '⚖',
  },
  {
    title: 'Defendant',
    text: 'The person or party being sued or accused in a court of law.',
    icon: '👤',
  },
  {
    title: 'Deposition',
    text: 'Sworn out-of-court testimony given by a witness, recorded for use in the legal process.',
    icon: '💬',
  },
]

export const tcpLearnLeft: LearnLink[] = [
  { title: 'How Do I Know If My Injury Warrants a Personal Injury Claim?', href: '#' },
  {
    title: 'Evidence: How It Makes or Breaks Your Case and How Morgan & Morgan Can Help You Get It',
    href: '#',
  },
  { title: 'Average Settlement for Post-Concussion Syndrome', href: '#' },
  { title: 'Large and Charged: How the Biggest Injury Law Firm is Easy to Hire', href: '#' },
  { title: 'What Are "Damages" In Personal Injury?', href: '#' },
  { title: "3 Reasons Why You Need America's Largest Injury Law Firm to Take on a Big Company", href: '#' },
  { title: 'Everything You Need to Know About Fees', href: '#' },
  { title: "Dos and Don'ts for Case Success", href: '#' },
  { title: 'How Do Voir Dire and Peremptory Strikes Play a Role in Jury Selection?', href: '#' },
  { title: 'How Long Does It Take to Get a Police Report?', href: '#' },
]

export const tcpLearnRight: LearnLink[] = [
  { title: '10 Things You Should Know Before Filing a Personal Injury Lawsuit', href: '#' },
  { title: 'Five Questions You Should Ask Before Hiring a Lawyer', href: '#' },
  { title: 'Hiring a Lawyer for Your Injury Claim: The Key Benefits You Should Know', href: '#' },
  { title: 'Choosing the right attorney for you', href: '#' },
  { title: 'How Much Does Hiring a Personal Injury Lawyer Cost?', href: '#' },
  { title: 'How Much Does Personal Injury Insurance Cost?', href: '#' },
  { title: 'Next Steps: The Post Injury Checklist', href: '#' },
  { title: 'Understanding Unusual Legal Cases', href: '#' },
  { title: "What Your Insurance Company Doesn't Want You to Know", href: '#' },
  { title: 'How Long Do I Have to File a Claim?', href: '#' },
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
