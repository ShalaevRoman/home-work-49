export interface ProductRating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface ProductsState {
  items: Product[]
  categories: string[]
  selectedCategory: string | null
  currentProduct: Product | null
  status: RequestStatus
  error: string | null
}
