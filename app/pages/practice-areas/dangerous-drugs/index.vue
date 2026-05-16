<template>
  <PracticeAreaPage class="ca-dangerous-drugs-page">
    <PracticeAreaHero
      breadcrumb-label="Dangerous Drugs"
      title="Dangerous Drugs Lawyers"
      lead="When pharmaceutical companies put profits ahead of patient safety, our attorneys fight for families harmed by dangerous medications."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Dangerous Drug Attorneys"
      intro="Our experienced attorneys handle every aspect of your case, fighting for justice and fair compensation while you focus on recovery and your well-being."
      :lawyers="lawyers"
      ariaLabel="Dangerous drug attorneys"
      centered
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaWaysHelp
      heading-id="dd-pharma-heading"
      title="Areas of Pharmaceutical Negligence"
      :items="pharmaAreas"
    />

    <PracticeAreaTestimonials
      :clients="clients"
      disclaimer="Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews."
    />

    <PracticeAreaLawsuit
      heading-id="dd-lawsuit-heading"
      title="Dangerous drug cases need three things."
      :requirements="lawsuitReqs"
      link-label="Learn more"
    />

    <PracticeAreaGuidePromo
      heading-id="dd-guide-heading"
      title="Take Action Against Dangerous Drugs"
      description="Learn the risks of dangerous drugs, how to identify harmful side effects, and what legal options are available if a defective medication has harmed you."
      link-label="View guide"
      link-href="#guide"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="dd-diff-heading"
      title="Morgan & Morgan's Dangerous Drugs Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Dangerous Drugs" />

    <PracticeAreaCardGrid
      heading-id="dd-injuries-heading"
      title="Dangerous Drug Injuries"
      :items="injuryCards"
    />

    <PracticeAreaLearnMore
      title="Learn More"
      intro="Injured and not sure what to do next? We'll guide you through everything you need to know."
      :left-links="learnLeft"
      :right-links="learnRight"
      :initial-count="5"
    />

    <PracticeAreaFaq
      layout="46"
      :aside-questions="faqAside"
      :items="faqItems"
      region-label="Dangerous drugs frequently asked questions"
      :reviewed-by="{ name: 'Michael Goetz', date: 'February 26, 2025' }"
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
// @ts-ignore - large data URI constants are exported from this file
import { TESTIMONIAL_THUMB_2, TESTIMONIAL_THUMB_3 } from '~/constants/testimonial-thumbs'

useHead({
  title: 'Dangerous Drugs Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our dangerous drug attorneys, learn key takeaways after a medication injury, and explore your legal options. Free case evaluation.',
    },
  ],
})

const lawyers = [
  // { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Paul Pennock', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Jonathan M. Sedgh', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Andrew Parker Felix', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
]

const takeaways: TextBlock[] = [
  {
    title: 'Dangerous Drugs Can Cause Serious Harm',
    text: 'Some prescription and over-the-counter medications cause serious injuries because of defective formulations, manufacturing errors, or failure to warn patients of known risks.',
  },
  {
    title: 'Drug Makers Must Disclose Known Risks',
    text: 'Pharmaceutical companies have a legal duty to warn patients and physicians about all known side effects and may be held liable when they fail to do so.',
  },
  {
    title: 'Injuries From Drugs Can Be Long-Lasting',
    text: 'Victims of dangerous drugs often suffer serious complications, chronic health conditions, or life-altering side effects that require ongoing medical treatment and care.',
  },
  {
    title: 'Get a Free Evaluation of Your Drug Injury Claim',
    text: 'If a medication caused you harm, contact Morgan & Morgan for a free case evaluation to find out if you have a valid claim against the manufacturer.',
  },
]

const pharmaAreas: IconCard[] = [
  {
    title: 'Testing and Approval',
    text: 'Inadequate testing or rushed approvals can let harmful drugs reach the market. Our dangerous drug lawyers hold manufacturers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="24" cy="38" rx="14" ry="4"/><path d="M18 34V14l6-4 6 4v20"/><circle cx="24" cy="10" r="3"/><path d="M14 22h6M17 18v8"/></svg>`,
  },
  {
    title: 'Manufacturing and Distribution',
    text: 'Contamination or errors in production can harm medication safety. Our attorneys uncover negligence and seek fair compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 36h32V20l-8-8H16l-8 8v16z"/><path d="M16 12V8h16v4"/><path d="M12 28h24"/><path d="M18 24v8h12v-8"/></svg>`,
  },
  {
    title: 'Prescription Errors',
    text: 'Prescription errors can cause dangerous side effects or misuse. Our team fights for justice when healthcare providers make harmful mistakes.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="8" width="20" height="32" rx="3"/><path d="M20 16h8M20 22h8M20 28h6"/><path d="M26 34l6 6"/></svg>`,
  },
  {
    title: 'Undisclosed Side Effects',
    text: 'Severe side effects can have life-altering impacts, especially if undisclosed. Our team holds manufacturers accountable for failing to warn patients.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="8" width="24" height="32" rx="2"/><path d="M18 18h12M18 24h10"/><path d="M28 32l4 4"/><circle cx="22" cy="34" r="2" fill="currentColor"/></svg>`,
  },
  {
    title: 'Labels and Warnings',
    text: 'Misleading labels can hide dangers, leaving patients at risk. Our attorneys fight for those harmed by inadequate warnings and misinformation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8L8 38h32L24 8z"/><path d="M24 16v14M24 34v2"/></svg>`,
  },
  {
    title: 'Off-Label Use',
    text: 'Off-label drug use can cause unforeseen harm. Our lawyers advocate for victims, holding prescribers and manufacturers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="14" r="6"/><path d="M12 40c2-10 8-14 12-14s10 4 12 14"/><rect x="30" y="8" width="10" height="14" rx="1"/><path d="M32 12h6M32 16h6"/></svg>`,
  },
]

const lawsuitReqs = ['Injury or damages', 'Defective drug or negligence', 'Causation']

const differenceBlocks: TextBlock[] = [
  {
    title: 'Holding Drug Manufacturers Accountable',
    text: 'When a medication causes harm rather than healing, manufacturers and insurers often try to minimize their responsibility. We build strong cases to fight for full justice and compensation.',
  },
  {
    title: 'Covering All Types of Dangerous Drug Cases',
    text: 'From prescription painkillers and anticoagulants to weight-loss drugs, hormonal therapies, vaccines, and off-label uses, we handle all types of claims where medication harmed lives.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years of experience, over $30 billion recovered nationwide, and a team of trial-ready attorneys nationwide, Morgan & Morgan has the strength to take on large pharmaceutical companies.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You will receive full legal support, including attorneys, investigators, medical and drug-safety experts, with a free review and our Fee Is Free® promise: you pay nothing unless we win.',
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
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      "You followed the doctor's orders. The drug did damage instead of healing. If a medication hurt you, we'll help you fight for accountability—and the justice you need to move forward.",
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'Dangerous drug cases demand thorough investigation into labeling, clinical data, and manufacturer conduct—we pursue every avenue available under the law.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
]

/** Same grid/card shell as Depo-Provera “Do I Have a Case?” (`PracticeAreaCardGrid` / `.ca-places-wrap`). */
const injuryCards: IconCard[] = [
  {
    title: 'Organ Damage',
    text: 'Some medications can cause severe damage to organs like the liver, kidneys, or heart, especially if taken over an extended period or at improper dosages.',
    icon: '',
  },
  {
    title: 'Allergic Reactions',
    text: 'Unanticipated allergic reactions can result in rashes, swelling, breathing difficulties, or even life-threatening anaphylaxis.',
    icon: '',
  },
  {
    title: 'Birth Defects',
    text: 'Certain drugs, when taken during pregnancy, can harm fetal development, leading to birth defects or developmental disorders.',
    icon: '',
  },
  {
    title: 'Neurological Damage',
    text: 'Some medications can cause nerve damage or neurological conditions, such as seizures, memory loss, or cognitive impairments.',
    icon: '',
  },
  {
    title: 'Addiction and Dependency',
    text: 'Drugs with addictive properties, like opioids, can lead to dependency, long-term health issues, or even fatal overdoses when improperly prescribed or marketed.',
    icon: '',
  },
  {
    title: 'Cancer or Long-Term Illnesses',
    text: 'Medications contaminated with carcinogens or linked to cancer risks can lead to devastating, life-altering diagnoses for patients.',
    icon: '',
  },
  {
    title: 'Cardiovascular Injuries',
    text: 'Some medications increase the risk of heart attacks, strokes, and other cardiovascular issues. We help victims hold pharmaceutical companies accountable for dangerous side effects.',
    icon: '',
  },
  {
    title: 'Gastrointestinal Injuries',
    text: 'Certain drugs can cause severe digestive issues, including gastroparesis, ulcers, and kidney disease. We fight for those harmed by medications that damage the gastrointestinal system.',
    icon: '',
  },
  {
    title: 'Blood-Related Injuries',
    text: 'Some medications can lead to serious blood conditions like deep vein thrombosis (DVT) and pulmonary embolism (PE), increasing the risk of life-threatening complications. We help victims seek justice.',
    icon: '',
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
    thumb: TESTIMONIAL_THUMB_2,
  },
  {
    name: 'Sean',
    quote:
      'After my diagnosis I was overwhelmed. My attorney handled the legal process so I could focus on treatment and my family.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: TESTIMONIAL_THUMB_3,
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Research Shows Weight Loss Drugs Like Ozempic Have Unannounced Risks', href: '#blog' },
  { title: 'Have You or a Loved One Suffered After Taking Actemra?', href: '#blog' },
  { title: 'Patients Sickened by Contaminated Steroid Injections', href: '#blog' },
  { title: 'Did You Develop Nerve Damage After Taking Levaquin or Cipro?', href: '#blog' },
  { title: 'Darvon and Darvocet Recall', href: '#blog' },
  { title: 'Z-Pak Cardiac Deaths', href: '#blog' },
  { title: 'Legal Concerns Over Gadolinium Contrast Agents', href: '#blog' },
  { title: 'Viagra Skin Cancer Lawsuits', href: '#blog' },
  { title: 'Weight Loss Drugs Linked to Stomach Paralysis', href: '#blog' },
  {
    title: 'Meet Our Attorneys: Fighting for Justice in the Depo-Provera Brain Tumor Case',
    href: '/practice-areas/dangerous-drugs/depo-provera',
  },
]

const learnRight: LearnLink[] = [
  { title: 'Prozac Birth Defects', href: '#blog' },
  { title: 'Yasmin and Yaz Lawyers', href: '#blog' },
  { title: 'Victoza Lawsuits: You Should Have Been Warned', href: '#blog' },
  { title: 'Zoloft Birth Defects', href: '#blog' },
  { title: 'SSRI Birth Defects', href: '#blog' },
  { title: 'Invokana Ketoacidosis Lawsuit', href: '#blog' },
  { title: 'Trulicity Lawsuits: What You Need to Know About Dulaglutide Injuries', href: '#blog' },
  { title: 'Zicam Lawsuits', href: '#blog' },
  { title: 'Reglan Tardive Dyskinesia Lawsuits', href: '#blog' },
  { title: 'Does Taxotere Cause Hair Loss?', href: '#blog' },
]

const faqAside = [
  'What should I do after experiencing harm from a drug?',
  'What are the common side effects of dangerous drugs?',
  'What are commonly litigated dangerous drugs and their associated risks?',
  'What are the long-term effects of dangerous drugs on my health and lifestyle?',
  'How can a dangerous drug lawyer strengthen my defective drug case?',
  'What types of drugs are most commonly involved in injury claims?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do after experiencing harm from a drug?',
    paragraphs: [
      'Seek medical attention right away and follow your doctor’s plan. Keep all prescriptions, pharmacy records, and instructions; document symptoms and missed work; and avoid signing releases from insurers or manufacturers without speaking to an attorney. Contact Morgan & Morgan for a free case evaluation.',
    ],
  },
  {
    q: 'What are the common side effects of dangerous drugs?',
    paragraphs: [
      'Side effects vary by drug but may include organ damage, cardiovascular events, neurological symptoms, severe gastrointestinal issues, blood clots, allergic reactions, dependency, or complications disclosed—or allegedly under-disclosed—by manufacturers.',
    ],
  },
  {
    q: 'What are commonly litigated dangerous drugs and their associated risks?',
    paragraphs: [
      'Litigation has involved many medication categories, including opioids, diabetes and weight-loss drugs, contraceptives linked to tumors, SSRIs tied to birth defects, and drugs recalled for contamination or undisclosed risks. Eligibility depends on your medication, injury, and state law.',
    ],
  },
  {
    q: 'What are the long-term effects of dangerous drugs on my health and lifestyle?',
    paragraphs: [
      'Long-term harm may include chronic pain, disability, need for ongoing treatment, lost earning capacity, and reduced quality of life. Your claim may seek compensation for these lasting impacts when tied to a defective or improperly warned drug.',
    ],
  },
  {
    q: 'How can a dangerous drug lawyer strengthen my defective drug case?',
    paragraphs: [
      'An attorney gathers medical and pharmacy records, consults experts on causation and labeling, identifies responsible parties, navigates statutes of limitations, and negotiates with manufacturers and insurers—or takes the case to trial when necessary.',
    ],
  },
  {
    q: 'What types of drugs are most commonly involved in injury claims?',
    paragraphs: [
      'Claims often involve prescription drugs with alleged inadequate warnings, drugs linked to serious organ or cardiovascular injury, medications tied to cancer or tumors, contaminated products, and widely marketed drugs with emerging safety signals.',
    ],
  },
  {
    q: 'Can I file a lawsuit if I experienced side effects not listed on the medication’s label?',
    paragraphs: [
      'You may still have a claim if you were harmed and the manufacturer failed to adequately warn or study known risks. Labels do not always capture every injury victims suffer; a lawyer can assess whether your facts support legal action.',
    ],
  },
  {
    q: 'How long do I have to file a claim for a dangerous drug injury?',
    paragraphs: [
      'Deadlines vary by state and may depend on when you discovered or should have discovered your injury. Missing a limitation period can bar recovery, so seek legal advice promptly.',
    ],
  },
  {
    q: 'What evidence strengthens my personal injury case against a pharmaceutical company?',
    paragraphs: [
      'Strong evidence can include medical records, imaging, pharmacy logs, prescribing history, FDA communications, scientific literature, expert opinions, and documentation of lost wages and expenses.',
    ],
  },
  {
    q: 'Is it possible to file a claim if I was not the direct purchaser of the medication?',
    paragraphs: [
      'In many situations, injured patients—not only the person who paid—may assert claims when they suffered harm from the drug. Your attorney can explain how your state handles standing and damages.',
    ],
  },
  {
    q: 'What types of compensation can I seek in a dangerous drug lawsuit?',
    paragraphs: [
      'Depending on your case, you may pursue medical expenses, lost income, diminished earning capacity, pain and suffering, and other damages allowed under applicable law.',
    ],
  },
  {
    q: 'How does an attorney prove drug manufacturer liability?',
    paragraphs: [
      'Lawyers may rely on failure-to-warn theories, design or manufacturing defect claims, misrepresentation, violations of regulatory duties, and expert testimony linking the drug to your injury under accepted scientific standards.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation for my defective drug claim?',
    paragraphs: [
      'No. Morgan & Morgan offers free, no-obligation case evaluations for dangerous drug injuries.',
    ],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical or pharmaceutical experts who analyze records and build your claim.',
    ],
  },
  {
    q: 'When do I meet with my dangerous drugs lawyer?',
    paragraphs: [
      'After you reach out, we schedule time to discuss your medication history, injuries, and legal options. You will have ongoing access to your legal team as your case progresses.',
    ],
  },
  {
    q: 'How much does it cost to hire a law firm like Morgan & Morgan for my dangerous drug case?',
    paragraphs: [
      'There are no upfront attorney fees. With The Fee Is Free®, you pay nothing unless we win your case, subject to your written agreement.',
    ],
  },
  {
    q: 'Why should I hire a dangerous drug attorney at Morgan & Morgan?',
    paragraphs: [
      'We are America’s largest injury law firm, with resources to challenge major pharmaceutical companies, retain experts, and pursue full compensation while you focus on your health.',
    ],
  },
]
</script>
