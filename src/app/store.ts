import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../features/auth'
import { cartReducer } from '../features/cart'
import { ordersReducer } from '../features/orders'
import { productsReducer } from '../features/products'
import { saveToStorage } from '../services/storage/localStorage'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: ordersReducer,
  },
})

store.subscribe(() => {
  saveToStorage('cart', store.getState().cart)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
