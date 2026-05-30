export type AboutFaqItem = {
  q: string
  paragraphs: string[]
}

export type AboutFaqSection = {
  id: string
  navLabel: string
  panelTitle: string
  items: AboutFaqItem[]
}
