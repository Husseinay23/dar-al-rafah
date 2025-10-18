export interface Topic {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Media {
  id: string
  filename: string
  alt?: string
  caption?: string
  url: string
  mimeType: string
  size: number
}

export interface Lesson {
  id: string
  title: string
  slug: string
  body?: string
  videoUrl?: string
  duration?: number
  order?: number
  resources?: Array<{
    label: string
    url: string
    type: 'pdf' | 'link' | 'video'
  }>
}

export interface Course {
  id: string
  title: string
  slug: string
  summary?: string
  description?: string
  cover?: Media
  level: 'beginner' | 'intermediate' | 'advanced'
  topics?: Topic[]
  duration?: number
  lessons?: Lesson[]
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface News {
  id: string
  title: string
  slug: string
  excerpt?: string
  body?: string
  category?: Topic
  cover?: Media
  author: string
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface Paper {
  id: string
  title: string
  slug: string
  abstract?: string
  authors: Array<{
    name: string
    affiliation?: string
    email?: string
  }>
  year: number
  topics?: Topic[]
  pdf?: Media
  doi?: string
  status: 'draft' | 'published'
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number
  nextPage?: number
}

export interface ApiError {
  message: string
  status: number
}
