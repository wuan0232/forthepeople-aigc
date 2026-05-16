<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Slip and Fall"
      title="Slip and Fall Lawyers"
      lead="When unsafe property conditions cause serious injuries, our attorneys can help you pursue the compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Slip and Fall Lawyers"
      intro="When property owners neglect safety, injuries happen. That's where we step in. Our slip and fall attorneys have the experience and reputation to fight for the compensation you deserve."
      :lawyers="lawyers"
      ariaLabel="Slip and fall attorneys"
    />

    <PracticeAreaDifference
      heading-id="slip-diff-heading"
      title="Morgan & Morgan's Slip and Fall Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaCardGrid
      heading-id="places-heading"
      title="Common Places for Slip and Fall"
      :items="commonPlaces"
      :initial-visible="6"
      expandable
    />

    <PracticeAreaClaimCopy
      heading-id="comp-heading"
      title="What compensation can I recover for my slip and fall injuries?"
      :paragraphs="claimParagraphs"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit
      title="Slip and fall lawsuits need three things."
      :requirements="lawsuitReqs"
      link-label="Learn more"
    />

    <PracticeAreaTimeline
      title="8 Things to Do After a Slip & Fall"
      description="From staying safe after your fall to securing the compensation you deserve, find out what to do after a slip and fall accident."
      :steps="afterSteps"
      graphic-src="/after-incident-four-steps-timeline.svg"
      link-label="See all 8 steps"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Slip and Fall" />

    <PracticeAreaInjuryTypes
      heading-id="slip-injury-heading"
      title="Slip & Fall Injury Types"
      :items="injuryTypes"
    />

    <PracticeAreaLearnMore
      title="Injured?"
      intro-html="Not sure what to do next?<br />We'll guide you through everything you need to know."
      intro-tight
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Slip and fall frequently asked questions"
      :reviewed-by="{ name: 'Ashley Brooke Winstead', date: 'February 20, 2025' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type { ClientTestimonial, FaqItem, IconCard, LearnLink, PartnerSlide, StatItem, TextBlock, TimelineStep } from '~/types/practice-area'

useHead({
  title: 'Slip and Fall Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our slip and fall attorneys, learn common premises hazards, and explore your legal options. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'John Morgan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Matt Morgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Tatevik "Vicki" Gasparyan', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Michael Bird', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Sarah Mitchell', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop' },
]

const commonPlaces: IconCard[] = [
  {
    title: 'Supermarkets',
    text: 'When supermarket hazards like spills lead to serious injuries, our slip and fall lawyers stand by you to pursue the compensation you deserve.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h24l-2 18H10L8 12z"/><path d="M12 12V8h16v4"/></svg>`,
  },
  {
    title: 'Malls and Retail Stores',
    text: 'Unsafe conditions in retail stores can cause painful falls. Our attorneys fight to hold these establishments accountable for putting customers at risk.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="10" width="28" height="22" rx="2"/><path d="M10 18h20"/></svg>`,
  },
  {
    title: 'Hotels and Resorts',
    text: 'From unmarked hazards to slippery pool areas, our team fights for those hurt in hotels and resorts due to negligence.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32h24M10 32V16l10-6 10 6v16"/><path d="M14 22h12"/></svg>`,
  },
  {
    title: 'Sidewalks',
    text: 'Poorly maintained sidewalks are a common cause of slip and fall injuries. Our attorneys are ready to help you seek compensation for your fall.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="11" r="4"/><path d="M12 32c0-6 4-10 8-10s8 4 8 10"/></svg>`,
  },
  {
    title: 'Parking Lots',
    text: 'When cracks, ice, or neglect lead to dangerous slip and falls, our lawyers take on the property owners to pursue justice for you.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="14" width="28" height="16" rx="2"/><path d="M10 22h20"/><circle cx="13" cy="30" r="2"/><circle cx="27" cy="30" r="2"/></svg>`,
  },
  {
    title: 'Residential Spaces',
    text: 'In shared residential spaces, we fight for victims of negligent property owners who fail to maintain safe conditions.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32V18l12-8 12 8v14"/><path d="M16 32V22h8v10"/></svg>`,
  },
  {
    title: 'Office Buildings',
    text: 'If unsafe conditions in an office building lead to a slip and fall injury, our attorneys are here to support your case and seek compensation.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="8" width="20" height="24" rx="2"/><path d="M15 14h3M22 14h3M15 20h3M22 20h3M15 26h3M22 26h3"/></svg>`,
  },
  {
    title: 'Restaurants',
    text: 'Hazards like spills and greasy floors can make restaurants risky. Our slip and fall lawyers fight to hold establishments responsible for injuries.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8v24M10 8v8a4 4 0 0 0 8 0V8M26 8v24M22 8h8"/></svg>`,
  },
  {
    title: 'Public Transportation',
    text: 'When platforms or stations lack proper safety measures, our attorneys are here to pursue justice for your slip and fall injury.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="8" width="22" height="20" rx="3"/><path d="M13 16h14M14 32l3-4M26 32l-3-4"/><circle cx="15" cy="23" r="2"/><circle cx="25" cy="23" r="2"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Our attorneys build strong cases with maintenance records, witness testimony, and safety experts. We know how to prove liability—and fight insurers who try to minimize payouts.',
  },
  {
    title: 'Covering All Types of Slip & Fall Cases',
    text: 'From grocery store spills to icy sidewalks and broken steps, we handle all types of slip and fall claims. When property owners fail to keep spaces safe, we hold them accountable.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: "With 35+ years of experience and $30 billion recovered for 500,000+ clients, we prepare every case as if it's headed to trial. Insurers know we don't back down.",
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'Your case is backed by a full legal team of attorneys, investigators, and staff. Reviews are free, and The Fee Is Free®—you pay nothing unless we win.',
  },
]

const claimParagraphs = [
  'Property owners and businesses have a duty to keep their premises reasonably safe. When they fail to fix hazards—like wet floors, broken steps, poor lighting, or cluttered walkways—and you are injured as a result, you may have a premises liability claim.',
  'Compensation can depend on the severity of your injuries, your medical bills, lost wages, pain and suffering, and the strength of the evidence showing the owner knew or should have known about the dangerous condition.',
  'Photos, incident reports, witness statements, and medical records can all help support your case. Because legal deadlines apply, it is important to act quickly. Morgan & Morgan offers a free case evaluation so you can understand your options.',
]

const afterSteps: TimelineStep[] = [
  {
    title: 'Seek Medical Attention',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4v24M8 12h16"/><circle cx="16" cy="22" r="6"/></svg>`,
  },
  {
    title: 'Report the Accident',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 26V8l10-4 10 4v18"/><circle cx="16" cy="12" r="3"/><path d="M12 20h8"/></svg>`,
  },
  {
    title: 'Document the Scene',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="8" width="22" height="18" rx="2"/><path d="M10 14l4 4 8-8"/></svg>`,
  },
  {
    title: "Don't Admit Fault",
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 10h16M8 16h12M8 22h16"/><path d="M22 8l4 4-4 4" stroke-linecap="round"/></svg>`,
  },
]

const lawsuitReqs = ['Injury or damages', 'Negligence by the property owner', 'Enough insurance coverage']

const stats: StatItem[] = [
  { k: '$25 MILLION', v: 'Largest slip and fall verdict' },
  { k: '500,000+', v: 'Clients helped with slip and fall cases' },
  { k: '1,000+', v: 'Attorneys across the country' },
  { k: '1', v: 'Click may change your life' },
]

const partners: PartnerSlide[] = [
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "You have the right to feel safe where you live, work, and shop. If a property owner's negligence led to your injury, we'll fight to hold them accountable.",
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

const injuryTypes: TextBlock[] = [
  {
    title: 'Fractures',
    text: 'Broken bones are a frequent outcome of slip and fall accidents, particularly in the wrists, arms, and hips as people try to brace their fall. These injuries can require extensive recovery time and even surgery.',
  },
  {
    title: 'Spinal Cord Injuries',
    text: 'Falls can result in serious damage to the spinal cord, causing anything from back pain to paralysis, depending on the severity. These injuries often require significant medical intervention and long-term care.',
  },
  {
    title: 'Hip Fractures',
    text: 'Particularly common in older adults, hip fractures often require surgery and extensive rehabilitation. A slip and fall can leave victims immobile and facing long recovery periods.',
  },
  {
    title: 'Head Injuries',
    text: 'Slip and fall accidents can lead to concussions, traumatic brain injuries (TBIs), and other head trauma. These can have long-lasting effects, including cognitive impairment and memory issues.',
  },
  {
    title: 'Soft Tissue Injuries',
    text: 'These include sprains, strains, and tears to muscles, ligaments, or tendons. While less visible, they can cause long-lasting pain and limit mobility, sometimes requiring physical therapy.',
  },
  {
    title: 'Shoulder Injuries',
    text: 'Falling on an outstretched arm can result in shoulder dislocations or rotator cuff tears. These injuries are painful and can significantly limit daily activities, often requiring surgery to repair.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'How to Deal With a Fire Injury', href: '#blog' },
  { title: 'School Accidents Are More Common Than You Think—Know Your Rights', href: '#blog' },
  { title: 'Carousel Injury', href: '#blog' },
  { title: 'Accidents Caused by Poor Lighting – Who Is Liable and How to Get Justice', href: '#blog' },
  { title: 'Slip and Fall Accidents for Uber Eats Drivers: What You Need to Know', href: '#blog' },
  { title: 'Winter Weather and Sidewalk Liability: What Property Owners Owe Visitors', href: '#blog' },
  { title: 'Documenting a Slip and Fall: Photos and Reports That Strengthen Your Case', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'Slip and Fall at an Airbnb: Liability and Lawsuits', href: '#blog' },
  { title: 'Madison Square Garden Accidents', href: '#blog' },
  { title: 'Savor the Flavor, Skip the Fall: Safe Winery Visits', href: '#blog' },
  { title: 'Should I Go to the Doctor After Falling Down Stairs?', href: '#blog' },
  { title: 'The Dangers of Rest Stops: Protecting Yourself on the Road', href: '#blog' },
  { title: 'Premises Liability Deadlines: Why Timing Matters', href: '#blog' },
  { title: 'What to Ask a Lawyer After a Fall in a Store or Restaurant', href: '#blog' },
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
  'How do I know if I have a slip and fall claim?',
  'What should I do immediately after a slip and fall accident?',
  'How long after a slip and fall accident can I file a premises liability claim?',
  'How long does it take to resolve a slip and fall claim?',
  'Why should I hire an injury lawyer at Morgan & Morgan for my slip and fall case over other law firms?',
  'How much does it cost to hire a slip and fall lawyer at Morgan & Morgan?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a slip and fall claim?',
    paragraphs: [
      'You may have a claim if a property owner or occupier failed to keep the premises reasonably safe, that failure caused a dangerous condition, and you were injured as a result.',
      'Examples include wet floors without warnings, broken stairs, poor lighting, or icy walkways that were not addressed in a reasonable time. An attorney can review photos, incident reports, maintenance records, and witness accounts to evaluate your situation.',
    ],
  },
  {
    q: 'What should I do immediately after a slip and fall?',
    paragraphs: [
      'Seek medical attention if you are hurt, and report the incident to the property manager or owner so there is a record of what happened.',
      'If you can do so safely, take photos or video of the hazard, your injuries, and the surrounding area, and collect contact information from witnesses.',
      'Avoid making detailed statements about fault to insurers before you understand your rights. A lawyer can help you communicate clearly while protecting your claim.',
    ],
  },
  {
    q: 'How long do I have to file a slip and fall lawsuit?',
    paragraphs: [
      'Deadlines—statutes of limitations—depend on your state and the type of defendant (for example, a private business versus a government entity may involve different notice rules).',
      'Evidence like surveillance footage and maintenance logs can disappear quickly, so it is important to act promptly. An attorney can identify the correct timeline for your case.',
    ],
  },
  {
    q: 'Who can be held liable in a slip and fall case?',
    paragraphs: [
      'Depending on the facts, potentially liable parties may include property owners, commercial tenants, management companies, maintenance contractors, or municipalities responsible for sidewalks or public areas.',
      'Liability often turns on whether the party knew or should have known about the hazard and failed to fix it or warn visitors. Your lawyer can investigate contracts, leases, and prior complaints to build a clear picture.',
    ],
  },
  {
    q: 'How much does it cost to hire Morgan & Morgan for a slip and fall?',
    paragraphs: [
      'The Fee Is Free® means you pay nothing upfront and owe no attorney fees unless we win your case.',
      'During a free case evaluation, we can explain how our fee structure applies to your specific situation.',
    ],
  },
  {
    q: 'What compensation can I recover after a slip and fall?',
    paragraphs: [
      'Depending on your injuries and state law, you may pursue compensation for medical bills, future treatment, lost wages, reduced earning capacity, pain and suffering, and other related losses.',
      'An attorney can help document your damages and identify all available sources of recovery, including applicable insurance coverage.',
    ],
  },
  {
    q: 'Do I need a lawyer if the property owner says the fall was my fault?',
    paragraphs: [
      'Fault is not always one-sided. Many states apply comparative fault rules, meaning you may still recover compensation even if you were partially responsible—depending on the law and the facts.',
      'Insurers and property owners often dispute liability early. A lawyer can push back with evidence and help you avoid accepting a low settlement that does not reflect the full impact of your injuries.',
    ],
  },
  {
    q: 'How long does it take to resolve a slip and fall case?',
    paragraphs: [
      'Some claims settle in months when liability and damages are clear; others take longer if the hazard, notice, or extent of injuries is disputed.',
      'Your attorney should keep you updated at each stage and help you weigh settlement offers against the risks and timeline of litigation.',
    ],
  },
]
</script>
