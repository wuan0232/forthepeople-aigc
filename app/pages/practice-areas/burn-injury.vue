<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Burn Injury"
      title="Burn Injury Lawyers"
      lead="When negligence causes serious burn injuries, our attorneys fight for medical care, lost wages, and the compensation you need to rebuild your life."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Burn Injury Lawyers"
      intro="Our dedicated attorneys handle every detail of your case, fighting for fair compensation and justice while you focus on healing and rebuilding your life."
      :lawyers="lawyers"
      aria-label="Burn injury attorneys"
      centered
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaResultsCarousel
      :results="caseResults"
      default-type="Burn Injury"
      aria-label="Burn injury verdicts and settlements"
    />

    <PracticeAreaWaysPi
      variant="white"
      intro="Burn injuries leave lasting pain, trauma, and financial strain. We fight to hold negligent parties responsible and demand answers for those affected."
      :cards="waysPiCards"
      :case-types="otherCauses"
      case-types-title="Other Causes, Like:"
      view-all-label="Learn more"
      view-all-href="#practice"
    />

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Fire injury cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaGuidePromo
      heading-id="burn-steps-heading"
      title="Steps to Take After a Burn Injury"
      description="From immediately getting to safety to seeking medical attention, these 8 steps can help you stay safe, protect your rights, and seek the compensation you deserve."
      link-label="Learn more"
      link-href="#guide"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="burn-diff-heading"
      title="Morgan & Morgan's Burn Injury Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Burn Injury" />

    <PracticeAreaInjuryTypes
      heading-id="burn-injuries-heading"
      title="Common Fire and Burn Injuries"
      :items="commonInjuries"
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
      region-label="Burn injury frequently asked questions"
      :reviewed-by="{ name: 'Benjamin Houston Wilson', date: 'February 25, 2025' }"
    />
  </PracticeAreaPage>
</template>

<script setup lang="ts">
import type {
  CaseResult,
  ClientTestimonial,
  FaqItem,
  LearnLink,
  PartnerSlide,
  StatItem,
  TextBlock,
  WaysPiCard,
} from '~/types/practice-area'

useHead({
  title: 'Burn Injury Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our burn injury attorneys, explore case results, and learn your legal options after a fire or burn injury. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'John Morgan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'Mike Morgan', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Daniel J. Morgan', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop' },
  { name: 'Matt Morgan', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Keith Michael Goan', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Erby J. Fischer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
]

const caseResults: CaseResult[] = [
  { amount: '$30,000,000', location: '2024', type: 'Burn Injury' },
  { amount: '$20,800,000', location: 'Atlanta, GA • 2024', type: 'Burn Injury' },
  { amount: '$17,000,000', location: 'Gainesville, FL • 2025', type: 'Catastrophic Event' },
  { amount: '$12,500,000', location: 'Tampa, FL • 2023', type: 'Burn Injury' },
  { amount: '$9,200,000', location: 'Orlando, FL • 2022', type: 'Burn Injury' },
  { amount: '$6,750,000', location: 'Jacksonville, FL • 2024', type: 'Burn Injury' },
]

const takeaways: TextBlock[] = [
  {
    title: 'Burn Injuries Cause Lasting Physical Trauma',
    text: 'Serious burn injuries can result in extreme pain, permanent scarring, disfigurement, and a lengthy recovery that affects every aspect of your life.',
  },
  {
    title: 'Long-Term Medical Care Is Often Necessary',
    text: 'Severe burns often require multiple surgeries, skin grafts, physical therapy, and psychological support, all of which can add up to significant costs over time.',
  },
  {
    title: 'Negligence Is Often Behind Burn Injuries',
    text: 'Burn injuries are frequently caused by defective products, industrial fires, chemical exposure, or workplace accidents that could have been prevented.',
  },
  {
    title: 'Pursue Compensation for Your Suffering',
    text: 'If your burn injury was caused by someone else\'s negligence, contact Morgan & Morgan to fight for the compensation you need to recover.',
  },
]

const waysPiCards: WaysPiCard[] = [
  {
    title: 'Home & Residential Fires',
    text: 'Fires in houses, apartments, or hotels can lead to devastating injuries. We fight for victims when landlords, property owners, or other parties fail to keep people safe.',
    linkHref: '#practice',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 22h28v18H10z"/><path d="M16 22V14l8-6 8 6v8"/><path d="M22 32h4"/></svg>`,
  },
  {
    title: 'Commercial Fires',
    text: 'Faulty wiring, code violations, and poor maintenance can ignite destructive fires. Our lawyers move quickly to hold negligent parties accountable.',
    linkHref: '#practice',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="16" width="24" height="22" rx="2"/><path d="M18 16V10h12v6"/><path d="M20 28h8"/></svg>`,
  },
  {
    title: 'Defective Products',
    text: 'Fires caused by faulty appliances or failed safety devices—like smoke alarms or sprinklers—can cause severe harm. We take on manufacturers and others who cut corners on safety.',
    linkHref: '#practice',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8v12M28 8v12"/><rect x="14" y="20" width="20" height="18" rx="2"/><path d="M24 28c2 4 0 8-2 10"/></svg>`,
  },
]

const otherCauses = [
  'Vehicle Fires',
  'Chemical Burns',
  'Electrical Malfunctions',
  'Boat Fires',
  'Flammable Materials',
  'Fuel Gas Fires (Explosions)',
  'Hot Liquids or Steam',
  'Battery Fires',
]

const lawsuitReqs = ['Injury or damages', 'Causation', 'Source of negligence']

const differenceBlocks: TextBlock[] = [
  {
    title: "Don't Be Lowballed by an Insurance Company",
    text: 'When a fire or explosion causes serious burns, insurers and negligent parties often try to minimize the damage. We dig into accident reports, medical records, and violations to fight for compensation.',
  },
  {
    title: 'Covering All Types of Burn Injury Cases',
    text: 'Residential fires, industrial explosions, chemical burns, defective products, hotel or rental property fires; we handle all burn injury claims and hold the responsible parties accountable.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'Backed by decades of experience, billions recovered, and a nationwide network of trial-ready attorneys, Morgan & Morgan has the strength and scale to take on major insurers and big corporations.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: 'You\'ll receive a full legal team, including attorneys, investigators, and burn-injury specialists. Free case review, 24/7 support, and The Fee Is Free®; you pay nothing unless we win.',
  },
]

const commonInjuries: TextBlock[] = [
  {
    title: 'Thermal Burns',
    text: 'Caused by contact with flames, hot surfaces, or scalding liquids, these burns can range from minor to severe, potentially causing deep tissue damage.',
  },
  {
    title: 'Smoke Inhalation',
    text: 'Breathing in smoke or toxic fumes during a fire can damage the lungs, leading to respiratory distress, oxygen deprivation, or long-term pulmonary conditions.',
  },
  {
    title: 'Chemical Burns',
    text: 'Exposure to caustic substances like acids or cleaning agents can cause severe burns, leading to tissue damage and possible organ complications.',
  },
  {
    title: 'Electrical Burns',
    text: 'Contact with live electrical currents can cause deep burns, nerve damage, and even cardiac arrest or internal injuries.',
  },
  {
    title: 'Inhalation Injuries',
    text: 'Hot air, steam, or chemical vapors can burn the airways, causing swelling, breathing difficulties, and long-term respiratory issues.',
  },
  {
    title: 'Scarring and Disfigurement',
    text: 'Severe burns can result in permanent scarring, loss of mobility in affected areas, and emotional trauma due to visible disfigurement.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'Menorah Fire Safety: Tips for a Happier Hanukkah', href: '#blog' },
  { title: 'What Is the Claims Process for an Apartment Fire Injury?', href: '#blog' },
  { title: 'Burn Injury Lawyers', href: '#blog' },
  { title: 'Explosions: By the Numbers', href: '#blog' },
  { title: 'Ions, Fires, and Tears - Oh My', href: '#blog' },
]

const learnRight: LearnLink[] = [
  { title: 'When the Flames Break Out: Legal Help After a Commercial Fire', href: '#blog' },
  { title: 'Denied Fire Insurance Claim? Here\'s What to Do Next', href: '#blog' },
  { title: 'What Happens if Your Apartment Burns Down?', href: '#blog' },
  { title: '8 Steps to Take Following a Fire and Burn Injury', href: '#guide' },
  { title: 'What Are My Options if I Sustain a Burn Injury at Work?', href: '#blog' },
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
      'Burn injury cases demand thorough investigation and relentless advocacy—we bring both to every claim we handle.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop',
  },
  {
    name: 'Mike Morgan',
    role: 'Managing Partner, Morgan & Morgan',
    quote:
      'When insurers underestimate the devastation of a burn injury, we fight for the full compensation our clients deserve.',
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
  'What should I do immediately after a burn injury?',
  'What types of compensation are typically available for burn injury cases?',
  'How does a personal injury attorney prove negligence in a burn injury case?',
  'Why should I hire a burn injury attorney at Morgan & Morgan?',
  'Do I have to pay for a consultation?',
  'Who will be on my case team?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What should I do immediately after a burn injury?',
    paragraphs: [
      'Get to safety, call 911, seek emergency medical care, document the scene if you can do so safely, and avoid giving recorded statements to insurers before speaking with an attorney.',
    ],
  },
  {
    q: 'What types of compensation are typically available for burn injury cases?',
    paragraphs: [
      'You may recover medical expenses, lost wages, pain and suffering, scarring and disfigurement, rehabilitation costs, and future care needs depending on the severity of your injuries.',
    ],
  },
  {
    q: 'How does a personal injury attorney prove negligence in a burn injury case?',
    paragraphs: [
      'We gather evidence such as fire reports, expert analysis, maintenance records, product defects, witness statements, and medical documentation to show another party\'s negligence caused your burns.',
    ],
  },
  {
    q: 'Why should I hire a burn injury attorney at Morgan & Morgan?',
    paragraphs: [
      'Burn cases are complex and high-stakes. Morgan & Morgan has the resources, investigators, and trial attorneys needed to take on insurers, property owners, employers, and manufacturers.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for burn injury victims and families.'],
  },
  {
    q: 'Who will be on my case team?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and medical experts who document the full impact of your burn injuries.',
    ],
  },
  {
    q: 'When do I meet with my lawyer?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your injury and next steps.',
    ],
  },
  {
    q: 'How much does it cost to hire a burn injury lawyer at Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'What are common types of burn injuries and their severity levels?',
    paragraphs: [
      'Burns are classified by degree (first through fourth) and type, including thermal, chemical, electrical, and inhalation injuries. Severity affects treatment needs and compensation.',
    ],
  },
  {
    q: 'What are the common causes of burn injuries?',
    paragraphs: [
      'Common causes include residential and commercial fires, defective products, workplace accidents, vehicle fires, chemical exposure, and explosions.',
    ],
  },
  {
    q: 'What are the long-term effects of burn injuries on my quality of life?',
    paragraphs: [
      'Long-term effects may include chronic pain, scarring, mobility limitations, psychological trauma, and ongoing medical care. We fight to account for these losses in your claim.',
    ],
  },
  {
    q: 'How can a burn injury lawyer help maximize my compensation?',
    paragraphs: [
      'An experienced attorney documents all damages, retains experts, negotiates with insurers, and prepares your case for trial if a fair settlement is not offered.',
    ],
  },
  {
    q: 'Can I still file a claim if I was partially at fault for my burn injury?',
    paragraphs: [
      'Comparative fault rules vary by state. You may still recover compensation reduced by your share of fault. An attorney can explain how the law applies to your case.',
    ],
  },
  {
    q: 'How long does it take to settle a burn injury lawsuit?',
    paragraphs: [
      'Timelines vary based on injury severity, liability disputes, and whether the case goes to trial. Complex burn cases often take longer because full damages must be established.',
    ],
  },
  {
    q: 'What evidence do I need to strengthen my burn injury claim?',
    paragraphs: [
      'Helpful evidence includes medical records, photos of injuries and the scene, fire or incident reports, witness statements, employment records, and expert opinions on cause and damages.',
    ],
  },
  {
    q: 'Can I sue my employer if I suffered a burn injury at work?',
    paragraphs: [
      'Workplace burn claims may involve workers\' compensation, third-party liability, or both depending on who caused the injury. An attorney can review your options.',
    ],
  },
]
</script>
