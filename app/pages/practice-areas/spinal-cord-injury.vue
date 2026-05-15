<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Spinal Cord Injury"
      title="Spinal Cord Injury Lawyers"
      lead="When negligence causes a spinal cord injury, our attorneys fight for medical care, lost wages, and the long-term support you need to move forward."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Spinal Cord Injury Attorneys"
      intro="Our attorneys fight for spinal cord injury victims, securing compensation for medical care, lost wages, and long-term support. Let us help you on the path to recovery and rebuilding your future."
      :lawyers="lawyers"
      aria-label="Spinal cord injury attorneys"
      centered
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="sci-diff-heading"
      title="Morgan & Morgan's Spinal Cord Injury Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Car Accident"
      aria-label="Spinal cord injury verdicts and settlements"
    />

    <PracticeAreaWaysHelp :items="waysHelp" />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Spinal cord injury cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Spinal Cord Injury" />

    <PracticeAreaInjuryTypes
      heading-id="sci-causes-heading"
      title="Common Causes of Spinal Cord Injuries (SCI)"
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
      region-label="Spinal cord injury frequently asked questions"
      :reviewed-by="{ name: 'Michael Woodard', date: 'April 1, 2025' }"
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
  title: 'Spinal Cord Injury Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our spinal cord injury attorneys, explore case results, and learn your legal options after paralysis or SCI. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Nick Russo', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
  { name: 'Tatevik "Vicki" Gasparyan', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Keith Michael Goan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Elaine Sheng', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop' },
  { name: 'Michael Woodard', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'R. Ryan Sainz', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$16,422,353', location: 'Jacksonville, FL • 2022', type: 'Car Accident' },
  { amount: '$5,830,175', location: 'Orlando, FL • 2024', type: 'Car Accident' },
  { amount: '$5,500,000', location: 'Orlando, FL • 2023', type: 'Car Accident' },
  { amount: '$4,200,000', location: 'Tampa, FL • 2021', type: 'Personal Injury' },
  { amount: '$3,750,000', location: 'Miami, FL • 2025', type: 'Car Accident' },
  { amount: '$2,900,000', location: 'Fort Lauderdale, FL • 2020', type: 'Car Accident' },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Insurance companies often minimize the costs of paralysis, rehabilitation, and lifelong care. We dive into medical records, expert testimony, and lifetime needs to fight for fair compensation.',
  },
  {
    title: 'Covering All Types of Spinal Cord Injury Cases',
    text: 'Complete or incomplete paralysis, herniated/ruptured discs, spinal fractures, paraplegia, quadriplegia — any negligence causing spinal harm is our concern.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years helping spinal cord injury victims, billions recovered, and a nationwide team of trial-ready attorneys, we stand ready to fight for what you need.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You get the full support of medical experts, long-term care planning, attorneys, and a free case evaluation. And The Fee Is Free®, meaning you pay nothing unless we win.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Complete Spinal Cord Injury',
    text: 'A complete spinal cord injury causes permanent loss of function. We fight for victims to secure care, assistive devices, and compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="12" r="4"/><path d="M12 38c0-6 4-10 8-10s8 4 8 10"/><circle cx="34" cy="28" r="5"/><path d="M34 33v8M30 37h8"/></svg>`,
  },
  {
    title: 'Incomplete Spinal Cord Injury',
    text: 'An incomplete spinal injury may allow some movement but causes serious impairment. We help victims recover damages for treatment and rehab.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="10" r="4"/><path d="M16 38c0-8 4-14 8-14s8 6 8 14"/><path d="M20 24h8"/></svg>`,
  },
  {
    title: 'Paraplegia',
    text: 'Paraplegia affects lower body mobility and requires extensive care. We help victims secure compensation for medical costs and lost earnings.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="18" width="28" height="16" rx="2"/><path d="M16 18V12h16v6"/><path d="M14 34h20"/></svg>`,
  },
  {
    title: 'Quadriplegia (Tetraplegia)',
    text: 'Quadriplegia affects all four limbs and can cause long-term disability. We help victims secure financial support for lifelong care and needs.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="20" width="24" height="14" rx="2"/><path d="M18 20V14h12v6"/><circle cx="16" cy="10" r="2"/><circle cx="32" cy="10" r="2"/></svg>`,
  },
  {
    title: 'Herniated or Ruptured Discs',
    text: 'Spinal disc damage causes pain, nerve issues, and mobility loss. We help victims hold negligent parties accountable for suffering and lost wages.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 6v36"/><ellipse cx="24" cy="16" rx="6" ry="4"/><ellipse cx="24" cy="28" rx="6" ry="4"/><ellipse cx="24" cy="40" rx="6" ry="4"/></svg>`,
  },
  {
    title: 'Spinal Fractures',
    text: 'Spinal fractures from falls, crashes, or accidents can cause pain or paralysis. We help victims seek justice and compensation for care and rehab.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8l8 8-8 8-8-8 8-8zM24 24l8 8-8 8-8-8 8-8z"/></svg>`,
  },
]

const lawsuitReqs = ['Proof of negligence', 'Medical documentation', 'Demonstrable damages']

const commonCauses: TextBlock[] = [
  {
    title: 'Motor Vehicle Accidents',
    text: 'Car, motorcycle, and truck accidents are the leading cause of spinal cord injuries, often causing paralysis or pain. We help victims seek compensation for medical care and lost wages.',
  },
  {
    title: 'Falls',
    text: 'Slips, workplace falls, and falls from heights are major causes of SCIs, especially in older adults and labor jobs. We hold negligent property owners and employers accountable.',
  },
  {
    title: 'Acts of Violence',
    text: 'Gunshot wounds, stabbings, and blunt force trauma from assaults can lead to life-changing spinal injuries. We advocate for victims to seek justice and financial recovery.',
  },
  {
    title: 'Sports and Recreation Accidents',
    text: 'High-impact sports, diving into shallow water, and extreme activities put athletes at risk for serious spinal cord damage. We help victims pursue claims when negligence plays a role.',
  },
  {
    title: 'Medical Malpractice and Surgical Errors',
    text: 'Surgical mistakes, anesthesia complications, and misdiagnoses can result in permanent spinal cord damage. We help victims hold negligent medical professionals accountable.',
  },
  {
    title: 'Workplace and Industrial Accidents',
    text: 'Construction site falls, machinery mishaps, and heavy lifting injuries frequently cause spinal cord trauma. We assist injured workers in securing compensation and benefits.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Where to File a Personal Injury Lawsuit', href: '#blog' },
  { title: 'Personal Injury Mental Anguish', href: '#blog' },
  {
    title: 'Herniated Disc Injuries: Lumbar, Cervical, and Thoracic Disc Herniation and What a Bulging Disc Injury Claim Is Worth',
    href: '#blog',
  },
  { title: 'What Is a Typical Personal Injury Settlement Amount?', href: '#blog' },
  { title: 'Trending Today, Hospitalized Tomorrow: The Hidden Dangers of TikTok Challenges', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'Top-Rated Personal Injury Lawyers Near Me for Maximum Compensation', href: '#blog' },
  { title: 'How to Change a Police Report After an Accident: Is It Possible?', href: '#blog' },
  { title: 'What Kind of Cases Do Personal Injury Lawyers Handle?', href: '#blog' },
  { title: 'What to Do After Winning a Personal Injury Settlement', href: '#blog' },
  { title: 'How Much Does Personal Injury Insurance Cost?', href: '#blog' },
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
      "A spinal cord injury can upend your life, but you don't have to face it alone. We fight for the injured to get the compensation they deserve to move forward.",
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
      'Spinal cord injury cases demand lifetime care planning and relentless advocacy—we bring both to every claim we handle.',
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
      'After my injury I was overwhelmed with medical bills. My attorney handled the insurance company so I could focus on recovery.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop',
  },
]

const faqAside = [
  'What should I do if I have a spinal cord injury?',
  'What are the common causes of spinal cord injuries?',
  'What are the symptoms of a spinal cord injury?',
  'How does your spine get a herniated disc (slipped disc)? What are the causes and symptoms of a slipped disc?',
  'What is a spinal fusion injury?',
  'What is a bulging disc injury?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do if I have a spinal cord injury?',
    paragraphs: [
      'Seek immediate emergency care, follow your doctor\'s treatment plan, document the incident, avoid recorded statements to insurers, and contact an attorney as soon as possible to protect your legal rights.',
    ],
  },
  {
    q: 'What are the common causes of spinal cord injuries?',
    paragraphs: [
      'Leading causes include motor vehicle crashes, falls, acts of violence, sports and recreation accidents, medical malpractice, and workplace or industrial accidents.',
    ],
  },
  {
    q: 'What are the symptoms of a spinal cord injury?',
    paragraphs: [
      'Symptoms may include loss of movement or sensation, difficulty breathing, chronic pain, muscle weakness, incontinence, and changes in reflexes depending on the level and severity of injury.',
    ],
  },
  {
    q: 'How does your spine get a herniated disc (slipped disc)? What are the causes and symptoms of a slipped disc?',
    paragraphs: [
      'Discs can herniate from trauma, repetitive strain, or age-related wear. Symptoms often include back or neck pain, numbness, tingling, and weakness radiating into the arms or legs.',
    ],
  },
  {
    q: 'What is a spinal fusion injury?',
    paragraphs: [
      'Spinal fusion is a surgical procedure that joins vertebrae to stabilize the spine, often after fractures or severe disc damage. Complications from negligent surgery may support a malpractice claim.',
    ],
  },
  {
    q: 'What is a bulging disc injury?',
    paragraphs: [
      'A bulging disc occurs when the disc extends beyond its normal boundary, potentially pressing on nerves. It can cause pain and mobility issues, especially after trauma or repetitive stress.',
    ],
  },
  {
    q: 'How are spinal cord injuries diagnosed and treated?',
    paragraphs: [
      'Diagnosis may involve physical exams, MRI, CT scans, and neurological testing. Treatment can include surgery, rehabilitation, pain management, and assistive devices depending on injury severity.',
    ],
  },
  {
    q: 'How much does spinal cord therapy cost?',
    paragraphs: [
      'Lifetime costs can reach millions of dollars for surgery, hospitalization, rehab, home modifications, and ongoing care. Legal claims seek to cover present and future medical expenses.',
    ],
  },
  {
    q: 'What compensation can I recover for a spinal cord injury claim?',
    paragraphs: [
      'You may recover medical bills, lost wages, diminished earning capacity, pain and suffering, rehabilitation, assistive equipment, and home care costs depending on your case and state law.',
    ],
  },
  {
    q: 'Why should I hire a spinal cord injury attorney at Morgan & Morgan?',
    paragraphs: [
      'SCI cases are complex and high-value. Morgan & Morgan has the resources, medical experts, and trial attorneys needed to challenge insurers and pursue full compensation.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation? Does Morgan & Morgan offer free consultations?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for spinal cord injury victims and families.'],
  },
  {
    q: 'How much does it cost to hire a personal injury lawyer at Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'Who will be on my spinal cord injury case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical or life-care experts who document the full impact of your spinal cord injury.',
    ],
  },
  {
    q: 'When do I meet with my spinal cord injury lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your injury and next steps.',
    ],
  },
]
</script>
