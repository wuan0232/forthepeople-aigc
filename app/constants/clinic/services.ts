export type ClinicService = {
  title: string
  text: string
}

export const CLINIC_SERVICES: ClinicService[] = [
  {
    title: 'Post-Accident Medical Review',
    text: 'Structured reassessment after ER or urgent care visits to catch delayed symptoms early.',
  },
  {
    title: 'Imaging & Record Coordination',
    text: 'Help organizing imaging reports, discharge notes, and medication timelines for clearer follow-up.',
  },
  {
    title: 'Specialist Referral Planning',
    text: 'Guidance on when neurology, orthopedics, pain management, or rehab input is needed.',
  },
  {
    title: 'Recovery Checklists',
    text: '48-hour and 7-day action lists tailored to crash, fall, and high-energy injury patterns.',
  },
]

export const CLINIC_INTRO =
  'For The People Clinic focuses on practical medical next steps after injury: stabilize, document, and plan safer follow-up with our clinicians.'
