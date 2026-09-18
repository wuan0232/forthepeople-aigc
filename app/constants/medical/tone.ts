/** Internal reference: medical + light rights education tone guide */
export const MEDICAL_TONE_AVOID = [
  'lawyer',
  'attorney',
  'lawsuit',
  'compensation',
  'verdict',
  'settlement',
  'hire us',
  'hire an attorney',
  'free case evaluation',
  'The Fee Is Free',
  'see if you qualify',
  'lawsuit qualification',
  'settlement amounts',
] as const

export const MEDICAL_TONE_PREFER = [
  'patient',
  'family',
  'understand what happened',
  'next steps',
  'action guide',
  'seek medical care',
  'preserve records',
  'second medical opinion',
  'clinic',
  'clinician',
  'recovery plan',
  'urgent warning signs',
] as const

/** Allowed light legal education (not attorney acquisition). */
export const MEDICAL_RIGHTS_EDUCATION_OK = [
  'preserve medical records and timelines',
  'informed consent basics',
  'complaint and medical review channels',
  'formal rights channels may be explored separately if needed',
] as const
