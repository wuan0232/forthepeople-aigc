export type BlogTagLabel =
  | 'In The Community'
  | 'Premises Liability'
  | 'In The Media'
  | 'Product Recalls'
  | 'Recent Data Breaches'
  | 'Social Media Harm'
  | 'Maritime & Admiralty'
  | 'Medical Malpractice'

export type BlogPost = {
  slug: string
  title: string
  href: string
  readMinutes: number
  tag: BlogTagLabel
  imageSrc?: string
  imageAlt?: string
  featured?: boolean
  titleUnderline?: boolean
  thumbMuted?: boolean
  thumbNews?: boolean
}

export type BlogIllustrationCard = {
  title: string
  text: string
  href: string
  icon?: string
  imageSrc?: string
  imageAlt?: string
  accent?: boolean
}

export type BlogCaseCard = {
  title: string
  text: string
  href: string
}

export type BlogListItem = {
  title: string
  href: string
}

export type BlogCategoryCard = {
  slug: string
  title: string
  href: string
  publishedAt: string
  publishedIso: string
  categoryLabel: string
  summary?: string
  imageSrc?: string
  imageAlt?: string
}

export type BlogCategoryArchiveMeta = {
  slug: string
  title: string
  path: string
  postsPerPage: number
  totalPages: number
}

export type BlogArticleSection = {
  heading: string
  paragraphs: string[]
}

export type BlogArticle = {
  slug: string
  title: string
  summary: string
  categoryLabel: string
  readMinutes: number
  publishedIso: string
  imageSrc?: string
  imageAlt?: string
  sections: BlogArticleSection[]
}
