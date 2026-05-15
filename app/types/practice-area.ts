export type LawyerProfile = { name: string; img: string }

export type TextBlock = { title: string; text: string }

export type IconCard = TextBlock & { icon: string }

export type WaysPiCard = IconCard & {
  linkHref?: string
  linkLabel?: string
}

export type TimelineStep = { title: string; icon: string }

export type StatItem = { k: string; v: string }

export type PartnerSlide = {
  name: string
  role: string
  quote: string
  /** Optional legacy field; `PracticeAreaFight` uses `partnerPhotoSrc` by default. */
  img?: string
}

export type ClientTestimonial = {
  name: string
  quote: string
  thumbBg: string
  thumb?: string
}

export type LearnLink = { title: string; href: string }

export type FaqItem = { q: string; paragraphs: string[] }

export type CaseResult = { amount: string; location: string; type?: string }

export type PracticeAreaBreadcrumbItem = {
  label: string
  to?: string
  strong?: boolean
}

export type PracticeAreaHeroProps = {
  breadcrumbLabel: string
  title: string
  lead: string
  /** When set, replaces the default Home / Practice Areas / label trail. */
  breadcrumbItems?: PracticeAreaBreadcrumbItem[]
}

export type PracticeAreaMeetProps = {
  headingId?: string
  title: string
  intro: string
  lawyers: LawyerProfile[]
  ariaLabel: string
  centered?: boolean
}

export type PracticeAreaFaqProps = {
  asideQuestions: string[]
  items: FaqItem[]
  reviewedBy: { name: string; href?: string; date: string }
  regionLabel: string
  /** `46` = 40% aside / 60% accordion (4:6). Default ≈ 34% / 66%. */
  layout?: 'default' | '46'
}
