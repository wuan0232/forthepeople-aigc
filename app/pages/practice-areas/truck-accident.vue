<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Truck Accident"
      title="Truck Accident Lawyers"
      lead="When a commercial truck crash causes serious injuries, our trucking accident attorneys fight for the full compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Trucking Accident Attorneys"
      intro="From investigation to resolution, our truck accident attorneys handle every detail of your case. You focus on recovery. We'll take care of the rest."
      :lawyers="lawyers"
      aria-label="Trucking accident attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="truck-diff-heading"
      title="Morgan & Morgan's Truck Accident Attorneys Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel :results="caseResults" aria-label="Trucking accident verdicts and settlements" />

    <PracticeAreaCardGrid heading-id="truck-types-heading" title="Truck Accident Types" :items="truckTypes" />

    <PracticeAreaClaimCopy
      heading-id="comp-heading"
      title="I was in a vehicle accident with a truck driver. How do I know if I have a truck accident claim?"
      :paragraphs="claimParagraphs"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Trucking accident claims need three things." :requirements="lawsuitReqs" />

    <PracticeAreaTimeline
      title="8 Steps to Take After a Trucking Accident"
      description="From ensuring your safety at the scene to protecting your rights, learn what to do after a truck accident."
      :steps="afterSteps"
      link-label="View guide"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Truck Accident" />

    <PracticeAreaInjuryTypes heading-id="truck-injury-heading" title="Injury Types" :items="injuryTypes" />

    <PracticeAreaLearnMore
      title="Learn More"
      intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Truck accident frequently asked questions"
      :reviewed-by="{ name: 'Kelli Lester', date: 'February 15, 2025' }"
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
  title: 'Truck Accident Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our trucking accident attorneys, explore case results, and learn your legal options after a commercial truck crash. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Nick Russo', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'Michael David Marrese', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Kelli Lester', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Erby J. Fischer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Joe Harrison Wade, II', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$5,949,887', location: 'Memphis, TN • 2021' },
  { amount: '$37,500,000', location: 'St. Louis, MO • 2025' },
  { amount: '$35,000,000', location: 'Atlanta, GA • 2025' },
  { amount: '$31,894,263', location: 'New York, NY • 2025' },
  { amount: '$29,045,285', location: 'Nashville, TN • 2024' },
  { amount: '$23,000,000', location: 'Philadelphia, PA • 2024' },
  { amount: '$11,125,000', location: 'Philadelphia, PA • 2024' },
  { amount: '$8,000,000', location: 'Philadelphia, PA • 2025' },
  { amount: '$7,141,000', location: '2022' },
  { amount: '$6,500,000', location: 'Tampa, FL • 2025' },
  { amount: '$6,274,533', location: '2025' },
]

const truckIcon =
  '<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="14" width="22" height="14" rx="2"/><path d="M26 18h8l4 6v4H26V18z"/><circle cx="12" cy="30" r="2"/><circle cx="30" cy="30" r="2"/></svg>'

const truckTypes: IconCard[] = [
  {
    title: '18 Wheelers',
    text: 'When fatigue or safety failures cause 18-wheeler accidents, our attorneys fight for the recovery you deserve.',
    icon: truckIcon,
  },
  {
    title: 'Dump Trucks',
    text: 'When negligence or poorly maintained dump trucks cause injuries, our lawyers help you seek the compensation you deserve.',
    icon: truckIcon,
  },
  {
    title: 'Tow Trucks',
    text: 'When reckless driving or improper maintenance causes tow truck accidents, our legal team is here to help you hold the responsible parties accountable.',
    icon: truckIcon,
  },
  {
    title: 'Delivery Trucks',
    text: 'Badly driven or improperly loaded delivery trucks cause serious harm. Our attorneys work to help victims recover and get back on track.',
    icon: truckIcon,
  },
  {
    title: 'Garbage/Sanitation Trucks',
    text: 'Reckless or faulty garbage trucks cause serious injuries. Our attorneys fight to secure justice for the injured.',
    icon: truckIcon,
  },
  {
    title: 'Cement Trucks',
    text: 'Overloaded or negligent cement trucks cause severe injuries. Our lawyers help you seek fair compensation.',
    icon: truckIcon,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Truck accident cases involve large insurance and corporate defense teams. We fight to protect your rights, gather the necessary evidence, and push back when insurers try to settle for too little.',
  },
  {
    title: 'Covering All Types of Truck Accident Cases',
    text: '18-wheelers, dump trucks, delivery or sanitation vehicles—if negligence caused your truck crash, we hold the driver, company, or maintenance team accountable.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: '35+ years of handling personal injury claims, billions recovered, and a nationwide team of attorneys ready to go to trial when it is needed. We are serious about your case.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You receive full legal support, including attorneys, investigators, and experts, and we do not get paid unless we win—free evaluation, powerful advocacy, zero risk to you.',
  },
]

const claimParagraphs = [
  'Truck accidents are often more complex than typical car crashes. The truck driver, trucking company, maintenance provider, or cargo loader may share responsibility. Common causes include driver fatigue, speeding, improper loading, and failure to maintain equipment.',
  'You may have a claim if someone else was at fault, you suffered injuries or damages, and evidence supports your case—such as police reports, dashcam or surveillance footage, driver logs, and medical records.',
  'Compensation may cover medical bills, lost wages, pain and suffering, and more. Morgan & Morgan offers a free case evaluation so you can understand your legal options after a trucking accident.',
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

const lawsuitReqs = ['Injury or damages', 'Proof of negligence', 'Determination of responsibility']

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
      "Big trucks can lead to devastating outcomes. If you've been hurt in a trucking accident, we have the experience and strength necessary to fight for you.",
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
    title: 'Traumatic Brain Injuries (TBI)',
    text: 'Truck crashes can cause concussions to severe trauma, leading to memory loss, cognitive issues, and long-term disability.',
  },
  {
    title: 'Spinal Cord Injuries',
    text: 'Damage to the spinal cord may cause paralysis, require surgery, and demand extensive therapy that affects mobility for life.',
  },
  {
    title: 'Fractures and Broken Bones',
    text: 'Broken bones may need surgical repair with plates or screws and months of rehabilitation before victims regain function.',
  },
  {
    title: 'Whiplash and Neck Injuries',
    text: 'Sudden impact can cause neck pain, stiffness, and limited mobility that persists long after the collision.',
  },
  {
    title: 'Internal Injuries',
    text: 'Blunt force can damage organs such as the liver or spleen, often requiring emergency surgery and intensive care.',
  },
  {
    title: 'Lacerations and Burns',
    text: 'Deep cuts and burns may cause scarring, infection risk, and additional surgeries during recovery.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Trucking Accident Attorneys', href: '#blog' },
  { title: "Injured in a Truck Accident? Here's How to Sue", href: '#blog' },
  { title: 'How to Hire the Best Truck Accident Lawyer', href: '#blog' },
  { title: '5 Signs That You Need a Truck Accident Lawyer', href: '#blog' },
  { title: 'Important Steps to Take After a Truck Accident', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'How to Claim Compensation After a Cargo Truck Accident', href: '#blog' },
  { title: 'Injured in a Semi-Truck Accident? Know Your Rights & Legal Options', href: '#blog' },
  {
    title: 'Pickup Trucks Are 4X More Likely to Kill Pedestrians While Turning Than Regular Vehicles. Here\'s Why.',
    href: '#blog',
  },
  { title: 'Tow Truck Service Near Me', href: '#blog' },
  { title: 'Forklift Accidents: The Most Common Causes and Risks', href: '#blog' },
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
  'I was in a vehicle accident with a truck driver. How do I know if I have a truck accident claim?',
  'What should I do immediately after a truck accident?',
  'How long after a truck accident can I file a truck crash claim?',
  'How long does it take to resolve a truck accident claim?',
  'Why should I hire the Morgan & Morgan law firm?',
  'How much does it cost to hire an experienced truck accident attorney at Morgan & Morgan?',
]

const faqItems: FaqItem[] = [
  {
    q: 'I was in a vehicle accident with a truck driver. How do I know if I have a truck accident claim?',
    paragraphs: [
      'You may have a claim if another party was negligent, you suffered injuries or damages, and evidence connects the crash to your losses.',
      'Truck cases often involve multiple defendants and federal regulations. A free case evaluation can help clarify whether you have a viable claim.',
    ],
  },
  {
    q: 'What should I do immediately after a truck accident?',
    paragraphs: [
      'Get medical care, call police, document the scene with photos, and collect witness and driver information when it is safe to do so.',
      'Avoid giving recorded statements to insurers before speaking with an attorney who understands commercial trucking claims.',
    ],
  },
  {
    q: 'How long after a truck accident can I file a truck crash claim?',
    paragraphs: [
      'Statutes of limitations vary by state and may be shorter when government entities are involved.',
      'Critical evidence—such as driver logs and black box data—can be lost quickly, so acting promptly is important.',
    ],
  },
  {
    q: 'How long does it take to resolve a truck accident claim?',
    paragraphs: [
      'Timelines depend on injury severity, liability disputes, and whether litigation is necessary.',
      'Your legal team should explain milestones and help you evaluate settlement offers along the way.',
    ],
  },
  {
    q: 'Why should I hire the Morgan & Morgan law firm?',
    paragraphs: [
      'We are America’s largest injury law firm, with the resources to take on trucking companies and their insurers.',
      'Our attorneys handle complex evidence, expert witnesses, and aggressive defense tactics so you can focus on recovery.',
    ],
  },
  {
    q: 'How much does it cost to hire an experienced truck accident attorney at Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing unless we win. There is no upfront cost for representation.'],
  },
  {
    q: 'What sort of compensation can I receive after a truck accident?',
    paragraphs: [
      'You may recover medical expenses, lost wages, pain and suffering, and other damages depending on your injuries and state law.',
    ],
  },
  { q: 'Do I have to pay for a consultation?', paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for truck accident victims.'] },
  { q: 'Who will be on my case team?', paragraphs: ['Your team may include trial attorneys, paralegals, investigators, and experts who build and support your claim.'] },
  {
    q: 'When do I meet with my truck accident lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will reach out to discuss your accident and next steps, usually within one business day.',
    ],
  },
  {
    q: "What's the average settlement for a trucking accident claim?",
    paragraphs: [
      'There is no single average—settlements depend on medical costs, lost income, liability, insurance limits, and long-term impact.',
      'An attorney can review your facts and give a clearer picture of what similar cases have achieved.',
    ],
  },
  {
    q: 'How do you prove who is responsible in a semi-truck accident case?',
    paragraphs: [
      'We gather police reports, electronic logging data, maintenance records, witness statements, and expert analysis to establish fault.',
    ],
  },
  {
    q: 'What should I expect during the legal process of a truck accident claim?',
    paragraphs: [
      'The process typically includes investigation, demand, negotiation, and—if needed—filing suit and discovery before trial or settlement.',
    ],
  },
  {
    q: 'Why are commercial vehicle or truck accidents more complicated than car accidents?',
    paragraphs: [
      'Multiple parties, federal trucking rules, larger policies, and severe injuries make these cases more complex than typical car wrecks.',
    ],
  },
  {
    q: 'What are the most common causes of truck accidents?',
    paragraphs: [
      'Common causes include driver fatigue, speeding, distracted driving, improper loading, and inadequate vehicle maintenance.',
    ],
  },
  {
    q: 'Can I sue the trucking company if the driver was at fault?',
    paragraphs: [
      'Often yes. Employers may be liable for a driver’s negligence, and other parties such as loaders or maintenance companies may share responsibility.',
    ],
  },
]
</script>
