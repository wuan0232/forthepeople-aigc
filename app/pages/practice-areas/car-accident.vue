<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Car Accident"
      title="Car Accident Lawyers"
      lead="If you were hurt in a crash, our attorneys can help you pursue the compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Car Accident Lawyers"
      intro="From investigation to resolution, our auto accident attorneys handle every detail of your case. You focus on healing, and we'll take it from here."
      :lawyers="lawyers"
      ariaLabel="Car accident attorneys"
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaWaysHelp :items="waysHelp">
      <div class="ca-claim-copy">
        <h2 class="ca-h2">How do I know if I have a car accident claim?</h2>
        <p v-for="(para, i) in claimParagraphs" :key="i">{{ para }}</p>
      </div>
    </PracticeAreaWaysHelp>

    <PracticeAreaTestimonials
      :clients="clients"
      disclaimer="Testimonials are from real clients; results may vary depending on your particular facts and legal circumstances."
    />

    <PracticeAreaLawsuit
      title="Car accident lawsuits need three things."
      :requirements="lawsuitReqs"
      link-label="See If You Qualify"
    />

    <PracticeAreaTimeline
      title="8 Things To Do After A Car Accident"
      description="Knowing what to do after a crash can protect your health, preserve critical evidence, and strengthen any claim you may need to file. These first steps matter—especially when injuries are involved."
      :steps="afterSteps"
      graphic-src="/after-incident-four-steps-timeline.svg"
      link-label="See all 8 steps"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="difference-heading"
      title="Morgan & Morgan's Car Accident Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Car Accident" />

    <div class="container ca-type-stack">
      <PracticeAreaInjuryTypes
        :wrap-stack="false"
        heading-id="common-types-heading"
        title="Common Types of Car Accidents"
        :items="commonAccidentTypes"
      />
      <PracticeAreaInjuryTypes
        :wrap-stack="false"
        heading-id="injury-types-heading"
        title="Car Accident Injury Types"
        :items="injuryTypes"
      />
    </div>

    <PracticeAreaLearnMore
      title="Learn More"
      intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
      :left-links="learnLeft"
      :right-links="learnRight"
    />

    <PracticeAreaFaq
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Car accident frequently asked questions"
      :reviewed-by="{ name: 'Daniel J. Morgan', date: 'October 25, 2024' }"
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
  TimelineStep,
} from '~/types/practice-area'

useHead({
  title: 'Car Accident Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our car accident attorneys, explore key takeaways after a crash, and hear from real clients. Free case review.',
    },
  ],
})

const lawyers = [
  { name: 'John Morgan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Matt Morgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Nick Russo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Michael J. Smith', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
  { name: 'Sarah Mitchell', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
]

const takeaways: TextBlock[] = [
  {
    title: 'Millions Are Injured in Car Accidents Every Year',
    text: 'Crashes remain one of the leading causes of serious injury in the United States. Even a low-speed collision can lead to long-term pain, missed work, and costly medical care.',
  },
  {
    title: 'Negligent Driving Is Usually to Blame',
    text: 'Speeding, distraction, impairment, and aggressive driving are preventable behaviors. When another driver breaks the rules of the road, victims should not bear the burden alone.',
  },
  {
    title: 'You Can Recover Full Compensation',
    text: 'Depending on your case, you may be entitled to medical expenses, lost income, pain and suffering, and more. An attorney can help document damages and pursue what you are owed.',
  },
  {
    title: 'Fight for What You Deserve After a Crash',
    text: 'Insurance companies often move fast to minimize payouts. Having a legal team on your side helps level the playing field so you can focus on recovery—not paperwork and pressure.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Car Crash',
    text: 'From fender benders to major collisions, our car accident lawyers handle all case types, offering guidance at every step.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32h32M12 28l-4-8h8l2 8M28 28l2-8h8l-4 8"/><circle cx="16" cy="34" r="3"/><circle cx="34" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Truck Crash',
    text: 'Our truck accident lawyers have extensive experience with the complexities of truck and commercial vehicle accidents.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="18" width="28" height="14" rx="2"/><path d="M34 22h8v10h-8"/><circle cx="14" cy="34" r="3"/><circle cx="26" cy="34" r="3"/><circle cx="38" cy="34" r="3"/></svg>`,
  },
  {
    title: 'Pedestrian Crash',
    text: 'Our pedestrian accident attorneys fight tirelessly for those hurt by negligent and dangerous drivers.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="10" r="4"/><path d="M24 14v8l-6 18M24 22l6 18M18 26h12"/></svg>`,
  },
  {
    title: 'Motorcycle Crash',
    text: 'Our motorcycle injury lawyers use proven strategies to help and protect the rights of injured riders on the road.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="14" cy="38" r="4"/><circle cx="34" cy="38" r="4"/><path d="M10 38l8-20h6l4 8 8-8"/></svg>`,
  },
  {
    title: 'Bus Crash',
    text: 'Our bus accident lawyers stand up for passengers and others harmed by irresponsible bus drivers.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="14" width="32" height="18" rx="2"/><path d="M12 22h24M14 34h4"/><circle cx="18" cy="36" r="2"/><circle cx="34" cy="36" r="2"/></svg>`,
  },
  {
    title: 'Bicycle Crash',
    text: 'Whether in bike lanes or elsewhere, injured cyclists get the advocacy they need from experienced bicycle accident attorneys.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="30" cy="12" r="3"/><circle cx="14" cy="36" r="4"/><circle cx="34" cy="36" r="4"/><path d="M30 15l-4 12-8-6"/></svg>`,
  },
]

const claimParagraphs = [
  'A car accident claim generally exists when another party\'s negligence caused the crash and you suffered injuries or financial losses as a result. If someone else failed to use reasonable care on the road and you were harmed, you may have the right to seek compensation.',
  'Most successful claims require three things: fault (or shared fault under your state\'s rules), measurable damages, and evidence to connect the two—such as police reports, photos, medical records, and witness statements.',
  'You may be entitled to recover medical bills, lost wages, pain and suffering, and property damage. The best way to understand your options is to speak with an experienced attorney. Morgan & Morgan is here to help.',
]

const afterSteps: TimelineStep[] = [
  {
    title: 'Seek Medical Attention',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4v24M8 12h16"/><circle cx="16" cy="22" r="6"/></svg>`,
  },
  {
    title: 'Report the Accident',
    icon: `<svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="20" height="24" rx="2"/><path d="M10 10h12M10 16h8"/></svg>`,
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

const lawsuitReqs = [
  'Injury or damages',
  'Someone else is partially or entirely at fault.',
  'Enough insurance coverage',
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'Adjusters may rush a settlement before you understand the full cost of your injuries. Our team works to protect your rights and pursue the full value of your claim—not the first offer on the table.',
  },
  {
    title: 'Covering All Types of Auto Accident Cases',
    text: 'From rear-end and T-bone collisions to highway pileups and uninsured motorist claims, we handle the nuances of liability, coverage, and damages so you can move forward with confidence.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years of experience, $30+ billion recovered for clients, and 1,000+ attorneys nationwide, Morgan & Morgan brings serious resources to every case we take on.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You get a full legal team in your corner, free case reviews, and The Fee Is Free®—you only pay if we win for you.',
  },
]

const stats: StatItem[] = [
  { k: '$26 MILLION', v: 'Largest auto verdict this year' },
  { k: '20,000+', v: 'Clients helped with auto claims' },
  { k: '1,000+', v: 'Attorneys across the country' },
  { k: '1', v: 'Click may change your life' },
]

const partners: PartnerSlide[] = [
  {
    name: 'Dan Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'A car accident can change everything instantly. With the resources of a national firm and the compassion of a family practice, we fight for you like we would for our own. When the insurance companies see our name, they know we mean business.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=85&fit=crop',
  },
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'Our clients deserve attorneys who will pick up the phone, explain the process, and never back down from a fight. That is the standard we hold ourselves to—every single day.',
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

const commonAccidentTypes: TextBlock[] = [
  {
    title: 'Rear-End Collisions',
    text: 'Rear-end crashes are common and can lead to whiplash and other neck or spine injuries, often caused by sudden stops or distracted driving.',
  },
  {
    title: 'Side-Impact Collisions',
    text: 'Also called T-bone accidents, these occur when one vehicle strikes another from the side, frequently resulting in serious injuries for occupants.',
  },
  {
    title: 'Head-On Collisions',
    text: 'These crashes involve two vehicles colliding head-on and often lead to severe injuries because of the high speed and force of impact.',
  },
  {
    title: 'Multi-Vehicle Accidents',
    text: 'These accidents involve several vehicles and can be complex to resolve, with multiple parties potentially responsible for the damages.',
  },
  {
    title: 'Hit-and-Run Accidents',
    text: 'The at-fault driver leaves the scene in a hit-and-run, but victims may still have options for seeking compensation through legal or insurance channels.',
  },
  {
    title: 'T-bone Accidents',
    text: 'T-bone accident attorneys pursue justice for victims of dangerous side-impact collisions.',
  },
]

const injuryTypes: TextBlock[] = [
  {
    title: 'Broken Bones',
    text: 'Car accidents can result in broken bones, from minor fractures to severe breaks. These injuries can significantly impact mobility and they require extensive medical care.',
  },
  {
    title: 'Head Injuries',
    text: 'Head injuries, including concussions, can occur in crashes. These injuries may cause headaches, memory issues, or longer-term cognitive problems.',
  },
  {
    title: 'Whiplash',
    text: 'Rear-end collisions commonly lead to whiplash, which can cause neck pain and stiffness. It may take weeks or months to recover fully.',
  },
  {
    title: 'Organ Damage',
    text: 'Blunt force trauma in accidents can result in internal injuries, like damage to the liver or lungs, which often require immediate medical intervention.',
  },
  {
    title: 'Soft Tissue Injuries',
    text: 'Soft tissue damage, such as sprains, strains, or deep bruising, is common in car accidents. Whiplash falls under this category, but so do other soft tissue injuries like ligament or tendon damage.',
  },
  {
    title: 'Herniated Discs',
    text: 'The impact from a crash can cause herniated discs and then lead to back pain, numbness, or weakness in the limbs—often requiring medical treatment.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'PTSD From Car Wrecks: The Impact and How to Seek Help', href: '#blog' },
  { title: 'How to Appeal a Car Insurance Decision in Miami', href: '#blog' },
  { title: 'Head-On Collisions: What Victims Need to Know About Their Legal Rights', href: '#blog' },
  { title: 'Teen Driving Statistics and Laws: What You Need to Know', href: '#blog' },
  { title: 'How to Sue Someone for Car Damages: A Step-by-Step Guide', href: '#blog' },
  { title: 'Understanding Comparative Fault in Multi-Car Pileups', href: '#blog' },
  { title: 'What Medical Records Matter Most in an Auto Injury Claim', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: "Injured in a Car Accident? Here's What You Need to Do Next", href: '#blog' },
  { title: 'What to Do After a Motorcycle Accident: A Comprehensive Guide', href: '#blog' },
  { title: 'Large Truck Accident Settlements: What Affects the Outcome?', href: '#blog' },
  { title: 'How to Get an Online Traffic Crash Report and How a Lawyer Can Help', href: '#blog' },
  { title: 'Is It Worth Hiring an Attorney for a Car Accident?', href: '#blog' },
  { title: 'Dealing With Uninsured Motorists: A Practical Overview', href: '#blog' },
  { title: 'How Long Do You Have to File a Personal Injury Claim?', href: '#blog' },
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
      "They took care of me, and now we're doing okay. Thank God that I went to Morgan & Morgan.",
    thumbBg: 'linear-gradient(135deg,#cfe8fc,#8ec5f2)',
    thumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&fit=crop',
  },
  {
    name: 'Sean',
    quote:
      'The company handled absolutely everything from start to finish.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop',
  },
]

const faqAside = [
  'How do I know if I have a car accident claim?',
  'What should I do immediately after an auto accident?',
  'How long after a car wreck can I file a car accident claim?',
  'How long does it take to resolve a car accident lawsuit?',
  'Why should I hire a car accident attorney at Morgan & Morgan?',
  'How much does it cost to hire Morgan & Morgan?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a car accident claim?',
    paragraphs: [
      'You may have a claim if another party owed you a duty of care on the road, breached that duty, and caused you to suffer injuries or financial losses.',
      'Evidence like a police report, photos, witness statements, and medical documentation can help connect the crash to your damages. Every case is different, so speaking with an attorney is the best way to evaluate your situation.',
    ],
  },
  {
    q: 'What should I do immediately after an auto accident?',
    paragraphs: [
      'Collect information from the other driver—including name, contact details, license plate, and insurance—while remaining polite and avoiding discussions about fault.',
      'Take photos or video of the scene, vehicle damage, skid marks, traffic signs, and road conditions. If there are witnesses, ask for their contact information.',
      'Seek medical attention even if you feel fine. Some injuries are not immediately obvious, and prompt care creates a record that you took the incident seriously.',
      'Report the accident to your insurance provider as soon as you can. Stick to the facts, avoid admitting fault, and consider consulting an attorney before giving a recorded statement.',
    ],
  },
  {
    q: 'How long after a car wreck can I file a car accident claim?',
    paragraphs: [
      'Deadlines—called statutes of limitations—vary by state and by the type of claim. Missing the deadline can bar you from recovering compensation.',
      'Because evidence and memories fade quickly, it is wise to act as soon as possible after a crash. An attorney can identify the correct filing timeline for your case.',
    ],
  },
  {
    q: 'How long does it take to resolve a car accident lawsuit?',
    paragraphs: [
      'Some cases settle in months; others take longer if liability is disputed, injuries are complex, or litigation is required.',
      'Your attorney should keep you informed at each stage and help you weigh settlement offers against the risks and timeline of trial.',
    ],
  },
  {
    q: 'Why should I hire a car accident attorney at Morgan & Morgan?',
    paragraphs: [
      'Our firm focuses on injury cases at scale, with the resources to investigate thoroughly, retain experts when needed, and push back against lowball insurance tactics.',
      'We handle the paperwork, deadlines, and negotiations so you can prioritize healing—while we fight for the compensation you may be entitled to under the law.',
    ],
  },
  {
    q: 'How much does it cost to hire Morgan & Morgan?',
    paragraphs: [
      'The Fee Is Free® means you pay nothing upfront and owe no attorney fees unless we win your case.',
      'During a free case evaluation, we can explain how our fee structure applies to your specific situation.',
    ],
  },
  {
    q: 'What sort of compensation can I recover for a car accident claim?',
    paragraphs: [
      'Depending on your injuries and state law, you may pursue compensation for medical bills, future medical care, lost wages, reduced earning capacity, pain and suffering, and property damage.',
      'An attorney can help document these losses and identify all available sources of coverage—including your own policy when appropriate.',
    ],
  },
  {
    q: 'Do I need to hire a lawyer for a minor car accident?',
    paragraphs: [
      'Even “minor” crashes can cause injuries that appear later, and insurance companies may still dispute fault or the extent of damages.',
      'Speaking with a lawyer does not mean you must file a lawsuit; it can simply help you understand your rights and avoid accepting a settlement that does not cover your true costs.',
    ],
  },
  {
    q: 'What are the common causes or types of car accidents?',
    paragraphs: [
      'Common causes include distracted driving, speeding, impairment, tailgating, failure to yield, and unsafe lane changes.',
      'Accident types often include rear-end collisions, side-impact (T-bone) crashes, head-on collisions, multi-vehicle pileups, and hit-and-run incidents—each with different liability and evidence considerations.',
    ],
  },
]
</script>
