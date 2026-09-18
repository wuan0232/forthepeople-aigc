import { blogMedicalArticles } from '~/constants/blog'

export type SearchDocument = {
  title: string
  summary: string
  href: string
  type: 'Article' | 'Recovery guide' | 'Page'
}

export const POPULAR_SEARCH_TOPICS = [
  { label: 'Car Accidents', query: 'car accident' },
  { label: 'Slip and Fall', query: 'slip and fall' },
  { label: 'Brain Injury', query: 'brain injury' },
  { label: 'Spine Recovery', query: 'spine recovery' },
  { label: 'Medication Safety', query: 'medication safety' },
  { label: 'Weight Loss Drugs', query: 'weight loss drug' },
  { label: 'Depo-Provera', query: 'depo-provera' },
  { label: 'Mesothelioma', query: 'mesothelioma' },
] as const

const recoveryGuides: SearchDocument[] = [
  { title: 'Car Crash Recovery', summary: 'Urgent symptoms, early actions, and follow-up after a car crash.', href: '/practice-areas/car-accident', type: 'Recovery guide' },
  { title: 'Fall Injury Recovery', summary: 'Medical guidance after a slip, trip, or fall.', href: '/practice-areas/slip-and-fall', type: 'Recovery guide' },
  { title: 'Truck Crash Recovery', summary: 'High-energy trauma warning signs and coordinated follow-up.', href: '/practice-areas/truck-accident', type: 'Recovery guide' },
  { title: 'Motorcycle Injury Recovery', summary: 'Wound, fracture, head injury, and follow-up guidance.', href: '/practice-areas/motorcycle-accident', type: 'Recovery guide' },
  { title: 'Brain Injury Follow-Up', summary: 'Concussion and neurological symptom monitoring guidance.', href: '/practice-areas/brain-injury', type: 'Recovery guide' },
  { title: 'Spinal Cord Injury Follow-Up', summary: 'Spinal warning signs, functional changes, and rehabilitation planning.', href: '/practice-areas/spinal-cord-injury', type: 'Recovery guide' },
  { title: 'Medication Safety', summary: 'Medical next steps for medication side effects and safety concerns.', href: '/practice-areas/dangerous-drugs', type: 'Recovery guide' },
  { title: 'GLP-1 & Weight Loss Drug Guide', summary: 'Urgent symptoms, hydration, and prescriber questions.', href: '/practice-areas/dangerous-drugs/weight-loss-drug', type: 'Recovery guide' },
  { title: 'Depo-Provera Safety Guide', summary: 'Warning signs and medical follow-up questions.', href: '/practice-areas/dangerous-drugs/depo-provera', type: 'Recovery guide' },
  { title: 'Mesothelioma Care Pathway', summary: 'Care-team coordination, symptom monitoring, and records planning.', href: '/practice-areas/mesothelioma', type: 'Recovery guide' },
]

const sitePages: SearchDocument[] = [
  { title: 'Recovery Checklist', summary: 'A no-personal-information tool for urgent symptoms and follow-up planning.', href: '/contact', type: 'Page' },
  { title: 'Meet Dr. Y. Michael Li', summary: 'Neurosurgery, complex spine care, and brain and spine tumor expertise.', href: '/about/meet-our-doctors', type: 'Page' },
  { title: 'Clinic Locations', summary: 'Find a clinic location and prepare for an in-person visit.', href: '/locations', type: 'Page' },
  { title: 'Practical Rights & Records', summary: 'Educational information on care records, symptom logs, and informed questions.', href: '/injury-recovery-guides', type: 'Page' },
]

export const SEARCH_DOCUMENTS: SearchDocument[] = [
  ...recoveryGuides,
  ...sitePages,
  ...blogMedicalArticles.map((article) => ({
    title: article.title,
    summary: article.summary,
    href: `/blog/posts/${article.slug}`,
    type: 'Article' as const,
  })),
]

export function searchSite(query: string): SearchDocument[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  return SEARCH_DOCUMENTS
    .map((document) => {
      const title = document.title.toLowerCase()
      const summary = document.summary.toLowerCase()
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 3 : 0) + (summary.includes(term) ? 1 : 0), 0)
      return { document, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.document.title.localeCompare(b.document.title))
    .map(({ document }) => document)
}
