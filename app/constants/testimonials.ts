import type { TestimonialResourceLink, TestimonialReview, TestimonialStory } from '~/types/testimonials'

export const TESTIMONIALS_HERO = {
  title: 'Client success stories that inspire and drive change',
  disclaimer:
    'Results may vary depending on your particular facts and legal circumstances.',
  description:
    'Explore over 150,000 5-star reviews and 800 client testimonials to discover why people trust Morgan & Morgan.',
  primaryCta: { label: 'Get in touch', href: '#tst-contact' },
  secondaryCta: { label: 'View all stories', href: '#client-stories' },
} as const

export const TESTIMONIALS_REVIEWS_INTRO = {
  title:
    'Read amazing things past clients have said about the team at Morgan & Morgan.',
  disclaimer:
    'Results may vary depending on your particular facts and legal circumstances. Based on Select nationwide reviews',
} as const

export const testimonialReviews: TestimonialReview[] = [
  {
    quote:
      'After receiving a denial for disability, I called Morgan & Morgan. I chose them because I trust them. Life has now gotten a lot easier.',
    author: 'Robert',
    year: 2026,
  },
  {
    quote:
      'I reached out to several different law firms, but the one that gave me the most attention and answered my questions immediately was Morgan & Morgan.',
    author: 'Dawn',
    year: 2026,
  },
  {
    quote:
      'Finally, somebody believed me—somebody listened—and I finally got my settlement.',
    author: 'Joanne',
    year: 2026,
  },
  {
    quote:
      'They treated my family with respect from day one and kept us informed at every step of the case.',
    author: 'Marcus',
    year: 2025,
  },
  {
    quote:
      'I was nervous about hiring a lawyer, but the team made the process straightforward and fought hard for a fair outcome.',
    author: 'Elena',
    year: 2025,
  },
]

export const testimonialStories: TestimonialStory[] = [
  {
    id: 'antonia',
    title: "She Didn't Settle for Less – Antonia",
    text: 'In the ordinary act of stepping into a supermarket, Antonia slipped on a wet floor and suffered serious injuries. Morgan & Morgan helped her hold the store accountable and secure compensation for medical bills and lost wages.',
    imageSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop',
    imageAlt: 'Antonia, client story',
    variant: 'standard',
  },
  {
    id: 'alysia',
    title: 'Alysia Trusted Morgan & Morgan to Support Those Who Depend on Her',
    text: 'Facing the aftermath of a life-altering accident, Alysia needed an advocate who understood what was at stake for her family. Our attorneys fought for the resources she needed to move forward with confidence and stability.',
    imageSrc:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&fit=crop',
    imageAlt: 'Alysia, client story',
    variant: 'large',
  },
  {
    id: 'james',
    title: 'Back on the Road – James',
    text: 'After a crash left James unable to work, our car accident team pursued compensation for his injuries, vehicle damage, and ongoing care so he could focus on recovery.',
    imageSrc:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop',
    imageAlt: 'James, client story',
    variant: 'standard',
  },
  {
    id: 'mike-lynette',
    title: 'Fighting for What They Deserve – Mike & Lynette',
    text: 'Severe damage from Hurricane Irma made their house unlivable. Morgan & Morgan helped them navigate a complex insurance dispute and fight for the coverage their family needed to rebuild.',
    imageSrc:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop',
    imageAlt: 'Mike and Lynette, client story',
    variant: 'large',
  },
  {
    id: 'sandra',
    title: 'A Workplace Injury, Handled with Care – Sandra',
    text: 'When Sandra was hurt on the job, she faced mounting medical bills and uncertainty about her benefits. Our team guided her through the claims process and advocated for the support she deserved.',
    imageSrc:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&fit=crop',
    imageAlt: 'Sandra, client story',
    variant: 'standard',
  },
  {
    id: 'david',
    title: 'Standing Up After a Slip and Fall – David',
    text: 'David injured his back after falling on an unmarked hazard at a retail store. We investigated the scene, documented negligence, and pursued fair compensation for his pain and rehabilitation.',
    imageSrc:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&fit=crop',
    imageAlt: 'David, client story',
    variant: 'standard',
  },
]

export const TESTIMONIALS_RESOURCES = {
  eyebrow: 'Resources & Insights',
  title: 'Let us help you get started',
  lead:
    'Discover the resources you need to succeed with Morgan & Morgan by browsing our resource center, educational videos, digital formats, and customer stories.',
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
  { label: 'Results', href: '/our-results' },
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
