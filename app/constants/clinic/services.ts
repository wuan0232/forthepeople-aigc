export type ClinicService = {
  title: string
  text: string
}

export const CLINIC_SERVICES: ClinicService[] = [
  { title: 'Not Sure Where to Start?', text: 'Tell the office what happened and why you want to be seen. Ask whether our specialist is a fit for your concern.' },
  { title: 'Spine & Neurosurgical Care', text: "Learn about Dr. Li's clinical focus on complex spine conditions and brain and spine tumors." },
  { title: 'Already Had Tests?', text: 'Let the office know about previous visits or scans. Ask which reports and images to bring.' },
  { title: 'Know What Comes Next', text: 'Ask about your options, your next appointment, and whom to call if you have questions.' },
]

export const CLINIC_INTRO =
  'Start with your questions. Learn about our specialist, bring the records you already have, and talk through your next steps. Call your preferred office to confirm which services are available.'
