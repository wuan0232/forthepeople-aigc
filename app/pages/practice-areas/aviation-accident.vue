<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Aviation Accident"
      title="Aviation Accident Lawyers"
      lead="When negligence causes an aircraft tragedy, our aviation accident attorneys fight for victims and families nationwide."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Aviation Accident Attorneys"
      intro="Our aviation attorneys thoroughly investigate every aircraft tragedy and fight for victims of commercial airline, private airplane, flight school crashes, and helicopter crashes, securing compensation for medical costs, lost wages, pain, suffering, and wrongful death claims, which, unfortunately, with aircraft crashes, are too often the result."
      :lawyers="lawyers"
      aria-label="Aviation accident attorneys"
      centered
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaWaysHelp :items="waysHelp" />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit
      title="Aviation crash cases need three things, including, but not limited to:"
      :requirements="lawsuitReqs"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="aviation-diff-heading"
      title="Morgan & Morgan's Aviation Accident Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Aviation Accident" />

    <PracticeAreaInjuryTypes
      heading-id="aviation-causes-heading"
      title="Common Causes of Aviation Accidents"
      :items="commonCauses"
    />

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
      region-label="Aviation accident frequently asked questions"
      :reviewed-by="{ name: 'Joe Harrison Wade, II', date: 'May 29, 2025' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type {
  ClientTestimonial,
  FaqItem,
  IconCard,
  LearnLink,
  PartnerSlide,
  StatItem,
  TextBlock,
} from '~/types/practice-area'

useHead({
  title: 'Aviation Accident Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our aviation accident attorneys, learn key takeaways after an aircraft crash, and explore your legal options. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Joe Harrison Wade, II', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Andrew Parker Felix', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
]

const takeaways: TextBlock[] = [
  {
    title: 'Aviation Liability Is Complex',
    text: 'Aviation accident claims may involve multiple responsible parties, including airlines, aircraft manufacturers, maintenance crews, and air traffic control.',
  },
  {
    title: 'Catastrophic Injuries Demand Expert Representation',
    text: 'Aviation injuries are often life-altering, and building a strong case requires experienced attorneys and thorough legal investigation.',
  },
  {
    title: 'Multiple Causes Must Be Investigated',
    text: 'Claims may arise from pilot error, aircraft maintenance failures, faulty equipment, or airline negligence, all requiring careful legal analysis.',
  },
  {
    title: 'Pursue Justice After an Aviation Accident',
    text: 'If you or a loved one was injured in an aviation accident, contact Morgan & Morgan to begin building your case.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Commercial Airplane Crash',
    text: 'We investigate airline crashes and aviation negligence to pursue justice for victims and families after serious injury or loss.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 28l18-14 18 14-6 4-12-8-12 8-6-4z"/><path d="M12 32h24"/></svg>`,
  },
  {
    title: 'Private Plane Crash',
    text: 'Private aircraft face less oversight, increasing crash risks. We hold negligent pilots and operators accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="12" r="5"/><path d="M12 38c0-8 5-14 12-14s12 6 12 14"/><path d="M20 22h8"/></svg>`,
  },
  {
    title: 'Helicopter Crash',
    text: 'Helicopter crashes often stem from preventable errors. We investigate failures in maintenance, weather decisions, and pilot error to pursue accountability.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="4"/><path d="M6 24h36M24 6v36M14 14l20 20M34 14L14 34"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Aviation accidents often involve powerful carriers, manufacturers, and insurers. We work with experts and investigators to prove fault and fight for full compensation for victims and families.',
  },
  {
    title: 'Covering All Types of Aviation Cases',
    text: 'Commercial airline disasters, private plane crashes, helicopter accidents, drone incidents, runway collisions, and aviation product defects—we handle them all and hold negligent parties accountable.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years of experience, over $30 billion recovered nationwide, and 1,000+ trial-ready attorneys, Morgan & Morgan has the resources and depth to take on airlines and aircraft manufacturers.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'From attorneys to investigators and aviation experts, we provide full support for your case. Free evaluations, 24/7 access, and The Fee Is Free®—you pay nothing unless we win.',
  },
]

const lawsuitReqs = [
  'Proof of negligence or fault',
  'Aviation law jurisdiction',
  'Demonstrable damages',
]

const commonCauses: TextBlock[] = [
  {
    title: 'Pilot Error',
    text: 'Pilot mistakes, miscalculations, and fatigue are significant causes of aviation accidents, which can lead to loss of control, navigation errors, or improper in-flight responses.',
  },
  {
    title: 'Mechanical Failures/Airworthiness',
    text: 'Critical system failures can result from defective components, design flaws, or inadequate maintenance and inspection. Mechanical issues can also lead to engine malfunctions, landing gear failures, or loss of flight control, among other failures.',
  },
  {
    title: 'Weather Conditions',
    text: 'Severe weather, turbulence, and low visibility create significant risks for aircraft. Poor weather conditions can contribute to loss of control, runway overruns, or difficulty in navigation and landing.',
  },
  {
    title: 'Mid-Air or Runway Collisions',
    text: 'Collisions may occur due to traffic mismanagement, communication failures, or pilot error. Incidents on runways or in the air can result in catastrophic consequences for passengers and crew.',
  },
  {
    title: 'Fuel-Related Issues',
    text: 'Fuel contamination, miscalculations, or leaks can cause engine failure or reduced aircraft performance. Insufficient fuel planning or distribution issues may also lead to emergency landings or crashes.',
  },
  {
    title: 'Foreign Object Damage',
    text: 'Aircraft may sustain damage from bird strikes, debris on runways, or ground equipment. Foreign objects can impact engine function, cause structural damage, or create hazards during takeoff and landing.',
  },
]

const learnLeft: LearnLink[] = [
  {
    title: "Plane and Aviation Crash Accidents: What to Know About the Recent Spike and Victims' Legal Options",
    href: '#blog',
  },
]

const learnRight: LearnLink[] = [
  {
    title: "Many Flight Attendants Are Only Paid While in the Air, and Now They're Taking Action",
    href: '#blog',
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
    name: 'Dan Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "Your case isn't just another file to us. It's your life, your future, and your family. And we take that personally.",
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=85&fit=crop',
  },
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'Aviation cases demand rigorous investigation and experienced trial lawyers—we bring both to every claim we handle.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'We built this firm for the people—not the powerful. If you have been hurt, we want to hear your story and help you understand your legal options at no upfront cost.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
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
  'Why are airplane accidents and aviation disasters on the rise?',
  'What is aviation law?',
  'Who needs an aviation attorney?',
  'What are the common types of aviation accidents?',
  'What are the common causes of aviation accidents?',
  'What does an aviation attorney do?',
]

const faqItems: FaqItem[] = [
  {
    q: 'Why are airplane accidents and aviation disasters on the rise?',
    paragraphs: [
      'Increased air traffic, aging fleets, maintenance pressures, and complex supply chains can contribute to more reported incidents.',
      'Each crash requires independent investigation to determine contributing factors and liable parties.',
    ],
  },
  {
    q: 'What is aviation law?',
    paragraphs: [
      'Aviation law covers regulations, liability, and claims arising from aircraft operations, manufacturing, maintenance, and air traffic control.',
      'Cases may involve federal rules, international treaties, and state wrongful death or injury statutes.',
    ],
  },
  {
    q: 'Who needs an aviation attorney?',
    paragraphs: [
      'Passengers, crew, families of victims, and others harmed by aviation negligence may need specialized counsel to navigate complex liability and evidence rules.',
    ],
  },
  {
    q: 'What are the common types of aviation accidents?',
    paragraphs: [
      'Common types include commercial airline crashes, private plane accidents, helicopter crashes, runway incidents, mid-air collisions, and product-defect-related failures.',
    ],
  },
  {
    q: 'What are the common causes of aviation accidents?',
    paragraphs: [
      'Causes may include pilot error, mechanical failure, weather, fuel issues, maintenance lapses, air traffic control errors, and foreign object damage.',
    ],
  },
  {
    q: 'What does an aviation attorney do?',
    paragraphs: [
      'An aviation attorney investigates the crash, identifies liable parties, preserves evidence, works with experts, and pursues compensation through negotiation or litigation.',
    ],
  },
  {
    q: 'Can I sue if a loved one died in a plane crash?',
    paragraphs: [
      'Surviving family members may have wrongful death claims depending on jurisdiction, relationship, and the facts of the crash.',
      'Contact Morgan & Morgan for a free case evaluation to discuss your options.',
    ],
  },
  {
    q: 'Who can be sued in an aviation wrongful death case?',
    paragraphs: [
      'Potentially liable parties may include airlines, aircraft owners, manufacturers, maintenance providers, pilots, and government entities in limited circumstances.',
    ],
  },
  {
    q: 'What is a wrongful death lawsuit?',
    paragraphs: [
      'A wrongful death lawsuit seeks compensation for survivors when someone dies due to another party\'s negligence or wrongful conduct, such as an aviation disaster.',
    ],
  },
  {
    q: 'What compensation can be recovered from an aircraft accident?',
    paragraphs: [
      'Damages may include medical expenses, lost income, pain and suffering, funeral costs, loss of companionship, and other losses permitted under applicable law.',
    ],
  },
  {
    q: 'Is there a time limit to file a lawsuit for an aviation accident?',
    paragraphs: [
      'Yes. Statutes of limitations vary by state and may be affected by international agreements. Prompt action helps preserve evidence and protect your rights.',
    ],
  },
  {
    q: 'Can I still file a lawsuit if an airplane crash happened abroad?',
    paragraphs: [
      'International crashes may involve complex jurisdictional questions. An experienced aviation attorney can analyze where and how a claim may be filed.',
    ],
  },
  {
    q: 'Do I need to hire an aviation crash expert for my case?',
    paragraphs: [
      'Expert testimony is often essential to explain causation, industry standards, and damages. Our team works with qualified aviation and engineering experts when needed.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation about an airplane accident claim?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for aviation accident victims and families.'],
  },
  {
    q: 'Who will be on my case team for my aviation accident claim?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and aviation specialists who support investigation and litigation.',
    ],
  },
  {
    q: 'When do I meet with my aviation accident lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your situation and next steps.',
    ],
  },
  {
    q: 'Why should I hire an aviation accident attorney at Morgan & Morgan?',
    paragraphs: [
      'We are America\'s largest injury law firm, with the resources to investigate complex aviation disasters, retain experts, and take on powerful defendants and their insurers.',
    ],
  },
]
</script>
