import type { FaqItem } from '~/types/practice-area'

export const MEDICAL_FAQ_ASIDE = [
  'What should I do first if I suspect a medical error?',
  'How do I distinguish a complication from negligence?',
  'Which records should I keep?',
  'When should I get a second medical opinion?',
  'What is the difference between malpractice and a dispute?',
  'How do I file a complaint with a hospital?',
] as const

export const MEDICAL_FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What should I do first if I suspect a medical error?',
    paragraphs: [
      'Prioritize immediate safety and clinical stability. If symptoms are severe or rapidly worsening, seek urgent care first.',
      'Then organize records, build a timeline, and follow the 5-step medical action guide before escalating.',
    ],
  },
  {
    q: 'How do I distinguish a complication from negligence?',
    paragraphs: [
      'A complication can occur even when care is appropriate. Negligence usually involves avoidable deviation from accepted standards with resulting harm.',
      'The distinction is clinical and often requires specialist review with complete records.',
    ],
  },
  {
    q: 'Which records should I keep?',
    paragraphs: [
      'Keep clinical notes, discharge summaries, operative and anesthesia records, prescriptions, lab reports, imaging reports, and billing documents.',
      'Arrange everything in timeline order and keep digital backups.',
    ],
  },
  {
    q: 'When should I get a second medical opinion?',
    paragraphs: [
      'Consider one when diagnosis, treatment indication, or recovery progress seems unclear or inconsistent with your condition.',
      'Bring full records and focused questions so the second reviewer can provide practical guidance.',
    ],
  },
  {
    q: 'What is the difference between malpractice and a medical dispute?',
    paragraphs: [
      'A dispute can involve communication, service, or billing concerns. Malpractice is narrower and focuses on deviation from clinical standards causing harm.',
      'Not all dissatisfaction indicates malpractice; objective medical review is essential.',
    ],
  },
  {
    q: 'Can I file a complaint with the hospital, and how?',
    paragraphs: [
      'Yes. Submit a written complaint to the patient-services or quality office with dates, departments involved, and your requested resolution.',
      'Ask for a written response and keep copies of all submissions and replies.',
    ],
  },
  {
    q: 'Does a poor outcome automatically mean malpractice?',
    paragraphs: [
      'No. Disease severity, patient variability, and known treatment risks can lead to poor outcomes even with proper care.',
      'The core question is whether the clinical standard was met for your specific situation.',
    ],
  },
  {
    q: 'What should I review before signing informed consent?',
    paragraphs: [
      'Confirm the purpose, major risks, alternatives, and expected outcomes of not proceeding.',
      'If anything is unclear, ask for explanation in plain language before signing.',
    ],
  },
  {
    q: 'What should I do if I suspect a medication error?',
    paragraphs: [
      'Keep the medication package, prescription, and symptom timeline. Seek urgent care for severe reactions.',
      'Ask a pharmacist or specialist to review dose, indication, interactions, and route of administration.',
    ],
  },
  {
    q: 'What should families monitor in postpartum or newborn concerns?',
    paragraphs: [
      'For newborns: breathing, color, feeding, responsiveness, tone, and seizure-like activity. For mothers: ongoing bleeding, fever, severe pain, or altered consciousness.',
      'Escalate quickly and keep prenatal, delivery, and neonatal records complete.',
    ],
  },
]
