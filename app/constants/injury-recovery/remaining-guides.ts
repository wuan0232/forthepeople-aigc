import type { VisitGuide } from './visit-guides'

export const remainingGuides: Record<string, VisitGuide> = {
  "personal-injury": {
    "hero": {
      "breadcrumbLabel": "General Injury",
      "title": "Preparing for Care After an Injury",
      "lead": "Not sure where to start after an injury? Organize your concerns, gather the records you already have, and find out which clinician is appropriate for your next visit."
    },
    "seo": {
      "title": "Preparing for Care After an Injury | For The People Clinic",
      "description": "Not sure where to start after an injury? Organize your concerns, gather the records you already have, and find out which clinician is appropriate for your next visit."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed."
    },
    "concerns": [
      {
        "title": "Your Main Concern",
        "text": "Explain what is bothering you most and how it affects your day. Include when it began and what has changed since the injury.",
        "icon": ""
      },
      {
        "title": "Care Already Received",
        "text": "List emergency visits, tests, and treatment instructions. Tell the clinician about appointments that are already arranged.",
        "icon": ""
      },
      {
        "title": "Movement & Everyday Tasks",
        "text": "Describe difficulties with walking, sitting, sleeping, or using your arms. Explain what your usual activities involve.",
        "icon": ""
      },
      {
        "title": "Relevant Medical History",
        "text": "Mention earlier injuries, ongoing conditions, medicines, and allergies. These details help put the new concern in context.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "A Short Timeline",
        "text": "Write down the injury date, dates of care, and changes you want to discuss. Focus on observations rather than trying to diagnose yourself."
      },
      {
        "title": "Reports & Instructions",
        "text": "Gather available discharge summaries and test reports. Ask the office how to share existing images before the visit."
      },
      {
        "title": "The Right Appointment",
        "text": "Explain your concern when calling. Ask whether the specialist is a fit and confirm referral requirements, location, and availability."
      }
    ],
    "visit": [
      {
        "title": "Prioritize Your Main Concern",
        "text": "Start with the activity or symptom that matters most to you. Explain what changed after the injury and the care already received."
      },
      {
        "title": "Match the Next Step to the Concern",
        "text": "Ask whether the current clinician is appropriate or another type of evaluation is needed. Bring existing findings to avoid starting the discussion without context."
      },
      {
        "title": "Leave With a Clear Plan",
        "text": "Confirm the purpose of any suggested test or referral, who will arrange it, and how results or questions will be handled."
      }
    ],
    "followUp": [
      {
        "title": "Keep Your Visit Summary",
        "text": "Save the plan and contact details with your existing records. Check whether you need to arrange another appointment yourself."
      },
      {
        "title": "Describe Progress in Daily Terms",
        "text": "Note changes in sleep, movement, or responsibilities you find difficult. Bring concrete examples to review."
      },
      {
        "title": "Contact the Right Team",
        "text": "Ask your treating clinician about new or worsening concerns and follow urgent-care instructions. Do not wait for a scheduled review in an emergency."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "What if I do not know which specialist I need?",
        "paragraphs": [
          "Start with your treating clinician or primary-care team. You can also call our office to describe the concern and ask whether the specialty fits."
        ]
      },
      {
        "q": "Do I need a diagnosis before calling?",
        "paragraphs": [
          "You can explain your symptoms and the care you have received without naming a diagnosis. The office can discuss visit requirements; a phone inquiry is not a clinical evaluation."
        ]
      },
      {
        "q": "Does this guide replace discharge instructions?",
        "paragraphs": [
          "No. Follow the instructions from your treating team, including when to return for urgent care."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams."
  },
  "workers-compensation": {
    "hero": {
      "breadcrumbLabel": "Workplace Injury",
      "title": "Preparing for Care After a Workplace Injury",
      "lead": "Bring your work duties, existing medical instructions, and questions together before your next visit. This guide focuses on medical care and activity planning after an injury at work."
    },
    "seo": {
      "title": "Preparing for Care After a Workplace Injury | For The People Clinic",
      "description": "Bring your work duties, existing medical instructions, and questions together before your next visit. This guide focuses on medical care and activity planning after an injury at work."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed."
    },
    "concerns": [
      {
        "title": "What Happened at Work",
        "text": "Describe the task you were doing, the incident, and the symptoms you noticed. Include care received at an occupational clinic or emergency department.",
        "icon": ""
      },
      {
        "title": "The Demands of Your Job",
        "text": "Explain lifting, standing, driving, repetitive movement, and other duties. Your job title alone may not describe its physical demands.",
        "icon": ""
      },
      {
        "title": "Current Restrictions",
        "text": "Bring written restrictions and explain whether your workplace can accommodate them. Ask the treating clinician about any instructions that are unclear.",
        "icon": ""
      },
      {
        "title": "Progress & Difficult Tasks",
        "text": "Note activities that remain difficult at home and work. Discuss changes without assuming that a particular date guarantees recovery.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Visit & Referral Requirements",
        "text": "Ask the office whether it can see you under your current care arrangements. Confirm any referral, authorization, payment, or insurance requirements before traveling."
      },
      {
        "title": "Medical & Work Documents",
        "text": "Bring treatment summaries, existing test reports, your job-duty description, and forms you have been asked to discuss with the clinician."
      },
      {
        "title": "Medication & Activity Questions",
        "text": "List current medicines and questions about their effects on work or driving. Do not change restrictions or medication based on this page."
      }
    ],
    "visit": [
      {
        "title": "Describe Actual Job Tasks",
        "text": "Explain the movements, loads, driving, and equipment involved in your work. Compare current difficulties with what the job normally requires."
      },
      {
        "title": "Clarify Medical Restrictions",
        "text": "Ask the treating clinician to explain any recommended restrictions and when they should be reviewed. Medical advice and workplace arrangements have different roles."
      },
      {
        "title": "Review Documentation Needs",
        "text": "Bring requested forms and ask what can be completed based on the assessment. Confirm administrative requirements directly with the relevant office or insurer."
      }
    ],
    "followUp": [
      {
        "title": "Keep Written Restrictions",
        "text": "Share the appropriate instructions through your workplace process and ask your clinician about unclear activities. Do not change restrictions based on a generic recovery date."
      },
      {
        "title": "Track Tasks That Remain Difficult",
        "text": "Note how symptoms affect specific duties and discuss those examples at review. Ask about changes when the treating clinician reassesses you."
      },
      {
        "title": "Confirm Follow-Up Arrangements",
        "text": "Check appointment, referral, and payment arrangements before the next visit. This guide does not establish coverage or claim eligibility."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Can the clinic promise coverage for my visit?",
        "paragraphs": [
          "No coverage or claim approval is promised here. Confirm the arrangements with the office and the relevant insurer or administrator before your appointment."
        ]
      },
      {
        "q": "Who decides when I can return to work?",
        "paragraphs": [
          "Discuss your duties and current limitations with the treating clinician. Medical recommendations and workplace arrangements need to be clarified with the appropriate people."
        ]
      },
      {
        "q": "Will the clinician complete my work form?",
        "paragraphs": [
          "Call ahead with the type of form, its deadline, and any evaluation requirements. Completion depends on the visit and the information available."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams."
  },
  "aviation-accident": {
    "hero": {
      "breadcrumbLabel": "Aviation Injury",
      "title": "Medical Follow-Up After an Aviation Incident",
      "lead": "After initial emergency or hospital care, organize records and follow-up instructions from the teams involved. Use this guide to prepare questions for an appropriate medical consultation."
    },
    "seo": {
      "title": "Medical Follow-Up After an Aviation Incident | For The People Clinic",
      "description": "After initial emergency or hospital care, organize records and follow-up instructions from the teams involved. Use this guide to prepare questions for an appropriate medical consultation."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed."
    },
    "concerns": [
      {
        "title": "Initial Treatment",
        "text": "Describe where you were evaluated and any injuries identified. Bring hospital summaries rather than relying only on memory.",
        "icon": ""
      },
      {
        "title": "Several Care Teams",
        "text": "List the clinicians managing different injuries and any pending referrals. Ask which team should answer each concern.",
        "icon": ""
      },
      {
        "title": "Movement & Daily Support",
        "text": "Explain existing activity restrictions and whether you need help with daily tasks or travel to appointments.",
        "icon": ""
      },
      {
        "title": "Questions After Discharge",
        "text": "Note instructions you do not understand, results you are waiting for, and changes since leaving the hospital.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Records Across Facilities",
        "text": "Gather hospital and transport-related medical records where available, imaging reports, and procedure notes. Ask how the receiving office wants them sent."
      },
      {
        "title": "Current Treatment Plan",
        "text": "Bring medication lists, restrictions, and scheduled follow-ups. Keep instructions from different teams together."
      },
      {
        "title": "Travel & Access",
        "text": "Discuss appointment access and travel concerns with your treating team. Confirm the clinic location and suitability before making arrangements."
      }
    ],
    "visit": [
      {
        "title": "Review the Hospital Course",
        "text": "Explain the medical facilities involved and injuries already assessed. Ask the reviewing clinician to identify the records needed for this consultation."
      },
      {
        "title": "Place the Visit Within Existing Care",
        "text": "Discuss which injury or concern this appointment addresses and which remain with other teams. Keep pending referrals visible."
      },
      {
        "title": "Discuss Practical Barriers",
        "text": "Explain travel, access, and daily support needs. Ask your existing treating team about any restrictions that affect getting to appointments."
      }
    ],
    "followUp": [
      {
        "title": "Keep Separate Care Plans Clear",
        "text": "Record the responsible clinician for each injury and ask how any new advice fits with existing instructions."
      },
      {
        "title": "Track Outstanding Results",
        "text": "Confirm who will review reports from other facilities and how you will receive them."
      },
      {
        "title": "Review Activity & Travel Questions",
        "text": "Discuss travel and daily activity plans with your treating team. This website cannot establish fitness to fly or a fixed recovery period."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Is this an emergency response service?",
        "paragraphs": [
          "No. Follow emergency services and the treating hospital for immediate assessment. This page concerns preparation for later medical follow-up."
        ]
      },
      {
        "q": "Can one visit replace all specialist follow-ups?",
        "paragraphs": [
          "Do not assume that it can. Keep recommended appointments and ask how a new consultation fits into the existing plan."
        ]
      },
      {
        "q": "What if my records are held elsewhere?",
        "paragraphs": [
          "List the facilities and dates, and ask about record-release procedures. Contact the receiving office about the minimum information needed."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams."
  },
  "boating-accident": {
    "hero": {
      "breadcrumbLabel": "Boating Injury",
      "title": "Medical Follow-Up After a Boating Incident",
      "lead": "Once immediate care has been addressed, prepare a clear account of the incident and the care received. Bring questions about existing injuries, activity restrictions, and the next appropriate appointment."
    },
    "seo": {
      "title": "Medical Follow-Up After a Boating Incident | For The People Clinic",
      "description": "Once immediate care has been addressed, prepare a clear account of the incident and the care received. Bring questions about existing injuries, activity restrictions, and the next appropriate appointment."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed."
    },
    "concerns": [
      {
        "title": "The Incident & Initial Care",
        "text": "Explain what happened, whether you entered the water, and any medical care received at the scene or afterward. Share discharge instructions.",
        "icon": ""
      },
      {
        "title": "Injuries Already Identified",
        "text": "List concerns assessed by a clinician, such as a wound or painful limb, and who is responsible for the follow-up.",
        "icon": ""
      },
      {
        "title": "Neck, Back & Movement",
        "text": "Describe changes in comfort or mobility and any supports or activity restrictions you were given.",
        "icon": ""
      },
      {
        "title": "Returning to Water Activities",
        "text": "Ask your treating clinician about boating, swimming, and other activities separately. Do not use this guide as clearance to return.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Existing Medical Records",
        "text": "Collect reports, discharge papers, and any wound-care instructions. Note the location and date of each medical visit."
      },
      {
        "title": "Medication & Follow-Up List",
        "text": "Record current medicines, allergies, scheduled reviews, and questions about instructions you have already received."
      },
      {
        "title": "Appointment Suitability",
        "text": "Explain your main concern when calling the office and ask whether a spine or neurosurgical consultation is appropriate."
      }
    ],
    "visit": [
      {
        "title": "Explain the Full Incident",
        "text": "Describe the event, any time in the water, and the medical assessment received. Include injuries and follow-up already arranged."
      },
      {
        "title": "Review the Relevant Concern",
        "text": "Ask which clinician should manage the symptom or injury you want reviewed. A spine consultation does not replace other injury care."
      },
      {
        "title": "Discuss Water & Work Activities",
        "text": "Ask how current restrictions apply to boating, swimming, and work. Readiness depends on your individual assessment."
      }
    ],
    "followUp": [
      {
        "title": "Continue Injury-Specific Reviews",
        "text": "Keep wound checks or other follow-up directed by your treating team. Ask that team about changes to its plan."
      },
      {
        "title": "Keep Records From Each Visit",
        "text": "Save discharge and follow-up instructions so the next clinician can see what has already been addressed."
      },
      {
        "title": "Clarify Return-to-Activity Advice",
        "text": "Use the guidance from your treating clinician before returning to water activities. Do not treat reduced pain alone as clearance."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Should I mention that I was in the water?",
        "paragraphs": [
          "Yes. Give the treating clinician the full account, including any assessment after being in the water. Do not wait for a routine appointment if you have urgent concerns."
        ]
      },
      {
        "q": "Does a consultation replace wound follow-up?",
        "paragraphs": [
          "No. Continue follow-up with the clinician responsible for a wound or other injury unless that team changes the plan."
        ]
      },
      {
        "q": "When can I return to boating or swimming?",
        "paragraphs": [
          "Ask your treating clinician about your specific injuries and restrictions. Readiness cannot be established by this website."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams."
  },
  "brain-injury": {
    "hero": {
      "breadcrumbLabel": "Brain Injury Follow-Up",
      "title": "Preparing for Follow-Up After a Brain Injury",
      "lead": "Bring your assessment records and observations about daily life to your next appointment. This guide helps patients and families prepare questions after a head or brain injury; it does not diagnose the injury."
    },
    "seo": {
      "title": "Preparing for Follow-Up After a Brain Injury | For The People Clinic",
      "description": "Bring your assessment records and observations about daily life to your next appointment. This guide helps patients and families prepare questions after a head or brain injury; it does not diagnose the injury."
    },
    "safety": {
      "title": "When to Seek Emergency Care",
      "text": "After a head injury, worsening headache, repeated vomiting, seizures, new weakness, confusion, slurred speech, or difficulty waking can be emergency warning signs. Call 911 or go to an emergency department right away. These are examples, not a complete checklist; follow your discharge instructions.",
      "sourceUrl": "https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html",
      "sourceLabel": "CDC: head injury warning signs"
    },
    "concerns": [
      {
        "title": "Thinking & Concentration",
        "text": "Describe changes in attention or memory with concrete examples. A trusted family member may be able to help explain changes you have noticed.",
        "icon": ""
      },
      {
        "title": "Sleep & Day-to-Day Wellbeing",
        "text": "Discuss changes in sleep, mood, and everyday routines. Tell your clinician how these affect school, work, or responsibilities at home.",
        "icon": ""
      },
      {
        "title": "Physical Concerns",
        "text": "Bring notes about headaches, balance, or other concerns already assessed. New emergency warning signs require immediate care.",
        "icon": ""
      },
      {
        "title": "Existing Recovery Instructions",
        "text": "Share instructions about work, driving, sports, or other activities. Ask what applies to your situation rather than following a generic timetable.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Emergency & Specialist Reports",
        "text": "Bring existing assessments, discharge instructions, and reports from any imaging already performed. Ask how to share images if requested."
      },
      {
        "title": "Observations Between Visits",
        "text": "Keep brief notes on daily changes and questions. If you wish, ask a caregiver to help prepare them or attend subject to office arrangements."
      },
      {
        "title": "Your Follow-Up Team",
        "text": "List the clinicians involved and the next appointments. Confirm that the office can address your specific concern before booking."
      }
    ],
    "visit": [
      {
        "title": "Describe Your Usual Day",
        "text": "Explain how concentration, sleep, balance, or headaches affect work, school, and home routines. Ask a family member to share observations with your permission."
      },
      {
        "title": "Ask About Returning to Activities",
        "text": "Request written guidance about work, study, driving, and exercise. Ask what to do if symptoms worsen when activities increase; avoid treating all brain injuries as having the same recovery course."
      },
      {
        "title": "Identify the Right Follow-Up",
        "text": "Ask which clinician will review ongoing concerns and whether a specialist review is needed. A brain-tumor practice is not automatically a comprehensive concussion rehabilitation service."
      }
    ],
    "followUp": [
      {
        "title": "Review Persistent Concerns",
        "text": "Tell your treating clinician if symptoms are not improving or become worse. Keep emergency warning signs separate from questions for a scheduled visit."
      },
      {
        "title": "Keep Activity Advice Available",
        "text": "Use the written instructions from your treating team when discussing duties with work or school. Ask before resuming activities that risk another head injury."
      },
      {
        "title": "Include Support at Home",
        "text": "Share the agreed plan with a trusted person if you wish. Keep notes about daily function so the next review can focus on changes that matter to you."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Can a family member help during the visit?",
        "paragraphs": [
          "Ask about visitor arrangements. With your agreement, someone who knows your usual routines may help explain changes and remember the discussion."
        ]
      },
      {
        "q": "Will everyone need another brain scan?",
        "paragraphs": [
          "No scan is promised or recommended for everyone here. The treating clinician decides what evaluation is appropriate using the history, examination, and existing findings."
        ]
      },
      {
        "q": "Can this page tell me when to drive or play sports?",
        "paragraphs": [
          "No. Ask your treating clinician for individual instructions, including any steps needed before returning to those activities."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "sources": [
      {
        "title": "CDC: head injury warning signs",
        "href": "https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html"
      },
      {
        "title": "CDC: returning to activities after a mild TBI or concussion",
        "href": "https://www.cdc.gov/traumatic-brain-injury/response/index.html"
      }
    ]
  },
  "spinal-cord-injury": {
    "hero": {
      "breadcrumbLabel": "Spinal Cord Injury Follow-Up",
      "title": "Preparing for Spinal Cord Injury Follow-Up",
      "lead": "After emergency treatment, follow-up may involve several specialists and rehabilitation professionals. Prepare existing records, questions about daily function, and the practical support you need for your visit."
    },
    "seo": {
      "title": "Preparing for Spinal Cord Injury Follow-Up | For The People Clinic",
      "description": "After emergency treatment, follow-up may involve several specialists and rehabilitation professionals. Prepare existing records, questions about daily function, and the practical support you need for your visit."
    },
    "safety": {
      "title": "A New Spinal Cord Injury Is an Emergency",
      "text": "A suspected new spinal cord injury needs emergency care, not a routine office visit. Call 911 if you suspect a serious spinal injury. For an established injury, follow the urgent-change instructions from your treating team. This guide concerns preparation for follow-up after initial treatment.",
      "sourceUrl": "https://medlineplus.gov/spinalcordinjuries.html",
      "sourceLabel": "MedlinePlus: spinal cord injuries"
    },
    "concerns": [
      {
        "title": "Your Hospital Treatment",
        "text": "Bring a summary of the injury, procedures, and discharge plan. Describe which teams are currently responsible for your care.",
        "icon": ""
      },
      {
        "title": "Changes in Daily Function",
        "text": "Discuss your usual level of movement and sensation and any changes since your last review. Follow your care plan for urgent changes.",
        "icon": ""
      },
      {
        "title": "Rehabilitation & Equipment",
        "text": "Explain existing therapy plans, prescribed supports, and mobility equipment. Ask the responsible team about any difficulty using them.",
        "icon": ""
      },
      {
        "title": "Home & Caregiver Support",
        "text": "Discuss assistance with daily activities, access at home, and caregiver questions. Tell the office about appointment access needs in advance.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Hospital & Surgical Records",
        "text": "Gather operation notes if applicable, imaging reports, discharge plans, and rehabilitation summaries. Ask how to send existing images."
      },
      {
        "title": "Your Current Care Plan",
        "text": "Bring medicine lists, prescribed restrictions, equipment details, and the contact information for your treating teams."
      },
      {
        "title": "Practical Arrangements",
        "text": "Confirm access, transfer assistance needs, and caregiver participation with the office. Discuss travel arrangements with your treating team when needed."
      }
    ],
    "visit": [
      {
        "title": "Review the Injury & Existing Plan",
        "text": "Ask the specialist to explain the findings, prior surgery if applicable, and the purpose of the consultation. Clarify how it fits with rehabilitation and other care."
      },
      {
        "title": "Discuss Function & Support Needs",
        "text": "Describe mobility, sensation, personal care, and any prescribed bowel or bladder care arrangements. Ask the responsible team about difficulties; this guide does not change those instructions."
      },
      {
        "title": "Clarify Equipment & Access",
        "text": "Discuss prescribed supports, mobility equipment, and assistance needed for appointments. Ask which team can assess equipment or rehabilitation needs."
      }
    ],
    "followUp": [
      {
        "title": "Coordinate Specialist & Rehabilitation Visits",
        "text": "Keep both medical and rehabilitation appointments unless the responsible team changes the plan. Clarify who manages each ongoing concern."
      },
      {
        "title": "Follow Your Individual Care Instructions",
        "text": "Keep the written plan for mobility, skin care, and any other prescribed daily care. Ask the treating team about changes rather than applying a generic online regimen."
      },
      {
        "title": "Plan for Urgent Changes",
        "text": "Ask for clear instructions about which new changes require urgent care and whom to call between appointments. Keep those instructions accessible to caregivers."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Is a new suspected spinal cord injury an outpatient concern?",
        "paragraphs": [
          "A suspected new spinal cord injury is an emergency. Use emergency services rather than waiting for an office appointment."
        ]
      },
      {
        "q": "Does a spine consultation replace rehabilitation?",
        "paragraphs": [
          "Not automatically. Ask how the consultation fits with your current rehabilitation and other specialist care, and keep existing appointments unless your team changes them."
        ]
      },
      {
        "q": "Can this guide predict recovery of movement?",
        "paragraphs": [
          "No. Recovery and support needs depend on the individual injury and assessment. Discuss goals and expectations with your treating team."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "sources": [
      {
        "title": "MedlinePlus: spinal cord injuries",
        "href": "https://medlineplus.gov/spinalcordinjuries.html"
      }
    ]
  },
  "burn-injury": {
    "hero": {
      "breadcrumbLabel": "Burn Follow-Up",
      "title": "Preparing for Follow-Up After a Burn",
      "lead": "Use this guide to organize questions and records after a burn has been assessed. Your burn or wound-care team should direct treatment, dressing changes, and follow-up."
    },
    "seo": {
      "title": "Preparing for Follow-Up After a Burn | For The People Clinic",
      "description": "Use this guide to organize questions and records after a burn has been assessed. Your burn or wound-care team should direct treatment, dressing changes, and follow-up."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "Serious burns need medical treatment. Do not use this page to assess burn depth or choose a dressing. Follow the instructions from your treating team and seek emergency care for an emergency rather than waiting for a routine appointment.",
      "sourceUrl": "https://medlineplus.gov/burns.html",
      "sourceLabel": "MedlinePlus: burns"
    },
    "concerns": [
      {
        "title": "Existing Burn Assessment",
        "text": "Bring the records describing the burn and the treatment already provided. Explain which team is managing the wound.",
        "icon": ""
      },
      {
        "title": "Dressing & Treatment Questions",
        "text": "Write down anything unclear in the instructions, including who to call about supplies or dressing problems. Do not replace the prescribed plan with online advice.",
        "icon": ""
      },
      {
        "title": "Movement & Everyday Activities",
        "text": "Describe how the affected area limits dressing, bathing, or work. Ask the treating team about appropriate activity guidance.",
        "icon": ""
      },
      {
        "title": "Comfort & Ongoing Support",
        "text": "Tell your team about concerns affecting sleep or daily life and any difficulty following the plan. Ask what support is available.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Burn-Care Instructions",
        "text": "Bring discharge papers, dressing instructions, procedure records, and scheduled wound checks. Keep contact details for the treating team accessible."
      },
      {
        "title": "Medicines & Supplies",
        "text": "List prescribed treatments, allergies, and questions about obtaining supplies. Ask the burn-care team before changing products or dressings."
      },
      {
        "title": "Your Questions for Review",
        "text": "Note what you want clarified about wound follow-up, movement, and future appointments. Confirm which clinician should address each question."
      }
    ],
    "visit": [
      {
        "title": "Review the Wound-Care Plan",
        "text": "Ask the burn or wound-care clinician to explain the dressing schedule, prescribed products, and the next wound review. Do not replace the plan with a generic burn remedy."
      },
      {
        "title": "Discuss Movement & Comfort",
        "text": "Describe difficulty using the affected area and concerns about pain or sleep. Ask whether additional support for movement or daily tasks is appropriate."
      },
      {
        "title": "Ask About Healing & Later Care",
        "text": "Discuss how healing will be assessed and when scar or rehabilitation questions should be reviewed. The course depends on the individual burn."
      }
    ],
    "followUp": [
      {
        "title": "Attend Planned Wound Checks",
        "text": "Keep the reviews recommended by the burn-care team. Ask what to do if you cannot obtain supplies or attend a scheduled check."
      },
      {
        "title": "Know When to Contact the Team",
        "text": "Ask for written instructions about changes in the wound or your health that need prompt review. Seek emergency care for an emergency."
      },
      {
        "title": "Review Daily Function",
        "text": "Explain continuing difficulty with movement, clothing, or work at follow-up. Ask the team responsible for the burn about rehabilitation or scar-related questions."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Does this clinic offer burn treatment?",
        "paragraphs": [
          "This page is an educational resource and does not advertise a burn-treatment service. Continue care with your burn or wound-care team."
        ]
      },
      {
        "q": "Can I change my dressing plan based on this guide?",
        "paragraphs": [
          "No. Follow the specific instructions from your treating team and contact them if the instructions or supplies are unclear."
        ]
      },
      {
        "q": "Who should answer questions about healing or scars?",
        "paragraphs": [
          "Ask the clinician managing the burn. They can discuss your individual healing, follow-up, and whether other professional support is appropriate."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "scope": "Burn assessment, dressing changes, and wound follow-up belong with the appropriate burn or wound-care team. This resource does not advertise burn treatment at our clinic. Our office can answer questions about the spine and neurosurgical services that may be relevant to a separate concern.",
    "sources": [
      {
        "title": "MedlinePlus: burns",
        "href": "https://medlineplus.gov/burns.html"
      }
    ]
  },
  "mesothelioma": {
    "hero": {
      "breadcrumbLabel": "Mesothelioma Care",
      "title": "Preparing for a Mesothelioma Care Discussion",
      "lead": "A mesothelioma diagnosis brings questions about test results, treatment choices, and daily support. Use this guide to prepare for a conversation with your cancer care team."
    },
    "seo": {
      "title": "Preparing for a Mesothelioma Care Discussion | For The People Clinic",
      "description": "A mesothelioma diagnosis brings questions about test results, treatment choices, and daily support. Use this guide to prepare for a conversation with your cancer care team."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed.",
      "sourceUrl": "https://www.cancer.gov/types/mesothelioma/treatment",
      "sourceLabel": "National Cancer Institute: mesothelioma care"
    },
    "concerns": [
      {
        "title": "Understanding Your Results",
        "text": "Ask your oncology team to explain the diagnosis and available results in plain language. Write down terms or findings you want clarified.",
        "icon": ""
      },
      {
        "title": "Treatment Goals & Options",
        "text": "Discuss the purpose of proposed treatment, possible benefits, risks, and alternatives with your cancer team. Your plan depends on your individual situation.",
        "icon": ""
      },
      {
        "title": "Symptoms & Daily Needs",
        "text": "Explain concerns affecting sleep, appetite, movement, or daily activities. Ask who can help with symptom support alongside treatment.",
        "icon": ""
      },
      {
        "title": "Family & Practical Support",
        "text": "Discuss help with appointments, transport, and everyday responsibilities. Ask how a family member can participate with your permission.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Diagnostic & Treatment Records",
        "text": "Gather pathology and imaging reports, consultation notes, and a summary of treatment already received. Ask the receiving team which records are required."
      },
      {
        "title": "Medicines & Health History",
        "text": "Bring a current medicine and allergy list and relevant medical history. Note any questions about side effects or other conditions."
      },
      {
        "title": "Your Priorities",
        "text": "Write down what matters most to you, questions about options, and practical concerns about treatment visits or care at home."
      }
    ],
    "visit": [
      {
        "title": "Understand the Diagnosis",
        "text": "Ask the cancer team to explain the pathology, imaging, and extent of disease. Bring specific questions about findings you do not understand."
      },
      {
        "title": "Compare the Proposed Options",
        "text": "Discuss treatment goals, potential benefits, side effects, and alternatives with the oncology team. Ask how your health and preferences affect the plan."
      },
      {
        "title": "Discuss Support Alongside Treatment",
        "text": "Ask whom to contact about symptoms, nutrition, practical needs, and emotional support. Supportive care questions can be discussed alongside treatment decisions."
      }
    ],
    "followUp": [
      {
        "title": "Confirm Your Oncology Schedule",
        "text": "Keep the treatment and review schedule from your cancer team. Ask how test results will be communicated and who coordinates appointments."
      },
      {
        "title": "Report Treatment Concerns",
        "text": "Use the contact and urgent-care instructions given by the oncology team for side effects or changes in your health."
      },
      {
        "title": "Revisit Your Priorities",
        "text": "Discuss how treatment affects daily life and whether your goals or support needs have changed. Involve family or caregivers with your agreement."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Is mesothelioma treatment offered by this clinic?",
        "paragraphs": [
          "This page does not establish an oncology service at our clinic. Mesothelioma treatment decisions belong with an appropriate cancer care team."
        ]
      },
      {
        "q": "How can I prepare for another opinion?",
        "paragraphs": [
          "Ask the receiving cancer specialist which pathology, imaging, and treatment records are needed. Clarify timing with your current team so necessary care is not delayed."
        ]
      },
      {
        "q": "Can this website recommend a treatment?",
        "paragraphs": [
          "No. Ask your oncology team about options suited to the diagnosis, your health, and your preferences."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "scope": "Mesothelioma care should be planned with an appropriate cancer care team. Dr. Li focuses on complex spine conditions and brain and spine tumors; this does not establish a mesothelioma treatment service. Keep your oncology appointments and discuss questions with that team.",
    "sources": [
      {
        "title": "National Cancer Institute: mesothelioma care",
        "href": "https://www.cancer.gov/types/mesothelioma/treatment"
      }
    ]
  },
  "medical-malpractice": {
    "hero": {
      "breadcrumbLabel": "Questions About Medical Care",
      "title": "Questions About Your Medical Care & Follow-Up",
      "lead": "If a diagnosis, treatment plan, or unexpected outcome leaves you uncertain, prepare clear questions and organize your records. This guide focuses on medical communication and appropriate follow-up, not determining legal fault."
    },
    "seo": {
      "title": "Questions About Your Medical Care & Follow-Up | For The People Clinic",
      "description": "If a diagnosis, treatment plan, or unexpected outcome leaves you uncertain, prepare clear questions and organize your records. This guide focuses on medical communication and appropriate follow-up, not determining legal fault."
    },
    "safety": {
      "title": "Address Urgent Concerns First",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed."
    },
    "concerns": [
      {
        "title": "An Explanation You Need",
        "text": "Write down what you expected, what happened, and the specific points you want explained. Separate observations from conclusions about the cause.",
        "icon": ""
      },
      {
        "title": "Results & Next Steps",
        "text": "Ask which results are available, who will review outstanding tests, and when to expect contact. Confirm what to do if you do not hear back.",
        "icon": ""
      },
      {
        "title": "Changes Since Treatment",
        "text": "Tell the treating team about new or worsening concerns and follow emergency return instructions. Do not delay care while gathering records.",
        "icon": ""
      },
      {
        "title": "Another Clinical Opinion",
        "text": "Ask which type of clinician can review the concern and what information they need. A different opinion does not by itself establish that an error occurred.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "A Factual Timeline",
        "text": "List visits, procedures, medicines, and symptom changes with dates where available. Keep your main questions short and specific."
      },
      {
        "title": "Complete Existing Records",
        "text": "Request relevant visit notes, test reports, and discharge instructions. Ask how to share images or other records securely with the reviewing clinician."
      },
      {
        "title": "The Appropriate Contact",
        "text": "For treatment questions contact your treating team; for record requests ask the facility records office. Patient relations can explain the facility feedback process."
      }
    ],
    "visit": [
      {
        "title": "Ask for a Clinical Explanation",
        "text": "Explain which result, treatment decision, or outcome you want clarified. Ask the clinician to distinguish known findings from remaining uncertainty."
      },
      {
        "title": "Review the Record Together",
        "text": "Use dated reports and instructions to frame your questions. A difference of opinion alone does not establish fault."
      },
      {
        "title": "Confirm the Care Plan",
        "text": "Separate immediate medical needs from record requests or feedback. Ask who will follow up on current symptoms and pending tests."
      }
    ],
    "followUp": [
      {
        "title": "Follow Through on Current Care",
        "text": "Keep necessary treatment and review appointments while seeking explanations or records."
      },
      {
        "title": "Track Unanswered Questions",
        "text": "Record whom you contacted and which clinical questions still need an answer. Ask patient relations about communication or record-access processes if needed."
      },
      {
        "title": "Prepare for Another Opinion",
        "text": "Confirm the appropriate specialty and records required for review. This guide does not assess legal claims; the separate legal resources entry remains available."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Does an unexpected outcome mean a medical error occurred?",
        "paragraphs": [
          "Not necessarily. Understanding the clinical circumstances requires an appropriate professional review. This page cannot determine negligence or legal responsibility."
        ]
      },
      {
        "q": "What can I do if I do not understand my results?",
        "paragraphs": [
          "Ask the treating clinician for an explanation and a clear follow-up plan. Bring specific questions and ask how to obtain the report for your records."
        ]
      },
      {
        "q": "Should I wait for a complaint review before getting care?",
        "paragraphs": [
          "Do not postpone needed medical attention while pursuing records or feedback. Address current health concerns with the appropriate care team."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "related": [
      {
        "title": "Questions About a Diagnosis",
        "href": "/practice-areas/medical-malpractice/misdiagnosis"
      },
      {
        "title": "Questions About Medication Instructions",
        "href": "/practice-areas/medical-malpractice/medication-errors"
      },
      {
        "title": "Questions After Birth or Obstetric Care",
        "href": "/practice-areas/medical-malpractice/birth-injury"
      },
      {
        "title": "Questions About Recovery After Surgery",
        "href": "/practice-areas/medical-malpractice/surgical-errors"
      },
      {
        "title": "Questions After Anesthesia",
        "href": "/practice-areas/medical-malpractice/anesthesia-errors"
      },
      {
        "title": "Questions After Dental Treatment",
        "href": "/practice-areas/medical-malpractice/dental-malpractice"
      }
    ]
  },
  "dangerous-drugs/index": {
    "hero": {
      "breadcrumbLabel": "Medication Safety",
      "title": "Preparing for a Medication Safety Review",
      "lead": "Organize the medicines you use, questions about instructions, and any changes you have noticed. Your prescriber and pharmacist are the right starting points for a medication review."
    },
    "seo": {
      "title": "Preparing for a Medication Safety Review | For The People Clinic",
      "description": "Organize the medicines you use, questions about instructions, and any changes you have noticed. Your prescriber and pharmacist are the right starting points for a medication review."
    },
    "safety": {
      "title": "Use Product-Specific Medical Advice",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed.",
      "sourceUrl": "https://medlineplus.gov/drugsafety.html",
      "sourceLabel": "MedlinePlus: medication safety"
    },
    "concerns": [
      {
        "title": "Your Full Medicine List",
        "text": "Include prescriptions, over-the-counter products, supplements, and allergies. Record the product name and the instructions on the label.",
        "icon": ""
      },
      {
        "title": "What Changed & When",
        "text": "Describe concerns and when they began in relation to starting or changing a medicine. Timing alone does not prove the medicine caused the problem.",
        "icon": ""
      },
      {
        "title": "Instructions You Need Clarified",
        "text": "Ask about unclear doses, schedules, labels, or overlapping products. Seek professional advice rather than guessing.",
        "icon": ""
      },
      {
        "title": "More Than One Prescriber",
        "text": "Tell each clinician which other medicines you use. Ask who should coordinate questions that involve several prescriptions.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Labels & Written Instructions",
        "text": "Bring a current list or clear copies of labels, along with the medication information supplied by the pharmacy."
      },
      {
        "title": "A Brief Account of Concerns",
        "text": "Record changes, dose adjustments already prescribed, and any care you received. Include the contact details of your prescriber and pharmacy."
      },
      {
        "title": "Questions Before Changes",
        "text": "Ask your prescriber or pharmacist what to do about concerns, including missed doses. Do not use this page to start, stop, or change a medicine."
      }
    ],
    "visit": [
      {
        "title": "Reconcile Your Medicine List",
        "text": "Ask your prescriber or pharmacist to compare the medicines you actually use with the current record, including supplements and over-the-counter products."
      },
      {
        "title": "Clarify the Product Instructions",
        "text": "Resolve unclear labels, missed-dose questions, or administration concerns using information for the exact product. Do not extrapolate between formulations."
      },
      {
        "title": "Agree on Monitoring",
        "text": "Ask which effects should prompt a call, which require emergency help, and whether tests or another review are planned."
      }
    ],
    "followUp": [
      {
        "title": "Keep an Updated List",
        "text": "Record changes made by the prescriber and share the updated list with other clinicians. Retain the current product information."
      },
      {
        "title": "Use the Agreed Contact Plan",
        "text": "Contact the prescriber or pharmacist about concerns using the instructions provided. Do not independently change treatment based on this guide."
      },
      {
        "title": "Discuss Suspected Side Effects",
        "text": "Ask whether a suspected reaction should be reported through FDA MedWatch. A report supports safety monitoring but does not replace medical assessment or prove causation."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Should I stop a medicine because I am worried?",
        "paragraphs": [
          "Contact your prescriber or pharmacist for advice specific to the product and concern. This guide does not give instructions to stop or change treatment; urgent reactions need urgent care."
        ]
      },
      {
        "q": "Can a pharmacist review my questions?",
        "paragraphs": [
          "A pharmacist can help explain labels and medication-use questions. Tell them about all medicines and supplements and ask when a prescriber review is needed."
        ]
      },
      {
        "q": "Does a symptom after a dose prove a drug injury?",
        "paragraphs": [
          "No. Describe the timing and symptoms to a clinician so they can assess possible causes and the appropriate next step."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "scope": "Medication selection, monitoring, and dose changes should be discussed with your prescriber or pharmacist. This educational page does not establish a prescribing service at our clinic. Contact our office only to confirm whether a separate spine or neurosurgical concern is appropriate for a consultation.",
    "related": [
      {
        "title": "Depo-Provera Questions",
        "href": "/practice-areas/dangerous-drugs/depo-provera"
      },
      {
        "title": "GLP-1 Medication Review",
        "href": "/practice-areas/dangerous-drugs/weight-loss-drug"
      }
    ],
    "sources": [
      {
        "title": "MedlinePlus: medication safety",
        "href": "https://medlineplus.gov/drugsafety.html"
      }
    ]
  },
  "dangerous-drugs/depo-provera": {
    "hero": {
      "breadcrumbLabel": "Depo-Provera Questions",
      "title": "Questions to Ask About Depo-Provera",
      "lead": "Prepare for a discussion with the clinician who prescribes your injection. Bring your injection history, concerns, and questions about benefits, risks, and future options."
    },
    "seo": {
      "title": "Questions to Ask About Depo-Provera | For The People Clinic",
      "description": "Prepare for a discussion with the clinician who prescribes your injection. Bring your injection history, concerns, and questions about benefits, risks, and future options."
    },
    "safety": {
      "title": "Use Product-Specific Medical Advice",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed.",
      "sourceUrl": "https://medlineplus.gov/druginfo/meds/a604039.html",
      "sourceLabel": "MedlinePlus: medroxyprogesterone injection"
    },
    "concerns": [
      {
        "title": "Your Injection History",
        "text": "Bring dates of injections and the exact product if known. Explain any changes in your health or other medicines since the last visit.",
        "icon": ""
      },
      {
        "title": "Questions About Benefits & Risks",
        "text": "Ask why the medicine was recommended and how its benefits and risks apply to your history. Discuss concerns about bone health with your prescriber.",
        "icon": ""
      },
      {
        "title": "Changes You Have Noticed",
        "text": "Describe symptoms and timing without assuming the cause. Ask the prescriber which changes need review and what to do before the next injection.",
        "icon": ""
      },
      {
        "title": "Your Future Plan",
        "text": "Discuss ongoing treatment, monitoring, and alternative options with the prescriber. If used for contraception, ask how any change would affect pregnancy prevention.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Injection & Prescription Records",
        "text": "Gather dates, the prescribing office, and the medication information provided to you. Mention missed or rescheduled appointments."
      },
      {
        "title": "Relevant Health History",
        "text": "Bring your medication and allergy list and questions about previous conditions, bone health, or other concerns you want the prescriber to consider."
      },
      {
        "title": "Before the Next Appointment",
        "text": "Write down questions about monitoring, timing, and alternatives. Contact the prescribing team rather than changing the schedule on your own."
      }
    ],
    "visit": [
      {
        "title": "Review Use & Health History",
        "text": "Discuss your injection dates, reason for use, and relevant health changes with the prescribing clinician. Include questions about bone health and the duration of treatment."
      },
      {
        "title": "Discuss Benefits & Alternatives",
        "text": "Ask how continued use compares with alternatives for your situation. Discuss monitoring and any concerns about current product warnings."
      },
      {
        "title": "Clarify the Next Injection Plan",
        "text": "Confirm when the next review or injection is due and whom to contact if plans change. If used for contraception, ask for individual instructions about pregnancy prevention."
      }
    ],
    "followUp": [
      {
        "title": "Keep Your Injection Record",
        "text": "Record injections and future appointments. Contact the prescribing team about missed or delayed doses rather than choosing a new schedule yourself."
      },
      {
        "title": "Report New Concerns",
        "text": "Share new symptoms or changes in health with the prescriber, including timing. Do not assume that a symptom establishes a medication-related diagnosis."
      },
      {
        "title": "Review Ongoing Suitability",
        "text": "Discuss continuing benefits, risks, and alternatives at the intervals advised by the prescriber. Keep any monitoring appointments recommended for you."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Does this guide say Depo-Provera caused my symptoms?",
        "paragraphs": [
          "No. A clinician needs to assess the history and possible explanations. Bring the product details and a factual timeline of your concerns."
        ]
      },
      {
        "q": "Who should discuss alternatives with me?",
        "paragraphs": [
          "Discuss alternatives with the prescribing clinician. The choice depends on why you use the medicine, your health history, and your preferences."
        ]
      },
      {
        "q": "Should I change my next injection date?",
        "paragraphs": [
          "Ask the prescribing team for individual instructions. This page does not change your schedule or provide contraception advice for a missed injection."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "scope": "Medication selection, monitoring, and dose changes should be discussed with your prescriber or pharmacist. This educational page does not establish a prescribing service at our clinic. Contact our office only to confirm whether a separate spine or neurosurgical concern is appropriate for a consultation.",
    "related": [
      {
        "title": "Medication Safety Overview",
        "href": "/practice-areas/dangerous-drugs"
      },
      {
        "title": "GLP-1 Medication Review",
        "href": "/practice-areas/dangerous-drugs/weight-loss-drug"
      }
    ],
    "sources": [
      {
        "title": "MedlinePlus: medroxyprogesterone injection",
        "href": "https://medlineplus.gov/druginfo/meds/a604039.html"
      }
    ]
  },
  "dangerous-drugs/weight-loss-drug": {
    "hero": {
      "breadcrumbLabel": "GLP-1 Medication Questions",
      "title": "Preparing for a GLP-1 Medication Review",
      "lead": "Bring the exact product, prescribed instructions, and concerns to your prescriber or pharmacist. Different medicines and formulations have different directions; this guide does not provide dosing or weight-loss treatment."
    },
    "seo": {
      "title": "Preparing for a GLP-1 Medication Review | For The People Clinic",
      "description": "Bring the exact product, prescribed instructions, and concerns to your prescriber or pharmacist. Different medicines and formulations have different directions; this guide does not provide dosing or weight-loss treatment."
    },
    "safety": {
      "title": "Use Product-Specific Medical Advice",
      "text": "This guide is for preparing a medical conversation, not assessing an emergency. Use emergency services for a medical emergency and follow any return instructions from your treating team. Do not wait for an office appointment or records request when urgent care is needed.",
      "sourceUrl": "https://medlineplus.gov/druginfo/meds/a618008.html",
      "sourceLabel": "MedlinePlus: semaglutide injection (one GLP-1 medicine)"
    },
    "concerns": [
      {
        "title": "Know the Exact Product",
        "text": "Record the medicine name, formulation, and instructions on your label. Do not assume directions for one product apply to another.",
        "icon": ""
      },
      {
        "title": "Your Treatment Goals",
        "text": "Ask the prescriber what the medicine is intended to address, how progress will be reviewed, and which appointments or tests are part of your plan.",
        "icon": ""
      },
      {
        "title": "Symptoms & Tolerability",
        "text": "Describe changes you have noticed, when they began, and how they affect eating, drinking, or daily activities. Ask what needs prompt review.",
        "icon": ""
      },
      {
        "title": "Other Medicines & Planned Procedures",
        "text": "Share your full medication list and tell your treatment team about planned procedures. Ask the responsible clinician for any product-specific instructions.",
        "icon": ""
      }
    ],
    "preparation": [
      {
        "title": "Medication Details",
        "text": "Bring the current label, dose instructions, pharmacy details, and dates of prescribed changes. Include all other medicines and supplements."
      },
      {
        "title": "Questions About Use",
        "text": "Note any uncertainty about administration, storage, or missed doses. Ask the pharmacist or prescriber instead of using instructions for a different product."
      },
      {
        "title": "Monitoring & Follow-Up",
        "text": "Bring results or records requested by your clinician and questions about the next review. Ask whom to contact if concerns develop between visits."
      }
    ],
    "visit": [
      {
        "title": "Confirm the Exact Medicine",
        "text": "Review the name, formulation, and prescribed instructions with the pharmacist or prescriber. Do not use one medicine as a dosing reference for another."
      },
      {
        "title": "Discuss Tolerability & Goals",
        "text": "Explain changes in daily function, eating, or drinking and ask how progress and side effects will be assessed. Treatment decisions belong with your prescribing team."
      },
      {
        "title": "Coordinate Other Care",
        "text": "Tell clinicians about the medicine before planned procedures and ask the responsible team for instructions. Share all other prescriptions and supplements."
      }
    ],
    "followUp": [
      {
        "title": "Follow Product-Specific Instructions",
        "text": "Keep your current Medication Guide and prescription directions. Ask for clarification before making a change or handling a missed dose."
      },
      {
        "title": "Keep Monitoring Appointments",
        "text": "Attend reviews and tests arranged by the prescriber. Bring the observations or records they have asked you to track."
      },
      {
        "title": "Know the Contact & Urgent-Care Plan",
        "text": "Ask which symptoms need prompt review or emergency attention. Do not wait for a weight-management appointment when urgent medical care is needed."
      }
    ],
    "faqAside": [
      "Questions before your visit?",
      "Bring your records and priorities.",
      "Confirm the right care team."
    ],
    "faqItems": [
      {
        "q": "Can I use another product's dosing instructions?",
        "paragraphs": [
          "No. Confirm directions for your exact medicine and formulation with the prescriber or pharmacist. This page does not give dose conversions."
        ]
      },
      {
        "q": "Does this clinic offer a weight-loss program?",
        "paragraphs": [
          "No program is advertised by this guide. Contact your prescribing team for medication management and confirm any clinic service directly before booking."
        ]
      },
      {
        "q": "What if I have a question about a missed dose?",
        "paragraphs": [
          "Use the information for your prescribed product and contact your pharmacist or prescriber for clarification. Do not guess or double a dose based on this guide."
        ]
      },
      {
        "q": "What if I do not have all my records?",
        "paragraphs": [
          "Contact the office or treating team about which records are essential and how to request them. Do not delay urgent care while gathering paperwork."
        ]
      },
      {
        "q": "How can I contact the clinic?",
        "paragraphs": [
          "Use the selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm whether the specialty fits your concern, appointment availability, referral requirements, and payment or insurance arrangements. No appointment or coverage is confirmed by this page."
        ]
      }
    ],
    "specialistIntro": "Dr. Y. Michael Li focuses on complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty is appropriate for your concern and what records would be needed. A consultation does not replace care already arranged with other teams.",
    "scope": "Medication selection, monitoring, and dose changes should be discussed with your prescriber or pharmacist. This educational page does not establish a prescribing service at our clinic. Contact our office only to confirm whether a separate spine or neurosurgical concern is appropriate for a consultation.",
    "related": [
      {
        "title": "Medication Safety Overview",
        "href": "/practice-areas/dangerous-drugs"
      },
      {
        "title": "Depo-Provera Questions",
        "href": "/practice-areas/dangerous-drugs/depo-provera"
      }
    ],
    "sources": [
      {
        "title": "MedlinePlus: semaglutide injection (one GLP-1 medicine)",
        "href": "https://medlineplus.gov/druginfo/meds/a618008.html"
      }
    ]
  }
}
