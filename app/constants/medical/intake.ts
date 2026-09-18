import {
  aviationRecovery,
  boatingRecovery,
  burnRecovery,
  mesotheliomaRecovery,
  motorcycleRecovery,
  personalInjuryRecovery,
  workersCompRecovery,
} from '~/constants/injury-recovery'

/**
 * Non-identifying choices used by the public recovery-checklist tool.
 * These are passed in the URL only; no patient details are collected or stored.
 */
export type MedicalChecklistSelection = {
  caseType: string
  timing: string
  worsening: string
}

export type MedicalChecklistOption = {
  value: string
  label: string
}

export const MEDICAL_INTAKE_OPTIONS: MedicalChecklistOption[] = [
  { value: 'Car Accident', label: 'Car Crash Recovery' },
  { value: 'Slip and Fall', label: 'Fall Injury Recovery' },
  { value: 'Truck Accident', label: 'Truck Crash Recovery' },
  { value: 'Motorcycle Accident', label: 'Motorcycle Injury Recovery' },
  { value: 'Personal Injury', label: 'General Injury Recovery' },
  { value: 'Aviation Accident', label: 'Aviation Trauma Recovery' },
  { value: 'Boating Accident', label: 'Boating Injury Recovery' },
  { value: 'Brain Injury', label: 'Brain Injury Follow-Up' },
  { value: 'Burn Injury', label: 'Burn Injury Recovery' },
  { value: 'Mesothelioma', label: 'Mesothelioma Care Pathway' },
  { value: 'Spinal Cord Injury', label: 'Spinal Cord Injury Follow-Up' },
  { value: 'Medical Malpractice', label: 'Medical Harm Recovery' },
  { value: 'Dangerous Drugs', label: 'Medication Safety' },
  { value: 'Depo-Provera', label: 'Depo-Provera Safety Guide' },
  { value: 'Weight Loss Drug', label: 'GLP-1 & Weight Loss Drug Guide' },
]

export const MEDICAL_TIMING_OPTIONS: MedicalChecklistOption[] = [
  { value: 'today', label: 'Today or within the last 24 hours' },
  { value: '48h', label: 'Within the last 48 hours' },
  { value: 'week', label: 'Within the last 7 days' },
  { value: 'later', label: 'More than a week ago' },
]

export const MEDICAL_WORSENING_OPTIONS: MedicalChecklistOption[] = [
  { value: 'yes', label: 'Yes, symptoms are worsening or changing' },
  { value: 'no', label: 'No, symptoms are stable or improving' },
  { value: 'unsure', label: 'I am not sure' },
]

export type MedicalIntakePlan = {
  contextLabel: string
  recoveryGuideHref: string
  actionGuideHref: string
  redFlags: string[]
  next48h: string[]
  next7d: string[]
  focusNote: string
}

type RecoverySource = {
  hero: { lead: string }
  seo: { title: string }
  redFlags: string[]
  checklist48h: { title: string; text: string }[]
  checklist7day: { title: string; text: string }[]
}

function fromRecoverySource(source: RecoverySource, recoveryGuideHref: string): MedicalIntakePlan {
  return {
    contextLabel: source.seo.title.replace(' | For The People Clinic', ''),
    recoveryGuideHref,
    actionGuideHref: '/medical/what-to-do',
    redFlags: source.redFlags,
    next48h: source.checklist48h.map((item) => `${item.title}: ${item.text}`),
    next7d: source.checklist7day.map((item) => `${item.title}: ${item.text}`),
    focusNote: source.hero.lead,
  }
}

const DEFAULT_PLAN: MedicalIntakePlan = {
  contextLabel: 'General injury recovery',
  recoveryGuideHref: '/practice-areas/personal-injury',
  actionGuideHref: '/medical/what-to-do',
  redFlags: [
    'Severe or rapidly worsening pain',
    'Breathing difficulty, chest pain, or fainting',
    'Confusion, seizure, or new weakness',
    'Uncontrolled bleeding or signs of serious infection',
  ],
  next48h: [
    'Seek urgent care if any red-flag symptoms are present',
    'Save ER/urgent-care discharge notes and medication lists',
    'Start a simple daily symptom log (pain, sleep, function)',
    'Book a clinic follow-up even if you feel somewhat better',
  ],
  next7d: [
    'Ask whether recovery is on track or needs imaging/referral',
    'Review medications and side effects with a clinician',
    'Get clear activity and work limits in writing',
  ],
  focusNote: 'Focus on stabilization, documentation, and planned reassessment.',
}

const PLANS: Record<string, MedicalIntakePlan> = {
  'Car Accident': {
    contextLabel: 'Car crash recovery',
    recoveryGuideHref: '/practice-areas/car-accident',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Worsening headache, repeated vomiting, or confusion',
      'Chest pain, shortness of breath, or fainting',
      'New weakness, numbness, or inability to bear weight',
    ],
    next48h: [
      'Monitor for delayed neck, back, or concussion symptoms',
      'Collect crash-related visit records and imaging reports',
      'Log daily pain, sleep, and driving/work limits',
      'Schedule clinic reassessment within a few days',
    ],
    next7d: [
      'Reassess stalled pain or dizziness with your clinician',
      'Confirm whether orthopedics or neurology is needed',
      'Get guidance on safe return to driving and work',
    ],
    focusNote: 'Delayed whiplash and concussion signs are common—even after a mild crash.',
  },
  'Slip and Fall': {
    contextLabel: 'Fall injury recovery',
    recoveryGuideHref: '/practice-areas/slip-and-fall',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Head impact with confusion or repeated vomiting',
      'Hip or pelvis pain, especially in older adults',
      'Inability to walk or bear weight safely',
    ],
    next48h: [
      'Protect the injured area as instructed (ice, elevate, brace)',
      'Photograph swelling or bruising for follow-up comparison',
      'Save all visit notes and return precautions',
      'Book clinic follow-up if pain or instability persists',
    ],
    next7d: [
      'Ask whether imaging or casting is still needed',
      'Discuss fall-prevention steps at home',
      'Clarify stairs, driving, and work tolerances',
    ],
    focusNote: 'Falls can cause fractures or concussion with delayed presentation.',
  },
  'Truck Accident': {
    contextLabel: 'Truck crash recovery',
    recoveryGuideHref: '/practice-areas/truck-accident',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Chest or abdominal pain with breathing difficulty',
      'Progressive headache, confusion, or neurological changes',
      'Rapid swelling, cold extremity, or uncontrolled bleeding',
    ],
    next48h: [
      'Follow all trauma/ER return precautions exactly',
      'Centralize EMS, ER, and imaging records in one folder',
      'Track breathing, cognition, and limb symptoms daily',
      'Book coordinated clinic review for multi-system concerns',
    ],
    next7d: [
      'Confirm all imaging results were finalized and communicated',
      'Sequence orthopedics, neurology, or rehab as needed',
      'Avoid heavy work or driving until medically cleared',
    ],
    focusNote: 'High-energy crashes may need multi-specialty monitoring after discharge.',
  },
  'Brain Injury': {
    contextLabel: 'Brain injury follow-up',
    recoveryGuideHref: '/practice-areas/brain-injury',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Worsening headache, repeated vomiting, or confusion',
      'Seizure, unequal pupils, or reduced consciousness',
      'New weakness, speech changes, or severe agitation',
    ],
    next48h: [
      'Log cognitive, sleep, and mood symptoms twice daily',
      'Avoid unsupervised return to sports or driving if symptomatic',
      'Bring all head-injury imaging and discharge instructions',
      'Schedule neurology-oriented reassessment if symptoms persist',
    ],
    next7d: [
      'Compare symptom trends—not just day-one severity',
      'Ask about rehab, neuropsychology, or repeat imaging',
      'Discuss return-to-school/work pacing with your clinician',
    ],
    focusNote: 'TBI symptoms can evolve over days; trend tracking matters.',
  },
  'Spinal Cord Injury': {
    contextLabel: 'Spinal cord injury follow-up',
    recoveryGuideHref: '/practice-areas/spinal-cord-injury',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'New or worsening numbness, weakness, or coordination loss',
      'Bowel or bladder changes after spine trauma',
      'Severe neck/back pain with fever or rapid decline',
    ],
    next48h: [
      'Do not ignore progressive neurological symptoms',
      'Keep spine precautions from discharge instructions',
      'Document mobility, sensation, and bowel/bladder changes',
      'Request urgent reassessment for new neurological findings',
    ],
    next7d: [
      'Confirm rehab and specialist follow-up timing',
      'Review equipment needs (brace, mobility aids)',
      'Plan caregiver instructions and home safety',
    ],
    focusNote: 'Neurological changes after spine injury need prompt clinical review.',
  },
  'Medical Malpractice': {
    contextLabel: 'Medical harm recovery',
    recoveryGuideHref: '/practice-areas/medical-malpractice',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Severe pain, breathing trouble, or sudden deterioration',
      'Signs of infection, bleeding, or medication reaction',
      'Confusion or inability to care for yourself safely',
    ],
    next48h: [
      'Stabilize first—do not change prescribed treatment alone',
      'Request complete records from all involved facilities',
      'Build a date-ordered timeline of care and symptoms',
      'Prepare questions for second-opinion or clinic review',
    ],
    next7d: [
      'Seek second medical opinion if the plan feels unclear',
      'Organize imaging, operative notes, and medication lists',
      'Discuss recovery goals with your coordinating clinician',
    ],
    focusNote: 'Medical harm pathways start with safety, records, and clear reassessment.',
  },
  'Dangerous Drugs': {
    contextLabel: 'Medication safety',
    recoveryGuideHref: '/practice-areas/dangerous-drugs',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Severe allergic reaction, swelling, or breathing difficulty',
      'Chest pain, fainting, or persistent vomiting',
      'Suicidal thoughts or sudden severe mood changes',
    ],
    next48h: [
      'Contact your prescriber about severe or worsening reactions',
      'Save medication labels, dosing history, and visit notes',
      'Log symptom onset relative to dose changes',
      'Use emergency care for red-flag symptoms',
    ],
    next7d: [
      'Review whether the medication should be stopped or changed',
      'Ask about monitoring labs or specialist follow-up',
      'Discuss safer alternatives with a qualified clinician',
    ],
    focusNote: 'Medication concerns need prescriber input—avoid self-adjusting doses.',
  },
}

Object.assign(PLANS, {
  'Motorcycle Accident': fromRecoverySource(motorcycleRecovery, '/practice-areas/motorcycle-accident'),
  'Personal Injury': fromRecoverySource(personalInjuryRecovery, '/practice-areas/personal-injury'),
  'Aviation Accident': fromRecoverySource(aviationRecovery, '/practice-areas/aviation-accident'),
  'Boating Accident': fromRecoverySource(boatingRecovery, '/practice-areas/boating-accident'),
  'Burn Injury': fromRecoverySource(burnRecovery, '/practice-areas/burn-injury'),
  Mesothelioma: fromRecoverySource(mesotheliomaRecovery, '/practice-areas/mesothelioma'),
  'Workplace Injury': fromRecoverySource(workersCompRecovery, '/practice-areas/workers-compensation'),
  'Depo-Provera': {
    contextLabel: 'Depo-Provera safety guide',
    recoveryGuideHref: '/practice-areas/dangerous-drugs',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Chest pain, breathing difficulty, or coughing blood',
      'One-sided leg pain or swelling, especially with sudden onset',
      'Severe or unusual vaginal bleeding, fainting, or severe abdominal pain',
      'Severe headache, vision changes, weakness, or difficulty speaking',
    ],
    next48h: [
      'Seek urgent evaluation for any red-flag symptoms rather than waiting for the next injection visit.',
      'Record the injection date, symptom onset, and any medicines or supplements taken.',
      'Contact the prescribing clinician promptly about new or worsening symptoms.',
    ],
    next7d: [
      'Review ongoing symptoms and possible alternatives with the prescribing clinician.',
      'Ask whether follow-up for bone health, bleeding, or other reported symptoms is appropriate.',
      'Keep your medication and visit timeline available for every follow-up visit.',
    ],
    focusNote: 'Medication-related symptoms should be reviewed with the prescribing clinician; do not change treatment on your own.',
  },
  'Weight Loss Drug': {
    contextLabel: 'GLP-1 and weight-loss medication safety',
    recoveryGuideHref: '/practice-areas/dangerous-drugs/weight-loss-drug',
    actionGuideHref: '/medical/what-to-do',
    redFlags: [
      'Severe or persistent abdominal pain, especially if it radiates to the back',
      'Repeated vomiting, inability to keep fluids down, or signs of dehydration',
      'Yellowing of skin or eyes, dark urine, or severe upper abdominal pain',
      'Severe low-blood-sugar symptoms, fainting, swelling, or breathing difficulty',
    ],
    next48h: [
      'Contact the prescribing team about severe or worsening symptoms; seek emergency care for red flags.',
      'Record dose dates, food and fluid intake, and the timing of symptoms.',
      'Do not self-adjust doses or restart a medication without qualified clinical guidance.',
    ],
    next7d: [
      'Review side effects, hydration, and nutrition concerns with the prescribing clinician.',
      'Ask whether laboratory monitoring, dose changes, or alternate treatment needs discussion.',
      'Bring your medication timeline to the next follow-up appointment.',
    ],
    focusNote: 'GLP-1 side effects can require prompt clinical review; avoid making dose changes without prescriber guidance.',
  },
})

export type ChecklistPresentation = {
  priority: 'urgent' | 'caution' | 'routine'
  message: string
  firstSection: '48h' | '7d'
}

export function getChecklistPresentation(timing: string, worsening: string): ChecklistPresentation {
  if (worsening === 'yes') {
    return {
      priority: 'urgent',
      message:
        'Symptoms are worsening or changing. Do not wait for a routine follow-up; review the warning signs below and seek urgent care or emergency help when they apply.',
      firstSection: '48h',
    }
  }
  if (worsening === 'unsure') {
    return {
      priority: 'caution',
      message:
        'If you are unsure whether symptoms are changing, use the more cautious option: contact a clinician for guidance and seek urgent evaluation if any warning signs apply.',
      firstSection: timing === 'week' || timing === 'later' ? '7d' : '48h',
    }
  }
  if (timing === 'week' || timing === 'later') {
    return {
      priority: 'routine',
      message:
        'Because this began more than 48 hours ago, focus on whether recovery is improving as expected and arrange reassessment if symptoms persist, return, or limit daily function.',
      firstSection: '7d',
    }
  }
  return {
    priority: 'routine',
    message:
      'Early after an injury or health concern, prioritize safety, complete discharge instructions, and keep records ready for follow-up.',
    firstSection: '48h',
  }
}

export function getMedicalIntakePlan(caseType: string): MedicalIntakePlan {
  return PLANS[caseType] ?? DEFAULT_PLAN
}

export function getMedicalIntakeOptionLabel(value: string): string {
  return MEDICAL_INTAKE_OPTIONS.find((o) => o.value === value)?.label ?? (value || 'General injury recovery')
}
