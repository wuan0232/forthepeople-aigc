<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Motorcycle Accident"
      title="Motorcycle Accident Lawyers"
      lead="When reckless drivers cause serious harm, our motorcycle accident attorneys fight for your rights and pursue the compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Motorcycle Accident Lawyers"
      intro="When reckless drivers cause you harm, our experienced motorcycle accident lawyers fight for your rights and work tirelessly to secure the compensation you deserve."
      :lawyers="lawyers"
      aria-label="Motorcycle accident attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="moto-diff-heading"
      title="Morgan & Morgan's Motorcycle Accident Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Motorcycle Accident"
      aria-label="Motorcycle accident verdicts and settlements"
    />

    <PracticeAreaWaysHelp :items="waysHelp" />

    <PracticeAreaClaimCopy
      heading-id="moto-claim-heading"
      title="How do I know if I have a motorcycle accident claim?"
      :paragraphs="claimParagraphs"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Motorcycle accident lawsuits need three things." :requirements="lawsuitReqs" />

    <PracticeAreaTimeline
      title="8 Steps to Take After a Motorcycle Accident"
      description="From prioritizing your health at the scene of the accident to securing the compensation you deserve, discover the essential steps every motorcyclist should follow after an accident."
      :steps="afterSteps"
      link-label="See all 8 steps"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Motorcycle Accident" />

    <PracticeAreaInjuryTypes
      heading-id="moto-injury-heading"
      title="Motorcycle Accident Injury Types"
      :items="injuryTypes"
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
      region-label="Motorcycle accident frequently asked questions"
      :reviewed-by="{ name: 'Tony Bennett', date: 'May 9, 2025' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type {
  CaseResult,
  ClientTestimonial,
  FaqItem,
  IconCard,
  LearnLink,
  PartnerSlide,
  StatItem,
  TextBlock,
  TimelineStep,
} from '~/types/practice-area'

useHead({
  title: 'Motorcycle Accident Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our motorcycle accident attorneys, explore case results, and learn your legal options after a crash. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Nick Russo', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'Michael Woodard', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Hector J. Rojas Jr.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Joe Dunn', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Garrett D. Lee', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Ben Steinberg', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$25,000,000', location: 'Tampa, FL • 2022', type: 'Motorcycle Accident' },
  { amount: '$20,839,758', location: 'Orlando, FL • 2023', type: 'Motorcycle Accident' },
  { amount: '$18,000,000', location: 'Atlanta, GA • 2024', type: 'Motorcycle Accident' },
  { amount: '$12,500,000', location: 'Jacksonville, FL • 2023', type: 'Motorcycle Accident' },
  { amount: '$9,750,000', location: 'Miami, FL • 2022', type: 'Motorcycle Accident' },
  { amount: '$7,200,000', location: 'Nashville, TN • 2024', type: 'Motorcycle Accident' },
]

const waysHelp: IconCard[] = [
  {
    title: 'Turning Collisions',
    text: 'When drivers misjudge or fail to yield during turns, motorcyclists face serious harm. Our lawyers fight for the compensation you deserve after a collision.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32l12-20h8l4 12 8-8"/><circle cx="14" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Road Hazard Accidents',
    text: 'Potholes, debris, or uneven pavement can cause serious motorcycle crashes. Our attorneys fight to hold the responsible parties accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 28h36M10 28V18l8-6 8 6v10M30 28V16l8 6v6"/><circle cx="14" cy="32" r="2"/><circle cx="34" cy="32" r="2"/></svg>`,
  },
  {
    title: 'Drunk Driving Accidents',
    text: 'Drunk drivers endanger motorcyclists. Our team fights for injured riders and holds negligent drivers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><path d="M16 20h16M18 28h12"/><circle cx="24" cy="14" r="2"/></svg>`,
  },
  {
    title: 'Rear-End/Head-On Collisions',
    text: 'Tailgating or crossing into traffic can devastate motorcyclists. Our attorneys fight for the compensation you deserve.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32h32M12 28l-4-8h8l2 8M28 28l2-8h8l-4 8"/><circle cx="16" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'High-Speed Crashes',
    text: 'High-speed, reckless driving causes devastating motorcycle accidents. Our lawyers fight for your rights so you can focus on healing.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="12"/><path d="M24 12v4M24 32v4M12 24h4M32 24h4"/><path d="M18 18l3 3M27 27l3 3M30 18l-3 3M21 27l-3 3"/></svg>`,
  },
  {
    title: 'Single Vehicle Accidents',
    text: 'Weather, obstacles, or mechanical failures can injure motorcyclists. Our attorneys are here to help you recover and move forward.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="30" cy="12" r="3"/><circle cx="14" cy="36" r="4"/><circle cx="34" cy="36" r="4"/><path d="M30 15l-4 12-8-6"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Motorcycle crash victims often get offered lowball settlements. We fight insurers using injury, road, and vehicle evidence to demand the full compensation you deserve.',
  },
  {
    title: 'Covering All Types of Motorcycle Accident Cases',
    text: 'Rideshare crashes, passenger negligence, road hazards, lane splitting, distracted drivers—if it caused your injury, we fight to hold each party responsible.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'Leveraging 35+ years, $30B+ recovered, and a team of 1,000+ trial-ready attorneys, we bring a serious track record to every motorcycle case.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'Drive your claim with the full support of our attorneys, medical experts, and investigators, all at your side. With a free evaluation and our The Fee Is Free® promise, you pay nothing unless we win.',
  },
]

const claimParagraphs = [
  'You may have a motorcycle accident claim if another driver caused the crash and you were injured or suffered financial losses, such as medical bills, lost income, or damage to your motorcycle. Many motorcycle accidents occur because other drivers fail to see motorcycles, drive distracted, speed, or fail to yield the right of way.',
  'In most cases, a claim requires three key elements: someone else was at fault, you suffered damages, and there is evidence to support what happened. Evidence may include a police report, photos from the accident scene, medical records, witness statements, or traffic camera footage.',
  'If these factors are present, you may be able to recover compensation for medical expenses, lost wages, motorcycle repairs, and other accident-related losses. Because there are deadlines for filing a claim, it is important to act quickly. Contact a motorcycle accident lawyer at Morgan & Morgan for a free case evaluation to learn about your legal options.',
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
    title: 'Collect Witness Information',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="4"/><circle cx="22" cy="12" r="3"/><path d="M6 26c0-4 3-7 6-7s6 3 6 7M16 26c0-3 2-5 6-5s6 2 6 5"/></svg>`,
  },
]

const lawsuitReqs = [
  'Injury or damages',
  'Someone else is partially or entirely at fault',
  'Enough insurance coverage',
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
      "Motorcyclists have just as much right to the road as anyone else. If a driver's negligence caused your crash, we'll fight to get your life back on track.",
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
    title: 'Road Rash',
    text: 'Road rash happens when motorcyclists slide on pavement, causing skin abrasions or burns. Severe cases may lead to deep tissue damage, infections, or scarring.',
  },
  {
    title: 'Traumatic Brain Injuries (TBI)',
    text: 'Traumatic brain injuries, from concussions to severe trauma, can cause headaches, cognitive issues, and emotional changes. Severe cases may need surgery and lead to long-term disabilities.',
  },
  {
    title: 'Internal Injuries',
    text: 'Internal injuries to organs like the liver, spleen, or kidneys can be life-threatening. They may require emergency surgery and long recovery periods.',
  },
  {
    title: 'Fractures and Broken Bones',
    text: 'Fractures often need surgery with plates, screws, or pins to stabilize bones. Recovery takes months, often with therapy, and severe cases may cause chronic pain or disability.',
  },
  {
    title: 'Spinal Cord Injuries',
    text: 'Spinal cord injuries from motorcycle accidents may cause partial or full paralysis. Victims often require surgeries and long-term therapy to regain function, if possible.',
  },
  {
    title: 'Lower Extremity Injuries',
    text: 'Lower extremity injuries, common in motorcycle crashes, often involve fractures, ligament tears, or soft tissue damage. Treatment may need surgery, immobilization, and months of therapy.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Personal Injury Lawsuits: What Is Your Case Worth?', href: '#blog' },
  { title: 'Motorcycle Accident Lawyer Near Me', href: '#blog' },
  { title: 'Car Accident Lawyers & Auto Accident Attorneys', href: '#blog' },
  { title: 'What Should I Do if I Get in an Accident With an Uninsured Driver?', href: '#blog' },
  { title: 'Bicycle Accidents: How a Lawyer Can Help You Seek Justice and Compensation', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'Top Tips for Motorcycle Safety Every Biker Should Know', href: '#blog' },
  { title: 'What to Know About Driving in Other States', href: '#blog' },
  { title: 'What to Do After a Motorcycle Accident: A Comprehensive Guide', href: '#blog' },
  { title: 'Accidents Involving Special Vehicles: Legal Rights, Risks, and Remedies', href: '#blog' },
  { title: 'How Much is My Motorcycle Accident Injury Claim Worth?', href: '#blog' },
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
  'How do I know if I have a motorcycle accident claim?',
  'What should I do after a motorcycle accident?',
  'How long after a motorcycle accident can I file a personal injury claim?',
  'How long does it typically take to settle a common motorcycle accident case?',
  'Why should I hire a motorcycle accident attorney at Morgan & Morgan?',
  'How much does it cost to hire an experienced motorcycle accident attorney at a law firm like Morgan & Morgan?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a motorcycle accident claim?',
    paragraphs: [
      'You may have a claim if another driver caused the crash and you were injured or suffered financial losses. Fault, damages, and supporting evidence—such as police reports, photos, medical records, and witness statements—are typically required.',
      'Contact Morgan & Morgan for a free case evaluation to learn whether you may be entitled to compensation.',
    ],
  },
  {
    q: 'What should I do after a motorcycle accident?',
    paragraphs: [
      'Seek medical attention, report the accident to police, document the scene with photos, and collect witness contact information when it is safe to do so.',
      'Avoid admitting fault or giving recorded statements to insurers before speaking with an attorney who understands motorcycle injury claims.',
    ],
  },
  {
    q: 'How long after a motorcycle accident can I file a personal injury claim?',
    paragraphs: [
      'Deadlines vary by state. Missing the statute of limitations can bar you from recovering compensation, so it is important to act promptly.',
    ],
  },
  {
    q: 'How long does it typically take to settle a common motorcycle accident case?',
    paragraphs: [
      'Some cases settle in months; others take longer when liability is disputed or injuries are severe. Your attorney should keep you informed at each stage.',
    ],
  },
  {
    q: 'Why should I hire a motorcycle accident attorney at Morgan & Morgan?',
    paragraphs: [
      'We are America’s largest injury law firm, with the resources to investigate thoroughly, retain experts when needed, and push back against lowball insurance tactics.',
    ],
  },
  {
    q: 'How much does it cost to hire an experienced motorcycle accident attorney at a law firm like Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'What kind of damages can I claim after a motorcycle accident?',
    paragraphs: [
      'Depending on your injuries and state law, you may pursue medical bills, lost wages, pain and suffering, motorcycle repair or replacement, and other accident-related losses.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation for a motorcycle accident claim?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for motorcycle accident victims.'],
  },
  {
    q: 'Who will be on my motorcycle accident case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and experts who build and support your claim from investigation through resolution.',
    ],
  },
  {
    q: 'When do I meet with my motorcycle accident lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will reach out to discuss your accident and next steps, usually within one business day.',
    ],
  },
  {
    q: 'What is the average settlement for a motorcycle accident claim?',
    paragraphs: [
      'There is no single average—settlements depend on medical costs, lost income, liability, insurance limits, and long-term impact on your life.',
    ],
  },
  {
    q: 'How can I prove that the other driver was at fault in my motorcycle accident?',
    paragraphs: [
      'Evidence may include police reports, witness statements, photos or video, traffic citations, accident reconstruction, and expert analysis of how the crash occurred.',
    ],
  },
  {
    q: 'Can I still file a claim if I was not wearing a helmet during my motorcycle accident?',
    paragraphs: [
      'You may still have a claim depending on state law and how helmet use affects comparative fault. An attorney can explain how helmet laws apply in your jurisdiction.',
    ],
  },
  {
    q: 'What is comparative negligence in motorcycle accidents?',
    paragraphs: [
      'Comparative negligence allocates fault between parties. Even if you share some responsibility, you may still recover compensation reduced by your percentage of fault under your state’s rules.',
    ],
  },
  {
    q: 'What are common causes of motorcycle accidents?',
    paragraphs: [
      'Common causes include drivers failing to see motorcycles, left-turn collisions, speeding, distracted driving, impaired driving, and unsafe road conditions.',
    ],
  },
  {
    q: 'How can I prevent motorcycle accidents?',
    paragraphs: [
      'Wear protective gear, stay visible, avoid blind spots, maintain your bike, follow traffic laws, and never ride impaired. Defensive riding reduces—but cannot eliminate—risk from negligent drivers.',
    ],
  },
  {
    q: 'How should I deal with insurance companies after a motorcycle accident?',
    paragraphs: [
      'Report the accident as required, stick to the facts, and avoid recorded statements or quick settlements before you understand the full extent of your injuries.',
      'Consider having an attorney communicate with adjusters on your behalf.',
    ],
  },
  {
    q: 'What should I avoid doing after a motorcycle accident to protect my legal claim?',
    paragraphs: [
      'Do not admit fault, delay medical care, post about the crash on social media, or accept a settlement without reviewing your total damages with legal counsel.',
    ],
  },
  {
    q: 'What types of expert witnesses can help strengthen my motorcycle accident case?',
    paragraphs: [
      'Accident reconstructionists, medical experts, vocational specialists, and economists may help explain how the crash happened and the full financial impact of your injuries.',
    ],
  },
  {
    q: 'I need a motorcycle accident lawyer today. How can a Morgan & Morgan motorcycle accident lawyer help me?',
    paragraphs: [
      'We can start investigating immediately—preserving evidence, identifying liable parties, and handling insurer contact so you can focus on recovery.',
      'Contact us 24/7 for a free case evaluation to learn your legal options.',
    ],
  },
]
</script>
