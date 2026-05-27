import type {
  BlogCaseCard,
  BlogCategoryArchiveMeta,
  BlogCategoryCard,
  BlogIllustrationCard,
  BlogListItem,
  BlogPost,
} from '~/types/blog'

export const BLOG_SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/forthepeople',
    icon: 'facebook',
  },
  {
    label: 'X',
    href: 'https://x.com/forthepeople',
    icon: 'x',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/morgan-&-morgan-llc',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:info@forthepeople.com',
    icon: 'email',
  },
] as const

export const blogFeaturedPosts: BlogPost[] = [
  {
    slug: 'morgan-origin-story',
    title: 'Why We Fight: The Morgan & Morgan Origin Story',
    href: '/blog/posts',
    readMinutes: 5,
    tag: 'In The Community',
    imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=85&fit=crop',
    imageAlt: 'Morgan & Morgan origin story video',
    featured: true,
  },
  {
    slug: 'summer-event-safety',
    title:
      'Summer Event Safety: What You Need to Know Before Your Next Concert, Festival, or Game',
    href: '/blog/posts',
    readMinutes: 5,
    tag: 'Premises Liability',
    imageSrc: 'https://images.unsplash.com/photo-1459749411177-04bfcd4e879a?w=800&q=85&fit=crop',
    imageAlt: 'Concert crowd',
  },
  {
    slug: 'ultra-processed-foods-lawsuit',
    title:
      'Morgan & Morgan Files Lawsuit over Allegedly Harmful, Addictive Ultra-Processed Foods',
    href: '/blog/posts',
    readMinutes: 5,
    tag: 'In The Media',
    imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&fit=crop',
    imageAlt: 'Health monitoring',
  },
]

export const blogFilingCards: BlogIllustrationCard[] = [
  {
    title: 'The Personal Injury Case Process',
    text: "Injured and not sure what to do next? Start here. We'll guide you through what you need to know.",
    href: '/about/the-case-process',
    imageSrc: '/images/blog/filing-case-process.webp',
    imageAlt: 'The Personal Injury Case Process',
  },
  {
    title: "Working Out Workers' Compensation",
    text: "Injured at work? We'll guide you through what you need to know.",
    href: '#',
    accent: true,
    imageSrc: '/images/blog/filing-workers-comp.webp',
    imageAlt: "Working Out Workers' Compensation",
  },
  {
    title: 'Guide to Social Security Disability',
    text: 'Filing for Social Security benefits? Find out what you need to know here.',
    href: '#',
    imageSrc: '/images/blog/filing-ssdi.webp',
    imageAlt: 'Guide to Social Security Disability',
  },
]

export const blogLatestCases: BlogCaseCard[] = [
  {
    title: 'Depo-Provera',
    text: 'Popular birth control may lead to brain tumors',
    href: '/practice-areas/dangerous-drugs/depo-provera',
  },
  {
    title: 'Ultra-Processed Foods',
    text: 'Food giants sued for marketing addictive foods',
    href: '/blog/posts',
  },
  {
    title: 'Weight Loss Drugs',
    text: 'Mainstream media meds may have dangerous side effects',
    href: '/practice-areas/dangerous-drugs/weight-loss-drug',
  },
]

export const blogAfterAccidentPosts: BlogPost[] = [
  {
    slug: 'car-accident-help',
    title: 'What to Do After a Car Accident: How a Lawyer Can Help',
    href: '/practice-areas/car-accident',
    readMinutes: 4,
    tag: 'In The Media',
    imageSrc: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=85&fit=crop',
  },
  {
    slug: 'slip-and-fall',
    title: 'I Had a Slip and Fall Accident — Now What?',
    href: '/practice-areas/slip-and-fall',
    readMinutes: 4,
    tag: 'Premises Liability',
    imageSrc: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=85&fit=crop',
    titleUnderline: true,
  },
  {
    slug: 'ssdi-guide',
    title: 'Social Security Disability Benefits: A Complete Guide',
    href: '#',
    readMinutes: 5,
    tag: 'In The Community',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85&fit=crop',
  },
  {
    slug: 'workers-comp-myths',
    title: "Debunking Workers' Compensation Myths",
    href: '#',
    readMinutes: 3,
    tag: 'In The Community',
    imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f6e?w=600&q=85&fit=crop',
    thumbMuted: true,
  },
]

export const blogBeingPrepared: BlogListItem[] = [
  {
    title: "Scrolling Smart: Morgan & Morgan's Guide to Social Media Safety",
    href: '/blog/posts',
  },
  {
    title: 'Protecting Yourself from Tax Refund Scams',
    href: '/blog/posts',
  },
  {
    title:
      'Summer Event Safety: What You Need to Know Before Your Next Concert, Festival, or Game',
    href: '/blog/posts',
  },
]

export const blogNewsroomPosts: BlogPost[] = [
  {
    slug: 'miami-boat-explosion',
    title: 'Morgan & Morgan investigating Miami boat explosion',
    href: '/blog/posts',
    readMinutes: 4,
    tag: 'In The Media',
  },
  {
    slug: 'fsu-fire',
    title: 'Joint lawsuit filed over deadly fire at FSU off-campus housing',
    href: '/blog/posts',
    readMinutes: 3,
    tag: 'In The Media',
  },
  {
    slug: 'political-party-contest',
    title: 'John Morgan officially launches $100,000 contest to name new political party',
    href: '/blog/posts',
    readMinutes: 3,
    tag: 'In The Media',
  },
  {
    slug: 'barnes-noble-stabbing',
    title: 'Lawsuit filed in Fatal Palm Beach Gardens Barnes & Noble stabbing',
    href: '/blog/posts',
    readMinutes: 5,
    tag: 'In The Media',
  },
]

export const blogLatestListPosts: BlogPost[] = [
  {
    slug: 'youtube-super-thanks',
    title:
      'Did You Buy or Receive YouTube “Super Thanks”? You May Be Surprised by How Much YouTube Kept, and You May Have Legal Options',
    href: '#',
    readMinutes: 4,
    tag: 'Social Media Harm',
    imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e039e986?w=160&q=85&fit=crop',
    imageAlt: 'YouTube Super Thanks',
  },
  {
    slug: 'cruise-injury',
    title: 'What to Do if You Get Injured While on a Cruise',
    href: '#',
    readMinutes: 4,
    tag: 'Maritime & Admiralty',
    imageSrc: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=160&q=85&fit=crop',
    imageAlt: 'Cruise ship deck',
  },
  {
    slug: 'recalls-may-22',
    title: 'The Week in Recalls: Week of May 22nd, 2026',
    href: '#',
    readMinutes: 3,
    tag: 'Product Recalls',
    imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=160&q=85&fit=crop',
  },
  {
    slug: 'miami-boat-explosion',
    title: 'Morgan & Morgan investigating Miami boat explosion',
    href: '#',
    readMinutes: 4,
    tag: 'In The Media',
    thumbNews: true,
  },
  {
    slug: 'fsu-fire',
    title: 'Joint lawsuit filed over deadly fire at FSU off-campus housing',
    href: '#',
    readMinutes: 3,
    tag: 'In The Media',
    thumbNews: true,
  },
  {
    slug: 'political-party-contest',
    title: 'John Morgan officially launches $100,000 contest to name new political party',
    href: '#',
    readMinutes: 3,
    tag: 'In The Media',
    thumbNews: true,
  },
]

export const BLOG_ACCIDENTS_INCIDENTS_PATH = '/blog/accidents-and-incidents'

export const blogAccidentsIncidentsCategory: BlogCategoryArchiveMeta = {
  slug: 'accidents-and-incidents',
  title: 'Accidents & Incidents',
  path: BLOG_ACCIDENTS_INCIDENTS_PATH,
  postsPerPage: 9,
  totalPages: 4,
}

const accidentsArchiveTitles: string[] = [
  'Accidents Involving Special Vehicles: Legal Rights, Risks, and Remedies',
  'Helicopter Crashes: Causes, Survival Tips, and Legal Rights',
  'Gym Injury Lawsuits: We Can Do the Heavy Lifting',
  'Electric Scooter Accident Lawyers',
  'How Much Will I Receive in My Auto Airbags Settlement?',
  'How to Claim Compensation After a Cargo Truck Accident',
  'How Can I Find a Good Personal Injury Lawyer?',
  'Injured at an Amusement Park? Our lawyers are here to help.',
  'Sanitation Truck Accident Lawyers: What to Do if You Get Injured',
  'Bicycle Accidents: How a Lawyer Can Help You Seek Justice and Compensation',
  'Forklift Accidents: The Most Common Causes and Risks',
  'Road Hazard Accidents and Your Legal Options',
  'Drunk Driving Accidents: What Victims Need to Know',
  'Single Vehicle Accidents: When You Still Have a Claim',
  'School Accidents Are More Common Than You Think—Know Your Rights',
  'Slip and Fall Accidents on Stairs: Liability Basics',
  'Accidents Caused by Poor Lighting – Who Is Liable and How to Get Justice',
  'Madison Square Garden Accidents: Venue Liability Explained',
  'Multi-Vehicle Accidents: Determining Fault and Damages',
  'Hit-and-Run Accidents: Steps to Protect Your Rights',
  'T-bone Accidents: Common Injuries and Compensation',
  'Boating Accidents – Understanding Your Rights',
  'Jet Ski Accidents: What to Do After You Are Hurt',
  'Motor Vehicle Accidents and Spinal Cord Injury Claims',
  'Sports and Recreation Accidents: When Negligence Applies',
  'Workplace and Industrial Accidents: Workers Comp vs. Third-Party Claims',
  'Car Accidents: Documenting Evidence for Your Case',
  'Workplace Accidents: Filing Beyond Workers Compensation',
  'Slip and Fall Accidents: Proving Property Owner Negligence',
  'Plane and Aviation Crash Accidents: Legal Options for Victims',
  'Common Causes of Aviation Accidents Explained',
  'Millions Are Injured in Car Accidents Every Year',
  'Operator Negligence Causes Most Boating Accidents',
  'Coast Guard Boat Accidents: Government Liability Issues',
  'Fireboat Accidents and Maritime Injury Claims',
  'Sailboat Accidents: Recreational Boating Injury Law',
]

const accidentsArchiveSummaries: (string | undefined)[] = [
  'Learn how crashes involving e-bikes, scooters, and other special vehicles can lead to complex liability questions—and what to document after an incident.',
  `Consider this: you've had low back pain for three years. You've tried physical therapy twice, anti-inflammatories, a new mattress. Your primary care doctor ordered an MRI, which showed "degenerative disc disease and facet arthritis at L4-L5" — findings so common in adults over 50 that they're nearly universal — and you were told this is normal aging. But buried halfway through the radiologist's report, a half-sentence mentioned "mild anterolisthesis of L4 on L5." Nobody explained what it meant.`,
  'Gym memberships come with risks. When equipment fails or staff fail to supervise, injured members may have claims beyond a standard waiver.',
  'Rental scooters are convenient until someone gets hurt. We explain insurer disputes, city rules, and when to call a lawyer.',
  'Defective airbags can cause injuries beyond the crash itself. Settlement values depend on medical proof and recall status.',
  undefined,
  'Choosing counsel after a truck crash means looking past ads—here is what actually matters for your case.',
  'Theme parks owe guests a duty of care. Serious injuries on rides or in queues can support negligence claims.',
  'Municipal and private haulers operate heavy vehicles in tight neighborhoods. Victims should know reporting deadlines.',
  'Cyclists face bias from insurers. Documenting the scene and injuries early strengthens your claim.',
  undefined,
  'Potholes, debris, and poor signage cause thousands of crashes. Government immunity rules vary by state.',
  'Impaired drivers remain a leading cause of fatalities. Civil claims may run parallel to criminal cases.',
  'Even solo crashes sometimes involve defective parts, bad repairs, or unsafe road design.',
  'Schools must supervise students reasonably. Sports and playground injuries are more common than many parents assume.',
  undefined,
  'Stairwell lighting, handrails, and maintenance logs often decide slip-and-fall outcomes.',
  'Property owners must illuminate walkways. Dark parking lots and lots are frequent accident sites.',
  'Large venues host crowds but must still control known hazards and security risks.',
  'Multi-car pileups require reconstruction experts to sort fault among several drivers.',
  'Unidentified hit-and-run drivers do not end your options—uninsured motorist coverage may apply.',
  'Side-impact collisions often cause rib, hip, and head injuries even at moderate speeds.',
  'Open water, weather, and operator training all factor into boating injury claims.',
  undefined,
  'Jet ski rentals involve high speeds and minimal protection for riders and passengers.',
  'Spinal injuries from crashes can require lifetime care—future medical costs belong in any demand.',
  'Organized sports injuries may implicate leagues, coaches, facilities, or equipment makers.',
  'Third-party claims sometimes exist even when workers compensation covers medical bills.',
  'Photos, witness info, and police reports collected at the scene protect your claim later.',
  undefined,
  'Employers and contractors may share blame when safety rules are ignored on site.',
  'Wet floors, uneven tiles, and missing mats are classic premises hazards in retail and offices.',
  'Aviation disasters involve federal investigators—plaintiffs still need their own legal team.',
  'Pilot error, maintenance lapses, and manufacturer defects each point to different defendants.',
  'Rear-end collisions are common but rarely "simple" when injuries are serious or long-lasting.',
  'Alcohol, fatigue, and weather are recurring factors in preventable boating deaths.',
  undefined,
  undefined,
  undefined,
]

const accidentsArchiveDates = [
  '2026-05-21',
  '2026-05-20',
  '2026-05-19',
  '2026-05-18',
  '2026-05-17',
  '2026-05-16',
  '2026-05-15',
  '2026-05-14',
  '2026-05-13',
] as const

function slugifyTitle(title: string, index: number) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
  return `${base}-${index}`
}

function formatArchiveDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`)
  return date
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase()
}

export const blogAccidentsIncidentsArchive: BlogCategoryCard[] = accidentsArchiveTitles.map(
  (title, index) => {
    const publishedIso =
      accidentsArchiveDates[index % accidentsArchiveDates.length] ?? '2026-05-21'
    return {
      slug: slugifyTitle(title, index),
      title,
      href: '#',
      publishedAt: formatArchiveDate(publishedIso),
      publishedIso,
      categoryLabel: 'Accidents & Incidents',
      summary: accidentsArchiveSummaries[index],
    }
  },
)

export const blogPostFilters = [
  { label: 'Accidents & Incidents', href: BLOG_ACCIDENTS_INCIDENTS_PATH },
  { label: 'Newsroom', href: '#blog-latest-posts' },
  { label: 'The Case Process', href: '/about/the-case-process' },
] as const
