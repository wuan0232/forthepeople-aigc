<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Mesothelioma"
      title="Mesothelioma Lawyers"
      lead="When asbestos exposure causes mesothelioma, our attorneys identify exposure sources, pursue rightful compensation, and let you focus on your health."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Mesothelioma Attorneys"
      intro="Our attorneys manage every aspect of your case, from identifying exposure sources to pursuing rightful compensation, allowing you to prioritize your health."
      :lawyers="lawyers"
      aria-label="Mesothelioma attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="meso-diff-heading"
      title="Morgan & Morgan's Mesothelioma Claim Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Mesothelioma Claim"
      aria-label="Mesothelioma verdicts and settlements"
    />

    <PracticeAreaCardGrid
      heading-id="asbestos-places-heading"
      title="Common Places for Asbestos Exposure"
      :items="exposurePlaces"
      :initial-visible="6"
      expandable
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="A mesothelioma case needs three things." :requirements="lawsuitReqs" />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Mesothelioma" />

    <PracticeAreaInjuryTypes
      heading-id="meso-symptoms-heading"
      title="Mesothelioma Symptoms"
      :items="symptoms"
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
      region-label="Mesothelioma frequently asked questions"
      :reviewed-by="{ name: 'Bret C. Gainsford', date: 'March 11, 2025' }"
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
} from '~/types/practice-area'

useHead({
  title: 'Mesothelioma Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our mesothelioma attorneys, explore case results, and learn your legal options after asbestos exposure. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Bret C. Gainsford', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Scott L. Henratty', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Timothy M. Twomey', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Steven Tran', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Andrew McEnaney', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$6,250,000', location: '2015', type: 'Mesothelioma Claim' },
  { amount: '$4,800,000', location: 'Tampa, FL • 2018', type: 'Mesothelioma Claim' },
  { amount: '$3,200,000', location: 'Jacksonville, FL • 2016', type: 'Mesothelioma Claim' },
  { amount: '$2,750,000', location: 'Orlando, FL • 2019', type: 'Mesothelioma Claim' },
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Protect Your Rights After Mesothelioma',
    text: 'When asbestos exposure or other toxic hazards lead to mesothelioma, companies may try to limit liability or delay compensation; we step in to hold them accountable and fight for full recovery.',
  },
  {
    title: 'Covering All Types of Mesothelioma Cases',
    text: 'Whether you were exposed in a workplace, during military service, or through household contact, we represent individuals with mesothelioma and asbestos-related conditions across numerous industries.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With over 35 years of experience and billions recovered, Morgan & Morgan brings more than 1,000 trial-ready attorneys who know how to win and hold institutions accountable.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You get access to our full team, including attorneys, investigators, and medical and toxic-exposure specialists, on a contingency basis. Free review, 24/7 support, and you pay nothing unless we win.',
  },
]

const exposurePlaces: IconCard[] = [
  {
    title: 'Construction Areas',
    text: 'Construction workers risk asbestos exposure in older buildings and materials. We hold negligent manufacturers and employers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 40h32M14 40V20l10-8 10 8v20"/><circle cx="24" cy="14" r="4"/></svg>`,
  },
  {
    title: 'Power Plants',
    text: 'Asbestos in power plants puts workers at risk. Our attorneys fight for justice for those with mesothelioma from unsafe conditions.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8v12M18 20h12l-4 20h8l-4-20z"/><path d="M10 36h28"/></svg>`,
  },
  {
    title: 'Textile Manufacturing',
    text: 'Asbestos in textiles may expose workers to harmful fibers. We help victims seek compensation for its devastating health effects.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="14" width="28" height="24" rx="2"/><path d="M16 22h16M16 28h12"/></svg>`,
  },
  {
    title: 'Ship Building and Repair',
    text: 'Shipyards often use asbestos in insulation, exposing workers. We fight for accountability and financial recovery for those affected.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 32h36l-4-12H10l-4 12zM14 20l10-8 10 8"/></svg>`,
  },
  {
    title: 'Mechanics',
    text: 'Auto mechanics risk asbestos exposure from brake pads, clutches, and gaskets. We help those harmed seek justice and compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 32h28M12 28l-2-8h8l2 8M28 28l2-8h8l-2 8"/><circle cx="16" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Railroads',
    text: 'Railroad workers faced asbestos in brakes and equipment. Our attorneys help victims seek justice and compensation for illnesses.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="22" width="36" height="10" rx="2"/><path d="M12 22V14h24v8"/><circle cx="14" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Military Service',
    text: 'Veterans and service members were exposed to asbestos in ships, vehicles, and bases. We help navigate VA benefits and legal claims.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8l16 8v12c0 8-6 14-16 16C14 42 8 36 8 28V16l16-8z"/></svg>`,
  },
  {
    title: 'Schools & Public Buildings',
    text: 'Older schools and municipal buildings often contained asbestos materials. We pursue claims when negligence caused harmful exposure.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 18l14-8 14 8v22H10V18z"/><path d="M18 40V26h12v14"/></svg>`,
  },
  {
    title: 'Oil Refineries',
    text: 'Refinery workers encountered asbestos in insulation and equipment. Our team investigates exposure history to build strong claims.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 40V18l8-10 8 10v22"/><path d="M12 40h24"/></svg>`,
  },
]

const lawsuitReqs = [
  'Diagnosis of mesothelioma',
  'Proof of asbestos exposure',
  'Responsible parties identified',
]

const symptoms: TextBlock[] = [
  {
    title: 'Chest Pain',
    text: 'Chest pain from mesothelioma, caused by tumors pressing on the chest wall, can affect quality of life and often needs medical intervention and pain management.',
  },
  {
    title: 'Cough',
    text: 'A chronic cough, sometimes accompanied by blood, is a frequent sign of mesothelioma or asbestos-related conditions. This symptom often worsens over time and requires specialized care to manage.',
  },
  {
    title: 'Difficulty Breathing',
    text: 'Shortness of breath from fluid buildup or tumors in the lungs is a key mesothelioma symptom, often requiring respiratory treatment and limiting activity levels.',
  },
  {
    title: 'Weight Loss',
    text: 'Unexplained weight loss is common in advanced mesothelioma, caused by appetite and metabolism changes. Treatment often includes nutritional support and tailored care.',
  },
  {
    title: 'Abdominal Pain',
    text: 'Abdominal pain from tumors or fluid buildup is a key symptom of peritoneal mesothelioma, often disrupting daily life and requiring medical care for relief.',
  },
  {
    title: 'Fatigue',
    text: 'Chronic fatigue, common in mesothelioma patients, stems from the disease and treatments. Management includes balancing rest, activity, and medical care.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Asbestos Exposure at Work: Did It Cause Your Mesothelioma?', href: '#blog' },
  { title: 'Documents Needed When Filing a Mesothelioma Lawsuit', href: '#blog' },
  { title: 'Mesothelioma: What Is the Average Age at Diagnosis?', href: '#blog' },
  { title: 'Can You Survive Mesothelioma?', href: '#blog' },
  { title: 'What Causes Mesothelioma? How Can an Attorney Help?', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'A Mesothelioma Lawyer Can Help You Receive Compensation', href: '#blog' },
  { title: 'Occupational Asbestos Exposure: Jobs at Risk', href: '#blog' },
  { title: 'An Overview of Mesothelioma Treatment Options', href: '#blog' },
  {
    title: 'What is Malignant Mesothelioma & How Does it Differ from Benign Mesothelioma?',
    href: '#blog',
  },
  { title: 'What Is the Average Settlement for Asbestos Claim?', href: '#blog' },
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
      'Mesothelioma cases require deep investigation into decades-old exposure—we have the resources and experience to pursue every avenue of compensation.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'When corporations hid the dangers of asbestos, families paid the price. We fight to hold them accountable.',
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
      'After my diagnosis I was overwhelmed. My attorney handled the legal process so I could focus on treatment and my family.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop',
  },
]

const faqAside = [
  'How do I know if I have a mesothelioma claim?',
  'What are high-risk occupations and environments for asbestos exposure?',
  'What should I expect during a mesothelioma claim?',
  'What are asbestos trust funds?',
  'How is mesothelioma diagnosed?',
  'What are the types of mesothelioma?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a mesothelioma claim?',
    paragraphs: [
      'You may have a claim if you were diagnosed with mesothelioma or an asbestos-related disease and can link exposure to a negligent employer, manufacturer, property owner, or other responsible party. A free case review can help determine your options.',
    ],
  },
  {
    q: 'What are high-risk occupations and environments for asbestos exposure?',
    paragraphs: [
      'High-risk settings include construction, shipyards, power plants, railroads, automotive repair, textile manufacturing, oil refineries, and military service, as well as older schools and industrial facilities that used asbestos materials.',
    ],
  },
  {
    q: 'What should I expect during a mesothelioma claim?',
    paragraphs: [
      'After a free evaluation, we investigate your work and exposure history, gather medical records, identify liable parties or trust funds, and pursue compensation through settlement negotiations or litigation while keeping you informed at each stage.',
    ],
  },
  {
    q: 'What are asbestos trust funds?',
    paragraphs: [
      'Many asbestos manufacturers filed bankruptcy and established trust funds to compensate victims. Eligible claimants may receive payments from these trusts in addition to lawsuits against other liable parties.',
    ],
  },
  {
    q: 'How is mesothelioma diagnosed?',
    paragraphs: [
      'Diagnosis typically involves imaging (X-rays, CT scans), biopsies, and pathology review. Early symptoms can mimic other conditions, so specialists often confirm mesothelioma before legal claims proceed.',
    ],
  },
  {
    q: 'What are the types of mesothelioma?',
    paragraphs: [
      'The main types are pleural (lungs), peritoneal (abdomen), pericardial (heart), and testicular mesothelioma. Each type may involve different symptoms, treatments, and legal considerations.',
    ],
  },
  {
    q: 'Can family members file a mesothelioma lawsuit if the patient has passed away?',
    paragraphs: [
      'Surviving family members may be able to file a wrongful death claim depending on state law and timing. An attorney can explain who may bring a claim and applicable deadlines.',
    ],
  },
  {
    q: 'How long does it take to receive compensation in a mesothelioma lawsuit?',
    paragraphs: [
      'Timelines vary. Some trust fund claims resolve more quickly, while lawsuits may take months or longer depending on court schedules, discovery, and whether the case settles or goes to trial.',
    ],
  },
  {
    q: 'What types of damages can I recover in a mesothelioma claim?',
    paragraphs: [
      'Damages may include medical expenses, lost income, pain and suffering, funeral costs in wrongful death cases, and compensation for family members. Available damages depend on your case and state law.',
    ],
  },
  {
    q: 'Can I still file a lawsuit if I am not sure where the asbestos exposure occurred?',
    paragraphs: [
      'Yes. Our investigators often trace exposure through employment records, military service, product identification, and expert analysis even when exposure occurred decades ago.',
    ],
  },
  {
    q: 'Are mesothelioma cases handled differently from other personal injury claims?',
    paragraphs: [
      'Mesothelioma cases involve unique medical evidence, long latency periods, asbestos trust funds, and often multiple defendants. Experienced asbestos attorneys understand these complexities.',
    ],
  },
  {
    q: 'Why should I hire a mesothelioma law firm like Morgan & Morgan?',
    paragraphs: [
      'Morgan & Morgan has the scale, investigators, medical experts, and trial attorneys needed to take on major corporations and navigate trust fund claims nationwide.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation with an asbestos law firm?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for mesothelioma victims and families.'],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical or toxic-exposure experts who document your diagnosis and exposure history.',
    ],
  },
  {
    q: 'When do I meet with my attorney?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your diagnosis and next steps.',
    ],
  },
  {
    q: 'How much does it cost to hire the top mesothelioma lawyers at a law firm like Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'Who is being sued?',
    paragraphs: [
      'Defendants may include manufacturers of asbestos products, employers, property owners, contractors, and other parties whose negligence contributed to harmful exposure.',
    ],
  },
  {
    q: 'Who pays out a claim?',
    paragraphs: [
      'Compensation may come from corporate defendants, insurers, asbestos bankruptcy trusts, or settlements negotiated on your behalf depending on the facts of your case.',
    ],
  },
  {
    q: 'What if the company went bankrupt?',
    paragraphs: [
      'Many bankrupt companies funded asbestos trust accounts. You may still pursue trust claims and claims against other non-bankrupt parties responsible for your exposure.',
    ],
  },
  {
    q: 'What is required of me?',
    paragraphs: [
      'We will ask for medical records, work history, military records if applicable, and information about products or sites where you may have been exposed. Your attorney guides you through each step.',
    ],
  },
  {
    q: 'How often will I be contacted by my attorney?',
    paragraphs: [
      'Contact frequency depends on case stage, but your team should keep you updated on major developments and respond to your questions promptly.',
    ],
  },
  {
    q: 'How long will the process take?',
    paragraphs: [
      'Some claims resolve in months; complex litigation may take longer. We work to move cases efficiently while pursuing full compensation.',
    ],
  },
  {
    q: 'What if I pass away before my claim is complete?',
    paragraphs: [
      'Family members may be able to continue or file wrongful death claims. Notify your legal team immediately so rights can be preserved under applicable state law.',
    ],
  },
]
</script>
