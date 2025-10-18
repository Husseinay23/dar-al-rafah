import axios, { AxiosResponse } from 'axios'
import { ApiResponse, ApiError } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add locale parameter
api.interceptors.request.use((config) => {
  const locale = localStorage.getItem('i18nextLng') || 'ar'
  config.params = {
    ...config.params,
    locale,
  }
  return config
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status || 500,
    }
    return Promise.reject(apiError)
  }
)

export const apiService = {
  // Courses
  getCourses: async (params?: {
    page?: number
    limit?: number
    level?: string
    topics?: string[]
    sort?: string
  }): Promise<ApiResponse<any>> => {
    const response = await api.get('/courses', { params })
    return response.data
  },

  getCourse: async (slug: string): Promise<any> => {
    const response = await api.get(`/courses`, {
      params: { where: { slug: { equals: slug } } }
    })
    return response.data.docs[0]
  },

  // News
  getNews: async (params?: {
    page?: number
    limit?: number
    category?: string
    sort?: string
  }): Promise<ApiResponse<any>> => {
    const response = await api.get('/news', { params })
    return response.data
  },

  getNewsItem: async (slug: string): Promise<any> => {
    const response = await api.get(`/news`, {
      params: { where: { slug: { equals: slug } } }
    })
    return response.data.docs[0]
  },

  // Research Papers
  getPapers: async (params?: {
    page?: number
    limit?: number
    year?: number
    topics?: string[]
    sort?: string
  }): Promise<ApiResponse<any>> => {
    const response = await api.get('/papers', { params })
    return response.data
  },

  getPaper: async (slug: string): Promise<any> => {
    const response = await api.get(`/papers`, {
      params: { where: { slug: { equals: slug } } }
    })
    return response.data.docs[0]
  },

  // Topics
  getTopics: async (): Promise<ApiResponse<any>> => {
    const response = await api.get('/topics')
    return response.data
  },

  // Media
  getMedia: async (id: string): Promise<any> => {
    const response = await api.get(`/media/${id}`)
    return response.data
  },
}

export default api
