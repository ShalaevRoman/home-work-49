import { loadFromStorage, saveToStorage } from '../../../services/storage/localStorage'
import type { CartItem } from '../../cart/model/types'
import type { Order } from '../model/types'

/** Same rationale as authApi: no backend yet, so orders are persisted to localStorage. */
const ORDERS_STORAGE_KEY = 'orders'

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchOrdersRequest(): Promise<Order[]> {
  await delay()
  return loadFromStorage<Order[]>(ORDERS_STORAGE_KEY) ?? []
}

export async function createOrderRequest(items: CartItem[], total: number): Promise<Order> {
  await delay()
  const order: Order = {
    id: crypto.randomUUID(),
    items,
    total,
    createdAt: new Date().toISOString(),
  }
  const existing = loadFromStorage<Order[]>(ORDERS_STORAGE_KEY) ?? []
  saveToStorage(ORDERS_STORAGE_KEY, [order, ...existing])
  return order
}
