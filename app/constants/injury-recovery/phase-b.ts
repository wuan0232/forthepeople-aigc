import type { FaqItem, IconCard, TextBlock } from '~/types/practice-area'

export type InjuryRecoveryPage = {
  hero: { breadcrumbLabel: string; title: string; lead: string }
  seo: { title: string; description: string }
  prioritiesTitle: string
  priorities: TextBlock[]
  redFlagsIntro: string
  redFlags: string[]
  patternsTitle: string
  injuryPatterns: IconCard[]
  checklist48h: TextBlock[]
  checklist7day: TextBlock[]
  cliniciansIntro: string
  guideDescription: string
  presetCaseType: string
  faqAside: string[]
  faqItems: FaqItem[]
  faqRegion: string
}

const icon = (paths: string) =>
  `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2">${paths}</svg>`

export const motorcycleRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Motorcycle Accident',
    title: 'After a Motorcycle Crash: Medical Recovery Guide',
    lead: 'Motorcycle crashes often cause road rash, fractures, and head or spine concerns. Prioritize urgent evaluation, then structured follow-up.',
  },
  seo: {
    title: 'Motorcycle Crash Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused motorcycle crash recovery: red flags, common injuries, 48-hour checklists, light rights basics, and clinic clinician support.',
  },
  prioritiesTitle: 'Clinical Priorities After a Motorcycle Crash',
  priorities: [
    {
      title: 'Assume higher injury energy',
      text: 'Even at moderate speeds, riders absorb more force. Do not minimize pain, numbness, or delayed dizziness.',
    },
    {
      title: 'Protect skin and soft tissue',
      text: 'Road rash needs clean wound care guidance to reduce infection and scarring risk.',
    },
    {
      title: 'Screen for head and spine injury',
      text: 'Helmet use reduces risk but does not eliminate concussion or cervical injury concerns.',
    },
    {
      title: 'Plan staged return to riding/work',
      text: 'Get clinician clearance for balance, reaction time, and wound healing before returning to high-risk activity.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after a motorcycle crash:',
  redFlags: [
    'Loss of consciousness, worsening headache, or repeated vomiting',
    'Neck/back pain with numbness, weakness, or bowel/bladder changes',
    'Deep wounds, rapidly expanding swelling, or signs of infection',
    'Chest pain, breathing difficulty, or severe abdominal pain',
    'Inability to bear weight or visibly deformed joints/limbs',
  ],
  patternsTitle: 'Common Motorcycle Injury Patterns',
  injuryPatterns: [
    {
      title: 'Road Rash & Soft-Tissue Trauma',
      text: 'Abrasion depth varies. Persistent drainage, fever, or spreading redness needs prompt review.',
      icon: icon('<path d="M12 30c8-10 16-10 24 0"/><path d="M16 18h16"/>'),
    },
    {
      title: 'Orthopedic Fractures',
      text: 'Clavicle, wrist, ankle, and lower-leg fractures are common. Instability or deformity needs urgent imaging follow-up.',
      icon: icon('<rect x="14" y="10" width="20" height="28" rx="3"/><path d="M18 22h12"/>'),
    },
    {
      title: 'Concussion Risk',
      text: 'Cognitive fog, light sensitivity, and sleep disruption can appear hours later and deserve monitoring.',
      icon: icon('<circle cx="24" cy="22" r="12"/><path d="M18 22h12"/>'),
    },
    {
      title: 'Shoulder & Hip Impact Injury',
      text: 'Side-impact falls frequently injure the shoulder girdle and pelvis; progressive pain should not be ignored.',
      icon: icon('<circle cx="24" cy="14" r="5"/><path d="M16 42l8-18 8 18"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Complete wound and trauma instructions',
      text: 'Follow cleaning, dressing, tetanus, and return precautions exactly as written.',
    },
    {
      title: 'Save EMS/ER records',
      text: 'Keep mechanism details, imaging, and medication lists together for clinic review.',
    },
    {
      title: 'Track delayed neurological symptoms',
      text: 'Note headache, concentration changes, nausea, and sleep quality daily.',
    },
    {
      title: 'Book clinic follow-up',
      text: 'Schedule reassessment for wounds, fractures, and concussion symptoms within days.',
    },
  ],
  checklist7day: [
    {
      title: 'Reassess healing and infection signs',
      text: 'Ask about antibiotics, dressing changes, or specialty wound care if recovery stalls.',
    },
    {
      title: 'Confirm imaging follow-through',
      text: 'Verify whether fracture clinics or orthopedics recommended additional studies.',
    },
    {
      title: 'Plan safe mobility progression',
      text: 'Discuss crutches, PT timing, and when driving or riding is medically inappropriate.',
    },
  ],
  cliniciansIntro:
    'Our clinicians help riders organize wound care, fracture follow-up, and concussion monitoring after motorcycle crashes.',
  guideDescription:
    'Use a structured patient checklist to stabilize, document, and escalate care after motorcycle trauma.',
  presetCaseType: 'Motorcycle Accident',
  faqAside: [
    'When should I return to the ER after a motorcycle crash?',
    'How do I care for road rash safely?',
    'When can I ride again?',
  ],
  faqItems: [
    {
      q: 'When should I return to the ER after a motorcycle crash?',
      paragraphs: [
        'Go urgently for neurological changes, severe chest/abdominal pain, uncontrolled bleeding, infection signs, or new weakness/numbness.',
      ],
    },
    {
      q: 'How do I care for road rash safely?',
      paragraphs: [
        'Follow clinician cleaning and dressing guidance. Do not ignore fever, spreading redness, foul drainage, or increasing pain.',
      ],
    },
    {
      q: 'When can I ride or drive again?',
      paragraphs: [
        'Ask your clinician. Clearance depends on pain control, reaction time, wound status, fracture stability, and medication side effects.',
      ],
    },
    {
      q: 'Should I keep records after a motorcycle crash?',
      paragraphs: [
        'Yes. Complete records support safer follow-up and any later patient-review process if needed.',
      ],
    },
  ],
  faqRegion: 'Motorcycle crash patient FAQs',
}

export const personalInjuryRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Personal Injury',
    title: 'After an Injury: Medical Recovery Guide',
    lead: 'Whether your injury came from a crash, fall, or another sudden event, start with medical stability, clear documentation, and planned follow-up.',
  },
  seo: {
    title: 'Injury Medical Recovery Guide | For The People Clinic',
    description:
      'General post-injury medical recovery guidance: urgent symptoms, documentation, checklists, light rights basics, and clinic clinician support.',
  },
  prioritiesTitle: 'Clinical Priorities After Injury',
  priorities: [
    {
      title: 'Treat emergencies first',
      text: 'Breathing trouble, severe bleeding, chest pain, confusion, or major trauma need emergency care immediately.',
    },
    {
      title: 'Build a medical timeline',
      text: 'Record when symptoms started, what worsened, which tests were done, and what instructions you received.',
    },
    {
      title: 'Match follow-up to injury type',
      text: 'Soft-tissue, fracture, concussion, and internal-injury pathways differ—ask which track you are on.',
    },
    {
      title: 'Reassess if recovery stalls',
      text: 'Persistent or worsening symptoms deserve clinician review rather than watchful waiting alone.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after an injury:',
  redFlags: [
    'Severe or rapidly worsening pain',
    'Neurological changes: confusion, weakness, speech or vision changes',
    'Chest pain, shortness of breath, or fainting',
    'Uncontrolled bleeding or signs of serious infection',
    'Inability to use a limb or bear weight safely',
  ],
  patternsTitle: 'Common Injury Categories We Help Patients Navigate',
  injuryPatterns: [
    {
      title: 'Musculoskeletal Injury',
      text: 'Sprains, strains, and joint trauma often need staged rehab and clear return-to-activity rules.',
      icon: icon('<path d="M24 8v32M16 16h16M18 32h12"/>'),
    },
    {
      title: 'Head & Neck Concerns',
      text: 'Delayed headache, dizziness, and cognitive changes should be monitored carefully after impact.',
      icon: icon('<circle cx="24" cy="18" r="8"/><path d="M16 36c3-6 6-8 8-8s5 2 8 8"/>'),
    },
    {
      title: 'Wound & Soft-Tissue Care',
      text: 'Lacerations and contusions need infection watchfulness and proper dressing follow-through.',
      icon: icon('<path d="M12 24h24M24 12v24"/>'),
    },
    {
      title: 'Multi-Visit Recovery Plans',
      text: 'Some injuries require imaging, specialist input, and therapy sequencing over several weeks.',
      icon: icon('<rect x="10" y="12" width="28" height="24" rx="3"/><path d="M16 20h16M16 28h10"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Stabilize and follow discharge instructions',
      text: 'Medications, activity limits, and return precautions are part of early safety.',
    },
    {
      title: 'Collect records in one place',
      text: 'Visit summaries, imaging, and medication lists make later appointments more effective.',
    },
    {
      title: 'Start a short symptom log',
      text: 'Pain score, sleep, function, and red-flag checks help identify trends.',
    },
    {
      title: 'Schedule clinic review',
      text: 'Book follow-up even if you feel somewhat better—early course-correction matters.',
    },
  ],
  checklist7day: [
    {
      title: 'Confirm whether recovery is on track',
      text: 'Ask if stalled progress needs imaging, referral, or therapy changes.',
    },
    {
      title: 'Medication and side-effect review',
      text: 'Report drowsiness, stomach issues, or inadequate pain control.',
    },
    {
      title: 'Define work and activity limits',
      text: 'Get written guidance for lifting, driving, sports, and desk/standing tolerances.',
    },
  ],
  cliniciansIntro:
    'Our clinicians help patients turn a confusing injury timeline into a practical medical follow-up plan.',
  guideDescription:
    'Follow a clear five-step pathway for documentation, reassessment, and safer recovery decisions.',
  presetCaseType: 'Personal Injury',
  faqAside: [
    'Do all injuries need imaging?',
    'What belongs in a symptom log?',
    'When should I ask for a specialist?',
  ],
  faqItems: [
    {
      q: 'Do all injuries need imaging?',
      paragraphs: [
        'No. Imaging depends on mechanism, exam findings, age, and symptom progression. Worsening function often triggers reassessment.',
      ],
    },
    {
      q: 'What belongs in a symptom log?',
      paragraphs: [
        'Date/time, pain location and intensity, sleep, medications taken, activity limits, and any new warning signs.',
      ],
    },
    {
      q: 'When should I ask for a specialist?',
      paragraphs: [
        'Ask when symptoms persist, neurological findings appear, wounds complicate, or your clinician recommends orthopedics, neurology, or rehab.',
      ],
    },
    {
      q: 'Why preserve medical records?',
      paragraphs: [
        'Records improve second opinions and care continuity. They also support any later patient-review process if needed.',
      ],
    },
  ],
  faqRegion: 'General injury patient FAQs',
}

export const aviationRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Aviation Accident',
    title: 'After an Aviation Incident: Medical Recovery Guide',
    lead: 'Aviation trauma can involve high forces, burns, and delayed internal injury. Prioritize emergency evaluation and coordinated specialty follow-up.',
  },
  seo: {
    title: 'Aviation Trauma Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused aviation incident recovery: trauma red flags, injury patterns, checklists, light rights basics, and clinic support.',
  },
  prioritiesTitle: 'Clinical Priorities After Aviation Trauma',
  priorities: [
    {
      title: 'Expect multi-system trauma risk',
      text: 'Impact, fire, smoke, and abrupt deceleration can affect lungs, spine, brain, and soft tissue together.',
    },
    {
      title: 'Do not ignore delayed symptoms',
      text: 'Breathing changes, abdominal pain, and neurological findings may evolve after initial stabilization.',
    },
    {
      title: 'Coordinate specialty care early',
      text: 'Trauma, burn, pulmonary, neurology, and rehab teams may all be needed depending on findings.',
    },
    {
      title: 'Centralize records across facilities',
      text: 'Transfers between hospitals are common—keep a master timeline of tests and diagnoses.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after an aviation incident:',
  redFlags: [
    'Breathing difficulty, chest pain, or smoke-inhalation symptoms',
    'Severe burns, airway swelling, or singed facial hair with voice change',
    'Confusion, seizure, or progressive headache',
    'Abdominal pain, fainting, or uncontrolled bleeding',
    'Spinal pain with weakness, numbness, or bowel/bladder changes',
  ],
  patternsTitle: 'Common Aviation-Related Injury Patterns',
  injuryPatterns: [
    {
      title: 'Deceleration & Blunt Trauma',
      text: 'High-force impact can injure organs and the spine even when external wounds look limited.',
      icon: icon('<path d="M8 24h32M24 8v32"/>'),
    },
    {
      title: 'Burn & Inhalation Injury',
      text: 'Airway and lung involvement can progress; voice changes and breathing effort need urgent review.',
      icon: icon('<path d="M24 10c6 8 6 14 0 28-6-14-6-20 0-28z"/>'),
    },
    {
      title: 'Head & Cervical Injury',
      text: 'Concussion and neck trauma require serial monitoring after sudden deceleration events.',
      icon: icon('<circle cx="24" cy="18" r="8"/><path d="M20 28v12M28 28v12"/>'),
    },
    {
      title: 'Fracture & Soft-Tissue Complexes',
      text: 'Multiple fractures and crush patterns need staged orthopedic and rehab planning.',
      icon: icon('<rect x="12" y="12" width="24" height="24" rx="3"/><path d="M18 24h12"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Follow trauma/burn return precautions',
      text: 'Know exactly which symptoms trigger immediate return to emergency care.',
    },
    {
      title: 'Assemble multi-facility records',
      text: 'Include EMS, receiving hospital, transfer notes, imaging, and medication lists.',
    },
    {
      title: 'Monitor breathing and cognition',
      text: 'Track oxygen needs if any, voice changes, headache, and alertness.',
    },
    {
      title: 'Book coordinated clinic review',
      text: 'A single coordinating visit helps sequence outstanding specialty needs.',
    },
  ],
  checklist7day: [
    {
      title: 'Confirm outstanding test results',
      text: 'Ask whether all imaging and labs were finalized and communicated.',
    },
    {
      title: 'Wound/burn care continuity',
      text: 'Verify dressing plans, infection watchpoints, and specialty burn follow-up.',
    },
    {
      title: 'Rehab readiness check',
      text: 'Discuss mobility, pain control, and when therapy can begin safely.',
    },
  ],
  cliniciansIntro:
    'Our clinic helps patients organize complex post-aviation trauma follow-up across specialties.',
  guideDescription:
    'Use the medical action guide to structure monitoring, documentation, and escalation after aviation trauma.',
  presetCaseType: 'Aviation Accident',
  faqAside: [
    'Why can aviation injuries evolve after discharge?',
    'What records matter most after transfer?',
    'When is breathing change an emergency?',
  ],
  faqItems: [
    {
      q: 'Why can aviation injuries evolve after discharge?',
      paragraphs: [
        'Occult bleeding, inhalation injury, concussion, and soft-tissue swelling can progress over hours to days.',
      ],
    },
    {
      q: 'What records matter most after hospital transfer?',
      paragraphs: [
        'Mechanism notes, imaging reports, operative summaries if any, medication lists, and explicit return precautions.',
      ],
    },
    {
      q: 'When is a breathing change an emergency?',
      paragraphs: [
        'Any new or worsening shortness of breath, chest pain, voice change, or oxygen-need increase needs urgent evaluation.',
      ],
    },
    {
      q: 'Should I preserve records after an aviation incident?',
      paragraphs: [
        'Yes. Organized timelines support safer care and any later patient-review process if needed.',
      ],
    },
  ],
  faqRegion: 'Aviation trauma patient FAQs',
}

export const boatingRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Boating Accident',
    title: 'After a Boating Accident: Medical Recovery Guide',
    lead: 'Boating injuries can include impact trauma, drowning-related hypoxia, propeller wounds, and delayed lung complications. Medical monitoring comes first.',
  },
  seo: {
    title: 'Boating Injury Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused boating injury recovery: red flags, common patterns, checklists, light rights basics, and clinic clinician support.',
  },
  prioritiesTitle: 'Clinical Priorities After a Boating Injury',
  priorities: [
    {
      title: 'Respect water-related complications',
      text: 'Near-drowning, aspiration, and cold-water exposure can cause delayed breathing problems.',
    },
    {
      title: 'Evaluate impact and propeller trauma',
      text: 'Lacerations and blunt injuries may hide deeper tissue or organ damage.',
    },
    {
      title: 'Watch infection risk in wounds',
      text: 'Water-exposed wounds need careful cleaning guidance and infection monitoring.',
    },
    {
      title: 'Plan follow-up before returning to water sports',
      text: 'Balance, wound status, and lung recovery should guide return-to-activity decisions.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after a boating injury:',
  redFlags: [
    'Breathing difficulty, persistent cough, or chest pain after water exposure',
    'Confusion, blue lips, or extreme fatigue after a near-drowning event',
    'Deep lacerations, uncontrolled bleeding, or rapidly worsening wound pain',
    'Head/neck trauma symptoms: vomiting, weakness, severe headache',
    'Hypothermia signs: intense shivering, confusion, or very cold skin',
  ],
  patternsTitle: 'Common Boating Injury Patterns',
  injuryPatterns: [
    {
      title: 'Aspiration & Lung Concerns',
      text: 'Symptoms can appear after an initially reassuring period. Breathing changes need urgent review.',
      icon: icon('<ellipse cx="24" cy="24" rx="14" ry="18"/><path d="M24 14v20"/>'),
    },
    {
      title: 'Impact & Fall-Overboard Trauma',
      text: 'Deck slips and collisions can cause concussion, fractures, and soft-tissue injury.',
      icon: icon('<circle cx="24" cy="14" r="5"/><path d="M16 42l8-18 8 18"/>'),
    },
    {
      title: 'Propeller & Laceration Injury',
      text: 'Deep cuts need thorough evaluation for tendon, nerve, and vascular involvement.',
      icon: icon('<path d="M12 24h24M20 16l8 16M28 16l-8 16"/>'),
    },
    {
      title: 'Cold-Water Exposure Effects',
      text: 'Hypothermia and delayed systemic symptoms require monitoring beyond the scene.',
      icon: icon('<circle cx="24" cy="24" r="12"/><path d="M24 16v10M24 30h.01"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Monitor breathing closely',
      text: 'Return urgently for cough, wheeze, chest pain, or oxygen-need changes after water inhalation.',
    },
    {
      title: 'Follow wound-care instructions',
      text: 'Water-exposed wounds need disciplined cleaning and early infection checks.',
    },
    {
      title: 'Save all visit records',
      text: 'Include EMS notes, ER summaries, imaging, and medication guidance.',
    },
    {
      title: 'Schedule clinic reassessment',
      text: 'Book follow-up for lung, wound, and musculoskeletal concerns within days.',
    },
  ],
  checklist7day: [
    {
      title: 'Confirm wound healing trajectory',
      text: 'Ask about antibiotics, sutures, or specialty hand/trauma follow-up if needed.',
    },
    {
      title: 'Reassess lung recovery',
      text: 'Persistent cough or reduced exercise tolerance deserves clinician review.',
    },
    {
      title: 'Return-to-water guidance',
      text: 'Get clear medical advice before swimming, boating, or heavy deck work again.',
    },
  ],
  cliniciansIntro:
    'Our clinicians help patients monitor post-boating lung, wound, and trauma recovery with practical follow-up plans.',
  guideDescription:
    'Use the five-step medical guide to track delayed symptoms and organize safer follow-up after boating injuries.',
  presetCaseType: 'Boating Accident',
  faqAside: [
    'Can breathing problems appear later?',
    'How serious are propeller cuts?',
    'When is returning to the water safe?',
  ],
  faqItems: [
    {
      q: 'Can breathing problems appear later after water exposure?',
      paragraphs: [
        'Yes. Delayed pulmonary complications are a known concern after near-drowning or aspiration—treat new breathing symptoms urgently.',
      ],
    },
    {
      q: 'How serious are propeller-related cuts?',
      paragraphs: [
        'They can involve deep structures and high infection risk. Specialty evaluation is often appropriate.',
      ],
    },
    {
      q: 'When is returning to the water safe?',
      paragraphs: [
        'Only after clinician clearance based on wound healing, lung status, medications, and functional recovery.',
      ],
    },
    {
      q: 'Should I keep records after a boating injury?',
      paragraphs: [
        'Yes. Records support safer care continuity and any later patient-review process if needed.',
      ],
    },
  ],
  faqRegion: 'Boating injury patient FAQs',
}

export const burnRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Burn Injury',
    title: 'Burn Injury: Medical Recovery Guide',
    lead: 'Burn care focuses on airway safety, wound depth assessment, infection prevention, pain control, and staged healing. Early specialist input can change outcomes.',
  },
  seo: {
    title: 'Burn Injury Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused burn recovery guidance: urgent warning signs, wound-care priorities, checklists, light rights basics, and clinic support.',
  },
  prioritiesTitle: 'Clinical Priorities After a Burn',
  priorities: [
    {
      title: 'Protect airway and breathing first',
      text: 'Facial burns, soot, voice change, or enclosed-space smoke exposure can signal airway risk.',
    },
    {
      title: 'Understand burn depth and extent',
      text: 'Depth and body-surface involvement guide whether specialty burn care is needed.',
    },
    {
      title: 'Prevent infection and scarring complications',
      text: 'Dressing discipline, hygiene, and early complication checks are central to recovery.',
    },
    {
      title: 'Plan nutrition, pain, and rehab support',
      text: 'Healing is systemic—ask about pain plans, hydration/nutrition, and mobility guidance.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after a burn:',
  redFlags: [
    'Breathing difficulty, voice change, or facial/neck swelling',
    'Large, deep, circumferential, or electrical burns',
    'Burns involving eyes, hands, feet, genitals, or major joints',
    'Fever, spreading redness, foul drainage, or rapidly worsening pain',
    'Confusion, fainting, or signs of severe dehydration',
  ],
  patternsTitle: 'Common Burn Care Focus Areas',
  injuryPatterns: [
    {
      title: 'Thermal Burns',
      text: 'Heat contact depth can be underestimated early. Reassessment of blistering and sensation matters.',
      icon: icon('<path d="M24 8c8 10 8 18 0 32-8-14-8-22 0-32z"/>'),
    },
    {
      title: 'Chemical Burns',
      text: 'Require specific decontamination guidance. Do not neutralize unknown chemicals without clinical advice.',
      icon: icon('<circle cx="24" cy="24" r="12"/><path d="M18 24h12"/>'),
    },
    {
      title: 'Electrical Injury',
      text: 'External marks may understate internal injury. Cardiac and tissue monitoring may be needed.',
      icon: icon('<path d="M26 8l-8 18h8l-6 14 14-20h-8l6-12z"/>'),
    },
    {
      title: 'Inhalation Injury',
      text: 'Smoke exposure can affect airway and lungs with delayed deterioration—monitor breathing closely.',
      icon: icon('<ellipse cx="24" cy="24" rx="12" ry="16"/><path d="M24 14v20"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Follow exact dressing instructions',
      text: 'Do not improvise ointments or home remedies that conflict with clinician guidance.',
    },
    {
      title: 'Watch infection and airway signs',
      text: 'Fever, spreading redness, breathing changes, or voice changes need urgent review.',
    },
    {
      title: 'Keep a care log',
      text: 'Record dressing changes, pain scores, fluid intake, and medication times.',
    },
    {
      title: 'Confirm burn-clinic follow-up',
      text: 'Ask whether specialty burn assessment is indicated based on depth and location.',
    },
  ],
  checklist7day: [
    {
      title: 'Reassess depth and healing',
      text: 'Some burns declare deeper injury after several days—ask for re-evaluation.',
    },
    {
      title: 'Scar and mobility planning',
      text: 'Discuss range-of-motion exercises and when therapy should begin.',
    },
    {
      title: 'Pain and itch management',
      text: 'Report uncontrolled pain, sleep loss, or concerning medication side effects.',
    },
  ],
  cliniciansIntro:
    'Our clinicians help patients organize burn follow-up, infection monitoring, and healing checkpoints.',
  guideDescription:
    'Use the five-step guide to structure burn warning-sign checks, documentation, and escalation decisions.',
  presetCaseType: 'Burn Injury',
  faqAside: [
    'Which burns need specialty care?',
    'How do I spot infection early?',
    'When should scarring concerns be addressed?',
  ],
  faqItems: [
    {
      q: 'Which burns need specialty burn care?',
      paragraphs: [
        'Large, deep, electrical, chemical, inhalation-associated, or functionally critical-area burns often need specialty pathways.',
      ],
    },
    {
      q: 'How do I spot infection early?',
      paragraphs: [
        'Watch for fever, spreading redness, increasing pain, pus, foul odor, or red streaking—seek care promptly.',
      ],
    },
    {
      q: 'When should scarring and mobility be addressed?',
      paragraphs: [
        'Early. Ask about range-of-motion plans and timing for therapy before stiffness sets in.',
      ],
    },
    {
      q: 'Should I preserve burn-care records?',
      paragraphs: [
        'Yes. Dressing plans, photos (if advised), and visit notes support continuity and later review if needed.',
      ],
    },
  ],
  faqRegion: 'Burn injury patient FAQs',
}

export const mesotheliomaRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Mesothelioma',
    title: 'Mesothelioma Care Pathway: Patient Medical Guide',
    lead: 'This page focuses on understanding diagnosis pathways, symptom monitoring, multidisciplinary care, and practical next steps—not litigation.',
  },
  seo: {
    title: 'Mesothelioma Patient Care Pathway | For The People Clinic',
    description:
      'Patient-focused mesothelioma guidance: symptom monitoring, care-team coordination, records, light rights basics, and clinic support.',
  },
  prioritiesTitle: 'Clinical Priorities in Mesothelioma Care',
  priorities: [
    {
      title: 'Confirm diagnosis with complete records',
      text: 'Pathology, imaging, and specialist notes should be organized before major treatment decisions.',
    },
    {
      title: 'Build a multidisciplinary plan',
      text: 'Oncology, pulmonology, thoracic surgery, palliative care, and primary care often collaborate.',
    },
    {
      title: 'Track symptoms that change urgency',
      text: 'Breathing changes, chest pain, unexplained weight loss, and new neurological symptoms need prompt reporting.',
    },
    {
      title: 'Ask about second opinions early',
      text: 'Complex diagnoses commonly benefit from additional specialty review before irreversible decisions.',
    },
  ],
  redFlagsIntro: 'Contact your care team urgently or seek emergency care if any of these occur:',
  redFlags: [
    'Sudden or severe shortness of breath',
    'Chest pain, coughing blood, or fainting',
    'High fever with rapidly worsening symptoms',
    'New confusion, severe weakness, or uncontrolled pain',
    'Swelling with calf pain or suspected clot symptoms',
  ],
  patternsTitle: 'Care Topics Patients Commonly Navigate',
  injuryPatterns: [
    {
      title: 'Diagnostic Clarity',
      text: 'Understanding biopsy results and imaging stages helps patients ask better treatment questions.',
      icon: icon('<rect x="12" y="10" width="24" height="28" rx="3"/><path d="M18 18h12M18 26h8"/>'),
    },
    {
      title: 'Breathing Symptom Management',
      text: 'Track oxygen needs, cough, and activity tolerance between oncology visits.',
      icon: icon('<ellipse cx="24" cy="24" rx="12" ry="16"/><path d="M24 14v20"/>'),
    },
    {
      title: 'Treatment Decision Support',
      text: 'Surgery, systemic therapy, and supportive care options should be compared with clear goals.',
      icon: icon('<circle cx="24" cy="24" r="12"/><path d="M24 16v16M16 24h16"/>'),
    },
    {
      title: 'Supportive & Palliative Coordination',
      text: 'Symptom control and quality-of-life planning are medical priorities at every stage.',
      icon: icon('<path d="M24 10v28M14 20h20"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Request a complete record set',
      text: 'Pathology, CT/PET reports, medication lists, and specialist letters in one packet/portal.',
    },
    {
      title: 'List top symptom concerns',
      text: 'Breathing, pain, appetite, sleep, and side effects should be ranked for the next visit.',
    },
    {
      title: 'Confirm upcoming appointments',
      text: 'Know which clinician owns the next decision and what questions to bring.',
    },
    {
      title: 'Identify caregiver support',
      text: 'Bring a trusted person to complex visits when possible to help capture instructions.',
    },
  ],
  checklist7day: [
    {
      title: 'Clarify treatment goals',
      text: 'Ask what success looks like for the next month: disease control, symptom relief, or both.',
    },
    {
      title: 'Second-opinion logistics',
      text: 'If desired, request records transfer and a timely specialty review slot.',
    },
    {
      title: 'Supportive-care check-in',
      text: 'Discuss nutrition, pain, breathing support, and mental-health resources.',
    },
  ],
  cliniciansIntro:
    'Our clinic helps patients organize records, questions, and follow-up coordination around complex thoracic diagnoses.',
  guideDescription:
    'Use the medical action guide to structure records, questions, and escalation decisions during complex care.',
  presetCaseType: 'Mesothelioma',
  faqAside: [
    'What should I bring to oncology visits?',
    'When is a second opinion useful?',
    'Which symptoms are urgent?',
  ],
  faqItems: [
    {
      q: 'What should I bring to oncology visits?',
      paragraphs: [
        'A medication list, recent imaging reports, pathology results, symptom log, and ranked questions.',
      ],
    },
    {
      q: 'When is a second opinion useful?',
      paragraphs: [
        'Often before major surgery or systemic therapy decisions, or when diagnosis/treatment recommendations feel unclear.',
      ],
    },
    {
      q: 'Which symptoms are urgent?',
      paragraphs: [
        'Sudden breathing difficulty, chest pain, coughing blood, fainting, high fever with decline, or uncontrolled pain.',
      ],
    },
    {
      q: 'Why keep meticulous records?',
      paragraphs: [
        'They improve care coordination and second opinions. They can also support later patient-review processes if needed.',
      ],
    },
  ],
  faqRegion: 'Mesothelioma patient FAQs',
}

export const workersCompRecovery: InjuryRecoveryPage = {
  hero: {
    breadcrumbLabel: 'Workers Compensation',
    title: 'Workplace Injury: Medical Recovery Guide',
    lead: 'After a work injury, prioritize medical evaluation, clear documentation, and safe return-to-work planning. This page is medical-first with light rights education only.',
  },
  seo: {
    title: 'Workplace Injury Medical Recovery Guide | For The People Clinic',
    description:
      'Patient-focused workplace injury recovery: urgent symptoms, documentation, return-to-work medical planning, light rights basics, and clinic support.',
  },
  prioritiesTitle: 'Clinical Priorities After a Workplace Injury',
  priorities: [
    {
      title: 'Get appropriate medical care promptly',
      text: 'Do not delay evaluation for severe pain, head injury, chemical exposure, or inability to work safely.',
    },
    {
      title: 'Document mechanism and restrictions',
      text: 'Note how the injury happened, body parts involved, and exact work limits given by clinicians.',
    },
    {
      title: 'Align treatment with job demands',
      text: 'Ask how lifting, standing, driving, PPE, and shift length interact with healing.',
    },
    {
      title: 'Reassess before forced full duty',
      text: 'Return-to-work should follow medical readiness, not only schedule pressure.',
    },
  ],
  redFlagsIntro: 'Seek emergency care right away if any of these occur after a workplace injury:',
  redFlags: [
    'Crush injury, amputation, severe bleeding, or open fractures',
    'Chemical exposure with breathing difficulty or eye injury',
    'Head injury with confusion, vomiting, or seizure',
    'Chest pain, fainting, or severe abdominal pain',
    'Spinal injury signs: weakness, numbness, bowel/bladder changes',
  ],
  patternsTitle: 'Common Workplace Injury Patterns',
  injuryPatterns: [
    {
      title: 'Strain & Overexertion Injury',
      text: 'Back and shoulder strains need graded activity plans and clear lifting limits.',
      icon: icon('<path d="M24 8v32M16 18h16M18 30h12"/>'),
    },
    {
      title: 'Falls & Impact Trauma',
      text: 'Ladder and same-level falls can cause fractures and head injury with delayed symptoms.',
      icon: icon('<circle cx="24" cy="14" r="5"/><path d="M16 42l8-18 8 18"/>'),
    },
    {
      title: 'Repetitive Stress Concerns',
      text: 'Hand, wrist, and elbow symptoms may worsen across shifts; early modification helps.',
      icon: icon('<path d="M14 24h20M24 14v20"/>'),
    },
    {
      title: 'Exposure-Related Injury',
      text: 'Chemical, heat, or inhalation exposures require specific monitoring beyond first aid.',
      icon: icon('<circle cx="24" cy="24" r="12"/><path d="M24 16v10M24 30h.01"/>'),
    },
  ],
  checklist48h: [
    {
      title: 'Complete recommended medical evaluation',
      text: 'Follow urgent and clinic instructions; keep copies of work-status notes.',
    },
    {
      title: 'Write down mechanism and witnesses (for care context)',
      text: 'A clear injury description improves clinical assessment and continuity.',
    },
    {
      title: 'Start a work-function symptom log',
      text: 'Track which tasks increase pain or neurological symptoms.',
    },
    {
      title: 'Schedule medical follow-up',
      text: 'Confirm the next clinician visit before returning to heavier duties.',
    },
  ],
  checklist7day: [
    {
      title: 'Review work restrictions with your clinician',
      text: 'Ask for specific limits: lifting pounds, hours, postures, and driving.',
    },
    {
      title: 'Confirm therapy or specialty needs',
      text: 'PT, orthopedics, or occupational medicine may be appropriate.',
    },
    {
      title: 'Plan graded return-to-work',
      text: 'Discuss modified duty progression tied to measurable recovery milestones.',
    },
  ],
  cliniciansIntro:
    'Our clinicians help injured workers translate symptoms into clear medical restrictions and safer recovery plans.',
  guideDescription:
    'Use the five-step guide to organize documentation, follow-up, and escalation after workplace injury.',
  presetCaseType: 'Personal Injury',
  faqAside: [
    'What should a work-status note include?',
    'When is modified duty medically appropriate?',
    'Which workplace injuries are emergencies?',
  ],
  faqItems: [
    {
      q: 'What should a work-status note include?',
      paragraphs: [
        'Diagnosis/working diagnosis, specific activity limits, expected reassessment date, and red-flag return instructions.',
      ],
    },
    {
      q: 'When is modified duty medically appropriate?',
      paragraphs: [
        'When a clinician determines certain tasks are safe while healing continues. Full duty should wait for medical readiness.',
      ],
    },
    {
      q: 'Which workplace injuries are emergencies?',
      paragraphs: [
        'Severe bleeding, crush injuries, major burns, chemical eye/airway exposure, head/spine red flags, and chest trauma symptoms.',
      ],
    },
    {
      q: 'Why preserve workplace-injury medical records?',
      paragraphs: [
        'They support safer care and return-to-work decisions. They can also support later patient-review processes if needed.',
      ],
    },
  ],
  faqRegion: 'Workplace injury patient FAQs',
}
