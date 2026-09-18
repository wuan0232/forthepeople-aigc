import type { FaqItem, IconCard, TextBlock } from '~/types/practice-area'

export const truckRecovery = {
  hero: {
    breadcrumbLabel: 'Truck Accident',
    title: 'After a Truck Crash: Medical Recovery Guide',
    lead: 'High-energy truck collisions often cause multi-system injury. Prioritize urgent evaluation, delayed-symptom monitoring, and coordinated specialty follow-up.',
  },
  seo: {
    title: 'Truck Crash Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused truck crash recovery guidance: trauma red flags, common high-energy injuries, action checklists, light rights basics, and clinic clinician support.',
  },
  priorities: [
    {
      title: 'Expect multi-system evaluation',
      text: 'Head, neck, chest, abdomen, pelvis, and extremities can all be affected—even when one injury dominates early symptoms.',
    },
    {
      title: 'Respect high-energy mechanisms',
      text: 'Large vehicle impacts increase risk of occult bleeding, organ injury, and delayed neurological findings.',
    },
    {
      title: 'Coordinate specialty follow-up',
      text: 'Trauma, orthopedics, neurosurgery, pain management, and rehab may all play roles depending on findings.',
    },
    {
      title: 'Track function, not just pain',
      text: 'Sleep, cognition, breathing comfort, bowel/bladder changes, and walking ability are key recovery signals.',
    },
  ] satisfies TextBlock[],
  redFlags: [
    'Chest pain, difficulty breathing, or coughing blood',
    'Severe abdominal pain, rigid abdomen, or fainting',
    'Progressive headache, confusion, seizure, or unequal pupils',
    'New limb weakness, numbness, or bowel/bladder changes',
    'Rapid swelling, cold/pale extremity, or uncontrolled bleeding',
  ],
  injuryPatterns: [
    {
      title: 'Polytrauma Patterns',
      text: 'Multiple injuries can mask one another. Serial exams and clear handoff notes improve safety after discharge.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="16" cy="18" r="5"/><circle cx="32" cy="18" r="5"/><circle cx="24" cy="32" r="5"/></svg>`,
    },
    {
      title: 'Spinal & Neurological Injury',
      text: 'Neck/back pain with numbness, weakness, or coordination loss needs urgent neurological reassessment.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 6v36M18 14h12M18 24h12M20 34h8"/></svg>`,
    },
    {
      title: 'Chest & Abdominal Trauma',
      text: 'Internal injuries may present hours later. Worsening pain, dizziness, or breathing changes are red flags.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="24" cy="24" rx="14" ry="18"/><path d="M24 12v24M16 24h16"/></svg>`,
    },
    {
      title: 'Crush & Extremity Injury',
      text: 'Compartment syndrome risk rises with severe swelling, escalating pain, and sensory change after crush forces.',
      icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="14" width="24" height="20" rx="3"/><path d="M18 24h12"/></svg>`,
    },
  ] satisfies IconCard[],
  checklist48h: [
    {
      title: 'Do not skip trauma follow-through',
      text: 'Complete recommended labs, imaging, and return precautions from the trauma or ER team.',
    },
    {
      title: 'Organize all facility records',
      text: 'Collect EMS notes if available, ER/trauma summaries, imaging, and medication lists in one folder or portal.',
    },
    {
      title: 'Monitor delayed internal symptoms',
      text: 'Watch for abdominal pain, chest symptoms, dizziness, and neurological changes overnight and the next day.',
    },
    {
      title: 'Book coordinated clinic review',
      text: 'A structured post-crash medical review helps prioritize which specialist to see first.',
    },
  ] satisfies TextBlock[],
  checklist7day: [
    {
      title: 'Confirm outstanding imaging results',
      text: 'Ask explicitly whether all scans were finalized and whether any incidental findings need follow-up.',
    },
    {
      title: 'Rehab and pain plan',
      text: 'Discuss safe mobility, physical therapy timing, and non-escalating pain strategies.',
    },
    {
      title: 'Work and driving clearance',
      text: 'Get clinician guidance before returning to physically demanding work or driving after high-energy trauma.',
    },
  ] satisfies TextBlock[],
  faqAside: [
    'Why are truck crashes medically different?',
    'What delayed symptoms worry clinicians?',
    'How should follow-up be coordinated?',
  ],
  faqItems: [
    {
      q: 'Why are truck crashes medically different from minor fender-benders?',
      paragraphs: [
        'Higher energy transfer raises the chance of multi-system trauma, occult bleeding, and delayed neurological injury.',
        'A reassuring early exam does not eliminate the need for close monitoring.',
      ],
    },
    {
      q: 'Which delayed symptoms should worry me most?',
      paragraphs: [
        'Breathing difficulty, severe abdominal pain, fainting, confusion, new weakness, and rapidly escalating limb pain or swelling.',
      ],
    },
    {
      q: 'How should follow-up be coordinated?',
      paragraphs: [
        'Bring a complete record set to one coordinating clinician first. Together you can sequence orthopedics, neurology, pain, and rehab visits.',
      ],
    },
    {
      q: 'Should I preserve records after a commercial-vehicle crash?',
      paragraphs: [
        'Yes. Organized medical timelines support safer care and any later rights-review process if you choose to pursue one separately.',
      ],
    },
  ] satisfies FaqItem[],
}
