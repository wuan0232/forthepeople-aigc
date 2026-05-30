export type TestimonialReview = {
  quote: string
  author: string
  year: number
}

export type TestimonialStory = {
  id: string
  title: string
  text: string
  imageSrc: string
  imageAlt: string
  variant?: 'standard' | 'large'
}

export type TestimonialResourceLink = {
  label: string
  href: string
}
