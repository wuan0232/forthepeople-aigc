import type { FaqItem, IconCard, LearnLink, TextBlock } from '~/types/practice-area'

export const LIGHT_RIGHTS_BLOCKS: TextBlock[] = [
  {
    title: 'Keep a complete timeline',
    text: 'Save discharge papers, imaging reports, medication lists, and a simple symptom diary. Clear records support safer follow-up and any later review you may need.',
  },
  {
    title: 'Ask questions before major decisions',
    text: 'Informed consent means understanding purpose, risks, alternatives, and expected recovery before procedures or significant treatment changes.',
  },
  {
    title: 'Know basic review channels',
    text: 'Hospital patient relations, medical record requests, and second opinions are standard patient pathways. Formal rights channels can be explored separately if needed.',
  },
]

export const CLINIC_CTA_LEARN: { left: LearnLink[]; right: LearnLink[] } = {
  left: [
    { title: '5-Step Medical Action Guide', href: '/medical/what-to-do' },
    { title: 'Brain Injury Recovery Guide', href: '/practice-areas/brain-injury' },
    { title: 'Spinal Cord Injury Guide', href: '/practice-areas/spinal-cord-injury' },
  ],
  right: [
    { title: 'Medical Harm Overview', href: '/practice-areas/medical-malpractice' },
    { title: 'Contact the Clinic', href: '/contact' },
    { title: 'Patient Blog Resources', href: '/blog/medical-malpractice' },
  ],
}
