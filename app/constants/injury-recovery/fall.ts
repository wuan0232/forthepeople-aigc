import type { FaqItem, IconCard, TextBlock } from '~/types/practice-area'

export const fallRecovery = {
  hero: {
    breadcrumbLabel: 'Slip and Fall',
    title: 'After a Slip and Fall: Medical Recovery Guide',
    lead: 'Falls can cause fractures, head injury, and delayed soft-tissue pain. Focus first on urgent symptoms, then structured follow-up and safer recovery planning.',
  },
  seo: {
    title: 'Slip and Fall Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused slip-and-fall recovery guidance: red-flag symptoms, common fall injuries, action checklists, light rights basics, and clinic clinician support.',
  },
  priorities: [
    {
      title: 'Rule out serious injury early',
      text: 'Head impact, hip pain in older adults, inability to bear weight, and progressive swelling need prompt evaluation.',
    },
    {
      title: 'Watch for delayed concussion signs',
      text: 'Confusion, vomiting, unusual sleepiness, or personality change after a fall require urgent reassessment.',
    },
    {
      title: 'Protect mobility safely',
      text: 'Ask about crutches, bracing, fall-prevention tips, and home hazards before returning to normal activity.',
    },
    {
      title: 'Document mechanism and symptoms',
      text: 'Note surface conditions, height of fall, body part impacted, and how symptoms evolve over the first week.',
    },
  ] satisfies TextBlock[],
  redFlags: [
    'Loss of consciousness, repeated vomiting, or increasing confusion',
    'Severe hip, pelvis, or spine pain after a fall',
    'Inability to walk or bear weight on an injured limb',
    'Numbness, tingling, or weakness in arms or legs',
    'Head wound with ongoing bleeding or rapidly expanding bruise',
  ],
  injuryPatterns: [
    {
      title: 'Wrist & Upper Extremity Fractures',
      text: 'People often brace with outstretched hands. Persistent deformity, numbness, or grip weakness needs imaging review.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8v20M18 28c0 8 12 8 12 0"/><path d="M16 18h16"/></svg>`,
    },
    {
      title: 'Hip & Pelvis Injury',
      text: 'Especially important in older adults. Groin pain, shortened limb appearance, or inability to stand is an emergency concern.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="5"/><path d="M16 42l8-20 8 20M20 28h8"/></svg>`,
    },
    {
      title: 'Head Injury After Fall',
      text: 'Even brief head impact can lead to concussion or intracranial bleeding risk—especially with blood thinners or older age.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="20" r="10"/><path d="M16 36c2-6 6-8 8-8s6 2 8 8"/></svg>`,
    },
    {
      title: 'Ankle Sprain & Soft Tissue',
      text: 'Swelling and bruising can mask ligament injury. Instability or inability to take four steps warrants clinical recheck.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 8 2 14 4 20s4 8 8 10"/><path d="M18 38h16"/></svg>`,
    },
  ] satisfies IconCard[],
  checklist48h: [
    {
      title: 'Seek urgent care for red flags',
      text: 'Do not wait out severe pain, neurological changes, or inability to walk.',
    },
    {
      title: 'Ice, elevate, and protect as advised',
      text: 'Follow clinician instructions for RICE-style care and avoid weight-bearing if unsafe.',
    },
    {
      title: 'Photograph bruising and swelling',
      text: 'A simple daily photo series helps track progression at follow-up visits.',
    },
    {
      title: 'Book clinic reassessment',
      text: 'Schedule review if pain, instability, or head symptoms persist beyond the first day.',
    },
  ] satisfies TextBlock[],
  checklist7day: [
    {
      title: 'Confirm healing trajectory',
      text: 'Ask whether persistent pain needs imaging, casting, or specialty referral.',
    },
    {
      title: 'Fall-prevention planning',
      text: 'Discuss footwear, lighting, railings, medication side effects, and balance concerns.',
    },
    {
      title: 'Return-to-activity guidance',
      text: 'Get clear instructions for work, stairs, driving, and exercise progression.',
    },
  ] satisfies TextBlock[],
  faqAside: [
    'When is a fall a medical emergency?',
    'Should every fall get imaging?',
    'What if I hit my head but feel fine?',
  ],
  faqItems: [
    {
      q: 'When is a fall a medical emergency?',
      paragraphs: [
        'Treat as urgent if there is loss of consciousness, severe hip/spine pain, inability to walk, confusion, repeated vomiting, or progressive neurological symptoms.',
      ],
    },
    {
      q: 'Does every fall need imaging?',
      paragraphs: [
        'Not always. Imaging decisions depend on age, mechanism, exam findings, anticoagulation, and symptom progression.',
        'If pain or function worsens after an initially reassuring visit, request reassessment.',
      ],
    },
    {
      q: 'What if I hit my head but feel fine at first?',
      paragraphs: [
        'Concussion and bleeding symptoms can be delayed. Monitor closely for 24–72 hours and seek urgent care if warning signs appear.',
      ],
    },
    {
      q: 'Should I keep records after a fall?',
      paragraphs: [
        'Yes. Visit notes, imaging, photos, and a symptom timeline support safer follow-up and any later patient-review process if needed.',
      ],
    },
  ] satisfies FaqItem[],
}
