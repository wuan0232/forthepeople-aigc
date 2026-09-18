export type MedicalCategoryDetail = {
  slug: string
  title: string
  heroLead: string
  scenarios: { title: string; text: string }[]
  recognition: { title: string; paragraphs: string[] }
  actionSummary: string
  relatedReading: { title: string; href: string }[]
}

export const MEDICAL_CATEGORY_DETAILS: Record<string, MedicalCategoryDetail> = {
  misdiagnosis: {
    slug: 'misdiagnosis',
    title: 'Misdiagnosis & Delayed Diagnosis',
    heroLead:
      'When tests are missed or diagnosis is delayed, patients may lose critical treatment time. Learn what to watch and how to escalate safely.',
    scenarios: [
      {
        title: 'Delayed cancer diagnosis',
        text: 'Findings are not acted on quickly, or symptoms are repeatedly attributed to low-risk causes despite ongoing decline.',
      },
      {
        title: 'Acute emergency misclassification',
        text: 'Stroke or cardiac warning signs are treated as minor issues, delaying time-sensitive interventions.',
      },
      {
        title: 'Missed infection progression',
        text: 'Persistent fever and inflammatory markers are not re-evaluated quickly, allowing severe infection to worsen.',
      },
    ],
    recognition: {
      title: 'How to recognize possible diagnostic failure',
      paragraphs: [
        'Symptoms persist or worsen without reassessment of the working diagnosis.',
        'Clinical picture and test results conflict, but no follow-up plan is documented.',
        'A later specialist substantially revises the original diagnosis.',
      ],
    },
    actionSummary:
      'Stabilize first, preserve records, and seek a specialist second opinion with complete timeline and test history before formal escalation.',
    relatedReading: [
      { title: 'Delayed Diagnosis Red Flags', href: '/blog/medical-malpractice' },
      {
        title: 'How to Build a Medical Timeline',
        href: '/blog/posts/how-to-build-a-complete-medical-timeline',
      },
      {
        title: 'Getting a Useful Second Opinion',
        href: '/blog/posts/second-medical-opinion-patient-checklist',
      },
    ],
  },
  'medication-errors': {
    slug: 'medication-errors',
    title: 'Medication & Pharmacy Errors',
    heroLead:
      'Medication errors can involve dose, drug, route, timing, or interaction failures. Fast response and precise documentation are essential.',
    scenarios: [
      {
        title: 'Dose and unit mistakes',
        text: 'Adult/pediatric dose confusion or unit conversion errors (mg vs g) may lead to toxicity or ineffective treatment.',
      },
      {
        title: 'Wrong drug or duplicate active ingredient',
        text: 'Dispensing mistakes or overlapping prescriptions can cause accidental overdose.',
      },
      {
        title: 'Unrecognized contraindication or interaction',
        text: 'Known allergy or high-risk interaction is missed before administration.',
      },
    ],
    recognition: {
      title: 'Medication error vs expected side effect',
      paragraphs: [
        'Side effects can occur even with correct prescribing and administration.',
        'Medication error usually means preventable mismatch in dose, drug, route, or patient profile.',
        'Urgent symptoms after medication use require immediate clinical review.',
      ],
    },
    actionSummary:
      'Keep packaging, labels, prescriptions, and symptom timeline. Ask a pharmacist or specialist to review the regimen promptly.',
    relatedReading: [
      { title: 'Medication Error vs Side Effect', href: '/blog/medical-malpractice' },
      { title: 'What to Do After a Suspected Drug Error', href: '/blog/medical-malpractice' },
      {
        title: 'Timeline Documentation Checklist',
        href: '/blog/posts/how-to-build-a-complete-medical-timeline',
      },
    ],
  },
  'birth-injury': {
    slug: 'birth-injury',
    title: 'Birth Injury & Obstetric Harm',
    heroLead:
      'Complications during labor and delivery can affect both newborn and mother. Early recognition and timely escalation matter.',
    scenarios: [
      {
        title: 'Neonatal hypoxic injury risk',
        text: 'Poor neonatal response, low tone, or prolonged resuscitation can indicate oxygen-related injury risk.',
      },
      {
        title: 'Delivery-related trauma',
        text: 'Certain delivery complications may be associated with brachial plexus injury, fracture, or intracranial harm.',
      },
      {
        title: 'Delayed postpartum hemorrhage response',
        text: 'Uncontrolled bleeding without rapid intervention can become life-threatening.',
      },
    ],
    recognition: {
      title: 'Early signs families should monitor',
      paragraphs: [
        'Newborn: breathing pattern, color, feeding, tone, responsiveness, and abnormal movements.',
        'Mother: ongoing bleeding, fever, severe pain, blood pressure instability, or mental-status changes.',
        'Escalate concerns quickly and document events in sequence.',
      ],
    },
    actionSummary:
      'Retain prenatal, labor, delivery, and neonatal records; seek pediatric and obstetric specialist review as early as possible.',
    relatedReading: [
      { title: 'Birth Injury Early Warning Signs', href: '/blog/medical-malpractice' },
      { title: '5-Step Action Guide', href: '/medical/what-to-do' },
    ],
  },
  'surgical-errors': {
    slug: 'surgical-errors',
    title: 'Surgical Errors',
    heroLead:
      'Potential surgical errors include wrong-site procedures, retained foreign objects, or delayed response to post-op deterioration.',
    scenarios: [
      {
        title: 'Wrong-site or wrong-side procedure',
        text: 'Pre-op verification breakdowns can lead to severe preventable harm.',
      },
      {
        title: 'Retained surgical item',
        text: 'Persistent pain, infection, or unexplained findings may require imaging and urgent reassessment.',
      },
      {
        title: 'Delayed post-op intervention',
        text: 'Bleeding, sepsis, obstruction, or respiratory decline not addressed early can worsen outcomes.',
      },
    ],
    recognition: {
      title: 'Post-op warning signs to escalate',
      paragraphs: [
        'High fever, wound drainage changes, severe escalating pain, or ongoing vomiting.',
        'Breathing difficulty, chest pain, or unilateral leg swelling.',
        'Symptoms that clearly exceed expected recovery should be reviewed immediately.',
      ],
    },
    actionSummary:
      'Keep operative, anesthesia, pathology, and post-op records together and seek urgent review when red flags appear.',
    relatedReading: [
      { title: 'Expected Recovery vs Concerning Post-op Signs', href: '/blog/medical-malpractice' },
      { title: 'Recognizing Potential Surgical Error Signals', href: '/blog/medical-malpractice' },
    ],
  },
  'anesthesia-errors': {
    slug: 'anesthesia-errors',
    title: 'Anesthesia Errors',
    heroLead:
      'Anesthesia safety relies on proper assessment, dosing, monitoring, and airway management throughout the perioperative period.',
    scenarios: [
      {
        title: 'Dose or administration error',
        text: 'Incorrect dosing strategy may contribute to prolonged respiratory or hemodynamic instability.',
      },
      {
        title: 'Missed allergy or contraindication',
        text: 'Known allergy or high-risk condition not accounted for can cause severe complications.',
      },
      {
        title: 'Airway management failure',
        text: 'Intubation/extubation complications can lead to hypoxia and urgent post-op events.',
      },
    ],
    recognition: {
      title: 'Peri-anesthesia warning signs',
      paragraphs: [
        'Persistent confusion, respiratory distress, severe rash, or unexplained instability after anesthesia.',
        'Missing or unclear perioperative documentation should prompt follow-up questions.',
        'Keep anesthesia pre-assessment, intra-op notes, and recovery records.',
      ],
    },
    actionSummary:
      'Ask for a clear explanation of intraoperative events and obtain specialist review if documented events and recovery course do not align.',
    relatedReading: [
      { title: 'Anesthesia Risk Basics for Patients', href: '/blog/medical-malpractice' },
      { title: '5-Step Action Guide', href: '/medical/what-to-do' },
    ],
  },
  'dental-malpractice': {
    slug: 'dental-malpractice',
    title: 'Dental Malpractice',
    heroLead:
      'Dental treatment can involve nerve injury, infection, and procedural complications. Early symptom tracking improves follow-up quality.',
    scenarios: [
      {
        title: 'Nerve injury after extraction',
        text: 'Persistent numbness or neuropathic pain after procedures may require specialist reassessment.',
      },
      {
        title: 'Root canal or endodontic complications',
        text: 'Instrument fracture, perforation, or uncontrolled infection can cause prolonged pain and repeat treatment.',
      },
      {
        title: 'Infection control breakdown',
        text: 'Post-procedure infection with worsening swelling, fever, or drainage needs urgent clinical review.',
      },
    ],
    recognition: {
      title: 'When post-dental symptoms are concerning',
      paragraphs: [
        'Pain, swelling, or fever worsening beyond expected recovery window.',
        'Persistent lip/tongue numbness or progressive sensory changes.',
        'Non-healing wounds or recurrent purulent discharge.',
      ],
    },
    actionSummary:
      'Preserve imaging and treatment records, then seek oral surgery or endodontic second opinion when symptoms persist or escalate.',
    relatedReading: [
      { title: 'When Dental Treatment Goes Wrong', href: '/blog/medical-malpractice' },
      {
        title: 'How to Build a Medical Timeline',
        href: '/blog/posts/how-to-build-a-complete-medical-timeline',
      },
    ],
  },
}

export function getMedicalCategoryDetail(slug: string): MedicalCategoryDetail | undefined {
  return MEDICAL_CATEGORY_DETAILS[slug]
}
