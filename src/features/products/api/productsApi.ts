import { baseApi } from '../../../services/api/baseApi'
import type { Product } from '../model/types'

export async function fetchProductsRequest(category?: string | null): Promise<Product[]> {
  const url = category ? `/products/category/${encodeURIComponent(category)}` : '/products'
  const { data } = await baseApi.get<Product[]>(url)
  return data
}

export async function fetchProductByIdRequest(id: number): Promise<Product> {
  const { data } = await baseApi.get<Product>(`/products/${id}`)
  return data
}

export async function fetchCategoriesRequest(): Promise<string[]> {
  const { data } = await baseApi.get<string[]>('/products/categories')
  return data
}
