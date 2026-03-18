export interface GalleryItem {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  image: string
}
export interface GalleryType {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  image: string
}
export interface Product {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  name: string
  description: string
  price: string
  image: string
  rating: number
  reviewsCount: number
  isAvailable: boolean
}
export interface Category {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  name: string
  products: Product[]
}