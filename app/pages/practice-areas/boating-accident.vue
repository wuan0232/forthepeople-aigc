<template>
  <PracticeAreaPage>
    <PracticeAreaHero
      breadcrumb-label="Boating Accident"
      title="Boating Accident Lawyers"
      lead="When negligence on the water causes serious harm, our boating accident attorneys fight for the compensation you deserve."
    />

    <PracticeAreaMeetLawyers
      title="Meet Our Boating Accident Attorneys"
      intro="Our attorneys handle boating accident claims, representing victims injured on personal watercraft, commercial vessels, and boats. We fight for fair compensation and guide you through the legal process."
      :lawyers="lawyers"
      aria-label="Boating accident attorneys"
      centered
    />

    <PracticeAreaTakeaways title="Key Takeaways" :blocks="takeaways" />

    <PracticeAreaWaysHelp :items="waysHelp">
      <p class="ca-ways-view-more">
        <a href="#practice">
          View more
          <span class="icon-box" aria-hidden="true">
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M6 2v8M3 7l3 3 3-3" stroke-width="1.5" />
            </svg>
          </span>
        </a>
      </p>
    </PracticeAreaWaysHelp>

    <PracticeAreaTestimonials :clients="clients" />

    <PracticeAreaLawsuit title="Boating accident cases need three things." :requirements="lawsuitReqs" />

    <PracticeAreaGuidePromo
      heading-id="boating-rights-heading"
      title="Boating Accidents – Understanding Your Rights"
      description="Boating accidents cause severe injuries, damage, or fatalities. Often due to negligence or unsafe conditions, understanding maritime laws and liability is crucial for victims."
      link-label="Read more"
      link-href="#guide"
    />

    <PracticeAreaDifference
      variant="white"
      heading-id="boating-diff-heading"
      title="Morgan & Morgan's Boat & Watercraft Accident Lawyers Make All the Difference"
      :blocks="differenceBlocks"
    />

    <PracticeAreaFight :stats="stats" :partners="partners" />

    <SiteLeadFeeSection preset-case-type="Boating Accident" />

    <PracticeAreaInjuryTypes
      heading-id="boating-injuries-heading"
      title="Common Boating Accident Injuries"
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
      region-label="Boating accident frequently asked questions"
      :reviewed-by="{ name: 'Keith Michael Goan', date: 'May 12, 2025' }"
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

useHead({
  title: 'Boating Accident Lawyers | Morgan & Morgan',
  meta: [
    {
      name: 'description',
      content:
        'Meet our boating accident attorneys, learn key takeaways after a watercraft crash, and explore your legal options. Free case evaluation.',
    },
  ],
})

const lawyers = [
  { name: 'Keith Michael Goan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&fit=crop' },
  // { name: 'R. Ryan Sainz', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop' },
  { name: 'Erby J. Fischer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop' },
  { name: 'Joe Harrison Wade, II', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop' },
  { name: 'Jami Leigh Chalgren', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop' },
  { name: 'Douglas Price', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fit=crop' },
]

const takeaways: TextBlock[] = [
  {
    title: 'Operator Negligence Causes Most Boating Accidents',
    text: 'A significant number of boating accidents are caused by operator negligence, distracted driving on the water, or intoxication behind the helm.',
  },
  {
    title: 'Injuries Can Be Severe or Fatal',
    text: 'Boating accidents can result in catastrophic injuries, permanent disability, or wrongful death due to the dangers inherent in water recreation.',
  },
  {
    title: 'Multiple Parties May Be Liable',
    text: 'Depending on the circumstances, liability may extend to the boat operator, the vessel owner, or the company that rented the watercraft.',
  },
  {
    title: 'Get Help Recovering Your Damages',
    text: 'If you were hurt in a boating accident, contact Morgan & Morgan for experienced legal help pursuing the compensation you deserve.',
  },
]

const waysHelp: IconCard[] = [
  {
    title: 'Jet Ski Accidents',
    text: 'Jet Skis are fast but dangerous due to reckless use or collisions. Our attorneys help victims recover compensation for medical bills and lost wages.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 32l12-16 16 8-4 12-12-4-12-4z"/><circle cx="14" cy="34" r="2"/><circle cx="34" cy="30" r="2"/></svg>`,
  },
  {
    title: 'Cruise Ship Incidents',
    text: 'Slips and falls, fires, or unsafe conditions can harm passengers and crew. We investigate negligence, medical errors, and violations to seek compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 28h36l-4-12H10l-4 12z"/><path d="M12 28v6M36 28v6"/></svg>`,
  },
  {
    title: 'Coast Guard Boat Accidents',
    text: 'Coast Guard vessels face high risks, but crashes, errors, or equipment failures cause serious injuries. We hold negligent parties accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="14"/><path d="M24 10v4M24 34v4M10 24h4M34 24h4"/></svg>`,
  },
  {
    title: 'Fireboat Accidents',
    text: 'Fireboats are at risk from rapid maneuvers, hazards, or mechanical failures. Our attorneys investigate negligence, faulty equipment, and improper training.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8c-4 8-12 10-12 18a12 12 0 0 0 24 0c0-8-8-10-12-18z"/></svg>`,
  },
  {
    title: 'Speedboat Collisions',
    text: 'Speedboats are dangerous when operated recklessly, causing severe injuries. We hold negligent boaters, rental companies, and manufacturers accountable.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="12"/><path d="M24 12v4M24 32v4M16 20l3 2M29 26l3 2"/></svg>`,
  },
  {
    title: 'Sailboat Accidents',
    text: 'Sailboats risk capsizing, rough weather, and collisions. Our attorneys investigate negligence, poor maintenance, and defects to secure compensation.',
    icon: `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 8l16 28H8L24 8z"/><path d="M24 36v4"/></svg>`,
  },
]

const differenceBlocks: TextBlock[] = [
  {
    title: 'Holding Negligent Boat Operators Accountable',
    text: 'Boat and watercraft accident claims often face complex defenses, from rental-waiver issues to large insurers shifting blame. We dig into every detail to fight for full compensation.',
  },
  {
    title: 'Covering All Types of Boat & Watercraft Cases',
    text: 'Recreational boat crashes, jet-ski collisions, charter-vessel injuries, propeller accidents, and commercial boat incidents—we handle the full range of maritime injury claims.',
  },
  {
    title: 'Proven Experience, Powerful Results',
    text: 'With 35+ years of experience, more than $30 billion recovered, and over 1,000 trial-ready attorneys nationwide, Morgan & Morgan has the power and depth to take on big insurers and boat operators.',
  },
  {
    title: 'Legal Help with No Upfront Costs',
    text: "You'll get full support from attorneys, maritime experts, investigators, and a dedicated legal team. Free case review, 24/7 support, and The Fee Is Free® promise means you owe nothing unless we win.",
  },
]

const lawsuitReqs = [
  'Proof of negligence',
  'Maritime and boating law jurisdiction',
  'Documented injuries or losses',
]

const commonInjuries: TextBlock[] = [
  {
    title: 'Drowning',
    text: 'Drowning is one of the most common and tragic outcomes of boating accidents. Lack of life jackets, operator negligence, and vessel capsizing are major contributing factors.',
  },
  {
    title: 'Lacerations & Amputations',
    text: 'Sharp metal edges, propeller accidents, and entanglements can cause severe lacerations or even amputations, often requiring extensive medical treatment and rehabilitation.',
  },
  {
    title: 'Burns and Electrocution',
    text: 'Fires, fuel explosions, and faulty electrical systems on boats can result in severe burns or electrocution injuries, which may require extensive treatment and skin grafts.',
  },
  {
    title: 'Traumatic Brain Injuries (TBI) & Concussions',
    text: 'Head injuries from boating accidents can result from collisions, falls, or being thrown overboard. TBIs and concussions can lead to long-term cognitive and physical impairments.',
  },
  {
    title: 'Spinal Cord Injuries & Paralysis',
    text: 'High-impact crashes, falls, or diving accidents can cause spinal damage, potentially leading to partial or complete paralysis and lifelong mobility challenges.',
  },
  {
    title: 'Broken Bones and Fractures',
    text: 'Boating accidents can throw passengers against hard surfaces or into the water, causing broken bones and fractures that may require surgery and long-term recovery.',
  },
]

const learnLeft: LearnLink[] = [
  { title: 'The Real Risks Barge Workers Face (and What Happens After an Injury)', href: '#blog' },
  { title: 'Boat Accident Lawyer Near Me', href: '#blog' },
  { title: 'Boating Accident Lawyers', href: '#blog' },
  { title: "Why More Cruise Ship Drownings Happen Than You'd Think", href: '#blog' },
  { title: '5 Paddleboarding Must-Haves That Could Save Your Life', href: '#blog' },
]

const learnRight: LearnLink[] = [
  {
    title: 'Maritime Injuries & Wrongful Death: How the Law Protects Victims and Families',
    href: '#blog',
  },
  { title: 'Maritime & Admiralty Lawyers', href: '#blog' },
  { title: 'What Happens After a Commercial Fishing Accident?', href: '#blog' },
  { title: 'Overboard and Overlooked: The Safety Failures Behind Cruise-Ship Falls', href: '#blog' },
  {
    title: 'Offshore Injuries and the Jones Act: Your Rights, Your Recovery, Your Next Steps',
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
      'Maritime and boating cases require thorough investigation—we bring experienced attorneys and resources to every claim.',
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
  'What are the common causes and types of boating accidents?',
  'What are common injuries suffered in boating accidents?',
  'Do I need a lawyer for a boating accident?',
  'How do I prove fault for my boating accident?',
  'How do I prove negligence for a boating accident claim?',
  'What types of damages are available in boating accidents?',
]

const faqItems: FaqItem[] = [
  {
    q: 'What are the common causes and types of boating accidents?',
    paragraphs: [
      'Common causes include operator negligence, intoxication, speeding, equipment failure, and unsafe conditions. Types range from jet-ski and speedboat collisions to cruise ship incidents and capsizing.',
    ],
  },
  {
    q: 'What are common injuries suffered in boating accidents?',
    paragraphs: [
      'Injuries may include drowning, traumatic brain injury, spinal cord damage, lacerations, burns, electrocution, and broken bones.',
    ],
  },
  {
    q: 'Do I need a lawyer for a boating accident?',
    paragraphs: [
      'Maritime and boating claims can involve complex liability and insurance defenses. An experienced attorney helps protect your rights and pursue fair compensation.',
    ],
  },
  {
    q: 'How do I prove fault for my boating accident?',
    paragraphs: [
      'Evidence may include witness statements, operator records, maintenance logs, photos, Coast Guard reports, and expert analysis of how the incident occurred.',
    ],
  },
  {
    q: 'How do I prove negligence for a boating accident claim?',
    paragraphs: [
      'You generally must show the responsible party owed a duty of care, breached that duty, and caused your injuries. Our team gathers evidence to establish each element.',
    ],
  },
  {
    q: 'What types of damages are available in boating accidents?',
    paragraphs: [
      'Depending on your case, you may recover medical expenses, lost wages, pain and suffering, property damage, and other losses permitted under applicable law.',
    ],
  },
  {
    q: 'Do I have to pay for a consultation for a personal injury claim?',
    paragraphs: ['No. Morgan & Morgan offers free, no-obligation case evaluations for boating accident victims.'],
  },
  {
    q: 'Who will be on my case team to work on my boating accident case?',
    paragraphs: [
      'Your team may include trial attorneys, paralegals, investigators, and maritime experts who support your claim from investigation through resolution.',
    ],
  },
  {
    q: 'When do I meet with my boat accident attorney?',
    paragraphs: [
      'After you contact us, an attorney or case staff member will typically reach out within one business day to discuss your accident and next steps.',
    ],
  },
  {
    q: 'How much does it cost to hire a boat accident lawyer at Morgan & Morgan?',
    paragraphs: ['The Fee Is Free®—you pay nothing upfront and owe no attorney fees unless we win your case.'],
  },
  {
    q: 'Why should I hire a personal injury law firm like Morgan & Morgan?',
    paragraphs: [
      'We are America\'s largest injury law firm, with the resources to investigate boating claims, retain experts, and take on insurers and negligent operators.',
    ],
  },
]
</script>
