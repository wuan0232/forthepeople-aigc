<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Personal Injury"
      title="Personal Injury Lawyers"
      lead="When negligence causes serious harm, our personal injury attorneys fight for the full compensation you need to move forward."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Personal Injury Attorneys"
      intro="Our dedicated personal injury attorneys manage every aspect of your case, allowing you to concentrate on healing. From consultation to resolution, we strive to secure the compensation you deserve."
      :lawyers="lawyers"
      aria-label="Personal injury attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="pi-diff-heading"
      title="Morgan & Morgan's Personal Injury Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Personal Injury"
      aria-label="Personal injury verdicts and settlements"
    />

    <PracticeAreaBigWins cta-href="#contact" more-href="#results" />

    <PracticeAreaWaysPi :cards="waysPiCards" :case-types="caseTypes" />

    <PracticeAreaClaimCopy
      heading-id="pi-claim-heading"
      title="How do I know if I have a personal injury claim?"
      :paragraphs="claimParagraphs"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Personal injury cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaTimeline
      heading-id="pi-steps-heading"
      title="8 Steps to Take After a Personal Injury Incident"
      description="From documenting your injury to safeguarding your legal rights, these steps can help strengthen your personal injury claim."
      :steps="afterSteps"
      link-label="See all 8 steps"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Personal Injury" />

    <PracticeAreaInjuryTypes heading-id="pi-injuries-heading" title="Common Injuries" :items="commonInjuries" />

    <PracticeAreaLearnMore
      title="Learn More"
      intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Personal injury frequently asked questions"
      :reviewed-by="{ name: 'Grant R. Cook', date: 'February 24, 2025' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type {
  CaseResult,
  ClientTestimonial,
  FaqItem,
  LearnLink,
  PartnerSlide,
  StatItem,
  TextBlock,
  TimelineStep,
} from '~/types/practice-area'
import type { WaysPiCard } from '~/types/practice-area'

useHead({
  title: 'Personal Injury Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our personal injury attorneys, explore case results, and learn your legal options after an accident. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Ultima Morgan', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Christopher J. Hinckley', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Tatevik "Vicki" Gasparyan', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop' },
  { name: 'Michael J. Smith', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
  { name: 'Michael David Marrese', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$35,000,000', location: '2024', type: 'Personal Injury' },
  { amount: '$20,040,000', location: '2022', type: 'Personal Injury' },
  { amount: '$11,000,000', location: 'Phoenix, AZ • 2024', type: 'Personal Injury' },
  { amount: '$8,500,000', location: 'Tampa, FL • 2023', type: 'Personal Injury' },
  { amount: '$6,200,000', location: 'Orlando, FL • 2021', type: 'Personal Injury' },
  { amount: '$4,750,000', location: 'Jacksonville, FL • 2025', type: 'Personal Injury' },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: "When you've suffered serious injuries, insurers often rush in with quick, low offers. We dig into the full story, build strong claims, and push for the compensation you truly deserve.",
  },
  {
    title: 'Covering All Types of Personal Injury Cases',
    text: 'From car accidents and slip-and-falls to catastrophic injuries and wrongful death, we represent victims who have suffered physical, financial, and emotional harm.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With over 35 years of experience and more than $30 billion recovered for clients, we bring the trial-ready team and resources that make a difference.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You pay nothing unless we win. Free case evaluations, contingency-based fees, and full support mean you can focus on recovery while we fight your case.',
  },
]

const waysPiCards: WaysPiCard[] = [
  {
    title: 'Injured in a car accident?',
    text: "We've helped thousands recover medical bills, lost wages, and more after crashes caused by negligence.",
    linkHref: '/practice-areas/car-accident',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32h32M12 28l-4-8h8l2 8M28 28l2-8h8l-4 8"/><circle cx="16" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Hurt in a slip and fall?',
    text: 'From wet floors to unsafe conditions, we fight to hold property owners accountable for your injuries.',
    linkHref: '/practice-areas/slip-and-fall',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="10" r="4"/><path d="M24 14v8l-6 18M24 22l6 18M18 26h12"/></svg>`,
  },
  {
    title: 'Injured on the job?',
    text: 'We guide workers through the claims process to secure the benefits they deserve for workplace injuries.',
    linkHref: '#practice',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="14" width="28" height="22" rx="2"/><path d="M16 22h16M16 28h10"/></svg>`,
  },
]

const caseTypes = [
  'Social Security',
  'Nursing Home Abuse',
  'Dangerous Drugs',
  'Labor & Employment',
  'Defective Products',
  'Truck Accidents',
  'Medical Malpractice',
  'Class Actions',
]

const claimParagraphs = [
  'You may have a personal injury claim if someone else\'s negligence caused you to be injured and suffer financial or personal losses. Personal injuries can occur in many situations, including car accidents, slip and falls, workplace accidents, or other incidents where someone failed to act with reasonable care.',
  'In most cases, a claim requires three key elements: someone else was at fault, you suffered damages, and there is evidence to support what happened. Damages may include medical bills, lost wages, pain and suffering, or other accident-related expenses. Evidence may include medical records, photos, incident reports, or witness statements.',
  'If these factors are present, you may be able to recover compensation for your losses. Because there are deadlines for filing a claim, it is important to act quickly. Contact a personal injury lawyer at Morgan & Morgan for a free case evaluation to learn about your legal options.',
]

const lawsuitReqs = ['Injury or damages', 'Duty of care', 'Breach of duty']

const afterSteps: TimelineStep[] = [
  {
    title: 'Seek Medical Attention',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4v24M8 12h16"/><circle cx="16" cy="22" r="6"/></svg>`,
  },
  {
    title: 'Report the Accident',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 26V8l10-4 10 4v18"/><circle cx="16" cy="12" r="3"/></svg>`,
  },
  {
    title: 'Document the Scene',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="8" width="22" height="18" rx="2"/><path d="M10 14l4 4 8-8"/></svg>`,
  },
  {
    title: 'Collect Witness Information',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="4"/><circle cx="22" cy="12" r="3"/><path d="M6 26c0-4 3-7 6-7s6 3 6 7M16 26c0-3 2-5 6-5s6 2 6 5"/></svg>`,
  },
]

const stats: StatItem[] = [
  { k: '$30 BILLION', v: 'Recovered for clients nationwide' },
  { k: '700,000+', v: 'Clients and families served' },
  { k: '1,000+', v: 'Attorneys across the country' },
  { k: '1', v: 'Click may change your life' },
]

const partners: PartnerSlide[] = [
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "An injury can upend your life, but you don't have to face it alone. We fight for the injured to get the compensation they deserve to move forward.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'We built this firm for the people—not the powerful. If you have been hurt, we want to hear your story and help you understand your legal options at no upfront cost.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
  {
    name: 'Dan Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'When the insurance companies see our name, they know we mean business—and that our clients deserve full and fair compensation.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=85&fit=crop',
  },
]

const commonInjuries: TextBlock[] = [
  {
    title: 'Traumatic Brain Injuries (TBI)',
    text: 'Common in car, truck, and motorcycle accidents, TBIs can range from concussions to severe brain trauma, leading to cognitive impairments, memory loss, or permanent disabilities.',
  },
  {
    title: 'Spinal Cord Injuries',
    text: 'Frequently caused by vehicle collisions or falls, spinal injuries can result in partial or complete paralysis, drastically impacting mobility and quality of life.',
  },
  {
    title: 'Internal Injuries',
    text: 'Vehicle accidents and assaults can cause internal bleeding or organ damage, often requiring emergency medical intervention and ongoing care.',
  },
  {
    title: 'Broken Bones',
    text: 'Slip-and-fall accidents, workplace injuries, and car crashes often result in fractures, including broken arms, legs, ribs, or hips, requiring extensive recovery and rehabilitation.',
  },
  {
    title: 'Burns',
    text: 'Often linked to workplace accidents or defective products, burns can range from minor to severe, requiring long-term medical treatment and causing lasting physical and emotional scars.',
  },
  {
    title: 'Soft Tissue Injuries',
    text: 'These include sprains, strains, and whiplash, which are common in car accidents or slip-and-fall incidents and can lead to chronic pain or mobility issues if untreated.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Trulicity Lawsuits: What You Need to Know About Dulaglutide Injuries', href: '#blog' },
  { title: 'Food Poisoning and Liability at Holiday Events: Who\'s Responsible?', href: '#blog' },
  { title: 'Morgan & Morgan Gives Back to the Community This Thanksgiving', href: '#blog' },
  { title: 'Morgan & Morgan Investigates Fred Hutchinson Cancer Center Data Breach', href: '#blog' },
  { title: 'Darvon and Darvocet Recall', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'CA Supreme Court Rules Workers Must Be Paid Waiting at Security Checks', href: '#blog' },
  { title: "How Michigan's Dam Failures Impact Residents", href: '#blog' },
  { title: 'Can You Be Fired for Being Sick During COVID?', href: '#blog' },
  { title: 'Slip and Fall Accidents on Stairs', href: '#blog' },
  { title: 'Slip and Falls in Stores – Your Rights and Legal Options', href: '#blog' },
]

const clients: ClientTestimonial[] = [
  {
    name: 'Lashondra',
    quote:
      "When it came to negotiating, they didn't just settle for anything. They definitely went to the bat for me.",
    thumbBg: 'linear-gradient(135deg,#b8d4f0,#7eb3e8)',
    thumb: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&fit=crop',
  },
  {
    name: 'Ray',
    quote:
      'They answered every question and kept me updated. I felt like someone was actually fighting for me—not just checking boxes.',
    thumbBg: 'linear-gradient(135deg,#cfe8fc,#8ec5f2)',
    thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&fit=crop',
  },
  {
    name: 'Sean',
    quote:
      'After my accident I was overwhelmed with bills and calls. My attorney handled the insurance company so I could focus on getting better.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop',
  },
]

const faqAside = [
  'How do I know if I have a personal injury claim?',
  'What should I do immediately after being injured in an accident?',
  'What practice areas or types of cases does Morgan & Morgan handle?',
  'How much does it cost to hire a personal injury law firm like Morgan & Morgan? Can I get a free case evaluation?',
  'How much does it cost to hire a personal injury lawyer near me at Morgan & Morgan?',
  'Do I have to pay for a consultation or case review with a personal injury attorney?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a personal injury claim?',
    paragraphs: [
      'You may have a claim if another party\'s negligence caused your injury and you suffered damages such as medical bills, lost income, or pain and suffering.',
      'An attorney can review the facts and evidence to help determine your options.',
    ],
  },
  {
    q: 'What should I do immediately after being injured in an accident?',
    paragraphs: [
      'Seek medical care, report the incident, document the scene, and avoid giving recorded statements to insurers before speaking with a lawyer.',
    ],
  },
  {
    q: 'What practice areas or types of cases does Morgan & Morgan handle?',
    paragraphs: [
      'We handle car accidents, slip and falls, medical malpractice, truck accidents, workplace injuries, defective products, and many other injury-related matters nationwide.',
    ],
  },
  {
    q: 'How much does it cost to hire a personal injury law firm like Morgan & Morgan? Can I get a free case evaluation?',
    paragraphs: ['The Fee Is Free®—you pay nothing unless we win. We offer free, no-obligation case evaluations.'],
  },
  {
    q: 'How much does it cost to hire a personal injury lawyer near me at Morgan & Morgan?',
    paragraphs: [
      'There are no upfront attorney fees. Our contingency fee means we only get paid if we recover compensation for you.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation or case review with a personal injury attorney?',
    paragraphs: ['No. Consultations and case reviews with Morgan & Morgan are free.'],
  },
  {
    q: 'How long after an injury can I file my claim?',
    paragraphs: [
      'Deadlines vary by state and case type. Acting quickly helps preserve evidence and protect your right to file.',
    ],
  },
  {
    q: 'What sort of compensation can I recover from a personal injury case?',
    paragraphs: [
      'Depending on your case, you may recover medical expenses, lost wages, pain and suffering, and other accident-related losses.',
    ],
  },
  {
    q: 'What happens after I submit my personal injury claim?',
    paragraphs: [
      'Our team investigates, gathers evidence, communicates with insurers, and advises you on settlement offers or litigation steps.',
    ],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and experts who support your claim from intake through resolution.',
    ],
  },
  {
    q: 'When do I meet with my lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member typically reaches out within one business day to discuss your situation.',
    ],
  },
  {
    q: 'Do you have attorneys who speak multiple languages?',
    paragraphs: [
      'Yes. With offices nationwide, we strive to connect clients with team members who can communicate in their preferred language when possible.',
    ],
  },
  {
    q: 'How long does a personal injury lawsuit take to resolve?',
    paragraphs: [
      'Some cases settle in months; others take longer when liability or damages are disputed or litigation is required.',
    ],
  },
  {
    q: 'Will my personal injury case go to trial, or can I get a settlement out of court?',
    paragraphs: [
      'Many cases settle without trial, but we prepare every case as if it will go to court so you are positioned for the best outcome.',
    ],
  },
  {
    q: 'How often will I receive updates about my case?',
    paragraphs: [
      'We aim to keep clients informed at key milestones. Your attorney can explain how updates will be shared for your specific case.',
    ],
  },
]
</script>
