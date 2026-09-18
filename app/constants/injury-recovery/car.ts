import type { FaqItem, IconCard, TextBlock } from '~/types/practice-area'

export const carRecovery = {
  hero: {
    breadcrumbLabel: 'Car Accident',
    title: 'After a Car Crash: Medical Recovery Guide',
    lead: 'Prioritize medical stability first. This guide covers urgent warning signs, common crash injuries, a 48-hour checklist, and how our clinic can support follow-up care.',
  },
  seo: {
    title: 'Car Crash Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused car crash recovery guidance: red-flag symptoms, injury patterns, 48-hour and 7-day checklists, light rights basics, and clinic clinician support.',
  },
  priorities: [
    {
      title: 'Stabilize before you plan',
      text: 'Seek emergency care for severe pain, chest symptoms, neurological changes, uncontrolled bleeding, or loss of consciousness.',
    },
    {
      title: 'Document every visit',
      text: 'Keep ER notes, imaging results, prescriptions, and a daily symptom log—including delayed neck, back, or cognitive symptoms.',
    },
    {
      title: 'Schedule specialist follow-up',
      text: 'Ask about orthopedics, neurology, or rehab if pain, mobility limits, or concussion symptoms persist beyond early recovery.',
    },
    {
      title: 'Do not ignore delayed symptoms',
      text: 'Whiplash, soft-tissue injury, and concussion signs can worsen over 24–72 hours after a seemingly mild crash.',
    },
  ] satisfies TextBlock[],
  redFlags: [
    'Worsening headache, repeated vomiting, confusion, or seizure',
    'Chest pain, shortness of breath, or new irregular heartbeat',
    'Severe abdominal pain, dizziness with fainting, or heavy bleeding',
    'New weakness, numbness, vision changes, or difficulty speaking',
    'Inability to bear weight or rapidly increasing swelling after impact',
  ],
  injuryPatterns: [
    {
      title: 'Whiplash & Neck Strain',
      text: 'Neck stiffness, headache, and shoulder pain often appear after rear-end or side-impact crashes. Early mobility guidance and reassessment matter.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="12" r="5"/><path d="M18 20c2 8 4 12 6 16M30 20c-2 8-4 12-6 16"/><path d="M16 24h16"/></svg>`,
    },
    {
      title: 'Concussion Patterns',
      text: 'Even without loss of consciousness, fogginess, light sensitivity, and sleep changes can signal mild TBI requiring monitoring.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="22" r="12"/><path d="M18 22h12M24 16v12"/></svg>`,
    },
    {
      title: 'Back & Soft-Tissue Injury',
      text: 'Lumbar strain, bruising, and restricted movement are common. Persistent night pain or radiating symptoms need clinical review.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8v32M18 14c4 2 8 2 12 0M18 34c4-2 8-2 12 0"/></svg>`,
    },
    {
      title: 'Fracture & Joint Trauma',
      text: 'Wrist, rib, knee, and ankle injuries can be missed at first visit. Increasing deformity, instability, or inability to use a limb needs urgent recheck.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="10" width="20" height="28" rx="3"/><path d="M18 20h12M18 28h8"/></svg>`,
    },
  ] satisfies IconCard[],
  checklist48h: [
    {
      title: 'Complete urgent evaluation if needed',
      text: 'Return to ER/urgent care for red-flag symptoms rather than waiting for a routine appointment.',
    },
    {
      title: 'Request and save records',
      text: 'Ask for discharge summaries, imaging CDs/portals, and medication instructions the same day when possible.',
    },
    {
      title: 'Start a symptom diary',
      text: 'Note pain location, sleep, cognition, work limits, and what makes symptoms better or worse.',
    },
    {
      title: 'Plan primary-care or clinic follow-up',
      text: 'Book a review within a few days even if you feel “mostly okay,” especially after high-speed or multi-impact crashes.',
    },
  ] satisfies TextBlock[],
  checklist7day: [
    {
      title: 'Reassess stalled recovery',
      text: 'If pain, dizziness, or function is not improving, ask whether imaging or specialty referral is indicated.',
    },
    {
      title: 'Review medications safely',
      text: 'Track side effects and avoid mixing pain medicines without clinician guidance.',
    },
    {
      title: 'Begin guided activity',
      text: 'Follow clinician advice on rest vs gradual return to walking, work, and driving readiness.',
    },
  ] satisfies TextBlock[],
  faqAside: [
    'When should I go back to the ER after a crash?',
    'Why do symptoms appear days later?',
    'What should I bring to a follow-up visit?',
  ],
  faqItems: [
    {
      q: 'When should I go back to the ER after a crash?',
      paragraphs: [
        'Return urgently for worsening headache, confusion, chest pain, breathing difficulty, fainting, new weakness, uncontrolled bleeding, or severe abdominal pain.',
        'If you are unsure whether a symptom is urgent, treat it as urgent and get evaluated.',
      ],
    },
    {
      q: 'Why can crash injuries feel worse days later?',
      paragraphs: [
        'Inflammation, adrenaline fade, and delayed soft-tissue or concussion symptoms are common after collisions.',
        'A symptom diary helps clinicians compare day-to-day changes and decide on imaging or specialist referral.',
      ],
    },
    {
      q: 'What records help my clinic follow-up?',
      paragraphs: [
        'Bring discharge papers, imaging reports, medication lists, prior injuries, and a short timeline of the crash and symptoms.',
        'Photos of visible bruising and notes about work or sleep impact are also useful.',
      ],
    },
    {
      q: 'Do I need to preserve records for rights reviews?',
      paragraphs: [
        'Yes. Complete medical records and timelines support safer care coordination and any later patient-review process you may choose.',
        'This page focuses on medical recovery; formal rights channels can be considered separately if needed.',
      ],
    },
  ] satisfies FaqItem[],
}
