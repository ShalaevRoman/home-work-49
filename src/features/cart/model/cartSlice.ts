import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loadFromStorage } from '../../../services/storage/localStorage'
import type { CartState } from './types'

const CART_STORAGE_KEY = 'cart'

const initialState: CartState = loadFromStorage<CartState>(CART_STORAGE_KEY) ?? { items: [] }

export interface AddToCartPayload {
  productId: number
  title: string
  price: number
  image: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<AddToCartPayload>) {
      const existing = state.items.find((item) => item.productId === action.payload.productId)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.productId !== action.payload)
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.productId === action.payload)
      if (item) item.quantity += 1
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((item) => item.productId === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions
export const CART_STORAGE_KEY_EXPORT = CART_STORAGE_KEY
export default cartSlice.reducer
