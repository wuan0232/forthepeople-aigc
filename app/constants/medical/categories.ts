import type { IconCard } from '~/types/practice-area'

export type MedicalCategory = IconCard & {
  slug: string
  href: string
}

const ICON_DENTAL = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20c0-4 3-8 8-8s8 4 8 8v4c0 6-4 12-8 12s-8-6-8-12v-4z"/><path d="M20 28h8"/></svg>`
const ICON_BIRTH = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="5"/><path d="M14 38c0-6 4-10 10-10s10 4 10 10"/><path d="M20 22h8"/></svg>`
const ICON_SURGERY = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8v32M16 16h16M18 32h12"/></svg>`
const ICON_ANESTHESIA = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8h8l4 32H16l4-32z"/><path d="M22 20h4"/></svg>`
const ICON_MISDIAGNOSIS = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20c6-8 18-8 24 0"/><circle cx="18" cy="28" r="6"/><circle cx="30" cy="28" r="6"/><path d="M24 34v6"/></svg>`
const ICON_MEDICATION = `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="10" width="20" height="28" rx="3"/><path d="M18 18h12M24 10v8"/></svg>`

export const MEDICAL_CATEGORIES: MedicalCategory[] = [
  {
    slug: 'misdiagnosis',
    title: 'Misdiagnosis & Delayed Diagnosis',
    text: 'Learn the warning signs of missed or delayed diagnosis and how to get timely reassessment and follow-up care.',
    href: '/practice-areas/medical-malpractice/misdiagnosis',
    icon: ICON_MISDIAGNOSIS,
  },
  {
    slug: 'medication-errors',
    title: 'Medication & Pharmacy Errors',
    text: 'Dosing mistakes, interaction risks, and dispensing errors can be serious. Learn how to respond quickly and safely.',
    href: '/practice-areas/medical-malpractice/medication-errors',
    icon: ICON_MEDICATION,
  },
  {
    slug: 'birth-injury',
    title: 'Birth Injury & Obstetric Harm',
    text: 'From delivery complications to postpartum emergencies, understand early warning signs for both newborns and mothers.',
    href: '/practice-areas/medical-malpractice/birth-injury',
    icon: ICON_BIRTH,
  },
  {
    slug: 'surgical-errors',
    title: 'Surgical Errors',
    text: 'Wrong-site surgery, retained items, and delayed post-op response require urgent attention and proper documentation.',
    href: '/practice-areas/medical-malpractice/surgical-errors',
    icon: ICON_SURGERY,
  },
  {
    slug: 'anesthesia-errors',
    title: 'Anesthesia Errors',
    text: 'Review key anesthesia risk points, from pre-op assessment to post-op warning signs that need immediate care.',
    href: '/practice-areas/medical-malpractice/anesthesia-errors',
    icon: ICON_ANESTHESIA,
  },
  {
    slug: 'dental-malpractice',
    title: 'Dental Malpractice',
    text: 'Nerve injury, root canal complications, and poor infection control can have lasting effects. Track symptoms early.',
    href: '/practice-areas/medical-malpractice/dental-malpractice',
    icon: ICON_DENTAL,
  },
]
