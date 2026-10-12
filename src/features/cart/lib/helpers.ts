import type { CartItem } from '../model/types'

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function getCartItemsCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0)
}
