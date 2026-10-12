import type { CartItem } from '../../cart/model/types'

export interface Order {
  id: string
  items: CartItem[]
  total: number
  createdAt: string
}

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

export interface OrdersState {
  items: Order[]
  status: RequestStatus
  error: string | null
}
