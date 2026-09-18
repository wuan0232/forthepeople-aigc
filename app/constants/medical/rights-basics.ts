import type { TextBlock } from '~/types/practice-area'

export const MEDICAL_RIGHTS_BASICS = {
  headingId: 'patient-rights-heading',
  title: 'Patient Rights Basics',
  blocks: [
    {
      title: 'Informed Consent',
      text: 'Before surgery, anesthesia, transfusion, or other invasive procedures, you should receive clear information about purpose, risks, alternatives, and likely outcomes.',
    },
    {
      title: 'Access to Medical Records',
      text: 'Patients can request copies of clinical records such as admission notes, operative reports, lab results, and imaging reports. Complete records are essential for second opinions and review.',
    },
    {
      title: 'Second Medical Opinion',
      text: 'If you are unsure about a diagnosis or treatment plan, consulting another qualified specialist is a standard patient right and often improves decision quality.',
    },
    {
      title: 'Technical Review vs Other Pathways',
      text: 'Formal technical review, hospital complaints, and mediation channels serve different purposes. Most patients should prioritize stabilization and medical review before escalation.',
    },
  ] satisfies TextBlock[],
} as const
