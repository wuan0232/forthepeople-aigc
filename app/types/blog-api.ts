export interface ApiArticle {
  id: string
  slug: string
  publicPath: string
  canonicalUrl: string
  title: string
  excerpt: string
  metaTitle: string | null
  metaDescription: string | null
  authorName: string | null
  coverImage: { url: string; alt: string; width?: number; height?: number } | null
  publishedAt: string | null
  updatedAt: string | null
  bodyHtml?: string
}
export interface ApiArticleList { items: ApiArticle[]; total: number; page: number; pageSize: number; schemaVersion: string }
