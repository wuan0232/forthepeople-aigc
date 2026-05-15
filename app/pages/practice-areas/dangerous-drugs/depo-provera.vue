<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Depo-Provera"
      title="Depo-Provera Lawyers"
      lead="If you used Depo-Provera and were later diagnosed with meningioma or other serious complications, our attorneys can help you understand your legal options—with no upfront cost."
      :breadcrumb-items="breadcrumbItems"
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Depo-Provera Lawsuit Attorneys"
      intro="Our attorneys manage every aspect of your case—from investigating manufacturer liability to gathering medical records—so you can focus on your health and your family."
      :lawyers="lawyers"
      ariaLabel="Depo-Provera lawsuit attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="depo-diff-heading"
      title="Morgan & Morgan's Depo-Provera Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaGuidePromo
      heading-id="depo-guide-heading"
      title="Worried About Complications from Depo-Provera?"
      description="Take our short quiz to see if you may have a case and learn what steps to take next."
      link-label="Get Started"
      link-href="#contact"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <PracticeAreaCardGrid
      heading-id="depo-case-heading"
      title="Do I Have a Case?"
      :items="caseCriteria"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <SiteLeadFeeSection preset-case-type="Depo-Provera" />

    <PracticeAreaTakeaways
      heading-id="depo-comp-heading"
      title="What Compensation May Cover"
      :blocks="compensationBlocks"
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
      region-label="Depo-Provera frequently asked questions"
      :reviewed-by="{ name: 'Michael Goetz', date: 'May 22, 2025' }"
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
  PracticeAreaBreadcrumbItem,
  StatItem,
  TextBlock,
} from '~/types/practice-area'

useHead({
  title: 'Depo-Provera Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our Depo-Provera lawsuit attorneys, learn if you may have a meningioma claim, and explore your legal options. Free case evaluation.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Dangerous Drugs', to: '/practice-areas/dangerous-drugs' },
  { label: 'Depo-Provera', strong: true },
]

const lawyers = [
  { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Jonathan M. Sedgh', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Michael Goetz', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Hold Manufacturers Accountable for Harm',
    text: 'When a widely used contraceptive is linked to serious brain tumors, companies may try to limit liability. We step in to hold manufacturers accountable and fight for full recovery.',
  },
  {
    title: 'Covering All Types of Depo-Provera Cases',
    text: 'Whether you received injections for months or years, were diagnosed with meningioma, or are still undergoing treatment, we represent individuals harmed by Depo-Provera across the country.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With over 35 years of experience and billions recovered, Morgan & Morgan brings more than 1,000 trial-ready attorneys who know how to win complex pharmaceutical cases.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You receive full, expert-backed legal support, a free case review, and The Fee Is Free®—you pay nothing unless we win your case.',
  },
]

const caseCriteria: IconCard[] = [
  {
    title: 'Prolonged use of Depo-Provera',
    text: 'You received Depo-Provera injections over an extended period and later experienced serious health complications.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8v24M14 14h12M12 28h16"/><rect x="16" y="4" width="8" height="6" rx="1"/></svg>`,
  },
  {
    title: 'Diagnosed with Meningioma',
    text: 'You or a loved one were diagnosed with meningioma or another brain tumor after using Depo-Provera.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><circle cx="20" cy="18" r="10"/><path d="M12 30c2-4 6-6 8-6s6 2 8 6"/></svg>`,
  },
  {
    title: 'Current or prior representation',
    text: 'Even if another firm declined your case, we may still be able to help—contact us for a free, confidential review.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 30V14l10-6 10 6v16"/><path d="M16 30V22h8v8"/><path d="M14 18h12"/></svg>`,
  },
]

const compensationBlocks: TextBlock[] = [
  {
    title: 'Medical Expenses',
    text: 'Past and future medical bills, including surgery, imaging, hospital stays, and ongoing neurologic care related to your injury.',
  },
  {
    title: 'Lost Wages and Diminished Earning Capacity',
    text: 'Income you lost while recovering and compensation when your injury limits your ability to work in the future.',
  },
  {
    title: 'Pain and Suffering',
    text: 'Physical pain, emotional distress, and the impact on your quality of life caused by complications from Depo-Provera.',
  },
  {
    title: 'Future Care and Rehabilitation',
    text: 'Long-term treatment, therapy, and support services you may need after a meningioma or related diagnosis.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Depo-Provera Lawsuit Updates: What Plaintiffs Need to Know', href: '#blog' },
  { title: 'Understanding Meningioma After Long-Term Depo-Provera Use', href: '#blog' },
  { title: 'Brain Tumors and Depo-Provera: Research and Legal Claims', href: '#blog' },
  { title: 'How to Document Your Depo-Provera Injection History for a Claim', href: '#blog' },
  { title: 'Pfizer Depo-Provera Litigation: Failed Warning Allegations Explained', href: '#blog' },
  { title: 'Statute of Limitations in Dangerous Drug Injury Cases', href: '#blog' },
  { title: 'What Medical Imaging Shows in Meningioma Claims', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: "Injured After Using Depo-Provera? Here's What to Do Next", href: '#blog' },
  { title: 'What Compensation May Be Available in a Depo-Provera Settlement', href: '#blog' },
  { title: 'Can You Sue Years After Stopping Depo-Provera?', href: '#blog' },
  { title: 'Depo-Provera Side Effects That May Support Legal Action', href: '#blog' },
  { title: 'Is It Worth Hiring an Attorney for a Depo-Provera Lawsuit?', href: '#blog' },
  { title: 'How Morgan & Morgan Handles Pharmaceutical Mass Tort Cases', href: '#blog' },
  { title: 'Dangerous Drug Claims vs. Class Actions: What You Need to Know', href: '#blog' },
]

const stats: StatItem[] = [
  { k: '$30 BILLION', v: 'Recovered for clients nationwide' },
  { k: '700,000+', v: 'Clients and families served' },
  { k: '1,000+', v: 'Attorneys across the country' },
  { k: '1', v: 'Click may change your life' },
]

const partners: PartnerSlide[] = [
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'When a drug puts patients at risk, families deserve answers and accountability. We fight to make sure corporations cannot hide from the harm they cause.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
  {
    name: 'Michael Goetz',
    role: 'Partner, Morgan & Morgan',
    quote:
      'Depo-Provera cases require medical experts and relentless advocacy—we bring both to every claim we handle.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=85&fit=crop',
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
    name: 'Maria',
    quote:
      'From the first call, they explained my options clearly. I never felt rushed or pushed into a decision I was not ready to make.',
    thumbBg: 'linear-gradient(135deg,#d4e8f7,#9ec9ef)',
    thumb: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&fit=crop',
  },
]

const faqAside = [
  'What Is Depo-Provera?',
  'What are the potential health risks linked to Depo-Provera?',
  'Can I sue if I experienced a brain tumor after using Depo-Provera?',
  'Is Depo-Provera involved in any lawsuits or class action cases?',
  'What side effects from Depo-Provera might qualify for legal action?',
  'How do I know if Depo-Provera caused my medical condition?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What Is Depo-Provera?',
    paragraphs: [
      'Depo-Provera is an injectable form of birth control containing medroxyprogesterone acetate, typically administered every three months. It has been widely prescribed for decades to prevent pregnancy.',
    ],
  },
  {
    q: 'What are the potential health risks linked to Depo-Provera?',
    paragraphs: [
      'Research and litigation allege that prolonged use of Depo-Provera may be associated with an increased risk of meningioma and other brain tumors, along with other serious complications. If you have concerns about your health after using Depo-Provera, speak with a doctor and consider a free legal review.',
    ],
  },
  {
    q: 'Can I sue if I experienced a brain tumor after using Depo-Provera?',
    paragraphs: [
      'You may have a claim if you used Depo-Provera and were later diagnosed with a brain tumor such as meningioma, especially after long-term use. An attorney can evaluate your medical history, timing of use, and diagnosis to determine whether you may pursue compensation.',
    ],
  },
  {
    q: 'Is Depo-Provera involved in any lawsuits or class action cases? Are there Depo-Provera meningioma lawsuits?',
    paragraphs: [
      'Yes. Lawsuits are being filed alleging that manufacturers failed to adequately warn about the risk of meningioma and other brain tumors linked to long-term Depo-Provera use. Cases may proceed individually or as part of coordinated litigation depending on your jurisdiction and facts.',
    ],
  },
  {
    q: 'What side effects from Depo-Provera might qualify for legal action?',
    paragraphs: [
      'Claims often focus on serious injuries such as meningioma and other brain tumors, but eligibility depends on your diagnosis, duration of use, and state law. A free case evaluation can help clarify whether your specific complications may support a lawsuit.',
    ],
  },
  {
    q: 'How do I know if Depo-Provera caused my medical condition?',
    paragraphs: [
      'Establishing causation usually requires medical records, imaging, expert review, and evidence of Depo-Provera use over time. Our team works with medical professionals to analyze whether your condition may be linked to the drug.',
    ],
  },
  {
    q: 'What compensation can I seek in a Depo-Provera lawsuit settlement?',
    paragraphs: [
      'Depending on your case, you may seek compensation for medical expenses, lost wages, diminished earning capacity, pain and suffering, and future care needs. Settlement amounts vary based on injury severity, treatment costs, and other factors.',
    ],
  },
  {
    q: 'Can I file a claim if I used Depo-Provera years ago but only recently experienced issues?',
    paragraphs: [
      'You may still have options. Many states allow claims when an injury is discovered later, but deadlines vary. Contact us promptly so we can review your timeline and help protect your rights.',
    ],
  },
  {
    q: 'How long do I have to file a Depo-Provera-related injury claim?',
    paragraphs: [
      'Statutes of limitations differ by state and may depend on when you discovered or should have discovered your injury. Missing a deadline can bar your claim, so early legal advice is important.',
    ],
  },
  {
    q: 'What should I do if I believe Depo-Provera caused long-term health effects?',
    paragraphs: [
      'Seek appropriate medical care, keep copies of records and imaging, document your injection history, and avoid signing releases from insurers or manufacturers without legal advice. Then contact Morgan & Morgan for a free case review.',
    ],
  },
  {
    q: 'Is there evidence that Pfizer, the maker of Depo-Provera, failed to warn patients?',
    paragraphs: [
      'Plaintiffs in ongoing litigation allege that Pfizer and related entities did not adequately warn patients and providers about brain tumor risks associated with prolonged use. Evidence in any case depends on medical records, regulatory history, and expert analysis.',
    ],
  },
  {
    q: 'What medical records or documentation will I need to support my case?',
    paragraphs: [
      'Helpful documents may include pharmacy records, injection dates, physician notes, MRI or CT reports, pathology results, treatment plans, and billing records. Our team can guide you on what to gather during your free evaluation.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation about a Depo Provera lawsuit?',
    paragraphs: [
      'No. Morgan & Morgan offers a free, no-obligation case evaluation for individuals who believe they were harmed by Depo-Provera.',
    ],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical experts who review records and build your claim. We assign professionals experienced in complex pharmaceutical litigation.',
    ],
  },
  {
    q: 'When do I meet with my lawyer?',
    paragraphs: [
      'After you contact us, we schedule a consultation to discuss your use of Depo-Provera, your diagnosis, and next steps. You will have opportunities to speak with your legal team as your case progresses.',
    ],
  },
  {
    q: 'How much does it cost to hire Morgan & Morgan for Depo-Provera cases?',
    paragraphs: [
      'There are no upfront fees. With The Fee Is Free®, you pay nothing unless we win your case. Attorney fees and costs are handled on a contingency basis as allowed by your agreement.',
    ],
  },
  {
    q: 'Why should I hire an attorney at Morgan & Morgan to file a Depo Provera Lawsuit?',
    paragraphs: [
      'We are America’s largest injury law firm, with the resources to take on major pharmaceutical companies, retain medical experts, and pursue full compensation through settlement or trial. Our attorneys have decades of experience fighting for people harmed by dangerous drugs.',
    ],
  },
]
</script>
