<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Medical Malpractice"
      title="Medical Malpractice Lawyers"
      lead="When healthcare providers fail to meet standards of care, our medical malpractice attorneys fight for the compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Medical Malpractice Attorneys"
      intro="When healthcare providers fail to meet standards, lives are impacted. Our medical malpractice lawyers are here to fight for the compensation you deserve."
      :lawyers="lawyers"
      aria-label="Medical malpractice attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="malpractice-diff-heading"
      title="Morgan & Morgan's Medical Malpractice Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Medical Malpractice"
      aria-label="Medical malpractice verdicts and settlements"
    />

    <PracticeAreaWaysHelp :items="waysHelp" />

    <PracticeAreaClaimCopy
      heading-id="malpractice-claim-heading"
      title="How do I know if I have a medical malpractice claim?"
      :paragraphs="claimParagraphs"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Medical malpractice cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaGuidePromo
      heading-id="doctor-guide-heading"
      title="What to Do if You've Been Hurt by a Doctor"
      description="If a doctor's negligence caused your injury, take action. Learn the key steps to protect your rights and pursue the compensation you deserve."
      link-label="See guide"
      link-href="#guide"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Medical Malpractice" />

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
      region-label="Medical malpractice frequently asked questions"
      :reviewed-by="{ name: 'Jack T. Cook', date: 'February 19, 2025' }"
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
  title: 'Medical Malpractice Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our medical malpractice attorneys, explore case results, and learn your legal options after a healthcare injury. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'John Morgan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Matt Morgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Michael David Marrese', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'David G. Henry', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$37,850,000', location: 'Tampa, FL • 2006', type: 'Medical Malpractice' },
  { amount: '$28,450,105', location: 'Tampa, FL • 2011', type: 'Medical Malpractice' },
  { amount: '$27,000,000', location: 'Orlando, FL • 2025', type: 'Medical Malpractice' },
  { amount: '$19,500,000', location: 'Jacksonville, FL • 2018', type: 'Medical Malpractice' },
  { amount: '$14,200,000', location: 'Miami, FL • 2020', type: 'Medical Malpractice' },
  { amount: '$11,750,000', location: 'Nashville, TN • 2022', type: 'Medical Malpractice' },
]

const waysHelp: IconCard[] = [
  {
    title: 'Dental Malpractice',
    text: 'When dental errors cause pain or lasting harm, our medical malpractice lawyers are here to fight for the compensation you deserve.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20c0-4 3-8 8-8s8 4 8 8v4c0 6-4 12-8 12s-8-6-8-12v-4z"/><path d="M20 28h8"/></svg>`,
  },
  {
    title: 'Birth Injury',
    text: 'When medical negligence during childbirth causes harm to a newborn or mother, our attorneys fight to hold healthcare providers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="5"/><path d="M14 38c0-6 4-10 10-10s10 4 10 10"/><path d="M20 22h8"/></svg>`,
  },
  {
    title: 'Chiropractor',
    text: 'From improper adjustments to negligent treatment, our medical malpractice lawyers fight for those harmed by chiropractic care gone wrong.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8v32M16 16h16M18 32h12"/></svg>`,
  },
  {
    title: 'Anesthesia Errors',
    text: 'Mistakes in administering anesthesia can lead to serious harm. Our attorneys are here to help you pursue compensation for these critical errors.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8h8l4 32H16l4-32z"/><path d="M22 20h4"/></svg>`,
  },
  {
    title: 'Misdiagnosis',
    text: 'When misdiagnoses or delayed diagnoses cause harm, our lawyers hold providers accountable and fight for the compensation you deserve.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20c6-8 18-8 24 0"/><circle cx="18" cy="28" r="6"/><circle cx="30" cy="28" r="6"/><path d="M24 34v6"/></svg>`,
  },
  {
    title: 'Pharmacy and Medication Errors',
    text: 'When mistakes with prescriptions or dosages cause harm, we fight to hold pharmacies and healthcare providers accountable for their negligence.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="10" width="20" height="28" rx="3"/><path d="M18 18h12M24 10v8"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Settle for Medical Errors",
    text: 'Hospitals and insurers fight hard to limit payouts. We investigate, build strong cases, and push back for the full value of your medical malpractice claim.',
  },
  {
    title: 'Covering All Types of Medical Malpractice Cases',
    text: 'From surgical errors and misdiagnosis to birth injuries and medication mistakes, we hold negligent providers accountable across all malpractice claims.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: '35+ years of experience, $30+ billion recovered, and 1,000+ attorneys nationwide. Our trial-ready reputation means insurers know we do not back down.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'Get attorneys, investigators, and medical experts on your side. Free reviews, 24/7 support, and The Fee Is Free®—you pay nothing unless we win.',
  },
]

const claimParagraphs = [
  'You may have a medical malpractice claim if a doctor, hospital, or other healthcare provider failed to provide proper care and you were injured as a result. Medical malpractice can occur when a medical professional\'s negligence leads to issues such as misdiagnosis, surgical errors, medication mistakes, or delayed treatment.',
  'In most cases, a claim requires three key elements: a healthcare provider failed to meet the accepted standard of care, you suffered damages, and there is evidence linking the provider\'s actions to your injury. Evidence may include medical records, expert medical opinions, treatment history, and documentation of the harm you experienced.',
  'If these factors are present, you may be able to recover compensation for medical expenses, lost wages, ongoing treatment, and other related losses. Because medical malpractice claims often involve complex evidence and strict deadlines, it is important to act quickly. Contact a medical malpractice lawyer at Morgan & Morgan for a free case evaluation to learn about your legal options.',
]

const lawsuitReqs = ['Injury or damages', 'Breach of care', 'Direct connection']

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
      'We built this firm for the people—not the powerful. If you have been hurt, we want to hear your story and help you understand your legal options at no upfront cost.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'When hospitals and insurers push back, our team brings the resources and trial experience needed to fight for full and fair compensation.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Improper Medical Treatment: What Are Your Legal Options?', href: '#blog' },
  { title: 'MRSA Infections: Causes, Risks, and Legal Options', href: '#blog' },
  {
    title: 'Can You Sue a Doctor for Negligence? Everything You Need to Know About Medical Malpractice',
    href: '#blog',
  },
  { title: 'When Dental Work Goes Wrong: Can You Hold Your Dentist Accountable?', href: '#blog' },
  { title: 'Surgical Errors: When Medical Mistakes Put Patients at Risk', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'How to Prove Medical Negligence in a Malpractice Lawsuit', href: '#blog' },
  { title: 'Hospital Negligence: When Facilities Can Be Held Liable', href: '#blog' },
  { title: 'Birth Injury Claims: Understanding Your Legal Rights', href: '#blog' },
  { title: 'Medication Errors: How Pharmacy Mistakes Lead to Lawsuits', href: '#blog' },
  { title: 'Statute of Limitations for Medical Malpractice by State', href: '#blog' },
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
  'How do I know if I have a medical malpractice claim?',
  'What should I do if I suspect medical malpractice?',
  'How long do I have to file a medical malpractice claim?',
  'How long does it take to resolve a medical malpractice claim?',
  'Why should I hire Morgan & Morgan?',
  'How much does it cost to hire Morgan & Morgan?',
]

const faqItems: FaqItem[] = [
  {
    q: 'How do I know if I have a medical malpractice claim?',
    paragraphs: [
      'You may have a claim if a healthcare provider failed to meet the accepted standard of care and you suffered injury or financial harm as a result.',
      'An attorney can review medical records and help determine whether negligence caused your damages.',
    ],
  },
  {
    q: 'What should I do if I suspect medical malpractice?',
    paragraphs: [
      'Seek appropriate medical care, request copies of your records, document symptoms and treatments, and avoid signing releases from insurers or facilities without legal advice.',
      'Contact Morgan & Morgan for a free case evaluation as soon as possible.',
    ],
  },
  {
    q: 'How long do I have to file a medical malpractice claim?',
    paragraphs: [
      'Statutes of limitations vary by state and may include special rules for minors or discovery of harm. Missing the deadline can bar your claim.',
    ],
  },
  {
    q: 'How long does it take to resolve a medical malpractice claim?',
    paragraphs: [
      'Timelines depend on case complexity, expert review, and whether the case settles or goes to trial. Your legal team should explain milestones along the way.',
    ],
  },
  {
    q: 'Why should I hire Morgan & Morgan?',
    paragraphs: [
      'We are America’s largest injury law firm, with resources to retain medical experts, investigate thoroughly, and take cases to trial when insurers refuse fair offers.',
    ],
  },
  {
    q: 'How much does it cost to hire Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'Can I switch to different lawyers during my case?',
    paragraphs: [
      'You generally have the right to change counsel, though timing and court approval may matter. Speak with our team about transitioning your case if you are unhappy with current representation.',
    ],
  },
  {
    q: 'Can I sue for medical malpractice if the error did not cause permanent injury?',
    paragraphs: [
      'Yes. Serious but non-permanent harm—including pain, additional treatment, lost wages, and emotional distress—may still support a viable claim depending on the facts and state law.',
    ],
  },
  {
    q: 'What sort of compensation can I receive for a medical malpractice claim?',
    paragraphs: [
      'You may recover past and future medical expenses, lost income, diminished earning capacity, pain and suffering, and other damages allowed under your state’s laws.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for medical malpractice victims.'],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical experts who analyze records and support your claim.',
    ],
  },
  {
    q: 'Is there a maximum amount that can be recovered in these claims?',
    paragraphs: [
      'Some states cap certain damages in medical malpractice cases. An attorney can explain how caps may apply to your situation.',
    ],
  },
  {
    q: 'How is medical malpractice different from other personal injury cases?',
    paragraphs: [
      'Malpractice claims require proof that a healthcare provider breached the standard of care and that the breach caused harm—often with expert testimony and complex medical records.',
    ],
  },
  {
    q: 'What evidence is needed to prove medical malpractice?',
    paragraphs: [
      'Evidence typically includes medical records, expert opinions, treatment timelines, and documentation of damages such as bills, lost wages, and ongoing care needs.',
    ],
  },
  {
    q: 'Can I sue a hospital for medical malpractice?',
    paragraphs: [
      'Often yes. Hospitals may be liable for negligence by employees, unsafe policies, or systemic failures, in addition to claims against individual providers.',
    ],
  },
  {
    q: 'What’s the process for settling a medical malpractice case out of court?',
    paragraphs: [
      'After investigation and demand, parties negotiate based on liability, damages, and expert input. Your attorney should advise whether a settlement offer is fair before you accept.',
    ],
  },
  {
    q: 'What should I expect during a medical malpractice trial?',
    paragraphs: [
      'Trials involve jury selection, opening statements, expert testimony, cross-examination, and closing arguments. Your attorney will prepare you for each stage and explain likely timelines.',
    ],
  },
  {
    q: "What's the role of expert witnesses in medical malpractice cases?",
    paragraphs: [
      'Qualified medical experts explain whether care fell below the standard expected and how that failure caused your injuries—often a critical part of proving malpractice.',
    ],
  },
  {
    q: 'What happens if a doctor loses a medical malpractice case?',
    paragraphs: [
      'If liable, the doctor or their insurer may pay damages per the verdict or settlement. Outcomes vary by case, coverage, and state rules regarding provider discipline.',
    ],
  },
  {
    q: 'What are the most common defenses against medical malpractice claims?',
    paragraphs: [
      'Defendants often argue the care met the standard of care, another condition caused the harm, or the patient contributed to the outcome. Strong evidence and expert support help counter these defenses.',
    ],
  },
]
</script>
