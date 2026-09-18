export type ClinicDoctor = {
  slug: string
  name: string
  specialty: string
  bio: string
  detail: string
  focus: string[]
  programs: string[]
  differentiators: string[]
  experience: string[]
  education: string[]
  achievements: string[]
  publicationVenues: string[]
  researchHighlights: {
    title: string
    citation: string
    takeaway: string
  }[]
  research: string
  img?: string
}

export const CLINIC_DOCTORS: ClinicDoctor[] = [
  {
    slug: 'y-michael-li',
    name: 'Dr. Y. Michael Li, M.D., Ph.D.',
    specialty: 'Neurosurgeon',
    bio: 'Award-winning, fellowship-trained neurosurgeon specializing in complex spine disease and brain and spine tumors.',
    detail:
      'Dr. Yan Michael Li is a fellowship-trained spine and tumor neurosurgeon with a clinical focus on complex spine disease and brain and spine tumors. He develops individualized treatment plans using minimally invasive, computer-assisted, and robotic techniques when appropriate for each patient’s anatomy and goals.',
    focus: [
      'Herniated disc disease and nerve compression',
      'Degenerative spinal stenosis, trauma, and deformity',
      'Complex spine tumors and revision spine surgery',
      'Brain tumors, including gliomas, meningiomas, metastatic disease, and skull-base lesions',
      'Minimally invasive spinal surgery, navigation, and robotic-assisted techniques',
    ],
    programs: [
      'Minimally Invasive & Complex Spine Program',
      'Comprehensive Brain & Spine Tumor Program',
    ],
    differentiators: [
      'Minimally invasive spine procedures using incisions of less than one inch when clinically appropriate',
      'Robotic and navigated “GPS” precision spine surgery',
      'Laser spine surgery for rhizotomy and discectomy',
      'Endoscopic foraminotomy and discectomy for nerve decompression',
      'Non-fusion artificial disc replacement',
      'Revision-surgery strategies designed to reduce the likelihood of additional surgery when appropriate',
    ],
    experience: [
      'Clinical Assistant Professor at MD Anderson and SUNY; previously faculty at the University of Rochester',
      '15 years of Level I university trauma-center experience, including thousands of complex and revision spine cases',
      'National and international conference presenter and lecturer in minimally invasive spine surgery and neurosurgery',
      'More than half of referrals originate from other surgeons seeking revision or complex-spine expertise',
      'Cares for a number of physician and health-professional patients',
    ],
    education: [
      'M.D., Peking Union Medical College',
      'Ph.D., University of Texas MD Anderson Cancer Center',
      'Neurosurgical residency and enfolded complex spine fellowship, State University of New York',
      'Fellowship training at Dana-Farber Cancer Institute, Boston Children’s Hospital, and Brigham and Women’s Hospital / Harvard Medical School',
      'Neurosurgical Oncology Fellowship, University of Texas MD Anderson Cancer Center',
    ],
    achievements: [
      'Author of 76 peer-reviewed articles and book chapters, including work published in Nature Medicine, Cancer Cell, JAMA Oncology, Journal of Neurosurgery, Neurosurgery, and Spine.',
      'Recipient of the Bittner Award on Brain Tumor Research from the American Association of Neurological Surgeons.',
      'Recipient of awards from the Department of Defense Cancer Research Program.',
      'Patent for nanoparticle gene therapy adopted in an NCI clinical trial.',
    ],
    publicationVenues: [
      'Nature Medicine',
      'JAMA Oncology',
      'Cancer Cell',
      'Journal of Neurosurgery',
      'Neurosurgery',
      'Spine',
      'Clinical Spine Surgery',
      'Cancer Research',
      'Journal of Neuro-Oncology',
      'Global Spine Journal',
      'World Neurosurgery',
    ],
    researchHighlights: [
      {
        title: 'Amplification of LAPTM4B and YWHAZ contributes to chemotherapy resistance and recurrence of breast cancer.',
        citation: 'Li Y, Zou L, Li Q, Haibe-Kains B, Tian R, Li YM, et al. Nature Medicine. 2010;16(2):214–218.',
        takeaway: 'Identified key genes driving chemotherapy resistance and recurrence.',
      },
      {
        title: 'Association of the Extent of Resection With Survival in Glioblastoma: A Systematic Review and Meta-analysis.',
        citation: 'Brown TJ, Brennan MC, Li YM, et al. JAMA Oncology. 2016;2(6):773–779.',
        takeaway: 'Showed that a greater extent of resection is associated with longer survival.',
      },
      {
        title: 'The influence of maximum safe resection of glioblastoma on survival in 1229 patients.',
        citation: 'Li YM, Suki D, Hess K, Sawaya R. Journal of Neurosurgery. 2016;124(4):977–988.',
        takeaway: 'Landmark series supporting a maximum-safe-resection strategy.',
      },
      {
        title: 'Up-regulation of CXCR4 is essential for HER2-mediated tumor metastasis.',
        citation: 'Li YM, Pan Y, Wei Y, Cheng X, Zhou BP, Tan M, Xia W, Zhou X, Hortobagyi GN, Yu D, Hung MC. Cancer Cell. 2004;6(5):459–469.',
        takeaway: 'Established a mechanistic link between HER2 and CXCR4 in lung metastasis.',
      },
      {
        title: 'PI-3K/Akt induced HIF-1 activation independent of hypoxia in HER2 overexpressing cells.',
        citation: 'Li YM, Zhou BP, Deng J, Pan Y, Hung MC. Cancer Research. 2005;65(8):3257–3263.',
        takeaway: 'Demonstrated hypoxia-independent HIF-1 activation via HER2/PI-3K/Akt.',
      },
    ],
    research:
      'Dr. Li’s research focuses on maximal safe resection of brain and spine tumors, surgical outcomes in complex brain and spine surgery, cancer-specific targeted therapies, and local delivery approaches.',
    img: '/images/doctors/y-michael-li.webp',
  },
]

export function getClinicDoctorBySlug(slug: string): ClinicDoctor | undefined {
  return CLINIC_DOCTORS.find((d) => d.slug === slug)
}
