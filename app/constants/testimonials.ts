import type { TestimonialResourceLink, TestimonialReview, TestimonialStory } from '~/types/testimonials'

export const TESTIMONIALS_HERO = {
  title: 'Patient recovery stories that support practical next steps',
  disclaimer:
    'Individual recovery timelines vary. Stories are educational examples and not a guarantee of similar outcomes or a substitute for personalized medical care.',
  description:
    'Explore patient recovery stories and reviews to understand how For The People Clinic supports medical next steps after injury.',
  primaryCta: { label: 'Get in touch', href: '/locations' },
  secondaryCta: { label: 'View all recovery stories', href: '#client-stories' },
} as const

export const TESTIMONIALS_REVIEWS_INTRO = {
  title:
    'Read what patients say about practical guidance from For The People Clinic.',
  disclaimer:
    'Individual experiences vary. Based on select patient reviews.',
} as const

export const testimonialReviews: TestimonialReview[] = [
  {
    quote:
      'After my injury, the clinic helped me understand which symptoms to watch and what follow-up to schedule. Having a clear plan made daily life feel more manageable.',
    author: 'Robert',
    year: 2026,
  },
  {
    quote:
      'I reached out to several different clinics, but the one that gave me the most attention and answered my questions immediately was For The People Clinic.',
    author: 'Dawn',
    year: 2026,
  },
  {
    quote:
      'Finally, somebody listened closely to what had changed and explained the next medical steps in plain language.',
    author: 'Joanne',
    year: 2026,
  },
  {
    quote:
      'They treated my family with respect from day one and kept us informed about each visit, referral, and recovery milestone.',
    author: 'Marcus',
    year: 2025,
  },
  {
    quote:
      'I was nervous about what recovery would involve, but the team made the medical follow-up process straightforward and practical.',
    author: 'Elena',
    year: 2025,
  },
]

export const testimonialStories: TestimonialStory[] = [
  {
    id: 'antonia',
    title: 'A Safer Return to Everyday Steps – Antonia',
    text: 'After a supermarket fall left Antonia with serious pain and mobility concerns, For The People Clinic helped her organize follow-up, monitor changes, and plan a safer return to daily routines.',
    imageSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop',
    imageAlt: 'Antonia, patient recovery story',
    variant: 'standard',
  },
  {
    id: 'alysia',
    title: 'Alysia Built a Clearer Recovery Plan for Her Family',
    text: 'After a life-altering accident, Alysia needed a practical way to coordinate symptoms, appointments, and questions for her care team. Her recovery plan gave her family clearer next steps.',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&fit=crop',
    imageAlt: 'Alysia, patient recovery story',
    variant: 'large',
  },
  {
    id: 'james',
    title: 'Back on the Road – James',
    text: 'After a crash left James with pain and functional limits, he used structured follow-up, symptom tracking, and activity guidance to focus on a safer recovery.',
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop',
    imageAlt: 'James, patient recovery story',
    variant: 'standard',
  },
  {
    id: 'mike-lynette',
    title: 'Finding Steady Support After a Disruptive Event – Mike & Lynette',
    text: 'After a disruptive event upended their routine, Mike and Lynette used the clinic’s practical guidance to organize appointments, medication questions, and the next steps for their family’s wellbeing.',
    imageSrc:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop',
    imageAlt: 'Mike and Lynette, patient recovery story',
    variant: 'large',
  },
  {
    id: 'sandra',
    title: 'A Workplace Injury, Handled with Care – Sandra',
    text: 'When Sandra was hurt at work, she needed clear medical restrictions and a practical recovery schedule. Her care plan helped her prepare for follow-up and a safer return to activity.',
    imageSrc:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&fit=crop',
    imageAlt: 'Sandra, patient recovery story',
    variant: 'standard',
  },
  {
    id: 'david',
    title: 'Regaining Confidence After a Slip and Fall – David',
    text: 'After a fall caused back pain and disrupted David’s routine, he focused on clinical reassessment, gradual activity guidance, and tracking symptoms that needed more attention.',
    imageSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&fit=crop',
    imageAlt: 'David, patient recovery story',
    variant: 'standard',
  },
]

export const TESTIMONIALS_RESOURCES = {
  eyebrow: 'Resources & Insights',
  title: 'Let us help you get started',
  lead:
    'Discover the resources you need to succeed with For The People Clinic by browsing our resource center, educational videos, digital formats, and customer stories.',
  explore: {
    title: 'Explore',
    description:
      'Stay up-to-date with the latest legal news & trends with our informative blog section. Read expert insights, case updates & more to stay ahead of the game.',
  },
  learn: {
    title: 'Learn',
    description:
      'Stay informed with our legal resources section, covering a wide range of topics from personal injury to employment law. Access helpful guides, articles & more.',
  },
} as const

export const testimonialsExploreLinks: TestimonialResourceLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'The Case Process', href: '/about/the-case-process' },
  { label: 'FAQ', href: '/about/faq' },
  { label: 'In the Media', href: '/blog' },
  { label: 'Recovery Stories', href: '/recovery-stories' },
]

export const testimonialsLearnLinks: TestimonialResourceLink[] = [
  { label: 'Car Accident', href: '/practice-areas/car-accident' },
  { label: 'Personal Injury', href: '/practice-areas/personal-injury' },
  { label: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
  { label: 'Truck Accident', href: '/practice-areas/truck-accident' },
  { label: 'Labor & Employment', href: '/practice-areas/personal-injury' },
]

export const TESTIMONIALS_FEATURED_BLOG = {
  label: 'FEATURED BLOG',
  title: 'The Week in Recalls: Week of May 29th, 2026',
  text: 'The following product recalls have been announced this week—make sure you\'re in the know. 2025–2026 Hyundai Tucson and Santa Cruz Vehicles Hyundai',
  href: '/blog',
  cta: 'Learn more',
} as const
