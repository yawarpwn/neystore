import { CATEGORIES } from '@/const'

export type ProductImage = {
  id: string
  url: string
  thumb: string
}

export type Productvideo = {
  id: string
  url: string
  title: string
  cover: string
}

export type Product = {
  id: string
  title: string
  price: number
  cost: number
  ranking: number
  category: keyof typeof CATEGORIES
  features: string[]
  details: { [key: string]: string }
  images: ProductImage[]
  video: Productvideo
}
