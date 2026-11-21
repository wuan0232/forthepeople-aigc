import type { FaqItem, IconCard, TextBlock } from '~/types/practice-area'

export const carRecovery = {
  hero: {
    breadcrumbLabel: 'Car Accident',
    title: 'Medical Care After a Car Accident',
    lead: 'Learn what to prepare for a medical visit after a car accident, how to describe your symptoms, and what to ask about follow-up care. Contact your preferred office to discuss appointment availability.',
  },
  seo: {
    title: 'Medical Care After a Car Accident | For The People Clinic',
    description: 'Prepare for a medical visit after a car accident. Organize existing records, discuss symptoms and follow-up, and contact our Syracuse, Dallas, or Flushing office.',
  },
  concerns: [
    { icon: '', title: 'Neck & Shoulder Discomfort', text: 'Tell your doctor where you feel discomfort, when it started, and whether turning your head or reaching feels different. Mention any neck or shoulder problems you had before the accident.' },
    { icon: '', title: 'Back Pain & Daily Movement', text: 'Describe how sitting, standing, walking, or sleeping has changed since the crash. Explain which movements are difficult and bring any previous spine reports you already have.' },
    { icon: '', title: 'Headaches & Changes You Notice', text: 'Tell your clinician about headaches or changes in concentration, balance, or sleep after the crash. These observations help the conversation but cannot establish a diagnosis. Do not wait for a routine visit if emergency warning signs appear.' },
    { icon: '', title: 'Other Injuries & Previous Care', text: 'Mention other painful areas and any care you received at the scene, emergency department, or another office. Share discharge instructions so your clinician understands what has already been assessed.' },
  ] satisfies IconCard[],
  preparation: [
    { title: 'Your Accident & Symptom Notes', text: 'Write down when the accident happened, what you noticed afterward, and what has changed since then. Include questions about sleep, everyday activities, or returning to work.' },
    { title: 'Existing Medical Records', text: 'Gather discharge papers, consultation notes, and reports from tests you have already had. Ask the office how to share imaging files and whether records should be sent before your visit.' },
    { title: 'Medicines & Medical History', text: 'Prepare a list of current medicines, supplements, allergies, previous injuries, and relevant conditions. Include anything prescribed after the accident and questions about its instructions.' },
    { title: 'Your Appointment Details', text: 'Call your preferred office to confirm availability, the location, any referral requirements, and what identification or payment and insurance information to bring. Confirm the appointment before traveling.' },
  ] satisfies TextBlock[],
  visit: [
    { title: 'Explain What Has Changed', text: 'Start with your main concern and how it affects your day. Discuss the accident, your symptoms, and care you have already received so the doctor can consider your individual situation.' },
    { title: 'Review the Information You Have', text: 'Ask how existing reports relate to your concerns and whether further evaluation is appropriate. Additional imaging, referrals, or treatment depend on the clinical assessment; they are not automatic.' },
    { title: 'Leave With Clear Next Steps', text: 'Ask what the next step is, who will arrange it, and whom to contact with questions. Before you leave, clarify any instructions you do not understand.' },
  ] satisfies TextBlock[],
  followUp: [
    { title: 'Keep Your Instructions Together', text: 'Save visit summaries and follow-up plans in one place. Confirm who will review any results and whether another appointment needs to be scheduled.' },
    { title: 'Note Changes Between Visits', text: 'Keep brief notes about symptoms and activities you find difficult. Contact your treating clinician about new or worsening concerns; use emergency care for urgent warning signs.' },
    { title: 'Ask About Daily Activities', text: 'Discuss driving, work, exercise, and other activities with your treating clinician. Follow the advice given for your situation rather than a fixed recovery timetable.' },
  ] satisfies TextBlock[],
  faqAside: ['Planning your first visit?', 'Already seen at an emergency department?', 'Unsure which office to call?'],
  faqItems: [
    { q: 'Can I contact the clinic if I have already been to the emergency department?', paragraphs: ['Yes. Tell the office when you were seen, what follow-up was recommended, and your main concern. The team can discuss appointment availability and whether the specialist is appropriate for your needs.', 'Bring the discharge instructions and existing reports. Follow the emergency department?s return precautions rather than waiting for a routine appointment if urgent symptoms develop.'] },
    { q: 'What should I bring to my first visit after a car accident?', paragraphs: ['Prepare your existing medical records, imaging reports, medication and allergy list, and a short account of the accident and symptoms. Write down the questions you most want answered.', 'Call ahead to confirm how to share images or records and whether you need a referral or other documents.'] },
    { q: 'Should I arrange a new scan before booking?', paragraphs: ['Contact the office about the records you already have and any appointment requirements. A clinician will decide whether additional testing is appropriate based on your history and evaluation; this page does not recommend a scan for every patient.'] },
    { q: 'Does the clinic treat every type of accident injury?', paragraphs: ['Dr. Li?s clinical focus includes complex spine conditions and brain and spine tumors. Contact the office to discuss whether his specialty fits your concern and whether a visit can be arranged.', 'This is a guide to preparing for care, not a promise that every injury can be treated at the clinic. Emergency conditions require emergency services.'] },
    { q: 'How long will recovery take?', paragraphs: ['There is no single timetable that applies to every accident or injury. Ask your treating clinician what to expect in your situation, when to follow up, and which changes should prompt an earlier review.'] },
    { q: 'How do I choose an office and ask about costs?', paragraphs: ['Use the office selector below for Syracuse, Dallas, or New York City in Flushing. Call to confirm location, appointment availability, and any payment or insurance questions before traveling.', 'Calling the office does not itself confirm an appointment. The clinic will explain the next steps.'] },
  ] satisfies FaqItem[],
}
