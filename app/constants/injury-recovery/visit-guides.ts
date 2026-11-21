import type { carRecovery } from './car'
export type VisitGuide = typeof carRecovery & {
  safety?: { title: string; text: string; sourceUrl?: string; sourceLabel?: string }
  specialistIntro?: string
  scope?: string
  related?: { title: string; href: string }[]
  sources?: { title: string; href: string }[]
}

export const truckVisitGuide = {
  "hero": {
    "breadcrumbLabel": "Truck Accident",
    "title": "Medical Follow-Up After a Truck Accident",
    "lead": "Already received care after a truck accident? Prepare your hospital records, explain ongoing concerns, and organize questions for your next medical visit. Contact your preferred office to ask whether our specialist is a fit."
  },
  "seo": {
    "title": "Medical Follow-Up After a Truck Accident | For The People Clinic",
    "description": "Already received care after a truck accident? Prepare your hospital records, explain ongoing concerns, and organize questions for your next medical visit. Contact your preferred office to ask whether our specialist is a fit."
  },
  "concerns": [
    {
      "title": "Care at More Than One Facility",
      "text": "Tell the doctor where you were treated and which clinicians are currently involved. Share hospital summaries and the instructions you received so important information is not left out.",
      "icon": ""
    },
    {
      "title": "Neck, Back & Movement Concerns",
      "text": "Describe any changes in comfort or movement after the collision, including difficulties with sitting, walking, or sleeping. Mention prior spine conditions and any restrictions already given to you.",
      "icon": ""
    },
    {
      "title": "Several Injuries to Discuss",
      "text": "List all injuries that were assessed, even if one concern now feels more important. Explain who is following each problem and which appointments or results are still pending.",
      "icon": ""
    },
    {
      "title": "Work & Everyday Responsibilities",
      "text": "Explain the physical demands of your work and the daily tasks you find difficult. Ask your treating clinician about appropriate restrictions and any documentation you may need.",
      "icon": ""
    }
  ],
  "preparation": [
    {
      "title": "Hospital & Emergency Records",
      "text": "Gather discharge summaries, procedure notes, imaging reports, and follow-up instructions from each facility. Ask the office how to share existing scans before your appointment."
    },
    {
      "title": "Your Current Care Team",
      "text": "Write down the names of your treating clinicians and upcoming appointments. Note who is managing each injury and any questions about how the plans fit together."
    },
    {
      "title": "Medicines & Restrictions",
      "text": "Bring your current medication and allergy list, including medicines prescribed after the crash. Include any lifting, driving, or other activity restrictions already provided."
    },
    {
      "title": "Questions That Remain",
      "text": "Note symptoms or daily limitations you want to discuss and any results you have not received. Call the office to confirm appointment requirements and the correct location."
    }
  ],
  "visit": [
    {
      "title": "Explain Your Main Concern",
      "text": "Start with the change that matters most to you. Describe what happened, the care you have received, and how your symptoms affect daily activities."
    },
    {
      "title": "Review Existing Findings",
      "text": "Discuss the reports and instructions you already have. Ask whether further evaluation or another specialist is appropriate; new imaging or treatment is not automatic."
    },
    {
      "title": "Confirm the Next Step",
      "text": "Ask who will review results, arrange any referrals, and answer questions between appointments. Make sure you understand the plan before leaving."
    }
  ],
  "followUp": [
    {
      "title": "Know Who Is Following Each Concern",
      "text": "Keep a list of which clinician is responsible for each part of your care. Ask whom to call if instructions appear to conflict or a recommended appointment has not been arranged."
    },
    {
      "title": "Track Results & Appointments",
      "text": "Keep new visit summaries with your existing records. Confirm how you will receive outstanding results rather than assuming no news means nothing needs attention."
    },
    {
      "title": "Review Your Activity Plan",
      "text": "Ask your treating clinician when work, driving, and other activities should be reviewed. Changes to restrictions should reflect your individual assessment, not a fixed recovery deadline."
    }
  ],
  "faqAside": [
    "Preparing for your next visit?",
    "Have questions about existing care?",
    "Find practical answers below."
  ],
  "faqItems": [
    {
      "q": "What if I have records from several hospitals?",
      "paragraphs": [
        "Prepare a list of facilities and dates of care, then gather available discharge summaries and reports. Ask the office which records are needed and how to send imaging files. Do not postpone urgent care while collecting paperwork."
      ]
    },
    {
      "q": "Should I keep appointments with my other specialists?",
      "paragraphs": [
        "Do not cancel existing follow-up simply because you are asking about a new appointment. Discuss the role of each clinician and any proposed changes with your treating team."
      ]
    },
    {
      "q": "Will I need another scan?",
      "paragraphs": [
        "Bring details of tests already performed. Additional imaging depends on the clinical evaluation; a new appointment does not automatically require repeat testing."
      ]
    },
    {
      "q": "Can the office confirm when I can return to work?",
      "paragraphs": [
        "Describe your work duties and bring any current restrictions. Return-to-work guidance and documentation depend on an individual clinical assessment. Ask the office what can be addressed during your visit."
      ]
    },
    {
      "q": "Does the clinic treat every type of injury?",
      "paragraphs": [
        "Dr. Li focuses on complex spine conditions and brain and spine tumors. Call the office to explain your concern and ask whether his specialty is a fit. This guide does not mean that every injury can be treated at the clinic. Emergency conditions require emergency care."
      ]
    },
    {
      "q": "How do I arrange a visit and ask about costs?",
      "paragraphs": [
        "Choose Syracuse, Dallas, or New York City in Flushing using the office selector below. Call to discuss availability, referral requirements, and payment or insurance questions. Confirm your appointment and location before traveling."
      ]
    }
  ]
} satisfies VisitGuide

export const motorcycleVisitGuide = {
  "hero": {
    "breadcrumbLabel": "Motorcycle Accident",
    "title": "Medical Follow-Up After a Motorcycle Accident",
    "lead": "Prepare for your next visit after a motorcycle accident. Bring existing injury records, describe changes in movement and daily activities, and ask about follow-up with the right clinician for your needs."
  },
  "seo": {
    "title": "Medical Follow-Up After a Motorcycle Accident | For The People Clinic",
    "description": "Prepare for your next visit after a motorcycle accident. Bring existing injury records, describe changes in movement and daily activities, and ask about follow-up with the right clinician for your needs."
  },
  "concerns": [
    {
      "title": "Injuries Already Assessed",
      "text": "Tell the doctor about any fractures, wounds, or other injuries identified during initial care. Share the instructions you received and the names of clinicians managing those concerns.",
      "icon": ""
    },
    {
      "title": "Neck, Back & Limb Symptoms",
      "text": "Describe where you feel discomfort and how it affects movement. Explain what has changed since the crash and whether you have received instructions for a brace, cast, or mobility aid.",
      "icon": ""
    },
    {
      "title": "Head Impact & Changes Since the Crash",
      "text": "Mention any head impact and changes you have noticed in concentration, balance, or sleep. Bring relevant emergency records. Emergency warning signs should not wait for a routine appointment.",
      "icon": ""
    },
    {
      "title": "Riding, Work & Daily Tasks",
      "text": "Explain the activities you hope to return to and the tasks that remain difficult. Ask your treating clinician for individual guidance rather than using pain alone to decide when to resume riding.",
      "icon": ""
    }
  ],
  "preparation": [
    {
      "title": "Emergency & Injury Records",
      "text": "Gather discharge papers, imaging reports, and any wound, fracture, or procedure instructions. Ask how to share existing images and which records are needed before the visit."
    },
    {
      "title": "Treatments & Follow-Up Already Planned",
      "text": "List upcoming wound checks, orthopedic visits, or other follow-up appointments. Note which clinician is responsible for each injury so the new visit can be placed in context."
    },
    {
      "title": "Medicines & Relevant History",
      "text": "Bring your medication and allergy list, previous injury history, and any side effects or questions you want to discuss. Include prescriptions given after the crash."
    },
    {
      "title": "Practical Visit Arrangements",
      "text": "Confirm the appointment, location, and referral requirements. If getting to or moving through the office may be difficult, call ahead to discuss access and any assistance you may need."
    }
  ],
  "visit": [
    {
      "title": "Explain Your Main Concern",
      "text": "Start with the change that matters most to you. Describe what happened, the care you have received, and how your symptoms affect daily activities."
    },
    {
      "title": "Review Existing Findings",
      "text": "Discuss the reports and instructions you already have. Ask whether further evaluation or another specialist is appropriate; new imaging or treatment is not automatic."
    },
    {
      "title": "Confirm the Next Step",
      "text": "Ask who will review results, arrange any referrals, and answer questions between appointments. Make sure you understand the plan before leaving."
    }
  ],
  "followUp": [
    {
      "title": "Continue Existing Injury Follow-Up",
      "text": "Follow the instructions from the clinicians managing wounds, fractures, and other injuries. Ask them directly about changes to dressings, supports, or restrictions."
    },
    {
      "title": "Record Changes Clearly",
      "text": "Keep short notes about symptoms, mobility, sleep, and daily activities. Contact your treating clinician about new or worsening concerns and follow your emergency return instructions."
    },
    {
      "title": "Discuss Return to Activities",
      "text": "Ask about work, exercise, driving, and riding separately. The demands differ, and advice should be based on your assessment and existing restrictions."
    }
  ],
  "faqAside": [
    "Preparing for your next visit?",
    "Have questions about existing care?",
    "Find practical answers below."
  ],
  "faqItems": [
    {
      "q": "Can this visit replace a wound or fracture follow-up?",
      "paragraphs": [
        "Do not assume that a spine consultation replaces care arranged for a wound or fracture. Keep the follow-up recommended by the clinician treating that injury and ask how a new consultation would fit into your care."
      ]
    },
    {
      "q": "What if I already have a cast, brace, or activity restrictions?",
      "paragraphs": [
        "Bring the instructions and records from the treating clinician. Do not change or stop prescribed supports based on this website; discuss concerns with the clinician responsible for them."
      ]
    },
    {
      "q": "What should I tell the office when calling?",
      "paragraphs": [
        "Explain when the accident occurred, your main concern, and what treatment you have already received. Mention existing referrals and ask whether the specialist is appropriate for your needs."
      ]
    },
    {
      "q": "When can I ride again?",
      "paragraphs": [
        "This page cannot determine readiness to ride. Discuss your recovery, current restrictions, medicines, and the demands of riding with your treating clinician before returning."
      ]
    },
    {
      "q": "Does the clinic treat every type of injury?",
      "paragraphs": [
        "Dr. Li focuses on complex spine conditions and brain and spine tumors. Call the office to explain your concern and ask whether his specialty is a fit. This guide does not mean that every injury can be treated at the clinic. Emergency conditions require emergency care."
      ]
    },
    {
      "q": "How do I arrange a visit and ask about costs?",
      "paragraphs": [
        "Choose Syracuse, Dallas, or New York City in Flushing using the office selector below. Call to discuss availability, referral requirements, and payment or insurance questions. Confirm your appointment and location before traveling."
      ]
    }
  ]
} satisfies VisitGuide

export const fallVisitGuide = {
  "hero": {
    "breadcrumbLabel": "Fall Injury",
    "title": "Medical Follow-Up After a Fall",
    "lead": "Prepare to discuss how a fall happened, the changes you have noticed, and any care you have already received. Bring your existing records and questions so you can make the most of your medical visit."
  },
  "seo": {
    "title": "Medical Follow-Up After a Fall | For The People Clinic",
    "description": "Prepare to discuss how a fall happened, the changes you have noticed, and any care you have already received. Bring your existing records and questions so you can make the most of your medical visit."
  },
  "concerns": [
    {
      "title": "How the Fall Happened",
      "text": "Describe where you were, what you were doing, and whether you remember tripping, slipping, or feeling unwell beforehand. Mention any similar incidents to help your clinician understand the history.",
      "icon": ""
    },
    {
      "title": "Pain & Changes in Movement",
      "text": "Explain which areas are uncomfortable and whether walking, getting out of a chair, or using your arms feels different. Bring any records from an earlier assessment of the injury.",
      "icon": ""
    },
    {
      "title": "Head Impact & Other Changes",
      "text": "Tell your clinician if you hit your head and describe any changes noticed afterward. Follow existing discharge instructions, and seek emergency care for the warning signs described above.",
      "icon": ""
    },
    {
      "title": "Confidence With Daily Activities",
      "text": "Discuss tasks that now feel difficult or unsafe, including stairs, bathing, or moving around at home. Mention existing mobility aids and whether someone is helping you.",
      "icon": ""
    }
  ],
  "preparation": [
    {
      "title": "A Short Account of the Fall",
      "text": "Write down the date, circumstances, and symptoms you noticed before and after the fall. If someone witnessed it, ask whether they can help you recall details."
    },
    {
      "title": "Records From Previous Care",
      "text": "Bring emergency discharge instructions, imaging reports, and any treatment or mobility advice already given. Ask the office how to send records and existing images."
    },
    {
      "title": "Medication & Health History",
      "text": "Prepare a current medication and allergy list and note previous falls or balance concerns. Ask your clinician whether any part of your health history needs further review; do not change medicines on your own."
    },
    {
      "title": "Access & Appointment Questions",
      "text": "Call to confirm the location and whether the specialist is a fit. Discuss access needs in advance and ask what paperwork or referral information to bring."
    }
  ],
  "visit": [
    {
      "title": "Explain Your Main Concern",
      "text": "Start with the change that matters most to you. Describe what happened, the care you have received, and how your symptoms affect daily activities."
    },
    {
      "title": "Review Existing Findings",
      "text": "Discuss the reports and instructions you already have. Ask whether further evaluation or another specialist is appropriate; new imaging or treatment is not automatic."
    },
    {
      "title": "Confirm the Next Step",
      "text": "Ask who will review results, arrange any referrals, and answer questions between appointments. Make sure you understand the plan before leaving."
    }
  ],
  "followUp": [
    {
      "title": "Clarify Who to Follow Up With",
      "text": "Ask which clinician will review the injury and whether other concerns about the fall should be discussed with your primary-care team. Confirm any appointments recommended at discharge."
    },
    {
      "title": "Discuss Support at Home",
      "text": "Tell your clinician about stairs, mobility challenges, and the help available to you. Ask whether further assessment or support is appropriate for your situation."
    },
    {
      "title": "Track Changes in Everyday Function",
      "text": "Note changes in discomfort and activities such as walking or dressing. Share these at follow-up, and contact your treating clinician earlier if concerns worsen."
    }
  ],
  "faqAside": [
    "Preparing for your next visit?",
    "Have questions about existing care?",
    "Find practical answers below."
  ],
  "faqItems": [
    {
      "q": "Should I mention earlier falls or balance concerns?",
      "paragraphs": [
        "Yes. Include previous falls and any changes in balance or confidence with daily activities in your history. Your clinician can discuss whether further assessment is appropriate."
      ]
    },
    {
      "q": "What if I do not remember exactly how I fell?",
      "paragraphs": [
        "Tell the clinician what you do remember without guessing. A witness may be able to add details. Mention any symptoms before the fall and any assessment you received afterward."
      ]
    },
    {
      "q": "Can someone come with me?",
      "paragraphs": [
        "Call the office about its visitor arrangements. A family member or caregiver may help you explain changes, bring records, and remember instructions if you would like their support."
      ]
    },
    {
      "q": "Does every fall require a spine specialist?",
      "paragraphs": [
        "No. The appropriate clinician depends on your concerns and prior assessment. Contact the office to explain your situation and ask whether Dr. Li\u2019s specialty is a fit; continue any care already recommended."
      ]
    },
    {
      "q": "Does the clinic treat every type of injury?",
      "paragraphs": [
        "Dr. Li focuses on complex spine conditions and brain and spine tumors. Call the office to explain your concern and ask whether his specialty is a fit. This guide does not mean that every injury can be treated at the clinic. Emergency conditions require emergency care."
      ]
    },
    {
      "q": "How do I arrange a visit and ask about costs?",
      "paragraphs": [
        "Choose Syracuse, Dallas, or New York City in Flushing using the office selector below. Call to discuss availability, referral requirements, and payment or insurance questions. Confirm your appointment and location before traveling."
      ]
    }
  ]
} satisfies VisitGuide

