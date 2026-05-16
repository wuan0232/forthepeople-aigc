<template>
  <PracticeAreaPage class="ca-dangerous-drugs-page">
    <PracticeAreaHero
      breadcrumb-label="Weight Loss Drug"
      title="Weight Loss Drug Lawyers"
      lead="If you took a weight loss medication and suffered serious side effects, our attorneys can help you understand your legal options at no upfront cost."
      :breadcrumb-items="breadcrumbItems"
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Weight Loss and Diabetes Drug Attorneys"
      intro="From investigation to resolution, our attorneys handle every aspect of weight loss drug claims. You focus on your health, we'll fight to hold the responsible parties accountable."
      :lawyers="lawyers"
      ariaLabel="Weight loss and diabetes drug attorneys"
      centered
    />

    <PracticeAreaDifference
      heading-id="wld-diff-heading"
      title="Morgan & Morgan's Weight-Loss Drug Lawyers Make the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaCardGrid heading-id="wld-case-heading" title="Do I Have a Case?" :items="caseCriteria">
      <template #after-grid>
        <div id="complaint" class="wl-med-panel">
          <div class="wl-med-panel__head">
            <p class="wl-med-panel__title">Popular Weight Loss Medications:</p>
            <a href="#complaint" class="wl-med-panel__link">Read complaint ›</a>
          </div>
          <div class="wl-med-panel__grid">
            <p v-for="med in popularMeds" :key="med" class="wl-med-panel__item">
              <span class="wl-med-panel__check" aria-hidden="true">✓</span>
              {{ med }}
            </p>
          </div>
        </div>
      </template>
    </PracticeAreaCardGrid>

    <PracticeAreaTestimonials
      :clients="clients"
      disclaimer="Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews."
    />

    <PracticeAreaGuidePromo
      heading-id="wld-guide-heading"
      title="Worried about your medication side effects?"
      description="Take our short quiz to see if you may qualify for a weight loss drug injury claim. It only takes a few minutes and could help you better understand your options."
      link-label="Get Started"
      link-href="#contact"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Weight Loss Drug" />

    <PracticeAreaInjuryTypes
      heading-id="wld-injuries-heading"
      title="Common Injuries Reported"
      :items="injuryItems"
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
      region-label="Weight loss drug frequently asked questions"
      :reviewed-by="{ name: 'Michael Goetz', date: 'March 4, 2025' }"
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
// @ts-ignore - large data URI constants are exported from this file
import { TESTIMONIAL_THUMB_2, TESTIMONIAL_THUMB_3 } from '~/constants/testimonial-thumbs'

useHead({
  title: 'Weight Loss Drug Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our weight loss drug attorneys, learn if you may qualify for a claim, and explore your legal options after medication injuries. Free case evaluation.',
    },
  ],
})

const breadcrumbItems: PracticeAreaBreadcrumbItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Dangerous Drugs', to: '/practice-areas/dangerous-drugs' },
  { label: 'Weight Loss Drug', strong: true },
]

const lawyers = [
  // { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Paul Pennock', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  { name: 'Jonathan M. Sedgh', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Hold Manufacturers Accountable for Harmful Drugs',
    text: 'Manufacturers may downplay or omit serious side effects. We review medical records, warnings, and evidence to demand full compensation when drug use harms you.',
  },
  {
    title: 'Covering All Types of Weight Loss Drugs Cases',
    text: 'Gastrointestinal injuries, vision loss, blindness, gastroparesis, bowel obstruction, or other side effects tied to weight loss drugs—if the medication caused harm, we fight to hold negligent parties accountable.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years, billions recovered, and a nationwide team of attorneys, we bring the trial strength and dedication needed to take on complex drug injury cases.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'With Morgan & Morgan, you get attorneys, drug safety experts, and investigators working for you. Free case review, 24/7 support, and The Fee Is Free®: you pay nothing unless we win.',
  },
]

const caseCriteria: IconCard[] = [
  {
    title: 'Used a weight loss or diabetes medication',
    text: 'If you took a weight loss medication, you may be eligible to file a claim.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><path d="M22 10v16M18 14h8M16 26h8" stroke="#0a1f44" fill="none" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  {
    title: 'Stopped using the medication',
    text: 'Individuals who are no longer taking the drug, due to side effects or medical guidance, may meet criteria for pursuing legal action.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><circle cx="20" cy="20" r="6" fill="#0a1f44"/></svg>`,
  },
  {
    title: 'Suffered a serious injury',
    text: 'If you developed gastroparesis, intestinal blockage, persistent vomiting, gallbladder issues, vision loss, blindness, or another related condition, your injuries may be linked to the medication.',
    icon: `<svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#cfe5fb"/><path d="M14 22h12v8H14v-8zM20 14v8M17 17h6" stroke="#0a1f44" fill="none" stroke-width="2" stroke-linecap="round"/><path d="M24 12l4-2v6h-4v-4z" stroke="#0a1f44" fill="none" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  },
]

/** Four-column grid order: row then column per design */
const popularMeds = ['Ozempic', 'Wegovy', 'Mounjaro', 'Trulicity', 'Rybelsus', 'Saxenda', 'Victoza', 'Zepbound']

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
      "These drugs were sold as life-changing—but for many, they've caused real and lasting harm. If you've suffered because of a weight loss drug, we're here to listen, and to fight to make things right.",
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop',
  },
  {
    name: 'Matt Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'Weight loss drug litigation requires detailed medical analysis and relentless advocacy—we bring both to every client we represent.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
]

const injuryItems: TextBlock[] = [
  {
    title: 'Gastroparesis',
    text: "A condition where the stomach can't empty properly, leading to chronic nausea, vomiting, and malnutrition.",
  },
  {
    title: 'Intestinal Blockage',
    text: 'Obstructions in the intestines can cause life-threatening complications and often require emergency surgery.',
  },
  {
    title: 'Blindness',
    text: 'Some patients have reported sudden or permanent vision loss following extended medication use.',
  },
  {
    title: 'Gallbladder Removal (Pre-2022)',
    text: 'Patients who underwent gallbladder removal may not have been warned about this possible drug-related complication.',
  },
  {
    title: 'Persistent Vomiting',
    text: 'Continuous vomiting, treated at a hospital or emergency room, has led to severe dehydration, hospitalization, and long-term digestive issues.',
  },
  {
    title: "Wernicke's Encephalopathy",
    text: 'A neurological disorder caused by severe vitamin B1 deficiency, leading to confusion, vision issues, and loss of coordination.',
  },
  {
    title: 'Death',
    text: 'In the most tragic cases, complications from undiagnosed or untreated injuries have resulted in loss of life.',
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
      'After complications from my medication, I needed a firm that understood complex drug cases. My attorney explained every step clearly.',
    thumbBg: 'linear-gradient(135deg,#dceefc,#9ec9ef)',
    thumb: TESTIMONIAL_THUMB_3,
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Victoza Lawsuits: You Should Have Been Warned', href: '#blog' },
  { title: 'Wegovy Side Effects: What You Need to Know', href: '#blog' },
  {
    title: 'Rybelsus Lawsuits: Side Effects, Injury Claims, and Your Legal Options',
    href: '#blog',
  },
  { title: 'Weight Loss Drug Lawsuits: What Every Consumer Should Know', href: '#blog' },
  { title: 'Morgan & Morgan Sues Ozempic® and Mounjaro™ Manufacturers', href: '#blog' },
  {
    title:
      'Weight Loss Medications and Vision Loss: What Patients Need to Know About a Potential Link to Blindness',
    href: '#blog',
  },
  { title: 'Mounjaro Lawsuits: Side Effects and Legal Options', href: '#blog' },
  {
    title: 'Ozempic Lawsuits: FDA Warnings, Legal Actions, and What Patients Need to Know',
    href: '#blog',
  },
  { title: 'What You Need to Know About Saxenda and Stomach Paralysis', href: '#blog' },
  { title: 'Diabetes Drug for Weight Loss', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'Saxenda Lawsuits: Side Effects, Legal Options, and Filing a Claim', href: '#blog' },
  {
    title: 'Zepbound Lawsuits: Side Effects, Legal Risks, and How to Get Justice',
    href: '#blog',
  },
  { title: 'Research Shows Weight Loss Drugs Like Ozempic Have Unannounced Risks', href: '#blog' },
  { title: 'Wegovy Lawsuits: Side Effects, Legal Action & Compensation', href: '#blog' },
  {
    title: 'Trulicity Lawsuits: What You Need to Know About Dulaglutide Injuries',
    href: '#blog',
  },
  { title: "What They Didn't Tell You About Rybelsus", href: '#blog' },
  { title: 'Why Ozempic May Be Riskier Than You Think', href: '#blog' },
  { title: 'Mounjaro Side Effects: What You Need to Know', href: '#blog' },
  { title: "Trulicity and Gastroparesis: A Risk You Can't Ignore", href: '#blog' },
  { title: 'Weight Loss Drugs Linked to Stomach Paralysis', href: '#blog' },
]

const faqAside = [
  'What Is Ozempic?',
  'What Is Wegovy?',
  'What Is Saxenda?',
  'What Is Rybelsus?',
  'Is there a cure for gastroparesis?',
  'How does Ozempic affect the body?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What Is Ozempic?',
    paragraphs: [
      'Ozempic® is an FDA-approved prescription medication (semaglutide) used to improve blood sugar in adults with type 2 diabetes. It has also been widely prescribed off-label for weight loss and is linked in litigation to serious gastrointestinal and other complications in some patients.',
    ],
  },
  {
    q: 'What Is Wegovy?',
    paragraphs: [
      'Wegovy® is a higher-dose semaglutide injection FDA-approved for chronic weight management in certain adults and adolescents. Lawsuits allege some patients were not adequately warned about severe side effects.',
    ],
  },
  {
    q: 'What Is Saxenda?',
    paragraphs: [
      'Saxenda® (liraglutide) is an injectable prescription medicine used for weight loss in adults with obesity or excess weight with weight-related conditions. Plaintiffs in some cases claim complications such as stomach paralysis or other injuries.',
    ],
  },
  {
    q: 'What Is Rybelsus?',
    paragraphs: [
      'Rybelsus® is an oral form of semaglutide used alongside diet and exercise to improve blood sugar in adults with type 2 diabetes. Like other GLP-1 drugs, it may carry risks that patients discuss with their doctors and that may be raised in litigation.',
    ],
  },
  {
    q: 'Is there a cure for gastroparesis?',
    paragraphs: [
      'There is no simple cure for gastroparesis; treatment focuses on diet changes, medications, procedures, and managing complications under medical care. Legal claims seek compensation for harm alleged to result from unsafe drugs or inadequate warnings—not medical treatment advice.',
    ],
  },
  {
    q: 'How does Ozempic affect the body?',
    paragraphs: [
      'Ozempic mimics GLP-1 hormones to slow digestion, reduce appetite, and help regulate blood sugar. Some patients report severe gastrointestinal symptoms; whether Ozempic caused a specific injury depends on medical facts reviewed by your physicians and, in litigation, experts.',
    ],
  },
  {
    q: 'What should I do if harmed by ozempic or other weight loss drugs? How do I file an Ozempic lawsuit?',
    paragraphs: [
      'Seek medical care for urgent symptoms, document your prescription history and diagnoses, and avoid signing releases from insurers or manufacturers without legal advice. Contact Morgan & Morgan for a free case evaluation—we can explain deadlines, potential defendants, and next steps if you may have a claim.',
    ],
  },
  {
    q: 'What Is Trulicity?',
    paragraphs: [
      'Trulicity® (dulaglutide) is a once-weekly injectable GLP-1 receptor agonist for type 2 diabetes; it has been associated in reports and litigation with serious digestive complications in some users.',
    ],
  },
  {
    q: 'What Is Zepbound™?',
    paragraphs: [
      'Zepbound™ (tirzepatide) is FDA-approved for chronic weight management in certain adults. Like other incretin drugs, it may carry risks that should be discussed with a healthcare provider and may be relevant to injury-related legal claims.',
    ],
  },
  {
    q: 'Why should I hire a weight loss drug lawyer at Morgan & Morgan?',
    paragraphs: [
      'Drug injury cases involve complex science, federal warnings, and well-funded manufacturers. Morgan & Morgan has the resources to retain experts, investigate labeling and marketing, and pursue fair compensation while you focus on recovery.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation? Does Morgan & Morgan offer free consultations?',
    paragraphs: [
      'Yes—we offer free, confidential case evaluations for weight loss drug injuries. There is no upfront fee to speak with our team about whether you may have a claim.',
    ],
  },
  {
    q: 'How much does it cost to hire a weight loss drug attorney at a law firm like Morgan & Morgan?',
    paragraphs: [
      'Our Fee Is Free® means you pay nothing upfront and owe no attorney fees unless we win your case, subject to your written agreement and applicable law.',
    ],
  },
  {
    q: 'Who will be on my case team for my weight loss drug lawsuit?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical or pharmaceutical experts who analyze records and develop your claim.',
    ],
  },
  {
    q: 'When do I meet with my weight loss and diabetes drug attorney?',
    paragraphs: [
      'After you reach out, we schedule time to review your medication history, injuries, and options. You will have ongoing access to your legal team as your case moves forward.',
    ],
  },
]
</script>
