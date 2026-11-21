import type { BlogArticle, BlogPost, BlogTagLabel, BlogCategoryCard, BlogCategoryArchiveMeta } from '~/types/blog'

// Platform-neutral local content. A future CMS adapter should return BlogArticle[].
export const BLOG_SOCIAL: { label: string; href: string; icon: 'facebook' | 'x' | 'linkedin' | 'email' }[] = []
export const BLOG_ACCIDENTS_INCIDENTS_PATH = '/blog/accidents-and-incidents'
export const BLOG_MEDICAL_MALPRACTICE_PATH = '/blog/medical-malpractice'
export const blogMedicalArticles: BlogArticle[] = [
  {
    "slug": "first-visit-after-accident",
    "title": "Your First Medical Visit After an Accident: What to Bring",
    "summary": "Prepare your questions, records, and appointment details before you travel.",
    "categoryLabel": "Visit Preparation",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/visit-preparation.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Confirm the appointment",
        "paragraphs": [
          "Call the office to confirm the location, time, and documents requested for your visit. Ask about fees, insurance information, and any referral requirements."
        ]
      },
      {
        "heading": "Bring your existing information",
        "paragraphs": [
          "Ask which discharge notes, test reports, and images the office needs. Bring a current medication list and the questions you want to discuss."
        ]
      },
      {
        "heading": "Make time for your questions",
        "paragraphs": [
          "Write down your main concerns before the visit. Before leaving, ask what happens next and how to contact the office with follow-up questions."
        ]
      }
    ]
  },
  {
    "slug": "discussing-neck-and-back-symptoms",
    "title": "Talking to Your Doctor About Neck and Back Symptoms",
    "summary": "Organize the details you want to share about your symptoms and daily activities.",
    "categoryLabel": "After an Accident",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/clinic-appointment.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Describe what you notice",
        "paragraphs": [
          "Write down where you feel discomfort, when it began, and whether it has changed. Describe the experience in your own words rather than trying to name a diagnosis."
        ]
      },
      {
        "heading": "Explain the effect on daily life",
        "paragraphs": [
          "Make a note of tasks that have become difficult, such as sitting, sleeping, or working. Tell the doctor about care you have already received."
        ]
      },
      {
        "heading": "Ask for clarification",
        "paragraphs": [
          "If an explanation is unclear, ask the doctor to explain it again. This guide helps prepare a conversation; it does not diagnose a condition."
        ]
      }
    ]
  },
  {
    "slug": "existing-imaging-specialist-visit",
    "title": "Already Had Imaging? Preparing for a Specialist Visit",
    "summary": "Ask how to provide existing scans and reports before your appointment.",
    "categoryLabel": "Visit Preparation",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/visit-preparation.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Tell the office about prior tests",
        "paragraphs": [
          "When scheduling, mention where and when your imaging was performed. Ask whether the doctor needs the images, the written report, or both."
        ]
      },
      {
        "heading": "Confirm the transfer method",
        "paragraphs": [
          "Contact the imaging facility to ask how records can be shared. Confirm the receiving office and its accepted transfer method before sending information."
        ]
      },
      {
        "heading": "Bring your questions",
        "paragraphs": [
          "Write down any terms or findings you want explained. The doctor can discuss the report in the context of your symptoms and medical history."
        ]
      }
    ]
  },
  {
    "slug": "organize-medical-records",
    "title": "How to Organize Your Medical Records",
    "summary": "Keep existing records easy to find for your next medical conversation.",
    "categoryLabel": "Visit Preparation",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/clinic-appointment.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Create a dated list",
        "paragraphs": [
          "List previous visits and tests with the date and facility. Keep discharge summaries and instructions together so you can find them easily."
        ]
      },
      {
        "heading": "Check what is needed",
        "paragraphs": [
          "Ask the receiving office which records it needs. Keep your own copies where possible and avoid sending sensitive records through unconfirmed channels."
        ]
      },
      {
        "heading": "Review the details",
        "paragraphs": [
          "Check that documents belong to you and that the dates are correct. Ask the record provider about missing pages or corrections."
        ]
      }
    ]
  },
  {
    "slug": "questions-spine-consultation",
    "title": "Questions to Ask at a Spine Consultation",
    "summary": "Prepare a short list of questions about your concerns and possible next steps.",
    "categoryLabel": "Spine Care",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/visit-preparation.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Start with your goals",
        "paragraphs": [
          "Tell the doctor what matters most to you, including daily tasks or activities you want to discuss. Ask how the evaluation relates to those concerns."
        ]
      },
      {
        "heading": "Understand the options",
        "paragraphs": [
          "Ask what options are being considered and why. If a test or treatment is recommended, ask about its purpose, alternatives, and what to expect."
        ]
      },
      {
        "heading": "Clarify the follow-up",
        "paragraphs": [
          "Ask when to return and whom to contact with questions. Recommendations should come from your clinician after an individual evaluation."
        ]
      }
    ]
  },
  {
    "slug": "symptom-notes-between-visits",
    "title": "Keeping Track of Symptoms Between Visits",
    "summary": "A brief dated note can help you explain changes at your next appointment.",
    "categoryLabel": "After an Accident",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/clinic-appointment.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Keep the notes simple",
        "paragraphs": [
          "Record the date, what you noticed, and any activity you want to discuss. A short description is often easier to review than a long narrative."
        ]
      },
      {
        "heading": "Use your own words",
        "paragraphs": [
          "Describe changes and questions without assigning a diagnosis. Bring the notes to your appointment alongside any instructions you have received."
        ]
      },
      {
        "heading": "Know how to reach your care team",
        "paragraphs": [
          "Ask your clinician how to report concerns between visits. A personal log does not replace care or instructions from your medical team."
        ]
      }
    ]
  },
  {
    "slug": "understand-follow-up-instructions",
    "title": "Understanding Your Follow-Up Instructions",
    "summary": "Leave your appointment knowing what to do next and whom to contact.",
    "categoryLabel": "Follow-Up",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/visit-preparation.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Review instructions before leaving",
        "paragraphs": [
          "Ask for an explanation of any unfamiliar terms. Confirm whether you need another appointment, records, or a referral."
        ]
      },
      {
        "heading": "Keep contact details handy",
        "paragraphs": [
          "Save the appropriate office number and ask which team handles your questions. Confirm how any test results or updates will be communicated."
        ]
      },
      {
        "heading": "Ask about practical details",
        "paragraphs": [
          "If instructions do not fit your schedule or circumstances, discuss that with the team. Do not assume a general online guide replaces your individual instructions."
        ]
      }
    ]
  },
  {
    "slug": "contact-our-offices",
    "title": "Contacting Our Syracuse, Dallas, and Flushing Offices",
    "summary": "Choose an office and confirm the details of your visit by phone.",
    "categoryLabel": "Clinic Visits",
    "readMinutes": 1,
    "publishedIso": "2026-11-18",
    "imageSrc": "/images/clinic-appointment.svg",
    "imageAlt": "",
    "sections": [
      {
        "heading": "Choose your location",
        "paragraphs": [
          "Use the office selector below to find current addresses, phone numbers, and directions. Confirm your appointment before traveling."
        ]
      },
      {
        "heading": "Ask about your visit",
        "paragraphs": [
          "Tell the office why you want to be seen and ask about appointment availability. Ask which records and payment information to bring."
        ]
      },
      {
        "heading": "Get directions",
        "paragraphs": [
          "Open the map for your selected office. Check the suite or unit number and ask the office about building access if needed."
        ]
      }
    ]
  }
]

function toPost(article: BlogArticle): BlogPost {
  return { slug: article.slug, title: article.title, href: `/blog/posts/${article.slug}`, readMinutes: article.readMinutes, tag: article.categoryLabel as BlogTagLabel, imageSrc: article.imageSrc, imageAlt: article.imageAlt }
}
const posts = blogMedicalArticles.map(toPost)
const featuredCopy = [
  { eyebrow: 'YOUR FIRST VISIT', description: 'A little preparation makes it easier to explain what happened and ask the questions that matter to you.', points: ['Bring existing reports and discharge instructions.', 'List your medicines, allergies, and main questions.', 'Call your preferred office to confirm visit details.'], note: 'Start with the information you already have.' },
  { eyebrow: 'DESCRIBE YOUR SYMPTOMS', description: 'Note where you feel discomfort, when it began, and how it affects sleep, movement, or daily activities.', points: [], note: 'Share changes in your own words.' },
  { eyebrow: 'ORGANIZE YOUR RECORDS', description: 'Keep existing imaging reports and visit notes together. Ask the office how to share images before your consultation.', points: [], note: 'Confirm which records the office needs.' },
]
export const blogFeaturedPosts = posts.slice(0, 3).map((post, index) => ({ ...post, imageSrc: undefined, ...featuredCopy[index]! }))
export const blogFilingCards = [0, 2, 4].map((index, i) => ({ title: posts[index]!.title, text: blogMedicalArticles[index]!.summary, href: posts[index]!.href, imageSrc: ['/images/blog/filing-case-process.webp', '/images/blog/filing-workers-comp.webp', '/images/blog/filing-ssdi.webp'][i], imageAlt: '', accent: i === 1 }))
export const blogLatestCases = [
  {
    "title": "What should I tell the office when I call?",
    "text": "Explain why you want to be seen, when the accident happened, and whether you have already received care. You do not need to know the name of a condition to ask about a visit. The office can tell you what information is needed to discuss scheduling.",
    "note": "Before ending the call, confirm the location, availability, and any records requested in advance."
  },
  {
    "title": "What if I already have scans or test results?",
    "text": "Let the office know where and when the tests were performed. Ask whether to provide the written reports, the images, or both, and confirm the accepted transfer method. Keeping a list of previous tests helps you explain what has already been done.",
    "note": "Ask the original facility how to obtain copies, and check that the receiving office has what it needs."
  },
  {
    "title": "How do I clarify my next steps?",
    "text": "Write down questions about your appointment, records, and follow-up instructions. If something is unclear, ask the care team to explain it in everyday language. Confirm which office or team member you should contact for updates.",
    "note": "Keep your instructions and contact details together so they are easy to find after the visit."
  }
]
export const blogAfterAccidentPosts = [0, 1, 5, 6].map(index => posts[index]!)
export const blogBeingPrepared = [
  {
    "title": "Gather Existing Reports and Images",
    "text": "Ask the office which records will be useful, such as previous visit notes, discharge instructions, or imaging reports. Confirm how to provide them before sending anything, and keep your own copies available.",
    "note": "Make a short list of the facilities you visited and the dates of your tests."
  },
  {
    "title": "Prepare Your Health Information",
    "text": "Bring an up-to-date medication list and information about allergies or previous care that you want the doctor to know. If you are unsure about a document or detail, write down the question rather than guessing.",
    "note": "Check with the office about identification, insurance details, and any referral paperwork."
  },
  {
    "title": "Choose Your Most Important Questions",
    "text": "Think about what you want to understand by the end of the visit. Describe the activities that are difficult, what has changed, and what matters most to you. A short written list can help keep the conversation focused.",
    "note": "Before traveling, confirm the address, suite number, appointment time, and arrival instructions."
  }
]
export const blogNewsroomPosts = [2, 4, 6, 7].map(index => posts[index]!)
export const blogLatestListPosts = [...posts].reverse()
function toArchive(article: BlogArticle): BlogCategoryCard {
  return { ...article, href: `/blog/posts/${article.slug}`, publishedAt: new Date(`${article.publishedIso}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }
}
export const blogAccidentsIncidentsArchive = blogMedicalArticles.filter(a => a.categoryLabel === 'After an Accident' || a.slug === 'first-visit-after-accident').map(toArchive)
export const blogMedicalMalpracticeArchive = blogMedicalArticles.map(toArchive)
export const blogAccidentsIncidentsCategory: BlogCategoryArchiveMeta = { slug: 'accidents-and-incidents', title: 'After an Accident', path: BLOG_ACCIDENTS_INCIDENTS_PATH, postsPerPage: 9, totalPages: Math.max(1, Math.ceil(blogAccidentsIncidentsArchive.length / 9)) }
export const blogMedicalMalpracticeCategory: BlogCategoryArchiveMeta = { slug: 'medical-malpractice', title: 'Medical Visits & Follow-Up', path: BLOG_MEDICAL_MALPRACTICE_PATH, postsPerPage: 9, totalPages: Math.max(1, Math.ceil(blogMedicalMalpracticeArchive.length / 9)) }
export const blogPostFilters = [
  { label: 'After an Accident', href: BLOG_ACCIDENTS_INCIDENTS_PATH },
  { label: 'Medical Visits & Follow-Up', href: BLOG_MEDICAL_MALPRACTICE_PATH },
  { label: 'Latest Articles', href: '#blog-latest-posts' },
  { label: 'Preparing for Your Visit', href: '/blog/posts/first-visit-after-accident' },
]

// Evergreen topic cards are independent of the article publishing feed.
export const BLOG_TOPIC_SECTIONS = [
  { id: 'blog-accident-heading', title: 'After an Accident', description: 'Organize the information you want to discuss with your care team.', cards: [
    { title: 'Your First Contact', text: 'Call your preferred office and explain why you want to be seen. Mention when the accident happened and any care you have already received. Ask which services and appointment options are available for your concern, then confirm what the office needs before your visit.' },
    { title: 'Previous Medical Care', text: 'Keep a list of the clinics, hospitals, or imaging facilities you have visited. Ask which reports and images to bring and how to share them with the receiving office. Having your discharge notes and instructions together makes it easier to explain your previous care.' },
    { title: 'Changes You Have Noticed', text: 'Write down when you first noticed your symptoms, how they have changed, and which activities you want to discuss. Use your own words rather than trying to name a diagnosis. Bring your notes and questions to the appointment so important details are not forgotten.' },
    { title: 'Your Next Appointment', text: 'Confirm your appointment time, office location, and suite or unit number before traveling. Ask about required documents, fees, and insurance information. Keep the office phone number handy if you need directions or need to discuss a change to your appointment.' },
  ] },
  { id: 'blog-prepared-heading', title: 'Preparing for Your Visit', description: 'Bring the information and questions that matter for your next appointment.', cards: [
    { title: 'Medical Records', text: 'Ask which reports, images, and previous visit notes the doctor needs to review.' },
    { title: 'Medication List', text: 'Prepare a list of your current medications and allergies to discuss during your visit.' },
    { title: 'Questions for the Doctor', text: 'Write down your main concerns and the activities you want to discuss.' },
    { title: 'Visit Details', text: 'Confirm fees, insurance information, directions, and documents with the office before traveling.' },
  ] },
  { id: 'blog-news-heading', title: 'Understanding Injury Care', description: 'Useful topics to discuss during your medical visit.', cards: [
    { title: 'Your Medical History', text: 'Explain your concerns and previous care in your own words. Ask for clarification when needed.' },
    { title: 'Existing Tests', text: 'Discuss how your previous reports relate to your symptoms and what further evaluation may be considered.' },
    { title: 'Care Options', text: 'Ask about the purpose, alternatives, and practical details of any recommended next steps.' },
    { title: 'Follow-Up', text: 'Confirm when to return, how to receive updates, and whom to contact with questions.' },
  ] },
]

export const BLOG_INJURY_CARE_CARDS = [
  {
    "title": "Your History and Concerns",
    "text": "A visit is a chance to explain what happened, what you have noticed, and the care you have already received. Describe your priorities and the everyday activities you want to discuss.",
    "points": [
      "Bring a dated summary of previous visits.",
      "Ask for unfamiliar terms to be explained."
    ]
  },
  {
    "title": "Reports in Context",
    "text": "Existing reports are part of the conversation. Ask the doctor to explain what they mean in relation to your history and concerns, and whether any additional information is needed.",
    "points": [
      "Confirm whether images and reports are both needed.",
      "Write down questions about findings you do not understand."
    ]
  },
  {
    "title": "Understanding Your Options",
    "text": "If a test, treatment, or referral is discussed, ask why it is being considered and what the alternatives are. Make space to talk about your goals, practical concerns, and questions before deciding on next steps.",
    "points": [
      "Ask about expected benefits, risks, and alternatives.",
      "Discuss practical details such as timing and follow-up."
    ]
  },
  {
    "title": "A Clear Follow-Up Plan",
    "text": "Before you leave, check that you understand the instructions you have received. Ask when to return, how updates will be communicated, and who can answer questions between appointments.",
    "points": [
      "Keep written instructions with your records.",
      "Confirm the right contact for results and scheduling."
    ]
  }
]
