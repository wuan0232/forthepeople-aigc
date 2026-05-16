<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Brain Injury"
      title="Traumatic Brain Injury Lawyers"
      lead="When negligence causes a traumatic brain injury, our attorneys fight for medical care, lost wages, and the future support you need."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Traumatic Brain Injury Attorneys"
      intro="Our attorneys fight for brain injury victims, securing compensation for medical care, lost wages, and future well-being. Let us help you down the path to recovery and rebuilding your life."
      :lawyers="lawyers"
      aria-label="Traumatic brain injury attorneys"
      centered
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Brain Injury"
      aria-label="Brain injury verdicts and settlements"
    />

    <PracticeAreaWaysHelp :items="waysHelp" />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Brain injury cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaGuidePromo
      heading-id="brain-rights-heading"
      title="Understanding Your Brain Injury Rights"
      description="Brain injuries can have life-altering consequences. Learn more about the causes, impact, and how to seek justice for a brain injury."
      link-label="Learn more"
      link-href="#guide"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="brain-diff-heading"
      title="Morgan & Morgan's Brain Injury Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Brain Injury" />

    <PracticeAreaInjuryTypes
      heading-id="brain-incidents-heading"
      title="Incidents That May Cause Brain Injuries"
      :items="incidentTypes"
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
      region-label="Brain injury frequently asked questions"
      :reviewed-by="{ name: 'R. Ryan Sainz', date: 'March 25, 2025' }"
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
  title: 'Traumatic Brain Injury Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our traumatic brain injury attorneys, explore case results, and learn your legal options after a head or brain injury. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Tatevik "Vicki" Gasparyan', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Keith Michael Goan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'H. Luke Mitcheson', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  // { name: 'Michael Woodard', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Joseph Anthony Kopacz', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
  { name: 'R. Ryan Sainz', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$55,000,000', location: 'Orlando, FL • 2026', type: 'Car Accident' },
  { amount: '$25,000,000', location: '2024', type: 'Motorcycle Accident' },
  { amount: '$12,500,000', location: '2023', type: 'Personal Injury' },
  { amount: '$9,800,000', location: 'Tampa, FL • 2022', type: 'Brain Injury' },
  { amount: '$7,500,000', location: 'Jacksonville, FL • 2025', type: 'Brain Injury' },
  { amount: '$5,200,000', location: 'Miami, FL • 2021', type: 'Brain Injury' },
]

const takeaways: TextBlock[] = [
  {
    title: 'TBIs Can Cause Permanent Damage',
    text: 'Traumatic brain injuries can result in lasting cognitive impairment, physical disability, and life-altering changes that affect every aspect of daily living.',
  },
  {
    title: 'Even Concussions Can Have Long-Term Effects',
    text: 'What may seem like a minor concussion can lead to chronic headaches, memory loss, mood changes, and other long-term neurological complications.',
  },
  {
    title: 'Expert Evidence Is Critical',
    text: 'Proving the full extent of a brain injury requires testimony from neurologists, neuropsychologists, and other medical experts to demonstrate the true impact on your life.',
  },
  {
    title: 'Fight for the Compensation You Deserve',
    text: 'If you or a loved one suffered a traumatic brain injury, contact Morgan & Morgan to pursue full and fair compensation.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Traumatic Brain Injury (TBI)',
    text: 'TBIs from accidents or falls can cause lasting impairments. Our attorneys fight for the care and compensation you need.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="20" r="12"/><path d="M16 32c2-6 6-8 8-8s6 2 8 8"/></svg>`,
  },
  {
    title: 'Concussions',
    text: 'Concussions can cause headaches, memory issues, and long-term symptoms. We help victims recover damages for ongoing care.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="5"/><path d="M12 38c0-8 5-12 12-12s12 4 12 12"/><path d="M20 22h8"/></svg>`,
  },
  {
    title: 'Contusions (Brain Bruising)',
    text: 'Severe trauma can cause bruising and swelling in the brain. We advocate for victims to receive full compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="22" r="10"/><path d="M18 18l6 4 6-4"/></svg>`,
  },
  {
    title: 'Diffuse Axonal Injury (DAI)',
    text: 'DAI occurs when the brain shifts inside the skull. We fight for long-term disability and care costs.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="22" r="12"/><path d="M14 22h20M24 10v24"/></svg>`,
  },
  {
    title: 'Penetrating Brain Injury',
    text: 'Penetrating trauma can cause severe, permanent damage. We seek justice and support for victims and families.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 24h32M28 12l12 12-12 12"/></svg>`,
  },
  {
    title: 'Anoxic Brain Injury',
    text: 'Lack of oxygen can devastate brain function. We hold negligent parties accountable when oxygen deprivation causes harm.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><path d="M24 14v6M20 24h8"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Brain injuries often involve long-term care, cognitive losses, and insurers who underplay the severity of the injuries. We fight for the full compensation you deserve.',
  },
  {
    title: 'Covering All Types of Brain Injury Cases',
    text: 'From concussions and contusions to hemorrhages, diffuse axonal injury, and penetrating trauma, every serious brain injury caused by negligence matters, and we fight for your rights.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With over 35 years of experience helping brain injury victims, billions recovered, and a trial-ready team of more than 1,000 attorneys, Morgan & Morgan brings significant power to your case.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You receive full, expert-backed legal support, a free case review, and The Fee Is Free®, which means you incur no out-of-pocket expenses unless we win.',
  },
]

const lawsuitReqs = ['Proof of negligence', 'Medical documentation', 'Demonstrable damages']

const incidentTypes: TextBlock[] = [
  {
    title: 'Car Accidents',
    text: 'Collisions are a leading cause of traumatic brain injuries, often due to sudden impacts, whiplash, or head trauma. We help victims pursue compensation for their injuries.',
  },
  {
    title: 'Workplace Accidents',
    text: 'Falls, falling objects, or machinery accidents can cause brain injuries on the job. We assist injured workers in seeking benefits and legal action when negligence is involved.',
  },
  {
    title: 'Slip and Fall Accidents',
    text: 'Unsafe conditions like wet floors or poor lighting can lead to serious falls and head trauma. We fight for victims to hold property owners accountable.',
  },
  {
    title: 'Sports and Recreation',
    text: 'Contact sports, cycling, and other physical activities put individuals at risk for concussions and TBIs. We help victims seek compensation when negligence plays a role.',
  },
  {
    title: 'Assaults and Violence',
    text: 'Blunt-force trauma from physical attacks can cause severe brain injuries. We advocate for victims to seek justice against those responsible.',
  },
  {
    title: 'Medical Malpractice',
    text: 'Surgical errors, anesthesia mistakes, or oxygen deprivation during procedures can result in brain injuries. We help victims hold negligent healthcare providers accountable.',
  },
]

const learnLeft: LearnLink[] = [{ title: 'Head Injury & Brain Lawyers', href: '#blog' }]

const learnRight: LearnLink[] = [
  {
    title: 'Traumatic Brain Injuries: The Causes, the Impact, and How to Seek Justice',
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
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "A traumatic brain injury can upend your life, but you don't have to face it alone. We fight for the injured to get the compensation they deserve to move forward.",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Dan Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "Your case isn't just another file to us. It's your life, your future, and your family. And we take that personally.",
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'Brain injury cases demand medical experts and relentless advocacy—we bring both to every claim we handle.',
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
  'What is a traumatic brain injury (TBI)? What are the common types of brain injuries?',
  'What should I do if I suspect I have a head injury or brain injury after an accident?',
  'What types of traumatic brain injuries does Morgan & Morgan handle?',
  'Who can file a traumatic brain injury lawsuit?',
  'What are the signs and symptoms of traumatic brain injuries?',
  'What are the common causes of traumatic brain injuries?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What is a traumatic brain injury (TBI)? What are the common types of brain injuries?',
    paragraphs: [
      'A TBI is caused by a blow, jolt, or penetrating injury that disrupts normal brain function. Types include concussions, contusions, diffuse axonal injury, penetrating injuries, and anoxic brain injury.',
    ],
  },
  {
    q: 'What should I do if I suspect I have a head injury or brain injury after an accident?',
    paragraphs: [
      'Seek immediate medical care, follow your doctor\'s instructions, document symptoms, and avoid giving recorded statements to insurers before speaking with an attorney.',
    ],
  },
  {
    q: 'What types of traumatic brain injuries does Morgan & Morgan handle?',
    paragraphs: [
      'We handle concussions, moderate and severe TBIs, contusions, DAI, penetrating injuries, anoxic injuries, and related claims arising from negligence.',
    ],
  },
  {
    q: 'Who can file a traumatic brain injury lawsuit?',
    paragraphs: [
      'Injured victims may file claims. In wrongful death or incapacity cases, certain family members or representatives may have standing depending on state law.',
    ],
  },
  {
    q: 'What are the signs and symptoms of traumatic brain injuries?',
    paragraphs: [
      'Symptoms may include headaches, dizziness, memory problems, mood changes, sensitivity to light or sound, seizures, and cognitive or physical impairment. Some symptoms appear days or weeks later.',
    ],
  },
  {
    q: 'What are the common causes of traumatic brain injuries?',
    paragraphs: [
      'Common causes include car crashes, falls, workplace accidents, sports injuries, assaults, and medical negligence.',
    ],
  },
  {
    q: 'Who can be held responsible for brain injuries?',
    paragraphs: [
      'Potentially liable parties include negligent drivers, property owners, employers, product manufacturers, healthcare providers, and others whose actions caused or contributed to the injury.',
    ],
  },
  {
    q: 'What is the process of filing a TBI lawsuit for my brain injury case?',
    paragraphs: [
      'After a free evaluation, we investigate, gather medical and expert evidence, file claims or lawsuits as needed, and negotiate or litigate to pursue fair compensation.',
    ],
  },
  {
    q: 'How long do I have to file a brain injury lawsuit?',
    paragraphs: [
      'Statutes of limitations vary by state. Prompt action helps preserve evidence and protect your right to file.',
    ],
  },
  {
    q: 'Can I still file a claim if my symptoms appear weeks or months later?',
    paragraphs: [
      'Delayed symptoms are common with brain injuries. You may still have a claim if negligence caused your injury—contact us as soon as symptoms emerge.',
    ],
  },
  {
    q: 'What happens if my loved one is in a coma due to a traumatic brain injury?',
    paragraphs: [
      'Families may pursue claims on behalf of incapacitated loved ones. We can explain guardianship, wrongful death, and long-term care considerations for your situation.',
    ],
  },
  {
    q: 'Will my personal injury case go to trial, or can it be settled out of court?',
    paragraphs: [
      'Many brain injury cases settle, but we prepare every case for trial so you are positioned for the best possible outcome.',
    ],
  },
  {
    q: 'What if I was partially at fault for the accident that caused my TBI?',
    paragraphs: [
      'Comparative fault rules vary by state. You may still recover compensation reduced by your share of fault. An attorney can explain how the law applies to your case.',
    ],
  },
  {
    q: 'Why should I hire a law firm like Morgan & Morgan?',
    paragraphs: [
      'We are America\'s largest injury law firm, with resources to retain neurologists, neuropsychologists, life-care planners, and trial attorneys experienced in complex brain injury claims.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation for a traumatic brain injury claim?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for brain injury victims and families.'],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical experts who document the full impact of your brain injury.',
    ],
  },
  {
    q: 'When do I meet with my personal injury attorney?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your injury and next steps.',
    ],
  },
  {
    q: 'How much does it cost to hire an experienced brain injury lawyer at Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
]
</script>
